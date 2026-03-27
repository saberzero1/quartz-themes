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
  --background-modifier-border: hsl(258, 12%, 33%) !important;
  --background-modifier-form-field: hsl(258, 11.5%, 10%) !important;
  --background-modifier-form-field-hover: hsl(258, 11.5%, 10%) !important;
  --background-primary: hsl(258, 11%, 25.5%) !important;
  --background-primary-alt: hsl(258, 11.5%, 18.5%) !important;
  --background-secondary: hsl(258, 10%, 20%) !important;
  --background-secondary-alt: hsl(258, 12%, 33%) !important;
  --background-tertiary: hsl(258, 100%, 80%, 0.08) !important;
  --bases-cards-background: hsl(258, 11%, 25.5%) !important;
  --bases-cards-cover-background: hsl(258, 11.5%, 18.5%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(258, 12%, 33%) !important;
  --bases-embed-border-color: hsl(258, 12%, 33%) !important;
  --bases-group-heading-property-color: hsl(258, 50%, 73%) !important;
  --bases-group-heading-property-weight: 300 !important;
  --bases-table-border-color: hsl(258, 12%, 33%) !important;
  --bases-table-cell-background-active: hsl(258, 11%, 25.5%) !important;
  --bases-table-cell-background-disabled: hsl(258, 11.5%, 18.5%) !important;
  --bases-table-group-background: hsl(258, 11.5%, 18.5%) !important;
  --bases-table-header-background: hsl(258, 11%, 25.5%) !important;
  --bases-table-header-color: hsl(258, 50%, 73%) !important;
  --bases-table-header-weight: 300 !important;
  --bases-table-row-background-hover: hsla(258, 88%, 66%, 0.33) !important;
  --bases-table-summary-background: hsl(258, 11%, 25.5%) !important;
  --blur-background: color-mix(in srgb, hsl(258, 12%, 33%) 65%, transparent) linear-gradient(hsl(258, 12%, 33%), color-mix(in srgb, hsl(258, 12%, 33%) 65%, transparent)) !important;
  --bodyFont: Roboto, Assistant, sans-serif !important;
  --bold-weight: 600 !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 25%;
  --callout-title-weight: 500;
  --canvas-background: hsl(258, 11%, 25.5%) !important;
  --canvas-dot-pattern: hsl(258, 12%, 33%) !important;
  --cards-border-width: 1px !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: hsl(258, 20%, 80%) !important;
  --checkbox-border-color-hover: hsl(258, 50%, 73%) !important;
  --checkbox-marker-color: hsl(258, 11%, 25.5%) !important;
  --checkbox-radius: 100px !important;
  --checklist-done-color: hsl(258, 50%, 73%) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl(258, 11.5%, 18.5%) !important;
  --code-border-color: hsl(258, 12%, 33%) !important;
  --code-normal: hsl(258, 20%, 80%) !important;
  --code-punctuation: hsl(258, 50%, 73%) !important;
  --codeFont: Roboto, Assistant, sans-serif !important;
  --color-base-00: hsl(258, 11%, 25.5%) !important;
  --color-base-10: hsl(258, 11.5%, 18.5%) !important;
  --color-base-100: hsl(258, 20%, 80%) !important;
  --color-base-20: hsl(258, 10%, 20%) !important;
  --color-base-25: hsl(258, 11.5%, 10%) !important;
  --color-base-30: hsl(258, 12%, 33%) !important;
  --color-base-60: hsl(258, 20%, 13%) !important;
  --color-base-70: hsl(258, 50%, 73%) !important;
  --dark: hsl(258, 20%, 80%) !important;
  --darkgray: hsl(258, 20%, 80%) !important;
  --divider-color: hsl(258, 12%, 33%) !important;
  --divider-width: 0px !important;
  --dropdown-background: hsl(258, 12%, 33%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(258, 12%, 33%), inset 0 0 0 1px hsl(258, 12%, 33%) !important;
  --file-header-background: hsl(258, 11%, 25.5%) !important;
  --file-header-background-focused: hsl(258, 11%, 25.5%) !important;
  --file-header-font: Roboto, Assistant, sans-serif !important;
  --flair-background: hsl(258, 12%, 33%) !important;
  --flair-color: hsl(258, 20%, 80%) !important;
  --floating-box-shadow: 0 2px 1px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.02), 0 2.3px 17.9px rgba(0, 0, 0, 0.03), 0 12px 33.4px rgba(0, 0, 0, 0.03), 0 20px 80px rgba(0, 0, 0, 0.02) !important;
  --font-bold: 600 !important;
  --font-default: 'Roboto', 'Assistant', sans-serif !important;
  --font-interface: Roboto, Assistant, sans-serif !important;
  --font-light: 100 !important;
  --font-mermaid: Roboto, Assistant, sans-serif !important;
  --font-normal: 300 !important;
  --font-text: Roboto, Assistant, sans-serif !important;
  --font-weight: 300 !important;
  --footnote-divider-color: hsl(258, 12%, 33%) !important;
  --footnote-id-color: hsl(258, 50%, 73%) !important;
  --graph-node: hsl(258, 50%, 73%) !important;
  --graph-text: hsl(258, 20%, 80%) !important;
  --gray: hsl(258, 50%, 73%) !important;
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
  --headerFont: Roboto, Assistant, sans-serif !important;
  --hr-color: hsl(258, 12%, 33%) !important;
  --icon-color: hsl(258, 50%, 73%) !important;
  --icon-color-focused: hsl(258, 20%, 80%) !important;
  --icon-color-hover: hsl(258, 50%, 73%) !important;
  --inline-title-font: 'Lato' !important;
  --inline-title-size: 2.17em !important;
  --inline-title-weight: 600 !important;
  --input-font-weight: 300 !important;
  --interactive-normal: hsl(258, 12%, 33%) !important;
  --light: hsl(258, 11%, 25.5%) !important;
  --lightgray: hsl(258, 10%, 20%) !important;
  --link-decoration: none !important;
  --link-weight: 300 !important;
  --list-marker-color-hover: hsl(258, 50%, 73%) !important;
  --list-spacing: 0.5em !important;
  --menu-background: hsl(258, 10%, 20%) !important;
  --metadata-border-color: hsl(258, 12%, 33%) !important;
  --metadata-divider-color: hsl(258, 12%, 33%) !important;
  --metadata-input-font: Roboto, Assistant, sans-serif !important;
  --metadata-input-text-color: hsl(258, 20%, 80%) !important;
  --metadata-label-font: Roboto, Assistant, sans-serif !important;
  --metadata-label-text-color: hsl(258, 50%, 73%) !important;
  --metadata-label-text-color-hover: hsl(258, 50%, 73%) !important;
  --modal-background: hsl(258, 11%, 25.5%) !important;
  --nav-heading-color: hsl(258, 20%, 80%) !important;
  --nav-heading-color-collapsed-hover: hsl(258, 50%, 73%) !important;
  --nav-heading-color-hover: hsl(258, 20%, 80%) !important;
  --nav-item-color: hsl(258, 50%, 73%) !important;
  --nav-item-color-active: hsl(258, 20%, 80%) !important;
  --nav-item-color-hover: hsl(258, 20%, 80%) !important;
  --nav-item-color-selected: hsl(258, 20%, 80%) !important;
  --nav-tag-color-active: hsl(258, 50%, 73%) !important;
  --nav-tag-color-hover: hsl(258, 50%, 73%) !important;
  --pdf-background: hsl(258, 11%, 25.5%) !important;
  --pdf-page-background: hsl(258, 11%, 25.5%) !important;
  --pdf-shadow: 0 0 0 1px hsl(258, 12%, 33%) !important;
  --pdf-sidebar-background: hsl(258, 11%, 25.5%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(258, 12%, 33%) !important;
  --pill-border-color: hsl(258, 12%, 33%) !important;
  --pill-color: hsl(258, 50%, 73%) !important;
  --pill-color-hover: hsl(258, 20%, 80%) !important;
  --prompt-background: hsl(258, 11%, 25.5%) !important;
  --raised-background: color-mix(in srgb, hsl(258, 12%, 33%) 65%, transparent) linear-gradient(hsl(258, 12%, 33%), color-mix(in srgb, hsl(258, 12%, 33%) 65%, transparent)) !important;
  --ribbon-background: hsl(258, 10%, 20%) !important;
  --ribbon-background-collapsed: hsl(258, 11%, 25.5%) !important;
  --search-clear-button-color: hsl(258, 50%, 73%) !important;
  --search-icon-color: hsl(258, 50%, 73%) !important;
  --search-result-background: hsl(258, 11%, 25.5%) !important;
  --setting-group-heading-color: hsl(258, 20%, 80%) !important;
  --setting-items-background: hsl(258, 11.5%, 18.5%) !important;
  --setting-items-border-color: hsl(258, 12%, 33%) !important;
  --slider-track-background: hsl(258, 12%, 33%) !important;
  --status-bar-background: hsl(258, 10%, 20%) !important;
  --status-bar-border-color: hsl(258, 12%, 33%) !important;
  --status-bar-text-color: hsl(258, 50%, 73%) !important;
  --suggestion-background: hsl(258, 11%, 25.5%) !important;
  --tab-background-active: transparent !important;
  --tab-container-background: hsl(258, 10%, 20%) !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: hsl(258, 10%, 20%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 10%, 20%), transparent) !important;
  --tab-text-color-active: hsl(253, 92.4%, 85.14%) !important;
  --tab-text-color-focused: hsl(258, 50%, 73%) !important;
  --tab-text-color-focused-active: hsl(253, 92.4%, 85.14%) !important;
  --tab-text-color-focused-active-current: hsl(253, 92.4%, 85.14%) !important;
  --table-add-button-border-color: hsl(258, 12%, 33%) !important;
  --table-add-button-border-width: 0px !important;
  --table-background: hsla(258, 88%, 66%, 0.33) !important;
  --table-border-color: hsl(258, 12%, 33%) !important;
  --table-border-width: 0px !important;
  --table-column-alt-background: none !important;
  --table-column-first-border-width: 0px !important;
  --table-column-last-border-width: 0px !important;
  --table-column-max-width: 100% !important;
  --table-header-background: hsl(255, 89.76%, 75.9%) !important;
  --table-header-background-hover: hsl(253, 92.4%, 85.14%) !important;
  --table-header-border-color: hsl(258, 12%, 33%) !important;
  --table-header-border-width: 0px !important;
  --table-header-color: white !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: hsla(258, 88%, 66%, 0.3) !important;
  --table-row-alt-background-hover: hsla(258, 88%, 66%, 0.33) !important;
  --table-row-background-hover: hsla(258, 88%, 66%, 0.33) !important;
  --table-row-last-border-width: 0px !important;
  --table-white-space: normal !important;
  --tag-decoration: underline !important;
  --text-muted: hsl(258, 50%, 73%) !important;
  --text-normal: hsl(258, 20%, 80%) !important;
  --titleFont: Roboto, Assistant, sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: hsl(258, 12%, 33%) !important;
  --titlebar-border-color: hsl(258, 12%, 33%) !important;
  --titlebar-text-color: hsl(258, 50%, 73%) !important;
  --titlebar-text-color-focused: hsl(258, 20%, 80%) !important;
  --titlebar-text-weight: 600 !important;
  --vault-name-color: hsl(258, 50%, 73%) !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 600 !important;
  --vault-profile-color: hsl(258, 20%, 80%) !important;
  --vault-profile-color-hover: hsl(258, 20%, 80%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 46, 56);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
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
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 500;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
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
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
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
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body ul.overflow {
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

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(62, 58, 72);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(200, 194, 214);
  font-weight: 300;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 46, 56);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(200, 194, 214);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
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
  --background-modifier-border: hsl(258, 33%, 89%) !important;
  --background-modifier-border-focus: hsl(258, 73%, 86%) !important;
  --background-modifier-border-hover: hsl(258, 70%, 88%) !important;
  --background-modifier-error: #E93147 !important;
  --background-modifier-error-hover: #E93147 !important;
  --background-modifier-form-field: hsl(258, 100%, 99.5%) !important;
  --background-modifier-form-field-hover: hsl(258, 100%, 99.5%) !important;
  --background-modifier-success: #08B94E !important;
  --background-primary: hsl(258, 100%, 99.5%) !important;
  --background-primary-alt: hsl(258, 30%, 95.9%) !important;
  --background-secondary: hsl(258, 40%, 94.5%) !important;
  --background-secondary-alt: hsl(258, 40%, 96.5%) !important;
  --background-tertiary: hsl(1,100%,100%) !important;
  --bases-cards-background: hsl(258, 100%, 99.5%) !important;
  --bases-cards-cover-background: hsl(258, 30%, 95.9%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(258, 33%, 89%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(258, 70%, 88%) !important;
  --bases-embed-border-color: hsl(258, 33%, 89%) !important;
  --bases-group-heading-property-color: hsl(258, 20%, 50%) !important;
  --bases-group-heading-property-weight: 300 !important;
  --bases-table-border-color: hsl(258, 33%, 89%) !important;
  --bases-table-cell-background-active: hsl(258, 100%, 99.5%) !important;
  --bases-table-cell-background-disabled: hsl(258, 30%, 95.9%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(258, 73%, 86%) !important;
  --bases-table-group-background: hsl(258, 30%, 95.9%) !important;
  --bases-table-header-background: hsl(258, 100%, 99.5%) !important;
  --bases-table-header-color: hsl(258, 20%, 50%) !important;
  --bases-table-header-weight: 300 !important;
  --bases-table-row-background-hover: hsla(258, 88%, 66%, 0.2) !important;
  --bases-table-summary-background: hsl(258, 100%, 99.5%) !important;
  --blur-background: color-mix(in srgb, hsl(258, 100%, 99.5%) 65%, transparent) linear-gradient(hsl(258, 100%, 99.5%), color-mix(in srgb, hsl(258, 100%, 99.5%) 65%, transparent)) !important;
  --bodyFont: Roboto, Assistant, sans-serif !important;
  --bold-weight: 600 !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 25%;
  --callout-title-weight: 500;
  --canvas-background: hsl(258, 100%, 99.5%) !important;
  --canvas-card-label-color: hsl(258, 20%, 63%, 65%) !important;
  --canvas-dot-pattern: hsl(258, 33%, 89%) !important;
  --cards-border-width: 1px !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: hsl(258, 5%, 30%) !important;
  --checkbox-border-color: hsl(258, 20%, 63%, 65%) !important;
  --checkbox-border-color-hover: hsl(258, 20%, 50%) !important;
  --checkbox-marker-color: hsl(258, 100%, 99.5%) !important;
  --checkbox-radius: 100px !important;
  --checklist-done-color: hsl(258, 20%, 50%) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl(258, 30%, 95.9%) !important;
  --code-border-color: hsl(258, 33%, 89%) !important;
  --code-comment: hsl(258, 20%, 63%, 65%) !important;
  --code-keyword: #D53984 !important;
  --code-normal: hsl(258, 5%, 30%) !important;
  --code-operator: #E93147 !important;
  --code-punctuation: hsl(258, 20%, 50%) !important;
  --code-string: #08B94E !important;
  --code-tag: #E93147 !important;
  --code-value: #7852EE !important;
  --codeFont: Roboto, Assistant, sans-serif !important;
  --collapse-icon-color: hsl(258, 20%, 63%, 65%) !important;
  --color-base-00: hsl(258, 100%, 99.5%) !important;
  --color-base-05: hsl(258, 40%, 96.5%) !important;
  --color-base-10: hsl(258, 30%, 95.9%) !important;
  --color-base-100: hsl(258, 5%, 30%) !important;
  --color-base-20: hsl(258, 40%, 94.5%) !important;
  --color-base-25: hsl(258, 80%, 42%) !important;
  --color-base-30: hsl(258, 33%, 89%) !important;
  --color-base-35: hsl(258, 70%, 88%) !important;
  --color-base-40: hsl(258, 73%, 86%) !important;
  --color-base-50: hsl(258, 18%, 63%) !important;
  --color-base-60: hsl(258, 55%, 72%) !important;
  --color-base-70: hsl(258, 5%, 55%) !important;
  --color-blue: #086DDD !important;
  --color-green: #08B94E !important;
  --color-pink: #D53984 !important;
  --color-purple: #7852EE !important;
  --color-red: #E93147 !important;
  --dark: hsl(258, 5%, 30%) !important;
  --darkgray: hsl(258, 5%, 30%) !important;
  --divider-color: hsl(258, 33%, 89%) !important;
  --divider-width: 0px !important;
  --dropdown-background: hsl(258, 100%, 99.5%) !important;
  --dropdown-background-hover: hsl(258, 30%, 95.9%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(258, 33%, 89%), inset 0 0 0 1px hsl(258, 33%, 89%) !important;
  --file-header-background: hsl(258, 100%, 99.5%) !important;
  --file-header-background-focused: hsl(258, 100%, 99.5%) !important;
  --file-header-font: Roboto, Assistant, sans-serif !important;
  --flair-background: hsl(258, 100%, 99.5%) !important;
  --flair-color: hsl(258, 5%, 30%) !important;
  --floating-box-shadow: 0 2px 1px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.02), 0 2.3px 17.9px rgba(0, 0, 0, 0.03), 0 12px 33.4px rgba(0, 0, 0, 0.03), 0 20px 80px rgba(0, 0, 0, 0.02) !important;
  --font-bold: 600 !important;
  --font-default: 'Roboto', 'Assistant', sans-serif !important;
  --font-interface: Roboto, Assistant, sans-serif !important;
  --font-light: 100 !important;
  --font-mermaid: Roboto, Assistant, sans-serif !important;
  --font-normal: 300 !important;
  --font-text: Roboto, Assistant, sans-serif !important;
  --font-weight: 300 !important;
  --footnote-divider-color: hsl(258, 33%, 89%) !important;
  --footnote-id-color: hsl(258, 20%, 50%) !important;
  --footnote-id-color-no-occurrences: hsl(258, 20%, 63%, 65%) !important;
  --graph-line: hsl(258, 70%, 88%) !important;
  --graph-node: hsl(258, 20%, 50%) !important;
  --graph-node-tag: #08B94E !important;
  --graph-node-unresolved: hsl(258, 20%, 63%, 65%) !important;
  --graph-text: hsl(258, 5%, 30%) !important;
  --gray: hsl(258, 20%, 50%) !important;
  --h1-color: hsl(258, 10%, 25%) !important;
  --h1-font: 'Lato' !important;
  --h1-size: 2.17em !important;
  --h1-weight: 600 !important;
  --h2-color: hsl(258, 10%, 25%) !important;
  --h2-font: 'Work Sans' !important;
  --h2-line-height: 1.6em !important;
  --h2-size: 2em !important;
  --h2-weight: 400 !important;
  --h3-color: hsl(258, 10%, 25%) !important;
  --h3-weight: 400 !important;
  --h4-color: hsl(258, 10%, 25%) !important;
  --h4-weight: 400 !important;
  --h5-color: hsl(258, 10%, 25%) !important;
  --h5-weight: 400 !important;
  --h6-color: hsl(258, 10%, 25%) !important;
  --h6-weight: 400 !important;
  --headerFont: Roboto, Assistant, sans-serif !important;
  --heading-formatting: hsl(258, 20%, 63%, 65%) !important;
  --hr-color: hsl(258, 33%, 89%) !important;
  --icon-color: hsl(258, 20%, 50%) !important;
  --icon-color-focused: hsl(258, 5%, 30%) !important;
  --icon-color-hover: hsl(258, 20%, 50%) !important;
  --inline-title-color: hsl(258, 10%, 25%) !important;
  --inline-title-font: 'Lato' !important;
  --inline-title-size: 2.17em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl(258, 20%, 63%, 65%) !important;
  --input-font-weight: 300 !important;
  --input-placeholder-color: hsl(258, 20%, 63%, 65%) !important;
  --interactive-hover: hsl(258, 30%, 95.9%) !important;
  --interactive-normal: hsl(258, 100%, 99.5%) !important;
  --light: hsl(258, 100%, 99.5%) !important;
  --lightgray: hsl(258, 40%, 94.5%) !important;
  --link-decoration: none !important;
  --link-weight: 300 !important;
  --list-marker-color: hsl(258, 20%, 63%, 65%) !important;
  --list-marker-color-hover: hsl(258, 20%, 50%) !important;
  --list-spacing: 0.5em !important;
  --menu-background: hsl(258, 40%, 94.5%) !important;
  --menu-border-color: hsl(258, 70%, 88%) !important;
  --metadata-border-color: hsl(258, 33%, 89%) !important;
  --metadata-divider-color: hsl(258, 33%, 89%) !important;
  --metadata-input-font: Roboto, Assistant, sans-serif !important;
  --metadata-input-text-color: hsl(258, 5%, 30%) !important;
  --metadata-label-font: Roboto, Assistant, sans-serif !important;
  --metadata-label-text-color: hsl(258, 20%, 50%) !important;
  --metadata-label-text-color-hover: hsl(258, 20%, 50%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(258, 73%, 86%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(258, 70%, 88%) !important;
  --modal-background: hsl(258, 100%, 99.5%) !important;
  --modal-border-color: hsl(258, 73%, 86%) !important;
  --nav-collapse-icon-color: hsl(258, 20%, 63%, 65%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 20%, 63%, 65%) !important;
  --nav-heading-color: hsl(258, 5%, 30%) !important;
  --nav-heading-color-collapsed: hsl(258, 20%, 63%, 65%) !important;
  --nav-heading-color-collapsed-hover: hsl(258, 20%, 50%) !important;
  --nav-heading-color-hover: hsl(258, 5%, 30%) !important;
  --nav-item-color: hsl(258, 20%, 50%) !important;
  --nav-item-color-active: hsl(258, 5%, 30%) !important;
  --nav-item-color-hover: hsl(258, 5%, 30%) !important;
  --nav-item-color-selected: hsl(258, 5%, 30%) !important;
  --nav-tag-color: hsl(258, 20%, 63%, 65%) !important;
  --nav-tag-color-active: hsl(258, 20%, 50%) !important;
  --nav-tag-color-hover: hsl(258, 20%, 50%) !important;
  --pdf-background: hsl(258, 100%, 99.5%) !important;
  --pdf-page-background: hsl(258, 100%, 99.5%) !important;
  --pdf-sidebar-background: hsl(258, 100%, 99.5%) !important;
  --pill-border-color: hsl(258, 33%, 89%) !important;
  --pill-border-color-hover: hsl(258, 70%, 88%) !important;
  --pill-color: hsl(258, 20%, 50%) !important;
  --pill-color-hover: hsl(258, 5%, 30%) !important;
  --pill-color-remove: hsl(258, 20%, 63%, 65%) !important;
  --prompt-background: hsl(258, 100%, 99.5%) !important;
  --prompt-border-color: hsl(258, 73%, 86%) !important;
  --raised-background: color-mix(in srgb, hsl(258, 100%, 99.5%) 65%, transparent) linear-gradient(hsl(258, 100%, 99.5%), color-mix(in srgb, hsl(258, 100%, 99.5%) 65%, transparent)) !important;
  --ribbon-background: hsl(258, 40%, 94.5%) !important;
  --ribbon-background-collapsed: hsl(258, 100%, 99.5%) !important;
  --search-clear-button-color: hsl(258, 20%, 50%) !important;
  --search-icon-color: hsl(258, 20%, 50%) !important;
  --search-result-background: hsl(258, 100%, 99.5%) !important;
  --setting-group-heading-color: hsl(258, 5%, 30%) !important;
  --setting-items-background: hsl(258, 30%, 95.9%) !important;
  --setting-items-border-color: hsl(258, 33%, 89%) !important;
  --slider-thumb-border-color: hsl(258, 70%, 88%) !important;
  --slider-track-background: hsl(258, 33%, 89%) !important;
  --status-bar-background: hsl(258, 40%, 94.5%) !important;
  --status-bar-border-color: hsl(258, 33%, 89%) !important;
  --status-bar-text-color: hsl(258, 20%, 50%) !important;
  --suggestion-background: hsl(258, 100%, 99.5%) !important;
  --sync-avatar-color-1: #E93147 !important;
  --sync-avatar-color-4: #08B94E !important;
  --sync-avatar-color-6: #086DDD !important;
  --sync-avatar-color-7: #7852EE !important;
  --sync-avatar-color-8: #D53984 !important;
  --tab-background-active: transparent !important;
  --tab-container-background: hsl(258, 40%, 94.5%) !important;
  --tab-divider-color: hsl(258, 70%, 88%) !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: hsl(258, 40%, 94.5%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 40%, 94.5%), transparent) !important;
  --tab-text-color: hsl(258, 20%, 63%, 65%) !important;
  --tab-text-color-active: hsl(255, 89.76%, 75.9%) !important;
  --tab-text-color-focused: hsl(258, 20%, 50%) !important;
  --tab-text-color-focused-active: hsl(255, 89.76%, 75.9%) !important;
  --tab-text-color-focused-active-current: hsl(255, 89.76%, 75.9%) !important;
  --table-add-button-border-color: hsl(258, 33%, 89%) !important;
  --table-add-button-border-width: 0px !important;
  --table-background: hsla(258, 88%, 66%, 0.2) !important;
  --table-border-color: hsl(258, 33%, 89%) !important;
  --table-border-width: 0px !important;
  --table-column-alt-background: none !important;
  --table-column-first-border-width: 0px !important;
  --table-column-last-border-width: 0px !important;
  --table-column-max-width: 100% !important;
  --table-drag-handle-color: hsl(258, 20%, 63%, 65%) !important;
  --table-header-background: hsl(257, 88.88%, 70.95%) !important;
  --table-header-background-hover: hsl(255, 89.76%, 75.9%) !important;
  --table-header-border-color: hsl(258, 33%, 89%) !important;
  --table-header-border-width: 0px !important;
  --table-header-color: white !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: hsla(258, 88%, 66%, 0.3) !important;
  --table-row-alt-background-hover: hsla(258, 88%, 66%, 0.2) !important;
  --table-row-background-hover: hsla(258, 88%, 66%, 0.2) !important;
  --table-row-last-border-width: 0px !important;
  --table-white-space: normal !important;
  --tag-decoration: underline !important;
  --text-error: #E93147 !important;
  --text-faint: hsl(258, 20%, 63%, 65%) !important;
  --text-muted: hsl(258, 20%, 50%) !important;
  --text-normal: hsl(258, 5%, 30%) !important;
  --text-success: #08B94E !important;
  --titleFont: Roboto, Assistant, sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: hsl(258, 40%, 96.5%) !important;
  --titlebar-border-color: hsl(258, 33%, 89%) !important;
  --titlebar-text-color: hsl(258, 20%, 50%) !important;
  --titlebar-text-color-focused: hsl(258, 5%, 30%) !important;
  --titlebar-text-weight: 600 !important;
  --vault-name-color: hsl(258, 20%, 50%) !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 600 !important;
  --vault-profile-color: hsl(258, 5%, 30%) !important;
  --vault-profile-color-hover: hsl(258, 5%, 30%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 235, 247);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
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
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 500;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
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
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
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
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

html[saved-theme="light"] body ul > li {
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body ul.overflow {
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

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(253, 252, 255);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(75, 73, 80);
  font-weight: 300;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(75, 73, 80);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
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
