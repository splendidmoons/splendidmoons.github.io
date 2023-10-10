<template>
  <li
    v-show="(!isCompact || (isCompact && has_events))"
    :class="{
      'calendar-day': true,
      'is-compact': isCompact,
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday,
    }"
  >
    <span v-show="!isCompact" class="day-number">{{ day_number }}</span>
    <div v-show="has_events" class="day-notes-box">
      <div v-show="isCompact" class="day-note" style="min-width: 5rem;">
          {{ compact_date }}
      </div>
      <div v-show="moon_phase" class="day-note">
        <span>
            <font-awesome-icon v-if="moon_phase == 'new'" :icon="['far', 'circle']" />
            <font-awesome-icon v-else-if="moon_phase == 'waxing'" :icon="['fas', 'circle-half-stroke']" rotation=180 />
            <font-awesome-icon v-else-if="moon_phase == 'full'" :icon="['fas', 'circle']" />
            <font-awesome-icon v-else-if="moon_phase == 'waning'" :icon="['fas', 'circle-half-stroke']" />
        </span>
        <span>&ensp;</span>
        <span v-if="isCompact" class="compact-moon-phase-text">
            {{ moon_phase_text }}
        </span>
        <span v-else>
            {{ moon_phase_text }}
        </span>
      </div>
      <div v-if="season_text" class="day-note season-text">
          {{ season_text }}
      </div>
      <div v-for="note in day_notes" class="extra-note">
          {{ note }}
      </div>
    </div>
  </li>
</template>

<script>
 import dayjs from "dayjs";
 import { mapWritableState } from 'pinia';
 import { main_store } from '~/store/main';

 function season_fmt(calendar_event) {
     let e = calendar_event;
     if (e.season === "") {
         return "";
     }
     return e.days + " days, " + e.season + " " + e.season_number + "/" + e.season_total;
 }

 function moon_phase_from_events(day_events) {
     const a = day_events.filter((e) => e.phase !== "");
     if (a.length == 0) {
         return null;
     } else {
         return a[0].phase;
     }
 }

 function moon_phase_text_from_events(day_events) {
     const phase = moon_phase_from_events(day_events);
     if (phase == null) {
         return null;
     }

     let phase_text = "";
     switch(phase) {
         case 'new':
             phase_text = "New Moon";
             break;
         case 'waxing':
             phase_text = "Waxing Moon";
             break;
         case 'full':
             phase_text = "Full Moon";
             break;
         case 'waning':
             phase_text = "Waning Moon";
             break;
     }

     return phase_text;
 }

 export default {
     props: {
         day: {
             type: Object,
             required: true,
         },

         isCurrentMonth: {
             type: Boolean,
             default: false,
         },

         isToday: {
             type: Boolean,
             default: false,
         },

         isCompact: {
             type: Boolean,
             required: false,
             default: false,
         },
     },

     data() {
         const iso_date = dayjs(this.day.date).format("YYYY-MM-DD");
         let day_events = [];
         if (iso_date in main_store().events) {
             day_events = main_store().events[iso_date];
         }
         const has_events = (day_events.length > 0);

         return {
             day_events: day_events,
             has_events: has_events,
         };
     },

     computed: {
         day_number() {
             return dayjs(this.day.date).format("D");
         },

         compact_date() {
             return dayjs(this.day.date).format("MMM D");
         },

         moon_phase() {
            return moon_phase_from_events(this.day_events);
         },

         moon_phase_text() {
             return moon_phase_text_from_events(this.day_events);
         },

         season_text() {
             // 15 days, Vassāna 5/8
             let a = this.day_events.filter((e) => e.season !== "");
             if (a.length > 0) {
                 return season_fmt(a[0]);
             } else {
                 return null;
             }
         },

         day_notes() {
             let day_notes = [];
             // Pavāraṇā Day, Last day of Vassa
             let a = this.day_events.filter((e) => e.note !== "");
             if (a.length > 0) {
                 day_notes.push(...a.map((e) => e.note));
             }

             return day_notes;
         }
     }
 };
</script>

<style scoped lang="sass">
 .calendar-day
     position: relative
     min-height: 100px
     font-size: 16px
     padding: 5px
     text-align: center

     &.is-compact
        position: normal
        min-height: 1.5rem
        font-size: 16px
        padding: 5px
        text-align: left

 .calendar-month.is-small .calendar-day
     font-size: 14px
     padding: 0px

 .calendar-day > span
     display: flex
     justify-content: center
     align-items: center

 .calendar-day > div.day-notes-box
     color: #fff
     background-color: #002b36
     border-radius: 10px
     margin-top: 5px
     margin-bottom: 5px

 .calendar-day.is-compact
     & div.day-note,
     & div.extra-note
        display: inline-block
        padding-left: 1.5rem

 .compact-moon-phase-text
    display: inline-block
    min-width: 6rem

 .calendar-day.is-compact div.season-text + div.extra-note
     padding-left: 6.5rem
     min-width: 14rem

 .calendar-day div.day-note,
 .calendar-day div.extra-note
     color: #fff

 .calendar-day
     color: lighten(black, 20%)

 .is-dark .calendar-day
     color: lighten(black, 90%)

 .calendar-day--not-current
     color: lighten(black, 80%)

 .is-dark .calendar-day--not-current
     color: lighten(black, 50%)

 .calendar-day--today
     padding-top: 4px

 .calendar-day--today > span.day-number
     border-radius: 9999px
     color: #fff
     background-color: lighten(black, 5%)
</style>
