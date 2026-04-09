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
  --background-accent: hsl(223, 7%, 30%) !important;
  --background-accent-alt: hsl(220, 8%, 19%) !important;
  --background-active-line: hsl(220, 8%, 19%) !important;
  --background-modifier-backlinks: hsl(220, 8%, 21%) !important;
  --background-modifier-border: hsl(20, 5%, 33%) !important;
  --background-modifier-border-active: hsl(20, 5%, 53%) !important;
  --background-modifier-cover: hsl(223, 7%, 20%) !important;
  --background-primary: hsl(220, 8%, 23%) !important;
  --background-primary-alt: #1a1a1a !important;
  --background-secondary: hsl(218, 8%, 27%) !important;
  --background-secondary-alt: hsl(218, 8%, 21%) !important;
  --bases-cards-background: hsl(220, 8%, 23%) !important;
  --bases-cards-cover-background: #1a1a1a !important;
  --bases-cards-shadow: 0 0 0 1px hsl(20, 5%, 33%) !important;
  --bases-embed-border-color: hsl(20, 5%, 33%) !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-table-border-color: hsl(20, 5%, 33%) !important;
  --bases-table-cell-background-active: hsl(220, 8%, 23%) !important;
  --bases-table-cell-background-disabled: #1a1a1a !important;
  --bases-table-group-background: #1a1a1a !important;
  --bases-table-header-background: hsl(220, 8%, 23%) !important;
  --bases-table-summary-background: hsl(220, 8%, 23%) !important;
  --blockquote-background-color: hsl(218, 8%, 27%) !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-font-style: italic !important;
  --blockquote-style: italic !important;
  --bodyFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(217, 22%, 90%) !important;
  --bold-weight: 700 !important;
  --canvas-background: hsl(220, 8%, 23%) !important;
  --canvas-controls-icon-size: 15px !important;
  --checkbox-marker-color: hsl(220, 8%, 23%) !important;
  --code-background: #1a1a1a !important;
  --code-border-color: hsl(20, 5%, 33%) !important;
  --codeFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --default-font: 'Inter' !important;
  --divider-color: hsl(220, 8%, 23%) !important;
  --divider-width: 0px !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(20, 5%, 33%), inset 0 0 0 1px hsl(20, 5%, 33%) !important;
  --file-header-background: hsl(220, 8%, 23%) !important;
  --file-header-background-focused: hsl(220, 8%, 23%) !important;
  --file-header-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 12px !important;
  --font-interface: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mermaid: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Inter, Arial' !important;
  --font-text: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Inter' !important;
  --font-ui-medium: 14px !important;
  --font-ui-small: 12px !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: hsl(20, 5%, 33%) !important;
  --footnote-line-height: 1.35 !important;
  --h1-border-width: 1px !important;
  --h1-color: hsl(217, 22%, 90%) !important;
  --h1-font: Courgette !important;
  --h1-size: 1.60em !important;
  --h1-weight: 600 !important;
  --h2-border-width: 1px !important;
  --h2-bottom-spacing: 0.3rem !important;
  --h2-bottom-spacing-edit: 0.3rem !important;
  --h2-color: hsl(217, 22%, 80%) !important;
  --h2-font: Courgette !important;
  --h2-line-height: 1.1em !important;
  --h2-size: 1.48em !important;
  --h2-top-spacing: 1.4rem !important;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em) !important;
  --h2-weight: 600 !important;
  --h3-border-width: 0px !important;
  --h3-color: hsl(217, 22%, 70%) !important;
  --h3-font: 'Karla', 'Inter' !important;
  --h3-line-height: 1.2em !important;
  --h3-size: 1.36em !important;
  --h3-weight: 600 !important;
  --h4-bottom-spacing: 0.1rem !important;
  --h4-color: hsl(45, 45%, 85%) !important;
  --h4-font: 'Karla', 'Inter' !important;
  --h4-line-height: 1.25em !important;
  --h4-size: 1.12em !important;
  --h4-weight: 600 !important;
  --h5-color: hsl(45, 45%, 75%) !important;
  --h5-line-height: 1.25em !important;
  --h5-size: 1.00em !important;
  --h5-weight: 600 !important;
  --h6-color: hsl(45, 45%, 65%) !important;
  --h6-line-height: 1.35 !important;
  --h6-size: 1.00em !important;
  --he-title-bar-active-bg: #3D373A !important;
  --he-title-bar-active-pinned-bg: #735050 !important;
  --he-title-bar-inactive-bg: #3D373A !important;
  --he-title-bar-inactive-pinned-bg: #735050 !important;
  --header-height: 38px !important;
  --headerFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-spacing: 1.4rem !important;
  --highlight: rgba(255, 208, 0, 0.3) !important;
  --hr-color: hsl(20, 5%, 33%) !important;
  --icon-l: 17px !important;
  --icon-m: 17px !important;
  --icon-s: 15px !important;
  --icon-size: 17px !important;
  --ig-left-2: -12px !important;
  --ig-left-3: -9px !important;
  --ig-left-4: -8px !important;
  --indentation-guide-active-color: hsl(20, 5%, 53%) !important;
  --indentation-guide-color: hsl(20, 5%, 33%) !important;
  --indentation-guide-color-active: hsl(20, 5%, 53%) !important;
  --inline-title-color: hsl(217, 22%, 90%) !important;
  --inline-title-font: Courgette !important;
  --inline-title-size: 1.60em !important;
  --inline-title-weight: 600 !important;
  --keyheader-font: 'Open Sans' !important;
  --light: hsl(220, 8%, 23%) !important;
  --lightgray: hsl(218, 8%, 27%) !important;
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
  --menu-background: hsl(218, 8%, 27%) !important;
  --metadata-background: hsl(218, 8%, 21%) !important;
  --metadata-border-color: hsl(20, 5%, 33%) !important;
  --metadata-border-radius: 8px !important;
  --metadata-divider-color: hsl(20, 5%, 33%) !important;
  --metadata-input-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-width: 8em !important;
  --metadata-padding: 8px !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 12px !important;
  --modal-background: hsl(220, 8%, 23%) !important;
  --modal-border-width: 0px !important;
  --nav-indentation-guide-color: hsl(20, 5%, 33%) !important;
  --nav-item-size: 12px !important;
  --pdf-background: hsl(220, 8%, 23%) !important;
  --pdf-page-background: hsl(220, 8%, 23%) !important;
  --pdf-shadow: 0 0 0 1px hsl(20, 5%, 33%) !important;
  --pdf-sidebar-background: hsl(220, 8%, 23%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(20, 5%, 33%) !important;
  --pill-border-color: hsl(20, 5%, 33%) !important;
  --popover-width: 500px !important;
  --prompt-background: hsl(220, 8%, 23%) !important;
  --ribbon-background: hsl(220, 8%, 23%) !important;
  --ribbon-background-collapsed: hsl(223, 7%, 20%) !important;
  --ribbon-width: 40px !important;
  --search-result-background: hsl(220, 8%, 23%) !important;
  --setting-group-heading-size: 14px !important;
  --setting-items-background: #1a1a1a !important;
  --setting-items-border-color: hsl(20, 5%, 33%) !important;
  --slider-track-background: hsl(20, 5%, 33%) !important;
  --status-bar-background: hsl(218, 8%, 27%) !important;
  --status-bar-border-color: hsl(220, 8%, 23%) !important;
  --status-bar-font-size: 11px !important;
  --suggestion-background: hsl(220, 8%, 23%) !important;
  --tab-background-active: hsl(220, 8%, 23%) !important;
  --tab-container-background: hsl(223, 7%, 20%) !important;
  --tab-curve: 4px !important;
  --tab-divider-color: hsl(20, 5%, 33%) !important;
  --tab-font-size: 12px !important;
  --tab-outline-color: hsl(220, 8%, 23%) !important;
  --tab-outline-width: 0px !important;
  --tab-stacked-font-size: 12px !important;
  --tab-stacked-header-width: 38px !important;
  --tab-stacked-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.2) !important;
  --tab-switcher-background: hsl(218, 8%, 27%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 8%, 27%), transparent) !important;
  --table-add-button-border-color: hsl(20, 5%, 33%) !important;
  --table-border-color: hsl(20, 5%, 33%) !important;
  --table-header-border-color: hsl(20, 5%, 33%) !important;
  --tag-background: hsla(15, 72%, 70%, 0.7) !important;
  --tag-background-hover: hsla(15, 72%, 70%, 0.45) !important;
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
  --titleFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(223, 7%, 20%) !important;
  --titlebar-background-focused: hsl(223, 7%, 20%) !important;
  --titlebar-border-color: hsl(20, 5%, 33%) !important;
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

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(0, 0, 0) rgb(128, 128, 128);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(88, 83, 80);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(63, 67, 74);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(49, 52, 58);
  border-color: rgb(88, 83, 80);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(234, 151, 123, 0.7);
  border-radius: 8.4px;
  color: rgb(17, 17, 17);
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
  text-decoration-color: rgb(224, 228, 235);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 208, 0, 0.3);
  color: rgb(224, 228, 235);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 228, 235) none 0px;
  text-decoration-color: rgb(224, 228, 235);
}

html[saved-theme="dark"] body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  font-size: 12px;
}

html[saved-theme="dark"] body p {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 228, 235);
  border-left-color: rgb(224, 228, 235);
  border-right-color: rgb(224, 228, 235);
  border-top-color: rgb(224, 228, 235);
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
  margin-bottom: 7px;
  margin-top: 7px;
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(158, 158, 158);
  content: "❝";
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(158, 158, 158);
  content: "🕮";
}`,
    callouts: `html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(168, 130, 255, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.18);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z'/%3E%3Cpath d='M14 2v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M10 9H8'/%3E%3Cpath d='M16 13H8'/%3E%3Cpath d='M16 17H8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="caption"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="latest"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.268 21a2 2 0 0 0 3.464 0'/%3E%3Cpath d='M22 8c0-2.3-.8-4.3-2-6'/%3E%3Cpath d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326'/%3E%3Cpath d='M4 2C2.8 3.7 2 5.7 2 8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 7 17l-5-5'/%3E%3Cpath d='m22 10-7.5 7.5L13 16'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.801 10A10 10 0 1 1 17 3.335'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="update"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.268 21a2 2 0 0 0 3.464 0'/%3E%3Cpath d='M22 8c0-2.3-.8-4.3-2-6'/%3E%3Cpath d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326'/%3E%3Cpath d='M4 2C2.8 3.7 2 5.7 2 8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
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
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(88, 83, 80);
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(234, 151, 123, 0.7);
  border-bottom-left-radius: 7.2px;
  border-bottom-right-radius: 7.2px;
  border-top-left-radius: 7.2px;
  border-top-right-radius: 7.2px;
  color: rgb(17, 17, 17);
}`,
  },
  light: {
    base: `:root:root {
  --alt-checkbox-bg-content: '' !important;
  --background-accent: hsl(223, 14%, 90%) !important;
  --background-accent-alt: hsl(220, 16%, 88%) !important;
  --background-active-line: hsl(220, 16%, 88%) !important;
  --background-modifier-backlinks: hsl(220, 16%, 90%) !important;
  --background-modifier-border: #ada7a4 !important;
  --background-modifier-cover: hsl(223, 14%, 85%) !important;
  --background-modifier-form-field: #e6e6e6 !important;
  --background-modifier-form-field-hover: #e6e6e6 !important;
  --background-primary: hsl(220, 16%, 92%) !important;
  --background-secondary: hsl(218, 16%, 85%) !important;
  --background-secondary-alt: hsl(218, 16%, 81%) !important;
  --bases-cards-background: hsl(220, 16%, 92%) !important;
  --bases-cards-shadow: 0 0 0 1px #ada7a4 !important;
  --bases-embed-border-color: #ada7a4 !important;
  --bases-group-heading-property-color: #1a1a1a !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-table-border-color: #ada7a4 !important;
  --bases-table-cell-background-active: hsl(220, 16%, 92%) !important;
  --bases-table-header-background: hsl(220, 16%, 92%) !important;
  --bases-table-header-color: #1a1a1a !important;
  --bases-table-summary-background: hsl(220, 16%, 92%) !important;
  --blockquote-background-color: hsl(218, 16%, 85%) !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-font-style: italic !important;
  --blockquote-style: italic !important;
  --blur-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent)) !important;
  --bodyFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(217, 22%, 30%) !important;
  --bold-weight: 700 !important;
  --canvas-background: hsl(220, 16%, 92%) !important;
  --canvas-card-label-color: #808080 !important;
  --canvas-controls-icon-size: 15px !important;
  --checkbox-border-color: #808080 !important;
  --checkbox-border-color-hover: #1a1a1a !important;
  --checkbox-color-hover: #708ca9 !important;
  --checkbox-marker-color: hsl(220, 16%, 92%) !important;
  --checklist-done-color: #1a1a1a !important;
  --code-border-color: #ada7a4 !important;
  --code-comment: #808080 !important;
  --code-punctuation: #1a1a1a !important;
  --codeFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #808080 !important;
  --dark: #1a1a1a !important;
  --darkgray: #1a1a1a !important;
  --default-font: 'Inter' !important;
  --divider-color: hsl(220, 16%, 92%) !important;
  --divider-width: 0px !important;
  --embed-block-shadow-hover: 0 0 0 1px #ada7a4, inset 0 0 0 1px #ada7a4 !important;
  --file-header-background: hsl(220, 16%, 92%) !important;
  --file-header-background-focused: hsl(220, 16%, 92%) !important;
  --file-header-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 12px !important;
  --font-interface: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mermaid: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Inter, Arial' !important;
  --font-text: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --h1-color: hsl(217, 22%, 30%) !important;
  --h1-font: Courgette !important;
  --h1-size: 1.60em !important;
  --h1-weight: 600 !important;
  --h2-border-width: 1px !important;
  --h2-bottom-spacing: 0.3rem !important;
  --h2-bottom-spacing-edit: 0.3rem !important;
  --h2-color: hsl(217, 22%, 40%) !important;
  --h2-font: Courgette !important;
  --h2-line-height: 1.1em !important;
  --h2-size: 1.48em !important;
  --h2-top-spacing: 1.4rem !important;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em) !important;
  --h2-weight: 600 !important;
  --h3-border-width: 0px !important;
  --h3-color: hsl(217, 22%, 50%) !important;
  --h3-font: 'Karla', 'Inter' !important;
  --h3-line-height: 1.2em !important;
  --h3-size: 1.36em !important;
  --h3-weight: 600 !important;
  --h4-bottom-spacing: 0.1rem !important;
  --h4-color: hsl(45, 45%, 40%) !important;
  --h4-font: 'Karla', 'Inter' !important;
  --h4-line-height: 1.25em !important;
  --h4-size: 1.12em !important;
  --h4-weight: 600 !important;
  --h5-color: hsl(45, 45%, 30%) !important;
  --h5-line-height: 1.25em !important;
  --h5-size: 1.00em !important;
  --h5-weight: 600 !important;
  --h6-color: hsl(45, 45%, 20%) !important;
  --h6-line-height: 1.35 !important;
  --h6-size: 1.00em !important;
  --he-title-bar-active-bg: #EAA4A4 !important;
  --he-title-bar-active-pinned-bg: #A7B3A1 !important;
  --he-title-bar-inactive-bg: #EAA4A4 !important;
  --he-title-bar-inactive-pinned-bg: #A7B3A1 !important;
  --header-height: 38px !important;
  --headerFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --inline-title-color: hsl(217, 22%, 30%) !important;
  --inline-title-font: Courgette !important;
  --inline-title-size: 1.60em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #808080 !important;
  --input-placeholder-color: #808080 !important;
  --interactive-accent-hover: #708ca9 !important;
  --keyheader-font: 'Open Sans' !important;
  --light: hsl(220, 16%, 92%) !important;
  --lightgray: hsl(218, 16%, 85%) !important;
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
  --menu-background: hsl(218, 16%, 85%) !important;
  --metadata-background: hsl(218, 16%, 81%) !important;
  --metadata-border-color: #ada7a4 !important;
  --metadata-border-radius: 8px !important;
  --metadata-divider-color: #ada7a4 !important;
  --metadata-input-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #1a1a1a !important;
  --metadata-label-text-color-hover: #1a1a1a !important;
  --metadata-label-width: 8em !important;
  --metadata-padding: 8px !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 12px !important;
  --modal-background: hsl(220, 16%, 92%) !important;
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
  --pdf-background: hsl(220, 16%, 92%) !important;
  --pdf-page-background: hsl(220, 16%, 92%) !important;
  --pdf-sidebar-background: hsl(220, 16%, 92%) !important;
  --pill-border-color: #ada7a4 !important;
  --pill-color: #1a1a1a !important;
  --pill-color-remove: #808080 !important;
  --popover-width: 500px !important;
  --prompt-background: hsl(220, 16%, 92%) !important;
  --raised-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent)) !important;
  --ribbon-background: hsl(220, 16%, 92%) !important;
  --ribbon-background-collapsed: hsl(223, 14%, 85%) !important;
  --ribbon-width: 40px !important;
  --search-clear-button-color: #1a1a1a !important;
  --search-icon-color: #1a1a1a !important;
  --search-result-background: hsl(220, 16%, 92%) !important;
  --setting-group-heading-size: 14px !important;
  --setting-items-border-color: #ada7a4 !important;
  --slider-track-background: #ada7a4 !important;
  --status-bar-background: hsl(218, 16%, 85%) !important;
  --status-bar-border-color: hsl(220, 16%, 92%) !important;
  --status-bar-font-size: 11px !important;
  --status-bar-text-color: #1a1a1a !important;
  --suggestion-background: hsl(220, 16%, 92%) !important;
  --tab-background-active: hsl(220, 16%, 92%) !important;
  --tab-container-background: hsl(223, 14%, 85%) !important;
  --tab-curve: 4px !important;
  --tab-divider-color: #ada7a4 !important;
  --tab-font-size: 12px !important;
  --tab-outline-color: hsl(220, 16%, 92%) !important;
  --tab-outline-width: 0px !important;
  --tab-stacked-font-size: 12px !important;
  --tab-stacked-header-width: 38px !important;
  --tab-stacked-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.2) !important;
  --tab-switcher-background: hsl(218, 16%, 85%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 16%, 85%), transparent) !important;
  --tab-text-color: #808080 !important;
  --tab-text-color-active: #1a1a1a !important;
  --tab-text-color-focused: #1a1a1a !important;
  --tab-text-color-focused-active: #1a1a1a !important;
  --table-add-button-border-color: #ada7a4 !important;
  --table-border-color: #ada7a4 !important;
  --table-drag-handle-color: #808080 !important;
  --table-header-border-color: #ada7a4 !important;
  --tag-background: hsla(15, 72%, 70%, 0.7) !important;
  --tag-background-hover: hsla(15, 72%, 70%, 0.45) !important;
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
  --titleFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(223, 14%, 85%) !important;
  --titlebar-background-focused: hsl(223, 14%, 85%) !important;
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

html[saved-theme="light"] body .bases-table {
  border-color: rgb(0, 0, 0) rgb(128, 128, 128);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(173, 167, 164);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(231, 234, 238);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(199, 204, 214);
  border-color: rgb(173, 167, 164);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(234, 151, 123, 0.7);
  border-radius: 8.4px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(26, 26, 26);
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
  text-decoration-color: rgb(60, 73, 93);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(60, 73, 93);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(60, 73, 93) none 0px;
  text-decoration-color: rgb(60, 73, 93);
}

html[saved-theme="light"] body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1.article-title {
  font-size: 12px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(128, 128, 128);
}

html[saved-theme="light"] body p {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(128, 128, 128);
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
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(60, 73, 93);
  border-left-color: rgb(60, 73, 93);
  border-right-color: rgb(60, 73, 93);
  border-top-color: rgb(60, 73, 93);
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
  margin-bottom: 7px;
  margin-top: 7px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(158, 158, 158);
  content: "❝";
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(158, 158, 158);
  content: "🕮";
}`,
    callouts: `html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(120, 82, 238, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(8, 185, 78, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.18);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z'/%3E%3Cpath d='M14 2v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M10 9H8'/%3E%3Cpath d='M16 13H8'/%3E%3Cpath d='M16 17H8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="caption"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="latest"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.268 21a2 2 0 0 0 3.464 0'/%3E%3Cpath d='M22 8c0-2.3-.8-4.3-2-6'/%3E%3Cpath d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326'/%3E%3Cpath d='M4 2C2.8 3.7 2 5.7 2 8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 7 17l-5-5'/%3E%3Cpath d='m22 10-7.5 7.5L13 16'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.801 10A10 10 0 1 1 17 3.335'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="update"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.268 21a2 2 0 0 0 3.464 0'/%3E%3Cpath d='M22 8c0-2.3-.8-4.3-2-6'/%3E%3Cpath d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326'/%3E%3Cpath d='M4 2C2.8 3.7 2 5.7 2 8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
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
  --callout-color: 8, 109, 221;
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(26, 26, 26);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(173, 167, 164);
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
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(26, 26, 26);
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(234, 151, 123, 0.7);
  border-bottom-left-radius: 7.2px;
  border-bottom-right-radius: 7.2px;
  border-top-left-radius: 7.2px;
  border-top-right-radius: 7.2px;
  color: rgb(17, 17, 17);
}`,
  },
};
