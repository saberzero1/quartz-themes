import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vercel-geist",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["geist", "geist-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-blue: #4d8bf9 !important;
  --background-1: #000000 !important;
  --background-2: #000000 !important;
  --background-3: #333333 !important;
  --background-accent: #4d8bf9 !important;
  --background-modifier-border: #333333 !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.4) !important;
  --background-modifier-error: #ff0000 !important;
  --background-modifier-error-hover: #ff3333 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-success: #0070f3 !important;
  --background-primary: #000000 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #333333 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-cards-shadow: 0 0 0 1px #333333 !important;
  --bases-embed-border-color: #333333 !important;
  --bases-group-heading-property-color: #888888 !important;
  --bases-table-border-color: #333333 !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4d8bf9 !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-color: #888888 !important;
  --bases-table-summary-background: #000000 !important;
  --blockquote-border: #0070f3 !important;
  --blockquote-border-color: #4d8bf9 !important;
  --blur-background: color-mix(in srgb, #000000 65%, transparent) linear-gradient(#000000, color-mix(in srgb, #000000 65%, transparent)) !important;
  --border-1: #333333 !important;
  --border-2: #444444 !important;
  --border-3: #0070f3 !important;
  --border-color: #333333 !important;
  --canvas-background: #000000 !important;
  --canvas-card-label-color: #888888 !important;
  --caret-color: #ffffff !important;
  --checkbox-border-color: #888888 !important;
  --checkbox-border-color-hover: #888888 !important;
  --checkbox-color: #4d8bf9 !important;
  --checkbox-color-hover: #4d8bf9 !important;
  --checkbox-marker-color: #000000 !important;
  --checklist-done-color: #888888 !important;
  --code-background: #000000 !important;
  --code-block: #ffffff !important;
  --code-border-color: #333333 !important;
  --code-comment: #888888 !important;
  --code-normal: #ffffff !important;
  --code-punctuation: #888888 !important;
  --collapse-icon-color: #888888 !important;
  --dark: #ffffff !important;
  --darkgray: #ffffff !important;
  --divider-color: #333333 !important;
  --divider-color-hover: #4d8bf9 !important;
  --dropdown-background: #000000 !important;
  --dropdown-background-hover: #111111 !important;
  --embed-block-shadow-hover: 0 0 0 1px #333333, inset 0 0 0 1px #333333 !important;
  --embed-border-start: 2px solid #4d8bf9 !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --flair-background: #000000 !important;
  --flair-color: #ffffff !important;
  --font-family-editor: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-family-monospace: "Geist Mono", "SF Mono", SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace !important;
  --font-family-preview: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-size-code: 14px !important;
  --font-size-h1: 26px !important;
  --font-size-h2: 24px !important;
  --font-size-h3: 20px !important;
  --font-size-h4: 18px !important;
  --font-size-h5: 17px !important;
  --font-size-h6: 16px !important;
  --font-size-normal: 16px !important;
  --font-size-side-dock: 14px !important;
  --font-size-side-dock-title: 16px !important;
  --font-size-status-bar: 14px !important;
  --footnote-divider-color: #333333 !important;
  --footnote-id-color: #888888 !important;
  --footnote-id-color-no-occurrences: #888888 !important;
  --graph-node: #888888 !important;
  --graph-node-unresolved: #888888 !important;
  --graph-text: #ffffff !important;
  --gray: #888888 !important;
  --heading-color-h1: #4d8bf9 !important;
  --heading-color-h2: #0070f3 !important;
  --heading-color-h3: #ffffff !important;
  --heading-color-h4: #ffffff !important;
  --heading-color-h5: #ffffff !important;
  --heading-color-h6: #888888 !important;
  --heading-formatting: #888888 !important;
  --highlight: #adc8ff !important;
  --highlight-high: #444444 !important;
  --highlight-low: #111111 !important;
  --highlight-med: #333333 !important;
  --hr-color: #333333 !important;
  --icon-color: #888888 !important;
  --icon-color-focused: #ffffff !important;
  --icon-color-hover: #888888 !important;
  --inline-code: #0070f3 !important;
  --inline-code-bg: #111111 !important;
  --input-date-separator: #888888 !important;
  --input-placeholder-color: #888888 !important;
  --interactive-accent: #4d8bf9 !important;
  --interactive-accent-active: #0070f3 !important;
  --interactive-accent-hover: #4d8bf9 !important;
  --interactive-hover: #111111 !important;
  --interactive-normal: #000000 !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: #4d8bf9 !important;
  --link-color-hover: #0070f3 !important;
  --link-external-color: #888888 !important;
  --link-external-color-hover: #0070f3 !important;
  --list-marker-color: #888888 !important;
  --list-marker-color-hover: #888888 !important;
  --menu-background: #000000 !important;
  --metadata-border-color: #333333 !important;
  --metadata-divider-color: #333333 !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-text-color: #888888 !important;
  --metadata-label-text-color-hover: #888888 !important;
  --modal-background: #000000 !important;
  --nav-collapse-icon-color: #888888 !important;
  --nav-collapse-icon-color-collapsed: #888888 !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed: #888888 !important;
  --nav-heading-color-collapsed-hover: #888888 !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-item-color: #888888 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-tag-color: #888888 !important;
  --nav-tag-color-active: #888888 !important;
  --nav-tag-color-hover: #888888 !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-shadow: 0 0 0 1px #333333 !important;
  --pdf-sidebar-background: #000000 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #333333 !important;
  --pill-border-color: #333333 !important;
  --pill-color: #888888 !important;
  --pill-color-hover: #ffffff !important;
  --pill-color-remove: #888888 !important;
  --pre-code: #000000 !important;
  --prompt-background: #000000 !important;
  --raised-background: color-mix(in srgb, #000000 65%, transparent) linear-gradient(#000000, color-mix(in srgb, #000000 65%, transparent)) !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-active-thumb-bg: #444444 !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: #333333 !important;
  --search-clear-button-color: #888888 !important;
  --search-icon-color: #888888 !important;
  --search-result-background: #000000 !important;
  --secondary: #4d8bf9 !important;
  --setting-group-heading-color: #ffffff !important;
  --setting-items-background: #000000 !important;
  --setting-items-border-color: #333333 !important;
  --slider-track-background: #333333 !important;
  --status-bar-background: #000000 !important;
  --status-bar-border-color: #333333 !important;
  --status-bar-text-color: #888888 !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #000000 !important;
  --tab-outline-color: #333333 !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color: #888888 !important;
  --tab-text-color-active: #888888 !important;
  --tab-text-color-focused: #888888 !important;
  --tab-text-color-focused-active: #888888 !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --table-add-button-border-color: #333333 !important;
  --table-border-color: #333333 !important;
  --table-drag-handle-background-active: #4d8bf9 !important;
  --table-drag-handle-color: #888888 !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #333333 !important;
  --table-header-color: #ffffff !important;
  --table-selection-border-color: #4d8bf9 !important;
  --tertiary: #0070f3 !important;
  --text-1: #ffffff !important;
  --text-2: #888888 !important;
  --text-accent-hover: #0070f3 !important;
  --text-error: #ff0000 !important;
  --text-error-hover: #ff3333 !important;
  --text-faint: #888888 !important;
  --text-highlight-bg: #adc8ff !important;
  --text-muted: #888888 !important;
  --text-normal: #ffffff !important;
  --text-on-accent: #ffffff !important;
  --text-selection: rgba(77, 139, 249, 0.3) !important;
  --textHighlight: #adc8ff !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-border-color: #333333 !important;
  --titlebar-text-color: #888888 !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
  --vercel-blue-100: #ffffff !important;
  --vercel-blue-200: #d6e4ff !important;
  --vercel-blue-300: #adc8ff !important;
  --vercel-blue-400: #84a9ff !important;
  --vercel-blue-500: #4d8bf9 !important;
  --vercel-blue-600: #0070f3 !important;
  --vercel-blue-700: #0051cc !important;
  --vercel-blue-800: #003585 !important;
  --vercel-blue-900: #00153d !important;
  --vercel-gray-100: #ffffff !important;
  --vercel-gray-200: #eaeaea !important;
  --vercel-gray-300: #999999 !important;
  --vercel-gray-400: #888888 !important;
  --vercel-gray-500: #666666 !important;
  --vercel-gray-600: #444444 !important;
  --vercel-gray-700: #333333 !important;
  --vercel-gray-800: #111111 !important;
  --vercel-gray-900: #000000 !important;
  --vim-cursor: #0070f3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(0, 0, 0);
  border-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
  font-weight: 800;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(0, 0, 0);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(173, 200, 255);
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(68, 68, 68);
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(77, 139, 249);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(77, 139, 249) none 0px;
  text-decoration-color: rgb(77, 139, 249);
  transition: 0.2s;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(77, 139, 249);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(77, 139, 249) none 0px;
  text-decoration-color: rgb(77, 139, 249);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body dt {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(0, 0, 0);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  width: 195.062px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body th {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
  font-weight: 800;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(51, 51, 51);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(136, 136, 136);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-width: 1px;
  border-left-color: rgb(51, 51, 51);
  border-left-width: 1px;
  border-right-color: rgb(51, 51, 51);
  border-right-width: 1px;
  border-top-color: rgb(51, 51, 51);
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-width: 1px;
  border-left-color: rgb(51, 51, 51);
  border-left-width: 1px;
  border-right-color: rgb(51, 51, 51);
  border-right-width: 1px;
  border-top-color: rgb(51, 51, 51);
  border-top-width: 1px;
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-width: 1px;
  border-left-color: rgb(51, 51, 51);
  border-left-width: 1px;
  border-right-color: rgb(51, 51, 51);
  border-right-width: 1px;
  border-top-color: rgb(51, 51, 51);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-width: 1px;
  border-left-color: rgb(51, 51, 51);
  border-left-width: 1px;
  border-right-color: rgb(51, 51, 51);
  border-right-width: 1px;
  border-top-color: rgb(51, 51, 51);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(77, 139, 249);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 0px;
  transition: 0.2s;
  width: 16.6562px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
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
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(77, 139, 249);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h2 {
  color: rgb(0, 112, 243);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h6 {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(136, 136, 136);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
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
  color: rgb(136, 136, 136);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(0, 112, 243);
}`,
  },
  light: {
    base: `:root:root {
  --accent-blue: #4d8bf9 !important;
  --background-1: #000000 !important;
  --background-2: #000000 !important;
  --background-3: #333333 !important;
  --background-accent: #4d8bf9 !important;
  --background-modifier-border: #eaeaea !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.4) !important;
  --background-modifier-error: #ff0000 !important;
  --background-modifier-error-hover: #ff3333 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-success: #0070f3 !important;
  --background-primary: #000000 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #333333 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-cards-shadow: 0 0 0 1px #eaeaea !important;
  --bases-embed-border-color: #eaeaea !important;
  --bases-group-heading-property-color: #888888 !important;
  --bases-table-border-color: #eaeaea !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4d8bf9 !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-color: #888888 !important;
  --bases-table-summary-background: #000000 !important;
  --blockquote-border: #0070f3 !important;
  --blockquote-border-color: #4d8bf9 !important;
  --blur-background: color-mix(in srgb, #000000 65%, transparent) linear-gradient(#000000, color-mix(in srgb, #000000 65%, transparent)) !important;
  --border-1: #eaeaea !important;
  --border-2: #999999 !important;
  --border-3: #0070f3 !important;
  --border-color: #eaeaea !important;
  --canvas-background: #000000 !important;
  --canvas-card-label-color: #888888 !important;
  --caret-color: #ffffff !important;
  --checkbox-border-color: #888888 !important;
  --checkbox-border-color-hover: #888888 !important;
  --checkbox-color: #4d8bf9 !important;
  --checkbox-color-hover: #4d8bf9 !important;
  --checkbox-marker-color: #000000 !important;
  --checklist-done-color: #888888 !important;
  --code-background: #000000 !important;
  --code-block: #ffffff !important;
  --code-border-color: #eaeaea !important;
  --code-comment: #888888 !important;
  --code-normal: #ffffff !important;
  --code-punctuation: #888888 !important;
  --collapse-icon-color: #888888 !important;
  --dark: #ffffff !important;
  --darkgray: #ffffff !important;
  --divider-color: #eaeaea !important;
  --divider-color-hover: #4d8bf9 !important;
  --dropdown-background: #000000 !important;
  --dropdown-background-hover: #eaeaea !important;
  --embed-block-shadow-hover: 0 0 0 1px #eaeaea, inset 0 0 0 1px #eaeaea !important;
  --embed-border-start: 2px solid #4d8bf9 !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --flair-background: #000000 !important;
  --flair-color: #ffffff !important;
  --font-family-editor: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-family-monospace: "Geist Mono", "SF Mono", SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace !important;
  --font-family-preview: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-size-code: 14px !important;
  --font-size-h1: 26px !important;
  --font-size-h2: 24px !important;
  --font-size-h3: 20px !important;
  --font-size-h4: 18px !important;
  --font-size-h5: 17px !important;
  --font-size-h6: 16px !important;
  --font-size-normal: 16px !important;
  --font-size-side-dock: 14px !important;
  --font-size-side-dock-title: 16px !important;
  --font-size-status-bar: 14px !important;
  --footnote-divider-color: #eaeaea !important;
  --footnote-id-color: #888888 !important;
  --footnote-id-color-no-occurrences: #888888 !important;
  --graph-node: #888888 !important;
  --graph-node-unresolved: #888888 !important;
  --graph-text: #ffffff !important;
  --gray: #888888 !important;
  --heading-color-h1: #4d8bf9 !important;
  --heading-color-h2: #0070f3 !important;
  --heading-color-h3: #ffffff !important;
  --heading-color-h4: #ffffff !important;
  --heading-color-h5: #ffffff !important;
  --heading-color-h6: #888888 !important;
  --heading-formatting: #888888 !important;
  --highlight: #adc8ff !important;
  --highlight-high: #adc8ff !important;
  --highlight-low: #eaeaea !important;
  --highlight-med: #999999 !important;
  --hr-color: #eaeaea !important;
  --icon-color: #888888 !important;
  --icon-color-focused: #ffffff !important;
  --icon-color-hover: #888888 !important;
  --inline-code: #0070f3 !important;
  --inline-code-bg: #eaeaea !important;
  --input-date-separator: #888888 !important;
  --input-placeholder-color: #888888 !important;
  --interactive-accent: #4d8bf9 !important;
  --interactive-accent-active: #0070f3 !important;
  --interactive-accent-hover: #4d8bf9 !important;
  --interactive-hover: #eaeaea !important;
  --interactive-normal: #000000 !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: #0070f3 !important;
  --link-color-hover: #0051cc !important;
  --link-external-color-hover: #0051cc !important;
  --list-marker-color: #888888 !important;
  --list-marker-color-hover: #888888 !important;
  --menu-background: #000000 !important;
  --metadata-border-color: #eaeaea !important;
  --metadata-divider-color: #eaeaea !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-text-color: #888888 !important;
  --metadata-label-text-color-hover: #888888 !important;
  --modal-background: #000000 !important;
  --nav-collapse-icon-color: #888888 !important;
  --nav-collapse-icon-color-collapsed: #888888 !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed: #888888 !important;
  --nav-heading-color-collapsed-hover: #888888 !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-item-color: #888888 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-tag-color: #888888 !important;
  --nav-tag-color-active: #888888 !important;
  --nav-tag-color-hover: #888888 !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-sidebar-background: #000000 !important;
  --pill-border-color: #eaeaea !important;
  --pill-color: #888888 !important;
  --pill-color-hover: #ffffff !important;
  --pill-color-remove: #888888 !important;
  --pre-code: #000000 !important;
  --pre-code-bg: #eaeaea !important;
  --prompt-background: #000000 !important;
  --raised-background: color-mix(in srgb, #000000 65%, transparent) linear-gradient(#000000, color-mix(in srgb, #000000 65%, transparent)) !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-active-thumb-bg: #999999 !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: #eaeaea !important;
  --search-clear-button-color: #888888 !important;
  --search-icon-color: #888888 !important;
  --search-result-background: #000000 !important;
  --secondary: #4d8bf9 !important;
  --setting-group-heading-color: #ffffff !important;
  --setting-items-background: #000000 !important;
  --setting-items-border-color: #eaeaea !important;
  --slider-track-background: #eaeaea !important;
  --status-bar-background: #000000 !important;
  --status-bar-border-color: #eaeaea !important;
  --status-bar-text-color: #888888 !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #000000 !important;
  --tab-outline-color: #eaeaea !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color: #888888 !important;
  --tab-text-color-active: #888888 !important;
  --tab-text-color-focused: #888888 !important;
  --tab-text-color-focused-active: #888888 !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --table-add-button-border-color: #eaeaea !important;
  --table-border-color: #eaeaea !important;
  --table-drag-handle-background-active: #4d8bf9 !important;
  --table-drag-handle-color: #888888 !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #eaeaea !important;
  --table-header-color: #ffffff !important;
  --table-selection-border-color: #4d8bf9 !important;
  --tertiary: #0051cc !important;
  --text-1: #ffffff !important;
  --text-2: #888888 !important;
  --text-accent-hover: #0051cc !important;
  --text-error: #ff0000 !important;
  --text-error-hover: #ff3333 !important;
  --text-faint: #888888 !important;
  --text-highlight-bg: #adc8ff !important;
  --text-muted: #888888 !important;
  --text-normal: #ffffff !important;
  --text-on-accent: #ffffff !important;
  --text-selection: rgba(77, 139, 249, 0.3) !important;
  --textHighlight: #adc8ff !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-border-color: #eaeaea !important;
  --titlebar-text-color: #888888 !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
  --vercel-blue-100: #ffffff !important;
  --vercel-blue-200: #d6e4ff !important;
  --vercel-blue-300: #adc8ff !important;
  --vercel-blue-400: #84a9ff !important;
  --vercel-blue-500: #4d8bf9 !important;
  --vercel-blue-600: #0070f3 !important;
  --vercel-blue-700: #0051cc !important;
  --vercel-blue-800: #003585 !important;
  --vercel-blue-900: #00153d !important;
  --vercel-gray-100: #ffffff !important;
  --vercel-gray-200: #eaeaea !important;
  --vercel-gray-300: #999999 !important;
  --vercel-gray-400: #888888 !important;
  --vercel-gray-500: #666666 !important;
  --vercel-gray-600: #444444 !important;
  --vercel-gray-700: #333333 !important;
  --vercel-gray-800: #111111 !important;
  --vercel-gray-900: #000000 !important;
  --vim-cursor: #0070f3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(0, 0, 0);
  border-color: rgb(234, 234, 234);
  color: rgb(255, 255, 255);
  font-weight: 800;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(0, 0, 0);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(234, 234, 234);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(173, 200, 255);
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body del {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(77, 139, 249);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(77, 139, 249) none 0px;
  text-decoration-color: rgb(77, 139, 249);
  transition: 0.2s;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 112, 243);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(0, 112, 243) none 0px;
  text-decoration-color: rgb(0, 112, 243);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body dt {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ol > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(0, 0, 0);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body table {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  width: 195.062px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body th {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(255, 255, 255);
  font-weight: 800;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(234, 234, 234);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(234, 234, 234);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(136, 136, 136);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(234, 234, 234);
  border-bottom-width: 1px;
  border-left-color: rgb(234, 234, 234);
  border-left-width: 1px;
  border-right-color: rgb(234, 234, 234);
  border-right-width: 1px;
  border-top-color: rgb(234, 234, 234);
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(234, 234, 234);
  border-bottom-width: 1px;
  border-left-color: rgb(234, 234, 234);
  border-left-width: 1px;
  border-right-color: rgb(234, 234, 234);
  border-right-width: 1px;
  border-top-color: rgb(234, 234, 234);
  border-top-width: 1px;
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(234, 234, 234);
  border-bottom-width: 1px;
  border-left-color: rgb(234, 234, 234);
  border-left-width: 1px;
  border-right-color: rgb(234, 234, 234);
  border-right-width: 1px;
  border-top-color: rgb(234, 234, 234);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(234, 234, 234);
  border-bottom-width: 1px;
  border-left-color: rgb(234, 234, 234);
  border-left-width: 1px;
  border-right-color: rgb(234, 234, 234);
  border-right-width: 1px;
  border-top-color: rgb(234, 234, 234);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body figcaption {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(77, 139, 249);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 0px;
  transition: 0.2s;
  width: 16.6562px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
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
  --callout-color: 8, 185, 78;
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
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(77, 139, 249);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 112, 243);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h3 {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h4 {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h5 {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h6 {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(136, 136, 136);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(136, 136, 136);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
  font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body abbr {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body sup {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(0, 81, 204);
}`,
  },
};
