<template>
  <div class="content">
    <h1>Downloads</h1>
    <p>
      The uposatha calendars include years 2000&ndash;2100.
    </p>
    <p>
      The calendar data is generated using the <a href="https://github.com/splendidmoons/splendidmoons">splendidmoons</a> Python package.
    </p>

    <p>
      See below for the available formats. <b>Right-click</b> on the link and select <b>Save As&hellip;</b> to download.
    </p>

    <h3>PDF</h3>

    <ul>
      <li><a href="/calendars/fs-year-planner-compact.pdf">fs-year-planner-compact.pdf</a></li>
      <li><a href="/calendars/fs-year-planner-grid.pdf">fs-year-planner-grid.pdf</a></li>
      <li><a href="/calendars/fs-year-planner-portrait.pdf">fs-year-planner-portrait.pdf</a></li>
      <li><a href="/calendars/fs-year-planner-rows.pdf">fs-year-planner-rows.pdf</a></li>
    </ul>

    <h3>CSV, XLSX</h3>

    <ul>
      <li><a href="/calendars/mahanikaya.csv">mahanikaya.csv</a></li>
      <li><a href="/calendars/mahanikaya.xlsx">mahanikaya.xlsx</a></li>
    </ul>

    <h3>ICAL</h3>

    <MahanikayaIcalTable/>

    <p>&nbsp;</p>

    <p>
      Copy the .ical url to import in your calendar application, or add to Google Calendar.
    </p>

    <p>
      <img src="~/assets/images/add-by-url.png" style="border: 1px solid rgb(196, 196, 196); padding: 5px;" title="Add By Url">
    </p>

    <h3>Emacs</h3>

    <ul>
      <li><a href="/calendars/holiday-moondays.el">holiday-moondays.el</a></li>
    </ul>

    <p>
      This defines calendar events to show with <code>M-x calendar</code> in emacs. Place it in the folder where you load local packages from.
    </p>

    <pre class="has-code">
      <code class="language-lisp">
(add-to-list 'load-path "~/path/to/local/packages")

;; This defines the holiday-moonday-holidays list
(require 'holiday-moondays)

;; Week starts on Monday.
(setq calendar-week-start-day 1)
;; calendar-holidays is usually a list of religious and secular dates, we
;; replace the default list with only the moondays.
(setq calendar-holidays holiday-moonday-holidays)
;; Show holidays and diary entries when the calendar is opened.
(setq calendar-mark-holidays-flag t
      calendar-mark-diary-entries-flag t)
;; Include the holidays (moondays) in the diary display buffer, instead of
;; showing them in the minibuffer.
(setq diary-list-include-blanks t
      diary-show-holidays-flag t)
      </code>
    </pre>

    <p>
      <img src="~/assets/images/emacs-calendar-moondays.png">
    </p>

    <p>
      The complete list from 2000-2100 is quite long, so it's probably a good idea to filter it for the relevant years. Download with <code>wget</code> and filter with <code>sed</code> for example:
    </p>

    <pre class="has-code">
      <code class="language-shell">
wget -O - "https://splendidmoons.github.io/calendars/holiday-moondays.el" |\
    sed '/^(holiday-sexp/ { /\(2022\|2023\|2024\|2025\)/ !d; };' > holiday-moondays.el
      </code>
    </pre>

  </div>
</template>

<script>
 import hljs from 'highlight.js/lib/core';
 import lisp from 'highlight.js/lib/languages/lisp';
 import shell from 'highlight.js/lib/languages/shell';

 hljs.registerLanguage('lisp', lisp);
 hljs.registerLanguage('shell', shell);

 export default {
   mounted() {
     document.querySelectorAll('pre code').forEach(el => {
       hljs.highlightElement(el);
     });
   }
 }
</script>
