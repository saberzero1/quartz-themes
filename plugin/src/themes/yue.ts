import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "yue",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-alpha: 20% !important;
  --accent-h: 210 !important;
  --accent-l: 44% !important;
  --accent-s: 100% !important;
  --atom-aqua: #00A7AA !important;
  --atom-blue: #0e86ff !important;
  --atom-gray-1: #5c5c5c !important;
  --atom-gray-2: #ababab !important;
  --atom-green: #98E342 !important;
  --atom-orange: #F39B35 !important;
  --atom-purple: #A06FCA !important;
  --atom-red: #FC4384 !important;
  --atom-white: #d4d4d4 !important;
  --atom-yellow: #E6DB74 !important;
  --background-modifier-active-hover: rgba(0, 112, 224, 0.1) !important;
  --background-modifier-border: #272727 !important;
  --background-modifier-border-focus: #555 !important;
  --background-modifier-border-hover: #272727 !important;
  --background-modifier-form-field: #1c1c1c !important;
  --background-modifier-form-field-hover: #1c1c1c !important;
  --background-modifier-success: #6ea82c !important;
  --background-primary: #1c1c1c !important;
  --background-primary-alt: #272727 !important;
  --background-secondary: #1c1c1c !important;
  --background-secondary-alt: #272727 !important;
  --base-d: 20% !important;
  --base-h: 0 !important;
  --base-l: 97% !important;
  --base-s: 0% !important;
  --bases-cards-background: #1c1c1c !important;
  --bases-cards-cover-background: #272727 !important;
  --bases-cards-shadow: 0 0 0 1px #272727 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #272727 !important;
  --bases-embed-border-color: #272727 !important;
  --bases-group-heading-property-color: rgb(217, 217, 217) !important;
  --bases-table-border-color: #272727 !important;
  --bases-table-cell-background-active: #1c1c1c !important;
  --bases-table-cell-background-disabled: #272727 !important;
  --bases-table-cell-background-selected: rgba(0, 112, 224, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #555 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 112, 224) !important;
  --bases-table-group-background: #272727 !important;
  --bases-table-header-background: #1c1c1c !important;
  --bases-table-header-color: rgb(217, 217, 217) !important;
  --bases-table-summary-background: #1c1c1c !important;
  --blockquote-border-color: rgb(0, 112, 224) !important;
  --blue: #2e80f2 !important;
  --blur-background: color-mix(in srgb, #272727 65%, transparent) linear-gradient(#272727, color-mix(in srgb, #272727 65%, transparent)) !important;
  --bodyFont: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #1c1c1c !important;
  --canvas-card-label-color: rgb(153, 153, 153) !important;
  --canvas-dot-pattern: #272727 !important;
  --checkbox-border-color: rgb(153, 153, 153) !important;
  --checkbox-border-color-hover: rgb(217, 217, 217) !important;
  --checkbox-color: rgb(0, 112, 224) !important;
  --checkbox-color-hover: rgb(0, 120, 240) !important;
  --checkbox-marker-color: #1c1c1c !important;
  --checkbox-radius: 30% !important;
  --checklist-done-color: rgb(217, 217, 217) !important;
  --code-background: #272727 !important;
  --code-border-color: #272727 !important;
  --code-comment: rgb(153, 153, 153) !important;
  --code-function: #ffda34 !important;
  --code-important: #F39B35 !important;
  --code-punctuation: rgb(217, 217, 217) !important;
  --code-string: #6ea82c !important;
  --code-value: #A06FCA !important;
  --codeFont: '??', 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(153, 153, 153) !important;
  --collapse-icon-color-collapsed: rgb(0, 112, 224) !important;
  --color-accent: rgb(0, 112, 224) !important;
  --color-accent-1: rgb(0, 120, 240) !important;
  --color-accent-2: rgb(0, 125, 250) !important;
  --color-accent-hsl: 210, 100%, 44% !important;
  --color-base-00: #1c1c1c !important;
  --color-base-10: #272727 !important;
  --color-base-20: #1c1c1c !important;
  --color-base-25: #1c1c1c !important;
  --color-base-30: #272727 !important;
  --color-base-35: #272727 !important;
  --color-base-40: #555 !important;
  --color-base-50: #666 !important;
  --color-base-60: #999 !important;
  --color-base-70: #bababa !important;
  --color-blue: #0e86ff !important;
  --color-green: #6ea82c !important;
  --color-orange: #F39B35 !important;
  --color-purple: #A06FCA !important;
  --color-yellow: #ffda34 !important;
  --dark: rgb(217, 217, 217) !important;
  --darkgray: rgb(217, 217, 217) !important;
  --divider-color: #272727 !important;
  --divider-color-hover: rgb(0, 112, 224) !important;
  --dropdown-background: #272727 !important;
  --dropdown-background-hover: #272727 !important;
  --embed-block-shadow-hover: 0 0 0 1px #272727, inset 0 0 0 1px #272727 !important;
  --embed-border-start: 2px solid rgb(0, 112, 224) !important;
  --file-header-background: #1c1c1c !important;
  --file-header-background-focused: #1c1c1c !important;
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #272727 !important;
  --folding-offset: 10px !important;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace !important;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, 'Arial' !important;
  --font-text: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --footnote-divider-color: #272727 !important;
  --footnote-id-color: rgb(217, 217, 217) !important;
  --footnote-id-color-no-occurrences: rgb(153, 153, 153) !important;
  --graph-line: #272727 !important;
  --graph-node: rgb(217, 217, 217) !important;
  --graph-node-attachment: #ffda34 !important;
  --graph-node-focused: rgb(0, 112, 224) !important;
  --graph-node-tag: #6ea82c !important;
  --graph-node-unresolved: rgb(153, 153, 153) !important;
  --gray: rgb(217, 217, 217) !important;
  --green: #00A7AA !important;
  --h1-color: rgb(0, 112, 224) !important;
  --h1-size: 1.7rem !important;
  --h1-text-color-dt: rgb(0, 112, 224) !important;
  --h2-color: rgb(0, 112, 224) !important;
  --h2-size: 1.5rem !important;
  --h2-text-color-dt: rgb(0, 112, 224) !important;
  --h3-color: rgb(0, 112, 224) !important;
  --h3-size: 1.2rem !important;
  --h3-text-color-dt: rgb(0, 112, 224) !important;
  --h4-color: rgb(0, 112, 224) !important;
  --h4-size: 1.1rem !important;
  --h4-text-color-dt: rgb(0, 112, 224) !important;
  --h5-color: rgb(0, 112, 224) !important;
  --h5-size: 1rem !important;
  --h5-text-color-dt: rgb(0, 112, 224) !important;
  --h6-color: rgb(0, 112, 224) !important;
  --h6-size: 0.9rem !important;
  --h6-text-color-dt: rgb(0, 112, 224) !important;
  --headerFont: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(153, 153, 153) !important;
  --highlight: rgba(0, 112, 224, 0.5) !important;
  --hr-color: #272727 !important;
  --icon-color: rgb(217, 217, 217) !important;
  --icon-color-active: rgb(0, 112, 224) !important;
  --icon-color-hover: rgb(217, 217, 217) !important;
  --icon-muted: 0.5 !important;
  --inline-title-color: rgb(0, 112, 224) !important;
  --inline-title-size: 1.7rem !important;
  --input-date-separator: rgb(153, 153, 153) !important;
  --input-placeholder-color: rgb(153, 153, 153) !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
    0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
    0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2),
    0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent !important;
  --interactive-accent: rgb(0, 112, 224) !important;
  --interactive-accent-hover: rgb(0, 120, 240) !important;
  --interactive-accent-hsl: 210, 100%, 44% !important;
  --interactive-hover: #272727 !important;
  --interactive-normal: #272727 !important;
  --light: #1c1c1c !important;
  --lightgray: #1c1c1c !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --line-width-adaptive: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: rgb(0, 112, 224) !important;
  --link-color-hover: rgb(71, 163, 255) !important;
  --link-external-color: rgb(0, 112, 224) !important;
  --link-external-color-hover: rgb(71, 163, 255) !important;
  --link-unresolved-color: rgb(0, 112, 224) !important;
  --link-unresolved-decoration-color: rgba(0, 112, 224, 0.3) !important;
  --list-marker-color: rgb(153, 153, 153) !important;
  --list-marker-color-collapsed: rgb(0, 112, 224) !important;
  --list-marker-color-hover: rgb(217, 217, 217) !important;
  --max-col-width: 18em !important;
  --max-width: 90% !important;
  --menu-background: #1c1c1c !important;
  --menu-border-color: #272727 !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-border-color: #272727 !important;
  --metadata-divider-color: #272727 !important;
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(217, 217, 217) !important;
  --metadata-label-text-color-hover: rgb(217, 217, 217) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #555 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #272727 !important;
  --modal-background: #1c1c1c !important;
  --modal-border-color: #555 !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: rgb(153, 153, 153) !important;
  --nav-collapse-icon-color-collapsed: rgb(153, 153, 153) !important;
  --nav-heading-color-collapsed: rgb(153, 153, 153) !important;
  --nav-heading-color-collapsed-hover: rgb(217, 217, 217) !important;
  --nav-item-background-selected: rgba(0, 112, 224, 0.15) !important;
  --nav-item-color: rgb(217, 217, 217) !important;
  --nav-item-color-highlighted: rgb(0, 112, 224) !important;
  --nav-tag-color: rgb(153, 153, 153) !important;
  --nav-tag-color-active: rgb(217, 217, 217) !important;
  --nav-tag-color-hover: rgb(217, 217, 217) !important;
  --nested-padding: 1.1em !important;
  --orange: #F39B35 !important;
  --pdf-background: #1c1c1c !important;
  --pdf-page-background: #1c1c1c !important;
  --pdf-shadow: 0 0 0 1px #272727 !important;
  --pdf-sidebar-background: #1c1c1c !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #272727 !important;
  --pill-border-color: #272727 !important;
  --pill-border-color-hover: #272727 !important;
  --pill-color: rgb(217, 217, 217) !important;
  --pill-color-remove: rgb(153, 153, 153) !important;
  --pill-color-remove-hover: rgb(0, 112, 224) !important;
  --pink: #da7dae !important;
  --prompt-background: #1c1c1c !important;
  --prompt-border-color: #555 !important;
  --purple: #A06FCA !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, #272727 65%, transparent) linear-gradient(#272727, color-mix(in srgb, #272727 65%, transparent)) !important;
  --red: #FC4384 !important;
  --ribbon-background: #1c1c1c !important;
  --ribbon-background-collapsed: #1c1c1c !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: rgb(217, 217, 217) !important;
  --search-icon-color: rgb(217, 217, 217) !important;
  --search-result-background: #1c1c1c !important;
  --secondary: rgb(0, 112, 224) !important;
  --setting-items-background: #272727 !important;
  --setting-items-border-color: #272727 !important;
  --setting-items-radius: 10px !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --slider-thumb-border-color: #272727 !important;
  --slider-track-background: #272727 !important;
  --status-bar-background: #1c1c1c !important;
  --status-bar-border-color: #272727 !important;
  --status-bar-text-color: rgb(217, 217, 217) !important;
  --suggestion-background: #1c1c1c !important;
  --sync-avatar-color-2: #F39B35 !important;
  --sync-avatar-color-3: #ffda34 !important;
  --sync-avatar-color-4: #6ea82c !important;
  --sync-avatar-color-6: #0e86ff !important;
  --sync-avatar-color-7: #A06FCA !important;
  --tab-background-active: #1c1c1c !important;
  --tab-container-background: #1c1c1c !important;
  --tab-divider-color: #272727 !important;
  --tab-outline-color: #272727 !important;
  --tab-switcher-background: #1c1c1c !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1c1c1c, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 112, 224) !important;
  --tab-text-color: rgb(153, 153, 153) !important;
  --tab-text-color-active: rgb(217, 217, 217) !important;
  --tab-text-color-focused: rgb(217, 217, 217) !important;
  --tab-text-color-focused-active: rgb(217, 217, 217) !important;
  --tab-text-color-focused-highlighted: rgb(0, 112, 224) !important;
  --table-add-button-border-color: #272727 !important;
  --table-border-color: #272727 !important;
  --table-drag-handle-background-active: rgb(0, 112, 224) !important;
  --table-drag-handle-color: rgb(153, 153, 153) !important;
  --table-header-border-color: #272727 !important;
  --table-selection: rgba(0, 112, 224, 0.1) !important;
  --table-selection-border-color: rgb(0, 112, 224) !important;
  --tag-background: rgba(0, 112, 224, 0.2) !important;
  --tag-background-color: rgba(0, 112, 224, 0.2) !important;
  --tag-background-hover: rgba(0, 112, 224, 0.2) !important;
  --tag-border-color: rgba(0, 112, 224, 0.15) !important;
  --tag-border-color-hover: rgba(0, 112, 224, 0.15) !important;
  --tag-color: rgb(46, 150, 255) !important;
  --tag-color-hover: rgb(0, 112, 224) !important;
  --tag-font-color-d: rgb(46, 150, 255) !important;
  --tag-font-color-l: rgb(0, 74, 148) !important;
  --tertiary: rgb(71, 163, 255) !important;
  --text-accent: rgb(0, 112, 224) !important;
  --text-accent-hover: rgb(71, 163, 255) !important;
  --text-faint: rgb(153, 153, 153) !important;
  --text-formatted: rgb(179, 179, 179) !important;
  --text-highlight-bg: rgba(0, 112, 224, 0.5) !important;
  --text-highlight-bg-active: rgba(0, 112, 224, 0.7) !important;
  --text-muted: rgb(217, 217, 217) !important;
  --text-selection: rgba(0, 112, 224, 0.25) !important;
  --text-success: #6ea82c !important;
  --text-warning: #F39B35 !important;
  --textHighlight: rgba(0, 112, 224, 0.5) !important;
  --titleFont: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #1c1c1c !important;
  --titlebar-background-focused: #272727 !important;
  --titlebar-border-color: #272727 !important;
  --titlebar-text-color: rgb(217, 217, 217) !important;
  --white: #ffffff !important;
  --yellow: #E6DB74 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 28, 28);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 28, 28);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(39, 39, 39);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 28, 28);
  border-left-color: rgb(39, 39, 39);
}

body div#quartz-root {
  background-color: rgb(28, 28, 28);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  background-color: rgba(0, 112, 224, 0.5);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgb(0, 112, 224);
  text-decoration-color: rgb(0, 112, 224);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgb(0, 112, 224);
  text-decoration-color: rgb(0, 112, 224);
}

body a.internal.broken {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgba(0, 112, 224, 0.3);
  text-decoration-color: rgba(0, 112, 224, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(28, 28, 28);
}

body ul.overflow {
  background-color: rgb(28, 28, 28);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}

body th {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}`,
    code: `body code {
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}

body pre > code > [data-line] {
  border-left-color: rgb(230, 219, 116);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 219, 116);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 219, 116);
  border-left-color: rgb(230, 219, 116);
  border-right-color: rgb(230, 219, 116);
  border-top-color: rgb(230, 219, 116);
}

body pre > code, pre:has(> code) {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body figcaption {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body .transclude {
  border-left-color: rgb(0, 112, 224);
}

body .transclude-inner {
  border-left-color: rgb(0, 112, 224);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

body li.task-list-item[data-task='-'] {
  color: rgb(153, 153, 153);
  text-decoration: line-through 1px rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    search: `body .search > .search-button {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 28, 28);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 112, 224, 0.2);
  border-bottom-color: rgba(0, 112, 224, 0.15);
  border-left-color: rgba(0, 112, 224, 0.15);
  border-right-color: rgba(0, 112, 224, 0.15);
  border-top-color: rgba(0, 112, 224, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(46, 150, 255);
}

body h1 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(217, 217, 217);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(217, 217, 217);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(217, 217, 217);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}`,
    footer: `body footer {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .darkmode svg {
  color: rgb(217, 217, 217);
  stroke: rgb(217, 217, 217);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(28, 28, 28);
}

body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(39, 39, 39);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
  light: {
    base: `:root:root {
  --accent-alpha: 20% !important;
  --accent-h: 210 !important;
  --accent-l: 44% !important;
  --accent-s: 100% !important;
  --atom-aqua: #00A7AA !important;
  --atom-blue: #0e86ff !important;
  --atom-gray-1: #383838 !important;
  --atom-gray-2: #383838 !important;
  --atom-green: #98E342 !important;
  --atom-orange: #F39B35 !important;
  --atom-purple: #A06FCA !important;
  --atom-red: #FC4384 !important;
  --atom-white: #464646 !important;
  --atom-yellow: #E6DB74 !important;
  --background-modifier-active-hover: rgba(0, 112, 224, 0.1) !important;
  --background-modifier-border: #ebedf0 !important;
  --background-modifier-error: #fb464c !important;
  --background-modifier-error-hover: #fb464c !important;
  --background-modifier-error-rgb: 228, 55, 75 !important;
  --background-modifier-hover: #e2e5e9 !important;
  --background-modifier-success: #6ea82c !important;
  --background-modifier-success-rgb: 68, 207, 110 !important;
  --background-primary-alt: #f6f7f8 !important;
  --background-secondary: #f6f7f8 !important;
  --base-d: 20% !important;
  --base-h: 0 !important;
  --base-l: 97% !important;
  --base-s: 0% !important;
  --bases-cards-cover-background: #f6f7f8 !important;
  --bases-cards-shadow: 0 0 0 1px #ebedf0 !important;
  --bases-embed-border-color: #ebedf0 !important;
  --bases-group-heading-property-color: hsl(0, -5%, 37%) !important;
  --bases-table-border-color: #ebedf0 !important;
  --bases-table-cell-background-disabled: #f6f7f8 !important;
  --bases-table-cell-background-selected: rgba(0, 112, 224, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 120, 240) !important;
  --bases-table-group-background: #f6f7f8 !important;
  --bases-table-header-background-hover: #e2e5e9 !important;
  --bases-table-header-color: hsl(0, -5%, 37%) !important;
  --bases-table-summary-background-hover: #e2e5e9 !important;
  --blockquote-border-color: rgb(0, 120, 240) !important;
  --blue: #2e80f2 !important;
  --bodyFont: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-bug: 228, 55, 75;
  --callout-error: 228, 55, 75;
  --callout-fail: 228, 55, 75;
  --callout-success: 68, 207, 110;
  --canvas-card-label-color: hsl(0, -5%, 57%) !important;
  --canvas-color-1: 228, 55, 75 !important;
  --canvas-color-4: 68, 207, 110 !important;
  --canvas-dot-pattern: #ebedf0 !important;
  --checkbox-border-color: hsl(0, -5%, 57%) !important;
  --checkbox-border-color-hover: hsl(0, -5%, 37%) !important;
  --checkbox-color: rgb(0, 120, 240) !important;
  --checkbox-color-hover: rgb(0, 125, 250) !important;
  --checkbox-radius: 30% !important;
  --checklist-done-color: hsl(0, -5%, 37%) !important;
  --code-background: #f6f7f8 !important;
  --code-border-color: #ebedf0 !important;
  --code-bracket-background: #e2e5e9 !important;
  --code-comment: hsl(0, -5%, 57%) !important;
  --code-function: #ffda34 !important;
  --code-important: #F39B35 !important;
  --code-keyword: #ec7db9 !important;
  --code-operator: #fb464c !important;
  --code-property: #53dfdd !important;
  --code-punctuation: hsl(0, -5%, 37%) !important;
  --code-string: #6ea82c !important;
  --code-tag: #fb464c !important;
  --code-value: #A06FCA !important;
  --codeFont: '??', 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(0, -5%, 57%) !important;
  --collapse-icon-color-collapsed: rgb(0, 112, 224) !important;
  --color-accent: rgb(0, 112, 224) !important;
  --color-accent-1: rgb(0, 120, 240) !important;
  --color-accent-2: rgb(0, 125, 250) !important;
  --color-accent-hsl: 210, 100%, 44% !important;
  --color-base-10: #f6f7f8 !important;
  --color-base-20: #f6f7f8 !important;
  --color-base-25: #f0f0f0 !important;
  --color-base-30: #ebedf0 !important;
  --color-base-70: #5a5a5a !important;
  --color-blue: #0e86ff !important;
  --color-cyan: #53dfdd !important;
  --color-green: #6ea82c !important;
  --color-green-rgb: 68, 207, 110 !important;
  --color-orange: #F39B35 !important;
  --color-pink: #ec7db9 !important;
  --color-purple: #A06FCA !important;
  --color-red: #fb464c !important;
  --color-red-rgb: 228, 55, 75 !important;
  --color-yellow: #ffda34 !important;
  --dark: hsl(0, -5%, 37%) !important;
  --darkgray: hsl(0, -5%, 37%) !important;
  --divider-color: #ebedf0 !important;
  --divider-color-hover: rgb(0, 120, 240) !important;
  --dropdown-background-hover: #f6f7f8 !important;
  --embed-block-shadow-hover: 0 0 0 1px #ebedf0, inset 0 0 0 1px #ebedf0 !important;
  --embed-border-start: 2px solid rgb(0, 120, 240) !important;
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --folding-offset: 10px !important;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace !important;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, 'Arial' !important;
  --font-text: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --footnote-divider-color: #ebedf0 !important;
  --footnote-id-color: hsl(0, -5%, 37%) !important;
  --footnote-id-color-no-occurrences: hsl(0, -5%, 57%) !important;
  --footnote-input-background-active: #e2e5e9 !important;
  --graph-node: hsl(0, -5%, 37%) !important;
  --graph-node-attachment: #ffda34 !important;
  --graph-node-focused: rgb(0, 112, 224) !important;
  --graph-node-tag: #6ea82c !important;
  --graph-node-unresolved: hsl(0, -5%, 57%) !important;
  --gray: hsl(0, -5%, 37%) !important;
  --green: #00A7AA !important;
  --h1-color: rgb(0, 112, 224) !important;
  --h1-size: 1.7rem !important;
  --h1-text-color-lt: rgb(0, 112, 224) !important;
  --h2-color: rgb(0, 112, 224) !important;
  --h2-size: 1.5rem !important;
  --h2-text-color-lt: rgb(0, 112, 224) !important;
  --h3-color: rgb(0, 112, 224) !important;
  --h3-size: 1.2rem !important;
  --h3-text-color-lt: rgb(0, 112, 224) !important;
  --h4-color: rgb(0, 112, 224) !important;
  --h4-size: 1.1rem !important;
  --h4-text-color-lt: rgb(0, 112, 224) !important;
  --h5-color: rgb(0, 112, 224) !important;
  --h5-size: 1rem !important;
  --h5-text-color-lt: rgb(0, 112, 224) !important;
  --h6-color: rgb(0, 112, 224) !important;
  --h6-size: 0.9rem !important;
  --h6-text-color-lt: rgb(0, 112, 224) !important;
  --headerFont: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(0, -5%, 57%) !important;
  --highlight: rgba(0, 112, 224, 0.5) !important;
  --hr-color: #ebedf0 !important;
  --icon-color: hsl(0, -5%, 37%) !important;
  --icon-color-active: rgb(0, 112, 224) !important;
  --icon-color-hover: hsl(0, -5%, 37%) !important;
  --icon-muted: 0.5 !important;
  --inline-title-color: rgb(0, 112, 224) !important;
  --inline-title-size: 1.7rem !important;
  --input-date-separator: hsl(0, -5%, 57%) !important;
  --input-placeholder-color: hsl(0, -5%, 57%) !important;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),
    0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
    0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
    0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
    0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --interactive-accent: rgb(0, 120, 240) !important;
  --interactive-accent-hover: rgb(0, 125, 250) !important;
  --interactive-accent-hsl: 210, 100%, 44% !important;
  --interactive-hover: #f6f7f8 !important;
  --light: #f6f7f8 !important;
  --lightgray: #f6f7f8 !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --line-width-adaptive: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: rgb(0, 112, 224) !important;
  --link-color-hover: rgb(0, 61, 122) !important;
  --link-external-color: rgb(0, 112, 224) !important;
  --link-external-color-hover: rgb(0, 61, 122) !important;
  --link-unresolved-color: rgb(0, 112, 224) !important;
  --link-unresolved-decoration-color: rgba(0, 112, 224, 0.3) !important;
  --list-marker-color: hsl(0, -5%, 57%) !important;
  --list-marker-color-collapsed: rgb(0, 112, 224) !important;
  --list-marker-color-hover: hsl(0, -5%, 37%) !important;
  --max-col-width: 18em !important;
  --max-width: 90% !important;
  --menu-background: #f6f7f8 !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-border-color: #ebedf0 !important;
  --metadata-divider-color: #ebedf0 !important;
  --metadata-input-background-active: #e2e5e9 !important;
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-background-active: #e2e5e9 !important;
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(0, -5%, 37%) !important;
  --metadata-label-text-color-hover: hsl(0, -5%, 37%) !important;
  --metadata-property-background-active: #e2e5e9 !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: hsl(0, -5%, 57%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, -5%, 57%) !important;
  --nav-heading-color-collapsed: hsl(0, -5%, 57%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, -5%, 37%) !important;
  --nav-item-background-active: #e2e5e9 !important;
  --nav-item-background-hover: #e2e5e9 !important;
  --nav-item-background-selected: rgba(0, 112, 224, 0.15) !important;
  --nav-item-color: hsl(0, -5%, 37%) !important;
  --nav-item-color-highlighted: rgb(0, 112, 224) !important;
  --nav-tag-color: hsl(0, -5%, 57%) !important;
  --nav-tag-color-active: hsl(0, -5%, 37%) !important;
  --nav-tag-color-hover: hsl(0, -5%, 37%) !important;
  --nested-padding: 1.1em !important;
  --orange: #F39B35 !important;
  --pill-border-color: #ebedf0 !important;
  --pill-color: hsl(0, -5%, 37%) !important;
  --pill-color-remove: hsl(0, -5%, 57%) !important;
  --pill-color-remove-hover: rgb(0, 112, 224) !important;
  --pink: #da7dae !important;
  --purple: #A06FCA !important;
  --radius-l: 10px !important;
  --red: #FC4384 !important;
  --ribbon-background: #f6f7f8 !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: hsl(0, -5%, 37%) !important;
  --search-icon-color: hsl(0, -5%, 37%) !important;
  --secondary: rgb(0, 112, 224) !important;
  --setting-items-background: #f6f7f8 !important;
  --setting-items-border-color: #ebedf0 !important;
  --setting-items-radius: 10px !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --slider-track-background: #ebedf0 !important;
  --status-bar-background: #f6f7f8 !important;
  --status-bar-border-color: #ebedf0 !important;
  --status-bar-text-color: hsl(0, -5%, 37%) !important;
  --sync-avatar-color-1: #fb464c !important;
  --sync-avatar-color-2: #F39B35 !important;
  --sync-avatar-color-3: #ffda34 !important;
  --sync-avatar-color-4: #6ea82c !important;
  --sync-avatar-color-5: #53dfdd !important;
  --sync-avatar-color-6: #0e86ff !important;
  --sync-avatar-color-7: #A06FCA !important;
  --sync-avatar-color-8: #ec7db9 !important;
  --tab-container-background: #f6f7f8 !important;
  --tab-outline-color: #ebedf0 !important;
  --tab-switcher-background: #f6f7f8 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f7f8, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 112, 224) !important;
  --tab-text-color: hsl(0, -5%, 57%) !important;
  --tab-text-color-active: hsl(0, -5%, 37%) !important;
  --tab-text-color-focused: hsl(0, -5%, 37%) !important;
  --tab-text-color-focused-active: hsl(0, -5%, 37%) !important;
  --tab-text-color-focused-highlighted: rgb(0, 112, 224) !important;
  --table-add-button-border-color: #ebedf0 !important;
  --table-border-color: #ebedf0 !important;
  --table-drag-handle-background-active: rgb(0, 120, 240) !important;
  --table-drag-handle-color: hsl(0, -5%, 57%) !important;
  --table-header-border-color: #ebedf0 !important;
  --table-selection: rgba(0, 112, 224, 0.1) !important;
  --table-selection-border-color: rgb(0, 120, 240) !important;
  --tag-background: rgba(0, 112, 224, 0.2) !important;
  --tag-background-color: rgba(0, 112, 224, 0.2) !important;
  --tag-background-hover: rgba(0, 112, 224, 0.2) !important;
  --tag-border-color: rgba(0, 112, 224, 0.15) !important;
  --tag-border-color-hover: rgba(0, 112, 224, 0.15) !important;
  --tag-color: rgb(0, 74, 148) !important;
  --tag-color-hover: rgb(0, 112, 224) !important;
  --tag-font-color-d: rgb(46, 150, 255) !important;
  --tag-font-color-l: rgb(0, 74, 148) !important;
  --tertiary: rgb(0, 61, 122) !important;
  --text-accent: rgb(0, 112, 224) !important;
  --text-accent-hover: rgb(0, 61, 122) !important;
  --text-error: #fb464c !important;
  --text-faint: hsl(0, -5%, 57%) !important;
  --text-highlight-bg: rgba(0, 112, 224, 0.5) !important;
  --text-highlight-bg-active: rgba(0, 112, 224, 0.7) !important;
  --text-muted: hsl(0, -5%, 37%) !important;
  --text-selection: rgba(0, 112, 224, 0.2) !important;
  --text-success: #6ea82c !important;
  --text-warning: #F39B35 !important;
  --textHighlight: rgba(0, 112, 224, 0.5) !important;
  --titleFont: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #f6f7f8 !important;
  --titlebar-border-color: #ebedf0 !important;
  --titlebar-text-color: hsl(0, -5%, 37%) !important;
  --white: #ffffff !important;
  --yellow: #E6DB74 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 247, 248);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 247, 248);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(235, 237, 240);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 247, 248);
  border-left-color: rgb(235, 237, 240);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  background-color: rgba(0, 112, 224, 0.5);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(94, 94, 94) none 0px;
  text-decoration: rgb(94, 94, 94);
  text-decoration-color: rgb(94, 94, 94);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgb(0, 112, 224);
  text-decoration-color: rgb(0, 112, 224);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgb(0, 112, 224);
  text-decoration-color: rgb(0, 112, 224);
}

body a.internal.broken {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgba(0, 112, 224, 0.3);
  text-decoration-color: rgba(0, 112, 224, 0.3);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body th {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}`,
    code: `body code {
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body pre > code > [data-line] {
  border-left-color: rgb(230, 219, 116);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 219, 116);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 219, 116);
  border-left-color: rgb(230, 219, 116);
  border-right-color: rgb(230, 219, 116);
  border-top-color: rgb(230, 219, 116);
}

body pre > code, pre:has(> code) {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body figcaption {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
}

body .transclude {
  border-left-color: rgb(0, 119, 237);
}

body .transclude-inner {
  border-left-color: rgb(0, 119, 237);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(145, 145, 145);
  text-decoration: line-through rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body input[type=checkbox] {
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

body li.task-list-item[data-task='-'] {
  color: rgb(145, 145, 145);
  text-decoration: line-through 1px rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}`,
    callouts: `body .callout[data-callout="bug"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.1);
  border-bottom-color: rgba(68, 207, 110, 0.25);
  border-left-color: rgba(68, 207, 110, 0.25);
  border-right-color: rgba(68, 207, 110, 0.25);
  border-top-color: rgba(68, 207, 110, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(246, 247, 248);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(226, 229, 233);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 112, 224, 0.2);
  border-bottom-color: rgba(0, 112, 224, 0.15);
  border-left-color: rgba(0, 112, 224, 0.15);
  border-right-color: rgba(0, 112, 224, 0.15);
  border-top-color: rgba(0, 112, 224, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 74, 148);
}

body h1 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(94, 94, 94);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(94, 94, 94);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(94, 94, 94);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(226, 229, 233);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
}`,
    footer: `body footer {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(94, 94, 94);
  text-decoration: rgb(94, 94, 94);
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(94, 94, 94);
  text-decoration: rgb(94, 94, 94);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(94, 94, 94);
  text-decoration: rgb(94, 94, 94);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
}

body .darkmode svg {
  color: rgb(94, 94, 94);
  stroke: rgb(94, 94, 94);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
}

body .breadcrumb-element p {
  color: rgb(145, 145, 145);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(246, 247, 248);
}

body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(246, 247, 248);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
};
