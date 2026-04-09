import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "evilred", modes: ["dark"], variations: [], fonts: ["hack"] },
  dark: {
    base: `:root:root {
  --Editor-table-border-radius: 5px !important;
  --Editor-table-border-width: 2px !important;
  --background-modifier-border: #3d0404 !important;
  --background-primary: #390000 !important;
  --background-primary-alt: #390000 !important;
  --background-secondary: #290202 !important;
  --background-secondary-alt: #3d0404 !important;
  --bases-cards-background: #390000 !important;
  --bases-cards-cover-background: #390000 !important;
  --bases-cards-shadow: 0 0 0 1px #3d0404 !important;
  --bases-embed-border-color: #3d0404 !important;
  --bases-group-heading-property-color: #e4d1cf !important;
  --bases-table-border-color: #3d0404 !important;
  --bases-table-cell-background-active: #390000 !important;
  --bases-table-cell-background-disabled: #390000 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #B50505 !important;
  --bases-table-group-background: #390000 !important;
  --bases-table-header-background: #390000 !important;
  --bases-table-header-color: #e4d1cf !important;
  --bases-table-summary-background: #390000 !important;
  --blockquote-border-color: #B50505 !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #390000 !important;
  --canvas-card-label-color: #ff8a8a !important;
  --caret-color: #fdf8ec !important;
  --checkbox-border-color: #ff8a8a !important;
  --checkbox-border-color-hover: #e4d1cf !important;
  --checkbox-color: #B50505 !important;
  --checkbox-marker-color: #390000 !important;
  --checklist-done-color: #e4d1cf !important;
  --code-background: #390000 !important;
  --code-block: #cc0d0d !important;
  --code-border-color: #3d0404 !important;
  --code-comment: #ff8a8a !important;
  --code-normal: #fdf8ec !important;
  --code-punctuation: #e4d1cf !important;
  --codeFont: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #ff8a8a !important;
  --collapse-icon-color-collapsed: #f3ad6b !important;
  --dark: #fdf8ec !important;
  --dark-orange: #83572f !important;
  --dark0: #390000 !important;
  --dark1: #290202 !important;
  --dark2: #3d0404 !important;
  --dark3: #5c1818 !important;
  --darkgray: #fdf8ec !important;
  --divider-color: #3d0404 !important;
  --divider-color-hover: #B50505 !important;
  --embed-block-shadow-hover: 0 0 0 1px #3d0404, inset 0 0 0 1px #3d0404 !important;
  --embed-border-start: 2px solid #B50505 !important;
  --file-header-background: #390000 !important;
  --file-header-background-focused: #390000 !important;
  --flair-color: #fdf8ec !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
  --font-print: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji !important;
  --footnote-divider-color: #3d0404 !important;
  --footnote-id-color: #e4d1cf !important;
  --footnote-id-color-no-occurrences: #ff8a8a !important;
  --frost0: #B50505 !important;
  --frost1: #cc0d0d !important;
  --frost2: #81a1c1 !important;
  --frost3: #FF9CFA !important;
  --graph-node: #e4d1cf !important;
  --graph-node-focused: #f3ad6b !important;
  --graph-node-unresolved: #ff8a8a !important;
  --graph-text: #fdf8ec !important;
  --gray: #e4d1cf !important;
  --green: #b0f078 !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #ff8a8a !important;
  --highlight: rgba(163, 190, 140, 0.3) !important;
  --hr-color: #3d0404 !important;
  --icon-color: #e4d1cf !important;
  --icon-color-active: #f3ad6b !important;
  --icon-color-focused: #fdf8ec !important;
  --icon-color-hover: #e4d1cf !important;
  --inline-code: #cc0d0d !important;
  --input-date-separator: #ff8a8a !important;
  --input-disabled-border-color: transparent !important;
  --input-focus-border-color: Highlight !important;
  --input-focus-outline: 1px solid Canvas !important;
  --input-hover-border-color: red !important;
  --input-placeholder-color: #ff8a8a !important;
  --input-unfocused-border-color: transparent !important;
  --interactive-accent: #B50505 !important;
  --interactive-accent-rgb: #f3ad6b !important;
  --interactive-before: #5c1818 !important;
  --light: #390000 !important;
  --light0: #ff8a8a !important;
  --light1: #e4d1cf !important;
  --light2: #fdf8ec !important;
  --light3: #5fa57a !important;
  --lightgray: #290202 !important;
  --link-color: #f3ad6b !important;
  --link-external-color: #f3ad6b !important;
  --link-unresolved-color: #f3ad6b !important;
  --list-marker-color: #ff8a8a !important;
  --list-marker-color-collapsed: #f3ad6b !important;
  --list-marker-color-hover: #e4d1cf !important;
  --menu-background: #290202 !important;
  --metadata-border-color: #3d0404 !important;
  --metadata-divider-color: #3d0404 !important;
  --metadata-input-text-color: #fdf8ec !important;
  --metadata-label-text-color: #e4d1cf !important;
  --metadata-label-text-color-hover: #e4d1cf !important;
  --modal-background: #390000 !important;
  --nav-collapse-icon-color: #ff8a8a !important;
  --nav-collapse-icon-color-collapsed: #ff8a8a !important;
  --nav-heading-color: #fdf8ec !important;
  --nav-heading-color-collapsed: #ff8a8a !important;
  --nav-heading-color-collapsed-hover: #e4d1cf !important;
  --nav-heading-color-hover: #fdf8ec !important;
  --nav-item-color: #e4d1cf !important;
  --nav-item-color-active: #fdf8ec !important;
  --nav-item-color-highlighted: #f3ad6b !important;
  --nav-item-color-hover: #fdf8ec !important;
  --nav-item-color-selected: #fdf8ec !important;
  --nav-tag-color: #ff8a8a !important;
  --nav-tag-color-active: #e4d1cf !important;
  --nav-tag-color-hover: #e4d1cf !important;
  --orange: #f3ad6b !important;
  --pdf-background: #390000 !important;
  --pdf-page-background: #390000 !important;
  --pdf-shadow: 0 0 0 1px #3d0404 !important;
  --pdf-sidebar-background: #390000 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #3d0404 !important;
  --pill-border-color: #3d0404 !important;
  --pill-color: #e4d1cf !important;
  --pill-color-hover: #fdf8ec !important;
  --pill-color-remove: #ff8a8a !important;
  --pill-color-remove-hover: #f3ad6b !important;
  --pre-code: #290202 !important;
  --prompt-background: #390000 !important;
  --purple: #f899e7 !important;
  --red: #d63f4e !important;
  --ribbon-background: #290202 !important;
  --ribbon-background-collapsed: #390000 !important;
  --search-clear-button-color: #e4d1cf !important;
  --search-icon-color: #e4d1cf !important;
  --search-result-background: #390000 !important;
  --secondary: #f3ad6b !important;
  --setting-group-heading-color: #fdf8ec !important;
  --setting-items-background: #390000 !important;
  --setting-items-border-color: #3d0404 !important;
  --sideRed: #910b0bcc !important;
  --slider-track-background: #3d0404 !important;
  --status-bar-background: #290202 !important;
  --status-bar-border-color: #3d0404 !important;
  --status-bar-text-color: #e4d1cf !important;
  --suggestion-background: #390000 !important;
  --tab-background-active: #390000 !important;
  --tab-container-background: #290202 !important;
  --tab-outline-color: #3d0404 !important;
  --tab-switcher-background: #290202 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #290202, transparent) !important;
  --tab-text-color: #ff8a8a !important;
  --tab-text-color-active: #e4d1cf !important;
  --tab-text-color-focused: #e4d1cf !important;
  --tab-text-color-focused-active: #e4d1cf !important;
  --tab-text-color-focused-active-current: #fdf8ec !important;
  --tab-text-color-focused-highlighted: #f3ad6b !important;
  --table-add-button-border-color: #3d0404 !important;
  --table-border-color: #3d0404 !important;
  --table-drag-handle-background-active: #B50505 !important;
  --table-drag-handle-color: #ff8a8a !important;
  --table-header: hsl(220, 16%, 16%) !important;
  --table-header-border-color: #3d0404 !important;
  --table-header-color: #fdf8ec !important;
  --table-hover: #5c1818 !important;
  --table-row-even: #2e21218a !important;
  --table-row-odd: #000000 !important;
  --table-selection-border-color: #B50505 !important;
  --tag-color: #f3ad6b !important;
  --tag-color-hover: #f3ad6b !important;
  --task-checkbox: #B50505 !important;
  --tertiary: #f3ad6b !important;
  --text-a: #FF9CFA !important;
  --text-a-hover: #81a1c1 !important;
  --text-accent: #f3ad6b !important;
  --text-faint: #ff8a8a !important;
  --text-highlight-bg: rgba(163, 190, 140, 0.3) !important;
  --text-highlight-bg-active: #b0f078 !important;
  --text-link: #B50505 !important;
  --text-mark: rgba(147, 217, 236, 0.3) !important;
  --text-muted: #e4d1cf !important;
  --text-normal: #fdf8ec !important;
  --text-selection: #5c1818 !important;
  --text-tag: #B50505 !important;
  --text-title-h1: #d63f4e !important;
  --text-title-h2: #f3ad6b !important;
  --text-title-h3: #ebcb8b !important;
  --text-title-h4: #b0f078 !important;
  --text-title-h5: #f899e7 !important;
  --text-title-h6: #f3ad6b !important;
  --textHighlight: rgba(163, 190, 140, 0.3) !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #290202 !important;
  --titlebar-background-focused: #3d0404 !important;
  --titlebar-border-color: #3d0404 !important;
  --titlebar-text-color: #e4d1cf !important;
  --titlebar-text-color-focused: #fdf8ec !important;
  --vault-profile-color: #fdf8ec !important;
  --vault-profile-color-hover: #fdf8ec !important;
  --vim-cursor: #f3ad6b !important;
  --yellow: #ebcb8b !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(57, 0, 0);
  color: rgb(253, 248, 236);
}

html body .bases-table {
  border-color: rgb(41, 2, 2);
}

html body .bases-table thead th {
  background-color: rgb(34, 39, 47);
  border-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

html body .canvas-node {
  border-color: rgb(253, 248, 236);
}

html body .canvas-node-content {
  color: rgb(253, 248, 236);
}

html body .canvas-node-file {
  color: rgb(253, 248, 236);
}

html body .canvas-node-group {
  border-color: rgb(253, 248, 236);
}

html body .canvas-sidebar {
  background-color: rgb(41, 2, 2);
  border-color: rgb(253, 248, 236);
}

html body .note-properties {
  background-color: rgb(41, 2, 2);
  border-color: rgb(204, 13, 13);
  border-radius: 5px;
}

html body .note-properties-key {
  color: rgb(228, 209, 207);
}

html body .note-properties-row {
  border-color: rgb(228, 209, 207);
}

html body .note-properties-tags {
  color: rgb(243, 173, 107);
}

html body .note-properties-value {
  color: rgb(228, 209, 207);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(61, 4, 4);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(41, 2, 2);
  border-left-color: rgb(61, 4, 4);
  color: rgb(253, 248, 236);
}

html body div#quartz-root {
  background-color: rgb(57, 0, 0);
  color: rgb(253, 248, 236);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body .page article p > em, html em {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body .page article p > i, html i {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body .page article p > strong, html strong {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body .text-highlight {
  background-color: rgba(163, 190, 140, 0.3);
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body del {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body h1.article-title {
  color: rgb(253, 248, 236);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 138, 138);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(181, 5, 5);
  border-color: rgb(181, 5, 5);
}

html body p {
  color: rgb(228, 209, 207);
  outline: rgb(228, 209, 207) none 0px;
  text-decoration-color: rgb(228, 209, 207);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 156, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 156, 250) none 0px;
  text-decoration-color: rgb(255, 156, 250);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 156, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 156, 250) none 0px;
  text-decoration-color: rgb(255, 156, 250);
}

html body a.internal.broken {
  color: rgb(255, 156, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 156, 250) none 0px;
  text-decoration-color: rgb(255, 156, 250);
}`,
    lists: `html body dd {
  color: rgb(253, 248, 236);
}

html body dt {
  color: rgb(253, 248, 236);
}

html body ol > li {
  color: rgb(253, 248, 236);
}

html body ol.overflow {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body ul > li {
  color: rgb(253, 248, 236);
}

html body ul.overflow {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(255, 156, 250);
}

html body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body table {
  border-bottom-color: rgb(41, 2, 2);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(41, 2, 2);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(41, 2, 2);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(41, 2, 2);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.062px;
}

html body td {
  border-bottom-color: rgb(41, 2, 2);
  border-left-color: rgb(253, 248, 236);
  border-left-width: 0px;
  border-right-color: rgb(253, 248, 236);
  border-right-width: 0px;
  border-top-color: rgb(61, 4, 4);
  color: rgb(253, 248, 236);
}

html body th {
  background-color: rgb(34, 39, 47);
  border-bottom-color: rgb(253, 248, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(253, 248, 236);
  border-left-width: 0px;
  border-right-color: rgb(253, 248, 236);
  border-right-width: 0px;
  border-top-color: rgb(253, 248, 236);
  border-top-width: 0px;
  color: rgb(253, 248, 236);
}

html body thead {
  border-bottom-color: rgb(61, 4, 4);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(41, 2, 2);
  border-right-color: rgb(41, 2, 2);
  border-top-color: rgb(41, 2, 2);
}

html body tr {
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(41, 2, 2);
  border-right-color: rgb(41, 2, 2);
  border-top-color: rgb(41, 2, 2);
}`,
    code: `html body code {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(204, 13, 13);
  border-left-color: rgb(204, 13, 13);
  border-right-color: rgb(204, 13, 13);
  border-top-color: rgb(204, 13, 13);
  color: rgb(204, 13, 13);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
  color: rgb(253, 248, 236);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
}

html body pre:has(> code) {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
}`,
    images: `html body audio {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body figcaption {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body img {
  border-bottom-color: rgb(214, 63, 78);
  border-left-color: rgb(214, 63, 78);
  border-right-color: rgb(214, 63, 78);
  border-top-color: rgb(214, 63, 78);
}

html body video {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(57, 0, 0);
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
}

html body .footnotes {
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

html body .transclude {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  padding-left: 10px;
  padding-right: 10px;
}

html body .transclude-inner {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(181, 5, 5);
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(181, 5, 5);
  border-top-color: rgb(181, 5, 5);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
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
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
  color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space {
  background-color: rgb(57, 0, 0);
}

html body .search > .search-container > .search-space > * {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(41, 2, 2);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

html body a.internal.tag-link::before {
  color: rgb(243, 173, 107);
}

html body h1 {
  color: rgb(214, 63, 78);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(243, 173, 107);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(235, 203, 139);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(176, 240, 120);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(248, 153, 231);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(243, 173, 107);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(228, 209, 207);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(228, 209, 207);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(253, 248, 236);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}`,
    footer: `html body footer {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
  color: rgb(228, 209, 207);
}

html body footer ul li a {
  color: rgb(228, 209, 207);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(253, 248, 236);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(228, 209, 207);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(228, 209, 207);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body li.section-li > .section .meta {
  color: rgb(228, 209, 207);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(228, 209, 207);
}

html body ul.section-ul {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}

html body .darkmode svg {
  color: rgb(228, 209, 207);
  stroke: rgb(228, 209, 207);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}

html body .breadcrumb-element p {
  color: rgb(255, 138, 138);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

html body .metadata {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(204, 13, 13);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgb(204, 13, 13);
  border-left-width: 2px;
  border-right-color: rgb(204, 13, 13);
  border-right-width: 2px;
  border-top-color: rgb(204, 13, 13);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
  color: rgb(228, 209, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 16px;
}

html body .metadata-properties {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(41, 2, 2);
}

html body .page-header h2.page-title {
  color: rgb(253, 248, 236);
}

html body abbr {
  color: rgb(253, 248, 236);
}

html body details {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body input[type=text] {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}

html body kbd {
  background-color: rgb(57, 0, 0);
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body sub {
  color: rgb(253, 248, 236);
}

html body summary {
  color: rgb(253, 248, 236);
}

html body sup {
  color: rgb(253, 248, 236);
}

html body ul.tags > li {
  background-color: rgb(61, 4, 4);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(181, 5, 5);
}`,
  },
  light: {},
};
