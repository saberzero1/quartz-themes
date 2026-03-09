import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "mulled-wine",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #fff;
  --background-modifier-border-focus: #b3b6de;
  --background-modifier-border-hover: #b3b6de;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-primary: #292d3e;
  --background-primary-alt: #5da6ca;
  --background-secondary: #1d202c;
  --background-secondary-alt: #fff;
  --bases-cards-background: #292d3e;
  --bases-cards-cover-background: #5da6ca;
  --bases-cards-shadow: 0 0 0 1px #fff;
  --bases-cards-shadow-hover: 0 0 0 1px #b3b6de;
  --bases-embed-border-color: #fff;
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-color: #d295d1;
  --bases-table-border-color: transparent;
  --bases-table-cell-background-active: #292d3e;
  --bases-table-cell-background-disabled: #5da6ca;
  --bases-table-cell-shadow-active: 0 0 0 2px #b3b6de;
  --bases-table-container-border-radius: 8px;
  --bases-table-group-background: #5da6ca;
  --bases-table-header-background: #292d3e;
  --bases-table-header-color: #d295d1;
  --bases-table-summary-background: #292d3e;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --button-radius: 8px;
  --callout-radius: 8px;
  --callout-title-weight: 400;
  --canvas-background: #292d3e;
  --canvas-card-label-color: #95bae8;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #fff;
  --caret-color: #e46872;
  --checkbox-border-color: #d295d1;
  --checkbox-border-color-hover: #d295d180;
  --checkbox-color: #71799d;
  --checkbox-color-hover: #71799d92;
  --checkbox-marker-color: #292d3e;
  --checkbox-radius: 10px;
  --checkbox-size: 14px;
  --checklist-done-color: #d295d1;
  --clickable-icon-radius: 8px;
  --code-background: #383c4e;
  --code-border-color: #fff;
  --code-comment: #95bae8;
  --code-normal: #e46872;
  --code-punctuation: #d295d1;
  --code-radius: 8px;
  --collapse-icon-color: #95bae8;
  --collapse-icon-color-collapsed: #95bae8;
  --color-base-00: #292d3e;
  --color-base-05: #1d202c;
  --color-base-10: #5da6ca;
  --color-base-100: #e46872;
  --color-base-20: #1d202c;
  --color-base-25: #fff;
  --color-base-30: #fff;
  --color-base-35: #b3b6de;
  --color-base-40: #b3b6de;
  --color-base-50: #95bae8;
  --color-base-60: #fff;
  --color-base-70: #d295d1;
  --divider-color: transparent;
  --divider-vertical-height: calc(100% - 40px);
  --dropdown-background: #FFFFFF;
  --dropdown-background-hover: #b3b6de;
  --embed-block-shadow-hover: 0 0 0 1px #fff, inset 0 0 0 1px #fff;
  --file-header-background: #292d3e;
  --file-header-background-focused: #292d3e;
  --flair-background: #FFFFFF;
  --flair-color: #e46872;
  --font-mermaid: 'yu gothic', yugothic, sans-serif;
  --font-text: 'yu gothic', yugothic, sans-serif;
  --font-text-size: 14px;
  --footnote-divider-color: #fff;
  --footnote-id-color: #d295d1;
  --footnote-id-color-no-occurrences: #95bae8;
  --footnote-radius: 8px;
  --graph-line: #b3b6de;
  --graph-node: #d295d1;
  --graph-node-focused: #95bae8;
  --graph-node-unresolved: #95bae8;
  --graph-text: #e46872;
  --h1-size: 2em;
  --h2-size: 1.8em;
  --h3-size: 1.6em;
  --h4-size: 1.4em;
  --h5-size: 1.2em;
  --heading-formatting: #95bae8;
  --hr-color: #736883;
  --hr-thickness: 1px;
  --icon-color: #96bae8;
  --icon-color-active: #95bae8;
  --icon-color-focused: #d295d1;
  --icon-color-hover: #d295d1;
  --inline-title-color: #beb4da;
  --inline-title-font: 'yu gothic ui', sans-serif;
  --inline-title-size: 1.5em;
  --inline-title-weight: 400;
  --input-date-separator: #95bae8;
  --input-placeholder-color: #95bae8;
  --input-radius: 8px;
  --interactive-hover: #b3b6de;
  --interactive-normal: #FFFFFF;
  --link-color: #95bae8;
  --link-external-color: #95bae8;
  --link-unresolved-color: #95bae8;
  --list-marker-color: #95bae8;
  --list-marker-color-collapsed: #95bae8;
  --list-marker-color-hover: #d295d1;
  --menu-background: #1d202c;
  --menu-border-color: #b3b6de;
  --metadata-border-color: #fff;
  --metadata-divider-color: #fff;
  --metadata-input-height: 24.5px;
  --metadata-input-text-color: #e46872;
  --metadata-label-text-color: #d295d1;
  --metadata-label-text-color-hover: #d295d1;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b3b6de;
  --metadata-property-box-shadow-hover: 0 0 0 1px #b3b6de;
  --modal-background: #292d3e;
  --modal-border-color: #b3b6de;
  --modal-radius: 8px;
  --nav-collapse-icon-color: #95bae8;
  --nav-collapse-icon-color-collapsed: #95bae8;
  --nav-heading-color: #e46872;
  --nav-heading-color-collapsed: #95bae8;
  --nav-heading-color-collapsed-hover: #d295d1;
  --nav-heading-color-hover: #e46872;
  --nav-item-background-active: transparent;
  --nav-item-background-hover: transparent;
  --nav-item-color: #95bae8;
  --nav-item-color-active: #c2b4d9;
  --nav-item-color-highlighted: #95bae8;
  --nav-item-color-hover: #c2b4d9;
  --nav-item-color-selected: #e46872;
  --nav-item-radius: 8px;
  --nav-tag-color: #95bae8;
  --nav-tag-color-active: #d295d1;
  --nav-tag-color-hover: #d295d1;
  --nav-tag-radius: 8px;
  --pdf-background: #292d3e;
  --pdf-page-background: #292d3e;
  --pdf-shadow: 0 0 0 1px #fff;
  --pdf-sidebar-background: #292d3e;
  --pdf-thumbnail-shadow: 0 0 0 1px #fff;
  --pill-border-color: #fff;
  --pill-border-color-hover: #b3b6de;
  --pill-color: #d295d1;
  --pill-color-hover: #e46872;
  --pill-color-remove: #95bae8;
  --pill-color-remove-hover: #95bae8;
  --popover-font-size: 14px;
  --prompt-background: #292d3e;
  --prompt-border-color: #b3b6de;
  --radius-l: 8px;
  --radius-s: 8px;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --scrollbar-radius: 8px;
  --search-clear-button-color: #d295d1;
  --search-icon-color: #d295d1;
  --search-result-background: #292d3e;
  --setting-group-heading-color: #e46872;
  --setting-items-background: #5da6ca;
  --setting-items-border-color: #fff;
  --setting-items-radius: 8px;
  --sidebar-markdown-font-size: 12.6px;
  --slider-thumb-border-color: #b3b6de;
  --slider-thumb-radius: 8px;
  --slider-track-background: #FFFFFF;
  --status-bar-background: #1d202c;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #d295d1;
  --suggestion-background: #292d3e;
  --tab-background-active: #292d3e;
  --tab-container-background: #1d202c;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 8px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #1d202c;
  --tab-switcher-menubar-background: linear-gradient(to top, #1d202c, transparent);
  --tab-text-color: #95bae8;
  --tab-text-color-active: #fff;
  --tab-text-color-focused: #fff;
  --tab-text-color-focused-active: #d295d1;
  --tab-text-color-focused-active-current: #e46872;
  --tab-text-color-focused-highlighted: #95bae8;
  --table-add-button-border-color: #fff;
  --table-border-color: transparent;
  --table-drag-handle-color: #95bae8;
  --table-header-border-color: transparent;
  --table-header-color: #e46872;
  --table-header-size: 14px;
  --table-text-size: 14px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-color: #96bae8;
  --tag-color-hover: #714785;
  --text-accent: #95bae8;
  --text-faint: #95bae8;
  --text-highlight-bg: transparent;
  --text-muted: #d295d1;
  --text-normal: #e46872;
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: #fff;
  --titlebar-text-color: #d295d1;
  --titlebar-text-color-focused: #e46872;
  --toggle-radius: 8px;
  --toggle-thumb-radius: 8px;
  --vault-profile-color: #e46872;
  --vault-profile-color-hover: #e46872;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(228, 104, 114);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(41, 45, 62);
  color: rgb(228, 104, 114);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 32, 44);
  color: rgb(228, 104, 114);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(228, 104, 114);
}

body div#quartz-root {
  background-color: rgb(41, 45, 62);
  color: rgb(228, 104, 114);
}`,
    typography: `body .page article p > b, b {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body .page article p > em, em {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body .page article p > i, i {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body .page article p > strong, strong {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body del {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration: line-through rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body p {
  color: rgb(210, 149, 209);
  outline: rgb(210, 149, 209) none 0px;
  text-decoration: rgb(210, 149, 209);
  text-decoration-color: rgb(210, 149, 209);
}`,
    links: `body a.external, footer a {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
  text-decoration: underline rgb(149, 186, 232);
  text-decoration-color: rgb(149, 186, 232);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
  text-decoration: underline rgb(149, 186, 232);
  text-decoration-color: rgb(149, 186, 232);
}

body a.internal.broken {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
}`,
    lists: `body dd {
  color: rgb(228, 104, 114);
}

body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

body dt {
  color: rgb(228, 104, 114);
}

body ol > li {
  color: rgb(228, 104, 114);
}

body ol.overflow {
  background-color: rgb(41, 45, 62);
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

body ul > li {
  color: rgb(228, 104, 114);
}

body ul.overflow {
  background-color: rgb(41, 45, 62);
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(149, 186, 232);
  text-decoration: rgb(149, 186, 232);
}

body blockquote {
  font-family: "yu gothic", yugothic, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

body table {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  width: 176.969px;
}

body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(228, 104, 114);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(228, 104, 114);
}`,
    code: `body code {
  border-bottom-color: rgb(228, 104, 114);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(56, 60, 78);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(56, 60, 78);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
}

body pre > code, pre:has(> code) {
  background-color: rgb(56, 60, 78);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: rgb(56, 60, 78);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

body figcaption {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  font-size: 14px;
}

body figure {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  margin-bottom: 14px;
  margin-top: 14px;
}

body img {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

body video {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}`,
    embeds: `body .file-embed {
  background-color: rgb(93, 166, 202);
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
}

body .footnotes {
  border-top-color: rgb(228, 104, 114);
  color: rgb(228, 104, 114);
}

body .transclude {
  border-bottom-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

body .transclude-inner {
  border-bottom-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "yu gothic", yugothic, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "yu gothic", yugothic, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(210, 149, 209);
  text-decoration: line-through rgb(210, 149, 209);
  text-decoration-color: rgb(210, 149, 209);
}

body input[type=checkbox] {
  border-bottom-color: rgb(210, 149, 209);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-left: -21px;
  width: 14px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='*'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='-'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='/'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='>'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='?'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='I'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='S'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='b'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='c'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='d'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='f'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='i'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='k'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='l'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='p'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='u'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body li.task-list-item[data-task='w'] {
  color: rgb(228, 104, 114);
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(112, 200, 214);
  border-left-color: rgb(112, 200, 214);
  border-right-color: rgb(112, 200, 214);
  border-top-color: rgb(112, 200, 214);
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
}

body .search > .search-container > .search-space {
  background-color: rgb(41, 45, 62);
  border-bottom-color: rgb(179, 182, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(179, 182, 222);
  border-right-color: rgb(179, 182, 222);
  border-top-color: rgb(179, 182, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > * {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(228, 104, 114);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(228, 104, 114);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(228, 104, 114);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(228, 104, 114);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(179, 182, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(179, 182, 222);
  border-right-color: rgb(179, 182, 222);
  border-top-color: rgb(179, 182, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 32, 44);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(228, 104, 114);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
}

body a.internal.tag-link::before {
  color: rgb(150, 186, 232);
}

body h1 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body h2 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(190, 180, 218);
  font-family: "yu gothic ui", sans-serif;
}

body h3 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body h4 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body h5 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body h6 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 20px;
}

body ::-webkit-scrollbar {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
}

body ::-webkit-scrollbar-corner {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
}

body ::-webkit-scrollbar-track {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(149, 186, 232);
  font-family: "yu gothic ui", sans-serif;
  text-decoration: rgb(149, 186, 232);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(149, 186, 232);
  font-family: "yu gothic ui", sans-serif;
  text-decoration: rgb(149, 186, 232);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(149, 186, 232);
  font-family: "yu gothic ui", sans-serif;
  text-decoration: rgb(149, 186, 232);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(194, 180, 217);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(194, 180, 217);
  border-right-color: rgb(194, 180, 217);
  border-top-color: rgb(194, 180, 217);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(194, 180, 217);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(150, 186, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(150, 186, 232);
  border-right-color: rgb(150, 186, 232);
  border-top-color: rgb(150, 186, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(150, 186, 232);
}`,
    footer: `body footer {
  background-color: rgb(29, 32, 44);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(210, 149, 209);
}

body footer ul li a {
  color: rgb(210, 149, 209);
  text-decoration: rgb(210, 149, 209);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(228, 104, 114);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  color: rgb(228, 104, 114);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(149, 186, 232);
  text-decoration: rgb(149, 186, 232);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(149, 186, 232);
  font-family: "yu gothic ui", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

body li.section-li > .section .meta {
  color: rgb(149, 186, 232);
  font-family: "yu gothic ui", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(149, 186, 232);
  text-decoration: rgb(149, 186, 232);
}

body ul.section-ul {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(149, 186, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(149, 186, 232);
  border-right-color: rgb(149, 186, 232);
  border-top-color: rgb(149, 186, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(149, 186, 232);
}

body .darkmode svg {
  color: rgb(149, 186, 232);
  stroke: rgb(149, 186, 232);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(210, 149, 209);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(210, 149, 209);
}

body .breadcrumb-element p {
  color: rgb(149, 186, 232);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  color: rgb(228, 104, 114);
}

body .metadata {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(210, 149, 209);
  font-family: "yu gothic", yugothic, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  color: rgb(210, 149, 209);
  font-family: "yu gothic", yugothic, sans-serif;
}

body .navigation-progress {
  background-color: rgb(29, 32, 44);
}

body .page-header h2.page-title {
  color: rgb(228, 104, 114);
  font-family: "yu gothic ui", sans-serif;
}

body abbr {
  color: rgb(228, 104, 114);
  text-decoration: underline dotted rgb(228, 104, 114);
}

body details {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

body input[type=text] {
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  color: rgb(210, 149, 209);
}

body kbd {
  background-color: rgb(56, 60, 78);
  border-bottom-color: rgb(228, 104, 114);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

body progress {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

body sub {
  color: rgb(228, 104, 114);
  font-size: 11.6667px;
}

body summary {
  color: rgb(228, 104, 114);
}

body sup {
  color: rgb(228, 104, 114);
  font-size: 11.6667px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #fff;
  --background-modifier-border-focus: #b3b6de;
  --background-modifier-border-hover: #b3b6de;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-primary: #fff;
  --background-primary-alt: #71799d;
  --background-secondary: #e9ecf7;
  --background-secondary-alt: #e9ecf7;
  --bases-cards-background: #fff;
  --bases-cards-cover-background: #71799d;
  --bases-cards-shadow: 0 0 0 1px #fff;
  --bases-cards-shadow-hover: 0 0 0 1px #b3b6de;
  --bases-embed-border-color: #fff;
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-color: #d295d1;
  --bases-table-border-color: transparent;
  --bases-table-cell-background-active: #fff;
  --bases-table-cell-background-disabled: #71799d;
  --bases-table-cell-shadow-active: 0 0 0 2px #b3b6de;
  --bases-table-container-border-radius: 8px;
  --bases-table-group-background: #71799d;
  --bases-table-header-background: #fff;
  --bases-table-header-color: #d295d1;
  --bases-table-summary-background: #fff;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --button-radius: 8px;
  --callout-radius: 8px;
  --callout-title-weight: 400;
  --canvas-background: #fff;
  --canvas-card-label-color: #95bae8;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #fff;
  --caret-color: #383c4e;
  --checkbox-border-color: #d295d1;
  --checkbox-border-color-hover: #d295d180;
  --checkbox-color: #71799d;
  --checkbox-color-hover: #71799d92;
  --checkbox-marker-color: #fff;
  --checkbox-radius: 10px;
  --checkbox-size: 14px;
  --checklist-done-color: #d295d1;
  --clickable-icon-radius: 8px;
  --code-background: #e9ecf7;
  --code-border-color: #fff;
  --code-comment: #95bae8;
  --code-normal: #383c4e;
  --code-punctuation: #d295d1;
  --code-radius: 8px;
  --collapse-icon-color: #95bae8;
  --collapse-icon-color-collapsed: #95bae8;
  --color-base-00: #fff;
  --color-base-05: #e9ecf7;
  --color-base-10: #71799d;
  --color-base-100: #383c4e;
  --color-base-20: #e9ecf7;
  --color-base-25: #fff;
  --color-base-30: #fff;
  --color-base-35: #b3b6de;
  --color-base-40: #b3b6de;
  --color-base-50: #95bae8;
  --color-base-60: #fff;
  --color-base-70: #d295d1;
  --divider-color: transparent;
  --divider-vertical-height: calc(100% - 40px);
  --dropdown-background: #FFFFFF;
  --dropdown-background-hover: #71799d;
  --embed-block-shadow-hover: 0 0 0 1px #fff, inset 0 0 0 1px #fff;
  --file-header-background: #fff;
  --file-header-background-focused: #fff;
  --flair-background: #FFFFFF;
  --flair-color: #383c4e;
  --font-mermaid: 'yu gothic', yugothic, sans-serif;
  --font-text: 'yu gothic', yugothic, sans-serif;
  --font-text-size: 14px;
  --footnote-divider-color: #fff;
  --footnote-id-color: #d295d1;
  --footnote-id-color-no-occurrences: #95bae8;
  --footnote-radius: 8px;
  --graph-line: #b3b6de;
  --graph-node: #d295d1;
  --graph-node-focused: #95bae8;
  --graph-node-unresolved: #95bae8;
  --graph-text: #383c4e;
  --h1-size: 2em;
  --h2-size: 1.8em;
  --h3-size: 1.6em;
  --h4-size: 1.4em;
  --h5-size: 1.2em;
  --heading-formatting: #95bae8;
  --hr-color: #736883;
  --hr-thickness: 1px;
  --icon-color: #96bae8;
  --icon-color-active: #95bae8;
  --icon-color-focused: #d295d1;
  --icon-color-hover: #d295d1;
  --inline-title-color: #beb4da;
  --inline-title-font: 'yu gothic ui', sans-serif;
  --inline-title-size: 1.5em;
  --inline-title-weight: 400;
  --input-date-separator: #95bae8;
  --input-placeholder-color: #95bae8;
  --input-radius: 8px;
  --interactive-hover: #71799d;
  --interactive-normal: #FFFFFF;
  --link-color: #95bae8;
  --link-external-color: #95bae8;
  --link-unresolved-color: #95bae8;
  --list-marker-color: #95bae8;
  --list-marker-color-collapsed: #95bae8;
  --list-marker-color-hover: #d295d1;
  --menu-background: #e9ecf7;
  --menu-border-color: #b3b6de;
  --metadata-border-color: #fff;
  --metadata-divider-color: #fff;
  --metadata-input-height: 24.5px;
  --metadata-input-text-color: #383c4e;
  --metadata-label-text-color: #d295d1;
  --metadata-label-text-color-hover: #d295d1;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b3b6de;
  --metadata-property-box-shadow-hover: 0 0 0 1px #b3b6de;
  --modal-background: #fff;
  --modal-border-color: #b3b6de;
  --modal-radius: 8px;
  --nav-collapse-icon-color: #95bae8;
  --nav-collapse-icon-color-collapsed: #95bae8;
  --nav-heading-color: #383c4e;
  --nav-heading-color-collapsed: #95bae8;
  --nav-heading-color-collapsed-hover: #d295d1;
  --nav-heading-color-hover: #383c4e;
  --nav-item-background-active: transparent;
  --nav-item-background-hover: transparent;
  --nav-item-color: #634a75;
  --nav-item-color-active: #9a73b4;
  --nav-item-color-highlighted: #95bae8;
  --nav-item-color-hover: #95bae8;
  --nav-item-color-selected: #383c4e;
  --nav-item-radius: 8px;
  --nav-tag-color: #95bae8;
  --nav-tag-color-active: #d295d1;
  --nav-tag-color-hover: #d295d1;
  --nav-tag-radius: 8px;
  --pdf-background: #fff;
  --pdf-page-background: #fff;
  --pdf-sidebar-background: #fff;
  --pill-border-color: #fff;
  --pill-border-color-hover: #b3b6de;
  --pill-color: #d295d1;
  --pill-color-hover: #383c4e;
  --pill-color-remove: #95bae8;
  --pill-color-remove-hover: #95bae8;
  --popover-font-size: 14px;
  --prompt-background: #fff;
  --prompt-border-color: #b3b6de;
  --radius-l: 8px;
  --radius-s: 8px;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --scrollbar-radius: 8px;
  --search-clear-button-color: #d295d1;
  --search-icon-color: #d295d1;
  --search-result-background: #fff;
  --setting-group-heading-color: #383c4e;
  --setting-items-background: #71799d;
  --setting-items-border-color: #fff;
  --setting-items-radius: 8px;
  --sidebar-markdown-font-size: 12.6px;
  --slider-thumb-border-color: #b3b6de;
  --slider-thumb-radius: 8px;
  --slider-track-background: #FFFFFF;
  --status-bar-background: #e9ecf7;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #d295d1;
  --suggestion-background: #fff;
  --tab-background-active: #fff;
  --tab-container-background: #e9ecf7;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 8px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #e9ecf7;
  --tab-switcher-menubar-background: linear-gradient(to top, #e9ecf7, transparent);
  --tab-text-color: #95bae8;
  --tab-text-color-active: #fff;
  --tab-text-color-focused: #fff;
  --tab-text-color-focused-active: #d295d1;
  --tab-text-color-focused-active-current: #383c4e;
  --tab-text-color-focused-highlighted: #95bae8;
  --table-add-button-border-color: #fff;
  --table-border-color: transparent;
  --table-drag-handle-color: #95bae8;
  --table-header-border-color: transparent;
  --table-header-color: #383c4e;
  --table-header-size: 14px;
  --table-text-size: 14px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-color: #96bae8;
  --tag-color-hover: #714785;
  --text-accent: #95bae8;
  --text-faint: #95bae8;
  --text-highlight-bg: transparent;
  --text-muted: #d295d1;
  --text-normal: #383c4e;
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: #fff;
  --titlebar-text-color: #d295d1;
  --titlebar-text-color-focused: #383c4e;
  --toggle-radius: 8px;
  --toggle-thumb-radius: 8px;
  --vault-profile-color: #383c4e;
  --vault-profile-color-hover: #383c4e;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(56, 60, 78);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(56, 60, 78);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(233, 236, 247);
  color: rgb(56, 60, 78);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(56, 60, 78);
}

body div#quartz-root {
  color: rgb(56, 60, 78);
}`,
    typography: `body .page article p > b, b {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body .page article p > em, em {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body .page article p > i, i {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body .page article p > strong, strong {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body del {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration: line-through rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body p {
  color: rgb(210, 149, 209);
  outline: rgb(210, 149, 209) none 0px;
  text-decoration: rgb(210, 149, 209);
  text-decoration-color: rgb(210, 149, 209);
}`,
    links: `body a.external, footer a {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
  text-decoration: underline rgb(149, 186, 232);
  text-decoration-color: rgb(149, 186, 232);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
  text-decoration: underline rgb(149, 186, 232);
  text-decoration-color: rgb(149, 186, 232);
}

body a.internal.broken {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
}`,
    lists: `body dd {
  color: rgb(56, 60, 78);
}

body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

body dt {
  color: rgb(56, 60, 78);
}

body ol > li {
  color: rgb(56, 60, 78);
}

body ol.overflow {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

body ul > li {
  color: rgb(56, 60, 78);
}

body ul.overflow {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(149, 186, 232);
  text-decoration: rgb(149, 186, 232);
}

body blockquote {
  font-family: "yu gothic", yugothic, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

body table {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  width: 176.969px;
}

body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(56, 60, 78);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(56, 60, 78);
}`,
    code: `body code {
  border-bottom-color: rgb(56, 60, 78);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
}

body pre > code, pre:has(> code) {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

body figcaption {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  font-size: 14px;
}

body figure {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  margin-bottom: 14px;
  margin-top: 14px;
}

body img {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

body video {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}`,
    embeds: `body .file-embed {
  background-color: rgb(113, 121, 157);
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
}

body .footnotes {
  border-top-color: rgb(56, 60, 78);
  color: rgb(56, 60, 78);
}

body .transclude {
  border-bottom-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

body .transclude-inner {
  border-bottom-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "yu gothic", yugothic, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "yu gothic", yugothic, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(210, 149, 209);
  text-decoration: line-through rgb(210, 149, 209);
  text-decoration-color: rgb(210, 149, 209);
}

body input[type=checkbox] {
  border-bottom-color: rgb(210, 149, 209);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-left: -21px;
  width: 14px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='*'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='-'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='/'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='>'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='?'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='I'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='S'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='b'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='c'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='d'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='f'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='i'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='k'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='l'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='p'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='u'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body li.task-list-item[data-task='w'] {
  color: rgb(56, 60, 78);
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(112, 200, 214);
  border-left-color: rgb(112, 200, 214);
  border-right-color: rgb(112, 200, 214);
  border-top-color: rgb(112, 200, 214);
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(179, 182, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(179, 182, 222);
  border-right-color: rgb(179, 182, 222);
  border-top-color: rgb(179, 182, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > * {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(56, 60, 78);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(56, 60, 78);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(56, 60, 78);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(56, 60, 78);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(179, 182, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(179, 182, 222);
  border-right-color: rgb(179, 182, 222);
  border-top-color: rgb(179, 182, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(233, 236, 247);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(56, 60, 78);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
}

body a.internal.tag-link::before {
  color: rgb(150, 186, 232);
}

body h1 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body h2 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(190, 180, 218);
  font-family: "yu gothic ui", sans-serif;
}

body h3 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body h4 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body h5 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body h6 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 20px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(99, 74, 117);
  font-family: "yu gothic ui", sans-serif;
  text-decoration: rgb(99, 74, 117);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(99, 74, 117);
  font-family: "yu gothic ui", sans-serif;
  text-decoration: rgb(99, 74, 117);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(99, 74, 117);
  font-family: "yu gothic ui", sans-serif;
  text-decoration: rgb(99, 74, 117);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(154, 115, 180);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(154, 115, 180);
  border-right-color: rgb(154, 115, 180);
  border-top-color: rgb(154, 115, 180);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(154, 115, 180);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(150, 186, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(150, 186, 232);
  border-right-color: rgb(150, 186, 232);
  border-top-color: rgb(150, 186, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(150, 186, 232);
}`,
    footer: `body footer {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(210, 149, 209);
}

body footer ul li a {
  color: rgb(210, 149, 209);
  text-decoration: rgb(210, 149, 209);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(56, 60, 78);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  color: rgb(56, 60, 78);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(99, 74, 117);
  text-decoration: rgb(99, 74, 117);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(99, 74, 117);
  font-family: "yu gothic ui", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

body li.section-li > .section .meta {
  color: rgb(99, 74, 117);
  font-family: "yu gothic ui", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(99, 74, 117);
  text-decoration: rgb(99, 74, 117);
}

body ul.section-ul {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(149, 186, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(149, 186, 232);
  border-right-color: rgb(149, 186, 232);
  border-top-color: rgb(149, 186, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(149, 186, 232);
}

body .darkmode svg {
  color: rgb(149, 186, 232);
  stroke: rgb(149, 186, 232);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(210, 149, 209);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(210, 149, 209);
}

body .breadcrumb-element p {
  color: rgb(149, 186, 232);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  color: rgb(56, 60, 78);
}

body .metadata {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(210, 149, 209);
  font-family: "yu gothic", yugothic, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  color: rgb(210, 149, 209);
  font-family: "yu gothic", yugothic, sans-serif;
}

body .navigation-progress {
  background-color: rgb(233, 236, 247);
}

body .page-header h2.page-title {
  color: rgb(56, 60, 78);
  font-family: "yu gothic ui", sans-serif;
}

body abbr {
  color: rgb(56, 60, 78);
  text-decoration: underline dotted rgb(56, 60, 78);
}

body details {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

body input[type=text] {
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  color: rgb(210, 149, 209);
}

body kbd {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgb(56, 60, 78);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

body progress {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

body sub {
  color: rgb(56, 60, 78);
  font-size: 11.6667px;
}

body summary {
  color: rgb(56, 60, 78);
}

body sup {
  color: rgb(56, 60, 78);
  font-size: 11.6667px;
}`,
  },
};
