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
  --bases-table-cell-background-selected: rgba(102, 171, 255, 0.1) !important;
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
  --checkbox-color-hover: rgb(71, 145, 235) !important;
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
  --color-accent-2: rgb(71, 145, 235) !important;
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
  --interactive-accent-hover: rgb(71, 145, 235) !important;
  --interactive-accent-hsl: 213, 100%, 70% !important;
  --interactive-hover: rgba(100, 115, 120, 0.1) !important;
  --interactive-normal: #1a1a1a !important;
  --light: #262626 !important;
  --lightgray: #1a1a1a !important;
  --link-color: hsl(210, 102%, 80.5%) !important;
  --link-color-hover: rgb(71, 145, 235) !important;
  --link-external-color: hsl(210, 102%, 80.5%) !important;
  --link-external-color-hover: rgb(71, 145, 235) !important;
  --link-unresolved-color: hsl(210, 102%, 80.5%) !important;
  --link-unresolved-decoration-color: rgba(102, 171, 255, 0.3) !important;
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
  --nav-item-background-selected: rgba(102, 171, 255, 0.15) !important;
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
  --table-selection: rgba(102, 171, 255, 0.1) !important;
  --table-selection-border-color: #4d94f7 !important;
  --tag-background: rgba(102, 171, 255, 0.1) !important;
  --tag-background-hover: rgba(102, 171, 255, 0.2) !important;
  --tag-border-color: rgba(102, 171, 255, 0.15) !important;
  --tag-border-color-hover: rgba(102, 171, 255, 0.15) !important;
  --tag-color: #f1f1f1 !important;
  --tag-color-hover: hsl(210, 102%, 80.5%) !important;
  --tertiary: rgb(71, 145, 235) !important;
  --text-accent: hsl(210, 102%, 80.5%) !important;
  --text-accent-hover: rgb(71, 145, 235) !important;
  --text-error: #f83366 !important;
  --text-extreme: #ffffff !important;
  --text-muted: #c0c0c0 !important;
  --text-on-accent: #1f1f1f !important;
  --text-selection: rgba(102, 171, 255, 0.33) !important;
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
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(192, 192, 192);
  outline: rgb(192, 192, 192) none 0px;
  text-decoration: rgb(192, 192, 192);
  text-decoration-color: rgb(192, 192, 192);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(77, 148, 247);
  outline: rgb(77, 148, 247) none 0px;
  text-decoration: rgb(77, 148, 247);
  text-decoration-color: rgb(77, 148, 247);
  transition: opacity 0.25s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(77, 148, 247);
  outline: rgb(77, 148, 247) none 0px;
  text-decoration: rgb(77, 148, 247);
  text-decoration-color: rgb(77, 148, 247);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(77, 148, 247);
  outline: rgb(77, 148, 247) none 0px;
  text-decoration: rgb(77, 148, 247);
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
  text-decoration: rgb(138, 145, 155);
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
  text-decoration: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(218, 218, 218);
  font-weight: 550;
  text-decoration: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(192, 192, 192);
  text-decoration: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.04);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  text-decoration: rgb(192, 192, 192);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(192, 192, 192);
  text-decoration: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(192, 192, 192);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(192, 192, 192);
  text-decoration: rgb(192, 192, 192);
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
  --bases-table-cell-background-selected: rgba(0, 97, 194, 0.1) !important;
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
  --checkbox-color-hover: rgb(30, 130, 230) !important;
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
  --color-accent-2: rgb(30, 130, 230) !important;
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
  --interactive-accent-hover: rgb(30, 130, 230) !important;
  --interactive-accent-hsl: 210, 100%, 38% !important;
  --interactive-hover: rgba(100, 115, 120, 0.1) !important;
  --interactive-normal: #f5f6f8 !important;
  --lightgray: #f5f6f8 !important;
  --link-color: #0062c1 !important;
  --link-color-hover: rgb(30, 130, 230) !important;
  --link-external-color: #0062c1 !important;
  --link-external-color-hover: rgb(30, 130, 230) !important;
  --link-unresolved-color: #0062c1 !important;
  --link-unresolved-decoration-color: rgba(0, 97, 194, 0.3) !important;
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
  --nav-item-background-selected: rgba(0, 97, 194, 0.15) !important;
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
  --table-selection: rgba(0, 97, 194, 0.1) !important;
  --table-selection-border-color: #67acff !important;
  --tag-background: rgba(0, 97, 194, 0.1) !important;
  --tag-background-hover: rgba(0, 97, 194, 0.2) !important;
  --tag-border-color: rgba(0, 97, 194, 0.15) !important;
  --tag-border-color-hover: rgba(0, 97, 194, 0.15) !important;
  --tag-color: #1e7d58 !important;
  --tag-color-hover: #0062c1 !important;
  --tertiary: rgb(30, 130, 230) !important;
  --text-accent: #0062c1 !important;
  --text-accent-hover: rgb(30, 130, 230) !important;
  --text-error: #f83366 !important;
  --text-extreme: #000000 !important;
  --text-muted: #3f3f3f !important;
  --text-normal: #2d2e34 !important;
  --text-on-accent: #ffffff !important;
  --text-selection: rgba(0, 97, 194, 0.2) !important;
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
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body del {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: line-through rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body p {
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 98, 193);
  outline: rgb(0, 98, 193) none 0px;
  text-decoration: rgb(0, 98, 193);
  text-decoration-color: rgb(0, 98, 193);
  transition: opacity 0.25s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 98, 193);
  outline: rgb(0, 98, 193) none 0px;
  text-decoration: rgb(0, 98, 193);
  text-decoration-color: rgb(0, 98, 193);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(0, 98, 193);
  outline: rgb(0, 98, 193) none 0px;
  text-decoration: rgb(0, 98, 193);
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
  text-decoration: rgb(130, 134, 138);
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
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
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
  text-decoration: rgb(45, 46, 52);
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
  text-decoration: rgb(45, 46, 52);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(45, 46, 52);
  font-weight: 550;
  text-decoration: rgb(45, 46, 52);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(45, 46, 52);
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
  text-decoration: rgb(63, 63, 63);
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
  text-decoration: rgb(63, 63, 63);
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
  text-decoration: rgb(63, 63, 63);
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
  text-decoration: underline dotted rgb(45, 46, 52);
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
