import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dekurai", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 160 !important;
  --accent-l: 26% !important;
  --accent-s: 73% !important;
  --background-modifier-active-hover: hsla(160, 73%, 26%, 0.1) !important;
  --background-modifier-border: hsl(240, 5%, 25%) !important;
  --background-modifier-form-field: hsl(205, 23%, 13%) !important;
  --background-modifier-form-field-hover: hsl(205, 23%, 13%) !important;
  --background-modifier-hover: hsla(200, 70%, 45%, 0.173) !important;
  --background-primary: hsl(205, 23%, 10%) !important;
  --background-primary-alt: hsl(205, 23%, 8%) !important;
  --background-secondary: hsl(205, 20%, 9%) !important;
  --background-secondary-alt: hsl(197, 20%, 7%) !important;
  --bases-cards-background: hsl(205, 23%, 10%) !important;
  --bases-cards-cover-background: hsl(205, 23%, 8%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(240, 5%, 25%) !important;
  --bases-embed-border-color: hsl(240, 5%, 25%) !important;
  --bases-group-heading-property-color: hsl(210, 5%, 67%) !important;
  --bases-table-border-color: hsl(240, 5%, 25%) !important;
  --bases-table-cell-background-active: hsl(205, 23%, 10%) !important;
  --bases-table-cell-background-disabled: hsl(205, 23%, 8%) !important;
  --bases-table-cell-background-selected: hsla(160, 73%, 26%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(165, 65%, 25%) !important;
  --bases-table-group-background: hsl(205, 23%, 8%) !important;
  --bases-table-header-background: hsl(205, 23%, 10%) !important;
  --bases-table-header-background-hover: hsla(200, 70%, 45%, 0.173) !important;
  --bases-table-header-color: hsl(210, 5%, 67%) !important;
  --bases-table-summary-background: hsl(205, 23%, 10%) !important;
  --bases-table-summary-background-hover: hsla(200, 70%, 45%, 0.173) !important;
  --blockquote-border-color: rgb(0, 162, 255) !important;
  --blockquote-border-thickness: 5px !important;
  --blockquote-color: #3eb4bf !important;
  --blockquote-font-style: italic !important;
  --blur-background: color-mix(in srgb, hsl(197, 20%, 7%) 65%, transparent) linear-gradient(hsl(197, 20%, 7%), color-mix(in srgb, hsl(197, 20%, 7%) 65%, transparent)) !important;
  --bodyFont: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: white !important;
  --bold-weight: 600 !important;
  --canvas-background: hsl(205, 23%, 10%) !important;
  --canvas-dot-pattern: hsl(197, 20%, 7%) !important;
  --checkbox-border-color-hover: hsl(210, 5%, 67%) !important;
  --checkbox-color: hsl(165, 65%, 25%) !important;
  --checkbox-color-hover: hsl(165, 65%, 35%) !important;
  --checkbox-marker-color: hsl(205, 23%, 10%) !important;
  --checklist-done-color: hsl(210, 5%, 67%) !important;
  --code-background: hsl(205, 23%, 8%) !important;
  --code-border-color: hsl(240, 5%, 25%) !important;
  --code-bracket-background: hsla(200, 70%, 45%, 0.173) !important;
  --code-normal: #7095c2 !important;
  --code-punctuation: hsl(210, 5%, 67%) !important;
  --codeFont: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: hsl(160, 88%, 40%) !important;
  --color-accent: hsl(160, 73%, 26%) !important;
  --color-accent-1: hsl(157, 74.46%, 29.9%) !important;
  --color-accent-2: hsl(155, 76.65%, 33.54%) !important;
  --color-accent-hsl: 160, 73%, 26% !important;
  --color-base-00: hsl(205, 23%, 10%) !important;
  --color-base-10: hsl(205, 23%, 8%) !important;
  --color-base-20: hsl(205, 20%, 9%) !important;
  --color-base-25: hsl(205, 23%, 13%) !important;
  --color-base-30: hsl(197, 20%, 7%) !important;
  --color-base-70: hsl(210, 5%, 67%) !important;
  --dark: hsl(210, 5%, 67%) !important;
  --darkgray: hsl(210, 5%, 67%) !important;
  --default-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif !important;
  --divider-color: hsl(240, 5%, 25%) !important;
  --divider-color-hover: hsl(165, 65%, 25%) !important;
  --dropdown-background: hsl(197, 20%, 7%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(240, 5%, 25%), inset 0 0 0 1px hsl(240, 5%, 25%) !important;
  --embed-border-start: 2px solid hsl(165, 65%, 25%) !important;
  --file-header-background: hsl(205, 23%, 10%) !important;
  --file-header-background-focused: hsl(205, 23%, 10%) !important;
  --file-header-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 52vw !important;
  --flair-background: hsl(197, 20%, 7%) !important;
  --font-interface: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: hsl(240, 5%, 25%) !important;
  --footnote-id-color: hsl(210, 5%, 67%) !important;
  --footnote-input-background-active: hsla(200, 70%, 45%, 0.173) !important;
  --graph-node: hsl(210, 5%, 67%) !important;
  --graph-node-focused: hsl(160, 88%, 40%) !important;
  --gray: hsl(210, 5%, 67%) !important;
  --h1-color: hsl(205, 75%, 60%) !important;
  --h2-color: #34daa5 !important;
  --h3-color: hsl(180, 75%, 55%) !important;
  --h4-color: #e3e363 !important;
  --h5-color: hsl(0, 75%, 65%) !important;
  --h6-color: hsl(313, 65%, 65%) !important;
  --headerFont: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: #075dc7 !important;
  --hr-color: hsl(240, 5%, 25%) !important;
  --icon-color: hsl(210, 5%, 67%) !important;
  --icon-color-active: hsl(160, 88%, 40%) !important;
  --icon-color-hover: hsl(210, 5%, 67%) !important;
  --interactive-accent: hsl(165, 65%, 25%) !important;
  --interactive-accent-hover: hsl(165, 65%, 35%) !important;
  --interactive-accent-hsl: 160, 73%, 26% !important;
  --interactive-normal: hsl(197, 20%, 7%) !important;
  --light: hsl(205, 23%, 10%) !important;
  --lightgray: hsl(205, 20%, 9%) !important;
  --link-color: hsl(171, 88%, 38%) !important;
  --link-color-hover: hsl(171, 95%, 48%) !important;
  --link-external-color: hsl(171, 88%, 38%) !important;
  --link-external-color-hover: hsl(171, 95%, 48%) !important;
  --link-unresolved-color: hsl(171, 88%, 38%) !important;
  --link-unresolved-decoration-color: hsla(160, 73%, 26%, 0.3) !important;
  --list-marker-color-collapsed: hsl(160, 88%, 40%) !important;
  --list-marker-color-hover: hsl(210, 5%, 67%) !important;
  --menu-background: hsl(205, 20%, 9%) !important;
  --metadata-border-color: hsl(240, 5%, 25%) !important;
  --metadata-divider-color: hsl(240, 5%, 25%) !important;
  --metadata-input-background-active: hsla(200, 70%, 45%, 0.173) !important;
  --metadata-input-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-background-active: hsla(200, 70%, 45%, 0.173) !important;
  --metadata-label-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(210, 5%, 67%) !important;
  --metadata-label-text-color-hover: hsl(210, 5%, 67%) !important;
  --metadata-property-background-active: hsla(200, 70%, 45%, 0.173) !important;
  --modal-background: hsl(205, 23%, 10%) !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: #61afef !important;
  --nav-collapse-icon-color-collapsed: #61afef !important;
  --nav-heading-color-collapsed-hover: hsl(210, 5%, 67%) !important;
  --nav-item-background-active: hsla(200, 70%, 45%, 0.173) !important;
  --nav-item-background-hover: hsla(200, 70%, 45%, 0.173) !important;
  --nav-item-background-selected: hsla(160, 73%, 26%, 0.15) !important;
  --nav-item-color: hsl(210, 5%, 67%) !important;
  --nav-item-color-highlighted: hsl(160, 88%, 40%) !important;
  --nav-tag-color-active: hsl(210, 5%, 67%) !important;
  --nav-tag-color-hover: hsl(210, 5%, 67%) !important;
  --pdf-background: hsl(205, 23%, 10%) !important;
  --pdf-page-background: hsl(205, 23%, 10%) !important;
  --pdf-shadow: 0 0 0 1px hsl(240, 5%, 25%) !important;
  --pdf-sidebar-background: hsl(205, 23%, 10%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(240, 5%, 25%) !important;
  --pill-border-color: hsl(240, 5%, 25%) !important;
  --pill-color: hsl(210, 5%, 67%) !important;
  --pill-color-remove-hover: hsl(160, 88%, 40%) !important;
  --prompt-background: hsl(205, 23%, 10%) !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, hsl(197, 20%, 7%) 65%, transparent) linear-gradient(hsl(197, 20%, 7%), color-mix(in srgb, hsl(197, 20%, 7%) 65%, transparent)) !important;
  --ribbon-background: hsl(205, 20%, 9%) !important;
  --ribbon-background-collapsed: hsl(205, 23%, 10%) !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: hsl(210, 5%, 67%) !important;
  --search-icon-color: hsl(210, 5%, 67%) !important;
  --search-match-color: #ffff00 !important;
  --search-match-color-other: #ffff00 !important;
  --search-result-background: hsl(205, 23%, 10%) !important;
  --secondary: hsl(160, 88%, 40%) !important;
  --setting-items-background: hsl(205, 23%, 8%) !important;
  --setting-items-border-color: hsl(240, 5%, 25%) !important;
  --setting-items-radius: 10px !important;
  --slider-track-background: hsl(240, 5%, 25%) !important;
  --status-bar-background: hsl(205, 20%, 9%) !important;
  --status-bar-border-color: hsl(240, 5%, 25%) !important;
  --status-bar-text-color: hsl(210, 5%, 67%) !important;
  --suggestion-background: hsl(205, 23%, 10%) !important;
  --tab-background-active: hsl(205, 23%, 10%) !important;
  --tab-container-background: hsl(205, 20%, 9%) !important;
  --tab-outline-color: hsl(240, 5%, 25%) !important;
  --tab-switcher-background: hsl(205, 20%, 9%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(205, 20%, 9%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(160, 73%, 26%) !important;
  --tab-text-color-active: hsl(210, 5%, 67%) !important;
  --tab-text-color-focused: hsl(210, 5%, 67%) !important;
  --tab-text-color-focused-active: hsl(210, 5%, 67%) !important;
  --tab-text-color-focused-active-current: hsl(160, 84%, 49%) !important;
  --tab-text-color-focused-highlighted: hsl(160, 88%, 40%) !important;
  --table-add-button-border-color: hsl(240, 5%, 25%) !important;
  --table-border-color: hsl(240, 5%, 25%) !important;
  --table-drag-handle-background-active: hsl(165, 65%, 25%) !important;
  --table-drag-handle-color-active: rgb(250, 250, 250) !important;
  --table-header-border-color: hsl(240, 5%, 25%) !important;
  --table-selection: hsla(160, 73%, 26%, 0.1) !important;
  --table-selection-border-color: hsl(165, 65%, 25%) !important;
  --tag-background: #228ec31a !important;
  --tag-background-hover: #228ec333 !important;
  --tag-border-color: #228ec326 !important;
  --tag-border-color-hover: #228ec326 !important;
  --tag-color: hsl(187, 92%, 48%) !important;
  --tag-color-hover: hsl(187, 92%, 58%) !important;
  --tag-padding-x: 0.55em !important;
  --tertiary: hsl(160, 88%, 55%) !important;
  --text-accent: hsl(160, 88%, 40%) !important;
  --text-accent-hover: hsl(160, 88%, 55%) !important;
  --text-highlight-bg: #075dc7 !important;
  --text-muted: hsl(210, 5%, 67%) !important;
  --text-on-accent: rgb(250, 250, 250) !important;
  --text-selection: hsl(205, 53%, 17%) !important;
  --textHighlight: #075dc7 !important;
  --titleFont: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(197, 20%, 7%) !important;
  --titlebar-background-focused: hsl(197, 20%, 7%) !important;
  --titlebar-border-color: hsl(240, 5%, 25%) !important;
  --titlebar-text-color: hsl(210, 5%, 67%) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(18, 24, 28);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(20, 26, 31);
}

html body .bases-table thead th {
  border-color: rgb(61, 61, 67);
}

html body .canvas-sidebar {
  background-color: rgb(18, 24, 28);
}

html body .note-properties {
  border-color: rgb(61, 61, 67);
}

html body .note-properties-key {
  color: rgb(167, 171, 175);
}

html body .note-properties-row {
  border-color: rgb(167, 171, 175);
}

html body .note-properties-tags {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(10, 209, 235);
}

html body .note-properties-value {
  color: rgb(167, 171, 175);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(18, 24, 28);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(61, 61, 67);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(18, 24, 28);
  border-left-color: rgb(61, 61, 67);
}

html body div#quartz-root {
  background-color: rgb(20, 26, 31);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  background-color: rgb(7, 93, 199);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(22, 105, 84);
  border-color: rgb(22, 105, 84);
}

html body p {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(167, 171, 175) none 0px;
  text-decoration-color: rgb(167, 171, 175);
}`,
    links: `html body a.external, html footer a {
  color: rgb(12, 182, 157);
  outline: rgb(12, 182, 157) none 0px;
  text-decoration-color: rgb(12, 182, 157);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(12, 182, 157);
  outline: rgb(12, 182, 157) none 0px;
  text-decoration-color: rgb(12, 182, 157);
}

html body a.internal.broken {
  color: rgb(12, 182, 157);
  outline: rgb(12, 182, 157) none 0px;
  text-decoration: underline rgba(18, 115, 82, 0.3);
  text-decoration-color: rgba(18, 115, 82, 0.3);
}`,
    blockquotes: `html body blockquote {
  font-style: italic;
}`,
    tables: `html body td {
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
  border-top-color: rgb(61, 61, 67);
}

html body th {
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
  border-top-color: rgb(61, 61, 67);
}`,
    code: `html body code {
  border-bottom-color: rgb(112, 149, 194);
  border-left-color: rgb(112, 149, 194);
  border-right-color: rgb(112, 149, 194);
  border-top-color: rgb(112, 149, 194);
  color: rgb(112, 149, 194);
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(16, 21, 25);
  border-bottom-color: rgb(25, 31, 36);
  border-left-color: rgb(25, 31, 36);
  border-right-color: rgb(25, 31, 36);
  border-top-color: rgb(25, 31, 36);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(16, 21, 25);
  border-bottom-color: rgb(25, 31, 36);
  border-left-color: rgb(25, 31, 36);
  border-right-color: rgb(25, 31, 36);
  border-top-color: rgb(25, 31, 36);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(16, 21, 25);
  border-bottom-color: rgb(25, 31, 36);
  border-left-color: rgb(25, 31, 36);
  border-right-color: rgb(25, 31, 36);
  border-top-color: rgb(25, 31, 36);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgb(16, 21, 25);
  border-bottom-color: rgb(25, 31, 36);
  border-left-color: rgb(25, 31, 36);
  border-right-color: rgb(25, 31, 36);
  border-top-color: rgb(25, 31, 36);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body img {
  border-bottom-color: rgb(77, 166, 230);
  border-left-color: rgb(77, 166, 230);
  border-right-color: rgb(77, 166, 230);
  border-top-color: rgb(77, 166, 230);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(16, 21, 25);
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
}

html body .transclude {
  border-left-color: rgb(22, 105, 84);
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
  background-color: rgb(26, 34, 41);
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
  border-top-color: rgb(61, 61, 67);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(20, 26, 31);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.173);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(18, 24, 28);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(34, 142, 195, 0.173);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.173);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgba(34, 142, 195, 0.15);
  border-left-color: rgba(34, 142, 195, 0.15);
  border-right-color: rgba(34, 142, 195, 0.15);
  border-top-color: rgba(34, 142, 195, 0.15);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(10, 209, 235);
}

html body h1 {
  color: rgb(77, 166, 230);
}

html body h2 {
  color: rgb(52, 218, 165);
}

html body h3 {
  color: rgb(54, 226, 226);
}

html body h4 {
  color: rgb(227, 227, 99);
}

html body h5 {
  color: rgb(233, 99, 99);
}

html body h6 {
  color: rgb(224, 108, 199);
}

html body hr {
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}

html body ::-webkit-scrollbar-track {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
  color: rgb(167, 171, 175);
}`,
    footer: `html body footer {
  background-color: rgb(18, 24, 28);
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
  border-top-color: rgb(61, 61, 67);
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(167, 171, 175);
}`,
    recentNotes: `html body .recent-notes > h3 {
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(167, 171, 175);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li > .section .meta {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(167, 171, 175);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
  color: rgb(167, 171, 175);
}

html body .darkmode svg {
  color: rgb(167, 171, 175);
  stroke: rgb(167, 171, 175);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
  color: rgb(167, 171, 175);
}

html body .breadcrumb-element p {
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .metadata {
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
  border-top-color: rgb(61, 61, 67);
  color: rgb(167, 171, 175);
}

html body .metadata-properties {
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
  color: rgb(167, 171, 175);
}

html body .navigation-progress {
  background-color: rgb(18, 24, 28);
}

html body .page-header h2.page-title {
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=text] {
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(16, 21, 25);
  border-bottom-color: rgb(112, 149, 194);
  border-left-color: rgb(112, 149, 194);
  border-right-color: rgb(112, 149, 194);
  border-top-color: rgb(112, 149, 194);
  color: rgb(112, 149, 194);
}

html body ul.tags > li {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgba(34, 142, 195, 0.15);
  border-left-color: rgba(34, 142, 195, 0.15);
  border-right-color: rgba(34, 142, 195, 0.15);
  border-top-color: rgba(34, 142, 195, 0.15);
  color: rgb(10, 209, 235);
}`,
  },
  light: {},
};
