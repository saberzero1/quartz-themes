import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cardstock",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --alternate-lights: #988982 !important;
  --background-modifier-active-hover: #38312e !important;
  --background-modifier-border: #38312e !important;
  --background-modifier-border-focus: #c43131 !important;
  --background-modifier-border-hover: #c43131 !important;
  --background-modifier-error: #c95454 !important;
  --background-modifier-error-hover: #c43131 !important;
  --background-modifier-error-rgb: 201, 84, 84 !important;
  --background-modifier-form-field: #2f2a27 !important;
  --background-modifier-form-field-hover: #2f2a27 !important;
  --background-modifier-hover: #2f2a27 !important;
  --background-modifier-message: #c95454 !important;
  --background-modifier-success: #c95454 !important;
  --background-modifier-success-rgb: 201, 84, 84 !important;
  --background-primary: #2f2a27 !important;
  --background-primary-alt: #38312e !important;
  --background-secondary: #2f2a27 !important;
  --background-secondary-alt: #38312e !important;
  --bases-cards-background: #2f2a27 !important;
  --bases-cards-cover-background: #38312e !important;
  --bases-cards-shadow: 0 0 0 1px #38312e !important;
  --bases-cards-shadow-hover: 0 0 0 1px #c43131 !important;
  --bases-embed-border-color: #38312e !important;
  --bases-group-heading-property-color: #f0eae2 !important;
  --bases-table-border-color: #38312e !important;
  --bases-table-cell-background-active: #2f2a27 !important;
  --bases-table-cell-background-disabled: #38312e !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #c43131 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c95454 !important;
  --bases-table-group-background: #38312e !important;
  --bases-table-header-background: #2f2a27 !important;
  --bases-table-header-background-hover: #2f2a27 !important;
  --bases-table-header-color: #f0eae2 !important;
  --bases-table-summary-background: #2f2a27 !important;
  --bases-table-summary-background-hover: #2f2a27 !important;
  --beige: #f0eae2 !important;
  --blockquote-border-color: #c95454 !important;
  --blur-background: color-mix(in srgb, #473e3a 65%, transparent) linear-gradient(#473e3a, color-mix(in srgb, #473e3a 65%, transparent)) !important;
  --bodyFont: "DM Sans", "Avenir Next", "Avenir", sans-serif !important;
  --callout-blend-mode: normal;
  --canvas-background: #2f2a27 !important;
  --canvas-card-label-color: #949494 !important;
  --caret-color: #ffffff !important;
  --checkbox-border-color: #949494 !important;
  --checkbox-border-color-hover: #f0eae2 !important;
  --checkbox-color: #c95454 !important;
  --checkbox-color-hover: #c95454 !important;
  --checkbox-marker-color: #2f2a27 !important;
  --checklist-done-color: #f0eae2 !important;
  --code-background: #38312e !important;
  --code-border-color: #38312e !important;
  --code-bracket-background: #2f2a27 !important;
  --code-comment: #949494 !important;
  --code-normal: #ffffff !important;
  --code-punctuation: #f0eae2 !important;
  --codeFont: MonoLisa, "Source Code Pro", monospace !important;
  --collapse-icon-color: #949494 !important;
  --collapse-icon-color-collapsed: #c95454 !important;
  --dark: #ffffff !important;
  --dark-alternate: #988982 !important;
  --dark-beige: #e6dbcc !important;
  --dark-bg: #2f2a27 !important;
  --dark-light-text: #473e3a !important;
  --dark-lightness: #bbb1ac !important;
  --dark-secondary: #38312e !important;
  --darkgray: #ffffff !important;
  --darky-dark: #2f2a27 !important;
  --divider-color: #38312e !important;
  --divider-color-hover: #c95454 !important;
  --divider-vertical-height: calc(100% - 90px) !important;
  --dropdown-background: #473e3a !important;
  --dropdown-background-hover: #38312e !important;
  --embed-block-shadow-hover: 0 0 0 1px #38312e, inset 0 0 0 1px #38312e !important;
  --embed-border-start: 2px solid #c95454 !important;
  --file-header-background: #2f2a27 !important;
  --file-header-background-focused: #2f2a27 !important;
  --flair-background: #473e3a !important;
  --flair-color: #ffffff !important;
  --foldgutter-width: 1.8rem !important;
  --font-headings: "Source Serif Pro", "Source Serif 4", "Source Serif",
		"Rockwell", "New York", serif !important;
  --font-mermaid: "DM Sans", "Avenir Next", "Avenir", sans-serif !important;
  --font-monospace: MonoLisa, "Source Code Pro", monospace !important;
  --font-text: "DM Sans", "Avenir Next", "Avenir", sans-serif !important;
  --footnote-divider-color: #38312e !important;
  --footnote-id-color: #f0eae2 !important;
  --footnote-id-color-no-occurrences: #949494 !important;
  --footnote-input-background-active: #2f2a27 !important;
  --graph-node: #f0eae2 !important;
  --graph-node-focused: #c95454 !important;
  --graph-node-unresolved: #949494 !important;
  --graph-text: #ffffff !important;
  --gray: #f0eae2 !important;
  --green: #06b43c !important;
  --h1: 2.5em !important;
  --h2: 2em !important;
  --handle-icon: #ffffff !important;
  --headerFont: "DM Sans", "Avenir Next", "Avenir", sans-serif !important;
  --heading-formatting: #949494 !important;
  --heading-text: #000000 !important;
  --highlight: #f3e118 !important;
  --highlight-dark: #756b13 !important;
  --highlight-mix-blend-mode: darken !important;
  --hr-color: #38312e !important;
  --icon-color: #f0eae2 !important;
  --icon-color-active: #c95454 !important;
  --icon-color-focused: #ffffff !important;
  --icon-color-hover: #f0eae2 !important;
  --inline-title-color: #f0eae2 !important;
  --inline-title-size: 0.8rem !important;
  --input-date-separator: #949494 !important;
  --input-placeholder-color: #949494 !important;
  --interactive-accent: #c95454 !important;
  --interactive-accent-hover: #c95454 !important;
  --interactive-accent-hsl: 0, 52, 55.9 !important;
  --interactive-hover: #38312e !important;
  --interactive-normal: #473e3a !important;
  --light: #2f2a27 !important;
  --light-beige: #f8f5f1 !important;
  --light-text: #949494 !important;
  --lightgray: #2f2a27 !important;
  --link-color: #c95454 !important;
  --link-color-hover: #c43131 !important;
  --link-external-color: #c95454 !important;
  --link-external-color-hover: #c43131 !important;
  --link-unresolved-color: #c95454 !important;
  --link-unresolved-decoration-color: hsla(0, 52, 55.9, 0.3) !important;
  --list-marker-color: #949494 !important;
  --list-marker-color-collapsed: #c95454 !important;
  --list-marker-color-hover: #f0eae2 !important;
  --main-bg: #ffffff !important;
  --menu-background: #2f2a27 !important;
  --menu-border-color: #c43131 !important;
  --metadata-border-color: #38312e !important;
  --metadata-divider-color: #38312e !important;
  --metadata-input-background-active: #2f2a27 !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-background-active: #2f2a27 !important;
  --metadata-label-text-color: #f0eae2 !important;
  --metadata-label-text-color-hover: #f0eae2 !important;
  --metadata-property-background-active: #2f2a27 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #c43131 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #c43131 !important;
  --modal-background: #2f2a27 !important;
  --modal-buttons: #ffffff !important;
  --nav-collapse-icon-color: #949494 !important;
  --nav-collapse-icon-color-collapsed: #949494 !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed: #949494 !important;
  --nav-heading-color-collapsed-hover: #f0eae2 !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-item-background-active: #c95454 !important;
  --nav-item-background-hover: #2f2a27 !important;
  --nav-item-background-selected: #c95454 !important;
  --nav-item-color: #f0eae2 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #ffffff !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-tag-color: #949494 !important;
  --nav-tag-color-active: #f0eae2 !important;
  --nav-tag-color-hover: #f0eae2 !important;
  --pdf-background: #2f2a27 !important;
  --pdf-page-background: #2f2a27 !important;
  --pdf-shadow: 0 0 0 1px #38312e !important;
  --pdf-sidebar-background: #2f2a27 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #38312e !important;
  --pill-border-color: #38312e !important;
  --pill-border-color-hover: #c43131 !important;
  --pill-color: #f0eae2 !important;
  --pill-color-hover: #ffffff !important;
  --pill-color-remove: #949494 !important;
  --pill-color-remove-hover: #c95454 !important;
  --pre-bg: #38312e !important;
  --prompt-background: #2f2a27 !important;
  --raised-background: color-mix(in srgb, #473e3a 65%, transparent) linear-gradient(#473e3a, color-mix(in srgb, #473e3a 65%, transparent)) !important;
  --red: #c95454 !important;
  --red-deep: #c43131 !important;
  --red-hsl: 0, 52, 55.9 !important;
  --red-rgb: 201, 84, 84 !important;
  --ribbon-background: #2f2a27 !important;
  --ribbon-background-collapsed: #38312e !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0.05) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1) !important;
  --search-clear-button-color: #f0eae2 !important;
  --search-icon-color: #f0eae2 !important;
  --search-result-background: #2f2a27 !important;
  --secondary: #c95454 !important;
  --setting-group-heading-color: #ffffff !important;
  --setting-items-background: #38312e !important;
  --setting-items-border-color: #38312e !important;
  --slider-thumb-border-color: #c43131 !important;
  --slider-track-background: #38312e !important;
  --status-bar-background: #2f2a27 !important;
  --status-bar-border-color: #38312e !important;
  --status-bar-text-color: #f0eae2 !important;
  --suggestion-background: #2f2a27 !important;
  --tab-background-active: transparent !important;
  --tab-container-background: #2f2a27 !important;
  --tab-curve: 10px !important;
  --tab-divider-color: #38312e !important;
  --tab-max-width: 350px !important;
  --tab-outline-color: #38312e !important;
  --tab-radius: 10px !important;
  --tab-radius-active: 10px 10px 0 0 !important;
  --tab-switcher-background: #2f2a27 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f2a27, transparent) !important;
  --tab-text-color: #949494 !important;
  --tab-text-color-active: #f0eae2 !important;
  --tab-text-color-focused: #f0eae2 !important;
  --tab-text-color-focused-active: #f0eae2 !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --tab-text-color-focused-highlighted: #c95454 !important;
  --table-add-button-border-color: #38312e !important;
  --table-border-color: #38312e !important;
  --table-drag-handle-background-active: #c95454 !important;
  --table-drag-handle-color: #949494 !important;
  --table-header-border-color: #38312e !important;
  --table-header-color: #ffffff !important;
  --table-selection-blend-mode: darken !important;
  --table-selection-border-color: #c95454 !important;
  --tag-background: rgba(201, 84, 84, 0.1) !important;
  --tag-background-hover: hsla(0, 52, 55.9, 0.2) !important;
  --tag-border-color: hsla(0, 52, 55.9, 0.15) !important;
  --tag-border-color-hover: hsla(0, 52, 55.9, 0.15) !important;
  --tag-color: #c95454 !important;
  --tag-color-hover: #c95454 !important;
  --tertiary: #c43131 !important;
  --text: #2d2c2c !important;
  --text-accent: #c95454 !important;
  --text-accent-hover: #c43131 !important;
  --text-error: #c95454 !important;
  --text-faint: #949494 !important;
  --text-highlight-bg: #756b13 !important;
  --text-muted: #f0eae2 !important;
  --text-normal: #ffffff !important;
  --text-selection: #171413 !important;
  --text-success: #ccff00 !important;
  --textHighlight: #756b13 !important;
  --titleFont: "DM Sans", "Avenir Next", "Avenir", sans-serif !important;
  --titlebar-background: #2f2a27 !important;
  --titlebar-background-focused: #2f2a27 !important;
  --titlebar-border-color: #38312e !important;
  --titlebar-text-color: #f0eae2 !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 42, 39);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(47, 42, 39);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
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
  background-color: rgb(47, 42, 39);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(56, 49, 46);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(201, 84, 84, 0.1);
  color: rgb(201, 84, 84);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(56, 49, 46);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 42, 39);
  border-left-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(47, 42, 39);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(117, 107, 19);
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(148, 148, 148);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(201, 84, 84);
  border-color: rgb(201, 84, 84);
}

html[saved-theme="dark"] body p {
  color: rgb(240, 234, 226);
  outline: rgb(240, 234, 226) none 0px;
  text-decoration-color: rgb(240, 234, 226);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(201, 84, 84);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(201, 84, 84) none 0px;
  text-decoration-color: rgb(201, 84, 84);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(201, 84, 84);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(201, 84, 84) none 0px;
  text-decoration-color: rgb(201, 84, 84);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(240, 234, 226);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(240, 234, 226);
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
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(148, 148, 148);
}

html[saved-theme="dark"] body blockquote {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(56, 49, 46);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  margin-top: 20px;
  width: 195.062px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
  border-top-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
  border-top-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body thead {
  background-color: rgb(152, 137, 130);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(201, 84, 84);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(201, 84, 84);
  border-top-color: rgb(201, 84, 84);
  color: rgb(201, 84, 84);
  font-family: MonoLisa, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(56, 49, 46);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(56, 49, 46);
  border-left-width: 2px;
  border-right-color: rgb(56, 49, 46);
  border-right-width: 2px;
  border-top-color: rgb(56, 49, 46);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(56, 49, 46);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(56, 49, 46);
  border-left-width: 2px;
  border-right-color: rgb(56, 49, 46);
  border-right-width: 2px;
  border-top-color: rgb(56, 49, 46);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(56, 49, 46);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(56, 49, 46);
  border-left-width: 2px;
  border-right-color: rgb(56, 49, 46);
  border-right-width: 2px;
  border-top-color: rgb(56, 49, 46);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(56, 49, 46);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(56, 49, 46);
  border-left-width: 2px;
  border-right-color: rgb(56, 49, 46);
  border-right-width: 2px;
  border-top-color: rgb(56, 49, 46);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
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
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
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
  background-color: rgb(47, 42, 39);
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
  border-top-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(47, 42, 39);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 42, 39);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(56, 49, 46);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(201, 84, 84, 0.1);
  border-bottom-color: rgb(201, 84, 84);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(201, 84, 84);
  border-top-color: rgb(201, 84, 84);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(201, 84, 84);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 255, 255);
  font-family: "Source Serif Pro", "Source Serif 4", "Source Serif", Rockwell, "New York", serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(240, 234, 226);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(240, 234, 226);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
  border-top-color: rgb(56, 49, 46);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(240, 234, 226);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(240, 234, 226);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(240, 234, 226);
  stroke: rgb(240, 234, 226);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(148, 148, 148);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
  border-top-color: rgb(56, 49, 46);
  color: rgb(240, 234, 226);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  margin-bottom: 40px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(56, 49, 46);
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
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: MonoLisa, "Source Code Pro", monospace;
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
  background-color: rgba(201, 84, 84, 0.1);
  border-bottom-color: rgb(201, 84, 84);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(201, 84, 84);
  border-top-color: rgb(201, 84, 84);
  color: rgb(201, 84, 84);
}`,
  },
  light: {
    base: `:root:root {
  --alternate-lights: #f8f5f1 !important;
  --background-modifier-active-hover: #e6dbcc !important;
  --background-modifier-border: #f0eae2 !important;
  --background-modifier-border-focus: #c43131 !important;
  --background-modifier-border-hover: #c43131 !important;
  --background-modifier-error: #c95454 !important;
  --background-modifier-error-hover: #c43131 !important;
  --background-modifier-error-rgb: 201, 84, 84 !important;
  --background-modifier-hover: #f0eae2 !important;
  --background-modifier-message: #c95454 !important;
  --background-modifier-success: #c95454 !important;
  --background-modifier-success-rgb: 201, 84, 84 !important;
  --background-primary-alt: #f0eae2 !important;
  --background-secondary: #ffffff !important;
  --background-secondary-alt: #f0eae2 !important;
  --bases-cards-cover-background: #f0eae2 !important;
  --bases-cards-shadow: 0 0 0 1px #f0eae2 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #c43131 !important;
  --bases-embed-border-color: #f0eae2 !important;
  --bases-group-heading-property-color: #949494 !important;
  --bases-table-border-color: #f0eae2 !important;
  --bases-table-cell-background-disabled: #f0eae2 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #c43131 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c95454 !important;
  --bases-table-group-background: #f0eae2 !important;
  --bases-table-header-background-hover: #f0eae2 !important;
  --bases-table-header-color: #949494 !important;
  --bases-table-summary-background-hover: #f0eae2 !important;
  --beige: #f0eae2 !important;
  --blockquote-border-color: #c95454 !important;
  --bodyFont: "DM Sans", "Avenir Next", "Avenir", sans-serif !important;
  --canvas-card-label-color: #949494 !important;
  --caret-color: #2d2c2c !important;
  --checkbox-border-color: #949494 !important;
  --checkbox-border-color-hover: #949494 !important;
  --checkbox-color: #c95454 !important;
  --checkbox-color-hover: #c95454 !important;
  --checklist-done-color: #949494 !important;
  --code-background: #f8f5f1 !important;
  --code-border-color: #f0eae2 !important;
  --code-bracket-background: #f0eae2 !important;
  --code-comment: #949494 !important;
  --code-normal: #2d2c2c !important;
  --code-punctuation: #949494 !important;
  --codeFont: MonoLisa, "Source Code Pro", monospace !important;
  --collapse-icon-color: #949494 !important;
  --collapse-icon-color-collapsed: #c95454 !important;
  --dark: #2d2c2c !important;
  --dark-alternate: #988982 !important;
  --dark-beige: #e6dbcc !important;
  --dark-bg: #2f2a27 !important;
  --dark-light-text: #473e3a !important;
  --dark-lightness: #bbb1ac !important;
  --dark-secondary: #38312e !important;
  --darkgray: #2d2c2c !important;
  --darky-dark: #e6dbcc !important;
  --divider-color: #f0eae2 !important;
  --divider-color-hover: #c95454 !important;
  --divider-vertical-height: calc(100% - 90px) !important;
  --dropdown-background: #f0eae2 !important;
  --dropdown-background-hover: #f8f5f1 !important;
  --embed-block-shadow-hover: 0 0 0 1px #f0eae2, inset 0 0 0 1px #f0eae2 !important;
  --embed-border-start: 2px solid #c95454 !important;
  --flair-background: #f0eae2 !important;
  --flair-color: #2d2c2c !important;
  --foldgutter-width: 1.8rem !important;
  --font-headings: "Source Serif Pro", "Source Serif 4", "Source Serif",
		"Rockwell", "New York", serif !important;
  --font-mermaid: "DM Sans", "Avenir Next", "Avenir", sans-serif !important;
  --font-monospace: MonoLisa, "Source Code Pro", monospace !important;
  --font-text: "DM Sans", "Avenir Next", "Avenir", sans-serif !important;
  --footnote-divider-color: #f0eae2 !important;
  --footnote-id-color: #949494 !important;
  --footnote-id-color-no-occurrences: #949494 !important;
  --footnote-input-background-active: #f0eae2 !important;
  --graph-node: #949494 !important;
  --graph-node-focused: #c95454 !important;
  --graph-node-unresolved: #949494 !important;
  --graph-text: #2d2c2c !important;
  --gray: #949494 !important;
  --green: #06b43c !important;
  --h1: 2.5em !important;
  --h2: 2em !important;
  --handle-icon: #000000 !important;
  --headerFont: "DM Sans", "Avenir Next", "Avenir", sans-serif !important;
  --heading-formatting: #949494 !important;
  --heading-text: #000000 !important;
  --highlight: #f3e118 !important;
  --highlight-dark: #756b13 !important;
  --hr-color: #f0eae2 !important;
  --icon-color: #949494 !important;
  --icon-color-active: #c95454 !important;
  --icon-color-focused: #2d2c2c !important;
  --icon-color-hover: #949494 !important;
  --inline-title-color: #949494 !important;
  --inline-title-size: 0.8rem !important;
  --input-date-separator: #949494 !important;
  --input-placeholder-color: #949494 !important;
  --interactive-accent: #c95454 !important;
  --interactive-accent-hover: #c95454 !important;
  --interactive-accent-hsl: 0, 52, 55.9 !important;
  --interactive-hover: #f8f5f1 !important;
  --interactive-normal: #f0eae2 !important;
  --light: #f0eae2 !important;
  --light-beige: #f8f5f1 !important;
  --light-text: #949494 !important;
  --lightgray: #ffffff !important;
  --link-color: #c95454 !important;
  --link-color-hover: #c43131 !important;
  --link-external-color: #c95454 !important;
  --link-external-color-hover: #c43131 !important;
  --link-unresolved-color: #c95454 !important;
  --link-unresolved-decoration-color: hsla(0, 52, 55.9, 0.3) !important;
  --list-marker-color: #949494 !important;
  --list-marker-color-collapsed: #c95454 !important;
  --list-marker-color-hover: #949494 !important;
  --main-bg: #ffffff !important;
  --menu-background: #ffffff !important;
  --menu-border-color: #c43131 !important;
  --metadata-border-color: #f0eae2 !important;
  --metadata-divider-color: #f0eae2 !important;
  --metadata-input-background-active: #f0eae2 !important;
  --metadata-input-text-color: #2d2c2c !important;
  --metadata-label-background-active: #f0eae2 !important;
  --metadata-label-text-color: #949494 !important;
  --metadata-label-text-color-hover: #949494 !important;
  --metadata-property-background-active: #f0eae2 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #c43131 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #c43131 !important;
  --modal-buttons: #949494 !important;
  --nav-collapse-icon-color: #949494 !important;
  --nav-collapse-icon-color-collapsed: #949494 !important;
  --nav-heading-color: #2d2c2c !important;
  --nav-heading-color-collapsed: #949494 !important;
  --nav-heading-color-collapsed-hover: #949494 !important;
  --nav-heading-color-hover: #2d2c2c !important;
  --nav-item-background-active: #c95454 !important;
  --nav-item-background-hover: #e6dbcc !important;
  --nav-item-background-selected: #c95454 !important;
  --nav-item-color: #949494 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #ffffff !important;
  --nav-item-color-hover: #2d2c2c !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-tag-color: #949494 !important;
  --nav-tag-color-active: #949494 !important;
  --nav-tag-color-hover: #949494 !important;
  --pill-border-color: #f0eae2 !important;
  --pill-border-color-hover: #c43131 !important;
  --pill-color: #949494 !important;
  --pill-color-hover: #2d2c2c !important;
  --pill-color-remove: #949494 !important;
  --pill-color-remove-hover: #c95454 !important;
  --pre-bg: #f8f5f1 !important;
  --red: #c95454 !important;
  --red-deep: #c43131 !important;
  --red-hsl: 0, 52, 55.9 !important;
  --red-rgb: 201, 84, 84 !important;
  --ribbon-background: #ffffff !important;
  --ribbon-background-collapsed: #f0eae2 !important;
  --search-clear-button-color: #949494 !important;
  --search-icon-color: #949494 !important;
  --secondary: #c95454 !important;
  --setting-group-heading-color: #2d2c2c !important;
  --setting-items-background: #f0eae2 !important;
  --setting-items-border-color: #f0eae2 !important;
  --slider-thumb-border-color: #c43131 !important;
  --slider-track-background: #f0eae2 !important;
  --status-bar-background: #ffffff !important;
  --status-bar-border-color: #f0eae2 !important;
  --status-bar-text-color: #949494 !important;
  --tab-background-active: transparent !important;
  --tab-container-background: #ffffff !important;
  --tab-curve: 10px !important;
  --tab-divider-color: #f0eae2 !important;
  --tab-max-width: 350px !important;
  --tab-outline-color: #f0eae2 !important;
  --tab-radius: 10px !important;
  --tab-radius-active: 10px 10px 0 0 !important;
  --tab-switcher-background: #ffffff !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ffffff, transparent) !important;
  --tab-text-color: #949494 !important;
  --tab-text-color-active: #949494 !important;
  --tab-text-color-focused: #949494 !important;
  --tab-text-color-focused-active: #949494 !important;
  --tab-text-color-focused-active-current: #2d2c2c !important;
  --tab-text-color-focused-highlighted: #c95454 !important;
  --table-add-button-border-color: #f0eae2 !important;
  --table-border-color: #f0eae2 !important;
  --table-drag-handle-background-active: #c95454 !important;
  --table-drag-handle-color: #949494 !important;
  --table-header-border-color: #f0eae2 !important;
  --table-header-color: #2d2c2c !important;
  --table-selection-border-color: #c95454 !important;
  --tag-background: rgba(201, 84, 84, 0.1) !important;
  --tag-background-hover: hsla(0, 52, 55.9, 0.2) !important;
  --tag-border-color: hsla(0, 52, 55.9, 0.15) !important;
  --tag-border-color-hover: hsla(0, 52, 55.9, 0.15) !important;
  --tag-color: #c95454 !important;
  --tag-color-hover: #c95454 !important;
  --tertiary: #c43131 !important;
  --text: #2d2c2c !important;
  --text-accent: #c95454 !important;
  --text-accent-hover: #c43131 !important;
  --text-error: #c95454 !important;
  --text-faint: #949494 !important;
  --text-highlight-bg: #f3e118 !important;
  --text-muted: #949494 !important;
  --text-normal: #2d2c2c !important;
  --text-selection: #e6dbcc !important;
  --text-success: #06b43c !important;
  --textHighlight: #f3e118 !important;
  --titleFont: "DM Sans", "Avenir Next", "Avenir", sans-serif !important;
  --titlebar-background: #e6dbcc !important;
  --titlebar-background-focused: #e6dbcc !important;
  --titlebar-border-color: #f0eae2 !important;
  --titlebar-text-color: #949494 !important;
  --titlebar-text-color-focused: #2d2c2c !important;
  --vault-profile-color: #2d2c2c !important;
  --vault-profile-color-hover: #2d2c2c !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(240, 234, 226);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(148, 148, 148);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(148, 148, 148);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(201, 84, 84, 0.1);
  color: rgb(201, 84, 84);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(148, 148, 148);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(240, 234, 226);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(45, 44, 44);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(243, 225, 24);
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body del {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(148, 148, 148);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(201, 84, 84);
  border-color: rgb(201, 84, 84);
}

html[saved-theme="light"] body p {
  color: rgb(148, 148, 148);
  outline: rgb(148, 148, 148) none 0px;
  text-decoration-color: rgb(148, 148, 148);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(201, 84, 84);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(201, 84, 84) none 0px;
  text-decoration-color: rgb(201, 84, 84);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(201, 84, 84);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(201, 84, 84) none 0px;
  text-decoration-color: rgb(201, 84, 84);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(148, 148, 148);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(148, 148, 148) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(148, 148, 148);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body dt {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body ol > li {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(45, 44, 44);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(45, 44, 44);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(148, 148, 148);
}

html[saved-theme="light"] body blockquote {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(240, 234, 226);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body table {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  margin-top: 20px;
  width: 195.062px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body thead {
  background-color: rgb(248, 245, 241);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(201, 84, 84);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(201, 84, 84);
  border-top-color: rgb(201, 84, 84);
  color: rgb(201, 84, 84);
  font-family: MonoLisa, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(240, 234, 226);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(240, 234, 226);
  border-left-width: 2px;
  border-right-color: rgb(240, 234, 226);
  border-right-width: 2px;
  border-top-color: rgb(240, 234, 226);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(240, 234, 226);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(240, 234, 226);
  border-left-width: 2px;
  border-right-color: rgb(240, 234, 226);
  border-right-width: 2px;
  border-top-color: rgb(240, 234, 226);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(240, 234, 226);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(240, 234, 226);
  border-left-width: 2px;
  border-right-color: rgb(240, 234, 226);
  border-right-width: 2px;
  border-top-color: rgb(240, 234, 226);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(240, 234, 226);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(240, 234, 226);
  border-left-width: 2px;
  border-right-color: rgb(240, 234, 226);
  border-right-width: 2px;
  border-top-color: rgb(240, 234, 226);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body figcaption {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(240, 234, 226);
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(45, 44, 44);
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
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
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(45, 44, 44);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(240, 234, 226);
  border-bottom-color: rgb(45, 44, 44);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(240, 234, 226);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(201, 84, 84, 0.1);
  border-bottom-color: rgb(201, 84, 84);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(201, 84, 84);
  border-top-color: rgb(201, 84, 84);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(201, 84, 84);
}

html[saved-theme="light"] body h1 {
  color: rgb(45, 44, 44);
  font-family: "Source Serif Pro", "Source Serif 4", "Source Serif", Rockwell, "New York", serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(148, 148, 148);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(148, 148, 148);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(148, 148, 148);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(45, 44, 44);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  color: rgb(148, 148, 148);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(240, 234, 226);
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(148, 148, 148);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(148, 148, 148);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(148, 148, 148);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(148, 148, 148);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(148, 148, 148);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(148, 148, 148);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  color: rgb(148, 148, 148);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(148, 148, 148);
  stroke: rgb(148, 148, 148);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  color: rgb(148, 148, 148);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(148, 148, 148);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(148, 148, 148);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  margin-bottom: 40px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  color: rgb(148, 148, 148);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(240, 234, 226);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body abbr {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  color: rgb(148, 148, 148);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  color: rgb(45, 44, 44);
  font-family: MonoLisa, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

html[saved-theme="light"] body sub {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body summary {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body sup {
  color: rgb(45, 44, 44);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(201, 84, 84, 0.1);
  border-bottom-color: rgb(201, 84, 84);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(201, 84, 84);
  border-top-color: rgb(201, 84, 84);
  color: rgb(201, 84, 84);
}`,
  },
};
