import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ib-writer",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-quattro"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 196 !important;
  --accent-l: 20.4% !important;
  --accent-s: 61.5% !important;
  --background-modifier-active-hover: hsla(196, 61.5%, 20.4%, 0.1) !important;
  --background-primary: rgb(27, 26, 27) !important;
  --background-primary-alt: rgb(38, 37, 38) !important;
  --background-secondary: #141414 !important;
  --bases-cards-background: rgb(27, 26, 27) !important;
  --bases-cards-cover-background: rgb(38, 37, 38) !important;
  --bases-table-cell-background-active: rgb(27, 26, 27) !important;
  --bases-table-cell-background-disabled: rgb(38, 37, 38) !important;
  --bases-table-cell-background-selected: hsla(196, 61.5%, 20.4%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(20, 68, 84) !important;
  --bases-table-group-background: rgb(38, 37, 38) !important;
  --bases-table-header-background: rgb(27, 26, 27) !important;
  --bases-table-summary-background: rgb(27, 26, 27) !important;
  --blockquote-border-color: clear !important;
  --blockquote-font-style: italic !important;
  --bodyFont: "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(27, 26, 27) !important;
  --caret-color: rgb(204, 204, 204) !important;
  --checkbox-border-color: rgb(204, 204, 204) !important;
  --checkbox-color: clear !important;
  --checkbox-color-hover: hsl(193, 62.73%, 23.46%) !important;
  --checkbox-marker-color: rgb(27, 26, 27) !important;
  --checkbox-size: 1.125rem !important;
  --checklist-done-color: #7b7a78 !important;
  --code-background: rgb(38, 37, 38) !important;
  --code-block-background-color: rgb(240, 240, 240) !important;
  --code-block-background-color-dark: rgb(38, 37, 38) !important;
  --code-normal: rgb(204, 204, 204) !important;
  --codeFont: "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: rgb(204, 204, 204) !important;
  --color-accent: rgb(204, 204, 204) !important;
  --color-accent-1: hsl(193, 62.73%, 23.46%) !important;
  --color-accent-2: hsl(191, 64.575%, 26.316%) !important;
  --color-accent-hsl: 196, 61.5%, 20.4% !important;
  --color-base-00: rgb(27, 26, 27) !important;
  --color-base-10: rgb(38, 37, 38) !important;
  --color-base-100: rgb(204, 204, 204) !important;
  --color-base-20: #141414 !important;
  --dark: rgb(204, 204, 204) !important;
  --darkgray: rgb(204, 204, 204) !important;
  --divider-color-hover: rgb(20, 68, 84) !important;
  --edit-view-background-color: rgb(247, 247, 247) !important;
  --edit-view-background-color-dark: rgb(27, 26, 27) !important;
  --embed-block-shadow-hover: clear !important;
  --embed-border-start: 2px solid rgb(20, 68, 84) !important;
  --file-header-background: rgb(27, 26, 27) !important;
  --file-header-background-focused: rgb(27, 26, 27) !important;
  --file-header-font: "iA Writer Quattro V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 750px !important;
  --flair-color: rgb(204, 204, 204) !important;
  --font-interface: "iA Writer Quattro V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-override: "iA Writer Quattro V" !important;
  --font-mermaid: "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "iA Writer Mono V" !important;
  --font-print: "iA Writer Duo V", Arial' !important;
  --font-text: "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-size: 1.125rem !important;
  --font-text-theme: "iA Writer Duo V" !important;
  --footnote-line-height: 1.6 !important;
  --graph-node-focused: hsl(193, 62.73%, 23.46%) !important;
  --graph-text: rgb(204, 204, 204) !important;
  --gray: rgb(204, 204, 204) !important;
  --h1-size: 1.4rem !important;
  --h2-size: 1.3rem !important;
  --h3-size: 1.2rem !important;
  --h4-size: 1.2rem !important;
  --h4-style: oblique !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 1.17rem !important;
  --h5-style: oblique !important;
  --h5-weight: normal !important;
  --h6-line-height: 1.6 !important;
  --h6-size: 1.17rem !important;
  --hashtag-underline-color: #b4b3b0 !important;
  --hashtag-underline-color-dark: #7a7a79 !important;
  --headerFont: "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: hsla(196, 61.5%, 20.4%, 0.1) !important;
  --icon-color-active: hsl(193, 62.73%, 23.46%) !important;
  --icon-color-focused: rgb(204, 204, 204) !important;
  --indicator-color: #00bfff !important;
  --inline-title-size: 1.4rem !important;
  --interactive-accent: rgb(20, 68, 84) !important;
  --interactive-accent-hover: hsl(193, 62.73%, 23.46%) !important;
  --interactive-accent-hsl: 196, 61.5%, 20.4% !important;
  --light: rgb(27, 26, 27) !important;
  --lightgray: #141414 !important;
  --line-height-normal: 1.6 !important;
  --link-color: hsl(193, 62.73%, 23.46%) !important;
  --link-color-hover: #0591cf !important;
  --link-external-color: hsl(193, 62.73%, 23.46%) !important;
  --link-external-color-hover: #0591cf !important;
  --link-unresolved-color: hsl(193, 62.73%, 23.46%) !important;
  --link-unresolved-decoration-color: hsla(196, 61.5%, 20.4%, 0.3) !important;
  --list-done-color: #b4b3b0 !important;
  --list-done-color-dark: #7b7a78 !important;
  --list-marker-color-collapsed: rgb(204, 204, 204) !important;
  --menu-background: #141414 !important;
  --metadata-input-font: "iA Writer Quattro V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 1.96875rem !important;
  --metadata-input-text-color: rgb(204, 204, 204) !important;
  --metadata-label-font: "iA Writer Quattro V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: rgb(27, 26, 27) !important;
  --my-accent-color: rgb(185, 233, 249) !important;
  --my-accent-color-dark: rgb(20, 68, 84) !important;
  --my-accent-color-dark-render: rgb(34, 60, 75) !important;
  --my-accent-color-render: rgb(211, 237, 252) !important;
  --nav-activer-color: hsl(210, 4%, 90%) !important;
  --nav-activer-color-dark: hsl(225, 3%, 26%) !important;
  --nav-background-color: #fdfdfd !important;
  --nav-background-color-dark: #141414 !important;
  --nav-heading-color: rgb(204, 204, 204) !important;
  --nav-heading-color-hover: rgb(204, 204, 204) !important;
  --nav-item-background-active: hsl(225, 3%, 26%) !important;
  --nav-item-background-selected: hsla(196, 61.5%, 20.4%, 0.15) !important;
  --nav-item-color-active: rgb(204, 204, 204) !important;
  --nav-item-color-highlighted: hsl(193, 62.73%, 23.46%) !important;
  --nav-item-color-hover: rgb(204, 204, 204) !important;
  --nav-item-color-selected: rgb(204, 204, 204) !important;
  --nav-item-size: 0.875rem !important;
  --nav-separator-color: hsl(0, 0%, 90%) !important;
  --nav-separator-color-dark: hsl(0, 0%, 15%) !important;
  --pdf-background: rgb(27, 26, 27) !important;
  --pdf-page-background: rgb(27, 26, 27) !important;
  --pdf-sidebar-background: rgb(27, 26, 27) !important;
  --pill-color-hover: rgb(204, 204, 204) !important;
  --pill-color-remove-hover: hsl(193, 62.73%, 23.46%) !important;
  --popover-font-size: 1.125rem !important;
  --prompt-background: rgb(27, 26, 27) !important;
  --ribbon-background: #141414 !important;
  --ribbon-background-collapsed: rgb(27, 26, 27) !important;
  --search-result-background: rgb(27, 26, 27) !important;
  --secondary: hsl(193, 62.73%, 23.46%) !important;
  --setting-group-heading-color: rgb(204, 204, 204) !important;
  --setting-items-background: rgb(38, 37, 38) !important;
  --sidebar-markdown-font-size: 1.0125rem !important;
  --status-bar-background: #141414 !important;
  --suggestion-background: rgb(27, 26, 27) !important;
  --tab-background-active: rgb(27, 26, 27) !important;
  --tab-container-background: #141414 !important;
  --tab-switcher-background: #141414 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #141414, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(204, 204, 204) !important;
  --tab-text-color-focused-active-current: rgb(204, 204, 204) !important;
  --tab-text-color-focused-highlighted: hsl(193, 62.73%, 23.46%) !important;
  --table-add-button-border-width: 0px !important;
  --table-border-width: 0px !important;
  --table-column-first-border-width: 0px !important;
  --table-column-last-border-width: 0px !important;
  --table-drag-handle-background-active: rgb(20, 68, 84) !important;
  --table-header-color: rgb(204, 204, 204) !important;
  --table-header-size: 0.93rem !important;
  --table-selection: hsla(196, 61.5%, 20.4%, 0.1) !important;
  --table-selection-border-color: rgb(20, 68, 84) !important;
  --table-text-size: 0.93rem !important;
  --tag-background: clear !important;
  --tag-background-hover: hsla(196, 61.5%, 20.4%, 0.2) !important;
  --tag-border-color: hsla(196, 61.5%, 20.4%, 0.15) !important;
  --tag-border-color-hover: hsla(196, 61.5%, 20.4%, 0.15) !important;
  --tag-color: rgb(204, 204, 204) !important;
  --tag-color-hover: hsl(193, 62.73%, 23.46%) !important;
  --tertiary: #0591cf !important;
  --text-accent: hsl(193, 62.73%, 23.46%) !important;
  --text-accent-hover: #0591cf !important;
  --text-color: rgb(26, 26, 26) !important;
  --text-color-dark: rgb(204, 204, 204) !important;
  --text-normal: rgb(204, 204, 204) !important;
  --text-selection: rgb(20, 68, 84) !important;
  --textHighlight: hsla(196, 61.5%, 20.4%, 0.1) !important;
  --titleFont: "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #141414 !important;
  --titlebar-text-color-focused: rgb(204, 204, 204) !important;
  --vault-profile-color: rgb(204, 204, 204) !important;
  --vault-profile-color-hover: rgb(204, 204, 204) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(27, 26, 27);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(54, 54, 54) rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(20, 20, 20);
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 31.5px;
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(27, 26, 27);
  color: rgb(204, 204, 204);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body del {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: underline rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: underline rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body a.internal.broken {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(22, 81, 97);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(22, 81, 97) none 0px;
  text-decoration: underline rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 18px;
  margin-top: 18px;
}

html[saved-theme="dark"] body dt {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "iA Writer Quattro V", sans-serif;
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body table {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  margin-top: 0px;
  width: 1780px;
}

html[saved-theme="dark"] body td {
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  color: rgb(204, 204, 204);
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body th {
  border-left-color: rgb(204, 204, 204);
  border-left-width: 0px;
  border-right-color: rgb(204, 204, 204);
  border-right-width: 0px;
  color: rgb(204, 204, 204);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 37, 38);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 37, 38);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(38, 37, 38);
  padding-left: 25px;
  padding-right: 25px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(38, 37, 38);
  padding-left: 25px;
  padding-right: 25px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 18px;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  margin-bottom: 18px;
  margin-top: 18px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(38, 37, 38);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(20, 68, 84);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  margin-left: -27px;
  width: 18px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
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
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(27, 26, 27);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(20, 67, 84, 0.15);
  border-bottom-left-radius: 31.5px;
  border-bottom-right-radius: 31.5px;
  border-left-color: rgba(20, 67, 84, 0.15);
  border-right-color: rgba(20, 67, 84, 0.15);
  border-top-color: rgba(20, 67, 84, 0.15);
  border-top-left-radius: 31.5px;
  border-top-right-radius: 31.5px;
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h1 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 700;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(20, 20, 20);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .metadata {
  font-family: "iA Writer Quattro V", sans-serif;
  margin-bottom: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(38, 37, 38);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 15.75px;
  padding-bottom: 1.575px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.575px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body sub {
  color: rgb(204, 204, 204);
  font-size: 15px;
}

html[saved-theme="dark"] body summary {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body sup {
  color: rgb(204, 204, 204);
  font-size: 15px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(255, 255, 255, 0);
  border-bottom-color: rgba(20, 67, 84, 0.15);
  border-bottom-left-radius: 27.5625px;
  border-bottom-right-radius: 27.5625px;
  border-left-color: rgba(20, 67, 84, 0.15);
  border-right-color: rgba(20, 67, 84, 0.15);
  border-top-color: rgba(20, 67, 84, 0.15);
  border-top-left-radius: 27.5625px;
  border-top-right-radius: 27.5625px;
  color: rgb(204, 204, 204);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 201 !important;
  --accent-s: 93% !important;
  --background-modifier-active-hover: hsla(201, 93%, 66%, 0.1) !important;
  --background-modifier-form-field: rgb(247, 247, 247) !important;
  --background-modifier-form-field-hover: rgb(247, 247, 247) !important;
  --background-primary: rgb(247, 247, 247) !important;
  --background-primary-alt: rgb(240, 240, 240) !important;
  --background-secondary: #fdfdfd !important;
  --bases-cards-background: rgb(247, 247, 247) !important;
  --bases-cards-cover-background: rgb(240, 240, 240) !important;
  --bases-table-cell-background-active: rgb(247, 247, 247) !important;
  --bases-table-cell-background-disabled: rgb(240, 240, 240) !important;
  --bases-table-cell-background-selected: hsla(201, 93%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00bfff !important;
  --bases-table-group-background: rgb(240, 240, 240) !important;
  --bases-table-header-background: rgb(247, 247, 247) !important;
  --bases-table-summary-background: rgb(247, 247, 247) !important;
  --blockquote-border-color: clear !important;
  --blockquote-font-style: italic !important;
  --blur-background: color-mix(in srgb, rgb(247, 247, 247) 65%, transparent) linear-gradient(rgb(247, 247, 247), color-mix(in srgb, rgb(247, 247, 247) 65%, transparent)) !important;
  --bodyFont: "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(247, 247, 247) !important;
  --caret-color: rgb(26, 26, 26) !important;
  --checkbox-border-color: rgb(26, 26, 26) !important;
  --checkbox-color: clear !important;
  --checkbox-color-hover: hsl(198, 94.86%, 75.9%) !important;
  --checkbox-marker-color: rgb(247, 247, 247) !important;
  --checkbox-size: 1.125rem !important;
  --checklist-done-color: #b4b3b0 !important;
  --code-background: rgb(240, 240, 240) !important;
  --code-block-background-color: rgb(240, 240, 240) !important;
  --code-block-background-color-dark: rgb(38, 37, 38) !important;
  --code-normal: rgb(26, 26, 26) !important;
  --codeFont: "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: rgb(26, 26, 26) !important;
  --color-accent: rgb(26, 26, 26) !important;
  --color-accent-1: hsl(200, 93.93%, 70.95%) !important;
  --color-accent-2: hsl(198, 94.86%, 75.9%) !important;
  --color-accent-hsl: 201, 93%, 66% !important;
  --color-base-00: rgb(247, 247, 247) !important;
  --color-base-10: rgb(240, 240, 240) !important;
  --color-base-100: rgb(26, 26, 26) !important;
  --color-base-20: #fdfdfd !important;
  --dark: rgb(26, 26, 26) !important;
  --darkgray: rgb(26, 26, 26) !important;
  --divider-color-hover: #00bfff !important;
  --dropdown-background: rgb(247, 247, 247) !important;
  --dropdown-background-hover: rgb(240, 240, 240) !important;
  --edit-view-background-color: rgb(247, 247, 247) !important;
  --edit-view-background-color-dark: rgb(27, 26, 27) !important;
  --embed-block-shadow-hover: clear !important;
  --embed-border-start: 2px solid #00bfff !important;
  --file-header-background: rgb(247, 247, 247) !important;
  --file-header-background-focused: rgb(247, 247, 247) !important;
  --file-header-font: "iA Writer Quattro V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 750px !important;
  --flair-background: rgb(247, 247, 247) !important;
  --flair-color: rgb(26, 26, 26) !important;
  --font-interface: "iA Writer Quattro V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-override: "iA Writer Quattro V" !important;
  --font-mermaid: "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "iA Writer Mono V" !important;
  --font-print: "iA Writer Duo V", Arial' !important;
  --font-text: "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-size: 1.125rem !important;
  --font-text-theme: "iA Writer Duo V" !important;
  --footnote-line-height: 1.6 !important;
  --graph-node-focused: rgb(26, 26, 26) !important;
  --graph-text: rgb(26, 26, 26) !important;
  --gray: rgb(26, 26, 26) !important;
  --h1-size: 1.4rem !important;
  --h2-size: 1.3rem !important;
  --h3-size: 1.2rem !important;
  --h4-size: 1.2rem !important;
  --h4-style: oblique !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 1.17rem !important;
  --h5-style: oblique !important;
  --h5-weight: normal !important;
  --h6-line-height: 1.6 !important;
  --h6-size: 1.17rem !important;
  --hashtag-underline-color: #b4b3b0 !important;
  --hashtag-underline-color-dark: #7a7a79 !important;
  --headerFont: "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: hsla(201, 93%, 66%, 0.1) !important;
  --icon-color-active: rgb(26, 26, 26) !important;
  --icon-color-focused: rgb(26, 26, 26) !important;
  --indicator-color: #00bfff !important;
  --inline-title-size: 1.4rem !important;
  --interactive-accent: #00bfff !important;
  --interactive-accent-hover: hsl(198, 94.86%, 75.9%) !important;
  --interactive-accent-hsl: 201, 93%, 66% !important;
  --interactive-hover: rgb(240, 240, 240) !important;
  --interactive-normal: rgb(247, 247, 247) !important;
  --light: rgb(247, 247, 247) !important;
  --lightgray: #fdfdfd !important;
  --line-height-normal: 1.6 !important;
  --link-color: rgb(26, 26, 26) !important;
  --link-color-hover: #0591cf !important;
  --link-external-color: rgb(26, 26, 26) !important;
  --link-external-color-hover: #0591cf !important;
  --link-unresolved-color: rgb(26, 26, 26) !important;
  --link-unresolved-decoration-color: hsla(201, 93%, 66%, 0.3) !important;
  --list-done-color: #b4b3b0 !important;
  --list-done-color-dark: #7b7a78 !important;
  --list-marker-color-collapsed: rgb(26, 26, 26) !important;
  --menu-background: #fdfdfd !important;
  --metadata-input-font: "iA Writer Quattro V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 1.96875rem !important;
  --metadata-input-text-color: rgb(26, 26, 26) !important;
  --metadata-label-font: "iA Writer Quattro V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: rgb(247, 247, 247) !important;
  --my-accent-color: rgb(185, 233, 249) !important;
  --my-accent-color-dark: rgb(20, 68, 84) !important;
  --my-accent-color-dark-render: rgb(34, 60, 75) !important;
  --my-accent-color-render: rgb(211, 237, 252) !important;
  --nav-activer-color: hsl(210, 4%, 90%) !important;
  --nav-activer-color-dark: hsl(225, 3%, 26%) !important;
  --nav-background-color: #fdfdfd !important;
  --nav-background-color-dark: #141414 !important;
  --nav-heading-color: rgb(26, 26, 26) !important;
  --nav-heading-color-hover: rgb(26, 26, 26) !important;
  --nav-item-background-active: hsl(210, 4%, 90%) !important;
  --nav-item-background-selected: hsla(201, 93%, 66%, 0.15) !important;
  --nav-item-color-active: rgb(26, 26, 26) !important;
  --nav-item-color-highlighted: rgb(26, 26, 26) !important;
  --nav-item-color-hover: rgb(26, 26, 26) !important;
  --nav-item-color-selected: rgb(26, 26, 26) !important;
  --nav-item-size: 0.875rem !important;
  --nav-separator-color: hsl(0, 0%, 90%) !important;
  --nav-separator-color-dark: hsl(0, 0%, 15%) !important;
  --pdf-background: rgb(247, 247, 247) !important;
  --pdf-page-background: rgb(247, 247, 247) !important;
  --pdf-sidebar-background: rgb(247, 247, 247) !important;
  --pill-color-hover: rgb(26, 26, 26) !important;
  --pill-color-remove-hover: rgb(26, 26, 26) !important;
  --popover-font-size: 1.125rem !important;
  --prompt-background: rgb(247, 247, 247) !important;
  --raised-background: color-mix(in srgb, rgb(247, 247, 247) 65%, transparent) linear-gradient(rgb(247, 247, 247), color-mix(in srgb, rgb(247, 247, 247) 65%, transparent)) !important;
  --ribbon-background: #fdfdfd !important;
  --ribbon-background-collapsed: rgb(247, 247, 247) !important;
  --search-result-background: rgb(247, 247, 247) !important;
  --secondary: rgb(26, 26, 26) !important;
  --setting-group-heading-color: rgb(26, 26, 26) !important;
  --setting-items-background: rgb(240, 240, 240) !important;
  --sidebar-markdown-font-size: 1.0125rem !important;
  --status-bar-background: #fdfdfd !important;
  --suggestion-background: rgb(247, 247, 247) !important;
  --tab-background-active: rgb(247, 247, 247) !important;
  --tab-container-background: #fdfdfd !important;
  --tab-switcher-background: #fdfdfd !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdfdfd, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(26, 26, 26) !important;
  --tab-text-color-focused-active-current: rgb(26, 26, 26) !important;
  --tab-text-color-focused-highlighted: rgb(26, 26, 26) !important;
  --table-add-button-border-width: 0px !important;
  --table-border-width: 0px !important;
  --table-column-first-border-width: 0px !important;
  --table-column-last-border-width: 0px !important;
  --table-drag-handle-background-active: #00bfff !important;
  --table-header-color: rgb(26, 26, 26) !important;
  --table-header-size: 0.93rem !important;
  --table-selection: hsla(201, 93%, 66%, 0.1) !important;
  --table-selection-border-color: #00bfff !important;
  --table-text-size: 0.93rem !important;
  --tag-background: clear !important;
  --tag-background-hover: hsla(201, 93%, 66%, 0.2) !important;
  --tag-border-color: hsla(201, 93%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(201, 93%, 66%, 0.15) !important;
  --tag-color: rgb(26, 26, 26) !important;
  --tag-color-hover: rgb(26, 26, 26) !important;
  --tertiary: #0591cf !important;
  --text-accent: rgb(26, 26, 26) !important;
  --text-accent-hover: #0591cf !important;
  --text-color: rgb(26, 26, 26) !important;
  --text-color-dark: rgb(204, 204, 204) !important;
  --text-normal: rgb(26, 26, 26) !important;
  --text-selection: rgb(185, 233, 249) !important;
  --textHighlight: hsla(201, 93%, 66%, 0.1) !important;
  --titleFont: "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #fdfdfd !important;
  --titlebar-text-color-focused: rgb(26, 26, 26) !important;
  --vault-profile-color: rgb(26, 26, 26) !important;
  --vault-profile-color-hover: rgb(26, 26, 26) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 253, 253);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(224, 224, 224) rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(247, 247, 247);
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 31.5px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 253, 253);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 253, 253);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body del {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: underline rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body a.internal.broken {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: underline rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body dl {
  margin-bottom: 18px;
  margin-top: 18px;
}

html[saved-theme="light"] body dt {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ol > li {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ul > li {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "iA Writer Quattro V", sans-serif;
  font-style: italic;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body table {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  margin-top: 0px;
  width: 1780px;
}

html[saved-theme="light"] body td {
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  color: rgb(26, 26, 26);
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body th {
  border-left-color: rgb(26, 26, 26);
  border-left-width: 0px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 0px;
  color: rgb(26, 26, 26);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(240, 240, 240);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(240, 240, 240);
  padding-left: 25px;
  padding-right: 25px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(240, 240, 240);
  padding-left: 25px;
  padding-right: 25px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 18px;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  margin-bottom: 18px;
  margin-top: 18px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(0, 191, 255);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  margin-left: -27px;
  width: 18px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
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
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 253, 253);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(88, 192, 249, 0.15);
  border-bottom-left-radius: 31.5px;
  border-bottom-right-radius: 31.5px;
  border-left-color: rgba(88, 192, 249, 0.15);
  border-right-color: rgba(88, 192, 249, 0.15);
  border-top-color: rgba(88, 192, 249, 0.15);
  border-top-left-radius: 31.5px;
  border-top-right-radius: 31.5px;
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h1 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 700;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(253, 253, 253);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .metadata {
  font-family: "iA Writer Quattro V", sans-serif;
  margin-bottom: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "iA Writer Quattro V", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(253, 253, 253);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body input[type=text] {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 15.75px;
  padding-bottom: 1.575px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.575px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body sub {
  color: rgb(26, 26, 26);
  font-size: 15px;
}

html[saved-theme="light"] body summary {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body sup {
  color: rgb(26, 26, 26);
  font-size: 15px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(255, 255, 255, 0);
  border-bottom-color: rgba(88, 192, 249, 0.15);
  border-bottom-left-radius: 27.5625px;
  border-bottom-right-radius: 27.5625px;
  border-left-color: rgba(88, 192, 249, 0.15);
  border-right-color: rgba(88, 192, 249, 0.15);
  border-top-color: rgba(88, 192, 249, 0.15);
  border-top-left-radius: 27.5625px;
  border-top-right-radius: 27.5625px;
  color: rgb(26, 26, 26);
}`,
  },
};
