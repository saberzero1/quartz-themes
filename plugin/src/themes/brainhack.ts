import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "brainhack",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cascadia-mono"],
    styleSettingsId: "Brainhack",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-1: #171717;
  --background-1-h: var(--colored-accent-1, hsl(258, 88%, 66%));
  --background-1-item: var(--nav-item-color, #b3b3b3);
  --background-2: hsl(var(--background-2_h), calc(var(--accent-s)*0.01 + 0.1%*var(--bgt_s, 1)), calc(var(--background-2_l) + var(--bgt_l, 0)*1% + 2%));
  --background-2_h: var(--accent-h, 258);
  --background-2_l: 10%;
  --background-2_s: 0%;
  --background-3: rgb(33, 33, 33);
  --background-3-1: rgb(70, 70, 70);
  --background-3-2: rgba(70, 70, 70, 0.27);
  --background-3-3: hsla(0, 0%, 26%, 0.326);
  --background-4: rgb(12, 12, 12);
  --background-5: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 30%);
  --background-6: hsla(var(--accent-h), calc(var(--accent-s)*0.1), var(--accent-l), 0.2);
  --background-7: rgb(53, 53, 53);
  --background-primary: var(--color-base-00, rgb(33, 33, 33));
  --background-secondary: var(--background-2, hsl(258, 0.98%, 12%));
  --bases-cards-background: var(--background-primary, rgb(33, 33, 33));
  --bases-cards-radius: var(--radius-m, 1em);
  --bases-table-cell-background-active: var(--background-primary, rgb(33, 33, 33));
  --bases-table-header-background: var(--background-primary, rgb(33, 33, 33));
  --bases-table-summary-background: var(--background-primary, rgb(33, 33, 33));
  --bold-modifier: 300;
  --canvas-background: var(--background-2, hsl(258, 0.98%, 12%));
  --canvas-card-label-color: var(--text-faint, hsl(258, 88%, 66%));
  --canvas-dot-pattern: var(--background-3-1, rgb(70, 70, 70));
  --checkbox-border-color: var(--text-faint, hsl(258, 88%, 66%));
  --checkbox-marker-color: var(--background-primary, rgb(33, 33, 33));
  --code-background: var(--background-3, rgb(33, 33, 33));
  --code-comment: var(--text-faint, hsl(258, 88%, 66%));
  --collapse-icon-color: var(--text-faint, hsl(258, 88%, 66%));
  --color-base-00: var(--background-3, rgb(33, 33, 33));
  --color-base-50: var(--colored-accent-1, hsl(258, 88%, 66%));
  --colored-accent-1: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --colored-accent-2: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  --colored-accent-3: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.3);
  --colored-accent-4: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.1);
  --colored-accent-5: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.05);
  --colored-accent-i1: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l)*-100 + 4900%));
  --colored-accent-i2: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l)*-100 + 2000%));
  --custom-accent-bold: var(--colored-accent-1, hsl(258, 88%, 66%));
  --divider-color: var(--background-modifier-border, rgba(105, 105, 105, 0.441));
  --file-header-background: var(--background-primary, rgb(33, 33, 33));
  --file-header-background-focused: var(--background-primary, rgb(33, 33, 33));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(258, 88%, 66%));
  --graph-node-unresolved: var(--text-faint, hsl(258, 88%, 66%));
  --gray: var(--text-faint, var(--color-base-50, hsl(258, 88%, 66%)));
  --heading-formatting: var(--text-faint, hsl(258, 88%, 66%));
  --highlight-1: rgba(255, 255, 255, 0.075);
  --highlight-2: rgba(255, 255, 255, 0.075);
  --input-date-separator: var(--text-faint, hsl(258, 88%, 66%));
  --input-placeholder-color: var(--text-faint, hsl(258, 88%, 66%));
  --interactive-accent: var(--colored-accent-1, hsl(258, 88%, 66%));
  --italic-color: rgb(97, 97, 97);
  --light: var(--background-primary, var(--color-base-00, rgb(33, 33, 33)));
  --lightgray: var(--background-secondary, var(--background-2, hsl(258, 0.98%, 12%)));
  --line-height-normal: var(--custom-line-height, 1.5);
  --list-marker-color: var(--text-faint, hsl(258, 88%, 66%));
  --main-color: white;
  --main-color-05: rgba(255, 255, 255, 0.116);
  --main-color-2: rgb(224, 224, 224);
  --main-color-inverted: black;
  --main-color-inverted-2: rgb(44, 44, 44);
  --menu-background: var(--background-secondary, hsl(258, 0.98%, 12%));
  --menu-radius: var(--radius-m, 1em);
  --modal-background: var(--background-primary, rgb(33, 33, 33));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(258, 88%, 66%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(258, 88%, 66%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(258, 88%, 66%));
  --nav-tag-color: var(--text-faint, hsl(258, 88%, 66%));
  --pdf-background: var(--background-primary, rgb(33, 33, 33));
  --pdf-page-background: var(--background-primary, rgb(33, 33, 33));
  --pdf-sidebar-background: var(--background-primary, rgb(33, 33, 33));
  --pill-color-remove: var(--text-faint, hsl(258, 88%, 66%));
  --popover-height: 1250px;
  --popover-width: 1050px;
  --prompt-background: var(--background-primary, rgb(33, 33, 33));
  --radius-m: var(--crm, 1em);
  --ribbon-background: var(--background-secondary, hsl(258, 0.98%, 12%));
  --ribbon-background-collapsed: var(--background-primary, rgb(33, 33, 33));
  --search-result-background: var(--background-primary, rgb(33, 33, 33));
  --secondary: var(--interactive-accent, var(--colored-accent-1, hsl(258, 88%, 66%)));
  --shadow-1: hsla(var(--accent-h), var(--accent-s), 5%, .5);
  --shadow-2: hsla(var(--accent-h), calc(var(--accent-s)*0), calc(var(--accent-l)*0.1), .4);
  --shadow-3: rgba(0, 0, 0, 0.26);
  --shadow-4: hsla(var(--background-2_h), calc(var(--accent-s)*0.5 + 0.1%*var(--bgt_s, 1)), calc(var(--background-2_l) - 20% + var(--bgt_l, 0)*1%), .5);
  --shiki-code-background: var(--code-background, rgb(33, 33, 33));
  --shiki-code-comment: var(--text-faint, hsl(258, 88%, 66%));
  --shiki-gutter-text-color: var(--text-faint, hsl(258, 88%, 66%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(258, 88%, 66%));
  --status-bar-background: var(--background-secondary, hsl(258, 0.98%, 12%));
  --status-bar-border-color: var(--divider-color, rgba(105, 105, 105, 0.441));
  --status-bar-radius: var(--radius-m, 1em 0 0 0) 0 0 0;
  --suggestion-background: var(--background-primary, rgb(33, 33, 33));
  --tab-background-active: var(--background-primary, rgb(33, 33, 33));
  --tab-container-background: var(--background-secondary, hsl(258, 0.98%, 12%));
  --tab-outline-color: var(--divider-color, rgba(105, 105, 105, 0.441));
  --tab-switcher-background: var(--background-secondary, hsl(258, 0.98%, 12%));
  --tab-text-color: var(--text-faint, hsl(258, 88%, 66%));
  --table-drag-handle-color: var(--text-faint, hsl(258, 88%, 66%));
  --tc: rgb(194, 194, 194);
  --text-color-inverted: rgb(223, 223, 223);
  --text-faint: var(--color-base-50, hsl(258, 88%, 66%));
  --titlebar-background: var(--background-secondary, hsl(258, 0.98%, 12%));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(33, 33, 33));
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(30, 30, 31));
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(105, 105, 105, 0.44);
  border-right-style: dashed;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(105, 105, 105, 0.44);
  color: rgb(194, 194, 194);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  background-color: rgba(138, 92, 245, 0.1);
  color: var(--colored-accent-1, rgb(138, 92, 245));
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(97, 97, 97));
  outline: rgb(97, 97, 97) none 0px;
  text-decoration-color: rgb(97, 97, 97);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(97, 97, 97));
  outline: rgb(97, 97, 97) none 0px;
  text-decoration-color: rgb(97, 97, 97);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  background-color: rgba(138, 92, 245, 0.1);
  color: var(--colored-accent-1, rgb(138, 92, 245));
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(53, 53, 53));
  color: var(--tc, rgb(194, 194, 194));
  font-weight: 600;
  outline: rgb(194, 194, 194) none 0px;
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body del {
  color: rgb(194, 194, 194);
  outline: rgb(194, 194, 194) none 0px;
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body dt {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(138, 92, 245));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--background-3, rgb(33, 33, 33));
  padding-bottom: 12.8px;
  padding-top: 12.8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body table {
  color: rgb(194, 194, 194);
  margin-top: var(--heading-spacing, 15px);
  width: 204.844px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(194, 194, 194));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: var(--table-border-radius, 8px);
  font-weight: var(--custom-font-weight, 400);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(33, 33, 33));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(33, 33, 33));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(194, 194, 194);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(194, 194, 194);
  border-radius: 10px;
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  background: rgba(0, 176, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="brainhack"] {
  --background-1-h: hsl(258, 88%, 66%);
  --background-1-item: #b3b3b3;
  --background-2: hsl(258, 0.98%, 12%);
  --background-2_h: 258;
  --background-5: hsla(258, 88%, 66%, 30%);
  --background-6: hsla(258, 8.8%, 66%, 0.2);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: rgb(33, 33, 33);
  --background-primary-alt: #242424;
  --background-secondary: hsl(258, 0.98%, 12%);
  --background-secondary-alt: #363636;
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-border-color: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-content-radius: 0px;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 0;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-padding: 4px 10px;
  --callout-title-weight: 700;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(258, 0.98%, 12%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: rgb(70, 70, 70);
  --caret-color: #dadada;
  --checkbox-border-color: hsl(258, 88%, 66%);
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(33, 33, 33);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: rgb(33, 33, 33);
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: hsl(258, 88%, 66%);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: hsl(258, 88%, 66%);
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-00: rgb(33, 33, 33);
  --color-base-50: hsl(258, 88%, 66%);
  --colored-accent-1: hsl(258, 88%, 66%);
  --colored-accent-2: hsla(258, 88%, 66%, 0.5);
  --colored-accent-3: hsla(258, 88%, 66%, 0.3);
  --colored-accent-4: hsla(258, 88%, 66%, 0.1);
  --colored-accent-5: hsla(258, 88%, 66%, 0.05);
  --colored-accent-i1: hsl(258, 88%, -1700%);
  --colored-accent-i2: hsl(258, 88%, -4600%);
  --custom-accent-bold: hsl(258, 88%, 66%);
  --divider-color: rgba(105, 105, 105, 0.441);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: hsl(258, 88%, 66%);
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(258, 88%, 66%);
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --line-height-normal: 1.5;
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(258, 0.98%, 12%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 1em;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: rgb(33, 33, 33);
  --pdf-page-background: rgb(33, 33, 33);
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: rgb(33, 33, 33);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --radius-m: 1em;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: rgb(33, 33, 33);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #242424;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-1: hsla(258, 88%, 5%, .5);
  --shadow-2: hsla(258, 0%, 6.6%, .4);
  --shadow-4: hsla(258, 44.1%, -10%, .5);
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: rgb(33, 33, 33);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(258, 88%, 66%);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(258, 88%, 66%);
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(258, 88%, 66%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(33, 33, 33);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgb(33, 33, 33);
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(105, 105, 105, 0.441);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(258, 0.98%, 12%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 0.98%, 12%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: hsl(258, 88%, 66%);
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: hsl(258, 88%, 66%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: hsl(258, 88%, 66%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: inset 0 0 0 .04em hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  color: rgb(194, 194, 194);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  letter-spacing: 0.1px;
  line-height: 24px;
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgba(255, 6, 93, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgba(255, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgba(124, 77, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgba(255, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  background: rgba(0, 184, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  background: rgba(68, 138, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgba(255, 160, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgba(0, 200, 83, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgba(0, 191, 165, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  background: rgba(0, 184, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgba(255, 145, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(223, 223, 223));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(223, 223, 223));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(194, 194, 194);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="brainhack"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(33, 33, 33));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(194, 194, 194);
  outline: rgb(194, 194, 194) none 0px;
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 30, 31);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(224, 224, 224));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(194, 194, 194));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(224, 224, 224));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(194, 194, 194));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(194, 194, 194));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(194, 194, 194));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(194, 194, 194));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(194, 194, 194));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(105, 105, 105, 0.44);
  border-left-color: rgba(105, 105, 105, 0.44);
  border-right-color: rgba(105, 105, 105, 0.44);
  border-right-style: dashed;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--main-color, rgb(255, 255, 255));
  font-weight: var(--nav-item-weight, 900);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--main-color, rgb(255, 255, 255));
  font-weight: var(--nav-item-weight, 900);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 900);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(30, 30, 31));
  border-bottom-color: rgba(105, 105, 105, 0.44);
  border-left-color: rgba(105, 105, 105, 0.44);
  border-right-color: rgba(105, 105, 105, 0.44);
  border-top-color: rgba(105, 105, 105, 0.44);
  border-top-left-radius: 12px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(138, 92, 245));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: var(--background-2, rgb(30, 30, 31));
  color: var(--tc, rgb(194, 194, 194));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(30, 30, 31));
  border-color: rgb(194, 194, 194);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(218, 218, 218);
  font-weight: var(--custom-font-weight, 400);
}`,
    properties: `html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(33, 33, 33));
  color: var(--main-color-2, rgb(194, 194, 194));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(30, 30, 31));
  border-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(194, 194, 194);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(30, 30, 31));
}

html[saved-theme="dark"] body abbr {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(33, 33, 33));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body sub {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body summary {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body sup {
  color: rgb(194, 194, 194);
}`,
  },
  light: {
    base: `:root:root {
  --background-1: hsl(var(--accent-h), calc(var(--accent-s) - 20%), 90%, 100%);
  --background-1-h: #bdbdbd;
  --background-1-item: var(--nav-item-color, #5c5c5c);
  --background-1_2: rgb(234, 234, 234);
  --background-2: rgb(255, 255, 255);
  --background-2_h: var(--accent-h, 258);
  --background-2_l: 99%;
  --background-2_s: 10%;
  --background-3: hsl(0, 0%, 98%);
  --background-3-1: rgb(197, 197, 197);
  --background-3-2: rgba(197, 197, 197, 0.288);
  --background-3-3: hsla(0, 0%, 73%, 0.112);
  --background-4: white;
  --background-5: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 90%);
  --background-6: hsla(var(--accent-h), var(--accent-s), var(--accent-l), .2);
  --background-7: rgb(221, 221, 221);
  --background-modifier-form-field: var(--color-base-00, hsl(0, 0%, 98%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(0, 0%, 98%));
  --background-primary: hsl(var(--background-2_h), calc(var(--accent-s)*0 + 0.5%*var(--bgt_s, 1)), calc(var(--background-2_l) - 3% + var(--bgt_l, 0)*1%));
  --background-secondary: var(--background-2, rgb(255, 255, 255));
  --bases-cards-background: var(--background-primary, hsl(258, 0.5%, 96%));
  --bases-cards-radius: var(--radius-m, 1em);
  --bases-table-cell-background-active: var(--background-primary, hsl(258, 0.5%, 96%));
  --bases-table-header-background: var(--background-primary, hsl(258, 0.5%, 96%));
  --bases-table-summary-background: var(--background-primary, hsl(258, 0.5%, 96%));
  --blockquote-border-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --bold-modifier: 300;
  --canvas-background: var(--background-2, rgb(255, 255, 255));
  --canvas-card-label-color: var(--text-faint, hsl(258, 88%, 66%));
  --canvas-dot-pattern: var(--background-3-1, rgb(197, 197, 197));
  --checkbox-border-color: var(--text-faint, hsl(258, 88%, 66%));
  --checkbox-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --checkbox-marker-color: var(--background-primary, hsl(258, 0.5%, 96%));
  --code-background: var(--background-1_2, rgb(234, 234, 234));
  --code-comment: var(--text-faint, hsl(258, 88%, 66%));
  --collapse-icon-color: var(--text-faint, hsl(258, 88%, 66%));
  --color-base-00: var(--background-3, hsl(0, 0%, 98%));
  --color-base-50: var(--colored-accent-1, hsl(258, 88%, 66%));
  --colored-accent-1: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --colored-accent-2: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  --colored-accent-3: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.3);
  --colored-accent-4: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.1);
  --colored-accent-5: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.05);
  --colored-accent-i1: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l)*-100 + 4900%));
  --colored-accent-i2: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l)*-100 + 2000%));
  --custom-accent-bold: var(--colored-accent-1, hsl(258, 88%, 66%));
  --divider-color: var(--background-modifier-border, rgba(200, 200, 200, 0.441));
  --divider-color-hover: var(--interactive-accent, hsl(258, 88%, 66%));
  --dropdown-background: var(--interactive-normal, hsl(0, 0%, 98%));
  --file-header-background: var(--background-primary, hsl(258, 0.5%, 96%));
  --file-header-background-focused: var(--background-primary, hsl(258, 0.5%, 96%));
  --flair-background: var(--interactive-normal, hsl(0, 0%, 98%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(258, 88%, 66%));
  --graph-node-unresolved: var(--text-faint, hsl(258, 88%, 66%));
  --gray: var(--text-faint, var(--color-base-50, hsl(258, 88%, 66%)));
  --heading-formatting: var(--text-faint, hsl(258, 88%, 66%));
  --highlight-1: rgba(0, 0, 0, 0.056);
  --highlight-2: rgba(214, 214, 214, 0.308);
  --input-date-separator: var(--text-faint, hsl(258, 88%, 66%));
  --input-placeholder-color: var(--text-faint, hsl(258, 88%, 66%));
  --interactive-accent: var(--colored-accent-1, hsl(258, 88%, 66%));
  --interactive-normal: var(--color-base-00, hsl(0, 0%, 98%));
  --italic-color: rgb(154, 154, 154);
  --light: var(--background-primary, hsl(var(--background-2_h), calc(var(--accent-s)*0 + 0.5%*var(--bgt_s, 1)), calc(var(--background-2_l) - 3% + var(--bgt_l, 0)*1%)));
  --lightgray: var(--background-secondary, var(--background-2, rgb(255, 255, 255)));
  --line-height-normal: var(--custom-line-height, 1.5);
  --list-marker-color: var(--text-faint, hsl(258, 88%, 66%));
  --main-color: black;
  --main-color-05: rgba(0, 0, 0, 0.116);
  --main-color-2: rgb(56, 56, 56);
  --main-color-inverted: white;
  --main-color-inverted-2: rgb(252, 252, 252);
  --menu-background: var(--background-secondary, rgb(255, 255, 255));
  --menu-radius: var(--radius-m, 1em);
  --modal-background: var(--background-primary, hsl(258, 0.5%, 96%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(258, 88%, 66%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(258, 88%, 66%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(258, 88%, 66%));
  --nav-tag-color: var(--text-faint, hsl(258, 88%, 66%));
  --pdf-background: var(--background-primary, hsl(258, 0.5%, 96%));
  --pdf-page-background: var(--background-primary, hsl(258, 0.5%, 96%));
  --pdf-sidebar-background: var(--background-primary, hsl(258, 0.5%, 96%));
  --pill-color-remove: var(--text-faint, hsl(258, 88%, 66%));
  --popover-height: 1250px;
  --popover-width: 1050px;
  --prompt-background: var(--background-primary, hsl(258, 0.5%, 96%));
  --radius-m: var(--crm, 1em);
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(258, 0.5%, 96%) 65%, transparent) linear-gradient(hsl(258, 0.5%, 96%), color-mix(in srgb, hsl(258, 0.5%, 96%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, rgb(255, 255, 255));
  --ribbon-background-collapsed: var(--background-primary, hsl(258, 0.5%, 96%));
  --search-result-background: var(--background-primary, hsl(258, 0.5%, 96%));
  --secondary: var(--interactive-accent, var(--colored-accent-1, hsl(258, 88%, 66%)));
  --shadow-1: hsla(var(--accent-h), var(--accent-s), 5%, .5);
  --shadow-2: rgba(0, 0, 0, 0.257);
  --shadow-3: rgba(0, 0, 0, 0.08);
  --shadow-4: hsla(var(--background-2_h), calc(var(--accent-s)*0.5 + 0.1%*var(--bgt_s, 1)), calc(var(--background-2_l) - 20% + var(--bgt_l, 0)*1%), .2);
  --shiki-code-background: var(--code-background, rgb(234, 234, 234));
  --shiki-code-comment: var(--text-faint, hsl(258, 88%, 66%));
  --shiki-gutter-text-color: var(--text-faint, hsl(258, 88%, 66%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(258, 88%, 66%));
  --status-bar-background: var(--background-secondary, rgb(255, 255, 255));
  --status-bar-border-color: var(--divider-color, rgba(200, 200, 200, 0.441));
  --status-bar-radius: var(--radius-m, 1em 0 0 0) 0 0 0;
  --suggestion-background: var(--background-primary, hsl(258, 0.5%, 96%));
  --tab-background-active: var(--background-primary, hsl(258, 0.5%, 96%));
  --tab-container-background: var(--background-secondary, rgb(255, 255, 255));
  --tab-outline-color: var(--divider-color, rgba(200, 200, 200, 0.441));
  --tab-switcher-background: var(--background-secondary, rgb(255, 255, 255));
  --tab-text-color: var(--text-faint, hsl(258, 88%, 66%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(258, 88%, 66%));
  --table-drag-handle-color: var(--text-faint, hsl(258, 88%, 66%));
  --table-selection-border-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --tc: rgb(67, 67, 67);
  --text-color-inverted: black;
  --text-faint: var(--color-base-50, hsl(258, 88%, 66%));
  --titlebar-background: var(--background-secondary, rgb(255, 255, 255));
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(245, 245, 245));
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(255, 255, 255));
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(200, 200, 200, 0.44);
  border-right-style: dashed;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(200, 200, 200, 0.44);
  color: rgb(67, 67, 67);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  background-color: rgba(138, 92, 245, 0.1);
  color: var(--colored-accent-1, rgb(138, 92, 245));
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(154, 154, 154));
  outline: rgb(154, 154, 154) none 0px;
  text-decoration-color: rgb(154, 154, 154);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(154, 154, 154));
  outline: rgb(154, 154, 154) none 0px;
  text-decoration-color: rgb(154, 154, 154);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  background-color: rgba(138, 92, 245, 0.1);
  color: var(--colored-accent-1, rgb(138, 92, 245));
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(221, 221, 221));
  color: var(--tc, rgb(67, 67, 67));
  font-weight: 600;
  outline: rgb(67, 67, 67) none 0px;
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body del {
  color: rgb(67, 67, 67);
  outline: rgb(67, 67, 67) none 0px;
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(138, 92, 245));
  border-color: rgb(138, 92, 245);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body dt {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body ol > li {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body ul > li {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(138, 92, 245));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--background-3, rgb(250, 250, 250));
  padding-bottom: 12.8px;
  padding-top: 12.8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body table {
  color: rgb(67, 67, 67);
  margin-top: var(--heading-spacing, 15px);
  width: 204.844px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(67, 67, 67));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: var(--table-border-radius, 8px);
  font-weight: var(--custom-font-weight, 400);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(234, 234, 234));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(234, 234, 234));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body figcaption {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(67, 67, 67);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(67, 67, 67);
  border-radius: 10px;
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  background: rgba(0, 176, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="brainhack"] {
  --background-1-item: #5c5c5c;
  --background-2_h: 258;
  --background-5: hsla(258, 88%, 66%, 90%);
  --background-6: hsla(258, 88%, 66%, .2);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: hsl(0, 0%, 98%);
  --background-modifier-form-field-hover: hsl(0, 0%, 98%);
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(258, 0.5%, 96%);
  --background-primary-alt: #fafafa;
  --background-secondary: rgb(255, 255, 255);
  --background-secondary-alt: #fcfcfc;
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, hsl(258, 0.5%, 96%) 65%, transparent) linear-gradient(hsl(258, 0.5%, 96%), color-mix(in srgb, hsl(258, 0.5%, 96%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-border-color: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-content-radius: 0px;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 0;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-padding: 4px 10px;
  --callout-title-weight: 700;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: rgb(255, 255, 255);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: rgb(197, 197, 197);
  --caret-color: #222222;
  --checkbox-border-color: hsl(258, 88%, 66%);
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: hsl(258, 0.5%, 96%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: rgb(234, 234, 234);
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: hsl(258, 88%, 66%);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: hsl(258, 88%, 66%);
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-00: hsl(0, 0%, 98%);
  --color-base-50: hsl(258, 88%, 66%);
  --colored-accent-1: hsl(258, 88%, 66%);
  --colored-accent-2: hsla(258, 88%, 66%, 0.5);
  --colored-accent-3: hsla(258, 88%, 66%, 0.3);
  --colored-accent-4: hsla(258, 88%, 66%, 0.1);
  --colored-accent-5: hsla(258, 88%, 66%, 0.05);
  --colored-accent-i1: hsl(258, 88%, -1700%);
  --colored-accent-i2: hsl(258, 88%, -4600%);
  --custom-accent-bold: hsl(258, 88%, 66%);
  --divider-color: rgba(200, 200, 200, 0.441);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(0, 0%, 98%);
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(0, 0%, 98%);
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: hsl(258, 88%, 66%);
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(258, 88%, 66%);
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: hsl(0, 0%, 98%);
  --line-height-normal: 1.5;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: rgb(255, 255, 255);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 1em;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(258, 0.5%, 96%);
  --pdf-page-background: hsl(258, 0.5%, 96%);
  --pdf-sidebar-background: hsl(258, 0.5%, 96%);
  --popover-font-size: 16px;
  --radius-m: 1em;
  --raised-background: color-mix(in srgb, hsl(258, 0.5%, 96%) 65%, transparent) linear-gradient(hsl(258, 0.5%, 96%), color-mix(in srgb, hsl(258, 0.5%, 96%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: hsl(258, 0.5%, 96%);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-1: hsla(258, 88%, 5%, .5);
  --shadow-4: hsla(258, 44.1%, 79%, .2);
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: rgb(234, 234, 234);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(258, 88%, 66%);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(258, 88%, 66%);
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(258, 88%, 66%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(258, 0.5%, 96%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: hsl(258, 0.5%, 96%);
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(200, 200, 200, 0.441);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(255, 255, 255);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(255, 255, 255), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: hsl(258, 88%, 66%);
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: hsl(258, 88%, 66%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: hsl(258, 88%, 66%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: inset 0 0 0 .04em hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  color: rgb(67, 67, 67);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  letter-spacing: 0.1px;
  line-height: 24px;
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  background: rgba(255, 6, 93, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  background: rgba(255, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  background: rgba(124, 77, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  background: rgba(255, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  background: rgba(0, 184, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  background: rgba(68, 138, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  background: rgba(255, 160, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  background: rgba(0, 200, 83, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  background: rgba(0, 191, 165, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  background: rgba(0, 184, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  background: rgba(255, 145, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: var(--text-color-inverted, rgb(0, 0, 0));
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(67, 67, 67);
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="brainhack"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(245, 245, 245));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(67, 67, 67);
  outline: rgb(67, 67, 67) none 0px;
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(56, 56, 56));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(67, 67, 67));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(56, 56, 56));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(67, 67, 67));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(67, 67, 67));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(67, 67, 67));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(67, 67, 67));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(67, 67, 67));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(200, 200, 200, 0.44);
  border-left-color: rgba(200, 200, 200, 0.44);
  border-right-color: rgba(200, 200, 200, 0.44);
  border-right-style: dashed;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--main-color, rgb(0, 0, 0));
  font-weight: var(--nav-item-weight, 900);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--main-color, rgb(0, 0, 0));
  font-weight: var(--nav-item-weight, 900);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 900);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(255, 255, 255));
  border-bottom-color: rgba(200, 200, 200, 0.44);
  border-left-color: rgba(200, 200, 200, 0.44);
  border-right-color: rgba(200, 200, 200, 0.44);
  border-top-color: rgba(200, 200, 200, 0.44);
  border-top-left-radius: 12px;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(138, 92, 245));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: var(--background-2, rgb(255, 255, 255));
  color: var(--tc, rgb(67, 67, 67));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(245, 245, 245));
  border-color: rgb(67, 67, 67);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(34, 34, 34);
  font-weight: var(--custom-font-weight, 400);
}`,
    properties: `html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(245, 245, 245));
  color: var(--main-color-2, rgb(67, 67, 67));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(255, 255, 255));
  border-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(67, 67, 67);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(255, 255, 255));
}

html[saved-theme="light"] body abbr {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(234, 234, 234));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body sub {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body summary {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body sup {
  color: rgb(67, 67, 67);
}`,
  },
  extras: `/* Screen/multiply blending for translucent layering effect */
.workspace-leaf-content {
  mix-blend-mode: screen;
}

.theme-light .workspace-leaf-content {
  mix-blend-mode: multiply;
}
`,
  classSettings: {
    smartlists: {
      general: `body.smartlists li:not(:first-of-type) {
margin-top: .8em;
margin-bottom: 0em;
}`,
    },
    hv1: {
      general: `body.hv1 .cm-header.cm-header-1:not(.cm-formatting.cm-formatting-header.cm-formatting-header-1.cm-header.cm-header-1), body.hv1 .markdown-rendered h1 {
color: var(--main-color-2);
display: inline-block;
background: var(--background-7);
translate: -.05em;
padding: .1rem .3rem .08rem .3rem;
margin: 0px;
margin: 0em !important;
-moz-border-bottom-left-radius: var(--h1-radius);
-webkit-border-bottom-left-radius: var(--h1-radius);
border-bottom-left-radius: var(--h1-radius);
-moz-border-bottom-right-radius: var(--h1-radius);
-webkit-border-bottom-right-radius: var(--h1-radius);
border-bottom-right-radius: var(--h1-radius);
-moz-border-top-right-radius: var(--h1-radius);
-webkit-border-top-right-radius: var(--h1-radius);
border-top-right-radius: var(--h1-radius);
-moz-border-top-left-radius: var(--h1-radius);
-webkit-border-top-left-radius: var(--h1-radius);
border-top-left-radius: var(--h1-radius);
-webkit-box-decoration-break: clone;
-o-box-decoration-break: clone;
box-decoration-break: clone;
--h1-radius: .3em;
}

body.hv1 .cm-header.cm-header-2:not(.cm-formatting.cm-formatting-header.cm-formatting-header-2.cm-header.cm-header-2), body.hv1 .markdown-rendered h2 {
color: var(--main-color-2);
display: inline-block;
translate: -.05em;
padding: .1rem .3rem .08rem .3rem;
margin: 0px;
border: .1em dashed;
font-weight: 600;
border-color: var(--colored-accent-4);
background-color: var(--colored-accent-5);
-moz-border-bottom-left-radius: var(--mark-radius);
-webkit-border-bottom-left-radius: var(--mark-radius);
border-bottom-left-radius: var(--mark-radius);
-moz-border-bottom-right-radius: var(--mark-radius);
-webkit-border-bottom-right-radius: var(--mark-radius);
border-bottom-right-radius: var(--mark-radius);
-moz-border-top-right-radius: var(--mark-radius);
-webkit-border-top-right-radius: var(--mark-radius);
border-top-right-radius: var(--mark-radius);
-moz-border-top-left-radius: var(--mark-radius);
-webkit-border-top-left-radius: var(--mark-radius);
border-top-left-radius: var(--mark-radius);
-webkit-box-decoration-break: clone;
-o-box-decoration-break: clone;
box-decoration-break: clone;
--mark-radius: .4em;
}

body.hv1 .cm-header.cm-header-3:not(.cm-formatting.cm-formatting-header.cm-formatting-header-3.cm-header.cm-header-3), body.hv1 .markdown-rendered h3 {
display: inline-block;
translate: -.05em;
padding: .1rem .3rem .08rem .3rem;
margin-bottom: 0px;
border: .08em dashed;
border-color: var(--colored-accent-4);
background-color: var(--colored-accent-5);
-moz-border-bottom-left-radius: var(--mark-radius);
-webkit-border-bottom-left-radius: var(--mark-radius);
border-bottom-left-radius: var(--mark-radius);
-moz-border-bottom-right-radius: var(--mark-radius);
-webkit-border-bottom-right-radius: var(--mark-radius);
border-bottom-right-radius: var(--mark-radius);
-moz-border-top-right-radius: var(--mark-radius);
-webkit-border-top-right-radius: var(--mark-radius);
border-top-right-radius: var(--mark-radius);
-moz-border-top-left-radius: var(--mark-radius);
-webkit-border-top-left-radius: var(--mark-radius);
border-top-left-radius: var(--mark-radius);
-webkit-box-decoration-break: clone;
-o-box-decoration-break: clone;
box-decoration-break: clone;
--mark-radius: .4em;
}`,
    },
    hv2: {
      general: `body.hv2 .cm-header.cm-header-1:not(.cm-formatting.cm-formatting-header.cm-formatting-header-1.cm-header.cm-header-1), body.hv2 .markdown-rendered h1 {
color: var(--main-color-2);
border-bottom: .1em solid var(--tc);
}

body.hv2 .cm-header.cm-header-2:not(.cm-formatting.cm-formatting-header.cm-formatting-header-2.cm-header.cm-header-2), body.hv2 .markdown-rendered h2 {
color: var(--main-color-2);
border-bottom: .1em solid var(--tc);
}

body.hv2 .cm-header.cm-header-3:not(.cm-formatting.cm-formatting-header.cm-formatting-header-3.cm-header.cm-header-3), body.hv2 .markdown-rendered h3 {
color: var(--main-color-2);
border-bottom: .1em solid var(--tc);
}`,
    },
    bv1: {
      general: `body.bv1 .markdown-source-view.mod-cm6.is-live-preview .HyperMD-quote, body.bv1 .markdown-rendered blockquote, body.bv1 .blockquote {
border-left: .3em solid var(--tc);
border-radius: .5em;
border-top-left-radius: 0 !important;
border-bottom-left-radius: 0 !important;
background: var(--background-3-3);
box-shadow: none !important;
padding-left: .8em;
padding-right: .8em !important;
margin-top: 1em;
margin-bottom: 1em;
}`,
    },
    cv1: {
      general: `body.cv1 .callout {
mix-blend-mode: normal !important;
--callout-padding: 0;
border-left: .3em solid var(--tc);
border-radius: .5em;
border-top-left-radius: 0 !important;
border-bottom-left-radius: 0 !important;
background: var(--background-3-3);
box-shadow: none !important;
}

body.cv1 .cm-embed-block.cm-callout {
border-top-left-radius: 0 !important;
border-bottom-left-radius: 0 !important;
bottom: 0 !important;
overflow: hidden !important;
}`,
    },
    nc: {
      general: `body.nc .markdown-embed-content .node-insert-event {
background: var(--canvas-color) !important;
}`,
    },
    "status-bar-hover": {
      general: `body.status-bar-hover .status-bar {
opacity: 0;
transition: all .5s;
&:hover {        
        opacity: 1;
    };
}`,
    },
    "greyscale-toggle": {
      dark: `.theme-dark img {
border-radius: 10px;
mix-blend-mode: screen !important;
filter: invert(1) grayscale(100%) !important;
}`,
      light: `.theme-light img {
border-radius: 10px;
mix-blend-mode: multiply !important;
filter: grayscale(100%) !important;
}`,
    },
    "enhanced-folders": {
      general: `.enhanced-folders .tree-item.nav-folder:not(.is-collapsed):not(:has(.tree-item.nav-folder:not(.is-collapsed))) {
background: var(--background-3-2);
border-radius: .8em;
transition: .4s;
}`,
    },
    "hide-scrollbars": {
      general: `body:not(.native-scrollbars).hide-scrollbars ::-webkit-scrollbar {
width: 0px;
height: 0px;
}`,
    },
  },
};
