import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "things",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-d: 70% !important;
  --accent-h: 215 !important;
  --accent-l: 60% !important;
  --accent-s: 75% !important;
  --atom-aqua: #56b6c2 !important;
  --atom-blue: #61afef !important;
  --atom-gray-1: #5c6370 !important;
  --atom-gray-2: #abb2bf !important;
  --atom-green: #98c379 !important;
  --atom-orange: #d19a66 !important;
  --atom-purple: #c678dd !important;
  --atom-red: #e06c75 !important;
  --atom-yellow: #e5c07b !important;
  --background-modifier-active-hover: rgba(76, 140, 230, 0.1) !important;
  --background-modifier-border: #35393e !important;
  --background-modifier-border-focus: #555 !important;
  --background-modifier-form-field: #2c313c !important;
  --background-modifier-form-field-hover: #2c313c !important;
  --background-primary: #1c2127 !important;
  --background-primary-alt: #282c34 !important;
  --background-secondary: #181c20 !important;
  --background-secondary-alt: #35393e !important;
  --base-d: 13% !important;
  --base-h: 212 !important;
  --base-l: 97% !important;
  --base-s: 15% !important;
  --bases-cards-background: #1c2127 !important;
  --bases-cards-cover-background: #282c34 !important;
  --bases-cards-shadow: 0 0 0 1px #35393e !important;
  --bases-embed-border-color: #35393e !important;
  --bases-group-heading-property-color: rgb(190, 198, 207) !important;
  --bases-table-border-color: #35393e !important;
  --bases-table-cell-background-active: #1c2127 !important;
  --bases-table-cell-background-disabled: #282c34 !important;
  --bases-table-cell-background-selected: rgba(76, 140, 230, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #555 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(76, 140, 230) !important;
  --bases-table-group-background: #282c34 !important;
  --bases-table-header-background: #1c2127 !important;
  --bases-table-header-color: rgb(190, 198, 207) !important;
  --bases-table-summary-background: #1c2127 !important;
  --blockquote-border-color: rgb(76, 140, 230) !important;
  --blue: #2e80f2 !important;
  --blur-background: color-mix(in srgb, #35393e 65%, transparent) linear-gradient(#35393e, color-mix(in srgb, #35393e 65%, transparent)) !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #1c2127 !important;
  --canvas-card-label-color: rgb(93, 109, 126) !important;
  --canvas-dot-pattern: #35393e !important;
  --checkbox-border-color: rgb(93, 109, 126) !important;
  --checkbox-border-color-hover: rgb(190, 198, 207) !important;
  --checkbox-color: rgb(76, 140, 230) !important;
  --checkbox-color-hover: rgb(59, 129, 227) !important;
  --checkbox-marker-color: #1c2127 !important;
  --checkbox-radius: 30% !important;
  --checklist-done-color: rgb(190, 198, 207) !important;
  --code-background: #282c34 !important;
  --code-border-color: #35393e !important;
  --code-comment: rgb(93, 109, 126) !important;
  --code-punctuation: rgb(190, 198, 207) !important;
  --codeFont: JetBrains Mono, Fira Code, Menlo, SFMono-Regular,
    Consolas, Roboto Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(93, 109, 126) !important;
  --collapse-icon-color-collapsed: rgb(121, 169, 236) !important;
  --color-accent: rgb(76, 140, 230) !important;
  --color-accent-1: rgb(59, 129, 227) !important;
  --color-accent-2: rgb(94, 152, 232) !important;
  --color-accent-hsl: 215, 75%, 60% !important;
  --color-base-00: #1c2127 !important;
  --color-base-10: #282c34 !important;
  --color-base-20: #181c20 !important;
  --color-base-25: #2c313c !important;
  --color-base-30: #35393e !important;
  --color-base-40: #555 !important;
  --color-base-50: #666 !important;
  --color-base-60: #999 !important;
  --color-base-70: #bababa !important;
  --dark: rgb(190, 198, 207) !important;
  --darkgray: rgb(190, 198, 207) !important;
  --divider-color: #35393e !important;
  --divider-color-hover: rgb(76, 140, 230) !important;
  --dropdown-background: #35393e !important;
  --em-color: #ff82b2 !important;
  --embed-block-shadow-hover: 0 0 0 1px #35393e, inset 0 0 0 1px #35393e !important;
  --embed-border-start: 2px solid rgb(76, 140, 230) !important;
  --file-header-background: #1c2127 !important;
  --file-header-background-focused: #1c2127 !important;
  --file-header-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #35393e !important;
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
  --footnote-divider-color: #35393e !important;
  --footnote-id-color: rgb(190, 198, 207) !important;
  --footnote-id-color-no-occurrences: rgb(93, 109, 126) !important;
  --graph-node: rgb(190, 198, 207) !important;
  --graph-node-focused: rgb(121, 169, 236) !important;
  --graph-node-unresolved: rgb(93, 109, 126) !important;
  --gray: rgb(190, 198, 207) !important;
  --green: #3eb4bf !important;
  --h1-color: #dadada !important;
  --h1-size: 1.7rem !important;
  --h2-color: #dadada !important;
  --h2-size: 1.5rem !important;
  --h3-color: #2e80f2 !important;
  --h3-size: 1.2rem !important;
  --h4-color: #e5b567 !important;
  --h4-size: 1.1rem !important;
  --h5-color: #e83e3e !important;
  --h5-size: 1rem !important;
  --h6-color: rgb(190, 198, 207) !important;
  --h6-size: 0.9rem !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(93, 109, 126) !important;
  --highlight: rgba(76, 140, 230, 0.1) !important;
  --highlight-background-color--active: rgb(0, 0, 0) !important;
  --highlight-background-color--normal: rgb(0, 0, 0) !important;
  --highlight-background-color-underline: rgb(0, 0, 0) !important;
  --hr-color: #35393e !important;
  --icon-color: rgb(190, 198, 207) !important;
  --icon-color-active: rgb(121, 169, 236) !important;
  --icon-color-hover: rgb(190, 198, 207) !important;
  --icon-muted: 0.5 !important;
  --inline-title-color: #dadada !important;
  --inline-title-size: 1.7rem !important;
  --input-date-separator: rgb(93, 109, 126) !important;
  --input-placeholder-color: rgb(93, 109, 126) !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
    0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
    0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2),
    0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent !important;
  --interactive-accent: rgb(76, 140, 230) !important;
  --interactive-accent-hover: rgb(59, 129, 227) !important;
  --interactive-accent-hsl: 215, 75%, 60% !important;
  --interactive-normal: #35393e !important;
  --light: #1c2127 !important;
  --lightgray: #181c20 !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --line-width-adaptive: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: rgb(121, 169, 236) !important;
  --link-color-hover: rgb(175, 203, 244) !important;
  --link-external-color: rgb(121, 169, 236) !important;
  --link-external-color-hover: rgb(175, 203, 244) !important;
  --link-unresolved-color: rgb(121, 169, 236) !important;
  --link-unresolved-decoration-color: rgba(76, 140, 230, 0.3) !important;
  --list-marker-color: rgb(93, 109, 126) !important;
  --list-marker-color-collapsed: rgb(121, 169, 236) !important;
  --list-marker-color-hover: rgb(190, 198, 207) !important;
  --max-col-width: 18em !important;
  --max-width: 90% !important;
  --menu-background: #181c20 !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-border-color: #35393e !important;
  --metadata-divider-color: #35393e !important;
  --metadata-input-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(190, 198, 207) !important;
  --metadata-label-text-color-hover: rgb(190, 198, 207) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #555 !important;
  --modal-background: #1c2127 !important;
  --modal-border-color: #555 !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: rgb(93, 109, 126) !important;
  --nav-collapse-icon-color-collapsed: rgb(93, 109, 126) !important;
  --nav-heading-color-collapsed: rgb(93, 109, 126) !important;
  --nav-heading-color-collapsed-hover: rgb(190, 198, 207) !important;
  --nav-item-background-selected: rgba(76, 140, 230, 0.15) !important;
  --nav-item-color: rgb(190, 198, 207) !important;
  --nav-item-color-highlighted: rgb(121, 169, 236) !important;
  --nav-tag-color: rgb(93, 109, 126) !important;
  --nav-tag-color-active: rgb(190, 198, 207) !important;
  --nav-tag-color-hover: rgb(190, 198, 207) !important;
  --nested-padding: 1.1em !important;
  --orange: #e87d3e !important;
  --pdf-background: #1c2127 !important;
  --pdf-page-background: #1c2127 !important;
  --pdf-shadow: 0 0 0 1px #35393e !important;
  --pdf-sidebar-background: #1c2127 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #35393e !important;
  --pill-border-color: #35393e !important;
  --pill-color: rgb(190, 198, 207) !important;
  --pill-color-remove: rgb(93, 109, 126) !important;
  --pill-color-remove-hover: rgb(121, 169, 236) !important;
  --pink: #ff82b2 !important;
  --progress-color-1: #ad5758 !important;
  --progress-color-2: #b87f4c !important;
  --progress-color-3: #d2b874 !important;
  --progress-color-4: #b0c07e !important;
  --progress-color-5: #768399 !important;
  --prompt-background: #1c2127 !important;
  --prompt-border-color: #555 !important;
  --purple: #9e86c8 !important;
  --quote-color: #3eb4bf !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, #35393e 65%, transparent) linear-gradient(#35393e, color-mix(in srgb, #35393e 65%, transparent)) !important;
  --red: #e83e3e !important;
  --ribbon-background: #181c20 !important;
  --ribbon-background-collapsed: #1c2127 !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: rgb(190, 198, 207) !important;
  --search-icon-color: rgb(190, 198, 207) !important;
  --search-result-background: #1c2127 !important;
  --secondary: rgb(121, 169, 236) !important;
  --setting-items-background: #282c34 !important;
  --setting-items-border-color: #35393e !important;
  --setting-items-radius: 10px !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --slider-track-background: #35393e !important;
  --status-bar-background: #181c20 !important;
  --status-bar-border-color: #35393e !important;
  --status-bar-text-color: rgb(190, 198, 207) !important;
  --strong-color: #ff82b2 !important;
  --suggestion-background: #1c2127 !important;
  --tab-background-active: #1c2127 !important;
  --tab-container-background: #181c20 !important;
  --tab-outline-color: #35393e !important;
  --tab-switcher-background: #181c20 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181c20, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(76, 140, 230) !important;
  --tab-text-color: rgb(93, 109, 126) !important;
  --tab-text-color-active: rgb(190, 198, 207) !important;
  --tab-text-color-focused: rgb(190, 198, 207) !important;
  --tab-text-color-focused-active: rgb(190, 198, 207) !important;
  --tab-text-color-focused-highlighted: rgb(121, 169, 236) !important;
  --table-add-button-border-color: #35393e !important;
  --table-border-color: #35393e !important;
  --table-drag-handle-background-active: rgb(76, 140, 230) !important;
  --table-drag-handle-color: rgb(93, 109, 126) !important;
  --table-header-border-color: #35393e !important;
  --table-selection: rgba(76, 140, 230, 0.1) !important;
  --table-selection-border-color: rgb(76, 140, 230) !important;
  --tag-background: #1d694b !important;
  --tag-background-color-d: #1d694b !important;
  --tag-background-color-l: #bde1d3 !important;
  --tag-background-hover: rgba(76, 140, 230, 0.2) !important;
  --tag-border-color: rgba(76, 140, 230, 0.15) !important;
  --tag-border-color-hover: rgba(76, 140, 230, 0.15) !important;
  --tag-color: #ffffff !important;
  --tag-color-hover: rgb(121, 169, 236) !important;
  --tag-font-color-d: #ffffff !important;
  --tag-font-color-l: #1d694b !important;
  --tertiary: rgb(175, 203, 244) !important;
  --text-accent: rgb(121, 169, 236) !important;
  --text-accent-hover: rgb(175, 203, 244) !important;
  --text-faint: rgb(93, 109, 126) !important;
  --text-formatted: rgb(146, 160, 175) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-highlight-bg-d: rgba(255, 208, 0, 0.4) !important;
  --text-muted: rgb(190, 198, 207) !important;
  --text-selection: rgba(76, 140, 230, 0.25) !important;
  --textHighlight: rgba(76, 140, 230, 0.1) !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #181c20 !important;
  --titlebar-background-focused: #282c34 !important;
  --titlebar-border-color: #35393e !important;
  --titlebar-text-color: rgb(190, 198, 207) !important;
  --yellow: #e5b567 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 28, 32);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(28, 33, 39);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 28, 32);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(53, 57, 62);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 28, 32);
  border-left-color: rgb(53, 57, 62);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(28, 33, 39);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

html[saved-theme="dark"] body .text-highlight {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body del {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body p {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(190, 198, 207) none 0px;
  text-decoration: rgb(190, 198, 207);
  text-decoration-color: rgb(190, 198, 207);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(121, 169, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 169, 236) none 0px;
  text-decoration: underline rgb(121, 169, 236);
  text-decoration-color: rgb(121, 169, 236);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(121, 169, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 169, 236) none 0px;
  text-decoration: underline rgb(121, 169, 236);
  text-decoration-color: rgb(121, 169, 236);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(121, 169, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 169, 236) none 0px;
  text-decoration: underline rgba(77, 140, 230, 0.3);
  text-decoration-color: rgba(77, 140, 230, 0.3);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(93, 109, 126);
  text-decoration: rgb(93, 109, 126);
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
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(224, 108, 117);
  border-left-color: rgb(224, 108, 117);
  border-right-color: rgb(224, 108, 117);
  border-top-color: rgb(224, 108, 117);
  color: rgb(224, 108, 117);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 44, 52);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 44, 52);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 192, 123);
  border-left-color: rgb(229, 192, 123);
  border-right-color: rgb(229, 192, 123);
  border-top-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(40, 44, 52);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(40, 44, 52);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}`,
    images: `html[saved-theme="dark"] body figcaption {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(40, 44, 52);
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(77, 140, 230);
}

html[saved-theme="dark"] body .transclude-inner {
  border-left-color: rgb(77, 140, 230);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(93, 109, 126);
  text-decoration: rgb(93, 109, 126);
  text-decoration-color: rgb(93, 109, 126);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(93, 109, 126);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(93, 109, 126);
  border-right-color: rgb(93, 109, 126);
  border-top-color: rgb(93, 109, 126);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(93, 109, 126);
  text-decoration: line-through 1px rgb(93, 109, 126);
  text-decoration-color: rgb(93, 109, 126);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(44, 49, 60);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(28, 33, 39);
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
  border-bottom-color: rgb(24, 28, 32);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(29, 105, 75);
  border-bottom-color: rgba(77, 140, 230, 0.15);
  border-left-color: rgba(77, 140, 230, 0.15);
  border-right-color: rgba(77, 140, 230, 0.15);
  border-top-color: rgba(77, 140, 230, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(46, 128, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(229, 181, 103);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(232, 62, 62);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 198, 207);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 198, 207);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 198, 207);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 28, 32);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(190, 198, 207);
  text-decoration: rgb(190, 198, 207);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(190, 198, 207);
  text-decoration: rgb(190, 198, 207);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(190, 198, 207);
  text-decoration: rgb(190, 198, 207);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(190, 198, 207);
  stroke: rgb(190, 198, 207);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(93, 109, 126);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 28, 32);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(40, 44, 52);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
  light: {
    base: `:root:root {
  --accent-d: 70% !important;
  --accent-h: 215 !important;
  --accent-l: 60% !important;
  --accent-s: 75% !important;
  --atom-aqua: #0084bc !important;
  --atom-blue: #3d74f6 !important;
  --atom-gray-1: #383a42 !important;
  --atom-gray-2: #383a42 !important;
  --atom-green: #4ea24c !important;
  --atom-orange: #986800 !important;
  --atom-purple: #a625a4 !important;
  --atom-red: #e75545 !important;
  --atom-yellow: #e35649 !important;
  --background-modifier-active-hover: rgba(76, 140, 230, 0.1) !important;
  --background-modifier-border: #ebedf0 !important;
  --background-modifier-error: #e4374b !important;
  --background-modifier-error-hover: #e4374b !important;
  --background-modifier-error-rgb: 228, 55, 75 !important;
  --background-modifier-hover: #e2e5e9 !important;
  --background-modifier-success: #0cb54f !important;
  --background-modifier-success-rgb: 12, 181, 79 !important;
  --background-primary-alt: #f6f7f8 !important;
  --background-secondary: #f6f7f8 !important;
  --base-d: 13% !important;
  --base-h: 212 !important;
  --base-l: 97% !important;
  --base-s: 15% !important;
  --bases-cards-cover-background: #f6f7f8 !important;
  --bases-cards-shadow: 0 0 0 1px #ebedf0 !important;
  --bases-embed-border-color: #ebedf0 !important;
  --bases-group-heading-property-color: rgb(85, 94, 104) !important;
  --bases-table-border-color: #ebedf0 !important;
  --bases-table-cell-background-disabled: #f6f7f8 !important;
  --bases-table-cell-background-selected: rgba(76, 140, 230, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(90, 149, 231) !important;
  --bases-table-group-background: #f6f7f8 !important;
  --bases-table-header-background-hover: #e2e5e9 !important;
  --bases-table-header-color: rgb(85, 94, 104) !important;
  --bases-table-summary-background-hover: #e2e5e9 !important;
  --blockquote-border-color: rgb(90, 149, 231) !important;
  --blue: #2e80f2 !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-bug: 228, 55, 75;
  --callout-error: 228, 55, 75;
  --callout-fail: 228, 55, 75;
  --callout-success: 12, 181, 79;
  --canvas-card-label-color: rgb(162, 170, 179) !important;
  --canvas-color-1: 228, 55, 75 !important;
  --canvas-color-4: 12, 181, 79 !important;
  --canvas-dot-pattern: #ebedf0 !important;
  --checkbox-border-color: rgb(162, 170, 179) !important;
  --checkbox-border-color-hover: rgb(85, 94, 104) !important;
  --checkbox-color: rgb(90, 149, 231) !important;
  --checkbox-color-hover: rgb(99, 155, 233) !important;
  --checkbox-radius: 30% !important;
  --checklist-done-color: rgb(85, 94, 104) !important;
  --code-background: #f6f7f8 !important;
  --code-border-color: #ebedf0 !important;
  --code-bracket-background: #e2e5e9 !important;
  --code-comment: rgb(162, 170, 179) !important;
  --code-function: #bd8e37 !important;
  --code-important: #d96c00 !important;
  --code-keyword: #c32b74 !important;
  --code-operator: #e4374b !important;
  --code-property: #2db7b5 !important;
  --code-punctuation: rgb(85, 94, 104) !important;
  --code-string: #0cb54f !important;
  --code-tag: #e4374b !important;
  --code-value: #876be0 !important;
  --codeFont: JetBrains Mono, Fira Code, Menlo, SFMono-Regular,
    Consolas, Roboto Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(162, 170, 179) !important;
  --collapse-icon-color-collapsed: rgb(76, 140, 230) !important;
  --color-accent: rgb(76, 140, 230) !important;
  --color-accent-1: rgb(90, 149, 231) !important;
  --color-accent-2: rgb(99, 155, 233) !important;
  --color-accent-hsl: 215, 75%, 60% !important;
  --color-base-10: #f6f7f8 !important;
  --color-base-20: #f6f7f8 !important;
  --color-base-25: #f0f0f0 !important;
  --color-base-30: #ebedf0 !important;
  --color-base-70: #5a5a5a !important;
  --color-cyan: #2db7b5 !important;
  --color-green: #0cb54f !important;
  --color-green-rgb: 12, 181, 79 !important;
  --color-orange: #d96c00 !important;
  --color-pink: #c32b74 !important;
  --color-purple: #876be0 !important;
  --color-red: #e4374b !important;
  --color-red-rgb: 228, 55, 75 !important;
  --color-yellow: #bd8e37 !important;
  --dark: rgb(85, 94, 104) !important;
  --darkgray: rgb(85, 94, 104) !important;
  --divider-color: #ebedf0 !important;
  --divider-color-hover: rgb(90, 149, 231) !important;
  --dropdown-background-hover: #f6f7f8 !important;
  --em-color: #ff82b2 !important;
  --embed-block-shadow-hover: 0 0 0 1px #ebedf0, inset 0 0 0 1px #ebedf0 !important;
  --embed-border-start: 2px solid rgb(90, 149, 231) !important;
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
  --footnote-id-color: rgb(85, 94, 104) !important;
  --footnote-id-color-no-occurrences: rgb(162, 170, 179) !important;
  --footnote-input-background-active: #e2e5e9 !important;
  --graph-node: rgb(85, 94, 104) !important;
  --graph-node-attachment: #bd8e37 !important;
  --graph-node-focused: rgb(76, 140, 230) !important;
  --graph-node-tag: #0cb54f !important;
  --graph-node-unresolved: rgb(162, 170, 179) !important;
  --gray: rgb(85, 94, 104) !important;
  --green: #3eb4bf !important;
  --h1-color: #222222 !important;
  --h1-size: 1.7rem !important;
  --h2-color: #222222 !important;
  --h2-size: 1.5rem !important;
  --h3-color: #2e80f2 !important;
  --h3-size: 1.2rem !important;
  --h4-color: #e5b567 !important;
  --h4-size: 1.1rem !important;
  --h5-color: #e83e3e !important;
  --h5-size: 1rem !important;
  --h6-color: rgb(85, 94, 104) !important;
  --h6-size: 0.9rem !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(162, 170, 179) !important;
  --highlight: #e2e5e9 !important;
  --highlight-background-color--active: rgb(0, 0, 0) !important;
  --highlight-background-color--normal: rgb(0, 0, 0) !important;
  --highlight-background-color-underline: rgb(0, 0, 0) !important;
  --hr-color: #ebedf0 !important;
  --icon-color: rgb(85, 94, 104) !important;
  --icon-color-active: rgb(76, 140, 230) !important;
  --icon-color-hover: rgb(85, 94, 104) !important;
  --icon-muted: 0.5 !important;
  --inline-title-color: #222222 !important;
  --inline-title-size: 1.7rem !important;
  --input-date-separator: rgb(162, 170, 179) !important;
  --input-placeholder-color: rgb(162, 170, 179) !important;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),
    0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
    0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
    0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
    0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --interactive-accent: rgb(90, 149, 231) !important;
  --interactive-accent-hover: rgb(99, 155, 233) !important;
  --interactive-accent-hsl: 215, 75%, 60% !important;
  --interactive-hover: #f6f7f8 !important;
  --light: #f6f7f8 !important;
  --lightgray: #f6f7f8 !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --line-width-adaptive: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: rgb(76, 140, 230) !important;
  --link-color-hover: rgb(32, 112, 223) !important;
  --link-external-color: rgb(76, 140, 230) !important;
  --link-external-color-hover: rgb(32, 112, 223) !important;
  --link-unresolved-color: rgb(76, 140, 230) !important;
  --link-unresolved-decoration-color: rgba(76, 140, 230, 0.3) !important;
  --list-marker-color: rgb(162, 170, 179) !important;
  --list-marker-color-collapsed: rgb(76, 140, 230) !important;
  --list-marker-color-hover: rgb(85, 94, 104) !important;
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
  --metadata-label-text-color: rgb(85, 94, 104) !important;
  --metadata-label-text-color-hover: rgb(85, 94, 104) !important;
  --metadata-property-background-active: #e2e5e9 !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: rgb(162, 170, 179) !important;
  --nav-collapse-icon-color-collapsed: rgb(162, 170, 179) !important;
  --nav-heading-color-collapsed: rgb(162, 170, 179) !important;
  --nav-heading-color-collapsed-hover: rgb(85, 94, 104) !important;
  --nav-item-background-active: #e2e5e9 !important;
  --nav-item-background-hover: #e2e5e9 !important;
  --nav-item-background-selected: rgba(76, 140, 230, 0.15) !important;
  --nav-item-color: rgb(85, 94, 104) !important;
  --nav-item-color-highlighted: rgb(76, 140, 230) !important;
  --nav-tag-color: rgb(162, 170, 179) !important;
  --nav-tag-color-active: rgb(85, 94, 104) !important;
  --nav-tag-color-hover: rgb(85, 94, 104) !important;
  --nested-padding: 1.1em !important;
  --orange: #e87d3e !important;
  --pill-border-color: #ebedf0 !important;
  --pill-color: rgb(85, 94, 104) !important;
  --pill-color-remove: rgb(162, 170, 179) !important;
  --pill-color-remove-hover: rgb(76, 140, 230) !important;
  --pink: #ff82b2 !important;
  --progress-color-1: #ad5758 !important;
  --progress-color-2: #b87f4c !important;
  --progress-color-3: #d2b874 !important;
  --progress-color-4: #b0c07e !important;
  --progress-color-5: #768399 !important;
  --purple: #9e86c8 !important;
  --quote-color: #3eb4bf !important;
  --radius-l: 10px !important;
  --red: #e83e3e !important;
  --ribbon-background: #f6f7f8 !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: rgb(85, 94, 104) !important;
  --search-icon-color: rgb(85, 94, 104) !important;
  --secondary: rgb(76, 140, 230) !important;
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
  --status-bar-text-color: rgb(85, 94, 104) !important;
  --strong-color: #ff82b2 !important;
  --sync-avatar-color-1: #e4374b !important;
  --sync-avatar-color-2: #d96c00 !important;
  --sync-avatar-color-3: #bd8e37 !important;
  --sync-avatar-color-4: #0cb54f !important;
  --sync-avatar-color-5: #2db7b5 !important;
  --sync-avatar-color-7: #876be0 !important;
  --sync-avatar-color-8: #c32b74 !important;
  --tab-container-background: #f6f7f8 !important;
  --tab-outline-color: #ebedf0 !important;
  --tab-switcher-background: #f6f7f8 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f7f8, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(76, 140, 230) !important;
  --tab-text-color: rgb(162, 170, 179) !important;
  --tab-text-color-active: rgb(85, 94, 104) !important;
  --tab-text-color-focused: rgb(85, 94, 104) !important;
  --tab-text-color-focused-active: rgb(85, 94, 104) !important;
  --tab-text-color-focused-highlighted: rgb(76, 140, 230) !important;
  --table-add-button-border-color: #ebedf0 !important;
  --table-border-color: #ebedf0 !important;
  --table-drag-handle-background-active: rgb(90, 149, 231) !important;
  --table-drag-handle-color: rgb(162, 170, 179) !important;
  --table-header-border-color: #ebedf0 !important;
  --table-selection: rgba(76, 140, 230, 0.1) !important;
  --table-selection-border-color: rgb(90, 149, 231) !important;
  --tag-background: #bde1d3 !important;
  --tag-background-color-d: #1d694b !important;
  --tag-background-color-l: #bde1d3 !important;
  --tag-background-hover: rgba(76, 140, 230, 0.2) !important;
  --tag-border-color: rgba(76, 140, 230, 0.15) !important;
  --tag-border-color-hover: rgba(76, 140, 230, 0.15) !important;
  --tag-color: #1d694b !important;
  --tag-color-hover: rgb(76, 140, 230) !important;
  --tag-font-color-d: #ffffff !important;
  --tag-font-color-l: #1d694b !important;
  --tertiary: rgb(32, 112, 223) !important;
  --text-accent: rgb(76, 140, 230) !important;
  --text-accent-hover: rgb(32, 112, 223) !important;
  --text-error: #e4374b !important;
  --text-faint: rgb(162, 170, 179) !important;
  --text-formatted: rgb(148, 157, 168) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-highlight-bg-l: rgba(255, 208, 0, 0.4) !important;
  --text-muted: rgb(85, 94, 104) !important;
  --text-selection: rgba(76, 140, 230, 0.2) !important;
  --text-success: #0cb54f !important;
  --text-warning: #d96c00 !important;
  --textHighlight: #e2e5e9 !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #f6f7f8 !important;
  --titlebar-border-color: #ebedf0 !important;
  --titlebar-text-color: rgb(85, 94, 104) !important;
  --yellow: #e5b567 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 247, 248);
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
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

html[saved-theme="light"] body .text-highlight {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body p {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(85, 94, 104) none 0px;
  text-decoration: rgb(85, 94, 104);
  text-decoration-color: rgb(85, 94, 104);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(77, 140, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 140, 230) none 0px;
  text-decoration: underline rgb(77, 140, 230);
  text-decoration-color: rgb(77, 140, 230);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(77, 140, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 140, 230) none 0px;
  text-decoration: underline rgb(77, 140, 230);
  text-decoration-color: rgb(77, 140, 230);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(77, 140, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 140, 230) none 0px;
  text-decoration: underline rgba(77, 140, 230, 0.3);
  text-decoration-color: rgba(77, 140, 230, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(162, 170, 179);
  text-decoration: rgb(162, 170, 179);
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
  border-bottom-color: rgb(231, 85, 69);
  border-left-color: rgb(231, 85, 69);
  border-right-color: rgb(231, 85, 69);
  border-top-color: rgb(231, 85, 69);
  color: rgb(231, 85, 69);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
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
  border-left-color: rgb(227, 86, 73);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(227, 86, 73);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(227, 86, 73);
  border-left-color: rgb(227, 86, 73);
  border-right-color: rgb(227, 86, 73);
  border-top-color: rgb(227, 86, 73);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgb(88, 147, 231);
}

html[saved-theme="light"] body .transclude-inner {
  border-left-color: rgb(88, 147, 231);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(162, 170, 179);
  text-decoration: rgb(162, 170, 179);
  text-decoration-color: rgb(162, 170, 179);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(162, 170, 179);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(162, 170, 179);
  border-right-color: rgb(162, 170, 179);
  border-top-color: rgb(162, 170, 179);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(162, 170, 179);
  text-decoration: line-through 1px rgb(162, 170, 179);
  text-decoration-color: rgb(162, 170, 179);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="bug"] {
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 12, 181, 79;
  background-color: rgba(12, 181, 79, 0.1);
  border-bottom-color: rgba(12, 181, 79, 0.25);
  border-left-color: rgba(12, 181, 79, 0.25);
  border-right-color: rgba(12, 181, 79, 0.25);
  border-top-color: rgba(12, 181, 79, 0.25);
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
  background-color: rgb(189, 225, 211);
  border-bottom-color: rgba(77, 140, 230, 0.15);
  border-left-color: rgba(77, 140, 230, 0.15);
  border-right-color: rgba(77, 140, 230, 0.15);
  border-top-color: rgba(77, 140, 230, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(29, 105, 75);
}

html[saved-theme="light"] body h1 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(46, 128, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(229, 181, 103);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(232, 62, 62);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(85, 94, 104);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(85, 94, 104);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(85, 94, 104);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(226, 229, 233);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(85, 94, 104);
  text-decoration: rgb(85, 94, 104);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(85, 94, 104);
  text-decoration: rgb(85, 94, 104);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(85, 94, 104);
  text-decoration: rgb(85, 94, 104);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(85, 94, 104);
  stroke: rgb(85, 94, 104);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(162, 170, 179);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(246, 247, 248);
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(246, 247, 248);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
};
