import{H as c,s as y}from"./shell.1216e383.js";import{_ as b}from"./add-by-url.9fdbcf8b.js";import{c as _,o as E,f as T}from"./entry.73ed5b70.js";import{_ as S}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.725317a4.js";function v(e){const a="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",o="\\|[^]*?\\|",s="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",l={className:"literal",begin:"\\b(t{1}|nil)\\b"},n={className:"number",variants:[{begin:s,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+s+" +"+s,end:"\\)"}]},i=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),d=e.COMMENT(";","$",{relevance:0}),p={begin:"\\*",end:"\\*"},h={className:"symbol",begin:"[:&]"+a},t={begin:a,relevance:0},u={begin:o},m={contains:[n,i,p,h,{begin:"\\(",end:"\\)",contains:["self",l,i,n,t]},t],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+o}]},g={variants:[{begin:"'"+a},{begin:"#'"+a+"(::"+a+")*"}]},r={begin:"\\(\\s*",end:"\\)"},f={endsWithParent:!0,relevance:0};return r.contains=[{className:"name",variants:[{begin:a,relevance:0},{begin:o}]},f],f.contains=[m,g,r,l,n,i,d,p,h,u,t],{name:"Lisp",illegal:/\S/,contains:[n,e.SHEBANG(),l,i,d,m,g,r,t]}}const w=""+new URL("emacs-calendar-moondays.cf82ab2e.png",import.meta.url).href;c.registerLanguage("lisp",v);c.registerLanguage("shell",y);const L={mounted(){document.querySelectorAll("pre code").forEach(e=>{c.highlightElement(e)})}},k={class:"content"},N=T('<h1>Downloads</h1><p> The uposatha calendars include years 2000–2100. </p><p> The calendar data is generated using the <a href="https://github.com/splendidmoons/splendidmoons">splendidmoons</a> Python package. </p><p> See below for the available formats. <b>Right-click</b> on the link and select <b>Save As…</b> to download. </p><p>PDF</p><ul><li><a href="/calendars/fs-year-planner-compact.pdf">fs-year-planner-compact.pdf</a></li><li><a href="/calendars/fs-year-planner-grid.pdf">fs-year-planner-grid.pdf</a></li><li><a href="/calendars/fs-year-planner-portrait.pdf">fs-year-planner-portrait.pdf</a></li><li><a href="/calendars/fs-year-planner-rows.pdf">fs-year-planner-rows.pdf</a></li></ul><p>CSV, XLSX</p><ul><li><a href="/calendars/mahanikaya.csv">mahanikaya.csv</a></li><li><a href="/calendars/mahanikaya.xlsx">mahanikaya.xlsx</a></li></ul><p>ICAL</p><ul><li><a href="/ical/mahanikaya.ical">mahanikaya.ical</a></li></ul><p> Copy the .ical url to import in your calendar application, or add to Google Calendar. </p><p><img src="'+b+`" style="border:1px solid rgb(196, 196, 196);padding:5px;" title="Add By Url"></p><p>Emacs</p><ul><li><a href="/calendars/holiday-moondays.el">holiday-moondays.el</a></li></ul><p> This defines calendar events to show with <code>M-x calendar</code> in emacs. Place it in the folder where you load local packages from. </p><pre class="has-code">      <code class="language-lisp">
(add-to-list &#39;load-path &quot;~/path/to/local/packages&quot;)
(require &#39;holiday-moondays)
      </code>
    </pre><p><img src="`+w+`"></p><p> The complete list from 2000-2100 is quite long, so it&#39;s probably a good idea to filter it for the relevant years. Download with <code>wget</code> and filter with <code>sed</code> for example: </p><pre class="has-code">      <code class="language-shell">
wget -O - &quot;https://splendidmoons.github.io/calendars/holiday-moondays.el&quot; |\\
    sed &#39;/^(holiday-sexp/ { /\\(2022\\|2023\\|2024\\|2025\\)/ !d; };&#39; &gt; holiday-moondays.el
      </code>
    </pre>`,19),x=[N];function A(e,a,o,s,l,n){return E(),_("div",k,x)}const B=S(L,[["render",A]]);export{B as default};
