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
  --background-modifier-border: rgb(82, 87, 96) !important;
  --background-modifier-border-focus: rgb(131, 137, 149) !important;
  --background-modifier-border-hover: rgb(94, 99, 110) !important;
  --background-modifier-form-field: rgb(63, 67, 74) !important;
  --background-modifier-form-field-hover: rgb(63, 67, 74) !important;
  --background-primary: rgb(40, 42, 47) !important;
  --background-primary-alt: rgb(45, 47, 52) !important;
  --background-secondary: rgb(33, 35, 39) !important;
  --background-secondary-alt: rgb(82, 87, 96) !important;
  --bases-cards-background: rgb(40, 42, 47) !important;
  --bases-cards-cover-background: rgb(45, 47, 52) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(82, 87, 96) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(94, 99, 110) !important;
  --bases-embed-border-color: rgb(82, 87, 96) !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: rgb(186, 189, 196) !important;
  --bases-table-border-color: rgb(82, 87, 96) !important;
  --bases-table-cell-background-active: rgb(40, 42, 47) !important;
  --bases-table-cell-background-disabled: rgb(45, 47, 52) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(131, 137, 149) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(200, 100, 100) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: rgb(45, 47, 52) !important;
  --bases-table-header-background: rgb(40, 42, 47) !important;
  --bases-table-header-color: rgb(186, 189, 196) !important;
  --bases-table-summary-background: rgb(40, 42, 47) !important;
  --blockquote-background-color: rgb(40, 42, 47) !important;
  --blockquote-border-color: rgb(200, 100, 100) !important;
  --blockquote-border-thickness: 0.2rem !important;
  --blur-background: color-mix(in srgb, rgb(82, 87, 96) 65%, transparent) linear-gradient(rgb(82, 87, 96), color-mix(in srgb, rgb(82, 87, 96) 65%, transparent)) !important;
  --bodyFont: "New York", "Georgia", ui-serif, serif !important;
  --button-radius: 3px !important;
  --callout-border-width: 1px;
  --callout-padding: 1rem;
  --callout-radius: 3px;
  --canvas-background: rgb(40, 42, 47) !important;
  --canvas-card-label-color: rgb(106, 111, 124) !important;
  --canvas-controls-radius: 3px !important;
  --canvas-dot-pattern: rgb(82, 87, 96) !important;
  --caret-color: rgb(186, 189, 196) !important;
  --checkbox-border-color: rgb(106, 111, 124) !important;
  --checkbox-border-color-hover: rgb(186, 189, 196) !important;
  --checkbox-color: rgb(200, 100, 100) !important;
  --checkbox-color-hover: rgb(200, 100, 100) !important;
  --checkbox-marker-color: rgb(40, 42, 47) !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: rgb(186, 189, 196) !important;
  --clickable-icon-radius: 3px !important;
  --code-background: rgb(45, 47, 52) !important;
  --code-border-color: rgb(82, 87, 96) !important;
  --code-comment: rgb(82, 87, 96) !important;
  --code-function: rgb(204, 102, 102) !important;
  --code-important: rgb(204, 102, 102) !important;
  --code-keyword: rgb(211, 151, 95) !important;
  --code-normal: rgb(214, 216, 220) !important;
  --code-operator: rgb(159, 163, 173) !important;
  --code-property: rgb(118, 186, 213) !important;
  --code-punctuation: rgb(131, 137, 149) !important;
  --code-radius: 3px !important;
  --code-size: 0.8rem !important;
  --code-string: rgb(156, 202, 119) !important;
  --code-tag: rgb(210, 121, 121) !important;
  --code-value: rgb(204, 151, 102) !important;
  --codeFont: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace !important;
  --collapse-icon-color: rgb(106, 111, 124) !important;
  --collapse-icon-color-collapsed: rgb(200, 100, 100) !important;
  --color-accent: rgb(200, 100, 100) !important;
  --color-accent-1: rgb(200, 100, 100) !important;
  --color-accent-2: rgb(220, 120, 120) !important;
  --color-base-00: rgb(33, 35, 39) !important;
  --color-base-05: rgb(40, 42, 47) !important;
  --color-base-10: rgb(45, 47, 52) !important;
  --color-base-100: rgb(241, 242, 243) !important;
  --color-base-20: rgb(54, 57, 63) !important;
  --color-base-25: rgb(63, 67, 74) !important;
  --color-base-30: rgb(82, 87, 96) !important;
  --color-base-35: rgb(94, 99, 110) !important;
  --color-base-40: rgb(131, 137, 149) !important;
  --color-base-50: rgb(106, 111, 124) !important;
  --color-base-60: rgb(159, 163, 173) !important;
  --color-base-70: rgb(186, 189, 196) !important;
  --color-base-80: rgb(214, 216, 220) !important;
  --dark: rgb(186, 189, 196) !important;
  --darkgray: rgb(186, 189, 196) !important;
  --divider-color: rgb(54, 57, 63) !important;
  --divider-color-hover: rgb(200, 100, 100) !important;
  --dropdown-background: rgb(82, 87, 96) !important;
  --dropdown-background-hover: rgb(94, 99, 110) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(82, 87, 96), inset 0 0 0 1px rgb(82, 87, 96) !important;
  --embed-border-start: 2px solid rgb(200, 100, 100) !important;
  --file-header-background: rgb(40, 42, 47) !important;
  --file-header-background-focused: rgb(40, 42, 47) !important;
  --file-header-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --flair-background: rgb(82, 87, 96) !important;
  --flair-color: rgb(186, 189, 196) !important;
  --font-interface: "SF Pro", ui-sans-serif, sans-serif !important;
  --font-mermaid: "New York", "Georgia", ui-serif, serif !important;
  --font-monospace: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace !important;
  --font-text: "New York", "Georgia", ui-serif, serif !important;
  --footnote-divider-color: rgb(82, 87, 96) !important;
  --footnote-id-color: rgb(186, 189, 196) !important;
  --footnote-id-color-no-occurrences: rgb(106, 111, 124) !important;
  --footnote-radius: 3px !important;
  --graph-line: rgb(94, 99, 110) !important;
  --graph-node: rgb(186, 189, 196) !important;
  --graph-node-focused: rgb(200, 100, 100) !important;
  --graph-node-tag: rgb(200, 100, 100) !important;
  --graph-node-unresolved: rgb(220, 120, 120) !important;
  --graph-text: rgb(186, 189, 196) !important;
  --gray: rgb(186, 189, 196) !important;
  --h1-color: rgb(241, 242, 243) !important;
  --h1-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h1-size: 2rem !important;
  --h2-color: rgb(241, 242, 243) !important;
  --h2-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h2-size: 1.65rem !important;
  --h3-color: rgb(214, 216, 220) !important;
  --h3-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h3-size: 1.5rem !important;
  --h4-color: rgb(214, 216, 220) !important;
  --h4-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h4-size: 1.25rem !important;
  --h5-color: rgb(214, 216, 220) !important;
  --h5-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h5-size: 1.125rem !important;
  --h6-color: rgb(214, 216, 220) !important;
  --h6-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --h6-size: 1rem !important;
  --headerFont: "New York", "Georgia", ui-serif, serif !important;
  --heading-formatting: rgb(106, 111, 124) !important;
  --highlight: rgb(200, 100, 100) !important;
  --hr-color: rgb(63, 67, 74) !important;
  --hr-thickness: 0.125rem !important;
  --icon-color: rgb(186, 189, 196) !important;
  --icon-color-active: rgb(241, 242, 243) !important;
  --icon-color-focused: rgb(186, 189, 196) !important;
  --icon-color-hover: rgb(186, 189, 196) !important;
  --inline-title-color: rgb(241, 242, 243) !important;
  --inline-title-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --inline-title-size: 2.5rem !important;
  --input-date-separator: rgb(106, 111, 124) !important;
  --input-placeholder-color: rgb(106, 111, 124) !important;
  --input-radius: 3px !important;
  --interactive-accent: rgb(200, 100, 100) !important;
  --interactive-accent-hover: rgb(200, 100, 100) !important;
  --interactive-hover: rgb(94, 99, 110) !important;
  --interactive-normal: rgb(82, 87, 96) !important;
  --light: rgb(40, 42, 47) !important;
  --lightgray: rgb(33, 35, 39) !important;
  --link-color: rgb(200, 100, 100) !important;
  --link-color-hover: rgb(220, 120, 120) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(200, 100, 100) !important;
  --link-external-color-hover: rgb(220, 120, 120) !important;
  --link-unresolved-color: rgb(220, 120, 120) !important;
  --list-marker-color: rgb(106, 111, 124) !important;
  --list-marker-color-collapsed: rgb(200, 100, 100) !important;
  --list-marker-color-hover: rgb(186, 189, 196) !important;
  --menu-background: rgb(33, 35, 39) !important;
  --menu-border-color: rgb(94, 99, 110) !important;
  --metadata-border-color: rgb(82, 87, 96) !important;
  --metadata-divider-color: rgb(82, 87, 96) !important;
  --metadata-input-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --metadata-input-text-color: rgb(186, 189, 196) !important;
  --metadata-label-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --metadata-label-text-color: rgb(186, 189, 196) !important;
  --metadata-label-text-color-hover: rgb(186, 189, 196) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(131, 137, 149) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(94, 99, 110) !important;
  --modal-background: rgb(40, 42, 47) !important;
  --modal-border-color: rgb(131, 137, 149) !important;
  --modal-radius: 3px !important;
  --mono: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace !important;
  --nav-collapse-icon-color: rgb(106, 111, 124) !important;
  --nav-collapse-icon-color-collapsed: rgb(106, 111, 124) !important;
  --nav-heading-color: rgb(186, 189, 196) !important;
  --nav-heading-color-collapsed: rgb(106, 111, 124) !important;
  --nav-heading-color-collapsed-hover: rgb(186, 189, 196) !important;
  --nav-heading-color-hover: rgb(186, 189, 196) !important;
  --nav-item-background-active: rgb(200, 100, 100) !important;
  --nav-item-background-hover: rgb(200, 100, 100) !important;
  --nav-item-color: rgb(186, 189, 196) !important;
  --nav-item-color-active: rgb(214, 216, 220) !important;
  --nav-item-color-highlighted: rgb(200, 100, 100) !important;
  --nav-item-color-hover: rgb(214, 216, 220) !important;
  --nav-item-color-selected: rgb(186, 189, 196) !important;
  --nav-item-radius: 3px !important;
  --nav-tag-color: rgb(106, 111, 124) !important;
  --nav-tag-color-active: rgb(186, 189, 196) !important;
  --nav-tag-color-hover: rgb(186, 189, 196) !important;
  --nav-tag-radius: 3px !important;
  --pdf-background: rgb(40, 42, 47) !important;
  --pdf-page-background: rgb(40, 42, 47) !important;
  --pdf-shadow: 0 0 0 1px rgb(82, 87, 96) !important;
  --pdf-sidebar-background: rgb(40, 42, 47) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(82, 87, 96) !important;
  --pill-border-color: rgb(82, 87, 96) !important;
  --pill-border-color-hover: rgb(94, 99, 110) !important;
  --pill-color: rgb(186, 189, 196) !important;
  --pill-color-hover: rgb(186, 189, 196) !important;
  --pill-color-remove: rgb(106, 111, 124) !important;
  --pill-color-remove-hover: rgb(200, 100, 100) !important;
  --pill-radius: 3px !important;
  --prompt-background: rgb(40, 42, 47) !important;
  --prompt-border-color: rgb(200, 100, 100) !important;
  --prompt-border-width: 0.15rem !important;
  --radius-s: 3px !important;
  --raised-background: color-mix(in srgb, rgb(82, 87, 96) 65%, transparent) linear-gradient(rgb(82, 87, 96), color-mix(in srgb, rgb(82, 87, 96) 65%, transparent)) !important;
  --ribbon-background: rgb(33, 35, 39) !important;
  --ribbon-background-collapsed: rgb(40, 42, 47) !important;
  --sans-serif: "SF Pro", ui-sans-serif, sans-serif !important;
  --search-clear-button-color: rgb(186, 189, 196) !important;
  --search-icon-color: rgb(186, 189, 196) !important;
  --search-result-background: rgb(40, 42, 47) !important;
  --secondary: rgb(200, 100, 100) !important;
  --serif: "New York", "Georgia", ui-serif, serif !important;
  --setting-group-heading-color: rgb(186, 189, 196) !important;
  --setting-items-background: rgb(45, 47, 52) !important;
  --setting-items-border-color: rgb(82, 87, 96) !important;
  --slider-thumb-border-color: rgb(94, 99, 110) !important;
  --slider-track-background: rgb(82, 87, 96) !important;
  --status-bar-background: rgb(33, 35, 39) !important;
  --status-bar-border-color: rgb(54, 57, 63) !important;
  --status-bar-text-color: rgb(186, 189, 196) !important;
  --suggestion-background: rgb(40, 42, 47) !important;
  --swatch-radius: 3px !important;
  --tab-background-active: rgb(40, 42, 47) !important;
  --tab-container-background: rgb(33, 35, 39) !important;
  --tab-divider-color: rgb(94, 99, 110) !important;
  --tab-outline-color: rgb(54, 57, 63) !important;
  --tab-radius: 3px !important;
  --tab-switcher-background: rgb(33, 35, 39) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(33, 35, 39), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(200, 100, 100) !important;
  --tab-text-color: rgb(106, 111, 124) !important;
  --tab-text-color-active: rgb(241, 242, 243) !important;
  --tab-text-color-focused: rgb(186, 189, 196) !important;
  --tab-text-color-focused-active: rgb(241, 242, 243) !important;
  --tab-text-color-focused-active-current: rgb(241, 242, 243) !important;
  --tab-text-color-focused-highlighted: rgb(200, 100, 100) !important;
  --table-add-button-border-color: rgb(82, 87, 96) !important;
  --table-border-color: rgb(82, 87, 96) !important;
  --table-drag-handle-background-active: rgb(200, 100, 100) !important;
  --table-drag-handle-color: rgb(106, 111, 124) !important;
  --table-header-background: rgb(54, 57, 63) !important;
  --table-header-border-color: rgb(82, 87, 96) !important;
  --table-header-color: rgb(186, 189, 196) !important;
  --table-header-font: "SF Pro", ui-sans-serif, sans-serif !important;
  --table-selection-border-color: rgb(200, 100, 100) !important;
  --tag-background: rgb(200, 100, 100) !important;
  --tag-background-hover: rgb(220, 120, 120) !important;
  --tag-color: rgb(241, 242, 243) !important;
  --tag-color-hover: rgb(241, 242, 243) !important;
  --tag-radius: 3px !important;
  --tertiary: rgb(220, 120, 120) !important;
  --text-accent: rgb(200, 100, 100) !important;
  --text-accent-hover: rgb(220, 120, 120) !important;
  --text-faint: rgb(106, 111, 124) !important;
  --text-muted: rgb(186, 189, 196) !important;
  --text-normal: rgb(186, 189, 196) !important;
  --text-selection: rgb(179, 77, 77) !important;
  --textHighlight: rgb(200, 100, 100) !important;
  --titleFont: "New York", "Georgia", ui-serif, serif !important;
  --titlebar-background: rgb(33, 35, 39) !important;
  --titlebar-background-focused: rgb(33, 35, 39) !important;
  --titlebar-border-color: rgb(82, 87, 96) !important;
  --titlebar-text-color: rgb(186, 189, 196) !important;
  --titlebar-text-color-focused: rgb(186, 189, 196) !important;
  --vault-profile-color: rgb(186, 189, 196) !important;
  --vault-profile-color-hover: rgb(186, 189, 196) !important;
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
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(241, 242, 243);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(241, 242, 243) none 0px;
  text-decoration: rgb(241, 242, 243);
  text-decoration-color: rgb(241, 242, 243);
}

html[saved-theme="dark"] body del {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: line-through rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body p {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration: underline rgb(200, 100, 100);
  text-decoration-color: rgb(200, 100, 100);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration: rgb(200, 100, 100);
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
  text-decoration: rgb(106, 111, 124);
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
  text-decoration: line-through rgb(186, 189, 196);
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
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
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
  text-decoration: rgb(186, 189, 196);
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
  text-decoration: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  text-decoration: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  text-decoration: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(200, 100, 100);
  border-bottom-color: rgb(214, 216, 220);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(214, 216, 220);
  border-right-color: rgb(214, 216, 220);
  border-top-color: rgb(214, 216, 220);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(214, 216, 220);
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
  text-decoration: rgb(186, 189, 196);
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
  text-decoration: rgb(186, 189, 196);
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
  text-decoration: rgb(186, 189, 196);
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
  text-decoration: underline dotted rgb(186, 189, 196);
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
  --background-secondary: rgb(253, 249, 247) !important;
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
  --code-function: rgb(198, 83, 83) !important;
  --code-important: rgb(198, 83, 83) !important;
  --code-keyword: rgb(206, 138, 75) !important;
  --code-normal: #444444 !important;
  --code-operator: #727272 !important;
  --code-property: rgb(79, 167, 201) !important;
  --code-punctuation: #bdbdbd !important;
  --code-radius: 3px !important;
  --code-size: 0.8rem !important;
  --code-string: rgb(163, 193, 139) !important;
  --code-tag: rgb(204, 102, 102) !important;
  --code-value: rgb(198, 138, 83) !important;
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
  --lightgray: rgb(253, 249, 247) !important;
  --link-color: rgb(200, 100, 100) !important;
  --link-color-hover: rgb(220, 120, 120) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(200, 100, 100) !important;
  --link-external-color-hover: rgb(220, 120, 120) !important;
  --link-unresolved-color: rgb(220, 120, 120) !important;
  --list-marker-color-collapsed: rgb(200, 100, 100) !important;
  --list-marker-color-hover: #555555 !important;
  --menu-background: rgb(253, 249, 247) !important;
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
  --ribbon-background: rgb(253, 249, 247) !important;
  --ribbon-background-collapsed: #fefefe !important;
  --sans-serif: "SF Pro", ui-sans-serif, sans-serif !important;
  --search-clear-button-color: #555555 !important;
  --search-icon-color: #555555 !important;
  --search-result-background: #fefefe !important;
  --secondary: rgb(200, 100, 100) !important;
  --serif: "New York", "Georgia", ui-serif, serif !important;
  --setting-group-heading-color: #555555 !important;
  --status-bar-background: rgb(253, 249, 247) !important;
  --status-bar-text-color: #555555 !important;
  --suggestion-background: #fefefe !important;
  --swatch-radius: 3px !important;
  --tab-background-active: #fefefe !important;
  --tab-container-background: rgb(253, 249, 247) !important;
  --tab-radius: 3px !important;
  --tab-switcher-background: rgb(253, 249, 247) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(253, 249, 247), transparent) !important;
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
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body del {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: line-through rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body p {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration: underline rgb(200, 100, 100);
  text-decoration-color: rgb(200, 100, 100);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration: rgb(200, 100, 100);
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
  text-decoration: line-through rgb(85, 85, 85);
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
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
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
  text-decoration: rgb(85, 85, 85);
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
  text-decoration: rgb(85, 85, 85);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  text-decoration: rgb(85, 85, 85);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  text-decoration: rgb(85, 85, 85);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(200, 100, 100);
  border-bottom-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(246, 246, 246);
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
  text-decoration: rgb(85, 85, 85);
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
  text-decoration: rgb(85, 85, 85);
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
  text-decoration: rgb(85, 85, 85);
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
  text-decoration: underline dotted rgb(85, 85, 85);
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
