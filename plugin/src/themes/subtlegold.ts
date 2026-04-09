import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "subtlegold",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["flow-circular", "sf-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 41 !important;
  --accent-s: 52% !important;
  --background-modifier-active-hover: hsla(41, 52%, 66%, 0.15) !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-nav: #151615 !important;
  --background-nav-alt: #1f201f !important;
  --background-primary: #202020 !important;
  --background-primary-alt: #1a1a1a !important;
  --background-secondary: #161616 !important;
  --bases-cards-background: #202020 !important;
  --bases-cards-cover-background: #1a1a1a !important;
  --bases-group-heading-property-color: #888 !important;
  --bases-table-cell-background-active: #202020 !important;
  --bases-table-cell-background-disabled: #1a1a1a !important;
  --bases-table-cell-background-selected: hsla(41, 52%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #d6ba7c !important;
  --bases-table-group-background: #1a1a1a !important;
  --bases-table-header-background: #202020 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #888 !important;
  --bases-table-summary-background: #202020 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-border-color: #d6ba7c !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --bodyFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-weight: 600 !important;
  --canvas-background: #202020 !important;
  --canvas-card-label-color: #555 !important;
  --caret-color: #dcddde !important;
  --checkbox-border-color: #555 !important;
  --checkbox-border-color-hover: #888 !important;
  --checkbox-color: #d6ba7c !important;
  --checkbox-color-hover: #d6ba7c !important;
  --checkbox-marker-color: #202020 !important;
  --checkbox-size: 15px !important;
  --checklist-done-color: #888 !important;
  --code-background: #1a1a1a !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: #555 !important;
  --code-normal: #888 !important;
  --code-punctuation: #888 !important;
  --codeFont: Menlo, SFMono-Regular, Consolas, "Roboto Mono", Source Code Pro, monospace !important;
  --collapse-icon-color: #555 !important;
  --collapse-icon-color-collapsed: #d6ba7c !important;
  --color-accent: hsl(41, 52%, 66%) !important;
  --color-accent-1: hsl(38, 53.04%, 75.9%) !important;
  --color-accent-2: hsl(36, 54.6%, 85.14%) !important;
  --color-accent-hsl: 41, 52%, 66% !important;
  --dark: #dcddde !important;
  --darkgray: #dcddde !important;
  --divider-color-hover: #d6ba7c !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px #363636,
	inset 0 0 0 1px #363636 !important;
  --embed-border-left: 2px solid #d6ba7c !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid #d6ba7c !important;
  --file-header-background: #202020 !important;
  --file-header-background-focused: #202020 !important;
  --file-header-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-margins: 32px !important;
  --flair-background: #2a2a2a !important;
  --flair-color: #dcddde !important;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-interface: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-mermaid: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: Menlo, SFMono-Regular, Consolas, "Roboto Mono", Source Code Pro, monospace !important;
  --font-monospace-default: Menlo, SFMono-Regular, Consolas, "Roboto Mono", 'Source Code Pro', monospace !important;
  --font-text: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --footnote-id-color: #888 !important;
  --footnote-id-color-no-occurrences: #555 !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --golden-brown: #d6ba7c !important;
  --graph-node: #888 !important;
  --graph-node-focused: #d6ba7c !important;
  --graph-node-unresolved: #555 !important;
  --graph-text: #dcddde !important;
  --gray: #888 !important;
  --h1-size: 2em !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-size: 1.37em !important;
  --h3-weight: 600 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 600 !important;
  --h5-size: 1.12em !important;
  --h5-weight: 600 !important;
  --h6-size: 1.12em !important;
  --headerFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --heading-formatting: #555 !important;
  --highlight: #dbaa205e !important;
  --icon-color: #888 !important;
  --icon-color-active: #d6ba7c !important;
  --icon-color-focused: #dcddde !important;
  --icon-color-hover: #888 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #555 !important;
  --input-placeholder-color: #555 !important;
  --interactive-accent: #d6ba7c !important;
  --interactive-accent-hover: #d6ba7c !important;
  --interactive-accent-hsl: 41, 52%, 66% !important;
  --interactive-accent-rgb: #d6ba7c !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --light: #202020 !important;
  --lightgray: #161616 !important;
  --link-color: #d6ba7c !important;
  --link-color-hover: #d6ba7c !important;
  --link-external-color: #d6ba7c !important;
  --link-external-color-hover: #d6ba7c !important;
  --link-unresolved-color: #d6ba7c !important;
  --link-unresolved-decoration-color: hsla(41, 52%, 66%, 0.3) !important;
  --list-bullet-size: 5px !important;
  --list-indent: 2em !important;
  --list-marker-color: #555 !important;
  --list-marker-color-collapsed: #d6ba7c !important;
  --list-marker-color-hover: #888 !important;
  --list-numbered-style: auto !important;
  --menu-background: #161616 !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-text-color: #dcddde !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-text-color: #888 !important;
  --metadata-label-text-color-hover: #888 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --modal-background: #202020 !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: #555 !important;
  --nav-collapse-icon-color-collapsed: #555 !important;
  --nav-heading-color: #dcddde !important;
  --nav-heading-color-collapsed: #555 !important;
  --nav-heading-color-collapsed-hover: #888 !important;
  --nav-heading-color-hover: #dcddde !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: hsla(41, 52%, 66%, 0.2) !important;
  --nav-item-color: #888 !important;
  --nav-item-color-active: #dcddde !important;
  --nav-item-color-highlighted: #d6ba7c !important;
  --nav-item-color-hover: #dcddde !important;
  --nav-item-color-selected: #dcddde !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #555 !important;
  --nav-tag-color-active: #888 !important;
  --nav-tag-color-hover: #888 !important;
  --pdf-background: #202020 !important;
  --pdf-page-background: #202020 !important;
  --pdf-sidebar-background: #202020 !important;
  --pill-color: #888 !important;
  --pill-color-hover: #dcddde !important;
  --pill-color-remove: #555 !important;
  --pill-color-remove-hover: #d6ba7c !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #202020 !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: #161616 !important;
  --ribbon-background-collapsed: #202020 !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: #888 !important;
  --search-icon-color: #888 !important;
  --search-result-background: #202020 !important;
  --secondary: #d6ba7c !important;
  --setting-group-heading-color: #dcddde !important;
  --setting-items-background: #1a1a1a !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-radius: 50% !important;
  --status-bar-background: #161616 !important;
  --status-bar-text-color: #888 !important;
  --suggestion-background: #202020 !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --tab-background-active: #202020 !important;
  --tab-container-background: #161616 !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #161616 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #161616, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(41, 52%, 66%) !important;
  --tab-text-color: #555 !important;
  --tab-text-color-active: #888 !important;
  --tab-text-color-focused: #888 !important;
  --tab-text-color-focused-active: #888 !important;
  --tab-text-color-focused-active-current: #dcddde !important;
  --tab-text-color-focused-highlighted: #d6ba7c !important;
  --table-drag-handle-background-active: #d6ba7c !important;
  --table-drag-handle-color: #555 !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-color: #888 !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 400 !important;
  --table-selection: hsla(41, 52%, 66%, 0.1) !important;
  --table-selection-border-color: #d6ba7c !important;
  --table-white-space: normal !important;
  --tag-background: hsla(41, 52%, 66%, 0.1) !important;
  --tag-background-hover: hsla(41, 52%, 66%, 0.2) !important;
  --tag-border-color: hsla(41, 52%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(41, 52%, 66%, 0.15) !important;
  --tag-color: #d6ba7c !important;
  --tag-color-hover: #d6ba7c !important;
  --tertiary: #d6ba7c !important;
  --text-accent: #d6ba7c !important;
  --text-accent-hover: #d6ba7c !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #555 !important;
  --text-highlight-bg: #dbaa205e !important;
  --text-muted: #888 !important;
  --text-nav-selected: #000000 !important;
  --text-normal: #dcddde !important;
  --text-on-accent: #dcddde !important;
  --text-selection: hsla(41, 52%, 66%, 0.33) !important;
  --textHighlight: #dbaa205e !important;
  --titleFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #161616 !important;
  --titlebar-text-color: #888 !important;
  --titlebar-text-color-focused: #dcddde !important;
  --vault-name-color: #dcddde !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #dcddde !important;
  --vault-profile-color-hover: #dcddde !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 22);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(32, 32, 32);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(136, 136, 136);
  font-weight: 400;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(22, 22, 22);
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(213, 185, 123, 0.1);
  color: rgb(214, 186, 124);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 22);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 22);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(32, 32, 32);
  color: rgb(220, 221, 222);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(219, 170, 32, 0.37);
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(85, 85, 85);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(214, 186, 124);
  border-color: rgb(214, 186, 124);
}

html[saved-theme="dark"] body p {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(214, 186, 124);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration-color: rgb(214, 186, 124);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 186, 124);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration-color: rgb(214, 186, 124);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(214, 186, 124);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration: underline rgba(213, 185, 123, 0.3);
  text-decoration-color: rgba(213, 185, 123, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body dt {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(85, 85, 85);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body table {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 166.5px;
}

html[saved-theme="dark"] body td {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body th {
  color: rgb(136, 136, 136);
  font-weight: 400;
  text-align: left;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
  font-family: "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  color: rgb(136, 136, 136);
  font-family: "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(26, 26, 26);
  overflow-x: hidden;
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  overflow-x: hidden;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(214, 186, 124);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  padding-left: 24px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  margin-left: -21px;
  margin-right: 6px;
  width: 15px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(68, 138, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 176, 255;
  background-color: rgba(0, 176, 255, 0.1);
  border-bottom-color: rgba(0, 176, 255, 0.25);
  border-left-color: rgba(0, 176, 255, 0.25);
  border-right-color: rgba(0, 176, 255, 0.25);
  border-top-color: rgba(0, 176, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 245, 0, 87;
  background-color: rgba(245, 0, 87, 0.1);
  border-bottom-color: rgba(245, 0, 87, 0.25);
  border-left-color: rgba(245, 0, 87, 0.25);
  border-right-color: rgba(245, 0, 87, 0.25);
  border-top-color: rgba(245, 0, 87, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 255, 23, 68;
  background-color: rgba(255, 23, 68, 0.1);
  border-bottom-color: rgba(255, 23, 68, 0.25);
  border-left-color: rgba(255, 23, 68, 0.25);
  border-right-color: rgba(255, 23, 68, 0.25);
  border-top-color: rgba(255, 23, 68, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 124, 77, 255;
  background-color: rgba(124, 77, 255, 0.1);
  border-bottom-color: rgba(124, 77, 255, 0.25);
  border-left-color: rgba(124, 77, 255, 0.25);
  border-right-color: rgba(124, 77, 255, 0.25);
  border-top-color: rgba(124, 77, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 255, 82, 82;
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-color: rgba(255, 82, 82, 0.25);
  border-left-color: rgba(255, 82, 82, 0.25);
  border-right-color: rgba(255, 82, 82, 0.25);
  border-top-color: rgba(255, 82, 82, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 68, 138, 255;
  background-color: rgba(68, 138, 255, 0.1);
  border-bottom-color: rgba(68, 138, 255, 0.25);
  border-left-color: rgba(68, 138, 255, 0.25);
  border-right-color: rgba(68, 138, 255, 0.25);
  border-top-color: rgba(68, 138, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 100, 221, 23;
  background-color: rgba(100, 221, 23, 0.1);
  border-bottom-color: rgba(100, 221, 23, 0.25);
  border-left-color: rgba(100, 221, 23, 0.25);
  border-right-color: rgba(100, 221, 23, 0.25);
  border-top-color: rgba(100, 221, 23, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 0, 200, 83;
  background-color: rgba(0, 200, 83, 0.1);
  border-bottom-color: rgba(0, 200, 83, 0.25);
  border-left-color: rgba(0, 200, 83, 0.25);
  border-right-color: rgba(0, 200, 83, 0.25);
  border-top-color: rgba(0, 200, 83, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 165;
  background-color: rgba(0, 191, 165, 0.1);
  border-bottom-color: rgba(0, 191, 165, 0.25);
  border-left-color: rgba(0, 191, 165, 0.25);
  border-right-color: rgba(0, 191, 165, 0.25);
  border-top-color: rgba(0, 191, 165, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 145, 0;
  background-color: rgba(255, 145, 0, 0.1);
  border-bottom-color: rgba(255, 145, 0, 0.25);
  border-left-color: rgba(255, 145, 0, 0.25);
  border-right-color: rgba(255, 145, 0, 0.25);
  border-top-color: rgba(255, 145, 0, 0.25);
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
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(32, 32, 32);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  cursor: grab;
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(213, 185, 123, 0.1);
  border-bottom-color: rgba(213, 185, 123, 0.15);
  border-left-color: rgba(213, 185, 123, 0.15);
  border-right-color: rgba(213, 185, 123, 0.15);
  border-top-color: rgba(213, 185, 123, 0.15);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(214, 186, 124);
}

html[saved-theme="dark"] body h1 {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgba(68, 138, 255, 0.25);
  border-left-color: rgba(68, 138, 255, 0.25);
  border-right-color: rgba(68, 138, 255, 0.25);
  border-top-color: rgba(68, 138, 255, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 221, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(22, 22, 22);
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(136, 136, 136);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(54, 54, 54);
  border-left-color: rgb(54, 54, 54);
  border-right-color: rgb(54, 54, 54);
  border-top-color: rgb(54, 54, 54);
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-size: 12px;
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 221, 222);
  vertical-align: top;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(213, 185, 123, 0.1);
  border-bottom-color: rgba(213, 185, 123, 0.15);
  border-left-color: rgba(213, 185, 123, 0.15);
  border-right-color: rgba(213, 185, 123, 0.15);
  border-top-color: rgba(213, 185, 123, 0.15);
  color: rgb(214, 186, 124);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 41 !important;
  --accent-s: 52% !important;
  --background-modifier-active-hover: hsla(41, 52%, 66%, 0.15) !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.075) !important;
  --background-nav: rgba(41, 44, 46, 255) !important;
  --background-nav-alt: rgba(58, 62, 63, 255) !important;
  --background-primary: rgba(250, 250, 250) !important;
  --bases-cards-background: rgba(250, 250, 250) !important;
  --bases-table-cell-background-active: rgba(250, 250, 250) !important;
  --bases-table-cell-background-selected: hsla(41, 52%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #d6ba7c !important;
  --bases-table-header-background: rgba(250, 250, 250) !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bases-table-summary-background: rgba(250, 250, 250) !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075) !important;
  --blockquote-border-color: #d6ba7c !important;
  --blur-background: color-mix(in srgb, rgba(250, 250, 250) 65%, transparent) linear-gradient(rgba(250, 250, 250), color-mix(in srgb, rgba(250, 250, 250) 65%, transparent)) !important;
  --bodyFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-weight: 600 !important;
  --canvas-background: rgba(250, 250, 250) !important;
  --canvas-card-label-color: rgba(150, 150, 150, 255) !important;
  --caret-color: rgba(44, 44, 44, 255) !important;
  --checkbox-border-color: rgba(150, 150, 150, 255) !important;
  --checkbox-color: #d6ba7c !important;
  --checkbox-color-hover: #d6ba7c !important;
  --checkbox-marker-color: rgba(250, 250, 250) !important;
  --checkbox-size: 15px !important;
  --code-block-background: #ffff !important;
  --code-block-border: #92a1a17a !important;
  --code-bracket-background: rgba(0, 0, 0, 0.075) !important;
  --code-comment: rgba(150, 150, 150, 255) !important;
  --code-normal: #5c5c5c !important;
  --codeFont: Menlo, SFMono-Regular, Consolas, "Roboto Mono", Source Code Pro, monospace !important;
  --collapse-icon-color: rgba(150, 150, 150, 255) !important;
  --collapse-icon-color-collapsed: #d6ba7c !important;
  --color-accent: hsl(41, 52%, 66%) !important;
  --color-accent-1: hsl(40, 52.52%, 70.95%) !important;
  --color-accent-2: hsl(38, 53.04%, 75.9%) !important;
  --color-accent-hsl: 41, 52%, 66% !important;
  --dark: rgba(44, 44, 44, 255) !important;
  --darkgray: rgba(44, 44, 44, 255) !important;
  --divider-color-hover: #d6ba7c !important;
  --embed-block-shadow-hover: 0 0 0 1px #e0e0e0,
	inset 0 0 0 1px #e0e0e0 !important;
  --embed-border-left: 2px solid #d6ba7c !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid #d6ba7c !important;
  --file-header-background: rgba(250, 250, 250) !important;
  --file-header-background-focused: rgba(250, 250, 250) !important;
  --file-header-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-margins: 32px !important;
  --flair-color: rgba(44, 44, 44, 255) !important;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-interface: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-mermaid: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: Menlo, SFMono-Regular, Consolas, "Roboto Mono", Source Code Pro, monospace !important;
  --font-monospace-default: Menlo, SFMono-Regular, Consolas, "Roboto Mono", 'Source Code Pro', monospace !important;
  --font-text: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --footnote-id-color-no-occurrences: rgba(150, 150, 150, 255) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --golden-brown: #d6ba7c !important;
  --graph-node-focused: #d6ba7c !important;
  --graph-node-unresolved: rgba(150, 150, 150, 255) !important;
  --graph-text: rgba(44, 44, 44, 255) !important;
  --gray: rgba(150, 150, 150, 255) !important;
  --h1-size: 2em !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-size: 1.37em !important;
  --h3-weight: 600 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 600 !important;
  --h5-size: 1.12em !important;
  --h5-weight: 600 !important;
  --h6-size: 1.12em !important;
  --headerFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --heading-formatting: rgba(150, 150, 150, 255) !important;
  --highlight: #dbaa205e !important;
  --icon-color-active: #d6ba7c !important;
  --icon-color-focused: rgba(44, 44, 44, 255) !important;
  --inline-title-size: 2em !important;
  --input-date-separator: rgba(150, 150, 150, 255) !important;
  --input-placeholder-color: rgba(150, 150, 150, 255) !important;
  --interactive-accent: #d6ba7c !important;
  --interactive-accent-hover: #d6ba7c !important;
  --interactive-accent-hsl: 41, 52%, 66% !important;
  --interactive-accent-rgb: #d6ba7c !important;
  --light: rgba(250, 250, 250) !important;
  --link-color: #d6ba7c !important;
  --link-color-hover: #d6ba7c !important;
  --link-external-color: #d6ba7c !important;
  --link-external-color-hover: #d6ba7c !important;
  --link-unresolved-color: #d6ba7c !important;
  --link-unresolved-decoration-color: hsla(41, 52%, 66%, 0.3) !important;
  --list-bullet-size: 5px !important;
  --list-color: #d6ba7c !important;
  --list-indent: 2em !important;
  --list-marker-color: rgba(150, 150, 150, 255) !important;
  --list-marker-color-collapsed: #d6ba7c !important;
  --list-numbered-style: auto !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-input-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-text-color: rgba(44, 44, 44, 255) !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-label-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075) !important;
  --modal-background: rgba(250, 250, 250) !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: rgba(150, 150, 150, 255) !important;
  --nav-collapse-icon-color-collapsed: rgba(150, 150, 150, 255) !important;
  --nav-heading-color: rgba(44, 44, 44, 255) !important;
  --nav-heading-color-collapsed: rgba(150, 150, 150, 255) !important;
  --nav-heading-color-hover: rgba(44, 44, 44, 255) !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-selected: hsla(41, 52%, 66%, 0.2) !important;
  --nav-item-color-active: rgba(44, 44, 44, 255) !important;
  --nav-item-color-highlighted: #d6ba7c !important;
  --nav-item-color-hover: rgba(44, 44, 44, 255) !important;
  --nav-item-color-selected: rgba(44, 44, 44, 255) !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgba(150, 150, 150, 255) !important;
  --pdf-background: rgba(250, 250, 250) !important;
  --pdf-page-background: rgba(250, 250, 250) !important;
  --pdf-sidebar-background: rgba(250, 250, 250) !important;
  --pill-color-hover: rgba(44, 44, 44, 255) !important;
  --pill-color-remove: rgba(150, 150, 150, 255) !important;
  --pill-color-remove-hover: #d6ba7c !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: rgba(250, 250, 250) !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, rgba(250, 250, 250) 65%, transparent) linear-gradient(rgba(250, 250, 250), color-mix(in srgb, rgba(250, 250, 250) 65%, transparent)) !important;
  --ribbon-background-collapsed: rgba(250, 250, 250) !important;
  --scrollbar-radius: 10px !important;
  --search-result-background: rgba(250, 250, 250) !important;
  --secondary: #d6ba7c !important;
  --setting-group-heading-color: rgba(44, 44, 44, 255) !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-radius: 50% !important;
  --suggestion-background: rgba(250, 250, 250) !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --tab-background-active: rgba(250, 250, 250) !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(41, 52%, 66%) !important;
  --tab-text-color: rgba(150, 150, 150, 255) !important;
  --tab-text-color-focused-active-current: rgba(44, 44, 44, 255) !important;
  --tab-text-color-focused-highlighted: #d6ba7c !important;
  --table-drag-handle-background-active: #d6ba7c !important;
  --table-drag-handle-color: rgba(150, 150, 150, 255) !important;
  --table-header-color: #5c5c5c !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 400 !important;
  --table-selection: hsla(41, 52%, 66%, 0.1) !important;
  --table-selection-border-color: #d6ba7c !important;
  --table-white-space: normal !important;
  --tag-background: hsla(41, 52%, 66%, 0.1) !important;
  --tag-background-hover: hsla(41, 52%, 66%, 0.2) !important;
  --tag-border-color: hsla(41, 52%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(41, 52%, 66%, 0.15) !important;
  --tag-color: #d6ba7c !important;
  --tag-color-hover: #d6ba7c !important;
  --tertiary: #d6ba7c !important;
  --text-accent: #d6ba7c !important;
  --text-accent-hover: #d6ba7c !important;
  --text-faint: rgba(150, 150, 150, 255) !important;
  --text-highlight-bg: #dbaa205e !important;
  --text-nav: rgba(190, 190, 190, 255) !important;
  --text-nav-selected: rgba(255, 255, 255, 255) !important;
  --text-normal: rgba(44, 44, 44, 255) !important;
  --text-selection: hsla(41, 52%, 66%, 0.2) !important;
  --textHighlight: #dbaa205e !important;
  --titleFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-text-color-focused: rgba(44, 44, 44, 255) !important;
  --vault-name-color: rgba(44, 44, 44, 255) !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: rgba(44, 44, 44, 255) !important;
  --vault-profile-color-hover: rgba(44, 44, 44, 255) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(92, 92, 92);
  font-weight: 400;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 250, 250);
  border-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(213, 185, 123, 0.1);
  color: rgb(214, 186, 124);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 250, 250);
  color: rgb(44, 44, 44);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(219, 170, 32, 0.37);
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body del {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(150, 150, 150);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(214, 186, 124);
  border-color: rgb(214, 186, 124);
}

html[saved-theme="light"] body p {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(214, 186, 124);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration-color: rgb(214, 186, 124);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 186, 124);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration-color: rgb(214, 186, 124);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(214, 186, 124);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration: underline rgba(213, 185, 123, 0.3);
  text-decoration-color: rgba(213, 185, 123, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body dt {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body ol > li {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body ul > li {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(150, 150, 150);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body table {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 166.5px;
}

html[saved-theme="light"] body td {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body th {
  color: rgb(92, 92, 92);
  font-weight: 400;
  text-align: left;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  color: rgb(92, 92, 92);
  font-family: "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(92, 92, 92);
  font-family: "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  overflow-x: hidden;
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body pre:has(> code) {
  overflow-x: hidden;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body figcaption {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(44, 44, 44);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(214, 186, 124);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  padding-left: 24px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(150, 150, 150);
  border-left-color: rgb(150, 150, 150);
  border-right-color: rgb(150, 150, 150);
  border-top-color: rgb(150, 150, 150);
  margin-left: -21px;
  margin-right: 6px;
  width: 15px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(68, 138, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 176, 255;
  background-color: rgba(0, 176, 255, 0.1);
  border-bottom-color: rgba(0, 176, 255, 0.25);
  border-left-color: rgba(0, 176, 255, 0.25);
  border-right-color: rgba(0, 176, 255, 0.25);
  border-top-color: rgba(0, 176, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 245, 0, 87;
  background-color: rgba(245, 0, 87, 0.1);
  border-bottom-color: rgba(245, 0, 87, 0.25);
  border-left-color: rgba(245, 0, 87, 0.25);
  border-right-color: rgba(245, 0, 87, 0.25);
  border-top-color: rgba(245, 0, 87, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 255, 23, 68;
  background-color: rgba(255, 23, 68, 0.1);
  border-bottom-color: rgba(255, 23, 68, 0.25);
  border-left-color: rgba(255, 23, 68, 0.25);
  border-right-color: rgba(255, 23, 68, 0.25);
  border-top-color: rgba(255, 23, 68, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 124, 77, 255;
  background-color: rgba(124, 77, 255, 0.1);
  border-bottom-color: rgba(124, 77, 255, 0.25);
  border-left-color: rgba(124, 77, 255, 0.25);
  border-right-color: rgba(124, 77, 255, 0.25);
  border-top-color: rgba(124, 77, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 255, 82, 82;
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-color: rgba(255, 82, 82, 0.25);
  border-left-color: rgba(255, 82, 82, 0.25);
  border-right-color: rgba(255, 82, 82, 0.25);
  border-top-color: rgba(255, 82, 82, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 68, 138, 255;
  background-color: rgba(68, 138, 255, 0.1);
  border-bottom-color: rgba(68, 138, 255, 0.25);
  border-left-color: rgba(68, 138, 255, 0.25);
  border-right-color: rgba(68, 138, 255, 0.25);
  border-top-color: rgba(68, 138, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 100, 221, 23;
  background-color: rgba(100, 221, 23, 0.1);
  border-bottom-color: rgba(100, 221, 23, 0.25);
  border-left-color: rgba(100, 221, 23, 0.25);
  border-right-color: rgba(100, 221, 23, 0.25);
  border-top-color: rgba(100, 221, 23, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 0, 200, 83;
  background-color: rgba(0, 200, 83, 0.1);
  border-bottom-color: rgba(0, 200, 83, 0.25);
  border-left-color: rgba(0, 200, 83, 0.25);
  border-right-color: rgba(0, 200, 83, 0.25);
  border-top-color: rgba(0, 200, 83, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 165;
  background-color: rgba(0, 191, 165, 0.1);
  border-bottom-color: rgba(0, 191, 165, 0.25);
  border-left-color: rgba(0, 191, 165, 0.25);
  border-right-color: rgba(0, 191, 165, 0.25);
  border-top-color: rgba(0, 191, 165, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 145, 0;
  background-color: rgba(255, 145, 0, 0.1);
  border-bottom-color: rgba(255, 145, 0, 0.25);
  border-left-color: rgba(255, 145, 0, 0.25);
  border-right-color: rgba(255, 145, 0, 0.25);
  border-top-color: rgba(255, 145, 0, 0.25);
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
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(250, 250, 250);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(44, 44, 44);
  cursor: grab;
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(250, 250, 250);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(213, 185, 123, 0.1);
  border-bottom-color: rgba(213, 185, 123, 0.15);
  border-left-color: rgba(213, 185, 123, 0.15);
  border-right-color: rgba(213, 185, 123, 0.15);
  border-top-color: rgba(213, 185, 123, 0.15);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(214, 186, 124);
}

html[saved-theme="light"] body h1 {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgba(68, 138, 255, 0.25);
  border-left-color: rgba(68, 138, 255, 0.25);
  border-right-color: rgba(68, 138, 255, 0.25);
  border-top-color: rgba(68, 138, 255, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(44, 44, 44);
}`,
    footer: `html[saved-theme="light"] body footer {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(150, 150, 150);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .metadata {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  color: rgb(92, 92, 92);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-size: 12px;
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body sub {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body summary {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body sup {
  color: rgb(44, 44, 44);
  vertical-align: top;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(213, 185, 123, 0.1);
  border-bottom-color: rgba(213, 185, 123, 0.15);
  border-left-color: rgba(213, 185, 123, 0.15);
  border-right-color: rgba(213, 185, 123, 0.15);
  border-top-color: rgba(213, 185, 123, 0.15);
  color: rgb(214, 186, 124);
}`,
  },
};
