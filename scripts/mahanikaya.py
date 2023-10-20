#!/usr/bin/env python3

import json, csv
from typing import List, Dict, TypedDict
from splendidmoons.calendar_year import YEAR_TYPE_NAME, CalendarYear
from splendidmoons.event_helpers import CalendarEvent, year_moondays, year_moondays_associated_events
from splendidmoons.ical import IcalVEvent, ical_vevent, write_ical

FROM_YEAR = 2000
TO_YEAR = 2100

class JsonEvent(TypedDict):
    date: str
    # day_text: str
    note: str
    label: str
    phase: str
    season: str
    season_number: int
    season_total: int
    days: int

def _to_json_event(x: CalendarEvent) -> JsonEvent:
    return JsonEvent(
        date = x['date'].isoformat(),
        # day_text = x['day_text'],
        note = x['note'],
        label = x['label'],
        phase = x['phase'],
        season = x['season'],
        season_number = x['season_number'],
        season_total = x['season_total'],
        days = x['days'],
    )

ICAL_NAME = "Uposatha Moondays (Mahānikāya)"

MOON_PHASE_DAY_TEXT: Dict[str, str] = {
    "new": "New Moon",
    "waxing": "Waxing Moon", # First Quarter
    "full": "Full Moon",
    "waning": "Waning Moon", # Last Quarter
}

ICON_MOON_PHASE_DAY_TEXT: Dict[str, str] = {
    "new": "🌑", # https://emojipedia.org/new-moon
    "waxing": "🌓", # https://emojipedia.org/first-quarter-moon
    "full": "🌕", # https://emojipedia.org/full-moon
    "waning": "🌗", # https://emojipedia.org/last-quarter-moon
}

ICON_FACE_MOON_PHASE_DAY_TEXT: Dict[str, str] = {
    "new": "🌚", # https://emojipedia.org/new-moon-face
    "waxing": "🌛", # https://emojipedia.org/first-quarter-moon-face
    "full": "🌝", # https://emojipedia.org/full-moon-face
    "waning": "🌜", # https://emojipedia.org/last-quarter-moon-face
}

SEASON_TO_LETTER: Dict[str, str] = {
    "Hemanta": "H",
    "Gimha": "G",
    "Vassāna": "V",
}

def custom_calendar_event_to_str(e: CalendarEvent, icons = False, faces = False, short = False) -> str:
    if e['note'] != "":
        return e['note']

    if e['phase'] == "":
        return ""

    phase_text = ""
    if icons:
        if faces:
            phase_text = ICON_FACE_MOON_PHASE_DAY_TEXT[e['phase']]
        else:
            phase_text = ICON_MOON_PHASE_DAY_TEXT[e['phase']]
    else:
        phase_text = MOON_PHASE_DAY_TEXT[e['phase']]

    if e['phase'] == "waxing" or e['phase'] == "waning":
        return phase_text

    season_text = ""
    if short:
        season_text = SEASON_TO_LETTER[e['season']]
    else:
        season_text = e['season']

    if short:
        # 🌝 15d H 6/8
        # 🌚 14d G 3/8
        return "{} {}d {} {}/{}".format(phase_text,
                                        e['days'],
                                        season_text,
                                        e['season_number'],
                                        e['season_total'])
    else:
        return "{} - {} day {} {}/{}".format(phase_text.title(),
                                             e['days'],
                                             season_text,
                                             e['season_number'],
                                             e['season_total'])


def _collect_json_events_by_date(from_year: int, to_year: int) -> Dict[str, List[JsonEvent]]:

    events: List[JsonEvent] = []
    events_by_date: Dict[str, List[JsonEvent]] = dict()

    year = from_year
    while year <= to_year:
        a = []
        a.extend(year_moondays(year))
        a.extend(year_moondays_associated_events(year,
                                                 show_month_names=True,
                                                 show_adhikamasa_adhikavara=True))

        events.extend([_to_json_event(x) for x in a])

        year += 1

    events = sorted(events, key=lambda x: x['date'])

    for e in events:
        if e['date'] not in events_by_date.keys():
            events_by_date[e['date']] = []

        events_by_date[e['date']].append(e)

    return events_by_date

def _collect_ical_events(from_year: int,
                         to_year: int,
                         only_uposathas = False,
                         icons = False,
                         faces = False,
                         short = False) -> List[IcalVEvent]:

    events: List[CalendarEvent] = []

    year = from_year
    while year <= to_year:
        events.extend(year_moondays(year))
        if only_uposathas:
            events.extend(year_moondays_associated_events(year,
                                                          show_month_names=False,
                                                          show_adhikamasa_adhikavara=False))

        else:
            events.extend(year_moondays_associated_events(year,
                                                          show_month_names=True,
                                                          show_adhikamasa_adhikavara=True))

        year += 1

    events = sorted(events, key=lambda x: x['date'])

    def _keep_for_uposathas(e: CalendarEvent) -> bool:
        return (e['phase'] == 'full' \
                or e['phase'] == 'new'\
                or e['label'] == 'first-day')

    if only_uposathas:
        events = [e for e in events if _keep_for_uposathas(e)]

    def _to_vevent(e: CalendarEvent) -> IcalVEvent:
        if e['phase'] != "":
            e['note'] = custom_calendar_event_to_str(e, icons, faces, short)

        return ical_vevent(e['date'], e['note'])

    ical_vevents = [_to_vevent(x) for x in events]

    return ical_vevents

def _collect_events_for_csv(from_year: int, to_year: int) -> List[CalendarEvent]:
    events: List[CalendarEvent] = []

    year = from_year
    while year <= to_year:
        events.extend(year_moondays(year))
        events.extend(year_moondays_associated_events(year,
                                                      show_month_names=True,
                                                      show_adhikamasa_adhikavara=True))

        year += 1

    events = sorted(events, key=lambda x: x['date'])

    return events

def mahanikaya_json():
    json_path = "mahanikaya.json"

    json_events = _collect_json_events_by_date(FROM_YEAR, TO_YEAR)

    with open(json_path, 'w', encoding='utf-8') as f:
        f.write(json.dumps(json_events))

def mahanikaya_ical():
    ical_path = "mahanikaya.ical"

    events = _collect_ical_events(FROM_YEAR, TO_YEAR)

    write_ical(events, ical_path)

def mahanikaya_only_uposathas_ical():
    ical_path = "mahanikaya-only-uposathas.ical"

    events = _collect_ical_events(FROM_YEAR, TO_YEAR, only_uposathas=True)

    write_ical(
        events,
        ical_path,
        ical_prod_id = "Uposatha Moondays (Mahānikāya, Only Uposathas) EN",
        ical_url = "http://splendidmoons.github.io/ical/mahanikaya-only-uposathas.ical",
        ical_name = ICAL_NAME)

def mahanikaya_only_uposathas_icons():
    ical_filename = "mahanikaya-only-uposathas-icons-short.ical"
    events = _collect_ical_events(FROM_YEAR, TO_YEAR, only_uposathas=True, icons=True, faces=False, short=True)

    write_ical(
        events,
        ical_filename,
        ical_prod_id = "Uposatha Moondays (Mahānikāya, Only Uposathas, Moon Icons, Short) EN",
        ical_url = f"http://splendidmoons.github.io/ical/{ical_filename}",
        ical_name = ICAL_NAME)

    ical_filename = "mahanikaya-only-uposathas-icons-faces-short.ical"
    events = _collect_ical_events(FROM_YEAR, TO_YEAR, only_uposathas=True, icons=True, faces=True, short=True)

    write_ical(
        events,
        ical_filename,
        ical_prod_id = "Uposatha Moondays (Mahānikāya, Only Uposathas, Moon Icon Faces, Short) EN",
        ical_url = f"http://splendidmoons.github.io/ical/{ical_filename}",
        ical_name = ICAL_NAME)

def mahanikaya_csv():
    csv_path = "mahanikaya.csv"

    events = _collect_events_for_csv(FROM_YEAR, TO_YEAR)

    with open(csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f,
                                fieldnames=events[0].keys(),
                                delimiter=',')

        writer.writeheader()
        for row in events:
            writer.writerow(row)

def year_types():
    json_path = "year_types.json"

    year_types: Dict[int, str] = dict()

    year = FROM_YEAR
    while year <= TO_YEAR:
        year_types[year] = YEAR_TYPE_NAME[CalendarYear(year).year_type()]
        year += 1

    with open(json_path, 'w', encoding='utf-8') as f:
        f.write(json.dumps(year_types))

def main():
    mahanikaya_json()
    mahanikaya_ical()
    mahanikaya_only_uposathas_ical()
    mahanikaya_only_uposathas_icons()
    mahanikaya_csv()
    year_types()

if __name__ == "__main__":
    main()
