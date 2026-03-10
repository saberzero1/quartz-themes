import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "light-bright",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lato", "roboto", "work-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: rgb(80, 74, 94) !important;
  --background-modifier-form-field: rgb(24, 22, 29) !important;
  --background-modifier-form-field-hover: rgb(24, 22, 29) !important;
  --background-primary: rgb(63, 59, 74) !important;
  --background-primary-alt: rgb(46, 43, 54) !important;
  --background-secondary: rgb(49, 46, 56) !important;
  --background-secondary-alt: rgb(80, 74, 94) !important;
  --background-tertiary: rgb(184, 153, 255) !important;
  --bases-cards-background: rgb(63, 59, 74) !important;
  --bases-cards-cover-background: rgb(46, 43, 54) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(80, 74, 94) !important;
  --bases-embed-border-color: rgb(80, 74, 94) !important;
  --bases-group-heading-property-color: rgb(172, 152, 221) !important;
  --bases-group-heading-property-weight: 300 !important;
  --bases-table-border-color: rgb(80, 74, 94) !important;
  --bases-table-cell-background-active: rgb(63, 59, 74) !important;
  --bases-table-cell-background-disabled: rgb(46, 43, 54) !important;
  --bases-table-group-background: rgb(46, 43, 54) !important;
  --bases-table-header-background: rgb(63, 59, 74) !important;
  --bases-table-header-color: rgb(172, 152, 221) !important;
  --bases-table-header-weight: 300 !important;
  --bases-table-row-background-hover: rgba(138, 92, 245, 0.33) !important;
  --bases-table-summary-background: rgb(63, 59, 74) !important;
  --blur-background: color-mix(in srgb, rgb(80, 74, 94) 65%, transparent) linear-gradient(rgb(80, 74, 94), color-mix(in srgb, rgb(80, 74, 94) 65%, transparent)) !important;
  --bodyFont: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --bold-weight: 600 !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 25%;
  --callout-title-weight: 500;
  --canvas-background: rgb(63, 59, 74) !important;
  --canvas-dot-pattern: rgb(80, 74, 94) !important;
  --cards-border-width: 1px !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: rgb(200, 194, 214) !important;
  --checkbox-border-color-hover: rgb(172, 152, 221) !important;
  --checkbox-marker-color: rgb(63, 59, 74) !important;
  --checkbox-radius: 100px !important;
  --checklist-done-color: rgb(172, 152, 221) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(46, 43, 54) !important;
  --code-border-color: rgb(80, 74, 94) !important;
  --code-normal: rgb(200, 194, 214) !important;
  --code-punctuation: rgb(172, 152, 221) !important;
  --codeFont: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --color-base-00: rgb(63, 59, 74) !important;
  --color-base-10: rgb(46, 43, 54) !important;
  --color-base-100: rgb(200, 194, 214) !important;
  --color-base-20: rgb(49, 46, 56) !important;
  --color-base-25: rgb(24, 22, 29) !important;
  --color-base-30: rgb(80, 74, 94) !important;
  --color-base-60: rgb(30, 27, 40) !important;
  --color-base-70: rgb(172, 152, 221) !important;
  --dark: rgb(200, 194, 214) !important;
  --darkgray: rgb(200, 194, 214) !important;
  --divider-color: rgb(80, 74, 94) !important;
  --divider-width: 0px !important;
  --dropdown-background: rgb(80, 74, 94) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(80, 74, 94), inset 0 0 0 1px rgb(80, 74, 94) !important;
  --file-header-background: rgb(63, 59, 74) !important;
  --file-header-background-focused: rgb(63, 59, 74) !important;
  --file-header-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --flair-background: rgb(80, 74, 94) !important;
  --flair-color: rgb(200, 194, 214) !important;
  --floating-box-shadow: 0 2px 1px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.02), 0 2.3px 17.9px rgba(0, 0, 0, 0.03), 0 12px 33.4px rgba(0, 0, 0, 0.03), 0 20px 80px rgba(0, 0, 0, 0.02) !important;
  --font-bold: 600 !important;
  --font-default: 'Roboto', 'Assistant', sans-serif !important;
  --font-interface: '??', '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --font-light: 100 !important;
  --font-mermaid: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --font-normal: 300 !important;
  --font-text: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --font-weight: 300 !important;
  --footnote-divider-color: rgb(80, 74, 94) !important;
  --footnote-id-color: rgb(172, 152, 221) !important;
  --graph-node: rgb(172, 152, 221) !important;
  --graph-text: rgb(200, 194, 214) !important;
  --gray: rgb(172, 152, 221) !important;
  --h1-font: 'Lato' !important;
  --h1-size: 2.17em !important;
  --h1-weight: 600 !important;
  --h2-font: 'Work Sans' !important;
  --h2-line-height: 1.6em !important;
  --h2-size: 2em !important;
  --h2-weight: 400 !important;
  --h3-weight: 400 !important;
  --h4-weight: 400 !important;
  --h5-weight: 400 !important;
  --h6-weight: 400 !important;
  --headerFont: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --hr-color: rgb(80, 74, 94) !important;
  --icon-color: rgb(172, 152, 221) !important;
  --icon-color-focused: rgb(200, 194, 214) !important;
  --icon-color-hover: rgb(172, 152, 221) !important;
  --inline-title-font: 'Lato' !important;
  --inline-title-size: 2.17em !important;
  --inline-title-weight: 600 !important;
  --input-font-weight: 300 !important;
  --interactive-normal: rgb(80, 74, 94) !important;
  --light: rgb(63, 59, 74) !important;
  --lightgray: rgb(49, 46, 56) !important;
  --link-decoration: none !important;
  --link-weight: 300 !important;
  --list-marker-color-hover: rgb(172, 152, 221) !important;
  --list-spacing: 0.5em !important;
  --menu-background: rgb(49, 46, 56) !important;
  --metadata-border-color: rgb(80, 74, 94) !important;
  --metadata-divider-color: rgb(80, 74, 94) !important;
  --metadata-input-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --metadata-input-text-color: rgb(200, 194, 214) !important;
  --metadata-label-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --metadata-label-text-color: rgb(172, 152, 221) !important;
  --metadata-label-text-color-hover: rgb(172, 152, 221) !important;
  --modal-background: rgb(63, 59, 74) !important;
  --nav-heading-color: rgb(200, 194, 214) !important;
  --nav-heading-color-collapsed-hover: rgb(172, 152, 221) !important;
  --nav-heading-color-hover: rgb(200, 194, 214) !important;
  --nav-item-color: rgb(172, 152, 221) !important;
  --nav-item-color-active: rgb(200, 194, 214) !important;
  --nav-item-color-hover: rgb(200, 194, 214) !important;
  --nav-item-color-selected: rgb(200, 194, 214) !important;
  --nav-tag-color-active: rgb(172, 152, 221) !important;
  --nav-tag-color-hover: rgb(172, 152, 221) !important;
  --pdf-background: rgb(63, 59, 74) !important;
  --pdf-page-background: rgb(63, 59, 74) !important;
  --pdf-shadow: 0 0 0 1px rgb(80, 74, 94) !important;
  --pdf-sidebar-background: rgb(63, 59, 74) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(80, 74, 94) !important;
  --pill-border-color: rgb(80, 74, 94) !important;
  --pill-color: rgb(172, 152, 221) !important;
  --pill-color-hover: rgb(200, 194, 214) !important;
  --prompt-background: rgb(63, 59, 74) !important;
  --raised-background: color-mix(in srgb, rgb(80, 74, 94) 65%, transparent) linear-gradient(rgb(80, 74, 94), color-mix(in srgb, rgb(80, 74, 94) 65%, transparent)) !important;
  --ribbon-background: rgb(49, 46, 56) !important;
  --ribbon-background-collapsed: rgb(63, 59, 74) !important;
  --search-clear-button-color: rgb(172, 152, 221) !important;
  --search-icon-color: rgb(172, 152, 221) !important;
  --search-result-background: rgb(63, 59, 74) !important;
  --setting-group-heading-color: rgb(200, 194, 214) !important;
  --setting-items-background: rgb(46, 43, 54) !important;
  --setting-items-border-color: rgb(80, 74, 94) !important;
  --slider-track-background: rgb(80, 74, 94) !important;
  --status-bar-background: rgb(49, 46, 56) !important;
  --status-bar-border-color: rgb(80, 74, 94) !important;
  --status-bar-text-color: rgb(172, 152, 221) !important;
  --suggestion-background: rgb(63, 59, 74) !important;
  --tab-background-active: transparent !important;
  --tab-container-background: rgb(49, 46, 56) !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: rgb(49, 46, 56) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(49, 46, 56), transparent) !important;
  --tab-text-color-active: rgb(197, 182, 252) !important;
  --tab-text-color-focused: rgb(172, 152, 221) !important;
  --tab-text-color-focused-active: rgb(197, 182, 252) !important;
  --tab-text-color-focused-active-current: rgb(197, 182, 252) !important;
  --table-add-button-border-color: rgb(80, 74, 94) !important;
  --table-add-button-border-width: 0px !important;
  --table-background: rgba(138, 92, 245, 0.33) !important;
  --table-border-color: rgb(80, 74, 94) !important;
  --table-border-width: 0px !important;
  --table-column-alt-background: none !important;
  --table-column-first-border-width: 0px !important;
  --table-column-last-border-width: 0px !important;
  --table-column-max-width: 100% !important;
  --table-header-background: rgb(166, 139, 249) !important;
  --table-header-background-hover: rgb(197, 182, 252) !important;
  --table-header-border-color: rgb(80, 74, 94) !important;
  --table-header-border-width: 0px !important;
  --table-header-color: white !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: rgba(138, 92, 245, 0.3) !important;
  --table-row-alt-background-hover: rgba(138, 92, 245, 0.33) !important;
  --table-row-background-hover: rgba(138, 92, 245, 0.33) !important;
  --table-row-last-border-width: 0px !important;
  --table-white-space: normal !important;
  --tag-decoration: underline !important;
  --text-muted: rgb(172, 152, 221) !important;
  --text-normal: rgb(200, 194, 214) !important;
  --titleFont: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: rgb(80, 74, 94) !important;
  --titlebar-border-color: rgb(80, 74, 94) !important;
  --titlebar-text-color: rgb(172, 152, 221) !important;
  --titlebar-text-color-focused: rgb(200, 194, 214) !important;
  --titlebar-text-weight: 600 !important;
  --vault-name-color: rgb(172, 152, 221) !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 600 !important;
  --vault-profile-color: rgb(200, 194, 214) !important;
  --vault-profile-color-hover: rgb(200, 194, 214) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 46, 56);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(62, 58, 72);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(80, 74, 94);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 46, 56);
  border-left-color: rgb(80, 74, 94);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(49, 46, 56);
  color: rgb(200, 194, 214);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 500;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 500;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body del {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: line-through rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body p {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(172, 152, 221) none 0px;
  text-decoration: rgb(172, 152, 221);
  text-decoration-color: rgb(172, 152, 221);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(166, 138, 249);
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body dt {
  color: rgb(200, 194, 214);
  font-weight: 300;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgba(184, 153, 255, 0.08);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  padding-bottom: 17px;
  padding-top: 17px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(200, 194, 214);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  width: 600px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgba(138, 92, 245, 0.33);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(138, 92, 245, 0.3);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(80, 74, 94);
  border-bottom-width: 0px;
  border-left-color: rgb(80, 74, 94);
  border-left-width: 0px;
  border-right-color: rgb(80, 74, 94);
  border-right-width: 0px;
  border-top-color: rgb(80, 74, 94);
  border-top-width: 0px;
  color: rgb(200, 194, 214);
  font-weight: 300;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(80, 74, 94);
  border-bottom-width: 0px;
  border-left-color: rgb(80, 74, 94);
  border-left-width: 0px;
  border-right-color: rgb(80, 74, 94);
  border-right-width: 0px;
  border-top-color: rgb(80, 74, 94);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  text-align: center;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(166, 138, 249);
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body pre > code, pre:has(> code) {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgba(184, 153, 255, 0.08);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(184, 153, 255, 0.08);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(172, 152, 221);
  text-decoration: rgb(172, 152, 221);
  text-decoration-color: rgb(172, 152, 221);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(24, 23, 28);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
  color: rgb(200, 194, 214);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(200, 194, 214);
  font-weight: 300;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 46, 56);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

html[saved-theme="dark"] body h1 {
  color: rgb(200, 194, 214);
  font-family: Lato;
}

html[saved-theme="dark"] body h2 {
  color: rgb(200, 194, 214);
  font-family: "Work Sans";
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
  color: rgb(200, 194, 214);
  font-family: Lato;
}

html[saved-theme="dark"] body h3 {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(172, 152, 221);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(172, 152, 221);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(172, 152, 221);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 300;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
  color: rgb(172, 152, 221);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(49, 46, 56);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(172, 152, 221);
  text-decoration: rgb(172, 152, 221);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(200, 194, 214);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(172, 152, 221);
  text-decoration: rgb(172, 152, 221);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(172, 152, 221);
  text-decoration: rgb(172, 152, 221);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
  color: rgb(172, 152, 221);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(172, 152, 221);
  stroke: rgb(172, 152, 221);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
  color: rgb(172, 152, 221);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
  color: rgb(172, 152, 221);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
  color: rgb(172, 152, 221);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(49, 46, 56);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(200, 194, 214);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(200, 194, 214);
  text-decoration: underline dotted rgb(200, 194, 214);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body sub {
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body summary {
  color: rgb(200, 194, 214);
  font-weight: 300;
}

html[saved-theme="dark"] body sup {
  color: rgb(200, 194, 214);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: rgb(223, 218, 236) !important;
  --background-modifier-border-focus: rgb(209, 193, 245) !important;
  --background-modifier-border-hover: rgb(216, 203, 246) !important;
  --background-modifier-error: #E93147 !important;
  --background-modifier-error-hover: #E93147 !important;
  --background-modifier-form-field: rgb(255, 255, 255) !important;
  --background-modifier-form-field-hover: rgb(255, 255, 255) !important;
  --background-modifier-success: #08B94E !important;
  --background-primary: rgb(255, 255, 255) !important;
  --background-primary-alt: rgb(244, 242, 248) !important;
  --background-secondary: rgb(240, 237, 247) !important;
  --background-secondary-alt: rgb(246, 244, 250) !important;
  --background-tertiary: rgb(255, 255, 255) !important;
  --bases-cards-background: rgb(255, 255, 255) !important;
  --bases-cards-cover-background: rgb(244, 242, 248) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(223, 218, 236) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(216, 203, 246) !important;
  --bases-embed-border-color: rgb(223, 218, 236) !important;
  --bases-group-heading-property-color: rgb(117, 102, 153) !important;
  --bases-group-heading-property-weight: 300 !important;
  --bases-table-border-color: rgb(223, 218, 236) !important;
  --bases-table-cell-background-active: rgb(255, 255, 255) !important;
  --bases-table-cell-background-disabled: rgb(244, 242, 248) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(209, 193, 245) !important;
  --bases-table-group-background: rgb(244, 242, 248) !important;
  --bases-table-header-background: rgb(255, 255, 255) !important;
  --bases-table-header-color: rgb(117, 102, 153) !important;
  --bases-table-header-weight: 300 !important;
  --bases-table-row-background-hover: rgba(138, 92, 245, 0.2) !important;
  --bases-table-summary-background: rgb(255, 255, 255) !important;
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --bodyFont: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --bold-weight: 600 !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 25%;
  --callout-title-weight: 500;
  --canvas-background: rgb(255, 255, 255) !important;
  --canvas-card-label-color: rgb(153, 142, 180) !important;
  --canvas-dot-pattern: rgb(223, 218, 236) !important;
  --cards-border-width: 1px !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: rgb(75, 73, 80) !important;
  --checkbox-border-color: rgb(153, 142, 180) !important;
  --checkbox-border-color-hover: rgb(117, 102, 153) !important;
  --checkbox-marker-color: rgb(255, 255, 255) !important;
  --checkbox-radius: 100px !important;
  --checklist-done-color: rgb(117, 102, 153) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(244, 242, 248) !important;
  --code-border-color: rgb(223, 218, 236) !important;
  --code-comment: rgb(153, 142, 180) !important;
  --code-keyword: #D53984 !important;
  --code-normal: rgb(75, 73, 80) !important;
  --code-operator: #E93147 !important;
  --code-punctuation: rgb(117, 102, 153) !important;
  --code-string: #08B94E !important;
  --code-tag: #E93147 !important;
  --code-value: #7852EE !important;
  --codeFont: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --collapse-icon-color: rgb(153, 142, 180) !important;
  --color-base-00: rgb(255, 255, 255) !important;
  --color-base-05: rgb(246, 244, 250) !important;
  --color-base-10: rgb(244, 242, 248) !important;
  --color-base-100: rgb(75, 73, 80) !important;
  --color-base-20: rgb(240, 237, 247) !important;
  --color-base-25: rgb(73, 21, 193) !important;
  --color-base-30: rgb(223, 218, 236) !important;
  --color-base-35: rgb(216, 203, 246) !important;
  --color-base-40: rgb(209, 193, 245) !important;
  --color-base-50: rgb(154, 144, 178) !important;
  --color-base-60: rgb(168, 144, 223) !important;
  --color-base-70: rgb(138, 135, 146) !important;
  --color-blue: #086DDD !important;
  --color-green: #08B94E !important;
  --color-pink: #D53984 !important;
  --color-purple: #7852EE !important;
  --color-red: #E93147 !important;
  --dark: rgb(75, 73, 80) !important;
  --darkgray: rgb(75, 73, 80) !important;
  --divider-color: rgb(223, 218, 236) !important;
  --divider-width: 0px !important;
  --dropdown-background: rgb(255, 255, 255) !important;
  --dropdown-background-hover: rgb(244, 242, 248) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(223, 218, 236), inset 0 0 0 1px rgb(223, 218, 236) !important;
  --file-header-background: rgb(255, 255, 255) !important;
  --file-header-background-focused: rgb(255, 255, 255) !important;
  --file-header-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --flair-background: rgb(255, 255, 255) !important;
  --flair-color: rgb(75, 73, 80) !important;
  --floating-box-shadow: 0 2px 1px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.02), 0 2.3px 17.9px rgba(0, 0, 0, 0.03), 0 12px 33.4px rgba(0, 0, 0, 0.03), 0 20px 80px rgba(0, 0, 0, 0.02) !important;
  --font-bold: 600 !important;
  --font-default: 'Roboto', 'Assistant', sans-serif !important;
  --font-interface: '??', '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --font-light: 100 !important;
  --font-mermaid: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --font-normal: 300 !important;
  --font-text: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --font-weight: 300 !important;
  --footnote-divider-color: rgb(223, 218, 236) !important;
  --footnote-id-color: rgb(117, 102, 153) !important;
  --footnote-id-color-no-occurrences: rgb(153, 142, 180) !important;
  --graph-line: rgb(216, 203, 246) !important;
  --graph-node: rgb(117, 102, 153) !important;
  --graph-node-tag: #08B94E !important;
  --graph-node-unresolved: rgb(153, 142, 180) !important;
  --graph-text: rgb(75, 73, 80) !important;
  --gray: rgb(117, 102, 153) !important;
  --h1-color: rgb(61, 57, 70) !important;
  --h1-font: 'Lato' !important;
  --h1-size: 2.17em !important;
  --h1-weight: 600 !important;
  --h2-color: rgb(61, 57, 70) !important;
  --h2-font: 'Work Sans' !important;
  --h2-line-height: 1.6em !important;
  --h2-size: 2em !important;
  --h2-weight: 400 !important;
  --h3-color: rgb(61, 57, 70) !important;
  --h3-weight: 400 !important;
  --h4-color: rgb(61, 57, 70) !important;
  --h4-weight: 400 !important;
  --h5-color: rgb(61, 57, 70) !important;
  --h5-weight: 400 !important;
  --h6-color: rgb(61, 57, 70) !important;
  --h6-weight: 400 !important;
  --headerFont: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --heading-formatting: rgb(153, 142, 180) !important;
  --hr-color: rgb(223, 218, 236) !important;
  --icon-color: rgb(117, 102, 153) !important;
  --icon-color-focused: rgb(75, 73, 80) !important;
  --icon-color-hover: rgb(117, 102, 153) !important;
  --inline-title-color: rgb(61, 57, 70) !important;
  --inline-title-font: 'Lato' !important;
  --inline-title-size: 2.17em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(153, 142, 180) !important;
  --input-font-weight: 300 !important;
  --input-placeholder-color: rgb(153, 142, 180) !important;
  --interactive-hover: rgb(244, 242, 248) !important;
  --interactive-normal: rgb(255, 255, 255) !important;
  --light: rgb(255, 255, 255) !important;
  --lightgray: rgb(240, 237, 247) !important;
  --link-decoration: none !important;
  --link-weight: 300 !important;
  --list-marker-color: rgb(153, 142, 180) !important;
  --list-marker-color-hover: rgb(117, 102, 153) !important;
  --list-spacing: 0.5em !important;
  --menu-background: rgb(240, 237, 247) !important;
  --menu-border-color: rgb(216, 203, 246) !important;
  --metadata-border-color: rgb(223, 218, 236) !important;
  --metadata-divider-color: rgb(223, 218, 236) !important;
  --metadata-input-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --metadata-input-text-color: rgb(75, 73, 80) !important;
  --metadata-label-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --metadata-label-text-color: rgb(117, 102, 153) !important;
  --metadata-label-text-color-hover: rgb(117, 102, 153) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(209, 193, 245) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(216, 203, 246) !important;
  --modal-background: rgb(255, 255, 255) !important;
  --modal-border-color: rgb(209, 193, 245) !important;
  --nav-collapse-icon-color: rgb(153, 142, 180) !important;
  --nav-collapse-icon-color-collapsed: rgb(153, 142, 180) !important;
  --nav-heading-color: rgb(75, 73, 80) !important;
  --nav-heading-color-collapsed: rgb(153, 142, 180) !important;
  --nav-heading-color-collapsed-hover: rgb(117, 102, 153) !important;
  --nav-heading-color-hover: rgb(75, 73, 80) !important;
  --nav-item-color: rgb(117, 102, 153) !important;
  --nav-item-color-active: rgb(75, 73, 80) !important;
  --nav-item-color-hover: rgb(75, 73, 80) !important;
  --nav-item-color-selected: rgb(75, 73, 80) !important;
  --nav-tag-color: rgb(153, 142, 180) !important;
  --nav-tag-color-active: rgb(117, 102, 153) !important;
  --nav-tag-color-hover: rgb(117, 102, 153) !important;
  --pdf-background: rgb(255, 255, 255) !important;
  --pdf-page-background: rgb(255, 255, 255) !important;
  --pdf-sidebar-background: rgb(255, 255, 255) !important;
  --pill-border-color: rgb(223, 218, 236) !important;
  --pill-border-color-hover: rgb(216, 203, 246) !important;
  --pill-color: rgb(117, 102, 153) !important;
  --pill-color-hover: rgb(75, 73, 80) !important;
  --pill-color-remove: rgb(153, 142, 180) !important;
  --prompt-background: rgb(255, 255, 255) !important;
  --prompt-border-color: rgb(209, 193, 245) !important;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --ribbon-background: rgb(240, 237, 247) !important;
  --ribbon-background-collapsed: rgb(255, 255, 255) !important;
  --search-clear-button-color: rgb(117, 102, 153) !important;
  --search-icon-color: rgb(117, 102, 153) !important;
  --search-result-background: rgb(255, 255, 255) !important;
  --setting-group-heading-color: rgb(75, 73, 80) !important;
  --setting-items-background: rgb(244, 242, 248) !important;
  --setting-items-border-color: rgb(223, 218, 236) !important;
  --slider-thumb-border-color: rgb(216, 203, 246) !important;
  --slider-track-background: rgb(223, 218, 236) !important;
  --status-bar-background: rgb(240, 237, 247) !important;
  --status-bar-border-color: rgb(223, 218, 236) !important;
  --status-bar-text-color: rgb(117, 102, 153) !important;
  --suggestion-background: rgb(255, 255, 255) !important;
  --sync-avatar-color-1: #E93147 !important;
  --sync-avatar-color-4: #08B94E !important;
  --sync-avatar-color-6: #086DDD !important;
  --sync-avatar-color-7: #7852EE !important;
  --sync-avatar-color-8: #D53984 !important;
  --tab-background-active: transparent !important;
  --tab-container-background: rgb(240, 237, 247) !important;
  --tab-divider-color: rgb(216, 203, 246) !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: rgb(240, 237, 247) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(240, 237, 247), transparent) !important;
  --tab-text-color: rgb(153, 142, 180) !important;
  --tab-text-color-active: rgb(166, 139, 249) !important;
  --tab-text-color-focused: rgb(117, 102, 153) !important;
  --tab-text-color-focused-active: rgb(166, 139, 249) !important;
  --tab-text-color-focused-active-current: rgb(166, 139, 249) !important;
  --table-add-button-border-color: rgb(223, 218, 236) !important;
  --table-add-button-border-width: 0px !important;
  --table-background: rgba(138, 92, 245, 0.2) !important;
  --table-border-color: rgb(223, 218, 236) !important;
  --table-border-width: 0px !important;
  --table-column-alt-background: none !important;
  --table-column-first-border-width: 0px !important;
  --table-column-last-border-width: 0px !important;
  --table-column-max-width: 100% !important;
  --table-drag-handle-color: rgb(153, 142, 180) !important;
  --table-header-background: rgb(153, 115, 247) !important;
  --table-header-background-hover: rgb(166, 139, 249) !important;
  --table-header-border-color: rgb(223, 218, 236) !important;
  --table-header-border-width: 0px !important;
  --table-header-color: white !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: rgba(138, 92, 245, 0.3) !important;
  --table-row-alt-background-hover: rgba(138, 92, 245, 0.2) !important;
  --table-row-background-hover: rgba(138, 92, 245, 0.2) !important;
  --table-row-last-border-width: 0px !important;
  --table-white-space: normal !important;
  --tag-decoration: underline !important;
  --text-error: #E93147 !important;
  --text-faint: rgb(153, 142, 180) !important;
  --text-muted: rgb(117, 102, 153) !important;
  --text-normal: rgb(75, 73, 80) !important;
  --text-success: #08B94E !important;
  --titleFont: '??', '??', 'Roboto', 'Assistant', sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: rgb(246, 244, 250) !important;
  --titlebar-border-color: rgb(223, 218, 236) !important;
  --titlebar-text-color: rgb(117, 102, 153) !important;
  --titlebar-text-color-focused: rgb(75, 73, 80) !important;
  --titlebar-text-weight: 600 !important;
  --vault-name-color: rgb(117, 102, 153) !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 600 !important;
  --vault-profile-color: rgb(75, 73, 80) !important;
  --vault-profile-color-hover: rgb(75, 73, 80) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 235, 247);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(253, 252, 255);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 218, 236);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 235, 247);
  border-left-color: rgb(223, 218, 236);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(239, 235, 247);
  color: rgb(75, 73, 80);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 500;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 500;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body del {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: line-through rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body p {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(117, 102, 153) none 0px;
  text-decoration: rgb(117, 102, 153);
  text-decoration-color: rgb(117, 102, 153);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(138, 92, 245);
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body dt {
  color: rgb(75, 73, 80);
  font-weight: 300;
}

html[saved-theme="light"] body ol > li {
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body ul > li {
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(153, 142, 180, 0.65);
  text-decoration: rgba(153, 142, 180, 0.65);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(255, 255, 255);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  padding-bottom: 17px;
  padding-top: 17px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(75, 73, 80);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  width: 600px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgba(138, 92, 245, 0.2);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgba(138, 92, 245, 0.3);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(223, 218, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(223, 218, 236);
  border-left-width: 0px;
  border-right-color: rgb(223, 218, 236);
  border-right-width: 0px;
  border-top-color: rgb(223, 218, 236);
  border-top-width: 0px;
  color: rgb(75, 73, 80);
  font-weight: 300;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(223, 218, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(223, 218, 236);
  border-left-width: 0px;
  border-right-color: rgb(223, 218, 236);
  border-right-width: 0px;
  border-top-color: rgb(223, 218, 236);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  text-align: center;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body tr {
  background-color: rgb(152, 115, 247);
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body pre > code, pre:has(> code) {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body figcaption {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(117, 102, 153);
  text-decoration: rgb(117, 102, 153);
  text-decoration-color: rgb(117, 102, 153);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(153, 142, 180, 0.65);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(153, 142, 180, 0.65);
  border-right-color: rgba(153, 142, 180, 0.65);
  border-top-color: rgba(153, 142, 180, 0.65);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(253, 252, 255);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
  color: rgb(75, 73, 80);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(253, 252, 255);
  border-bottom-color: rgb(209, 193, 245);
  border-left-color: rgb(209, 193, 245);
  border-right-color: rgb(209, 193, 245);
  border-top-color: rgb(209, 193, 245);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(75, 73, 80);
  font-weight: 300;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(209, 193, 245);
  border-left-color: rgb(209, 193, 245);
  border-right-color: rgb(209, 193, 245);
  border-top-color: rgb(209, 193, 245);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 235, 247);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

html[saved-theme="light"] body h1 {
  color: rgb(61, 57, 70);
  font-family: Lato;
}

html[saved-theme="light"] body h2 {
  color: rgb(61, 57, 70);
  font-family: "Work Sans";
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
  color: rgb(61, 57, 70);
  font-family: Lato;
}

html[saved-theme="light"] body h3 {
  color: rgb(61, 57, 70);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(61, 57, 70);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(61, 57, 70);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(61, 57, 70);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(117, 102, 153);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(117, 102, 153);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(117, 102, 153);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 300;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
  color: rgb(117, 102, 153);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(239, 235, 247);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(117, 102, 153);
  text-decoration: rgb(117, 102, 153);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(75, 73, 80);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 102, 153);
  text-decoration: rgb(117, 102, 153);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 102, 153);
  text-decoration: rgb(117, 102, 153);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
  color: rgb(117, 102, 153);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(117, 102, 153);
  stroke: rgb(117, 102, 153);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
  color: rgb(117, 102, 153);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(153, 142, 180, 0.65);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
  color: rgb(117, 102, 153);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
  color: rgb(117, 102, 153);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(239, 235, 247);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(75, 73, 80);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(75, 73, 80);
  text-decoration: underline dotted rgb(75, 73, 80);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body sub {
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body summary {
  color: rgb(75, 73, 80);
  font-weight: 300;
}

html[saved-theme="light"] body sup {
  color: rgb(75, 73, 80);
}`,
  },
};
