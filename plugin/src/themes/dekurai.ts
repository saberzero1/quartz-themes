import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dekurai", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 160;
  --accent-l: 26%;
  --accent-s: 73%;
  --background-modifier-active-hover: rgba(18, 115, 82, 0.1);
  --background-modifier-border: rgb(61, 61, 67);
  --background-modifier-form-field: rgb(26, 34, 41);
  --background-modifier-form-field-hover: rgb(26, 34, 41);
  --background-modifier-hover: rgba(34, 142, 195, 0.173);
  --background-primary: rgb(20, 26, 31);
  --background-primary-alt: rgb(16, 21, 25);
  --background-secondary: rgb(18, 24, 28);
  --background-secondary-alt: rgb(14, 19, 21);
  --bases-cards-background: rgb(20, 26, 31);
  --bases-cards-cover-background: rgb(16, 21, 25);
  --bases-cards-shadow: 0 0 0 1px rgb(61, 61, 67);
  --bases-embed-border-color: rgb(61, 61, 67);
  --bases-group-heading-property-color: rgb(167, 171, 175);
  --bases-table-border-color: rgb(61, 61, 67);
  --bases-table-cell-background-active: rgb(20, 26, 31);
  --bases-table-cell-background-disabled: rgb(16, 21, 25);
  --bases-table-cell-background-selected: rgba(18, 115, 82, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(22, 105, 84);
  --bases-table-group-background: rgb(16, 21, 25);
  --bases-table-header-background: rgb(20, 26, 31);
  --bases-table-header-background-hover: rgba(34, 142, 195, 0.173);
  --bases-table-header-color: rgb(167, 171, 175);
  --bases-table-summary-background: rgb(20, 26, 31);
  --bases-table-summary-background-hover: rgba(34, 142, 195, 0.173);
  --blockquote-border-color: rgb(0, 162, 255);
  --blockquote-border-thickness: 5px;
  --blockquote-color: #3eb4bf;
  --blockquote-font-style: italic;
  --blur-background: color-mix(in srgb, rgb(14, 19, 21) 65%, transparent) linear-gradient(rgb(14, 19, 21), color-mix(in srgb, rgb(14, 19, 21) 65%, transparent));
  --bold-color: white;
  --bold-weight: 600;
  --canvas-background: rgb(20, 26, 31);
  --canvas-dot-pattern: rgb(14, 19, 21);
  --checkbox-border-color-hover: rgb(167, 171, 175);
  --checkbox-color: rgb(22, 105, 84);
  --checkbox-color-hover: rgb(31, 147, 118);
  --checkbox-marker-color: rgb(20, 26, 31);
  --checklist-done-color: rgb(167, 171, 175);
  --code-background: rgb(16, 21, 25);
  --code-border-color: rgb(61, 61, 67);
  --code-bracket-background: rgba(34, 142, 195, 0.173);
  --code-normal: #7095c2;
  --code-punctuation: rgb(167, 171, 175);
  --collapse-icon-color-collapsed: rgb(12, 192, 132);
  --color-accent: rgb(18, 115, 82);
  --color-accent-1: rgb(20, 133, 90);
  --color-accent-2: rgb(20, 153, 98);
  --color-accent-hsl: 160, 73%, 26%;
  --color-base-00: rgb(20, 26, 31);
  --color-base-10: rgb(16, 21, 25);
  --color-base-20: rgb(18, 24, 28);
  --color-base-25: rgb(26, 34, 41);
  --color-base-30: rgb(14, 19, 21);
  --color-base-70: rgb(167, 171, 175);
  --default-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif;
  --divider-color: rgb(61, 61, 67);
  --divider-color-hover: rgb(22, 105, 84);
  --dropdown-background: rgb(14, 19, 21);
  --embed-block-shadow-hover: 0 0 0 1px rgb(61, 61, 67), inset 0 0 0 1px rgb(61, 61, 67);
  --embed-border-start: 2px solid rgb(22, 105, 84);
  --file-header-background: rgb(20, 26, 31);
  --file-header-background-focused: rgb(20, 26, 31);
  --file-header-font: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 52vw;
  --flair-background: rgb(14, 19, 21);
  --font-interface: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: rgb(61, 61, 67);
  --footnote-id-color: rgb(167, 171, 175);
  --footnote-input-background-active: rgba(34, 142, 195, 0.173);
  --graph-node: rgb(167, 171, 175);
  --graph-node-focused: rgb(12, 192, 132);
  --h1-color: rgb(76, 166, 230);
  --h2-color: #34daa5;
  --h3-color: rgb(54, 226, 226);
  --h4-color: #e3e363;
  --h5-color: rgb(233, 99, 99);
  --h6-color: rgb(224, 108, 199);
  --hr-color: rgb(61, 61, 67);
  --icon-color: rgb(167, 171, 175);
  --icon-color-active: rgb(12, 192, 132);
  --icon-color-hover: rgb(167, 171, 175);
  --interactive-accent: rgb(22, 105, 84);
  --interactive-accent-hover: rgb(31, 147, 118);
  --interactive-accent-hsl: 160, 73%, 26%;
  --interactive-normal: rgb(14, 19, 21);
  --link-color: rgb(12, 182, 157);
  --link-color-hover: rgb(6, 239, 204);
  --link-external-color: rgb(12, 182, 157);
  --link-external-color-hover: rgb(6, 239, 204);
  --link-unresolved-color: rgb(12, 182, 157);
  --link-unresolved-decoration-color: rgba(18, 115, 82, 0.3);
  --list-marker-color-collapsed: rgb(12, 192, 132);
  --list-marker-color-hover: rgb(167, 171, 175);
  --menu-background: rgb(18, 24, 28);
  --metadata-border-color: rgb(61, 61, 67);
  --metadata-divider-color: rgb(61, 61, 67);
  --metadata-input-background-active: rgba(34, 142, 195, 0.173);
  --metadata-input-font: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-background-active: rgba(34, 142, 195, 0.173);
  --metadata-label-font: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(167, 171, 175);
  --metadata-label-text-color-hover: rgb(167, 171, 175);
  --metadata-property-background-active: rgba(34, 142, 195, 0.173);
  --modal-background: rgb(20, 26, 31);
  --modal-radius: 10px;
  --nav-collapse-icon-color: #61afef;
  --nav-collapse-icon-color-collapsed: #61afef;
  --nav-heading-color-collapsed-hover: rgb(167, 171, 175);
  --nav-item-background-active: rgba(34, 142, 195, 0.173);
  --nav-item-background-hover: rgba(34, 142, 195, 0.173);
  --nav-item-background-selected: rgba(18, 115, 82, 0.15);
  --nav-item-color: rgb(167, 171, 175);
  --nav-item-color-highlighted: rgb(12, 192, 132);
  --nav-tag-color-active: rgb(167, 171, 175);
  --nav-tag-color-hover: rgb(167, 171, 175);
  --pdf-background: rgb(20, 26, 31);
  --pdf-page-background: rgb(20, 26, 31);
  --pdf-shadow: 0 0 0 1px rgb(61, 61, 67);
  --pdf-sidebar-background: rgb(20, 26, 31);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(61, 61, 67);
  --pill-border-color: rgb(61, 61, 67);
  --pill-color: rgb(167, 171, 175);
  --pill-color-remove-hover: rgb(12, 192, 132);
  --prompt-background: rgb(20, 26, 31);
  --radius-l: 10px;
  --raised-background: color-mix(in srgb, rgb(14, 19, 21) 65%, transparent) linear-gradient(rgb(14, 19, 21), color-mix(in srgb, rgb(14, 19, 21) 65%, transparent));
  --ribbon-background: rgb(18, 24, 28);
  --ribbon-background-collapsed: rgb(20, 26, 31);
  --scrollbar-radius: 10px;
  --search-clear-button-color: rgb(167, 171, 175);
  --search-icon-color: rgb(167, 171, 175);
  --search-match-color: #ffff00;
  --search-match-color-other: #ffff00;
  --search-result-background: rgb(20, 26, 31);
  --setting-items-background: rgb(16, 21, 25);
  --setting-items-border-color: rgb(61, 61, 67);
  --setting-items-radius: 10px;
  --slider-track-background: rgb(61, 61, 67);
  --status-bar-background: rgb(18, 24, 28);
  --status-bar-border-color: rgb(61, 61, 67);
  --status-bar-text-color: rgb(167, 171, 175);
  --suggestion-background: rgb(20, 26, 31);
  --tab-background-active: rgb(20, 26, 31);
  --tab-container-background: rgb(18, 24, 28);
  --tab-outline-color: rgb(61, 61, 67);
  --tab-switcher-background: rgb(18, 24, 28);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(18, 24, 28), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(18, 115, 82);
  --tab-text-color-active: rgb(167, 171, 175);
  --tab-text-color-focused: rgb(167, 171, 175);
  --tab-text-color-focused-active: rgb(167, 171, 175);
  --tab-text-color-focused-active-current: rgb(20, 230, 160);
  --tab-text-color-focused-highlighted: rgb(12, 192, 132);
  --table-add-button-border-color: rgb(61, 61, 67);
  --table-border-color: rgb(61, 61, 67);
  --table-drag-handle-background-active: rgb(22, 105, 84);
  --table-drag-handle-color-active: rgb(250, 250, 250);
  --table-header-border-color: rgb(61, 61, 67);
  --table-selection: rgba(18, 115, 82, 0.1);
  --table-selection-border-color: rgb(22, 105, 84);
  --tag-background: #228ec31a;
  --tag-background-hover: #228ec333;
  --tag-border-color: #228ec326;
  --tag-border-color-hover: #228ec326;
  --tag-color: rgb(10, 209, 235);
  --tag-color-hover: rgb(49, 223, 246);
  --tag-padding-x: 0.55em;
  --text-accent: rgb(12, 192, 132);
  --text-accent-hover: rgb(39, 241, 174);
  --text-highlight-bg: #075dc7;
  --text-muted: rgb(167, 171, 175);
  --text-on-accent: rgb(250, 250, 250);
  --text-selection: rgb(20, 47, 66);
  --titlebar-background: rgb(14, 19, 21);
  --titlebar-background-focused: rgb(14, 19, 21);
  --titlebar-border-color: rgb(61, 61, 67);
  --titlebar-text-color: rgb(167, 171, 175);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(18, 24, 28);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(20, 26, 31);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(18, 24, 28);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(61, 61, 67);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(18, 24, 28);
  border-left-color: rgb(61, 61, 67);
}

body div#quartz-root {
  background-color: rgb(20, 26, 31);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgb(7, 93, 199);
}

body p {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(167, 171, 175) none 0px;
  text-decoration: rgb(167, 171, 175);
  text-decoration-color: rgb(167, 171, 175);
}`,
    links: `body a.external, footer a {
  color: rgb(12, 182, 157);
  outline: rgb(12, 182, 157) none 0px;
  text-decoration: underline rgb(12, 182, 157);
  text-decoration-color: rgb(12, 182, 157);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(12, 182, 157);
  outline: rgb(12, 182, 157) none 0px;
  text-decoration: underline rgb(12, 182, 157);
  text-decoration-color: rgb(12, 182, 157);
}

body a.internal.broken {
  color: rgb(12, 182, 157);
  outline: rgb(12, 182, 157) none 0px;
  text-decoration: underline rgba(18, 115, 82, 0.3);
  text-decoration-color: rgba(18, 115, 82, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(20, 26, 31);
}

body ul.overflow {
  background-color: rgb(20, 26, 31);
}`,
    blockquotes: `body blockquote {
  font-style: italic;
}`,
    tables: `body td {
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
  border-top-color: rgb(61, 61, 67);
}

body th {
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
  border-top-color: rgb(61, 61, 67);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(16, 21, 25);
  border-bottom-color: rgb(25, 31, 36);
  border-left-color: rgb(25, 31, 36);
  border-right-color: rgb(25, 31, 36);
  border-top-color: rgb(25, 31, 36);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(16, 21, 25);
  border-bottom-color: rgb(25, 31, 36);
  border-left-color: rgb(25, 31, 36);
  border-right-color: rgb(25, 31, 36);
  border-top-color: rgb(25, 31, 36);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    embeds: `body .file-embed {
  background-color: rgb(16, 21, 25);
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
}

body .transclude {
  border-left-color: rgb(22, 105, 84);
}

body .transclude-inner {
  border-left-color: rgb(22, 105, 84);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(167, 171, 175);
  text-decoration: line-through rgb(167, 171, 175);
  text-decoration-color: rgb(167, 171, 175);
}`,
    search: `body .search > .search-button {
  background-color: rgb(26, 34, 41);
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
  border-top-color: rgb(61, 61, 67);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(20, 26, 31);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.173);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(18, 24, 28);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(34, 142, 195, 0.173);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.173);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgba(34, 142, 195, 0.15);
  border-left-color: rgba(34, 142, 195, 0.15);
  border-right-color: rgba(34, 142, 195, 0.15);
  border-top-color: rgba(34, 142, 195, 0.15);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(10, 209, 235);
}

body h1 {
  color: rgb(77, 166, 230);
}

body h2 {
  color: rgb(52, 218, 165);
}

body h3 {
  color: rgb(54, 226, 226);
}

body h4 {
  color: rgb(227, 227, 99);
}

body h5 {
  color: rgb(233, 99, 99);
}

body h6 {
  color: rgb(224, 108, 199);
}

body hr {
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}

body ::-webkit-scrollbar-corner {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}

body ::-webkit-scrollbar-track {
  background: rgb(20, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 26, 31);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(167, 171, 175);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(167, 171, 175);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(167, 171, 175);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(34, 142, 195, 0.173);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
  color: rgb(167, 171, 175);
}`,
    footer: `body footer {
  background-color: rgb(18, 24, 28);
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
  border-top-color: rgb(61, 61, 67);
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(167, 171, 175);
  text-decoration: rgb(167, 171, 175);
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(167, 171, 175);
  text-decoration: rgb(167, 171, 175);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(167, 171, 175);
  text-decoration: rgb(167, 171, 175);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
  color: rgb(167, 171, 175);
}

body .darkmode svg {
  color: rgb(167, 171, 175);
  stroke: rgb(167, 171, 175);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
  color: rgb(167, 171, 175);
}

body .breadcrumb-element p {
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(61, 61, 67);
  border-left-color: rgb(61, 61, 67);
  border-right-color: rgb(61, 61, 67);
  border-top-color: rgb(61, 61, 67);
  color: rgb(167, 171, 175);
}

body .metadata-properties {
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
  color: rgb(167, 171, 175);
}

body .navigation-progress {
  background-color: rgb(18, 24, 28);
}

body .page-header h2.page-title {
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  border-bottom-color: rgb(167, 171, 175);
  border-left-color: rgb(167, 171, 175);
  border-right-color: rgb(167, 171, 175);
  border-top-color: rgb(167, 171, 175);
  color: rgb(167, 171, 175);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
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
