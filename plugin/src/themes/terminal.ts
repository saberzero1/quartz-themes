import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "terminal",
    modes: ["dark"],
    variations: [],
    fonts: ["fira-code"],
  },
  dark: {
    base: `:root:root {
  --active-tab: "^" !important;
  --all: "-a" !important;
  --background-modifier-border: #15d00d !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0) !important;
  --background-modifier-success: #197300 !important;
  --background-primary: #000000 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-cards-shadow: 0 0 0 1px #15d00d !important;
  --bases-embed-border-color: #15d00d !important;
  --bases-group-heading-property-color: #15d00d !important;
  --bases-table-border-color: #15d00d !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #000000 !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-color: #15d00d !important;
  --bases-table-summary-background: #000000 !important;
  --blockquote-border-color: #000000 !important;
  --blur-background: color-mix(in srgb, #000000 65%, transparent) linear-gradient(#000000, color-mix(in srgb, #000000 65%, transparent)) !important;
  --bodyFont: Fira Code, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #000000 !important;
  --canvas-card-label-color: #15d00d !important;
  --caret-color: #15d00d !important;
  --char-width: 8.75px !important;
  --checkbox-border-color: #15d00d !important;
  --checkbox-border-color-hover: #15d00d !important;
  --checkbox-color: #000000 !important;
  --checkbox-color-hover: #000000 !important;
  --checkbox-marker-color: #000000 !important;
  --checklist-done-color: #15d00d !important;
  --close: "x" !important;
  --code-background: #000000 !important;
  --code-border-color: #15d00d !important;
  --code-comment: #15d00d !important;
  --code-normal: #15d00d !important;
  --code-punctuation: #15d00d !important;
  --codeFont: Fira Code, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-down: "v" !important;
  --collapse-icon-color: #15d00d !important;
  --collapse-icon-color-collapsed: #15d00d !important;
  --collapse-right: ">" !important;
  --dark: #15d00d !important;
  --darkgray: #15d00d !important;
  --default-font: Fira Code !important;
  --divider-color: #15d00d !important;
  --divider-color-hover: #000000 !important;
  --dropdown-background: #000000 !important;
  --dropdown-background-hover: #000000 !important;
  --edit-mode: "/e" !important;
  --editor-line-height: 1.3 !important;
  --embed-block-shadow-hover: 0 0 0 1px #15d00d, inset 0 0 0 1px #15d00d !important;
  --embed-border-start: 2px solid #000000 !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --file-header-font: Fira Code, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #000000 !important;
  --flair-color: #15d00d !important;
  --font-interface: Fira Code, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #15d00d !important;
  --footnote-id-color: #15d00d !important;
  --footnote-id-color-no-occurrences: #15d00d !important;
  --graph-node: #15d00d !important;
  --graph-node-focused: #15d00d !important;
  --graph-node-unresolved: #15d00d !important;
  --graph-text: #15d00d !important;
  --gray: #15d00d !important;
  --headerFont: Fira Code, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #15d00d !important;
  --highlight: rgba(255, 255, 0, 0.4) !important;
  --hr-color: #15d00d !important;
  --icon-color: #15d00d !important;
  --icon-color-active: #15d00d !important;
  --icon-color-focused: #15d00d !important;
  --icon-color-hover: #15d00d !important;
  --input-date-separator: #15d00d !important;
  --input-placeholder-color: #15d00d !important;
  --input-prompt: "$" !important;
  --interactive-accent: #000000 !important;
  --interactive-accent-hover: #000000 !important;
  --interactive-accent-rgb: 35, 255, 24 !important;
  --interactive-hover: #000000 !important;
  --interactive-normal: #000000 !important;
  --interactive-success: #197300 !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: #15d00d !important;
  --link-color-hover: #15d00d !important;
  --link-external-color: #15d00d !important;
  --link-external-color-hover: #15d00d !important;
  --link-unresolved-color: #15d00d !important;
  --list-marker-color: #15d00d !important;
  --list-marker-color-collapsed: #15d00d !important;
  --list-marker-color-hover: #15d00d !important;
  --menu-background: #000000 !important;
  --metadata-border-color: #15d00d !important;
  --metadata-divider-color: #15d00d !important;
  --metadata-input-font: Fira Code, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #15d00d !important;
  --metadata-label-font: Fira Code, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #15d00d !important;
  --metadata-label-text-color-hover: #15d00d !important;
  --modal-background: #000000 !important;
  --more: "/?" !important;
  --nav-collapse-icon-color: #15d00d !important;
  --nav-collapse-icon-color-collapsed: #15d00d !important;
  --nav-heading-color: #15d00d !important;
  --nav-heading-color-collapsed: #15d00d !important;
  --nav-heading-color-collapsed-hover: #15d00d !important;
  --nav-heading-color-hover: #15d00d !important;
  --nav-item-color: #15d00d !important;
  --nav-item-color-active: #15d00d !important;
  --nav-item-color-highlighted: #15d00d !important;
  --nav-item-color-hover: #15d00d !important;
  --nav-item-color-selected: #15d00d !important;
  --nav-tag-color: #15d00d !important;
  --nav-tag-color-active: #15d00d !important;
  --nav-tag-color-hover: #15d00d !important;
  --next: ">" !important;
  --not-created-note: "+" !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-shadow: 0 0 0 1px #15d00d !important;
  --pdf-sidebar-background: #000000 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #15d00d !important;
  --pill-border-color: #15d00d !important;
  --pill-color: #15d00d !important;
  --pill-color-hover: #15d00d !important;
  --pill-color-remove: #15d00d !important;
  --pill-color-remove-hover: #15d00d !important;
  --pin-command: "*" !important;
  --prev: "<" !important;
  --preview-mode: "/p" !important;
  --prompt-background: #000000 !important;
  --pwd: "PWD" !important;
  --quit: "/q" !important;
  --raised-background: color-mix(in srgb, #000000 65%, transparent) linear-gradient(#000000, color-mix(in srgb, #000000 65%, transparent)) !important;
  --replace: ":" !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-active-thumb-bg: rgb(255, 255, 255) !important;
  --search: "/" !important;
  --search-clear-button-color: #15d00d !important;
  --search-icon-color: #15d00d !important;
  --search-result-background: #000000 !important;
  --secondary: #15d00d !important;
  --selected: ">" !important;
  --setting-group-heading-color: #15d00d !important;
  --setting-items-background: #000000 !important;
  --setting-items-border-color: #15d00d !important;
  --show-more-bottom: "+/" !important;
  --show-more-top: "+\\\\" !important;
  --slider-track-background: #15d00d !important;
  --status-bar-background: #000000 !important;
  --status-bar-border-color: #15d00d !important;
  --status-bar-height: 21px !important;
  --status-bar-text-color: #15d00d !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #000000 !important;
  --tab-outline-color: #15d00d !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color: #15d00d !important;
  --tab-text-color-active: #15d00d !important;
  --tab-text-color-focused: #15d00d !important;
  --tab-text-color-focused-active: #15d00d !important;
  --tab-text-color-focused-active-current: #15d00d !important;
  --tab-text-color-focused-highlighted: #15d00d !important;
  --table-add-button-border-color: #15d00d !important;
  --table-border-color: #15d00d !important;
  --table-drag-handle-background-active: #000000 !important;
  --table-drag-handle-color: #15d00d !important;
  --table-drag-handle-color-active: #15d00d !important;
  --table-header-border-color: #15d00d !important;
  --table-header-color: #15d00d !important;
  --table-selection-border-color: #000000 !important;
  --tag-color: #15d00d !important;
  --tag-color-hover: #15d00d !important;
  --tertiary: #15d00d !important;
  --text-accent: #15d00d !important;
  --text-accent-hover: #15d00d !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #15d00d !important;
  --text-highlight-bg: rgba(255, 255, 0, 0.4) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #15d00d !important;
  --text-muted-rgb: 35, 255, 24 !important;
  --text-normal: #15d00d !important;
  --text-on-accent: #15d00d !important;
  --text-selection: rgba(23, 48, 77, 0.99) !important;
  --textHighlight: rgba(255, 255, 0, 0.4) !important;
  --the-background-color: #000000 !important;
  --the-color: #15d00d !important;
  --the-color-rgb: 35, 255, 24 !important;
  --the-font: Fira Code !important;
  --the-font-size: 14px !important;
  --titleFont: Fira Code, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-border-color: #15d00d !important;
  --titlebar-text-color: #15d00d !important;
  --titlebar-text-color-focused: #15d00d !important;
  --vault-profile-color: #15d00d !important;
  --vault-profile-color-hover: #15d00d !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(21, 208, 13);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(21, 208, 13);
}

html body .bases-table thead th {
  border-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body .canvas-node {
  border-color: rgb(21, 208, 13);
}

html body .canvas-node-content {
  color: rgb(21, 208, 13);
}

html body .canvas-node-file {
  color: rgb(21, 208, 13);
}

html body .canvas-node-group {
  border-color: rgb(21, 208, 13);
}

html body .canvas-sidebar {
  background-color: rgb(0, 0, 0);
  border-color: rgb(21, 208, 13);
}

html body .note-properties {
  border-color: rgb(21, 208, 13);
}

html body .note-properties-key {
  color: rgb(21, 208, 13);
}

html body .note-properties-row {
  border-color: rgb(21, 208, 13);
}

html body .note-properties-tags {
  border-radius: 24.5px;
  color: rgb(21, 208, 13);
}

html body .note-properties-value {
  color: rgb(21, 208, 13);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(21, 208, 13);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(21, 208, 13);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(21, 208, 13);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
  outline: rgb(21, 208, 13) none 0px;
  text-decoration-color: rgb(21, 208, 13);
}

html body .page article p > em, html em {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
  outline: rgb(21, 208, 13) none 0px;
  text-decoration-color: rgb(21, 208, 13);
}

html body .page article p > i, html i {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
  outline: rgb(21, 208, 13) none 0px;
  text-decoration-color: rgb(21, 208, 13);
}

html body .page article p > strong, html strong {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
  outline: rgb(21, 208, 13) none 0px;
  text-decoration-color: rgb(21, 208, 13);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
  font-weight: 700;
  outline: rgb(21, 208, 13) none 0px;
  text-decoration-color: rgb(21, 208, 13);
}

html body del {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
  outline: rgb(21, 208, 13) none 0px;
  text-decoration-color: rgb(21, 208, 13);
}

html body h1.article-title {
  color: rgb(21, 208, 13);
  font-size: 14px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(21, 208, 13);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
}

html body p {
  color: rgb(21, 208, 13);
  font-family: "??", "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(21, 208, 13) none 0px;
  text-decoration-color: rgb(21, 208, 13);
}`,
    links: `html body a.external, html footer a {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
  outline: rgb(21, 208, 13) none 0px;
  text-decoration-color: rgb(21, 208, 13);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
  outline: rgb(21, 208, 13) none 0px;
  text-decoration-color: rgb(21, 208, 13);
}

html body a.internal.broken {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
  outline: rgb(21, 208, 13) none 0px;
}`,
    lists: `html body dd {
  color: rgb(21, 208, 13);
}

html body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

html body dt {
  color: rgb(21, 208, 13);
}

html body ol > li {
  color: rgb(21, 208, 13);
}

html body ol.overflow {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  border-top-style: solid;
  border-top-width: 1px;
}

html body ul > li {
  color: rgb(21, 208, 13);
}

html body ul.overflow {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(21, 208, 13);
}

html body blockquote {
  font-family: "Fira Code";
  padding-bottom: 18.2px;
  padding-top: 18.2px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body table {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
  margin-top: 0px;
  width: 225.094px;
}

html body td {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
  padding-bottom: 0px;
  padding-left: 8.75px;
  padding-right: 8.75px;
  padding-top: 0px;
}

html body th {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
  padding-bottom: 0px;
  padding-left: 8.75px;
  padding-right: 8.75px;
  padding-top: 0px;
}`,
    code: `html body code {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  padding-bottom: 0px;
  padding-left: 17.5px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  padding-bottom: 0px;
  padding-left: 17.5px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body figcaption {
  color: rgb(21, 208, 13);
  font-size: 14px;
}

html body figure {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  margin-bottom: 14px;
  margin-top: 14px;
}

html body img {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body video {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body .footnotes {
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body .transclude {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body .transclude-inner {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  margin-right: 0px;
  width: 56.875px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(21, 208, 13);
  text-decoration-color: rgb(21, 208, 13);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(21, 208, 13);
  border-bottom-width: 0px;
  border-left-color: rgb(21, 208, 13);
  border-left-width: 0px;
  border-right-color: rgb(21, 208, 13);
  border-right-width: 0px;
  border-top-color: rgb(21, 208, 13);
  border-top-width: 0px;
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
}

html body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(21, 208, 13);
  outline: rgb(21, 208, 13) none 0px;
  text-decoration-color: rgb(21, 208, 13);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(21, 208, 13);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(21, 208, 13);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(21, 208, 13);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(21, 208, 13);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
  font-family: "??", "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(21, 208, 13);
}

html body h1 {
  color: rgb(21, 208, 13);
}

html body h2 {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
}

html body h2.page-title, html h2.page-title a {
  color: rgb(21, 208, 13);
}

html body h3 {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
}

html body h4 {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
}

html body h5 {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
}

html body h6 {
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
}

html body hr {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(21, 208, 13);
  font-family: "??", "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(21, 208, 13);
  font-family: "??", "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(21, 208, 13);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}`,
    footer: `html body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-left-width: 0px;
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  border-top-left-radius: 0px;
  color: rgb(21, 208, 13);
  font-family: "??", "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(0, 0, 0);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(21, 208, 13);
  font-family: "??", "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(21, 208, 13);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(21, 208, 13);
  font-family: "??", "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body li.section-li > .section .meta {
  color: rgb(21, 208, 13);
  font-family: "??", "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(21, 208, 13);
}

html body ul.section-ul {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body .darkmode svg {
  color: rgb(21, 208, 13);
  stroke: rgb(21, 208, 13);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body .breadcrumb-element p {
  color: rgb(21, 208, 13);
  font-family: "??", "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body .metadata {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body .metadata-properties {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html body .page-header h2.page-title {
  color: rgb(21, 208, 13);
  font-family: "??", "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(21, 208, 13);
}

html body details {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body input[type=text] {
  border-bottom-color: rgb(21, 208, 13);
  border-bottom-width: 1px;
  border-left-color: rgb(21, 208, 13);
  border-left-width: 1px;
  border-right-color: rgb(21, 208, 13);
  border-right-width: 1px;
  border-top-color: rgb(21, 208, 13);
  border-top-width: 1px;
  color: rgb(21, 208, 13);
  font-family: "Fira Code";
}

html body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
  color: rgb(21, 208, 13);
}

html body progress {
  border-bottom-color: rgb(21, 208, 13);
  border-left-color: rgb(21, 208, 13);
  border-right-color: rgb(21, 208, 13);
  border-top-color: rgb(21, 208, 13);
}

html body sub {
  color: rgb(21, 208, 13);
  font-size: 11.6667px;
}

html body summary {
  color: rgb(21, 208, 13);
}

html body sup {
  color: rgb(21, 208, 13);
  font-size: 14px;
}

html body ul.tags > li {
  border-bottom-left-radius: 21.4375px;
  border-bottom-right-radius: 21.4375px;
  border-top-left-radius: 21.4375px;
  border-top-right-radius: 21.4375px;
  color: rgb(21, 208, 13);
}`,
  },
  light: {},
};
