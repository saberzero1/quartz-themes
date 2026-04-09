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
  --background-modifier-active-hover: hsla(210, 100%, 44%, 0.1) !important;
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
  --bases-group-heading-property-color: hsl(0, 0%, 85%) !important;
  --bases-table-border-color: #272727 !important;
  --bases-table-cell-background-active: #1c1c1c !important;
  --bases-table-cell-background-disabled: #272727 !important;
  --bases-table-cell-background-selected: hsla(210, 100%, 44%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #555 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(210, 100%, 44%) !important;
  --bases-table-group-background: #272727 !important;
  --bases-table-header-background: #1c1c1c !important;
  --bases-table-header-color: hsl(0, 0%, 85%) !important;
  --bases-table-summary-background: #1c1c1c !important;
  --blockquote-border-color: hsl(210, 100%, 44%) !important;
  --blue: #2e80f2 !important;
  --blur-background: color-mix(in srgb, #272727 65%, transparent) linear-gradient(#272727, color-mix(in srgb, #272727 65%, transparent)) !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #1c1c1c !important;
  --canvas-card-label-color: hsl(0, 0%, 60%) !important;
  --canvas-dot-pattern: #272727 !important;
  --checkbox-border-color: hsl(0, 0%, 60%) !important;
  --checkbox-border-color-hover: hsl(0, 0%, 85%) !important;
  --checkbox-color: hsl(210, 100%, 44%) !important;
  --checkbox-color-hover: hsl(210, 100%, 46.5%) !important;
  --checkbox-marker-color: #1c1c1c !important;
  --checkbox-radius: 30% !important;
  --checklist-done-color: hsl(0, 0%, 85%) !important;
  --code-background: #272727 !important;
  --code-border-color: #272727 !important;
  --code-comment: hsl(0, 0%, 60%) !important;
  --code-function: #ffda34 !important;
  --code-important: #F39B35 !important;
  --code-punctuation: hsl(0, 0%, 85%) !important;
  --code-string: #6ea82c !important;
  --code-value: #A06FCA !important;
  --codeFont: JetBrains Mono, Fira Code, Menlo, SFMono-Regular,
    Consolas, Roboto Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(0, 0%, 60%) !important;
  --collapse-icon-color-collapsed: hsl(210, 100%, 44%) !important;
  --color-accent: hsl(210, 100%, 44%) !important;
  --color-accent-1: hsl(210, 100%, 46.5%) !important;
  --color-accent-2: hsl(210, 100%, 49%) !important;
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
  --dark: hsl(0, 0%, 85%) !important;
  --darkgray: hsl(0, 0%, 85%) !important;
  --divider-color: #272727 !important;
  --divider-color-hover: hsl(210, 100%, 44%) !important;
  --dropdown-background: #272727 !important;
  --dropdown-background-hover: #272727 !important;
  --embed-block-shadow-hover: 0 0 0 1px #272727, inset 0 0 0 1px #272727 !important;
  --embed-border-start: 2px solid hsl(210, 100%, 44%) !important;
  --file-header-background: #1c1c1c !important;
  --file-header-background-focused: #1c1c1c !important;
  --file-header-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #272727 !important;
  --folding-offset: 10px !important;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --font-interface: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: JetBrains Mono, Fira Code, Menlo, SFMono-Regular,
    Consolas, Roboto Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace !important;
  --font-print: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --footnote-divider-color: #272727 !important;
  --footnote-id-color: hsl(0, 0%, 85%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 60%) !important;
  --graph-line: #272727 !important;
  --graph-node: hsl(0, 0%, 85%) !important;
  --graph-node-attachment: #ffda34 !important;
  --graph-node-focused: hsl(210, 100%, 44%) !important;
  --graph-node-tag: #6ea82c !important;
  --graph-node-unresolved: hsl(0, 0%, 60%) !important;
  --gray: hsl(0, 0%, 85%) !important;
  --green: #00A7AA !important;
  --h1-color: hsl(210, 100%, 44%) !important;
  --h1-size: 1.7rem !important;
  --h1-text-color-dt: hsl(210, 100%, 44%) !important;
  --h2-color: hsl(210, 100%, 44%) !important;
  --h2-size: 1.5rem !important;
  --h2-text-color-dt: hsl(210, 100%, 44%) !important;
  --h3-color: hsl(210, 100%, 44%) !important;
  --h3-size: 1.2rem !important;
  --h3-text-color-dt: hsl(210, 100%, 44%) !important;
  --h4-color: hsl(210, 100%, 44%) !important;
  --h4-size: 1.1rem !important;
  --h4-text-color-dt: hsl(210, 100%, 44%) !important;
  --h5-color: hsl(210, 100%, 44%) !important;
  --h5-size: 1rem !important;
  --h5-text-color-dt: hsl(210, 100%, 44%) !important;
  --h6-color: hsl(210, 100%, 44%) !important;
  --h6-size: 0.9rem !important;
  --h6-text-color-dt: hsl(210, 100%, 44%) !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(0, 0%, 60%) !important;
  --highlight: hsla(210, 100%, 44%, 50%) !important;
  --hr-color: #272727 !important;
  --icon-color: hsl(0, 0%, 85%) !important;
  --icon-color-active: hsl(210, 100%, 44%) !important;
  --icon-color-hover: hsl(0, 0%, 85%) !important;
  --icon-muted: 0.5 !important;
  --inline-title-color: hsl(210, 100%, 44%) !important;
  --inline-title-size: 1.7rem !important;
  --input-date-separator: hsl(0, 0%, 60%) !important;
  --input-placeholder-color: hsl(0, 0%, 60%) !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
    0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
    0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2),
    0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent !important;
  --interactive-accent: hsl(210, 100%, 44%) !important;
  --interactive-accent-hover: hsl(210, 100%, 46.5%) !important;
  --interactive-accent-hsl: 210, 100%, 44% !important;
  --interactive-hover: #272727 !important;
  --interactive-normal: #272727 !important;
  --light: #1c1c1c !important;
  --lightgray: #1c1c1c !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --line-width-adaptive: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: hsl(210, 100%, 44%) !important;
  --link-color-hover: hsl(210, 100%, 64%) !important;
  --link-external-color: hsl(210, 100%, 44%) !important;
  --link-external-color-hover: hsl(210, 100%, 64%) !important;
  --link-unresolved-color: hsl(210, 100%, 44%) !important;
  --link-unresolved-decoration-color: hsla(210, 100%, 44%, 0.3) !important;
  --list-marker-color: hsl(0, 0%, 60%) !important;
  --list-marker-color-collapsed: hsl(210, 100%, 44%) !important;
  --list-marker-color-hover: hsl(0, 0%, 85%) !important;
  --max-col-width: 18em !important;
  --max-width: 90% !important;
  --menu-background: #1c1c1c !important;
  --menu-border-color: #272727 !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-border-color: #272727 !important;
  --metadata-divider-color: #272727 !important;
  --metadata-input-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(0, 0%, 85%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 85%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #555 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #272727 !important;
  --modal-background: #1c1c1c !important;
  --modal-border-color: #555 !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: hsl(0, 0%, 60%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 60%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 60%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 85%) !important;
  --nav-item-background-selected: hsla(210, 100%, 44%, 0.15) !important;
  --nav-item-color: hsl(0, 0%, 85%) !important;
  --nav-item-color-highlighted: hsl(210, 100%, 44%) !important;
  --nav-tag-color: hsl(0, 0%, 60%) !important;
  --nav-tag-color-active: hsl(0, 0%, 85%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 85%) !important;
  --nested-padding: 1.1em !important;
  --orange: #F39B35 !important;
  --pdf-background: #1c1c1c !important;
  --pdf-page-background: #1c1c1c !important;
  --pdf-shadow: 0 0 0 1px #272727 !important;
  --pdf-sidebar-background: #1c1c1c !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #272727 !important;
  --pill-border-color: #272727 !important;
  --pill-border-color-hover: #272727 !important;
  --pill-color: hsl(0, 0%, 85%) !important;
  --pill-color-remove: hsl(0, 0%, 60%) !important;
  --pill-color-remove-hover: hsl(210, 100%, 44%) !important;
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
  --search-clear-button-color: hsl(0, 0%, 85%) !important;
  --search-icon-color: hsl(0, 0%, 85%) !important;
  --search-result-background: #1c1c1c !important;
  --secondary: hsl(210, 100%, 44%) !important;
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
  --status-bar-text-color: hsl(0, 0%, 85%) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 100%, 44%) !important;
  --tab-text-color: hsl(0, 0%, 60%) !important;
  --tab-text-color-active: hsl(0, 0%, 85%) !important;
  --tab-text-color-focused: hsl(0, 0%, 85%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 85%) !important;
  --tab-text-color-focused-highlighted: hsl(210, 100%, 44%) !important;
  --table-add-button-border-color: #272727 !important;
  --table-border-color: #272727 !important;
  --table-drag-handle-background-active: hsl(210, 100%, 44%) !important;
  --table-drag-handle-color: hsl(0, 0%, 60%) !important;
  --table-header-border-color: #272727 !important;
  --table-selection: hsla(210, 100%, 44%, 0.1) !important;
  --table-selection-border-color: hsl(210, 100%, 44%) !important;
  --tag-background: hsla(210, 100%, 44%, 20%) !important;
  --tag-background-color: hsla(210, 100%, 44%, 20%) !important;
  --tag-background-hover: hsla(210, 100%, 44%, 0.2) !important;
  --tag-border-color: hsla(210, 100%, 44%, 0.15) !important;
  --tag-border-color-hover: hsla(210, 100%, 44%, 0.15) !important;
  --tag-color: hsl(210, 100%, 59%) !important;
  --tag-color-hover: hsl(210, 100%, 44%) !important;
  --tag-font-color-d: hsl(210, 100%, 59%) !important;
  --tag-font-color-l: hsl(210, 100%, 29%) !important;
  --tertiary: hsl(210, 100%, 64%) !important;
  --text-accent: hsl(210, 100%, 44%) !important;
  --text-accent-hover: hsl(210, 100%, 64%) !important;
  --text-faint: hsl(0, 0%, 60%) !important;
  --text-formatted: hsl(0, 0%, 70%) !important;
  --text-highlight-bg: hsla(210, 100%, 44%, 50%) !important;
  --text-highlight-bg-active: hsla(210, 100%, 44%, 70%) !important;
  --text-muted: hsl(0, 0%, 85%) !important;
  --text-selection: hsla(210, 100%, 44%, 0.25) !important;
  --text-success: #6ea82c !important;
  --text-warning: #F39B35 !important;
  --textHighlight: hsla(210, 100%, 44%, 50%) !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #1c1c1c !important;
  --titlebar-background-focused: #272727 !important;
  --titlebar-border-color: #272727 !important;
  --titlebar-text-color: hsl(0, 0%, 85%) !important;
  --white: #ffffff !important;
  --yellow: #E6DB74 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(39, 39, 39);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(39, 39, 39);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 112, 224, 0.2);
  color: rgb(46, 150, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(39, 39, 39);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 28, 28);
  border-left-color: rgb(39, 39, 39);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(28, 28, 28);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 112, 224, 0.5);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body del {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
  border-radius: 30%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 112, 224);
  border-color: rgb(0, 112, 224);
}

html[saved-theme="dark"] body p {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration-color: rgb(0, 112, 224);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration-color: rgb(0, 112, 224);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgba(0, 112, 224, 0.3);
  text-decoration-color: rgba(0, 112, 224, 0.3);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}`,
    code: `html[saved-theme="dark"] body code {
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(230, 219, 116);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 219, 116);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 219, 116);
  border-left-color: rgb(230, 219, 116);
  border-right-color: rgb(230, 219, 116);
  border-top-color: rgb(230, 219, 116);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body figcaption {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(0, 112, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(0, 112, 224);
  border-radius: 4px;
  border-right-color: rgb(0, 112, 224);
  border-top-color: rgb(0, 112, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(0, 112, 224);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(153, 153, 153);
  text-decoration: line-through 1px rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
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
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(243, 155, 53);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(255, 218, 52);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(0, 112, 224);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(153, 153, 153);
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
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(243, 155, 53);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(243, 155, 53);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(255, 218, 52);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(255, 218, 52);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(110, 168, 44);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(110, 168, 44);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(160, 111, 202);
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
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 112, 224, 0.2);
  border-bottom-color: rgba(0, 112, 224, 0.15);
  border-left-color: rgba(0, 112, 224, 0.15);
  border-right-color: rgba(0, 112, 224, 0.15);
  border-top-color: rgba(0, 112, 224, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(46, 150, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(217, 217, 217);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(217, 217, 217);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(217, 217, 217);
  stroke: rgb(217, 217, 217);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(39, 39, 39);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 112, 224, 0.2);
  border-bottom-color: rgba(0, 112, 224, 0.15);
  border-left-color: rgba(0, 112, 224, 0.15);
  border-right-color: rgba(0, 112, 224, 0.15);
  border-top-color: rgba(0, 112, 224, 0.15);
  color: rgb(46, 150, 255);
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
  --background-modifier-active-hover: hsla(210, 100%, 44%, 0.1) !important;
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
  --bases-table-cell-background-selected: hsla(210, 100%, 44%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(210, 100%, 46.5%) !important;
  --bases-table-group-background: #f6f7f8 !important;
  --bases-table-header-background-hover: #e2e5e9 !important;
  --bases-table-header-color: hsl(0, -5%, 37%) !important;
  --bases-table-summary-background-hover: #e2e5e9 !important;
  --blockquote-border-color: hsl(210, 100%, 46.5%) !important;
  --blue: #2e80f2 !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
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
  --checkbox-color: hsl(210, 100%, 46.5%) !important;
  --checkbox-color-hover: hsl(210, 100%, 49%) !important;
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
  --codeFont: JetBrains Mono, Fira Code, Menlo, SFMono-Regular,
    Consolas, Roboto Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(0, -5%, 57%) !important;
  --collapse-icon-color-collapsed: hsl(210, 100%, 44%) !important;
  --color-accent: hsl(210, 100%, 44%) !important;
  --color-accent-1: hsl(210, 100%, 46.5%) !important;
  --color-accent-2: hsl(210, 100%, 49%) !important;
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
  --divider-color-hover: hsl(210, 100%, 46.5%) !important;
  --dropdown-background-hover: #f6f7f8 !important;
  --embed-block-shadow-hover: 0 0 0 1px #ebedf0, inset 0 0 0 1px #ebedf0 !important;
  --embed-border-start: 2px solid hsl(210, 100%, 46.5%) !important;
  --file-header-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --folding-offset: 10px !important;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --font-interface: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: JetBrains Mono, Fira Code, Menlo, SFMono-Regular,
    Consolas, Roboto Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace !important;
  --font-print: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif !important;
  --footnote-divider-color: #ebedf0 !important;
  --footnote-id-color: hsl(0, -5%, 37%) !important;
  --footnote-id-color-no-occurrences: hsl(0, -5%, 57%) !important;
  --footnote-input-background-active: #e2e5e9 !important;
  --graph-node: hsl(0, -5%, 37%) !important;
  --graph-node-attachment: #ffda34 !important;
  --graph-node-focused: hsl(210, 100%, 44%) !important;
  --graph-node-tag: #6ea82c !important;
  --graph-node-unresolved: hsl(0, -5%, 57%) !important;
  --gray: hsl(0, -5%, 37%) !important;
  --green: #00A7AA !important;
  --h1-color: hsl(210, 100%, 44%) !important;
  --h1-size: 1.7rem !important;
  --h1-text-color-lt: hsl(210, 100%, 44%) !important;
  --h2-color: hsl(210, 100%, 44%) !important;
  --h2-size: 1.5rem !important;
  --h2-text-color-lt: hsl(210, 100%, 44%) !important;
  --h3-color: hsl(210, 100%, 44%) !important;
  --h3-size: 1.2rem !important;
  --h3-text-color-lt: hsl(210, 100%, 44%) !important;
  --h4-color: hsl(210, 100%, 44%) !important;
  --h4-size: 1.1rem !important;
  --h4-text-color-lt: hsl(210, 100%, 44%) !important;
  --h5-color: hsl(210, 100%, 44%) !important;
  --h5-size: 1rem !important;
  --h5-text-color-lt: hsl(210, 100%, 44%) !important;
  --h6-color: hsl(210, 100%, 44%) !important;
  --h6-size: 0.9rem !important;
  --h6-text-color-lt: hsl(210, 100%, 44%) !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(0, -5%, 57%) !important;
  --highlight: hsla(210, 100%, 44%, 50%) !important;
  --hr-color: #ebedf0 !important;
  --icon-color: hsl(0, -5%, 37%) !important;
  --icon-color-active: hsl(210, 100%, 44%) !important;
  --icon-color-hover: hsl(0, -5%, 37%) !important;
  --icon-muted: 0.5 !important;
  --inline-title-color: hsl(210, 100%, 44%) !important;
  --inline-title-size: 1.7rem !important;
  --input-date-separator: hsl(0, -5%, 57%) !important;
  --input-placeholder-color: hsl(0, -5%, 57%) !important;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),
    0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
    0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
    0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
    0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --interactive-accent: hsl(210, 100%, 46.5%) !important;
  --interactive-accent-hover: hsl(210, 100%, 49%) !important;
  --interactive-accent-hsl: 210, 100%, 44% !important;
  --interactive-hover: #f6f7f8 !important;
  --light: #f6f7f8 !important;
  --lightgray: #f6f7f8 !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --line-width-adaptive: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: hsl(210, 100%, 44%) !important;
  --link-color-hover: hsl(210, 100%, 24%) !important;
  --link-external-color: hsl(210, 100%, 44%) !important;
  --link-external-color-hover: hsl(210, 100%, 24%) !important;
  --link-unresolved-color: hsl(210, 100%, 44%) !important;
  --link-unresolved-decoration-color: hsla(210, 100%, 44%, 0.3) !important;
  --list-marker-color: hsl(0, -5%, 57%) !important;
  --list-marker-color-collapsed: hsl(210, 100%, 44%) !important;
  --list-marker-color-hover: hsl(0, -5%, 37%) !important;
  --max-col-width: 18em !important;
  --max-width: 90% !important;
  --menu-background: #f6f7f8 !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-border-color: #ebedf0 !important;
  --metadata-divider-color: #ebedf0 !important;
  --metadata-input-background-active: #e2e5e9 !important;
  --metadata-input-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-background-active: #e2e5e9 !important;
  --metadata-label-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --nav-item-background-selected: hsla(210, 100%, 44%, 0.15) !important;
  --nav-item-color: hsl(0, -5%, 37%) !important;
  --nav-item-color-highlighted: hsl(210, 100%, 44%) !important;
  --nav-tag-color: hsl(0, -5%, 57%) !important;
  --nav-tag-color-active: hsl(0, -5%, 37%) !important;
  --nav-tag-color-hover: hsl(0, -5%, 37%) !important;
  --nested-padding: 1.1em !important;
  --orange: #F39B35 !important;
  --pill-border-color: #ebedf0 !important;
  --pill-color: hsl(0, -5%, 37%) !important;
  --pill-color-remove: hsl(0, -5%, 57%) !important;
  --pill-color-remove-hover: hsl(210, 100%, 44%) !important;
  --pink: #da7dae !important;
  --purple: #A06FCA !important;
  --radius-l: 10px !important;
  --red: #FC4384 !important;
  --ribbon-background: #f6f7f8 !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: hsl(0, -5%, 37%) !important;
  --search-icon-color: hsl(0, -5%, 37%) !important;
  --secondary: hsl(210, 100%, 44%) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 100%, 44%) !important;
  --tab-text-color: hsl(0, -5%, 57%) !important;
  --tab-text-color-active: hsl(0, -5%, 37%) !important;
  --tab-text-color-focused: hsl(0, -5%, 37%) !important;
  --tab-text-color-focused-active: hsl(0, -5%, 37%) !important;
  --tab-text-color-focused-highlighted: hsl(210, 100%, 44%) !important;
  --table-add-button-border-color: #ebedf0 !important;
  --table-border-color: #ebedf0 !important;
  --table-drag-handle-background-active: hsl(210, 100%, 46.5%) !important;
  --table-drag-handle-color: hsl(0, -5%, 57%) !important;
  --table-header-border-color: #ebedf0 !important;
  --table-selection: hsla(210, 100%, 44%, 0.1) !important;
  --table-selection-border-color: hsl(210, 100%, 46.5%) !important;
  --tag-background: hsla(210, 100%, 44%, 20%) !important;
  --tag-background-color: hsla(210, 100%, 44%, 20%) !important;
  --tag-background-hover: hsla(210, 100%, 44%, 0.2) !important;
  --tag-border-color: hsla(210, 100%, 44%, 0.15) !important;
  --tag-border-color-hover: hsla(210, 100%, 44%, 0.15) !important;
  --tag-color: hsl(210, 100%, 29%) !important;
  --tag-color-hover: hsl(210, 100%, 44%) !important;
  --tag-font-color-d: hsl(210, 100%, 59%) !important;
  --tag-font-color-l: hsl(210, 100%, 29%) !important;
  --tertiary: hsl(210, 100%, 24%) !important;
  --text-accent: hsl(210, 100%, 44%) !important;
  --text-accent-hover: hsl(210, 100%, 24%) !important;
  --text-error: #fb464c !important;
  --text-faint: hsl(0, -5%, 57%) !important;
  --text-highlight-bg: hsla(210, 100%, 44%, 50%) !important;
  --text-highlight-bg-active: hsla(210, 100%, 44%, 70%) !important;
  --text-muted: hsl(0, -5%, 37%) !important;
  --text-selection: hsla(210, 100%, 44%, 0.2) !important;
  --text-success: #6ea82c !important;
  --text-warning: #F39B35 !important;
  --textHighlight: hsla(210, 100%, 44%, 50%) !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 247, 248);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(94, 94, 94);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(94, 94, 94);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 112, 224, 0.2);
  color: rgb(0, 74, 148);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(94, 94, 94);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 247, 248);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 247, 248);
  border-left-color: rgb(235, 237, 240);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 112, 224, 0.5);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(145, 145, 145);
  border-radius: 30%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 119, 237);
  border-color: rgb(0, 119, 237);
}

html[saved-theme="light"] body p {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(94, 94, 94) none 0px;
  text-decoration-color: rgb(94, 94, 94);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration-color: rgb(0, 112, 224);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration-color: rgb(0, 112, 224);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgba(0, 112, 224, 0.3);
  text-decoration-color: rgba(0, 112, 224, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(145, 145, 145);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `html[saved-theme="light"] body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}`,
    code: `html[saved-theme="light"] body code {
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(230, 219, 116);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 219, 116);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 219, 116);
  border-left-color: rgb(230, 219, 116);
  border-right-color: rgb(230, 219, 116);
  border-top-color: rgb(230, 219, 116);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
    images: `html[saved-theme="light"] body figcaption {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 112, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(0, 112, 224);
  border-radius: 4px;
  border-right-color: rgb(0, 112, 224);
  border-top-color: rgb(0, 112, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgb(0, 119, 237);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(145, 145, 145);
  text-decoration: line-through 1px rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
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
  color: rgb(145, 145, 145);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(243, 155, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(255, 218, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(0, 112, 224);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(145, 145, 145);
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
  color: rgb(145, 145, 145);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(243, 155, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(243, 155, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(255, 218, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(255, 218, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(110, 168, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(110, 168, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(160, 111, 202);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
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
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.1);
  border-bottom-color: rgba(68, 207, 110, 0.25);
  border-left-color: rgba(68, 207, 110, 0.25);
  border-right-color: rgba(68, 207, 110, 0.25);
  border-top-color: rgba(68, 207, 110, 0.25);
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
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(246, 247, 248);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(226, 229, 233);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 112, 224, 0.2);
  border-bottom-color: rgba(0, 112, 224, 0.15);
  border-left-color: rgba(0, 112, 224, 0.15);
  border-right-color: rgba(0, 112, 224, 0.15);
  border-top-color: rgba(0, 112, 224, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(0, 74, 148);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(94, 94, 94);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(94, 94, 94);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(94, 94, 94);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(94, 94, 94);
  stroke: rgb(94, 94, 94);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(145, 145, 145);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(246, 247, 248);
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(246, 247, 248);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 112, 224, 0.2);
  border-bottom-color: rgba(0, 112, 224, 0.15);
  border-left-color: rgba(0, 112, 224, 0.15);
  border-right-color: rgba(0, 112, 224, 0.15);
  border-top-color: rgba(0, 112, 224, 0.15);
  color: rgb(0, 74, 148);
}`,
  },
};
