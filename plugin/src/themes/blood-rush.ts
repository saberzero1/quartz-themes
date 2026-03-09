import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "blood-rush",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #111111;
  --background-modifier-border-focus: #A82424;
  --background-modifier-border-hover: #030303;
  --background-modifier-form-field: #111111;
  --background-modifier-form-field-hover: #111111;
  --background-primary: #111111;
  --background-primary-alt: #111111;
  --background-secondary: #111111;
  --background-secondary-alt: #111111;
  --bases-cards-background: #111111;
  --bases-cards-cover-background: #111111;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #111111;
  --bases-cards-shadow-hover: 0 0 0 1px #030303;
  --bases-embed-border-color: #111111;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #aaa;
  --bases-table-border-color: #111111;
  --bases-table-cell-background-active: #111111;
  --bases-table-cell-background-disabled: #111111;
  --bases-table-cell-shadow-active: 0 0 0 2px #A82424;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #111111;
  --bases-table-header-background: #111111;
  --bases-table-header-color: #aaa;
  --bases-table-summary-background: #111111;
  --blur-background: color-mix(in srgb, #191919 65%, transparent) linear-gradient(#191919, color-mix(in srgb, #191919 65%, transparent));
  --button-radius: 0px;
  --callout-blend-mode: normal;
  --callout-radius: 0px;
  --callout-title-weight: 200;
  --canvas-background: #111111;
  --canvas-card-label-color: #aaa;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #111111;
  --caret-color: #aaa;
  --checkbox-border-color: #99999977;
  --checkbox-border-color-hover: #aaa;
  --checkbox-color: #999;
  --checkbox-color-hover: #aaa;
  --checkbox-marker-color: #111111;
  --checkbox-radius: 10px;
  --checkbox-size: 14px;
  --checklist-done-color: #aaa;
  --clickable-icon-radius: 0px;
  --code-background: #111111;
  --code-border-color: #111111;
  --code-comment: #aaa;
  --code-normal: #aaa;
  --code-punctuation: #aaa;
  --code-radius: 0px;
  --collapse-icon-color: #aaa;
  --collapse-icon-color-collapsed: #A82424;
  --color-base-00: #111111;
  --color-base-05: #111111;
  --color-base-10: #111111;
  --color-base-100: #aaa;
  --color-base-20: #111111;
  --color-base-25: #111111;
  --color-base-30: #111111;
  --color-base-35: #030303;
  --color-base-40: #A82424;
  --color-base-50: #aaa;
  --color-base-60: #A82424;
  --color-base-70: #aaa;
  --divider-color: transparent;
  --dropdown-background: #191919;
  --dropdown-background-hover: #030303;
  --embed-block-shadow-hover: 0 0 0 1px #111111, inset 0 0 0 1px #111111;
  --file-header-background: #111111;
  --file-header-background-focused: #111111;
  --file-line-width: 600px;
  --flair-background: #191919;
  --flair-color: #aaa;
  --font-mermaid: 'segoe ui', sans-serif;
  --font-text: 'segoe ui', sans-serif;
  --font-text-size: 14px;
  --footnote-divider-color: #111111;
  --footnote-id-color: #aaa;
  --footnote-id-color-no-occurrences: #aaa;
  --footnote-radius: 0px;
  --graph-line: #030303;
  --graph-node: #aaa;
  --graph-node-focused: #A82424;
  --graph-node-unresolved: #aaa;
  --graph-text: #aaa;
  --heading-formatting: #aaa;
  --hr-color: #3d424180;
  --hr-thickness: 1px;
  --icon-color: #aaa;
  --icon-color-active: #A82424;
  --icon-color-focused: #A82424;
  --icon-color-hover: #999;
  --inline-title-color: #A82424;
  --inline-title-font: 'georgia', serif;
  --inline-title-size: 2em;
  --inline-title-weight: 200;
  --input-date-separator: #aaa;
  --input-placeholder-color: #aaa;
  --input-radius: 0px;
  --interactive-hover: #030303;
  --interactive-normal: #191919;
  --link-color: #A82424;
  --link-color-hover: #999;
  --link-external-color: #A82424;
  --link-external-color-hover: #999;
  --link-unresolved-color: #A82424;
  --list-marker-color: #aaa;
  --list-marker-color-collapsed: #A82424;
  --list-marker-color-hover: #aaa;
  --menu-background: #111111;
  --menu-border-color: #030303;
  --menu-radius: 0px;
  --metadata-border-color: #111111;
  --metadata-divider-color: #111111;
  --metadata-input-height: 24.5px;
  --metadata-input-text-color: #aaa;
  --metadata-label-text-color: #aaa;
  --metadata-label-text-color-hover: #aaa;
  --metadata-property-box-shadow-focus: 0 0 0 2px #A82424;
  --metadata-property-box-shadow-hover: 0 0 0 1px #030303;
  --modal-background: #111111;
  --modal-border-color: #A82424;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #9999998a;
  --nav-collapse-icon-color-collapsed: #aaa;
  --nav-heading-color: #aaa;
  --nav-heading-color-collapsed: #aaa;
  --nav-heading-color-collapsed-hover: #aaa;
  --nav-heading-color-hover: #aaa;
  --nav-item-background-active: #111111;
  --nav-item-background-hover: #A82424;
  --nav-item-color: #aaa;
  --nav-item-color-active: #A82424;
  --nav-item-color-highlighted: #A82424;
  --nav-item-color-hover: #111111;
  --nav-item-color-selected: #aaa;
  --nav-item-radius: 0px;
  --nav-tag-color: #aaa;
  --nav-tag-color-active: #aaa;
  --nav-tag-color-hover: #aaa;
  --nav-tag-radius: 0px;
  --pdf-background: #111111;
  --pdf-page-background: #111111;
  --pdf-shadow: 0 0 0 1px #111111;
  --pdf-sidebar-background: #111111;
  --pdf-thumbnail-shadow: 0 0 0 1px #111111;
  --pill-border-color: #111111;
  --pill-border-color-hover: #030303;
  --pill-color: #aaa;
  --pill-color-hover: #aaa;
  --pill-color-remove: #aaa;
  --pill-color-remove-hover: #A82424;
  --popover-font-size: 14px;
  --prompt-background: #111111;
  --prompt-border-color: #A82424;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #191919 65%, transparent) linear-gradient(#191919, color-mix(in srgb, #191919 65%, transparent));
  --ribbon-background: #111111;
  --ribbon-background-collapsed: #111111;
  --scrollbar-radius: 0px;
  --search-clear-button-color: #aaa;
  --search-icon-color: #aaa;
  --search-result-background: #111111;
  --setting-group-heading-color: #aaa;
  --setting-items-background: #111111;
  --setting-items-border-color: #111111;
  --setting-items-radius: 0px;
  --sidebar-markdown-font-size: 12.6px;
  --slider-thumb-border-color: #030303;
  --slider-thumb-radius: 0px;
  --slider-track-background: #aaa;
  --status-bar-background: #111111;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #aaa;
  --suggestion-background: #111111;
  --tab-background-active: #191919;
  --tab-container-background: #111111;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-radius-active: 4px;
  --tab-switcher-background: #111111;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent);
  --tab-text-color: #aaa;
  --tab-text-color-active: #aaa;
  --tab-text-color-focused: #aaa;
  --tab-text-color-focused-active: #aaa;
  --tab-text-color-focused-active-current: #999;
  --tab-text-color-focused-highlighted: #A82424;
  --table-add-button-border-color: #111111;
  --table-border-color: #111111;
  --table-drag-handle-color: #aaa;
  --table-header-border-color: #111111;
  --table-header-color: #aaa;
  --table-header-size: 14px;
  --table-text-size: 14px;
  --tag-background: #191919;
  --tag-background-hover: #A82424;
  --tag-color: #aaa;
  --tag-color-hover: #191919;
  --tag-radius: 0px;
  --text-accent: #A82424;
  --text-accent-hover: #999;
  --text-faint: #aaa;
  --text-highlight-bg: transparent;
  --text-muted: #aaa;
  --text-normal: #aaa;
  --titlebar-background: #111111;
  --titlebar-background-focused: #111111;
  --titlebar-border-color: #111111;
  --titlebar-text-color: #aaa;
  --titlebar-text-color-focused: #aaa;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #aaa;
  --vault-profile-color-hover: #aaa;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

body div#quartz-root {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}`,
    typography: `body .page article p > b, b {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .page article p > em, em {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .page article p > i, i {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .page article p > strong, strong {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body del {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: line-through rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body p {
  color: rgb(170, 170, 170);
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}`,
    links: `body a.external, footer a {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
  text-decoration: underline rgba(168, 36, 36, 0.592);
  text-decoration-color: rgba(168, 36, 36, 0.592);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
  text-decoration: underline rgba(168, 36, 36, 0.592);
  text-decoration-color: rgba(168, 36, 36, 0.592);
}

body a.internal.broken {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
}`,
    lists: `body dd {
  color: rgb(170, 170, 170);
}

body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

body dt {
  color: rgb(170, 170, 170);
}

body ol > li {
  color: rgb(170, 170, 170);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body ul > li {
  color: rgb(170, 170, 170);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body blockquote {
  background-color: rgb(17, 17, 17);
  font-family: "segoe ui", sans-serif;
  padding-bottom: 5px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body table {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  width: 176.969px;
}

body td {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

body th {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}`,
    code: `body code {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body pre > code, pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body figcaption {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  font-size: 14px;
}

body figure {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  margin-bottom: 14px;
  margin-top: 14px;
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
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  font-family: "segoe ui", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "segoe ui", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(170, 170, 170);
  text-decoration: line-through rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body input[type=checkbox] {
  border-bottom-color: rgba(153, 153, 153, 0.467);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(153, 153, 153, 0.467);
  border-right-color: rgba(153, 153, 153, 0.467);
  border-top-color: rgba(153, 153, 153, 0.467);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-left: -21px;
  width: 14px;
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
  border-bottom-color: rgba(61, 66, 65, 0.5);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 200;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(168, 36, 36);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(168, 36, 36);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body a.internal.tag-link::before {
  color: rgb(170, 170, 170);
}

body h1 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h2 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h3 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h4 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h5 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h6 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
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
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(168, 36, 36);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}`,
    footer: `body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(170, 170, 170);
}

body footer ul li a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
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
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body li.section-li > .section .meta {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body ul.section-ul {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body .darkmode svg {
  color: rgb(170, 170, 170);
  stroke: rgb(170, 170, 170);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body .breadcrumb-element p {
  color: rgb(170, 170, 170);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body .metadata {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
}

body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

body .page-header h2.page-title {
  color: rgb(170, 170, 170);
  font-family: georgia, serif;
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
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body kbd {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

body progress {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body sub {
  color: rgb(170, 170, 170);
  font-size: 11.6667px;
}

body summary {
  color: rgb(170, 170, 170);
}

body sup {
  color: rgb(170, 170, 170);
  font-size: 11.6667px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #111111;
  --background-modifier-border-focus: #A82424;
  --background-modifier-border-hover: #030303;
  --background-modifier-form-field: #111111;
  --background-modifier-form-field-hover: #111111;
  --background-primary: #111111;
  --background-primary-alt: #111111;
  --background-secondary: #111111;
  --background-secondary-alt: #111111;
  --bases-cards-background: #111111;
  --bases-cards-cover-background: #111111;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #111111;
  --bases-cards-shadow-hover: 0 0 0 1px #030303;
  --bases-embed-border-color: #111111;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #aaa;
  --bases-table-border-color: #111111;
  --bases-table-cell-background-active: #111111;
  --bases-table-cell-background-disabled: #111111;
  --bases-table-cell-shadow-active: 0 0 0 2px #A82424;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #111111;
  --bases-table-header-background: #111111;
  --bases-table-header-color: #aaa;
  --bases-table-summary-background: #111111;
  --blur-background: color-mix(in srgb, #111111 65%, transparent) linear-gradient(#111111, color-mix(in srgb, #111111 65%, transparent));
  --button-radius: 0px;
  --callout-blend-mode: normal;
  --callout-radius: 0px;
  --callout-title-weight: 200;
  --canvas-background: #111111;
  --canvas-card-label-color: #aaa;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #111111;
  --caret-color: #aaa;
  --checkbox-border-color: #99999977;
  --checkbox-border-color-hover: #aaa;
  --checkbox-color: #999;
  --checkbox-color-hover: #aaa;
  --checkbox-marker-color: #111111;
  --checkbox-radius: 10px;
  --checkbox-size: 14px;
  --checklist-done-color: #aaa;
  --clickable-icon-radius: 0px;
  --code-background: #111111;
  --code-border-color: #111111;
  --code-comment: #aaa;
  --code-normal: #aaa;
  --code-punctuation: #aaa;
  --code-radius: 0px;
  --collapse-icon-color: #aaa;
  --collapse-icon-color-collapsed: #A82424;
  --color-base-00: #111111;
  --color-base-05: #111111;
  --color-base-10: #111111;
  --color-base-100: #aaa;
  --color-base-20: #111111;
  --color-base-25: #111111;
  --color-base-30: #111111;
  --color-base-35: #030303;
  --color-base-40: #A82424;
  --color-base-50: #aaa;
  --color-base-60: #A82424;
  --color-base-70: #aaa;
  --divider-color: transparent;
  --dropdown-background: #191919;
  --dropdown-background-hover: #111111;
  --embed-block-shadow-hover: 0 0 0 1px #111111, inset 0 0 0 1px #111111;
  --file-header-background: #111111;
  --file-header-background-focused: #111111;
  --file-line-width: 600px;
  --flair-background: #191919;
  --flair-color: #aaa;
  --font-mermaid: 'segoe ui', sans-serif;
  --font-text: 'segoe ui', sans-serif;
  --font-text-size: 14px;
  --footnote-divider-color: #111111;
  --footnote-id-color: #aaa;
  --footnote-id-color-no-occurrences: #aaa;
  --footnote-radius: 0px;
  --graph-line: #030303;
  --graph-node: #aaa;
  --graph-node-focused: #A82424;
  --graph-node-unresolved: #aaa;
  --graph-text: #aaa;
  --heading-formatting: #aaa;
  --hr-color: #3d424180;
  --hr-thickness: 1px;
  --icon-color: #aaa;
  --icon-color-active: #A82424;
  --icon-color-focused: #A82424;
  --icon-color-hover: #999;
  --inline-title-color: #A82424;
  --inline-title-font: 'georgia', serif;
  --inline-title-size: 2em;
  --inline-title-weight: 200;
  --input-date-separator: #aaa;
  --input-placeholder-color: #aaa;
  --input-radius: 0px;
  --interactive-hover: #111111;
  --interactive-normal: #191919;
  --link-color: #A82424;
  --link-color-hover: #999;
  --link-external-color: #A82424;
  --link-external-color-hover: #999;
  --link-unresolved-color: #A82424;
  --list-marker-color: #aaa;
  --list-marker-color-collapsed: #A82424;
  --list-marker-color-hover: #aaa;
  --menu-background: #111111;
  --menu-border-color: #030303;
  --menu-radius: 0px;
  --metadata-border-color: #111111;
  --metadata-divider-color: #111111;
  --metadata-input-height: 24.5px;
  --metadata-input-text-color: #aaa;
  --metadata-label-text-color: #aaa;
  --metadata-label-text-color-hover: #aaa;
  --metadata-property-box-shadow-focus: 0 0 0 2px #A82424;
  --metadata-property-box-shadow-hover: 0 0 0 1px #030303;
  --modal-background: #111111;
  --modal-border-color: #A82424;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #9999998a;
  --nav-collapse-icon-color-collapsed: #aaa;
  --nav-heading-color: #aaa;
  --nav-heading-color-collapsed: #aaa;
  --nav-heading-color-collapsed-hover: #aaa;
  --nav-heading-color-hover: #aaa;
  --nav-item-background-active: #111111;
  --nav-item-background-hover: #A82424;
  --nav-item-color: #aaa;
  --nav-item-color-active: #A82424;
  --nav-item-color-highlighted: #A82424;
  --nav-item-color-hover: #111111;
  --nav-item-color-selected: #aaa;
  --nav-item-radius: 0px;
  --nav-tag-color: #aaa;
  --nav-tag-color-active: #aaa;
  --nav-tag-color-hover: #aaa;
  --nav-tag-radius: 0px;
  --pdf-background: #111111;
  --pdf-page-background: #111111;
  --pdf-sidebar-background: #111111;
  --pill-border-color: #111111;
  --pill-border-color-hover: #030303;
  --pill-color: #aaa;
  --pill-color-hover: #aaa;
  --pill-color-remove: #aaa;
  --pill-color-remove-hover: #A82424;
  --popover-font-size: 14px;
  --prompt-background: #111111;
  --prompt-border-color: #A82424;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #111111 65%, transparent) linear-gradient(#111111, color-mix(in srgb, #111111 65%, transparent));
  --ribbon-background: #111111;
  --ribbon-background-collapsed: #111111;
  --scrollbar-radius: 0px;
  --search-clear-button-color: #aaa;
  --search-icon-color: #aaa;
  --search-result-background: #111111;
  --setting-group-heading-color: #aaa;
  --setting-items-background: #111111;
  --setting-items-border-color: #111111;
  --setting-items-radius: 0px;
  --sidebar-markdown-font-size: 12.6px;
  --slider-thumb-border-color: #030303;
  --slider-thumb-radius: 0px;
  --slider-track-background: #aaa;
  --status-bar-background: #111111;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #aaa;
  --suggestion-background: #111111;
  --tab-background-active: #191919;
  --tab-container-background: #111111;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-radius-active: 4px;
  --tab-switcher-background: #111111;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent);
  --tab-text-color: #aaa;
  --tab-text-color-active: #aaa;
  --tab-text-color-focused: #aaa;
  --tab-text-color-focused-active: #aaa;
  --tab-text-color-focused-active-current: #999;
  --tab-text-color-focused-highlighted: #A82424;
  --table-add-button-border-color: #111111;
  --table-border-color: #111111;
  --table-drag-handle-color: #aaa;
  --table-header-border-color: #111111;
  --table-header-color: #aaa;
  --table-header-size: 14px;
  --table-text-size: 14px;
  --tag-background: #191919;
  --tag-background-hover: #A82424;
  --tag-color: #aaa;
  --tag-color-hover: #191919;
  --tag-radius: 0px;
  --text-accent: #A82424;
  --text-accent-hover: #999;
  --text-faint: #aaa;
  --text-highlight-bg: transparent;
  --text-muted: #aaa;
  --text-normal: #aaa;
  --titlebar-background: #111111;
  --titlebar-background-focused: #111111;
  --titlebar-border-color: #111111;
  --titlebar-text-color: #aaa;
  --titlebar-text-color-focused: #aaa;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #aaa;
  --vault-profile-color-hover: #aaa;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

body div#quartz-root {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}`,
    typography: `body .page article p > b, b {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .page article p > em, em {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .page article p > i, i {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .page article p > strong, strong {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body del {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: line-through rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body p {
  color: rgb(170, 170, 170);
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}`,
    links: `body a.external, footer a {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
  text-decoration: underline rgba(168, 36, 36, 0.592);
  text-decoration-color: rgba(168, 36, 36, 0.592);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
  text-decoration: underline rgba(168, 36, 36, 0.592);
  text-decoration-color: rgba(168, 36, 36, 0.592);
}

body a.internal.broken {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
}`,
    lists: `body dd {
  color: rgb(170, 170, 170);
}

body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

body dt {
  color: rgb(170, 170, 170);
}

body ol > li {
  color: rgb(170, 170, 170);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body ul > li {
  color: rgb(170, 170, 170);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body blockquote {
  background-color: rgb(17, 17, 17);
  font-family: "segoe ui", sans-serif;
  padding-bottom: 5px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body table {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  width: 176.969px;
}

body td {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

body th {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}`,
    code: `body code {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body pre > code, pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body figcaption {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  font-size: 14px;
}

body figure {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  margin-bottom: 14px;
  margin-top: 14px;
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
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  font-family: "segoe ui", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "segoe ui", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(170, 170, 170);
  text-decoration: line-through rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body input[type=checkbox] {
  border-bottom-color: rgba(153, 153, 153, 0.467);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(153, 153, 153, 0.467);
  border-right-color: rgba(153, 153, 153, 0.467);
  border-top-color: rgba(153, 153, 153, 0.467);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-left: -21px;
  width: 14px;
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
  border-bottom-color: rgba(61, 66, 65, 0.5);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 200;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(168, 36, 36);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(170, 170, 170);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(168, 36, 36);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body a.internal.tag-link::before {
  color: rgb(170, 170, 170);
}

body h1 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h2 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h3 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h4 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h5 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body h6 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
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
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(168, 36, 36);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}`,
    footer: `body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(170, 170, 170);
}

body footer ul li a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
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
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body li.section-li > .section .meta {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body ul.section-ul {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body .darkmode svg {
  color: rgb(170, 170, 170);
  stroke: rgb(170, 170, 170);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

body .breadcrumb-element p {
  color: rgb(170, 170, 170);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body .metadata {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
}

body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

body .page-header h2.page-title {
  color: rgb(170, 170, 170);
  font-family: georgia, serif;
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
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body kbd {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

body progress {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body sub {
  color: rgb(170, 170, 170);
  font-size: 11.6667px;
}

body summary {
  color: rgb(170, 170, 170);
}

body sup {
  color: rgb(170, 170, 170);
  font-size: 11.6667px;
}`,
  },
};
