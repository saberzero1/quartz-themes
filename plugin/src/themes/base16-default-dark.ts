import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "base16-default-dark",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --background-modifier-border: #383838 !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: rgba(24, 24, 24, 0.8) !important;
  --background-modifier-error: #ab4642 !important;
  --background-modifier-error-hover: #ab4642 !important;
  --background-modifier-error-rgb: 171, 70, 66 !important;
  --background-modifier-form-field: #181818 !important;
  --background-modifier-form-field-highlighted: #181818 !important;
  --background-modifier-form-field-hover: #181818 !important;
  --background-modifier-success: #a1b56c !important;
  --background-primary: #181818 !important;
  --background-primary-alt: #181818 !important;
  --background-secondary: #181818 !important;
  --background-secondary-alt: #181818 !important;
  --bases-cards-background: #181818 !important;
  --bases-cards-cover-background: #181818 !important;
  --bases-cards-shadow: 0 0 0 1px #383838 !important;
  --bases-embed-border-color: #383838 !important;
  --bases-group-heading-property-color: #b8b8b8 !important;
  --bases-table-border-color: #383838 !important;
  --bases-table-cell-background-active: #181818 !important;
  --bases-table-cell-background-disabled: #181818 !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7cafc2 !important;
  --bases-table-group-background: #181818 !important;
  --bases-table-header-background: #181818 !important;
  --bases-table-header-color: #b8b8b8 !important;
  --bases-table-summary-background: #181818 !important;
  --blockquote-border-color: #7cafc2 !important;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent)) !important;
  --bold-color: #ab4642 !important;
  --bold-weight: 600 !important;
  --bullet-new-color: rgb(72, 72, 72) !important;
  --callout-title-weight: 600;
  --canvas-background: #181818 !important;
  --canvas-card-label-color: #585858 !important;
  --caret-color: #d8d8d8 !important;
  --checkbox-border-color: #585858 !important;
  --checkbox-border-color-hover: #b8b8b8 !important;
  --checkbox-color: #7cafc2 !important;
  --checkbox-color-hover: #86c1b9 !important;
  --checkbox-marker-color: #181818 !important;
  --checklist-done-color: #b8b8b8 !important;
  --code-background: #202020 !important;
  --code-border-color: #383838 !important;
  --code-comment: #585858 !important;
  --code-function: #7cafc2 !important;
  --code-important: #f7ca88 !important;
  --code-keyword: #ba8baf !important;
  --code-normal: #d8d8d8 !important;
  --code-operator: #86c1b9 !important;
  --code-property: #f7ca88 !important;
  --code-punctuation: #d8d8d8 !important;
  --code-string: #a1b56c !important;
  --code-tag: #ab4642 !important;
  --code-value: #f7ca88 !important;
  --collapse-icon-color: #585858 !important;
  --collapse-icon-color-collapsed: #7cafc2 !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(166, 139, 249) !important;
  --color-accent-2: rgb(197, 182, 252) !important;
  --color-blue: #7cafc2 !important;
  --color-cyan: #86c1b9 !important;
  --color-green: #a1b56c !important;
  --color-orange: #dc9656 !important;
  --color-pink: #ba8baf !important;
  --color-purple: #ba8baf !important;
  --color-red: #ab4642 !important;
  --color-yellow: #f7ca88 !important;
  --dark: #d8d8d8 !important;
  --darkgray: #d8d8d8 !important;
  --divider-color: #383838 !important;
  --divider-color-hover: #484848 !important;
  --dropdown-background: #282828 !important;
  --dropdown-background-hover: #383838 !important;
  --embed-block-shadow-hover: 0 0 0 1px #383838, inset 0 0 0 1px #383838 !important;
  --embed-border-start: 2px solid #7cafc2 !important;
  --file-header-background: #181818 !important;
  --file-header-background-focused: #181818 !important;
  --flair-background: #282828 !important;
  --flair-color: #d8d8d8 !important;
  --footnote-divider-color: #383838 !important;
  --footnote-id-color: #b8b8b8 !important;
  --footnote-id-color-no-occurrences: #585858 !important;
  --graph-line: #383838 !important;
  --graph-node: #7cafc2 !important;
  --graph-node-attachment: #f7ca88 !important;
  --graph-node-focused: #7cafc2 !important;
  --graph-node-tag: #a1b56c !important;
  --graph-node-unresolved: #585858 !important;
  --graph-text: #d8d8d8 !important;
  --gray: #b8b8b8 !important;
  --heading-color: #d8d8d8 !important;
  --heading-formatting: #585858 !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(138, 92, 245, 0.1) !important;
  --hr-color: #383838 !important;
  --icon-color: #b8b8b8 !important;
  --icon-color-active: #7cafc2 !important;
  --icon-color-focused: #d8d8d8 !important;
  --icon-color-hover: #b8b8b8 !important;
  --inline-code-color: #dc9656 !important;
  --inline-title-color: #d8d8d8 !important;
  --input-date-separator: #585858 !important;
  --input-placeholder-color: #585858 !important;
  --interactive-accent: #7cafc2 !important;
  --interactive-accent-hover: #86c1b9 !important;
  --interactive-accent-rgb: 124, 175, 194 !important;
  --interactive-hover: #383838 !important;
  --interactive-normal: #282828 !important;
  --interactive-success: #a1b56c !important;
  --italic-color: #a1b56c !important;
  --light: #181818 !important;
  --lightgray: #181818 !important;
  --link-color: #7cafc2 !important;
  --link-color-hover: #86c1b9 !important;
  --link-external-color: #ba8baf !important;
  --link-external-color-hover: #86c1b9 !important;
  --link-internal-color: #7cafc2 !important;
  --link-internal-hover: #86c1b9 !important;
  --link-unresolved-color: #888888 !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --list-indent: 1.6em !important;
  --list-marker-color: #585858 !important;
  --list-marker-color-collapsed: #7cafc2 !important;
  --list-marker-color-hover: #b8b8b8 !important;
  --menu-background: #181818 !important;
  --metadata-border-color: #383838 !important;
  --metadata-divider-color: #383838 !important;
  --metadata-gap: 0 !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #d8d8d8 !important;
  --metadata-label-text-color: #b8b8b8 !important;
  --metadata-label-text-color-hover: #b8b8b8 !important;
  --metadata-label-width: 5em !important;
  --metadata-padding: 0 !important;
  --modal-background: #181818 !important;
  --nav-collapse-icon-color: #585858 !important;
  --nav-collapse-icon-color-collapsed: #585858 !important;
  --nav-heading-color: #d8d8d8 !important;
  --nav-heading-color-collapsed: #585858 !important;
  --nav-heading-color-collapsed-hover: #b8b8b8 !important;
  --nav-heading-color-hover: #d8d8d8 !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color: #b8b8b8 !important;
  --nav-item-color-active: #d8d8d8 !important;
  --nav-item-color-highlighted: #7cafc2 !important;
  --nav-item-color-hover: #d8d8d8 !important;
  --nav-item-color-selected: #d8d8d8 !important;
  --nav-tag-color: #585858 !important;
  --nav-tag-color-active: #b8b8b8 !important;
  --nav-tag-color-hover: #b8b8b8 !important;
  --pdf-background: #181818 !important;
  --pdf-page-background: #181818 !important;
  --pdf-shadow: 0 0 0 1px #383838 !important;
  --pdf-sidebar-background: #181818 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838 !important;
  --pill-border-color: #383838 !important;
  --pill-color: #b8b8b8 !important;
  --pill-color-hover: #d8d8d8 !important;
  --pill-color-remove: #585858 !important;
  --pill-color-remove-hover: #7cafc2 !important;
  --popover-width: 600px !important;
  --prompt-background: #181818 !important;
  --prompt-border-color: #383838 !important;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent)) !important;
  --ribbon-background: #202020 !important;
  --ribbon-background-collapsed: #181818 !important;
  --scrollbar-active-thumb-bg: #484848 !important;
  --scrollbar-bg: #181818 !important;
  --scrollbar-thumb-bg: #383838 !important;
  --search-clear-button-color: #b8b8b8 !important;
  --search-icon-color: #b8b8b8 !important;
  --search-result-background: #181818 !important;
  --secondary: #7cafc2 !important;
  --setting-group-heading-color: #d8d8d8 !important;
  --setting-items-background: #181818 !important;
  --setting-items-border-color: #383838 !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-track-background: #383838 !important;
  --status-bar-background: #181818 !important;
  --status-bar-border-color: #383838 !important;
  --status-bar-text-color: #b8b8b8 !important;
  --suggestion-background: #181818 !important;
  --sync-avatar-color-1: #ab4642 !important;
  --sync-avatar-color-2: #dc9656 !important;
  --sync-avatar-color-3: #f7ca88 !important;
  --sync-avatar-color-4: #a1b56c !important;
  --sync-avatar-color-5: #86c1b9 !important;
  --sync-avatar-color-6: #7cafc2 !important;
  --sync-avatar-color-7: #ba8baf !important;
  --sync-avatar-color-8: #ba8baf !important;
  --tab-background-active: #282828 !important;
  --tab-container-background: #181818 !important;
  --tab-outline-color: #383838 !important;
  --tab-switcher-background: #181818 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color: #b8b8b8 !important;
  --tab-text-color-active: #d8d8d8 !important;
  --tab-text-color-focused: #d8d8d8 !important;
  --tab-text-color-focused-active: #b8b8b8 !important;
  --tab-text-color-focused-active-current: #d8d8d8 !important;
  --tab-text-color-focused-highlighted: #7cafc2 !important;
  --table-add-button-border-color: #383838 !important;
  --table-border-color: #383838 !important;
  --table-drag-handle-background-active: #7cafc2 !important;
  --table-drag-handle-color: #585858 !important;
  --table-drag-handle-color-active: #181818 !important;
  --table-header-border-color: #383838 !important;
  --table-header-color: #d8d8d8 !important;
  --table-header-weight: 600 !important;
  --table-row-even-background: transparent !important;
  --table-row-odd-background: transparent !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: #7cafc2 !important;
  --tag-background: rgba(124, 175, 194, 0.05) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: #7cafc2 !important;
  --tag-color-hover: #7cafc2 !important;
  --tertiary: #86c1b9 !important;
  --text-accent: #7cafc2 !important;
  --text-accent-hover: #86c1b9 !important;
  --text-error: #ab4642 !important;
  --text-faint: #585858 !important;
  --text-muted: #b8b8b8 !important;
  --text-normal: #d8d8d8 !important;
  --text-on-accent: #181818 !important;
  --text-selection: rgba(124, 175, 194, 0.3) !important;
  --text-success: #a1b56c !important;
  --text-warning: #dc9656 !important;
  --textHighlight: rgba(138, 92, 245, 0.1) !important;
  --titlebar-background: #181818 !important;
  --titlebar-background-focused: #181818 !important;
  --titlebar-border-color: #383838 !important;
  --titlebar-text-color: #b8b8b8 !important;
  --titlebar-text-color-focused: #d8d8d8 !important;
  --toggle-border-color: #383838 !important;
  --toggle-thumb-color: #d8d8d8 !important;
  --vault-profile-color: #d8d8d8 !important;
  --vault-profile-color-hover: #d8d8d8 !important;
  --vim-cursor: #7cafc2 !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(56, 56, 56);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 24);
  border-left-color: rgb(56, 56, 56);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(171, 70, 66);
  outline: rgb(171, 70, 66) none 0px;
  text-decoration: rgb(171, 70, 66);
  text-decoration-color: rgb(171, 70, 66);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(161, 181, 108);
  outline: rgb(161, 181, 108) none 0px;
  text-decoration: rgb(161, 181, 108);
  text-decoration-color: rgb(161, 181, 108);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(161, 181, 108);
  outline: rgb(161, 181, 108) none 0px;
  text-decoration: rgb(161, 181, 108);
  text-decoration-color: rgb(161, 181, 108);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(171, 70, 66);
  outline: rgb(171, 70, 66) none 0px;
  text-decoration: rgb(171, 70, 66);
  text-decoration-color: rgb(171, 70, 66);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(210, 185, 60, 0.25);
  color: rgb(216, 216, 216);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body del {
  color: rgb(216, 216, 216);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration: line-through rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body p {
  color: rgb(184, 184, 184);
  outline: rgb(184, 184, 184) none 0px;
  text-decoration: rgb(184, 184, 184);
  text-decoration-color: rgb(184, 184, 184);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(186, 139, 175);
  outline: rgb(186, 139, 175) none 0px;
  text-decoration: underline rgb(186, 139, 175);
  text-decoration-color: rgb(186, 139, 175);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(124, 175, 194);
  outline: rgb(124, 175, 194) none 0px;
  text-decoration: rgb(124, 175, 194);
  text-decoration-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration: rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body dt {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(124, 175, 194);
  text-decoration: rgb(124, 175, 194);
}

html[saved-theme="dark"] body blockquote {
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(64, 64, 64);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(216, 216, 216);
  margin-left: 223.562px;
  margin-right: 223.578px;
  width: 240.859px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(216, 216, 216);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(72, 72, 72);
  border-bottom-width: 2px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(216, 216, 216);
  font-weight: 700;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  text-align: left;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(124, 175, 194);
  border-left-color: rgb(124, 175, 194);
  border-right-color: rgb(124, 175, 194);
  border-top-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(184, 184, 184);
  text-decoration: line-through rgb(184, 184, 184);
  text-decoration-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(88, 88, 88);
  border-left-color: rgb(88, 88, 88);
  border-right-color: rgb(88, 88, 88);
  border-top-color: rgb(88, 88, 88);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgb(24, 24, 24);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(216, 216, 216);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 24);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(124, 175, 194, 0.05);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body h1 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h2 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h3 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h4 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h5 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h6 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 184, 184);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(184, 184, 184);
  stroke: rgb(184, 184, 184);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(88, 88, 88);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(56, 56, 56);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(184, 184, 184);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
  margin-top: 3px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body abbr {
  color: rgb(216, 216, 216);
  text-decoration: underline dotted rgb(216, 216, 216);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body sub {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body summary {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body sup {
  color: rgb(216, 216, 216);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247) !important;
  --blockquote-border-color: rgb(153, 115, 247) !important;
  --bold-weight: 600 !important;
  --bullet-new-color: rgb(72, 72, 72) !important;
  --callout-title-weight: 600;
  --checkbox-color: rgb(153, 115, 247) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(153, 115, 247) !important;
  --color-accent-2: rgb(166, 139, 249) !important;
  --divider-color-hover: rgb(153, 115, 247) !important;
  --embed-border-start: 2px solid rgb(153, 115, 247) !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(138, 92, 245, 0.1) !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --interactive-accent: rgb(153, 115, 247) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-color-hover: rgb(166, 139, 249) !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-external-color-hover: rgb(166, 139, 249) !important;
  --link-unresolved-color: rgb(138, 92, 245) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(138, 92, 245) !important;
  --metadata-gap: 0 !important;
  --metadata-input-height: 28px !important;
  --metadata-label-width: 5em !important;
  --metadata-padding: 0 !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(138, 92, 245) !important;
  --pill-color-remove-hover: rgb(138, 92, 245) !important;
  --popover-width: 600px !important;
  --secondary: rgb(138, 92, 245) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245) !important;
  --table-drag-handle-background-active: rgb(153, 115, 247) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(153, 115, 247) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(138, 92, 245) !important;
  --tag-color-hover: rgb(138, 92, 245) !important;
  --tertiary: rgb(166, 139, 249) !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-accent-hover: rgb(166, 139, 249) !important;
  --text-selection: rgba(138, 92, 245, 0.2) !important;
  --textHighlight: rgba(138, 92, 245, 0.1) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgba(210, 185, 60, 0.25);
}`,
    links: `html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(138, 92, 245);
}

html[saved-theme="light"] body a.internal.broken {
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}`,
    tables: `html[saved-theme="light"] body table {
  margin-left: 231.391px;
  margin-right: 231.391px;
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}`,
    search: `html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  margin-top: 3px;
}`,
  },
};
