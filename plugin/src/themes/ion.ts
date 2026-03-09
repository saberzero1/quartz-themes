import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "ion", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: transparent;
  --background-modifier-form-field: #000;
  --background-modifier-form-field-hover: #000;
  --background-primary: #000;
  --background-primary-alt: #000;
  --background-secondary: #000;
  --background-secondary-alt: #000;
  --base-d-h: 20;
  --base-d-l: .85;
  --base-d-s: .5;
  --base-h: 20;
  --base-l-p: 85;
  --base-s: 50%;
  --bases-cards-background: #000;
  --bases-cards-cover-background: #000;
  --bases-cards-shadow: 0 0 0 1px transparent;
  --bases-embed-border-color: transparent;
  --bases-group-heading-property-color: #000;
  --bases-table-border-color: rgb(236, 210, 198);
  --bases-table-cell-background-active: #000;
  --bases-table-cell-background-disabled: #000;
  --bases-table-group-background: #000;
  --bases-table-header-background: #000;
  --bases-table-header-color: #000;
  --bases-table-summary-background: #000;
  --bloom: 0.025em;
  --bloom-box: 0 0 0.09375em 0.09375em rgba(191, 106, 64, 0.3);
  --bloom-color: rgb(191, 106, 64);
  --bloom-const: .1em;
  --bloom-drop: drop-shadow(0px 0px 0.04167em rgb(191, 106, 64));
  --bloom-fct: .25;
  --bloom-hsl: 20, 50%, 50%;
  --bloom-size: 0.125em;
  --bloom-size-m: 0.09375em;
  --bloom-size-s: 0.04167em;
  --blur-background: color-mix(in srgb, #000 65%, transparent) linear-gradient(#000, color-mix(in srgb, #000 65%, transparent));
  --border-bloom: 0 0 0.09375em 0.09375em rgba(191, 106, 64, 0.3), 0 0 0.09375em 0.09375em rgba(191, 106, 64, 0.3) inset;
  --canvas-background: #000;
  --canvas-card-label-color: #000;
  --canvas-dot-pattern: #000;
  --caret-color: rgb(236, 210, 198);
  --checkbox-border-color: #000;
  --checkbox-border-color-hover: #000;
  --checkbox-marker-color: #000;
  --checklist-done-color: #000;
  --code-background: #000;
  --code-base-l: 30;
  --code-border-color: transparent;
  --code-comment: #000;
  --code-normal: rgb(236, 210, 198);
  --code-punctuation: #000;
  --collapse-icon-color: #000;
  --color-base-00: #000;
  --color-base-10: #000;
  --color-base-100: #024;
  --color-base-20: #000;
  --color-base-25: #000;
  --color-base-30: #000;
  --color-base-50: #000;
  --color-base-70: #000;
  --color-blue-h: 211;
  --color-blue-l-p: 44;
  --color-blue-s: 93%;
  --color-cyan-h: 179;
  --color-cyan-l-p: 37;
  --color-cyan-s: 100%;
  --color-green-h: 143;
  --color-green-l-p: 37;
  --color-green-s: 91%;
  --color-orange-h: 29;
  --color-orange-l-p: 46;
  --color-orange-s: 100%;
  --color-pink-h: 331;
  --color-pink-l-p: 52;
  --color-pink-s: 65%;
  --color-purple-h: 254;
  --color-purple-l-p: 62;
  --color-purple-s: 82%;
  --color-red-h: 352;
  --color-red-l-p: 55;
  --color-red-s: 80%;
  --color-yellow-h: 46;
  --color-yellow-l-p: 43;
  --color-yellow-s: 100%;
  --divider-color: transparent;
  --dropdown-background: #000;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent;
  --file-header-background: #000;
  --file-header-background-focused: #000;
  --flair-background: #000;
  --flair-color: rgb(236, 210, 198);
  --footnote-divider-color: transparent;
  --footnote-id-color: #000;
  --footnote-id-color-no-occurrences: #000;
  --graph-node: #000;
  --graph-node-unresolved: #000;
  --graph-text: rgb(236, 210, 198);
  --heading-formatting: #000;
  --hr-color: transparent;
  --icon-bloom: drop-shadow(0px 0px 0.04167em rgb(191, 106, 64)) drop-shadow(0px 0px 0.04167em rgb(191, 106, 64));
  --icon-color: #000;
  --icon-color-focused: rgb(236, 210, 198);
  --icon-color-hover: #000;
  --input-date-separator: #000;
  --input-placeholder-color: #000;
  --interactive-normal: #000;
  --ion-color: rgb(236, 210, 198);
  --ion-h: 20;
  --ion-hs: 20, 50%;
  --ion-l: 85%;
  --ion-l-p: 85;
  --ion-s: 50%;
  --ion-threshold: 80;
  --list-marker-color: #000;
  --list-marker-color-hover: #000;
  --menu-background: #000;
  --metadata-border-color: transparent;
  --metadata-divider-color: transparent;
  --metadata-input-text-color: rgb(236, 210, 198);
  --metadata-label-text-color: #000;
  --metadata-label-text-color-hover: #000;
  --modal-background: #000;
  --nav-collapse-icon-color: #000;
  --nav-collapse-icon-color-collapsed: #000;
  --nav-heading-color: rgb(236, 210, 198);
  --nav-heading-color-collapsed: #000;
  --nav-heading-color-collapsed-hover: #000;
  --nav-heading-color-hover: rgb(236, 210, 198);
  --nav-item-color: #000;
  --nav-item-color-active: rgb(236, 210, 198);
  --nav-item-color-hover: rgb(236, 210, 198);
  --nav-item-color-selected: rgb(236, 210, 198);
  --nav-tag-color: #000;
  --nav-tag-color-active: #000;
  --nav-tag-color-hover: #000;
  --pdf-background: #000;
  --pdf-page-background: #000;
  --pdf-shadow: 0 0 0 1px transparent;
  --pdf-sidebar-background: #000;
  --pdf-thumbnail-shadow: 0 0 0 1px transparent;
  --pill-border-color: transparent;
  --pill-color: #000;
  --pill-color-hover: rgb(236, 210, 198);
  --pill-color-remove: #000;
  --prompt-background: #000;
  --raised-background: color-mix(in srgb, #000 65%, transparent) linear-gradient(#000, color-mix(in srgb, #000 65%, transparent));
  --ribbon-background: #000;
  --ribbon-background-collapsed: #000;
  --search-clear-button-color: #000;
  --search-icon-color: #000;
  --search-result-background: #000;
  --setting-group-heading-color: rgb(236, 210, 198);
  --setting-items-background: #000;
  --setting-items-border-color: transparent;
  --slider-track-background: transparent;
  --status-bar-background: #000;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #000;
  --suggestion-background: #000;
  --tab-background-active: #000;
  --tab-container-background: #000;
  --tab-divider-color: #000;
  --tab-outline-color: transparent;
  --tab-switcher-background: #000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000, transparent);
  --tab-text-color: #000;
  --tab-text-color-active: #000;
  --tab-text-color-focused: #000;
  --tab-text-color-focused-active: #000;
  --tab-text-color-focused-active-current: rgb(236, 210, 198);
  --table-add-button-border-color: transparent;
  --table-border-color: rgb(236, 210, 198);
  --table-drag-handle-color: #000;
  --table-header-border-color: rgb(236, 210, 198);
  --table-header-color: rgb(236, 210, 198);
  --text-faint: #000;
  --text-muted: #000;
  --text-normal: rgb(236, 210, 198);
  --titlebar-background: #000;
  --titlebar-background-focused: #000;
  --titlebar-border-color: transparent;
  --titlebar-text-color: #000;
  --titlebar-text-color-focused: rgb(236, 210, 198);
  --vault-profile-color: rgb(236, 210, 198);
  --vault-profile-color-hover: rgb(236, 210, 198);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(236, 210, 198);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(236, 210, 198);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(236, 210, 198);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(236, 210, 198);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(236, 210, 198);
}`,
    typography: `body .page article p > b, b {
  color: rgb(249, 240, 236);
  outline: rgb(249, 240, 236) none 0px;
  text-decoration: rgb(249, 240, 236);
  text-decoration-color: rgb(249, 240, 236);
}

body .page article p > em, em {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body .page article p > i, i {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body .page article p > strong, strong {
  color: rgb(249, 240, 236);
  outline: rgb(249, 240, 236) none 0px;
  text-decoration: rgb(249, 240, 236);
  text-decoration-color: rgb(249, 240, 236);
}

body .text-highlight {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body del {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration: line-through rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body p {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}`,
    links: `body a.external, footer a {
  color: rgb(203, 183, 250);
  outline: rgb(203, 183, 250) none 0px;
  text-decoration: underline rgb(203, 183, 250);
  text-decoration-color: rgb(203, 183, 250);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(203, 183, 250);
  outline: rgb(203, 183, 250) none 0px;
  text-decoration: underline rgb(203, 183, 250);
  text-decoration-color: rgb(203, 183, 250);
}

body a.internal.broken {
  color: rgb(203, 183, 250);
  outline: rgb(203, 183, 250) none 0px;
}`,
    lists: `body dd {
  color: rgb(236, 210, 198);
}

body dt {
  color: rgb(236, 210, 198);
}

body ol > li {
  color: rgb(236, 210, 198);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body ul > li {
  color: rgb(236, 210, 198);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(203, 183, 250);
  text-decoration: rgb(203, 183, 250);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body table {
  color: rgb(236, 210, 198);
}

body td {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

body th {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}`,
    code: `body code {
  border-bottom-color: rgb(230, 196, 179);
  border-left-color: rgb(230, 196, 179);
  border-right-color: rgb(230, 196, 179);
  border-top-color: rgb(230, 196, 179);
  color: rgb(230, 196, 179);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(236, 210, 198);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 223, 117);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 223, 117);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 223, 117);
  border-left-color: rgb(255, 223, 117);
  border-right-color: rgb(255, 223, 117);
  border-top-color: rgb(255, 223, 117);
}

body pre > code, pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body figcaption {
  color: rgb(236, 210, 198);
}

body figure {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body img {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body video {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body .footnotes {
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

body .transclude {
  border-bottom-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body .transclude-inner {
  border-bottom-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(236, 210, 198);
  text-decoration: line-through rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body input[type=checkbox] {
  border-bottom-color: rgb(117, 63, 243);
  border-left-color: rgb(117, 63, 243);
  border-right-color: rgb(117, 63, 243);
  border-top-color: rgb(117, 63, 243);
}

body li.task-list-item[data-task='!'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='*'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='-'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='/'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='>'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='?'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='I'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='S'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='b'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='c'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='d'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='f'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='i'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='k'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='l'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='p'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='u'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body li.task-list-item[data-task='w'] {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(230, 239, 255);
  border-left-color: rgb(230, 239, 255);
  border-right-color: rgb(230, 239, 255);
  border-top-color: rgb(230, 239, 255);
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(230, 247, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(230, 247, 255);
  border-left-width: 2px;
  border-right-color: rgb(230, 247, 255);
  border-right-width: 2px;
  border-top-color: rgb(230, 247, 255);
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 230, 239);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 230, 239);
  border-left-width: 2px;
  border-right-color: rgb(255, 230, 239);
  border-right-width: 2px;
  border-top-color: rgb(255, 230, 239);
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 230, 235);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 230, 235);
  border-left-width: 2px;
  border-right-color: rgb(255, 230, 235);
  border-right-width: 2px;
  border-top-color: rgb(255, 230, 235);
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 230, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(236, 230, 255);
  border-left-width: 2px;
  border-right-color: rgb(236, 230, 255);
  border-right-width: 2px;
  border-top-color: rgb(236, 230, 255);
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 230, 230);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 230, 230);
  border-left-width: 2px;
  border-right-color: rgb(255, 230, 230);
  border-right-width: 2px;
  border-top-color: rgb(255, 230, 230);
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(230, 252, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(230, 252, 255);
  border-left-width: 2px;
  border-right-color: rgb(230, 252, 255);
  border-right-width: 2px;
  border-top-color: rgb(230, 252, 255);
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(230, 239, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(230, 239, 255);
  border-left-width: 2px;
  border-right-color: rgb(230, 239, 255);
  border-right-width: 2px;
  border-top-color: rgb(230, 239, 255);
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(240, 253, 232);
  border-bottom-width: 2px;
  border-left-color: rgb(240, 253, 232);
  border-left-width: 2px;
  border-right-color: rgb(240, 253, 232);
  border-right-width: 2px;
  border-top-color: rgb(240, 253, 232);
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(242, 242, 242);
  border-bottom-width: 2px;
  border-left-color: rgb(242, 242, 242);
  border-left-width: 2px;
  border-right-color: rgb(242, 242, 242);
  border-right-width: 2px;
  border-top-color: rgb(242, 242, 242);
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(230, 255, 240);
  border-bottom-width: 2px;
  border-left-color: rgb(230, 255, 240);
  border-left-width: 2px;
  border-right-color: rgb(230, 255, 240);
  border-right-width: 2px;
  border-top-color: rgb(230, 255, 240);
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(230, 255, 251);
  border-bottom-width: 2px;
  border-left-color: rgb(230, 255, 251);
  border-left-width: 2px;
  border-right-color: rgb(230, 255, 251);
  border-right-width: 2px;
  border-top-color: rgb(230, 255, 251);
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(230, 252, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(230, 252, 255);
  border-left-width: 2px;
  border-right-color: rgb(230, 252, 255);
  border-right-width: 2px;
  border-top-color: rgb(230, 252, 255);
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 244, 230);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 244, 230);
  border-left-width: 2px;
  border-right-color: rgb(255, 244, 230);
  border-right-width: 2px;
  border-top-color: rgb(255, 244, 230);
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(236, 210, 198);
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  box-shadow: rgba(191, 106, 64, 0.3) 0px 0px 1.5px 1.5px, rgba(191, 106, 64, 0.3) 0px 0px 1.5px 1.5px inset;
}

body .search > .search-container > .search-space > * {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 210, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(236, 210, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(236, 210, 198);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 210, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(236, 210, 198);
}

body a.internal.tag-link::before {
  color: rgb(236, 210, 198);
}

body h1 {
  color: rgb(255, 213, 204);
  text-shadow: rgb(255, 42, 0) 0px 0px 6.472px, rgb(255, 42, 0) 0px 0px 3.236px;
}

body h2 {
  color: rgb(255, 255, 204);
  text-shadow: rgb(255, 255, 0) 0px 0px 5.848px, rgb(255, 255, 0) 0px 0px 2.924px;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 221, 204);
  text-shadow: rgb(255, 85, 0) 0px 0px 6.472px, rgb(255, 85, 0) 0px 0px 3.236px;
}

body h3 {
  color: rgb(213, 255, 204);
  text-shadow: rgb(43, 255, 0) 0px 0px 5.272px, rgb(43, 255, 0) 0px 0px 2.636px;
}

body h4 {
  color: rgb(204, 255, 238);
  text-shadow: rgb(0, 255, 170) 0px 0px 4.752px, rgb(0, 255, 170) 0px 0px 2.376px;
}

body h5 {
  color: rgb(204, 230, 255);
  text-shadow: rgb(0, 128, 255) 0px 0px 4.304px, rgb(0, 128, 255) 0px 0px 2.152px;
}

body h6 {
  color: rgb(221, 204, 255);
  text-shadow: rgb(85, 0, 255) 0px 0px 4px, rgb(85, 0, 255) 0px 0px 2px;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(236, 210, 198);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(230, 239, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(230, 239, 255);
  border-left-width: 2px;
  border-right-color: rgb(230, 239, 255);
  border-right-width: 2px;
  border-top-color: rgb(230, 239, 255);
  border-top-width: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(236, 210, 198);
}

body footer ul li a {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(236, 210, 198);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(236, 210, 198);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body li.section-li > .section .meta {
  color: rgb(236, 210, 198);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(236, 210, 198);
  text-decoration: rgb(236, 210, 198);
}

body ul.section-ul {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

body .darkmode svg {
  color: rgb(236, 210, 198);
  stroke: rgb(236, 210, 198);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

body .breadcrumb-element p {
  color: rgb(236, 210, 198);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(236, 210, 198);
}

body .metadata-properties {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(236, 210, 198);
  text-shadow: rgb(191, 106, 64) 0px 0px 1.625px, rgb(191, 106, 64) 0px 0px 0.8125px;
}

body abbr {
  color: rgb(236, 210, 198);
  text-decoration: underline dotted rgb(236, 210, 198);
}

body details {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body input[type=text] {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

body progress {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

body sub {
  color: rgb(236, 210, 198);
}

body summary {
  color: rgb(236, 210, 198);
}

body sup {
  color: rgb(236, 210, 198);
}`,
  },
  light: {},
};
