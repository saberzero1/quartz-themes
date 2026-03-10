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
  --background-modifier-border: #111111 !important;
  --background-modifier-border-focus: #A82424 !important;
  --background-modifier-border-hover: #030303 !important;
  --background-modifier-form-field: #111111 !important;
  --background-modifier-form-field-hover: #111111 !important;
  --background-primary: #111111 !important;
  --background-primary-alt: #111111 !important;
  --background-secondary: #111111 !important;
  --background-secondary-alt: #111111 !important;
  --bases-cards-background: #111111 !important;
  --bases-cards-cover-background: #111111 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #111111 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #030303 !important;
  --bases-embed-border-color: #111111 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #aaa !important;
  --bases-table-border-color: #111111 !important;
  --bases-table-cell-background-active: #111111 !important;
  --bases-table-cell-background-disabled: #111111 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #A82424 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #111111 !important;
  --bases-table-header-background: #111111 !important;
  --bases-table-header-color: #aaa !important;
  --bases-table-summary-background: #111111 !important;
  --blur-background: color-mix(in srgb, #191919 65%, transparent) linear-gradient(#191919, color-mix(in srgb, #191919 65%, transparent)) !important;
  --bodyFont: 'segoe ui', sans-serif !important;
  --button-radius: 0px !important;
  --callout-blend-mode: normal;
  --callout-radius: 0px;
  --callout-title-weight: 200;
  --canvas-background: #111111 !important;
  --canvas-card-label-color: #aaa !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #111111 !important;
  --caret-color: #aaa !important;
  --checkbox-border-color: #99999977 !important;
  --checkbox-border-color-hover: #aaa !important;
  --checkbox-color: #999 !important;
  --checkbox-color-hover: #aaa !important;
  --checkbox-marker-color: #111111 !important;
  --checkbox-radius: 10px !important;
  --checkbox-size: 14px !important;
  --checklist-done-color: #aaa !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #111111 !important;
  --code-border-color: #111111 !important;
  --code-comment: #aaa !important;
  --code-normal: #aaa !important;
  --code-punctuation: #aaa !important;
  --code-radius: 0px !important;
  --codeFont: 'segoe ui', sans-serif !important;
  --collapse-icon-color: #aaa !important;
  --collapse-icon-color-collapsed: #A82424 !important;
  --color-base-00: #111111 !important;
  --color-base-05: #111111 !important;
  --color-base-10: #111111 !important;
  --color-base-100: #aaa !important;
  --color-base-20: #111111 !important;
  --color-base-25: #111111 !important;
  --color-base-30: #111111 !important;
  --color-base-35: #030303 !important;
  --color-base-40: #A82424 !important;
  --color-base-50: #aaa !important;
  --color-base-60: #A82424 !important;
  --color-base-70: #aaa !important;
  --dark: #aaa !important;
  --darkgray: #aaa !important;
  --divider-color: transparent !important;
  --dropdown-background: #191919 !important;
  --dropdown-background-hover: #030303 !important;
  --embed-block-shadow-hover: 0 0 0 1px #111111, inset 0 0 0 1px #111111 !important;
  --file-header-background: #111111 !important;
  --file-header-background-focused: #111111 !important;
  --file-line-width: 600px !important;
  --flair-background: #191919 !important;
  --flair-color: #aaa !important;
  --font-mermaid: 'segoe ui', sans-serif !important;
  --font-text: 'segoe ui', sans-serif !important;
  --font-text-size: 14px !important;
  --footnote-divider-color: #111111 !important;
  --footnote-id-color: #aaa !important;
  --footnote-id-color-no-occurrences: #aaa !important;
  --footnote-radius: 0px !important;
  --graph-line: #030303 !important;
  --graph-node: #aaa !important;
  --graph-node-focused: #A82424 !important;
  --graph-node-unresolved: #aaa !important;
  --graph-text: #aaa !important;
  --gray: #aaa !important;
  --headerFont: 'segoe ui', sans-serif !important;
  --heading-formatting: #aaa !important;
  --highlight: transparent !important;
  --hr-color: #3d424180 !important;
  --hr-thickness: 1px !important;
  --icon-color: #aaa !important;
  --icon-color-active: #A82424 !important;
  --icon-color-focused: #A82424 !important;
  --icon-color-hover: #999 !important;
  --inline-title-color: #A82424 !important;
  --inline-title-font: 'georgia', serif !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 200 !important;
  --input-date-separator: #aaa !important;
  --input-placeholder-color: #aaa !important;
  --input-radius: 0px !important;
  --interactive-hover: #030303 !important;
  --interactive-normal: #191919 !important;
  --light: #111111 !important;
  --lightgray: #111111 !important;
  --link-color: #A82424 !important;
  --link-color-hover: #999 !important;
  --link-external-color: #A82424 !important;
  --link-external-color-hover: #999 !important;
  --link-unresolved-color: #A82424 !important;
  --list-marker-color: #aaa !important;
  --list-marker-color-collapsed: #A82424 !important;
  --list-marker-color-hover: #aaa !important;
  --menu-background: #111111 !important;
  --menu-border-color: #030303 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #111111 !important;
  --metadata-divider-color: #111111 !important;
  --metadata-input-height: 24.5px !important;
  --metadata-input-text-color: #aaa !important;
  --metadata-label-text-color: #aaa !important;
  --metadata-label-text-color-hover: #aaa !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #A82424 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #030303 !important;
  --modal-background: #111111 !important;
  --modal-border-color: #A82424 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #9999998a !important;
  --nav-collapse-icon-color-collapsed: #aaa !important;
  --nav-heading-color: #aaa !important;
  --nav-heading-color-collapsed: #aaa !important;
  --nav-heading-color-collapsed-hover: #aaa !important;
  --nav-heading-color-hover: #aaa !important;
  --nav-item-background-active: #111111 !important;
  --nav-item-background-hover: #A82424 !important;
  --nav-item-color: #aaa !important;
  --nav-item-color-active: #A82424 !important;
  --nav-item-color-highlighted: #A82424 !important;
  --nav-item-color-hover: #111111 !important;
  --nav-item-color-selected: #aaa !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #aaa !important;
  --nav-tag-color-active: #aaa !important;
  --nav-tag-color-hover: #aaa !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #111111 !important;
  --pdf-page-background: #111111 !important;
  --pdf-shadow: 0 0 0 1px #111111 !important;
  --pdf-sidebar-background: #111111 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #111111 !important;
  --pill-border-color: #111111 !important;
  --pill-border-color-hover: #030303 !important;
  --pill-color: #aaa !important;
  --pill-color-hover: #aaa !important;
  --pill-color-remove: #aaa !important;
  --pill-color-remove-hover: #A82424 !important;
  --popover-font-size: 14px !important;
  --prompt-background: #111111 !important;
  --prompt-border-color: #A82424 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #191919 65%, transparent) linear-gradient(#191919, color-mix(in srgb, #191919 65%, transparent)) !important;
  --ribbon-background: #111111 !important;
  --ribbon-background-collapsed: #111111 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #aaa !important;
  --search-icon-color: #aaa !important;
  --search-result-background: #111111 !important;
  --secondary: #A82424 !important;
  --setting-group-heading-color: #aaa !important;
  --setting-items-background: #111111 !important;
  --setting-items-border-color: #111111 !important;
  --setting-items-radius: 0px !important;
  --sidebar-markdown-font-size: 12.6px !important;
  --slider-thumb-border-color: #030303 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #aaa !important;
  --status-bar-background: #111111 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #aaa !important;
  --suggestion-background: #111111 !important;
  --tab-background-active: #191919 !important;
  --tab-container-background: #111111 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #111111 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent) !important;
  --tab-text-color: #aaa !important;
  --tab-text-color-active: #aaa !important;
  --tab-text-color-focused: #aaa !important;
  --tab-text-color-focused-active: #aaa !important;
  --tab-text-color-focused-active-current: #999 !important;
  --tab-text-color-focused-highlighted: #A82424 !important;
  --table-add-button-border-color: #111111 !important;
  --table-border-color: #111111 !important;
  --table-drag-handle-color: #aaa !important;
  --table-header-border-color: #111111 !important;
  --table-header-color: #aaa !important;
  --table-header-size: 14px !important;
  --table-text-size: 14px !important;
  --tag-background: #191919 !important;
  --tag-background-hover: #A82424 !important;
  --tag-color: #aaa !important;
  --tag-color-hover: #191919 !important;
  --tag-radius: 0px !important;
  --tertiary: #999 !important;
  --text-accent: #A82424 !important;
  --text-accent-hover: #999 !important;
  --text-faint: #aaa !important;
  --text-highlight-bg: transparent !important;
  --text-muted: #aaa !important;
  --text-normal: #aaa !important;
  --textHighlight: transparent !important;
  --titleFont: 'segoe ui', sans-serif !important;
  --titlebar-background: #111111 !important;
  --titlebar-background-focused: #111111 !important;
  --titlebar-border-color: #111111 !important;
  --titlebar-text-color: #aaa !important;
  --titlebar-text-color-focused: #aaa !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #aaa !important;
  --vault-profile-color-hover: #aaa !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
  --background-modifier-border: #111111 !important;
  --background-modifier-border-focus: #A82424 !important;
  --background-modifier-border-hover: #030303 !important;
  --background-modifier-form-field: #111111 !important;
  --background-modifier-form-field-hover: #111111 !important;
  --background-primary: #111111 !important;
  --background-primary-alt: #111111 !important;
  --background-secondary: #111111 !important;
  --background-secondary-alt: #111111 !important;
  --bases-cards-background: #111111 !important;
  --bases-cards-cover-background: #111111 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #111111 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #030303 !important;
  --bases-embed-border-color: #111111 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #aaa !important;
  --bases-table-border-color: #111111 !important;
  --bases-table-cell-background-active: #111111 !important;
  --bases-table-cell-background-disabled: #111111 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #A82424 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #111111 !important;
  --bases-table-header-background: #111111 !important;
  --bases-table-header-color: #aaa !important;
  --bases-table-summary-background: #111111 !important;
  --blur-background: color-mix(in srgb, #111111 65%, transparent) linear-gradient(#111111, color-mix(in srgb, #111111 65%, transparent)) !important;
  --bodyFont: 'segoe ui', sans-serif !important;
  --button-radius: 0px !important;
  --callout-blend-mode: normal;
  --callout-radius: 0px;
  --callout-title-weight: 200;
  --canvas-background: #111111 !important;
  --canvas-card-label-color: #aaa !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #111111 !important;
  --caret-color: #aaa !important;
  --checkbox-border-color: #99999977 !important;
  --checkbox-border-color-hover: #aaa !important;
  --checkbox-color: #999 !important;
  --checkbox-color-hover: #aaa !important;
  --checkbox-marker-color: #111111 !important;
  --checkbox-radius: 10px !important;
  --checkbox-size: 14px !important;
  --checklist-done-color: #aaa !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #111111 !important;
  --code-border-color: #111111 !important;
  --code-comment: #aaa !important;
  --code-normal: #aaa !important;
  --code-punctuation: #aaa !important;
  --code-radius: 0px !important;
  --codeFont: 'segoe ui', sans-serif !important;
  --collapse-icon-color: #aaa !important;
  --collapse-icon-color-collapsed: #A82424 !important;
  --color-base-00: #111111 !important;
  --color-base-05: #111111 !important;
  --color-base-10: #111111 !important;
  --color-base-100: #aaa !important;
  --color-base-20: #111111 !important;
  --color-base-25: #111111 !important;
  --color-base-30: #111111 !important;
  --color-base-35: #030303 !important;
  --color-base-40: #A82424 !important;
  --color-base-50: #aaa !important;
  --color-base-60: #A82424 !important;
  --color-base-70: #aaa !important;
  --dark: #aaa !important;
  --darkgray: #aaa !important;
  --divider-color: transparent !important;
  --dropdown-background: #191919 !important;
  --dropdown-background-hover: #111111 !important;
  --embed-block-shadow-hover: 0 0 0 1px #111111, inset 0 0 0 1px #111111 !important;
  --file-header-background: #111111 !important;
  --file-header-background-focused: #111111 !important;
  --file-line-width: 600px !important;
  --flair-background: #191919 !important;
  --flair-color: #aaa !important;
  --font-mermaid: 'segoe ui', sans-serif !important;
  --font-text: 'segoe ui', sans-serif !important;
  --font-text-size: 14px !important;
  --footnote-divider-color: #111111 !important;
  --footnote-id-color: #aaa !important;
  --footnote-id-color-no-occurrences: #aaa !important;
  --footnote-radius: 0px !important;
  --graph-line: #030303 !important;
  --graph-node: #aaa !important;
  --graph-node-focused: #A82424 !important;
  --graph-node-unresolved: #aaa !important;
  --graph-text: #aaa !important;
  --gray: #aaa !important;
  --headerFont: 'segoe ui', sans-serif !important;
  --heading-formatting: #aaa !important;
  --highlight: transparent !important;
  --hr-color: #3d424180 !important;
  --hr-thickness: 1px !important;
  --icon-color: #aaa !important;
  --icon-color-active: #A82424 !important;
  --icon-color-focused: #A82424 !important;
  --icon-color-hover: #999 !important;
  --inline-title-color: #A82424 !important;
  --inline-title-font: 'georgia', serif !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 200 !important;
  --input-date-separator: #aaa !important;
  --input-placeholder-color: #aaa !important;
  --input-radius: 0px !important;
  --interactive-hover: #111111 !important;
  --interactive-normal: #191919 !important;
  --light: #111111 !important;
  --lightgray: #111111 !important;
  --link-color: #A82424 !important;
  --link-color-hover: #999 !important;
  --link-external-color: #A82424 !important;
  --link-external-color-hover: #999 !important;
  --link-unresolved-color: #A82424 !important;
  --list-marker-color: #aaa !important;
  --list-marker-color-collapsed: #A82424 !important;
  --list-marker-color-hover: #aaa !important;
  --menu-background: #111111 !important;
  --menu-border-color: #030303 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #111111 !important;
  --metadata-divider-color: #111111 !important;
  --metadata-input-height: 24.5px !important;
  --metadata-input-text-color: #aaa !important;
  --metadata-label-text-color: #aaa !important;
  --metadata-label-text-color-hover: #aaa !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #A82424 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #030303 !important;
  --modal-background: #111111 !important;
  --modal-border-color: #A82424 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #9999998a !important;
  --nav-collapse-icon-color-collapsed: #aaa !important;
  --nav-heading-color: #aaa !important;
  --nav-heading-color-collapsed: #aaa !important;
  --nav-heading-color-collapsed-hover: #aaa !important;
  --nav-heading-color-hover: #aaa !important;
  --nav-item-background-active: #111111 !important;
  --nav-item-background-hover: #A82424 !important;
  --nav-item-color: #aaa !important;
  --nav-item-color-active: #A82424 !important;
  --nav-item-color-highlighted: #A82424 !important;
  --nav-item-color-hover: #111111 !important;
  --nav-item-color-selected: #aaa !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #aaa !important;
  --nav-tag-color-active: #aaa !important;
  --nav-tag-color-hover: #aaa !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #111111 !important;
  --pdf-page-background: #111111 !important;
  --pdf-sidebar-background: #111111 !important;
  --pill-border-color: #111111 !important;
  --pill-border-color-hover: #030303 !important;
  --pill-color: #aaa !important;
  --pill-color-hover: #aaa !important;
  --pill-color-remove: #aaa !important;
  --pill-color-remove-hover: #A82424 !important;
  --popover-font-size: 14px !important;
  --prompt-background: #111111 !important;
  --prompt-border-color: #A82424 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #111111 65%, transparent) linear-gradient(#111111, color-mix(in srgb, #111111 65%, transparent)) !important;
  --ribbon-background: #111111 !important;
  --ribbon-background-collapsed: #111111 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #aaa !important;
  --search-icon-color: #aaa !important;
  --search-result-background: #111111 !important;
  --secondary: #A82424 !important;
  --setting-group-heading-color: #aaa !important;
  --setting-items-background: #111111 !important;
  --setting-items-border-color: #111111 !important;
  --setting-items-radius: 0px !important;
  --sidebar-markdown-font-size: 12.6px !important;
  --slider-thumb-border-color: #030303 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #aaa !important;
  --status-bar-background: #111111 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #aaa !important;
  --suggestion-background: #111111 !important;
  --tab-background-active: #191919 !important;
  --tab-container-background: #111111 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #111111 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent) !important;
  --tab-text-color: #aaa !important;
  --tab-text-color-active: #aaa !important;
  --tab-text-color-focused: #aaa !important;
  --tab-text-color-focused-active: #aaa !important;
  --tab-text-color-focused-active-current: #999 !important;
  --tab-text-color-focused-highlighted: #A82424 !important;
  --table-add-button-border-color: #111111 !important;
  --table-border-color: #111111 !important;
  --table-drag-handle-color: #aaa !important;
  --table-header-border-color: #111111 !important;
  --table-header-color: #aaa !important;
  --table-header-size: 14px !important;
  --table-text-size: 14px !important;
  --tag-background: #191919 !important;
  --tag-background-hover: #A82424 !important;
  --tag-color: #aaa !important;
  --tag-color-hover: #191919 !important;
  --tag-radius: 0px !important;
  --tertiary: #999 !important;
  --text-accent: #A82424 !important;
  --text-accent-hover: #999 !important;
  --text-faint: #aaa !important;
  --text-highlight-bg: transparent !important;
  --text-muted: #aaa !important;
  --text-normal: #aaa !important;
  --textHighlight: transparent !important;
  --titleFont: 'segoe ui', sans-serif !important;
  --titlebar-background: #111111 !important;
  --titlebar-background-focused: #111111 !important;
  --titlebar-border-color: #111111 !important;
  --titlebar-text-color: #aaa !important;
  --titlebar-text-color-focused: #aaa !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #aaa !important;
  --vault-profile-color-hover: #aaa !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
