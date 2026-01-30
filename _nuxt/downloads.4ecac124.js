import{_ as b,a as _}from"./add-by-url.5c475608.js";import{H as d,s as E}from"./shell.1216e383.js";import{c as w,b as T,f as y,o as S}from"./entry.5ac59798.js";import{_ as k}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.725317a4.js";function v(e){const a="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",s="\\|[^]*?\\|",l="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",t={className:"literal",begin:"\\b(t{1}|nil)\\b"},o={className:"number",variants:[{begin:l,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+l+" +"+l,end:"\\)"}]},n=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),c=e.COMMENT(";","$",{relevance:0}),h={begin:"\\*",end:"\\*"},p={className:"symbol",begin:"[:&]"+a},i={begin:a,relevance:0},u={begin:s},m={contains:[o,n,h,p,{begin:"\\(",end:"\\)",contains:["self",t,n,o,i]},i],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+s}]},f={variants:[{begin:"'"+a},{begin:"#'"+a+"(::"+a+")*"}]},r={begin:"\\(\\s*",end:"\\)"},g={endsWithParent:!0,relevance:0};return r.contains=[{className:"name",variants:[{begin:a,relevance:0},{begin:s}]},g],g.contains=[m,f,r,t,o,n,c,h,p,u,i],{name:"Lisp",illegal:/\S/,contains:[o,e.SHEBANG(),t,n,c,m,f,r,i]}}const L=""+new URL("emacs-calendar-moondays.cf82ab2e.png",import.meta.url).href;d.registerLanguage("lisp",v);d.registerLanguage("shell",E);const I={mounted(){document.querySelectorAll("pre code").forEach(e=>{d.highlightElement(e)})}},N={class:"content"},x=y('<h1>Downloads</h1><p> The uposatha calendars include years 2000–2100. </p><p> The calendar data is generated using the <a href="https://github.com/splendidmoons/splendidmoons">splendidmoons</a> Python package. </p><p> See below for the available formats. <b>Right-click</b> on the link and select <b>Save As…</b> to download. </p><h3>PDF</h3><ul><li><a href="/calendars/fs-year-planner-compact.pdf">fs-year-planner-compact.pdf</a></li><li><a href="/calendars/fs-year-planner-grid.pdf">fs-year-planner-grid.pdf</a></li><li><a href="/calendars/fs-year-planner-portrait.pdf">fs-year-planner-portrait.pdf</a></li><li><a href="/calendars/fs-year-planner-rows.pdf">fs-year-planner-rows.pdf</a></li></ul><h3>CSV, XLSX</h3><ul><li><a href="/calendars/mahanikaya.csv">mahanikaya.csv</a></li><li><a href="/calendars/mahanikaya.xlsx">mahanikaya.xlsx</a></li></ul><h3>ICAL</h3>',9),M=y('<p> </p><p> Copy the .ical url to import in your calendar application, or add to Google Calendar. </p><p><img src="'+b+`" style="border:1px solid rgb(196, 196, 196);padding:5px;" title="Add By Url"></p><h3>Emacs</h3><ul><li><a href="/calendars/holiday-moondays.el">holiday-moondays.el</a></li></ul><p> This defines calendar events to show with <code>M-x calendar</code> in emacs. Place it in the folder where you load local packages from. </p><pre class="has-code">      <code class="language-lisp">
(add-to-list &#39;load-path &quot;~/path/to/local/packages&quot;)

;; This defines the holiday-moonday-holidays list
(require &#39;holiday-moondays)

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
    </pre><p><img src="`+L+`"></p><p> The complete list from 2000-2100 is quite long, so it&#39;s probably a good idea to filter it for the relevant years. Download with <code>wget</code> and filter with <code>sed</code> for example: </p><pre class="has-code">      <code class="language-shell">
wget -O - &quot;https://splendidmoons.github.io/calendars/holiday-moondays.el&quot; |\\
    sed &#39;/^(holiday-sexp/ { /\\(2022\\|2023\\|2024\\|2025\\)/ !d; };&#39; &gt; holiday-moondays.el
      </code>
    </pre>`,10);function q(e,a,s,l,t,o){const n=_;return S(),w("div",N,[x,T(n),M])}const U=k(I,[["render",q]]);export{U as default};
