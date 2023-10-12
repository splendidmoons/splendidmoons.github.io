<template>
  <div class="content">
    <h1>Import in Python Apps</h1>
    <p>
      Install the <a href="https://github.com/splendidmoons/splendidmoons">splendidmoons</a> package:
    </p>

    <pre class="has-code">
      <code class="language-shell">
$ pip install splendidmoons
$ splendidmoons asalha-puja 2023
2023-08-01
$ splendidmoons year-events-csv 2020 2030 moondays.csv
      </code>
    </pre>

    <p>
      In Python scripts:
    </p>

    <pre class="has-code">
      <code class="language-python">
from splendidmoons.calendar_year import CalendarYear
for year in [2023, 2024, 2025]:
    print(f"{year}: {CalendarYear(year).year_type()}")
# 2023: YearType.Adhikamasa
# 2024: YearType.Normal
# 2025: YearType.Adhikavara
      </code>
    </pre>

  </div>
</template>

<script>
 import hljs from 'highlight.js/lib/core';
 import python from 'highlight.js/lib/languages/python';
 import shell from 'highlight.js/lib/languages/shell';

 hljs.registerLanguage('python', python);
 hljs.registerLanguage('shell', shell);

 export default {
   mounted() {
     document.querySelectorAll('pre code').forEach(el => {
       hljs.highlightElement(el);
     });
   }
 }
</script>
