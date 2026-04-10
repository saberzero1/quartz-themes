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
  --background-modifier-border-focus: hsl(
    0,
    0%,
    36%
  ) !important;
  --background-modifier-border-hover: rgb(94, 94, 94) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #197300 !important;
  --background-primary: hsl(0, 0%, 15%) !important;
  --background-primary-alt: #202020 !important;
  --background-secondary: hsl(
    30,
    11.5%,
    20.4%
  ) !important;
  --background-secondary-alt: #000000 !important;
  --base-d: 15% !important;
  --base-h: 0 !important;
  --base-l: 96% !important;
  --base-s: 0% !important;
  --bases-cards-background: hsl(0, 0%, 15%) !important;
  --bases-cards-cover-background: #202020 !important;
  --bases-cards-font-size: 0.688em !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px #333 !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(94, 94, 94) !important;
  --bases-embed-border-color: #333 !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: hsl(0, 0%, 60%) !important;
  --bases-group-heading-value-size: 0.688em !important;
  --bases-table-border-color: #333 !important;
  --bases-table-cell-background-active: hsl(0, 0%, 15%) !important;
  --bases-table-cell-background-disabled: #202020 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(
    0,
    0%,
    36%
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-font-size: 1em !important;
  --bases-table-group-background: #202020 !important;
  --bases-table-header-background: hsl(0, 0%, 15%) !important;
  --bases-table-header-color: hsl(0, 0%, 60%) !important;
  --bases-table-summary-background: hsl(0, 0%, 15%) !important;
  --blockquote-border-color: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --blue: #6c99bb !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --bodyFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 620 !important;
  --border-width-alt: 1px !important;
  --callout-radius: 2px;
  --canvas-background: hsl(0, 0%, 15%) !important;
  --canvas-card-label-color: hsl(0, 0%, 62%) !important;
  --canvas-controls-radius: 2px !important;
  --caret-color: rgb(197, 184, 161) !important;
  --checkbox-border-color: hsl(0, 0%, 62%) !important;
  --checkbox-border-color-hover: hsl(0, 0%, 60%) !important;
  --checkbox-color: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --checkbox-color-hover: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --checkbox-marker-color: hsl(0, 0%, 15%) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: hsl(0, 0%, 60%) !important;
  --clickable-icon-radius: 2px !important;
  --code-background: #202020 !important;
  --code-border-color: #333 !important;
  --code-comment: hsl(0, 0%, 62%) !important;
  --code-normal: #6c99bb !important;
  --code-punctuation: hsl(0, 0%, 60%) !important;
  --code-radius: 2px !important;
  --code-size: 1em !important;
  --codeFont: "JetBrains Mono" !important;
  --collapse-icon-color: hsl(0, 0%, 62%) !important;
  --color-accent: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --dark: rgb(197, 184, 161) !important;
  --darkgray: rgb(197, 184, 161) !important;
  --divider-color: #333 !important;
  --divider-color-hover: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px #333, inset 0 0 0 1px #333 !important;
  --embed-border-start: 2px solid hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --file-header-background: hsl(0, 0%, 15%) !important;
  --file-header-background-focused: hsl(0, 0%, 15%) !important;
  --file-header-font: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #2a2a2a !important;
  --flair-color: rgb(197, 184, 161) !important;
  --font-editor: "iA Writer Quattro S", "iA Writer Mono V" !important;
  --font-editor-theme: "iA Writer Mono V" !important;
  --font-interface: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "iA Writer Quattro S" !important;
  --font-mermaid: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "JetBrains Mono" !important;
  --font-monospace-default: "JetBrains Mono" !important;
  --font-normal-size: 1em !important;
  --font-print: "iA Writer Quattro S", Arial' !important;
  --font-small: 0.813em !important;
  --font-smaller: 0.688em !important;
  --font-smallest: 0.625em !important;
  --font-text: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "iA Writer Quattro S" !important;
  --footnote-divider-color: #333 !important;
  --footnote-id-color: hsl(0, 0%, 60%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 62%) !important;
  --footnote-radius: 2px !important;
  --footnote-size: 0.688em !important;
  --graph-line-color: #6f7577 !important;
  --graph-node: hsl(0, 0%, 60%) !important;
  --graph-node-unresolved: hsl(0, 0%, 62%) !important;
  --graph-text: rgb(197, 184, 161) !important;
  --gray: hsl(0, 0%, 60%) !important;
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
  --headerFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(0, 0%, 62%) !important;
  --highlight: rgba(255, 177, 80, 0.3) !important;
  --hr-color: #333 !important;
  --icon-color: hsl(0, 0%, 60%) !important;
  --icon-color-focused: rgb(197, 184, 161) !important;
  --icon-color-hover: hsl(0, 0%, 60%) !important;
  --icon-muted: 0.5 !important;
  --inline-title-color: rgb(197, 184, 161) !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl(0, 0%, 62%) !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsl(0, 0%, 62%) !important;
  --interactive-accent: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --interactive-accent-hover: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --interactive-success: #197300 !important;
  --light: hsl(0, 0%, 15%) !important;
  --lightgray: hsl(
    30,
    11.5%,
    20.4%
  ) !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --link-color-hover: hsl(
    129,
    31.9%,
    36.7%
  ) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color-hover: hsl(
    129,
    31.9%,
    36.7%
  ) !important;
  --list-marker-color: hsl(0, 0%, 62%) !important;
  --list-marker-color-hover: hsl(0, 0%, 60%) !important;
  --max-width: 88% !important;
  --menu-background: hsl(
    30,
    11.5%,
    20.4%
  ) !important;
  --menu-border-color: rgb(94, 94, 94) !important;
  --menu-radius: 5px !important;
  --metadata-border-color: #333 !important;
  --metadata-divider-color: #333 !important;
  --metadata-input-font: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.813em !important;
  --metadata-input-text-color: rgb(197, 184, 161) !important;
  --metadata-label-font: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.688em !important;
  --metadata-label-text-color: hsl(0, 0%, 60%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 60%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(
    0,
    0%,
    36%
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(94, 94, 94) !important;
  --modal-background: hsl(0, 0%, 15%) !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: hsl(0, 0%, 62%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 62%) !important;
  --nav-heading-color: rgb(197, 184, 161) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 62%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 60%) !important;
  --nav-heading-color-hover: rgb(197, 184, 161) !important;
  --nav-item-color: hsl(0, 0%, 60%) !important;
  --nav-item-color-active: rgb(197, 184, 161) !important;
  --nav-item-color-hover: rgb(197, 184, 161) !important;
  --nav-item-color-selected: rgb(197, 184, 161) !important;
  --nav-item-radius: 2px !important;
  --nav-tag-color: hsl(0, 0%, 62%) !important;
  --nav-tag-color-active: hsl(0, 0%, 60%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 60%) !important;
  --nav-tag-radius: 2px !important;
  --normal-weight: 500 !important;
  --orange: #e87d3e !important;
  --pdf-background: hsl(0, 0%, 15%) !important;
  --pdf-page-background: hsl(0, 0%, 15%) !important;
  --pdf-shadow: 0 0 0 1px #333 !important;
  --pdf-sidebar-background: hsl(0, 0%, 15%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #333 !important;
  --pill-border-color: #333 !important;
  --pill-border-color-hover: rgb(94, 94, 94) !important;
  --pill-color: hsl(0, 0%, 60%) !important;
  --pill-color-hover: rgb(197, 184, 161) !important;
  --pill-color-remove: hsl(0, 0%, 62%) !important;
  --pink: #b05279 !important;
  --prompt-background: hsl(0, 0%, 15%) !important;
  --purple: #9e86c8 !important;
  --radius-l: 10px !important;
  --radius-m: 5px !important;
  --radius-s: 2px !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: hsl(
    30,
    11.5%,
    20.4%
  ) !important;
  --ribbon-background-collapsed: hsl(0, 0%, 15%) !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: hsl(0, 0%, 60%) !important;
  --search-icon-color: hsl(0, 0%, 60%) !important;
  --search-result-background: hsl(0, 0%, 15%) !important;
  --secondary: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --setting-group-heading-color: rgb(197, 184, 161) !important;
  --setting-items-background: #202020 !important;
  --setting-items-border-color: #333 !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-color: rgb(94, 94, 94) !important;
  --slider-track-background: #333 !important;
  --status-bar-background: hsl(
    30,
    11.5%,
    20.4%
  ) !important;
  --status-bar-border-color: #333 !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: hsl(0, 0%, 60%) !important;
  --suggestion-background: hsl(0, 0%, 15%) !important;
  --tab-background-active: hsl(0, 0%, 15%) !important;
  --tab-container-background: hsl(
    30,
    11.5%,
    20.4%
  ) !important;
  --tab-divider-color: rgb(94, 94, 94) !important;
  --tab-outline-color: #333 !important;
  --tab-radius: 2px !important;
  --tab-switcher-background: hsl(
    30,
    11.5%,
    20.4%
  ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(
    30,
    11.5%,
    20.4%
  ), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --tab-text-color: hsl(0, 0%, 62%) !important;
  --tab-text-color-active: hsl(0, 0%, 60%) !important;
  --tab-text-color-focused: hsl(0, 0%, 60%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 60%) !important;
  --tab-text-color-focused-active-current: rgb(197, 184, 161) !important;
  --table-add-button-border-color: #333 !important;
  --table-border-color: #333 !important;
  --table-drag-handle-background-active: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --table-drag-handle-color: hsl(0, 0%, 62%) !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #333 !important;
  --table-header-color: rgb(197, 184, 161) !important;
  --table-selection-border-color: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --tag-size: 0.688em !important;
  --tertiary: hsl(
    129,
    31.9%,
    36.7%
  ) !important;
  --text-accent-hover: hsl(
    129,
    31.9%,
    36.7%
  ) !important;
  --text-error: rgb(230, 60, 60) !important;
  --text-error-hover: #990000 !important;
  --text-faint: hsl(0, 0%, 62%) !important;
  --text-highlight-bg: rgba(255, 177, 80, 0.3) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: hsl(0, 0%, 60%) !important;
  --text-normal: rgb(197, 184, 161) !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(23, 48, 77, 0.99) !important;
  --textHighlight: rgba(255, 177, 80, 0.3) !important;
  --theme-accent-d: 46.7% !important;
  --theme-accent-h: 129 !important;
  --theme-accent-l: 46.7% !important;
  --theme-accent-s: 31.9% !important;
  --titleFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(
    30,
    11.5%,
    20.4%
  ) !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-border-color: #333 !important;
  --titlebar-text-color: hsl(0, 0%, 60%) !important;
  --titlebar-text-color-focused: rgb(197, 184, 161) !important;
  --vault-profile-color: rgb(197, 184, 161) !important;
  --vault-profile-color-hover: rgb(197, 184, 161) !important;
  --vim-cursor: hsla(
    129,
    31.9%,
    46.7%,
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

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(51, 51, 51);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(58, 52, 46);
  border-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 26.016px;
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(153, 153, 153);
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
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 177, 80, 0.3);
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body del {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(158, 158, 158);
  border-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(109, 180, 120);
  border-color: rgb(109, 180, 120);
}

html[saved-theme="dark"] body p {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "iA Writer Quattro S";
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
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
  --callout-color: 2, 122, 255;
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
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
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 22.016px;
  border-bottom-right-radius: 22.016px;
  border-top-left-radius: 22.016px;
  border-top-right-radius: 22.016px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-accent: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --background-modifier-border: hsl(
    0,
    0%,
    90%
  ) !important;
  --background-modifier-border-focus: hsl(
    0,
    0%,
    76%
  ) !important;
  --background-modifier-border-hover: hsl(
    0,
    0%,
    84%
  ) !important;
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
  --background-primary: hsl(
    44,
    79%,
    94%
  ) !important;
  --background-primary-alt: #fcf5e4 !important;
  --background-secondary: hsl(
    42,
    34%,
    84%
  ) !important;
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
  --bases-cards-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --bases-cards-cover-background: #fcf5e4 !important;
  --bases-cards-font-size: 0.688em !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(
    0,
    0%,
    90%
  ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(
    0,
    0%,
    84%
  ) !important;
  --bases-embed-border-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: hsl(0, 0%, 35%) !important;
  --bases-group-heading-value-size: 0.688em !important;
  --bases-table-border-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --bases-table-cell-background-active: hsl(
    44,
    79%,
    94%
  ) !important;
  --bases-table-cell-background-disabled: #fcf5e4 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(
    0,
    0%,
    76%
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-font-size: 1em !important;
  --bases-table-group-background: #fcf5e4 !important;
  --bases-table-header-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --bases-table-header-color: hsl(0, 0%, 35%) !important;
  --bases-table-summary-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --blockquote-border-color: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --blue: #6c99bb !important;
  --blur-background: color-mix(in srgb, hsl(
    44,
    79%,
    94%
  ) 65%, transparent) linear-gradient(hsl(
    44,
    79%,
    94%
  ), color-mix(in srgb, hsl(
    44,
    79%,
    94%
  ) 65%, transparent)) !important;
  --bodyFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 620 !important;
  --border-width-alt: 1px !important;
  --callout-radius: 2px;
  --canvas-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --canvas-card-label-color: hsl(0, 0%, 62%) !important;
  --canvas-controls-radius: 2px !important;
  --caret-color: hsl(0, 0%, 15%) !important;
  --checkbox-border-color: hsl(0, 0%, 62%) !important;
  --checkbox-border-color-hover: hsl(0, 0%, 35%) !important;
  --checkbox-color: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --checkbox-color-hover: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --checkbox-marker-color: hsl(
    44,
    79%,
    94%
  ) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: hsl(0, 0%, 35%) !important;
  --clickable-icon-radius: 2px !important;
  --code-background: #eee8d5 !important;
  --code-border-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --code-comment: hsl(0, 0%, 62%) !important;
  --code-normal: #6c99bb !important;
  --code-punctuation: hsl(0, 0%, 35%) !important;
  --code-radius: 2px !important;
  --code-size: 1em !important;
  --codeFont: "JetBrains Mono" !important;
  --collapse-icon-color: hsl(0, 0%, 62%) !important;
  --collapse-icon-color-collapsed: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --color-accent: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --dark: hsl(0, 0%, 15%) !important;
  --darkgray: hsl(0, 0%, 15%) !important;
  --divider-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --divider-color-hover: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --dropdown-background: #f2f3f5 !important;
  --dropdown-background-hover: #e9e9e9 !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(
    0,
    0%,
    90%
  ), inset 0 0 0 1px hsl(
    0,
    0%,
    90%
  ) !important;
  --embed-border-start: 2px solid hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --file-header-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --file-header-background-focused: hsl(
    44,
    79%,
    94%
  ) !important;
  --file-header-font: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #f2f3f5 !important;
  --flair-color: hsl(0, 0%, 15%) !important;
  --font-editor: "iA Writer Quattro S", "iA Writer Mono V" !important;
  --font-editor-theme: "iA Writer Mono V" !important;
  --font-interface: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "iA Writer Quattro S" !important;
  --font-mermaid: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "JetBrains Mono" !important;
  --font-monospace-default: "JetBrains Mono" !important;
  --font-normal-size: 1em !important;
  --font-print: "iA Writer Quattro S", Arial' !important;
  --font-small: 0.813em !important;
  --font-smaller: 0.688em !important;
  --font-smallest: 0.625em !important;
  --font-text: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "iA Writer Quattro S" !important;
  --footnote-divider-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --footnote-id-color: hsl(0, 0%, 35%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 62%) !important;
  --footnote-radius: 2px !important;
  --footnote-size: 0.688em !important;
  --graph-line-color: #c0c9ce !important;
  --graph-node: hsl(0, 0%, 35%) !important;
  --graph-node-focused: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --graph-node-unresolved: hsl(0, 0%, 62%) !important;
  --graph-text: hsl(0, 0%, 15%) !important;
  --gray: hsl(0, 0%, 35%) !important;
  --green: #b4d273 !important;
  --h1: 1.8em !important;
  --h1-color: hsl(0, 0%, 15%) !important;
  --h1-weight: 600 !important;
  --h2: 1.55em !important;
  --h2-color: hsl(0, 0%, 15%) !important;
  --h2-weight: 600 !important;
  --h3: 1.35em !important;
  --h3-color: hsl(0, 0%, 15%) !important;
  --h3-weight: 550 !important;
  --h4: 1.15em !important;
  --h4-color: hsl(0, 0%, 15%) !important;
  --h4-weight: 550 !important;
  --h5: 1em !important;
  --h5-color: hsl(0, 0%, 15%) !important;
  --h5-weight: 550 !important;
  --h6: 0.95em !important;
  --h6-color: hsl(0, 0%, 15%) !important;
  --h6-weight: 550 !important;
  --headerFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(0, 0%, 62%) !important;
  --highlight: hsla(53, 100%, 50%, 0.5) !important;
  --hr-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --icon-color: hsl(0, 0%, 35%) !important;
  --icon-color-active: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --icon-color-focused: hsl(0, 0%, 15%) !important;
  --icon-color-hover: hsl(0, 0%, 35%) !important;
  --icon-hex: 000 !important;
  --icon-muted: 0.5 !important;
  --inline-title-color: hsl(0, 0%, 15%) !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl(0, 0%, 62%) !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsl(0, 0%, 62%) !important;
  --interactive-accent: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --interactive-accent-hover: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --interactive-accent-rgb: 123, 108, 217 !important;
  --interactive-hover: #e9e9e9 !important;
  --interactive-normal: #f2f3f5 !important;
  --interactive-success: #197300 !important;
  --light: hsl(
    44,
    79%,
    94%
  ) !important;
  --lightgray: hsl(
    42,
    34%,
    84%
  ) !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --link-color: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --link-color-hover: hsl(
    129,
    31.9%,
    36.7%
  ) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --link-external-color-hover: hsl(
    129,
    31.9%,
    36.7%
  ) !important;
  --link-unresolved-color: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --list-marker-color: hsl(0, 0%, 62%) !important;
  --list-marker-color-collapsed: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --list-marker-color-hover: hsl(0, 0%, 35%) !important;
  --max-width: 88% !important;
  --menu-background: hsl(
    42,
    34%,
    84%
  ) !important;
  --menu-border-color: hsl(
    0,
    0%,
    84%
  ) !important;
  --menu-radius: 5px !important;
  --metadata-border-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --metadata-divider-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --metadata-input-font: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.813em !important;
  --metadata-input-text-color: hsl(0, 0%, 15%) !important;
  --metadata-label-font: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.688em !important;
  --metadata-label-text-color: hsl(0, 0%, 35%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 35%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(
    0,
    0%,
    76%
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(
    0,
    0%,
    84%
  ) !important;
  --modal-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: hsl(0, 0%, 62%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 62%) !important;
  --nav-heading-color: hsl(0, 0%, 15%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 62%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 35%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 15%) !important;
  --nav-item-color: hsl(0, 0%, 35%) !important;
  --nav-item-color-active: hsl(0, 0%, 15%) !important;
  --nav-item-color-highlighted: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --nav-item-color-hover: hsl(0, 0%, 15%) !important;
  --nav-item-color-selected: hsl(0, 0%, 15%) !important;
  --nav-item-radius: 2px !important;
  --nav-tag-color: hsl(0, 0%, 62%) !important;
  --nav-tag-color-active: hsl(0, 0%, 35%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 35%) !important;
  --nav-tag-radius: 2px !important;
  --normal-weight: 500 !important;
  --orange: #e87d3e !important;
  --pdf-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --pdf-page-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --pdf-sidebar-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --pill-border-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --pill-border-color-hover: hsl(
    0,
    0%,
    84%
  ) !important;
  --pill-color: hsl(0, 0%, 35%) !important;
  --pill-color-hover: hsl(0, 0%, 15%) !important;
  --pill-color-remove: hsl(0, 0%, 62%) !important;
  --pill-color-remove-hover: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --pink: #b05279 !important;
  --prompt-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --purple: #9e86c8 !important;
  --radius-l: 10px !important;
  --radius-m: 5px !important;
  --radius-s: 2px !important;
  --raised-background: color-mix(in srgb, hsl(
    44,
    79%,
    94%
  ) 65%, transparent) linear-gradient(hsl(
    44,
    79%,
    94%
  ), color-mix(in srgb, hsl(
    44,
    79%,
    94%
  ) 65%, transparent)) !important;
  --ribbon-background: hsl(
    42,
    34%,
    84%
  ) !important;
  --ribbon-background-collapsed: hsl(
    44,
    79%,
    94%
  ) !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: hsl(0, 0%, 35%) !important;
  --search-icon-color: hsl(0, 0%, 35%) !important;
  --search-result-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --secondary: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --setting-group-heading-color: hsl(0, 0%, 15%) !important;
  --setting-items-background: #fcf5e4 !important;
  --setting-items-border-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-color: hsl(
    0,
    0%,
    84%
  ) !important;
  --slider-track-background: hsl(
    0,
    0%,
    90%
  ) !important;
  --status-bar-background: hsl(
    42,
    34%,
    84%
  ) !important;
  --status-bar-border-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: hsl(0, 0%, 35%) !important;
  --suggestion-background: hsl(
    44,
    79%,
    94%
  ) !important;
  --tab-background-active: hsl(
    44,
    79%,
    94%
  ) !important;
  --tab-container-background: hsl(
    42,
    34%,
    84%
  ) !important;
  --tab-divider-color: hsl(
    0,
    0%,
    84%
  ) !important;
  --tab-outline-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --tab-radius: 2px !important;
  --tab-switcher-background: hsl(
    42,
    34%,
    84%
  ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(
    42,
    34%,
    84%
  ), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --tab-text-color: hsl(0, 0%, 62%) !important;
  --tab-text-color-active: hsl(0, 0%, 35%) !important;
  --tab-text-color-focused: hsl(0, 0%, 35%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 35%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 15%) !important;
  --tab-text-color-focused-highlighted: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --table-add-button-border-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --table-border-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --table-drag-handle-background-active: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --table-drag-handle-color: hsl(0, 0%, 62%) !important;
  --table-drag-handle-color-active: #f2f2f2 !important;
  --table-header-border-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --table-header-color: hsl(0, 0%, 15%) !important;
  --table-selection-border-color: hsl(
    129,
    31.9%,
    56.7%
  ) !important;
  --tag-color: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --tag-color-hover: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --tag-size: 0.688em !important;
  --tertiary: hsl(
    129,
    31.9%,
    36.7%
  ) !important;
  --text-accent: hsl(
    129,
    31.9%,
    46.7%
  ) !important;
  --text-accent-hover: hsl(
    129,
    31.9%,
    36.7%
  ) !important;
  --text-faint: hsl(0, 0%, 62%) !important;
  --text-highlight-bg: hsla(53, 100%, 50%, 0.5) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: hsl(0, 0%, 35%) !important;
  --text-normal: hsl(0, 0%, 15%) !important;
  --text-on-accent: #f2f2f2 !important;
  --text-selection: rgba(204, 230, 255, 0.99) !important;
  --textHighlight: hsla(53, 100%, 50%, 0.5) !important;
  --theme-accent-d: 46.7% !important;
  --theme-accent-h: 129 !important;
  --theme-accent-l: 46.7% !important;
  --theme-accent-s: 31.9% !important;
  --titleFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(
    42,
    34%,
    84%
  ) !important;
  --titlebar-background-focused: #fcf5e4 !important;
  --titlebar-border-color: hsl(
    0,
    0%,
    90%
  ) !important;
  --titlebar-text-color: hsl(0, 0%, 35%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 15%) !important;
  --vault-profile-color: hsl(0, 0%, 15%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 15%) !important;
  --vim-cursor: hsla(
    129,
    31.9%,
    46.7%,
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

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(230, 230, 230);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(252, 245, 228);
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(89, 89, 89);
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 26.016px;
  color: rgb(81, 157, 92);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(89, 89, 89);
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
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 225, 0, 0.5);
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body del {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(158, 158, 158);
  border-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(109, 180, 120);
  border-color: rgb(109, 180, 120);
}

html[saved-theme="light"] body p {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 89, 89) none 0px;
  text-decoration-color: rgb(89, 89, 89);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(81, 157, 92);
  font-family: "iA Writer Quattro S";
  outline: rgb(81, 157, 92) none 0px;
  text-decoration-color: rgb(81, 157, 92);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(81, 157, 92);
  font-family: "iA Writer Quattro S";
  outline: rgb(81, 157, 92) none 0px;
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
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
  --callout-color: 8, 109, 221;
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
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
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 22.016px;
  border-bottom-right-radius: 22.016px;
  border-top-left-radius: 22.016px;
  border-top-right-radius: 22.016px;
  color: rgb(81, 157, 92);
}`,
  },
};
