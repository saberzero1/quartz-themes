import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "charcoal",
    modes: ["dark"],
    variations: [],
    fonts: ["ia-writer-quattro-s", "monaco", "source-sans-pro"],
  },
  dark: {
    base: `:root:root {
  --active-title-border: rgba(0, 0, 0, 0.1) !important;
  --background-accent: rgba(0, 0, 0, 0.08) !important;
  --background-modifier-border: rgb(109, 109, 109) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: #222527 !important;
  --background-modifier-form-field-highlighted: #222527 !important;
  --background-modifier-form-field-hover: #222527 !important;
  --background-modifier-success: rgba(160, 232, 92, 0.08) !important;
  --background-primary: #222527 !important;
  --background-primary-alt: rgba(0, 0, 0, 0.08) !important;
  --background-secondary: #1c1e21 !important;
  --background-secondary-alt: #1c1e21 !important;
  --bases-cards-background: #222527 !important;
  --bases-cards-cover-background: rgba(0, 0, 0, 0.08) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(109, 109, 109) !important;
  --bases-embed-border-color: rgb(109, 109, 109) !important;
  --bases-group-heading-property-color: rgb(109, 109, 109) !important;
  --bases-table-border-color: rgb(109, 109, 109) !important;
  --bases-table-cell-background-active: #222527 !important;
  --bases-table-cell-background-disabled: rgba(0, 0, 0, 0.08) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(0, 0, 0, 0.1) !important;
  --bases-table-group-background: rgba(0, 0, 0, 0.08) !important;
  --bases-table-header-background: #222527 !important;
  --bases-table-header-color: rgb(109, 109, 109) !important;
  --bases-table-summary-background: #222527 !important;
  --blockquote-bg: #222527 !important;
  --blockquote-border: #9bb7c5 !important;
  --blockquote-border-color: rgba(0, 0, 0, 0.1) !important;
  --blur-background: color-mix(in srgb, #222527 65%, transparent) linear-gradient(#222527, color-mix(in srgb, #222527 65%, transparent)) !important;
  --border-color: #1f1f20 !important;
  --canvas-background: #222527 !important;
  --canvas-card-label-color: rgb(109, 109, 109) !important;
  --caret-color: #959595 !important;
  --checkbox-border-color: rgb(109, 109, 109) !important;
  --checkbox-border-color-hover: rgb(109, 109, 109) !important;
  --checkbox-color: #2f3337 !important;
  --checkbox-color-hover: rgba(60, 68, 76, 0.5) !important;
  --checkbox-enabled: #9bb7c5 !important;
  --checkbox-marker-color: #222527 !important;
  --checklist-done-color: rgb(109, 109, 109) !important;
  --code-background: rgba(0, 0, 0, 0.08) !important;
  --code-block: #868787 !important;
  --code-border-color: rgb(109, 109, 109) !important;
  --code-comment: rgb(109, 109, 109) !important;
  --code-normal: #959595 !important;
  --code-punctuation: rgb(109, 109, 109) !important;
  --collapse-icon-color: rgb(109, 109, 109) !important;
  --collapse-icon-color-collapsed: #9bb7c5 !important;
  --dark: #959595 !important;
  --darkgray: #959595 !important;
  --divider-color: rgb(109, 109, 109) !important;
  --divider-color-hover: rgba(0, 0, 0, 0.1) !important;
  --dropdown-background: #222527 !important;
  --dropdown-background-hover: rgba(0, 0, 0, 0.05) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(109, 109, 109), inset 0 0 0 1px rgb(109, 109, 109) !important;
  --embed-border-start: 2px solid rgba(0, 0, 0, 0.1) !important;
  --file-header-background: #222527 !important;
  --file-header-background-focused: #222527 !important;
  --file-name-color: #9bb7c5 !important;
  --flair-background: #222527 !important;
  --flair-color: #959595 !important;
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
  --footnote-divider-color: rgb(109, 109, 109) !important;
  --footnote-id-color: rgb(109, 109, 109) !important;
  --footnote-id-color-no-occurrences: rgb(109, 109, 109) !important;
  --graph-line-color: rgb(48, 47, 48) !important;
  --graph-line-on-hover: #4F565E !important;
  --graph-node: rgb(109, 109, 109) !important;
  --graph-node-color: rgb(109, 109, 109) !important;
  --graph-node-focused: #9bb7c5 !important;
  --graph-node-unresolved: rgb(109, 109, 109) !important;
  --graph-note-name: #959595 !important;
  --graph-text: #959595 !important;
  --gray: rgb(109, 109, 109) !important;
  --hashtag-color: #4c535a !important;
  --header-before-color: #575757 !important;
  --header-before-size-h1: 0.5em !important;
  --header-before-size-h2: 0.5em !important;
  --header-before-size-h3: 0.5em !important;
  --header-before-size-h4: 0.5em !important;
  --header-before-size-h5: 0.5em !important;
  --header-before-size-h6: 0.5em !important;
  --heading-formatting: rgb(109, 109, 109) !important;
  --highlight: rgba(60, 68, 76, 0.5) !important;
  --hr-color: rgb(99, 99, 99) !important;
  --icon-color: rgb(109, 109, 109) !important;
  --icon-color-active: #9bb7c5 !important;
  --icon-color-focused: #959595 !important;
  --icon-color-hover: rgb(109, 109, 109) !important;
  --inline-code: rgb(109, 109, 109) !important;
  --input-date-separator: rgb(109, 109, 109) !important;
  --input-placeholder-color: rgb(109, 109, 109) !important;
  --interactive-accent: rgba(0, 0, 0, 0.1) !important;
  --interactive-accent-hover: rgba(60, 68, 76, 0.5) !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: rgba(0, 0, 0, 0.05) !important;
  --interactive-normal: #222527 !important;
  --interfa-color-icon: rgba(250, 250, 250, 0.045) !important;
  --interface-color-action: #959595 !important;
  --interface-color-background: #415358 !important;
  --interface-color-background-alt: #222527 !important;
  --interface-color-border: rgba(250, 250, 250, 0.045) !important;
  --interface-color-cross: #fc3b44 !important;
  --interface-color-foreground: #3e3e3e !important;
  --interface-color-foreground-alt: #9bb7c5 !important;
  --interface-color-pencil: #fec03e !important;
  --interface-color-pin: #959595 !important;
  --interface-color-three-dots: #a0e85b !important;
  --light: #222527 !important;
  --lightgray: #1c1e21 !important;
  --line-height-footnote: 1.2em !important;
  --line-height-header-preview: 1em !important;
  --line-height-preview: 1.7em !important;
  --link-color: #9bb7c5 !important;
  --link-color-hover: rgb(109, 109, 109) !important;
  --link-external-color: #9bb7c5 !important;
  --link-external-color-hover: rgb(109, 109, 109) !important;
  --link-text: #9bb7c5 !important;
  --link-text-hover: #9bb7c5 !important;
  --link-unresolved-color: #9bb7c5 !important;
  --list-marker-color: rgb(109, 109, 109) !important;
  --list-marker-color-collapsed: #9bb7c5 !important;
  --list-marker-color-hover: rgb(109, 109, 109) !important;
  --menu-background: #1c1e21 !important;
  --metadata-border-color: rgb(109, 109, 109) !important;
  --metadata-divider-color: rgb(109, 109, 109) !important;
  --metadata-input-text-color: #959595 !important;
  --metadata-label-text-color: rgb(109, 109, 109) !important;
  --metadata-label-text-color-hover: rgb(109, 109, 109) !important;
  --modal-background: #222527 !important;
  --nav-collapse-icon-color: rgb(109, 109, 109) !important;
  --nav-collapse-icon-color-collapsed: rgb(109, 109, 109) !important;
  --nav-heading-color: #959595 !important;
  --nav-heading-color-collapsed: rgb(109, 109, 109) !important;
  --nav-heading-color-collapsed-hover: rgb(109, 109, 109) !important;
  --nav-heading-color-hover: #959595 !important;
  --nav-item-color: rgb(109, 109, 109) !important;
  --nav-item-color-active: #959595 !important;
  --nav-item-color-highlighted: #9bb7c5 !important;
  --nav-item-color-hover: #959595 !important;
  --nav-item-color-selected: #959595 !important;
  --nav-tag-color: rgb(109, 109, 109) !important;
  --nav-tag-color-active: rgb(109, 109, 109) !important;
  --nav-tag-color-hover: rgb(109, 109, 109) !important;
  --pdf-background: #222527 !important;
  --pdf-page-background: #222527 !important;
  --pdf-shadow: 0 0 0 1px rgb(109, 109, 109) !important;
  --pdf-sidebar-background: #222527 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(109, 109, 109) !important;
  --pill-border-color: rgb(109, 109, 109) !important;
  --pill-color: rgb(109, 109, 109) !important;
  --pill-color-hover: #959595 !important;
  --pill-color-remove: rgb(109, 109, 109) !important;
  --pill-color-remove-hover: #9bb7c5 !important;
  --pre-code-bg: #22262a !important;
  --prompt-background: #222527 !important;
  --quick-switcher: rgba(60, 68, 76, 0.5) !important;
  --raised-background: color-mix(in srgb, #222527 65%, transparent) linear-gradient(#222527, color-mix(in srgb, #222527 65%, transparent)) !important;
  --ribbon-background: #1c1e21 !important;
  --ribbon-background-collapsed: #222527 !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08) !important;
  --search-clear-button-color: rgb(109, 109, 109) !important;
  --search-icon-color: rgb(109, 109, 109) !important;
  --search-result-background: #222527 !important;
  --secondary: #9bb7c5 !important;
  --setting-group-heading-color: #959595 !important;
  --setting-items-background: rgba(0, 0, 0, 0.08) !important;
  --setting-items-border-color: rgb(109, 109, 109) !important;
  --slider-track-background: rgb(109, 109, 109) !important;
  --status-bar-background: #1c1e21 !important;
  --status-bar-border-color: rgb(109, 109, 109) !important;
  --status-bar-text-color: rgb(109, 109, 109) !important;
  --suggestion-background: #222527 !important;
  --tab-background-active: #222527 !important;
  --tab-container-background: #1c1e21 !important;
  --tab-outline-color: rgb(109, 109, 109) !important;
  --tab-switcher-background: #1c1e21 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1c1e21, transparent) !important;
  --tab-text-color: rgb(109, 109, 109) !important;
  --tab-text-color-active: rgb(109, 109, 109) !important;
  --tab-text-color-focused: rgb(109, 109, 109) !important;
  --tab-text-color-focused-active: rgb(109, 109, 109) !important;
  --tab-text-color-focused-active-current: #959595 !important;
  --tab-text-color-focused-highlighted: #9bb7c5 !important;
  --table-add-button-border-color: rgb(109, 109, 109) !important;
  --table-border-color: rgb(109, 109, 109) !important;
  --table-drag-handle-background-active: rgba(0, 0, 0, 0.1) !important;
  --table-drag-handle-color: rgb(109, 109, 109) !important;
  --table-drag-handle-color-active: #959595 !important;
  --table-header-border-color: rgb(109, 109, 109) !important;
  --table-header-color: #959595 !important;
  --table-selection-border-color: rgba(0, 0, 0, 0.1) !important;
  --tag-bg: #2f3337 !important;
  --tag-bg-hover: #2f3337 !important;
  --tag-color: #9bb7c5 !important;
  --tag-color-hover: #9bb7c5 !important;
  --tag-text-color: #959595 !important;
  --tag-text-hover: #959595 !important;
  --tertiary: rgb(109, 109, 109) !important;
  --text-accent: #9bb7c5 !important;
  --text-accent-hover: rgb(109, 109, 109) !important;
  --text-error: #800000 !important;
  --text-error-hover: #990000 !important;
  --text-faint: rgb(109, 109, 109) !important;
  --text-highlight-bg: rgba(60, 68, 76, 0.5) !important;
  --text-muted: rgb(109, 109, 109) !important;
  --text-normal: #959595 !important;
  --text-on-accent: #959595 !important;
  --text-selection: rgba(60, 68, 76, 0.5) !important;
  --text-title-font-weight: 600 !important;
  --text-title-h1: #9c9c9d !important;
  --text-title-h2: #9c9c9d !important;
  --text-title-h3: #9c9c9d !important;
  --text-title-h4: #9c9c9d !important;
  --text-title-h5: #9c9c9d !important;
  --text-title-h6: #9c9c9d !important;
  --textHighlight: rgba(60, 68, 76, 0.5) !important;
  --titlebar-background: #1c1e21 !important;
  --titlebar-background-focused: #1c1e21 !important;
  --titlebar-border-color: rgb(109, 109, 109) !important;
  --titlebar-text-color: rgb(109, 109, 109) !important;
  --titlebar-text-color-focused: #959595 !important;
  --ul-line-color: #777 !important;
  --ul-line-specs: 0.9px solid !important;
  --vault-profile-color: #959595 !important;
  --vault-profile-color-hover: #959595 !important;
  --vim-cursor: #474949 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 30, 33);
  color: rgb(149, 149, 149);
}

html body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(34, 37, 39);
  color: rgb(149, 149, 149);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 30, 33);
  color: rgb(149, 149, 149);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(109, 109, 109);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 30, 33);
  border-left-color: rgb(109, 109, 109);
  color: rgb(149, 149, 149);
}

html body div#quartz-root {
  background-color: rgb(34, 37, 39);
  color: rgb(149, 149, 149);
}`,
    typography: `html body .page article p > b, b {
  color: rgb(149, 149, 149);
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body .page article p > em, em {
  color: rgb(149, 149, 149);
  font-weight: 500;
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body .page article p > i, i {
  color: rgb(149, 149, 149);
  font-weight: 500;
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body .page article p > strong, strong {
  color: rgb(149, 149, 149);
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body .text-highlight {
  background-color: rgba(60, 68, 76, 0.5);
  color: rgb(149, 149, 149);
  font-weight: 500;
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body del {
  color: rgb(149, 149, 149);
  font-weight: 500;
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: line-through rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body p {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  outline: rgb(109, 109, 109) none 0px;
  text-decoration: rgb(109, 109, 109);
  text-decoration-color: rgb(109, 109, 109);
}`,
    links: `html body a.external, footer a {
  color: rgb(155, 183, 197);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(155, 183, 197) none 0px;
  text-decoration: rgb(155, 183, 197);
  text-decoration-color: rgb(155, 183, 197);
}

html body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(155, 183, 197);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(155, 183, 197) none 0px;
  text-decoration: rgb(155, 183, 197);
  text-decoration-color: rgb(155, 183, 197);
}

html body a.internal.broken {
  color: rgb(155, 183, 197);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(155, 183, 197) none 0px;
  text-decoration: rgb(155, 183, 197);
  text-decoration-color: rgb(155, 183, 197);
}`,
    lists: `html body dd {
  color: rgb(149, 149, 149);
}

html body dl {
  margin-bottom: 24px;
  margin-top: 24px;
}

html body dt {
  color: rgb(149, 149, 149);
}

html body ol > li {
  color: rgb(149, 149, 149);
}

html body ol.overflow {
  background-color: rgb(34, 37, 39);
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

html body ul > li {
  color: rgb(149, 149, 149);
}

html body ul.overflow {
  background-color: rgb(34, 37, 39);
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(155, 183, 197);
  text-decoration: rgb(155, 183, 197);
}

html body blockquote {
  background-color: rgb(28, 30, 33);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

html body table {
  color: rgb(149, 149, 149);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  width: 180.766px;
}

html body td {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(149, 149, 149);
}

html body th {
  background-color: rgb(28, 30, 33);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(149, 149, 149);
  font-weight: 800;
}

html body thead {
  border-bottom-color: rgb(109, 109, 109);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html body tr {
  border-bottom-color: rgb(109, 109, 109);
}`,
    code: `html body code {
  background-color: rgb(34, 38, 42);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
  font-family: "Ubuntu Mono derivative Powerline", Menlo, Monaco;
  padding-bottom: 22px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
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

html body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

html body figcaption {
  color: rgb(149, 149, 149);
  font-size: 24px;
}

html body figure {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  margin-bottom: 24px;
  margin-top: 24px;
}

html body img {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

html body video {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}`,
    embeds: `html body .file-embed {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
}

html body .footnotes {
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
}

html body .transclude {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

html body .transclude-inner {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(109, 109, 109);
  text-decoration: line-through rgb(109, 109, 109);
  text-decoration-color: rgb(109, 109, 109);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(109, 109, 109);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}`,
    search: `html body .search > .search-button {
  background-color: rgb(34, 37, 39);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(149, 149, 149);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body .search > .search-container > .search-space {
  background-color: rgb(34, 37, 39);
}

html body .search > .search-container > .search-space > * {
  color: rgb(149, 149, 149);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(149, 149, 149);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(149, 149, 149);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(60, 68, 76, 0.5);
  color: rgb(149, 149, 149);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 30, 33);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(60, 68, 76, 0.5);
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(60, 68, 76, 0.5);
  color: rgb(149, 149, 149);
}

html body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}

html body a.internal.tag-link::before {
  color: rgb(155, 183, 197);
}

html body h1 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h2 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h2.page-title, h2.page-title a {
  color: rgb(149, 149, 149);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h3 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h4 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h5 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h6 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body hr {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
}

html body ::-webkit-scrollbar-track {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(109, 109, 109);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(109, 109, 109);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(109, 109, 109);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(149, 149, 149);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(149, 149, 149);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
}`,
    footer: `html body footer {
  background-color: rgb(28, 30, 33);
  border-bottom-color: rgb(28, 30, 33);
  border-left-color: rgb(28, 30, 33);
  border-right-color: rgb(28, 30, 33);
  border-top-color: rgb(28, 30, 33);
  border-top-width: 0px;
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body footer ul li a {
  color: rgb(109, 109, 109);
  text-decoration: rgb(109, 109, 109);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(149, 149, 149);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(109, 109, 109);
  text-decoration: rgb(109, 109, 109);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

html body li.section-li > .section .meta {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(109, 109, 109);
  text-decoration: rgb(109, 109, 109);
}

html body ul.section-ul {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
}

html body .darkmode svg {
  color: rgb(109, 109, 109);
  stroke: rgb(109, 109, 109);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
}

html body .breadcrumb-element p {
  color: rgb(109, 109, 109);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
}

html body .metadata {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body .metadata-properties {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body .navigation-progress {
  background-color: rgb(28, 30, 33);
}

html body .page-header h2.page-title {
  color: rgb(155, 183, 197);
}

html body abbr {
  color: rgb(149, 149, 149);
  text-decoration: underline dotted rgb(149, 149, 149);
}

html body details {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

html body input[type=text] {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
}

html body kbd {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
  font-size: 21px;
  padding-bottom: 2.1px;
  padding-left: 5.25px;
  padding-right: 5.25px;
  padding-top: 2.1px;
}

html body progress {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

html body sub {
  color: rgb(149, 149, 149);
  font-size: 16.8px;
  vertical-align: super;
}

html body summary {
  color: rgb(149, 149, 149);
}

html body sup {
  color: rgb(149, 149, 149);
  font-size: 16.8px;
}`,
  },
  light: {},
};
