import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "creature",
    modes: ["dark"],
    variations: [],
    fonts: ["sf-mono"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #323232 !important;
  --background-modifier-error: red-base !important;
  --background-modifier-error-hover: #ff6b64 !important;
  --background-modifier-form-field: #282828 !important;
  --background-modifier-form-field-highlighted: #2d2d2d !important;
  --background-modifier-form-field-hover: #282828 !important;
  --background-modifier-success: #2edb6e !important;
  --background-modifier-success-hover: #44df7d !important;
  --background-primary-alt: #1e1e1e !important;
  --background-secondary: #1e1e1e !important;
  --background-secondary-alt: #1e1e1e !important;
  --bases-cards-cover-background: #1e1e1e !important;
  --bases-cards-shadow: 0 0 0 1px #323232 !important;
  --bases-embed-border-color: #323232 !important;
  --bases-group-heading-property-color: rgba(255, 255, 255, 0.6) !important;
  --bases-table-border-color: #323232 !important;
  --bases-table-cell-background-disabled: #1e1e1e !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #2edb6e !important;
  --bases-table-group-background: #1e1e1e !important;
  --bases-table-header-color: rgba(255, 255, 255, 0.6) !important;
  --black: rgb(0, 0, 0) !important;
  --blockquote-border-color: #2edb6e !important;
  --blue: #009fff !important;
  --blue-light: #1aa9ff !important;
  --bodyFont: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --border: #323232 !important;
  --canvas-card-label-color: rgba(255, 255, 255, 0.38) !important;
  --caret-color: rgba(255, 255, 255, 0.87) !important;
  --checkbox-border-color: rgba(255, 255, 255, 0.38) !important;
  --checkbox-border-color-hover: rgba(255, 255, 255, 0.6) !important;
  --checkbox-color: #2edb6e !important;
  --checkbox-color-hover: #44df7d !important;
  --checklist-done-color: rgba(255, 255, 255, 0.6) !important;
  --code-background: #1e1e1e !important;
  --code-block: rgba(255, 255, 255, 0.87) !important;
  --code-border-color: #323232 !important;
  --code-comment: rgba(255, 255, 255, 0.38) !important;
  --code-normal: rgba(255, 255, 255, 0.87) !important;
  --code-punctuation: rgba(255, 255, 255, 0.6) !important;
  --codeFont: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgba(255, 255, 255, 0.38) !important;
  --collapse-icon-color-collapsed: #2edb6e !important;
  --dark: rgba(255, 255, 255, 0.87) !important;
  --dark0: #1e1e1e !important;
  --dark1: #232323 !important;
  --dark2: #282828 !important;
  --dark3: #2d2d2d !important;
  --dark4: #323232 !important;
  --darkgray: rgba(255, 255, 255, 0.87) !important;
  --default-font: system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif !important;
  --divider-color: #323232 !important;
  --divider-color-hover: #2edb6e !important;
  --embed-block-shadow-hover: 0 0 0 1px #323232, inset 0 0 0 1px #323232 !important;
  --embed-border-start: 2px solid #2edb6e !important;
  --error: red-base !important;
  --error-hover: #ff6b64 !important;
  --file-header-font: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: rgba(255, 255, 255, 0.87) !important;
  --font-interface: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #323232 !important;
  --footnote-id-color: rgba(255, 255, 255, 0.6) !important;
  --footnote-id-color-no-occurrences: rgba(255, 255, 255, 0.38) !important;
  --graph-node: rgba(255, 255, 255, 0.6) !important;
  --graph-node-focused: #2edb6e !important;
  --graph-node-unresolved: rgba(255, 255, 255, 0.38) !important;
  --graph-text: rgba(255, 255, 255, 0.87) !important;
  --gray: rgba(255, 255, 255, 0.6) !important;
  --green: #2edb6e !important;
  --green-light: #44df7d !important;
  --headerFont: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(255, 255, 255, 0.38) !important;
  --highlight: #009fff !important;
  --hr-color: #323232 !important;
  --icon-color: rgba(255, 255, 255, 0.6) !important;
  --icon-color-active: #2edb6e !important;
  --icon-color-focused: rgba(255, 255, 255, 0.87) !important;
  --icon-color-hover: rgba(255, 255, 255, 0.6) !important;
  --info: #009fff !important;
  --info-hover: #1aa9ff !important;
  --inline-code: rgba(255, 255, 255, 0.87) !important;
  --input-date-separator: rgba(255, 255, 255, 0.38) !important;
  --input-placeholder-color: rgba(255, 255, 255, 0.38) !important;
  --interactive-accent: #2edb6e !important;
  --interactive-accent-hover: #44df7d !important;
  --interactive-success: #2edb6e !important;
  --light: #1e1e1e !important;
  --light0: rgba(255, 255, 255, 0.18) !important;
  --light1: rgba(255, 255, 255, 0.38) !important;
  --light2: rgba(255, 255, 255, 0.6) !important;
  --light3: rgba(255, 255, 255, 0.87) !important;
  --lightgray: #1e1e1e !important;
  --link-color: #2edb6e !important;
  --link-color-hover: #44df7d !important;
  --link-external-color: #2edb6e !important;
  --link-external-color-hover: #44df7d !important;
  --link-unresolved-color: #2edb6e !important;
  --list-marker-color: rgba(255, 255, 255, 0.38) !important;
  --list-marker-color-collapsed: #2edb6e !important;
  --list-marker-color-hover: rgba(255, 255, 255, 0.6) !important;
  --menu-background: #1e1e1e !important;
  --metadata-border-color: #323232 !important;
  --metadata-divider-color: #323232 !important;
  --metadata-input-font: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgba(255, 255, 255, 0.87) !important;
  --metadata-label-font: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(255, 255, 255, 0.6) !important;
  --metadata-label-text-color-hover: rgba(255, 255, 255, 0.6) !important;
  --nav-collapse-icon-color: rgba(255, 255, 255, 0.38) !important;
  --nav-collapse-icon-color-collapsed: rgba(255, 255, 255, 0.38) !important;
  --nav-heading-color: rgba(255, 255, 255, 0.87) !important;
  --nav-heading-color-collapsed: rgba(255, 255, 255, 0.38) !important;
  --nav-heading-color-collapsed-hover: rgba(255, 255, 255, 0.6) !important;
  --nav-heading-color-hover: rgba(255, 255, 255, 0.87) !important;
  --nav-item-color: rgba(255, 255, 255, 0.6) !important;
  --nav-item-color-active: rgba(255, 255, 255, 0.87) !important;
  --nav-item-color-highlighted: #2edb6e !important;
  --nav-item-color-hover: rgba(255, 255, 255, 0.87) !important;
  --nav-item-color-selected: rgba(255, 255, 255, 0.87) !important;
  --nav-tag-color: rgba(255, 255, 255, 0.38) !important;
  --nav-tag-color-active: rgba(255, 255, 255, 0.6) !important;
  --nav-tag-color-hover: rgba(255, 255, 255, 0.6) !important;
  --pdf-shadow: 0 0 0 1px #323232 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #323232 !important;
  --pill-border-color: #323232 !important;
  --pill-color: rgba(255, 255, 255, 0.6) !important;
  --pill-color-hover: rgba(255, 255, 255, 0.87) !important;
  --pill-color-remove: rgba(255, 255, 255, 0.38) !important;
  --pill-color-remove-hover: #2edb6e !important;
  --pre-code: #282828 !important;
  --primary: #2edb6e !important;
  --primary-hover: #44df7d !important;
  --red: red-base !important;
  --red-light: #ff6b64 !important;
  --ribbon-background: #1e1e1e !important;
  --search-clear-button-color: rgba(255, 255, 255, 0.6) !important;
  --search-icon-color: rgba(255, 255, 255, 0.6) !important;
  --secondary: #2edb6e !important;
  --setting-group-heading-color: rgba(255, 255, 255, 0.87) !important;
  --setting-items-background: #1e1e1e !important;
  --setting-items-border-color: #323232 !important;
  --slider-track-background: #323232 !important;
  --status-bar-background: #1e1e1e !important;
  --status-bar-border-color: #323232 !important;
  --status-bar-text-color: rgba(255, 255, 255, 0.6) !important;
  --success: #2edb6e !important;
  --success-hover: #44df7d !important;
  --tab-container-background: #1e1e1e !important;
  --tab-outline-color: #323232 !important;
  --tab-switcher-background: #1e1e1e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e1e1e, transparent) !important;
  --tab-text-color: rgba(255, 255, 255, 0.38) !important;
  --tab-text-color-active: rgba(255, 255, 255, 0.6) !important;
  --tab-text-color-focused: rgba(255, 255, 255, 0.6) !important;
  --tab-text-color-focused-active: rgba(255, 255, 255, 0.6) !important;
  --tab-text-color-focused-active-current: rgba(255, 255, 255, 0.87) !important;
  --tab-text-color-focused-highlighted: #2edb6e !important;
  --table-add-button-border-color: #323232 !important;
  --table-border-color: #323232 !important;
  --table-drag-handle-background-active: #2edb6e !important;
  --table-drag-handle-color: rgba(255, 255, 255, 0.38) !important;
  --table-drag-handle-color-active: rgb(255, 255, 255) !important;
  --table-header-border-color: #323232 !important;
  --table-header-color: rgba(255, 255, 255, 0.87) !important;
  --table-selection-border-color: #2edb6e !important;
  --tag-color: #2edb6e !important;
  --tag-color-hover: #2edb6e !important;
  --tertiary: #44df7d !important;
  --text-accent: #2edb6e !important;
  --text-accent-hover: #44df7d !important;
  --text-error: red-base !important;
  --text-error-hover: #ff6b64 !important;
  --text-faint: rgba(255, 255, 255, 0.38) !important;
  --text-highlight-bg: #009fff !important;
  --text-muted: rgba(255, 255, 255, 0.6) !important;
  --text-normal: rgba(255, 255, 255, 0.87) !important;
  --text-on-accent: rgb(255, 255, 255) !important;
  --text-selection: #323232 !important;
  --textHighlight: #009fff !important;
  --titleFont: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #1e1e1e !important;
  --titlebar-background-focused: #1e1e1e !important;
  --titlebar-border-color: #323232 !important;
  --titlebar-text-color: rgba(255, 255, 255, 0.6) !important;
  --titlebar-text-color-focused: rgba(255, 255, 255, 0.87) !important;
  --todoList-checkboxBorder: 2px solid $gray-lighter !important;
  --todoList-listItemBackground: $gray-base !important;
  --todoList-listItemBorderRadius: $border-radius-softer !important;
  --vault-profile-color: rgba(255, 255, 255, 0.87) !important;
  --vault-profile-color-hover: rgba(255, 255, 255, 0.87) !important;
  --white: rgb(255, 255, 255) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 30, 30);
  color: rgba(255, 255, 255, 0.87);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  color: rgba(255, 255, 255, 0.87);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 30, 30);
  color: rgba(255, 255, 255, 0.87);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(50, 50, 50);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 30, 30);
  border-left-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}

html body div#quartz-root {
  color: rgba(255, 255, 255, 0.87);
}`,
    typography: `html body .page article p > b, html b {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body .page article p > em, html em {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body .page article p > i, html i {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body .page article p > strong, html strong {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body .text-highlight {
  background-color: rgb(0, 159, 255);
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body del {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: line-through rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body p {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgba(255, 255, 255, 0.6) none 0px;
  text-decoration: rgba(255, 255, 255, 0.6);
  text-decoration-color: rgba(255, 255, 255, 0.6);
}`,
    links: `html body a.external, html footer a {
  color: rgb(46, 219, 110);
  outline: rgb(46, 219, 110) none 0px;
  text-decoration: underline rgb(46, 219, 110);
  text-decoration-color: rgb(46, 219, 110);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(46, 219, 110);
  outline: rgb(46, 219, 110) none 0px;
  text-decoration: underline rgb(46, 219, 110);
  text-decoration-color: rgb(46, 219, 110);
}

html body a.internal.broken {
  color: rgb(46, 219, 110);
  outline: rgb(46, 219, 110) none 0px;
}`,
    lists: `html body dd {
  color: rgba(255, 255, 255, 0.87);
}

html body dt {
  color: rgba(255, 255, 255, 0.87);
}

html body ol > li {
  color: rgba(255, 255, 255, 0.87);
}

html body ol.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body ul > li {
  color: rgba(255, 255, 255, 0.87);
}

html body ul.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgba(255, 255, 255, 0.38);
  text-decoration: rgba(255, 255, 255, 0.38);
}`,
    tables: `html body .spacer {
  background-color: rgb(30, 30, 30);
}

html body .table-container {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body table {
  color: rgba(255, 255, 255, 0.87);
}

html body td {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}

html body th {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}`,
    code: `html body code {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgba(255, 255, 255, 0.87);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}

html body pre:has(> code) {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}`,
    images: `html body audio {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body figcaption {
  color: rgba(255, 255, 255, 0.87);
}

html body figure {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body img {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body video {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
}

html body .footnotes {
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

html body .transclude {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgb(46, 219, 110);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body .transclude-inner {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgb(46, 219, 110);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: line-through rgba(255, 255, 255, 0.6);
  text-decoration-color: rgba(255, 255, 255, 0.6);
}

html body input[type=checkbox] {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2px;
  margin-right: 4px;
  width: 17.3281px;
}

html body li.task-list-item[data-task='!'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='*'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='-'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='/'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='>'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='?'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='I'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='S'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='b'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='c'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='d'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='f'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='i'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='k'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='l'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='p'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='u'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='w'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}`,
    search: `html body .search > .search-button {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 50, 50);
  border-left-width: 2px;
  border-right-color: rgb(50, 50, 50);
  border-right-width: 2px;
  border-top-color: rgb(50, 50, 50);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgba(255, 255, 255, 0.87);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px 0px, rgba(0, 0, 0, 0.11) 0px 2px 2px 0px, rgba(0, 0, 0, 0.11) 0px 4px 4px 0px, rgba(0, 0, 0, 0.11) 0px 8px 8px 0px, rgba(0, 0, 0, 0.11) 0px 16px 16px 0px, rgba(0, 0, 0, 0.11) 0px 32px 32px 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 255, 255, 0.87);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgba(255, 255, 255, 0.87);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(40, 40, 40);
  color: rgba(255, 255, 255, 0.87);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 50, 50);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(50, 50, 50);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(50, 50, 50);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 2px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgba(255, 255, 255, 0.87);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(40, 40, 40);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgba(255, 255, 255, 0.87);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(46, 219, 110);
}

html body h1 {
  color: rgba(255, 255, 255, 0.87);
}

html body h2 {
  color: rgba(255, 255, 255, 0.87);
}

html body h2.page-title, html h2.page-title a {
  color: rgba(255, 255, 255, 0.87);
}

html body h3 {
  color: rgba(255, 255, 255, 0.87);
}

html body h4 {
  color: rgba(255, 255, 255, 0.87);
}

html body h5 {
  color: rgba(255, 255, 255, 0.87);
}

html body h6 {
  color: rgba(255, 255, 255, 0.87);
}

html body hr {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  margin-right: -3px;
}`,
    scrollbars: `html body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgba(255, 255, 255, 0.6);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgba(255, 255, 255, 0.6);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}`,
    footer: `html body footer {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html body footer ul li a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: rgba(255, 255, 255, 0.6);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgba(255, 255, 255, 0.87);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: rgba(255, 255, 255, 0.6);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body li.section-li > .section .meta {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: rgba(255, 255, 255, 0.6);
}

html body ul.section-ul {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}

html body .darkmode svg {
  color: rgba(255, 255, 255, 0.6);
  stroke: rgba(255, 255, 255, 0.6);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}

html body .breadcrumb-element p {
  color: rgba(255, 255, 255, 0.38);
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

html body .metadata {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.6);
}

html body .metadata-properties {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}

html body .navigation-progress {
  background-color: rgb(30, 30, 30);
}

html body .page-header h2.page-title {
  color: rgba(255, 255, 255, 0.38);
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: underline dotted rgba(255, 255, 255, 0.87);
}

html body details {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body input[type=text] {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 50, 50);
  border-left-width: 2px;
  border-right-color: rgb(50, 50, 50);
  border-right-width: 2px;
  border-top-color: rgb(50, 50, 50);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgba(255, 255, 255, 0.87);
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}

html body kbd {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

html body progress {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body sub {
  color: rgba(255, 255, 255, 0.87);
}

html body summary {
  color: rgba(255, 255, 255, 0.87);
}

html body sup {
  color: rgba(255, 255, 255, 0.87);
}`,
  },
  light: {},
};
