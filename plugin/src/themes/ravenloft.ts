import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ravenloft",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["literata", "open-sans", "ruslan-display", "vollkorn"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #c0564b;
  --accent-h: #da6a5c;
  --accent-hover: #da6a5c;
  --background-modifier-active-hover: hsla(10 60% 45%, 0.1);
  --background-primary: #1b1412;
  --background-secondary: #261b1a;
  --background-tertiary: #332423;
  --bases-cards-background: #1b1412;
  --bases-group-heading-property-color: #c8b4aa;
  --bases-table-cell-background-active: #1b1412;
  --bases-table-cell-background-selected: hsla(#da6a5c, 88%, 66%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #c0564b;
  --bases-table-header-background: #1b1412;
  --bases-table-header-color: #c8b4aa;
  --bases-table-summary-background: #1b1412;
  --bg-pri: #1b1412;
  --bg-sec: #261b1a;
  --bg-ter: #332423;
  --blockquote-border-color: #c0564b;
  --canvas-background: #1b1412;
  --canvas-card-label-color: #a2928c;
  --caret-color: #f0eae2;
  --checkbox-border-color: #a2928c;
  --checkbox-border-color-hover: #c8b4aa;
  --checkbox-color: #c0564b;
  --checkbox-color-hover: #da6a5c;
  --checkbox-marker-color: #1b1412;
  --checklist-done-color: #c8b4aa;
  --code-bg: #2a1f1e;
  --code-comment: #a2928c;
  --code-normal: #f0eae2;
  --code-punctuation: #c8b4aa;
  --code-txt: #d3c6bd;
  --collapse-icon-color: #a2928c;
  --collapse-icon-color-collapsed: #c0564b;
  --color-accent: hsl(#da6a5c, 88%, 66%);
  --color-accent-1: hsl(calc(#da6a5c - 3), calc(88% * 1.02), calc(66% * 1.15));
  --color-accent-2: hsl(calc(#da6a5c - 5), calc(88% * 1.05), calc(66% * 1.29));
  --color-accent-hsl: #da6a5c, 88%, 66%;
  --divider-color-hover: #c0564b;
  --embed-border-start: 2px solid #c0564b;
  --file-header-background: #1b1412;
  --file-header-background-focused: #1b1412;
  --flair-color: #f0eae2;
  --font-body: "Literata", serif;
  --font-heading: "Vollkorn SC", serif;
  --font-title: "Ruslan Display", serif;
  --font-ui: "Open Sans", sans-serif;
  --footnote-id-color: #c8b4aa;
  --footnote-id-color-no-occurrences: #a2928c;
  --fs-base: 16px;
  --fs-inline-title: 3rem;
  --graph-node: #c8b4aa;
  --graph-node-focused: #c0564b;
  --graph-node-unresolved: #a2928c;
  --graph-text: #f0eae2;
  --h1-col: #c0564b;
  --h2-col: #b16a5c;
  --h3-col: #a78478;
  --h4-col: #958176;
  --h5-col: #85736b;
  --h6-col: #776760;
  --heading-formatting: #a2928c;
  --hi-bg: #3e2c29;
  --icon-color: #c8b4aa;
  --icon-color-active: #c0564b;
  --icon-color-focused: #f0eae2;
  --icon-color-hover: #c8b4aa;
  --input-date-separator: #a2928c;
  --input-placeholder-color: #a2928c;
  --interactive-accent: #c0564b;
  --interactive-accent-hover: #da6a5c;
  --interactive-accent-hsl: 10 60% 45%;
  --lh-base: 1.6;
  --link-color: #c0564b;
  --link-color-hover: hsl(calc(#da6a5c - 5), calc(88% * 1.05), calc(66% * 1.29));
  --link-external-color: #c0564b;
  --link-external-color-hover: hsl(calc(#da6a5c - 5), calc(88% * 1.05), calc(66% * 1.29));
  --link-unresolved-color: #c0564b;
  --link-unresolved-decoration-color: hsla(10 60% 45%, 0.3);
  --list-marker-color: #a2928c;
  --list-marker-color-collapsed: #c0564b;
  --list-marker-color-hover: #c8b4aa;
  --ls-title: 0.01em;
  --menu-background: #261b1a;
  --metadata-input-text-color: #f0eae2;
  --metadata-label-text-color: #c8b4aa;
  --metadata-label-text-color-hover: #c8b4aa;
  --modal-background: #1b1412;
  --nav-collapse-icon-color: #a2928c;
  --nav-collapse-icon-color-collapsed: #a2928c;
  --nav-heading-color: #f0eae2;
  --nav-heading-color-collapsed: #a2928c;
  --nav-heading-color-collapsed-hover: #c8b4aa;
  --nav-heading-color-hover: #f0eae2;
  --nav-item-background-selected: hsla(#da6a5c, 88%, 66%, 0.15);
  --nav-item-color: #c8b4aa;
  --nav-item-color-active: #f0eae2;
  --nav-item-color-highlighted: #c0564b;
  --nav-item-color-hover: #f0eae2;
  --nav-item-color-selected: #f0eae2;
  --nav-tag-color: #a2928c;
  --nav-tag-color-active: #c8b4aa;
  --nav-tag-color-hover: #c8b4aa;
  --pad-code-h: 0.25em;
  --pad-code-v: 0.15em;
  --pdf-background: #1b1412;
  --pdf-page-background: #1b1412;
  --pdf-sidebar-background: #1b1412;
  --pill-color: #c8b4aa;
  --pill-color-hover: #f0eae2;
  --pill-color-remove: #a2928c;
  --pill-color-remove-hover: #c0564b;
  --prompt-background: #1b1412;
  --ribbon-background: #261b1a;
  --ribbon-background-collapsed: #1b1412;
  --search-clear-button-color: #c8b4aa;
  --search-icon-color: #c8b4aa;
  --search-result-background: #1b1412;
  --setting-group-heading-color: #f0eae2;
  --sp-head-bottom: 0.4em;
  --sp-head-top: 1.2em;
  --status-bar-background: #261b1a;
  --status-bar-text-color: #c8b4aa;
  --suggestion-background: #1b1412;
  --tab-background-active: #1b1412;
  --tab-container-background: #261b1a;
  --tab-switcher-background: #261b1a;
  --tab-switcher-menubar-background: linear-gradient(to top, #261b1a, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(#da6a5c, 88%, 66%);
  --tab-text-color: #a2928c;
  --tab-text-color-active: #c8b4aa;
  --tab-text-color-focused: #c8b4aa;
  --tab-text-color-focused-active: #c8b4aa;
  --tab-text-color-focused-active-current: #f0eae2;
  --tab-text-color-focused-highlighted: #c0564b;
  --table-drag-handle-background-active: #c0564b;
  --table-drag-handle-color: #a2928c;
  --table-header-color: #f0eae2;
  --table-selection: hsla(#da6a5c, 88%, 66%, 0.1);
  --table-selection-border-color: #c0564b;
  --tag-background: hsla(10 60% 45%, 0.1);
  --tag-background-hover: hsla(10 60% 45%, 0.2);
  --tag-border-color: hsla(10 60% 45%, 0.15);
  --tag-border-color-hover: hsla(10 60% 45%, 0.15);
  --tag-color: #c0564b;
  --tag-color-hover: #c0564b;
  --text-accent: #c0564b;
  --text-accent-hover: hsl(calc(#da6a5c - 5), calc(88% * 1.05), calc(66% * 1.29));
  --text-faint: #a2928c;
  --text-muted: #c8b4aa;
  --text-normal: #f0eae2;
  --text-selection: rgb(192 86 75 / 35%);
  --title-col: #7e2f2a;
  --titlebar-background: #261b1a;
  --titlebar-text-color: #c8b4aa;
  --titlebar-text-color-focused: #f0eae2;
  --txt-bold: #c0564b;
  --txt-em: #b88a82;
  --txt-faint: #a2928c;
  --txt-muted: #c8b4aa;
  --txt-norm: #f0eae2;
  --vault-profile-color: #f0eae2;
  --vault-profile-color-hover: #f0eae2;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 27, 26);
  color: rgb(240, 234, 226);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(27, 20, 18);
  color: rgb(240, 234, 226);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 27, 26);
  color: rgb(240, 234, 226);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 27, 26);
  color: rgb(240, 234, 226);
}

body div#quartz-root {
  background-color: rgb(27, 20, 18);
  color: rgb(240, 234, 226);
}`,
    typography: `body .page article p > b, b {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body .page article p > em, em {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body .page article p > i, i {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body .page article p > strong, strong {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body .text-highlight {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body del {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration: line-through rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body p {
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
  outline: rgb(200, 180, 170) none 0px;
  text-decoration: rgb(200, 180, 170);
  text-decoration-color: rgb(200, 180, 170);
}`,
    links: `body a.external, footer a {
  color: rgb(192, 86, 75);
  font-family: Literata, serif;
  outline: rgb(192, 86, 75) none 0px;
  text-decoration: underline rgb(192, 86, 75);
  text-decoration-color: rgb(192, 86, 75);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(192, 86, 75);
  font-family: Literata, serif;
  outline: rgb(192, 86, 75) none 0px;
  text-decoration: underline rgb(192, 86, 75);
  text-decoration-color: rgb(192, 86, 75);
}

body a.internal.broken {
  color: rgb(192, 86, 75);
  font-family: Literata, serif;
  outline: rgb(192, 86, 75) none 0px;
  text-decoration: underline rgb(192, 86, 75);
  text-decoration-color: rgb(192, 86, 75);
}`,
    lists: `body dd {
  color: rgb(240, 234, 226);
}

body dt {
  color: rgb(240, 234, 226);
}

body ol > li {
  color: rgb(240, 234, 226);
}

body ol.overflow {
  background-color: rgb(27, 20, 18);
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body ul > li {
  color: rgb(240, 234, 226);
}

body ul.overflow {
  background-color: rgb(27, 20, 18);
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(162, 146, 140);
  text-decoration: rgb(162, 146, 140);
}

body blockquote {
  font-family: Literata, serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body table {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  width: 205.438px;
}

body td {
  color: rgb(240, 234, 226);
}

body th {
  color: rgb(240, 234, 226);
}`,
    code: `body code {
  border-bottom-color: rgb(211, 198, 189);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(211, 198, 189);
  border-right-color: rgb(211, 198, 189);
  border-top-color: rgb(211, 198, 189);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(211, 198, 189);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(240, 234, 226);
}`,
    images: `body audio {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body figcaption {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
}

body figure {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body img {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body video {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
}

body .footnotes {
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

body .transclude {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(192, 86, 75);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body .transclude-inner {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(192, 86, 75);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Literata, serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Literata, serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(200, 180, 170);
  text-decoration: line-through rgb(200, 180, 170);
  text-decoration-color: rgb(200, 180, 170);
}

body input[type=checkbox] {
  border-bottom-color: rgb(162, 146, 140);
  border-left-color: rgb(162, 146, 140);
  border-right-color: rgb(162, 146, 140);
  border-top-color: rgb(162, 146, 140);
}

body li.task-list-item[data-task='!'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='*'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='-'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='/'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='>'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='?'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='I'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='S'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='b'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='c'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='d'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='f'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='i'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='k'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='l'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='p'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='u'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body li.task-list-item[data-task='w'] {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}`,
    search: `body .search > .search-button {
  color: rgb(240, 234, 226);
  font-family: "Open Sans", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(27, 20, 18);
}

body .search > .search-container > .search-space > * {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(240, 234, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(240, 234, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(240, 234, 226);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 27, 26);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(240, 234, 226);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(192, 86, 75);
  border-left-color: rgb(192, 86, 75);
  border-right-color: rgb(192, 86, 75);
  border-top-color: rgb(192, 86, 75);
}

body a.internal.tag-link::before {
  color: rgb(192, 86, 75);
}

body h1 {
  color: rgb(192, 86, 75);
  font-family: "Vollkorn SC", serif;
}

body h2 {
  color: rgb(177, 106, 92);
  font-family: "Vollkorn SC", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(126, 47, 42);
  font-family: "Ruslan Display", serif;
}

body h3 {
  color: rgb(167, 132, 120);
  font-family: "Vollkorn SC", serif;
}

body h4 {
  color: rgb(149, 129, 118);
  font-family: "Vollkorn SC", serif;
}

body h5 {
  color: rgb(133, 115, 107);
  font-family: "Vollkorn SC", serif;
}

body h6 {
  color: rgb(119, 103, 96);
  font-family: "Vollkorn SC", serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
}

body ::-webkit-scrollbar-corner {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
}

body ::-webkit-scrollbar-track {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
  text-decoration: rgb(200, 180, 170);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
  text-decoration: rgb(200, 180, 170);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
  text-decoration: rgb(200, 180, 170);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
  color: rgb(200, 180, 170);
}`,
    footer: `body footer {
  background-color: rgb(38, 27, 26);
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
}

body footer ul li a {
  color: rgb(200, 180, 170);
  text-decoration: rgb(200, 180, 170);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(240, 234, 226);
  font-family: "Open Sans", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(200, 180, 170);
  text-decoration: rgb(200, 180, 170);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body li.section-li > .section .meta {
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(200, 180, 170);
  text-decoration: rgb(200, 180, 170);
}

body ul.section-ul {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
  color: rgb(200, 180, 170);
}

body .darkmode svg {
  color: rgb(200, 180, 170);
  stroke: rgb(200, 180, 170);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
  color: rgb(200, 180, 170);
}

body .breadcrumb-element p {
  color: rgb(162, 146, 140);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

body .metadata {
  color: rgb(200, 180, 170);
  font-family: Literata, serif;
}

body .metadata-properties {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
  color: rgb(200, 180, 170);
  font-family: Literata, serif;
}

body .navigation-progress {
  background-color: rgb(38, 27, 26);
}

body .page-header h2.page-title {
  color: rgb(240, 234, 226);
}

body abbr {
  color: rgb(240, 234, 226);
  text-decoration: underline dotted rgb(240, 234, 226);
}

body details {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body input[type=text] {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
  color: rgb(200, 180, 170);
}

body kbd {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

body progress {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body sub {
  color: rgb(240, 234, 226);
}

body summary {
  color: rgb(240, 234, 226);
}

body sup {
  color: rgb(240, 234, 226);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #92342c;
  --accent-h: #a9473e;
  --accent-hover: #a9473e;
  --background-modifier-active-hover: hsla(10 60% 45%, 0.1);
  --background-primary: #f3eee6;
  --background-secondary: #e8dfd6;
  --background-tertiary: #ddd2c8;
  --bases-cards-background: #f3eee6;
  --bases-group-heading-property-color: #6f5f5a;
  --bases-table-cell-background-active: #f3eee6;
  --bases-table-cell-background-selected: hsla(#a9473e, 88%, 66%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #92342c;
  --bases-table-header-background: #f3eee6;
  --bases-table-header-color: #6f5f5a;
  --bases-table-summary-background: #f3eee6;
  --bg-pri: #f3eee6;
  --bg-sec: #e8dfd6;
  --bg-ter: #ddd2c8;
  --blockquote-border-color: #92342c;
  --blur-background: color-mix(in srgb, #f3eee6 65%, transparent) linear-gradient(#f3eee6, color-mix(in srgb, #f3eee6 65%, transparent));
  --canvas-background: #f3eee6;
  --canvas-card-label-color: #a2928a;
  --caret-color: #362a27;
  --checkbox-border-color: #a2928a;
  --checkbox-border-color-hover: #6f5f5a;
  --checkbox-color: #92342c;
  --checkbox-color-hover: #a9473e;
  --checkbox-marker-color: #f3eee6;
  --checklist-done-color: #6f5f5a;
  --code-bg: #eae1d7;
  --code-comment: #a2928a;
  --code-normal: #362a27;
  --code-punctuation: #6f5f5a;
  --code-txt: #57423d;
  --collapse-icon-color: #a2928a;
  --collapse-icon-color-collapsed: #92342c;
  --color-accent: hsl(#a9473e, 88%, 66%);
  --color-accent-1: hsl(calc(#a9473e - 1), calc(88% * 1.01), calc(66% * 1.075));
  --color-accent-2: hsl(calc(#a9473e - 3), calc(88% * 1.02), calc(66% * 1.15));
  --color-accent-hsl: #a9473e, 88%, 66%;
  --divider-color-hover: #92342c;
  --embed-border-start: 2px solid #92342c;
  --file-header-background: #f3eee6;
  --file-header-background-focused: #f3eee6;
  --flair-color: #362a27;
  --font-body: "Literata", serif;
  --font-heading: "Vollkorn SC", serif;
  --font-title: "Ruslan Display", serif;
  --font-ui: "Open Sans", sans-serif;
  --footnote-id-color: #6f5f5a;
  --footnote-id-color-no-occurrences: #a2928a;
  --fs-base: 16px;
  --fs-inline-title: 3rem;
  --graph-node: #6f5f5a;
  --graph-node-focused: #92342c;
  --graph-node-unresolved: #a2928a;
  --graph-text: #362a27;
  --h1-col: #7e2f2a;
  --h2-col: #874338;
  --h3-col: #926054;
  --h4-col: #9c7467;
  --h5-col: #a7897d;
  --h6-col: #b19991;
  --heading-formatting: #a2928a;
  --hi-bg: #cfc2b4;
  --icon-color: #6f5f5a;
  --icon-color-active: #92342c;
  --icon-color-focused: #362a27;
  --icon-color-hover: #6f5f5a;
  --input-date-separator: #a2928a;
  --input-placeholder-color: #a2928a;
  --interactive-accent: #92342c;
  --interactive-accent-hover: #a9473e;
  --interactive-accent-hsl: 10 60% 45%;
  --lh-base: 1.6;
  --link-color: #92342c;
  --link-color-hover: hsl(calc(#a9473e - 3), calc(88% * 1.02), calc(66% * 1.15));
  --link-external-color: #92342c;
  --link-external-color-hover: hsl(calc(#a9473e - 3), calc(88% * 1.02), calc(66% * 1.15));
  --link-unresolved-color: #92342c;
  --link-unresolved-decoration-color: hsla(10 60% 45%, 0.3);
  --list-marker-color: #a2928a;
  --list-marker-color-collapsed: #92342c;
  --list-marker-color-hover: #6f5f5a;
  --ls-title: 0.01em;
  --menu-background: #e8dfd6;
  --metadata-input-text-color: #362a27;
  --metadata-label-text-color: #6f5f5a;
  --metadata-label-text-color-hover: #6f5f5a;
  --modal-background: #f3eee6;
  --nav-collapse-icon-color: #a2928a;
  --nav-collapse-icon-color-collapsed: #a2928a;
  --nav-heading-color: #362a27;
  --nav-heading-color-collapsed: #a2928a;
  --nav-heading-color-collapsed-hover: #6f5f5a;
  --nav-heading-color-hover: #362a27;
  --nav-item-background-selected: hsla(#a9473e, 88%, 66%, 0.15);
  --nav-item-color: #6f5f5a;
  --nav-item-color-active: #362a27;
  --nav-item-color-highlighted: #92342c;
  --nav-item-color-hover: #362a27;
  --nav-item-color-selected: #362a27;
  --nav-tag-color: #a2928a;
  --nav-tag-color-active: #6f5f5a;
  --nav-tag-color-hover: #6f5f5a;
  --pad-code-h: 0.25em;
  --pad-code-v: 0.15em;
  --pdf-background: #f3eee6;
  --pdf-page-background: #f3eee6;
  --pdf-sidebar-background: #f3eee6;
  --pill-color: #6f5f5a;
  --pill-color-hover: #362a27;
  --pill-color-remove: #a2928a;
  --pill-color-remove-hover: #92342c;
  --prompt-background: #f3eee6;
  --raised-background: color-mix(in srgb, #f3eee6 65%, transparent) linear-gradient(#f3eee6, color-mix(in srgb, #f3eee6 65%, transparent));
  --ribbon-background: #e8dfd6;
  --ribbon-background-collapsed: #f3eee6;
  --search-clear-button-color: #6f5f5a;
  --search-icon-color: #6f5f5a;
  --search-result-background: #f3eee6;
  --setting-group-heading-color: #362a27;
  --sp-head-bottom: 0.4em;
  --sp-head-top: 1.2em;
  --status-bar-background: #e8dfd6;
  --status-bar-text-color: #6f5f5a;
  --suggestion-background: #f3eee6;
  --tab-background-active: #f3eee6;
  --tab-container-background: #e8dfd6;
  --tab-switcher-background: #e8dfd6;
  --tab-switcher-menubar-background: linear-gradient(to top, #e8dfd6, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(#a9473e, 88%, 66%);
  --tab-text-color: #a2928a;
  --tab-text-color-active: #6f5f5a;
  --tab-text-color-focused: #6f5f5a;
  --tab-text-color-focused-active: #6f5f5a;
  --tab-text-color-focused-active-current: #362a27;
  --tab-text-color-focused-highlighted: #92342c;
  --table-drag-handle-background-active: #92342c;
  --table-drag-handle-color: #a2928a;
  --table-header-color: #362a27;
  --table-selection: hsla(#a9473e, 88%, 66%, 0.1);
  --table-selection-border-color: #92342c;
  --tag-background: hsla(10 60% 45%, 0.1);
  --tag-background-hover: hsla(10 60% 45%, 0.2);
  --tag-border-color: hsla(10 60% 45%, 0.15);
  --tag-border-color-hover: hsla(10 60% 45%, 0.15);
  --tag-color: #92342c;
  --tag-color-hover: #92342c;
  --text-accent: #92342c;
  --text-accent-hover: hsl(calc(#a9473e - 3), calc(88% * 1.02), calc(66% * 1.15));
  --text-faint: #a2928a;
  --text-muted: #6f5f5a;
  --text-normal: #362a27;
  --text-selection: rgb(192 86 75 / 35%);
  --title-col: #7e2f2a;
  --titlebar-background: #e8dfd6;
  --titlebar-text-color: #6f5f5a;
  --titlebar-text-color-focused: #362a27;
  --txt-bold: #92342c;
  --txt-em: #8f6059;
  --txt-faint: #a2928a;
  --txt-muted: #6f5f5a;
  --txt-norm: #362a27;
  --vault-profile-color: #362a27;
  --vault-profile-color-hover: #362a27;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(232, 223, 214);
  color: rgb(54, 42, 39);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(243, 238, 230);
  color: rgb(54, 42, 39);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(232, 223, 214);
  color: rgb(54, 42, 39);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(232, 223, 214);
  color: rgb(54, 42, 39);
}

body div#quartz-root {
  background-color: rgb(243, 238, 230);
  color: rgb(54, 42, 39);
}`,
    typography: `body .page article p > b, b {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  outline: rgb(54, 42, 39) none 0px;
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body .page article p > em, em {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  outline: rgb(54, 42, 39) none 0px;
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body .page article p > i, i {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  outline: rgb(54, 42, 39) none 0px;
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body .page article p > strong, strong {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  outline: rgb(54, 42, 39) none 0px;
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body .text-highlight {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  outline: rgb(54, 42, 39) none 0px;
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body del {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  outline: rgb(54, 42, 39) none 0px;
  text-decoration: line-through rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body p {
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
  outline: rgb(111, 95, 90) none 0px;
  text-decoration: rgb(111, 95, 90);
  text-decoration-color: rgb(111, 95, 90);
}`,
    links: `body a.external, footer a {
  color: rgb(146, 52, 44);
  font-family: Literata, serif;
  outline: rgb(146, 52, 44) none 0px;
  text-decoration: underline rgb(146, 52, 44);
  text-decoration-color: rgb(146, 52, 44);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(146, 52, 44);
  font-family: Literata, serif;
  outline: rgb(146, 52, 44) none 0px;
  text-decoration: underline rgb(146, 52, 44);
  text-decoration-color: rgb(146, 52, 44);
}

body a.internal.broken {
  color: rgb(146, 52, 44);
  font-family: Literata, serif;
  outline: rgb(146, 52, 44) none 0px;
  text-decoration: underline rgb(146, 52, 44);
  text-decoration-color: rgb(146, 52, 44);
}`,
    lists: `body dd {
  color: rgb(54, 42, 39);
}

body dt {
  color: rgb(54, 42, 39);
}

body ol > li {
  color: rgb(54, 42, 39);
}

body ol.overflow {
  background-color: rgb(243, 238, 230);
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body ul > li {
  color: rgb(54, 42, 39);
}

body ul.overflow {
  background-color: rgb(243, 238, 230);
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(162, 146, 138);
  text-decoration: rgb(162, 146, 138);
}

body blockquote {
  font-family: Literata, serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body table {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  width: 205.438px;
}

body td {
  color: rgb(54, 42, 39);
}

body th {
  color: rgb(54, 42, 39);
}`,
    code: `body code {
  border-bottom-color: rgb(87, 66, 61);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(87, 66, 61);
  border-right-color: rgb(87, 66, 61);
  border-top-color: rgb(87, 66, 61);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(87, 66, 61);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(54, 42, 39);
}`,
    images: `body audio {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body figcaption {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
}

body figure {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body img {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body video {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
}

body .footnotes {
  border-top-color: rgb(54, 42, 39);
  color: rgb(54, 42, 39);
}

body .transclude {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(146, 52, 44);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body .transclude-inner {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(146, 52, 44);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Literata, serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Literata, serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(111, 95, 90);
  text-decoration: line-through rgb(111, 95, 90);
  text-decoration-color: rgb(111, 95, 90);
}

body input[type=checkbox] {
  border-bottom-color: rgb(162, 146, 138);
  border-left-color: rgb(162, 146, 138);
  border-right-color: rgb(162, 146, 138);
  border-top-color: rgb(162, 146, 138);
}

body li.task-list-item[data-task='!'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='*'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='-'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='/'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='>'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='?'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='I'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='S'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='b'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='c'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='d'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='f'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='i'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='k'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='l'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='p'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='u'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body li.task-list-item[data-task='w'] {
  color: rgb(54, 42, 39);
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}`,
    search: `body .search > .search-button {
  color: rgb(54, 42, 39);
  font-family: "Open Sans", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(243, 238, 230);
}

body .search > .search-container > .search-space > * {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  outline: rgb(54, 42, 39) none 0px;
  text-decoration: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(54, 42, 39);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(54, 42, 39);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(54, 42, 39);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(232, 223, 214);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
  color: rgb(54, 42, 39);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(54, 42, 39);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(146, 52, 44);
  border-left-color: rgb(146, 52, 44);
  border-right-color: rgb(146, 52, 44);
  border-top-color: rgb(146, 52, 44);
}

body a.internal.tag-link::before {
  color: rgb(146, 52, 44);
}

body h1 {
  color: rgb(126, 47, 42);
  font-family: "Vollkorn SC", serif;
}

body h2 {
  color: rgb(135, 67, 56);
  font-family: "Vollkorn SC", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(126, 47, 42);
  font-family: "Ruslan Display", serif;
}

body h3 {
  color: rgb(146, 96, 84);
  font-family: "Vollkorn SC", serif;
}

body h4 {
  color: rgb(156, 116, 103);
  font-family: "Vollkorn SC", serif;
}

body h5 {
  color: rgb(167, 137, 125);
  font-family: "Vollkorn SC", serif;
}

body h6 {
  color: rgb(177, 153, 145);
  font-family: "Vollkorn SC", serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
}

body ::-webkit-scrollbar-corner {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
}

body ::-webkit-scrollbar-track {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
  text-decoration: rgb(111, 95, 90);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
  text-decoration: rgb(111, 95, 90);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
  text-decoration: rgb(111, 95, 90);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
  color: rgb(54, 42, 39);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
  color: rgb(111, 95, 90);
}`,
    footer: `body footer {
  background-color: rgb(232, 223, 214);
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
}

body footer ul li a {
  color: rgb(111, 95, 90);
  text-decoration: rgb(111, 95, 90);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(54, 42, 39);
  font-family: "Open Sans", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
  color: rgb(54, 42, 39);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(111, 95, 90);
  text-decoration: rgb(111, 95, 90);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body li.section-li > .section .meta {
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(111, 95, 90);
  text-decoration: rgb(111, 95, 90);
}

body ul.section-ul {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
  color: rgb(111, 95, 90);
}

body .darkmode svg {
  color: rgb(111, 95, 90);
  stroke: rgb(111, 95, 90);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
  color: rgb(111, 95, 90);
}

body .breadcrumb-element p {
  color: rgb(162, 146, 138);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
  color: rgb(54, 42, 39);
}

body .metadata {
  color: rgb(111, 95, 90);
  font-family: Literata, serif;
}

body .metadata-properties {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
  color: rgb(111, 95, 90);
  font-family: Literata, serif;
}

body .navigation-progress {
  background-color: rgb(232, 223, 214);
}

body .page-header h2.page-title {
  color: rgb(54, 42, 39);
}

body abbr {
  color: rgb(54, 42, 39);
  text-decoration: underline dotted rgb(54, 42, 39);
}

body details {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body input[type=text] {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
  color: rgb(111, 95, 90);
}

body kbd {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
  color: rgb(54, 42, 39);
}

body progress {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

body sub {
  color: rgb(54, 42, 39);
}

body summary {
  color: rgb(54, 42, 39);
}

body sup {
  color: rgb(54, 42, 39);
}`,
  },
};
