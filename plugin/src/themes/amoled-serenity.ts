import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "amoled-serenity",
    modes: ["dark"],
    variations: [],
    fonts: ["bricolage-grotesque", "roboto", "montserrat"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #333333 !important;
  --background-modifier-border-focus: #4a4a4a !important;
  --background-modifier-border-hover: #363636 !important;
  --background-modifier-form-field: #262626 !important;
  --background-modifier-form-field-hover: #262626 !important;
  --background-primary: #0e0e0e !important;
  --background-secondary: #0e0e0e !important;
  --background-secondary-alt: #333333 !important;
  --bases-cards-background: #0e0e0e !important;
  --bases-cards-shadow: 0 0 0 1px #333333 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #363636 !important;
  --bases-embed-border-color: #333333 !important;
  --bases-group-heading-property-color: #bbbbbb !important;
  --bases-table-border-color: #333333 !important;
  --bases-table-cell-background-active: #0e0e0e !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #4a4a4a !important;
  --bases-table-header-background: #0e0e0e !important;
  --bases-table-header-color: #bbbbbb !important;
  --bases-table-summary-background: #0e0e0e !important;
  --blur-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent)) !important;
  --body-font: "Inter" !important;
  --bodyFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-background: #0e0e0e !important;
  --button-border: #0e0e0e !important;
  --button-text: #dddddd !important;
  --canvas-background: #0e0e0e !important;
  --canvas-dot-pattern: #333333 !important;
  --caret-color: #ffffff !important;
  --checkbox-border-color-hover: #bbbbbb !important;
  --checkbox-marker-color: #0e0e0e !important;
  --checklist-done-color: #bbbbbb !important;
  --code-background: #0e0e0e !important;
  --code-border-color: #333333 !important;
  --code-function: rgb(235, 203, 139) !important;
  --code-important: rgb(208, 135, 112) !important;
  --code-keyword: rgb(180, 142, 173) !important;
  --code-normal: #dddddd !important;
  --code-property: rgb(143, 188, 187) !important;
  --code-punctuation: #999999 !important;
  --code-string: rgb(163, 190, 140) !important;
  --code-tag: rgb(191, 97, 106) !important;
  --code-value: rgb(180, 142, 173) !important;
  --codeFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --color-base-00: #0e0e0e !important;
  --color-base-05: #343434 !important;
  --color-base-100: #ffffff !important;
  --color-base-20: #1a1a1a !important;
  --color-base-25: #262626 !important;
  --color-base-30: #333333 !important;
  --color-base-35: #363636 !important;
  --color-base-40: #4a4a4a !important;
  --color-base-70: #bbbbbb !important;
  --color-base-80: #dddddd !important;
  --color-base-90: #eeeeee !important;
  --dark: #ffffff !important;
  --darkgray: #ffffff !important;
  --divider-color: #333333 !important;
  --dropdown-background: #333333 !important;
  --dropdown-background-hover: #363636 !important;
  --embed-block-shadow-hover: 0 0 0 1px #333333, inset 0 0 0 1px #333333 !important;
  --file-header-background: #0e0e0e !important;
  --file-header-background-focused: #0e0e0e !important;
  --file-header-font: "Inter" !important;
  --flair-background: #333333 !important;
  --flair-color: #ffffff !important;
  --focus-border: rgb(180, 142, 173) !important;
  --font-mermaid: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Inter", Arial' !important;
  --font-text: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Inter" !important;
  --footnote-divider-color: #333333 !important;
  --footnote-id-color: #bbbbbb !important;
  --frost0: rgb(143, 188, 187) !important;
  --frost0_x: 143, 188, 187 !important;
  --frost2: rgb(129, 161, 193) !important;
  --frost2_x: 129, 161, 193 !important;
  --graph-line: #363636 !important;
  --graph-node: #bbbbbb !important;
  --graph-text: #ffffff !important;
  --gray: #bbbbbb !important;
  --green: rgb(163, 190, 140) !important;
  --green_x: 163, 190, 140 !important;
  --h1-color: rgb(191, 97, 106) !important;
  --h1-font: "Inter" !important;
  --h2-color: rgb(235, 203, 139) !important;
  --h2-font: "Inter" !important;
  --h3-color: rgb(163, 190, 140) !important;
  --h3-font: "Inter" !important;
  --h4-color: rgb(180, 142, 173) !important;
  --h4-font: "Inter" !important;
  --h5-color: rgb(143, 188, 187) !important;
  --h5-font: "Inter" !important;
  --h6-color: rgb(129, 161, 193) !important;
  --h6-font: "Inter" !important;
  --header-font: "Inter" !important;
  --headerFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --hr-color: #333333 !important;
  --icon-color: #bbbbbb !important;
  --icon-color-focused: #ffffff !important;
  --icon-color-hover: #bbbbbb !important;
  --inline-title-color: rgb(191, 97, 106) !important;
  --inline-title-font: "Inter" !important;
  --interactive-hover: #363636 !important;
  --interactive-normal: #333333 !important;
  --light: #0e0e0e !important;
  --lightgray: #0e0e0e !important;
  --list-marker-color-hover: #bbbbbb !important;
  --menu-background: #0e0e0e !important;
  --menu-border-color: #363636 !important;
  --metadata-border-color: #333333 !important;
  --metadata-divider-color: #333333 !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-text-color: #bbbbbb !important;
  --metadata-label-text-color-hover: #bbbbbb !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4a4a4a !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #363636 !important;
  --modal-background: #0e0e0e !important;
  --modal-border-color: #4a4a4a !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed-hover: #bbbbbb !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-item-color: #bbbbbb !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-tag-color-active: #bbbbbb !important;
  --nav-tag-color-hover: #bbbbbb !important;
  --orange: rgb(208, 135, 112) !important;
  --orange_x: 208, 135, 112 !important;
  --pdf-background: #0e0e0e !important;
  --pdf-page-background: #0e0e0e !important;
  --pdf-shadow: 0 0 0 1px #333333 !important;
  --pdf-sidebar-background: #0e0e0e !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #333333 !important;
  --pill-border-color: #333333 !important;
  --pill-border-color-hover: #363636 !important;
  --pill-color: #bbbbbb !important;
  --pill-color-hover: #ffffff !important;
  --prompt-background: #0e0e0e !important;
  --prompt-border-color: #4a4a4a !important;
  --purple: rgb(180, 142, 173) !important;
  --purple_x: 180, 142, 173 !important;
  --raised-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent)) !important;
  --red: rgb(191, 97, 106) !important;
  --red_x: 191, 97, 106 !important;
  --ribbon-background: #0e0e0e !important;
  --ribbon-background-collapsed: #0e0e0e !important;
  --search-clear-button-color: #bbbbbb !important;
  --search-icon-color: #bbbbbb !important;
  --search-result-background: #0e0e0e !important;
  --selection-background: rgba(163, 190, 140, 0.35) !important;
  --setting-group-heading-color: #ffffff !important;
  --setting-items-border-color: #333333 !important;
  --slider-thumb-border-color: #363636 !important;
  --slider-track-background: #333333 !important;
  --status-bar-background: #343434 !important;
  --status-bar-border-color: #333333 !important;
  --status-bar-foreground: #ffffff !important;
  --status-bar-text-color: #bbbbbb !important;
  --style-settings-section-accent-colors: "Accent Colors" !important;
  --style-settings-section-buttons: "Buttons" !important;
  --style-settings-section-colors: "Base Colors" !important;
  --style-settings-section-headings: "Headings" !important;
  --style-settings-section-selection-focus: "Selections and Focus" !important;
  --style-settings-section-status-bar: "Status Bar" !important;
  --style-settings-section-text-colors: "Text Colors" !important;
  --style-settings-var-button-background: [color, Button Background Color, #0e0e0e] !important;
  --style-settings-var-button-border: [color, Button Border Color, #0e0e0e] !important;
  --style-settings-var-button-text: [color, Button Text Color, #dddddd] !important;
  --style-settings-var-color-base-00: [color, Base Dark, #0e0e0e] !important;
  --style-settings-var-color-base-05: [color, Darker Secondary, #343434] !important;
  --style-settings-var-color-base-10: [color, Slightly Lighter Dark, #242424] !important;
  --style-settings-var-color-base-100: [color, Pure White, #ffffff] !important;
  --style-settings-var-color-base-20: [color, Even Lighter Dark, #1a1a1a] !important;
  --style-settings-var-color-base-25: [color, Soft Highlight Color, #262626] !important;
  --style-settings-var-color-base-30: [color, Dark Gray, #333333] !important;
  --style-settings-var-color-base-35: [color, Medium Dark, #363636] !important;
  --style-settings-var-color-base-40: [color, Mid-Tone Gray, #4a4a4a] !important;
  --style-settings-var-color-base-50: [color, Light Gray, #666666] !important;
  --style-settings-var-color-base-60: [color, Lighter Gray, #999999] !important;
  --style-settings-var-color-base-70: [color, Almost White Gray, #bbbbbb] !important;
  --style-settings-var-color-base-80: [color, Very Light Gray, #dddddd] !important;
  --style-settings-var-color-base-90: [color, Almost White, #eeeeee] !important;
  --style-settings-var-focus-border: [color, Focus Border Color, rgb(180, 142, 173)] !important;
  --style-settings-var-frost0_x: [color, Cyan Frost, #8fbcbb] !important;
  --style-settings-var-frost2_x: [color, Blue Frost, #81a1c1] !important;
  --style-settings-var-green_x: [color, Green Base, #a3be8c] !important;
  --style-settings-var-h1-color: [color, Heading 1 Color, rgb(191, 97, 106)] !important;
  --style-settings-var-h2-color: [color, Heading 2 Color, rgb(235, 203, 139)] !important;
  --style-settings-var-h3-color: [color, Heading 3 Color, rgb(163, 190, 140)] !important;
  --style-settings-var-h4-color: [color, Heading 4 Color, rgb(180, 142, 173)] !important;
  --style-settings-var-h5-color: [color, Heading 5 Color, rgb(143, 188, 187)] !important;
  --style-settings-var-h6-color: [color, Heading 6 Color, rgb(129, 161, 193)] !important;
  --style-settings-var-orange_x: [color, Orange Base, #d08770] !important;
  --style-settings-var-purple_x: [color, Purple Base, #b48ead] !important;
  --style-settings-var-red_x: [color, Red Base, #bf616a] !important;
  --style-settings-var-selection-background: [color, Selection Background Color, rgba(163, 190, 140, 0.25)] !important;
  --style-settings-var-status-bar-background: [color, Status Bar Background, #343434] !important;
  --style-settings-var-status-bar-foreground: [color, Status Bar Foreground, #ffffff] !important;
  --style-settings-var-text-error: [color, Error Text Color, rgb(191, 97, 106)] !important;
  --style-settings-var-text-primary: [color, Primary Text Color, #dddddd] !important;
  --style-settings-var-text-secondary: [color, Secondary Text Color, #666666] !important;
  --style-settings-var-text-warning: [color, Warning Text Color, rgb(235, 203, 139)] !important;
  --style-settings-var-yellow_x: [color, Yellow Base, #ebcb8b] !important;
  --suggestion-background: #0e0e0e !important;
  --tab-background-active: #0e0e0e !important;
  --tab-container-background: #0e0e0e !important;
  --tab-divider-color: #363636 !important;
  --tab-outline-color: #333333 !important;
  --tab-switcher-background: #0e0e0e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0e0e0e, transparent) !important;
  --tab-text-color-active: #bbbbbb !important;
  --tab-text-color-focused: #bbbbbb !important;
  --tab-text-color-focused-active: #bbbbbb !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --table-add-button-border-color: #333333 !important;
  --table-border-color: #333333 !important;
  --table-header-border-color: #333333 !important;
  --table-header-color: #ffffff !important;
  --text-error: rgb(191, 97, 106) !important;
  --text-muted: #bbbbbb !important;
  --text-normal: #ffffff !important;
  --text-primary: #dddddd !important;
  --text-secondary: #666666 !important;
  --text-warning: rgb(235, 203, 139) !important;
  --titleFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #0e0e0e !important;
  --titlebar-background-focused: #242424 !important;
  --titlebar-border-color: #333333 !important;
  --titlebar-text-color: #bbbbbb !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
  --yellow: rgb(235, 203, 139) !important;
  --yellow_x: 235, 203, 139 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(14, 14, 14);
  color: rgb(221, 221, 221);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(14, 14, 14);
  color: rgb(221, 221, 221);
}

html body .bases-table thead th {
  border-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

html body .canvas-node {
  border-color: rgb(221, 221, 221);
}

html body .canvas-node-content {
  color: rgb(221, 221, 221);
}

html body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html body .canvas-node-group {
  border-color: rgb(221, 221, 221);
}

html body .canvas-sidebar {
  background-color: rgb(14, 14, 14);
  border-color: rgb(221, 221, 221);
}

html body .note-properties {
  border-color: rgb(51, 51, 51);
}

html body .note-properties-key {
  color: rgb(187, 187, 187);
}

html body .note-properties-row {
  border-color: rgb(187, 187, 187);
}

html body .note-properties-value {
  color: rgb(187, 187, 187);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(14, 14, 14);
  color: rgb(221, 221, 221);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 51, 51);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(14, 14, 14);
  border-left-color: rgb(51, 51, 51);
  color: rgb(221, 221, 221);
}

html body div#quartz-root {
  background-color: rgb(14, 14, 14);
  color: rgb(221, 221, 221);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 255, 255);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > em, html em {
  color: rgb(255, 255, 255);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > i, html i {
  color: rgb(255, 255, 255);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  color: rgb(255, 255, 255);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body del {
  color: rgb(255, 255, 255);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body h1.article-title {
  color: rgb(255, 255, 255);
}

html body p {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration-color: rgb(187, 187, 187);
}`,
    links: `html body a.external, html footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html body dd {
  color: rgb(255, 255, 255);
}

html body dt {
  color: rgb(255, 255, 255);
}

html body ol > li {
  color: rgb(255, 255, 255);
}

html body ol.overflow {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html body ul > li {
  color: rgb(255, 255, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    blockquotes: `html body blockquote {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html body table {
  color: rgb(255, 255, 255);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

html body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

html body th {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}`,
    code: `html body code {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

html body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html body pre:has(> code) {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    images: `html body audio {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html body figcaption {
  color: rgb(221, 221, 221);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html body img {
  border-bottom-color: rgb(191, 97, 106);
  border-left-color: rgb(191, 97, 106);
  border-right-color: rgb(191, 97, 106);
  border-top-color: rgb(191, 97, 106);
}

html body video {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude {
  border-bottom-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html body .transclude-inner {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
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
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(74, 74, 74);
  border-left-color: rgb(74, 74, 74);
  border-right-color: rgb(74, 74, 74);
  border-top-color: rgb(74, 74, 74);
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(74, 74, 74);
  border-left-color: rgb(74, 74, 74);
  border-right-color: rgb(74, 74, 74);
  border-top-color: rgb(74, 74, 74);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body h1 {
  color: rgb(191, 97, 106);
  font-family: Inter;
}

html body h2 {
  color: rgb(235, 203, 139);
  font-family: Inter;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(191, 97, 106);
  font-family: Inter;
}

html body h3 {
  color: rgb(163, 190, 140);
  font-family: Inter;
}

html body h4 {
  color: rgb(180, 142, 173);
  font-family: Inter;
}

html body h5 {
  color: rgb(143, 188, 187);
  font-family: Inter;
}

html body h6 {
  color: rgb(129, 161, 193);
  font-family: Inter;
}

html body hr {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
}

html body ::-webkit-scrollbar-track {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(187, 187, 187);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(187, 187, 187);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    footer: `html body footer {
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(255, 255, 255);
}

html body footer ul li a {
  color: rgb(255, 255, 255);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(221, 221, 221);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(187, 187, 187);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(187, 187, 187);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html body li.section-li > .section .meta {
  color: rgb(187, 187, 187);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(187, 187, 187);
}

html body ul.section-ul {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .darkmode svg {
  color: rgb(187, 187, 187);
  stroke: rgb(187, 187, 187);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .breadcrumb-element p {
  font-family: Inter;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

html body .metadata {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(187, 187, 187);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(52, 52, 52);
}

html body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

html body abbr {
  color: rgb(255, 255, 255);
}

html body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body input[type=text] {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body kbd {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

html body progress {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html body sub {
  color: rgb(255, 255, 255);
}

html body summary {
  color: rgb(255, 255, 255);
}

html body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
};
