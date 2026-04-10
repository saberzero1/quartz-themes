import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "red-graphite",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 41 !important;
  --accent-l: 71% !important;
  --background-modifier-active-hover: hsla(41, 88%, 71%, 0.1) !important;
  --background-modifier-border: hsl(222, 22%, 15%) !important;
  --background-modifier-border-focus: hsl(222, 22%, 25%) !important;
  --background-modifier-border-hover: hsl(222, 22%, -50%) !important;
  --background-modifier-form-field: hsl(222, 22%, -60%) !important;
  --background-modifier-form-field-hover: hsl(222, 22%, -60%) !important;
  --background-primary: hsl(222, 22%, 20%) !important;
  --background-primary-alt: hsl(222, 22%, 15%) !important;
  --background-secondary: hsl(222, 22%, 15%) !important;
  --background-secondary-alt: hsl(222, 22%, -80%) !important;
  --bases-cards-background: hsl(222, 22%, 20%) !important;
  --bases-cards-cover-background: hsl(222, 22%, 15%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(222, 22%, 15%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(222, 22%, -50%) !important;
  --bases-embed-border-color: hsl(222, 22%, 15%) !important;
  --bases-group-heading-property-color: hsl(222, 22%, 85%) !important;
  --bases-table-border-color: hsl(222, 22%, 40%) !important;
  --bases-table-cell-background-active: hsl(222, 22%, 20%) !important;
  --bases-table-cell-background-disabled: hsl(222, 22%, 15%) !important;
  --bases-table-cell-background-selected: hsla(41, 88%, 71%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(222, 22%, 25%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(41, 88%, 71%) !important;
  --bases-table-group-background: hsl(222, 22%, 15%) !important;
  --bases-table-header-background: hsl(222, 22%, 20%) !important;
  --bases-table-header-color: hsl(222, 22%, 85%) !important;
  --bases-table-summary-background: hsl(222, 22%, 20%) !important;
  --blockquote-border-color: hsl(41, 88%, 71%) !important;
  --blur-background: color-mix(in srgb, hsl(222, 22%, 10%) 65%, transparent) linear-gradient(hsl(222, 22%, 10%), color-mix(in srgb, hsl(222, 22%, 10%) 65%, transparent)) !important;
  --bodyFont: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: hsl(222, 22%, 20%) !important;
  --canvas-card-label-color: hsl(222, 22%, 75%) !important;
  --canvas-dot-pattern: hsl(222, 22%, -55%) !important;
  --caret-color: hsl(222, 22%, 95%) !important;
  --checkbox-border-color: hsl(222, 22%, 75%) !important;
  --checkbox-border-color-hover: hsl(222, 22%, 85%) !important;
  --checkbox-color: hsl(41, 88%, 71%) !important;
  --checkbox-color-hover: hsl(38, 89.76%, 81.65%) !important;
  --checkbox-marker-color: hsl(222, 22%, 20%) !important;
  --checklist-done-color: hsl(222, 22%, 85%) !important;
  --code-background: hsl(222, 22%, 15%) !important;
  --code-block-border-color: hsl(222, 22%, 10%) !important;
  --code-block-border-style: solid !important;
  --code-block-border-width: 1px !important;
  --code-border-color: hsl(222, 22%, 15%) !important;
  --code-comment: hsl(222, 22%, 75%) !important;
  --code-normal: hsl(222, 22%, 95%) !important;
  --code-punctuation: hsl(222, 22%, 85%) !important;
  --codeFont: "", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(222, 22%, 75%) !important;
  --collapse-icon-color-collapsed: hsl(41, 88%, 71%) !important;
  --color-accent: hsl(41, 88%, 71%) !important;
  --color-accent-1: hsl(38, 89.76%, 81.65%) !important;
  --color-accent-2: hsl(36, 92.4%, 91.59%) !important;
  --color-accent-hsl: 41, 88%, 71% !important;
  --color-base-00: hsl(222, 22%, -85%) !important;
  --color-base-05: hsl(222, 22%, -80%) !important;
  --color-base-10: hsl(222, 22%, -75%) !important;
  --color-base-100: hsl(222, 22%, 15%) !important;
  --color-base-105: hsl(222, 22%, 20%) !important;
  --color-base-110: hsl(222, 22%, 25%) !important;
  --color-base-115: hsl(222, 22%, 30%) !important;
  --color-base-120: hsl(222, 22%, 35%) !important;
  --color-base-125: hsl(222, 22%, 40%) !important;
  --color-base-130: hsl(222, 22%, 45%) !important;
  --color-base-135: hsl(222, 22%, 50%) !important;
  --color-base-140: hsl(222, 22%, 55%) !important;
  --color-base-145: hsl(222, 22%, 60%) !important;
  --color-base-15: hsl(222, 22%, -70%) !important;
  --color-base-150: hsl(222, 22%, 65%) !important;
  --color-base-155: hsl(222, 22%, 70%) !important;
  --color-base-160: hsl(222, 22%, 75%) !important;
  --color-base-165: hsl(222, 22%, 80%) !important;
  --color-base-170: hsl(222, 22%, 85%) !important;
  --color-base-175: hsl(222, 22%, 90%) !important;
  --color-base-180: hsl(222, 22%, 95%) !important;
  --color-base-185: hsl(222, 22%, 100%) !important;
  --color-base-190: hsl(222, 22%, 105%) !important;
  --color-base-195: hsl(222, 22%, 110%) !important;
  --color-base-20: hsl(222, 22%, -65%) !important;
  --color-base-200: hsl(222, 22%, 115%) !important;
  --color-base-25: hsl(222, 22%, -60%) !important;
  --color-base-30: hsl(222, 22%, -55%) !important;
  --color-base-35: hsl(222, 22%, -50%) !important;
  --color-base-40: hsl(222, 22%, -45%) !important;
  --color-base-45: hsl(222, 22%, -40%) !important;
  --color-base-50: hsl(222, 22%, -35%) !important;
  --color-base-55: hsl(222, 22%, -30%) !important;
  --color-base-60: hsl(222, 22%, -25%) !important;
  --color-base-65: hsl(222, 22%, -20%) !important;
  --color-base-70: hsl(222, 22%, -15%) !important;
  --color-base-75: hsl(222, 22%, -10%) !important;
  --color-base-80: hsl(222, 22%, -5%) !important;
  --color-base-85: hsl(222, 22%, 0%) !important;
  --color-base-90: hsl(222, 22%, 5%) !important;
  --color-base-95: hsl(222, 22%, 10%) !important;
  --dark: hsl(222, 22%, 95%) !important;
  --darkgray: hsl(222, 22%, 95%) !important;
  --divider-color: hsl(222, 22%, 10%) !important;
  --divider-color-hover: hsl(41, 88%, 71%) !important;
  --dropdown-background: hsl(222, 22%, 10%) !important;
  --dropdown-background-hover: hsl(222, 22%, 5%) !important;
  --embed-block-shadow-hover: 0 0 0 0 hsl(222, 22%, 15%), inset 0 0 0 0 hsl(222, 22%, 15%) !important;
  --embed-border-start: 2px solid hsl(41, 88%, 71%) !important;
  --file-header-background: hsl(222, 22%, 20%) !important;
  --file-header-background-focused: hsl(222, 22%, 20%) !important;
  --file-header-font: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(222, 22%, 10%) !important;
  --flair-color: hsl(222, 22%, 95%) !important;
  --font-interface: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-override: "Avenir" !important;
  --font-mermaid: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-override: "" !important;
  --font-print: "Avenir", Arial' !important;
  --font-text: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-override: "Avenir" !important;
  --footnote-divider-color: hsl(222, 22%, 15%) !important;
  --footnote-id-color: hsl(222, 22%, 85%) !important;
  --footnote-id-color-no-occurrences: hsl(222, 22%, 75%) !important;
  --graph-line: hsl(222, 22%, -50%) !important;
  --graph-node: hsl(222, 22%, 85%) !important;
  --graph-node-focused: hsl(41, 88%, 71%) !important;
  --graph-node-unresolved: hsl(222, 22%, 75%) !important;
  --graph-text: hsl(222, 22%, 95%) !important;
  --gray: hsl(222, 22%, 85%) !important;
  --headerFont: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(222, 22%, 75%) !important;
  --highlight: hsla(41, 88%, 71%, 0.1) !important;
  --hr-color: hsl(222, 22%, 15%) !important;
  --icon-color: hsl(222, 22%, 55%) !important;
  --icon-color-active: hsl(41, 88%, 71%) !important;
  --icon-color-focused: hsl(41, 88%, 71%) !important;
  --icon-color-hover: hsl(41, 88%, 71%) !important;
  --input-date-separator: hsl(222, 22%, 75%) !important;
  --input-placeholder-color: hsl(222, 22%, 75%) !important;
  --interactive-accent: hsl(41, 88%, 71%) !important;
  --interactive-accent-hover: hsl(38, 89.76%, 81.65%) !important;
  --interactive-accent-hsl: 41, 88%, 71% !important;
  --interactive-hover: hsl(222, 22%, 5%) !important;
  --interactive-normal: hsl(222, 22%, 10%) !important;
  --light: hsl(222, 22%, 20%) !important;
  --lightgray: hsl(222, 22%, 15%) !important;
  --link-color: hsl(41, 88%, 71%) !important;
  --link-color-hover: hsl(36, 92.4%, 91.59%) !important;
  --link-external-color: hsl(41, 88%, 71%) !important;
  --link-external-color-hover: hsl(36, 92.4%, 91.59%) !important;
  --link-unresolved-color: hsl(41, 88%, 71%) !important;
  --link-unresolved-decoration-color: hsla(41, 88%, 71%, 0.3) !important;
  --list-marker-color: hsl(41, 88%, 71%) !important;
  --list-marker-color-collapsed: hsl(41, 88%, 71%) !important;
  --list-marker-color-hover: hsl(222, 22%, 85%) !important;
  --menu-background: hsl(222, 22%, 15%) !important;
  --menu-border-color: hsl(222, 22%, -50%) !important;
  --metadata-border-color: hsl(222, 22%, 15%) !important;
  --metadata-divider-color: hsl(222, 22%, 15%) !important;
  --metadata-input-font: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(222, 22%, 95%) !important;
  --metadata-label-font: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(222, 22%, 85%) !important;
  --metadata-label-text-color-hover: hsl(222, 22%, 85%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(222, 22%, 25%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(222, 22%, -50%) !important;
  --modal-background: hsl(222, 22%, 20%) !important;
  --modal-border-color: hsl(222, 22%, -45%) !important;
  --modal-border-width: 0 !important;
  --nav-collapse-icon-color: hsl(41, 88%, 71%) !important;
  --nav-collapse-icon-color-collapsed: hsl(41, 88%, 71%) !important;
  --nav-heading-color: hsl(222, 22%, 95%) !important;
  --nav-heading-color-collapsed: hsl(222, 22%, 75%) !important;
  --nav-heading-color-collapsed-hover: hsl(222, 22%, 85%) !important;
  --nav-heading-color-hover: hsl(222, 22%, 95%) !important;
  --nav-indentation-guide-color: hsl(222, 22%, 25%) !important;
  --nav-item-background-active: hsl(41, 88%, 71%) !important;
  --nav-item-background-hover: hsl(41, 88%, 71%) !important;
  --nav-item-background-selected: hsla(41, 88%, 71%, 0.15) !important;
  --nav-item-color: hsl(222, 22%, 75%) !important;
  --nav-item-color-active: hsl(222, 22%, -85%) !important;
  --nav-item-color-highlighted: hsl(41, 88%, 71%) !important;
  --nav-item-color-hover: hsl(222, 22%, -85%) !important;
  --nav-item-color-selected: hsl(222, 22%, -85%) !important;
  --nav-item-size: 15px !important;
  --nav-tag-color: hsl(222, 22%, 75%) !important;
  --nav-tag-color-active: hsl(222, 22%, 85%) !important;
  --nav-tag-color-hover: hsl(222, 22%, 85%) !important;
  --pdf-background: hsl(222, 22%, 20%) !important;
  --pdf-page-background: hsl(222, 22%, 20%) !important;
  --pdf-shadow: 0 0 0 1px hsl(222, 22%, 15%) !important;
  --pdf-sidebar-background: hsl(222, 22%, 20%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(222, 22%, 15%) !important;
  --pill-border-color: hsl(222, 22%, 15%) !important;
  --pill-border-color-hover: hsl(222, 22%, -50%) !important;
  --pill-color: hsl(222, 22%, 85%) !important;
  --pill-color-hover: hsl(222, 22%, 95%) !important;
  --pill-color-remove: hsl(222, 22%, 75%) !important;
  --pill-color-remove-hover: hsl(41, 88%, 71%) !important;
  --prompt-background: hsl(222, 22%, 20%) !important;
  --prompt-border-color: hsl(222, 22%, -45%) !important;
  --raised-background: color-mix(in srgb, hsl(222, 22%, 10%) 65%, transparent) linear-gradient(hsl(222, 22%, 10%), color-mix(in srgb, hsl(222, 22%, 10%) 65%, transparent)) !important;
  --red-graphite-accent-color-h: 41 !important;
  --red-graphite-accent-color-l: 71% !important;
  --red-graphite-accent-color-s: 88% !important;
  --red-graphite-base-color-h: 222 !important;
  --red-graphite-base-color-l: 15% !important;
  --red-graphite-base-color-s: 22% !important;
  --red-graphite-interface-font: "Avenir" !important;
  --red-graphite-monospace-font: "" !important;
  --red-graphite-text-font: "Avenir" !important;
  --ribbon-background: hsl(222, 22%, 10%) !important;
  --ribbon-background-collapsed: hsl(222, 22%, 10%) !important;
  --search-clear-button-color: hsl(222, 22%, 85%) !important;
  --search-icon-color: hsl(222, 22%, 85%) !important;
  --search-result-background: hsl(222, 22%, 20%) !important;
  --secondary: hsl(41, 88%, 71%) !important;
  --setting-group-heading-color: hsl(222, 22%, 95%) !important;
  --setting-items-background: hsl(222, 22%, 15%) !important;
  --setting-items-border-color: hsl(222, 22%, 15%) !important;
  --slider-thumb-border-color: hsl(222, 22%, -50%) !important;
  --slider-track-background: hsl(222, 22%, 15%) !important;
  --status-bar-background: hsl(222, 22%, 10%) !important;
  --status-bar-border-color: hsl(222, 22%, 10%) !important;
  --status-bar-text-color: hsl(222, 22%, 85%) !important;
  --suggestion-background: hsl(222, 22%, 20%) !important;
  --tab-background-active: hsl(222, 22%, 20%) !important;
  --tab-container-background: hsl(222, 22%, 15%) !important;
  --tab-divider-color: hsl(222, 22%, 15%) !important;
  --tab-outline-color: hsl(222, 22%, 10%) !important;
  --tab-outline-width: 0px !important;
  --tab-switcher-background: hsl(222, 22%, 15%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(222, 22%, 15%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(41, 88%, 71%) !important;
  --tab-text-color: hsl(222, 22%, 75%) !important;
  --tab-text-color-active: hsl(222, 22%, 85%) !important;
  --tab-text-color-focused: hsl(222, 22%, 75%) !important;
  --tab-text-color-focused-active: hsl(222, 22%, 85%) !important;
  --tab-text-color-focused-active-current: hsl(222, 22%, 95%) !important;
  --tab-text-color-focused-highlighted: hsl(41, 88%, 71%) !important;
  --table-add-button-border-color: hsl(222, 22%, 15%) !important;
  --table-border-color: hsl(222, 22%, 40%) !important;
  --table-drag-handle-background-active: hsl(41, 88%, 71%) !important;
  --table-drag-handle-color: hsl(222, 22%, 75%) !important;
  --table-drag-handle-color-active: hsl(222, 22%, 15%) !important;
  --table-header-background: hsl(222, 22%, 35%) !important;
  --table-header-background-hover: hsl(222, 22%, 35%) !important;
  --table-header-border-color: hsl(222, 22%, 40%) !important;
  --table-header-color: hsl(222, 22%, 115%) !important;
  --table-selection: hsla(41, 88%, 71%, 0.1) !important;
  --table-selection-border-color: hsl(41, 88%, 71%) !important;
  --tag-background: hsla(41, 88%, 71%, 0.1) !important;
  --tag-background-hover: hsla(41, 88%, 71%, 0.2) !important;
  --tag-border-color: hsla(41, 88%, 71%, 0.15) !important;
  --tag-border-color-hover: hsla(41, 88%, 71%, 0.15) !important;
  --tag-color: hsl(41, 88%, 71%) !important;
  --tag-color-hover: hsl(41, 88%, 71%) !important;
  --tertiary: hsl(36, 92.4%, 91.59%) !important;
  --text-accent: hsl(41, 88%, 71%) !important;
  --text-accent-hover: hsl(36, 92.4%, 91.59%) !important;
  --text-faint: hsl(222, 22%, 75%) !important;
  --text-muted: hsl(222, 22%, 85%) !important;
  --text-normal: hsl(222, 22%, 95%) !important;
  --text-on-accent: hsl(222, 22%, 15%) !important;
  --text-selection: hsla(41, 88%, 71%, 0.2) !important;
  --textHighlight: hsla(41, 88%, 71%, 0.1) !important;
  --theme-base-color-h: 222 !important;
  --theme-base-color-l: 15% !important;
  --theme-base-color-s: 22% !important;
  --titleFont: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(222, 22%, 10%) !important;
  --titlebar-background-focused: hsl(222, 22%, 10%) !important;
  --titlebar-border-color: hsl(222, 22%, 15%) !important;
  --titlebar-text-color: hsl(222, 22%, 75%) !important;
  --titlebar-text-color-focused: hsl(222, 22%, 75%) !important;
  --titlebar-text-weight: 400 !important;
  --vault-name-color: hsl(41, 88%, 71%) !important;
  --vault-name-font-size: 15px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: hsl(222, 22%, 75%) !important;
  --vault-profile-color-hover: hsl(222, 22%, 75%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 35, 47);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(40, 47, 62);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(80, 93, 124);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(30, 35, 47);
  border-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(30, 35, 47);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(208, 213, 225);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(208, 213, 225);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(246, 205, 116, 0.1);
  color: rgb(246, 205, 116);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(208, 213, 225);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 35, 47);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(20, 23, 31);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 35, 47);
  border-left-color: rgb(20, 23, 31);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(40, 47, 62);
  color: rgb(239, 241, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(177, 186, 205);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(246, 205, 116);
  border-color: rgb(246, 205, 116);
}

html[saved-theme="dark"] body p {
  color: rgb(208, 213, 225);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(208, 213, 225) none 0px;
  text-decoration-color: rgb(208, 213, 225);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(246, 205, 116);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 205, 116) none 0px;
  text-decoration-color: rgb(246, 205, 116);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(246, 205, 116);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 205, 116) none 0px;
  text-decoration-color: rgb(246, 205, 116);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(246, 205, 116);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 205, 116) none 0px;
  text-decoration: underline rgba(246, 205, 116, 0.3);
  text-decoration-color: rgba(246, 205, 116, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(177, 186, 205);
}

html[saved-theme="dark"] body blockquote {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(80, 93, 124);
  border-left-color: rgb(80, 93, 124);
  border-right-color: rgb(80, 93, 124);
  border-top-color: rgb(80, 93, 124);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(80, 93, 124);
  border-left-color: rgb(80, 93, 124);
  border-right-color: rgb(80, 93, 124);
  border-top-color: rgb(80, 93, 124);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(70, 81, 109);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
  font-family: "", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(208, 213, 225);
  border-left-color: rgb(208, 213, 225);
  border-right-color: rgb(208, 213, 225);
  border-top-color: rgb(208, 213, 225);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(246, 205, 116);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(177, 186, 205);
  border-left-color: rgb(177, 186, 205);
  border-right-color: rgb(177, 186, 205);
  border-top-color: rgb(177, 186, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(40, 47, 62);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(246, 205, 116, 0.1);
  border-bottom-color: rgba(246, 205, 116, 0.15);
  border-left-color: rgba(246, 205, 116, 0.15);
  border-right-color: rgba(246, 205, 116, 0.15);
  border-top-color: rgba(246, 205, 116, 0.15);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(246, 205, 116);
}

html[saved-theme="dark"] body h1 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(20, 23, 31);
  border-left-color: rgb(20, 23, 31);
  border-right-color: rgb(20, 23, 31);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(50, 58, 78);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(239, 241, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(115, 130, 165);
  border-left-color: rgb(115, 130, 165);
  border-right-color: rgb(115, 130, 165);
  border-top-color: rgb(115, 130, 165);
  color: rgb(115, 130, 165);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(20, 23, 31);
  border-bottom-color: rgb(20, 23, 31);
  border-left-color: rgb(20, 23, 31);
  border-right-color: rgb(20, 23, 31);
  border-top-color: rgb(20, 23, 31);
  color: rgb(208, 213, 225);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(208, 213, 225);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(177, 186, 205);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(177, 186, 205);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(115, 130, 165);
  border-left-color: rgb(115, 130, 165);
  border-right-color: rgb(115, 130, 165);
  border-top-color: rgb(115, 130, 165);
  color: rgb(115, 130, 165);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(115, 130, 165);
  stroke: rgb(115, 130, 165);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(208, 213, 225);
  border-left-color: rgb(208, 213, 225);
  border-right-color: rgb(208, 213, 225);
  border-top-color: rgb(208, 213, 225);
  color: rgb(208, 213, 225);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
  color: rgb(208, 213, 225);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(208, 213, 225);
  border-left-color: rgb(208, 213, 225);
  border-right-color: rgb(208, 213, 225);
  border-top-color: rgb(208, 213, 225);
  color: rgb(208, 213, 225);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(20, 23, 31);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(208, 213, 225);
  border-left-color: rgb(208, 213, 225);
  border-right-color: rgb(208, 213, 225);
  border-top-color: rgb(208, 213, 225);
  color: rgb(208, 213, 225);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
  font-family: "", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(246, 205, 116, 0.1);
  border-bottom-color: rgba(246, 205, 116, 0.15);
  border-left-color: rgba(246, 205, 116, 0.15);
  border-right-color: rgba(246, 205, 116, 0.15);
  border-top-color: rgba(246, 205, 116, 0.15);
  color: rgb(246, 205, 116);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 2 !important;
  --accent-l: 54% !important;
  --accent-s: 56% !important;
  --background-modifier-active-hover: hsla(2, 56%, 54%, 0.1) !important;
  --background-modifier-border: hsl(204, 6%, 87%) !important;
  --background-modifier-border-focus: hsl(204, 6%, 92%) !important;
  --background-modifier-border-hover: hsl(204, 6%, 82%) !important;
  --background-modifier-form-field: hsl(204, 6%, 117%) !important;
  --background-modifier-form-field-hover: hsl(204, 6%, 117%) !important;
  --background-primary: hsl(204, 6%, 97%) !important;
  --background-primary-alt: hsl(204, 6%, 117%) !important;
  --background-secondary: hsl(204, 6%, 17%) !important;
  --background-secondary-alt: hsl(204, 6%, 112%) !important;
  --bases-cards-background: hsl(204, 6%, 97%) !important;
  --bases-cards-cover-background: hsl(204, 6%, 117%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(204, 6%, 87%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(204, 6%, 82%) !important;
  --bases-embed-border-color: hsl(204, 6%, 87%) !important;
  --bases-group-heading-property-color: hsl(204, 6%, 47%) !important;
  --bases-table-border-color: hsl(204, 6%, 67%) !important;
  --bases-table-cell-background-active: hsl(204, 6%, 97%) !important;
  --bases-table-cell-background-disabled: hsl(204, 6%, 117%) !important;
  --bases-table-cell-background-selected: hsla(2, 56%, 54%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(204, 6%, 92%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(1, 56.56%, 58.05%) !important;
  --bases-table-group-background: hsl(204, 6%, 117%) !important;
  --bases-table-header-background: hsl(204, 6%, 97%) !important;
  --bases-table-header-color: hsl(204, 6%, 47%) !important;
  --bases-table-summary-background: hsl(204, 6%, 97%) !important;
  --blockquote-border-color: hsl(1, 56.56%, 58.05%) !important;
  --blur-background: color-mix(in srgb, hsl(204, 6%, 97%) 65%, transparent) linear-gradient(hsl(204, 6%, 97%), color-mix(in srgb, hsl(204, 6%, 97%) 65%, transparent)) !important;
  --bodyFont: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: hsl(204, 6%, 97%) !important;
  --canvas-card-label-color: hsl(204, 6%, 57%) !important;
  --canvas-dot-pattern: hsl(204, 6%, 87%) !important;
  --caret-color: hsl(204, 6%, 17%) !important;
  --checkbox-border-color: hsl(204, 6%, 57%) !important;
  --checkbox-border-color-hover: hsl(204, 6%, 47%) !important;
  --checkbox-color: hsl(1, 56.56%, 58.05%) !important;
  --checkbox-color-hover: hsl(-1, 57.12%, 62.1%) !important;
  --checkbox-marker-color: hsl(204, 6%, 97%) !important;
  --checklist-done-color: hsl(204, 6%, 47%) !important;
  --code-background: hsl(204, 6%, 117%) !important;
  --code-block-border-color: hsl(204, 6%, 77%) !important;
  --code-block-border-style: solid !important;
  --code-block-border-width: 1px !important;
  --code-border-color: hsl(204, 6%, 87%) !important;
  --code-comment: hsl(204, 6%, 57%) !important;
  --code-normal: hsl(204, 6%, 17%) !important;
  --code-punctuation: hsl(204, 6%, 47%) !important;
  --codeFont: "", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(204, 6%, 57%) !important;
  --collapse-icon-color-collapsed: hsl(2, 56%, 54%) !important;
  --color-accent: hsl(2, 56%, 54%) !important;
  --color-accent-1: hsl(1, 56.56%, 58.05%) !important;
  --color-accent-2: hsl(-1, 57.12%, 62.1%) !important;
  --color-accent-hsl: 2, 56%, 54% !important;
  --color-base-00: hsl(204, 6%, 117%) !important;
  --color-base-05: hsl(204, 6%, 112%) !important;
  --color-base-10: hsl(204, 6%, 107%) !important;
  --color-base-100: hsl(204, 6%, 17%) !important;
  --color-base-105: hsl(204, 6%, 12%) !important;
  --color-base-110: hsl(204, 6%, 7%) !important;
  --color-base-115: hsl(204, 6%, 2%) !important;
  --color-base-120: hsl(204, 6%, -3%) !important;
  --color-base-125: hsl(204, 6%, -8%) !important;
  --color-base-130: hsl(204, 6%, -13%) !important;
  --color-base-135: hsl(204, 6%, -18%) !important;
  --color-base-140: hsl(204, 6%, -23%) !important;
  --color-base-145: hsl(204, 6%, -28%) !important;
  --color-base-15: hsl(204, 6%, 102%) !important;
  --color-base-150: hsl(204, 6%, -33%) !important;
  --color-base-155: hsl(204, 6%, -38%) !important;
  --color-base-160: hsl(204, 6%, -43%) !important;
  --color-base-165: hsl(204, 6%, -48%) !important;
  --color-base-170: hsl(204, 6%, -53%) !important;
  --color-base-175: hsl(204, 6%, -58%) !important;
  --color-base-180: hsl(204, 6%, -63%) !important;
  --color-base-185: hsl(204, 6%, -68%) !important;
  --color-base-190: hsl(204, 6%, -73%) !important;
  --color-base-195: hsl(204, 6%, -78%) !important;
  --color-base-20: hsl(204, 6%, 97%) !important;
  --color-base-200: hsl(204, 6%, -83%) !important;
  --color-base-25: hsl(204, 6%, 92%) !important;
  --color-base-30: hsl(204, 6%, 87%) !important;
  --color-base-35: hsl(204, 6%, 82%) !important;
  --color-base-40: hsl(204, 6%, 77%) !important;
  --color-base-45: hsl(204, 6%, 72%) !important;
  --color-base-50: hsl(204, 6%, 67%) !important;
  --color-base-55: hsl(204, 6%, 62%) !important;
  --color-base-60: hsl(204, 6%, 57%) !important;
  --color-base-65: hsl(204, 6%, 52%) !important;
  --color-base-70: hsl(204, 6%, 47%) !important;
  --color-base-75: hsl(204, 6%, 42%) !important;
  --color-base-80: hsl(204, 6%, 37%) !important;
  --color-base-85: hsl(204, 6%, 32%) !important;
  --color-base-90: hsl(204, 6%, 27%) !important;
  --color-base-95: hsl(204, 6%, 22%) !important;
  --color-text-heading: hsl(204, 6%, 77%) !important;
  --color-text-title: hsl(204, 6%, 77%) !important;
  --dark: hsl(204, 6%, 17%) !important;
  --darkgray: hsl(204, 6%, 17%) !important;
  --divider-color: hsl(204, 6%, 22%) !important;
  --divider-color-hover: hsl(1, 56.56%, 58.05%) !important;
  --dropdown-background: hsl(204, 6%, 117%) !important;
  --dropdown-background-hover: hsl(204, 6%, 117%) !important;
  --embed-block-shadow-hover: 0 0 0 0 hsl(204, 6%, 87%), inset 0 0 0 0 hsl(204, 6%, 87%) !important;
  --embed-border-start: 2px solid hsl(1, 56.56%, 58.05%) !important;
  --file-header-background: hsl(204, 6%, 97%) !important;
  --file-header-background-focused: hsl(204, 6%, 97%) !important;
  --file-header-font: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(204, 6%, 117%) !important;
  --flair-color: hsl(204, 6%, 17%) !important;
  --font-interface: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-override: "Avenir" !important;
  --font-mermaid: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-override: "" !important;
  --font-print: "Avenir", Arial' !important;
  --font-text: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-override: "Avenir" !important;
  --footnote-divider-color: hsl(204, 6%, 87%) !important;
  --footnote-id-color: hsl(204, 6%, 47%) !important;
  --footnote-id-color-no-occurrences: hsl(204, 6%, 57%) !important;
  --graph-line: hsl(204, 6%, 82%) !important;
  --graph-node: hsl(204, 6%, 47%) !important;
  --graph-node-focused: hsl(2, 56%, 54%) !important;
  --graph-node-unresolved: hsl(204, 6%, 57%) !important;
  --graph-text: hsl(204, 6%, 17%) !important;
  --gray: hsl(204, 6%, 47%) !important;
  --headerFont: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(204, 6%, 57%) !important;
  --highlight: hsla(2, 56%, 54%, 0.1) !important;
  --hr-color: hsl(204, 6%, 87%) !important;
  --icon-color: hsl(204, 6%, 57%) !important;
  --icon-color-active: hsl(2, 56%, 54%) !important;
  --icon-color-focused: hsl(2, 56%, 54%) !important;
  --icon-color-hover: hsl(2, 56%, 54%) !important;
  --input-date-separator: hsl(204, 6%, 57%) !important;
  --input-placeholder-color: hsl(204, 6%, 57%) !important;
  --interactive-accent: hsl(1, 56.56%, 58.05%) !important;
  --interactive-accent-hover: hsl(-1, 57.12%, 62.1%) !important;
  --interactive-accent-hsl: 2, 56%, 54% !important;
  --interactive-hover: hsl(204, 6%, 117%) !important;
  --interactive-normal: hsl(204, 6%, 117%) !important;
  --light: hsl(204, 6%, 97%) !important;
  --lightgray: hsl(204, 6%, 17%) !important;
  --link-color: hsl(2, 56%, 54%) !important;
  --link-color-hover: hsl(-1, 57.12%, 62.1%) !important;
  --link-external-color: hsl(2, 56%, 54%) !important;
  --link-external-color-hover: hsl(-1, 57.12%, 62.1%) !important;
  --link-unresolved-color: hsl(2, 56%, 54%) !important;
  --link-unresolved-decoration-color: hsla(2, 56%, 54%, 0.3) !important;
  --list-marker-color: hsl(2, 56%, 54%) !important;
  --list-marker-color-collapsed: hsl(2, 56%, 54%) !important;
  --list-marker-color-hover: hsl(204, 6%, 47%) !important;
  --menu-background: hsl(204, 6%, 17%) !important;
  --menu-border-color: hsl(204, 6%, 82%) !important;
  --metadata-border-color: hsl(204, 6%, 87%) !important;
  --metadata-divider-color: hsl(204, 6%, 87%) !important;
  --metadata-input-font: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(204, 6%, 17%) !important;
  --metadata-label-font: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(204, 6%, 47%) !important;
  --metadata-label-text-color-hover: hsl(204, 6%, 47%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(204, 6%, 92%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(204, 6%, 82%) !important;
  --mk-ui-border: hsl(204, 6%, 27%) !important;
  --mk-ui-text-secondary: hsl(204, 6%, 77%) !important;
  --modal-background: hsl(204, 6%, 97%) !important;
  --modal-border-color: hsl(204, 6%, 77%) !important;
  --modal-border-width: 0 !important;
  --nav-collapse-icon-color: hsl(2, 56%, 54%) !important;
  --nav-collapse-icon-color-collapsed: hsl(2, 56%, 54%) !important;
  --nav-heading-color: hsl(204, 6%, 17%) !important;
  --nav-heading-color-collapsed: hsl(204, 6%, 57%) !important;
  --nav-heading-color-collapsed-hover: hsl(204, 6%, 47%) !important;
  --nav-heading-color-hover: hsl(204, 6%, 17%) !important;
  --nav-indentation-guide-color: hsl(204, 6%, 27%) !important;
  --nav-item-background-active: hsl(1, 56.56%, 58.05%) !important;
  --nav-item-background-hover: hsl(1, 56.56%, 58.05%) !important;
  --nav-item-background-selected: hsla(2, 56%, 54%, 0.15) !important;
  --nav-item-color: hsl(204, 6%, 77%) !important;
  --nav-item-color-active: hsl(204, 6%, 117%) !important;
  --nav-item-color-highlighted: hsl(2, 56%, 54%) !important;
  --nav-item-color-hover: hsl(204, 6%, 117%) !important;
  --nav-item-color-selected: hsl(204, 6%, 117%) !important;
  --nav-item-size: 0.933em !important;
  --nav-tag-color: hsl(204, 6%, 57%) !important;
  --nav-tag-color-active: hsl(204, 6%, 47%) !important;
  --nav-tag-color-hover: hsl(204, 6%, 47%) !important;
  --pdf-background: hsl(204, 6%, 97%) !important;
  --pdf-page-background: hsl(204, 6%, 97%) !important;
  --pdf-sidebar-background: hsl(204, 6%, 97%) !important;
  --pill-border-color: hsl(204, 6%, 87%) !important;
  --pill-border-color-hover: hsl(204, 6%, 82%) !important;
  --pill-color: hsl(204, 6%, 47%) !important;
  --pill-color-hover: hsl(204, 6%, 17%) !important;
  --pill-color-remove: hsl(204, 6%, 57%) !important;
  --pill-color-remove-hover: hsl(2, 56%, 54%) !important;
  --prompt-background: hsl(204, 6%, 97%) !important;
  --prompt-border-color: hsl(204, 6%, 77%) !important;
  --raised-background: color-mix(in srgb, hsl(204, 6%, 97%) 65%, transparent) linear-gradient(hsl(204, 6%, 97%), color-mix(in srgb, hsl(204, 6%, 97%) 65%, transparent)) !important;
  --red-graphite-accent-color-h: 2 !important;
  --red-graphite-accent-color-l: 54% !important;
  --red-graphite-accent-color-s: 56% !important;
  --red-graphite-base-color-h: 204 !important;
  --red-graphite-base-color-l: 17% !important;
  --red-graphite-base-color-s: 6% !important;
  --red-graphite-interface-font: "Avenir" !important;
  --red-graphite-monospace-font: "" !important;
  --red-graphite-text-font: "Avenir" !important;
  --ribbon-background: hsl(204, 6%, 22%) !important;
  --ribbon-background-collapsed: hsl(204, 6%, 22%) !important;
  --search-clear-button-color: hsl(204, 6%, 47%) !important;
  --search-icon-color: hsl(204, 6%, 47%) !important;
  --search-result-background: hsl(204, 6%, 97%) !important;
  --secondary: hsl(2, 56%, 54%) !important;
  --setting-group-heading-color: hsl(204, 6%, 17%) !important;
  --setting-items-background: hsl(204, 6%, 117%) !important;
  --setting-items-border-color: hsl(204, 6%, 87%) !important;
  --slider-thumb-border-color: hsl(204, 6%, 82%) !important;
  --slider-track-background: hsl(204, 6%, 87%) !important;
  --status-bar-background: hsl(204, 6%, 22%) !important;
  --status-bar-border-color: hsl(204, 6%, 22%) !important;
  --status-bar-text-color: hsl(204, 6%, 47%) !important;
  --suggestion-background: hsl(204, 6%, 97%) !important;
  --tab-background-active: hsl(204, 6%, 97%) !important;
  --tab-container-background: hsl(204, 6%, 17%) !important;
  --tab-divider-color: hsl(204, 6%, 17%) !important;
  --tab-outline-color: hsl(204, 6%, 57%) !important;
  --tab-outline-width: 0px !important;
  --tab-switcher-background: hsl(204, 6%, 17%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(204, 6%, 17%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(2, 56%, 54%) !important;
  --tab-text-color: hsl(204, 6%, 57%) !important;
  --tab-text-color-active: hsl(204, 6%, 47%) !important;
  --tab-text-color-focused: hsl(204, 6%, 57%) !important;
  --tab-text-color-focused-active: hsl(204, 6%, 47%) !important;
  --tab-text-color-focused-active-current: hsl(204, 6%, 17%) !important;
  --tab-text-color-focused-highlighted: hsl(2, 56%, 54%) !important;
  --table-add-button-border-color: hsl(204, 6%, 87%) !important;
  --table-border-color: hsl(204, 6%, 67%) !important;
  --table-drag-handle-background-active: hsl(1, 56.56%, 58.05%) !important;
  --table-drag-handle-color: hsl(204, 6%, 57%) !important;
  --table-drag-handle-color-active: hsl(204, 6%, 117%) !important;
  --table-header-background: hsl(204, 6%, 87%) !important;
  --table-header-background-hover: hsl(204, 6%, 87%) !important;
  --table-header-border-color: hsl(204, 6%, 67%) !important;
  --table-header-color: hsl(204, 6%, 17%) !important;
  --table-selection: hsla(2, 56%, 54%, 0.1) !important;
  --table-selection-border-color: hsl(1, 56.56%, 58.05%) !important;
  --tag-background: hsla(2, 56%, 54%, 0.1) !important;
  --tag-background-hover: hsla(2, 56%, 54%, 0.2) !important;
  --tag-border-color: hsla(2, 56%, 54%, 0.15) !important;
  --tag-border-color-hover: hsla(2, 56%, 54%, 0.15) !important;
  --tag-color: hsl(2, 56%, 54%) !important;
  --tag-color-hover: hsl(2, 56%, 54%) !important;
  --tertiary: hsl(-1, 57.12%, 62.1%) !important;
  --text-accent: hsl(2, 56%, 54%) !important;
  --text-accent-hover: hsl(-1, 57.12%, 62.1%) !important;
  --text-faint: hsl(204, 6%, 57%) !important;
  --text-muted: hsl(204, 6%, 47%) !important;
  --text-normal: hsl(204, 6%, 17%) !important;
  --text-on-accent: hsl(204, 6%, 117%) !important;
  --text-selection: hsla(2, 56%, 54%, 0.2) !important;
  --textHighlight: hsla(2, 56%, 54%, 0.1) !important;
  --theme-base-color-h: 204 !important;
  --theme-base-color-l: 17% !important;
  --theme-base-color-s: 6% !important;
  --titleFont: "Avenir", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(204, 6%, 22%) !important;
  --titlebar-background-focused: hsl(204, 6%, 22%) !important;
  --titlebar-border-color: hsl(204, 6%, 87%) !important;
  --titlebar-text-color: hsl(204, 6%, 57%) !important;
  --titlebar-text-color-focused: hsl(204, 6%, 57%) !important;
  --titlebar-text-weight: 400 !important;
  --vault-name-color: hsl(2, 56%, 54%) !important;
  --vault-name-font-size: 15px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: hsl(204, 6%, 77%) !important;
  --vault-profile-color-hover: hsl(204, 6%, 77%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(247, 247, 248);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(166, 172, 176);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(247, 247, 248);
  border-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(220, 222, 224);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(113, 121, 127);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(113, 121, 127);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(203, 76, 72, 0.1);
  color: rgb(203, 76, 72);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(113, 121, 127);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(53, 57, 59);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(41, 44, 46);
  border-left-color: rgb(53, 57, 59);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(247, 247, 248);
  color: rgb(41, 44, 46);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body del {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(139, 147, 152);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(209, 90, 88);
  border-color: rgb(209, 90, 88);
}

html[saved-theme="light"] body p {
  color: rgb(113, 121, 127);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 121, 127) none 0px;
  text-decoration-color: rgb(113, 121, 127);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(203, 76, 72);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(203, 76, 72) none 0px;
  text-decoration-color: rgb(203, 76, 72);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(203, 76, 72);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(203, 76, 72) none 0px;
  text-decoration-color: rgb(203, 76, 72);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(203, 76, 72);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(203, 76, 72) none 0px;
  text-decoration: underline rgba(203, 76, 72, 0.3);
  text-decoration-color: rgba(203, 76, 72, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body dt {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body ol > li {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body ul > li {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(139, 147, 152);
}

html[saved-theme="light"] body blockquote {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body table {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(166, 172, 176);
  border-left-color: rgb(166, 172, 176);
  border-right-color: rgb(166, 172, 176);
  border-top-color: rgb(166, 172, 176);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(166, 172, 176);
  border-left-color: rgb(166, 172, 176);
  border-right-color: rgb(166, 172, 176);
  border-top-color: rgb(166, 172, 176);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body tr {
  background-color: rgb(220, 222, 224);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
  font-family: "", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body figcaption {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(113, 121, 127);
  border-left-color: rgb(113, 121, 127);
  border-right-color: rgb(113, 121, 127);
  border-top-color: rgb(113, 121, 127);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(209, 90, 88);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(139, 147, 152);
  border-left-color: rgb(139, 147, 152);
  border-right-color: rgb(139, 147, 152);
  border-top-color: rgb(139, 147, 152);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(247, 247, 248);
  border-bottom-color: rgb(193, 197, 200);
  border-left-color: rgb(193, 197, 200);
  border-right-color: rgb(193, 197, 200);
  border-top-color: rgb(193, 197, 200);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(193, 197, 200);
  border-left-color: rgb(193, 197, 200);
  border-right-color: rgb(193, 197, 200);
  border-top-color: rgb(193, 197, 200);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(203, 76, 72, 0.1);
  border-bottom-color: rgba(203, 76, 72, 0.15);
  border-left-color: rgba(203, 76, 72, 0.15);
  border-right-color: rgba(203, 76, 72, 0.15);
  border-top-color: rgba(203, 76, 72, 0.15);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(203, 76, 72);
}

html[saved-theme="light"] body h1 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(53, 57, 59);
  border-left-color: rgb(53, 57, 59);
  border-right-color: rgb(53, 57, 59);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(193, 197, 200);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(193, 197, 200);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(65, 70, 73);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(41, 44, 46);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 147, 152);
  border-left-color: rgb(139, 147, 152);
  border-right-color: rgb(139, 147, 152);
  border-top-color: rgb(139, 147, 152);
  color: rgb(139, 147, 152);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(53, 57, 59);
  border-bottom-color: rgb(53, 57, 59);
  border-left-color: rgb(53, 57, 59);
  border-right-color: rgb(53, 57, 59);
  border-top-color: rgb(53, 57, 59);
  color: rgb(113, 121, 127);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(113, 121, 127);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(193, 197, 200);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(193, 197, 200);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(193, 197, 200);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(193, 197, 200);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(139, 147, 152);
  border-left-color: rgb(139, 147, 152);
  border-right-color: rgb(139, 147, 152);
  border-top-color: rgb(139, 147, 152);
  color: rgb(139, 147, 152);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(139, 147, 152);
  stroke: rgb(139, 147, 152);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(113, 121, 127);
  border-left-color: rgb(113, 121, 127);
  border-right-color: rgb(113, 121, 127);
  border-top-color: rgb(113, 121, 127);
  color: rgb(113, 121, 127);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(139, 147, 152);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
  color: rgb(113, 121, 127);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(113, 121, 127);
  border-left-color: rgb(113, 121, 127);
  border-right-color: rgb(113, 121, 127);
  border-top-color: rgb(113, 121, 127);
  color: rgb(113, 121, 127);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(53, 57, 59);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(113, 121, 127);
  border-left-color: rgb(113, 121, 127);
  border-right-color: rgb(113, 121, 127);
  border-top-color: rgb(113, 121, 127);
  color: rgb(113, 121, 127);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
  font-family: "", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body sub {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body summary {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body sup {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(203, 76, 72, 0.1);
  border-bottom-color: rgba(203, 76, 72, 0.15);
  border-left-color: rgba(203, 76, 72, 0.15);
  border-right-color: rgba(203, 76, 72, 0.15);
  border-top-color: rgba(203, 76, 72, 0.15);
  color: rgb(203, 76, 72);
}`,
  },
};
