import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "notation",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["sf-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --L0: 0% !important;
  --L1: 20% !important;
  --L2: 23% !important;
  --L3: 26% !important;
  --background-accent: hsl(203, 8%, 0%) !important;
  --background-blue: rgb(54, 73, 84) !important;
  --background-brown: rgb(67, 64, 64) !important;
  --background-gray: rgb(69, 75, 78) !important;
  --background-green: rgb(53, 76, 75) !important;
  --background-modifier-border: rgba(255, 255, 255, 0.14) !important;
  --background-orange: rgb(89, 74, 58) !important;
  --background-pink: rgb(83, 59, 76) !important;
  --background-primary: hsl(203, 8%, 20%) !important;
  --background-primary-alt: hsl(203, 8%, 26%) !important;
  --background-purple: rgb(68, 63, 87) !important;
  --background-red: rgb(89, 65, 65) !important;
  --background-secondary: hsl(203, 8%, 23%) !important;
  --background-secondary-alt: hsl(203, 8%, 26%) !important;
  --background-yellow: rgb(89, 86, 59) !important;
  --bases-cards-background: hsl(203, 8%, 20%) !important;
  --bases-cards-cover-background: hsl(203, 8%, 26%) !important;
  --bases-cards-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14) !important;
  --bases-embed-border-color: rgba(255, 255, 255, 0.14) !important;
  --bases-group-heading-property-color: rgba(255, 255, 255, 0.45) !important;
  --bases-table-border-color: rgba(255, 255, 255, 0.14) !important;
  --bases-table-cell-background-active: hsl(203, 8%, 20%) !important;
  --bases-table-cell-background-disabled: hsl(203, 8%, 26%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(46, 170, 220) !important;
  --bases-table-group-background: hsl(203, 8%, 26%) !important;
  --bases-table-header-background: hsl(203, 8%, 20%) !important;
  --bases-table-header-color: rgba(255, 255, 255, 0.45) !important;
  --bases-table-summary-background: hsl(203, 8%, 20%) !important;
  --blockquote-border-color: rgb(46, 170, 220) !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --canvas-background: hsl(203, 8%, 20%) !important;
  --canvas-card-label-color: rgba(255, 255, 255, 0.25) !important;
  --caret-color: rgba(255, 255, 255, 0.9) !important;
  --checkbox-border-color: rgba(255, 255, 255, 0.25) !important;
  --checkbox-border-color-hover: rgba(255, 255, 255, 0.45) !important;
  --checkbox-color: rgb(46, 170, 220) !important;
  --checkbox-color-hover: rgba(46, 170, 220, 0.8) !important;
  --checkbox-marker-color: hsl(203, 8%, 20%) !important;
  --checklist-done-color: rgba(255, 255, 255, 0.45) !important;
  --code: #EB5757 !important;
  --code-background: hsl(203, 8%, 26%) !important;
  --code-border-color: rgba(255, 255, 255, 0.14) !important;
  --code-comment: rgba(255, 255, 255, 0.25) !important;
  --code-normal: rgba(255, 255, 255, 0.9) !important;
  --code-punctuation: rgba(255, 255, 255, 0.45) !important;
  --codeFont: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace !important;
  --collapse-icon-color: rgba(255, 255, 255, 0.25) !important;
  --collapse-icon-color-collapsed: rgba(255, 255, 255, 0.45) !important;
  --dark: rgba(255, 255, 255, 0.9) !important;
  --darkgray: rgba(255, 255, 255, 0.9) !important;
  --divider-color: rgba(255, 255, 255, 0.14) !important;
  --divider-color-hover: rgb(46, 170, 220) !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 0 0 1px rgba(255, 255, 255, 0.14) !important;
  --embed-border-start: 2px solid rgb(46, 170, 220) !important;
  --file-header-background: hsl(203, 8%, 20%) !important;
  --file-header-background-focused: hsl(203, 8%, 20%) !important;
  --flair-background: #2a2a2a !important;
  --flair-color: rgba(255, 255, 255, 0.9) !important;
  --font-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace !important;
  --footnote-divider-color: rgba(255, 255, 255, 0.14) !important;
  --footnote-id-color: rgba(255, 255, 255, 0.45) !important;
  --footnote-id-color-no-occurrences: rgba(255, 255, 255, 0.25) !important;
  --graph-node: rgba(255, 255, 255, 0.45) !important;
  --graph-node-focused: rgba(255, 255, 255, 0.45) !important;
  --graph-node-unresolved: rgba(255, 255, 255, 0.25) !important;
  --graph-text: rgba(255, 255, 255, 0.9) !important;
  --gray: rgba(255, 255, 255, 0.45) !important;
  --heading-formatting: rgba(255, 255, 255, 0.25) !important;
  --highlight: rgb(89, 86, 59) !important;
  --hr-color: rgba(255, 255, 255, 0.14) !important;
  --hue: 203 !important;
  --icon-color: rgba(255, 255, 255, 0.45) !important;
  --icon-color-active: rgba(255, 255, 255, 0.45) !important;
  --icon-color-focused: rgba(255, 255, 255, 0.9) !important;
  --icon-color-hover: rgba(255, 255, 255, 0.45) !important;
  --input-date-separator: rgba(255, 255, 255, 0.25) !important;
  --input-placeholder-color: rgba(255, 255, 255, 0.25) !important;
  --interactive-accent: rgb(46, 170, 220) !important;
  --interactive-accent-hover: rgba(46, 170, 220, 0.8) !important;
  --interactive-accent-rgb: 46, 170, 220 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --light: hsl(203, 8%, 20%) !important;
  --lightgray: hsl(203, 8%, 23%) !important;
  --link-color: rgba(255, 255, 255, 0.45) !important;
  --link-color-hover: rgba(255, 255, 255, 0.45) !important;
  --link-external-color: rgba(255, 255, 255, 0.45) !important;
  --link-external-color-hover: rgba(255, 255, 255, 0.45) !important;
  --link-unresolved-color: rgba(255, 255, 255, 0.45) !important;
  --list-marker-color: rgba(255, 255, 255, 0.25) !important;
  --list-marker-color-collapsed: rgba(255, 255, 255, 0.45) !important;
  --list-marker-color-hover: rgba(255, 255, 255, 0.45) !important;
  --menu-background: hsl(203, 8%, 23%) !important;
  --metadata-border-color: rgba(255, 255, 255, 0.14) !important;
  --metadata-divider-color: rgba(255, 255, 255, 0.14) !important;
  --metadata-input-text-color: rgba(255, 255, 255, 0.9) !important;
  --metadata-label-text-color: rgba(255, 255, 255, 0.45) !important;
  --metadata-label-text-color-hover: rgba(255, 255, 255, 0.45) !important;
  --modal-background: hsl(203, 8%, 20%) !important;
  --nav-collapse-icon-color: rgba(255, 255, 255, 0.25) !important;
  --nav-collapse-icon-color-collapsed: rgba(255, 255, 255, 0.25) !important;
  --nav-heading-color: rgba(255, 255, 255, 0.9) !important;
  --nav-heading-color-collapsed: rgba(255, 255, 255, 0.25) !important;
  --nav-heading-color-collapsed-hover: rgba(255, 255, 255, 0.45) !important;
  --nav-heading-color-hover: rgba(255, 255, 255, 0.9) !important;
  --nav-item-color: rgba(255, 255, 255, 0.45) !important;
  --nav-item-color-active: rgba(255, 255, 255, 0.9) !important;
  --nav-item-color-highlighted: rgba(255, 255, 255, 0.45) !important;
  --nav-item-color-hover: rgba(255, 255, 255, 0.9) !important;
  --nav-item-color-selected: rgba(255, 255, 255, 0.9) !important;
  --nav-tag-color: rgba(255, 255, 255, 0.25) !important;
  --nav-tag-color-active: rgba(255, 255, 255, 0.45) !important;
  --nav-tag-color-hover: rgba(255, 255, 255, 0.45) !important;
  --opacity-translucency: 0.7 !important;
  --pdf-background: hsl(203, 8%, 20%) !important;
  --pdf-page-background: hsl(203, 8%, 20%) !important;
  --pdf-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14) !important;
  --pdf-sidebar-background: hsl(203, 8%, 20%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14) !important;
  --pill-border-color: rgba(255, 255, 255, 0.14) !important;
  --pill-color: rgba(255, 255, 255, 0.45) !important;
  --pill-color-hover: rgba(255, 255, 255, 0.9) !important;
  --pill-color-remove: rgba(255, 255, 255, 0.25) !important;
  --pill-color-remove-hover: rgba(255, 255, 255, 0.45) !important;
  --prompt-background: hsl(203, 8%, 20%) !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: hsl(203, 8%, 23%) !important;
  --ribbon-background-collapsed: hsl(203, 8%, 20%) !important;
  --sat: 8% !important;
  --search-clear-button-color: rgba(255, 255, 255, 0.45) !important;
  --search-icon-color: rgba(255, 255, 255, 0.45) !important;
  --search-result-background: hsl(203, 8%, 20%) !important;
  --secondary: rgba(255, 255, 255, 0.45) !important;
  --setting-group-heading-color: rgba(255, 255, 255, 0.9) !important;
  --setting-items-background: hsl(203, 8%, 26%) !important;
  --setting-items-border-color: rgba(255, 255, 255, 0.14) !important;
  --slider-track-background: rgba(255, 255, 255, 0.14) !important;
  --status-bar-background: hsl(203, 8%, 23%) !important;
  --status-bar-border-color: rgba(255, 255, 255, 0.14) !important;
  --status-bar-text-color: rgba(255, 255, 255, 0.45) !important;
  --suggestion-background: hsl(203, 8%, 20%) !important;
  --tab-background-active: hsl(203, 8%, 20%) !important;
  --tab-container-background: hsl(203, 8%, 23%) !important;
  --tab-outline-color: rgba(255, 255, 255, 0.14) !important;
  --tab-switcher-background: hsl(203, 8%, 23%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(203, 8%, 23%), transparent) !important;
  --tab-text-color: rgba(255, 255, 255, 0.25) !important;
  --tab-text-color-active: rgba(255, 255, 255, 0.45) !important;
  --tab-text-color-focused: rgba(255, 255, 255, 0.45) !important;
  --tab-text-color-focused-active: rgba(255, 255, 255, 0.45) !important;
  --tab-text-color-focused-active-current: rgba(255, 255, 255, 0.9) !important;
  --tab-text-color-focused-highlighted: rgba(255, 255, 255, 0.45) !important;
  --table-add-button-border-color: rgba(255, 255, 255, 0.14) !important;
  --table-border-color: rgba(255, 255, 255, 0.14) !important;
  --table-drag-handle-background-active: rgb(46, 170, 220) !important;
  --table-drag-handle-color: rgba(255, 255, 255, 0.25) !important;
  --table-drag-handle-color-active: rgba(255, 255, 255, 0.9) !important;
  --table-header-border-color: rgba(255, 255, 255, 0.14) !important;
  --table-header-color: rgba(255, 255, 255, 0.9) !important;
  --table-selection-border-color: rgb(46, 170, 220) !important;
  --tag-color: rgba(255, 255, 255, 0.45) !important;
  --tag-color-hover: rgba(255, 255, 255, 0.45) !important;
  --tertiary: rgba(255, 255, 255, 0.45) !important;
  --text-accent: rgba(255, 255, 255, 0.45) !important;
  --text-accent-hover: rgba(255, 255, 255, 0.45) !important;
  --text-blue: rgb(82, 156, 202) !important;
  --text-brown: rgb(147, 114, 100) !important;
  --text-faint: rgba(255, 255, 255, 0.25) !important;
  --text-gray: rgba(255, 255, 255, 0.6) !important;
  --text-green: rgb(77, 171, 154) !important;
  --text-highlight-bg: rgb(89, 86, 59) !important;
  --text-muted: rgba(255, 255, 255, 0.45) !important;
  --text-normal: rgba(255, 255, 255, 0.9) !important;
  --text-on-accent: rgba(255, 255, 255, 0.9) !important;
  --text-orange: rgb(255, 163, 68) !important;
  --text-pink: rgb(226, 85, 161) !important;
  --text-purple: rgb(154, 109, 215) !important;
  --text-red: rgb(255, 115, 105) !important;
  --text-rgb: 255, 255, 255 !important;
  --text-selection: hsla(211, 100%, 50%, 0.2) !important;
  --text-yellow: rgb(255, 220, 73) !important;
  --textHighlight: rgb(89, 86, 59) !important;
  --titlebar-background: hsl(203, 8%, 23%) !important;
  --titlebar-background-focused: hsl(203, 8%, 26%) !important;
  --titlebar-border-color: rgba(255, 255, 255, 0.14) !important;
  --titlebar-text-color: rgba(255, 255, 255, 0.45) !important;
  --titlebar-text-color-focused: rgba(255, 255, 255, 0.9) !important;
  --vault-profile-color: rgba(255, 255, 255, 0.9) !important;
  --vault-profile-color-hover: rgba(255, 255, 255, 0.9) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(54, 60, 63);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(47, 52, 55);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(255, 255, 255, 0.14) rgba(255, 255, 255, 0.14) rgba(255, 255, 255, 0.14) rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.45);
  font-weight: 400;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(54, 60, 63);
  border-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(255, 255, 255, 0.14);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(54, 60, 63);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.14);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(54, 60, 63);
  border-left-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(47, 52, 55);
  color: rgba(255, 255, 255, 0.9);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(89, 86, 59);
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body del {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgba(255, 255, 255, 0.9);
  font-size: 40px;
  font-weight: 700;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(255, 255, 255, 0.25);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(46, 170, 220);
  border-color: rgb(46, 170, 220);
}

html[saved-theme="dark"] body p {
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.45) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(255, 255, 255, 0.45);
  font-weight: 500;
  outline: rgba(255, 255, 255, 0.45) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body dt {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ol > li {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ul > li {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(255, 255, 255, 0.25);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body table {
  color: rgba(255, 255, 255, 0.9);
  width: 200.938px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.45);
  font-weight: 400;
  text-align: left;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
  padding-bottom: 24px;
  padding-left: 10px;
  padding-right: 6px;
  padding-top: 24px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body figcaption {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2px;
  margin-right: 4px;
  transition: background-color 0.2s ease-out;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.45);
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
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(54, 60, 63);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body h1 {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body h2 {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body h3 {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body h4 {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body h5 {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body h6 {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgba(255, 255, 255, 0.9);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.45);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(54, 60, 63);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(255, 255, 255, 0.45);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgba(255, 255, 255, 0.45);
  stroke: rgba(255, 255, 255, 0.45);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(255, 255, 255, 0.25);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(54, 60, 63);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body abbr {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.45);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body sub {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body summary {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body sup {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(89, 86, 59);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
}`,
  },
  light: {
    base: `:root:root {
  --L0: 0% !important;
  --L1: 100% !important;
  --L2: 96% !important;
  --L3: 90% !important;
  --background-accent: hsl(203, 8%, 0%) !important;
  --background-blue: rgb(221, 235, 241) !important;
  --background-brown: rgb(233, 229, 227) !important;
  --background-gray: rgb(235, 236, 237) !important;
  --background-green: rgb(221, 237, 234) !important;
  --background-modifier-border: rgba(55, 53, 47, 0.14) !important;
  --background-orange: rgb(250, 235, 221) !important;
  --background-pink: rgb(244, 223, 235) !important;
  --background-primary: hsl(203, 8%, 100%) !important;
  --background-primary-alt: hsl(203, 8%, 96%) !important;
  --background-purple: rgb(234, 228, 242) !important;
  --background-red: rgb(251, 228, 228) !important;
  --background-secondary: hsl(203, 8%, 96%) !important;
  --background-secondary-alt: hsl(203, 8%, 90%) !important;
  --background-yellow: rgb(251, 243, 219) !important;
  --bases-cards-background: hsl(203, 8%, 100%) !important;
  --bases-cards-cover-background: hsl(203, 8%, 96%) !important;
  --bases-cards-shadow: 0 0 0 1px rgba(55, 53, 47, 0.14) !important;
  --bases-embed-border-color: rgba(55, 53, 47, 0.14) !important;
  --bases-group-heading-property-color: rgba(55, 53, 47, 0.45) !important;
  --bases-table-border-color: rgba(55, 53, 47, 0.14) !important;
  --bases-table-cell-background-active: hsl(203, 8%, 100%) !important;
  --bases-table-cell-background-disabled: hsl(203, 8%, 96%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(46, 170, 220) !important;
  --bases-table-group-background: hsl(203, 8%, 96%) !important;
  --bases-table-header-background: hsl(203, 8%, 100%) !important;
  --bases-table-header-color: rgba(55, 53, 47, 0.45) !important;
  --bases-table-summary-background: hsl(203, 8%, 100%) !important;
  --blockquote-border-color: rgb(46, 170, 220) !important;
  --blur-background: color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent) linear-gradient(hsl(203, 8%, 100%), color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent)) !important;
  --canvas-background: hsl(203, 8%, 100%) !important;
  --canvas-card-label-color: rgba(55, 53, 47, 0.25) !important;
  --caret-color: rgba(55, 53, 47, 0.9) !important;
  --checkbox-border-color: rgba(55, 53, 47, 0.25) !important;
  --checkbox-border-color-hover: rgba(55, 53, 47, 0.45) !important;
  --checkbox-color: rgb(46, 170, 220) !important;
  --checkbox-color-hover: rgba(46, 170, 220, 0.8) !important;
  --checkbox-marker-color: hsl(203, 8%, 100%) !important;
  --checklist-done-color: rgba(55, 53, 47, 0.45) !important;
  --code: #EB5757 !important;
  --code-background: hsl(203, 8%, 96%) !important;
  --code-border-color: rgba(55, 53, 47, 0.14) !important;
  --code-comment: rgba(55, 53, 47, 0.25) !important;
  --code-normal: rgba(55, 53, 47, 0.9) !important;
  --code-punctuation: rgba(55, 53, 47, 0.45) !important;
  --codeFont: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace !important;
  --collapse-icon-color: rgba(55, 53, 47, 0.25) !important;
  --collapse-icon-color-collapsed: rgba(55, 53, 47, 0.45) !important;
  --dark: rgba(55, 53, 47, 0.9) !important;
  --darkgray: rgba(55, 53, 47, 0.9) !important;
  --divider-color: rgba(55, 53, 47, 0.14) !important;
  --divider-color-hover: rgb(46, 170, 220) !important;
  --dropdown-background: #f2f3f5 !important;
  --dropdown-background-hover: #e9e9e9 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(55, 53, 47, 0.14), inset 0 0 0 1px rgba(55, 53, 47, 0.14) !important;
  --embed-border-start: 2px solid rgb(46, 170, 220) !important;
  --file-header-background: hsl(203, 8%, 100%) !important;
  --file-header-background-focused: hsl(203, 8%, 100%) !important;
  --flair-background: #f2f3f5 !important;
  --flair-color: rgba(55, 53, 47, 0.9) !important;
  --font-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace !important;
  --footnote-divider-color: rgba(55, 53, 47, 0.14) !important;
  --footnote-id-color: rgba(55, 53, 47, 0.45) !important;
  --footnote-id-color-no-occurrences: rgba(55, 53, 47, 0.25) !important;
  --graph-node: rgba(55, 53, 47, 0.45) !important;
  --graph-node-focused: rgba(55, 53, 47, 0.45) !important;
  --graph-node-unresolved: rgba(55, 53, 47, 0.25) !important;
  --graph-text: rgba(55, 53, 47, 0.9) !important;
  --gray: rgba(55, 53, 47, 0.45) !important;
  --heading-formatting: rgba(55, 53, 47, 0.25) !important;
  --highlight: rgb(251, 243, 219) !important;
  --hr-color: rgba(55, 53, 47, 0.14) !important;
  --hue: 203 !important;
  --icon-color: rgba(55, 53, 47, 0.45) !important;
  --icon-color-active: rgba(55, 53, 47, 0.45) !important;
  --icon-color-focused: rgba(55, 53, 47, 0.9) !important;
  --icon-color-hover: rgba(55, 53, 47, 0.45) !important;
  --input-date-separator: rgba(55, 53, 47, 0.25) !important;
  --input-placeholder-color: rgba(55, 53, 47, 0.25) !important;
  --interactive-accent: rgb(46, 170, 220) !important;
  --interactive-accent-hover: rgba(46, 170, 220, 0.8) !important;
  --interactive-accent-rgb: 46, 170, 220 !important;
  --interactive-hover: #e9e9e9 !important;
  --interactive-normal: #f2f3f5 !important;
  --light: hsl(203, 8%, 100%) !important;
  --lightgray: hsl(203, 8%, 96%) !important;
  --link-color: rgba(55, 53, 47, 0.45) !important;
  --link-color-hover: rgba(55, 53, 47, 0.45) !important;
  --link-external-color: rgba(55, 53, 47, 0.45) !important;
  --link-external-color-hover: rgba(55, 53, 47, 0.45) !important;
  --link-unresolved-color: rgba(55, 53, 47, 0.45) !important;
  --list-marker-color: rgba(55, 53, 47, 0.25) !important;
  --list-marker-color-collapsed: rgba(55, 53, 47, 0.45) !important;
  --list-marker-color-hover: rgba(55, 53, 47, 0.45) !important;
  --menu-background: hsl(203, 8%, 96%) !important;
  --metadata-border-color: rgba(55, 53, 47, 0.14) !important;
  --metadata-divider-color: rgba(55, 53, 47, 0.14) !important;
  --metadata-input-text-color: rgba(55, 53, 47, 0.9) !important;
  --metadata-label-text-color: rgba(55, 53, 47, 0.45) !important;
  --metadata-label-text-color-hover: rgba(55, 53, 47, 0.45) !important;
  --modal-background: hsl(203, 8%, 100%) !important;
  --nav-collapse-icon-color: rgba(55, 53, 47, 0.25) !important;
  --nav-collapse-icon-color-collapsed: rgba(55, 53, 47, 0.25) !important;
  --nav-heading-color: rgba(55, 53, 47, 0.9) !important;
  --nav-heading-color-collapsed: rgba(55, 53, 47, 0.25) !important;
  --nav-heading-color-collapsed-hover: rgba(55, 53, 47, 0.45) !important;
  --nav-heading-color-hover: rgba(55, 53, 47, 0.9) !important;
  --nav-item-color: rgba(55, 53, 47, 0.45) !important;
  --nav-item-color-active: rgba(55, 53, 47, 0.9) !important;
  --nav-item-color-highlighted: rgba(55, 53, 47, 0.45) !important;
  --nav-item-color-hover: rgba(55, 53, 47, 0.9) !important;
  --nav-item-color-selected: rgba(55, 53, 47, 0.9) !important;
  --nav-tag-color: rgba(55, 53, 47, 0.25) !important;
  --nav-tag-color-active: rgba(55, 53, 47, 0.45) !important;
  --nav-tag-color-hover: rgba(55, 53, 47, 0.45) !important;
  --opacity-translucency: 0.7 !important;
  --pdf-background: hsl(203, 8%, 100%) !important;
  --pdf-page-background: hsl(203, 8%, 100%) !important;
  --pdf-sidebar-background: hsl(203, 8%, 100%) !important;
  --pill-border-color: rgba(55, 53, 47, 0.14) !important;
  --pill-color: rgba(55, 53, 47, 0.45) !important;
  --pill-color-hover: rgba(55, 53, 47, 0.9) !important;
  --pill-color-remove: rgba(55, 53, 47, 0.25) !important;
  --pill-color-remove-hover: rgba(55, 53, 47, 0.45) !important;
  --prompt-background: hsl(203, 8%, 100%) !important;
  --raised-background: color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent) linear-gradient(hsl(203, 8%, 100%), color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent)) !important;
  --ribbon-background: hsl(203, 8%, 96%) !important;
  --ribbon-background-collapsed: hsl(203, 8%, 100%) !important;
  --sat: 8% !important;
  --search-clear-button-color: rgba(55, 53, 47, 0.45) !important;
  --search-icon-color: rgba(55, 53, 47, 0.45) !important;
  --search-result-background: hsl(203, 8%, 100%) !important;
  --secondary: rgba(55, 53, 47, 0.45) !important;
  --setting-group-heading-color: rgba(55, 53, 47, 0.9) !important;
  --setting-items-background: hsl(203, 8%, 96%) !important;
  --setting-items-border-color: rgba(55, 53, 47, 0.14) !important;
  --slider-track-background: rgba(55, 53, 47, 0.14) !important;
  --status-bar-background: hsl(203, 8%, 96%) !important;
  --status-bar-border-color: rgba(55, 53, 47, 0.14) !important;
  --status-bar-text-color: rgba(55, 53, 47, 0.45) !important;
  --suggestion-background: hsl(203, 8%, 100%) !important;
  --tab-background-active: hsl(203, 8%, 100%) !important;
  --tab-container-background: hsl(203, 8%, 96%) !important;
  --tab-outline-color: rgba(55, 53, 47, 0.14) !important;
  --tab-switcher-background: hsl(203, 8%, 96%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(203, 8%, 96%), transparent) !important;
  --tab-text-color: rgba(55, 53, 47, 0.25) !important;
  --tab-text-color-active: rgba(55, 53, 47, 0.45) !important;
  --tab-text-color-focused: rgba(55, 53, 47, 0.45) !important;
  --tab-text-color-focused-active: rgba(55, 53, 47, 0.45) !important;
  --tab-text-color-focused-active-current: rgba(55, 53, 47, 0.9) !important;
  --tab-text-color-focused-highlighted: rgba(55, 53, 47, 0.45) !important;
  --table-add-button-border-color: rgba(55, 53, 47, 0.14) !important;
  --table-border-color: rgba(55, 53, 47, 0.14) !important;
  --table-drag-handle-background-active: rgb(46, 170, 220) !important;
  --table-drag-handle-color: rgba(55, 53, 47, 0.25) !important;
  --table-drag-handle-color-active: rgba(55, 53, 47, 0.9) !important;
  --table-header-border-color: rgba(55, 53, 47, 0.14) !important;
  --table-header-color: rgba(55, 53, 47, 0.9) !important;
  --table-selection-border-color: rgb(46, 170, 220) !important;
  --tag-color: rgba(55, 53, 47, 0.45) !important;
  --tag-color-hover: rgba(55, 53, 47, 0.45) !important;
  --tertiary: rgba(55, 53, 47, 0.45) !important;
  --text-accent: rgba(55, 53, 47, 0.45) !important;
  --text-accent-hover: rgba(55, 53, 47, 0.45) !important;
  --text-blue: rgb(11, 110, 153) !important;
  --text-brown: rgb(100, 71, 58) !important;
  --text-faint: rgba(55, 53, 47, 0.25) !important;
  --text-gray: rgba(55, 53, 47, 0.6) !important;
  --text-green: rgb(15, 123, 108) !important;
  --text-highlight-bg: rgb(251, 243, 219) !important;
  --text-muted: rgba(55, 53, 47, 0.45) !important;
  --text-normal: rgba(55, 53, 47, 0.9) !important;
  --text-on-accent: rgba(55, 53, 47, 0.9) !important;
  --text-orange: rgb(217, 115, 13) !important;
  --text-pink: rgb(173, 26, 114) !important;
  --text-purple: rgb(105, 64, 165) !important;
  --text-red: rgb(224, 62, 62) !important;
  --text-rgb: 55, 53, 47 !important;
  --text-selection: rgba(0, 122, 255, 0.15) !important;
  --text-yellow: rgb(223, 171, 1) !important;
  --textHighlight: rgb(251, 243, 219) !important;
  --titlebar-background: hsl(203, 8%, 96%) !important;
  --titlebar-background-focused: hsl(203, 8%, 90%) !important;
  --titlebar-border-color: rgba(55, 53, 47, 0.14) !important;
  --titlebar-text-color: rgba(55, 53, 47, 0.45) !important;
  --titlebar-text-color-focused: rgba(55, 53, 47, 0.9) !important;
  --vault-profile-color: rgba(55, 53, 47, 0.9) !important;
  --vault-profile-color-hover: rgba(55, 53, 47, 0.9) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 245, 246);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(55, 53, 47, 0.14) rgba(55, 53, 47, 0.14) rgba(55, 53, 47, 0.14) rgba(55, 53, 47, 0.45);
  color: rgba(55, 53, 47, 0.45);
  font-weight: 400;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(55, 53, 47, 0.14);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 245, 246);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(55, 53, 47, 0.14);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 245, 246);
  border-left-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgba(55, 53, 47, 0.9);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(251, 243, 219);
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body del {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body h1.article-title {
  color: rgba(55, 53, 47, 0.9);
  font-size: 40px;
  font-weight: 700;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(55, 53, 47, 0.25);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(46, 170, 220);
  border-color: rgb(46, 170, 220);
}

html[saved-theme="light"] body p {
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.45) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgba(55, 53, 47, 0.9);
  font-weight: 500;
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(55, 53, 47, 0.45);
  font-weight: 500;
  outline: rgba(55, 53, 47, 0.45) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body dt {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body ol > li {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body ul > li {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(55, 53, 47, 0.25);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body table {
  color: rgba(55, 53, 47, 0.9);
  width: 200.938px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-left-width: 0px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
  font-weight: 600;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-left-width: 0px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.45);
  font-weight: 400;
  text-align: left;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
  padding-bottom: 24px;
  padding-left: 10px;
  padding-right: 6px;
  padding-top: 24px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body figcaption {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  margin-bottom: 2px;
  margin-right: 4px;
  transition: background-color 0.2s ease-out;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through;
  text-decoration-color: rgba(55, 53, 47, 0.45);
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
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 245, 246);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body h1 {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body h2 {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body h3 {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body h4 {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body h5 {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body h6 {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgba(55, 53, 47, 0.9);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
  color: rgba(55, 53, 47, 0.45);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(55, 53, 47, 0.45);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
  color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgba(55, 53, 47, 0.45);
  stroke: rgba(55, 53, 47, 0.45);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
  color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(55, 53, 47, 0.25);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
  color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(244, 245, 246);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body abbr {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
  color: rgba(55, 53, 47, 0.45);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body sub {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body summary {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body sup {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(251, 243, 219);
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
}`,
  },
};
