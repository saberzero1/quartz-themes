import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "matrix", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 140 !important;
  --accent-l: 50% !important;
  --accent-s: 100% !important;
  --background-modifier-active: #164a30 !important;
  --background-modifier-active-hover: hsla(140, 100%, 50%, 0.1) !important;
  --background-modifier-border: #0b2a1a !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.82) !important;
  --background-modifier-form-field: #07140c !important;
  --background-modifier-form-field-highlighted: #0e2117 !important;
  --background-modifier-form-field-hover: #07140c !important;
  --background-modifier-hover: #103422 !important;
  --background-primary: #000000 !important;
  --background-primary-alt: #030d06 !important;
  --background-secondary: #06160d !important;
  --background-secondary-alt: #0a2015 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #030d06 !important;
  --bases-cards-shadow: 0 0 0 1px #0b2a1a !important;
  --bases-embed-border-color: #0b2a1a !important;
  --bases-group-heading-property-color: #7affe0 !important;
  --bases-table-border-color: #0b2a1a !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #030d06 !important;
  --bases-table-cell-background-selected: hsla(140, 100%, 50%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00ff41 !important;
  --bases-table-group-background: #030d06 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-background-hover: #103422 !important;
  --bases-table-header-color: #7affe0 !important;
  --bases-table-summary-background: #000000 !important;
  --bases-table-summary-background-hover: #103422 !important;
  --blockquote-border-color: #00ff41 !important;
  --blur-background: color-mix(in srgb, #0a2418 65%, transparent) linear-gradient(#0a2418, color-mix(in srgb, #0a2418 65%, transparent)) !important;
  --border-w: 1.5px !important;
  --canvas-background: #000000 !important;
  --canvas-card-label-color: #25b07b !important;
  --caret-color: #00ff41 !important;
  --checkbox-border-color: #25b07b !important;
  --checkbox-border-color-hover: #7affe0 !important;
  --checkbox-color: #00ff41 !important;
  --checkbox-color-hover: #00ffaa !important;
  --checkbox-marker-color: #000000 !important;
  --checklist-done-color: #7affe0 !important;
  --code-background: #0d0208 !important;
  --code-border: #00ffaa !important;
  --code-border-color: #0b2a1a !important;
  --code-bracket-background: #103422 !important;
  --code-comment: #25b07b !important;
  --code-fg: #00ff41 !important;
  --code-normal: #00ff41 !important;
  --code-punctuation: #7affe0 !important;
  --collapse-icon-color: #25b07b !important;
  --collapse-icon-color-collapsed: #00ff9c !important;
  --color-accent: hsl(140, 100%, 50%) !important;
  --color-accent-1: #00ffaa !important;
  --color-accent-2: #00ff41 !important;
  --color-accent-hsl: 140, 100%, 50% !important;
  --color-border: #0a7a3f !important;
  --color-border-strong: #00ff41 !important;
  --color-outline: #00ffaa !important;
  --dark: #00ff41 !important;
  --darkgray: #00ff41 !important;
  --divider-color: #0b2a1a !important;
  --divider-color-hover: #00ff41 !important;
  --dropdown-background: #0a2418 !important;
  --dropdown-background-hover: #133222 !important;
  --embed-block-shadow-hover: 0 0 0 1px #0b2a1a, inset 0 0 0 1px #0b2a1a !important;
  --embed-border-start: 2px solid #00ff41 !important;
  --fast: 120ms !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --flair-background: #0a2418 !important;
  --flair-color: #00ff41 !important;
  --footnote-divider-color: #0b2a1a !important;
  --footnote-id-color: #7affe0 !important;
  --footnote-id-color-no-occurrences: #25b07b !important;
  --footnote-input-background-active: #103422 !important;
  --glow-1: #00ffaa !important;
  --glow-2: #00ff41 !important;
  --graph-line: #007a3f !important;
  --graph-node: #00ff41 !important;
  --graph-node-focus: #00ffaa !important;
  --graph-node-focused: #00ff9c !important;
  --graph-node-unresolved: #25b07b !important;
  --graph-text: #00ff9c !important;
  --gray: #7affe0 !important;
  --heading-formatting: #25b07b !important;
  --highlight: #103422 !important;
  --hr-color: #0b2a1a !important;
  --icon-color: #7affe0 !important;
  --icon-color-active: #00ff9c !important;
  --icon-color-focused: #00ff41 !important;
  --icon-color-hover: #7affe0 !important;
  --input-date-separator: #25b07b !important;
  --input-placeholder-color: #25b07b !important;
  --interactive-accent: #00ff41 !important;
  --interactive-accent-hover: #00ffaa !important;
  --interactive-accent-hsl: 140, 100%, 50% !important;
  --interactive-hover: #133222 !important;
  --interactive-normal: #0a2418 !important;
  --light: #000000 !important;
  --lightgray: #06160d !important;
  --link-color: #00ff9c !important;
  --link-color-hover: #00ff41 !important;
  --link-external-color: #00ff9c !important;
  --link-external-color-hover: #00ff41 !important;
  --link-unresolved-color: #00ff9c !important;
  --link-unresolved-decoration-color: hsla(140, 100%, 50%, 0.3) !important;
  --list-marker-color: #25b07b !important;
  --list-marker-color-collapsed: #00ff9c !important;
  --list-marker-color-hover: #7affe0 !important;
  --med: 180ms !important;
  --menu-background: #06160d !important;
  --metadata-border-color: #0b2a1a !important;
  --metadata-divider-color: #0b2a1a !important;
  --metadata-input-background-active: #103422 !important;
  --metadata-input-text-color: #00ff41 !important;
  --metadata-label-background-active: #103422 !important;
  --metadata-label-text-color: #7affe0 !important;
  --metadata-label-text-color-hover: #7affe0 !important;
  --metadata-property-background-active: #103422 !important;
  --modal-background: #000000 !important;
  --nav-collapse-icon-color: #25b07b !important;
  --nav-collapse-icon-color-collapsed: #25b07b !important;
  --nav-heading-color: #00ff41 !important;
  --nav-heading-color-collapsed: #25b07b !important;
  --nav-heading-color-collapsed-hover: #7affe0 !important;
  --nav-heading-color-hover: #00ff41 !important;
  --nav-item-background-active: #103422 !important;
  --nav-item-background-hover: #103422 !important;
  --nav-item-background-selected: hsla(140, 100%, 50%, 0.15) !important;
  --nav-item-color: #7affe0 !important;
  --nav-item-color-active: #00ff41 !important;
  --nav-item-color-highlighted: #00ff9c !important;
  --nav-item-color-hover: #00ff41 !important;
  --nav-item-color-selected: #00ff41 !important;
  --nav-tag-color: #25b07b !important;
  --nav-tag-color-active: #7affe0 !important;
  --nav-tag-color-hover: #7affe0 !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-shadow: 0 0 0 1px #0b2a1a !important;
  --pdf-sidebar-background: #000000 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #0b2a1a !important;
  --pill-border-color: #0b2a1a !important;
  --pill-color: #7affe0 !important;
  --pill-color-hover: #00ff41 !important;
  --pill-color-remove: #25b07b !important;
  --pill-color-remove-hover: #00ff9c !important;
  --prompt-background: #000000 !important;
  --raised-background: color-mix(in srgb, #0a2418 65%, transparent) linear-gradient(#0a2418, color-mix(in srgb, #0a2418 65%, transparent)) !important;
  --ribbon-background: #06160d !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-bg: #0d0208 !important;
  --scrollbar-thumb-bg: #003b00 !important;
  --scrollbar-thumb-hover-bg: #00ff41 !important;
  --search-clear-button-color: #7affe0 !important;
  --search-icon-color: #7affe0 !important;
  --search-result-background: #000000 !important;
  --secondary: #00ff9c !important;
  --setting-group-heading-color: #00ff41 !important;
  --setting-items-background: #030d06 !important;
  --setting-items-border-color: #0b2a1a !important;
  --shadow-1: 0 0 0 1px #08351f inset, 0 0 12px rgba(0, 255, 170, 0.08) !important;
  --shadow-2: 0 0 0 1px #0a5230 inset, 0 0 22px rgba(0, 255, 65, 0.1) !important;
  --slider-track-background: #0b2a1a !important;
  --slow: 260ms !important;
  --status-bar-background: #06160d !important;
  --status-bar-border-color: #0b2a1a !important;
  --status-bar-text-color: #7affe0 !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #06160d !important;
  --tab-outline-color: #0b2a1a !important;
  --tab-switcher-background: #06160d !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #06160d, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(140, 100%, 50%) !important;
  --tab-text-color: #25b07b !important;
  --tab-text-color-active: #7affe0 !important;
  --tab-text-color-focused: #7affe0 !important;
  --tab-text-color-focused-active: #7affe0 !important;
  --tab-text-color-focused-active-current: #00ff41 !important;
  --tab-text-color-focused-highlighted: #00ff9c !important;
  --table-add-button-border-color: #0b2a1a !important;
  --table-border-color: #0b2a1a !important;
  --table-drag-handle-background-active: #00ff41 !important;
  --table-drag-handle-color: #25b07b !important;
  --table-drag-handle-color-active: #001e0f !important;
  --table-header-border-color: #0b2a1a !important;
  --table-header-color: #00ff41 !important;
  --table-selection: hsla(140, 100%, 50%, 0.1) !important;
  --table-selection-border-color: #00ff41 !important;
  --tag-background: #042416 !important;
  --tag-background-hover: hsla(140, 100%, 50%, 0.2) !important;
  --tag-border: #00ffaa !important;
  --tag-border-color: hsla(140, 100%, 50%, 0.15) !important;
  --tag-border-color-hover: hsla(140, 100%, 50%, 0.15) !important;
  --tag-color: #00ff9c !important;
  --tag-color-hover: #00ff9c !important;
  --tag-foreground: #00ff41 !important;
  --tertiary: #00ff41 !important;
  --text-accent: #00ff9c !important;
  --text-accent-hover: #00ff41 !important;
  --text-error: #ff5a5a !important;
  --text-faint: #25b07b !important;
  --text-muted: #7affe0 !important;
  --text-normal: #00ff41 !important;
  --text-on-accent: #001e0f !important;
  --text-selection: #00ffaa !important;
  --text-success: #7dff93 !important;
  --text-warning: #ffd166 !important;
  --textHighlight: #103422 !important;
  --titlebar-background: #06160d !important;
  --titlebar-background-focused: #0a2015 !important;
  --titlebar-border-color: #0b2a1a !important;
  --titlebar-text-color: #7affe0 !important;
  --titlebar-text-color-focused: #00ff41 !important;
  --vault-profile-color: #00ff41 !important;
  --vault-profile-color-hover: #00ff41 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(6, 22, 13);
  color: rgb(0, 255, 65);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(0, 255, 65);
}

html body .bases-table {
  border-color: rgb(0, 255, 170);
}

html body .bases-table thead th {
  background-color: rgb(10, 32, 21);
  border-color: rgb(11, 42, 26);
  color: rgb(0, 255, 156);
}

html body .canvas-node {
  background-color: rgb(6, 22, 13);
  border-color: rgb(10, 122, 63);
  border-radius: 8px;
  border-width: 1px;
  box-shadow: rgb(8, 53, 31) 0px 0px 0px 1px inset, rgba(0, 255, 170, 0.08) 0px 0px 12px 0px;
}

html body .canvas-node-content {
  color: rgb(0, 255, 65);
}

html body .canvas-node-file {
  color: rgb(0, 255, 65);
}

html body .canvas-node-group {
  background-color: rgb(6, 22, 13);
  border-color: rgb(10, 122, 63);
  border-style: solid;
  border-width: 1px;
}

html body .canvas-sidebar {
  background-color: rgb(6, 22, 13);
  border-color: rgb(0, 255, 65);
}

html body .note-properties {
  background-color: rgb(6, 22, 13);
  border-color: rgb(11, 42, 26);
  border-radius: 8px;
}

html body .note-properties-key {
  color: rgb(0, 255, 156);
  font-weight: 600;
}

html body .note-properties-row {
  border-color: rgb(122, 255, 224) rgb(122, 255, 224) rgb(11, 42, 26);
}

html body .note-properties-tags {
  background-color: rgb(4, 36, 22);
  color: rgb(0, 255, 156);
}

html body .note-properties-value {
  color: rgb(122, 255, 224);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(6, 22, 13);
  color: rgb(0, 255, 65);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(11, 42, 26);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(6, 22, 13);
  border-left-color: rgb(11, 42, 26);
  color: rgb(0, 255, 65);
}

html body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(0, 255, 65);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration-color: rgb(0, 255, 65);
}

html body .page article p > em, html em {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration-color: rgb(0, 255, 65);
}

html body .page article p > i, html i {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration-color: rgb(0, 255, 65);
}

html body .page article p > strong, html strong {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration-color: rgb(0, 255, 65);
}

html body .text-highlight {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration-color: rgb(0, 255, 65);
}

html body del {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration-color: rgb(0, 255, 65);
}

html body h1.article-title {
  color: rgb(0, 255, 65);
}

html body li.task-list-item input[type="checkbox"] {
  background-color: rgb(7, 20, 12);
  border-color: rgb(10, 122, 63);
  border-width: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 255, 65);
  border-color: rgb(0, 255, 65);
}

html body p {
  color: rgb(122, 255, 224);
  outline: rgb(122, 255, 224) none 0px;
  text-decoration-color: rgb(122, 255, 224);
}`,
    links: `html body a.external, html footer a {
  color: rgb(0, 255, 156);
  outline: rgb(0, 255, 156) none 0px;
  text-decoration-color: rgb(0, 255, 156);
  transition: color 0.12s, text-shadow 0.12s, background 0.12s;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 255, 156);
  outline: rgb(0, 255, 156) none 0px;
  text-decoration-color: rgb(0, 255, 156);
}

html body a.internal.broken {
  color: rgb(0, 255, 156);
  outline: rgb(0, 255, 156) none 0px;
  text-decoration: underline rgba(0, 255, 85, 0.3);
  text-decoration-color: rgba(0, 255, 85, 0.3);
}`,
    lists: `html body dd {
  color: rgb(0, 255, 65);
}

html body dt {
  color: rgb(0, 255, 65);
}

html body ol > li {
  color: rgb(0, 255, 65);
}

html body ol.overflow {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

html body ul > li {
  color: rgb(0, 255, 65);
}

html body ul.overflow {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(37, 176, 123);
}

html body blockquote {
  background-color: oklab(0.252059 -0.043835 0.0183032);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

html body table {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(0, 255, 170);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 255, 170);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(0, 255, 170);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(0, 255, 170);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(0, 255, 65);
  width: 662px;
}

html body tbody tr:nth-child(even) {
  background-color: rgb(3, 13, 6);
}

html body td {
  border-bottom-color: rgb(11, 42, 26);
  border-left-color: rgb(11, 42, 26);
  border-right-color: rgb(11, 42, 26);
  border-top-color: rgb(11, 42, 26);
  color: rgb(0, 255, 65);
  padding-bottom: 8.8px;
  padding-left: 11.2px;
  padding-right: 11.2px;
  padding-top: 8.8px;
}

html body th {
  background-color: rgb(10, 32, 21);
  border-bottom-color: rgb(11, 42, 26);
  border-bottom-width: 2px;
  border-left-color: rgb(11, 42, 26);
  border-right-color: rgb(11, 42, 26);
  border-top-color: rgb(11, 42, 26);
  color: rgb(0, 255, 156);
  padding-bottom: 9.6px;
  padding-left: 11.2px;
  padding-right: 11.2px;
  padding-top: 9.6px;
}

html body thead {
  border-bottom-color: rgb(0, 255, 170);
  border-left-color: rgb(0, 255, 170);
  border-right-color: rgb(0, 255, 170);
  border-top-color: rgb(0, 255, 170);
}

html body tr {
  border-bottom-color: rgb(0, 255, 170);
  border-left-color: rgb(0, 255, 170);
  border-right-color: rgb(0, 255, 170);
  border-top-color: rgb(0, 255, 170);
}`,
    code: `html body code {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
  color: rgb(0, 255, 65);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(13, 2, 8);
  border-bottom-color: rgb(0, 255, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 170);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(13, 2, 8);
  border-bottom-color: rgb(0, 255, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 170);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(0, 255, 65);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(13, 2, 8);
  border-bottom-color: rgb(0, 255, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 170);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}

html body pre:has(> code) {
  background-color: rgb(13, 2, 8);
  border-bottom-color: rgb(0, 255, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 170);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

html body figcaption {
  color: rgb(0, 255, 65);
}

html body figure {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

html body img {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

html body video {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(10, 122, 63);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-style: solid;
  border-top-width: 1px;
}

html body .footnotes {
  border-top-color: rgb(0, 255, 65);
  color: rgb(0, 255, 65);
}

html body .transclude {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(10, 122, 63);
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html body .transclude-inner {
  border-bottom-color: rgb(0, 255, 65);
  border-bottom-style: solid;
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-right-style: solid;
  border-top-color: rgb(0, 255, 65);
  border-top-style: solid;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-width: 2px;
  border-left-color: rgb(10, 122, 63);
  border-left-width: 2px;
  border-right-color: rgb(10, 122, 63);
  border-right-width: 2px;
  border-top-color: rgb(10, 122, 63);
  border-top-width: 2px;
  width: 14.6562px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(0, 255, 156);
  border-left-color: rgb(0, 255, 156);
  border-right-color: rgb(0, 255, 156);
  border-top-color: rgb(0, 255, 156);
  color: rgb(0, 255, 156);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 255, 156);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 90, 90);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(125, 255, 147);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: oklab(0.252059 -0.043835 0.0183032);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 209, 102);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
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
  background-color: rgb(7, 20, 12);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(10, 122, 63);
  border-right-color: rgb(10, 122, 63);
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(0, 255, 65);
}

html body .search > .search-container > .search-space {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(10, 122, 63);
  border-right-color: rgb(10, 122, 63);
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgb(10, 82, 48) 0px 0px 0px 1px inset, rgba(0, 255, 65, 0.1) 0px 0px 22px 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration-color: rgb(0, 255, 65);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 255, 156);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 255, 156);
  border-left-color: rgb(0, 255, 156);
  border-right-color: rgb(0, 255, 156);
  border-top-color: rgb(0, 255, 156);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(0, 255, 156);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(16, 52, 34);
  color: rgb(0, 255, 156);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(10, 122, 63);
  border-right-color: rgb(10, 122, 63);
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(7, 20, 12);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(10, 122, 63);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(8, 53, 31) 0px 0px 0px 1px inset, rgba(0, 255, 170, 0.08) 0px 0px 12px 0px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(16, 52, 34);
  border-bottom-color: rgb(0, 255, 156);
  border-left-color: rgb(0, 255, 156);
  border-right-color: rgb(0, 255, 156);
  border-top-color: rgb(0, 255, 156);
  color: rgb(0, 255, 156);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(16, 52, 34);
  color: rgb(0, 255, 156);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(4, 36, 22);
  border-bottom-color: rgba(0, 255, 85, 0.15);
  border-left-color: rgba(0, 255, 85, 0.15);
  border-right-color: rgba(0, 255, 85, 0.15);
  border-top-color: rgba(0, 255, 85, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(0, 255, 156);
}

html body h1 {
  color: rgba(0, 0, 0, 0);
  text-shadow: rgb(0, 255, 170) 0px 0px 7.75052px, rgba(0, 255, 65, 0.145) 0px 0px 4.08456px;
}

html body h2 {
  color: rgb(0, 255, 65);
}

html body h2.page-title, html h2.page-title a {
  color: rgba(0, 0, 0, 0);
  text-shadow: rgb(0, 255, 170) 0px 0px 7.75091px, rgba(0, 255, 65, 0.145) 0px 0px 4.08545px;
}

html body h3 {
  color: rgb(0, 255, 170);
}

html body h4 {
  color: rgb(0, 255, 65);
}

html body h5 {
  color: rgb(37, 176, 123);
}

html body h6 {
  color: rgb(37, 176, 123);
}

html body hr {
  border-bottom-color: rgb(11, 42, 26);
  border-left-color: rgb(11, 42, 26);
  border-right-color: rgb(11, 42, 26);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 17.6px;
  padding-right: 17.6px;
  padding-top: 16px;
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
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
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
    explorer: `html body .explorer {
  background-color: rgb(6, 22, 13);
}

html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 255, 65);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 255, 65);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(0, 255, 65);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(10, 36, 24);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(10, 122, 63);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 255, 65);
}`,
    footer: `html body footer {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(11, 42, 26);
  border-left-color: rgb(11, 42, 26);
  border-right-color: rgb(11, 42, 26);
  border-top-color: rgb(11, 42, 26);
  color: rgb(37, 176, 123);
}

html body footer ul li a {
  color: rgb(37, 176, 123);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(0, 255, 65);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
  color: rgb(0, 255, 65);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 255, 65);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 255, 65);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

html body li.section-li > .section .meta {
  color: rgb(0, 255, 65);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 255, 65);
}

html body ul.section-ul {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}`,
    darkmode: `html body .darkmode {
  background-color: rgb(10, 36, 24);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(10, 122, 63);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 255, 65);
}

html body .darkmode svg {
  color: rgb(0, 255, 65);
  stroke: rgb(0, 255, 65);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(122, 255, 224);
  border-left-color: rgb(122, 255, 224);
  border-right-color: rgb(122, 255, 224);
  border-top-color: rgb(122, 255, 224);
  color: rgb(122, 255, 224);
}

html body .breadcrumb-element p {
  color: rgb(37, 176, 123);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
  color: rgb(0, 255, 65);
}

html body .metadata {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(11, 42, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(11, 42, 26);
  border-left-width: 1px;
  border-right-color: rgb(11, 42, 26);
  border-right-width: 1px;
  border-top-color: rgb(11, 42, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(122, 255, 224);
}

html body .metadata-properties {
  border-bottom-color: rgb(122, 255, 224);
  border-left-color: rgb(122, 255, 224);
  border-right-color: rgb(122, 255, 224);
  border-top-color: rgb(122, 255, 224);
  color: rgb(122, 255, 224);
}

html body .navigation-progress {
  background-color: rgb(6, 22, 13);
}

html body .page-header h2.page-title {
  color: rgb(0, 255, 65);
}

html body abbr {
  color: rgb(0, 255, 65);
}

html body details {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

html body input[type=text] {
  background-color: rgb(7, 20, 12);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(10, 122, 63);
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(0, 255, 65);
}

html body kbd {
  background-color: rgb(13, 2, 8);
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
  color: rgb(0, 255, 65);
}

html body progress {
  background-color: rgb(11, 42, 26);
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

html body sub {
  color: rgb(0, 255, 65);
}

html body summary {
  color: rgb(0, 255, 65);
}

html body sup {
  color: rgb(0, 255, 65);
}

html body ul.tags > li {
  background-color: rgb(4, 36, 22);
  border-bottom-color: rgba(0, 255, 85, 0.15);
  border-left-color: rgba(0, 255, 85, 0.15);
  border-right-color: rgba(0, 255, 85, 0.15);
  border-top-color: rgba(0, 255, 85, 0.15);
  color: rgb(0, 255, 65);
}`,
  },
  light: {},
  extras: `/* Matrix digital rain overlay */
.workspace::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 255, 65, 0.03) 0px,
    transparent 2px,
    transparent 4px
  );
  pointer-events: none;
  z-index: 1000;
  animation: matrix-rain-fall 0.5s linear infinite;
}

@keyframes matrix-rain-fall {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(4px);
  }
}

/* Glowing text effect for headings */
@keyframes matrix-glow {
  0% {
    text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
  }
  100% {
    text-shadow:
      0 0 20px rgba(0, 255, 65, 0.8),
      0 0 40px rgba(0, 255, 65, 0.4);
  }
}

@keyframes matrix-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}

@keyframes matrix-sheen {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

.inline-title,
h1,
h2,
h3 {
  animation:
    matrix-sheen 6s linear infinite,
    matrix-pulse 2.6s ease-in-out infinite,
    matrix-glow 3.2s ease-in-out infinite alternate;
}
`,
};
