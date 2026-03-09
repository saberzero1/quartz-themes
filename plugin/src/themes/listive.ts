import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "listive",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["courgette", "karla", "open-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --alt-checkbox-bg-content: '';
  --background-accent: rgb(71, 74, 82);
  --background-accent-alt: rgb(45, 47, 52);
  --background-active-line: rgb(45, 47, 52);
  --background-modifier-backlinks: rgb(49, 52, 58);
  --background-modifier-border: rgb(88, 83, 80);
  --background-modifier-border-active: rgb(141, 133, 129);
  --background-modifier-cover: rgb(47, 49, 55);
  --background-primary: rgb(54, 57, 63);
  --background-primary-alt: #1a1a1a;
  --background-secondary: rgb(63, 67, 74);
  --background-secondary-alt: rgb(49, 52, 58);
  --bases-cards-background: rgb(54, 57, 63);
  --bases-cards-cover-background: #1a1a1a;
  --bases-cards-shadow: 0 0 0 1px rgb(88, 83, 80);
  --bases-embed-border-color: rgb(88, 83, 80);
  --bases-group-heading-property-size: 11px;
  --bases-table-border-color: rgb(88, 83, 80);
  --bases-table-cell-background-active: rgb(54, 57, 63);
  --bases-table-cell-background-disabled: #1a1a1a;
  --bases-table-group-background: #1a1a1a;
  --bases-table-header-background: rgb(54, 57, 63);
  --bases-table-summary-background: rgb(54, 57, 63);
  --blockquote-background-color: rgb(63, 67, 74);
  --blockquote-border-thickness: 4px;
  --blockquote-font-style: italic;
  --blockquote-style: italic;
  --bold-color: rgb(224, 228, 235);
  --bold-weight: 700;
  --canvas-background: rgb(54, 57, 63);
  --canvas-controls-icon-size: 15px;
  --checkbox-marker-color: rgb(54, 57, 63);
  --code-background: #1a1a1a;
  --code-border-color: rgb(88, 83, 80);
  --default-font: 'Inter';
  --divider-color: rgb(54, 57, 63);
  --divider-width: 0px;
  --embed-block-shadow-hover: 0 0 0 1px rgb(88, 83, 80), inset 0 0 0 1px rgb(88, 83, 80);
  --file-header-background: rgb(54, 57, 63);
  --file-header-background-focused: rgb(54, 57, 63);
  --file-header-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 12px;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Inter';
  --font-ui-medium: 14px;
  --font-ui-small: 12px;
  --font-ui-smaller: 11px;
  --footnote-divider-color: rgb(88, 83, 80);
  --footnote-line-height: 1.35;
  --h1-border-width: 1px;
  --h1-color: rgb(224, 228, 235);
  --h1-font: Courgette;
  --h1-size: 1.60em;
  --h1-weight: 600;
  --h2-border-width: 1px;
  --h2-bottom-spacing: 0.3rem;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-color: rgb(193, 201, 215);
  --h2-font: Courgette;
  --h2-line-height: 1.1em;
  --h2-size: 1.48em;
  --h2-top-spacing: 1.4rem;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em);
  --h2-weight: 600;
  --h3-border-width: 0px;
  --h3-color: rgb(162, 175, 195);
  --h3-font: 'Karla', 'Inter';
  --h3-line-height: 1.2em;
  --h3-size: 1.36em;
  --h3-weight: 600;
  --h4-bottom-spacing: 0.1rem;
  --h4-color: rgb(234, 225, 200);
  --h4-font: 'Karla', 'Inter';
  --h4-line-height: 1.25em;
  --h4-size: 1.12em;
  --h4-weight: 600;
  --h5-color: rgb(220, 206, 163);
  --h5-line-height: 1.25em;
  --h5-size: 1.00em;
  --h5-weight: 600;
  --h6-color: rgb(206, 186, 126);
  --h6-line-height: 1.35;
  --h6-size: 1.00em;
  --he-title-bar-active-bg: #3D373A;
  --he-title-bar-active-pinned-bg: #735050;
  --he-title-bar-inactive-bg: #3D373A;
  --he-title-bar-inactive-pinned-bg: #735050;
  --header-height: 38px;
  --heading-spacing: 1.4rem;
  --hr-color: rgb(88, 83, 80);
  --icon-l: 17px;
  --icon-m: 17px;
  --icon-s: 15px;
  --icon-size: 17px;
  --ig-left-2: -12px;
  --ig-left-3: -9px;
  --ig-left-4: -8px;
  --indentation-guide-active-color: rgb(141, 133, 129);
  --indentation-guide-color: rgb(88, 83, 80);
  --indentation-guide-color-active: rgb(141, 133, 129);
  --inline-title-color: rgb(224, 228, 235);
  --inline-title-font: Courgette;
  --inline-title-size: 1.60em;
  --inline-title-weight: 600;
  --keyheader-font: 'Open Sans';
  --line-height-normal: 1.35;
  --link-decoration: none;
  --list-bullet-size: 0.3rem;
  --list-embed-adj: 0px;
  --list-embed-margin: -1.60em;
  --list-guide-adj: 0px;
  --list-guide-adj-mobile: 0px;
  --list-guide-outliner-adj: 0px;
  --list-indent: 1.6em;
  --list-indent-first: 1.6em;
  --list-indent-read: 1.5em;
  --list-spacing: 0.2em;
  --lst-fab-b2-y: 30vh;
  --lst-fab-button-radius: 20px;
  --lst-fab-button-size: 60px;
  --lst-fab-view-x: 2vw;
  --lst-fab-view-y: 10vh;
  --lst-p-ul-margin: 0.4em;
  --math-block-list-align: left;
  --menu-background: rgb(63, 67, 74);
  --metadata-background: rgb(49, 52, 58);
  --metadata-border-color: rgb(88, 83, 80);
  --metadata-border-radius: 8px;
  --metadata-divider-color: rgb(88, 83, 80);
  --metadata-input-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-width: 8em;
  --metadata-padding: 8px;
  --metadata-sidebar-input-font-size: 12px;
  --metadata-sidebar-label-font-size: 12px;
  --modal-background: rgb(54, 57, 63);
  --modal-border-width: 0px;
  --nav-indentation-guide-color: rgb(88, 83, 80);
  --nav-item-size: 12px;
  --pdf-background: rgb(54, 57, 63);
  --pdf-page-background: rgb(54, 57, 63);
  --pdf-shadow: 0 0 0 1px rgb(88, 83, 80);
  --pdf-sidebar-background: rgb(54, 57, 63);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(88, 83, 80);
  --pill-border-color: rgb(88, 83, 80);
  --popover-width: 500px;
  --prompt-background: rgb(54, 57, 63);
  --ribbon-background: rgb(54, 57, 63);
  --ribbon-background-collapsed: rgb(47, 49, 55);
  --ribbon-width: 40px;
  --search-result-background: rgb(54, 57, 63);
  --setting-group-heading-size: 14px;
  --setting-items-background: #1a1a1a;
  --setting-items-border-color: rgb(88, 83, 80);
  --slider-track-background: rgb(88, 83, 80);
  --status-bar-background: rgb(63, 67, 74);
  --status-bar-border-color: rgb(54, 57, 63);
  --status-bar-font-size: 11px;
  --suggestion-background: rgb(54, 57, 63);
  --tab-background-active: rgb(54, 57, 63);
  --tab-container-background: rgb(47, 49, 55);
  --tab-curve: 4px;
  --tab-divider-color: rgb(88, 83, 80);
  --tab-font-size: 12px;
  --tab-outline-color: rgb(54, 57, 63);
  --tab-outline-width: 0px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-stacked-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.2);
  --tab-switcher-background: rgb(63, 67, 74);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(63, 67, 74), transparent);
  --table-add-button-border-color: rgb(88, 83, 80);
  --table-border-color: rgb(88, 83, 80);
  --table-header-border-color: rgb(88, 83, 80);
  --tag-background: rgba(234, 151, 123, 0.7);
  --tag-background-hover: rgba(234, 151, 123, 0.45);
  --tag-bg-accent-hsl: 15, 72%, 70%;
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-padding-x: 0.5em;
  --tag-padding-y: 0.1em;
  --tag-radius: 0.6em;
  --tag-size: 12px;
  --text-highlight-bg: rgba(255, 208, 0, 0.3);
  --text-selection: rgba(30, 144, 255, 0.4);
  --titlebar-background: rgb(47, 49, 55);
  --titlebar-background-focused: rgb(47, 49, 55);
  --titlebar-border-color: rgb(88, 83, 80);
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  --vault-profile-font-size: 12px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 49, 55);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(47, 49, 55);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(47, 49, 55);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 57, 63);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 49, 55);
  border-left-color: rgb(54, 57, 63);
}

body div#quartz-root {
  background-color: rgb(54, 57, 63);
}`,
    typography: `body .page article p > b, b {
  color: rgb(224, 228, 235);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 228, 235) none 0px;
  text-decoration: rgb(224, 228, 235);
  text-decoration-color: rgb(224, 228, 235);
}

body .page article p > em, em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  color: rgb(224, 228, 235);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 228, 235) none 0px;
  text-decoration: rgb(224, 228, 235);
  text-decoration-color: rgb(224, 228, 235);
}

body .text-highlight {
  background-color: rgba(255, 208, 0, 0.3);
  color: rgb(224, 228, 235);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 228, 235) none 0px;
  text-decoration: rgb(224, 228, 235);
  text-decoration-color: rgb(224, 228, 235);
}

body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 138, 249);
}

body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(54, 57, 63);
}

body ul.overflow {
  background-color: rgb(54, 57, 63);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(63, 67, 74);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body table {
  background-color: rgb(63, 67, 74);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 3px;
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 200.141px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(49, 52, 58);
}

body td {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(88, 83, 80);
  padding-bottom: 6.4px;
  padding-left: 9.6px;
  padding-right: 9.6px;
  padding-top: 6.4px;
}

body th {
  border-bottom-color: rgb(88, 83, 80);
  border-bottom-width: 0px;
  border-left-color: rgb(88, 83, 80);
  border-left-width: 0px;
  border-right-color: rgb(88, 83, 80);
  border-right-width: 0px;
  border-top-color: rgb(88, 83, 80);
  border-top-width: 0px;
  font-weight: 700;
  padding-bottom: 6.4px;
  padding-left: 9.6px;
  padding-right: 9.6px;
  padding-top: 6.4px;
}

body thead {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body tr {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(63, 67, 74);
  border-bottom-width: 1px;
  border-left-color: rgb(63, 67, 74);
  border-left-width: 1px;
  border-right-color: rgb(63, 67, 74);
  border-right-width: 1px;
  border-top-color: rgb(63, 67, 74);
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(63, 67, 74);
  border-bottom-width: 1px;
  border-left-color: rgb(63, 67, 74);
  border-left-width: 1px;
  border-right-color: rgb(63, 67, 74);
  border-right-width: 1px;
  border-top-color: rgb(63, 67, 74);
  border-top-width: 1px;
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(63, 67, 74);
  border-bottom-width: 1px;
  border-left-color: rgb(63, 67, 74);
  border-left-width: 1px;
  border-right-color: rgb(63, 67, 74);
  border-right-width: 1px;
  border-top-color: rgb(63, 67, 74);
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(88, 83, 80);
  border-left-color: rgb(88, 83, 80);
  border-right-color: rgb(88, 83, 80);
  border-top-color: rgb(88, 83, 80);
}`,
    images: `body figcaption {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `body .file-embed {
  background-color: rgb(26, 26, 26);
}

body .transclude {
  padding-bottom: 3.2px;
  padding-left: 8px;
  padding-right: 8px;
}

body .transclude-inner {
  padding-bottom: 3.2px;
  padding-left: 8px;
  padding-right: 8px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    callouts: `body .callout > .callout-content {
  padding-bottom: 4px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.18);
}

body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.18);
}

body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.18);
}

body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.18);
}

body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.18);
}

body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.18);
}

body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.18);
}

body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.18);
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.18);
}

body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.18);
}

body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.18);
}

body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.18);
}

body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.18);
}`,
    search: `body .search > .search-button {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(88, 83, 80);
  border-left-color: rgb(88, 83, 80);
  border-right-color: rgb(88, 83, 80);
  border-top-color: rgb(88, 83, 80);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(54, 57, 63);
}

body .search > .search-container > .search-space > * {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(63, 67, 74);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(234, 151, 123, 0.7);
  border-bottom-left-radius: 8.4px;
  border-bottom-right-radius: 8.4px;
  border-top-left-radius: 8.4px;
  border-top-right-radius: 8.4px;
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(17, 17, 17);
}

body h1 {
  color: rgb(224, 228, 235);
  font-family: Courgette;
}

body h2 {
  color: rgb(193, 201, 215);
  font-family: Courgette;
}

body h2.page-title, h2.page-title a {
  color: rgb(224, 228, 235);
  font-family: Courgette;
}

body h3 {
  color: rgb(162, 175, 195);
  font-family: Karla, Inter;
}

body h4 {
  color: rgb(234, 225, 200);
  font-family: Karla, Inter;
}

body h5 {
  color: rgb(220, 206, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(206, 186, 126);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}

body ::-webkit-scrollbar-corner {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}

body ::-webkit-scrollbar-track {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `body footer {
  background-color: rgb(63, 67, 74);
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
  border-top-color: rgb(54, 57, 63);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  background-color: rgb(49, 52, 58);
  border-bottom-color: rgb(88, 83, 80);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(88, 83, 80);
  border-right-color: rgb(88, 83, 80);
  border-top-color: rgb(88, 83, 80);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-left: 8px;
  padding-right: 8px;
}

body .metadata-properties {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(63, 67, 74);
}

body .page-header h2.page-title {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(26, 26, 26);
}`,
  },
  light: {
    base: `:root:root {
  --alt-checkbox-bg-content: '';
  --background-accent: rgb(226, 228, 233);
  --background-accent-alt: rgb(220, 223, 229);
  --background-active-line: rgb(220, 223, 229);
  --background-modifier-backlinks: rgb(225, 228, 234);
  --background-modifier-border: #ada7a4;
  --background-modifier-cover: rgb(211, 214, 222);
  --background-modifier-form-field: #e6e6e6;
  --background-modifier-form-field-hover: #e6e6e6;
  --background-primary: rgb(231, 234, 238);
  --background-secondary: rgb(211, 215, 223);
  --background-secondary-alt: rgb(199, 204, 214);
  --bases-cards-background: rgb(231, 234, 238);
  --bases-cards-shadow: 0 0 0 1px #ada7a4;
  --bases-embed-border-color: #ada7a4;
  --bases-group-heading-property-color: #1a1a1a;
  --bases-group-heading-property-size: 11px;
  --bases-table-border-color: #ada7a4;
  --bases-table-cell-background-active: rgb(231, 234, 238);
  --bases-table-header-background: rgb(231, 234, 238);
  --bases-table-header-color: #1a1a1a;
  --bases-table-summary-background: rgb(231, 234, 238);
  --blockquote-background-color: rgb(211, 215, 223);
  --blockquote-border-thickness: 4px;
  --blockquote-font-style: italic;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, rgb(231, 234, 238) 65%, transparent) linear-gradient(rgb(231, 234, 238), color-mix(in srgb, rgb(231, 234, 238) 65%, transparent));
  --bold-color: rgb(60, 73, 93);
  --bold-weight: 700;
  --canvas-background: rgb(231, 234, 238);
  --canvas-card-label-color: #808080;
  --canvas-controls-icon-size: 15px;
  --checkbox-border-color: #808080;
  --checkbox-border-color-hover: #1a1a1a;
  --checkbox-color-hover: #708ca9;
  --checkbox-marker-color: rgb(231, 234, 238);
  --checklist-done-color: #1a1a1a;
  --code-border-color: #ada7a4;
  --code-comment: #808080;
  --code-punctuation: #1a1a1a;
  --collapse-icon-color: #808080;
  --default-font: 'Inter';
  --divider-color: rgb(231, 234, 238);
  --divider-width: 0px;
  --embed-block-shadow-hover: 0 0 0 1px #ada7a4, inset 0 0 0 1px #ada7a4;
  --file-header-background: rgb(231, 234, 238);
  --file-header-background-focused: rgb(231, 234, 238);
  --file-header-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 12px;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Inter';
  --font-ui-medium: 14px;
  --font-ui-small: 12px;
  --font-ui-smaller: 11px;
  --footnote-divider-color: #ada7a4;
  --footnote-id-color: #1a1a1a;
  --footnote-id-color-no-occurrences: #808080;
  --footnote-line-height: 1.35;
  --graph-node: #1a1a1a;
  --graph-node-unresolved: #808080;
  --h1-border-width: 1px;
  --h1-color: rgb(60, 73, 93);
  --h1-font: Courgette;
  --h1-size: 1.60em;
  --h1-weight: 600;
  --h2-border-width: 1px;
  --h2-bottom-spacing: 0.3rem;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-color: rgb(80, 97, 124);
  --h2-font: Courgette;
  --h2-line-height: 1.1em;
  --h2-size: 1.48em;
  --h2-top-spacing: 1.4rem;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em);
  --h2-weight: 600;
  --h3-border-width: 0px;
  --h3-color: rgb(99, 121, 156);
  --h3-font: 'Karla', 'Inter';
  --h3-line-height: 1.2em;
  --h3-size: 1.36em;
  --h3-weight: 600;
  --h4-bottom-spacing: 0.1rem;
  --h4-color: rgb(148, 125, 56);
  --h4-font: 'Karla', 'Inter';
  --h4-line-height: 1.25em;
  --h4-size: 1.12em;
  --h4-weight: 600;
  --h5-color: rgb(111, 94, 42);
  --h5-line-height: 1.25em;
  --h5-size: 1.00em;
  --h5-weight: 600;
  --h6-color: rgb(74, 62, 28);
  --h6-line-height: 1.35;
  --h6-size: 1.00em;
  --he-title-bar-active-bg: #EAA4A4;
  --he-title-bar-active-pinned-bg: #A7B3A1;
  --he-title-bar-inactive-bg: #EAA4A4;
  --he-title-bar-inactive-pinned-bg: #A7B3A1;
  --header-height: 38px;
  --heading-formatting: #808080;
  --heading-spacing: 1.4rem;
  --hr-color: #ada7a4;
  --icon-color: #1a1a1a;
  --icon-color-hover: #1a1a1a;
  --icon-l: 17px;
  --icon-m: 17px;
  --icon-s: 15px;
  --icon-size: 17px;
  --ig-left-2: -12px;
  --ig-left-3: -9px;
  --ig-left-4: -8px;
  --indentation-guide-color: #ada7a4;
  --inline-title-color: rgb(60, 73, 93);
  --inline-title-font: Courgette;
  --inline-title-size: 1.60em;
  --inline-title-weight: 600;
  --input-date-separator: #808080;
  --input-placeholder-color: #808080;
  --interactive-accent-hover: #708ca9;
  --keyheader-font: 'Open Sans';
  --line-height-normal: 1.35;
  --link-decoration: none;
  --list-bullet-size: 0.3rem;
  --list-embed-adj: 0px;
  --list-embed-margin: -1.60em;
  --list-guide-adj: 0px;
  --list-guide-adj-mobile: 0px;
  --list-guide-outliner-adj: 0px;
  --list-indent: 1.6em;
  --list-indent-first: 1.6em;
  --list-indent-read: 1.5em;
  --list-marker-color: #808080;
  --list-marker-color-hover: #1a1a1a;
  --list-spacing: 0.2em;
  --lst-fab-b2-y: 30vh;
  --lst-fab-button-radius: 20px;
  --lst-fab-button-size: 60px;
  --lst-fab-view-x: 2vw;
  --lst-fab-view-y: 10vh;
  --lst-p-ul-margin: 0.4em;
  --math-block-list-align: left;
  --menu-background: rgb(211, 215, 223);
  --metadata-background: rgb(199, 204, 214);
  --metadata-border-color: #ada7a4;
  --metadata-border-radius: 8px;
  --metadata-divider-color: #ada7a4;
  --metadata-input-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #1a1a1a;
  --metadata-label-text-color-hover: #1a1a1a;
  --metadata-label-width: 8em;
  --metadata-padding: 8px;
  --metadata-sidebar-input-font-size: 12px;
  --metadata-sidebar-label-font-size: 12px;
  --modal-background: rgb(231, 234, 238);
  --modal-border-width: 0px;
  --nav-collapse-icon-color: #808080;
  --nav-collapse-icon-color-collapsed: #808080;
  --nav-heading-color-collapsed: #808080;
  --nav-heading-color-collapsed-hover: #1a1a1a;
  --nav-indentation-guide-color: #ada7a4;
  --nav-item-color: #1a1a1a;
  --nav-item-size: 12px;
  --nav-tag-color: #808080;
  --nav-tag-color-active: #1a1a1a;
  --nav-tag-color-hover: #1a1a1a;
  --pdf-background: rgb(231, 234, 238);
  --pdf-page-background: rgb(231, 234, 238);
  --pdf-sidebar-background: rgb(231, 234, 238);
  --pill-border-color: #ada7a4;
  --pill-color: #1a1a1a;
  --pill-color-remove: #808080;
  --popover-width: 500px;
  --prompt-background: rgb(231, 234, 238);
  --raised-background: color-mix(in srgb, rgb(231, 234, 238) 65%, transparent) linear-gradient(rgb(231, 234, 238), color-mix(in srgb, rgb(231, 234, 238) 65%, transparent));
  --ribbon-background: rgb(231, 234, 238);
  --ribbon-background-collapsed: rgb(211, 214, 222);
  --ribbon-width: 40px;
  --search-clear-button-color: #1a1a1a;
  --search-icon-color: #1a1a1a;
  --search-result-background: rgb(231, 234, 238);
  --setting-group-heading-size: 14px;
  --setting-items-border-color: #ada7a4;
  --slider-track-background: #ada7a4;
  --status-bar-background: rgb(211, 215, 223);
  --status-bar-border-color: rgb(231, 234, 238);
  --status-bar-font-size: 11px;
  --status-bar-text-color: #1a1a1a;
  --suggestion-background: rgb(231, 234, 238);
  --tab-background-active: rgb(231, 234, 238);
  --tab-container-background: rgb(211, 214, 222);
  --tab-curve: 4px;
  --tab-divider-color: #ada7a4;
  --tab-font-size: 12px;
  --tab-outline-color: rgb(231, 234, 238);
  --tab-outline-width: 0px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-stacked-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.2);
  --tab-switcher-background: rgb(211, 215, 223);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(211, 215, 223), transparent);
  --tab-text-color: #808080;
  --tab-text-color-active: #1a1a1a;
  --tab-text-color-focused: #1a1a1a;
  --tab-text-color-focused-active: #1a1a1a;
  --table-add-button-border-color: #ada7a4;
  --table-border-color: #ada7a4;
  --table-drag-handle-color: #808080;
  --table-header-border-color: #ada7a4;
  --tag-background: rgba(234, 151, 123, 0.7);
  --tag-background-hover: rgba(234, 151, 123, 0.45);
  --tag-bg-accent-hsl: 15, 72%, 70%;
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-padding-x: 0.5em;
  --tag-padding-y: 0.1em;
  --tag-radius: 0.6em;
  --tag-size: 12px;
  --text-faint: #808080;
  --text-muted: #1a1a1a;
  --text-selection: DarkGray;
  --titlebar-background: rgb(211, 214, 222);
  --titlebar-background-focused: rgb(211, 214, 222);
  --titlebar-border-color: #ada7a4;
  --titlebar-text-color: #1a1a1a;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  --vault-profile-font-size: 12px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(211, 214, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(211, 214, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(211, 214, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(231, 234, 238);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(211, 214, 222);
  border-left-color: rgb(231, 234, 238);
}

body div#quartz-root {
  background-color: rgb(231, 234, 238);
}`,
    typography: `body .page article p > b, b {
  color: rgb(60, 73, 93);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(60, 73, 93) none 0px;
  text-decoration: rgb(60, 73, 93);
  text-decoration-color: rgb(60, 73, 93);
}

body .page article p > em, em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  color: rgb(60, 73, 93);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(60, 73, 93) none 0px;
  text-decoration: rgb(60, 73, 93);
  text-decoration-color: rgb(60, 73, 93);
}

body .text-highlight {
  color: rgb(60, 73, 93);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(60, 73, 93) none 0px;
  text-decoration: rgb(60, 73, 93);
  text-decoration-color: rgb(60, 73, 93);
}

body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    links: `body a.external, footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
}

body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(231, 234, 238);
}

body ul.overflow {
  background-color: rgb(231, 234, 238);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(128, 128, 128);
  text-decoration: rgb(128, 128, 128);
}

body blockquote {
  background-color: rgb(211, 215, 223);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body table {
  background-color: rgb(211, 215, 223);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 3px;
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 200.141px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(199, 204, 214);
}

body td {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(173, 167, 164);
  padding-bottom: 6.4px;
  padding-left: 9.6px;
  padding-right: 9.6px;
  padding-top: 6.4px;
}

body th {
  border-bottom-color: rgb(173, 167, 164);
  border-bottom-width: 0px;
  border-left-color: rgb(173, 167, 164);
  border-left-width: 0px;
  border-right-color: rgb(173, 167, 164);
  border-right-width: 0px;
  border-top-color: rgb(173, 167, 164);
  border-top-width: 0px;
  font-weight: 700;
  padding-bottom: 6.4px;
  padding-left: 9.6px;
  padding-right: 9.6px;
  padding-top: 6.4px;
}

body thead {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body tr {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(211, 215, 223);
  border-bottom-width: 1px;
  border-left-color: rgb(211, 215, 223);
  border-left-width: 1px;
  border-right-color: rgb(211, 215, 223);
  border-right-width: 1px;
  border-top-color: rgb(211, 215, 223);
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(211, 215, 223);
  border-bottom-width: 1px;
  border-left-color: rgb(211, 215, 223);
  border-left-width: 1px;
  border-right-color: rgb(211, 215, 223);
  border-right-width: 1px;
  border-top-color: rgb(211, 215, 223);
  border-top-width: 1px;
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(211, 215, 223);
  border-bottom-width: 1px;
  border-left-color: rgb(211, 215, 223);
  border-left-width: 1px;
  border-right-color: rgb(211, 215, 223);
  border-right-width: 1px;
  border-top-color: rgb(211, 215, 223);
  border-top-width: 1px;
}

body pre:has(> code) {
  border-bottom-color: rgb(173, 167, 164);
  border-left-color: rgb(173, 167, 164);
  border-right-color: rgb(173, 167, 164);
  border-top-color: rgb(173, 167, 164);
}`,
    images: `body figcaption {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .transclude {
  padding-bottom: 3.2px;
  padding-left: 8px;
  padding-right: 8px;
}

body .transclude-inner {
  padding-bottom: 3.2px;
  padding-left: 8px;
  padding-right: 8px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(26, 26, 26);
  text-decoration: line-through rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body input[type=checkbox] {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
}

body li.task-list-item[data-task='-'] {
  color: rgb(128, 128, 128);
  text-decoration: line-through 1px rgb(128, 128, 128);
  text-decoration-color: rgb(128, 128, 128);
}`,
    callouts: `body .callout > .callout-content {
  padding-bottom: 4px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.18);
}

body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.18);
}

body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.18);
}

body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.18);
}

body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.18);
}

body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.18);
}

body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.18);
}

body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.18);
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.18);
}

body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.18);
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.18);
}

body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.18);
}

body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.18);
}`,
    search: `body .search > .search-button {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(173, 167, 164);
  border-left-color: rgb(173, 167, 164);
  border-right-color: rgb(173, 167, 164);
  border-top-color: rgb(173, 167, 164);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(231, 234, 238);
}

body .search > .search-container > .search-space > * {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(211, 215, 223);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(234, 151, 123, 0.7);
  border-bottom-left-radius: 8.4px;
  border-bottom-right-radius: 8.4px;
  border-top-left-radius: 8.4px;
  border-top-right-radius: 8.4px;
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(17, 17, 17);
}

body h1 {
  color: rgb(60, 73, 93);
  font-family: Courgette;
}

body h2 {
  color: rgb(80, 97, 124);
  font-family: Courgette;
}

body h2.page-title, h2.page-title a {
  color: rgb(60, 73, 93);
  font-family: Courgette;
}

body h3 {
  color: rgb(99, 121, 156);
  font-family: Karla, Inter;
}

body h4 {
  color: rgb(148, 125, 56);
  font-family: Karla, Inter;
}

body h5 {
  color: rgb(111, 94, 42);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(74, 62, 28);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(231, 234, 238);
  border-left-color: rgb(231, 234, 238);
  border-right-color: rgb(231, 234, 238);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}

body ::-webkit-scrollbar-corner {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}

body ::-webkit-scrollbar-track {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(26, 26, 26);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(26, 26, 26);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(26, 26, 26);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}`,
    footer: `body footer {
  background-color: rgb(211, 215, 223);
  border-bottom-color: rgb(231, 234, 238);
  border-left-color: rgb(231, 234, 238);
  border-right-color: rgb(231, 234, 238);
  border-top-color: rgb(231, 234, 238);
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .darkmode svg {
  color: rgb(26, 26, 26);
  stroke: rgb(26, 26, 26);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .breadcrumb-element p {
  color: rgb(128, 128, 128);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  background-color: rgb(199, 204, 214);
  border-bottom-color: rgb(173, 167, 164);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(173, 167, 164);
  border-right-color: rgb(173, 167, 164);
  border-top-color: rgb(173, 167, 164);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-left: 8px;
  padding-right: 8px;
}

body .metadata-properties {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(211, 215, 223);
}

body .page-header h2.page-title {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
  },
};
