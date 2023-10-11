import{_ as o}from"./_plugin-vue_export-helper.c27b6911.js";import{c as s,o as a,a as n,d as e}from"./entry.fa4f5898.js";const t={},r={class:"content"},l=n("h1",null,"Import in Python Apps",-1),d=n("p",null,[e(" Install the "),n("a",{href:"https://github.com/splendidmoons/splendidmoons"},"splendidmoons"),e(" package: ")],-1),p=n("p",null,[n("pre",null,`$ pip install splendidmoons
$ splendidmoons asalha-puja 2023
2023-08-01
$ splendidmoons year-events-csv 2020 2030 moondays.csv
      `)],-1),c=n("p",null," In Python scripts: ",-1),i=n("p",null,[n("pre",null,`from splendidmoons.calendar_year import CalendarYear
for year in [2023, 2024, 2025]:
    print(f"{year}: {CalendarYear(year).year_type()}")
# 2023: YearType.Adhikamasa
# 2024: YearType.Normal
# 2025: YearType.Adhikavara
      `)],-1),_=[l,d,p,c,i];function m(h,y){return a(),s("div",r,_)}const k=o(t,[["render",m]]);export{k as default};
