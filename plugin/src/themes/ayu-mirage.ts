import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ayu-mirage",
    modes: ["dark"],
    variations: [],
    fonts: ["ia-writer-quattro-s", "monaco", "source-sans-pro"],
  },
  dark: {
    base: `:root:root {
  --active-title-border: rgb(63, 69, 91) !important;
  --background-accent: rgba(0, 0, 0, 0.08) !important;
  --background-modifier-border: #686e80 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: #171a23 !important;
  --background-modifier-form-field-highlighted: #171a23 !important;
  --background-modifier-form-field-hover: #171a23 !important;
  --background-modifier-success: rgba(160, 232, 92, 0.08) !important;
  --background-primary: #171a23 !important;
  --background-primary-alt: rgba(0, 0, 0, 0.08) !important;
  --background-secondary: #13151e !important;
  --background-secondary-alt: #13151e !important;
  --bases-cards-background: #171a23 !important;
  --bases-cards-cover-background: rgba(0, 0, 0, 0.08) !important;
  --bases-cards-shadow: 0 0 0 1px #686e80 !important;
  --bases-embed-border-color: #686e80 !important;
  --bases-group-heading-property-color: #686e80 !important;
  --bases-table-border-color: #686e80 !important;
  --bases-table-cell-background-active: #171a23 !important;
  --bases-table-cell-background-disabled: rgba(0, 0, 0, 0.08) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(63, 69, 91) !important;
  --bases-table-group-background: rgba(0, 0, 0, 0.08) !important;
  --bases-table-header-background: #171a23 !important;
  --bases-table-header-color: #686e80 !important;
  --bases-table-summary-background: #171a23 !important;
  --blockquote-bg: #171a23 !important;
  --blockquote-border: #fec154 !important;
  --blockquote-border-color: rgb(63, 69, 91) !important;
  --blur-background: color-mix(in srgb, #171a23 65%, transparent) linear-gradient(#171a23, color-mix(in srgb, #171a23 65%, transparent)) !important;
  --border-color: #282c3c !important;
  --bracket-color: rgb(93, 99, 121) !important;
  --canvas-background: #171a23 !important;
  --canvas-card-label-color: #686e80 !important;
  --caret-color: #d1cec6 !important;
  --checkbox-border-color: #686e80 !important;
  --checkbox-border-color-hover: #686e80 !important;
  --checkbox-color: rgb(63, 69, 91) !important;
  --checkbox-color-hover: rgba(49, 54, 70, 0.5) !important;
  --checkbox-enabled: #fec154 !important;
  --checkbox-marker-color: #171a23 !important;
  --checklist-done-color: #686e80 !important;
  --code-background: rgba(0, 0, 0, 0.08) !important;
  --code-block: #686e80 !important;
  --code-border-color: #686e80 !important;
  --code-comment: #686e80 !important;
  --code-normal: #d1cec6 !important;
  --code-punctuation: #686e80 !important;
  --collapse-icon-color: #686e80 !important;
  --collapse-icon-color-collapsed: #fec154 !important;
  --dark: #d1cec6 !important;
  --darkgray: #d1cec6 !important;
  --divider-color: #686e80 !important;
  --divider-color-hover: rgb(63, 69, 91) !important;
  --dropdown-background: #171a23 !important;
  --dropdown-background-hover: rgba(0, 0, 0, 0.05) !important;
  --embed-block-shadow-hover: 0 0 0 1px #686e80, inset 0 0 0 1px #686e80 !important;
  --embed-border-start: 2px solid rgb(63, 69, 91) !important;
  --file-header-background: #171a23 !important;
  --file-header-background-focused: #171a23 !important;
  --file-name-color: #fec154 !important;
  --flair-background: #171a23 !important;
  --flair-color: #d1cec6 !important;
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
  --footnote-divider-color: #686e80 !important;
  --footnote-id-color: #686e80 !important;
  --footnote-id-color-no-occurrences: #686e80 !important;
  --graph-line-color: #282c3c !important;
  --graph-line-on-hover: rgb(63, 69, 91) !important;
  --graph-node: #686e80 !important;
  --graph-node-color: rgb(63, 69, 91) !important;
  --graph-node-focused: #fec154 !important;
  --graph-node-unresolved: #686e80 !important;
  --graph-note-name: #d1cec6 !important;
  --graph-text: #d1cec6 !important;
  --gray: #686e80 !important;
  --hashtag-color: #6875aa !important;
  --header-before-color: rgb(93, 99, 121) !important;
  --header-before-size-h1: 0.5em !important;
  --header-before-size-h2: 0.5em !important;
  --header-before-size-h3: 0.5em !important;
  --header-before-size-h4: 0.5em !important;
  --header-before-size-h5: 0.5em !important;
  --header-before-size-h6: 0.5em !important;
  --heading-formatting: #686e80 !important;
  --highlight: rgba(49, 54, 70, 0.5) !important;
  --hr-color: rgb(99, 99, 99) !important;
  --icon-color: #686e80 !important;
  --icon-color-active: #fec154 !important;
  --icon-color-focused: #d1cec6 !important;
  --icon-color-hover: #686e80 !important;
  --inline-code: #686e80 !important;
  --input-date-separator: #686e80 !important;
  --input-placeholder-color: #686e80 !important;
  --interactive-accent: rgb(63, 69, 91) !important;
  --interactive-accent-hover: rgba(49, 54, 70, 0.5) !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: rgba(0, 0, 0, 0.05) !important;
  --interactive-normal: #171a23 !important;
  --interfa-color-icon: rgba(250, 250, 250, 0.045) !important;
  --interface-color-action: #d1cec6 !important;
  --interface-color-background: #415358 !important;
  --interface-color-background-alt: #171a23 !important;
  --interface-color-border: rgba(250, 250, 250, 0.045) !important;
  --interface-color-cross: #fc3b44 !important;
  --interface-color-foreground: #3e3e3e !important;
  --interface-color-foreground-alt: #fec154 !important;
  --interface-color-pencil: #fec03e !important;
  --interface-color-pin: #d1cec6 !important;
  --interface-color-three-dots: #a0e85b !important;
  --light: #171a23 !important;
  --lightgray: #13151e !important;
  --line-height-footnote: 1.2em !important;
  --line-height-header-preview: 1em !important;
  --line-height-preview: 1.7em !important;
  --link-color: #fec154 !important;
  --link-color-hover: #686e80 !important;
  --link-external-color: #fec154 !important;
  --link-external-color-hover: #686e80 !important;
  --link-text: #fec154 !important;
  --link-text-hover: #fec154 !important;
  --link-unresolved-color: #fec154 !important;
  --list-marker-color: #686e80 !important;
  --list-marker-color-collapsed: #fec154 !important;
  --list-marker-color-hover: #686e80 !important;
  --menu-background: #13151e !important;
  --metadata-border-color: #686e80 !important;
  --metadata-divider-color: #686e80 !important;
  --metadata-input-text-color: #d1cec6 !important;
  --metadata-label-text-color: #686e80 !important;
  --metadata-label-text-color-hover: #686e80 !important;
  --modal-background: #171a23 !important;
  --nav-collapse-icon-color: #686e80 !important;
  --nav-collapse-icon-color-collapsed: #686e80 !important;
  --nav-heading-color: #d1cec6 !important;
  --nav-heading-color-collapsed: #686e80 !important;
  --nav-heading-color-collapsed-hover: #686e80 !important;
  --nav-heading-color-hover: #d1cec6 !important;
  --nav-item-color: #686e80 !important;
  --nav-item-color-active: #d1cec6 !important;
  --nav-item-color-highlighted: #fec154 !important;
  --nav-item-color-hover: #d1cec6 !important;
  --nav-item-color-selected: #d1cec6 !important;
  --nav-tag-color: #686e80 !important;
  --nav-tag-color-active: #686e80 !important;
  --nav-tag-color-hover: #686e80 !important;
  --pdf-background: #171a23 !important;
  --pdf-page-background: #171a23 !important;
  --pdf-shadow: 0 0 0 1px #686e80 !important;
  --pdf-sidebar-background: #171a23 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #686e80 !important;
  --pill-border-color: #686e80 !important;
  --pill-color: #686e80 !important;
  --pill-color-hover: #d1cec6 !important;
  --pill-color-remove: #686e80 !important;
  --pill-color-remove-hover: #fec154 !important;
  --pre-code-bg: #13141b !important;
  --prompt-background: #171a23 !important;
  --quick-switcher: rgba(49, 54, 70, 0.5) !important;
  --raised-background: color-mix(in srgb, #171a23 65%, transparent) linear-gradient(#171a23, color-mix(in srgb, #171a23 65%, transparent)) !important;
  --ribbon-background: #13151e !important;
  --ribbon-background-collapsed: #171a23 !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08) !important;
  --search-clear-button-color: #686e80 !important;
  --search-icon-color: #686e80 !important;
  --search-result-background: #171a23 !important;
  --secondary: #fec154 !important;
  --setting-group-heading-color: #d1cec6 !important;
  --setting-items-background: rgba(0, 0, 0, 0.08) !important;
  --setting-items-border-color: #686e80 !important;
  --slider-track-background: #686e80 !important;
  --status-bar-background: #13151e !important;
  --status-bar-border-color: #686e80 !important;
  --status-bar-text-color: #686e80 !important;
  --suggestion-background: #171a23 !important;
  --tab-background-active: #171a23 !important;
  --tab-container-background: #13151e !important;
  --tab-outline-color: #686e80 !important;
  --tab-switcher-background: #13151e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #13151e, transparent) !important;
  --tab-text-color: #686e80 !important;
  --tab-text-color-active: #686e80 !important;
  --tab-text-color-focused: #686e80 !important;
  --tab-text-color-focused-active: #686e80 !important;
  --tab-text-color-focused-active-current: #d1cec6 !important;
  --tab-text-color-focused-highlighted: #fec154 !important;
  --table-add-button-border-color: #686e80 !important;
  --table-border-color: #686e80 !important;
  --table-drag-handle-background-active: rgb(63, 69, 91) !important;
  --table-drag-handle-color: #686e80 !important;
  --table-drag-handle-color-active: #d1cec6 !important;
  --table-header-border-color: #686e80 !important;
  --table-header-color: #d1cec6 !important;
  --table-selection-border-color: rgb(63, 69, 91) !important;
  --tag-bg: rgb(63, 69, 91) !important;
  --tag-bg-hover: #2b3147 !important;
  --tag-color: #fec154 !important;
  --tag-color-hover: #fec154 !important;
  --tag-text-color: #eaebeb !important;
  --tag-text-hover: #eaebeb !important;
  --tertiary: #686e80 !important;
  --text-accent: #fec154 !important;
  --text-accent-hover: #686e80 !important;
  --text-error: #800000 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #686e80 !important;
  --text-highlight-bg: rgba(49, 54, 70, 0.5) !important;
  --text-muted: #686e80 !important;
  --text-normal: #d1cec6 !important;
  --text-on-accent: #d1cec6 !important;
  --text-selection: rgba(49, 54, 70, 0.5) !important;
  --text-title-font-weight: 600 !important;
  --text-title-h1: #8e98aa !important;
  --text-title-h2: #8e98aa !important;
  --text-title-h3: #8e98aa !important;
  --text-title-h4: #8e98aa !important;
  --text-title-h5: #8e98aa !important;
  --text-title-h6: #8e98aa !important;
  --textHighlight: rgba(49, 54, 70, 0.5) !important;
  --titlebar-background: #13151e !important;
  --titlebar-background-focused: #13151e !important;
  --titlebar-border-color: #686e80 !important;
  --titlebar-text-color: #686e80 !important;
  --titlebar-text-color-focused: #d1cec6 !important;
  --ul-line-color: #777 !important;
  --ul-line-specs: 0.9px solid !important;
  --vault-profile-color: #d1cec6 !important;
  --vault-profile-color-hover: #d1cec6 !important;
  --vim-cursor: #474949 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(19, 21, 30);
  color: rgb(209, 206, 198);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(23, 26, 35);
  color: rgb(209, 206, 198);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(19, 21, 30);
  color: rgb(209, 206, 198);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(104, 110, 128);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(19, 21, 30);
  border-left-color: rgb(104, 110, 128);
  color: rgb(209, 206, 198);
}

html body div#quartz-root {
  background-color: rgb(23, 26, 35);
  color: rgb(209, 206, 198);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(209, 206, 198);
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body .page article p > em, html em {
  color: rgb(209, 206, 198);
  font-weight: 500;
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body .page article p > i, html i {
  color: rgb(209, 206, 198);
  font-weight: 500;
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body .page article p > strong, html strong {
  color: rgb(209, 206, 198);
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body .text-highlight {
  background-color: rgba(49, 54, 70, 0.5);
  color: rgb(209, 206, 198);
  font-weight: 500;
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body del {
  color: rgb(209, 206, 198);
  font-weight: 500;
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: line-through rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body p {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  outline: rgb(104, 110, 128) none 0px;
  text-decoration: rgb(104, 110, 128);
  text-decoration-color: rgb(104, 110, 128);
}`,
    links: `html body a.external, html footer a {
  color: rgb(254, 193, 84);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(254, 193, 84) none 0px;
  text-decoration: rgb(254, 193, 84);
  text-decoration-color: rgb(254, 193, 84);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(254, 193, 84);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(254, 193, 84) none 0px;
  text-decoration: rgb(254, 193, 84);
  text-decoration-color: rgb(254, 193, 84);
}

html body a.internal.broken {
  color: rgb(254, 193, 84);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(254, 193, 84) none 0px;
  text-decoration: rgb(254, 193, 84);
  text-decoration-color: rgb(254, 193, 84);
}`,
    lists: `html body dd {
  color: rgb(209, 206, 198);
}

html body dl {
  margin-bottom: 24px;
  margin-top: 24px;
}

html body dt {
  color: rgb(209, 206, 198);
}

html body ol > li {
  color: rgb(209, 206, 198);
}

html body ol.overflow {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

html body ul > li {
  color: rgb(209, 206, 198);
}

html body ul.overflow {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(254, 193, 84);
  text-decoration: rgb(254, 193, 84);
}

html body blockquote {
  background-color: rgb(19, 21, 30);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

html body table {
  color: rgb(209, 206, 198);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  width: 180.766px;
}

html body td {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(209, 206, 198);
}

html body th {
  background-color: rgb(19, 21, 30);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(209, 206, 198);
  font-weight: 800;
}

html body thead {
  border-bottom-color: rgb(104, 110, 128);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html body tr {
  border-bottom-color: rgb(104, 110, 128);
}`,
    code: `html body code {
  background-color: rgb(19, 20, 27);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
  font-family: "Ubuntu Mono derivative Powerline", Menlo, Monaco;
  padding-bottom: 22px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
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
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

html body figcaption {
  color: rgb(209, 206, 198);
  font-size: 24px;
}

html body figure {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  margin-bottom: 24px;
  margin-top: 24px;
}

html body img {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

html body video {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}`,
    embeds: `html body .file-embed {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
}

html body .footnotes {
  border-top-color: rgb(209, 206, 198);
  color: rgb(209, 206, 198);
}

html body .transclude {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(63, 69, 91);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

html body .transclude-inner {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(63, 69, 91);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(104, 110, 128);
  text-decoration: line-through rgb(104, 110, 128);
  text-decoration-color: rgb(104, 110, 128);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(104, 110, 128);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}`,
    search: `html body .search > .search-button {
  background-color: rgb(23, 26, 35);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(209, 206, 198);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body .search > .search-container > .search-space {
  background-color: rgb(23, 26, 35);
}

html body .search > .search-container > .search-space > * {
  color: rgb(209, 206, 198);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 206, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(209, 206, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(49, 54, 70, 0.5);
  color: rgb(209, 206, 198);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(19, 21, 30);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(49, 54, 70, 0.5);
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  color: rgb(209, 206, 198);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(49, 54, 70, 0.5);
  color: rgb(209, 206, 198);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}

html body a.internal.tag-link::before {
  color: rgb(254, 193, 84);
}

html body h1 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h2 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h2.page-title, html h2.page-title a {
  color: rgb(209, 206, 198);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h3 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h4 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h5 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body h6 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body hr {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

html body ::-webkit-scrollbar-track {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(104, 110, 128);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(104, 110, 128);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(104, 110, 128);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(209, 206, 198);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(209, 206, 198);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
}`,
    footer: `html body footer {
  background-color: rgb(19, 21, 30);
  border-bottom-color: rgb(19, 21, 30);
  border-left-color: rgb(19, 21, 30);
  border-right-color: rgb(19, 21, 30);
  border-top-color: rgb(19, 21, 30);
  border-top-width: 0px;
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body footer ul li a {
  color: rgb(104, 110, 128);
  text-decoration: rgb(104, 110, 128);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(209, 206, 198);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  color: rgb(209, 206, 198);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(104, 110, 128);
  text-decoration: rgb(104, 110, 128);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

html body li.section-li > .section .meta {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(104, 110, 128);
  text-decoration: rgb(104, 110, 128);
}

html body ul.section-ul {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
}

html body .darkmode svg {
  color: rgb(104, 110, 128);
  stroke: rgb(104, 110, 128);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
}

html body .breadcrumb-element p {
  color: rgb(104, 110, 128);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  color: rgb(209, 206, 198);
}

html body .metadata {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body .metadata-properties {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html body .navigation-progress {
  background-color: rgb(19, 21, 30);
}

html body .page-header h2.page-title {
  color: rgb(254, 193, 84);
}

html body abbr {
  color: rgb(209, 206, 198);
  text-decoration: underline dotted rgb(209, 206, 198);
}

html body details {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

html body input[type=text] {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
}

html body kbd {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  color: rgb(209, 206, 198);
  font-size: 21px;
  padding-bottom: 2.1px;
  padding-left: 5.25px;
  padding-right: 5.25px;
  padding-top: 2.1px;
}

html body progress {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

html body sub {
  color: rgb(209, 206, 198);
  font-size: 16.8px;
  vertical-align: super;
}

html body summary {
  color: rgb(209, 206, 198);
}

html body sup {
  color: rgb(209, 206, 198);
  font-size: 16.8px;
}`,
  },
  light: {},
};
