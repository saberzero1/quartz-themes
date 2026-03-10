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
  --background-modifier-active-hover: rgba(246, 205, 116, 0.1) !important;
  --background-modifier-border: rgb(30, 35, 47) !important;
  --background-modifier-border-focus: rgb(50, 58, 78) !important;
  --background-modifier-border-hover: hsl(222, 22%, -50%) !important;
  --background-modifier-form-field: hsl(222, 22%, -60%) !important;
  --background-modifier-form-field-hover: hsl(222, 22%, -60%) !important;
  --background-primary: rgb(40, 47, 62) !important;
  --background-primary-alt: rgb(30, 35, 47) !important;
  --background-secondary: rgb(30, 35, 47) !important;
  --background-secondary-alt: hsl(222, 22%, -80%) !important;
  --bases-cards-background: rgb(40, 47, 62) !important;
  --bases-cards-cover-background: rgb(30, 35, 47) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(30, 35, 47) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(222, 22%, -50%) !important;
  --bases-embed-border-color: rgb(30, 35, 47) !important;
  --bases-group-heading-property-color: rgb(208, 213, 225) !important;
  --bases-table-border-color: rgb(80, 93, 124) !important;
  --bases-table-cell-background-active: rgb(40, 47, 62) !important;
  --bases-table-cell-background-disabled: rgb(30, 35, 47) !important;
  --bases-table-cell-background-selected: rgba(246, 205, 116, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(50, 58, 78) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(246, 205, 116) !important;
  --bases-table-group-background: rgb(30, 35, 47) !important;
  --bases-table-header-background: rgb(40, 47, 62) !important;
  --bases-table-header-color: rgb(208, 213, 225) !important;
  --bases-table-summary-background: rgb(40, 47, 62) !important;
  --blockquote-border-color: rgb(246, 205, 116) !important;
  --blur-background: color-mix(in srgb, rgb(20, 23, 31) 65%, transparent) linear-gradient(rgb(20, 23, 31), color-mix(in srgb, rgb(20, 23, 31) 65%, transparent)) !important;
  --bodyFont: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(40, 47, 62) !important;
  --canvas-card-label-color: rgb(177, 186, 205) !important;
  --canvas-dot-pattern: hsl(222, 22%, -55%) !important;
  --caret-color: rgb(239, 241, 245) !important;
  --checkbox-border-color: rgb(177, 186, 205) !important;
  --checkbox-border-color-hover: rgb(208, 213, 225) !important;
  --checkbox-color: rgb(246, 205, 116) !important;
  --checkbox-color-hover: rgb(250, 220, 168) !important;
  --checkbox-marker-color: rgb(40, 47, 62) !important;
  --checklist-done-color: rgb(208, 213, 225) !important;
  --code-background: rgb(30, 35, 47) !important;
  --code-block-border-color: rgb(20, 23, 31) !important;
  --code-block-border-style: solid !important;
  --code-block-border-width: 1px !important;
  --code-border-color: rgb(30, 35, 47) !important;
  --code-comment: rgb(177, 186, 205) !important;
  --code-normal: rgb(239, 241, 245) !important;
  --code-punctuation: rgb(208, 213, 225) !important;
  --codeFont: "", '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(177, 186, 205) !important;
  --collapse-icon-color-collapsed: rgb(246, 205, 116) !important;
  --color-accent: rgb(246, 205, 116) !important;
  --color-accent-1: rgb(250, 220, 168) !important;
  --color-accent-2: rgb(253, 238, 216) !important;
  --color-accent-hsl: 41, 88%, 71% !important;
  --color-base-00: hsl(222, 22%, -85%) !important;
  --color-base-05: hsl(222, 22%, -80%) !important;
  --color-base-10: hsl(222, 22%, -75%) !important;
  --color-base-100: rgb(30, 35, 47) !important;
  --color-base-105: rgb(40, 47, 62) !important;
  --color-base-110: rgb(50, 58, 78) !important;
  --color-base-115: rgb(60, 70, 93) !important;
  --color-base-120: rgb(70, 81, 109) !important;
  --color-base-125: rgb(80, 93, 124) !important;
  --color-base-130: rgb(90, 105, 140) !important;
  --color-base-135: rgb(99, 116, 156) !important;
  --color-base-140: rgb(115, 130, 165) !important;
  --color-base-145: rgb(131, 144, 175) !important;
  --color-base-15: hsl(222, 22%, -70%) !important;
  --color-base-150: rgb(146, 158, 185) !important;
  --color-base-155: rgb(162, 172, 195) !important;
  --color-base-160: rgb(177, 186, 205) !important;
  --color-base-165: rgb(193, 200, 215) !important;
  --color-base-170: rgb(208, 213, 225) !important;
  --color-base-175: rgb(224, 227, 235) !important;
  --color-base-180: rgb(239, 241, 245) !important;
  --color-base-185: rgb(255, 255, 255) !important;
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
  --color-base-85: rgb(0, 0, 0) !important;
  --color-base-90: rgb(10, 12, 16) !important;
  --color-base-95: rgb(20, 23, 31) !important;
  --dark: rgb(239, 241, 245) !important;
  --darkgray: rgb(239, 241, 245) !important;
  --divider-color: rgb(20, 23, 31) !important;
  --divider-color-hover: rgb(246, 205, 116) !important;
  --dropdown-background: rgb(20, 23, 31) !important;
  --dropdown-background-hover: rgb(10, 12, 16) !important;
  --embed-block-shadow-hover: 0 0 0 0 rgb(30, 35, 47), inset 0 0 0 0 rgb(30, 35, 47) !important;
  --embed-border-start: 2px solid rgb(246, 205, 116) !important;
  --file-header-background: rgb(40, 47, 62) !important;
  --file-header-background-focused: rgb(40, 47, 62) !important;
  --file-header-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(20, 23, 31) !important;
  --flair-color: rgb(239, 241, 245) !important;
  --font-interface: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-override: "Avenir" !important;
  --font-mermaid: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "", '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-override: "" !important;
  --font-print: '??', "Avenir", '??', 'Arial' !important;
  --font-text: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-override: "Avenir" !important;
  --footnote-divider-color: rgb(30, 35, 47) !important;
  --footnote-id-color: rgb(208, 213, 225) !important;
  --footnote-id-color-no-occurrences: rgb(177, 186, 205) !important;
  --graph-line: hsl(222, 22%, -50%) !important;
  --graph-node: rgb(208, 213, 225) !important;
  --graph-node-focused: rgb(246, 205, 116) !important;
  --graph-node-unresolved: rgb(177, 186, 205) !important;
  --graph-text: rgb(239, 241, 245) !important;
  --gray: rgb(208, 213, 225) !important;
  --headerFont: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(177, 186, 205) !important;
  --highlight: rgba(246, 205, 116, 0.1) !important;
  --hr-color: rgb(30, 35, 47) !important;
  --icon-color: rgb(115, 130, 165) !important;
  --icon-color-active: rgb(246, 205, 116) !important;
  --icon-color-focused: rgb(246, 205, 116) !important;
  --icon-color-hover: rgb(246, 205, 116) !important;
  --input-date-separator: rgb(177, 186, 205) !important;
  --input-placeholder-color: rgb(177, 186, 205) !important;
  --interactive-accent: rgb(246, 205, 116) !important;
  --interactive-accent-hover: rgb(250, 220, 168) !important;
  --interactive-accent-hsl: 41, 88%, 71% !important;
  --interactive-hover: rgb(10, 12, 16) !important;
  --interactive-normal: rgb(20, 23, 31) !important;
  --light: rgb(40, 47, 62) !important;
  --lightgray: rgb(30, 35, 47) !important;
  --link-color: rgb(246, 205, 116) !important;
  --link-color-hover: rgb(253, 238, 216) !important;
  --link-external-color: rgb(246, 205, 116) !important;
  --link-external-color-hover: rgb(253, 238, 216) !important;
  --link-unresolved-color: rgb(246, 205, 116) !important;
  --link-unresolved-decoration-color: rgba(246, 205, 116, 0.3) !important;
  --list-marker-color: rgb(246, 205, 116) !important;
  --list-marker-color-collapsed: rgb(246, 205, 116) !important;
  --list-marker-color-hover: rgb(208, 213, 225) !important;
  --menu-background: rgb(30, 35, 47) !important;
  --menu-border-color: hsl(222, 22%, -50%) !important;
  --metadata-border-color: rgb(30, 35, 47) !important;
  --metadata-divider-color: rgb(30, 35, 47) !important;
  --metadata-input-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(239, 241, 245) !important;
  --metadata-label-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(208, 213, 225) !important;
  --metadata-label-text-color-hover: rgb(208, 213, 225) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(50, 58, 78) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(222, 22%, -50%) !important;
  --modal-background: rgb(40, 47, 62) !important;
  --modal-border-color: hsl(222, 22%, -45%) !important;
  --modal-border-width: 0 !important;
  --nav-collapse-icon-color: rgb(246, 205, 116) !important;
  --nav-collapse-icon-color-collapsed: rgb(246, 205, 116) !important;
  --nav-heading-color: rgb(239, 241, 245) !important;
  --nav-heading-color-collapsed: rgb(177, 186, 205) !important;
  --nav-heading-color-collapsed-hover: rgb(208, 213, 225) !important;
  --nav-heading-color-hover: rgb(239, 241, 245) !important;
  --nav-indentation-guide-color: rgb(50, 58, 78) !important;
  --nav-item-background-active: rgb(246, 205, 116) !important;
  --nav-item-background-hover: rgb(246, 205, 116) !important;
  --nav-item-background-selected: rgba(246, 205, 116, 0.15) !important;
  --nav-item-color: rgb(177, 186, 205) !important;
  --nav-item-color-active: hsl(222, 22%, -85%) !important;
  --nav-item-color-highlighted: rgb(246, 205, 116) !important;
  --nav-item-color-hover: hsl(222, 22%, -85%) !important;
  --nav-item-color-selected: hsl(222, 22%, -85%) !important;
  --nav-item-size: 15px !important;
  --nav-tag-color: rgb(177, 186, 205) !important;
  --nav-tag-color-active: rgb(208, 213, 225) !important;
  --nav-tag-color-hover: rgb(208, 213, 225) !important;
  --pdf-background: rgb(40, 47, 62) !important;
  --pdf-page-background: rgb(40, 47, 62) !important;
  --pdf-shadow: 0 0 0 1px rgb(30, 35, 47) !important;
  --pdf-sidebar-background: rgb(40, 47, 62) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(30, 35, 47) !important;
  --pill-border-color: rgb(30, 35, 47) !important;
  --pill-border-color-hover: hsl(222, 22%, -50%) !important;
  --pill-color: rgb(208, 213, 225) !important;
  --pill-color-hover: rgb(239, 241, 245) !important;
  --pill-color-remove: rgb(177, 186, 205) !important;
  --pill-color-remove-hover: rgb(246, 205, 116) !important;
  --prompt-background: rgb(40, 47, 62) !important;
  --prompt-border-color: hsl(222, 22%, -45%) !important;
  --raised-background: color-mix(in srgb, rgb(20, 23, 31) 65%, transparent) linear-gradient(rgb(20, 23, 31), color-mix(in srgb, rgb(20, 23, 31) 65%, transparent)) !important;
  --red-graphite-accent-color-h: 41 !important;
  --red-graphite-accent-color-l: 71% !important;
  --red-graphite-accent-color-s: 88% !important;
  --red-graphite-base-color-h: 222 !important;
  --red-graphite-base-color-l: 15% !important;
  --red-graphite-base-color-s: 22% !important;
  --red-graphite-interface-font: "Avenir" !important;
  --red-graphite-monospace-font: "" !important;
  --red-graphite-text-font: "Avenir" !important;
  --ribbon-background: rgb(20, 23, 31) !important;
  --ribbon-background-collapsed: rgb(20, 23, 31) !important;
  --search-clear-button-color: rgb(208, 213, 225) !important;
  --search-icon-color: rgb(208, 213, 225) !important;
  --search-result-background: rgb(40, 47, 62) !important;
  --secondary: rgb(246, 205, 116) !important;
  --setting-group-heading-color: rgb(239, 241, 245) !important;
  --setting-items-background: rgb(30, 35, 47) !important;
  --setting-items-border-color: rgb(30, 35, 47) !important;
  --slider-thumb-border-color: hsl(222, 22%, -50%) !important;
  --slider-track-background: rgb(30, 35, 47) !important;
  --status-bar-background: rgb(20, 23, 31) !important;
  --status-bar-border-color: rgb(20, 23, 31) !important;
  --status-bar-text-color: rgb(208, 213, 225) !important;
  --suggestion-background: rgb(40, 47, 62) !important;
  --tab-background-active: rgb(40, 47, 62) !important;
  --tab-container-background: rgb(30, 35, 47) !important;
  --tab-divider-color: rgb(30, 35, 47) !important;
  --tab-outline-color: rgb(20, 23, 31) !important;
  --tab-outline-width: 0px !important;
  --tab-switcher-background: rgb(30, 35, 47) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(30, 35, 47), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(246, 205, 116) !important;
  --tab-text-color: rgb(177, 186, 205) !important;
  --tab-text-color-active: rgb(208, 213, 225) !important;
  --tab-text-color-focused: rgb(177, 186, 205) !important;
  --tab-text-color-focused-active: rgb(208, 213, 225) !important;
  --tab-text-color-focused-active-current: rgb(239, 241, 245) !important;
  --tab-text-color-focused-highlighted: rgb(246, 205, 116) !important;
  --table-add-button-border-color: rgb(30, 35, 47) !important;
  --table-border-color: rgb(80, 93, 124) !important;
  --table-drag-handle-background-active: rgb(246, 205, 116) !important;
  --table-drag-handle-color: rgb(177, 186, 205) !important;
  --table-drag-handle-color-active: rgb(30, 35, 47) !important;
  --table-header-background: rgb(70, 81, 109) !important;
  --table-header-background-hover: rgb(70, 81, 109) !important;
  --table-header-border-color: rgb(80, 93, 124) !important;
  --table-header-color: hsl(222, 22%, 115%) !important;
  --table-selection: rgba(246, 205, 116, 0.1) !important;
  --table-selection-border-color: rgb(246, 205, 116) !important;
  --tag-background: rgba(246, 205, 116, 0.1) !important;
  --tag-background-hover: rgba(246, 205, 116, 0.2) !important;
  --tag-border-color: rgba(246, 205, 116, 0.15) !important;
  --tag-border-color-hover: rgba(246, 205, 116, 0.15) !important;
  --tag-color: rgb(246, 205, 116) !important;
  --tag-color-hover: rgb(246, 205, 116) !important;
  --tertiary: rgb(253, 238, 216) !important;
  --text-accent: rgb(246, 205, 116) !important;
  --text-accent-hover: rgb(253, 238, 216) !important;
  --text-faint: rgb(177, 186, 205) !important;
  --text-muted: rgb(208, 213, 225) !important;
  --text-normal: rgb(239, 241, 245) !important;
  --text-on-accent: rgb(30, 35, 47) !important;
  --text-selection: rgba(246, 205, 116, 0.2) !important;
  --textHighlight: rgba(246, 205, 116, 0.1) !important;
  --theme-base-color-h: 222 !important;
  --theme-base-color-l: 15% !important;
  --theme-base-color-s: 22% !important;
  --titleFont: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(20, 23, 31) !important;
  --titlebar-background-focused: rgb(20, 23, 31) !important;
  --titlebar-border-color: rgb(30, 35, 47) !important;
  --titlebar-text-color: rgb(177, 186, 205) !important;
  --titlebar-text-color-focused: rgb(177, 186, 205) !important;
  --titlebar-text-weight: 400 !important;
  --vault-name-color: rgb(246, 205, 116) !important;
  --vault-name-font-size: 15px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: rgb(177, 186, 205) !important;
  --vault-profile-color-hover: rgb(177, 186, 205) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 35, 47);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 47, 62);
  color: rgb(239, 241, 245);
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
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: line-through rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body p {
  color: rgb(208, 213, 225);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(208, 213, 225) none 0px;
  text-decoration: rgb(208, 213, 225);
  text-decoration-color: rgb(208, 213, 225);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(246, 205, 116);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 205, 116) none 0px;
  text-decoration: underline rgb(246, 205, 116);
  text-decoration-color: rgb(246, 205, 116);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(246, 205, 116);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 205, 116) none 0px;
  text-decoration: underline rgb(246, 205, 116);
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
  background-color: rgb(40, 47, 62);
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(40, 47, 62);
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(177, 186, 205);
  text-decoration: rgb(177, 186, 205);
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

html[saved-theme="dark"] body pre > code, pre:has(> code) {
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
  border-left-color: rgb(246, 205, 116);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(208, 213, 225);
  text-decoration: line-through rgb(208, 213, 225);
  text-decoration-color: rgb(208, 213, 225);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(177, 186, 205);
  border-left-color: rgb(177, 186, 205);
  border-right-color: rgb(177, 186, 205);
  border-top-color: rgb(177, 186, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
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
  text-decoration: rgb(239, 241, 245);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(239, 241, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
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
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
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
  text-decoration: rgb(177, 186, 205);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(177, 186, 205);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(177, 186, 205);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(246, 205, 116);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
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
  text-decoration: rgb(208, 213, 225);
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
  text-decoration: rgb(177, 186, 205);
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
  text-decoration: rgb(177, 186, 205);
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
  text-decoration: underline dotted rgb(239, 241, 245);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 2 !important;
  --accent-l: 54% !important;
  --accent-s: 56% !important;
  --background-modifier-active-hover: rgba(203, 76, 72, 0.1) !important;
  --background-modifier-border: rgb(220, 222, 224) !important;
  --background-modifier-border-focus: rgb(233, 235, 236) !important;
  --background-modifier-border-hover: rgb(206, 210, 212) !important;
  --background-modifier-form-field: hsl(204, 6%, 117%) !important;
  --background-modifier-form-field-hover: hsl(204, 6%, 117%) !important;
  --background-primary: rgb(247, 247, 248) !important;
  --background-primary-alt: hsl(204, 6%, 117%) !important;
  --background-secondary: rgb(41, 44, 46) !important;
  --background-secondary-alt: hsl(204, 6%, 112%) !important;
  --bases-cards-background: rgb(247, 247, 248) !important;
  --bases-cards-cover-background: hsl(204, 6%, 117%) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(220, 222, 224) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(206, 210, 212) !important;
  --bases-embed-border-color: rgb(220, 222, 224) !important;
  --bases-group-heading-property-color: rgb(113, 121, 127) !important;
  --bases-table-border-color: rgb(166, 172, 176) !important;
  --bases-table-cell-background-active: rgb(247, 247, 248) !important;
  --bases-table-cell-background-disabled: hsl(204, 6%, 117%) !important;
  --bases-table-cell-background-selected: rgba(203, 76, 72, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(233, 235, 236) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(209, 89, 87) !important;
  --bases-table-group-background: hsl(204, 6%, 117%) !important;
  --bases-table-header-background: rgb(247, 247, 248) !important;
  --bases-table-header-color: rgb(113, 121, 127) !important;
  --bases-table-summary-background: rgb(247, 247, 248) !important;
  --blockquote-border-color: rgb(209, 89, 87) !important;
  --blur-background: color-mix(in srgb, rgb(247, 247, 248) 65%, transparent) linear-gradient(rgb(247, 247, 248), color-mix(in srgb, rgb(247, 247, 248) 65%, transparent)) !important;
  --bodyFont: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(247, 247, 248) !important;
  --canvas-card-label-color: rgb(139, 147, 152) !important;
  --canvas-dot-pattern: rgb(220, 222, 224) !important;
  --caret-color: rgb(41, 44, 46) !important;
  --checkbox-border-color: rgb(139, 147, 152) !important;
  --checkbox-border-color-hover: rgb(113, 121, 127) !important;
  --checkbox-color: rgb(209, 89, 87) !important;
  --checkbox-color-hover: rgb(213, 103, 105) !important;
  --checkbox-marker-color: rgb(247, 247, 248) !important;
  --checklist-done-color: rgb(113, 121, 127) !important;
  --code-background: hsl(204, 6%, 117%) !important;
  --code-block-border-color: rgb(193, 197, 200) !important;
  --code-block-border-style: solid !important;
  --code-block-border-width: 1px !important;
  --code-border-color: rgb(220, 222, 224) !important;
  --code-comment: rgb(139, 147, 152) !important;
  --code-normal: rgb(41, 44, 46) !important;
  --code-punctuation: rgb(113, 121, 127) !important;
  --codeFont: "", '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(139, 147, 152) !important;
  --collapse-icon-color-collapsed: rgb(203, 76, 72) !important;
  --color-accent: rgb(203, 76, 72) !important;
  --color-accent-1: rgb(209, 89, 87) !important;
  --color-accent-2: rgb(213, 103, 105) !important;
  --color-accent-hsl: 2, 56%, 54% !important;
  --color-base-00: hsl(204, 6%, 117%) !important;
  --color-base-05: hsl(204, 6%, 112%) !important;
  --color-base-10: hsl(204, 6%, 107%) !important;
  --color-base-100: rgb(41, 44, 46) !important;
  --color-base-105: rgb(29, 31, 32) !important;
  --color-base-110: rgb(17, 18, 19) !important;
  --color-base-115: rgb(5, 5, 5) !important;
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
  --color-base-20: rgb(247, 247, 248) !important;
  --color-base-200: hsl(204, 6%, -83%) !important;
  --color-base-25: rgb(233, 235, 236) !important;
  --color-base-30: rgb(220, 222, 224) !important;
  --color-base-35: rgb(206, 210, 212) !important;
  --color-base-40: rgb(193, 197, 200) !important;
  --color-base-45: rgb(179, 184, 188) !important;
  --color-base-50: rgb(166, 172, 176) !important;
  --color-base-55: rgb(152, 159, 164) !important;
  --color-base-60: rgb(139, 147, 152) !important;
  --color-base-65: rgb(125, 134, 140) !important;
  --color-base-70: rgb(113, 121, 127) !important;
  --color-base-75: rgb(101, 108, 114) !important;
  --color-base-80: rgb(89, 95, 100) !important;
  --color-base-85: rgb(77, 83, 86) !important;
  --color-base-90: rgb(65, 70, 73) !important;
  --color-base-95: rgb(53, 57, 59) !important;
  --color-text-heading: rgb(193, 197, 200) !important;
  --color-text-title: rgb(193, 197, 200) !important;
  --dark: rgb(41, 44, 46) !important;
  --darkgray: rgb(41, 44, 46) !important;
  --divider-color: rgb(53, 57, 59) !important;
  --divider-color-hover: rgb(209, 89, 87) !important;
  --dropdown-background: hsl(204, 6%, 117%) !important;
  --dropdown-background-hover: hsl(204, 6%, 117%) !important;
  --embed-block-shadow-hover: 0 0 0 0 rgb(220, 222, 224), inset 0 0 0 0 rgb(220, 222, 224) !important;
  --embed-border-start: 2px solid rgb(209, 89, 87) !important;
  --file-header-background: rgb(247, 247, 248) !important;
  --file-header-background-focused: rgb(247, 247, 248) !important;
  --file-header-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(204, 6%, 117%) !important;
  --flair-color: rgb(41, 44, 46) !important;
  --font-interface: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-override: "Avenir" !important;
  --font-mermaid: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "", '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-override: "" !important;
  --font-print: '??', "Avenir", '??', 'Arial' !important;
  --font-text: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-override: "Avenir" !important;
  --footnote-divider-color: rgb(220, 222, 224) !important;
  --footnote-id-color: rgb(113, 121, 127) !important;
  --footnote-id-color-no-occurrences: rgb(139, 147, 152) !important;
  --graph-line: rgb(206, 210, 212) !important;
  --graph-node: rgb(113, 121, 127) !important;
  --graph-node-focused: rgb(203, 76, 72) !important;
  --graph-node-unresolved: rgb(139, 147, 152) !important;
  --graph-text: rgb(41, 44, 46) !important;
  --gray: rgb(113, 121, 127) !important;
  --headerFont: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(139, 147, 152) !important;
  --highlight: rgba(203, 76, 72, 0.1) !important;
  --hr-color: rgb(220, 222, 224) !important;
  --icon-color: rgb(139, 147, 152) !important;
  --icon-color-active: rgb(203, 76, 72) !important;
  --icon-color-focused: rgb(203, 76, 72) !important;
  --icon-color-hover: rgb(203, 76, 72) !important;
  --input-date-separator: rgb(139, 147, 152) !important;
  --input-placeholder-color: rgb(139, 147, 152) !important;
  --interactive-accent: rgb(209, 89, 87) !important;
  --interactive-accent-hover: rgb(213, 103, 105) !important;
  --interactive-accent-hsl: 2, 56%, 54% !important;
  --interactive-hover: hsl(204, 6%, 117%) !important;
  --interactive-normal: hsl(204, 6%, 117%) !important;
  --light: rgb(247, 247, 248) !important;
  --lightgray: rgb(41, 44, 46) !important;
  --link-color: rgb(203, 76, 72) !important;
  --link-color-hover: rgb(213, 103, 105) !important;
  --link-external-color: rgb(203, 76, 72) !important;
  --link-external-color-hover: rgb(213, 103, 105) !important;
  --link-unresolved-color: rgb(203, 76, 72) !important;
  --link-unresolved-decoration-color: rgba(203, 76, 72, 0.3) !important;
  --list-marker-color: rgb(203, 76, 72) !important;
  --list-marker-color-collapsed: rgb(203, 76, 72) !important;
  --list-marker-color-hover: rgb(113, 121, 127) !important;
  --menu-background: rgb(41, 44, 46) !important;
  --menu-border-color: rgb(206, 210, 212) !important;
  --metadata-border-color: rgb(220, 222, 224) !important;
  --metadata-divider-color: rgb(220, 222, 224) !important;
  --metadata-input-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(41, 44, 46) !important;
  --metadata-label-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(113, 121, 127) !important;
  --metadata-label-text-color-hover: rgb(113, 121, 127) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(233, 235, 236) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(206, 210, 212) !important;
  --mk-ui-border: rgb(65, 70, 73) !important;
  --mk-ui-text-secondary: rgb(193, 197, 200) !important;
  --modal-background: rgb(247, 247, 248) !important;
  --modal-border-color: rgb(193, 197, 200) !important;
  --modal-border-width: 0 !important;
  --nav-collapse-icon-color: rgb(203, 76, 72) !important;
  --nav-collapse-icon-color-collapsed: rgb(203, 76, 72) !important;
  --nav-heading-color: rgb(41, 44, 46) !important;
  --nav-heading-color-collapsed: rgb(139, 147, 152) !important;
  --nav-heading-color-collapsed-hover: rgb(113, 121, 127) !important;
  --nav-heading-color-hover: rgb(41, 44, 46) !important;
  --nav-indentation-guide-color: rgb(65, 70, 73) !important;
  --nav-item-background-active: rgb(209, 89, 87) !important;
  --nav-item-background-hover: rgb(209, 89, 87) !important;
  --nav-item-background-selected: rgba(203, 76, 72, 0.15) !important;
  --nav-item-color: rgb(193, 197, 200) !important;
  --nav-item-color-active: hsl(204, 6%, 117%) !important;
  --nav-item-color-highlighted: rgb(203, 76, 72) !important;
  --nav-item-color-hover: hsl(204, 6%, 117%) !important;
  --nav-item-color-selected: hsl(204, 6%, 117%) !important;
  --nav-item-size: 0.933em !important;
  --nav-tag-color: rgb(139, 147, 152) !important;
  --nav-tag-color-active: rgb(113, 121, 127) !important;
  --nav-tag-color-hover: rgb(113, 121, 127) !important;
  --pdf-background: rgb(247, 247, 248) !important;
  --pdf-page-background: rgb(247, 247, 248) !important;
  --pdf-sidebar-background: rgb(247, 247, 248) !important;
  --pill-border-color: rgb(220, 222, 224) !important;
  --pill-border-color-hover: rgb(206, 210, 212) !important;
  --pill-color: rgb(113, 121, 127) !important;
  --pill-color-hover: rgb(41, 44, 46) !important;
  --pill-color-remove: rgb(139, 147, 152) !important;
  --pill-color-remove-hover: rgb(203, 76, 72) !important;
  --prompt-background: rgb(247, 247, 248) !important;
  --prompt-border-color: rgb(193, 197, 200) !important;
  --raised-background: color-mix(in srgb, rgb(247, 247, 248) 65%, transparent) linear-gradient(rgb(247, 247, 248), color-mix(in srgb, rgb(247, 247, 248) 65%, transparent)) !important;
  --red-graphite-accent-color-h: 2 !important;
  --red-graphite-accent-color-l: 54% !important;
  --red-graphite-accent-color-s: 56% !important;
  --red-graphite-base-color-h: 204 !important;
  --red-graphite-base-color-l: 17% !important;
  --red-graphite-base-color-s: 6% !important;
  --red-graphite-interface-font: "Avenir" !important;
  --red-graphite-monospace-font: "" !important;
  --red-graphite-text-font: "Avenir" !important;
  --ribbon-background: rgb(53, 57, 59) !important;
  --ribbon-background-collapsed: rgb(53, 57, 59) !important;
  --search-clear-button-color: rgb(113, 121, 127) !important;
  --search-icon-color: rgb(113, 121, 127) !important;
  --search-result-background: rgb(247, 247, 248) !important;
  --secondary: rgb(203, 76, 72) !important;
  --setting-group-heading-color: rgb(41, 44, 46) !important;
  --setting-items-background: hsl(204, 6%, 117%) !important;
  --setting-items-border-color: rgb(220, 222, 224) !important;
  --slider-thumb-border-color: rgb(206, 210, 212) !important;
  --slider-track-background: rgb(220, 222, 224) !important;
  --status-bar-background: rgb(53, 57, 59) !important;
  --status-bar-border-color: rgb(53, 57, 59) !important;
  --status-bar-text-color: rgb(113, 121, 127) !important;
  --suggestion-background: rgb(247, 247, 248) !important;
  --tab-background-active: rgb(247, 247, 248) !important;
  --tab-container-background: rgb(41, 44, 46) !important;
  --tab-divider-color: rgb(41, 44, 46) !important;
  --tab-outline-color: rgb(139, 147, 152) !important;
  --tab-outline-width: 0px !important;
  --tab-switcher-background: rgb(41, 44, 46) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(41, 44, 46), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(203, 76, 72) !important;
  --tab-text-color: rgb(139, 147, 152) !important;
  --tab-text-color-active: rgb(113, 121, 127) !important;
  --tab-text-color-focused: rgb(139, 147, 152) !important;
  --tab-text-color-focused-active: rgb(113, 121, 127) !important;
  --tab-text-color-focused-active-current: rgb(41, 44, 46) !important;
  --tab-text-color-focused-highlighted: rgb(203, 76, 72) !important;
  --table-add-button-border-color: rgb(220, 222, 224) !important;
  --table-border-color: rgb(166, 172, 176) !important;
  --table-drag-handle-background-active: rgb(209, 89, 87) !important;
  --table-drag-handle-color: rgb(139, 147, 152) !important;
  --table-drag-handle-color-active: hsl(204, 6%, 117%) !important;
  --table-header-background: rgb(220, 222, 224) !important;
  --table-header-background-hover: rgb(220, 222, 224) !important;
  --table-header-border-color: rgb(166, 172, 176) !important;
  --table-header-color: rgb(41, 44, 46) !important;
  --table-selection: rgba(203, 76, 72, 0.1) !important;
  --table-selection-border-color: rgb(209, 89, 87) !important;
  --tag-background: rgba(203, 76, 72, 0.1) !important;
  --tag-background-hover: rgba(203, 76, 72, 0.2) !important;
  --tag-border-color: rgba(203, 76, 72, 0.15) !important;
  --tag-border-color-hover: rgba(203, 76, 72, 0.15) !important;
  --tag-color: rgb(203, 76, 72) !important;
  --tag-color-hover: rgb(203, 76, 72) !important;
  --tertiary: rgb(213, 103, 105) !important;
  --text-accent: rgb(203, 76, 72) !important;
  --text-accent-hover: rgb(213, 103, 105) !important;
  --text-faint: rgb(139, 147, 152) !important;
  --text-muted: rgb(113, 121, 127) !important;
  --text-normal: rgb(41, 44, 46) !important;
  --text-on-accent: hsl(204, 6%, 117%) !important;
  --text-selection: rgba(203, 76, 72, 0.2) !important;
  --textHighlight: rgba(203, 76, 72, 0.1) !important;
  --theme-base-color-h: 204 !important;
  --theme-base-color-l: 17% !important;
  --theme-base-color-s: 6% !important;
  --titleFont: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(53, 57, 59) !important;
  --titlebar-background-focused: rgb(53, 57, 59) !important;
  --titlebar-border-color: rgb(220, 222, 224) !important;
  --titlebar-text-color: rgb(139, 147, 152) !important;
  --titlebar-text-color-focused: rgb(139, 147, 152) !important;
  --titlebar-text-weight: 400 !important;
  --vault-name-color: rgb(203, 76, 72) !important;
  --vault-name-font-size: 15px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: rgb(193, 197, 200) !important;
  --vault-profile-color-hover: rgb(193, 197, 200) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(247, 247, 248);
  color: rgb(41, 44, 46);
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
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body del {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: line-through rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body p {
  color: rgb(113, 121, 127);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 121, 127) none 0px;
  text-decoration: rgb(113, 121, 127);
  text-decoration-color: rgb(113, 121, 127);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(203, 76, 72);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(203, 76, 72) none 0px;
  text-decoration: underline rgb(203, 76, 72);
  text-decoration-color: rgb(203, 76, 72);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(203, 76, 72);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(203, 76, 72) none 0px;
  text-decoration: underline rgb(203, 76, 72);
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
  background-color: rgb(247, 247, 248);
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body ul > li {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(247, 247, 248);
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(139, 147, 152);
  text-decoration: rgb(139, 147, 152);
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

html[saved-theme="light"] body pre > code, pre:has(> code) {
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
  border-left-color: rgb(209, 90, 88);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(113, 121, 127);
  text-decoration: line-through rgb(113, 121, 127);
  text-decoration-color: rgb(113, 121, 127);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(139, 147, 152);
  border-left-color: rgb(139, 147, 152);
  border-right-color: rgb(139, 147, 152);
  border-top-color: rgb(139, 147, 152);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
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
  text-decoration: rgb(41, 44, 46);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(41, 44, 46);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body h2.page-title, h2.page-title a {
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
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
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
  text-decoration: rgb(193, 197, 200);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(193, 197, 200);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(193, 197, 200);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(193, 197, 200);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(193, 197, 200);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(209, 90, 88);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
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
  text-decoration: rgb(113, 121, 127);
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
  text-decoration: rgb(193, 197, 200);
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
  text-decoration: rgb(193, 197, 200);
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
  text-decoration: underline dotted rgb(41, 44, 46);
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
}`,
  },
};
