import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "things-3",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["formular"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color: #4d94f7 !important;
  --accent-h: 213 !important;
  --accent-l: 70% !important;
  --accent-s: 100% !important;
  --anim-motion-jumpy: cubic-bezier(.58,.53,.57,1.16) !important;
  --background-modifier-active-hover: #5c9aff !important;
  --background-modifier-border: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-error: #f83366 !important;
  --background-modifier-error-hover: #f83366 !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.04) !important;
  --background-primary: #262626 !important;
  --background-primary-alt: #2f2f2f !important;
  --background-secondary: #1a1a1a !important;
  --background-secondary-alt: #1c1c1c !important;
  --bases-cards-background: #262626 !important;
  --bases-cards-border-width: 0.5px !important;
  --bases-cards-cover-background: #2f2f2f !important;
  --bases-cards-radius: 18px !important;
  --bases-cards-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2) !important;
  --bases-embed-border-color: rgba(0, 0, 0, 0.2) !important;
  --bases-embed-border-radius: 10px !important;
  --bases-group-heading-property-color: #c0c0c0 !important;
  --bases-group-heading-value-weight: 500 !important;
  --bases-header-border-width: 0 0 0.5px 0 !important;
  --bases-table-border-color: rgba(0, 0, 0, 0.2) !important;
  --bases-table-cell-background-active: #262626 !important;
  --bases-table-cell-background-disabled: #2f2f2f !important;
  --bases-table-cell-background-selected: hsla(213, 100%, 70%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4d94f7 !important;
  --bases-table-column-border-width: 0.5px !important;
  --bases-table-container-border-radius: 10px !important;
  --bases-table-container-border-width: 0.5px !important;
  --bases-table-group-background: #2f2f2f !important;
  --bases-table-header-background: #262626 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.04) !important;
  --bases-table-header-color: #c0c0c0 !important;
  --bases-table-row-border-width: 0.5px !important;
  --bases-table-summary-background: #262626 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.04) !important;
  --blockquote-background-color: rgba(128, 128, 128, 0.07) !important;
  --blockquote-border-color: #4d94f7 !important;
  --blur-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent)) !important;
  --border-width: 0.5px !important;
  --button-radius: 26px !important;
  --callout-radius: 10px;
  --canvas-background: #262626 !important;
  --canvas-controls-radius: 10px !important;
  --checkbox-border-color: rgba(70, 70, 70, 0.9) !important;
  --checkbox-border-color-hover: #c0c0c0 !important;
  --checkbox-color: #4d94f7 !important;
  --checkbox-color-hover: hsl(213, 80%, 59.5%) !important;
  --checkbox-marker-color: #262626 !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: #8a919b !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 26px !important;
  --code-background: #3B3B3B !important;
  --code-border-color: rgba(0, 0, 0, 0.2) !important;
  --code-bracket-background: rgba(255, 255, 255, 0.04) !important;
  --code-function: #ffd500 !important;
  --code-operator: #f83366 !important;
  --code-property: #54ada4 !important;
  --code-punctuation: #c0c0c0 !important;
  --code-radius: 10px !important;
  --code-tag: #f83366 !important;
  --collapse-icon-color-collapsed: hsl(210, 102%, 80.5%) !important;
  --color-accent: #4d94f7 !important;
  --color-accent-1: hsl(210, 102%, 80.5%) !important;
  --color-accent-2: hsl(213, 80%, 59.5%) !important;
  --color-accent-hsl: 213, 100%, 70% !important;
  --color-blue: #23abf2 !important;
  --color-cyan: #54ada4 !important;
  --color-grey: #818893 !important;
  --color-red: #f83366 !important;
  --color-red-trans: rgba(255, 83, 131, 0.3) !important;
  --color-yellow: #ffd500 !important;
  --dark: #c0c0c0 !important;
  --darkgray: #c0c0c0 !important;
  --div-color: rgba(70, 70, 70, 0.9) !important;
  --divider-color: rgba(0, 0, 0, 0.05) !important;
  --divider-color-hover: #4d94f7 !important;
  --dnc-stroke: 1.95px !important;
  --dropdown-background: rgba(70, 70, 70, 0.9) !important;
  --dropdown-background-hover: rgba(100, 115, 120, 0.1) !important;
  --element-shadow: 0 0 20px rgba(0, 0, 0, 0.1) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.2) !important;
  --embed-border-start: 2px solid #4d94f7 !important;
  --embed-padding: 0px !important;
  --file-header-background: #262626 !important;
  --file-header-background-focused: #262626 !important;
  --file-header-border: 0.5px solid transparent !important;
  --flair-background: #1a1a1a !important;
  --font-bold: 600 !important;
  --font-semibold: 500 !important;
  --footnote-divider-color: #1a1a1a !important;
  --footnote-divider-width: 0.5px !important;
  --footnote-id-color: #c0c0c0 !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.04) !important;
  --footnote-radius: 10px !important;
  --graph-node: #c0c0c0 !important;
  --graph-node-attachment: #ffd500 !important;
  --graph-node-focused: hsl(210, 102%, 80.5%) !important;
  --gray: #c0c0c0 !important;
  --heading-spacing: 3.75rem !important;
  --highlight: rgba(255, 255, 255, 0.04) !important;
  --hr-color: rgba(0, 0, 0, 0.2) !important;
  --icon-color: #818893 !important;
  --icon-color-active: hsl(210, 102%, 80.5%) !important;
  --icon-color-hover: #c0c0c0 !important;
  --icon-l-stroke-width: 1.5px !important;
  --icon-stroke: 1.5px !important;
  --indentation-guide-width: 0.5px !important;
  --indentation-guide-width-active: 0.5px !important;
  --input-border-width: 0.5px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: #4d94f7 !important;
  --interactive-accent-hover: hsl(213, 80%, 59.5%) !important;
  --interactive-accent-hsl: 213, 100%, 70% !important;
  --interactive-hover: rgba(100, 115, 120, 0.1) !important;
  --interactive-normal: #1a1a1a !important;
  --light: #262626 !important;
  --lightgray: #1a1a1a !important;
  --link-color: hsl(210, 102%, 80.5%) !important;
  --link-color-hover: hsl(213, 80%, 59.5%) !important;
  --link-external-color: hsl(210, 102%, 80.5%) !important;
  --link-external-color-hover: hsl(213, 80%, 59.5%) !important;
  --link-unresolved-color: hsl(210, 102%, 80.5%) !important;
  --link-unresolved-decoration-color: hsla(213, 100%, 70%, 0.3) !important;
  --list-marker-color-collapsed: hsl(210, 102%, 80.5%) !important;
  --list-marker-color-hover: #c0c0c0 !important;
  --list-spacing: 0em !important;
  --menu-background: #1a1a1a !important;
  --menu-border-width: 0.5px !important;
  --menu-radius: 18px !important;
  --metadata-border-color: rgba(0, 0, 0, 0.2) !important;
  --metadata-divider-color: #1a1a1a !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.04) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.04) !important;
  --metadata-label-text-color: #c0c0c0 !important;
  --metadata-label-text-color-hover: #c0c0c0 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.04) !important;
  --metadata-property-box-shadow: none !important;
  --metadata-property-box-shadow-hover: 0 0 0 0.5px #3f3f3f !important;
  --mobile-glass-border: color-mix(in srgb, rgb(255, 255, 255) 15%, transparent) !important;
  --modal-background: color-mix(in srgb, #1c1c1c 95%, transparent) !important;
  --modal-border-width: 0.5px !important;
  --modal-radius: 26px !important;
  --nav-heading-color-collapsed-hover: #c0c0c0 !important;
  --nav-indentation-guide-width: 0.5px !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.04) !important;
  --nav-item-background-hover: none !important;
  --nav-item-background-selected: hsla(213, 100%, 70%, 0.15) !important;
  --nav-item-color: #c0c0c0 !important;
  --nav-item-color-highlighted: hsl(210, 102%, 80.5%) !important;
  --nav-item-radius: 10px !important;
  --nav-tag-color-active: #c0c0c0 !important;
  --nav-tag-color-hover: #c0c0c0 !important;
  --nav-tag-radius: 10px !important;
  --nav-tag-weight: 500 !important;
  --p-spacing: 1.5rem !important;
  --pdf-background: #262626 !important;
  --pdf-page-background: #262626 !important;
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2) !important;
  --pdf-sidebar-background: #262626 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2) !important;
  --pill-background: rgb(50, 50, 50) !important;
  --pill-border-color: rgba(0, 0, 0, 0.2) !important;
  --pill-color: #c0c0c0 !important;
  --pill-color-remove-hover: hsl(210, 102%, 80.5%) !important;
  --prompt-background: #262626 !important;
  --prompt-border-width: 0.5px !important;
  --properties-background: rgb(35, 35, 35) !important;
  --radius-l: 26px !important;
  --radius-m: 18px !important;
  --radius-s: 10px !important;
  --raised-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent)) !important;
  --ribbon-background: #1a1a1a !important;
  --ribbon-background-collapsed: #262626 !important;
  --scrollbar-radius: 26px !important;
  --search-clear-button-color: #c0c0c0 !important;
  --search-icon-color: #c0c0c0 !important;
  --search-result-background: #262626 !important;
  --secondary: hsl(210, 102%, 80.5%) !important;
  --selected-item: #286bbd !important;
  --setting-group-heading-weight: 500 !important;
  --setting-items-background: #2f2f2f !important;
  --setting-items-border-color: rgba(0, 0, 0, 0.2) !important;
  --setting-items-radius: 26px !important;
  --slider-thumb-border-width: 0.5px !important;
  --slider-track-background: rgba(0, 0, 0, 0.2) !important;
  --status-bar-background: #1a1a1a !important;
  --status-bar-border-color: rgba(0, 0, 0, 0.05) !important;
  --status-bar-border-width: 0.5px 0 0 0.5px !important;
  --status-bar-radius: 18px 0 0 0 !important;
  --status-bar-text-color: #c0c0c0 !important;
  --statusbar-glass-bg: color-mix(in srgb, #262626 35%, transparent) !important;
  --statusbar-glass-border: rgba(100, 100, 100, 0.1) !important;
  --statusbar-glass-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
  --suggestion-background: #262626 !important;
  --sync-avatar-color-1: #f83366 !important;
  --sync-avatar-color-3: #ffd500 !important;
  --sync-avatar-color-5: #54ada4 !important;
  --sync-avatar-color-6: #23abf2 !important;
  --tab-background-active: #262626 !important;
  --tab-container-background: #1a1a1a !important;
  --tab-curve: 0px !important;
  --tab-outline-color: rgba(0, 0, 0, 0.05) !important;
  --tab-radius: 18px !important;
  --tab-radius-active: 12px 12px 0px 0px !important;
  --tab-stacked-pane-width: 1200px !important;
  --tab-switcher-background: #1a1a1a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1a1a, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #4d94f7 !important;
  --tab-text-color-active: #c0c0c0 !important;
  --tab-text-color-focused: #c0c0c0 !important;
  --tab-text-color-focused-active: #c0c0c0 !important;
  --tab-text-color-focused-highlighted: hsl(210, 102%, 80.5%) !important;
  --table-add-button-border-color: rgba(0, 0, 0, 0.2) !important;
  --table-border-color: rgba(0, 0, 0, 0.2) !important;
  --table-drag-handle-background-active: #4d94f7 !important;
  --table-drag-handle-color-active: #1f1f1f !important;
  --table-header-border-color: rgba(0, 0, 0, 0.2) !important;
  --table-selection: hsla(213, 100%, 70%, 0.1) !important;
  --table-selection-border-color: #4d94f7 !important;
  --tag-background: hsla(213, 100%, 70%, 0.1) !important;
  --tag-background-hover: hsla(213, 100%, 70%, 0.2) !important;
  --tag-border-color: hsla(213, 100%, 70%, 0.15) !important;
  --tag-border-color-hover: hsla(213, 100%, 70%, 0.15) !important;
  --tag-color: #f1f1f1 !important;
  --tag-color-hover: hsl(210, 102%, 80.5%) !important;
  --tertiary: hsl(213, 80%, 59.5%) !important;
  --text-accent: hsl(210, 102%, 80.5%) !important;
  --text-accent-hover: hsl(213, 80%, 59.5%) !important;
  --text-error: #f83366 !important;
  --text-extreme: #ffffff !important;
  --text-muted: #c0c0c0 !important;
  --text-on-accent: #1f1f1f !important;
  --text-selection: hsla(213, 100%, 70%, 0.33) !important;
  --textHighlight: rgba(255, 255, 255, 0.04) !important;
  --titlebar-background: #1a1a1a !important;
  --titlebar-background-focused: #1a1a1a !important;
  --titlebar-border-color: rgba(0, 0, 0, 0.2) !important;
  --titlebar-text-color: #c0c0c0 !important;
  --titlebar-text-weight: 600 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 26, 26);
  border-left-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(38, 38, 38);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(192, 192, 192);
  outline: rgb(192, 192, 192) none 0px;
  text-decoration-color: rgb(192, 192, 192);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(77, 148, 247);
  outline: rgb(77, 148, 247) none 0px;
  text-decoration-color: rgb(77, 148, 247);
  transition: opacity 0.25s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(77, 148, 247);
  outline: rgb(77, 148, 247) none 0px;
  text-decoration-color: rgb(77, 148, 247);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(77, 148, 247);
  outline: rgb(77, 148, 247) none 0px;
  text-decoration-color: rgb(77, 148, 247);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgba(128, 128, 128, 0.07);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="dark"] body td {
  border-bottom-color: rgba(70, 70, 70, 0.9);
  border-left-color: rgba(70, 70, 70, 0.9);
  border-right-color: rgba(70, 70, 70, 0.9);
  border-top-color: rgba(70, 70, 70, 0.9);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(70, 70, 70, 0.9);
  border-left-color: rgba(70, 70, 70, 0.9);
  border-right-color: rgba(70, 70, 70, 0.9);
  border-top-color: rgba(70, 70, 70, 0.9);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(59, 59, 59);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(59, 59, 59);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-family: "SF Mono", Menlo, monospace;
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(255, 213, 0);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 213, 0);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 213, 0);
  border-left-color: rgb(255, 213, 0);
  border-right-color: rgb(255, 213, 0);
  border-top-color: rgb(255, 213, 0);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(59, 59, 59);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(59, 59, 59);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    images: `html[saved-theme="dark"] body img {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(47, 47, 47);
  border-bottom-color: rgb(192, 192, 192);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="dark"] body .transclude {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(138, 145, 155);
  text-decoration-color: rgb(138, 145, 155);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(70, 70, 70, 0.9);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(70, 70, 70, 0.9);
  border-left-width: 2px;
  border-right-color: rgba(70, 70, 70, 0.9);
  border-right-width: 2px;
  border-top-color: rgba(70, 70, 70, 0.9);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
  transition: box-shadow 0.25s ease-in-out;
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(255, 213, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(77, 148, 247);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(248, 51, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(248, 51, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(255, 213, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(255, 213, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(248, 51, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
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
  color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(38, 38, 38);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: color(srgb 0.109804 0.109804 0.109804 / 0.95);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 40px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(40, 107, 189);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgba(128, 128, 128, 0.3);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(40, 107, 189);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(40, 107, 189);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(47, 113, 85);
  border-bottom-color: rgba(102, 171, 255, 0.15);
  border-left-color: rgba(102, 171, 255, 0.15);
  border-right-color: rgba(102, 171, 255, 0.15);
  border-top-color: rgba(102, 171, 255, 0.15);
  font-weight: 500;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(241, 241, 241);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h6 {
  color: rgb(77, 148, 247);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  color: rgb(218, 218, 218);
  font-weight: 550;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(218, 218, 218);
  font-weight: 550;
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 550;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(129, 136, 147);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(129, 136, 147);
  border-right-color: rgb(129, 136, 147);
  border-top-color: rgb(129, 136, 147);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(129, 136, 147);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: color(srgb 0.14902 0.14902 0.14902 / 0.35);
  border-bottom-color: rgba(100, 100, 100, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-bottom-width: 1px;
  border-left-color: rgba(100, 100, 100, 0.1);
  border-right-color: rgba(100, 100, 100, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(100, 100, 100, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(192, 192, 192);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(192, 192, 192);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(192, 192, 192);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(129, 136, 147);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(129, 136, 147);
  border-right-color: rgb(129, 136, 147);
  border-top-color: rgb(129, 136, 147);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(129, 136, 147);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(129, 136, 147);
  stroke: rgb(129, 136, 147);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(77, 148, 247);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(77, 148, 247);
  border-right-color: rgb(77, 148, 247);
  border-top-color: rgb(77, 148, 247);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(77, 148, 247);
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .metadata-properties {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(192, 192, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(192, 192, 192);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: color(srgb 0.14902 0.14902 0.14902 / 0.35);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(59, 59, 59);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: #0062c1 !important;
  --accent-h: 210 !important;
  --accent-l: 38% !important;
  --accent-s: 100% !important;
  --anim-motion-jumpy: cubic-bezier(.58,.53,.57,1.16) !important;
  --background-modifier-active-hover: #5c9aff !important;
  --background-modifier-border: rgba(200, 200, 200, 0.1) !important;
  --background-modifier-error: #f83366 !important;
  --background-modifier-error-hover: #f83366 !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.04) !important;
  --background-secondary: #f5f6f8 !important;
  --bases-cards-border-width: 0.5px !important;
  --bases-cards-radius: 18px !important;
  --bases-cards-shadow: 0 0 0 1px rgba(200, 200, 200, 0.1) !important;
  --bases-embed-border-color: rgba(200, 200, 200, 0.1) !important;
  --bases-embed-border-radius: 10px !important;
  --bases-group-heading-property-color: #3f3f3f !important;
  --bases-group-heading-value-weight: 500 !important;
  --bases-header-border-width: 0 0 0.5px 0 !important;
  --bases-table-border-color: rgba(200, 200, 200, 0.1) !important;
  --bases-table-cell-background-selected: hsla(210, 100%, 38%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #67acff !important;
  --bases-table-column-border-width: 0.5px !important;
  --bases-table-container-border-radius: 10px !important;
  --bases-table-container-border-width: 0.5px !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.04) !important;
  --bases-table-header-color: #3f3f3f !important;
  --bases-table-row-border-width: 0.5px !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.04) !important;
  --blockquote-background-color: rgba(128, 128, 128, 0.07) !important;
  --blockquote-border-color: #67acff !important;
  --border-width: 0.5px !important;
  --button-radius: 26px !important;
  --callout-radius: 10px;
  --canvas-controls-radius: 10px !important;
  --caret-color: #2d2e34 !important;
  --checkbox-border-color: rgba(128, 128, 128, 0.3) !important;
  --checkbox-border-color-hover: #3f3f3f !important;
  --checkbox-color: #0062c1 !important;
  --checkbox-color-hover: hsl(210, 80%, 51.3%) !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: #82868a !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 26px !important;
  --code-background: #f9f9f9 !important;
  --code-border-color: rgba(200, 200, 200, 0.1) !important;
  --code-bracket-background: rgba(0, 0, 0, 0.04) !important;
  --code-function: #ffd500 !important;
  --code-normal: #2d2e34 !important;
  --code-operator: #f83366 !important;
  --code-property: #54ada4 !important;
  --code-punctuation: #3f3f3f !important;
  --code-radius: 10px !important;
  --code-tag: #f83366 !important;
  --collapse-icon-color-collapsed: #0062c1 !important;
  --color-accent: #0062c1 !important;
  --color-accent-1: hsl(209, 101%, 40.85%) !important;
  --color-accent-2: hsl(210, 80%, 51.3%) !important;
  --color-accent-hsl: 210, 100%, 38% !important;
  --color-blue: #23abf2 !important;
  --color-cyan: #54ada4 !important;
  --color-grey: #818893 !important;
  --color-red: #f83366 !important;
  --color-red-trans: rgba(255, 83, 131, 0.3) !important;
  --color-yellow: #ffd500 !important;
  --dark: #2d2e34 !important;
  --darkgray: #2d2e34 !important;
  --div-color: rgba(210, 210, 210, 0.5) !important;
  --divider-color: rgba(0, 0, 0, 0.05) !important;
  --divider-color-hover: #67acff !important;
  --dnc-stroke: 1.95px !important;
  --dropdown-background: rgba(150, 150, 150, 0.1) !important;
  --dropdown-background-hover: rgba(100, 115, 120, 0.1) !important;
  --element-shadow: 0 0 20px rgba(0, 0, 0, 0.1) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(200, 200, 200, 0.1), inset 0 0 0 1px rgba(200, 200, 200, 0.1) !important;
  --embed-border-start: 2px solid #67acff !important;
  --embed-padding: 0px !important;
  --file-header-border: 0.5px solid transparent !important;
  --flair-background: #f5f6f8 !important;
  --flair-color: #2d2e34 !important;
  --font-bold: 600 !important;
  --font-semibold: 500 !important;
  --footnote-divider-color: #f5f6f8 !important;
  --footnote-divider-width: 0.5px !important;
  --footnote-id-color: #3f3f3f !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.04) !important;
  --footnote-radius: 10px !important;
  --graph-node: #3f3f3f !important;
  --graph-node-attachment: #ffd500 !important;
  --graph-node-focused: #0062c1 !important;
  --graph-text: #2d2e34 !important;
  --gray: #3f3f3f !important;
  --heading-spacing: 3.75rem !important;
  --highlight: rgba(0, 0, 0, 0.04) !important;
  --hr-color: rgba(200, 200, 200, 0.1) !important;
  --icon-color: #818893 !important;
  --icon-color-active: #0062c1 !important;
  --icon-color-focused: #2d2e34 !important;
  --icon-color-hover: #3f3f3f !important;
  --icon-l-stroke-width: 1.5px !important;
  --icon-stroke: 1.5px !important;
  --indentation-guide-width: 0.5px !important;
  --indentation-guide-width-active: 0.5px !important;
  --input-border-width: 0.5px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: #67acff !important;
  --interactive-accent-hover: hsl(210, 80%, 51.3%) !important;
  --interactive-accent-hsl: 210, 100%, 38% !important;
  --interactive-hover: rgba(100, 115, 120, 0.1) !important;
  --interactive-normal: #f5f6f8 !important;
  --lightgray: #f5f6f8 !important;
  --link-color: #0062c1 !important;
  --link-color-hover: hsl(210, 80%, 51.3%) !important;
  --link-external-color: #0062c1 !important;
  --link-external-color-hover: hsl(210, 80%, 51.3%) !important;
  --link-unresolved-color: #0062c1 !important;
  --link-unresolved-decoration-color: hsla(210, 100%, 38%, 0.3) !important;
  --list-marker-color-collapsed: #0062c1 !important;
  --list-marker-color-hover: #3f3f3f !important;
  --list-spacing: 0em !important;
  --menu-background: #3f4347 !important;
  --menu-border-width: 0.5px !important;
  --menu-radius: 18px !important;
  --metadata-border-color: rgba(200, 200, 200, 0.1) !important;
  --metadata-divider-color: #f5f6f8 !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.04) !important;
  --metadata-input-text-color: #2d2e34 !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.04) !important;
  --metadata-label-text-color: #3f3f3f !important;
  --metadata-label-text-color-hover: #3f3f3f !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.04) !important;
  --metadata-property-box-shadow: none !important;
  --metadata-property-box-shadow-hover: 0 0 0 0.5px #d4d4d4 !important;
  --mobile-glass-border: color-mix(in srgb, rgb(255, 255, 255) 80%, transparent) !important;
  --modal-background: color-mix(in srgb, #fcfcfc 95%, transparent) !important;
  --modal-border-width: 0.5px !important;
  --modal-radius: 26px !important;
  --nav-heading-color: #2d2e34 !important;
  --nav-heading-color-collapsed-hover: #3f3f3f !important;
  --nav-heading-color-hover: #2d2e34 !important;
  --nav-indentation-guide-width: 0.5px !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.04) !important;
  --nav-item-background-hover: none !important;
  --nav-item-background-selected: hsla(210, 100%, 38%, 0.15) !important;
  --nav-item-color: #3f3f3f !important;
  --nav-item-color-active: #2d2e34 !important;
  --nav-item-color-highlighted: #0062c1 !important;
  --nav-item-color-hover: #2d2e34 !important;
  --nav-item-color-selected: #2d2e34 !important;
  --nav-item-radius: 10px !important;
  --nav-tag-color-active: #3f3f3f !important;
  --nav-tag-color-hover: #3f3f3f !important;
  --nav-tag-radius: 10px !important;
  --nav-tag-weight: 500 !important;
  --p-spacing: 1.5rem !important;
  --pill-background: rgb(237, 237, 237) !important;
  --pill-border-color: rgba(200, 200, 200, 0.1) !important;
  --pill-color: #3f3f3f !important;
  --pill-color-hover: #2d2e34 !important;
  --pill-color-remove-hover: #0062c1 !important;
  --prompt-border-width: 0.5px !important;
  --properties-background: #f5f6f8 !important;
  --radius-l: 26px !important;
  --radius-m: 18px !important;
  --radius-s: 10px !important;
  --ribbon-background: #f5f6f8 !important;
  --scrollbar-radius: 26px !important;
  --search-clear-button-color: #3f3f3f !important;
  --search-icon-color: #3f3f3f !important;
  --secondary: #0062c1 !important;
  --selected-item: #c3d8ff !important;
  --setting-group-heading-color: #2d2e34 !important;
  --setting-group-heading-weight: 500 !important;
  --setting-items-border-color: rgba(200, 200, 200, 0.1) !important;
  --setting-items-radius: 26px !important;
  --slider-thumb-border-width: 0.5px !important;
  --slider-track-background: rgba(200, 200, 200, 0.1) !important;
  --status-bar-background: #f5f6f8 !important;
  --status-bar-border-color: rgba(0, 0, 0, 0.05) !important;
  --status-bar-border-width: 0.5px 0 0 0.5px !important;
  --status-bar-radius: 18px 0 0 0 !important;
  --status-bar-text-color: #3f3f3f !important;
  --statusbar-glass-bg: color-mix(in srgb, #ffffff 35%, transparent) !important;
  --statusbar-glass-border: rgba(250, 250, 250, 0.5) !important;
  --statusbar-glass-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
  --sync-avatar-color-1: #f83366 !important;
  --sync-avatar-color-3: #ffd500 !important;
  --sync-avatar-color-5: #54ada4 !important;
  --sync-avatar-color-6: #23abf2 !important;
  --tab-container-background: #f5f6f8 !important;
  --tab-curve: 0px !important;
  --tab-outline-color: rgba(0, 0, 0, 0.05) !important;
  --tab-radius: 18px !important;
  --tab-radius-active: 12px 12px 0px 0px !important;
  --tab-stacked-pane-width: 1200px !important;
  --tab-switcher-background: #f5f6f8 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f5f6f8, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #0062c1 !important;
  --tab-text-color-active: #3f3f3f !important;
  --tab-text-color-focused: #3f3f3f !important;
  --tab-text-color-focused-active: #3f3f3f !important;
  --tab-text-color-focused-active-current: #2d2e34 !important;
  --tab-text-color-focused-highlighted: #0062c1 !important;
  --table-add-button-border-color: rgba(200, 200, 200, 0.1) !important;
  --table-border-color: rgba(200, 200, 200, 0.1) !important;
  --table-drag-handle-background-active: #67acff !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: rgba(200, 200, 200, 0.1) !important;
  --table-header-color: #2d2e34 !important;
  --table-selection: hsla(210, 100%, 38%, 0.1) !important;
  --table-selection-border-color: #67acff !important;
  --tag-background: hsla(210, 100%, 38%, 0.1) !important;
  --tag-background-hover: hsla(210, 100%, 38%, 0.2) !important;
  --tag-border-color: hsla(210, 100%, 38%, 0.15) !important;
  --tag-border-color-hover: hsla(210, 100%, 38%, 0.15) !important;
  --tag-color: #1e7d58 !important;
  --tag-color-hover: #0062c1 !important;
  --tertiary: hsl(210, 80%, 51.3%) !important;
  --text-accent: #0062c1 !important;
  --text-accent-hover: hsl(210, 80%, 51.3%) !important;
  --text-error: #f83366 !important;
  --text-extreme: #000000 !important;
  --text-muted: #3f3f3f !important;
  --text-normal: #2d2e34 !important;
  --text-on-accent: #ffffff !important;
  --text-selection: hsla(210, 100%, 38%, 0.2) !important;
  --textHighlight: rgba(0, 0, 0, 0.04) !important;
  --titlebar-background: #f5f6f8 !important;
  --titlebar-background-focused: #f5f6f8 !important;
  --titlebar-border-color: rgba(200, 200, 200, 0.1) !important;
  --titlebar-text-color: #3f3f3f !important;
  --titlebar-text-color-focused: #2d2e34 !important;
  --titlebar-text-weight: 600 !important;
  --vault-profile-color: #2d2e34 !important;
  --vault-profile-color-hover: #2d2e34 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 246, 248);
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 246, 248);
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 246, 248);
  border-left-color: rgba(0, 0, 0, 0.05);
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(45, 46, 52);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body del {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body p {
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration-color: rgb(63, 63, 63);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 98, 193);
  outline: rgb(0, 98, 193) none 0px;
  text-decoration-color: rgb(0, 98, 193);
  transition: opacity 0.25s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 98, 193);
  outline: rgb(0, 98, 193) none 0px;
  text-decoration-color: rgb(0, 98, 193);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(0, 98, 193);
  outline: rgb(0, 98, 193) none 0px;
  text-decoration-color: rgb(0, 98, 193);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body dt {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body ol > li {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body ul > li {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgba(128, 128, 128, 0.07);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body table {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(210, 210, 210, 0.5);
  border-left-color: rgba(210, 210, 210, 0.5);
  border-right-color: rgba(210, 210, 210, 0.5);
  border-top-color: rgba(210, 210, 210, 0.5);
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(210, 210, 210, 0.5);
  border-left-color: rgba(210, 210, 210, 0.5);
  border-right-color: rgba(210, 210, 210, 0.5);
  border-top-color: rgba(210, 210, 210, 0.5);
  color: rgb(45, 46, 52);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(249, 249, 249);
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(249, 249, 249);
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(45, 46, 52);
  font-family: "SF Mono", Menlo, monospace;
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(255, 213, 0);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 213, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 213, 0);
  border-left-color: rgb(255, 213, 0);
  border-right-color: rgb(255, 213, 0);
  border-top-color: rgb(255, 213, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(249, 249, 249);
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(249, 249, 249);
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body figcaption {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 46, 52);
  border-radius: 10px;
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(63, 63, 63);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(45, 46, 52);
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 46, 52);
  border-left-width: 0px;
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 46, 52);
  border-left-width: 0px;
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(130, 134, 138);
  text-decoration-color: rgb(130, 134, 138);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(128, 128, 128, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(128, 128, 128, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(128, 128, 128, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(128, 128, 128, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
  transition: box-shadow 0.25s ease-in-out;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
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
  color: rgb(171, 171, 171);
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
  color: rgb(236, 117, 0);
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
  color: rgb(255, 213, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(0, 98, 193);
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
  color: rgb(171, 171, 171);
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
  color: rgb(171, 171, 171);
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
  color: rgb(236, 117, 0);
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
  color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(248, 51, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(171, 171, 171);
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
  color: rgb(248, 51, 102);
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
  color: rgb(255, 213, 0);
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
  color: rgb(255, 213, 0);
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
  color: rgb(248, 51, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(8, 185, 78);
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
  color: rgb(8, 185, 78);
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
  color: rgb(120, 82, 238);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: color(srgb 0.988235 0.988235 0.988235 / 0.95);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(195, 216, 255);
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgba(128, 128, 128, 0.3);
  border-bottom-color: rgb(245, 246, 248);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(195, 216, 255);
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(195, 216, 255);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(195, 225, 211);
  border-bottom-color: rgba(0, 97, 194, 0.15);
  border-left-color: rgba(0, 97, 194, 0.15);
  border-right-color: rgba(0, 97, 194, 0.15);
  border-top-color: rgba(0, 97, 194, 0.15);
  font-weight: 500;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(30, 125, 88);
}

html[saved-theme="light"] body h1 {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body h2 {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h3 {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body h4 {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body h5 {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 98, 193);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(45, 46, 52);
  font-weight: 550;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(45, 46, 52);
  font-weight: 550;
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 550;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(129, 136, 147);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(129, 136, 147);
  border-right-color: rgb(129, 136, 147);
  border-top-color: rgb(129, 136, 147);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(129, 136, 147);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: color(srgb 1 1 1 / 0.35);
  border-bottom-color: rgba(250, 250, 250, 0.5);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 250, 250, 0.5);
  border-right-color: rgba(250, 250, 250, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(250, 250, 250, 0.5);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(63, 63, 63);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(63, 63, 63);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 63, 63);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 63, 63);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(63, 63, 63);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 63, 63);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(129, 136, 147);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(129, 136, 147);
  border-right-color: rgb(129, 136, 147);
  border-top-color: rgb(129, 136, 147);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(129, 136, 147);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(129, 136, 147);
  stroke: rgb(129, 136, 147);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(0, 98, 193);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(0, 98, 193);
  border-right-color: rgb(0, 98, 193);
  border-top-color: rgb(0, 98, 193);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(0, 98, 193);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  color: rgb(63, 63, 63);
}

html[saved-theme="light"] body .metadata-properties {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(63, 63, 63);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(63, 63, 63);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: color(srgb 1 1 1 / 0.35);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body abbr {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(249, 249, 249);
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body sub {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body summary {
  color: rgb(45, 46, 52);
}

html[saved-theme="light"] body sup {
  color: rgb(45, 46, 52);
}`,
  },
};
