import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "kiwi-mono",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cascadia-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(258, 88%, 66%) !important;
  --accent-shade-1: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 95%) 30%) !important;
  --accent-shade-2: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 95%) 50%) !important;
  --accent-shade-3: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 95%) 80%) !important;
  --accent-shade-4: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 95%) 90%) !important;
  --accent-tint-1: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 10%) 20%) !important;
  --accent-tint-2: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 10%) 40%) !important;
  --accent-tint-3: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 10%) 80%) !important;
  --accent-tint-4: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 10%) 90%) !important;
  --background-primary: #111 !important;
  --background-primary-alt: #222 !important;
  --background-secondary: #111 !important;
  --bases-cards-background: #111 !important;
  --bases-cards-cover-background: #222 !important;
  --bases-group-heading-property-color: #777 !important;
  --bases-table-cell-background-active: #111 !important;
  --bases-table-cell-background-disabled: #222 !important;
  --bases-table-group-background: #222 !important;
  --bases-table-header-background: #111 !important;
  --bases-table-header-color: #777 !important;
  --bases-table-summary-background: #111 !important;
  --canvas-background: #111 !important;
  --canvas-card-label-color: #555 !important;
  --caret-color: #aaa !important;
  --checkbox-border-color: #555 !important;
  --checkbox-border-color-hover: #777 !important;
  --checkbox-marker-color: #111 !important;
  --checklist-done-color: #777 !important;
  --code-background: #242936 !important;
  --code-background-inline: #242936 !important;
  --code-comment: #b8cfe688 !important;
  --code-function: #ffd173 !important;
  --code-important: #ffdfb3 !important;
  --code-keyword: #ffad66 !important;
  --code-normal: #cccac2 !important;
  --code-operator: #f29e74 !important;
  --code-property: #73d0ff !important;
  --code-punctuation: #cccac2 !important;
  --code-string: #d5ff80 !important;
  --code-tag: #5ccfe6 !important;
  --code-value: #dfbfff !important;
  --collapse-icon-color: #555 !important;
  --dark: #aaa !important;
  --darkgray: #aaa !important;
  --divider-color: transparent !important;
  --file-header-background: #111 !important;
  --file-header-background-focused: #111 !important;
  --flair-color: #aaa !important;
  --footnote-id-color: #777 !important;
  --footnote-id-color-no-occurrences: #555 !important;
  --graph-node: #777 !important;
  --graph-node-unresolved: #555 !important;
  --graph-text: #aaa !important;
  --gray: #777 !important;
  --heading-formatting: #555 !important;
  --icon-color: #777 !important;
  --icon-color-focused: #aaa !important;
  --icon-color-hover: #777 !important;
  --input-date-separator: #555 !important;
  --input-placeholder-color: #555 !important;
  --light: #111 !important;
  --lightgray: #111 !important;
  --list-marker-color: #555 !important;
  --list-marker-color-hover: #777 !important;
  --menu-background: #111 !important;
  --metadata-input-text-color: #aaa !important;
  --metadata-label-text-color: #777 !important;
  --metadata-label-text-color-hover: #777 !important;
  --modal-background: #111 !important;
  --nav-collapse-icon-color: #555 !important;
  --nav-collapse-icon-color-collapsed: #555 !important;
  --nav-heading-color: #aaa !important;
  --nav-heading-color-collapsed: #555 !important;
  --nav-heading-color-collapsed-hover: #777 !important;
  --nav-heading-color-hover: #aaa !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-item-background-active: hsl(258, 88%, 66%) !important;
  --nav-item-background-hover: #222 !important;
  --nav-item-color: #777 !important;
  --nav-item-color-active: #111 !important;
  --nav-item-color-hover: #aaa !important;
  --nav-item-color-selected: #aaa !important;
  --nav-tag-color: #555 !important;
  --nav-tag-color-active: #777 !important;
  --nav-tag-color-hover: #777 !important;
  --pdf-background: #111 !important;
  --pdf-page-background: #111 !important;
  --pdf-sidebar-background: #111 !important;
  --pill-color: #777 !important;
  --pill-color-hover: #aaa !important;
  --pill-color-remove: #555 !important;
  --prompt-background: #111 !important;
  --ribbon-background: #111 !important;
  --ribbon-background-collapsed: #111 !important;
  --search-clear-button-color: #777 !important;
  --search-icon-color: #777 !important;
  --search-result-background: #111 !important;
  --setting-group-heading-color: #aaa !important;
  --setting-items-background: #222 !important;
  --status-bar-background: #111 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #777 !important;
  --suggestion-background: #111 !important;
  --tab-background-active: #111 !important;
  --tab-container-background: #111 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-outline-width: 0 !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #111 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #111, transparent) !important;
  --tab-text-color: #555 !important;
  --tab-text-color-active: #777 !important;
  --tab-text-color-focused: #777 !important;
  --tab-text-color-focused-active: hsl(255, 89.76%, 75.9%) !important;
  --tab-text-color-focused-active-current: hsl(255, 89.76%, 75.9%) !important;
  --table-drag-handle-color: #555 !important;
  --table-header-color: #aaa !important;
  --text-faint: #555 !important;
  --text-muted: #777 !important;
  --text-normal: #aaa !important;
  --titlebar-background: #111 !important;
  --titlebar-background-focused: #111 !important;
  --titlebar-border-color: transparent !important;
  --titlebar-text-color: #777 !important;
  --titlebar-text-color-focused: #aaa !important;
  --vault-profile-color: #aaa !important;
  --vault-profile-color-hover: #aaa !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 17, 17);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body del {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body p {
  color: rgb(119, 119, 119);
  outline: rgb(119, 119, 119) none 0px;
  text-decoration-color: rgb(119, 119, 119);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(83, 223, 221);
  outline: rgb(83, 223, 221) none 0px;
  text-decoration-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(251, 70, 76);
  outline: rgb(251, 70, 76) none 0px;
  text-decoration: rgb(251, 70, 76);
  text-decoration-color: rgb(251, 70, 76);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="dark"] body dt {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(85, 85, 85);
}

html[saved-theme="dark"] body blockquote {
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body table {
  color: rgb(170, 170, 170);
  width: 662px;
}

html[saved-theme="dark"] body td {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body th {
  color: rgb(170, 170, 170);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 41, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 41, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(255, 209, 115);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 209, 115);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 209, 115);
  border-left-color: rgb(255, 209, 115);
  border-right-color: rgb(255, 209, 115);
  border-top-color: rgb(255, 209, 115);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(36, 41, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 13.9499px;
  padding-left: 13.9499px;
  padding-right: 13.9499px;
  padding-top: 13.9499px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(36, 41, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 13.9499px;
  padding-left: 13.9499px;
  padding-right: 13.9499px;
  padding-top: 13.9499px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 15px;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(119, 119, 119);
  text-decoration-color: rgb(119, 119, 119);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(17, 17, 17);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  gap: 8.78906px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 2px;
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 2px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 2px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(168, 130, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 130, 255);
  border-left-width: 2px;
  border-right-color: rgb(168, 130, 255);
  border-top-color: rgb(168, 130, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 2px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 2px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 2px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 2px;
  border-right-color: rgb(233, 151, 63);
  border-top-color: rgb(233, 151, 63);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 2px;
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(68, 207, 110);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(68, 207, 110);
  border-left-width: 2px;
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 2px;
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 2px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 2px;
  border-right-color: rgb(233, 151, 63);
  border-top-color: rgb(233, 151, 63);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(170, 170, 170);
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

html[saved-theme="dark"] body h1 {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body h2 {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body h3 {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body h4 {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body h5 {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body h6 {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 2px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 15.3809px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(119, 119, 119);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(119, 119, 119);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(119, 119, 119);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(119, 119, 119);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(119, 119, 119);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(119, 119, 119);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(119, 119, 119);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(119, 119, 119);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(119, 119, 119);
  stroke: rgb(119, 119, 119);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(85, 85, 85);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(119, 119, 119);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body abbr {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(36, 41, 54);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body sub {
  color: rgb(170, 170, 170);
  font-size: 12.5px;
}

html[saved-theme="dark"] body summary {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body sup {
  color: rgb(170, 170, 170);
  font-size: 12.5px;
}`,
  },
  light: {
    base: `:root:root {
  --accent: hsl(258, 88%, 66%) !important;
  --accent-shade-1: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 10%) 20%) !important;
  --accent-shade-2: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 10%) 40%) !important;
  --accent-shade-3: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 10%) 80%) !important;
  --accent-shade-4: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 10%) 90%) !important;
  --accent-tint-1: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 95%) 30%) !important;
  --accent-tint-2: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 95%) 50%) !important;
  --accent-tint-3: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 95%) 80%) !important;
  --accent-tint-4: color-mix(in lch, hsl(258, 88%, 66%), hsl(258, 88%, 95%) 90%) !important;
  --background-primary: #fff !important;
  --background-primary-alt: #eee !important;
  --background-secondary: #fff !important;
  --bases-cards-background: #fff !important;
  --bases-cards-cover-background: #eee !important;
  --bases-group-heading-property-color: #888 !important;
  --bases-table-cell-background-active: #fff !important;
  --bases-table-cell-background-disabled: #eee !important;
  --bases-table-group-background: #eee !important;
  --bases-table-header-background: #fff !important;
  --bases-table-header-color: #888 !important;
  --bases-table-summary-background: #fff !important;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --canvas-background: #fff !important;
  --canvas-card-label-color: #bbb !important;
  --caret-color: #444 !important;
  --checkbox-border-color: #bbb !important;
  --checkbox-border-color-hover: #888 !important;
  --checkbox-marker-color: #fff !important;
  --checklist-done-color: #888 !important;
  --code-background: #f8f8f8 !important;
  --code-background-inline: #f2f2f2 !important;
  --code-comment: #787b8088 !important;
  --code-function: #f2ae49 !important;
  --code-important: #e6ba7e !important;
  --code-keyword: #fa8d3e !important;
  --code-normal: #5c6166 !important;
  --code-operator: #ed9366 !important;
  --code-property: #399ee6 !important;
  --code-punctuation: #5c6166 !important;
  --code-string: #86b300 !important;
  --code-tag: #55b4d4 !important;
  --code-value: #a37acc !important;
  --collapse-icon-color: #bbb !important;
  --dark: #444 !important;
  --darkgray: #444 !important;
  --divider-color: transparent !important;
  --file-header-background: #fff !important;
  --file-header-background-focused: #fff !important;
  --flair-color: #444 !important;
  --footnote-id-color: #888 !important;
  --footnote-id-color-no-occurrences: #bbb !important;
  --graph-node: #888 !important;
  --graph-node-unresolved: #bbb !important;
  --graph-text: #444 !important;
  --gray: #888 !important;
  --heading-formatting: #bbb !important;
  --icon-color: #888 !important;
  --icon-color-focused: #444 !important;
  --icon-color-hover: #888 !important;
  --input-date-separator: #bbb !important;
  --input-placeholder-color: #bbb !important;
  --light: #fff !important;
  --lightgray: #fff !important;
  --list-marker-color: #bbb !important;
  --list-marker-color-hover: #888 !important;
  --menu-background: #fff !important;
  --metadata-input-text-color: #444 !important;
  --metadata-label-text-color: #888 !important;
  --metadata-label-text-color-hover: #888 !important;
  --modal-background: #fff !important;
  --nav-collapse-icon-color: #bbb !important;
  --nav-collapse-icon-color-collapsed: #bbb !important;
  --nav-heading-color: #444 !important;
  --nav-heading-color-collapsed: #bbb !important;
  --nav-heading-color-collapsed-hover: #888 !important;
  --nav-heading-color-hover: #444 !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-item-background-active: hsl(258, 88%, 66%) !important;
  --nav-item-background-hover: #eee !important;
  --nav-item-color: #888 !important;
  --nav-item-color-active: #fff !important;
  --nav-item-color-hover: #444 !important;
  --nav-item-color-selected: #444 !important;
  --nav-tag-color: #bbb !important;
  --nav-tag-color-active: #888 !important;
  --nav-tag-color-hover: #888 !important;
  --pdf-background: #fff !important;
  --pdf-page-background: #fff !important;
  --pdf-sidebar-background: #fff !important;
  --pill-color: #888 !important;
  --pill-color-hover: #444 !important;
  --pill-color-remove: #bbb !important;
  --prompt-background: #fff !important;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --ribbon-background: #fff !important;
  --ribbon-background-collapsed: #fff !important;
  --search-clear-button-color: #888 !important;
  --search-icon-color: #888 !important;
  --search-result-background: #fff !important;
  --setting-group-heading-color: #444 !important;
  --setting-items-background: #eee !important;
  --status-bar-background: #fff !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #888 !important;
  --suggestion-background: #fff !important;
  --tab-background-active: #fff !important;
  --tab-container-background: #fff !important;
  --tab-curve: 0 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-outline-width: 0 !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #fff !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fff, transparent) !important;
  --tab-text-color: #bbb !important;
  --tab-text-color-active: #888 !important;
  --tab-text-color-focused: #888 !important;
  --tab-text-color-focused-active: hsl(258, 88%, 66%) !important;
  --tab-text-color-focused-active-current: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: #bbb !important;
  --table-header-color: #444 !important;
  --text-faint: #bbb !important;
  --text-muted: #888 !important;
  --text-normal: #444 !important;
  --titlebar-background: #fff !important;
  --titlebar-background-focused: #fff !important;
  --titlebar-border-color: transparent !important;
  --titlebar-text-color: #888 !important;
  --titlebar-text-color-focused: #444 !important;
  --vault-profile-color: #444 !important;
  --vault-profile-color-hover: #444 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(68, 68, 68);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body del {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body p {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 191, 188);
  outline: rgb(0, 191, 188) none 0px;
  text-decoration-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(233, 49, 71);
  outline: rgb(233, 49, 71) none 0px;
  text-decoration: rgb(233, 49, 71);
  text-decoration-color: rgb(233, 49, 71);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="light"] body dt {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body ol > li {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body ul > li {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(187, 187, 187);
}

html[saved-theme="light"] body blockquote {
  font-style: italic;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body table {
  color: rgb(68, 68, 68);
  width: 662px;
}

html[saved-theme="light"] body td {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body th {
  color: rgb(68, 68, 68);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 248, 248);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 248, 248);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(242, 174, 73);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(242, 174, 73);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(242, 174, 73);
  border-left-color: rgb(242, 174, 73);
  border-right-color: rgb(242, 174, 73);
  border-top-color: rgb(242, 174, 73);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(248, 248, 248);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 13.9499px;
  padding-left: 13.9499px;
  padding-right: 13.9499px;
  padding-top: 13.9499px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(248, 248, 248);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 13.9499px;
  padding-left: 13.9499px;
  padding-right: 13.9499px;
  padding-top: 13.9499px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body figcaption {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 15px;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  gap: 8.78906px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 191, 188);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 191, 188);
  border-left-width: 2px;
  border-right-color: rgb(0, 191, 188);
  border-top-color: rgb(0, 191, 188);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 2px;
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 2px;
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(120, 82, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(120, 82, 238);
  border-left-width: 2px;
  border-right-color: rgb(120, 82, 238);
  border-top-color: rgb(120, 82, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 2px;
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 2px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 2px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 117, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 117, 0);
  border-left-width: 2px;
  border-right-color: rgb(236, 117, 0);
  border-top-color: rgb(236, 117, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 2px;
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(8, 185, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 185, 78);
  border-left-width: 2px;
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 191, 188);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 191, 188);
  border-left-width: 2px;
  border-right-color: rgb(0, 191, 188);
  border-top-color: rgb(0, 191, 188);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 2px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 117, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 117, 0);
  border-left-width: 2px;
  border-right-color: rgb(236, 117, 0);
  border-top-color: rgb(236, 117, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(68, 68, 68);
  outline: rgb(68, 68, 68) none 0px;
  text-decoration-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

html[saved-theme="light"] body h1 {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body h2 {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body h3 {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body h4 {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body h5 {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body h6 {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 2px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 15.3809px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(136, 136, 136);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(187, 187, 187);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .metadata {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body abbr {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body sub {
  color: rgb(68, 68, 68);
  font-size: 12.5px;
}

html[saved-theme="light"] body summary {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body sup {
  color: rgb(68, 68, 68);
  font-size: 12.5px;
}`,
  },
};
