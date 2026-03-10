import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "abecedarium",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 207 !important;
  --accent-l: 57% !important;
  --accent-s: 100% !important;
  --accent-strong: #EC5151 !important;
  --background-modifier-active-hover: rgba(36, 156, 255, 0.1) !important;
  --background-modifier-border: #282931 !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-hover: #1C1F24 !important;
  --background-modifier-success: #197300 !important;
  --background-nav-alt: rgba(62, 147, 216, 0.1) !important;
  --background-primary: #131517 !important;
  --background-primary-alt: #171717 !important;
  --background-secondary: #1C1F24 !important;
  --background-secondary-alt: #0f1112 !important;
  --bases-cards-background: #131517 !important;
  --bases-cards-cover-background: #171717 !important;
  --bases-cards-shadow: 0 0 0 1px #282931 !important;
  --bases-embed-border-color: #282931 !important;
  --bases-group-heading-property-color: #8B959A !important;
  --bases-table-border-color: #282931 !important;
  --bases-table-cell-background-active: #131517 !important;
  --bases-table-cell-background-disabled: #171717 !important;
  --bases-table-cell-background-selected: rgba(36, 156, 255, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3378e0 !important;
  --bases-table-group-background: #171717 !important;
  --bases-table-header-background: #131517 !important;
  --bases-table-header-background-hover: #1C1F24 !important;
  --bases-table-header-color: #8B959A !important;
  --bases-table-summary-background: #131517 !important;
  --bases-table-summary-background-hover: #1C1F24 !important;
  --blockquote-background-color: #1C1F24 !important;
  --blockquote-border-color: #3378e0 !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --bodyFont: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #131517 !important;
  --canvas-card-label-color: #5D5F67 !important;
  --caret-color: #ECEDEE !important;
  --checkbox-border-color: #5D5F67 !important;
  --checkbox-border-color-hover: #5D5F67 !important;
  --checkbox-color: #3378e0 !important;
  --checkbox-color-hover: #4e8ae4 !important;
  --checkbox-marker-color: #131517 !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: #8B959A !important;
  --code-background: #171717 !important;
  --code-border-color: #282931 !important;
  --code-bracket-background: #1C1F24 !important;
  --code-comment: #5D5F67 !important;
  --code-important: #de9d07 !important;
  --code-normal: #ECEDEE !important;
  --code-punctuation: #8B959A !important;
  --code-value: #b352e0 !important;
  --codeFont: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #5D5F67 !important;
  --collapse-icon-color-collapsed: #3e93d8 !important;
  --color-H1: rgb(255, 255, 255) !important;
  --color-H2: rgb(220,220,220,.2) !important;
  --color-H3: rgb(200,200,200,.4) !important;
  --color-H4: rgb(160,160,160,.5) !important;
  --color-H5: rgb(120,120,120,.5) !important;
  --color-H6: rgb(70,70,70,.5) !important;
  --color-accent: rgb(36, 156, 255) !important;
  --color-accent-1: hsl(204, 102%, 65.55%) !important;
  --color-accent-2: hsl(202, 105%, 73.53%) !important;
  --color-accent-hsl: 207, 100%, 57% !important;
  --color-green2: #58aa31 !important;
  --color-orange: #de9d07 !important;
  --color-purple: #b352e0 !important;
  --color-purple2: #5252e0 !important;
  --color-yellow-bright: #FBFF00 !important;
  --dark: #ECEDEE !important;
  --darkgray: #ECEDEE !important;
  --default-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --divider-color: #282931 !important;
  --divider-color-hover: #3378e0 !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px #282931, inset 0 0 0 1px #282931 !important;
  --embed-border-start: 2px solid #3378e0 !important;
  --file-header-background: #131517 !important;
  --file-header-background-focused: #131517 !important;
  --file-header-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #2a2a2a !important;
  --flair-color: #ECEDEE !important;
  --font-interface: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #282931 !important;
  --footnote-id-color: #8B959A !important;
  --footnote-id-color-no-occurrences: #5D5F67 !important;
  --footnote-input-background-active: #1C1F24 !important;
  --graph-node: #8B959A !important;
  --graph-node-fill-OP1: #3e93d8 !important;
  --graph-node-fill-OP2: #91B8D7 !important;
  --graph-node-fill-yellow: #ffcf00 !important;
  --graph-node-focused: #3e93d8 !important;
  --graph-node-unresolved: #5D5F67 !important;
  --graph-text: #ECEDEE !important;
  --gray: #8B959A !important;
  --header-height: 36px !important;
  --headerFont: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #5D5F67 !important;
  --heading-spacing: 0.75em !important;
  --highlight: #ec0d0d !important;
  --hr-color: #282931 !important;
  --icon-color: #8B959A !important;
  --icon-color-active: #3e93d8 !important;
  --icon-color-focused: #ECEDEE !important;
  --icon-color-hover: #8B959A !important;
  --input-date-separator: #5D5F67 !important;
  --input-placeholder-color: #5D5F67 !important;
  --interactive-accent: #3378e0 !important;
  --interactive-accent-hover: #4e8ae4 !important;
  --interactive-accent-hover-dark: #0f56bf !important;
  --interactive-accent-hsl: 207, 100%, 57% !important;
  --interactive-accent-rgb: 38, 157, 255 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --light: #131517 !important;
  --lightgray: #1C1F24 !important;
  --link-color: #3e93d8 !important;
  --link-color-hover: #3378e0 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #3e93d8 !important;
  --link-external-color-hover: #3378e0 !important;
  --link-unresolved-color: #3e93d8 !important;
  --link-unresolved-decoration-color: rgba(36, 156, 255, 0.3) !important;
  --list-marker-color: #3e93d8 !important;
  --list-marker-color-collapsed: #3e93d8 !important;
  --list-marker-color-hover: #8B959A !important;
  --menu-background: #1C1F24 !important;
  --mermaid-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-border-color: #282931 !important;
  --metadata-divider-color: #282931 !important;
  --metadata-input-background-active: #1C1F24 !important;
  --metadata-input-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #ECEDEE !important;
  --metadata-label-background-active: #1C1F24 !important;
  --metadata-label-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #8B959A !important;
  --metadata-label-text-color-hover: #8B959A !important;
  --metadata-property-background-active: #1C1F24 !important;
  --modal-background: #131517 !important;
  --nav-collapse-icon-color: #5D5F67 !important;
  --nav-collapse-icon-color-collapsed: #5D5F67 !important;
  --nav-heading-color: #ECEDEE !important;
  --nav-heading-color-collapsed: #5D5F67 !important;
  --nav-heading-color-collapsed-hover: #8B959A !important;
  --nav-heading-color-hover: #ECEDEE !important;
  --nav-item-background-active: #1C1F24 !important;
  --nav-item-background-hover: #1C1F24 !important;
  --nav-item-background-selected: rgba(36, 156, 255, 0.15) !important;
  --nav-item-color: #8B959A !important;
  --nav-item-color-active: #ECEDEE !important;
  --nav-item-color-highlighted: #3e93d8 !important;
  --nav-item-color-hover: #ECEDEE !important;
  --nav-item-color-selected: #ECEDEE !important;
  --nav-item-parent-padding: 0em 0.5em .15em 0.5em !important;
  --nav-tag-color: #5D5F67 !important;
  --nav-tag-color-active: #8B959A !important;
  --nav-tag-color-hover: #8B959A !important;
  --opacity-translucency: .8 !important;
  --p-spacing: 0.75em !important;
  --pdf-background: #131517 !important;
  --pdf-page-background: #131517 !important;
  --pdf-shadow: 0 0 0 1px #282931 !important;
  --pdf-sidebar-background: #131517 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #282931 !important;
  --pill-border-color: #282931 !important;
  --pill-color: #8B959A !important;
  --pill-color-hover: #ECEDEE !important;
  --pill-color-remove: #5D5F67 !important;
  --pill-color-remove-hover: #3e93d8 !important;
  --prompt-background: #131517 !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --reveal-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --ribbon-background: #1C1F24 !important;
  --ribbon-background-collapsed: #131517 !important;
  --scrollbar-active-thumb-bg: rgba(62, 147, 216, 0.8) !important;
  --scrollbar-bg: rgba(255, 255, 255, 0) !important;
  --scrollbar-thumb-bg: rgb(20, 20, 20) !important;
  --search-clear-button-color: #8B959A !important;
  --search-icon-color: #8B959A !important;
  --search-result-background: #131517 !important;
  --secondary: #3e93d8 !important;
  --setting-group-heading-color: #ECEDEE !important;
  --setting-items-background: #171717 !important;
  --setting-items-border-color: #282931 !important;
  --slider-track-background: #282931 !important;
  --status-bar-background: #1C1F24 !important;
  --status-bar-border-color: #282931 !important;
  --status-bar-text-color: #8B959A !important;
  --suggestion-background: #131517 !important;
  --sync-avatar-color-2: #de9d07 !important;
  --sync-avatar-color-7: #b352e0 !important;
  --tab-background-active: #131517 !important;
  --tab-container-background: #1C1F24 !important;
  --tab-outline-color: #282931 !important;
  --tab-stacked-header-width: 36px !important;
  --tab-switcher-background: #1C1F24 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1C1F24, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(36, 156, 255) !important;
  --tab-text-color: #5D5F67 !important;
  --tab-text-color-active: #8B959A !important;
  --tab-text-color-focused: #8B959A !important;
  --tab-text-color-focused-active: #8B959A !important;
  --tab-text-color-focused-active-current: #ECEDEE !important;
  --tab-text-color-focused-highlighted: #3e93d8 !important;
  --table-add-button-border-color: #282931 !important;
  --table-border-color: #282931 !important;
  --table-drag-handle-background-active: #3378e0 !important;
  --table-drag-handle-color: #5D5F67 !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #282931 !important;
  --table-header-color: #ECEDEE !important;
  --table-selection: rgba(36, 156, 255, 0.1) !important;
  --table-selection-border-color: #3378e0 !important;
  --tag-background: rgba(36, 156, 255, 0.1) !important;
  --tag-background-hover: rgba(36, 156, 255, 0.2) !important;
  --tag-border-color: rgba(36, 156, 255, 0.15) !important;
  --tag-border-color-hover: rgba(36, 156, 255, 0.15) !important;
  --tag-color: #3e93d8 !important;
  --tag-color-hover: #3e93d8 !important;
  --tertiary: #3378e0 !important;
  --text-accent: #3e93d8 !important;
  --text-accent-hover: #3378e0 !important;
  --text-accent-hover-dark: #1052b5 !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #5D5F67 !important;
  --text-highlight-bg: #ec0d0d !important;
  --text-muted: #8B959A !important;
  --text-normal: #ECEDEE !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(6, 66, 113, 0.5) !important;
  --text-warning: #de9d07 !important;
  --textHighlight: #ec0d0d !important;
  --titleFont: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #1C1F24 !important;
  --titlebar-background-focused: #0f1112 !important;
  --titlebar-border-color: #282931 !important;
  --titlebar-text-color: #8B959A !important;
  --titlebar-text-color-focused: #ECEDEE !important;
  --traffic-lights-offset-x: 36px !important;
  --traffic-lights-offset-y: 36px !important;
  --vault-profile-color: #ECEDEE !important;
  --vault-profile-color-hover: #ECEDEE !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 31, 36);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(19, 21, 23);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 31, 36);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(40, 41, 49);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 31, 36);
  border-left-color: rgb(40, 41, 49);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(19, 21, 23);
  color: rgb(236, 237, 238);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(236, 13, 13);
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body del {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: line-through rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body p {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(139, 149, 154) none 0px;
  text-decoration: rgb(139, 149, 154);
  text-decoration-color: rgb(139, 149, 154);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
  text-decoration: underline rgb(62, 147, 216);
  text-decoration-color: rgb(62, 147, 216);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
  text-decoration: rgb(62, 147, 216);
  text-decoration-color: rgb(62, 147, 216);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
  text-decoration: rgba(36, 156, 255, 0.3);
  text-decoration-color: rgba(36, 156, 255, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body dt {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(93, 95, 103);
  text-decoration: rgb(93, 95, 103);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(28, 31, 36);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body table {
  color: rgb(236, 237, 238);
  margin-top: 12px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(28, 31, 36);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(19, 21, 23);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 31, 36);
  border-bottom-color: rgb(40, 41, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 31, 36);
  border-bottom-color: rgb(40, 41, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(28, 31, 36);
  border-bottom-color: rgb(40, 41, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(28, 31, 36);
  border-bottom-color: rgb(40, 41, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(28, 31, 36);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  padding-left: 25px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(28, 31, 36);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  padding-left: 25px;
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(93, 95, 103);
  text-decoration: line-through rgb(93, 95, 103);
  text-decoration-color: rgb(93, 95, 103);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(93, 95, 103);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(93, 95, 103);
  border-right-color: rgb(93, 95, 103);
  border-top-color: rgb(93, 95, 103);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(15, 17, 18);
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  color: rgb(236, 237, 238);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(19, 21, 23);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(16, 82, 181);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 31, 36);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(16, 82, 181);
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(16, 82, 181);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(36, 156, 255, 0.1);
  border-bottom-color: rgba(36, 156, 255, 0.15);
  border-left-color: rgba(36, 156, 255, 0.15);
  border-right-color: rgba(36, 156, 255, 0.15);
  border-top-color: rgba(36, 156, 255, 0.15);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(62, 147, 216);
}

html[saved-theme="dark"] body h1 {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body h2 {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body h3 {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body h4 {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body h5 {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body h6 {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(139, 149, 154);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(139, 149, 154);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(139, 149, 154);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(62, 147, 216);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
  color: rgb(139, 149, 154);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(15, 17, 18);
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  border-top-width: 0px;
  color: rgb(236, 237, 238);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(236, 237, 238);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(139, 149, 154);
  text-decoration: rgb(139, 149, 154);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(139, 149, 154);
  text-decoration: rgb(139, 149, 154);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
  color: rgb(139, 149, 154);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(139, 149, 154);
  stroke: rgb(139, 149, 154);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
  color: rgb(139, 149, 154);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(93, 95, 103);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  color: rgb(139, 149, 154);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
  color: rgb(139, 149, 154);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(15, 17, 18);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(236, 237, 238);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(236, 237, 238);
  text-decoration: underline dotted rgb(236, 237, 238);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body sub {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body summary {
  color: rgb(236, 237, 238);
}

html[saved-theme="dark"] body sup {
  color: rgb(236, 237, 238);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 207 !important;
  --accent-l: 57% !important;
  --accent-s: 100% !important;
  --accent-strong: #ff6666 !important;
  --background-accent: #fff !important;
  --background-modifier-active-hover: rgba(36, 156, 255, 0.1) !important;
  --background-modifier-border: #ddd !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-error: #e68787 !important;
  --background-modifier-error-hover: #FF9494 !important;
  --background-modifier-error-rgb: 230, 135, 135 !important;
  --background-modifier-form-field: #fff !important;
  --background-modifier-form-field-highlighted: #fff !important;
  --background-modifier-form-field-hover: #fff !important;
  --background-modifier-hover: #f2f3f5 !important;
  --background-modifier-success: #A4E7C3 !important;
  --background-nav-alt: rgba(38, 135, 255, 0.1) !important;
  --background-primary: #FFFFFF !important;
  --background-primary-alt: #f0f2f5 !important;
  --background-secondary: #f2f3f5 !important;
  --background-secondary-alt: #e3e5e8 !important;
  --bases-cards-background: #FFFFFF !important;
  --bases-cards-cover-background: #f0f2f5 !important;
  --bases-cards-shadow: 0 0 0 1px #ddd !important;
  --bases-embed-border-color: #ddd !important;
  --bases-table-border-color: #ddd !important;
  --bases-table-cell-background-active: #FFFFFF !important;
  --bases-table-cell-background-disabled: #f0f2f5 !important;
  --bases-table-cell-background-selected: rgba(36, 156, 255, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #2da4ff !important;
  --bases-table-group-background: #f0f2f5 !important;
  --bases-table-header-background: #FFFFFF !important;
  --bases-table-header-background-hover: #f2f3f5 !important;
  --bases-table-summary-background: #FFFFFF !important;
  --bases-table-summary-background-hover: #f2f3f5 !important;
  --blockquote-background-color: #f0f2f5 !important;
  --blockquote-border-color: #2da4ff !important;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --bodyFont: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #FFFFFF !important;
  --canvas-card-label-color: #999999 !important;
  --caret-color: #2e3338 !important;
  --checkbox-border-color: #999999 !important;
  --checkbox-border-color-hover: #999999 !important;
  --checkbox-color: #2da4ff !important;
  --checkbox-color-hover: #2287d4 !important;
  --checkbox-marker-color: #FFFFFF !important;
  --checkbox-radius: 50% !important;
  --code-background: #f0f2f5 !important;
  --code-border-color: #ddd !important;
  --code-bracket-background: #f2f3f5 !important;
  --code-comment: #999999 !important;
  --code-important: #EFB220 !important;
  --code-normal: #2e3338 !important;
  --code-string: #44A850 !important;
  --codeFont: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #999999 !important;
  --collapse-icon-color-collapsed: #269dff !important;
  --color-H1: rgb(0, 0, 0) !important;
  --color-H2: rgb(70,70,70,.5) !important;
  --color-H3: rgb(120,120,120,.5) !important;
  --color-H4: rgb(160,160,160,.5) !important;
  --color-H5: rgb(200,200,200,.5) !important;
  --color-H6: rgb(220, 220, 220) !important;
  --color-accent: rgb(36, 156, 255) !important;
  --color-accent-1: hsl(206, 101%, 61.275%) !important;
  --color-accent-2: hsl(204, 102%, 65.55%) !important;
  --color-accent-hsl: 207, 100%, 57% !important;
  --color-green: #44A850 !important;
  --color-orange: #EFB220 !important;
  --dark: #2e3338 !important;
  --darkgray: #2e3338 !important;
  --default-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --divider-color: #ddd !important;
  --divider-color-hover: #2da4ff !important;
  --dropdown-background: #f2f3f5 !important;
  --dropdown-background-hover: #e9e9e9 !important;
  --embed-block-shadow-hover: 0 0 0 1px #ddd, inset 0 0 0 1px #ddd !important;
  --embed-border-start: 2px solid #2da4ff !important;
  --file-header-background: #FFFFFF !important;
  --file-header-background-focused: #FFFFFF !important;
  --file-header-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #f2f3f5 !important;
  --flair-color: #2e3338 !important;
  --font-interface: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #ddd !important;
  --footnote-id-color-no-occurrences: #999999 !important;
  --footnote-input-background-active: #f2f3f5 !important;
  --graph-node-fill-OP1: #269dff !important;
  --graph-node-fill-OP2: #91B8D7 !important;
  --graph-node-fill-yellow: #ffcf00 !important;
  --graph-node-focused: #269dff !important;
  --graph-node-tag: #44A850 !important;
  --graph-node-unresolved: #999999 !important;
  --graph-text: #2e3338 !important;
  --gray: #999999 !important;
  --header-height: 36px !important;
  --headerFont: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #999999 !important;
  --heading-spacing: 0.75em !important;
  --highlight: #FF3737 !important;
  --hr-color: #ddd !important;
  --icon-color-active: #269dff !important;
  --icon-color-focused: #2e3338 !important;
  --input-date-separator: #999999 !important;
  --input-placeholder-color: #999999 !important;
  --interactive-accent: #2da4ff !important;
  --interactive-accent-hover: #2287d4 !important;
  --interactive-accent-hsl: 207, 100%, 57% !important;
  --interactive-accent-rgb: 38, 157, 255 !important;
  --interactive-hover: #e9e9e9 !important;
  --interactive-normal: #f2f3f5 !important;
  --light: #FFFFFF !important;
  --lightgray: #f2f3f5 !important;
  --link-color: #269dff !important;
  --link-color-hover: #66baff !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #269dff !important;
  --link-external-color-hover: #66baff !important;
  --link-unresolved-color: #269dff !important;
  --link-unresolved-decoration-color: rgba(36, 156, 255, 0.3) !important;
  --list-marker-color: #269dff !important;
  --list-marker-color-collapsed: #269dff !important;
  --menu-background: #f2f3f5 !important;
  --mermaid-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-border-color: #ddd !important;
  --metadata-divider-color: #ddd !important;
  --metadata-input-background-active: #f2f3f5 !important;
  --metadata-input-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #2e3338 !important;
  --metadata-label-background-active: #f2f3f5 !important;
  --metadata-label-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-property-background-active: #f2f3f5 !important;
  --modal-background: #FFFFFF !important;
  --nav-collapse-icon-color: #999999 !important;
  --nav-collapse-icon-color-collapsed: #999999 !important;
  --nav-heading-color: #2e3338 !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-hover: #2e3338 !important;
  --nav-item-background-active: #f2f3f5 !important;
  --nav-item-background-hover: #f2f3f5 !important;
  --nav-item-background-selected: rgba(36, 156, 255, 0.15) !important;
  --nav-item-color-active: #2e3338 !important;
  --nav-item-color-highlighted: #269dff !important;
  --nav-item-color-hover: #2e3338 !important;
  --nav-item-color-selected: #2e3338 !important;
  --nav-item-parent-padding: 0em 0.5em .15em 0.5em !important;
  --nav-tag-color: #999999 !important;
  --p-spacing: 0.75em !important;
  --pdf-background: #FFFFFF !important;
  --pdf-page-background: #FFFFFF !important;
  --pdf-sidebar-background: #FFFFFF !important;
  --pill-border-color: #ddd !important;
  --pill-color-hover: #2e3338 !important;
  --pill-color-remove: #999999 !important;
  --pill-color-remove-hover: #269dff !important;
  --prompt-background: #FFFFFF !important;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --reveal-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --ribbon-background: #f2f3f5 !important;
  --ribbon-background-collapsed: #FFFFFF !important;
  --scrollbar-active-thumb-bg: rgba(38, 157, 255, 0.8) !important;
  --scrollbar-bg: rgba(100, 100, 100, 0) !important;
  --scrollbar-thumb-bg: #e3e5e8 !important;
  --search-result-background: #FFFFFF !important;
  --secondary: #269dff !important;
  --setting-group-heading-color: #2e3338 !important;
  --setting-items-background: #f0f2f5 !important;
  --setting-items-border-color: #ddd !important;
  --slider-track-background: #ddd !important;
  --status-bar-background: #f2f3f5 !important;
  --status-bar-border-color: #ddd !important;
  --suggestion-background: #FFFFFF !important;
  --sync-avatar-color-2: #EFB220 !important;
  --sync-avatar-color-4: #44A850 !important;
  --tab-background-active: #FFFFFF !important;
  --tab-container-background: #f2f3f5 !important;
  --tab-outline-color: #ddd !important;
  --tab-stacked-header-width: 36px !important;
  --tab-switcher-background: #f2f3f5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f3f5, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(36, 156, 255) !important;
  --tab-text-color: #999999 !important;
  --tab-text-color-focused-active-current: #2e3338 !important;
  --tab-text-color-focused-highlighted: #269dff !important;
  --table-add-button-border-color: #ddd !important;
  --table-border-color: #ddd !important;
  --table-drag-handle-background-active: #2da4ff !important;
  --table-drag-handle-color: #999999 !important;
  --table-drag-handle-color-active: #2e3338 !important;
  --table-header-border-color: #ddd !important;
  --table-header-color: #2e3338 !important;
  --table-selection: rgba(36, 156, 255, 0.1) !important;
  --table-selection-border-color: #2da4ff !important;
  --tag-background: rgba(36, 156, 255, 0.1) !important;
  --tag-background-hover: rgba(36, 156, 255, 0.2) !important;
  --tag-border-color: rgba(36, 156, 255, 0.15) !important;
  --tag-border-color-hover: rgba(36, 156, 255, 0.15) !important;
  --tag-color: #269dff !important;
  --tag-color-hover: #269dff !important;
  --tertiary: #66baff !important;
  --text-accent: #269dff !important;
  --text-accent-hover: #66baff !important;
  --text-accent-hover-dark: #4e8ae4 !important;
  --text-error: #ce2222 !important;
  --text-error-hover: #cb2c2 !important;
  --text-faint: #999999 !important;
  --text-highlight-bg: #FF3737 !important;
  --text-normal: #2e3338 !important;
  --text-on-accent: #2e3338 !important;
  --text-selection: rgba(134, 202, 255, 0.5) !important;
  --text-success: #44A850 !important;
  --text-warning: #EFB220 !important;
  --textHighlight: #FF3737 !important;
  --titleFont: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #f2f3f5 !important;
  --titlebar-background-focused: #e3e5e8 !important;
  --titlebar-border-color: #ddd !important;
  --titlebar-text-color-focused: #2e3338 !important;
  --traffic-lights-offset-x: 36px !important;
  --traffic-lights-offset-y: 36px !important;
  --vault-profile-color: #2e3338 !important;
  --vault-profile-color-hover: #2e3338 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 243, 245);
  border-left-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(46, 51, 56);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(255, 55, 55);
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body del {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: line-through rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body p {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(38, 157, 255);
  outline: rgb(38, 157, 255) none 0px;
  text-decoration: underline rgb(38, 157, 255);
  text-decoration-color: rgb(38, 157, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(38, 157, 255);
  outline: rgb(38, 157, 255) none 0px;
  text-decoration: rgb(38, 157, 255);
  text-decoration-color: rgb(38, 157, 255);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(38, 157, 255);
  outline: rgb(38, 157, 255) none 0px;
  text-decoration: rgba(36, 156, 255, 0.3);
  text-decoration-color: rgba(36, 156, 255, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body dt {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ol > li {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul > li {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(240, 242, 245);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body table {
  color: rgb(46, 51, 56);
  margin-top: 12px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(242, 243, 245);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body tr {
  background-color: rgb(255, 255, 255);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body figcaption {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(240, 242, 245);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(242, 243, 245);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  padding-left: 25px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(242, 243, 245);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  padding-left: 25px;
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(227, 229, 232);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(78, 138, 228);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 245);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(78, 138, 228);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(78, 138, 228);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(36, 156, 255, 0.1);
  border-bottom-color: rgba(36, 156, 255, 0.15);
  border-left-color: rgba(36, 156, 255, 0.15);
  border-right-color: rgba(36, 156, 255, 0.15);
  border-top-color: rgba(36, 156, 255, 0.15);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(38, 157, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h2 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h3 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h4 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h5 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h6 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(38, 157, 255);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(227, 229, 232);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-width: 0px;
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(227, 229, 232);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(46, 51, 56);
  text-decoration: underline dotted rgb(46, 51, 56);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body input[type=text] {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body sub {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body summary {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body sup {
  color: rgb(46, 51, 56);
}`,
  },
};
