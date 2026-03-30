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
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body .page article p > em, html em {
  color: rgb(255, 253, 249);
  font-weight: 500;
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body .page article p > i, html i {
  color: rgb(255, 253, 249);
  font-weight: 500;
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body .page article p > strong, html strong {
  color: rgb(255, 253, 249);
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body .text-highlight {
  background-color: rgba(250, 250, 250, 0.1);
  color: rgb(255, 253, 249);
  font-weight: 500;
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
}

html body del {
  color: rgb(255, 253, 249);
  font-weight: 500;
  outline: rgb(255, 253, 249) none 0px;
  text-decoration-color: rgb(255, 253, 249);
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
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(111, 111, 111);
  text-decoration-color: rgb(111, 111, 111);
}

html body input[type=checkbox] {
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
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(49, 48, 48);
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
    scrollbars: `html body ::-webkit-scrollbar {
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
}`,
  },
  light: {},
};
