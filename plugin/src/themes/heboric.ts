import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "heboric",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: rgb(200, 100, 100) !important;
  --background-modifier-border: hsl(221, 8%, 35%) !important;
  --background-modifier-border-focus: hsl(221, 8%, 55%) !important;
  --background-modifier-border-hover: hsl(221, 8%, 40%) !important;
  --background-modifier-form-field: hsl(221, 8%, 27%) !important;
  --background-modifier-form-field-hover: hsl(221, 8%, 27%) !important;
  --background-primary: hsl(221, 8%, 17%) !important;
  --background-primary-alt: hsl(221, 8%, 19%) !important;
  --background-secondary: hsl(221, 8%, 14%) !important;
  --background-secondary-alt: hsl(221, 8%, 35%) !important;
  --bases-cards-background: hsl(221, 8%, 17%) !important;
  --bases-cards-cover-background: hsl(221, 8%, 19%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(221, 8%, 35%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(221, 8%, 40%) !important;
  --bases-embed-border-color: hsl(221, 8%, 35%) !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: hsl(221, 8%, 75%) !important;
  --bases-table-border-color: hsl(221, 8%, 35%) !important;
  --bases-table-cell-background-active: hsl(221, 8%, 17%) !important;
  --bases-table-cell-background-disabled: hsl(221, 8%, 19%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(221, 8%, 55%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(200, 100, 100) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: hsl(221, 8%, 19%) !important;
  --bases-table-header-background: hsl(221, 8%, 17%) !important;
  --bases-table-header-color: hsl(221, 8%, 75%) !important;
  --bases-table-summary-background: hsl(221, 8%, 17%) !important;
  --blockquote-background-color: hsl(221, 8%, 17%) !important;
  --blockquote-border-color: rgb(200, 100, 100) !important;
  --blockquote-border-thickness: 0.2rem !important;
  --blur-background: color-mix(in srgb, hsl(221, 8%, 35%) 65%, transparent) linear-gradient(hsl(221, 8%, 35%), color-mix(in srgb, hsl(221, 8%, 35%) 65%, transparent)) !important;
  --bodyFont: "New York", "Georgia", ui-serif, serif !important;
  --button-radius: 3px !important;
  --callout-border-width: 1px;
  --callout-padding: 1rem;
  --callout-radius: 3px;
  --canvas-background: hsl(221, 8%, 17%) !important;
  --canvas-card-label-color: hsl(221, 8%, 45%) !important;
  --canvas-controls-radius: 3px !important;
  --canvas-dot-pattern: hsl(221, 8%, 35%) !important;
  --caret-color: hsl(221, 8%, 75%) !important;
  --checkbox-border-color: hsl(221, 8%, 45%) !important;
  --checkbox-border-color-hover: hsl(221, 8%, 75%) !important;
  --checkbox-color: rgb(200, 100, 100) !important;
  --checkbox-color-hover: rgb(200, 100, 100) !important;
  --checkbox-marker-color: hsl(221, 8%, 17%) !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: hsl(221, 8%, 75%) !important;
  --clickable-icon-radius: 3px !important;
  --code-background: hsl(221, 8%, 19%) !important;
  --code-border-color: hsl(221, 8%, 35%) !important;
  --code-comment: hsl(221, 8%, 35%) !important;
  --code-function: hsl(0, 50%, 60%) !important;
  --code-important: hsl(0, 50%, 60%) !important;
  --code-keyword: hsl(29, 57%, 60%) !important;
  --code-normal: hsl(221, 8%, 85%) !important;
  --code-operator: hsl(221, 8%, 65%) !important;
  --code-property: hsl(197, 53%, 65%) !important;
  --code-punctuation: hsl(221, 8%, 55%) !important;
  --code-radius: 3px !important;
  --code-size: 0.8rem !important;
  --code-string: hsl(93, 44%, 63%) !important;
  --code-tag: hsl(0, 50%, 65%) !important;
  --code-value: hsl(29, 50%, 60%) !important;
  --codeFont: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace !important;
  --collapse-icon-color: hsl(221, 8%, 45%) !important;
  --collapse-icon-color-collapsed: rgb(200, 100, 100) !important;
  --color-accent: rgb(200, 100, 100) !important;
  --color-accent-1: rgb(200, 100, 100) !important;
  --color-accent-2: rgb(220, 120, 120) !important;
  --color-base-00: hsl(221, 8%, 14%) !important;
  --color-base-05: hsl(221, 8%, 17%) !important;
  --color-base-10: hsl(221, 8%, 19%) !important;
  --color-base-100: hsl(221, 8%, 95%) !important;
  --color-base-20: hsl(221, 8%, 23%) !important;
  --color-base-25: hsl(221, 8%, 27%) !important;
  --color-base-30: hsl(221, 8%, 35%) !important;
  --color-base-35: hsl(221, 8%, 40%) !important;
  --color-base-40: hsl(221, 8%, 55%) !important;
  --color-base-50: hsl(221, 8%, 45%) !important;
  --color-base-60: hsl(221, 8%, 65%) !important;
  --color-base-70: hsl(221, 8%, 75%) !important;
  --color-base-80: hsl(221, 8%, 85%) !important;
  --dark: hsl(221, 8%, 75%) !important;
  --darkgray: hsl(221, 8%, 75%) !important;
  --divider-color: hsl(221, 8%, 23%) !important;
  --divider-color-hover: rgb(200, 100, 100) !important;
  --dropdown-background: hsl(221, 8%, 35%) !important;
  --dropdown-background-hover: hsl(221, 8%, 40%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(221, 8%, 35%), inset 0 0 0 1px hsl(221, 8%, 35%) !important;
  --embed-border-start: 2px solid rgb(200, 100, 100) !important;
  --file-header-background: hsl(221, 8%, 17%) !important;
  --file-header-background-focused: hsl(221, 8%, 17%) !important;
  --file-header-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --flair-background: hsl(221, 8%, 35%) !important;
  --flair-color: hsl(221, 8%, 75%) !important;
  --font-interface: "SF Pro", ui-sans-serif, sans-serif !important;
  --font-mermaid: "New York", "Georgia", ui-serif, serif !important;
  --font-monospace: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace !important;
  --font-text: "New York", "Georgia", ui-serif, serif !important;
  --footnote-divider-color: hsl(221, 8%, 35%) !important;
  --footnote-id-color: hsl(221, 8%, 75%) !important;
  --footnote-id-color-no-occurrences: hsl(221, 8%, 45%) !important;
  --footnote-radius: 3px !important;
  --graph-line: hsl(221, 8%, 40%) !important;
  --graph-node: hsl(221, 8%, 75%) !important;
  --graph-node-focused: rgb(200, 100, 100) !important;
  --graph-node-tag: rgb(200, 100, 100) !important;
  --graph-node-unresolved: rgb(220, 120, 120) !important;
  --graph-text: hsl(221, 8%, 75%) !important;
  --gray: hsl(221, 8%, 75%) !important;
  --h1-color: hsl(221, 8%, 95%) !important;
  --h1-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h1-size: 2rem !important;
  --h2-color: hsl(221, 8%, 95%) !important;
  --h2-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h2-size: 1.65rem !important;
  --h3-color: hsl(221, 8%, 85%) !important;
  --h3-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h3-size: 1.5rem !important;
  --h4-color: hsl(221, 8%, 85%) !important;
  --h4-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h4-size: 1.25rem !important;
  --h5-color: hsl(221, 8%, 85%) !important;
  --h5-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h5-size: 1.125rem !important;
  --h6-color: hsl(221, 8%, 85%) !important;
  --h6-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h6-size: 1rem !important;
  --headerFont: "New York", "Georgia", ui-serif, serif !important;
  --heading-formatting: hsl(221, 8%, 45%) !important;
  --highlight: rgb(200, 100, 100) !important;
  --hr-color: hsl(221, 8%, 27%) !important;
  --hr-thickness: 0.125rem !important;
  --icon-color: hsl(221, 8%, 75%) !important;
  --icon-color-active: hsl(221, 8%, 95%) !important;
  --icon-color-focused: hsl(221, 8%, 75%) !important;
  --icon-color-hover: hsl(221, 8%, 75%) !important;
  --inline-title-color: hsl(221, 8%, 95%) !important;
  --inline-title-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --inline-title-size: 2.5rem !important;
  --input-date-separator: hsl(221, 8%, 45%) !important;
  --input-placeholder-color: hsl(221, 8%, 45%) !important;
  --input-radius: 3px !important;
  --interactive-accent: rgb(200, 100, 100) !important;
  --interactive-accent-hover: rgb(200, 100, 100) !important;
  --interactive-hover: hsl(221, 8%, 40%) !important;
  --interactive-normal: hsl(221, 8%, 35%) !important;
  --light: hsl(221, 8%, 17%) !important;
  --lightgray: hsl(221, 8%, 14%) !important;
  --link-color: rgb(200, 100, 100) !important;
  --link-color-hover: rgb(220, 120, 120) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(200, 100, 100) !important;
  --link-external-color-hover: rgb(220, 120, 120) !important;
  --link-unresolved-color: rgb(220, 120, 120) !important;
  --list-marker-color: hsl(221, 8%, 45%) !important;
  --list-marker-color-collapsed: rgb(200, 100, 100) !important;
  --list-marker-color-hover: hsl(221, 8%, 75%) !important;
  --menu-background: hsl(221, 8%, 14%) !important;
  --menu-border-color: hsl(221, 8%, 40%) !important;
  --metadata-border-color: hsl(221, 8%, 35%) !important;
  --metadata-divider-color: hsl(221, 8%, 35%) !important;
  --metadata-input-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --metadata-input-text-color: hsl(221, 8%, 75%) !important;
  --metadata-label-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --metadata-label-text-color: hsl(221, 8%, 75%) !important;
  --metadata-label-text-color-hover: hsl(221, 8%, 75%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(221, 8%, 55%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(221, 8%, 40%) !important;
  --modal-background: hsl(221, 8%, 17%) !important;
  --modal-border-color: hsl(221, 8%, 55%) !important;
  --modal-radius: 3px !important;
  --mono: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace !important;
  --nav-collapse-icon-color: hsl(221, 8%, 45%) !important;
  --nav-collapse-icon-color-collapsed: hsl(221, 8%, 45%) !important;
  --nav-heading-color: hsl(221, 8%, 75%) !important;
  --nav-heading-color-collapsed: hsl(221, 8%, 45%) !important;
  --nav-heading-color-collapsed-hover: hsl(221, 8%, 75%) !important;
  --nav-heading-color-hover: hsl(221, 8%, 75%) !important;
  --nav-item-background-active: rgb(200, 100, 100) !important;
  --nav-item-background-hover: rgb(200, 100, 100) !important;
  --nav-item-color: hsl(221, 8%, 75%) !important;
  --nav-item-color-active: hsl(221, 8%, 85%) !important;
  --nav-item-color-highlighted: rgb(200, 100, 100) !important;
  --nav-item-color-hover: hsl(221, 8%, 85%) !important;
  --nav-item-color-selected: hsl(221, 8%, 75%) !important;
  --nav-item-radius: 3px !important;
  --nav-tag-color: hsl(221, 8%, 45%) !important;
  --nav-tag-color-active: hsl(221, 8%, 75%) !important;
  --nav-tag-color-hover: hsl(221, 8%, 75%) !important;
  --nav-tag-radius: 3px !important;
  --pdf-background: hsl(221, 8%, 17%) !important;
  --pdf-page-background: hsl(221, 8%, 17%) !important;
  --pdf-shadow: 0 0 0 1px hsl(221, 8%, 35%) !important;
  --pdf-sidebar-background: hsl(221, 8%, 17%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(221, 8%, 35%) !important;
  --pill-border-color: hsl(221, 8%, 35%) !important;
  --pill-border-color-hover: hsl(221, 8%, 40%) !important;
  --pill-color: hsl(221, 8%, 75%) !important;
  --pill-color-hover: hsl(221, 8%, 75%) !important;
  --pill-color-remove: hsl(221, 8%, 45%) !important;
  --pill-color-remove-hover: rgb(200, 100, 100) !important;
  --pill-radius: 3px !important;
  --prompt-background: hsl(221, 8%, 17%) !important;
  --prompt-border-color: rgb(200, 100, 100) !important;
  --prompt-border-width: 0.15rem !important;
  --radius-s: 3px !important;
  --raised-background: color-mix(in srgb, hsl(221, 8%, 35%) 65%, transparent) linear-gradient(hsl(221, 8%, 35%), color-mix(in srgb, hsl(221, 8%, 35%) 65%, transparent)) !important;
  --ribbon-background: hsl(221, 8%, 14%) !important;
  --ribbon-background-collapsed: hsl(221, 8%, 17%) !important;
  --sans-serif: "SF Pro", ui-sans-serif, sans-serif !important;
  --search-clear-button-color: hsl(221, 8%, 75%) !important;
  --search-icon-color: hsl(221, 8%, 75%) !important;
  --search-result-background: hsl(221, 8%, 17%) !important;
  --secondary: rgb(200, 100, 100) !important;
  --serif: "New York", "Georgia", ui-serif, serif !important;
  --setting-group-heading-color: hsl(221, 8%, 75%) !important;
  --setting-items-background: hsl(221, 8%, 19%) !important;
  --setting-items-border-color: hsl(221, 8%, 35%) !important;
  --slider-thumb-border-color: hsl(221, 8%, 40%) !important;
  --slider-track-background: hsl(221, 8%, 35%) !important;
  --status-bar-background: hsl(221, 8%, 14%) !important;
  --status-bar-border-color: hsl(221, 8%, 23%) !important;
  --status-bar-text-color: hsl(221, 8%, 75%) !important;
  --suggestion-background: hsl(221, 8%, 17%) !important;
  --swatch-radius: 3px !important;
  --tab-background-active: hsl(221, 8%, 17%) !important;
  --tab-container-background: hsl(221, 8%, 14%) !important;
  --tab-divider-color: hsl(221, 8%, 40%) !important;
  --tab-outline-color: hsl(221, 8%, 23%) !important;
  --tab-radius: 3px !important;
  --tab-switcher-background: hsl(221, 8%, 14%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(221, 8%, 14%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(200, 100, 100) !important;
  --tab-text-color: hsl(221, 8%, 45%) !important;
  --tab-text-color-active: hsl(221, 8%, 95%) !important;
  --tab-text-color-focused: hsl(221, 8%, 75%) !important;
  --tab-text-color-focused-active: hsl(221, 8%, 95%) !important;
  --tab-text-color-focused-active-current: hsl(221, 8%, 95%) !important;
  --tab-text-color-focused-highlighted: rgb(200, 100, 100) !important;
  --table-add-button-border-color: hsl(221, 8%, 35%) !important;
  --table-border-color: hsl(221, 8%, 35%) !important;
  --table-drag-handle-background-active: rgb(200, 100, 100) !important;
  --table-drag-handle-color: hsl(221, 8%, 45%) !important;
  --table-header-background: hsl(221, 8%, 23%) !important;
  --table-header-border-color: hsl(221, 8%, 35%) !important;
  --table-header-color: hsl(221, 8%, 75%) !important;
  --table-header-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --table-selection-border-color: rgb(200, 100, 100) !important;
  --tag-background: rgb(200, 100, 100) !important;
  --tag-background-hover: rgb(220, 120, 120) !important;
  --tag-color: hsl(221, 8%, 95%) !important;
  --tag-color-hover: hsl(221, 8%, 95%) !important;
  --tag-radius: 3px !important;
  --tertiary: rgb(220, 120, 120) !important;
  --text-accent: rgb(200, 100, 100) !important;
  --text-accent-hover: rgb(220, 120, 120) !important;
  --text-faint: hsl(221, 8%, 45%) !important;
  --text-muted: hsl(221, 8%, 75%) !important;
  --text-normal: hsl(221, 8%, 75%) !important;
  --text-selection: hsl(0, 40%, 50%) !important;
  --textHighlight: rgb(200, 100, 100) !important;
  --titleFont: "New York", "Georgia", ui-serif, serif !important;
  --titlebar-background: hsl(221, 8%, 14%) !important;
  --titlebar-background-focused: hsl(221, 8%, 14%) !important;
  --titlebar-border-color: hsl(221, 8%, 35%) !important;
  --titlebar-text-color: hsl(221, 8%, 75%) !important;
  --titlebar-text-color-focused: hsl(221, 8%, 75%) !important;
  --vault-profile-color: hsl(221, 8%, 75%) !important;
  --vault-profile-color-hover: hsl(221, 8%, 75%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 35, 39);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(40, 42, 47);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 35, 39);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 35, 39);
  border-left-color: rgb(54, 57, 63);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(40, 42, 47);
  color: rgb(186, 189, 196);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(241, 242, 243);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(241, 242, 243) none 0px;
  text-decoration-color: rgb(241, 242, 243);
}

html[saved-theme="dark"] body del {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body p {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration-color: rgb(200, 100, 100);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration-color: rgb(200, 100, 100);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(220, 120, 120);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(220, 120, 120) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body dt {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(106, 111, 124);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(40, 42, 47);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body table {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  width: 204.625px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(82, 87, 96);
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  color: rgb(186, 189, 196);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(82, 87, 96);
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  color: rgb(186, 189, 196);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(54, 57, 63);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(214, 216, 220);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(214, 216, 220);
  border-right-color: rgb(214, 216, 220);
  border-top-color: rgb(214, 216, 220);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(214, 216, 220);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(204, 102, 102);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(204, 102, 102);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(204, 102, 102);
  border-left-color: rgb(204, 102, 102);
  border-right-color: rgb(204, 102, 102);
  border-top-color: rgb(204, 102, 102);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(200, 100, 100);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(200, 100, 100);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(106, 111, 124);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(106, 111, 124);
  border-right-color: rgb(106, 111, 124);
  border-top-color: rgb(106, 111, 124);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(40, 42, 47);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(63, 67, 74);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(40, 42, 47);
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 35, 39);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(200, 100, 100);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(241, 242, 243);
}

html[saved-theme="dark"] body h1 {
  color: rgb(241, 242, 243);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(241, 242, 243);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(241, 242, 243);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(33, 35, 39);
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
  border-top-color: rgb(54, 57, 63);
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(186, 189, 196);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(186, 189, 196);
  stroke: rgb(186, 189, 196);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(106, 111, 124);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(214, 216, 220);
  border-left-color: rgb(214, 216, 220);
  border-right-color: rgb(214, 216, 220);
  border-top-color: rgb(214, 216, 220);
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(82, 87, 96);
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  color: rgb(186, 189, 196);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(33, 35, 39);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(214, 216, 220);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(214, 216, 220);
  border-right-color: rgb(214, 216, 220);
  border-top-color: rgb(214, 216, 220);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(214, 216, 220);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body sub {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body summary {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body sup {
  color: rgb(186, 189, 196);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgb(250, 240, 240) !important;
  --background-primary: #fefefe !important;
  --background-secondary: hsl(18, 65%, 98%) !important;
  --background-secondary-alt: #fefefe !important;
  --bases-cards-background: #fefefe !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: #555555 !important;
  --bases-table-cell-background-active: #fefefe !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(200, 100, 100) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-header-background: #fefefe !important;
  --bases-table-header-color: #555555 !important;
  --bases-table-summary-background: #fefefe !important;
  --blockquote-background-color: #fefefe !important;
  --blockquote-border-color: rgb(200, 100, 100) !important;
  --blockquote-border-thickness: 0.2rem !important;
  --blur-background: color-mix(in srgb, #fefefe 65%, transparent) linear-gradient(#fefefe, color-mix(in srgb, #fefefe 65%, transparent)) !important;
  --bodyFont: "New York", "Georgia", ui-serif, serif !important;
  --button-radius: 3px !important;
  --callout-border-width: 1px;
  --callout-padding: 1rem;
  --callout-radius: 3px;
  --canvas-background: #fefefe !important;
  --canvas-controls-radius: 3px !important;
  --caret-color: #555555 !important;
  --checkbox-border-color-hover: #555555 !important;
  --checkbox-color: rgb(200, 100, 100) !important;
  --checkbox-color-hover: rgb(220, 120, 120) !important;
  --checkbox-marker-color: #fefefe !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: #555555 !important;
  --clickable-icon-radius: 3px !important;
  --code-background: #f6f6f6 !important;
  --code-comment: #bdbdbd !important;
  --code-function: hsl(0, 50%, 55%) !important;
  --code-important: hsl(0, 50%, 55%) !important;
  --code-keyword: hsl(29, 57%, 55%) !important;
  --code-normal: #444444 !important;
  --code-operator: #727272 !important;
  --code-property: hsl(197, 53%, 55%) !important;
  --code-punctuation: #bdbdbd !important;
  --code-radius: 3px !important;
  --code-size: 0.8rem !important;
  --code-string: hsl(93, 30%, 65%) !important;
  --code-tag: hsl(0, 50%, 60%) !important;
  --code-value: hsl(29, 50%, 55%) !important;
  --codeFont: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace !important;
  --collapse-icon-color-collapsed: rgb(200, 100, 100) !important;
  --color-accent: rgb(200, 100, 100) !important;
  --color-accent-1: rgb(200, 100, 100) !important;
  --color-accent-2: rgb(220, 120, 120) !important;
  --color-base-05: #fefefe !important;
  --color-base-100: #000000 !important;
  --color-base-60: #727272 !important;
  --color-base-70: #555555 !important;
  --color-base-80: #444444 !important;
  --dark: #555555 !important;
  --darkgray: #555555 !important;
  --divider-color-hover: rgb(200, 100, 100) !important;
  --embed-border-start: 2px solid rgb(200, 100, 100) !important;
  --file-header-background: #fefefe !important;
  --file-header-background-focused: #fefefe !important;
  --file-header-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --flair-color: #555555 !important;
  --font-interface: "SF Pro", ui-sans-serif, sans-serif !important;
  --font-mermaid: "New York", "Georgia", ui-serif, serif !important;
  --font-monospace: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace !important;
  --font-text: "New York", "Georgia", ui-serif, serif !important;
  --footnote-id-color: #555555 !important;
  --footnote-radius: 3px !important;
  --graph-node: #555555 !important;
  --graph-node-focused: rgb(200, 100, 100) !important;
  --graph-node-tag: rgb(200, 100, 100) !important;
  --graph-node-unresolved: rgb(220, 120, 120) !important;
  --graph-text: #555555 !important;
  --gray: #555555 !important;
  --h1-color: #000000 !important;
  --h1-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h1-size: 2rem !important;
  --h2-color: #000000 !important;
  --h2-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h2-size: 1.65rem !important;
  --h3-color: #444444 !important;
  --h3-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h3-size: 1.5rem !important;
  --h4-color: #444444 !important;
  --h4-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h4-size: 1.25rem !important;
  --h5-color: #444444 !important;
  --h5-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h5-size: 1.125rem !important;
  --h6-color: #444444 !important;
  --h6-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h6-size: 1rem !important;
  --headerFont: "New York", "Georgia", ui-serif, serif !important;
  --highlight: rgb(250, 240, 240) !important;
  --hr-color: #e3e3e3 !important;
  --hr-thickness: 0.125rem !important;
  --icon-color: #555555 !important;
  --icon-color-active: rgb(200, 100, 100) !important;
  --icon-color-focused: #555555 !important;
  --icon-color-hover: #555555 !important;
  --inline-title-color: #000000 !important;
  --inline-title-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --inline-title-size: 2.5rem !important;
  --input-radius: 3px !important;
  --interactive-accent: rgb(200, 100, 100) !important;
  --interactive-accent-hover: rgb(220, 120, 120) !important;
  --light: #fefefe !important;
  --lightgray: hsl(18, 65%, 98%) !important;
  --link-color: rgb(200, 100, 100) !important;
  --link-color-hover: rgb(220, 120, 120) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(200, 100, 100) !important;
  --link-external-color-hover: rgb(220, 120, 120) !important;
  --link-unresolved-color: rgb(220, 120, 120) !important;
  --list-marker-color-collapsed: rgb(200, 100, 100) !important;
  --list-marker-color-hover: #555555 !important;
  --menu-background: hsl(18, 65%, 98%) !important;
  --metadata-input-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --metadata-input-text-color: #555555 !important;
  --metadata-label-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --metadata-label-text-color: #555555 !important;
  --metadata-label-text-color-hover: #555555 !important;
  --modal-background: #fefefe !important;
  --modal-radius: 3px !important;
  --mono: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace !important;
  --nav-heading-color: #555555 !important;
  --nav-heading-color-collapsed-hover: #555555 !important;
  --nav-heading-color-hover: #555555 !important;
  --nav-item-background-active: rgb(200, 100, 100) !important;
  --nav-item-background-hover: rgb(200, 100, 100) !important;
  --nav-item-color: #555555 !important;
  --nav-item-color-active: #f6f6f6 !important;
  --nav-item-color-highlighted: rgb(200, 100, 100) !important;
  --nav-item-color-hover: #f6f6f6 !important;
  --nav-item-color-selected: #555555 !important;
  --nav-item-radius: 3px !important;
  --nav-tag-color-active: #555555 !important;
  --nav-tag-color-hover: #555555 !important;
  --nav-tag-radius: 3px !important;
  --pdf-background: #fefefe !important;
  --pdf-page-background: #fefefe !important;
  --pdf-sidebar-background: #fefefe !important;
  --pill-color: #555555 !important;
  --pill-color-hover: #555555 !important;
  --pill-color-remove-hover: rgb(200, 100, 100) !important;
  --pill-radius: 3px !important;
  --prompt-background: #fefefe !important;
  --prompt-border-color: rgb(200, 100, 100) !important;
  --prompt-border-width: 0.15rem !important;
  --radius-s: 3px !important;
  --raised-background: color-mix(in srgb, #fefefe 65%, transparent) linear-gradient(#fefefe, color-mix(in srgb, #fefefe 65%, transparent)) !important;
  --ribbon-background: hsl(18, 65%, 98%) !important;
  --ribbon-background-collapsed: #fefefe !important;
  --sans-serif: "SF Pro", ui-sans-serif, sans-serif !important;
  --search-clear-button-color: #555555 !important;
  --search-icon-color: #555555 !important;
  --search-result-background: #fefefe !important;
  --secondary: rgb(200, 100, 100) !important;
  --serif: "New York", "Georgia", ui-serif, serif !important;
  --setting-group-heading-color: #555555 !important;
  --status-bar-background: hsl(18, 65%, 98%) !important;
  --status-bar-text-color: #555555 !important;
  --suggestion-background: #fefefe !important;
  --swatch-radius: 3px !important;
  --tab-background-active: #fefefe !important;
  --tab-container-background: hsl(18, 65%, 98%) !important;
  --tab-radius: 3px !important;
  --tab-switcher-background: hsl(18, 65%, 98%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(18, 65%, 98%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(200, 100, 100) !important;
  --tab-text-color-active: #000000 !important;
  --tab-text-color-focused: #555555 !important;
  --tab-text-color-focused-active: #000000 !important;
  --tab-text-color-focused-active-current: #000000 !important;
  --tab-text-color-focused-highlighted: rgb(200, 100, 100) !important;
  --table-drag-handle-background-active: rgb(200, 100, 100) !important;
  --table-header-background: #f6f6f6 !important;
  --table-header-color: #555555 !important;
  --table-header-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --table-selection-border-color: rgb(200, 100, 100) !important;
  --tag-background: rgb(200, 100, 100) !important;
  --tag-background-hover: rgb(220, 120, 120) !important;
  --tag-color: #fafafa !important;
  --tag-color-hover: #ffffff !important;
  --tag-radius: 3px !important;
  --tertiary: rgb(220, 120, 120) !important;
  --text-accent: rgb(200, 100, 100) !important;
  --text-accent-hover: rgb(220, 120, 120) !important;
  --text-muted: #555555 !important;
  --text-normal: #555555 !important;
  --text-selection: rgb(200, 100, 100) !important;
  --textHighlight: rgb(250, 240, 240) !important;
  --titleFont: "New York", "Georgia", ui-serif, serif !important;
  --titlebar-background-focused: #f6f6f6 !important;
  --titlebar-text-color: #555555 !important;
  --titlebar-text-color-focused: #555555 !important;
  --vault-profile-color: #555555 !important;
  --vault-profile-color-hover: #555555 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(254, 254, 254);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(254, 254, 254);
  color: rgb(85, 85, 85);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body del {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body p {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration-color: rgb(200, 100, 100);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration-color: rgb(200, 100, 100);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(220, 120, 120);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(220, 120, 120) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body dt {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ol > li {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ul > li {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgb(254, 254, 254);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body table {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  width: 204.625px;
}

html[saved-theme="light"] body td {
  color: rgb(85, 85, 85);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

html[saved-theme="light"] body th {
  color: rgb(85, 85, 85);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

html[saved-theme="light"] body tr {
  background-color: rgb(246, 246, 246);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(68, 68, 68);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(68, 68, 68);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(198, 83, 83);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(198, 83, 83);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(198, 83, 83);
  border-left-color: rgb(198, 83, 83);
  border-right-color: rgb(198, 83, 83);
  border-top-color: rgb(198, 83, 83);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body figcaption {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(200, 100, 100);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(200, 100, 100);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(254, 254, 254);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 249, 247);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(200, 100, 100);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(250, 250, 250);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 0, 0);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 0, 0);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(85, 85, 85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(85, 85, 85);
  stroke: rgb(85, 85, 85);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .metadata {
  color: rgb(85, 85, 85);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(253, 249, 247);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(68, 68, 68);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(68, 68, 68);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body sub {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body summary {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body sup {
  color: rgb(85, 85, 85);
}`,
  },
};
