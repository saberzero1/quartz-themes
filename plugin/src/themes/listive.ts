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
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
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
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-group-background: #1a1a1a !important;
  --bases-table-header-background: hsl(220, 8%, 23%) !important;
  --bases-table-summary-background: hsl(220, 8%, 23%) !important;
  --blockquote-background-color: hsl(218, 8%, 27%) !important;
  --blockquote-border-color: hsl(258, 88%, 66%) !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-font-style: italic !important;
  --blockquote-style: italic !important;
  --bodyFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(217, 22%, 90%) !important;
  --bold-weight: 700 !important;
  --callout-title-weight: 600;
  --canvas-background: hsl(220, 8%, 23%) !important;
  --canvas-controls-icon-size: 15px !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --checkbox-marker-color: hsl(220, 8%, 23%) !important;
  --code-background: #1a1a1a !important;
  --code-border-color: hsl(20, 5%, 33%) !important;
  --codeFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-2: hsl(253, 92.4%, 85.14%) !important;
  --default-font: 'Inter' !important;
  --divider-color: hsl(220, 8%, 23%) !important;
  --divider-color-hover: hsl(258, 88%, 66%) !important;
  --divider-width: 0px !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(20, 5%, 33%), inset 0 0 0 1px hsl(20, 5%, 33%) !important;
  --embed-border-start: 2px solid hsl(258, 88%, 66%) !important;
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
  --graph-node-focused: hsl(255, 89.76%, 75.9%) !important;
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
  --icon-color-active: hsl(255, 89.76%, 75.9%) !important;
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
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --keyheader-font: 'Open Sans' !important;
  --light: hsl(220, 8%, 23%) !important;
  --lightgray: hsl(218, 8%, 27%) !important;
  --line-height-normal: 1.35 !important;
  --link-color: hsl(255, 89.76%, 75.9%) !important;
  --link-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-unresolved-color: hsl(255, 89.76%, 75.9%) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-bullet-size: 0.3rem !important;
  --list-embed-adj: 0px !important;
  --list-embed-margin: -1.60em !important;
  --list-guide-adj: 0px !important;
  --list-guide-adj-mobile: 0px !important;
  --list-guide-outliner-adj: 0px !important;
  --list-indent: 1.6em !important;
  --list-indent-first: 1.6em !important;
  --list-indent-read: 1.5em !important;
  --list-marker-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
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
  --metadata-input-height: 28px !important;
  --metadata-label-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-width: 8em !important;
  --metadata-padding: 8px !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 12px !important;
  --modal-background: hsl(220, 8%, 23%) !important;
  --modal-border-width: 0px !important;
  --nav-indentation-guide-color: hsl(20, 5%, 33%) !important;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-color-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --nav-item-size: 12px !important;
  --pdf-background: hsl(220, 8%, 23%) !important;
  --pdf-page-background: hsl(220, 8%, 23%) !important;
  --pdf-shadow: 0 0 0 1px hsl(20, 5%, 33%) !important;
  --pdf-sidebar-background: hsl(220, 8%, 23%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(20, 5%, 33%) !important;
  --pill-border-color: hsl(20, 5%, 33%) !important;
  --pill-color-remove-hover: hsl(255, 89.76%, 75.9%) !important;
  --popover-width: 500px !important;
  --prompt-background: hsl(220, 8%, 23%) !important;
  --ribbon-background: hsl(220, 8%, 23%) !important;
  --ribbon-background-collapsed: hsl(223, 7%, 20%) !important;
  --ribbon-width: 40px !important;
  --search-result-background: hsl(220, 8%, 23%) !important;
  --secondary: hsl(255, 89.76%, 75.9%) !important;
  --setting-group-heading-size: 14px !important;
  --setting-items-background: #1a1a1a !important;
  --setting-items-border-color: hsl(20, 5%, 33%) !important;
  --sidebar-markdown-font-size: 14.4px !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --table-add-button-border-color: hsl(20, 5%, 33%) !important;
  --table-border-color: hsl(20, 5%, 33%) !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-header-border-color: hsl(20, 5%, 33%) !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --tag-background: hsla(15, 72%, 70%, 0.7) !important;
  --tag-background-hover: hsla(15, 72%, 70%, 0.45) !important;
  --tag-bg-accent-hsl: 15, 72%, 70% !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: #111 !important;
  --tag-color-hover: #eee !important;
  --tag-padding-x: 0.5em !important;
  --tag-padding-y: 0.1em !important;
  --tag-radius: 0.6em !important;
  --tag-size: 12px !important;
  --tertiary: hsl(253, 92.4%, 85.14%) !important;
  --text-accent: hsl(255, 89.76%, 75.9%) !important;
  --text-accent-hover: hsl(253, 92.4%, 85.14%) !important;
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
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  --background-accent: hsl(223, 14%, 90%) !important;
  --background-accent-alt: hsl(220, 16%, 88%) !important;
  --background-active-line: hsl(220, 16%, 88%) !important;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
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
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(257, 88.88%, 70.95%) !important;
  --bases-table-header-background: hsl(220, 16%, 92%) !important;
  --bases-table-header-color: #1a1a1a !important;
  --bases-table-summary-background: hsl(220, 16%, 92%) !important;
  --blockquote-background-color: hsl(218, 16%, 85%) !important;
  --blockquote-border-color: hsl(257, 88.88%, 70.95%) !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-font-style: italic !important;
  --blockquote-style: italic !important;
  --blur-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent)) !important;
  --bodyFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(217, 22%, 30%) !important;
  --bold-weight: 700 !important;
  --callout-title-weight: 600;
  --canvas-background: hsl(220, 16%, 92%) !important;
  --canvas-card-label-color: #808080 !important;
  --canvas-controls-icon-size: 15px !important;
  --checkbox-border-color: #808080 !important;
  --checkbox-border-color-hover: #1a1a1a !important;
  --checkbox-color: hsl(257, 88.88%, 70.95%) !important;
  --checkbox-color-hover: #708ca9 !important;
  --checkbox-marker-color: hsl(220, 16%, 92%) !important;
  --checklist-done-color: #1a1a1a !important;
  --code-border-color: #ada7a4 !important;
  --code-comment: #808080 !important;
  --code-punctuation: #1a1a1a !important;
  --codeFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #808080 !important;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(257, 88.88%, 70.95%) !important;
  --color-accent-2: hsl(255, 89.76%, 75.9%) !important;
  --dark: #1a1a1a !important;
  --darkgray: #1a1a1a !important;
  --default-font: 'Inter' !important;
  --divider-color: hsl(220, 16%, 92%) !important;
  --divider-color-hover: hsl(257, 88.88%, 70.95%) !important;
  --divider-width: 0px !important;
  --embed-block-shadow-hover: 0 0 0 1px #ada7a4, inset 0 0 0 1px #ada7a4 !important;
  --embed-border-start: 2px solid hsl(257, 88.88%, 70.95%) !important;
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
  --graph-node-focused: hsl(258, 88%, 66%) !important;
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
  --highlight: hsla(258, 88%, 66%, 0.1) !important;
  --hr-color: #ada7a4 !important;
  --icon-color: #1a1a1a !important;
  --icon-color-active: hsl(258, 88%, 66%) !important;
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
  --interactive-accent: hsl(257, 88.88%, 70.95%) !important;
  --interactive-accent-hover: #708ca9 !important;
  --keyheader-font: 'Open Sans' !important;
  --light: hsl(220, 16%, 92%) !important;
  --lightgray: hsl(218, 16%, 85%) !important;
  --line-height-normal: 1.35 !important;
  --link-color: hsl(258, 88%, 66%) !important;
  --link-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(258, 88%, 66%) !important;
  --link-external-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-unresolved-color: hsl(258, 88%, 66%) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
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
  --list-marker-color-collapsed: hsl(258, 88%, 66%) !important;
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
  --metadata-input-height: 28px !important;
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
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-color: #1a1a1a !important;
  --nav-item-color-highlighted: hsl(258, 88%, 66%) !important;
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
  --pill-color-remove-hover: hsl(258, 88%, 66%) !important;
  --popover-width: 500px !important;
  --prompt-background: hsl(220, 16%, 92%) !important;
  --raised-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent)) !important;
  --ribbon-background: hsl(220, 16%, 92%) !important;
  --ribbon-background-collapsed: hsl(223, 14%, 85%) !important;
  --ribbon-width: 40px !important;
  --search-clear-button-color: #1a1a1a !important;
  --search-icon-color: #1a1a1a !important;
  --search-result-background: hsl(220, 16%, 92%) !important;
  --secondary: hsl(258, 88%, 66%) !important;
  --setting-group-heading-size: 14px !important;
  --setting-items-border-color: #ada7a4 !important;
  --sidebar-markdown-font-size: 14.4px !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color: #808080 !important;
  --tab-text-color-active: #1a1a1a !important;
  --tab-text-color-focused: #1a1a1a !important;
  --tab-text-color-focused-active: #1a1a1a !important;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%) !important;
  --table-add-button-border-color: #ada7a4 !important;
  --table-border-color: #ada7a4 !important;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%) !important;
  --table-drag-handle-color: #808080 !important;
  --table-header-border-color: #ada7a4 !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%) !important;
  --tag-background: hsla(15, 72%, 70%, 0.7) !important;
  --tag-background-hover: hsla(15, 72%, 70%, 0.45) !important;
  --tag-bg-accent-hsl: 15, 72%, 70% !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: #111 !important;
  --tag-color-hover: #eee !important;
  --tag-padding-x: 0.5em !important;
  --tag-padding-y: 0.1em !important;
  --tag-radius: 0.6em !important;
  --tag-size: 12px !important;
  --tertiary: hsl(255, 89.76%, 75.9%) !important;
  --text-accent: hsl(258, 88%, 66%) !important;
  --text-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --text-faint: #808080 !important;
  --text-muted: #1a1a1a !important;
  --text-selection: DarkGray !important;
  --textHighlight: hsla(258, 88%, 66%, 0.1) !important;
  --titleFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(223, 14%, 85%) !important;
  --titlebar-background-focused: hsl(223, 14%, 85%) !important;
  --titlebar-border-color: #ada7a4 !important;
  --titlebar-text-color: #1a1a1a !important;
  --traffic-lights-offset-x: 38px !important;
  --traffic-lights-offset-y: 38px !important;
  --vault-profile-font-size: 12px !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
