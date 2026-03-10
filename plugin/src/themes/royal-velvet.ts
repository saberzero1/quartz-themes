import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "royal-velvet",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["fira-sans", "fira-code"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: transparent !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-box-shadow: rgb(41, 42, 56) !important;
  --background-modifier-cover: rgb(20, 20, 26) !important;
  --background-modifier-error: rgba(255, 149, 128, 0.9) !important;
  --background-modifier-error-hover: rgb(255, 149, 128) !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(255, 128, 191, 0.1) !important;
  --background-modifier-form-field-highlighted: rgba(255, 128, 191, 0.3) !important;
  --background-modifier-form-field-hover: rgba(255, 128, 191, 0.1) !important;
  --background-modifier-success: rgba(138, 255, 128, 0.2) !important;
  --background-primary: rgb(33, 33, 44) !important;
  --background-primary-alt: rgb(28, 29, 38) !important;
  --background-secondary: rgb(28, 29, 38) !important;
  --background-secondary-alt: rgb(20, 20, 26) !important;
  --bases-cards-background: rgb(33, 33, 44) !important;
  --bases-cards-cover-background: rgb(28, 29, 38) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-group-heading-property-color: rgba(248, 248, 242, 0.6) !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: rgb(33, 33, 44) !important;
  --bases-table-cell-background-disabled: rgb(28, 29, 38) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px transparent !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 128, 191) !important;
  --bases-table-group-background: rgb(28, 29, 38) !important;
  --bases-table-header-background: rgb(33, 33, 44) !important;
  --bases-table-header-color: rgba(248, 248, 242, 0.6) !important;
  --bases-table-summary-background: rgb(33, 33, 44) !important;
  --blockquote-border: rgb(255, 149, 128) !important;
  --blockquote-border-color: none !important;
  --blue: rgb(128, 255, 234) !important;
  --blue-600: rgba(128, 255, 234, 0.6) !important;
  --blue-hue: 170 !important;
  --blue-secondary-tuple: 170, 100%, 90% !important;
  --blue-tuple: 170, 100%, 75.1% !important;
  --blur-background: color-mix(in srgb, rgb(28, 29, 38) 65%, transparent) linear-gradient(rgb(28, 29, 38), color-mix(in srgb, rgb(28, 29, 38) 65%, transparent)) !important;
  --bodyFont: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(33, 33, 44) !important;
  --canvas-card-label-color: rgba(248, 248, 242, 0.6) !important;
  --caret-color: rgb(248, 248, 242) !important;
  --checkbox-border-color: rgba(248, 248, 242, 0.6) !important;
  --checkbox-border-color-hover: rgba(248, 248, 242, 0.6) !important;
  --checkbox-color: rgb(255, 128, 191) !important;
  --checkbox-color-hover: rgba(248, 248, 242, 0.6) !important;
  --checkbox-marker-color: rgb(33, 33, 44) !important;
  --checklist-done-color: rgba(248, 248, 242, 0.6) !important;
  --code-background: rgb(28, 29, 38) !important;
  --code-border-color: transparent !important;
  --code-comment: rgba(248, 248, 242, 0.6) !important;
  --code-normal: rgb(223, 128, 255) !important;
  --code-punctuation: rgba(248, 248, 242, 0.6) !important;
  --code-size: 1em !important;
  --codeFont: '??', "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgba(248, 248, 242, 0.6) !important;
  --collapse-icon-color-collapsed: rgb(255, 128, 191) !important;
  --dark: rgb(248, 248, 242) !important;
  --darkgray: rgb(248, 248, 242) !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(255, 128, 191) !important;
  --dropdown-background: rgb(28, 29, 38) !important;
  --dropdown-background-hover: rgb(20, 20, 26) !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --embed-border-start: 2px solid rgb(255, 128, 191) !important;
  --file-header-background: rgb(33, 33, 44) !important;
  --file-header-background-focused: rgb(33, 33, 44) !important;
  --file-header-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(28, 29, 38) !important;
  --flair-color: rgb(248, 248, 242) !important;
  --font-interface: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Fira Sans", sans-serif !important;
  --font-mermaid: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Fira Code", monospace !important;
  --font-print: '??', '??', "Fira Sans", sans-serif, 'Arial' !important;
  --font-text: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Fira Sans", sans-serif !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: rgba(248, 248, 242, 0.6) !important;
  --footnote-id-color-no-occurrences: rgba(248, 248, 242, 0.6) !important;
  --gradientDegree: 135deg !important;
  --graph-node: rgba(248, 248, 242, 0.6) !important;
  --graph-node-focused: rgb(255, 128, 191) !important;
  --graph-node-unresolved: rgba(248, 248, 242, 0.6) !important;
  --graph-text: rgb(248, 248, 242) !important;
  --gray: rgba(248, 248, 242, 0.6) !important;
  --green: rgb(138, 255, 128) !important;
  --green-200: rgba(138, 255, 128, 0.2) !important;
  --green-hue: 115 !important;
  --green-secondary-tuple: 115, 100%, 90% !important;
  --green-tuple: 115, 100%, 75.1% !important;
  --greenSecondary: rgb(208, 255, 204) !important;
  --headerFont: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(248, 248, 242, 0.6) !important;
  --highlight: rgba(255, 255, 128, 0.1) !important;
  --hr-color: rgb(255, 202, 128) !important;
  --icon-color: rgba(248, 248, 242, 0.6) !important;
  --icon-color-active: rgb(255, 128, 191) !important;
  --icon-color-focused: rgb(248, 248, 242) !important;
  --icon-color-hover: rgba(248, 248, 242, 0.6) !important;
  --indentation-guide: rgb(65, 67, 88) !important;
  --indentation-guide-opacity: 10% !important;
  --input-date-separator: rgba(248, 248, 242, 0.6) !important;
  --input-placeholder-color: rgba(248, 248, 242, 0.6) !important;
  --input-shadow: none !important;
  --interactive-accent: rgb(255, 128, 191) !important;
  --interactive-accent-hover: rgb(255, 202, 128) !important;
  --interactive-hover: rgb(20, 20, 26) !important;
  --interactive-normal: rgb(28, 29, 38) !important;
  --interactive-success: rgb(138, 255, 128) !important;
  --layer-0: rgb(20, 20, 26) !important;
  --layer-1: rgb(28, 29, 38) !important;
  --layer-2: rgb(33, 33, 44) !important;
  --layer-3: rgb(41, 42, 56) !important;
  --layer-4: rgb(65, 67, 88) !important;
  --layer-hue-sat: 235, 15% !important;
  --light: rgb(33, 33, 44) !important;
  --lightgray: rgb(28, 29, 38) !important;
  --link-color: rgb(255, 202, 128) !important;
  --link-color-hover: rgb(255, 234, 204) !important;
  --link-external-color: rgb(138, 255, 128) !important;
  --link-external-color-hover: rgb(208, 255, 204) !important;
  --link-unresolved-color: rgba(255, 255, 128, 0.7) !important;
  --link-unresolved-hover: rgb(255, 255, 128) !important;
  --list-marker-color: rgba(248, 248, 242, 0.6) !important;
  --list-marker-color-collapsed: rgb(255, 128, 191) !important;
  --list-marker-color-hover: rgba(248, 248, 242, 0.6) !important;
  --menu-background: rgb(28, 29, 38) !important;
  --menu-border-color: transparent !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(248, 248, 242) !important;
  --metadata-label-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(248, 248, 242, 0.6) !important;
  --metadata-label-text-color-hover: rgba(248, 248, 242, 0.6) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --modal-background: rgb(33, 33, 44) !important;
  --modal-border-color: transparent !important;
  --nav-collapse-icon-color: rgba(248, 248, 242, 0.6) !important;
  --nav-collapse-icon-color-collapsed: rgba(248, 248, 242, 0.6) !important;
  --nav-heading-color: rgb(248, 248, 242) !important;
  --nav-heading-color-collapsed: rgba(248, 248, 242, 0.6) !important;
  --nav-heading-color-collapsed-hover: rgba(248, 248, 242, 0.6) !important;
  --nav-heading-color-hover: rgb(248, 248, 242) !important;
  --nav-item-color: rgba(248, 248, 242, 0.6) !important;
  --nav-item-color-active: rgb(248, 248, 242) !important;
  --nav-item-color-highlighted: rgb(255, 128, 191) !important;
  --nav-item-color-hover: rgb(248, 248, 242) !important;
  --nav-item-color-selected: rgb(248, 248, 242) !important;
  --nav-tag-color: rgba(248, 248, 242, 0.6) !important;
  --nav-tag-color-active: rgba(248, 248, 242, 0.6) !important;
  --nav-tag-color-hover: rgba(248, 248, 242, 0.6) !important;
  --on-layer: rgb(248, 248, 242) !important;
  --on-layer-400: rgba(248, 248, 242, 0.4) !important;
  --on-layer-600: rgba(248, 248, 242, 0.6) !important;
  --on-layer-tuple: 60, 30%, 96% !important;
  --orange: rgb(255, 202, 128) !important;
  --orange-100: rgba(255, 202, 128, 0.1) !important;
  --orange-hue: 35 !important;
  --orange-secondary-tuple: 35, 100%, 90% !important;
  --orange-tuple: 35, 100%, 75.1% !important;
  --orangeSecondary: rgb(255, 234, 204) !important;
  --pdf-background: rgb(33, 33, 44) !important;
  --pdf-page-background: rgb(33, 33, 44) !important;
  --pdf-shadow: 0 0 0 1px transparent !important;
  --pdf-sidebar-background: rgb(33, 33, 44) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px transparent !important;
  --pill-border-color: transparent !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: rgba(248, 248, 242, 0.6) !important;
  --pill-color-hover: rgb(248, 248, 242) !important;
  --pill-color-remove: rgba(248, 248, 242, 0.6) !important;
  --pill-color-remove-hover: rgb(255, 128, 191) !important;
  --pink: rgb(255, 128, 191) !important;
  --pink-100: rgba(255, 128, 191, 0.1) !important;
  --pink-300: rgba(255, 128, 191, 0.3) !important;
  --pink-400: rgba(255, 128, 191, 0.4) !important;
  --pink-hue: 330 !important;
  --pink-secondary-tuple: 330, 100%, 90% !important;
  --pink-tuple: 330, 100%, 75.1% !important;
  --pinkSecondary: rgb(255, 204, 230) !important;
  --primary-lit: 75.1% !important;
  --primary-sat: 100% !important;
  --prompt-background: rgb(33, 33, 44) !important;
  --prompt-border-color: transparent !important;
  --purple: rgb(149, 128, 255) !important;
  --purple-200: rgba(149, 128, 255, 0.2) !important;
  --purple-hue: 250 !important;
  --purple-pink: rgb(223, 128, 255) !important;
  --purple-pink-hue: 285 !important;
  --purple-pink-secondary-tuple: 285, 100%, 90% !important;
  --purple-pink-tuple: 285, 100%, 75.1% !important;
  --purple-secondary-tuple: 250, 100%, 90% !important;
  --purple-tuple: 250, 100%, 75.1% !important;
  --raised-background: color-mix(in srgb, rgb(28, 29, 38) 65%, transparent) linear-gradient(rgb(28, 29, 38), color-mix(in srgb, rgb(28, 29, 38) 65%, transparent)) !important;
  --red: rgb(255, 149, 128) !important;
  --red-900: rgba(255, 149, 128, 0.9) !important;
  --red-hue: 10 !important;
  --red-secondary-tuple: 10, 100%, 90% !important;
  --red-tuple: 10, 100%, 75.1% !important;
  --ribbon-background: rgb(20, 20, 26) !important;
  --ribbon-background-collapsed: rgb(20, 20, 26) !important;
  --scrollbar-active-thumb-bg: rgba(255, 128, 191, 0.3) !important;
  --scrollbar-bg: rgb(33, 33, 44) !important;
  --scrollbar-thumb-bg: rgba(255, 128, 191, 0.1) !important;
  --search-clear-button-color: rgba(248, 248, 242, 0.6) !important;
  --search-icon-color: rgba(248, 248, 242, 0.6) !important;
  --search-result-background: rgb(33, 33, 44) !important;
  --secondary: rgb(255, 128, 191) !important;
  --secondary-lit: 90% !important;
  --secondary-sat: 100% !important;
  --setting-group-heading-color: rgb(248, 248, 242) !important;
  --setting-items-background: rgb(28, 29, 38) !important;
  --setting-items-border-color: transparent !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --status-bar-background: rgb(28, 29, 38) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: rgba(248, 248, 242, 0.6) !important;
  --suggestion-background: rgb(33, 33, 44) !important;
  --tab-background-active: rgb(33, 33, 44) !important;
  --tab-container-background: rgb(28, 29, 38) !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: rgb(28, 29, 38) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(28, 29, 38), transparent) !important;
  --tab-text-color: rgba(248, 248, 242, 0.6) !important;
  --tab-text-color-active: rgba(248, 248, 242, 0.6) !important;
  --tab-text-color-focused: rgba(248, 248, 242, 0.6) !important;
  --tab-text-color-focused-active: rgba(248, 248, 242, 0.6) !important;
  --tab-text-color-focused-active-current: rgb(248, 248, 242) !important;
  --tab-text-color-focused-highlighted: rgb(255, 128, 191) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: transparent !important;
  --table-drag-handle-background-active: rgb(255, 128, 191) !important;
  --table-drag-handle-color: rgba(248, 248, 242, 0.6) !important;
  --table-drag-handle-color-active: rgb(33, 33, 44) !important;
  --table-header-border-color: transparent !important;
  --table-header-color: rgb(33, 33, 44) !important;
  --table-selection-border-color: rgb(255, 128, 191) !important;
  --tag-color: rgb(255, 128, 191) !important;
  --tag-color-hover: rgb(255, 128, 191) !important;
  --tertiary: rgb(255, 204, 230) !important;
  --text-accent: rgb(255, 128, 191) !important;
  --text-accent-hover: rgb(255, 204, 230) !important;
  --text-error: rgb(255, 149, 128) !important;
  --text-faint: rgba(248, 248, 242, 0.6) !important;
  --text-highlight-bg: rgba(255, 255, 128, 0.1) !important;
  --text-highlight-bg-active: rgba(255, 202, 128, 0.1) !important;
  --text-muted: rgba(248, 248, 242, 0.6) !important;
  --text-normal: rgb(248, 248, 242) !important;
  --text-on-accent: rgb(33, 33, 44) !important;
  --text-selection: rgba(149, 128, 255, 0.2) !important;
  --textHighlight: rgba(255, 255, 128, 0.1) !important;
  --titleFont: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(28, 29, 38) !important;
  --titlebar-background-focused: rgb(20, 20, 26) !important;
  --titlebar-border-color: transparent !important;
  --titlebar-text-color: rgba(248, 248, 242, 0.6) !important;
  --titlebar-text-color-focused: rgb(248, 248, 242) !important;
  --vault-profile-color: rgb(248, 248, 242) !important;
  --vault-profile-color-hover: rgb(248, 248, 242) !important;
  --yellow: rgb(255, 255, 128) !important;
  --yellow-100: rgba(255, 255, 128, 0.1) !important;
  --yellow-700: rgba(255, 255, 128, 0.7) !important;
  --yellow-hue: 60 !important;
  --yellow-secondary-tuple: 60, 100%, 90% !important;
  --yellow-tuple: 60, 100%, 75.1% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 29, 38);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(33, 33, 44);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 29, 38);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 29, 38);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(33, 33, 44);
  color: rgb(248, 248, 242);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 128, 192);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 192) none 0px;
  text-decoration: rgb(255, 128, 192);
  text-decoration-color: rgb(255, 128, 192);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(128, 255, 234);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 255, 234) none 0px;
  text-decoration: rgb(128, 255, 234);
  text-decoration-color: rgb(128, 255, 234);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(128, 255, 234);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 255, 234) none 0px;
  text-decoration: rgb(128, 255, 234);
  text-decoration-color: rgb(128, 255, 234);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 128, 192);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 192) none 0px;
  text-decoration: rgb(255, 128, 192);
  text-decoration-color: rgb(255, 128, 192);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 255, 128, 0.1);
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body del {
  color: rgba(248, 248, 242, 0.4);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(248, 248, 242, 0.4) none 0px;
  text-decoration: line-through rgba(248, 248, 242, 0.4);
  text-decoration-color: rgba(248, 248, 242, 0.4);
}

html[saved-theme="dark"] body p {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(248, 248, 242, 0.6) none 0px;
  text-decoration: rgba(248, 248, 242, 0.6);
  text-decoration-color: rgba(248, 248, 242, 0.6);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(139, 255, 128);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(139, 255, 128) none 0px;
  text-decoration: underline rgb(139, 255, 128);
  text-decoration-color: rgb(139, 255, 128);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 202, 128);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 202, 128) none 0px;
  text-decoration: underline rgb(255, 202, 128);
  text-decoration-color: rgb(255, 202, 128);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(255, 255, 128, 0.7);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(255, 255, 128, 0.7) none 0px;
  text-decoration: underline rgba(255, 255, 128, 0.7);
  text-decoration-color: rgba(255, 255, 128, 0.7);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body dt {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(33, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(33, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(255, 128, 192, 0.4);
  text-decoration: rgba(255, 128, 192, 0.4);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(28, 29, 38);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 239.578px;
  margin-right: 239.578px;
  width: 182.844px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(33, 33, 44);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(28, 29, 38);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-width: 0px;
  border-left-color: rgb(248, 248, 242);
  border-left-width: 0px;
  border-right-color: rgb(248, 248, 242);
  border-right-width: 0px;
  border-top-color: rgb(248, 248, 242);
  border-top-width: 0px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(33, 33, 44);
  font-weight: 700;
  padding-bottom: 6px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(149, 128, 255);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(149, 128, 255);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(248, 248, 242);
  border-radius: 4px;
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(255, 128, 192);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(255, 128, 192);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(248, 248, 242, 0.6);
  text-decoration: line-through rgba(248, 248, 242, 0.6);
  text-decoration-color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 128, 192);
  border-left-color: rgb(255, 128, 192);
  border-right-color: rgb(255, 128, 192);
  border-top-color: rgb(255, 128, 192);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(20, 20, 26);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 44);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(20, 20, 26);
  border-bottom-color: rgb(28, 29, 38);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 128, 192);
}

html[saved-theme="dark"] body h1 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 128, 0.1);
  border-bottom-color: rgb(255, 255, 128);
  border-left-color: rgb(255, 255, 128);
  border-right-color: rgb(255, 255, 128);
  border-top-color: rgb(255, 255, 128);
  color: rgb(255, 255, 128);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(20, 20, 26);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(248, 248, 242, 0.6);
  border-top-width: 0px;
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(248, 248, 242, 0.6);
  text-decoration: rgba(248, 248, 242, 0.6);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(248, 248, 242, 0.6);
  text-decoration: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(248, 248, 242, 0.6);
  text-decoration: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgba(248, 248, 242, 0.6);
  stroke: rgba(248, 248, 242, 0.6);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(149, 128, 255);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(255, 128, 192);
  border-right-style: solid;
  border-right-width: 4px;
  border-top-color: rgb(248, 248, 242);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(20, 20, 26);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(248, 248, 242);
  text-decoration: underline dotted rgb(248, 248, 242);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgb(223, 128, 255);
  border-left-color: rgb(223, 128, 255);
  border-right-color: rgb(223, 128, 255);
  border-top-color: rgb(223, 128, 255);
  color: rgb(223, 128, 255);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body sub {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body summary {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body sup {
  color: rgb(248, 248, 242);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: transparent !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-box-shadow: rgb(205, 206, 218) !important;
  --background-modifier-cover: rgb(223, 223, 231) !important;
  --background-modifier-error: rgba(219, 0, 0, 0.9) !important;
  --background-modifier-error-hover: rgb(219, 0, 0) !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(219, 0, 110, 0.1) !important;
  --background-modifier-form-field-highlighted: rgba(219, 0, 110, 0.3) !important;
  --background-modifier-form-field-hover: rgba(219, 0, 110, 0.1) !important;
  --background-modifier-success: rgba(55, 219, 0, 0.2) !important;
  --background-primary: rgb(243, 244, 246) !important;
  --background-primary-alt: rgb(252, 252, 253) !important;
  --background-secondary: rgb(252, 252, 253) !important;
  --background-secondary-alt: rgb(223, 223, 231) !important;
  --bases-cards-background: rgb(243, 244, 246) !important;
  --bases-cards-cover-background: rgb(252, 252, 253) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-group-heading-property-color: rgba(33, 34, 44, 0.6) !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: rgb(243, 244, 246) !important;
  --bases-table-cell-background-disabled: rgb(252, 252, 253) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px transparent !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(219, 0, 110) !important;
  --bases-table-group-background: rgb(252, 252, 253) !important;
  --bases-table-header-background: rgb(243, 244, 246) !important;
  --bases-table-header-color: rgba(33, 34, 44, 0.6) !important;
  --bases-table-summary-background: rgb(243, 244, 246) !important;
  --blockquote-border: rgb(219, 0, 0) !important;
  --blockquote-border-color: none !important;
  --blue: rgb(0, 146, 219) !important;
  --blue-600: rgba(0, 146, 219, 0.6) !important;
  --blue-hue: 200 !important;
  --blue-secondary-tuple: 200, 80%, 50% !important;
  --blue-tuple: 200, 100%, 43% !important;
  --blur-background: color-mix(in srgb, rgb(243, 244, 246) 65%, transparent) linear-gradient(rgb(243, 244, 246), color-mix(in srgb, rgb(243, 244, 246) 65%, transparent)) !important;
  --bodyFont: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(243, 244, 246) !important;
  --canvas-card-label-color: rgba(33, 34, 44, 0.6) !important;
  --caret-color: rgb(33, 34, 44) !important;
  --checkbox-border-color: rgba(33, 34, 44, 0.6) !important;
  --checkbox-border-color-hover: rgba(33, 34, 44, 0.6) !important;
  --checkbox-color: rgb(219, 0, 110) !important;
  --checkbox-color-hover: rgba(33, 34, 44, 0.6) !important;
  --checkbox-marker-color: rgb(243, 244, 246) !important;
  --checklist-done-color: rgba(33, 34, 44, 0.6) !important;
  --code-background: rgb(252, 252, 253) !important;
  --code-border-color: transparent !important;
  --code-comment: rgba(33, 34, 44, 0.6) !important;
  --code-normal: rgb(219, 0, 183) !important;
  --code-punctuation: rgba(33, 34, 44, 0.6) !important;
  --code-size: 1em !important;
  --codeFont: '??', "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgba(33, 34, 44, 0.6) !important;
  --collapse-icon-color-collapsed: rgb(219, 0, 110) !important;
  --dark: rgb(33, 34, 44) !important;
  --darkgray: rgb(33, 34, 44) !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(219, 0, 110) !important;
  --dropdown-background: rgb(252, 252, 253) !important;
  --dropdown-background-hover: rgb(223, 223, 231) !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --embed-border-start: 2px solid rgb(219, 0, 110) !important;
  --file-header-background: rgb(243, 244, 246) !important;
  --file-header-background-focused: rgb(243, 244, 246) !important;
  --file-header-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(252, 252, 253) !important;
  --flair-color: rgb(33, 34, 44) !important;
  --font-interface: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Fira Sans", sans-serif !important;
  --font-mermaid: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Fira Code", monospace !important;
  --font-print: '??', '??', "Fira Sans", sans-serif, 'Arial' !important;
  --font-text: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Fira Sans", sans-serif !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: rgba(33, 34, 44, 0.6) !important;
  --footnote-id-color-no-occurrences: rgba(33, 34, 44, 0.6) !important;
  --gradientDegree: 135deg !important;
  --graph-node: rgba(33, 34, 44, 0.6) !important;
  --graph-node-focused: rgb(219, 0, 110) !important;
  --graph-node-unresolved: rgba(33, 34, 44, 0.6) !important;
  --graph-text: rgb(33, 34, 44) !important;
  --gray: rgba(33, 34, 44, 0.6) !important;
  --green: rgb(55, 219, 0) !important;
  --green-200: rgba(55, 219, 0, 0.2) !important;
  --green-hue: 105 !important;
  --green-secondary-tuple: 105, 80%, 50% !important;
  --green-tuple: 105, 100%, 43% !important;
  --greenSecondary: rgb(77, 230, 25) !important;
  --headerFont: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(33, 34, 44, 0.6) !important;
  --highlight: rgba(219, 146, 0, 0.1) !important;
  --hr-color: rgb(219, 110, 0) !important;
  --icon-color: rgba(33, 34, 44, 0.6) !important;
  --icon-color-active: rgb(219, 0, 110) !important;
  --icon-color-focused: rgb(33, 34, 44) !important;
  --icon-color-hover: rgba(33, 34, 44, 0.6) !important;
  --indentation-guide: rgb(196, 198, 212) !important;
  --indentation-guide-opacity: 10% !important;
  --input-date-separator: rgba(33, 34, 44, 0.6) !important;
  --input-placeholder-color: rgba(33, 34, 44, 0.6) !important;
  --input-shadow: none !important;
  --interactive-accent: rgb(219, 0, 110) !important;
  --interactive-accent-hover: rgb(219, 110, 0) !important;
  --interactive-hover: rgb(223, 223, 231) !important;
  --interactive-normal: rgb(252, 252, 253) !important;
  --interactive-success: rgb(55, 219, 0) !important;
  --layer-0: rgb(223, 223, 231) !important;
  --layer-1: rgb(252, 252, 253) !important;
  --layer-2: rgb(243, 244, 246) !important;
  --layer-3: rgb(205, 206, 218) !important;
  --layer-4: rgb(196, 198, 212) !important;
  --layer-hue-sat: 235, 15% !important;
  --light: rgb(243, 244, 246) !important;
  --lightgray: rgb(252, 252, 253) !important;
  --link-color: rgb(219, 110, 0) !important;
  --link-color-hover: rgb(230, 128, 25) !important;
  --link-external-color: rgb(55, 219, 0) !important;
  --link-external-color-hover: rgb(77, 230, 25) !important;
  --link-unresolved-color: rgba(219, 146, 0, 0.7) !important;
  --link-unresolved-hover: rgb(219, 146, 0) !important;
  --list-marker-color: rgba(33, 34, 44, 0.6) !important;
  --list-marker-color-collapsed: rgb(219, 0, 110) !important;
  --list-marker-color-hover: rgba(33, 34, 44, 0.6) !important;
  --menu-background: rgb(252, 252, 253) !important;
  --menu-border-color: transparent !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(33, 34, 44) !important;
  --metadata-label-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(33, 34, 44, 0.6) !important;
  --metadata-label-text-color-hover: rgba(33, 34, 44, 0.6) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --modal-background: rgb(243, 244, 246) !important;
  --modal-border-color: transparent !important;
  --nav-collapse-icon-color: rgba(33, 34, 44, 0.6) !important;
  --nav-collapse-icon-color-collapsed: rgba(33, 34, 44, 0.6) !important;
  --nav-heading-color: rgb(33, 34, 44) !important;
  --nav-heading-color-collapsed: rgba(33, 34, 44, 0.6) !important;
  --nav-heading-color-collapsed-hover: rgba(33, 34, 44, 0.6) !important;
  --nav-heading-color-hover: rgb(33, 34, 44) !important;
  --nav-item-color: rgba(33, 34, 44, 0.6) !important;
  --nav-item-color-active: rgb(33, 34, 44) !important;
  --nav-item-color-highlighted: rgb(219, 0, 110) !important;
  --nav-item-color-hover: rgb(33, 34, 44) !important;
  --nav-item-color-selected: rgb(33, 34, 44) !important;
  --nav-tag-color: rgba(33, 34, 44, 0.6) !important;
  --nav-tag-color-active: rgba(33, 34, 44, 0.6) !important;
  --nav-tag-color-hover: rgba(33, 34, 44, 0.6) !important;
  --on-layer: rgb(33, 34, 44) !important;
  --on-layer-400: rgba(33, 34, 44, 0.4) !important;
  --on-layer-600: rgba(33, 34, 44, 0.6) !important;
  --on-layer-tuple: 234, 14%, 15% !important;
  --orange: rgb(219, 110, 0) !important;
  --orange-100: rgba(219, 110, 0, 0.1) !important;
  --orange-hue: 30 !important;
  --orange-secondary-tuple: 30, 80%, 50% !important;
  --orange-tuple: 30, 100%, 43% !important;
  --orangeSecondary: rgb(230, 128, 25) !important;
  --pdf-background: rgb(243, 244, 246) !important;
  --pdf-page-background: rgb(243, 244, 246) !important;
  --pdf-sidebar-background: rgb(243, 244, 246) !important;
  --pill-border-color: transparent !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: rgba(33, 34, 44, 0.6) !important;
  --pill-color-hover: rgb(33, 34, 44) !important;
  --pill-color-remove: rgba(33, 34, 44, 0.6) !important;
  --pill-color-remove-hover: rgb(219, 0, 110) !important;
  --pink: rgb(219, 0, 110) !important;
  --pink-100: rgba(219, 0, 110, 0.1) !important;
  --pink-300: rgba(219, 0, 110, 0.3) !important;
  --pink-400: rgba(219, 0, 110, 0.4) !important;
  --pink-hue: 330 !important;
  --pink-secondary-tuple: 330, 80%, 50% !important;
  --pink-tuple: 330, 100%, 43% !important;
  --pinkSecondary: rgb(230, 25, 128) !important;
  --primary-lit: 43% !important;
  --primary-sat: 100% !important;
  --prompt-background: rgb(243, 244, 246) !important;
  --prompt-border-color: transparent !important;
  --purple: rgb(219, 0, 219) !important;
  --purple-200: rgba(219, 0, 219, 0.2) !important;
  --purple-hue: 300 !important;
  --purple-pink: rgb(219, 0, 183) !important;
  --purple-pink-hue: 310 !important;
  --purple-pink-secondary-tuple: 310, 80%, 50% !important;
  --purple-pink-tuple: 310, 100%, 43% !important;
  --purple-secondary-tuple: 300, 80%, 50% !important;
  --purple-tuple: 300, 100%, 43% !important;
  --raised-background: color-mix(in srgb, rgb(243, 244, 246) 65%, transparent) linear-gradient(rgb(243, 244, 246), color-mix(in srgb, rgb(243, 244, 246) 65%, transparent)) !important;
  --red: rgb(219, 0, 0) !important;
  --red-900: rgba(219, 0, 0, 0.9) !important;
  --red-hue: 0 !important;
  --red-secondary-tuple: 0, 80%, 50% !important;
  --red-tuple: 0, 100%, 43% !important;
  --ribbon-background: rgb(223, 223, 231) !important;
  --ribbon-background-collapsed: rgb(223, 223, 231) !important;
  --scrollbar-active-thumb-bg: rgba(219, 0, 110, 0.3) !important;
  --scrollbar-bg: rgb(243, 244, 246) !important;
  --scrollbar-thumb-bg: rgba(219, 0, 110, 0.1) !important;
  --search-clear-button-color: rgba(33, 34, 44, 0.6) !important;
  --search-icon-color: rgba(33, 34, 44, 0.6) !important;
  --search-result-background: rgb(243, 244, 246) !important;
  --secondary: rgb(219, 0, 110) !important;
  --secondary-lit: 50% !important;
  --secondary-sat: 80% !important;
  --setting-group-heading-color: rgb(33, 34, 44) !important;
  --setting-items-background: rgb(252, 252, 253) !important;
  --setting-items-border-color: transparent !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --status-bar-background: rgb(252, 252, 253) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: rgba(33, 34, 44, 0.6) !important;
  --suggestion-background: rgb(243, 244, 246) !important;
  --tab-background-active: rgb(243, 244, 246) !important;
  --tab-container-background: rgb(252, 252, 253) !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: rgb(252, 252, 253) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(252, 252, 253), transparent) !important;
  --tab-text-color: rgba(33, 34, 44, 0.6) !important;
  --tab-text-color-active: rgba(33, 34, 44, 0.6) !important;
  --tab-text-color-focused: rgba(33, 34, 44, 0.6) !important;
  --tab-text-color-focused-active: rgba(33, 34, 44, 0.6) !important;
  --tab-text-color-focused-active-current: rgb(33, 34, 44) !important;
  --tab-text-color-focused-highlighted: rgb(219, 0, 110) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: transparent !important;
  --table-drag-handle-background-active: rgb(219, 0, 110) !important;
  --table-drag-handle-color: rgba(33, 34, 44, 0.6) !important;
  --table-drag-handle-color-active: rgb(243, 244, 246) !important;
  --table-header-border-color: transparent !important;
  --table-header-color: rgb(243, 244, 246) !important;
  --table-selection-border-color: rgb(219, 0, 110) !important;
  --tag-color: rgb(219, 0, 110) !important;
  --tag-color-hover: rgb(219, 0, 110) !important;
  --tertiary: rgb(230, 25, 128) !important;
  --text-accent: rgb(219, 0, 110) !important;
  --text-accent-hover: rgb(230, 25, 128) !important;
  --text-error: rgb(219, 0, 0) !important;
  --text-faint: rgba(33, 34, 44, 0.6) !important;
  --text-highlight-bg: rgba(219, 146, 0, 0.1) !important;
  --text-highlight-bg-active: rgba(219, 110, 0, 0.1) !important;
  --text-muted: rgba(33, 34, 44, 0.6) !important;
  --text-normal: rgb(33, 34, 44) !important;
  --text-on-accent: rgb(243, 244, 246) !important;
  --text-selection: rgba(219, 0, 219, 0.2) !important;
  --textHighlight: rgba(219, 146, 0, 0.1) !important;
  --titleFont: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(252, 252, 253) !important;
  --titlebar-background-focused: rgb(223, 223, 231) !important;
  --titlebar-border-color: transparent !important;
  --titlebar-text-color: rgba(33, 34, 44, 0.6) !important;
  --titlebar-text-color-focused: rgb(33, 34, 44) !important;
  --vault-profile-color: rgb(33, 34, 44) !important;
  --vault-profile-color-hover: rgb(33, 34, 44) !important;
  --yellow: rgb(219, 146, 0) !important;
  --yellow-100: rgba(219, 146, 0, 0.1) !important;
  --yellow-700: rgba(219, 146, 0, 0.7) !important;
  --yellow-hue: 40 !important;
  --yellow-secondary-tuple: 40, 80%, 50% !important;
  --yellow-tuple: 40, 100%, 43% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(252, 252, 253);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(243, 244, 246);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(252, 252, 253);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(252, 252, 253);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(243, 244, 246);
  color: rgb(33, 34, 44);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(219, 0, 110);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 0, 110) none 0px;
  text-decoration: rgb(219, 0, 110);
  text-decoration-color: rgb(219, 0, 110);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 146, 219);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 146, 219) none 0px;
  text-decoration: rgb(0, 146, 219);
  text-decoration-color: rgb(0, 146, 219);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 146, 219);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 146, 219) none 0px;
  text-decoration: rgb(0, 146, 219);
  text-decoration-color: rgb(0, 146, 219);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(219, 0, 110);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 0, 110) none 0px;
  text-decoration: rgb(219, 0, 110);
  text-decoration-color: rgb(219, 0, 110);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(219, 146, 0, 0.1);
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(33, 34, 44) none 0px;
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body del {
  color: rgba(33, 34, 44, 0.4);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(33, 34, 44, 0.4) none 0px;
  text-decoration: line-through rgba(33, 34, 44, 0.4);
  text-decoration-color: rgba(33, 34, 44, 0.4);
}

html[saved-theme="light"] body p {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(33, 34, 44, 0.6) none 0px;
  text-decoration: rgba(33, 34, 44, 0.6);
  text-decoration-color: rgba(33, 34, 44, 0.6);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(55, 219, 0);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 219, 0) none 0px;
  text-decoration: underline rgb(55, 219, 0);
  text-decoration-color: rgb(55, 219, 0);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(219, 110, 0);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 110, 0) none 0px;
  text-decoration: underline rgb(219, 110, 0);
  text-decoration-color: rgb(219, 110, 0);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(219, 146, 0, 0.7);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(219, 146, 0, 0.7) none 0px;
  text-decoration: underline rgba(219, 146, 0, 0.7);
  text-decoration-color: rgba(219, 146, 0, 0.7);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body dt {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body ol > li {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body ol.overflow {
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body ul > li {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(219, 0, 110, 0.4);
  text-decoration: rgba(219, 0, 110, 0.4);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(252, 252, 253);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 239.578px;
  margin-right: 239.578px;
  width: 182.844px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(252, 252, 253);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(33, 34, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 34, 44);
  border-left-width: 0px;
  border-right-color: rgb(33, 34, 44);
  border-right-width: 0px;
  border-top-color: rgb(33, 34, 44);
  border-top-width: 0px;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(243, 244, 246);
  font-weight: 700;
  padding-bottom: 6px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(219, 0, 219);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(219, 0, 219);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(219, 0, 219);
  border-left-color: rgb(219, 0, 219);
  border-right-color: rgb(219, 0, 219);
  border-top-color: rgb(219, 0, 219);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body figcaption {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(33, 34, 44);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(33, 34, 44);
  border-radius: 4px;
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(33, 34, 44);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(219, 0, 110);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(219, 0, 110);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(33, 34, 44, 0.6);
  text-decoration: line-through rgba(33, 34, 44, 0.6);
  text-decoration-color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(219, 0, 110);
  border-left-color: rgb(219, 0, 110);
  border-right-color: rgb(219, 0, 110);
  border-top-color: rgb(219, 0, 110);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(223, 223, 231);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(33, 34, 44) none 0px;
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(223, 223, 231);
  border-bottom-color: rgb(252, 252, 253);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(219, 0, 110);
}

html[saved-theme="light"] body h1 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(219, 146, 0, 0.1);
  border-bottom-color: rgb(219, 146, 0);
  border-left-color: rgb(219, 146, 0);
  border-right-color: rgb(219, 146, 0);
  border-top-color: rgb(219, 146, 0);
  color: rgb(219, 146, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(223, 223, 231);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(33, 34, 44, 0.6);
  border-top-width: 0px;
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(33, 34, 44, 0.6);
  text-decoration: rgba(33, 34, 44, 0.6);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(33, 34, 44, 0.6);
  text-decoration: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(33, 34, 44, 0.6);
  text-decoration: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgba(33, 34, 44, 0.6);
  stroke: rgba(33, 34, 44, 0.6);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgb(33, 34, 44);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(219, 0, 219);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(219, 0, 110);
  border-right-style: solid;
  border-right-width: 4px;
  border-top-color: rgb(33, 34, 44);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(223, 223, 231);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(33, 34, 44);
  text-decoration: underline dotted rgb(33, 34, 44);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgb(219, 0, 183);
  border-left-color: rgb(219, 0, 183);
  border-right-color: rgb(219, 0, 183);
  border-top-color: rgb(219, 0, 183);
  color: rgb(219, 0, 183);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body sub {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body summary {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body sup {
  color: rgb(33, 34, 44);
}`,
  },
};
