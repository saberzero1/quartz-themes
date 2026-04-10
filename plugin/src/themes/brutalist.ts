import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "brutalist",
    modes: ["dark", "light"],
    variations: [],
    fonts: [
      "ai-writer-duo",
      "ai-writer-quattro",
      "ai-writer-mono",
      "libre-baskerville",
      "literata",
      "marcellus",
      "montserrat",
      "sen",
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0 !important;
  --accent-l: 75% !important;
  --accent-s: 0% !important;
  --background-modifier-active-hover: hsla(0, 0%, 75%, 0.1) !important;
  --background-modifier-border: transparent !important;
  --background-modifier-border-focus: #FFFFFF !important;
  --background-modifier-form-field: #323232 !important;
  --background-modifier-form-field-hover: #323232 !important;
  --background-primary: #3c3c3c !important;
  --background-primary-alt: #323232 !important;
  --background-secondary: #323232 !important;
  --background-secondary-alt: #323232 !important;
  --bases-cards-background: #3c3c3c !important;
  --bases-cards-cover-background: #323232 !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #B3B3B3 !important;
  --bases-table-border-color: #a0a0a0 !important;
  --bases-table-cell-background-active: #3c3c3c !important;
  --bases-table-cell-background-disabled: #323232 !important;
  --bases-table-cell-background-selected: hsla(0, 0%, 75%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #FFFFFF !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #cdcdcd !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-group-background: #323232 !important;
  --bases-table-header-background: #3c3c3c !important;
  --bases-table-header-color: #B3B3B3 !important;
  --bases-table-summary-background: #3c3c3c !important;
  --bases-text-color: #a0a0a0 !important;
  --blockquote-border-color: #cdcdcd !important;
  --blur-background: color-mix(in srgb, #323232 65%, transparent) linear-gradient(#323232, color-mix(in srgb, #323232 65%, transparent)) !important;
  --body-font-color-dark: #a0a0a0 !important;
  --body-font-color-light: #000000 !important;
  --bodyFont: 'Lora', serif !important;
  --button-bg-dynamic: #000000 !important;
  --button-bg-hover-dynamic: #000000 !important;
  --button-radius: 0 !important;
  --button-text-dynamic: #a0a0a0 !important;
  --button-text-hover-dynamic: #ffffff !important;
  --calendar-dot-bg: #feb43f !important;
  --calendar-header-color: #B3B3B3 !important;
  --calendar-today-color: #feb43f !important;
  --callout-abstract: 109, 163, 174;
  --callout-border-width: 1px;
  --callout-example: 166, 117, 176;
  --callout-fail: 209, 109, 103;
  --callout-info: 93, 148, 166;
  --callout-note: 96, 138, 176;
  --callout-quote: 119, 119, 119;
  --callout-radius: 0;
  --callout-tip: 122, 163, 125;
  --callout-warning: 212, 163, 85;
  --canvas-background: #3c3c3c !important;
  --canvas-card-label-color: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-border-color: #c0c0c0 !important;
  --caret-color: #a0a0a0 !important;
  --checkbox-border-color: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --checkbox-border-color-hover: #B3B3B3 !important;
  --checkbox-border-width: 1px !important;
  --checkbox-color: #cdcdcd !important;
  --checkbox-color-hover: color-mix(in srgb, #B3B3B3, white 40%) !important;
  --checkbox-marker-color: #3c3c3c !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #B3B3B3 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #1f1f1f !important;
  --code-border-color: transparent !important;
  --code-comment: #B3B3B3 !important;
  --code-normal: #a0a0a0 !important;
  --code-punctuation: #B3B3B3 !important;
  --code-radius: 0px !important;
  --codeFont: 'Noto Sans Mono', monospace !important;
  --collapse-icon-color: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --collapse-icon-color-collapsed: #cdcdcd !important;
  --color-accent: hsl(0, 0%, 75%) !important;
  --color-accent-1: hsl(-3, 0%, 86.25%) !important;
  --color-accent-2: hsl(-5, 0%, 96.75%) !important;
  --color-accent-hsl: 0, 0%, 75% !important;
  --cta-bg-dynamic: #cdcdcd !important;
  --cta-bg-hover-dynamic: #E0E0E0 !important;
  --cta-text-dynamic: #000000 !important;
  --dark: #a0a0a0 !important;
  --dark-accent-custom: #cdcdcd !important;
  --darkgray: #a0a0a0 !important;
  --dashboard-banner-height: 600px !important;
  --dashboard-banner-offset: 150px !important;
  --dashboard-banner-opacity: 1.0 !important;
  --dashboard-border-width: 1px !important;
  --dashboard-card-transparency: 20% !important;
  --dashboard-col-width: 300px !important;
  --dashboard-gap: 4px !important;
  --divider-color: transparent !important;
  --divider-color-hover: #cdcdcd !important;
  --drag-bg: #000000 !important;
  --drag-border: none !important;
  --drag-border-width: 3px !important;
  --dropdown-background: #323232 !important;
  --editor-width: 600px !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --embed-border-start: 2px solid #cdcdcd !important;
  --file-header-background: #3c3c3c !important;
  --file-header-background-focused: #3c3c3c !important;
  --file-header-font: 'Marcellus', serif !important;
  --flair-background: #323232 !important;
  --flair-color: #a0a0a0 !important;
  --font-default: 'Marcellus', serif !important;
  --font-interface: 'Marcellus', serif !important;
  --font-interface-override: 'Marcellus', serif !important;
  --font-mermaid: 'Lora', serif !important;
  --font-monospace: 'Noto Sans Mono', monospace !important;
  --font-monospace-override: 'Noto Sans Mono', monospace !important;
  --font-print: Lora, serif, Lora, serif, Arial' !important;
  --font-text: 'Lora', serif !important;
  --font-text-destructive: #ff4b4b !important;
  --font-text-override: 'Lora', serif !important;
  --font-text-theme: 'Lora', serif !important;
  --font-ui: 'Marcellus', serif !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: #B3B3B3 !important;
  --footnote-id-color-no-occurrences: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --footnote-line-height: 1.6 !important;
  --footnote-radius: 0 !important;
  --graph-line: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --graph-node: #B3B3B3 !important;
  --graph-node-focused: #cdcdcd !important;
  --graph-node-unresolved: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --graph-text: #a0a0a0 !important;
  --gray: #B3B3B3 !important;
  --h1-color: #cdcdcd !important;
  --h2-color: #cdcdcd !important;
  --h3-color: #cdcdcd !important;
  --h4-color: #cdcdcd !important;
  --h5-color: #cdcdcd !important;
  --h5-line-height: 1.6 !important;
  --h6-color: #cdcdcd !important;
  --h6-line-height: 1.6 !important;
  --headerFont: 'Lora', serif !important;
  --heading-formatting: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --heading-spacing: 1.5em !important;
  --highlight: color-mix(in srgb, #495ca1, transparent 55%) !important;
  --hr-color: transparent !important;
  --icon-color: #B3B3B3 !important;
  --icon-color-active: #cdcdcd !important;
  --icon-color-focused: #a0a0a0 !important;
  --icon-color-hover: color-mix(in srgb, #B3B3B3, white 40%) !important;
  --icon-size: 20px !important;
  --indentation-guide-color: color-mix(in srgb, #B3B3B3, transparent 10%) !important;
  --indentation-guide-color-active: #B3B3B3 !important;
  --inline-title-align: center !important;
  --inline-title-color: #cdcdcd !important;
  --inline-title-size: 3em !important;
  --input-bg-std: #000000 !important;
  --input-border: transparent !important;
  --input-border-width: 0px !important;
  --input-date-separator: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --input-placeholder-color: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --input-radius: 0 !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: #cdcdcd !important;
  --interactive-accent-hover: color-mix(in srgb, #B3B3B3, white 40%) !important;
  --interactive-accent-hsl: 0, 0%, 75% !important;
  --interactive-normal: #323232 !important;
  --light: #3c3c3c !important;
  --light-accent-custom: #000000 !important;
  --lightgray: #323232 !important;
  --line-height: 1.6 !important;
  --line-height-normal: 1.6 !important;
  --link-color: #e2e2e2 !important;
  --link-color-hover: color-mix(in srgb, #B3B3B3, white 40%) !important;
  --link-external-color: #e2e2e2 !important;
  --link-external-color-hover: color-mix(in srgb, #B3B3B3, white 40%) !important;
  --link-unresolved-color: #cdcdcd !important;
  --link-unresolved-decoration-color: hsla(0, 0%, 75%, 0.3) !important;
  --list-marker-color: color-mix(in srgb, #a0a0a0, white 25%) !important;
  --list-marker-color-collapsed: #cdcdcd !important;
  --list-marker-color-hover: #B3B3B3 !important;
  --menu-background: #323232 !important;
  --menu-custom-bg: #262626 !important;
  --menu-radius: 0 !important;
  --menu-shadow: none !important;
  --metadata-border-color: transparent !important;
  --metadata-content-radius: 8px !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-font: 'Marcellus', serif !important;
  --metadata-input-text-color: #a0a0a0 !important;
  --metadata-label-font: 'Marcellus', serif !important;
  --metadata-label-text-color: #B3B3B3 !important;
  --metadata-label-text-color-hover: #B3B3B3 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #FFFFFF !important;
  --mobile-active-bg: #505050 !important;
  --mobile-drawer-bg: #3c3c3c !important;
  --mobile-drawer-color-dark: #3c3c3c !important;
  --mobile-drawer-color-light: #323232 !important;
  --mobile-navbar-border-color-dark: #323232 !important;
  --mobile-navbar-border-color-light: #323232 !important;
  --mobile-navbar-border-style-dark: solid !important;
  --mobile-navbar-border-style-light: solid !important;
  --mobile-navbar-border-width-dark: 0px !important;
  --mobile-navbar-border-width-light: 0px !important;
  --mobile-navbar-color-dark: #323232 !important;
  --mobile-navbar-color-light: #323232 !important;
  --mobile-navbar-opacity-dark: 0.7 !important;
  --mobile-navbar-opacity-light: 0.7 !important;
  --mobile-navbar-radius: 20px !important;
  --modal-background: #323232 !important;
  --modal-radius: 0 !important;
  --nav-collapse-icon-color: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --nav-collapse-icon-color-collapsed: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --nav-guide-border-width: 1px !important;
  --nav-heading-color: #a0a0a0 !important;
  --nav-heading-color-collapsed: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --nav-heading-color-collapsed-hover: #B3B3B3 !important;
  --nav-heading-color-hover: #a0a0a0 !important;
  --nav-indentation-guide-color: color-mix(in srgb, #B3B3B3, transparent 10%) !important;
  --nav-item-background-selected: hsla(0, 0%, 75%, 0.15) !important;
  --nav-item-color: #B3B3B3 !important;
  --nav-item-color-active: #a0a0a0 !important;
  --nav-item-color-highlighted: #cdcdcd !important;
  --nav-item-color-hover: #a0a0a0 !important;
  --nav-item-color-selected: #a0a0a0 !important;
  --nav-item-radius: 0 !important;
  --nav-tag-color: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --nav-tag-color-active: #B3B3B3 !important;
  --nav-tag-color-hover: #B3B3B3 !important;
  --nav-tag-radius: 0 !important;
  --new-tab-hover-bg: color-mix(in srgb, #BFBFBF, transparent 85%) !important;
  --new-tab-hover-text: #ffffff !important;
  --pdf-background: #3c3c3c !important;
  --pdf-page-background: #3c3c3c !important;
  --pdf-shadow: 0 0 0 1px transparent !important;
  --pdf-sidebar-background: #3c3c3c !important;
  --pdf-thumbnail-shadow: 0 0 0 1px transparent !important;
  --pill-border-color: transparent !important;
  --pill-color: #B3B3B3 !important;
  --pill-color-hover: #a0a0a0 !important;
  --pill-color-remove: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --pill-color-remove-hover: #cdcdcd !important;
  --prompt-background: #323232 !important;
  --prompt-border-radius: 0 !important;
  --quote-opening-modifier: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --radius-l: 0 !important;
  --radius-m: 0 !important;
  --radius-s: 0 !important;
  --radius-xl: 0 !important;
  --raised-background: color-mix(in srgb, #323232 65%, transparent) linear-gradient(#323232, color-mix(in srgb, #323232 65%, transparent)) !important;
  --ribbon-background: #323232 !important;
  --ribbon-background-collapsed: #3c3c3c !important;
  --scrollbar-active-thumb-bg: color-mix(in srgb, #B3B3B3, transparent 80%) !important;
  --scrollbar-radius: 0px !important;
  --scrollbar-thumb-bg: color-mix(in srgb, #B3B3B3, transparent 85%) !important;
  --search-clear-button-color: #B3B3B3 !important;
  --search-icon-color: #B3B3B3 !important;
  --search-result-background: #3c3c3c !important;
  --secondary: #cdcdcd !important;
  --setting-group-heading-color: #a0a0a0 !important;
  --setting-items-background: #323232 !important;
  --setting-items-border-color: transparent !important;
  --setting-items-radius: 0 !important;
  --settings-bg-color: #3c3c3c !important;
  --settings-border-color: #6a6a6a !important;
  --settings-border-width: 0px !important;
  --settings-icon-fill: #B3B3B3 !important;
  --shadow-checkbox-inset: inset 0 0 0 2px #3c3c3c !important;
  --shadow-floating-card: none !important;
  --shadow-focus-inset: inset 0 0 0 1px #a0a0a0 !important;
  --shadow-focus-ring: 0 0 0 2px #cdcdcd !important;
  --shadow-s: none !important;
  --slider-track-background: #ffffff !important;
  --status-bar-active-bg: #798ccf !important;
  --status-bar-background: #323232 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0 !important;
  --status-bar-text-color: #B3B3B3 !important;
  --suggestion-background: #3c3c3c !important;
  --suggestion-item-border-radius: 0 !important;
  --suggestion-radius: 0 !important;
  --surface-highlight: #262626 !important;
  --surface-highlight-dark: #262626 !important;
  --surface-highlight-light: #d6d6d6 !important;
  --tab-active-bg-sidebar: color-mix(in srgb, #ffffff, transparent 95%) !important;
  --tab-background-active: #3c3c3c !important;
  --tab-container-background: #323232 !important;
  --tab-curve: 0 !important;
  --tab-hover-bg-doc: #262626 !important;
  --tab-hover-bg-ui: color-mix(in srgb, #B3B3B3, transparent 90%) !important;
  --tab-hover-text-ui: #B3B3B3 !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-switcher-background: #323232 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #323232, transparent) !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 0%, 75%) !important;
  --tab-text-color: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --tab-text-color-active: #B3B3B3 !important;
  --tab-text-color-focused: #B3B3B3 !important;
  --tab-text-color-focused-active: #B3B3B3 !important;
  --tab-text-color-focused-active-current: #a0a0a0 !important;
  --tab-text-color-focused-highlighted: #cdcdcd !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: #a0a0a0 !important;
  --table-drag-handle-background-active: #cdcdcd !important;
  --table-drag-handle-color: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --table-drag-handle-color-active: #323232 !important;
  --table-header-border-color: #a0a0a0 !important;
  --table-header-color: #a0a0a0 !important;
  --table-selection: hsla(0, 0%, 75%, 0.1) !important;
  --table-selection-border-color: #cdcdcd !important;
  --table-selection-border-radius: 0 !important;
  --tag-background: color-mix(in srgb, #cdcdcd, transparent 80%) !important;
  --tag-background-hover: #000000 !important;
  --tag-border-color: #cdcdcd !important;
  --tag-border-color-hover: hsla(0, 0%, 75%, 0.15) !important;
  --tag-color: #a0a0a0 !important;
  --tag-color-hover: #cdcdcd !important;
  --tag-radius: 0 !important;
  --tertiary: color-mix(in srgb, #B3B3B3, white 40%) !important;
  --text-accent: #cdcdcd !important;
  --text-accent-hover: color-mix(in srgb, #B3B3B3, white 40%) !important;
  --text-align-mode: left !important;
  --text-faint: color-mix(in srgb, #B3B3B3, transparent 30%) !important;
  --text-highlight-bg: color-mix(in srgb, #495ca1, transparent 55%) !important;
  --text-muted: #B3B3B3 !important;
  --text-normal: #a0a0a0 !important;
  --text-on-accent: #323232 !important;
  --text-selection: rgba(200, 200, 200, 0.15) !important;
  --textHighlight: color-mix(in srgb, #495ca1, transparent 55%) !important;
  --titleFont: 'Lora', serif !important;
  --titlebar-background: #323232 !important;
  --titlebar-background-focused: #323232 !important;
  --titlebar-border-color: transparent !important;
  --titlebar-text-color: #B3B3B3 !important;
  --titlebar-text-color-focused: #a0a0a0 !important;
  --toggle-on-color: #5f6a93 !important;
  --toggle-thumb-radius: 50% !important;
  --toggle-track-radius: 0 !important;
  --ui-font-color-dark: #B3B3B3 !important;
  --ui-font-color-light: #222222 !important;
  --vault-profile-color: #a0a0a0 !important;
  --vault-profile-color-hover: #a0a0a0 !important;
  --vertical-tab-active-color: #B3B3B3 !important;
  --vertical-tab-header-color: #B3B3B3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(50, 50, 50);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(60, 60, 60);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(50, 50, 50);
  border-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: color(srgb 0.803922 0.803922 0.803922 / 0.2);
  border-radius: 0px;
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(50, 50, 50);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(50, 50, 50);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(60, 60, 60);
  color: rgb(160, 160, 160);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(160, 160, 160);
  font-family: Lora, serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(160, 160, 160);
  font-family: Lora, serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(160, 160, 160);
  font-family: Lora, serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(160, 160, 160);
  font-family: Lora, serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.286275 0.360784 0.631373 / 0.45);
  color: rgb(160, 160, 160);
  font-family: Lora, serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body del {
  color: rgb(160, 160, 160);
  font-family: Lora, serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(205, 205, 205);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(205, 205, 205);
  border-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body p {
  font-family: Marcellus, serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(226, 226, 226);
  font-family: Lora, serif;
  outline: rgb(226, 226, 226) none 0px;
  text-decoration-color: rgb(226, 226, 226);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(226, 226, 226);
  font-family: Lora, serif;
  outline: rgb(226, 226, 226) none 0px;
  text-decoration-color: rgb(226, 226, 226);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(205, 205, 205);
  font-family: Lora, serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration: underline rgba(191, 191, 191, 0.3);
  text-decoration-color: rgba(191, 191, 191, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body dt {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: color(srgb 0.701961 0.701961 0.701961 / 0.7);
}

html[saved-theme="dark"] body blockquote {
  font-family: Lora, serif;
  padding-bottom: 1px;
  padding-top: 1px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body table {
  color: rgb(160, 160, 160);
  font-family: Lora, serif;
  width: 562px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
  font-family: "Noto Sans Mono", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
  font-family: "Noto Sans Mono", monospace;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(160, 160, 160);
  font-family: Lora, serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(50, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Lora, serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Lora, serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 109, 163, 174;
  background-color: rgba(109, 163, 174, 0.15);
  border-bottom-color: rgba(109, 163, 174, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(109, 163, 174);
  border-left-width: 4px;
  border-right-color: rgba(109, 163, 174, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(109, 163, 174, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 209, 109, 103;
  background-color: rgba(209, 109, 103, 0.15);
  border-bottom-color: rgba(209, 109, 103, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(209, 109, 103);
  border-left-width: 4px;
  border-right-color: rgba(209, 109, 103, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(209, 109, 103, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 209, 109, 103;
  background-color: rgba(209, 109, 103, 0.15);
  border-bottom-color: rgba(209, 109, 103, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(209, 109, 103);
  border-left-width: 4px;
  border-right-color: rgba(209, 109, 103, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(209, 109, 103, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 166, 117, 176;
  background-color: rgba(166, 117, 176, 0.15);
  border-bottom-color: rgba(166, 117, 176, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(166, 117, 176);
  border-left-width: 4px;
  border-right-color: rgba(166, 117, 176, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(166, 117, 176, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 209, 109, 103;
  background-color: rgba(209, 109, 103, 0.15);
  border-bottom-color: rgba(209, 109, 103, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(209, 109, 103);
  border-left-width: 4px;
  border-right-color: rgba(209, 109, 103, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(209, 109, 103, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 93, 148, 166;
  background-color: rgba(93, 148, 166, 0.15);
  border-bottom-color: rgba(93, 148, 166, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(93, 148, 166);
  border-left-width: 4px;
  border-right-color: rgba(93, 148, 166, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(93, 148, 166, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 96, 138, 176;
  background-color: rgba(96, 138, 176, 0.15);
  border-bottom-color: rgba(96, 138, 176, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(96, 138, 176);
  border-left-width: 4px;
  border-right-color: rgba(96, 138, 176, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(96, 138, 176, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 212, 163, 85;
  background-color: rgba(212, 163, 85, 0.15);
  border-bottom-color: rgba(212, 163, 85, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 163, 85);
  border-left-width: 4px;
  border-right-color: rgba(212, 163, 85, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(212, 163, 85, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 119, 119, 119;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(119, 119, 119, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(119, 119, 119);
  border-left-width: 4px;
  border-right-color: rgba(119, 119, 119, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(119, 119, 119, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 122, 163, 125;
  background-color: rgba(122, 163, 125, 0.15);
  border-bottom-color: rgba(122, 163, 125, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(122, 163, 125);
  border-left-width: 4px;
  border-right-color: rgba(122, 163, 125, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(122, 163, 125, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 122, 163, 125;
  background-color: rgba(122, 163, 125, 0.15);
  border-bottom-color: rgba(122, 163, 125, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(122, 163, 125);
  border-left-width: 4px;
  border-right-color: rgba(122, 163, 125, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(122, 163, 125, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 212, 163, 85;
  background-color: rgba(212, 163, 85, 0.15);
  border-bottom-color: rgba(212, 163, 85, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 163, 85);
  border-left-width: 4px;
  border-right-color: rgba(212, 163, 85, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(212, 163, 85, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 212, 163, 85;
  background-color: rgba(212, 163, 85, 0.15);
  border-bottom-color: rgba(212, 163, 85, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 163, 85);
  border-left-width: 4px;
  border-right-color: rgba(212, 163, 85, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(212, 163, 85, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="banner"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(160, 160, 160);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(50, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(160, 160, 160);
  font-family: Lora, serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.803922 0.803922 0.803922 / 0.2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body h1 {
  color: rgb(179, 179, 179);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(179, 179, 179);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(179, 179, 179);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(179, 179, 179);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(179, 179, 179);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(179, 179, 179);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(179, 179, 179);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 96, 138, 176;
  border-bottom-color: rgba(96, 138, 176, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(96, 138, 176);
  border-left-width: 4px;
  border-right-color: rgba(96, 138, 176, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(96, 138, 176, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: color(srgb 0.701961 0.701961 0.701961 / 0.9);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(160, 160, 160);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(50, 50, 50);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(160, 160, 160);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(160, 160, 160);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 160, 160);
  font-family: Marcellus, serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(160, 160, 160);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: color(srgb 0.701961 0.701961 0.701961 / 0.7);
  font-family: Marcellus, serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(179, 179, 179);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
  font-family: Marcellus, serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
  font-family: "Noto Sans Mono", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body sub {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body summary {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body sup {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: color(srgb 0.803922 0.803922 0.803922 / 0.2);
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 0 !important;
  --accent-l: 28% !important;
  --accent-s: 0% !important;
  --background-modifier-active-hover: hsla(0, 0%, 28%, 0.1) !important;
  --background-modifier-border: transparent !important;
  --background-modifier-border-focus: #1A3319 !important;
  --background-modifier-form-field: #B0B0B0 !important;
  --background-modifier-form-field-hover: #B0B0B0 !important;
  --background-primary: #C5C5C5 !important;
  --background-primary-alt: #B0B0B0 !important;
  --background-secondary: #B0B0B0 !important;
  --background-secondary-alt: #B0B0B0 !important;
  --bases-cards-background: #C5C5C5 !important;
  --bases-cards-cover-background: #B0B0B0 !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #222222 !important;
  --bases-table-border-color: #000000 !important;
  --bases-table-cell-background-active: #C5C5C5 !important;
  --bases-table-cell-background-disabled: #B0B0B0 !important;
  --bases-table-cell-background-selected: hsla(0, 0%, 28%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #1A3319 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #000000 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-group-background: #B0B0B0 !important;
  --bases-table-header-background: #C5C5C5 !important;
  --bases-table-header-color: #222222 !important;
  --bases-table-summary-background: #C5C5C5 !important;
  --bases-text-color: #000000 !important;
  --blockquote-border-color: #000000 !important;
  --blur-background: color-mix(in srgb, #C5C5C5 65%, transparent) linear-gradient(#C5C5C5, color-mix(in srgb, #C5C5C5 65%, transparent)) !important;
  --body-font-color-dark: #a0a0a0 !important;
  --body-font-color-light: #000000 !important;
  --bodyFont: 'Lora', serif !important;
  --button-bg-dynamic: #d0d0d0 !important;
  --button-bg-hover-dynamic: #ffffff !important;
  --button-radius: 0 !important;
  --button-text-dynamic: #000000 !important;
  --button-text-hover-dynamic: #000000 !important;
  --calendar-dot-bg: #d10000 !important;
  --calendar-header-color: #222222 !important;
  --calendar-today-color: #d10000 !important;
  --callout-abstract: 88, 139, 150;
  --callout-border-width: 1px;
  --callout-example: 143, 94, 153;
  --callout-fail: 186, 84, 78;
  --callout-info: 74, 130, 148;
  --callout-note: 84, 122, 155;
  --callout-quote: 136, 136, 136;
  --callout-radius: 0;
  --callout-tip: 99, 138, 102;
  --callout-warning: 191, 140, 59;
  --canvas-background: #C5C5C5 !important;
  --canvas-card-label-color: color-mix(in srgb, #222222, transparent 30%) !important;
  --canvas-color-arrow: #000000 !important;
  --canvas-color-edge: #000000 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-dot-pattern: color-mix(in srgb, #222222, transparent 70%) !important;
  --canvas-ink-light: #222222 !important;
  --canvas-node-border-color: #232323 !important;
  --caret-color: #000000 !important;
  --checkbox-border-color: color-mix(in srgb, #222222, transparent 30%) !important;
  --checkbox-border-color-hover: #222222 !important;
  --checkbox-border-width: 1px !important;
  --checkbox-color: #000000 !important;
  --checkbox-color-hover: #000000 !important;
  --checkbox-marker-color: #C5C5C5 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #222222 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #e1e1e1 !important;
  --code-border-color: transparent !important;
  --code-comment: #222222 !important;
  --code-normal: #000000 !important;
  --code-punctuation: #222222 !important;
  --code-radius: 0px !important;
  --codeFont: 'Noto Sans Mono', monospace !important;
  --collapse-icon-color: color-mix(in srgb, #222222, transparent 30%) !important;
  --collapse-icon-color-collapsed: #000000 !important;
  --color-accent: hsl(0, 0%, 28%) !important;
  --color-accent-1: hsl(-1, 0%, 30.1%) !important;
  --color-accent-2: hsl(-3, 0%, 32.2%) !important;
  --color-accent-hsl: 0, 0%, 28% !important;
  --cta-bg-dynamic: #000000 !important;
  --cta-bg-hover-dynamic: #000000 !important;
  --cta-text-dynamic: #ffffff !important;
  --dark: #000000 !important;
  --dark-accent-custom: #cdcdcd !important;
  --darkgray: #000000 !important;
  --dashboard-banner-height: 600px !important;
  --dashboard-banner-offset: 150px !important;
  --dashboard-banner-opacity: 1.0 !important;
  --dashboard-border-width: 1px !important;
  --dashboard-card-transparency: 20% !important;
  --dashboard-col-width: 300px !important;
  --dashboard-gap: 4px !important;
  --divider-color: transparent !important;
  --divider-color-hover: #000000 !important;
  --drag-bg: #ffffff !important;
  --drag-border: none !important;
  --drag-border-width: 3px !important;
  --dropdown-background: #B0B0B0 !important;
  --editor-width: 600px !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --embed-border-start: 2px solid #000000 !important;
  --file-header-background: #C5C5C5 !important;
  --file-header-background-focused: #C5C5C5 !important;
  --file-header-font: 'Marcellus', serif !important;
  --flair-background: #B0B0B0 !important;
  --flair-color: #000000 !important;
  --font-default: 'Marcellus', serif !important;
  --font-interface: 'Marcellus', serif !important;
  --font-interface-override: 'Marcellus', serif !important;
  --font-mermaid: 'Lora', serif !important;
  --font-monospace: 'Noto Sans Mono', monospace !important;
  --font-monospace-override: 'Noto Sans Mono', monospace !important;
  --font-print: Lora, serif, Lora, serif, Arial' !important;
  --font-text: 'Lora', serif !important;
  --font-text-destructive: #ff4b4b !important;
  --font-text-override: 'Lora', serif !important;
  --font-text-theme: 'Lora', serif !important;
  --font-ui: 'Marcellus', serif !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: #222222 !important;
  --footnote-id-color-no-occurrences: color-mix(in srgb, #222222, transparent 30%) !important;
  --footnote-line-height: 1.6 !important;
  --footnote-radius: 0 !important;
  --graph-line: color-mix(in srgb, #222222, transparent 30%) !important;
  --graph-node: #222222 !important;
  --graph-node-focused: #000000 !important;
  --graph-node-unresolved: color-mix(in srgb, #222222, transparent 30%) !important;
  --graph-text: #000000 !important;
  --gray: #222222 !important;
  --h1-color: #000000 !important;
  --h2-color: #000000 !important;
  --h3-color: #000000 !important;
  --h4-color: #000000 !important;
  --h5-color: #000000 !important;
  --h5-line-height: 1.6 !important;
  --h6-color: #000000 !important;
  --h6-line-height: 1.6 !important;
  --headerFont: 'Lora', serif !important;
  --heading-formatting: color-mix(in srgb, #222222, transparent 30%) !important;
  --heading-spacing: 1.5em !important;
  --highlight: color-mix(in srgb, #ff7700, transparent 55%) !important;
  --hr-color: transparent !important;
  --icon-color: #222222 !important;
  --icon-color-active: #000000 !important;
  --icon-color-focused: #000000 !important;
  --icon-color-hover: #000000 !important;
  --icon-size: 20px !important;
  --indentation-guide-color: #000000 !important;
  --indentation-guide-color-active: #000000 !important;
  --inline-title-align: center !important;
  --inline-title-color: #000000 !important;
  --inline-title-size: 3em !important;
  --input-bg-std: #cdcdcd !important;
  --input-border: transparent !important;
  --input-border-width: 0px !important;
  --input-date-separator: color-mix(in srgb, #222222, transparent 30%) !important;
  --input-placeholder-color: color-mix(in srgb, #222222, transparent 30%) !important;
  --input-radius: 0 !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: #000000 !important;
  --interactive-accent-hover: #000000 !important;
  --interactive-accent-hsl: 0, 0%, 28% !important;
  --interactive-normal: #B0B0B0 !important;
  --light: #C5C5C5 !important;
  --light-accent-custom: #000000 !important;
  --lightgray: #B0B0B0 !important;
  --line-height: 1.6 !important;
  --line-height-normal: 1.6 !important;
  --link-color: #505050 !important;
  --link-color-hover: #000000 !important;
  --link-external-color: #505050 !important;
  --link-external-color-hover: #000000 !important;
  --link-unresolved-color: #000000 !important;
  --link-unresolved-decoration-color: hsla(0, 0%, 28%, 0.3) !important;
  --list-marker-color: #000000 !important;
  --list-marker-color-collapsed: #000000 !important;
  --list-marker-color-hover: #222222 !important;
  --menu-background: #B0B0B0 !important;
  --menu-custom-bg: #d6d6d6 !important;
  --menu-radius: 0 !important;
  --menu-shadow: none !important;
  --metadata-border-color: transparent !important;
  --metadata-content-radius: 8px !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-font: 'Marcellus', serif !important;
  --metadata-input-text-color: #000000 !important;
  --metadata-label-font: 'Marcellus', serif !important;
  --metadata-label-text-color: #222222 !important;
  --metadata-label-text-color-hover: #222222 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #1A3319 !important;
  --mobile-active-bg: #d6d6d6 !important;
  --mobile-drawer-bg: #B0B0B0 !important;
  --mobile-drawer-color-dark: #C5C5C5 !important;
  --mobile-drawer-color-light: #B0B0B0 !important;
  --mobile-navbar-border-color-dark: #B0B0B0 !important;
  --mobile-navbar-border-color-light: #B0B0B0 !important;
  --mobile-navbar-border-style-dark: solid !important;
  --mobile-navbar-border-style-light: solid !important;
  --mobile-navbar-border-width-dark: 0px !important;
  --mobile-navbar-border-width-light: 0px !important;
  --mobile-navbar-color-dark: #B0B0B0 !important;
  --mobile-navbar-color-light: #B0B0B0 !important;
  --mobile-navbar-opacity-dark: 0.7 !important;
  --mobile-navbar-opacity-light: 0.7 !important;
  --mobile-navbar-radius: 20px !important;
  --modal-background: #B0B0B0 !important;
  --modal-radius: 0 !important;
  --nav-collapse-icon-color: color-mix(in srgb, #222222, transparent 30%) !important;
  --nav-collapse-icon-color-collapsed: color-mix(in srgb, #222222, transparent 30%) !important;
  --nav-guide-border-width: 1px !important;
  --nav-heading-color: #000000 !important;
  --nav-heading-color-collapsed: color-mix(in srgb, #222222, transparent 30%) !important;
  --nav-heading-color-collapsed-hover: #222222 !important;
  --nav-heading-color-hover: #000000 !important;
  --nav-indentation-guide-color: #000000 !important;
  --nav-item-background-selected: hsla(0, 0%, 28%, 0.15) !important;
  --nav-item-color: #222222 !important;
  --nav-item-color-active: #000000 !important;
  --nav-item-color-highlighted: #000000 !important;
  --nav-item-color-hover: #000000 !important;
  --nav-item-color-selected: #000000 !important;
  --nav-item-radius: 0 !important;
  --nav-tag-color: color-mix(in srgb, #222222, transparent 30%) !important;
  --nav-tag-color-active: #222222 !important;
  --nav-tag-color-hover: #222222 !important;
  --nav-tag-radius: 0 !important;
  --new-tab-hover-bg: color-mix(in srgb, #505050, transparent 90%) !important;
  --new-tab-hover-text: #000000 !important;
  --pdf-background: #C5C5C5 !important;
  --pdf-page-background: #C5C5C5 !important;
  --pdf-sidebar-background: #C5C5C5 !important;
  --pill-border-color: transparent !important;
  --pill-color: #222222 !important;
  --pill-color-hover: #000000 !important;
  --pill-color-remove: color-mix(in srgb, #222222, transparent 30%) !important;
  --pill-color-remove-hover: #000000 !important;
  --prompt-background: #B0B0B0 !important;
  --prompt-border-radius: 0 !important;
  --quote-opening-modifier: color-mix(in srgb, #222222, transparent 30%) !important;
  --radius-l: 0 !important;
  --radius-m: 0 !important;
  --radius-s: 0 !important;
  --radius-xl: 0 !important;
  --raised-background: color-mix(in srgb, #C5C5C5 65%, transparent) linear-gradient(#C5C5C5, color-mix(in srgb, #C5C5C5 65%, transparent)) !important;
  --ribbon-background: #B0B0B0 !important;
  --ribbon-background-collapsed: #C5C5C5 !important;
  --scrollbar-active-thumb-bg: color-mix(in srgb, #222222, transparent 80%) !important;
  --scrollbar-radius: 0px !important;
  --scrollbar-thumb-bg: color-mix(in srgb, #222222, transparent 85%) !important;
  --search-clear-button-color: #222222 !important;
  --search-icon-color: #222222 !important;
  --search-result-background: #C5C5C5 !important;
  --secondary: #000000 !important;
  --setting-group-heading-color: #000000 !important;
  --setting-items-background: #B0B0B0 !important;
  --setting-items-border-color: transparent !important;
  --setting-items-radius: 0 !important;
  --settings-bg-color: #B0B0B0 !important;
  --settings-border-color: #000000 !important;
  --settings-border-width: 0px !important;
  --settings-icon-fill: #222222 !important;
  --shadow-checkbox-inset: inset 0 0 0 2px #C5C5C5 !important;
  --shadow-floating-card: none !important;
  --shadow-focus-inset: inset 0 0 0 1px #000000 !important;
  --shadow-focus-ring: 0 0 0 2px #000000 !important;
  --shadow-s: none !important;
  --slider-track-background: #ffffff !important;
  --status-bar-active-bg: #ff7700 !important;
  --status-bar-background: #B0B0B0 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0 !important;
  --status-bar-text-color: #222222 !important;
  --suggestion-background: #C5C5C5 !important;
  --suggestion-item-border-radius: 0 !important;
  --suggestion-radius: 0 !important;
  --surface-highlight: #d6d6d6 !important;
  --surface-highlight-dark: #262626 !important;
  --surface-highlight-light: #d6d6d6 !important;
  --tab-active-bg-sidebar: color-mix(in srgb, #FFFFFF, transparent 60%) !important;
  --tab-background-active: #C5C5C5 !important;
  --tab-container-background: #B0B0B0 !important;
  --tab-curve: 0 !important;
  --tab-hover-bg-doc: #d6d6d6 !important;
  --tab-hover-bg-ui: color-mix(in srgb, #222222, transparent 90%) !important;
  --tab-hover-text-ui: #222222 !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-switcher-background: #B0B0B0 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #B0B0B0, transparent) !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 0%, 28%) !important;
  --tab-text-color: color-mix(in srgb, #222222, transparent 30%) !important;
  --tab-text-color-active: #222222 !important;
  --tab-text-color-focused: #222222 !important;
  --tab-text-color-focused-active: #222222 !important;
  --tab-text-color-focused-active-current: #000000 !important;
  --tab-text-color-focused-highlighted: #000000 !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: #000000 !important;
  --table-drag-handle-background-active: #000000 !important;
  --table-drag-handle-color: color-mix(in srgb, #222222, transparent 30%) !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #000000 !important;
  --table-header-color: #000000 !important;
  --table-selection: hsla(0, 0%, 28%, 0.1) !important;
  --table-selection-border-color: #000000 !important;
  --table-selection-border-radius: 0 !important;
  --tag-background: color-mix(in srgb, #222222, transparent 90%) !important;
  --tag-background-hover: #d6d6d6 !important;
  --tag-border-color: #000000 !important;
  --tag-border-color-hover: hsla(0, 0%, 28%, 0.15) !important;
  --tag-color: #000000 !important;
  --tag-color-hover: #000000 !important;
  --tag-radius: 0 !important;
  --tertiary: #000000 !important;
  --text-accent: #000000 !important;
  --text-accent-hover: #000000 !important;
  --text-align-mode: left !important;
  --text-faint: color-mix(in srgb, #222222, transparent 30%) !important;
  --text-highlight-bg: color-mix(in srgb, #ff7700, transparent 55%) !important;
  --text-muted: #222222 !important;
  --text-normal: #000000 !important;
  --text-on-accent: #ffffff !important;
  --text-selection: rgba(120, 120, 120, 0.2) !important;
  --textHighlight: color-mix(in srgb, #ff7700, transparent 55%) !important;
  --titleFont: 'Lora', serif !important;
  --titlebar-background: #B0B0B0 !important;
  --titlebar-background-focused: #B0B0B0 !important;
  --titlebar-border-color: transparent !important;
  --titlebar-text-color: #222222 !important;
  --titlebar-text-color-focused: #000000 !important;
  --toggle-on-color: #ff7700 !important;
  --toggle-thumb-radius: 50% !important;
  --toggle-track-radius: 0 !important;
  --ui-font-color-dark: #B3B3B3 !important;
  --ui-font-color-light: #222222 !important;
  --vault-profile-color: #000000 !important;
  --vault-profile-color-hover: #000000 !important;
  --vertical-tab-active-color: #222222 !important;
  --vertical-tab-header-color: #222222 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(176, 176, 176);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(197, 197, 197);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(35, 35, 35);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(35, 35, 35);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(197, 197, 197);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(176, 176, 176);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(176, 176, 176);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(197, 197, 197);
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  font-family: Lora, serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  font-family: Lora, serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  font-family: Lora, serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  font-family: Lora, serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 1 0.466667 0 / 0.45);
  color: rgb(0, 0, 0);
  font-family: Lora, serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  font-family: Lora, serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h1.article-title {
  font-weight: 700;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(34, 34, 34);
  font-family: Marcellus, serif;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration-color: rgb(34, 34, 34);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(80, 80, 80);
  font-family: Lora, serif;
  outline: rgb(80, 80, 80) none 0px;
  text-decoration-color: rgb(80, 80, 80);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(80, 80, 80);
  font-family: Lora, serif;
  outline: rgb(80, 80, 80) none 0px;
  text-decoration-color: rgb(80, 80, 80);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(0, 0, 0);
  font-family: Lora, serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: underline rgba(71, 71, 71, 0.3);
  text-decoration-color: rgba(71, 71, 71, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body dt {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: color(srgb 0.133333 0.133333 0.133333 / 0.7);
}

html[saved-theme="light"] body blockquote {
  font-family: Lora, serif;
  padding-bottom: 1px;
  padding-top: 1px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
  font-family: Lora, serif;
  width: 562px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "Noto Sans Mono", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "Noto Sans Mono", monospace;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
  font-family: Lora, serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(176, 176, 176);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Lora, serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Lora, serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(35, 35, 35);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(35, 35, 35);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 88, 139, 150;
  background-color: rgba(88, 139, 150, 0.15);
  border-bottom-color: rgba(88, 139, 150, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(88, 139, 150);
  border-left-width: 4px;
  border-right-color: rgba(88, 139, 150, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(88, 139, 150, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 186, 84, 78;
  background-color: rgba(186, 84, 78, 0.15);
  border-bottom-color: rgba(186, 84, 78, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(186, 84, 78);
  border-left-width: 4px;
  border-right-color: rgba(186, 84, 78, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(186, 84, 78, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 186, 84, 78;
  background-color: rgba(186, 84, 78, 0.15);
  border-bottom-color: rgba(186, 84, 78, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(186, 84, 78);
  border-left-width: 4px;
  border-right-color: rgba(186, 84, 78, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(186, 84, 78, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 143, 94, 153;
  background-color: rgba(143, 94, 153, 0.15);
  border-bottom-color: rgba(143, 94, 153, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(143, 94, 153);
  border-left-width: 4px;
  border-right-color: rgba(143, 94, 153, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(143, 94, 153, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 186, 84, 78;
  background-color: rgba(186, 84, 78, 0.15);
  border-bottom-color: rgba(186, 84, 78, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(186, 84, 78);
  border-left-width: 4px;
  border-right-color: rgba(186, 84, 78, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(186, 84, 78, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 74, 130, 148;
  background-color: rgba(74, 130, 148, 0.15);
  border-bottom-color: rgba(74, 130, 148, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(74, 130, 148);
  border-left-width: 4px;
  border-right-color: rgba(74, 130, 148, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(74, 130, 148, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 84, 122, 155;
  background-color: rgba(84, 122, 155, 0.15);
  border-bottom-color: rgba(84, 122, 155, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(84, 122, 155);
  border-left-width: 4px;
  border-right-color: rgba(84, 122, 155, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(84, 122, 155, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 191, 140, 59;
  background-color: rgba(191, 140, 59, 0.15);
  border-bottom-color: rgba(191, 140, 59, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 140, 59);
  border-left-width: 4px;
  border-right-color: rgba(191, 140, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(191, 140, 59, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 136, 136, 136;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(136, 136, 136, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 4px;
  border-right-color: rgba(136, 136, 136, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(136, 136, 136, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 99, 138, 102;
  background-color: rgba(99, 138, 102, 0.15);
  border-bottom-color: rgba(99, 138, 102, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(99, 138, 102);
  border-left-width: 4px;
  border-right-color: rgba(99, 138, 102, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(99, 138, 102, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 99, 138, 102;
  background-color: rgba(99, 138, 102, 0.15);
  border-bottom-color: rgba(99, 138, 102, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(99, 138, 102);
  border-left-width: 4px;
  border-right-color: rgba(99, 138, 102, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(99, 138, 102, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 191, 140, 59;
  background-color: rgba(191, 140, 59, 0.15);
  border-bottom-color: rgba(191, 140, 59, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 140, 59);
  border-left-width: 4px;
  border-right-color: rgba(191, 140, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(191, 140, 59, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 191, 140, 59;
  background-color: rgba(191, 140, 59, 0.15);
  border-bottom-color: rgba(191, 140, 59, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 140, 59);
  border-left-width: 4px;
  border-right-color: rgba(191, 140, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(191, 140, 59, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="banner"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgb(205, 205, 205);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(0, 0, 0);
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(176, 176, 176);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: Lora, serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(205, 205, 205);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body h1 {
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body h2 {
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body h3 {
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body h4 {
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body h5 {
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body h6 {
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 84, 122, 155;
  border-bottom-color: rgba(84, 122, 155, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(84, 122, 155);
  border-left-width: 4px;
  border-right-color: rgba(84, 122, 155, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(84, 122, 155, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(0, 0, 0);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(0, 0, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(34, 34, 34);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(176, 176, 176);
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: Marcellus, serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: color(srgb 0.133333 0.133333 0.133333 / 0.7);
  font-family: Marcellus, serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(176, 176, 176);
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: Marcellus, serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "Noto Sans Mono", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}`,
  },
};
