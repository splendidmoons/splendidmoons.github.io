<template>
  <div class="content">
    <h1>Import in Python Apps</h1>
    <p>
      Install the <a href="https://github.com/splendidmoons/splendidmoons">splendidmoons</a> package:
    </p>
    <p>
      <pre>
$ pip install splendidmoons
$ splendidmoons asalha-puja 2023
2023-08-01
$ splendidmoons year-events-csv 2020 2030 moondays.csv
      </pre>
    </p>
    <p>
      In Python scripts:
    </p>
    <p>
      <pre>
from splendidmoons.calendar_year import CalendarYear
for year in [2023, 2024, 2025]:
    print(f"{year}: {CalendarYear(year).year_type()}")
# 2023: YearType.Adhikamasa
# 2024: YearType.Normal
# 2025: YearType.Adhikavara
      </pre>
    </p>
  </div>
</template>
