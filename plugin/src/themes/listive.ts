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
  --alt-checkbox-bg-content: '' !important;
  --background-accent: rgb(71, 74, 82) !important;
  --background-accent-alt: rgb(45, 47, 52) !important;
  --background-active-line: rgb(45, 47, 52) !important;
  --background-modifier-backlinks: rgb(49, 52, 58) !important;
  --background-modifier-border: rgb(88, 83, 80) !important;
  --background-modifier-border-active: rgb(141, 133, 129) !important;
  --background-modifier-cover: rgb(47, 49, 55) !important;
  --background-primary: rgb(54, 57, 63) !important;
  --background-primary-alt: #1a1a1a !important;
  --background-secondary: rgb(63, 67, 74) !important;
  --background-secondary-alt: rgb(49, 52, 58) !important;
  --bases-cards-background: rgb(54, 57, 63) !important;
  --bases-cards-cover-background: #1a1a1a !important;
  --bases-cards-shadow: 0 0 0 1px rgb(88, 83, 80) !important;
  --bases-embed-border-color: rgb(88, 83, 80) !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-table-border-color: rgb(88, 83, 80) !important;
  --bases-table-cell-background-active: rgb(54, 57, 63) !important;
  --bases-table-cell-background-disabled: #1a1a1a !important;
  --bases-table-group-background: #1a1a1a !important;
  --bases-table-header-background: rgb(54, 57, 63) !important;
  --bases-table-summary-background: rgb(54, 57, 63) !important;
  --blockquote-background-color: rgb(63, 67, 74) !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-font-style: italic !important;
  --blockquote-style: italic !important;
  --bodyFont: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(224, 228, 235) !important;
  --bold-weight: 700 !important;
  --canvas-background: rgb(54, 57, 63) !important;
  --canvas-controls-icon-size: 15px !important;
  --checkbox-marker-color: rgb(54, 57, 63) !important;
  --code-background: #1a1a1a !important;
  --code-border-color: rgb(88, 83, 80) !important;
  --codeFont: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --default-font: 'Inter' !important;
  --divider-color: rgb(54, 57, 63) !important;
  --divider-width: 0px !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(88, 83, 80), inset 0 0 0 1px rgb(88, 83, 80) !important;
  --file-header-background: rgb(54, 57, 63) !important;
  --file-header-background-focused: rgb(54, 57, 63) !important;
  --file-header-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 12px !important;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', 'Inter', 'Arial' !important;
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Inter' !important;
  --font-ui-medium: 14px !important;
  --font-ui-small: 12px !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: rgb(88, 83, 80) !important;
  --footnote-line-height: 1.35 !important;
  --h1-border-width: 1px !important;
  --h1-color: rgb(224, 228, 235) !important;
  --h1-font: Courgette !important;
  --h1-size: 1.60em !important;
  --h1-weight: 600 !important;
  --h2-border-width: 1px !important;
  --h2-bottom-spacing: 0.3rem !important;
  --h2-bottom-spacing-edit: 0.3rem !important;
  --h2-color: rgb(193, 201, 215) !important;
  --h2-font: Courgette !important;
  --h2-line-height: 1.1em !important;
  --h2-size: 1.48em !important;
  --h2-top-spacing: 1.4rem !important;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em) !important;
  --h2-weight: 600 !important;
  --h3-border-width: 0px !important;
  --h3-color: rgb(162, 175, 195) !important;
  --h3-font: 'Karla', 'Inter' !important;
  --h3-line-height: 1.2em !important;
  --h3-size: 1.36em !important;
  --h3-weight: 600 !important;
  --h4-bottom-spacing: 0.1rem !important;
  --h4-color: rgb(234, 225, 200) !important;
  --h4-font: 'Karla', 'Inter' !important;
  --h4-line-height: 1.25em !important;
  --h4-size: 1.12em !important;
  --h4-weight: 600 !important;
  --h5-color: rgb(220, 206, 163) !important;
  --h5-line-height: 1.25em !important;
  --h5-size: 1.00em !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(206, 186, 126) !important;
  --h6-line-height: 1.35 !important;
  --h6-size: 1.00em !important;
  --he-title-bar-active-bg: #3D373A !important;
  --he-title-bar-active-pinned-bg: #735050 !important;
  --he-title-bar-inactive-bg: #3D373A !important;
  --he-title-bar-inactive-pinned-bg: #735050 !important;
  --header-height: 38px !important;
  --headerFont: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-spacing: 1.4rem !important;
  --highlight: rgba(255, 208, 0, 0.3) !important;
  --hr-color: rgb(88, 83, 80) !important;
  --icon-l: 17px !important;
  --icon-m: 17px !important;
  --icon-s: 15px !important;
  --icon-size: 17px !important;
  --ig-left-2: -12px !important;
  --ig-left-3: -9px !important;
  --ig-left-4: -8px !important;
  --indentation-guide-active-color: rgb(141, 133, 129) !important;
  --indentation-guide-color: rgb(88, 83, 80) !important;
  --indentation-guide-color-active: rgb(141, 133, 129) !important;
  --inline-title-color: rgb(224, 228, 235) !important;
  --inline-title-font: Courgette !important;
  --inline-title-size: 1.60em !important;
  --inline-title-weight: 600 !important;
  --keyheader-font: 'Open Sans' !important;
  --light: rgb(54, 57, 63) !important;
  --lightgray: rgb(63, 67, 74) !important;
  --line-height-normal: 1.35 !important;
  --link-decoration: none !important;
  --list-bullet-size: 0.3rem !important;
  --list-embed-adj: 0px !important;
  --list-embed-margin: -1.60em !important;
  --list-guide-adj: 0px !important;
  --list-guide-adj-mobile: 0px !important;
  --list-guide-outliner-adj: 0px !important;
  --list-indent: 1.6em !important;
  --list-indent-first: 1.6em !important;
  --list-indent-read: 1.5em !important;
  --list-spacing: 0.2em !important;
  --lst-fab-b2-y: 30vh !important;
  --lst-fab-button-radius: 20px !important;
  --lst-fab-button-size: 60px !important;
  --lst-fab-view-x: 2vw !important;
  --lst-fab-view-y: 10vh !important;
  --lst-p-ul-margin: 0.4em !important;
  --math-block-list-align: left !important;
  --menu-background: rgb(63, 67, 74) !important;
  --metadata-background: rgb(49, 52, 58) !important;
  --metadata-border-color: rgb(88, 83, 80) !important;
  --metadata-border-radius: 8px !important;
  --metadata-divider-color: rgb(88, 83, 80) !important;
  --metadata-input-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-width: 8em !important;
  --metadata-padding: 8px !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 12px !important;
  --modal-background: rgb(54, 57, 63) !important;
  --modal-border-width: 0px !important;
  --nav-indentation-guide-color: rgb(88, 83, 80) !important;
  --nav-item-size: 12px !important;
  --pdf-background: rgb(54, 57, 63) !important;
  --pdf-page-background: rgb(54, 57, 63) !important;
  --pdf-shadow: 0 0 0 1px rgb(88, 83, 80) !important;
  --pdf-sidebar-background: rgb(54, 57, 63) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(88, 83, 80) !important;
  --pill-border-color: rgb(88, 83, 80) !important;
  --popover-width: 500px !important;
  --prompt-background: rgb(54, 57, 63) !important;
  --ribbon-background: rgb(54, 57, 63) !important;
  --ribbon-background-collapsed: rgb(47, 49, 55) !important;
  --ribbon-width: 40px !important;
  --search-result-background: rgb(54, 57, 63) !important;
  --setting-group-heading-size: 14px !important;
  --setting-items-background: #1a1a1a !important;
  --setting-items-border-color: rgb(88, 83, 80) !important;
  --slider-track-background: rgb(88, 83, 80) !important;
  --status-bar-background: rgb(63, 67, 74) !important;
  --status-bar-border-color: rgb(54, 57, 63) !important;
  --status-bar-font-size: 11px !important;
  --suggestion-background: rgb(54, 57, 63) !important;
  --tab-background-active: rgb(54, 57, 63) !important;
  --tab-container-background: rgb(47, 49, 55) !important;
  --tab-curve: 4px !important;
  --tab-divider-color: rgb(88, 83, 80) !important;
  --tab-font-size: 12px !important;
  --tab-outline-color: rgb(54, 57, 63) !important;
  --tab-outline-width: 0px !important;
  --tab-stacked-font-size: 12px !important;
  --tab-stacked-header-width: 38px !important;
  --tab-stacked-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.2) !important;
  --tab-switcher-background: rgb(63, 67, 74) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(63, 67, 74), transparent) !important;
  --table-add-button-border-color: rgb(88, 83, 80) !important;
  --table-border-color: rgb(88, 83, 80) !important;
  --table-header-border-color: rgb(88, 83, 80) !important;
  --tag-background: rgba(234, 151, 123, 0.7) !important;
  --tag-background-hover: rgba(234, 151, 123, 0.45) !important;
  --tag-bg-accent-hsl: 15, 72%, 70% !important;
  --tag-color: #111 !important;
  --tag-color-hover: #eee !important;
  --tag-padding-x: 0.5em !important;
  --tag-padding-y: 0.1em !important;
  --tag-radius: 0.6em !important;
  --tag-size: 12px !important;
  --text-highlight-bg: rgba(255, 208, 0, 0.3) !important;
  --text-selection: rgba(30, 144, 255, 0.4) !important;
  --textHighlight: rgba(255, 208, 0, 0.3) !important;
  --titleFont: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(47, 49, 55) !important;
  --titlebar-background-focused: rgb(47, 49, 55) !important;
  --titlebar-border-color: rgb(88, 83, 80) !important;
  --traffic-lights-offset-x: 38px !important;
  --traffic-lights-offset-y: 38px !important;
  --vault-profile-font-size: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 49, 55);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(47, 49, 55);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(47, 49, 55);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 57, 63);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 49, 55);
  border-left-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(54, 57, 63);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(224, 228, 235);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 228, 235) none 0px;
  text-decoration: rgb(224, 228, 235);
  text-decoration-color: rgb(224, 228, 235);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(224, 228, 235);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 228, 235) none 0px;
  text-decoration: rgb(224, 228, 235);
  text-decoration-color: rgb(224, 228, 235);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 208, 0, 0.3);
  color: rgb(224, 228, 235);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 228, 235) none 0px;
  text-decoration: rgb(224, 228, 235);
  text-decoration-color: rgb(224, 228, 235);
}

html[saved-theme="dark"] body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body p {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 138, 249);
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgb(63, 67, 74);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body table {
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

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(49, 52, 58);
}

html[saved-theme="dark"] body td {
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

html[saved-theme="dark"] body th {
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

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(88, 83, 80);
  border-left-color: rgb(88, 83, 80);
  border-right-color: rgb(88, 83, 80);
  border-top-color: rgb(88, 83, 80);
}`,
    images: `html[saved-theme="dark"] body figcaption {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .transclude {
  padding-bottom: 3.2px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .transclude-inner {
  padding-bottom: 3.2px;
  padding-left: 8px;
  padding-right: 8px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    callouts: `html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.18);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(88, 83, 80);
  border-left-color: rgb(88, 83, 80);
  border-right-color: rgb(88, 83, 80);
  border-top-color: rgb(88, 83, 80);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(63, 67, 74);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(234, 151, 123, 0.7);
  border-bottom-left-radius: 8.4px;
  border-bottom-right-radius: 8.4px;
  border-top-left-radius: 8.4px;
  border-top-right-radius: 8.4px;
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body h1 {
  color: rgb(224, 228, 235);
  font-family: Courgette;
}

html[saved-theme="dark"] body h2 {
  color: rgb(193, 201, 215);
  font-family: Courgette;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(224, 228, 235);
  font-family: Courgette;
}

html[saved-theme="dark"] body h3 {
  color: rgb(162, 175, 195);
  font-family: Karla, Inter;
}

html[saved-theme="dark"] body h4 {
  color: rgb(234, 225, 200);
  font-family: Karla, Inter;
}

html[saved-theme="dark"] body h5 {
  color: rgb(220, 206, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(206, 186, 126);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(54, 57, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 57, 63);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(63, 67, 74);
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
  border-top-color: rgb(54, 57, 63);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(63, 67, 74);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(26, 26, 26);
}`,
  },
  light: {
    base: `:root:root {
  --alt-checkbox-bg-content: '' !important;
  --background-accent: rgb(226, 228, 233) !important;
  --background-accent-alt: rgb(220, 223, 229) !important;
  --background-active-line: rgb(220, 223, 229) !important;
  --background-modifier-backlinks: rgb(225, 228, 234) !important;
  --background-modifier-border: #ada7a4 !important;
  --background-modifier-cover: rgb(211, 214, 222) !important;
  --background-modifier-form-field: #e6e6e6 !important;
  --background-modifier-form-field-hover: #e6e6e6 !important;
  --background-primary: rgb(231, 234, 238) !important;
  --background-secondary: rgb(211, 215, 223) !important;
  --background-secondary-alt: rgb(199, 204, 214) !important;
  --bases-cards-background: rgb(231, 234, 238) !important;
  --bases-cards-shadow: 0 0 0 1px #ada7a4 !important;
  --bases-embed-border-color: #ada7a4 !important;
  --bases-group-heading-property-color: #1a1a1a !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-table-border-color: #ada7a4 !important;
  --bases-table-cell-background-active: rgb(231, 234, 238) !important;
  --bases-table-header-background: rgb(231, 234, 238) !important;
  --bases-table-header-color: #1a1a1a !important;
  --bases-table-summary-background: rgb(231, 234, 238) !important;
  --blockquote-background-color: rgb(211, 215, 223) !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-font-style: italic !important;
  --blockquote-style: italic !important;
  --blur-background: color-mix(in srgb, rgb(231, 234, 238) 65%, transparent) linear-gradient(rgb(231, 234, 238), color-mix(in srgb, rgb(231, 234, 238) 65%, transparent)) !important;
  --bodyFont: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(60, 73, 93) !important;
  --bold-weight: 700 !important;
  --canvas-background: rgb(231, 234, 238) !important;
  --canvas-card-label-color: #808080 !important;
  --canvas-controls-icon-size: 15px !important;
  --checkbox-border-color: #808080 !important;
  --checkbox-border-color-hover: #1a1a1a !important;
  --checkbox-color-hover: #708ca9 !important;
  --checkbox-marker-color: rgb(231, 234, 238) !important;
  --checklist-done-color: #1a1a1a !important;
  --code-border-color: #ada7a4 !important;
  --code-comment: #808080 !important;
  --code-punctuation: #1a1a1a !important;
  --codeFont: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #808080 !important;
  --dark: #1a1a1a !important;
  --darkgray: #1a1a1a !important;
  --default-font: 'Inter' !important;
  --divider-color: rgb(231, 234, 238) !important;
  --divider-width: 0px !important;
  --embed-block-shadow-hover: 0 0 0 1px #ada7a4, inset 0 0 0 1px #ada7a4 !important;
  --file-header-background: rgb(231, 234, 238) !important;
  --file-header-background-focused: rgb(231, 234, 238) !important;
  --file-header-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 12px !important;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', 'Inter', 'Arial' !important;
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Inter' !important;
  --font-ui-medium: 14px !important;
  --font-ui-small: 12px !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: #ada7a4 !important;
  --footnote-id-color: #1a1a1a !important;
  --footnote-id-color-no-occurrences: #808080 !important;
  --footnote-line-height: 1.35 !important;
  --graph-node: #1a1a1a !important;
  --graph-node-unresolved: #808080 !important;
  --gray: #1a1a1a !important;
  --h1-border-width: 1px !important;
  --h1-color: rgb(60, 73, 93) !important;
  --h1-font: Courgette !important;
  --h1-size: 1.60em !important;
  --h1-weight: 600 !important;
  --h2-border-width: 1px !important;
  --h2-bottom-spacing: 0.3rem !important;
  --h2-bottom-spacing-edit: 0.3rem !important;
  --h2-color: rgb(80, 97, 124) !important;
  --h2-font: Courgette !important;
  --h2-line-height: 1.1em !important;
  --h2-size: 1.48em !important;
  --h2-top-spacing: 1.4rem !important;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em) !important;
  --h2-weight: 600 !important;
  --h3-border-width: 0px !important;
  --h3-color: rgb(99, 121, 156) !important;
  --h3-font: 'Karla', 'Inter' !important;
  --h3-line-height: 1.2em !important;
  --h3-size: 1.36em !important;
  --h3-weight: 600 !important;
  --h4-bottom-spacing: 0.1rem !important;
  --h4-color: rgb(148, 125, 56) !important;
  --h4-font: 'Karla', 'Inter' !important;
  --h4-line-height: 1.25em !important;
  --h4-size: 1.12em !important;
  --h4-weight: 600 !important;
  --h5-color: rgb(111, 94, 42) !important;
  --h5-line-height: 1.25em !important;
  --h5-size: 1.00em !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(74, 62, 28) !important;
  --h6-line-height: 1.35 !important;
  --h6-size: 1.00em !important;
  --he-title-bar-active-bg: #EAA4A4 !important;
  --he-title-bar-active-pinned-bg: #A7B3A1 !important;
  --he-title-bar-inactive-bg: #EAA4A4 !important;
  --he-title-bar-inactive-pinned-bg: #A7B3A1 !important;
  --header-height: 38px !important;
  --headerFont: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #808080 !important;
  --heading-spacing: 1.4rem !important;
  --hr-color: #ada7a4 !important;
  --icon-color: #1a1a1a !important;
  --icon-color-hover: #1a1a1a !important;
  --icon-l: 17px !important;
  --icon-m: 17px !important;
  --icon-s: 15px !important;
  --icon-size: 17px !important;
  --ig-left-2: -12px !important;
  --ig-left-3: -9px !important;
  --ig-left-4: -8px !important;
  --indentation-guide-color: #ada7a4 !important;
  --inline-title-color: rgb(60, 73, 93) !important;
  --inline-title-font: Courgette !important;
  --inline-title-size: 1.60em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #808080 !important;
  --input-placeholder-color: #808080 !important;
  --interactive-accent-hover: #708ca9 !important;
  --keyheader-font: 'Open Sans' !important;
  --light: rgb(231, 234, 238) !important;
  --lightgray: rgb(211, 215, 223) !important;
  --line-height-normal: 1.35 !important;
  --link-decoration: none !important;
  --list-bullet-size: 0.3rem !important;
  --list-embed-adj: 0px !important;
  --list-embed-margin: -1.60em !important;
  --list-guide-adj: 0px !important;
  --list-guide-adj-mobile: 0px !important;
  --list-guide-outliner-adj: 0px !important;
  --list-indent: 1.6em !important;
  --list-indent-first: 1.6em !important;
  --list-indent-read: 1.5em !important;
  --list-marker-color: #808080 !important;
  --list-marker-color-hover: #1a1a1a !important;
  --list-spacing: 0.2em !important;
  --lst-fab-b2-y: 30vh !important;
  --lst-fab-button-radius: 20px !important;
  --lst-fab-button-size: 60px !important;
  --lst-fab-view-x: 2vw !important;
  --lst-fab-view-y: 10vh !important;
  --lst-p-ul-margin: 0.4em !important;
  --math-block-list-align: left !important;
  --menu-background: rgb(211, 215, 223) !important;
  --metadata-background: rgb(199, 204, 214) !important;
  --metadata-border-color: #ada7a4 !important;
  --metadata-border-radius: 8px !important;
  --metadata-divider-color: #ada7a4 !important;
  --metadata-input-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #1a1a1a !important;
  --metadata-label-text-color-hover: #1a1a1a !important;
  --metadata-label-width: 8em !important;
  --metadata-padding: 8px !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 12px !important;
  --modal-background: rgb(231, 234, 238) !important;
  --modal-border-width: 0px !important;
  --nav-collapse-icon-color: #808080 !important;
  --nav-collapse-icon-color-collapsed: #808080 !important;
  --nav-heading-color-collapsed: #808080 !important;
  --nav-heading-color-collapsed-hover: #1a1a1a !important;
  --nav-indentation-guide-color: #ada7a4 !important;
  --nav-item-color: #1a1a1a !important;
  --nav-item-size: 12px !important;
  --nav-tag-color: #808080 !important;
  --nav-tag-color-active: #1a1a1a !important;
  --nav-tag-color-hover: #1a1a1a !important;
  --pdf-background: rgb(231, 234, 238) !important;
  --pdf-page-background: rgb(231, 234, 238) !important;
  --pdf-sidebar-background: rgb(231, 234, 238) !important;
  --pill-border-color: #ada7a4 !important;
  --pill-color: #1a1a1a !important;
  --pill-color-remove: #808080 !important;
  --popover-width: 500px !important;
  --prompt-background: rgb(231, 234, 238) !important;
  --raised-background: color-mix(in srgb, rgb(231, 234, 238) 65%, transparent) linear-gradient(rgb(231, 234, 238), color-mix(in srgb, rgb(231, 234, 238) 65%, transparent)) !important;
  --ribbon-background: rgb(231, 234, 238) !important;
  --ribbon-background-collapsed: rgb(211, 214, 222) !important;
  --ribbon-width: 40px !important;
  --search-clear-button-color: #1a1a1a !important;
  --search-icon-color: #1a1a1a !important;
  --search-result-background: rgb(231, 234, 238) !important;
  --setting-group-heading-size: 14px !important;
  --setting-items-border-color: #ada7a4 !important;
  --slider-track-background: #ada7a4 !important;
  --status-bar-background: rgb(211, 215, 223) !important;
  --status-bar-border-color: rgb(231, 234, 238) !important;
  --status-bar-font-size: 11px !important;
  --status-bar-text-color: #1a1a1a !important;
  --suggestion-background: rgb(231, 234, 238) !important;
  --tab-background-active: rgb(231, 234, 238) !important;
  --tab-container-background: rgb(211, 214, 222) !important;
  --tab-curve: 4px !important;
  --tab-divider-color: #ada7a4 !important;
  --tab-font-size: 12px !important;
  --tab-outline-color: rgb(231, 234, 238) !important;
  --tab-outline-width: 0px !important;
  --tab-stacked-font-size: 12px !important;
  --tab-stacked-header-width: 38px !important;
  --tab-stacked-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.2) !important;
  --tab-switcher-background: rgb(211, 215, 223) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(211, 215, 223), transparent) !important;
  --tab-text-color: #808080 !important;
  --tab-text-color-active: #1a1a1a !important;
  --tab-text-color-focused: #1a1a1a !important;
  --tab-text-color-focused-active: #1a1a1a !important;
  --table-add-button-border-color: #ada7a4 !important;
  --table-border-color: #ada7a4 !important;
  --table-drag-handle-color: #808080 !important;
  --table-header-border-color: #ada7a4 !important;
  --tag-background: rgba(234, 151, 123, 0.7) !important;
  --tag-background-hover: rgba(234, 151, 123, 0.45) !important;
  --tag-bg-accent-hsl: 15, 72%, 70% !important;
  --tag-color: #111 !important;
  --tag-color-hover: #eee !important;
  --tag-padding-x: 0.5em !important;
  --tag-padding-y: 0.1em !important;
  --tag-radius: 0.6em !important;
  --tag-size: 12px !important;
  --tertiary: #708ca9 !important;
  --text-faint: #808080 !important;
  --text-muted: #1a1a1a !important;
  --text-selection: DarkGray !important;
  --titleFont: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(211, 214, 222) !important;
  --titlebar-background-focused: rgb(211, 214, 222) !important;
  --titlebar-border-color: #ada7a4 !important;
  --titlebar-text-color: #1a1a1a !important;
  --traffic-lights-offset-x: 38px !important;
  --traffic-lights-offset-y: 38px !important;
  --vault-profile-font-size: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(211, 214, 222);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(211, 214, 222);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(211, 214, 222);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(231, 234, 238);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(211, 214, 222);
  border-left-color: rgb(231, 234, 238);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(231, 234, 238);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(60, 73, 93);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(60, 73, 93) none 0px;
  text-decoration: rgb(60, 73, 93);
  text-decoration-color: rgb(60, 73, 93);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(60, 73, 93);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(60, 73, 93) none 0px;
  text-decoration: rgb(60, 73, 93);
  text-decoration-color: rgb(60, 73, 93);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(60, 73, 93);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(60, 73, 93) none 0px;
  text-decoration: rgb(60, 73, 93);
  text-decoration-color: rgb(60, 73, 93);
}

html[saved-theme="light"] body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body p {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(128, 128, 128);
  text-decoration: rgb(128, 128, 128);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(211, 215, 223);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body table {
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

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(199, 204, 214);
}

html[saved-theme="light"] body td {
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

html[saved-theme="light"] body th {
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

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(211, 215, 223);
  border-bottom-width: 1px;
  border-left-color: rgb(211, 215, 223);
  border-left-width: 1px;
  border-right-color: rgb(211, 215, 223);
  border-right-width: 1px;
  border-top-color: rgb(211, 215, 223);
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(211, 215, 223);
  border-bottom-width: 1px;
  border-left-color: rgb(211, 215, 223);
  border-left-width: 1px;
  border-right-color: rgb(211, 215, 223);
  border-right-width: 1px;
  border-top-color: rgb(211, 215, 223);
  border-top-width: 1px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-color: rgb(211, 215, 223);
  border-bottom-width: 1px;
  border-left-color: rgb(211, 215, 223);
  border-left-width: 1px;
  border-right-color: rgb(211, 215, 223);
  border-right-width: 1px;
  border-top-color: rgb(211, 215, 223);
  border-top-width: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgb(173, 167, 164);
  border-left-color: rgb(173, 167, 164);
  border-right-color: rgb(173, 167, 164);
  border-top-color: rgb(173, 167, 164);
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .transclude {
  padding-bottom: 3.2px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .transclude-inner {
  padding-bottom: 3.2px;
  padding-left: 8px;
  padding-right: 8px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(26, 26, 26);
  text-decoration: line-through rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(128, 128, 128);
  text-decoration: line-through 1px rgb(128, 128, 128);
  text-decoration-color: rgb(128, 128, 128);
}`,
    callouts: `html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.18);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(173, 167, 164);
  border-left-color: rgb(173, 167, 164);
  border-right-color: rgb(173, 167, 164);
  border-top-color: rgb(173, 167, 164);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(231, 234, 238);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(211, 215, 223);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(234, 151, 123, 0.7);
  border-bottom-left-radius: 8.4px;
  border-bottom-right-radius: 8.4px;
  border-top-left-radius: 8.4px;
  border-top-right-radius: 8.4px;
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body h1 {
  color: rgb(60, 73, 93);
  font-family: Courgette;
}

html[saved-theme="light"] body h2 {
  color: rgb(80, 97, 124);
  font-family: Courgette;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(60, 73, 93);
  font-family: Courgette;
}

html[saved-theme="light"] body h3 {
  color: rgb(99, 121, 156);
  font-family: Karla, Inter;
}

html[saved-theme="light"] body h4 {
  color: rgb(148, 125, 56);
  font-family: Karla, Inter;
}

html[saved-theme="light"] body h5 {
  color: rgb(111, 94, 42);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(74, 62, 28);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(231, 234, 238);
  border-left-color: rgb(231, 234, 238);
  border-right-color: rgb(231, 234, 238);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(231, 234, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 234, 238);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(26, 26, 26);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(26, 26, 26);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(26, 26, 26);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(211, 215, 223);
  border-bottom-color: rgb(231, 234, 238);
  border-left-color: rgb(231, 234, 238);
  border-right-color: rgb(231, 234, 238);
  border-top-color: rgb(231, 234, 238);
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(26, 26, 26);
  stroke: rgb(26, 26, 26);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(128, 128, 128);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(211, 215, 223);
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
  },
};
