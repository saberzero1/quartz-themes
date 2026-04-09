import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dracula-for-obsidian",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-accent: #f8f8f2 !important;
  --background-modifier-border: #f8f8f2 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-success: #50fa7b !important;
  --background-primary: #282a36 !important;
  --background-primary-alt: #44475a !important;
  --background-secondary: #44475a !important;
  --background-secondary-alt: #282a36 !important;
  --bases-cards-background: #282a36 !important;
  --bases-cards-cover-background: #44475a !important;
  --bases-cards-shadow: 0 0 0 1px #f8f8f2 !important;
  --bases-embed-border-color: #f8f8f2 !important;
  --bases-group-heading-property-color: #f8f8f2 !important;
  --bases-table-border-color: #f8f8f2 !important;
  --bases-table-cell-background-active: #282a36 !important;
  --bases-table-cell-background-disabled: #44475a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ffb86c !important;
  --bases-table-group-background: #44475a !important;
  --bases-table-header-background: #282a36 !important;
  --bases-table-header-color: #f8f8f2 !important;
  --bases-table-summary-background: #282a36 !important;
  --blockquote-border: #ffb86c !important;
  --blockquote-border-color: #ffb86c !important;
  --blur-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent)) !important;
  --border-color: #2b2727 !important;
  --canvas-background: #282a36 !important;
  --canvas-card-label-color: #bd93f9 !important;
  --caret-color: #f8f8f2 !important;
  --checkbox-border-color: #bd93f9 !important;
  --checkbox-border-color-hover: #f8f8f2 !important;
  --checkbox-color: #ffb86c !important;
  --checkbox-color-hover: #ff5555 !important;
  --checkbox-marker-color: #282a36 !important;
  --checklist-done-color: #f8f8f2 !important;
  --code-background: #44475a !important;
  --code-block: #8be9fd !important;
  --code-border-color: #f8f8f2 !important;
  --code-comment: #bd93f9 !important;
  --code-normal: #f8f8f2 !important;
  --code-punctuation: #f8f8f2 !important;
  --collapse-icon-color: #bd93f9 !important;
  --collapse-icon-color-collapsed: #ffb86c !important;
  --dark: #f8f8f2 !important;
  --darkgray: #f8f8f2 !important;
  --divider-color: #f8f8f2 !important;
  --divider-color-hover: #ffb86c !important;
  --dropdown-background: #ffb86c !important;
  --dropdown-background-hover: #ff5555 !important;
  --embed-block-shadow-hover: 0 0 0 1px #f8f8f2, inset 0 0 0 1px #f8f8f2 !important;
  --embed-border-start: 2px solid #ffb86c !important;
  --file-header-background: #282a36 !important;
  --file-header-background-focused: #282a36 !important;
  --flair-background: #ffb86c !important;
  --flair-color: #f8f8f2 !important;
  --font-family-editor: Avenir, Avenir Next, sans-serif !important;
  --font-family-preview: Avenir, Avenir Next, sans-serif !important;
  --font-size-code: 16px !important;
  --font-size-h1: 24px !important;
  --font-size-h2: 23px !important;
  --font-size-h3: 22px !important;
  --font-size-h4: 21px !important;
  --font-size-h5: 20px !important;
  --font-size-h6: 19px !important;
  --font-size-normal: 19px !important;
  --font-size-side-dock: 16px !important;
  --font-size-side-dock-title: 18px !important;
  --font-size-status-bar: 16px !important;
  --footnote-divider-color: #f8f8f2 !important;
  --footnote-id-color: #f8f8f2 !important;
  --footnote-id-color-no-occurrences: #bd93f9 !important;
  --graph-node: #f8f8f2 !important;
  --graph-node-focused: #ffb86c !important;
  --graph-node-unresolved: #bd93f9 !important;
  --graph-text: #f8f8f2 !important;
  --gray: #f8f8f2 !important;
  --heading-formatting: #bd93f9 !important;
  --highlight: #ff5555 !important;
  --hr-color: #f8f8f2 !important;
  --icon-color: #f8f8f2 !important;
  --icon-color-active: #ffb86c !important;
  --icon-color-focused: #f8f8f2 !important;
  --icon-color-hover: #f8f8f2 !important;
  --inline-code: #bd93f9 !important;
  --input-date-separator: #bd93f9 !important;
  --input-placeholder-color: #bd93f9 !important;
  --interactive-accent: #ffb86c !important;
  --interactive-accent-hover: #ff5555 !important;
  --interactive-accent-rgb: 123, 108, 217 !important;
  --interactive-hover: #ff5555 !important;
  --interactive-normal: #ffb86c !important;
  --light: #282a36 !important;
  --lightgray: #44475a !important;
  --link-color: #ffb86c !important;
  --link-color-hover: #8be9fd !important;
  --link-external-color: #ffb86c !important;
  --link-external-color-hover: #8be9fd !important;
  --link-unresolved-color: #ffb86c !important;
  --list-marker-color: #bd93f9 !important;
  --list-marker-color-collapsed: #ffb86c !important;
  --list-marker-color-hover: #f8f8f2 !important;
  --menu-background: #44475a !important;
  --metadata-border-color: #f8f8f2 !important;
  --metadata-divider-color: #f8f8f2 !important;
  --metadata-input-text-color: #f8f8f2 !important;
  --metadata-label-text-color: #f8f8f2 !important;
  --metadata-label-text-color-hover: #f8f8f2 !important;
  --modal-background: #282a36 !important;
  --nav-collapse-icon-color: #bd93f9 !important;
  --nav-collapse-icon-color-collapsed: #bd93f9 !important;
  --nav-heading-color: #f8f8f2 !important;
  --nav-heading-color-collapsed: #bd93f9 !important;
  --nav-heading-color-collapsed-hover: #f8f8f2 !important;
  --nav-heading-color-hover: #f8f8f2 !important;
  --nav-item-color: #f8f8f2 !important;
  --nav-item-color-active: #f8f8f2 !important;
  --nav-item-color-highlighted: #ffb86c !important;
  --nav-item-color-hover: #f8f8f2 !important;
  --nav-item-color-selected: #f8f8f2 !important;
  --nav-tag-color: #bd93f9 !important;
  --nav-tag-color-active: #f8f8f2 !important;
  --nav-tag-color-hover: #f8f8f2 !important;
  --pdf-background: #282a36 !important;
  --pdf-page-background: #282a36 !important;
  --pdf-shadow: 0 0 0 1px #f8f8f2 !important;
  --pdf-sidebar-background: #282a36 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #f8f8f2 !important;
  --pill-border-color: #f8f8f2 !important;
  --pill-color: #f8f8f2 !important;
  --pill-color-hover: #f8f8f2 !important;
  --pill-color-remove: #bd93f9 !important;
  --pill-color-remove-hover: #ffb86c !important;
  --pre-code: #44475a !important;
  --prompt-background: #282a36 !important;
  --raised-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent)) !important;
  --ribbon-background: #44475a !important;
  --ribbon-background-collapsed: #282a36 !important;
  --search-clear-button-color: #f8f8f2 !important;
  --search-icon-color: #f8f8f2 !important;
  --search-result-background: #282a36 !important;
  --secondary: #ffb86c !important;
  --setting-group-heading-color: #f8f8f2 !important;
  --setting-items-background: #44475a !important;
  --setting-items-border-color: #f8f8f2 !important;
  --slider-track-background: #f8f8f2 !important;
  --status-bar-background: #44475a !important;
  --status-bar-border-color: #f8f8f2 !important;
  --status-bar-text-color: #f8f8f2 !important;
  --suggestion-background: #282a36 !important;
  --tab-background-active: #282a36 !important;
  --tab-container-background: #44475a !important;
  --tab-outline-color: #f8f8f2 !important;
  --tab-switcher-background: #44475a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #44475a, transparent) !important;
  --tab-text-color: #bd93f9 !important;
  --tab-text-color-active: #f8f8f2 !important;
  --tab-text-color-focused: #f8f8f2 !important;
  --tab-text-color-focused-active: #f8f8f2 !important;
  --tab-text-color-focused-active-current: #f8f8f2 !important;
  --tab-text-color-focused-highlighted: #ffb86c !important;
  --table-add-button-border-color: #f8f8f2 !important;
  --table-border-color: #f8f8f2 !important;
  --table-drag-handle-background-active: #ffb86c !important;
  --table-drag-handle-color: #bd93f9 !important;
  --table-drag-handle-color-active: #bd93f9 !important;
  --table-header-border-color: #f8f8f2 !important;
  --table-header-color: #f8f8f2 !important;
  --table-selection-border-color: #ffb86c !important;
  --tag-color: #ffb86c !important;
  --tag-color-hover: #ffb86c !important;
  --tertiary: #8be9fd !important;
  --text-accent: #ffb86c !important;
  --text-accent-hover: #8be9fd !important;
  --text-error: #ff79c6 !important;
  --text-error-hover: #ff79c6 !important;
  --text-faint: #bd93f9 !important;
  --text-highlight-bg: #ff5555 !important;
  --text-muted: #f8f8f2 !important;
  --text-normal: #f8f8f2 !important;
  --text-on-accent: #bd93f9 !important;
  --text-selection: #6272a4 !important;
  --text-title-h1: #ff79c6 !important;
  --text-title-h2: #bd93f9 !important;
  --text-title-h3: #ff5555 !important;
  --text-title-h4: #ffb86c !important;
  --text-title-h5: #50fa7b !important;
  --text-title-h6: #8be9fd !important;
  --textHighlight: #ff5555 !important;
  --titlebar-background: #44475a !important;
  --titlebar-background-focused: #282a36 !important;
  --titlebar-border-color: #f8f8f2 !important;
  --titlebar-text-color: #f8f8f2 !important;
  --titlebar-text-color-focused: #f8f8f2 !important;
  --vault-profile-color: #f8f8f2 !important;
  --vault-profile-color-hover: #f8f8f2 !important;
  --vim-cursor: #ff5555 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(68, 71, 90);
  color: rgb(248, 248, 242);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

html body .bases-table thead th {
  background-color: rgb(68, 71, 90);
  border-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-weight: 800;
}

html body .canvas-node {
  border-color: rgb(248, 248, 242);
}

html body .canvas-node-content {
  color: rgb(248, 248, 242);
}

html body .canvas-node-file {
  color: rgb(248, 248, 242);
}

html body .canvas-node-group {
  border-color: rgb(248, 248, 242);
}

html body .canvas-sidebar {
  background-color: rgb(68, 71, 90);
  border-color: rgb(248, 248, 242);
}

html body .note-properties {
  border-color: rgb(248, 248, 242);
}

html body .note-properties-key {
  color: rgb(248, 248, 242);
}

html body .note-properties-row {
  border-color: rgb(248, 248, 242);
}

html body .note-properties-tags {
  border-radius: 33.25px;
  color: rgb(255, 184, 108);
}

html body .note-properties-value {
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(68, 71, 90);
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(68, 71, 90);
  border-left-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body div#quartz-root {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(80, 250, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(80, 250, 123) none 0px;
  text-decoration-color: rgb(80, 250, 123);
}

html body .page article p > em, html em {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .page article p > i, html i {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .page article p > strong, html strong {
  color: rgb(80, 250, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(80, 250, 123) none 0px;
  text-decoration-color: rgb(80, 250, 123);
}

html body .text-highlight {
  background-color: rgb(255, 85, 85);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body del {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body h1.article-title {
  color: rgb(248, 248, 242);
  font-size: 20px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(189, 147, 249);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 184, 108);
  border-color: rgb(255, 184, 108);
}

html body p {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 184, 108);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 184, 108);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body a.internal.broken {
  color: rgb(255, 184, 108);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}`,
    lists: `html body dd {
  color: rgb(248, 248, 242);
}

html body dl {
  margin-bottom: 19px;
  margin-top: 19px;
}

html body dt {
  color: rgb(248, 248, 242);
}

html body ol > li {
  color: rgb(248, 248, 242);
}

html body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ul > li {
  color: rgb(248, 248, 242);
}

html body ul.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(189, 147, 249);
}

html body blockquote {
  background-color: rgb(68, 71, 90);
  font-family: Avenir, "Avenir Next", sans-serif;
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body table {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  width: 195.062px;
}

html body td {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body th {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-weight: 800;
}

html body thead {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html body tr {
  border-bottom-color: rgb(248, 248, 242);
}`,
    code: `html body code {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(189, 147, 249);
  border-left-color: rgb(189, 147, 249);
  border-right-color: rgb(189, 147, 249);
  border-top-color: rgb(189, 147, 249);
  color: rgb(189, 147, 249);
  font-family: monaco;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(189, 147, 249);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body figcaption {
  color: rgb(248, 248, 242);
  font-size: 19px;
}

html body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  margin-bottom: 19px;
  margin-top: 19px;
}

html body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(255, 184, 108);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  margin-right: 0px;
  width: 16.6562px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(40, 42, 54);
}

html body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(68, 71, 90);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 33.25px;
  border-bottom-right-radius: 33.25px;
  border-top-left-radius: 33.25px;
  border-top-right-radius: 33.25px;
}

html body a.internal.tag-link::before {
  color: rgb(255, 184, 108);
}

html body h1 {
  color: rgb(255, 121, 198);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h2 {
  color: rgb(189, 147, 249);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h3 {
  color: rgb(255, 85, 85);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h4 {
  color: rgb(255, 184, 108);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h5 {
  color: rgb(80, 250, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h6 {
  color: rgb(139, 233, 253);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body hr {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-track {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(248, 248, 242);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    footer: `html body footer {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  border-top-width: 0px;
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body footer ul li a {
  color: rgb(248, 248, 242);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body li.section-li > .section .meta {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(248, 248, 242);
}

html body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .darkmode svg {
  color: rgb(248, 248, 242);
  stroke: rgb(248, 248, 242);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .breadcrumb-element p {
  color: rgb(189, 147, 249);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .metadata {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(40, 42, 54);
}

html body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

html body abbr {
  color: rgb(248, 248, 242);
}

html body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body input[type=text] {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body kbd {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-size: 16.625px;
  padding-bottom: 1.6625px;
  padding-left: 4.15625px;
  padding-right: 4.15625px;
  padding-top: 1.6625px;
}

html body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body sub {
  color: rgb(248, 248, 242);
  font-size: 15.8333px;
}

html body summary {
  color: rgb(248, 248, 242);
}

html body sup {
  color: rgb(248, 248, 242);
  font-size: 15.8333px;
}

html body ul.tags > li {
  border-bottom-left-radius: 29.0938px;
  border-bottom-right-radius: 29.0938px;
  border-top-left-radius: 29.0938px;
  border-top-right-radius: 29.0938px;
  color: rgb(139, 233, 253);
}`,
  },
  light: {},
};
