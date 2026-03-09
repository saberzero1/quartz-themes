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
  --accent: rgb(138, 92, 245);
  --accent-shade-1: color-mix(in lch, rgb(138, 92, 245), rgb(238, 231, 253) 30%);
  --accent-shade-2: color-mix(in lch, rgb(138, 92, 245), rgb(238, 231, 253) 50%);
  --accent-shade-3: color-mix(in lch, rgb(138, 92, 245), rgb(238, 231, 253) 80%);
  --accent-shade-4: color-mix(in lch, rgb(138, 92, 245), rgb(238, 231, 253) 90%);
  --accent-tint-1: color-mix(in lch, rgb(138, 92, 245), rgb(17, 3, 48) 20%);
  --accent-tint-2: color-mix(in lch, rgb(138, 92, 245), rgb(17, 3, 48) 40%);
  --accent-tint-3: color-mix(in lch, rgb(138, 92, 245), rgb(17, 3, 48) 80%);
  --accent-tint-4: color-mix(in lch, rgb(138, 92, 245), rgb(17, 3, 48) 90%);
  --background-primary: #111;
  --background-primary-alt: #222;
  --background-secondary: #111;
  --bases-cards-background: #111;
  --bases-cards-cover-background: #222;
  --bases-group-heading-property-color: #777;
  --bases-table-cell-background-active: #111;
  --bases-table-cell-background-disabled: #222;
  --bases-table-group-background: #222;
  --bases-table-header-background: #111;
  --bases-table-header-color: #777;
  --bases-table-summary-background: #111;
  --canvas-background: #111;
  --canvas-card-label-color: #555;
  --caret-color: #aaa;
  --checkbox-border-color: #555;
  --checkbox-border-color-hover: #777;
  --checkbox-marker-color: #111;
  --checklist-done-color: #777;
  --code-background: #242936;
  --code-background-inline: #242936;
  --code-comment: #b8cfe688;
  --code-function: #ffd173;
  --code-important: #ffdfb3;
  --code-keyword: #ffad66;
  --code-normal: #cccac2;
  --code-operator: #f29e74;
  --code-property: #73d0ff;
  --code-punctuation: #cccac2;
  --code-string: #d5ff80;
  --code-tag: #5ccfe6;
  --code-value: #dfbfff;
  --collapse-icon-color: #555;
  --divider-color: transparent;
  --file-header-background: #111;
  --file-header-background-focused: #111;
  --flair-color: #aaa;
  --footnote-id-color: #777;
  --footnote-id-color-no-occurrences: #555;
  --graph-node: #777;
  --graph-node-unresolved: #555;
  --graph-text: #aaa;
  --heading-formatting: #555;
  --icon-color: #777;
  --icon-color-focused: #aaa;
  --icon-color-hover: #777;
  --input-date-separator: #555;
  --input-placeholder-color: #555;
  --list-marker-color: #555;
  --list-marker-color-hover: #777;
  --menu-background: #111;
  --metadata-input-text-color: #aaa;
  --metadata-label-text-color: #777;
  --metadata-label-text-color-hover: #777;
  --modal-background: #111;
  --nav-collapse-icon-color: #555;
  --nav-collapse-icon-color-collapsed: #555;
  --nav-heading-color: #aaa;
  --nav-heading-color-collapsed: #555;
  --nav-heading-color-collapsed-hover: #777;
  --nav-heading-color-hover: #aaa;
  --nav-indentation-guide-color: transparent;
  --nav-item-background-active: rgb(138, 92, 245);
  --nav-item-background-hover: #222;
  --nav-item-color: #777;
  --nav-item-color-active: #111;
  --nav-item-color-hover: #aaa;
  --nav-item-color-selected: #aaa;
  --nav-tag-color: #555;
  --nav-tag-color-active: #777;
  --nav-tag-color-hover: #777;
  --pdf-background: #111;
  --pdf-page-background: #111;
  --pdf-sidebar-background: #111;
  --pill-color: #777;
  --pill-color-hover: #aaa;
  --pill-color-remove: #555;
  --prompt-background: #111;
  --ribbon-background: #111;
  --ribbon-background-collapsed: #111;
  --search-clear-button-color: #777;
  --search-icon-color: #777;
  --search-result-background: #111;
  --setting-group-heading-color: #aaa;
  --setting-items-background: #222;
  --status-bar-background: #111;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #777;
  --suggestion-background: #111;
  --tab-background-active: #111;
  --tab-container-background: #111;
  --tab-curve: 0;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-outline-width: 0;
  --tab-radius-active: 4px;
  --tab-switcher-background: #111;
  --tab-switcher-menubar-background: linear-gradient(to top, #111, transparent);
  --tab-text-color: #555;
  --tab-text-color-active: #777;
  --tab-text-color-focused: #777;
  --tab-text-color-focused-active: rgb(166, 139, 249);
  --tab-text-color-focused-active-current: rgb(166, 139, 249);
  --table-drag-handle-color: #555;
  --table-header-color: #aaa;
  --text-faint: #555;
  --text-muted: #777;
  --text-normal: #aaa;
  --titlebar-background: #111;
  --titlebar-background-focused: #111;
  --titlebar-border-color: transparent;
  --titlebar-text-color: #777;
  --titlebar-text-color-focused: #aaa;
  --vault-profile-color: #aaa;
  --vault-profile-color-hover: #aaa;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 17, 17);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

body div#quartz-root {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}`,
    typography: `body .page article p > b, b {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .page article p > em, em {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .page article p > i, i {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .page article p > strong, strong {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .text-highlight {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body del {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: line-through rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body p {
  color: rgb(119, 119, 119);
  outline: rgb(119, 119, 119) none 0px;
  text-decoration: rgb(119, 119, 119);
  text-decoration-color: rgb(119, 119, 119);
}`,
    links: `body a.external, footer a {
  color: rgb(83, 223, 221);
  outline: rgb(83, 223, 221) none 0px;
  text-decoration: rgb(83, 223, 221);
  text-decoration-color: rgb(83, 223, 221);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(166, 138, 249);
}

body a.internal.broken {
  color: rgb(251, 70, 76);
  outline: rgb(251, 70, 76) none 0px;
  text-decoration: rgb(251, 70, 76);
  text-decoration-color: rgb(251, 70, 76);
}`,
    lists: `body dd {
  color: rgb(170, 170, 170);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(170, 170, 170);
}

body ol > li {
  color: rgb(170, 170, 170);
}

body ol.overflow {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body ul > li {
  color: rgb(170, 170, 170);
}

body ul.overflow {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
}

body blockquote {
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body table {
  color: rgb(170, 170, 170);
  width: 662px;
}

body td {
  color: rgb(170, 170, 170);
}

body th {
  color: rgb(170, 170, 170);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 41, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 41, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(170, 170, 170);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 209, 115);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 209, 115);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 209, 115);
  border-left-color: rgb(255, 209, 115);
  border-right-color: rgb(255, 209, 115);
  border-top-color: rgb(255, 209, 115);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body figcaption {
  color: rgb(170, 170, 170);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 15px;
}

body figure {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  margin-bottom: 15px;
  margin-top: 15px;
}

body img {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body video {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body .transclude {
  border-bottom-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body .transclude-inner {
  border-bottom-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(119, 119, 119);
  text-decoration: line-through rgb(119, 119, 119);
  text-decoration-color: rgb(119, 119, 119);
}

body input[type=checkbox] {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='!'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='*'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='-'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='/'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='>'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='?'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='I'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='S'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='b'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='c'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='d'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='f'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='i'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='k'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='l'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='p'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='u'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='w'] {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}`,
    callouts: `body .callout .callout-title {
  gap: 8.78906px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
}

body .search > .search-container > .search-space > * {
  color: rgb(170, 170, 170);
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(170, 170, 170);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

body h1 {
  color: rgb(170, 170, 170);
}

body h2 {
  color: rgb(170, 170, 170);
}

body h2.page-title, h2.page-title a {
  color: rgb(170, 170, 170);
}

body h3 {
  color: rgb(170, 170, 170);
}

body h4 {
  color: rgb(170, 170, 170);
}

body h5 {
  color: rgb(170, 170, 170);
}

body h6 {
  color: rgb(170, 170, 170);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}`,
    footer: `body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(119, 119, 119);
}

body footer ul li a {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(170, 170, 170);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(119, 119, 119);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body li.section-li > .section .meta {
  color: rgb(119, 119, 119);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}

body ul.section-ul {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

body .darkmode svg {
  color: rgb(119, 119, 119);
  stroke: rgb(119, 119, 119);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

body .breadcrumb-element p {
  color: rgb(85, 85, 85);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body .metadata {
  color: rgb(119, 119, 119);
}

body .metadata-properties {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

body .page-header h2.page-title {
  color: rgb(170, 170, 170);
}

body abbr {
  color: rgb(170, 170, 170);
  text-decoration: underline dotted rgb(170, 170, 170);
}

body details {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body input[type=text] {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body sub {
  color: rgb(170, 170, 170);
  font-size: 12.5px;
}

body summary {
  color: rgb(170, 170, 170);
}

body sup {
  color: rgb(170, 170, 170);
  font-size: 12.5px;
}`,
  },
  light: {
    base: `:root:root {
  --accent: rgb(138, 92, 245);
  --accent-shade-1: color-mix(in lch, rgb(138, 92, 245), rgb(17, 3, 48) 20%);
  --accent-shade-2: color-mix(in lch, rgb(138, 92, 245), rgb(17, 3, 48) 40%);
  --accent-shade-3: color-mix(in lch, rgb(138, 92, 245), rgb(17, 3, 48) 80%);
  --accent-shade-4: color-mix(in lch, rgb(138, 92, 245), rgb(17, 3, 48) 90%);
  --accent-tint-1: color-mix(in lch, rgb(138, 92, 245), rgb(238, 231, 253) 30%);
  --accent-tint-2: color-mix(in lch, rgb(138, 92, 245), rgb(238, 231, 253) 50%);
  --accent-tint-3: color-mix(in lch, rgb(138, 92, 245), rgb(238, 231, 253) 80%);
  --accent-tint-4: color-mix(in lch, rgb(138, 92, 245), rgb(238, 231, 253) 90%);
  --background-primary: #fff;
  --background-primary-alt: #eee;
  --background-secondary: #fff;
  --bases-cards-background: #fff;
  --bases-cards-cover-background: #eee;
  --bases-group-heading-property-color: #888;
  --bases-table-cell-background-active: #fff;
  --bases-table-cell-background-disabled: #eee;
  --bases-table-group-background: #eee;
  --bases-table-header-background: #fff;
  --bases-table-header-color: #888;
  --bases-table-summary-background: #fff;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --canvas-background: #fff;
  --canvas-card-label-color: #bbb;
  --caret-color: #444;
  --checkbox-border-color: #bbb;
  --checkbox-border-color-hover: #888;
  --checkbox-marker-color: #fff;
  --checklist-done-color: #888;
  --code-background: #f8f8f8;
  --code-background-inline: #f2f2f2;
  --code-comment: #787b8088;
  --code-function: #f2ae49;
  --code-important: #e6ba7e;
  --code-keyword: #fa8d3e;
  --code-normal: #5c6166;
  --code-operator: #ed9366;
  --code-property: #399ee6;
  --code-punctuation: #5c6166;
  --code-string: #86b300;
  --code-tag: #55b4d4;
  --code-value: #a37acc;
  --collapse-icon-color: #bbb;
  --divider-color: transparent;
  --file-header-background: #fff;
  --file-header-background-focused: #fff;
  --flair-color: #444;
  --footnote-id-color: #888;
  --footnote-id-color-no-occurrences: #bbb;
  --graph-node: #888;
  --graph-node-unresolved: #bbb;
  --graph-text: #444;
  --heading-formatting: #bbb;
  --icon-color: #888;
  --icon-color-focused: #444;
  --icon-color-hover: #888;
  --input-date-separator: #bbb;
  --input-placeholder-color: #bbb;
  --list-marker-color: #bbb;
  --list-marker-color-hover: #888;
  --menu-background: #fff;
  --metadata-input-text-color: #444;
  --metadata-label-text-color: #888;
  --metadata-label-text-color-hover: #888;
  --modal-background: #fff;
  --nav-collapse-icon-color: #bbb;
  --nav-collapse-icon-color-collapsed: #bbb;
  --nav-heading-color: #444;
  --nav-heading-color-collapsed: #bbb;
  --nav-heading-color-collapsed-hover: #888;
  --nav-heading-color-hover: #444;
  --nav-indentation-guide-color: transparent;
  --nav-item-background-active: rgb(138, 92, 245);
  --nav-item-background-hover: #eee;
  --nav-item-color: #888;
  --nav-item-color-active: #fff;
  --nav-item-color-hover: #444;
  --nav-item-color-selected: #444;
  --nav-tag-color: #bbb;
  --nav-tag-color-active: #888;
  --nav-tag-color-hover: #888;
  --pdf-background: #fff;
  --pdf-page-background: #fff;
  --pdf-sidebar-background: #fff;
  --pill-color: #888;
  --pill-color-hover: #444;
  --pill-color-remove: #bbb;
  --prompt-background: #fff;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --ribbon-background: #fff;
  --ribbon-background-collapsed: #fff;
  --search-clear-button-color: #888;
  --search-icon-color: #888;
  --search-result-background: #fff;
  --setting-group-heading-color: #444;
  --setting-items-background: #eee;
  --status-bar-background: #fff;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #888;
  --suggestion-background: #fff;
  --tab-background-active: #fff;
  --tab-container-background: #fff;
  --tab-curve: 0;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-outline-width: 0;
  --tab-radius-active: 4px;
  --tab-switcher-background: #fff;
  --tab-switcher-menubar-background: linear-gradient(to top, #fff, transparent);
  --tab-text-color: #bbb;
  --tab-text-color-active: #888;
  --tab-text-color-focused: #888;
  --tab-text-color-focused-active: rgb(138, 92, 245);
  --tab-text-color-focused-active-current: rgb(138, 92, 245);
  --table-drag-handle-color: #bbb;
  --table-header-color: #444;
  --text-faint: #bbb;
  --text-muted: #888;
  --text-normal: #444;
  --titlebar-background: #fff;
  --titlebar-background-focused: #fff;
  --titlebar-border-color: transparent;
  --titlebar-text-color: #888;
  --titlebar-text-color-focused: #444;
  --vault-profile-color: #444;
  --vault-profile-color-hover: #444;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(68, 68, 68);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(68, 68, 68);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(68, 68, 68);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(68, 68, 68);
}

body div#quartz-root {
  color: rgb(68, 68, 68);
}`,
    typography: `body .page article p > b, b {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body .page article p > em, em {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body .page article p > i, i {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body .page article p > strong, strong {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body .text-highlight {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body del {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  outline: rgb(68, 68, 68) none 0px;
  text-decoration: line-through rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body p {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration: rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 191, 188);
  outline: rgb(0, 191, 188) none 0px;
  text-decoration: rgb(0, 191, 188);
  text-decoration-color: rgb(0, 191, 188);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(138, 92, 245);
}

body a.internal.broken {
  color: rgb(233, 49, 71);
  outline: rgb(233, 49, 71) none 0px;
  text-decoration: rgb(233, 49, 71);
  text-decoration-color: rgb(233, 49, 71);
}`,
    lists: `body dd {
  color: rgb(68, 68, 68);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(68, 68, 68);
}

body ol > li {
  color: rgb(68, 68, 68);
}

body ol.overflow {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body ul > li {
  color: rgb(68, 68, 68);
}

body ul.overflow {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}

body blockquote {
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body table {
  color: rgb(68, 68, 68);
  width: 662px;
}

body td {
  color: rgb(68, 68, 68);
}

body th {
  color: rgb(68, 68, 68);
}`,
    code: `body code {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 248, 248);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 248, 248);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(68, 68, 68);
}

body pre > code > [data-line] {
  border-left-color: rgb(242, 174, 73);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(242, 174, 73);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(242, 174, 73);
  border-left-color: rgb(242, 174, 73);
  border-right-color: rgb(242, 174, 73);
  border-top-color: rgb(242, 174, 73);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body figcaption {
  color: rgb(68, 68, 68);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 15px;
}

body figure {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  margin-bottom: 15px;
  margin-top: 15px;
}

body img {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body video {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

body .transclude {
  border-bottom-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body .transclude-inner {
  border-bottom-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(136, 136, 136);
  text-decoration: line-through rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}

body input[type=checkbox] {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='!'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='*'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='-'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='/'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='>'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='?'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='I'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='S'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='b'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='c'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='d'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='f'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='i'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='k'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='l'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='p'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='u'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body li.task-list-item[data-task='w'] {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}`,
    callouts: `body .callout .callout-title {
  gap: 8.78906px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
  color: rgb(68, 68, 68);
}

body .search > .search-container > .search-space > * {
  color: rgb(68, 68, 68);
  outline: rgb(68, 68, 68) none 0px;
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(68, 68, 68);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(68, 68, 68);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(68, 68, 68);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(68, 68, 68);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

body h1 {
  color: rgb(68, 68, 68);
}

body h2 {
  color: rgb(68, 68, 68);
}

body h2.page-title, h2.page-title a {
  color: rgb(68, 68, 68);
}

body h3 {
  color: rgb(68, 68, 68);
}

body h4 {
  color: rgb(68, 68, 68);
}

body h5 {
  color: rgb(68, 68, 68);
}

body h6 {
  color: rgb(68, 68, 68);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(136, 136, 136);
}

body footer ul li a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(68, 68, 68);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body ul.section-ul {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .breadcrumb-element p {
  color: rgb(187, 187, 187);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

body .metadata {
  color: rgb(136, 136, 136);
}

body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  color: rgb(68, 68, 68);
}

body abbr {
  color: rgb(68, 68, 68);
  text-decoration: underline dotted rgb(68, 68, 68);
}

body details {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body sub {
  color: rgb(68, 68, 68);
  font-size: 12.5px;
}

body summary {
  color: rgb(68, 68, 68);
}

body sup {
  color: rgb(68, 68, 68);
  font-size: 12.5px;
}`,
  },
};
