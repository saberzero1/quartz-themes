import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ono-sendai",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cairo", "fira-code"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-mild: #d39f2f !important;
  --accent-strong: #e60953 !important;
  --background-accent: rgb(38, 72, 95) !important;
  --background-modifier-border: rgb(0, 0, 0) !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-cover: rgba(5, 20, 1, 0.842) !important;
  --background-primary: #17191a !important;
  --background-primary-alt: rgb(5, 5, 5) !important;
  --background-secondary: #0f5172 !important;
  --background-secondary-alt: rgb(0, 0, 0) !important;
  --bases-cards-background: #17191a !important;
  --bases-cards-cover-background: rgb(5, 5, 5) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0) !important;
  --bases-embed-border-color: rgb(0, 0, 0) !important;
  --bases-group-heading-property-color: #898b85 !important;
  --bases-table-border-color: rgb(0, 0, 0) !important;
  --bases-table-cell-background-active: #17191a !important;
  --bases-table-cell-background-disabled: rgb(5, 5, 5) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(32, 171, 233) !important;
  --bases-table-group-background: rgb(5, 5, 5) !important;
  --bases-table-header-background: #17191a !important;
  --bases-table-header-color: #898b85 !important;
  --bases-table-summary-background: #17191a !important;
  --blockquote-border-color: rgb(32, 171, 233) !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --bodyFont: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --border: #0c496d !important;
  --border-accent: #a00f3f !important;
  --border-muted: #272727 !important;
  --bw: #ffffff !important;
  --canvas-background: #17191a !important;
  --canvas-card-label-color: #666 !important;
  --caret-color: #dcddde !important;
  --checkbox-border-color: #666 !important;
  --checkbox-border-color-hover: #898b85 !important;
  --checkbox-color: rgb(32, 171, 233) !important;
  --checkbox-color-hover: #1da3d6 !important;
  --checkbox-marker-color: #17191a !important;
  --checkboxbg: -23deg !important;
  --checklist-done-color: #898b85 !important;
  --code-background: rgb(5, 5, 5) !important;
  --code-border-color: rgb(0, 0, 0) !important;
  --code-comment: #666 !important;
  --code-normal: #dcddde !important;
  --code-punctuation: #898b85 !important;
  --codeFont: Fira Code, Source Code Pro, monospace !important;
  --collapse-icon-color: #666 !important;
  --collapse-icon-color-collapsed: #28b0ff !important;
  --dark: #dcddde !important;
  --darkgray: #dcddde !important;
  --default-font: Cairo !important;
  --divider-color: rgb(0, 0, 0) !important;
  --divider-color-hover: rgb(32, 171, 233) !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #286c91 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(0, 0, 0), inset 0 0 0 1px rgb(0, 0, 0) !important;
  --embed-border-start: 2px solid rgb(32, 171, 233) !important;
  --file-header-background: #17191a !important;
  --file-header-background-focused: #17191a !important;
  --file-header-font: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #2a2a2a !important;
  --flair-color: #dcddde !important;
  --font-interface: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Fira Code, Source Code Pro, monospace !important;
  --footnote-divider-color: rgb(0, 0, 0) !important;
  --footnote-id-color: #898b85 !important;
  --footnote-id-color-no-occurrences: #666 !important;
  --graph-attach: #4cf15a !important;
  --graph-bg: black !important;
  --graph-circle: #ff2882 !important;
  --graph-line: #0c496d !important;
  --graph-menutext: #898b85 !important;
  --graph-node: #898b85 !important;
  --graph-node-focused: #28b0ff !important;
  --graph-node-unresolved: #666 !important;
  --graph-text: #ff3333 !important;
  --graphtag: #0b9ba5 !important;
  --gray: #898b85 !important;
  --headerFont: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #666 !important;
  --highlight: #1c2b0b !important;
  --hr-color: rgb(0, 0, 0) !important;
  --icon-color: #898b85 !important;
  --icon-color-active: #28b0ff !important;
  --icon-color-focused: #dcddde !important;
  --icon-color-hover: #898b85 !important;
  --input-date-separator: #666 !important;
  --input-placeholder-color: #666 !important;
  --interactive-accent: rgb(32, 171, 233) !important;
  --interactive-accent-hover: #1da3d6 !important;
  --interactive-accent-rgb: 32, 171, 233 !important;
  --interactive-hover: #286c91 !important;
  --interactive-normal: #2a2a2a !important;
  --light: #17191a !important;
  --lightgray: #0f5172 !important;
  --link-color: #28b0ff !important;
  --link-color-hover: #77d47c !important;
  --link-external-color: #28b0ff !important;
  --link-external-color-hover: #77d47c !important;
  --link-unresolved-color: #28b0ff !important;
  --list-marker-color: #666 !important;
  --list-marker-color-collapsed: #28b0ff !important;
  --list-marker-color-hover: #898b85 !important;
  --menu-background: #0f5172 !important;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive !important;
  --metadata-border-color: rgb(0, 0, 0) !important;
  --metadata-divider-color: rgb(0, 0, 0) !important;
  --metadata-input-font: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #dcddde !important;
  --metadata-label-font: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #898b85 !important;
  --metadata-label-text-color-hover: #898b85 !important;
  --modal-background: #17191a !important;
  --nav-collapse-icon-color: #666 !important;
  --nav-collapse-icon-color-collapsed: #666 !important;
  --nav-heading-color: #dcddde !important;
  --nav-heading-color-collapsed: #666 !important;
  --nav-heading-color-collapsed-hover: #898b85 !important;
  --nav-heading-color-hover: #dcddde !important;
  --nav-item-color: #898b85 !important;
  --nav-item-color-active: #dcddde !important;
  --nav-item-color-highlighted: #28b0ff !important;
  --nav-item-color-hover: #dcddde !important;
  --nav-item-color-selected: #dcddde !important;
  --nav-tag-color: #666 !important;
  --nav-tag-color-active: #898b85 !important;
  --nav-tag-color-hover: #898b85 !important;
  --opacity-translucency: 0.7 !important;
  --pdf-background: #17191a !important;
  --pdf-page-background: #17191a !important;
  --pdf-shadow: 0 0 0 1px rgb(0, 0, 0) !important;
  --pdf-sidebar-background: #17191a !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(0, 0, 0) !important;
  --pill-border-color: rgb(0, 0, 0) !important;
  --pill-color: #898b85 !important;
  --pill-color-hover: #dcddde !important;
  --pill-color-remove: #666 !important;
  --pill-color-remove-hover: #28b0ff !important;
  --prompt-background: #17191a !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: #0f5172 !important;
  --ribbon-background-collapsed: #17191a !important;
  --scrollbar-active-thumb-bg: #ff3392 !important;
  --scrollbar-bg: rgba(255, 255, 255, 0) !important;
  --scrollbar-thumb-bg: rgb(20, 50, 70) !important;
  --search-clear-button-color: #898b85 !important;
  --search-icon-color: #898b85 !important;
  --search-result-background: #17191a !important;
  --secondary: #28b0ff !important;
  --setting-group-heading-color: #dcddde !important;
  --setting-items-background: rgb(5, 5, 5) !important;
  --setting-items-border-color: rgb(0, 0, 0) !important;
  --slider-track-background: rgb(0, 0, 0) !important;
  --status-bar-background: #0f5172 !important;
  --status-bar-border-color: rgb(0, 0, 0) !important;
  --status-bar-text-color: #898b85 !important;
  --suggestion-background: #17191a !important;
  --tab-background-active: #17191a !important;
  --tab-container-background: #0f5172 !important;
  --tab-outline-color: rgb(0, 0, 0) !important;
  --tab-switcher-background: #0f5172 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f5172, transparent) !important;
  --tab-text-color: #666 !important;
  --tab-text-color-active: #898b85 !important;
  --tab-text-color-focused: #898b85 !important;
  --tab-text-color-focused-active: #898b85 !important;
  --tab-text-color-focused-active-current: #dcddde !important;
  --tab-text-color-focused-highlighted: #28b0ff !important;
  --table-add-button-border-color: rgb(0, 0, 0) !important;
  --table-border-color: rgb(0, 0, 0) !important;
  --table-drag-handle-background-active: rgb(32, 171, 233) !important;
  --table-drag-handle-color: #666 !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: rgb(0, 0, 0) !important;
  --table-header-color: #dcddde !important;
  --table-selection-border-color: rgb(32, 171, 233) !important;
  --tag-color: #28b0ff !important;
  --tag-color-hover: #28b0ff !important;
  --tagsbgcolor: rgb(10, 54, 134) !important;
  --tagspanetag: rgb(238, 54, 238) !important;
  --tertiary: #77d47c !important;
  --text-accent: #28b0ff !important;
  --text-accent-hover: #77d47c !important;
  --text-accent2: #00ff37 !important;
  --text-error: #ff0000 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #666 !important;
  --text-highlight-bg: #1c2b0b !important;
  --text-matched: #bbce16 !important;
  --text-muted: #898b85 !important;
  --text-normal: #dcddde !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(6, 66, 113, 0.99) !important;
  --textHighlight: #1c2b0b !important;
  --titleFont: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #0f5172 !important;
  --titlebar-background-focused: rgb(0, 0, 0) !important;
  --titlebar-border-color: rgb(0, 0, 0) !important;
  --titlebar-text-color: #898b85 !important;
  --titlebar-text-color-focused: #dcddde !important;
  --vault-profile-color: #dcddde !important;
  --vault-profile-color-hover: #dcddde !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 81, 114);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(23, 25, 26);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(153, 15, 15);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
  font-weight: 800;
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
  background-color: rgb(15, 81, 114);
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(137, 139, 133);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(137, 139, 133);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(40, 176, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(137, 139, 133);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 81, 114);
  border-left-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(23, 25, 26);
  color: rgb(220, 221, 222);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(28, 43, 11);
  color: rgb(0, 255, 55);
  outline: rgb(0, 255, 55) none 0px;
  text-decoration-color: rgb(0, 255, 55);
}

html[saved-theme="dark"] body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(220, 221, 222);
  font-size: 10px;
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(32, 171, 233);
  border-color: rgb(32, 171, 233);
}

html[saved-theme="dark"] body p {
  color: rgb(137, 139, 133);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
  outline: rgb(137, 139, 133) none 0px;
  text-decoration-color: rgb(137, 139, 133);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(40, 176, 255);
  outline: rgb(40, 176, 255) none 0px;
  text-decoration-color: rgb(40, 176, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(40, 176, 255);
  outline: rgb(40, 176, 255) none 0px;
  text-decoration-color: rgb(40, 176, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(40, 176, 255);
  outline: rgb(40, 176, 255) none 0px;
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
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgb(5, 5, 5);
  padding-bottom: 10px;
  padding-top: 14px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
  color: rgb(220, 221, 222);
  width: 233.219px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(220, 221, 222);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body th {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(230, 9, 83);
  border-left-color: rgb(230, 9, 83);
  border-right-color: rgb(230, 9, 83);
  border-top-color: rgb(230, 9, 83);
  color: rgb(230, 9, 83);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 221, 222);
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
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(137, 139, 133);
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(32, 171, 233);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
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
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(40, 176, 255);
  outline: rgb(40, 176, 255) none 0px;
  text-decoration-color: rgb(40, 176, 255);
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
  background-color: rgb(153, 16, 139);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 81, 114);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(153, 16, 139);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(153, 16, 139);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(40, 176, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h2 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h3 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h4 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h5 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h6 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(40, 176, 255);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(40, 176, 255);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 221, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(137, 139, 133);
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
  color: rgb(137, 139, 133);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(40, 176, 255);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(40, 176, 255);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 221, 222);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(40, 176, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(40, 176, 255);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(40, 176, 255);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(40, 176, 255);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(137, 139, 133);
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
  color: rgb(137, 139, 133);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(137, 139, 133);
  stroke: rgb(137, 139, 133);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(137, 139, 133);
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
  color: rgb(137, 139, 133);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(137, 139, 133);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(137, 139, 133);
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
  color: rgb(137, 139, 133);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(220, 221, 222);
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  border-bottom-color: rgb(137, 139, 133);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(137, 139, 133);
  font-family: Barlow, Cairo, Inter, sans-serif;
  padding-bottom: 5px;
  padding-top: 5px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 221, 222);
  font-size: 11px;
  vertical-align: bottom;
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 221, 222);
  font-size: 11px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(10, 54, 134);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --accent-mild: #912771 !important;
  --accent-strong: #1a7ca3 !important;
  --background-accent: rgb(136, 43, 90) !important;
  --background-modifier-border: rgb(75, 110, 139) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #e68787 !important;
  --background-modifier-error-hover: #ff9494 !important;
  --background-modifier-error-rgb: 230, 135, 135 !important;
  --background-modifier-form-field: rgb(189, 216, 218) !important;
  --background-modifier-form-field-highlighted: rgb(182, 213, 221) !important;
  --background-modifier-form-field-hover: rgb(189, 216, 218) !important;
  --background-modifier-success: #a4e7c3 !important;
  --background-primary: #d1cabf !important;
  --background-primary-alt: #e0ded2 !important;
  --background-secondary: #eeb157 !important;
  --background-secondary-alt: #beb6aa !important;
  --bases-cards-background: #d1cabf !important;
  --bases-cards-cover-background: #e0ded2 !important;
  --bases-cards-shadow: 0 0 0 1px rgb(75, 110, 139) !important;
  --bases-embed-border-color: rgb(75, 110, 139) !important;
  --bases-group-heading-property-color: #694f3a !important;
  --bases-table-border-color: rgb(75, 110, 139) !important;
  --bases-table-cell-background-active: #d1cabf !important;
  --bases-table-cell-background-disabled: #e0ded2 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(226, 72, 34) !important;
  --bases-table-group-background: #e0ded2 !important;
  --bases-table-header-background: #d1cabf !important;
  --bases-table-header-color: #694f3a !important;
  --bases-table-summary-background: #d1cabf !important;
  --blockquote-border-color: rgb(226, 72, 34) !important;
  --blur-background: color-mix(in srgb, #d1cabf 65%, transparent) linear-gradient(#d1cabf, color-mix(in srgb, #d1cabf 65%, transparent)) !important;
  --bodyFont: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --border: #664424 !important;
  --border-accent: #a00f3f !important;
  --border-muted: #272727 !important;
  --bw: #000000 !important;
  --canvas-background: #d1cabf !important;
  --canvas-card-label-color: #9c735c !important;
  --caret-color: #2e3338 !important;
  --checkbox-border-color: #9c735c !important;
  --checkbox-border-color-hover: #694f3a !important;
  --checkbox-color: rgb(226, 72, 34) !important;
  --checkbox-color-hover: #f3bf14 !important;
  --checkbox-marker-color: #d1cabf !important;
  --checkboxbg: 183deg !important;
  --checklist-done-color: #694f3a !important;
  --code-background: #e0ded2 !important;
  --code-border-color: rgb(75, 110, 139) !important;
  --code-comment: #9c735c !important;
  --code-normal: #2e3338 !important;
  --code-punctuation: #694f3a !important;
  --codeFont: Fira Code, Source Code Pro, monospace !important;
  --collapse-icon-color: #9c735c !important;
  --collapse-icon-color-collapsed: #914a29 !important;
  --dark: #2e3338 !important;
  --darkgray: #2e3338 !important;
  --default-font: Cairo !important;
  --divider-color: rgb(75, 110, 139) !important;
  --divider-color-hover: rgb(226, 72, 34) !important;
  --dropdown-background: #f2f3f5 !important;
  --dropdown-background-hover: #e9e9e9 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(75, 110, 139), inset 0 0 0 1px rgb(75, 110, 139) !important;
  --embed-border-start: 2px solid rgb(226, 72, 34) !important;
  --file-header-background: #d1cabf !important;
  --file-header-background-focused: #d1cabf !important;
  --file-header-font: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #f2f3f5 !important;
  --flair-color: #2e3338 !important;
  --font-interface: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Fira Code, Source Code Pro, monospace !important;
  --footnote-divider-color: rgb(75, 110, 139) !important;
  --footnote-id-color: #694f3a !important;
  --footnote-id-color-no-occurrences: #9c735c !important;
  --graph-attach: #77f581 !important;
  --graph-bg: black !important;
  --graph-circle: #0cd2ec !important;
  --graph-line: #11683f !important;
  --graph-menutext: #898b85 !important;
  --graph-node: #694f3a !important;
  --graph-node-focused: #914a29 !important;
  --graph-node-unresolved: #9c735c !important;
  --graph-text: #ff3333 !important;
  --graphtag: #d8fa41 !important;
  --gray: #694f3a !important;
  --headerFont: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #9c735c !important;
  --highlight: rgba(232, 255, 27, 0.76) !important;
  --hr-color: rgb(75, 110, 139) !important;
  --icon-color: #694f3a !important;
  --icon-color-active: #914a29 !important;
  --icon-color-focused: #2e3338 !important;
  --icon-color-hover: #694f3a !important;
  --input-date-separator: #9c735c !important;
  --input-placeholder-color: #9c735c !important;
  --interactive-accent: rgb(226, 72, 34) !important;
  --interactive-accent-hover: #f3bf14 !important;
  --interactive-accent-rgb: 226, 72, 34 !important;
  --interactive-hover: #e9e9e9 !important;
  --interactive-normal: #f2f3f5 !important;
  --light: #d1cabf !important;
  --lightgray: #eeb157 !important;
  --link-color: #914a29 !important;
  --link-color-hover: #cc0202 !important;
  --link-external-color: #914a29 !important;
  --link-external-color-hover: #cc0202 !important;
  --link-unresolved-color: #914a29 !important;
  --list-marker-color: #9c735c !important;
  --list-marker-color-collapsed: #914a29 !important;
  --list-marker-color-hover: #694f3a !important;
  --menu-background: #eeb157 !important;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive !important;
  --metadata-border-color: rgb(75, 110, 139) !important;
  --metadata-divider-color: rgb(75, 110, 139) !important;
  --metadata-input-font: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #2e3338 !important;
  --metadata-label-font: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #694f3a !important;
  --metadata-label-text-color-hover: #694f3a !important;
  --modal-background: #d1cabf !important;
  --nav-collapse-icon-color: #9c735c !important;
  --nav-collapse-icon-color-collapsed: #9c735c !important;
  --nav-heading-color: #2e3338 !important;
  --nav-heading-color-collapsed: #9c735c !important;
  --nav-heading-color-collapsed-hover: #694f3a !important;
  --nav-heading-color-hover: #2e3338 !important;
  --nav-item-color: #694f3a !important;
  --nav-item-color-active: #2e3338 !important;
  --nav-item-color-highlighted: #914a29 !important;
  --nav-item-color-hover: #2e3338 !important;
  --nav-item-color-selected: #2e3338 !important;
  --nav-tag-color: #9c735c !important;
  --nav-tag-color-active: #694f3a !important;
  --nav-tag-color-hover: #694f3a !important;
  --opacity-translucency: 0.5 !important;
  --pdf-background: #d1cabf !important;
  --pdf-page-background: #d1cabf !important;
  --pdf-sidebar-background: #d1cabf !important;
  --pill-border-color: rgb(75, 110, 139) !important;
  --pill-color: #694f3a !important;
  --pill-color-hover: #2e3338 !important;
  --pill-color-remove: #9c735c !important;
  --pill-color-remove-hover: #914a29 !important;
  --prompt-background: #d1cabf !important;
  --raised-background: color-mix(in srgb, #d1cabf 65%, transparent) linear-gradient(#d1cabf, color-mix(in srgb, #d1cabf 65%, transparent)) !important;
  --ribbon-background: #eeb157 !important;
  --ribbon-background-collapsed: #d1cabf !important;
  --scrollbar-active-thumb-bg: #ff3333 !important;
  --scrollbar-bg: rgba(0, 0, 0, 0) !important;
  --scrollbar-thumb-bg: #914a29 !important;
  --search-clear-button-color: #694f3a !important;
  --search-icon-color: #694f3a !important;
  --search-result-background: #d1cabf !important;
  --secondary: #914a29 !important;
  --setting-group-heading-color: #2e3338 !important;
  --setting-items-background: #e0ded2 !important;
  --setting-items-border-color: rgb(75, 110, 139) !important;
  --slider-track-background: rgb(75, 110, 139) !important;
  --status-bar-background: #eeb157 !important;
  --status-bar-border-color: rgb(75, 110, 139) !important;
  --status-bar-text-color: #694f3a !important;
  --suggestion-background: #d1cabf !important;
  --tab-background-active: #d1cabf !important;
  --tab-container-background: #eeb157 !important;
  --tab-outline-color: rgb(75, 110, 139) !important;
  --tab-switcher-background: #eeb157 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #eeb157, transparent) !important;
  --tab-text-color: #9c735c !important;
  --tab-text-color-active: #694f3a !important;
  --tab-text-color-focused: #694f3a !important;
  --tab-text-color-focused-active: #694f3a !important;
  --tab-text-color-focused-active-current: #2e3338 !important;
  --tab-text-color-focused-highlighted: #914a29 !important;
  --table-add-button-border-color: rgb(75, 110, 139) !important;
  --table-border-color: rgb(75, 110, 139) !important;
  --table-drag-handle-background-active: rgb(226, 72, 34) !important;
  --table-drag-handle-color: #9c735c !important;
  --table-drag-handle-color-active: #f2f2f2 !important;
  --table-header-border-color: rgb(75, 110, 139) !important;
  --table-header-color: #2e3338 !important;
  --table-selection-border-color: rgb(226, 72, 34) !important;
  --tag-color: #914a29 !important;
  --tag-color-hover: #914a29 !important;
  --tagsbgcolor: rgb(141, 81, 128) !important;
  --tagspanetag: rgb(53, 53, 53) !important;
  --tertiary: #cc0202 !important;
  --text-accent: #914a29 !important;
  --text-accent-hover: #cc0202 !important;
  --text-accent2: #4d5c8b !important;
  --text-error: #0d6f8d !important;
  --text-error-hover: #cb2c2 !important;
  --text-faint: #9c735c !important;
  --text-highlight-bg: rgba(232, 255, 27, 0.76) !important;
  --text-matched: #b90303 !important;
  --text-muted: #694f3a !important;
  --text-normal: #2e3338 !important;
  --text-on-accent: #f2f2f2 !important;
  --text-selection: rgba(247, 220, 162, 0.99) !important;
  --textHighlight: rgba(232, 255, 27, 0.76) !important;
  --titleFont: Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #eeb157 !important;
  --titlebar-background-focused: #beb6aa !important;
  --titlebar-border-color: rgb(75, 110, 139) !important;
  --titlebar-text-color: #694f3a !important;
  --titlebar-text-color-focused: #2e3338 !important;
  --vault-profile-color: #2e3338 !important;
  --vault-profile-color-hover: #2e3338 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 177, 87);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(209, 202, 191);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(153, 15, 15);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(190, 182, 170);
  border-color: rgb(75, 110, 139);
  color: rgb(46, 51, 56);
  font-weight: 800;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(209, 202, 191);
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(75, 110, 139);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(105, 79, 58);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(105, 79, 58);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(145, 74, 41);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(105, 79, 58);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(190, 182, 170);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(75, 110, 139);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 177, 87);
  border-left-color: rgb(75, 110, 139);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(209, 202, 191);
  color: rgb(46, 51, 56);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(232, 255, 27, 0.76);
  color: rgb(77, 92, 139);
  outline: rgb(77, 92, 139) none 0px;
  text-decoration-color: rgb(77, 92, 139);
}

html[saved-theme="light"] body del {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(46, 51, 56);
  font-size: 10px;
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(156, 115, 92);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(226, 72, 34);
  border-color: rgb(226, 72, 34);
}

html[saved-theme="light"] body p {
  color: rgb(105, 79, 58);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
  outline: rgb(105, 79, 58) none 0px;
  text-decoration-color: rgb(105, 79, 58);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(145, 74, 41);
  outline: rgb(145, 74, 41) none 0px;
  text-decoration-color: rgb(145, 74, 41);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(145, 74, 41);
  outline: rgb(145, 74, 41) none 0px;
  text-decoration-color: rgb(145, 74, 41);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(145, 74, 41);
  outline: rgb(145, 74, 41) none 0px;
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
  color: rgb(156, 115, 92);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(224, 222, 210);
  padding-bottom: 10px;
  padding-top: 14px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
  color: rgb(46, 51, 56);
  width: 233.219px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(156, 115, 92);
  border-left-color: rgb(156, 115, 92);
  border-right-color: rgb(156, 115, 92);
  border-top-color: rgb(156, 115, 92);
  color: rgb(46, 51, 56);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body th {
  background-color: rgb(190, 182, 170);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  color: rgb(46, 51, 56);
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(26, 124, 163);
  border-left-color: rgb(26, 124, 163);
  border-right-color: rgb(26, 124, 163);
  border-top-color: rgb(26, 124, 163);
  color: rgb(26, 124, 163);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  color: rgb(46, 51, 56);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
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
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(105, 79, 58);
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(226, 72, 34);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(156, 115, 92);
  border-left-color: rgb(156, 115, 92);
  border-right-color: rgb(156, 115, 92);
  border-top-color: rgb(156, 115, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
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
  background-color: rgb(189, 216, 218);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  color: rgb(46, 51, 56);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(190, 182, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(145, 74, 41);
  outline: rgb(145, 74, 41) none 0px;
  text-decoration-color: rgb(145, 74, 41);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(153, 16, 139);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(238, 177, 87);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(153, 16, 139);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(153, 16, 139);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(145, 74, 41);
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
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(145, 74, 41);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(145, 74, 41);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(46, 51, 56);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(105, 79, 58);
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
  color: rgb(105, 79, 58);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(190, 182, 170);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  border-top-width: 0px;
  color: rgb(145, 74, 41);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(145, 74, 41);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(46, 51, 56);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(145, 74, 41);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(145, 74, 41);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(145, 74, 41);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(145, 74, 41);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(105, 79, 58);
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
  color: rgb(105, 79, 58);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(105, 79, 58);
  stroke: rgb(105, 79, 58);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(105, 79, 58);
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
  color: rgb(105, 79, 58);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(156, 115, 92);
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  color: rgb(105, 79, 58);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(105, 79, 58);
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
  color: rgb(105, 79, 58);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(190, 182, 170);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(105, 79, 58);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(105, 79, 58);
  font-family: Barlow, Cairo, Inter, sans-serif;
  padding-bottom: 5px;
  padding-top: 5px;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body sub {
  color: rgb(46, 51, 56);
  font-size: 11px;
  vertical-align: bottom;
}

html[saved-theme="light"] body summary {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body sup {
  color: rgb(46, 51, 56);
  font-size: 11px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(141, 81, 128);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  color: rgb(255, 255, 255);
}`,
  },
};
