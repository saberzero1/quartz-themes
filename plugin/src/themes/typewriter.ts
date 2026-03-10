import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "typewriter",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-mono", "ia-writer-quattro-s", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #333 !important;
  --background-modifier-border-focus: rgb(92, 92, 92) !important;
  --background-modifier-border-hover: rgb(94, 94, 94) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #197300 !important;
  --background-primary: rgb(38, 38, 38) !important;
  --background-primary-alt: #202020 !important;
  --background-secondary: rgb(57, 51, 45) !important;
  --background-secondary-alt: #000000 !important;
  --base-d: 15% !important;
  --base-h: 0 !important;
  --base-l: 96% !important;
  --base-s: 0% !important;
  --bases-cards-background: rgb(38, 38, 38) !important;
  --bases-cards-cover-background: #202020 !important;
  --bases-cards-font-size: 0.688em !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px #333 !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(94, 94, 94) !important;
  --bases-embed-border-color: #333 !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: rgb(153, 153, 153) !important;
  --bases-group-heading-value-size: 0.688em !important;
  --bases-table-border-color: #333 !important;
  --bases-table-cell-background-active: rgb(38, 38, 38) !important;
  --bases-table-cell-background-disabled: #202020 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(92, 92, 92) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(110, 180, 121) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-font-size: 0.688em !important;
  --bases-table-group-background: #202020 !important;
  --bases-table-header-background: rgb(38, 38, 38) !important;
  --bases-table-header-color: rgb(153, 153, 153) !important;
  --bases-table-summary-background: rgb(38, 38, 38) !important;
  --blockquote-border-color: rgb(110, 180, 121) !important;
  --blue: #6c99bb !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --bodyFont: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 620 !important;
  --border-width-alt: 1px !important;
  --callout-radius: 2px;
  --canvas-background: rgb(38, 38, 38) !important;
  --canvas-card-label-color: rgb(158, 158, 158) !important;
  --canvas-controls-radius: 2px !important;
  --caret-color: rgb(197, 184, 161) !important;
  --checkbox-border-color: rgb(158, 158, 158) !important;
  --checkbox-border-color-hover: rgb(153, 153, 153) !important;
  --checkbox-color: rgb(110, 180, 121) !important;
  --checkbox-color-hover: rgb(81, 158, 93) !important;
  --checkbox-marker-color: rgb(38, 38, 38) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: rgb(153, 153, 153) !important;
  --clickable-icon-radius: 2px !important;
  --code-background: #202020 !important;
  --code-border-color: #333 !important;
  --code-comment: rgb(158, 158, 158) !important;
  --code-normal: #6c99bb !important;
  --code-punctuation: rgb(153, 153, 153) !important;
  --code-radius: 2px !important;
  --code-size: 1em !important;
  --codeFont: '??', '??', "JetBrains Mono" !important;
  --collapse-icon-color: rgb(158, 158, 158) !important;
  --color-accent: rgb(81, 158, 93) !important;
  --dark: rgb(197, 184, 161) !important;
  --darkgray: rgb(197, 184, 161) !important;
  --divider-color: #333 !important;
  --divider-color-hover: rgb(110, 180, 121) !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px #333, inset 0 0 0 1px #333 !important;
  --embed-border-start: 2px solid rgb(110, 180, 121) !important;
  --file-header-background: rgb(38, 38, 38) !important;
  --file-header-background-focused: rgb(38, 38, 38) !important;
  --file-header-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #2a2a2a !important;
  --flair-color: rgb(197, 184, 161) !important;
  --font-editor: "iA Writer Quattro S", '??', "iA Writer Mono V" !important;
  --font-editor-theme: "iA Writer Mono V" !important;
  --font-interface: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "iA Writer Quattro S" !important;
  --font-mermaid: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', '??', "JetBrains Mono" !important;
  --font-monospace-default: "JetBrains Mono" !important;
  --font-normal-size: 1em !important;
  --font-print: '??', '??', "iA Writer Quattro S", 'Arial' !important;
  --font-small: 0.813em !important;
  --font-smaller: 0.688em !important;
  --font-smallest: 0.625em !important;
  --font-text: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "iA Writer Quattro S" !important;
  --footnote-divider-color: #333 !important;
  --footnote-id-color: rgb(153, 153, 153) !important;
  --footnote-id-color-no-occurrences: rgb(158, 158, 158) !important;
  --footnote-radius: 2px !important;
  --footnote-size: 0.688em !important;
  --graph-line-color: #6f7577 !important;
  --graph-node: rgb(153, 153, 153) !important;
  --graph-node-unresolved: rgb(158, 158, 158) !important;
  --graph-text: rgb(197, 184, 161) !important;
  --gray: rgb(153, 153, 153) !important;
  --green: #b4d273 !important;
  --h1: 1.8em !important;
  --h1-color: rgb(197, 184, 161) !important;
  --h1-weight: 600 !important;
  --h2: 1.55em !important;
  --h2-color: rgb(197, 184, 161) !important;
  --h2-weight: 600 !important;
  --h3: 1.35em !important;
  --h3-color: rgb(197, 184, 161) !important;
  --h3-weight: 550 !important;
  --h4: 1.15em !important;
  --h4-color: rgb(197, 184, 161) !important;
  --h4-weight: 550 !important;
  --h5: 1em !important;
  --h5-color: rgb(197, 184, 161) !important;
  --h5-weight: 550 !important;
  --h6: 0.95em !important;
  --h6-color: rgb(197, 184, 161) !important;
  --h6-weight: 550 !important;
  --headerFont: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(158, 158, 158) !important;
  --highlight: rgba(255, 177, 80, 0.3) !important;
  --hr-color: #333 !important;
  --icon-color: rgb(153, 153, 153) !important;
  --icon-color-focused: rgb(197, 184, 161) !important;
  --icon-color-hover: rgb(153, 153, 153) !important;
  --icon-muted: 0.5 !important;
  --inline-title-color: rgb(197, 184, 161) !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(158, 158, 158) !important;
  --input-height: 32px !important;
  --input-placeholder-color: rgb(158, 158, 158) !important;
  --interactive-accent: rgb(110, 180, 121) !important;
  --interactive-accent-hover: rgb(81, 158, 93) !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --interactive-success: #197300 !important;
  --light: rgb(38, 38, 38) !important;
  --lightgray: rgb(57, 51, 45) !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --link-color-hover: rgb(64, 125, 73) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color-hover: rgb(64, 125, 73) !important;
  --list-marker-color: rgb(158, 158, 158) !important;
  --list-marker-color-hover: rgb(153, 153, 153) !important;
  --max-width: 88% !important;
  --menu-background: rgb(57, 51, 45) !important;
  --menu-border-color: rgb(94, 94, 94) !important;
  --menu-radius: 5px !important;
  --metadata-border-color: #333 !important;
  --metadata-divider-color: #333 !important;
  --metadata-input-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.813em !important;
  --metadata-input-text-color: rgb(197, 184, 161) !important;
  --metadata-label-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.688em !important;
  --metadata-label-text-color: rgb(153, 153, 153) !important;
  --metadata-label-text-color-hover: rgb(153, 153, 153) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(92, 92, 92) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(94, 94, 94) !important;
  --modal-background: rgb(38, 38, 38) !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: rgb(158, 158, 158) !important;
  --nav-collapse-icon-color-collapsed: rgb(158, 158, 158) !important;
  --nav-heading-color: rgb(197, 184, 161) !important;
  --nav-heading-color-collapsed: rgb(158, 158, 158) !important;
  --nav-heading-color-collapsed-hover: rgb(153, 153, 153) !important;
  --nav-heading-color-hover: rgb(197, 184, 161) !important;
  --nav-item-color: rgb(153, 153, 153) !important;
  --nav-item-color-active: rgb(197, 184, 161) !important;
  --nav-item-color-hover: rgb(197, 184, 161) !important;
  --nav-item-color-selected: rgb(197, 184, 161) !important;
  --nav-item-radius: 2px !important;
  --nav-tag-color: rgb(158, 158, 158) !important;
  --nav-tag-color-active: rgb(153, 153, 153) !important;
  --nav-tag-color-hover: rgb(153, 153, 153) !important;
  --nav-tag-radius: 2px !important;
  --normal-weight: 500 !important;
  --orange: #e87d3e !important;
  --pdf-background: rgb(38, 38, 38) !important;
  --pdf-page-background: rgb(38, 38, 38) !important;
  --pdf-shadow: 0 0 0 1px #333 !important;
  --pdf-sidebar-background: rgb(38, 38, 38) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #333 !important;
  --pill-border-color: #333 !important;
  --pill-border-color-hover: rgb(94, 94, 94) !important;
  --pill-color: rgb(153, 153, 153) !important;
  --pill-color-hover: rgb(197, 184, 161) !important;
  --pill-color-remove: rgb(158, 158, 158) !important;
  --pink: #b05279 !important;
  --prompt-background: rgb(38, 38, 38) !important;
  --purple: #9e86c8 !important;
  --radius-l: 10px !important;
  --radius-m: 5px !important;
  --radius-s: 2px !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: rgb(57, 51, 45) !important;
  --ribbon-background-collapsed: rgb(38, 38, 38) !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: rgb(153, 153, 153) !important;
  --search-icon-color: rgb(153, 153, 153) !important;
  --search-result-background: rgb(38, 38, 38) !important;
  --secondary: rgb(81, 158, 93) !important;
  --setting-group-heading-color: rgb(197, 184, 161) !important;
  --setting-items-background: #202020 !important;
  --setting-items-border-color: #333 !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-color: rgb(94, 94, 94) !important;
  --slider-track-background: #333 !important;
  --status-bar-background: rgb(57, 51, 45) !important;
  --status-bar-border-color: #333 !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: rgb(153, 153, 153) !important;
  --suggestion-background: rgb(38, 38, 38) !important;
  --tab-background-active: rgb(38, 38, 38) !important;
  --tab-container-background: rgb(57, 51, 45) !important;
  --tab-divider-color: rgb(94, 94, 94) !important;
  --tab-outline-color: #333 !important;
  --tab-radius: 2px !important;
  --tab-switcher-background: rgb(57, 51, 45) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(57, 51, 45), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(81, 158, 93) !important;
  --tab-text-color: rgb(158, 158, 158) !important;
  --tab-text-color-active: rgb(153, 153, 153) !important;
  --tab-text-color-focused: rgb(153, 153, 153) !important;
  --tab-text-color-focused-active: rgb(153, 153, 153) !important;
  --tab-text-color-focused-active-current: rgb(197, 184, 161) !important;
  --table-add-button-border-color: #333 !important;
  --table-border-color: #333 !important;
  --table-drag-handle-background-active: rgb(110, 180, 121) !important;
  --table-drag-handle-color: rgb(158, 158, 158) !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #333 !important;
  --table-header-color: rgb(197, 184, 161) !important;
  --table-selection-border-color: rgb(110, 180, 121) !important;
  --tag-size: 0.688em !important;
  --tertiary: rgb(64, 125, 73) !important;
  --text-accent-hover: rgb(64, 125, 73) !important;
  --text-error: rgb(230, 60, 60) !important;
  --text-error-hover: #990000 !important;
  --text-faint: rgb(158, 158, 158) !important;
  --text-highlight-bg: rgba(255, 177, 80, 0.3) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: rgb(153, 153, 153) !important;
  --text-normal: rgb(197, 184, 161) !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(23, 48, 77, 0.99) !important;
  --textHighlight: rgba(255, 177, 80, 0.3) !important;
  --theme-accent-d: 46.7% !important;
  --theme-accent-h: 129 !important;
  --theme-accent-l: 46.7% !important;
  --theme-accent-s: 31.9% !important;
  --titleFont: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(57, 51, 45) !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-border-color: #333 !important;
  --titlebar-text-color: rgb(153, 153, 153) !important;
  --titlebar-text-color-focused: rgb(197, 184, 161) !important;
  --vault-profile-color: rgb(197, 184, 161) !important;
  --vault-profile-color-hover: rgb(197, 184, 161) !important;
  --vim-cursor: hsla(
    129,
    32%,
    47%,
    0.8
  ) !important;
  --yellow: #e5b567 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(58, 52, 46);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(38, 38, 38);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(58, 52, 46);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(58, 52, 46);
  border-left-color: rgb(51, 51, 51);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(38, 38, 38);
  color: rgb(197, 184, 161);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 177, 80, 0.3);
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body del {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: line-through rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body p {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "iA Writer Quattro S";
  text-decoration: rgb(166, 138, 249);
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "iA Writer Quattro S";
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body dt {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(158, 158, 158);
  text-decoration: rgb(158, 158, 158);
}

html[saved-theme="dark"] body blockquote {
  font-family: "iA Writer Quattro S";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body table {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
  width: 662px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(197, 184, 161);
  padding-bottom: 2.66667px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 2.66667px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(197, 184, 161);
  padding-bottom: 5.33333px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 5.33333px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(108, 153, 187);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(109, 180, 120);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(109, 180, 120);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(197, 184, 161);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(58, 52, 46);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(197, 184, 161);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.016px;
  border-bottom-right-radius: 26.016px;
  border-top-left-radius: 26.016px;
  border-top-right-radius: 26.016px;
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body h2 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body h3 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body h4 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body h5 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body h6 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(197, 184, 161);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(153, 153, 153);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(58, 52, 46);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(158, 158, 158);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(153, 153, 153);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(58, 52, 46);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(197, 184, 161);
  text-decoration: underline dotted rgb(197, 184, 161);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(108, 153, 187);
  font-family: "??", "??", "JetBrains Mono";
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body sub {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body summary {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body sup {
  color: rgb(197, 184, 161);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-accent: rgb(110, 180, 121) !important;
  --background-modifier-border: rgb(230, 230, 230) !important;
  --background-modifier-border-focus: rgb(194, 194, 194) !important;
  --background-modifier-border-hover: rgb(214, 214, 214) !important;
  --background-modifier-form-field: hsl(
    0,
    0%,
    102%
  ) !important;
  --background-modifier-form-field-highlighted: hsl(
    0,
    0%,
    104%
  ) !important;
  --background-modifier-form-field-hover: hsl(
    0,
    0%,
    102%
  ) !important;
  --background-primary: rgb(252, 245, 228) !important;
  --background-primary-alt: #fcf5e4 !important;
  --background-secondary: rgb(228, 220, 200) !important;
  --background-secondary-alt: #fcf5e4 !important;
  --background-translucent: rgba(255, 255, 255, 0.85) !important;
  --background-transparent: hsla(
    0,
    0%,
    96%,
    0
  ) !important;
  --base-d: 15% !important;
  --base-h: 0 !important;
  --base-l: 96% !important;
  --base-s: 0% !important;
  --bases-cards-background: rgb(252, 245, 228) !important;
  --bases-cards-cover-background: #fcf5e4 !important;
  --bases-cards-font-size: 0.688em !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(230, 230, 230) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(214, 214, 214) !important;
  --bases-embed-border-color: rgb(230, 230, 230) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: rgb(89, 89, 89) !important;
  --bases-group-heading-value-size: 0.688em !important;
  --bases-table-border-color: rgb(230, 230, 230) !important;
  --bases-table-cell-background-active: rgb(252, 245, 228) !important;
  --bases-table-cell-background-disabled: #fcf5e4 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(194, 194, 194) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(110, 180, 121) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-font-size: 0.688em !important;
  --bases-table-group-background: #fcf5e4 !important;
  --bases-table-header-background: rgb(252, 245, 228) !important;
  --bases-table-header-color: rgb(89, 89, 89) !important;
  --bases-table-summary-background: rgb(252, 245, 228) !important;
  --blockquote-border-color: rgb(110, 180, 121) !important;
  --blue: #6c99bb !important;
  --blur-background: color-mix(in srgb, rgb(252, 245, 228) 65%, transparent) linear-gradient(rgb(252, 245, 228), color-mix(in srgb, rgb(252, 245, 228) 65%, transparent)) !important;
  --bodyFont: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 620 !important;
  --border-width-alt: 1px !important;
  --callout-radius: 2px;
  --canvas-background: rgb(252, 245, 228) !important;
  --canvas-card-label-color: rgb(158, 158, 158) !important;
  --canvas-controls-radius: 2px !important;
  --caret-color: rgb(38, 38, 38) !important;
  --checkbox-border-color: rgb(158, 158, 158) !important;
  --checkbox-border-color-hover: rgb(89, 89, 89) !important;
  --checkbox-color: rgb(110, 180, 121) !important;
  --checkbox-color-hover: rgb(81, 158, 93) !important;
  --checkbox-marker-color: rgb(252, 245, 228) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: rgb(89, 89, 89) !important;
  --clickable-icon-radius: 2px !important;
  --code-background: #eee8d5 !important;
  --code-border-color: rgb(230, 230, 230) !important;
  --code-comment: rgb(158, 158, 158) !important;
  --code-normal: #6c99bb !important;
  --code-punctuation: rgb(89, 89, 89) !important;
  --code-radius: 2px !important;
  --code-size: 1em !important;
  --codeFont: '??', '??', "JetBrains Mono" !important;
  --collapse-icon-color: rgb(158, 158, 158) !important;
  --collapse-icon-color-collapsed: rgb(81, 158, 93) !important;
  --color-accent: rgb(81, 158, 93) !important;
  --dark: rgb(38, 38, 38) !important;
  --darkgray: rgb(38, 38, 38) !important;
  --divider-color: rgb(230, 230, 230) !important;
  --divider-color-hover: rgb(110, 180, 121) !important;
  --dropdown-background: #f2f3f5 !important;
  --dropdown-background-hover: #e9e9e9 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(230, 230, 230), inset 0 0 0 1px rgb(230, 230, 230) !important;
  --embed-border-start: 2px solid rgb(110, 180, 121) !important;
  --file-header-background: rgb(252, 245, 228) !important;
  --file-header-background-focused: rgb(252, 245, 228) !important;
  --file-header-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #f2f3f5 !important;
  --flair-color: rgb(38, 38, 38) !important;
  --font-editor: "iA Writer Quattro S", '??', "iA Writer Mono V" !important;
  --font-editor-theme: "iA Writer Mono V" !important;
  --font-interface: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "iA Writer Quattro S" !important;
  --font-mermaid: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', '??', "JetBrains Mono" !important;
  --font-monospace-default: "JetBrains Mono" !important;
  --font-normal-size: 1em !important;
  --font-print: '??', '??', "iA Writer Quattro S", 'Arial' !important;
  --font-small: 0.813em !important;
  --font-smaller: 0.688em !important;
  --font-smallest: 0.625em !important;
  --font-text: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "iA Writer Quattro S" !important;
  --footnote-divider-color: rgb(230, 230, 230) !important;
  --footnote-id-color: rgb(89, 89, 89) !important;
  --footnote-id-color-no-occurrences: rgb(158, 158, 158) !important;
  --footnote-radius: 2px !important;
  --footnote-size: 0.688em !important;
  --graph-line-color: #c0c9ce !important;
  --graph-node: rgb(89, 89, 89) !important;
  --graph-node-focused: rgb(81, 158, 93) !important;
  --graph-node-unresolved: rgb(158, 158, 158) !important;
  --graph-text: rgb(38, 38, 38) !important;
  --gray: rgb(89, 89, 89) !important;
  --green: #b4d273 !important;
  --h1: 1.8em !important;
  --h1-color: rgb(38, 38, 38) !important;
  --h1-weight: 600 !important;
  --h2: 1.55em !important;
  --h2-color: rgb(38, 38, 38) !important;
  --h2-weight: 600 !important;
  --h3: 1.35em !important;
  --h3-color: rgb(38, 38, 38) !important;
  --h3-weight: 550 !important;
  --h4: 1.15em !important;
  --h4-color: rgb(38, 38, 38) !important;
  --h4-weight: 550 !important;
  --h5: 1em !important;
  --h5-color: rgb(38, 38, 38) !important;
  --h5-weight: 550 !important;
  --h6: 0.95em !important;
  --h6-color: rgb(38, 38, 38) !important;
  --h6-weight: 550 !important;
  --headerFont: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(158, 158, 158) !important;
  --highlight: rgba(255, 225, 0, 0.5) !important;
  --hr-color: rgb(230, 230, 230) !important;
  --icon-color: rgb(89, 89, 89) !important;
  --icon-color-active: rgb(81, 158, 93) !important;
  --icon-color-focused: rgb(38, 38, 38) !important;
  --icon-color-hover: rgb(89, 89, 89) !important;
  --icon-hex: 000 !important;
  --icon-muted: 0.5 !important;
  --inline-title-color: rgb(38, 38, 38) !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(158, 158, 158) !important;
  --input-height: 32px !important;
  --input-placeholder-color: rgb(158, 158, 158) !important;
  --interactive-accent: rgb(110, 180, 121) !important;
  --interactive-accent-hover: rgb(81, 158, 93) !important;
  --interactive-accent-rgb: 123, 108, 217 !important;
  --interactive-hover: #e9e9e9 !important;
  --interactive-normal: #f2f3f5 !important;
  --interactive-success: #197300 !important;
  --light: rgb(252, 245, 228) !important;
  --lightgray: rgb(228, 220, 200) !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --link-color: rgb(81, 158, 93) !important;
  --link-color-hover: rgb(64, 125, 73) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(81, 158, 93) !important;
  --link-external-color-hover: rgb(64, 125, 73) !important;
  --link-unresolved-color: rgb(81, 158, 93) !important;
  --list-marker-color: rgb(158, 158, 158) !important;
  --list-marker-color-collapsed: rgb(81, 158, 93) !important;
  --list-marker-color-hover: rgb(89, 89, 89) !important;
  --max-width: 88% !important;
  --menu-background: rgb(228, 220, 200) !important;
  --menu-border-color: rgb(214, 214, 214) !important;
  --menu-radius: 5px !important;
  --metadata-border-color: rgb(230, 230, 230) !important;
  --metadata-divider-color: rgb(230, 230, 230) !important;
  --metadata-input-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.813em !important;
  --metadata-input-text-color: rgb(38, 38, 38) !important;
  --metadata-label-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.688em !important;
  --metadata-label-text-color: rgb(89, 89, 89) !important;
  --metadata-label-text-color-hover: rgb(89, 89, 89) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(194, 194, 194) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(214, 214, 214) !important;
  --modal-background: rgb(252, 245, 228) !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: rgb(158, 158, 158) !important;
  --nav-collapse-icon-color-collapsed: rgb(158, 158, 158) !important;
  --nav-heading-color: rgb(38, 38, 38) !important;
  --nav-heading-color-collapsed: rgb(158, 158, 158) !important;
  --nav-heading-color-collapsed-hover: rgb(89, 89, 89) !important;
  --nav-heading-color-hover: rgb(38, 38, 38) !important;
  --nav-item-color: rgb(89, 89, 89) !important;
  --nav-item-color-active: rgb(38, 38, 38) !important;
  --nav-item-color-highlighted: rgb(81, 158, 93) !important;
  --nav-item-color-hover: rgb(38, 38, 38) !important;
  --nav-item-color-selected: rgb(38, 38, 38) !important;
  --nav-item-radius: 2px !important;
  --nav-tag-color: rgb(158, 158, 158) !important;
  --nav-tag-color-active: rgb(89, 89, 89) !important;
  --nav-tag-color-hover: rgb(89, 89, 89) !important;
  --nav-tag-radius: 2px !important;
  --normal-weight: 500 !important;
  --orange: #e87d3e !important;
  --pdf-background: rgb(252, 245, 228) !important;
  --pdf-page-background: rgb(252, 245, 228) !important;
  --pdf-sidebar-background: rgb(252, 245, 228) !important;
  --pill-border-color: rgb(230, 230, 230) !important;
  --pill-border-color-hover: rgb(214, 214, 214) !important;
  --pill-color: rgb(89, 89, 89) !important;
  --pill-color-hover: rgb(38, 38, 38) !important;
  --pill-color-remove: rgb(158, 158, 158) !important;
  --pill-color-remove-hover: rgb(81, 158, 93) !important;
  --pink: #b05279 !important;
  --prompt-background: rgb(252, 245, 228) !important;
  --purple: #9e86c8 !important;
  --radius-l: 10px !important;
  --radius-m: 5px !important;
  --radius-s: 2px !important;
  --raised-background: color-mix(in srgb, rgb(252, 245, 228) 65%, transparent) linear-gradient(rgb(252, 245, 228), color-mix(in srgb, rgb(252, 245, 228) 65%, transparent)) !important;
  --ribbon-background: rgb(228, 220, 200) !important;
  --ribbon-background-collapsed: rgb(252, 245, 228) !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: rgb(89, 89, 89) !important;
  --search-icon-color: rgb(89, 89, 89) !important;
  --search-result-background: rgb(252, 245, 228) !important;
  --secondary: rgb(81, 158, 93) !important;
  --setting-group-heading-color: rgb(38, 38, 38) !important;
  --setting-items-background: #fcf5e4 !important;
  --setting-items-border-color: rgb(230, 230, 230) !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-color: rgb(214, 214, 214) !important;
  --slider-track-background: rgb(230, 230, 230) !important;
  --status-bar-background: rgb(228, 220, 200) !important;
  --status-bar-border-color: rgb(230, 230, 230) !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: rgb(89, 89, 89) !important;
  --suggestion-background: rgb(252, 245, 228) !important;
  --tab-background-active: rgb(252, 245, 228) !important;
  --tab-container-background: rgb(228, 220, 200) !important;
  --tab-divider-color: rgb(214, 214, 214) !important;
  --tab-outline-color: rgb(230, 230, 230) !important;
  --tab-radius: 2px !important;
  --tab-switcher-background: rgb(228, 220, 200) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(228, 220, 200), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(81, 158, 93) !important;
  --tab-text-color: rgb(158, 158, 158) !important;
  --tab-text-color-active: rgb(89, 89, 89) !important;
  --tab-text-color-focused: rgb(89, 89, 89) !important;
  --tab-text-color-focused-active: rgb(89, 89, 89) !important;
  --tab-text-color-focused-active-current: rgb(38, 38, 38) !important;
  --tab-text-color-focused-highlighted: rgb(81, 158, 93) !important;
  --table-add-button-border-color: rgb(230, 230, 230) !important;
  --table-border-color: rgb(230, 230, 230) !important;
  --table-drag-handle-background-active: rgb(110, 180, 121) !important;
  --table-drag-handle-color: rgb(158, 158, 158) !important;
  --table-drag-handle-color-active: #f2f2f2 !important;
  --table-header-border-color: rgb(230, 230, 230) !important;
  --table-header-color: rgb(38, 38, 38) !important;
  --table-selection-border-color: rgb(110, 180, 121) !important;
  --tag-color: rgb(81, 158, 93) !important;
  --tag-color-hover: rgb(81, 158, 93) !important;
  --tag-size: 0.688em !important;
  --tertiary: rgb(64, 125, 73) !important;
  --text-accent: rgb(81, 158, 93) !important;
  --text-accent-hover: rgb(64, 125, 73) !important;
  --text-faint: rgb(158, 158, 158) !important;
  --text-highlight-bg: rgba(255, 225, 0, 0.5) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: rgb(89, 89, 89) !important;
  --text-normal: rgb(38, 38, 38) !important;
  --text-on-accent: #f2f2f2 !important;
  --text-selection: rgba(204, 230, 255, 0.99) !important;
  --textHighlight: rgba(255, 225, 0, 0.5) !important;
  --theme-accent-d: 46.7% !important;
  --theme-accent-h: 129 !important;
  --theme-accent-l: 46.7% !important;
  --theme-accent-s: 31.9% !important;
  --titleFont: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(228, 220, 200) !important;
  --titlebar-background-focused: #fcf5e4 !important;
  --titlebar-border-color: rgb(230, 230, 230) !important;
  --titlebar-text-color: rgb(89, 89, 89) !important;
  --titlebar-text-color-focused: rgb(38, 38, 38) !important;
  --vault-profile-color: rgb(38, 38, 38) !important;
  --vault-profile-color-hover: rgb(38, 38, 38) !important;
  --vim-cursor: hsla(
    129,
    32%,
    47%,
    0.8
  ) !important;
  --yellow: #e5b567 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(228, 220, 200);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(252, 245, 228);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(228, 220, 200);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(228, 220, 200);
  border-left-color: rgb(230, 230, 230);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(252, 245, 228);
  color: rgb(38, 38, 38);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 225, 0, 0.5);
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body del {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: line-through rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body p {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 89, 89) none 0px;
  text-decoration: rgb(89, 89, 89);
  text-decoration-color: rgb(89, 89, 89);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(81, 157, 92);
  font-family: "iA Writer Quattro S";
  outline: rgb(81, 157, 92) none 0px;
  text-decoration: underline rgb(81, 157, 92);
  text-decoration-color: rgb(81, 157, 92);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(81, 157, 92);
  font-family: "iA Writer Quattro S";
  outline: rgb(81, 157, 92) none 0px;
  text-decoration: rgb(81, 157, 92);
  text-decoration-color: rgb(81, 157, 92);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(81, 157, 92);
  font-family: "iA Writer Quattro S";
  outline: rgb(81, 157, 92) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body dt {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(158, 158, 158);
  text-decoration: rgb(158, 158, 158);
}

html[saved-theme="light"] body blockquote {
  font-family: "iA Writer Quattro S";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body table {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
  width: 662px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(38, 38, 38);
  padding-bottom: 2.66667px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 2.66667px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(38, 38, 38);
  padding-bottom: 5.33333px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 5.33333px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(108, 153, 187);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figcaption {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(252, 245, 228);
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(109, 180, 120);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(109, 180, 120);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(89, 89, 89);
  text-decoration: line-through rgb(89, 89, 89);
  text-decoration-color: rgb(89, 89, 89);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(252, 245, 228);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(228, 220, 200);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.016px;
  border-bottom-right-radius: 26.016px;
  border-top-left-radius: 26.016px;
  border-top-right-radius: 26.016px;
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(81, 157, 92);
}

html[saved-theme="light"] body h1 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body h2 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body h3 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body h4 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body h5 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body h6 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(89, 89, 89);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(89, 89, 89);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(89, 89, 89);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(89, 89, 89);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(228, 220, 200);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 5px;
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(89, 89, 89);
  stroke: rgb(89, 89, 89);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(158, 158, 158);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(89, 89, 89);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(89, 89, 89);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(228, 220, 200);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(38, 38, 38);
  text-decoration: underline dotted rgb(38, 38, 38);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(108, 153, 187);
  font-family: "??", "??", "JetBrains Mono";
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sub {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body summary {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sup {
  color: rgb(38, 38, 38);
}`,
  },
};
