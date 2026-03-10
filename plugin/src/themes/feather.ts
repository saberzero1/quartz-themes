import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "feather",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
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
  --background-primary: #333547 !important;
  --background-primary-alt: #282c34 !important;
  --background-secondary: #272835 !important;
  --background-secondary-alt: #35393e !important;
  --base: #4da2f8 !important;
  --base-d: 13% !important;
  --base-h: 212 !important;
  --base-l: 97% !important;
  --base-s: 15% !important;
  --bases-cards-background: #333547 !important;
  --bases-cards-cover-background: #282c34 !important;
  --bases-cards-shadow: 0 0 0 1px #35393e !important;
  --bases-embed-border-color: #35393e !important;
  --bases-group-heading-property-color: rgb(190, 198, 207) !important;
  --bases-table-border-color: #494e6a !important;
  --bases-table-cell-background-active: #333547 !important;
  --bases-table-cell-background-disabled: #282c34 !important;
  --bases-table-cell-background-selected: rgba(76, 140, 230, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #555 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(76, 140, 230) !important;
  --bases-table-group-background: #282c34 !important;
  --bases-table-header-background: #333547 !important;
  --bases-table-header-color: rgb(190, 198, 207) !important;
  --bases-table-summary-background: #333547 !important;
  --blockquote-border-color: rgb(76, 140, 230) !important;
  --blue: #4da2f8 !important;
  --blur-background: color-mix(in srgb, #35393e 65%, transparent) linear-gradient(#35393e, color-mix(in srgb, #35393e 65%, transparent)) !important;
  --bodyFont: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --brown: #ca6419 !important;
  --callout-title-size: 1.2rem;
  --canvas-background: #333547 !important;
  --canvas-card-label-color: rgb(93, 109, 126) !important;
  --canvas-dot-pattern: #35393e !important;
  --checkbox-border-color: rgb(93, 109, 126) !important;
  --checkbox-border-color-hover: rgb(190, 198, 207) !important;
  --checkbox-color: rgb(76, 140, 230) !important;
  --checkbox-color-hover: #4da2f8 !important;
  --checkbox-marker-color: #333547 !important;
  --checkbox-radius: 30% !important;
  --checkbox-size: 1.1rem !important;
  --checklist-done-color: rgb(190, 198, 207) !important;
  --code-background: #1d1c39 !important;
  --code-border-color: #35393e !important;
  --code-comment: #7b89cf !important;
  --code-function: #79e3aa !important;
  --code-important: #f03063 !important;
  --code-keyword: #895ef7 !important;
  --code-operator: #1fcbdc !important;
  --code-property: #f03063 !important;
  --code-punctuation: #79e3aa !important;
  --code-size: 1rem !important;
  --code-string: #79e3aa !important;
  --code-tag: #f03063 !important;
  --code-value: #ff7641 !important;
  --codeFont: '??', "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(93, 109, 126) !important;
  --collapse-icon-color-collapsed: rgb(121, 169, 236) !important;
  --color-accent: rgb(76, 140, 230) !important;
  --color-accent-1: rgb(59, 129, 227) !important;
  --color-accent-2: rgb(94, 152, 232) !important;
  --color-accent-hsl: 215, 75%, 60% !important;
  --color-base-00: #333547 !important;
  --color-base-10: #282c34 !important;
  --color-base-20: #272835 !important;
  --color-base-25: #2c313c !important;
  --color-base-30: #35393e !important;
  --color-base-40: #555 !important;
  --color-base-50: #666 !important;
  --color-base-60: #999 !important;
  --color-base-70: #bababa !important;
  --d1: #333547 !important;
  --d2: #272835 !important;
  --dark: rgb(190, 198, 207) !important;
  --darkgray: rgb(190, 198, 207) !important;
  --divider-color: #35393e !important;
  --divider-color-hover: rgb(76, 140, 230) !important;
  --dropdown-background: #35393e !important;
  --em-color: #1fcbdc !important;
  --embed-block-shadow-hover: 0 0 0 1px #35393e, inset 0 0 0 1px #35393e !important;
  --embed-border-start: 2px solid rgb(76, 140, 230) !important;
  --file-header-background: #333547 !important;
  --file-header-background-focused: #333547 !important;
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 1rem !important;
  --flair-background: #35393e !important;
  --font-editor-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif !important;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif !important;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace !important;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, 'Arial' !important;
  --font-text: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif !important;
  --footnote-divider-color: #35393e !important;
  --footnote-id-color: rgb(190, 198, 207) !important;
  --footnote-id-color-no-occurrences: rgb(93, 109, 126) !important;
  --graph-node: rgb(190, 198, 207) !important;
  --graph-node-focused: rgb(121, 169, 236) !important;
  --graph-node-unresolved: rgb(93, 109, 126) !important;
  --gray: rgb(190, 198, 207) !important;
  --green: #79e3aa !important;
  --h1-color: #dadada !important;
  --h1-size: 2rem !important;
  --h2-color: #dadada !important;
  --h2-size: 1.8rem !important;
  --h3-color: #4da2f8 !important;
  --h3-size: 1.6rem !important;
  --h4-color: #ffc63c !important;
  --h4-size: 1.4rem !important;
  --h5-color: #f03063 !important;
  --h5-size: 1.2rem !important;
  --h6-color: #895ef7 !important;
  --h6-size: 1rem !important;
  --headerFont: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(93, 109, 126) !important;
  --highlight: rgba(76, 140, 230, 0.1) !important;
  --hr-color: #494e6a !important;
  --hr-thickness: 0.0955rem !important;
  --icon-color: #f4f4f2 !important;
  --icon-color-active: #e8e8e8 !important;
  --icon-color-focused: #f4f4f2 !important;
  --icon-color-hover: #e8e8e8 !important;
  --indigo: #6a84ed !important;
  --inline-title-color: #dadada !important;
  --inline-title-line-height: 4rem !important;
  --inline-title-size: 2rem !important;
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
  --l1: #f4f4f2 !important;
  --l2: #e8e8e8 !important;
  --light: #333547 !important;
  --lightgray: #272835 !important;
  --link-color: rgb(121, 169, 236) !important;
  --link-color-hover: rgb(175, 203, 244) !important;
  --link-external-color: #79e3aa !important;
  --link-external-color-hover: rgb(76, 230, 128) !important;
  --link-unresolved-color: rgb(121, 169, 236) !important;
  --link-unresolved-decoration-color: rgba(76, 140, 230, 0.3) !important;
  --list-marker-color: #7b89cf !important;
  --list-marker-color-collapsed: rgb(121, 169, 236) !important;
  --list-marker-color-hover: rgb(190, 198, 207) !important;
  --menu-background: #272835 !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-border-color: #35393e !important;
  --metadata-divider-color: #35393e !important;
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(190, 198, 207) !important;
  --metadata-label-text-color-hover: rgb(190, 198, 207) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #555 !important;
  --modal-background: #333547 !important;
  --modal-border-color: #555 !important;
  --modal-radius: 1rem !important;
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
  --orange: #ff7641 !important;
  --pdf-background: #333547 !important;
  --pdf-page-background: #333547 !important;
  --pdf-shadow: 0 0 0 1px #35393e !important;
  --pdf-sidebar-background: #333547 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #35393e !important;
  --pill-border-color: #35393e !important;
  --pill-color: rgb(190, 198, 207) !important;
  --pill-color-remove: rgb(93, 109, 126) !important;
  --pill-color-remove-hover: rgb(121, 169, 236) !important;
  --pink: #ff22b1 !important;
  --pink-light: #ff82b2 !important;
  --prompt-background: #333547 !important;
  --prompt-border-color: #7b89cf !important;
  --purple: #895ef7 !important;
  --quotes-color: #dadada !important;
  --raised-background: color-mix(in srgb, #35393e 65%, transparent) linear-gradient(#35393e, color-mix(in srgb, #35393e 65%, transparent)) !important;
  --red: #f03063 !important;
  --ribbon-background: #272835 !important;
  --ribbon-background-collapsed: #333547 !important;
  --search-clear-button-color: rgb(190, 198, 207) !important;
  --search-icon-color: rgb(190, 198, 207) !important;
  --search-result-background: #333547 !important;
  --secondary: rgb(121, 169, 236) !important;
  --setting-items-background: #282c34 !important;
  --setting-items-border-color: #35393e !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --slate: #1d1c39 !important;
  --slate-60: #494e6a !important;
  --slate-blue: #7b89cf !important;
  --slider-track-background: #35393e !important;
  --status-bar-background: #272835 !important;
  --status-bar-border-color: #35393e !important;
  --status-bar-text-color: rgb(190, 198, 207) !important;
  --strong-color: #ff82b2 !important;
  --suggestion-background: #333547 !important;
  --tab-background-active: #333547 !important;
  --tab-container-background: #272835 !important;
  --tab-outline-color: #35393e !important;
  --tab-switcher-background: #272835 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #272835, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(76, 140, 230) !important;
  --tab-text-color: rgb(93, 109, 126) !important;
  --tab-text-color-active: rgb(190, 198, 207) !important;
  --tab-text-color-focused: rgb(190, 198, 207) !important;
  --tab-text-color-focused-active: rgb(190, 198, 207) !important;
  --tab-text-color-focused-highlighted: rgb(121, 169, 236) !important;
  --table-add-button-border-color: #35393e !important;
  --table-border-color: #494e6a !important;
  --table-drag-handle-background-active: rgb(76, 140, 230) !important;
  --table-drag-handle-color: rgb(93, 109, 126) !important;
  --table-header-border-color: #494e6a !important;
  --table-header-color: #7b89cf !important;
  --table-header-weight: 900 !important;
  --table-selection: rgba(76, 140, 230, 0.1) !important;
  --table-selection-border-color: rgb(76, 140, 230) !important;
  --table-text-color: #dadada !important;
  --tag-background: rgba(76, 140, 230, 0.1) !important;
  --tag-background-hover: rgba(76, 140, 230, 0.2) !important;
  --tag-border-color: rgba(76, 140, 230, 0.15) !important;
  --tag-border-color-hover: rgba(76, 140, 230, 0.15) !important;
  --tag-color: #7b89cf !important;
  --tag-color-hover: rgb(121, 169, 236) !important;
  --tag-size: 1rem !important;
  --teal: #1fcbdc !important;
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
  --titleFont: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #272835 !important;
  --titlebar-background-focused: #272835 !important;
  --titlebar-border-color: #35393e !important;
  --titlebar-text-color: rgb(190, 198, 207) !important;
  --white: #f8fafc !important;
  --x: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", monospace !important;
  --y: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif !important;
  --yellow: #ffc63c !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(39, 40, 53);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(51, 53, 71);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(39, 40, 53);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(53, 57, 62);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(39, 40, 53);
  border-left-color: rgb(53, 57, 62);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(51, 53, 71);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(31, 203, 220);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 203, 220) none 0px;
  text-decoration: rgb(31, 203, 220);
  text-decoration-color: rgb(31, 203, 220);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(31, 203, 220);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 203, 220) none 0px;
  text-decoration: rgb(31, 203, 220);
  text-decoration-color: rgb(31, 203, 220);
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
  color: rgb(121, 227, 170);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 227, 170) none 0px;
  text-decoration: underline rgb(121, 227, 170);
  text-decoration-color: rgb(121, 227, 170);
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
}`,
    tables: `html[saved-theme="dark"] body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 201.656px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(73, 78, 106);
  border-left-color: rgb(73, 78, 106);
  border-right-color: rgb(73, 78, 106);
  border-top-color: rgb(73, 78, 106);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(73, 78, 106);
  border-left-color: rgb(73, 78, 106);
  border-right-color: rgb(73, 78, 106);
  border-top-color: rgb(73, 78, 106);
  color: rgb(123, 137, 207);
  font-weight: 900;
}`,
    code: `html[saved-theme="dark"] body code {
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 28, 57);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 28, 57);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(121, 227, 170);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(121, 227, 170);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(121, 227, 170);
  border-left-color: rgb(121, 227, 170);
  border-right-color: rgb(121, 227, 170);
  border-top-color: rgb(121, 227, 170);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(29, 28, 57);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(29, 28, 57);
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
  color: rgb(190, 198, 207);
  text-decoration: line-through rgb(190, 198, 207);
  text-decoration-color: rgb(190, 198, 207);
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
  margin-left: -26.4px;
  width: 17.5938px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(93, 109, 126);
  text-decoration: line-through 1px rgb(240, 48, 99);
  text-decoration-color: rgb(240, 48, 99);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(51, 53, 71);
  border-bottom-color: rgb(123, 137, 207);
  border-left-color: rgb(123, 137, 207);
  border-right-color: rgb(123, 137, 207);
  border-top-color: rgb(123, 137, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(123, 137, 207);
  border-left-color: rgb(123, 137, 207);
  border-right-color: rgb(123, 137, 207);
  border-top-color: rgb(123, 137, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(39, 40, 53);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(77, 140, 230, 0.1);
  border-bottom-color: rgba(77, 140, 230, 0.15);
  border-left-color: rgba(77, 140, 230, 0.15);
  border-right-color: rgba(77, 140, 230, 0.15);
  border-top-color: rgba(77, 140, 230, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(123, 137, 207);
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
  color: rgb(77, 162, 248);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 198, 60);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(240, 48, 99);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(137, 94, 247);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
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
  border-bottom-color: rgb(244, 244, 242);
  border-left-color: rgb(244, 244, 242);
  border-right-color: rgb(244, 244, 242);
  border-top-color: rgb(244, 244, 242);
  color: rgb(244, 244, 242);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(39, 40, 53);
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
  border-bottom-color: rgb(244, 244, 242);
  border-left-color: rgb(244, 244, 242);
  border-right-color: rgb(244, 244, 242);
  border-top-color: rgb(244, 244, 242);
  color: rgb(244, 244, 242);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(244, 244, 242);
  stroke: rgb(244, 244, 242);
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
  background-color: rgb(39, 40, 53);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(29, 28, 57);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
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
  --background-modifier-form-field: #f4f4f2 !important;
  --background-modifier-form-field-hover: #f4f4f2 !important;
  --background-modifier-hover: #e2e5e9 !important;
  --background-modifier-success: #0cb54f !important;
  --background-modifier-success-rgb: 12, 181, 79 !important;
  --background-primary: #f4f4f2 !important;
  --background-primary-alt: #f6f7f8 !important;
  --background-secondary: #e8e8e8 !important;
  --base: #4da2f8 !important;
  --base-d: 13% !important;
  --base-h: 212 !important;
  --base-l: 97% !important;
  --base-s: 15% !important;
  --bases-cards-background: #f4f4f2 !important;
  --bases-cards-cover-background: #f6f7f8 !important;
  --bases-cards-shadow: 0 0 0 1px #ebedf0 !important;
  --bases-embed-border-color: #ebedf0 !important;
  --bases-group-heading-property-color: rgb(85, 94, 104) !important;
  --bases-table-border-color: #494e6a !important;
  --bases-table-cell-background-active: #f4f4f2 !important;
  --bases-table-cell-background-disabled: #f6f7f8 !important;
  --bases-table-cell-background-selected: rgba(76, 140, 230, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(90, 149, 231) !important;
  --bases-table-group-background: #f6f7f8 !important;
  --bases-table-header-background: #f4f4f2 !important;
  --bases-table-header-background-hover: #e2e5e9 !important;
  --bases-table-header-color: rgb(85, 94, 104) !important;
  --bases-table-summary-background: #f4f4f2 !important;
  --bases-table-summary-background-hover: #e2e5e9 !important;
  --blockquote-border-color: rgb(90, 149, 231) !important;
  --blue: #4da2f8 !important;
  --blur-background: color-mix(in srgb, #f4f4f2 65%, transparent) linear-gradient(#f4f4f2, color-mix(in srgb, #f4f4f2 65%, transparent)) !important;
  --bodyFont: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --brown: #ca6419 !important;
  --callout-bug: 228, 55, 75;
  --callout-error: 228, 55, 75;
  --callout-fail: 228, 55, 75;
  --callout-success: 12, 181, 79;
  --callout-title-size: 1.2rem;
  --canvas-background: #f4f4f2 !important;
  --canvas-card-label-color: rgb(162, 170, 179) !important;
  --canvas-color-1: 228, 55, 75 !important;
  --canvas-color-4: 12, 181, 79 !important;
  --canvas-dot-pattern: #ebedf0 !important;
  --checkbox-border-color: rgb(162, 170, 179) !important;
  --checkbox-border-color-hover: rgb(85, 94, 104) !important;
  --checkbox-color: rgb(90, 149, 231) !important;
  --checkbox-color-hover: #4da2f8 !important;
  --checkbox-marker-color: #f4f4f2 !important;
  --checkbox-radius: 30% !important;
  --checkbox-size: 1.1rem !important;
  --checklist-done-color: rgb(85, 94, 104) !important;
  --code-background: #e8e8e8 !important;
  --code-border-color: #ebedf0 !important;
  --code-bracket-background: #e2e5e9 !important;
  --code-comment: #7b89cf !important;
  --code-function: #79e3aa !important;
  --code-important: #f03063 !important;
  --code-keyword: #895ef7 !important;
  --code-operator: #1fcbdc !important;
  --code-property: #f03063 !important;
  --code-punctuation: #79e3aa !important;
  --code-size: 1rem !important;
  --code-string: #79e3aa !important;
  --code-tag: #f03063 !important;
  --code-value: #ff7641 !important;
  --codeFont: '??', "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(162, 170, 179) !important;
  --collapse-icon-color-collapsed: rgb(76, 140, 230) !important;
  --color-accent: rgb(76, 140, 230) !important;
  --color-accent-1: rgb(90, 149, 231) !important;
  --color-accent-2: rgb(99, 155, 233) !important;
  --color-accent-hsl: 215, 75%, 60% !important;
  --color-base-00: #f4f4f2 !important;
  --color-base-10: #f6f7f8 !important;
  --color-base-20: #e8e8e8 !important;
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
  --d1: #333547 !important;
  --d2: #272835 !important;
  --dark: rgb(85, 94, 104) !important;
  --darkgray: rgb(85, 94, 104) !important;
  --divider-color: #ebedf0 !important;
  --divider-color-hover: rgb(90, 149, 231) !important;
  --dropdown-background: #f4f4f2 !important;
  --dropdown-background-hover: #f6f7f8 !important;
  --em-color: #1fcbdc !important;
  --embed-block-shadow-hover: 0 0 0 1px #ebedf0, inset 0 0 0 1px #ebedf0 !important;
  --embed-border-start: 2px solid rgb(90, 149, 231) !important;
  --file-header-background: #f4f4f2 !important;
  --file-header-background-focused: #f4f4f2 !important;
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 1rem !important;
  --flair-background: #f4f4f2 !important;
  --font-editor-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif !important;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif !important;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace !important;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, 'Arial' !important;
  --font-text: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
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
  --green: #79e3aa !important;
  --h1-color: #222222 !important;
  --h1-size: 2rem !important;
  --h2-color: #222222 !important;
  --h2-size: 1.8rem !important;
  --h3-color: #4da2f8 !important;
  --h3-size: 1.6rem !important;
  --h4-color: #ffc63c !important;
  --h4-size: 1.4rem !important;
  --h5-color: #f03063 !important;
  --h5-size: 1.2rem !important;
  --h6-color: #895ef7 !important;
  --h6-size: 1rem !important;
  --headerFont: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(162, 170, 179) !important;
  --highlight: #e2e5e9 !important;
  --hr-color: #494e6a !important;
  --hr-thickness: 0.0955rem !important;
  --icon-color: #333547 !important;
  --icon-color-active: #272835 !important;
  --icon-color-focused: #333547 !important;
  --icon-color-hover: #272835 !important;
  --indigo: #6a84ed !important;
  --inline-title-color: #222222 !important;
  --inline-title-line-height: 4rem !important;
  --inline-title-size: 2rem !important;
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
  --interactive-normal: #f4f4f2 !important;
  --l1: #f4f4f2 !important;
  --l2: #e8e8e8 !important;
  --light: #f4f4f2 !important;
  --lightgray: #e8e8e8 !important;
  --link-color: rgb(76, 140, 230) !important;
  --link-color-hover: rgb(32, 112, 223) !important;
  --link-external-color: #79e3aa !important;
  --link-external-color-hover: rgb(76, 230, 128) !important;
  --link-unresolved-color: rgb(76, 140, 230) !important;
  --link-unresolved-decoration-color: rgba(76, 140, 230, 0.3) !important;
  --list-marker-color: #7b89cf !important;
  --list-marker-color-collapsed: rgb(76, 140, 230) !important;
  --list-marker-color-hover: rgb(85, 94, 104) !important;
  --menu-background: #e8e8e8 !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-border-color: #ebedf0 !important;
  --metadata-divider-color: #ebedf0 !important;
  --metadata-input-background-active: #e2e5e9 !important;
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-background-active: #e2e5e9 !important;
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(85, 94, 104) !important;
  --metadata-label-text-color-hover: rgb(85, 94, 104) !important;
  --metadata-property-background-active: #e2e5e9 !important;
  --modal-background: #f4f4f2 !important;
  --modal-radius: 1rem !important;
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
  --orange: #ff7641 !important;
  --pdf-background: #f4f4f2 !important;
  --pdf-page-background: #f4f4f2 !important;
  --pdf-sidebar-background: #f4f4f2 !important;
  --pill-border-color: #ebedf0 !important;
  --pill-color: rgb(85, 94, 104) !important;
  --pill-color-remove: rgb(162, 170, 179) !important;
  --pill-color-remove-hover: rgb(76, 140, 230) !important;
  --pink: #ff22b1 !important;
  --pink-light: #ff82b2 !important;
  --prompt-background: #f4f4f2 !important;
  --prompt-border-color: #7b89cf !important;
  --purple: #895ef7 !important;
  --quotes-color: #222222 !important;
  --raised-background: color-mix(in srgb, #f4f4f2 65%, transparent) linear-gradient(#f4f4f2, color-mix(in srgb, #f4f4f2 65%, transparent)) !important;
  --red: #f03063 !important;
  --ribbon-background: #e8e8e8 !important;
  --ribbon-background-collapsed: #f4f4f2 !important;
  --search-clear-button-color: rgb(85, 94, 104) !important;
  --search-icon-color: rgb(85, 94, 104) !important;
  --search-result-background: #f4f4f2 !important;
  --secondary: rgb(76, 140, 230) !important;
  --setting-items-background: #f6f7f8 !important;
  --setting-items-border-color: #ebedf0 !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --slate: #1d1c39 !important;
  --slate-60: #494e6a !important;
  --slate-blue: #7b89cf !important;
  --slider-track-background: #ebedf0 !important;
  --status-bar-background: #e8e8e8 !important;
  --status-bar-border-color: #ebedf0 !important;
  --status-bar-text-color: rgb(85, 94, 104) !important;
  --strong-color: #ff82b2 !important;
  --suggestion-background: #f4f4f2 !important;
  --sync-avatar-color-1: #e4374b !important;
  --sync-avatar-color-2: #d96c00 !important;
  --sync-avatar-color-3: #bd8e37 !important;
  --sync-avatar-color-4: #0cb54f !important;
  --sync-avatar-color-5: #2db7b5 !important;
  --sync-avatar-color-7: #876be0 !important;
  --sync-avatar-color-8: #c32b74 !important;
  --tab-background-active: #f4f4f2 !important;
  --tab-container-background: #e8e8e8 !important;
  --tab-outline-color: #ebedf0 !important;
  --tab-switcher-background: #e8e8e8 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e8e8e8, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(76, 140, 230) !important;
  --tab-text-color: rgb(162, 170, 179) !important;
  --tab-text-color-active: rgb(85, 94, 104) !important;
  --tab-text-color-focused: rgb(85, 94, 104) !important;
  --tab-text-color-focused-active: rgb(85, 94, 104) !important;
  --tab-text-color-focused-highlighted: rgb(76, 140, 230) !important;
  --table-add-button-border-color: #ebedf0 !important;
  --table-border-color: #494e6a !important;
  --table-drag-handle-background-active: rgb(90, 149, 231) !important;
  --table-drag-handle-color: rgb(162, 170, 179) !important;
  --table-header-border-color: #494e6a !important;
  --table-header-color: #7b89cf !important;
  --table-header-weight: 900 !important;
  --table-selection: rgba(76, 140, 230, 0.1) !important;
  --table-selection-border-color: rgb(90, 149, 231) !important;
  --table-text-color: #222222 !important;
  --tag-background: rgba(76, 140, 230, 0.1) !important;
  --tag-background-hover: rgba(76, 140, 230, 0.2) !important;
  --tag-border-color: rgba(76, 140, 230, 0.15) !important;
  --tag-border-color-hover: rgba(76, 140, 230, 0.15) !important;
  --tag-color: #7b89cf !important;
  --tag-color-hover: rgb(76, 140, 230) !important;
  --tag-size: 1rem !important;
  --teal: #1fcbdc !important;
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
  --titleFont: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #e8e8e8 !important;
  --titlebar-background-focused: #e8e8e8 !important;
  --titlebar-border-color: #ebedf0 !important;
  --titlebar-text-color: rgb(85, 94, 104) !important;
  --white: #f8fafc !important;
  --x: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", monospace !important;
  --y: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif !important;
  --yellow: #ffc63c !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(232, 232, 232);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(244, 244, 242);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(232, 232, 232);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(232, 232, 232);
  border-left-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(244, 244, 242);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(31, 203, 220);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 203, 220) none 0px;
  text-decoration: rgb(31, 203, 220);
  text-decoration-color: rgb(31, 203, 220);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(31, 203, 220);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 203, 220) none 0px;
  text-decoration: rgb(31, 203, 220);
  text-decoration-color: rgb(31, 203, 220);
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
  color: rgb(121, 227, 170);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 227, 170) none 0px;
  text-decoration: underline rgb(121, 227, 170);
  text-decoration-color: rgb(121, 227, 170);
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
}`,
    tables: `html[saved-theme="light"] body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 201.656px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(73, 78, 106);
  border-left-color: rgb(73, 78, 106);
  border-right-color: rgb(73, 78, 106);
  border-top-color: rgb(73, 78, 106);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(73, 78, 106);
  border-left-color: rgb(73, 78, 106);
  border-right-color: rgb(73, 78, 106);
  border-top-color: rgb(73, 78, 106);
  color: rgb(123, 137, 207);
  font-weight: 900;
}`,
    code: `html[saved-theme="light"] body code {
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(232, 232, 232);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(232, 232, 232);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(121, 227, 170);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(121, 227, 170);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(121, 227, 170);
  border-left-color: rgb(121, 227, 170);
  border-right-color: rgb(121, 227, 170);
  border-top-color: rgb(121, 227, 170);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(232, 232, 232);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(232, 232, 232);
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
  color: rgb(85, 94, 104);
  text-decoration: line-through rgb(85, 94, 104);
  text-decoration-color: rgb(85, 94, 104);
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
  margin-left: -26.4px;
  width: 17.5938px;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(162, 170, 179);
  text-decoration: line-through 1px rgb(240, 48, 99);
  text-decoration-color: rgb(240, 48, 99);
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
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(244, 244, 242);
  border-bottom-color: rgb(123, 137, 207);
  border-left-color: rgb(123, 137, 207);
  border-right-color: rgb(123, 137, 207);
  border-top-color: rgb(123, 137, 207);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(123, 137, 207);
  border-left-color: rgb(123, 137, 207);
  border-right-color: rgb(123, 137, 207);
  border-top-color: rgb(123, 137, 207);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(232, 232, 232);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(226, 229, 233);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(77, 140, 230, 0.1);
  border-bottom-color: rgba(77, 140, 230, 0.15);
  border-left-color: rgba(77, 140, 230, 0.15);
  border-right-color: rgba(77, 140, 230, 0.15);
  border-top-color: rgba(77, 140, 230, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(123, 137, 207);
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
  color: rgb(77, 162, 248);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(255, 198, 60);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(240, 48, 99);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(137, 94, 247);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
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
  border-bottom-color: rgb(51, 53, 71);
  border-left-color: rgb(51, 53, 71);
  border-right-color: rgb(51, 53, 71);
  border-top-color: rgb(51, 53, 71);
  color: rgb(51, 53, 71);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(232, 232, 232);
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
  border-bottom-color: rgb(51, 53, 71);
  border-left-color: rgb(51, 53, 71);
  border-right-color: rgb(51, 53, 71);
  border-top-color: rgb(51, 53, 71);
  color: rgb(51, 53, 71);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(51, 53, 71);
  stroke: rgb(51, 53, 71);
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
  background-color: rgb(232, 232, 232);
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(232, 232, 232);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}`,
  },
};
