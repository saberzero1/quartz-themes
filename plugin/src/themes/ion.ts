import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "ion", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: transparent !important;
  --background-modifier-form-field: #000 !important;
  --background-modifier-form-field-hover: #000 !important;
  --background-primary: #000 !important;
  --background-primary-alt: #000 !important;
  --background-secondary: #000 !important;
  --background-secondary-alt: #000 !important;
  --base-d-h: 20 !important;
  --base-d-l: .85 !important;
  --base-d-s: .5 !important;
  --base-h: 20 !important;
  --base-l-p: 85 !important;
  --base-s: 50% !important;
  --bases-cards-background: #000 !important;
  --bases-cards-cover-background: #000 !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-group-heading-property-color: #000 !important;
  --bases-table-border-color: hsl(20, 50%, 85%) !important;
  --bases-table-cell-background-active: #000 !important;
  --bases-table-cell-background-disabled: #000 !important;
  --bases-table-group-background: #000 !important;
  --bases-table-header-background: #000 !important;
  --bases-table-header-color: #000 !important;
  --bases-table-summary-background: #000 !important;
  --bloom: 0.025em !important;
  --bloom-box: 0 0 0.09375em 0.09375em hsla(20, 50%, 50%, .3) !important;
  --bloom-color: hsl(20, 50%, 50%) !important;
  --bloom-const: .1em !important;
  --bloom-drop: drop-shadow(0px 0px 0.04167em hsl(20, 50%, 50%)) !important;
  --bloom-fct: .25 !important;
  --bloom-hsl: 20, 50%, 50% !important;
  --bloom-size: 0.125em !important;
  --bloom-size-m: 0.09375em !important;
  --bloom-size-s: 0.04167em !important;
  --blur-background: color-mix(in srgb, #000 65%, transparent) linear-gradient(#000, color-mix(in srgb, #000 65%, transparent)) !important;
  --border-bloom: 0 0 0.09375em 0.09375em hsla(20, 50%, 50%, .3), 0 0 0.09375em 0.09375em hsla(20, 50%, 50%, .3) inset !important;
  --canvas-background: #000 !important;
  --canvas-card-label-color: #000 !important;
  --canvas-dot-pattern: #000 !important;
  --caret-color: hsl(20, 50%, 85%) !important;
  --checkbox-border-color: #000 !important;
  --checkbox-border-color-hover: #000 !important;
  --checkbox-marker-color: #000 !important;
  --checklist-done-color: #000 !important;
  --code-background: #000 !important;
  --code-base-l: 30 !important;
  --code-border-color: transparent !important;
  --code-comment: #000 !important;
  --code-normal: hsl(20, 50%, 85%) !important;
  --code-punctuation: #000 !important;
  --collapse-icon-color: #000 !important;
  --color-base-00: #000 !important;
  --color-base-10: #000 !important;
  --color-base-100: #024 !important;
  --color-base-20: #000 !important;
  --color-base-25: #000 !important;
  --color-base-30: #000 !important;
  --color-base-50: #000 !important;
  --color-base-70: #000 !important;
  --color-blue-h: 211 !important;
  --color-blue-l-p: 44 !important;
  --color-blue-s: 93% !important;
  --color-cyan-h: 179 !important;
  --color-cyan-l-p: 37 !important;
  --color-cyan-s: 100% !important;
  --color-green-h: 143 !important;
  --color-green-l-p: 37 !important;
  --color-green-s: 91% !important;
  --color-orange-h: 29 !important;
  --color-orange-l-p: 46 !important;
  --color-orange-s: 100% !important;
  --color-pink-h: 331 !important;
  --color-pink-l-p: 52 !important;
  --color-pink-s: 65% !important;
  --color-purple-h: 254 !important;
  --color-purple-l-p: 62 !important;
  --color-purple-s: 82% !important;
  --color-red-h: 352 !important;
  --color-red-l-p: 55 !important;
  --color-red-s: 80% !important;
  --color-yellow-h: 46 !important;
  --color-yellow-l-p: 43 !important;
  --color-yellow-s: 100% !important;
  --dark: hsl(20, 50%, 85%) !important;
  --darkgray: hsl(20, 50%, 85%) !important;
  --divider-color: transparent !important;
  --dropdown-background: #000 !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --file-header-background: #000 !important;
  --file-header-background-focused: #000 !important;
  --flair-background: #000 !important;
  --flair-color: hsl(20, 50%, 85%) !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: #000 !important;
  --footnote-id-color-no-occurrences: #000 !important;
  --graph-node: #000 !important;
  --graph-node-unresolved: #000 !important;
  --graph-text: hsl(20, 50%, 85%) !important;
  --gray: #000 !important;
  --heading-formatting: #000 !important;
  --hr-color: transparent !important;
  --icon-bloom: drop-shadow(0px 0px 0.04167em hsl(20, 50%, 50%)) drop-shadow(0px 0px 0.04167em hsl(20, 50%, 50%)) !important;
  --icon-color: #000 !important;
  --icon-color-focused: hsl(20, 50%, 85%) !important;
  --icon-color-hover: #000 !important;
  --input-date-separator: #000 !important;
  --input-placeholder-color: #000 !important;
  --interactive-normal: #000 !important;
  --ion-color: hsl(20, 50%, 85%) !important;
  --ion-h: 20 !important;
  --ion-hs: 20, 50% !important;
  --ion-l: 85% !important;
  --ion-l-p: 85 !important;
  --ion-s: 50% !important;
  --ion-threshold: 80 !important;
  --light: #000 !important;
  --lightgray: #000 !important;
  --list-marker-color: #000 !important;
  --list-marker-color-hover: #000 !important;
  --menu-background: #000 !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-text-color: hsl(20, 50%, 85%) !important;
  --metadata-label-text-color: #000 !important;
  --metadata-label-text-color-hover: #000 !important;
  --modal-background: #000 !important;
  --nav-collapse-icon-color: #000 !important;
  --nav-collapse-icon-color-collapsed: #000 !important;
  --nav-heading-color: hsl(20, 50%, 85%) !important;
  --nav-heading-color-collapsed: #000 !important;
  --nav-heading-color-collapsed-hover: #000 !important;
  --nav-heading-color-hover: hsl(20, 50%, 85%) !important;
  --nav-item-color: #000 !important;
  --nav-item-color-active: hsl(20, 50%, 85%) !important;
  --nav-item-color-hover: hsl(20, 50%, 85%) !important;
  --nav-item-color-selected: hsl(20, 50%, 85%) !important;
  --nav-tag-color: #000 !important;
  --nav-tag-color-active: #000 !important;
  --nav-tag-color-hover: #000 !important;
  --pdf-background: #000 !important;
  --pdf-page-background: #000 !important;
  --pdf-shadow: 0 0 0 1px transparent !important;
  --pdf-sidebar-background: #000 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px transparent !important;
  --pill-border-color: transparent !important;
  --pill-color: #000 !important;
  --pill-color-hover: hsl(20, 50%, 85%) !important;
  --pill-color-remove: #000 !important;
  --prompt-background: #000 !important;
  --raised-background: color-mix(in srgb, #000 65%, transparent) linear-gradient(#000, color-mix(in srgb, #000 65%, transparent)) !important;
  --ribbon-background: #000 !important;
  --ribbon-background-collapsed: #000 !important;
  --search-clear-button-color: #000 !important;
  --search-icon-color: #000 !important;
  --search-result-background: #000 !important;
  --setting-group-heading-color: hsl(20, 50%, 85%) !important;
  --setting-items-background: #000 !important;
  --setting-items-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --status-bar-background: #000 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #000 !important;
  --suggestion-background: #000 !important;
  --tab-background-active: #000 !important;
  --tab-container-background: #000 !important;
  --tab-divider-color: #000 !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: #000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000, transparent) !important;
  --tab-text-color: #000 !important;
  --tab-text-color-active: #000 !important;
  --tab-text-color-focused: #000 !important;
  --tab-text-color-focused-active: #000 !important;
  --tab-text-color-focused-active-current: hsl(20, 50%, 85%) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: hsl(20, 50%, 85%) !important;
  --table-drag-handle-color: #000 !important;
  --table-header-border-color: hsl(20, 50%, 85%) !important;
  --table-header-color: hsl(20, 50%, 85%) !important;
  --text-faint: #000 !important;
  --text-muted: #000 !important;
  --text-normal: hsl(20, 50%, 85%) !important;
  --titlebar-background: #000 !important;
  --titlebar-background-focused: #000 !important;
  --titlebar-border-color: transparent !important;
  --titlebar-text-color: #000 !important;
  --titlebar-text-color-focused: hsl(20, 50%, 85%) !important;
  --vault-profile-color: hsl(20, 50%, 85%) !important;
  --vault-profile-color-hover: hsl(20, 50%, 85%) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(236, 210, 198);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(236, 210, 198);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(236, 210, 198);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(236, 210, 198);
}

html body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(236, 210, 198);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(249, 240, 236);
  outline: rgb(249, 240, 236) none 0px;
  text-decoration-color: rgb(249, 240, 236);
}

html body .page article p > em, html em {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration-color: rgb(236, 210, 198);
}

html body .page article p > i, html i {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration-color: rgb(236, 210, 198);
}

html body .page article p > strong, html strong {
  color: rgb(249, 240, 236);
  outline: rgb(249, 240, 236) none 0px;
  text-decoration-color: rgb(249, 240, 236);
}

html body .text-highlight {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration-color: rgb(236, 210, 198);
}

html body del {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration-color: rgb(236, 210, 198);
}

html body p {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration-color: rgb(236, 210, 198);
}`,
    links: `html body a.external, html footer a {
  color: rgb(203, 183, 250);
  outline: rgb(203, 183, 250) none 0px;
  text-decoration-color: rgb(203, 183, 250);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(203, 183, 250);
  outline: rgb(203, 183, 250) none 0px;
  text-decoration-color: rgb(203, 183, 250);
}

html body a.internal.broken {
  color: rgb(203, 183, 250);
  outline: rgb(203, 183, 250) none 0px;
}`,
    lists: `html body dd {
  color: rgb(236, 210, 198);
}

html body dt {
  color: rgb(236, 210, 198);
}

html body ol > li {
  color: rgb(236, 210, 198);
}

html body ol.overflow {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body ul > li {
  color: rgb(236, 210, 198);
}

html body ul.overflow {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(203, 183, 250);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body table {
  color: rgb(236, 210, 198);
}

html body td {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

html body th {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}`,
    code: `html body code {
  border-bottom-color: rgb(230, 196, 179);
  border-left-color: rgb(230, 196, 179);
  border-right-color: rgb(230, 196, 179);
  border-top-color: rgb(230, 196, 179);
  color: rgb(230, 196, 179);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(236, 210, 198);
}

html body pre > code > [data-line] {
  border-left-color: rgb(255, 223, 117);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 223, 117);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 223, 117);
  border-left-color: rgb(255, 223, 117);
  border-right-color: rgb(255, 223, 117);
  border-top-color: rgb(255, 223, 117);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    images: `html body audio {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body figcaption {
  color: rgb(236, 210, 198);
}

html body figure {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body img {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body video {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body .footnotes {
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

html body .transclude {
  border-bottom-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body .transclude-inner {
  border-bottom-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(117, 63, 243);
  border-left-color: rgb(117, 63, 243);
  border-right-color: rgb(117, 63, 243);
  border-top-color: rgb(117, 63, 243);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(236, 210, 198);
  text-decoration-color: rgb(236, 210, 198);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(230, 239, 255);
  border-left-color: rgb(230, 239, 255);
  border-right-color: rgb(230, 239, 255);
  border-top-color: rgb(230, 239, 255);
}

html body .callout[data-callout="abstract"] {
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

html body .callout[data-callout="bug"] {
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

html body .callout[data-callout="danger"] {
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

html body .callout[data-callout="example"] {
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

html body .callout[data-callout="failure"] {
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

html body .callout[data-callout="info"] {
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

html body .callout[data-callout="note"] {
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

html body .callout[data-callout="question"] {
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

html body .callout[data-callout="quote"] {
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

html body .callout[data-callout="success"] {
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

html body .callout[data-callout="tip"] {
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

html body .callout[data-callout="todo"] {
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

html body .callout[data-callout="warning"] {
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
    search: `html body .search > .search-button {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(236, 210, 198);
}

html body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  box-shadow: rgba(191, 106, 64, 0.3) 0px 0px 1.5px 1.5px, rgba(191, 106, 64, 0.3) 0px 0px 1.5px 1.5px inset;
}

html body .search > .search-container > .search-space > * {
  color: rgb(236, 210, 198);
  outline: rgb(236, 210, 198) none 0px;
  text-decoration-color: rgb(236, 210, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 210, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(236, 210, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(236, 210, 198);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 210, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(236, 210, 198);
}

html body a.internal.tag-link::before {
  color: rgb(236, 210, 198);
}

html body h1 {
  color: rgb(255, 213, 204);
  text-shadow: rgb(255, 42, 0) 0px 0px 6.472px, rgb(255, 42, 0) 0px 0px 3.236px;
}

html body h2 {
  color: rgb(255, 255, 204);
  text-shadow: rgb(255, 255, 0) 0px 0px 5.848px, rgb(255, 255, 0) 0px 0px 2.924px;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 221, 204);
  text-shadow: rgb(255, 85, 0) 0px 0px 6.472px, rgb(255, 85, 0) 0px 0px 3.236px;
}

html body h3 {
  color: rgb(213, 255, 204);
  text-shadow: rgb(43, 255, 0) 0px 0px 5.272px, rgb(43, 255, 0) 0px 0px 2.636px;
}

html body h4 {
  color: rgb(204, 255, 238);
  text-shadow: rgb(0, 255, 170) 0px 0px 4.752px, rgb(0, 255, 170) 0px 0px 2.376px;
}

html body h5 {
  color: rgb(204, 230, 255);
  text-shadow: rgb(0, 128, 255) 0px 0px 4.304px, rgb(0, 128, 255) 0px 0px 2.152px;
}

html body h6 {
  color: rgb(221, 204, 255);
  text-shadow: rgb(85, 0, 255) 0px 0px 4px, rgb(85, 0, 255) 0px 0px 2px;
}

html body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(236, 210, 198);
}`,
    scrollbars: `html body .callout {
  border-bottom-color: rgb(230, 239, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(230, 239, 255);
  border-left-width: 2px;
  border-right-color: rgb(230, 239, 255);
  border-right-width: 2px;
  border-top-color: rgb(230, 239, 255);
  border-top-width: 2px;
}

html body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(236, 210, 198);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(236, 210, 198);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}`,
    footer: `html body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(236, 210, 198);
}

html body footer ul li a {
  color: rgb(236, 210, 198);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(236, 210, 198);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(236, 210, 198);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(236, 210, 198);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body li.section-li > .section .meta {
  color: rgb(236, 210, 198);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(236, 210, 198);
}

html body ul.section-ul {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

html body .darkmode svg {
  color: rgb(236, 210, 198);
  stroke: rgb(236, 210, 198);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

html body .breadcrumb-element p {
  color: rgb(236, 210, 198);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

html body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(236, 210, 198);
}

html body .metadata-properties {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

html body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html body .page-header h2.page-title {
  color: rgb(236, 210, 198);
  text-shadow: rgb(191, 106, 64) 0px 0px 1.625px, rgb(191, 106, 64) 0px 0px 0.8125px;
}

html body abbr {
  color: rgb(236, 210, 198);
}

html body details {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body input[type=text] {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

html body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
  color: rgb(236, 210, 198);
}

html body progress {
  border-bottom-color: rgb(236, 210, 198);
  border-left-color: rgb(236, 210, 198);
  border-right-color: rgb(236, 210, 198);
  border-top-color: rgb(236, 210, 198);
}

html body sub {
  color: rgb(236, 210, 198);
}

html body summary {
  color: rgb(236, 210, 198);
}

html body sup {
  color: rgb(236, 210, 198);
}`,
  },
  light: {},
};
