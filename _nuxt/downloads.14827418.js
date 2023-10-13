import{H as d,s as u}from"./shell.1216e383.js";import{_ as b}from"./add-by-url.f7578fc7.js";import{c as _,o as E,f as w}from"./entry.3f1ad32a.js";import{_ as T}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.725317a4.js";function k(a){const e="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",o="\\|[^]*?\\|",s="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",l={className:"literal",begin:"\\b(t{1}|nil)\\b"},n={className:"number",variants:[{begin:s,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+s+" +"+s,end:"\\)"}]},i=a.inherit(a.QUOTE_STRING_MODE,{illegal:null}),c=a.COMMENT(";","$",{relevance:0}),h={begin:"\\*",end:"\\*"},p={className:"symbol",begin:"[:&]"+e},t={begin:e,relevance:0},g={begin:o},m={contains:[n,i,h,p,{begin:"\\(",end:"\\)",contains:["self",l,i,n,t]},t],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+o}]},f={variants:[{begin:"'"+e},{begin:"#'"+e+"(::"+e+")*"}]},r={begin:"\\(\\s*",end:"\\)"},y={endsWithParent:!0,relevance:0};return r.contains=[{className:"name",variants:[{begin:e,relevance:0},{begin:o}]},y],y.contains=[m,f,r,l,n,i,c,h,p,g,t],{name:"Lisp",illegal:/\S/,contains:[n,a.SHEBANG(),l,i,c,m,f,r,t]}}const S=""+new URL("emacs-calendar-moondays.cf82ab2e.png",import.meta.url).href;d.registerLanguage("lisp",k);d.registerLanguage("shell",u);const v={mounted(){document.querySelectorAll("pre code").forEach(a=>{d.highlightElement(a)})}},L={class:"content"},I=w('<h1>Downloads</h1><p> The uposatha calendars include years 2000–2100. </p><p> The calendar data is generated using the <a href="https://github.com/splendidmoons/splendidmoons">splendidmoons</a> Python package. </p><p> See below for the available formats. <b>Right-click</b> on the link and select <b>Save As…</b> to download. </p><h3>PDF</h3><ul><li><a href="/calendars/fs-year-planner-compact.pdf">fs-year-planner-compact.pdf</a></li><li><a href="/calendars/fs-year-planner-grid.pdf">fs-year-planner-grid.pdf</a></li><li><a href="/calendars/fs-year-planner-portrait.pdf">fs-year-planner-portrait.pdf</a></li><li><a href="/calendars/fs-year-planner-rows.pdf">fs-year-planner-rows.pdf</a></li></ul><h3>CSV, XLSX</h3><ul><li><a href="/calendars/mahanikaya.csv">mahanikaya.csv</a></li><li><a href="/calendars/mahanikaya.xlsx">mahanikaya.xlsx</a></li></ul><h3>ICAL</h3><ul><li><a href="/ical/mahanikaya.ical">mahanikaya.ical</a></li></ul><p> Copy the .ical url to import in your calendar application, or add to Google Calendar. </p><p><img src="'+b+`" style="border:1px solid rgb(196, 196, 196);padding:5px;" title="Add By Url"></p><h3>Emacs</h3><ul><li><a href="/calendars/holiday-moondays.el">holiday-moondays.el</a></li></ul><p> This defines calendar events to show with <code>M-x calendar</code> in emacs. Place it in the folder where you load local packages from. </p><pre class="has-code">      <code class="language-lisp">
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
    </pre><p><img src="`+S+`"></p><p> The complete list from 2000-2100 is quite long, so it&#39;s probably a good idea to filter it for the relevant years. Download with <code>wget</code> and filter with <code>sed</code> for example: </p><pre class="has-code">      <code class="language-shell">
wget -O - &quot;https://splendidmoons.github.io/calendars/holiday-moondays.el&quot; |\\
    sed &#39;/^(holiday-sexp/ { /\\(2022\\|2023\\|2024\\|2025\\)/ !d; };&#39; &gt; holiday-moondays.el
      </code>
    </pre>`,19),N=[I];function q(a,e,o,s,l,n){return E(),_("div",L,N)}const B=T(v,[["render",q]]);export{B as default};
