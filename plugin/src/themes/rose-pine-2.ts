import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "rose-pine-2",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-accent: #191724 !important;
  --background-modifier-border: #403d52 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #eb6f92 !important;
  --background-modifier-error-hover: #eb6f92 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-hover: #403d52 !important;
  --background-modifier-success: #31748f !important;
  --background-primary: #1f1d2e !important;
  --background-primary-alt: #191724 !important;
  --background-secondary: #191724 !important;
  --background-secondary-alt: #191724 !important;
  --bases-cards-background: #1f1d2e !important;
  --bases-cards-cover-background: #191724 !important;
  --bases-cards-shadow: 0 0 0 1px #403d52 !important;
  --bases-embed-border-color: #403d52 !important;
  --bases-group-heading-property-color: #6e6a86 !important;
  --bases-table-border-color: #403d52 !important;
  --bases-table-cell-background-active: #1f1d2e !important;
  --bases-table-cell-background-disabled: #191724 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #21202e !important;
  --bases-table-group-background: #191724 !important;
  --bases-table-header-background: #1f1d2e !important;
  --bases-table-header-background-hover: #403d52 !important;
  --bases-table-header-color: #6e6a86 !important;
  --bases-table-summary-background: #1f1d2e !important;
  --bases-table-summary-background-hover: #403d52 !important;
  --blockquote-border: #eb6f92 !important;
  --blockquote-border-color: #21202e !important;
  --blur-background: color-mix(in srgb, #26233a 65%, transparent) linear-gradient(#26233a, color-mix(in srgb, #26233a 65%, transparent)) !important;
  --border-color: #403d52 !important;
  --canvas-background: #1f1d2e !important;
  --canvas-card-label-color: #c4a7e7 !important;
  --caret-color: #e0def4 !important;
  --checkbox-border-color: #c4a7e7 !important;
  --checkbox-border-color-hover: #6e6a86 !important;
  --checkbox-color: #21202e !important;
  --checkbox-color-hover: #403d52 !important;
  --checkbox-marker-color: #1f1d2e !important;
  --checklist-done-color: #6e6a86 !important;
  --code-background: #191724 !important;
  --code-block: #9ccfd8 !important;
  --code-border-color: #403d52 !important;
  --code-bracket-background: #403d52 !important;
  --code-comment: #c4a7e7 !important;
  --code-normal: #e0def4 !important;
  --code-punctuation: #6e6a86 !important;
  --codeFont: "JetBrains Mono", "Fira Code", "Courier New", monospace !important;
  --collapse-icon-color: #c4a7e7 !important;
  --collapse-icon-color-collapsed: #c4a7e7 !important;
  --dark: #e0def4 !important;
  --darkgray: #e0def4 !important;
  --divider-color: #403d52 !important;
  --divider-color-hover: #21202e !important;
  --dropdown-background: #26233a !important;
  --dropdown-background-hover: #21202e !important;
  --embed-block-shadow-hover: 0 0 0 1px #403d52, inset 0 0 0 1px #403d52 !important;
  --embed-border-start: 2px solid #21202e !important;
  --file-header-background: #1f1d2e !important;
  --file-header-background-focused: #1f1d2e !important;
  --flair-background: #26233a !important;
  --flair-color: #e0def4 !important;
  --font-family-accent: "Inter", "Segoe UI", "Helvetica Neue", sans-serif !important;
  --font-family-code: "JetBrains Mono", "Fira Code", "Courier New", monospace !important;
  --font-family-editor: "Inter", "Segoe UI", Roboto, "Helvetica Neue", sans-serif !important;
  --font-family-preview: Georgia, "Times New Roman", serif !important;
  --font-monospace: "JetBrains Mono", "Fira Code", "Courier New", monospace !important;
  --font-size-code: 15px !important;
  --font-size-h1: 26px !important;
  --font-size-h2: 25px !important;
  --font-size-h3: 21px !important;
  --font-size-h4: 20px !important;
  --font-size-h5: 19px !important;
  --font-size-h6: 18px !important;
  --font-size-normal: 18px !important;
  --font-size-side-dock: 15px !important;
  --font-size-side-dock-title: 18px !important;
  --font-size-status-bar: 15px !important;
  --footnote-divider-color: #403d52 !important;
  --footnote-id-color: #6e6a86 !important;
  --footnote-id-color-no-occurrences: #c4a7e7 !important;
  --footnote-input-background-active: #403d52 !important;
  --graph-node: #6e6a86 !important;
  --graph-node-focused: #c4a7e7 !important;
  --graph-node-unresolved: #c4a7e7 !important;
  --graph-text: #e0def4 !important;
  --gray: #6e6a86 !important;
  --heading-formatting: #c4a7e7 !important;
  --highlight: #403d52 !important;
  --hr-color: #403d52 !important;
  --icon-color: #e0def4 !important;
  --icon-color-active: #c4a7e7 !important;
  --icon-color-focused: #e0def4 !important;
  --icon-color-hover: #e0def4 !important;
  --inline-code: #c4a7e7 !important;
  --input-date-separator: #c4a7e7 !important;
  --input-placeholder-color: #c4a7e7 !important;
  --interactive-accent: #21202e !important;
  --interactive-accent-active: #403d52 !important;
  --interactive-accent-hover: #403d52 !important;
  --interactive-hover: #21202e !important;
  --interactive-normal: #26233a !important;
  --light: #1f1d2e !important;
  --lightgray: #191724 !important;
  --link-color: #c4a7e7 !important;
  --link-color-hover: #c4a7e7 !important;
  --link-external-color: #c4a7e7 !important;
  --link-external-color-hover: #c4a7e7 !important;
  --link-unresolved-color: #c4a7e7 !important;
  --list-marker-color: #c4a7e7 !important;
  --list-marker-color-collapsed: #c4a7e7 !important;
  --list-marker-color-hover: #6e6a86 !important;
  --menu-background: #191724 !important;
  --metadata-border-color: #403d52 !important;
  --metadata-divider-color: #403d52 !important;
  --metadata-input-background-active: #403d52 !important;
  --metadata-input-text-color: #e0def4 !important;
  --metadata-label-background-active: #403d52 !important;
  --metadata-label-text-color: #6e6a86 !important;
  --metadata-label-text-color-hover: #6e6a86 !important;
  --metadata-property-background-active: #403d52 !important;
  --modal-background: #1f1d2e !important;
  --nav-collapse-icon-color: #c4a7e7 !important;
  --nav-collapse-icon-color-collapsed: #c4a7e7 !important;
  --nav-heading-color: #e0def4 !important;
  --nav-heading-color-collapsed: #c4a7e7 !important;
  --nav-heading-color-collapsed-hover: #6e6a86 !important;
  --nav-heading-color-hover: #e0def4 !important;
  --nav-item-background-active: #403d52 !important;
  --nav-item-background-hover: #403d52 !important;
  --nav-item-color: #6e6a86 !important;
  --nav-item-color-active: #e0def4 !important;
  --nav-item-color-highlighted: #c4a7e7 !important;
  --nav-item-color-hover: #e0def4 !important;
  --nav-item-color-selected: #e0def4 !important;
  --nav-tag-color: #c4a7e7 !important;
  --nav-tag-color-active: #6e6a86 !important;
  --nav-tag-color-hover: #6e6a86 !important;
  --pdf-background: #1f1d2e !important;
  --pdf-page-background: #1f1d2e !important;
  --pdf-shadow: 0 0 0 1px #403d52 !important;
  --pdf-sidebar-background: #1f1d2e !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #403d52 !important;
  --pill-border-color: #403d52 !important;
  --pill-color: #6e6a86 !important;
  --pill-color-hover: #e0def4 !important;
  --pill-color-remove: #c4a7e7 !important;
  --pill-color-remove-hover: #c4a7e7 !important;
  --pre-code: #21202e !important;
  --prompt-background: #1f1d2e !important;
  --raised-background: color-mix(in srgb, #26233a 65%, transparent) linear-gradient(#26233a, color-mix(in srgb, #26233a 65%, transparent)) !important;
  --ribbon-background: #191724 !important;
  --ribbon-background-collapsed: #1f1d2e !important;
  --rp-accent: #c4a7e7 !important;
  --rp-base: #191724 !important;
  --rp-foam: #9ccfd8 !important;
  --rp-gold: #f6c177 !important;
  --rp-h1: #eb6f92 !important;
  --rp-h2: #c4a7e7 !important;
  --rp-h3: #ebbcba !important;
  --rp-h4: #f6c177 !important;
  --rp-h5: #9ccfd8 !important;
  --rp-h6: #31748f !important;
  --rp-highlightHigh: #524f67 !important;
  --rp-highlightLow: #21202e !important;
  --rp-highlightMed: #403d52 !important;
  --rp-iris: #c4a7e7 !important;
  --rp-love: #eb6f92 !important;
  --rp-muted: #6e6a86 !important;
  --rp-overlay: #26233a !important;
  --rp-pine: #31748f !important;
  --rp-rose: #ebbcba !important;
  --rp-subtle: #908caa !important;
  --rp-surface: #1f1d2e !important;
  --rp-text: #e0def4 !important;
  --scrollbar-active-thumb-bg: #26233a !important;
  --scrollbar-bg: #26233a !important;
  --scrollbar-thumb-bg: #26233a !important;
  --search-clear-button-color: #6e6a86 !important;
  --search-icon-color: #6e6a86 !important;
  --search-result-background: #1f1d2e !important;
  --secondary: #c4a7e7 !important;
  --setting-group-heading-color: #e0def4 !important;
  --setting-items-background: #191724 !important;
  --setting-items-border-color: #403d52 !important;
  --slider-track-background: #403d52 !important;
  --status-bar-background: #191724 !important;
  --status-bar-border-color: #403d52 !important;
  --status-bar-text-color: #6e6a86 !important;
  --suggestion-background: #1f1d2e !important;
  --tab-background-active: #1f1d2e !important;
  --tab-container-background: #191724 !important;
  --tab-outline-color: #403d52 !important;
  --tab-switcher-background: #191724 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #191724, transparent) !important;
  --tab-text-color: #c4a7e7 !important;
  --tab-text-color-active: #6e6a86 !important;
  --tab-text-color-focused: #6e6a86 !important;
  --tab-text-color-focused-active: #6e6a86 !important;
  --tab-text-color-focused-active-current: #e0def4 !important;
  --tab-text-color-focused-highlighted: #c4a7e7 !important;
  --table-add-button-border-color: #403d52 !important;
  --table-border-color: #403d52 !important;
  --table-drag-handle-background-active: #21202e !important;
  --table-drag-handle-color: #c4a7e7 !important;
  --table-drag-handle-color-active: #c4a7e7 !important;
  --table-header-border-color: #403d52 !important;
  --table-header-color: #e0def4 !important;
  --table-selection-border-color: #21202e !important;
  --tag-color: #c4a7e7 !important;
  --tag-color-hover: #c4a7e7 !important;
  --tertiary: #c4a7e7 !important;
  --text-accent: #c4a7e7 !important;
  --text-accent-hover: #c4a7e7 !important;
  --text-error: #eb6f92 !important;
  --text-error-hover: #eb6f92 !important;
  --text-faint: #c4a7e7 !important;
  --text-muted: #6e6a86 !important;
  --text-normal: #e0def4 !important;
  --text-on-accent: #c4a7e7 !important;
  --text-selection: #524f67 !important;
  --textHighlight: #403d52 !important;
  --titlebar-background: #191724 !important;
  --titlebar-background-focused: #191724 !important;
  --titlebar-border-color: #403d52 !important;
  --titlebar-text-color: #6e6a86 !important;
  --titlebar-text-color-focused: #e0def4 !important;
  --vault-profile-color: #e0def4 !important;
  --vault-profile-color-hover: #e0def4 !important;
  --vim-cursor: #ebbcba !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(25, 23, 36);
  border-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
  font-weight: 800;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(25, 23, 36);
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 31.5px;
  color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 23, 36);
  border-left-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  background-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(235, 111, 146) none 0px;
  text-decoration-color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(196, 167, 231);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration-color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(196, 167, 231);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration-color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  background-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(235, 111, 146) none 0px;
  text-decoration-color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(224, 222, 244);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 222, 244);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(196, 167, 231);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(196, 167, 231);
  border-color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body p {
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(110, 106, 134) none 0px;
  text-decoration-color: rgb(110, 106, 134);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(196, 167, 231);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration-color: rgb(196, 167, 231);
  transition: 0.35s;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(196, 167, 231);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration-color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(196, 167, 231);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(196, 167, 231) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 18px;
  margin-top: 18px;
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(25, 23, 36);
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 222, 244);
  font-family: Georgia, "Times New Roman", serif;
  width: 180.766px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body th {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
  font-weight: 800;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(64, 61, 82);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(64, 61, 82);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(196, 167, 231);
  border-left-color: rgb(196, 167, 231);
  border-right-color: rgb(196, 167, 231);
  border-top-color: rgb(196, 167, 231);
  color: rgb(196, 167, 231);
  font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 222, 244);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  font-size: 18px;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  margin-bottom: 18px;
  margin-top: 18px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(33, 32, 46);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(110, 106, 134);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-right: 0px;
  width: 16.6562px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
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
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(31, 29, 46);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 222, 244);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 23, 36);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(64, 61, 82);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 31.5px;
  border-bottom-right-radius: 31.5px;
  border-top-left-radius: 31.5px;
  border-top-right-radius: 31.5px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body h1 {
  color: rgb(235, 111, 146);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(196, 167, 231);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(224, 222, 244);
  font-family: Georgia, "Times New Roman", serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(235, 188, 186);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(246, 193, 119);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(156, 207, 216);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(49, 116, 143);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 222, 244);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(110, 106, 134);
  border-top-width: 0px;
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(110, 106, 134);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(224, 222, 244);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(224, 222, 244);
  stroke: rgb(224, 222, 244);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(196, 167, 231);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(110, 106, 134);
  font-family: Georgia, "Times New Roman", serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
  font-family: Georgia, "Times New Roman", serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  font-size: 15.75px;
  padding-bottom: 1.575px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.575px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 222, 244);
  font-size: 15px;
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 222, 244);
  font-size: 15px;
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 27.5625px;
  border-bottom-right-radius: 27.5625px;
  border-top-left-radius: 27.5625px;
  border-top-right-radius: 27.5625px;
  color: rgb(196, 167, 231);
}`,
  },
  light: {
    base: `:root:root {
  --background-accent: #faf4ed !important;
  --background-modifier-border: #dfdad9 !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #b4637a !important;
  --background-modifier-error-hover: #b4637a !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-hover: #dfdad9 !important;
  --background-modifier-success: #286983 !important;
  --background-primary: #fffaf3 !important;
  --background-primary-alt: #faf4ed !important;
  --background-secondary: #faf4ed !important;
  --background-secondary-alt: #faf4ed !important;
  --bases-cards-background: #fffaf3 !important;
  --bases-cards-cover-background: #faf4ed !important;
  --bases-cards-shadow: 0 0 0 1px #dfdad9 !important;
  --bases-embed-border-color: #dfdad9 !important;
  --bases-group-heading-property-color: #9893a5 !important;
  --bases-table-border-color: #dfdad9 !important;
  --bases-table-cell-background-active: #fffaf3 !important;
  --bases-table-cell-background-disabled: #faf4ed !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f4ede8 !important;
  --bases-table-group-background: #faf4ed !important;
  --bases-table-header-background: #fffaf3 !important;
  --bases-table-header-background-hover: #dfdad9 !important;
  --bases-table-header-color: #9893a5 !important;
  --bases-table-summary-background: #fffaf3 !important;
  --bases-table-summary-background-hover: #dfdad9 !important;
  --blockquote-border: #b4637a !important;
  --blockquote-border-color: #f4ede8 !important;
  --blur-background: color-mix(in srgb, #fffaf3 65%, transparent) linear-gradient(#fffaf3, color-mix(in srgb, #fffaf3 65%, transparent)) !important;
  --border-color: #dfdad9 !important;
  --canvas-background: #fffaf3 !important;
  --canvas-card-label-color: #907aa9 !important;
  --caret-color: #575279 !important;
  --checkbox-border-color: #907aa9 !important;
  --checkbox-border-color-hover: #9893a5 !important;
  --checkbox-color: #f4ede8 !important;
  --checkbox-color-hover: #dfdad9 !important;
  --checkbox-marker-color: #fffaf3 !important;
  --checklist-done-color: #9893a5 !important;
  --code-background: #faf4ed !important;
  --code-block: #56949f !important;
  --code-border-color: #dfdad9 !important;
  --code-bracket-background: #dfdad9 !important;
  --code-comment: #907aa9 !important;
  --code-normal: #575279 !important;
  --code-punctuation: #9893a5 !important;
  --codeFont: "JetBrains Mono", "Fira Code", "Courier New", monospace !important;
  --collapse-icon-color: #907aa9 !important;
  --collapse-icon-color-collapsed: #907aa9 !important;
  --dark: #575279 !important;
  --darkgray: #575279 !important;
  --divider-color: #dfdad9 !important;
  --divider-color-hover: #f4ede8 !important;
  --dropdown-background: #f2e9e1 !important;
  --dropdown-background-hover: #f4ede8 !important;
  --embed-block-shadow-hover: 0 0 0 1px #dfdad9, inset 0 0 0 1px #dfdad9 !important;
  --embed-border-start: 2px solid #f4ede8 !important;
  --file-header-background: #fffaf3 !important;
  --file-header-background-focused: #fffaf3 !important;
  --flair-background: #f2e9e1 !important;
  --flair-color: #575279 !important;
  --font-family-accent: "Inter", "Segoe UI", "Helvetica Neue", sans-serif !important;
  --font-family-code: "JetBrains Mono", "Fira Code", "Courier New", monospace !important;
  --font-family-editor: "Inter", "Segoe UI", Roboto, "Helvetica Neue", sans-serif !important;
  --font-family-preview: Georgia, "Times New Roman", serif !important;
  --font-monospace: "JetBrains Mono", "Fira Code", "Courier New", monospace !important;
  --font-size-code: 15px !important;
  --font-size-h1: 26px !important;
  --font-size-h2: 25px !important;
  --font-size-h3: 21px !important;
  --font-size-h4: 20px !important;
  --font-size-h5: 19px !important;
  --font-size-h6: 18px !important;
  --font-size-normal: 18px !important;
  --font-size-side-dock: 15px !important;
  --font-size-side-dock-title: 18px !important;
  --font-size-status-bar: 15px !important;
  --footnote-divider-color: #dfdad9 !important;
  --footnote-id-color: #9893a5 !important;
  --footnote-id-color-no-occurrences: #907aa9 !important;
  --footnote-input-background-active: #dfdad9 !important;
  --graph-node: #9893a5 !important;
  --graph-node-focused: #907aa9 !important;
  --graph-node-unresolved: #907aa9 !important;
  --graph-text: #575279 !important;
  --gray: #9893a5 !important;
  --heading-formatting: #907aa9 !important;
  --highlight: #dfdad9 !important;
  --hr-color: #dfdad9 !important;
  --icon-color: #575279 !important;
  --icon-color-active: #907aa9 !important;
  --icon-color-focused: #575279 !important;
  --icon-color-hover: #575279 !important;
  --inline-code: #907aa9 !important;
  --input-date-separator: #907aa9 !important;
  --input-placeholder-color: #907aa9 !important;
  --interactive-accent: #f4ede8 !important;
  --interactive-accent-active: #dfdad9 !important;
  --interactive-accent-hover: #dfdad9 !important;
  --interactive-hover: #f4ede8 !important;
  --interactive-normal: #f2e9e1 !important;
  --light: #fffaf3 !important;
  --lightgray: #faf4ed !important;
  --link-color: #907aa9 !important;
  --link-color-hover: #907aa9 !important;
  --link-external-color: #907aa9 !important;
  --link-external-color-hover: #907aa9 !important;
  --link-unresolved-color: #907aa9 !important;
  --list-marker-color: #907aa9 !important;
  --list-marker-color-collapsed: #907aa9 !important;
  --list-marker-color-hover: #9893a5 !important;
  --menu-background: #faf4ed !important;
  --metadata-border-color: #dfdad9 !important;
  --metadata-divider-color: #dfdad9 !important;
  --metadata-input-background-active: #dfdad9 !important;
  --metadata-input-text-color: #575279 !important;
  --metadata-label-background-active: #dfdad9 !important;
  --metadata-label-text-color: #9893a5 !important;
  --metadata-label-text-color-hover: #9893a5 !important;
  --metadata-property-background-active: #dfdad9 !important;
  --modal-background: #fffaf3 !important;
  --nav-collapse-icon-color: #907aa9 !important;
  --nav-collapse-icon-color-collapsed: #907aa9 !important;
  --nav-heading-color: #575279 !important;
  --nav-heading-color-collapsed: #907aa9 !important;
  --nav-heading-color-collapsed-hover: #9893a5 !important;
  --nav-heading-color-hover: #575279 !important;
  --nav-item-background-active: #dfdad9 !important;
  --nav-item-background-hover: #dfdad9 !important;
  --nav-item-color: #9893a5 !important;
  --nav-item-color-active: #575279 !important;
  --nav-item-color-highlighted: #907aa9 !important;
  --nav-item-color-hover: #575279 !important;
  --nav-item-color-selected: #575279 !important;
  --nav-tag-color: #907aa9 !important;
  --nav-tag-color-active: #9893a5 !important;
  --nav-tag-color-hover: #9893a5 !important;
  --pdf-background: #fffaf3 !important;
  --pdf-page-background: #fffaf3 !important;
  --pdf-sidebar-background: #fffaf3 !important;
  --pill-border-color: #dfdad9 !important;
  --pill-color: #9893a5 !important;
  --pill-color-hover: #575279 !important;
  --pill-color-remove: #907aa9 !important;
  --pill-color-remove-hover: #907aa9 !important;
  --pre-code: #f4ede8 !important;
  --prompt-background: #fffaf3 !important;
  --raised-background: color-mix(in srgb, #fffaf3 65%, transparent) linear-gradient(#fffaf3, color-mix(in srgb, #fffaf3 65%, transparent)) !important;
  --ribbon-background: #faf4ed !important;
  --ribbon-background-collapsed: #fffaf3 !important;
  --rp-accent: #907aa9 !important;
  --rp-base: #faf4ed !important;
  --rp-foam: #56949f !important;
  --rp-gold: #ea9d34 !important;
  --rp-h1: #b4637a !important;
  --rp-h2: #907aa9 !important;
  --rp-h3: #d7827e !important;
  --rp-h4: #ea9d34 !important;
  --rp-h5: #56949f !important;
  --rp-h6: #286983 !important;
  --rp-highlightHigh: #cecacd !important;
  --rp-highlightLow: #f4ede8 !important;
  --rp-highlightMed: #dfdad9 !important;
  --rp-iris: #907aa9 !important;
  --rp-love: #b4637a !important;
  --rp-muted: #9893a5 !important;
  --rp-overlay: #f2e9e1 !important;
  --rp-pine: #286983 !important;
  --rp-rose: #d7827e !important;
  --rp-subtle: #797593 !important;
  --rp-surface: #fffaf3 !important;
  --rp-text: #575279 !important;
  --scrollbar-active-thumb-bg: #f2e9e1 !important;
  --scrollbar-bg: #f2e9e1 !important;
  --scrollbar-thumb-bg: #f2e9e1 !important;
  --search-clear-button-color: #9893a5 !important;
  --search-icon-color: #9893a5 !important;
  --search-result-background: #fffaf3 !important;
  --secondary: #907aa9 !important;
  --setting-group-heading-color: #575279 !important;
  --setting-items-background: #faf4ed !important;
  --setting-items-border-color: #dfdad9 !important;
  --slider-track-background: #dfdad9 !important;
  --status-bar-background: #faf4ed !important;
  --status-bar-border-color: #dfdad9 !important;
  --status-bar-text-color: #9893a5 !important;
  --suggestion-background: #fffaf3 !important;
  --tab-background-active: #fffaf3 !important;
  --tab-container-background: #faf4ed !important;
  --tab-outline-color: #dfdad9 !important;
  --tab-switcher-background: #faf4ed !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #faf4ed, transparent) !important;
  --tab-text-color: #907aa9 !important;
  --tab-text-color-active: #9893a5 !important;
  --tab-text-color-focused: #9893a5 !important;
  --tab-text-color-focused-active: #9893a5 !important;
  --tab-text-color-focused-active-current: #575279 !important;
  --tab-text-color-focused-highlighted: #907aa9 !important;
  --table-add-button-border-color: #dfdad9 !important;
  --table-border-color: #dfdad9 !important;
  --table-drag-handle-background-active: #f4ede8 !important;
  --table-drag-handle-color: #907aa9 !important;
  --table-drag-handle-color-active: #907aa9 !important;
  --table-header-border-color: #dfdad9 !important;
  --table-header-color: #575279 !important;
  --table-selection-border-color: #f4ede8 !important;
  --tag-color: #907aa9 !important;
  --tag-color-hover: #907aa9 !important;
  --tertiary: #907aa9 !important;
  --text-accent: #907aa9 !important;
  --text-accent-hover: #907aa9 !important;
  --text-error: #b4637a !important;
  --text-error-hover: #b4637a !important;
  --text-faint: #907aa9 !important;
  --text-muted: #9893a5 !important;
  --text-normal: #575279 !important;
  --text-on-accent: #907aa9 !important;
  --text-selection: #cecacd !important;
  --textHighlight: #dfdad9 !important;
  --titlebar-background: #faf4ed !important;
  --titlebar-background-focused: #faf4ed !important;
  --titlebar-border-color: #dfdad9 !important;
  --titlebar-text-color: #9893a5 !important;
  --titlebar-text-color-focused: #575279 !important;
  --vault-profile-color: #575279 !important;
  --vault-profile-color-hover: #575279 !important;
  --vim-cursor: #d7827e !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(250, 244, 237);
  border-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
  font-weight: 800;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(255, 250, 243);
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 31.5px;
  color: rgb(144, 122, 169);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(250, 244, 237);
  border-left-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  background-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(180, 99, 122) none 0px;
  text-decoration-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(144, 122, 169);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(144, 122, 169) none 0px;
  text-decoration-color: rgb(144, 122, 169);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(144, 122, 169);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(144, 122, 169) none 0px;
  text-decoration-color: rgb(144, 122, 169);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  background-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(180, 99, 122) none 0px;
  text-decoration-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(87, 82, 121);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body del {
  color: rgb(87, 82, 121);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(144, 122, 169);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(144, 122, 169);
  border-color: rgb(144, 122, 169);
}

html[saved-theme="light"] body p {
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(152, 147, 165) none 0px;
  text-decoration-color: rgb(152, 147, 165);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(144, 122, 169);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(144, 122, 169) none 0px;
  text-decoration-color: rgb(144, 122, 169);
  transition: 0.35s;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(144, 122, 169);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(144, 122, 169) none 0px;
  text-decoration-color: rgb(144, 122, 169);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(144, 122, 169);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(144, 122, 169) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body dl {
  margin-bottom: 18px;
  margin-top: 18px;
}

html[saved-theme="light"] body dt {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(144, 122, 169);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(250, 244, 237);
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body table {
  color: rgb(87, 82, 121);
  font-family: Georgia, "Times New Roman", serif;
  width: 180.766px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body th {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
  font-weight: 800;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(223, 218, 217);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(223, 218, 217);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(144, 122, 169);
  border-left-color: rgb(144, 122, 169);
  border-right-color: rgb(144, 122, 169);
  border-top-color: rgb(144, 122, 169);
  color: rgb(144, 122, 169);
  font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(144, 122, 169);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figcaption {
  color: rgb(87, 82, 121);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  font-size: 18px;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  margin-bottom: 18px;
  margin-top: 18px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(244, 237, 232);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(152, 147, 165);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-right: 0px;
  width: 16.6562px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
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
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 250, 243);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(87, 82, 121);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(223, 218, 217);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 31.5px;
  border-bottom-right-radius: 31.5px;
  border-top-left-radius: 31.5px;
  border-top-right-radius: 31.5px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(144, 122, 169);
}

html[saved-theme="light"] body h1 {
  color: rgb(180, 99, 122);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(144, 122, 169);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(87, 82, 121);
  font-family: Georgia, "Times New Roman", serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(215, 130, 126);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(234, 157, 52);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(86, 148, 159);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(40, 105, 131);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(87, 82, 121);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(152, 147, 165);
  border-top-width: 0px;
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(152, 147, 165);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(87, 82, 121);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(87, 82, 121);
  stroke: rgb(87, 82, 121);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(144, 122, 169);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(152, 147, 165);
  font-family: Georgia, "Times New Roman", serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
  font-family: Georgia, "Times New Roman", serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body abbr {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
  font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  font-size: 15.75px;
  padding-bottom: 1.575px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.575px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sub {
  color: rgb(87, 82, 121);
  font-size: 15px;
}

html[saved-theme="light"] body summary {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sup {
  color: rgb(87, 82, 121);
  font-size: 15px;
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 27.5625px;
  border-bottom-right-radius: 27.5625px;
  border-top-left-radius: 27.5625px;
  border-top-right-radius: 27.5625px;
  color: rgb(144, 122, 169);
}`,
  },
};
