import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "rose-pine",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #26233a;
  --background-primary: #191724;
  --background-secondary: #1f1d2e;
  --base: #191724;
  --bases-cards-background: #191724;
  --bases-cards-shadow: 0 0 0 1px #26233a;
  --bases-embed-border-color: #26233a;
  --bases-group-heading-property-color: #6e6a86;
  --bases-table-border-color: #26233a;
  --bases-table-cell-background-active: #191724;
  --bases-table-header-background: #191724;
  --bases-table-header-color: #6e6a86;
  --bases-table-summary-background: #191724;
  --bold-color: #908caa;
  --canvas-background: #191724;
  --caret-color: #e0def4;
  --checkbox-border-color-hover: #6e6a86;
  --checkbox-marker-color: #191724;
  --checklist-done-color: #6e6a86;
  --code-background: #21202e;
  --code-border-color: #26233a;
  --code-normal: #908caa;
  --code-punctuation: #6e6a86;
  --collapse-icon-color-collapsed: #eb6f92;
  --divider-color: #26233a;
  --embed-block-shadow-hover: 0 0 0 1px #26233a, inset 0 0 0 1px #26233a;
  --file-header-background: #191724;
  --file-header-background-focused: #191724;
  --flair-color: #e0def4;
  --flashing-background: rgba(235, 111, 146, 0.3);
  --foam: #9ccfd8;
  --footnote-divider-color: #26233a;
  --footnote-id-color: #6e6a86;
  --gold: #f6c177;
  --graph-node: #6e6a86;
  --graph-node-focused: #eb6f92;
  --graph-text: #e0def4;
  --h1-color: #eb6f92;
  --h2-color: #f6c177;
  --h3-color: #31748f;
  --h4-color: #9ccfd8;
  --h5-color: #c4a7e7;
  --h6-color: #ebbcba;
  --highlight-high: #524f67;
  --highlight-low: #21202e;
  --highlight-med: #403d52;
  --hr-color: #26233a;
  --icon-color: #6e6a86;
  --icon-color-active: #eb6f92;
  --icon-color-focused: #e0def4;
  --icon-color-hover: #6e6a86;
  --inline-title-color: #eb6f92;
  --iris: #c4a7e7;
  --light-base: #faf4ed;
  --light-foam: #56949f;
  --light-gold: #ea9d34;
  --light-highlight-high: #cecacd;
  --light-highlight-low: #f4ede8;
  --light-highlight-med: #dfdad9;
  --light-iris: #907aa9;
  --light-love: #b4637a;
  --light-muted: #9893a5;
  --light-overlay: #f2e9e1;
  --light-pine: #286983;
  --light-rose: #d7827e;
  --light-subtle: #797593;
  --light-surface: #fffaf3;
  --light-text: #575279;
  --link-color: #eb6f92;
  --link-color-hover: #9ccfd8;
  --link-external-color: #eb6f92;
  --link-external-color-hover: #9ccfd8;
  --link-unresolved-color: #eb6f92;
  --link-url: #31748f;
  --link-url-hover: #c4a7e7;
  --list-marker-color-collapsed: #eb6f92;
  --list-marker-color-hover: #6e6a86;
  --love: #eb6f92;
  --menu-background: #1f1d2e;
  --metadata-border-color: #26233a;
  --metadata-divider-color: #26233a;
  --metadata-input-text-color: #e0def4;
  --metadata-label-text-color: #6e6a86;
  --metadata-label-text-color-hover: #6e6a86;
  --modal-background: #191724;
  --muted: #6e6a86;
  --nav-heading-color: #e0def4;
  --nav-heading-color-collapsed-hover: #6e6a86;
  --nav-heading-color-hover: #e0def4;
  --nav-item-color: #6e6a86;
  --nav-item-color-active: #e0def4;
  --nav-item-color-highlighted: #eb6f92;
  --nav-item-color-hover: #e0def4;
  --nav-item-color-selected: #e0def4;
  --nav-tag-color-active: #6e6a86;
  --nav-tag-color-hover: #6e6a86;
  --overlay: #26233a;
  --pdf-background: #191724;
  --pdf-page-background: #191724;
  --pdf-shadow: 0 0 0 1px #26233a;
  --pdf-sidebar-background: #191724;
  --pdf-thumbnail-shadow: 0 0 0 1px #26233a;
  --pill-border-color: #26233a;
  --pill-color: #6e6a86;
  --pill-color-hover: #e0def4;
  --pill-color-remove-hover: #eb6f92;
  --pine: #31748f;
  --prompt-background: #191724;
  --ribbon-background: #1f1d2e;
  --ribbon-background-collapsed: #191724;
  --rose: #ebbcba;
  --search-clear-button-color: #6e6a86;
  --search-icon-color: #6e6a86;
  --search-result-background: #191724;
  --setting-group-heading-color: #e0def4;
  --setting-items-border-color: #26233a;
  --slider-track-background: #26233a;
  --status-bar-background: #1f1d2e;
  --status-bar-border-color: #26233a;
  --status-bar-text-color: #6e6a86;
  --subtle: #908caa;
  --suggestion-background: #191724;
  --surface: #1f1d2e;
  --tab-background-active: #191724;
  --tab-container-background: #1f1d2e;
  --tab-outline-color: #26233a;
  --tab-switcher-background: #1f1d2e;
  --tab-switcher-menubar-background: linear-gradient(to top, #1f1d2e, transparent);
  --tab-text-color-active: #6e6a86;
  --tab-text-color-focused: #6e6a86;
  --tab-text-color-focused-active: #6e6a86;
  --tab-text-color-focused-active-current: #e0def4;
  --tab-text-color-focused-highlighted: #eb6f92;
  --table-add-button-border-color: #26233a;
  --table-border-color: #26233a;
  --table-header-border-color: #26233a;
  --table-header-color: #e0def4;
  --tag-background: #26233a;
  --tag-color: #c4a7e7;
  --tag-color-hover: #eb6f92;
  --text: #e0def4;
  --text-accent: #eb6f92;
  --text-accent-hover: #9ccfd8;
  --text-muted: #6e6a86;
  --text-normal: #e0def4;
  --text-selection: rgba(49, 116, 143, 0.6);
  --titlebar-background: #1f1d2e;
  --titlebar-border-color: #26233a;
  --titlebar-text-color: #6e6a86;
  --titlebar-text-color-focused: #e0def4;
  --vault-profile-color: #e0def4;
  --vault-profile-color-hover: #e0def4;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(38, 35, 58);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(31, 29, 46);
  border-left-color: rgb(38, 35, 58);
  color: rgb(224, 222, 244);
}

body div#quartz-root {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}`,
    typography: `body .page article p > b, b {
  color: rgb(144, 140, 170);
  outline: rgb(144, 140, 170) none 0px;
  text-decoration: rgb(144, 140, 170);
  text-decoration-color: rgb(144, 140, 170);
}

body .page article p > em, em {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body .page article p > i, i {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body .page article p > strong, strong {
  color: rgb(144, 140, 170);
  outline: rgb(144, 140, 170) none 0px;
  text-decoration: rgb(144, 140, 170);
  text-decoration-color: rgb(144, 140, 170);
}

body .text-highlight {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body del {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: line-through rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body p {
  color: rgb(110, 106, 134);
  outline: rgb(110, 106, 134) none 0px;
  text-decoration: rgb(110, 106, 134);
  text-decoration-color: rgb(110, 106, 134);
}`,
    links: `body a.external, footer a {
  color: rgb(235, 111, 146);
  outline: rgb(235, 111, 146) none 0px;
  text-decoration: underline rgb(235, 111, 146);
  text-decoration-color: rgb(235, 111, 146);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(235, 111, 146);
  outline: rgb(235, 111, 146) none 0px;
  text-decoration: underline rgb(235, 111, 146);
  text-decoration-color: rgb(235, 111, 146);
}

body a.internal.broken {
  color: rgb(235, 111, 146);
  outline: rgb(235, 111, 146) none 0px;
}`,
    lists: `body dd {
  color: rgb(224, 222, 244);
}

body dt {
  color: rgb(224, 222, 244);
}

body ol > li {
  color: rgb(224, 222, 244);
}

body ol.overflow {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body ul > li {
  color: rgb(224, 222, 244);
}

body ul.overflow {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body table {
  border-bottom-color: rgb(31, 29, 46);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(31, 29, 46);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(31, 29, 46);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(31, 29, 46);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 222, 244);
}

body td {
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(224, 222, 244);
}

body th {
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(224, 222, 244);
}

body thead {
  border-bottom-color: rgb(38, 35, 58);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(31, 29, 46);
  border-right-color: rgb(31, 29, 46);
  border-top-color: rgb(31, 29, 46);
}

body tr {
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(31, 29, 46);
  border-right-color: rgb(31, 29, 46);
  border-top-color: rgb(31, 29, 46);
}`,
    code: `body code {
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  color: rgb(144, 140, 170);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 32, 46);
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 32, 46);
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(144, 140, 170);
}

body pre > code, pre:has(> code) {
  background-color: rgb(33, 32, 46);
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
}

body pre:has(> code) {
  background-color: rgb(33, 32, 46);
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
}`,
    images: `body audio {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body figcaption {
  color: rgb(224, 222, 244);
}

body figure {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body img {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body video {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
}

body .footnotes {
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .transclude {
  border-bottom-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .transclude-inner {
  border-bottom-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(110, 106, 134);
  text-decoration: line-through rgb(110, 106, 134);
  text-decoration-color: rgb(110, 106, 134);
}

body li.task-list-item[data-task='!'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='*'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='-'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='/'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='>'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='?'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='I'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='S'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='b'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='c'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='d'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='f'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='i'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='k'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='l'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='p'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='u'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='w'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space {
  background-color: rgb(25, 23, 36);
}

body .search > .search-container > .search-space > * {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 29, 46);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(38, 35, 58);
}

body a.internal.tag-link::before {
  color: rgb(196, 167, 231);
}

body h1 {
  color: rgb(235, 111, 146);
}

body h2 {
  color: rgb(246, 193, 119);
}

body h2.page-title, h2.page-title a {
  color: rgb(235, 111, 146);
}

body h3 {
  color: rgb(49, 116, 143);
}

body h4 {
  color: rgb(156, 207, 216);
}

body h5 {
  color: rgb(196, 167, 231);
}

body h6 {
  color: rgb(235, 188, 186);
}

body hr {
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 106, 134);
  text-decoration: rgb(110, 106, 134);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 106, 134);
  text-decoration: rgb(110, 106, 134);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(110, 106, 134);
  text-decoration: rgb(110, 106, 134);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}`,
    footer: `body footer {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(110, 106, 134);
}

body footer ul li a {
  color: rgb(110, 106, 134);
  text-decoration: rgb(110, 106, 134);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(224, 222, 244);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 106, 134);
  text-decoration: rgb(110, 106, 134);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 106, 134);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body li.section-li > .section .meta {
  color: rgb(110, 106, 134);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 106, 134);
  text-decoration: rgb(110, 106, 134);
}

body ul.section-ul {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

body .darkmode svg {
  color: rgb(110, 106, 134);
  stroke: rgb(110, 106, 134);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .metadata {
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(110, 106, 134);
}

body .metadata-properties {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

body .navigation-progress {
  background-color: rgb(31, 29, 46);
}

body .page-header h2.page-title {
  color: rgb(224, 222, 244);
}

body abbr {
  color: rgb(224, 222, 244);
  text-decoration: underline dotted rgb(224, 222, 244);
}

body details {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body input[type=text] {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

body kbd {
  background-color: rgb(33, 32, 46);
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  color: rgb(144, 140, 170);
}

body progress {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body sub {
  color: rgb(224, 222, 244);
}

body summary {
  color: rgb(224, 222, 244);
}

body sup {
  color: rgb(224, 222, 244);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #f2e9e1;
  --background-primary: #faf4ed;
  --background-secondary: #fffaf3;
  --base: #191724;
  --bases-cards-background: #faf4ed;
  --bases-cards-shadow: 0 0 0 1px #f2e9e1;
  --bases-embed-border-color: #f2e9e1;
  --bases-group-heading-property-color: #9893a5;
  --bases-table-border-color: #f2e9e1;
  --bases-table-cell-background-active: #faf4ed;
  --bases-table-header-background: #faf4ed;
  --bases-table-header-color: #9893a5;
  --bases-table-summary-background: #faf4ed;
  --blur-background: color-mix(in srgb, #faf4ed 65%, transparent) linear-gradient(#faf4ed, color-mix(in srgb, #faf4ed 65%, transparent));
  --bold-color: #797593;
  --canvas-background: #faf4ed;
  --caret-color: #575279;
  --checkbox-border-color-hover: #9893a5;
  --checkbox-marker-color: #faf4ed;
  --checklist-done-color: #9893a5;
  --code-background: #f4ede8;
  --code-border-color: #f2e9e1;
  --code-normal: #797593;
  --code-punctuation: #9893a5;
  --collapse-icon-color-collapsed: #b4637a;
  --divider-color: #f2e9e1;
  --embed-block-shadow-hover: 0 0 0 1px #f2e9e1, inset 0 0 0 1px #f2e9e1;
  --file-header-background: #faf4ed;
  --file-header-background-focused: #faf4ed;
  --flair-color: #575279;
  --flashing-background: rgba(180, 99, 122, 0.3);
  --foam: #9ccfd8;
  --footnote-divider-color: #f2e9e1;
  --footnote-id-color: #9893a5;
  --gold: #f6c177;
  --graph-node: #9893a5;
  --graph-node-focused: #b4637a;
  --graph-text: #575279;
  --h1-color: #b4637a;
  --h2-color: #ea9d34;
  --h3-color: #286983;
  --h4-color: #56949f;
  --h5-color: #907aa9;
  --h6-color: #d7827e;
  --highlight-high: #524f67;
  --highlight-low: #21202e;
  --highlight-med: #403d52;
  --hr-color: #f2e9e1;
  --icon-color: #9893a5;
  --icon-color-active: #b4637a;
  --icon-color-focused: #575279;
  --icon-color-hover: #9893a5;
  --inline-title-color: #b4637a;
  --iris: #c4a7e7;
  --light-base: #faf4ed;
  --light-foam: #56949f;
  --light-gold: #ea9d34;
  --light-highlight-high: #cecacd;
  --light-highlight-low: #f4ede8;
  --light-highlight-med: #dfdad9;
  --light-iris: #907aa9;
  --light-love: #b4637a;
  --light-muted: #9893a5;
  --light-overlay: #f2e9e1;
  --light-pine: #286983;
  --light-rose: #d7827e;
  --light-subtle: #797593;
  --light-surface: #fffaf3;
  --light-text: #575279;
  --link-color: #b4637a;
  --link-color-hover: #56949f;
  --link-external-color: #b4637a;
  --link-external-color-hover: #56949f;
  --link-unresolved-color: #b4637a;
  --link-url: #286983;
  --link-url-hover: #907aa9;
  --list-marker-color-collapsed: #b4637a;
  --list-marker-color-hover: #9893a5;
  --love: #eb6f92;
  --menu-background: #fffaf3;
  --metadata-border-color: #f2e9e1;
  --metadata-divider-color: #f2e9e1;
  --metadata-input-text-color: #575279;
  --metadata-label-text-color: #9893a5;
  --metadata-label-text-color-hover: #9893a5;
  --modal-background: #faf4ed;
  --muted: #6e6a86;
  --nav-heading-color: #575279;
  --nav-heading-color-collapsed-hover: #9893a5;
  --nav-heading-color-hover: #575279;
  --nav-item-color: #9893a5;
  --nav-item-color-active: #575279;
  --nav-item-color-highlighted: #b4637a;
  --nav-item-color-hover: #575279;
  --nav-item-color-selected: #575279;
  --nav-tag-color-active: #9893a5;
  --nav-tag-color-hover: #9893a5;
  --overlay: #26233a;
  --pdf-background: #faf4ed;
  --pdf-page-background: #faf4ed;
  --pdf-sidebar-background: #faf4ed;
  --pill-border-color: #f2e9e1;
  --pill-color: #9893a5;
  --pill-color-hover: #575279;
  --pill-color-remove-hover: #b4637a;
  --pine: #31748f;
  --prompt-background: #faf4ed;
  --raised-background: color-mix(in srgb, #faf4ed 65%, transparent) linear-gradient(#faf4ed, color-mix(in srgb, #faf4ed 65%, transparent));
  --ribbon-background: #fffaf3;
  --ribbon-background-collapsed: #faf4ed;
  --rose: #ebbcba;
  --search-clear-button-color: #9893a5;
  --search-icon-color: #9893a5;
  --search-result-background: #faf4ed;
  --setting-group-heading-color: #575279;
  --setting-items-border-color: #f2e9e1;
  --slider-track-background: #f2e9e1;
  --status-bar-background: #fffaf3;
  --status-bar-border-color: #f2e9e1;
  --status-bar-text-color: #9893a5;
  --subtle: #908caa;
  --suggestion-background: #faf4ed;
  --surface: #1f1d2e;
  --tab-background-active: #faf4ed;
  --tab-container-background: #fffaf3;
  --tab-outline-color: #f2e9e1;
  --tab-switcher-background: #fffaf3;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffaf3, transparent);
  --tab-text-color-active: #9893a5;
  --tab-text-color-focused: #9893a5;
  --tab-text-color-focused-active: #9893a5;
  --tab-text-color-focused-active-current: #575279;
  --tab-text-color-focused-highlighted: #b4637a;
  --table-add-button-border-color: #f2e9e1;
  --table-border-color: #f2e9e1;
  --table-header-border-color: #f2e9e1;
  --table-header-color: #575279;
  --tag-background: #f2e9e1;
  --tag-color: #907aa9;
  --tag-color-hover: #b4637a;
  --text: #e0def4;
  --text-accent: #b4637a;
  --text-accent-hover: #56949f;
  --text-muted: #9893a5;
  --text-normal: #575279;
  --text-selection: rgba(40, 105, 131, 0.6);
  --titlebar-background: #fffaf3;
  --titlebar-border-color: #f2e9e1;
  --titlebar-text-color: #9893a5;
  --titlebar-text-color-focused: #575279;
  --vault-profile-color: #575279;
  --vault-profile-color-hover: #575279;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(242, 233, 225);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 250, 243);
  border-left-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

body div#quartz-root {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}`,
    typography: `body .page article p > b, b {
  color: rgb(121, 117, 147);
  outline: rgb(121, 117, 147) none 0px;
  text-decoration: rgb(121, 117, 147);
  text-decoration-color: rgb(121, 117, 147);
}

body .page article p > em, em {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body .page article p > i, i {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body .page article p > strong, strong {
  color: rgb(121, 117, 147);
  outline: rgb(121, 117, 147) none 0px;
  text-decoration: rgb(121, 117, 147);
  text-decoration-color: rgb(121, 117, 147);
}

body .text-highlight {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body del {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: line-through rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body p {
  color: rgb(152, 147, 165);
  outline: rgb(152, 147, 165) none 0px;
  text-decoration: rgb(152, 147, 165);
  text-decoration-color: rgb(152, 147, 165);
}`,
    links: `body a.external, footer a {
  color: rgb(180, 99, 122);
  outline: rgb(180, 99, 122) none 0px;
  text-decoration: underline rgb(180, 99, 122);
  text-decoration-color: rgb(180, 99, 122);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(180, 99, 122);
  outline: rgb(180, 99, 122) none 0px;
  text-decoration: underline rgb(180, 99, 122);
  text-decoration-color: rgb(180, 99, 122);
}

body a.internal.broken {
  color: rgb(180, 99, 122);
  outline: rgb(180, 99, 122) none 0px;
}`,
    lists: `body dd {
  color: rgb(87, 82, 121);
}

body dt {
  color: rgb(87, 82, 121);
}

body ol > li {
  color: rgb(87, 82, 121);
}

body ol.overflow {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body ul > li {
  color: rgb(87, 82, 121);
}

body ul.overflow {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body table {
  border-bottom-color: rgb(255, 250, 243);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 250, 243);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(255, 250, 243);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(255, 250, 243);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(87, 82, 121);
}

body td {
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

body th {
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

body thead {
  border-bottom-color: rgb(242, 233, 225);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(255, 250, 243);
  border-right-color: rgb(255, 250, 243);
  border-top-color: rgb(255, 250, 243);
}

body tr {
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(255, 250, 243);
  border-right-color: rgb(255, 250, 243);
  border-top-color: rgb(255, 250, 243);
}`,
    code: `body code {
  border-bottom-color: rgb(121, 117, 147);
  border-left-color: rgb(121, 117, 147);
  border-right-color: rgb(121, 117, 147);
  border-top-color: rgb(121, 117, 147);
  color: rgb(121, 117, 147);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(244, 237, 232);
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(244, 237, 232);
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(121, 117, 147);
}

body pre > code, pre:has(> code) {
  background-color: rgb(244, 237, 232);
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
}

body pre:has(> code) {
  background-color: rgb(244, 237, 232);
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
}`,
    images: `body audio {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body figcaption {
  color: rgb(87, 82, 121);
}

body figure {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body img {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body video {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
}

body .footnotes {
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .transclude {
  border-bottom-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .transclude-inner {
  border-bottom-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(152, 147, 165);
  text-decoration: line-through rgb(152, 147, 165);
  text-decoration-color: rgb(152, 147, 165);
}

body li.task-list-item[data-task='!'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='*'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='-'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='/'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='>'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='?'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='I'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='S'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='b'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='c'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='d'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='f'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='i'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='k'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='l'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='p'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='u'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='w'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space {
  background-color: rgb(250, 244, 237);
}

body .search > .search-container > .search-space > * {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 250, 243);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(87, 82, 121);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(242, 233, 225);
}

body a.internal.tag-link::before {
  color: rgb(144, 122, 169);
}

body h1 {
  color: rgb(180, 99, 122);
}

body h2 {
  color: rgb(234, 157, 52);
}

body h2.page-title, h2.page-title a {
  color: rgb(180, 99, 122);
}

body h3 {
  color: rgb(40, 105, 131);
}

body h4 {
  color: rgb(86, 148, 159);
}

body h5 {
  color: rgb(144, 122, 169);
}

body h6 {
  color: rgb(215, 130, 126);
}

body hr {
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}`,
    footer: `body footer {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(152, 147, 165);
}

body footer ul li a {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(87, 82, 121);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(152, 147, 165);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body li.section-li > .section .meta {
  color: rgb(152, 147, 165);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}

body ul.section-ul {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

body .darkmode svg {
  color: rgb(152, 147, 165);
  stroke: rgb(152, 147, 165);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .metadata {
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(152, 147, 165);
}

body .metadata-properties {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

body .navigation-progress {
  background-color: rgb(255, 250, 243);
}

body .page-header h2.page-title {
  color: rgb(87, 82, 121);
}

body abbr {
  color: rgb(87, 82, 121);
  text-decoration: underline dotted rgb(87, 82, 121);
}

body details {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body input[type=text] {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

body kbd {
  background-color: rgb(244, 237, 232);
  border-bottom-color: rgb(121, 117, 147);
  border-left-color: rgb(121, 117, 147);
  border-right-color: rgb(121, 117, 147);
  border-top-color: rgb(121, 117, 147);
  color: rgb(121, 117, 147);
}

body progress {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body sub {
  color: rgb(87, 82, 121);
}

body summary {
  color: rgb(87, 82, 121);
}

body sup {
  color: rgb(87, 82, 121);
}`,
  },
};
