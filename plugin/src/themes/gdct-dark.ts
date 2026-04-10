import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "gdct-dark",
    modes: ["dark"],
    variations: [],
    fonts: ["ia-writer-quattro-s", "monaco"],
  },
  dark: {
    base: `:root:root {
  --active-title-border: rgba(0, 0, 0, 0.1) !important;
  --background-accent: rgba(0, 0, 0, 0.08) !important;
  --background-modifier-border: #6f6f6f !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: #313030 !important;
  --background-modifier-form-field-highlighted: #313030 !important;
  --background-modifier-form-field-hover: #313030 !important;
  --background-modifier-success: rgba(160, 232, 92, 0.08) !important;
  --background-primary: #313030 !important;
  --background-primary-alt: rgba(0, 0, 0, 0.08) !important;
  --background-secondary: #313030 !important;
  --background-secondary-alt: #313030 !important;
  --bases-cards-background: #313030 !important;
  --bases-cards-cover-background: rgba(0, 0, 0, 0.08) !important;
  --bases-cards-shadow: 0 0 0 1px #6f6f6f !important;
  --bases-embed-border-color: #6f6f6f !important;
  --bases-group-heading-property-color: #6f6f6f !important;
  --bases-table-border-color: #6f6f6f !important;
  --bases-table-cell-background-active: #313030 !important;
  --bases-table-cell-background-disabled: rgba(0, 0, 0, 0.08) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(0, 0, 0, 0.1) !important;
  --bases-table-group-background: rgba(0, 0, 0, 0.08) !important;
  --bases-table-header-background: #313030 !important;
  --bases-table-header-color: #6f6f6f !important;
  --bases-table-summary-background: #313030 !important;
  --blockquote-bg: #313030 !important;
  --blockquote-border: #3daddb !important;
  --blockquote-border-color: rgba(0, 0, 0, 0.1) !important;
  --blur-background: color-mix(in srgb, #313030 65%, transparent) linear-gradient(#313030, color-mix(in srgb, #313030 65%, transparent)) !important;
  --border-color: #6f6f6f !important;
  --bracket-color: #4c535a !important;
  --canvas-background: #313030 !important;
  --canvas-card-label-color: #6f6f6f !important;
  --caret-color: #fffdf9 !important;
  --checkbox-border-color: #6f6f6f !important;
  --checkbox-border-color-hover: #6f6f6f !important;
  --checkbox-color: rgba(250, 250, 250, 0.1) !important;
  --checkbox-color-hover: rgba(250, 250, 250, 0.1) !important;
  --checkbox-enabled: #6f6f6f !important;
  --checkbox-marker-color: #313030 !important;
  --checklist-done-color: #6f6f6f !important;
  --code-background: rgba(0, 0, 0, 0.08) !important;
  --code-block: #6f6f6f !important;
  --code-border-color: #6f6f6f !important;
  --code-comment: #6f6f6f !important;
  --code-normal: #fffdf9 !important;
  --code-punctuation: #6f6f6f !important;
  --collapse-icon-color: #6f6f6f !important;
  --collapse-icon-color-collapsed: #3daddb !important;
  --dark: #fffdf9 !important;
  --darkgray: #fffdf9 !important;
  --divider-color: #6f6f6f !important;
  --divider-color-hover: rgba(0, 0, 0, 0.1) !important;
  --dropdown-background: #313030 !important;
  --dropdown-background-hover: rgba(0, 0, 0, 0.05) !important;
  --embed-block-shadow-hover: 0 0 0 1px #6f6f6f, inset 0 0 0 1px #6f6f6f !important;
  --embed-border-start: 2px solid rgba(0, 0, 0, 0.1) !important;
  --file-header-background: #313030 !important;
  --file-header-background-focused: #313030 !important;
  --file-name-color: #3daddb !important;
  --flair-background: #313030 !important;
  --flair-color: #fffdf9 !important;
  --font-family-code: Ubuntu Mono derivative Powerline, Menlo, Monaco !important;
  --font-family-editor: Skolar PE, iA Writer Quattro S, Menlo, Avenir Next, Times New Roman !important;
  --font-family-mdpreview: Skolar PE, Gentium Plus, Alegreya, Source Sans Pro, Avenir Next, Times New Roman !important;
  --font-family-preview: Gentium Plus, Alegreya, Source Sans Pro, Palatino, Avenir Next, Times New Roman !important;
  --font-size-blockquote: 22px !important;
  --font-size-code: 22px !important;
  --font-size-footnote: 22px !important;
  --font-size-h1: 1.9em !important;
  --font-size-h2: 1.6em !important;
  --font-size-h3: 1.3em !important;
  --font-size-h4: 1.2em !important;
  --font-size-h5: 1.1em !important;
  --font-size-h6: 1em !important;
  --font-size-normal: 24px !important;
  --font-size-side-dock: 16px !important;
  --font-size-side-dock-title: 18px !important;
  --font-size-status-bar: 16px !important;
  --footnote-divider-color: #6f6f6f !important;
  --footnote-id-color: #6f6f6f !important;
  --footnote-id-color-no-occurrences: #6f6f6f !important;
  --graph-line-color: #4c535a !important;
  --graph-line-on-hover: #6f6f6f !important;
  --graph-node: #6f6f6f !important;
  --graph-node-color: #6f6f6f !important;
  --graph-node-focused: #3daddb !important;
  --graph-node-unresolved: #6f6f6f !important;
  --graph-note-name: #fffdf9 !important;
  --graph-text: #fffdf9 !important;
  --gray: #6f6f6f !important;
  --hashtag-color: #313030 !important;
  --header-before-color: #4c535a !important;
  --header-before-size-h1: 0.5em !important;
  --header-before-size-h2: 0.5em !important;
  --header-before-size-h3: 0.5em !important;
  --header-before-size-h4: 0.5em !important;
  --header-before-size-h5: 0.5em !important;
  --header-before-size-h6: 0.5em !important;
  --heading-formatting: #6f6f6f !important;
  --highlight: rgba(250, 250, 250, 0.1) !important;
  --hr-color: hsl(0, 0%, 39%) !important;
  --icon-color: #6f6f6f !important;
  --icon-color-active: #3daddb !important;
  --icon-color-focused: #fffdf9 !important;
  --icon-color-hover: #6f6f6f !important;
  --inline-code: #6f6f6f !important;
  --input-date-separator: #6f6f6f !important;
  --input-placeholder-color: #6f6f6f !important;
  --interactive-accent: rgba(0, 0, 0, 0.1) !important;
  --interactive-accent-hover: rgba(250, 250, 250, 0.1) !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: rgba(0, 0, 0, 0.05) !important;
  --interactive-normal: #313030 !important;
  --interfa-color-icon: rgba(250, 250, 250, 0.045) !important;
  --interface-color-action: #fffdf9 !important;
  --interface-color-background: #415358 !important;
  --interface-color-background-alt: #313030 !important;
  --interface-color-border: rgba(250, 250, 250, 0.045) !important;
  --interface-color-cross: #fc3b44 !important;
  --interface-color-foreground: #3e3e3e !important;
  --interface-color-foreground-alt: #3daddb !important;
  --interface-color-pencil: #fec03e !important;
  --interface-color-pin: #fffdf9 !important;
  --interface-color-three-dots: #a0e85b !important;
  --light: #313030 !important;
  --lightgray: #313030 !important;
  --line-height-footnote: 1.2em !important;
  --line-height-header-preview: 1em !important;
  --line-height-preview: 1.7em !important;
  --link-bg-hover: #3daddb !important;
  --link-color: #3daddb !important;
  --link-color-hover: #6f6f6f !important;
  --link-external-color: #3daddb !important;
  --link-external-color-hover: #6f6f6f !important;
  --link-text: #3daddb !important;
  --link-text-hover: #313030 !important;
  --link-unresolved-color: #3daddb !important;
  --list-marker-color: #6f6f6f !important;
  --list-marker-color-collapsed: #3daddb !important;
  --list-marker-color-hover: #6f6f6f !important;
  --menu-background: #313030 !important;
  --metadata-border-color: #6f6f6f !important;
  --metadata-divider-color: #6f6f6f !important;
  --metadata-input-text-color: #fffdf9 !important;
  --metadata-label-text-color: #6f6f6f !important;
  --metadata-label-text-color-hover: #6f6f6f !important;
  --modal-background: #313030 !important;
  --nav-collapse-icon-color: #6f6f6f !important;
  --nav-collapse-icon-color-collapsed: #6f6f6f !important;
  --nav-heading-color: #fffdf9 !important;
  --nav-heading-color-collapsed: #6f6f6f !important;
  --nav-heading-color-collapsed-hover: #6f6f6f !important;
  --nav-heading-color-hover: #fffdf9 !important;
  --nav-item-color: #6f6f6f !important;
  --nav-item-color-active: #fffdf9 !important;
  --nav-item-color-highlighted: #3daddb !important;
  --nav-item-color-hover: #fffdf9 !important;
  --nav-item-color-selected: #fffdf9 !important;
  --nav-tag-color: #6f6f6f !important;
  --nav-tag-color-active: #6f6f6f !important;
  --nav-tag-color-hover: #6f6f6f !important;
  --pdf-background: #313030 !important;
  --pdf-page-background: #313030 !important;
  --pdf-shadow: 0 0 0 1px #6f6f6f !important;
  --pdf-sidebar-background: #313030 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #6f6f6f !important;
  --pill-border-color: #6f6f6f !important;
  --pill-color: #6f6f6f !important;
  --pill-color-hover: #fffdf9 !important;
  --pill-color-remove: #6f6f6f !important;
  --pill-color-remove-hover: #3daddb !important;
  --pre-code-bg: rgba(0, 0, 0, 0.001) !important;
  --prompt-background: #313030 !important;
  --quick-switcher: rgba(250, 250, 250, 0.1) !important;
  --raised-background: color-mix(in srgb, #313030 65%, transparent) linear-gradient(#313030, color-mix(in srgb, #313030 65%, transparent)) !important;
  --ribbon-background: #313030 !important;
  --ribbon-background-collapsed: #313030 !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08) !important;
  --search-clear-button-color: #6f6f6f !important;
  --search-icon-color: #6f6f6f !important;
  --search-result-background: #313030 !important;
  --secondary: #3daddb !important;
  --setting-group-heading-color: #fffdf9 !important;
  --setting-items-background: rgba(0, 0, 0, 0.08) !important;
  --setting-items-border-color: #6f6f6f !important;
  --slider-track-background: #6f6f6f !important;
  --status-bar-background: #313030 !important;
  --status-bar-border-color: #6f6f6f !important;
  --status-bar-text-color: #6f6f6f !important;
  --suggestion-background: #313030 !important;
  --tab-background-active: #313030 !important;
  --tab-container-background: #313030 !important;
  --tab-outline-color: #6f6f6f !important;
  --tab-switcher-background: #313030 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #313030, transparent) !important;
  --tab-text-color: #6f6f6f !important;
  --tab-text-color-active: #6f6f6f !important;
  --tab-text-color-focused: #6f6f6f !important;
  --tab-text-color-focused-active: #6f6f6f !important;
  --tab-text-color-focused-active-current: #fffdf9 !important;
  --tab-text-color-focused-highlighted: #3daddb !important;
  --table-add-button-border-color: #6f6f6f !important;
  --table-border-color: #6f6f6f !important;
  --table-drag-handle-background-active: rgba(0, 0, 0, 0.1) !important;
  --table-drag-handle-color: #6f6f6f !important;
  --table-drag-handle-color-active: #fffdf9 !important;
  --table-header-border-color: #6f6f6f !important;
  --table-header-color: #fffdf9 !important;
  --table-selection-border-color: rgba(0, 0, 0, 0.1) !important;
  --tag-bg: #6f6f6f !important;
  --tag-bg-hover: #6f6f6f !important;
  --tag-color: #3daddb !important;
  --tag-color-hover: #3daddb !important;
  --tag-text-color: #313030 !important;
  --tag-text-hover: #313030 !important;
  --tertiary: #6f6f6f !important;
  --text-accent: #3daddb !important;
  --text-accent-hover: #6f6f6f !important;
  --text-error: #800000 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #6f6f6f !important;
  --text-highlight-bg: rgba(250, 250, 250, 0.1) !important;
  --text-muted: #6f6f6f !important;
  --text-normal: #fffdf9 !important;
  --text-on-accent: #fffdf9 !important;
  --text-search-highlight-bg: rgba(262, 127, 125, 0.9) !important;
  --text-selection: rgba(250, 250, 250, 0.1) !important;
  --text-title-font-weight: 600 !important;
  --text-title-h1: #fffdf9 !important;
  --text-title-h2: #fffdf9 !important;
  --text-title-h3: #fffdf9 !important;
  --text-title-h4: #fffdf9 !important;
  --text-title-h5: #fffdf9 !important;
  --text-title-h6: #fffdf9 !important;
  --textHighlight: rgba(250, 250, 250, 0.1) !important;
  --titlebar-background: #313030 !important;
  --titlebar-background-focused: #313030 !important;
  --titlebar-border-color: #6f6f6f !important;
  --titlebar-text-color: #6f6f6f !important;
  --titlebar-text-color-focused: #fffdf9 !important;
  --ul-line-color: #777 !important;
  --ul-line-specs: 0.9px solid !important;
  --vault-profile-color: #fffdf9 !important;
  --vault-profile-color-hover: #fffdf9 !important;
  --vim-cursor: #474949 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 48, 48);
  color: rgb(255, 253, 249);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(49, 48, 48);
  color: rgb(255, 253, 249);
}

html body .bases-table thead th {
  background-color: rgb(49, 48, 48);
  border-color: rgb(111, 111, 111);
  color: rgb(255, 253, 249);
  font-weight: 800;
}

html body .canvas-node {
  border-color: rgb(255, 253, 249);
}

html body .canvas-node-content {
  color: rgb(255, 253, 249);
}

html body .canvas-node-file {
  background-color: rgb(49, 48, 48);
  color: rgb(255, 253, 249);
}

html body .canvas-node-group {
  border-color: rgb(255, 253, 249);
}

html body .canvas-sidebar {
  background-color: rgb(49, 48, 48);
  border-color: rgb(255, 253, 249);
}

html body .note-properties {
  border-color: rgb(111, 111, 111);
}

html body .note-properties-key {
  color: rgb(111, 111, 111);
}

html body .note-properties-row {
  border-color: rgb(111, 111, 111);
}

html body .note-properties-tags {
  border-radius: 42px;
  color: rgb(61, 173, 219);
}

html body .note-properties-value {
  color: rgb(111, 111, 111);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(49, 48, 48);
  color: rgb(255, 253, 249);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(111, 111, 111);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 48, 48);
  border-left-color: rgb(111, 111, 111);
  color: rgb(255, 253, 249);
}

html body div#quartz-root {
  background-color: rgb(49, 48, 48);
  color: rgb(255, 253, 249);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body .page article p > em, html em {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body .page article p > i, html i {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body .page article p > strong, html strong {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body .text-highlight {
  background-color: rgba(250, 250, 250, 0.1);
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body del {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body h1.article-title {
  color: rgb(61, 173, 219);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(111, 111, 111);
  border-radius: 50%;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(111, 111, 111);
  border-color: rgb(111, 111, 111);
}

html body p {
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  outline: rgb(111, 111, 111) none 0px;
  text-decoration-color: rgb(111, 111, 111);
}`,
    links: `html body a.external, html footer a {
  color: rgb(61, 173, 219);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(61, 173, 219) none 0px;
  text-decoration-color: rgb(61, 173, 219);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(61, 173, 219);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(61, 173, 219) none 0px;
  text-decoration-color: rgb(61, 173, 219);
}

html body a.internal.broken {
  color: rgb(61, 173, 219);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(61, 173, 219) none 0px;
  text-decoration-color: rgb(61, 173, 219);
}`,
    lists: `html body dd {
  color: rgb(255, 253, 249);
}

html body dl {
  margin-bottom: 24px;
  margin-top: 24px;
}

html body dt {
  color: rgb(255, 253, 249);
}

html body ol > li {
  color: rgb(255, 253, 249);
}

html body ol.overflow {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

html body ul > li {
  color: rgb(255, 253, 249);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(61, 173, 219);
}

html body blockquote {
  background-color: rgb(49, 48, 48);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

html body table {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  width: 180.766px;
}

html body td {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(255, 253, 249);
}

html body th {
  background-color: rgb(49, 48, 48);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(255, 253, 249);
  font-weight: 800;
}

html body thead {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html body tr {
  border-bottom-color: rgb(111, 111, 111);
}`,
    code: `html body code {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
  font-family: "Ubuntu Mono derivative Powerline", Menlo, Monaco;
  padding-bottom: 22px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

html body pre > code > [data-line] {
  border-left-color: rgb(221, 74, 104);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(221, 74, 104);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(221, 74, 104);
  border-left-color: rgb(221, 74, 104);
  border-right-color: rgb(221, 74, 104);
  border-top-color: rgb(221, 74, 104);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

html body figcaption {
  color: rgb(255, 253, 249);
  font-size: 24px;
}

html body figure {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
  margin-bottom: 24px;
  margin-top: 24px;
}

html body img {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

html body video {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}`,
    embeds: `html body .file-embed {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
}

html body .footnotes {
  border-top-color: rgb(255, 253, 249);
  color: rgb(255, 253, 249);
}

html body .transclude {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
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
  background-color: rgb(49, 48, 48);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(255, 253, 249);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body .search > .search-container > .search-space {
  background-color: rgb(49, 48, 48);
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 253, 249);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 253, 249);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(250, 250, 250, 0.1);
  color: rgb(255, 253, 249);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 48, 48);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(250, 250, 250, 0.1);
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
  color: rgb(255, 253, 249);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(250, 250, 250, 0.1);
  color: rgb(255, 253, 249);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}

html body a.internal.tag-link::before {
  color: rgb(61, 173, 219);
}

html body h1 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h2 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h3 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h4 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h5 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h6 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body hr {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
}

html body ::-webkit-scrollbar-track {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 253, 249);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}`,
    footer: `html body footer {
  background-color: rgb(49, 48, 48);
  border-bottom-color: rgb(49, 48, 48);
  border-left-color: rgb(49, 48, 48);
  border-right-color: rgb(49, 48, 48);
  border-top-color: rgb(49, 48, 48);
  border-top-width: 0px;
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body footer ul li a {
  color: rgb(111, 111, 111);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 253, 249);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
  color: rgb(255, 253, 249);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(111, 111, 111);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

html body li.section-li > .section .meta {
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(111, 111, 111);
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

html body .darkmode svg {
  color: rgb(111, 111, 111);
  stroke: rgb(111, 111, 111);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

html body .breadcrumb-element p {
  color: rgb(111, 111, 111);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
  color: rgb(255, 253, 249);
}

html body .metadata {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body .metadata-properties {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body .navigation-progress {
  background-color: rgb(49, 48, 48);
}

html body .page-header h2.page-title {
  color: rgb(61, 173, 219);
}

html body abbr {
  color: rgb(255, 253, 249);
}

html body details {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

html body input[type=text] {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

html body kbd {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
  color: rgb(255, 253, 249);
  font-size: 21px;
  padding-bottom: 2.1px;
  padding-left: 5.25px;
  padding-right: 5.25px;
  padding-top: 2.1px;
}

html body progress {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

html body sub {
  color: rgb(255, 253, 249);
  font-size: 16.8px;
  vertical-align: super;
}

html body summary {
  color: rgb(255, 253, 249);
}

html body sup {
  color: rgb(255, 253, 249);
  font-size: 16.8px;
}

html body ul.tags > li {
  background-color: rgb(111, 111, 111);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(49, 48, 48);
}`,
  },
  light: {},
};
