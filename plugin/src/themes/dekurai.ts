import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dekurai", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 160 !important;
  --accent-l: 26% !important;
  --accent-s: 73% !important;
  --background-modifier-active-hover: rgba(18, 115, 82, 0.1) !important;
  --background-modifier-border: rgb(61, 61, 67) !important;
  --background-modifier-form-field: rgb(26, 34, 41) !important;
  --background-modifier-form-field-hover: rgb(26, 34, 41) !important;
  --background-modifier-hover: rgba(34, 142, 195, 0.173) !important;
  --background-primary: rgb(20, 26, 31) !important;
  --background-primary-alt: rgb(16, 21, 25) !important;
  --background-secondary: rgb(18, 24, 28) !important;
  --background-secondary-alt: rgb(14, 19, 21) !important;
  --bases-cards-background: rgb(20, 26, 31) !important;
  --bases-cards-cover-background: rgb(16, 21, 25) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(61, 61, 67) !important;
  --bases-embed-border-color: rgb(61, 61, 67) !important;
  --bases-group-heading-property-color: rgb(167, 171, 175) !important;
  --bases-table-border-color: rgb(61, 61, 67) !important;
  --bases-table-cell-background-active: rgb(20, 26, 31) !important;
  --bases-table-cell-background-disabled: rgb(16, 21, 25) !important;
  --bases-table-cell-background-selected: rgba(18, 115, 82, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(22, 105, 84) !important;
  --bases-table-group-background: rgb(16, 21, 25) !important;
  --bases-table-header-background: rgb(20, 26, 31) !important;
  --bases-table-header-background-hover: rgba(34, 142, 195, 0.173) !important;
  --bases-table-header-color: rgb(167, 171, 175) !important;
  --bases-table-summary-background: rgb(20, 26, 31) !important;
  --bases-table-summary-background-hover: rgba(34, 142, 195, 0.173) !important;
  --blockquote-border-color: rgb(0, 162, 255) !important;
  --blockquote-border-thickness: 5px !important;
  --blockquote-color: #3eb4bf !important;
  --blockquote-font-style: italic !important;
  --blur-background: color-mix(in srgb, rgb(14, 19, 21) 65%, transparent) linear-gradient(rgb(14, 19, 21), color-mix(in srgb, rgb(14, 19, 21) 65%, transparent)) !important;
  --bodyFont: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: white !important;
  --bold-weight: 600 !important;
  --canvas-background: rgb(20, 26, 31) !important;
  --canvas-dot-pattern: rgb(14, 19, 21) !important;
  --checkbox-border-color-hover: rgb(167, 171, 175) !important;
  --checkbox-color: rgb(22, 105, 84) !important;
  --checkbox-color-hover: rgb(31, 147, 118) !important;
  --checkbox-marker-color: rgb(20, 26, 31) !important;
  --checklist-done-color: rgb(167, 171, 175) !important;
  --code-background: rgb(16, 21, 25) !important;
  --code-border-color: rgb(61, 61, 67) !important;
  --code-bracket-background: rgba(34, 142, 195, 0.173) !important;
  --code-normal: #7095c2 !important;
  --code-punctuation: rgb(167, 171, 175) !important;
  --codeFont: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: rgb(12, 192, 132) !important;
  --color-accent: rgb(18, 115, 82) !important;
  --color-accent-1: rgb(20, 133, 90) !important;
  --color-accent-2: rgb(20, 153, 98) !important;
  --color-accent-hsl: 160, 73%, 26% !important;
  --color-base-00: rgb(20, 26, 31) !important;
  --color-base-10: rgb(16, 21, 25) !important;
  --color-base-20: rgb(18, 24, 28) !important;
  --color-base-25: rgb(26, 34, 41) !important;
  --color-base-30: rgb(14, 19, 21) !important;
  --color-base-70: rgb(167, 171, 175) !important;
  --dark: rgb(167, 171, 175) !important;
  --darkgray: rgb(167, 171, 175) !important;
  --default-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif !important;
  --divider-color: rgb(61, 61, 67) !important;
  --divider-color-hover: rgb(22, 105, 84) !important;
  --dropdown-background: rgb(14, 19, 21) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(61, 61, 67), inset 0 0 0 1px rgb(61, 61, 67) !important;
  --embed-border-start: 2px solid rgb(22, 105, 84) !important;
  --file-header-background: rgb(20, 26, 31) !important;
  --file-header-background-focused: rgb(20, 26, 31) !important;
  --file-header-font: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 52vw !important;
  --flair-background: rgb(14, 19, 21) !important;
  --font-interface: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: rgb(61, 61, 67) !important;
  --footnote-id-color: rgb(167, 171, 175) !important;
  --footnote-input-background-active: rgba(34, 142, 195, 0.173) !important;
  --graph-node: rgb(167, 171, 175) !important;
  --graph-node-focused: rgb(12, 192, 132) !important;
  --gray: rgb(167, 171, 175) !important;
  --h1-color: rgb(76, 166, 230) !important;
  --h2-color: #34daa5 !important;
  --h3-color: rgb(54, 226, 226) !important;
  --h4-color: #e3e363 !important;
  --h5-color: rgb(233, 99, 99) !important;
  --h6-color: rgb(224, 108, 199) !important;
  --headerFont: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: #075dc7 !important;
  --hr-color: rgb(61, 61, 67) !important;
  --icon-color: rgb(167, 171, 175) !important;
  --icon-color-active: rgb(12, 192, 132) !important;
  --icon-color-hover: rgb(167, 171, 175) !important;
  --interactive-accent: rgb(22, 105, 84) !important;
  --interactive-accent-hover: rgb(31, 147, 118) !important;
  --interactive-accent-hsl: 160, 73%, 26% !important;
  --interactive-normal: rgb(14, 19, 21) !important;
  --light: rgb(20, 26, 31) !important;
  --lightgray: rgb(18, 24, 28) !important;
  --link-color: rgb(12, 182, 157) !important;
  --link-color-hover: rgb(6, 239, 204) !important;
  --link-external-color: rgb(12, 182, 157) !important;
  --link-external-color-hover: rgb(6, 239, 204) !important;
  --link-unresolved-color: rgb(12, 182, 157) !important;
  --link-unresolved-decoration-color: rgba(18, 115, 82, 0.3) !important;
  --list-marker-color-collapsed: rgb(12, 192, 132) !important;
  --list-marker-color-hover: rgb(167, 171, 175) !important;
  --menu-background: rgb(18, 24, 28) !important;
  --metadata-border-color: rgb(61, 61, 67) !important;
  --metadata-divider-color: rgb(61, 61, 67) !important;
  --metadata-input-background-active: rgba(34, 142, 195, 0.173) !important;
  --metadata-input-font: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-background-active: rgba(34, 142, 195, 0.173) !important;
  --metadata-label-font: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(167, 171, 175) !important;
  --metadata-label-text-color-hover: rgb(167, 171, 175) !important;
  --metadata-property-background-active: rgba(34, 142, 195, 0.173) !important;
  --modal-background: rgb(20, 26, 31) !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: #61afef !important;
  --nav-collapse-icon-color-collapsed: #61afef !important;
  --nav-heading-color-collapsed-hover: rgb(167, 171, 175) !important;
  --nav-item-background-active: rgba(34, 142, 195, 0.173) !important;
  --nav-item-background-hover: rgba(34, 142, 195, 0.173) !important;
  --nav-item-background-selected: rgba(18, 115, 82, 0.15) !important;
  --nav-item-color: rgb(167, 171, 175) !important;
  --nav-item-color-highlighted: rgb(12, 192, 132) !important;
  --nav-tag-color-active: rgb(167, 171, 175) !important;
  --nav-tag-color-hover: rgb(167, 171, 175) !important;
  --pdf-background: rgb(20, 26, 31) !important;
  --pdf-page-background: rgb(20, 26, 31) !important;
  --pdf-shadow: 0 0 0 1px rgb(61, 61, 67) !important;
  --pdf-sidebar-background: rgb(20, 26, 31) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(61, 61, 67) !important;
  --pill-border-color: rgb(61, 61, 67) !important;
  --pill-color: rgb(167, 171, 175) !important;
  --pill-color-remove-hover: rgb(12, 192, 132) !important;
  --prompt-background: rgb(20, 26, 31) !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, rgb(14, 19, 21) 65%, transparent) linear-gradient(rgb(14, 19, 21), color-mix(in srgb, rgb(14, 19, 21) 65%, transparent)) !important;
  --ribbon-background: rgb(18, 24, 28) !important;
  --ribbon-background-collapsed: rgb(20, 26, 31) !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: rgb(167, 171, 175) !important;
  --search-icon-color: rgb(167, 171, 175) !important;
  --search-match-color: #ffff00 !important;
  --search-match-color-other: #ffff00 !important;
  --search-result-background: rgb(20, 26, 31) !important;
  --secondary: rgb(12, 192, 132) !important;
  --setting-items-background: rgb(16, 21, 25) !important;
  --setting-items-border-color: rgb(61, 61, 67) !important;
  --setting-items-radius: 10px !important;
  --slider-track-background: rgb(61, 61, 67) !important;
  --status-bar-background: rgb(18, 24, 28) !important;
  --status-bar-border-color: rgb(61, 61, 67) !important;
  --status-bar-text-color: rgb(167, 171, 175) !important;
  --suggestion-background: rgb(20, 26, 31) !important;
  --tab-background-active: rgb(20, 26, 31) !important;
  --tab-container-background: rgb(18, 24, 28) !important;
  --tab-outline-color: rgb(61, 61, 67) !important;
  --tab-switcher-background: rgb(18, 24, 28) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(18, 24, 28), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(18, 115, 82) !important;
  --tab-text-color-active: rgb(167, 171, 175) !important;
  --tab-text-color-focused: rgb(167, 171, 175) !important;
  --tab-text-color-focused-active: rgb(167, 171, 175) !important;
  --tab-text-color-focused-active-current: rgb(20, 230, 160) !important;
  --tab-text-color-focused-highlighted: rgb(12, 192, 132) !important;
  --table-add-button-border-color: rgb(61, 61, 67) !important;
  --table-border-color: rgb(61, 61, 67) !important;
  --table-drag-handle-background-active: rgb(22, 105, 84) !important;
  --table-drag-handle-color-active: rgb(250, 250, 250) !important;
  --table-header-border-color: rgb(61, 61, 67) !important;
  --table-selection: rgba(18, 115, 82, 0.1) !important;
  --table-selection-border-color: rgb(22, 105, 84) !important;
  --tag-background: #228ec31a !important;
  --tag-background-hover: #228ec333 !important;
  --tag-border-color: #228ec326 !important;
  --tag-border-color-hover: #228ec326 !important;
  --tag-color: rgb(10, 209, 235) !important;
  --tag-color-hover: rgb(49, 223, 246) !important;
  --tag-padding-x: 0.55em !important;
  --tertiary: rgb(39, 241, 174) !important;
  --text-accent: rgb(12, 192, 132) !important;
  --text-accent-hover: rgb(39, 241, 174) !important;
  --text-highlight-bg: #075dc7 !important;
  --text-muted: rgb(167, 171, 175) !important;
  --text-on-accent: rgb(250, 250, 250) !important;
  --text-selection: rgb(20, 47, 66) !important;
  --textHighlight: #075dc7 !important;
  --titleFont: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(14, 19, 21) !important;
  --titlebar-background-focused: rgb(14, 19, 21) !important;
  --titlebar-border-color: rgb(61, 61, 67) !important;
  --titlebar-text-color: rgb(167, 171, 175) !important;
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
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  background-color: rgb(7, 93, 199);
}

html body p {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(167, 171, 175) none 0px;
  text-decoration: rgb(167, 171, 175);
  text-decoration-color: rgb(167, 171, 175);
}`,
    links: `html body a.external, html footer a {
  color: rgb(12, 182, 157);
  outline: rgb(12, 182, 157) none 0px;
  text-decoration: underline rgb(12, 182, 157);
  text-decoration-color: rgb(12, 182, 157);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(12, 182, 157);
  outline: rgb(12, 182, 157) none 0px;
  text-decoration: underline rgb(12, 182, 157);
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
    embeds: `html body .file-embed {
  background-color: rgb(16, 21, 25);
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
}

html body .transclude {
  border-left-color: rgb(22, 105, 84);
}

html body .transclude-inner {
  border-left-color: rgb(22, 105, 84);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(167, 171, 175);
  text-decoration: line-through rgb(167, 171, 175);
  text-decoration-color: rgb(167, 171, 175);
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
    scrollbars: `html body ::-webkit-scrollbar {
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
  text-decoration: rgb(167, 171, 175);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(167, 171, 175);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(167, 171, 175);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(34, 142, 195, 0.173);
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
  text-decoration: rgb(167, 171, 175);
}`,
    recentNotes: `html body .recent-notes > h3 {
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(167, 171, 175);
  text-decoration: rgb(167, 171, 175);
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
  text-decoration: rgb(167, 171, 175);
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
}`,
  },
  light: {},
};
