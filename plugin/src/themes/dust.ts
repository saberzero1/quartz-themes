import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dust",
    modes: ["dark"],
    variations: [],
    fonts: ["icons/material-icons", "fira-code"],
  },
  dark: {
    base: `:root:root {
  --accent-d: 55% !important;
  --accent-h: 219 !important;
  --accent-l: 58% !important;
  --accent-s: 56% !important;
  --aqua: #56b6c2 !important;
  --background-accent: #000 !important;
  --background-modifier-active-hover: hsla(219, 56%, 58%, 0.1) !important;
  --background-modifier-border: #434c5e !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #539126 !important;
  --background-primary: #2e3440 !important;
  --background-primary-alt: #272c38 !important;
  --background-secondary: #3b4252 !important;
  --background-secondary-alt: #434c5e !important;
  --bases-cards-background: #2e3440 !important;
  --bases-cards-cover-background: #272c38 !important;
  --bases-cards-shadow: 0 0 0 1px #434c5e !important;
  --bases-embed-border-color: #434c5e !important;
  --bases-group-heading-property-color: #888 !important;
  --bases-table-border-color: #5c6370 !important;
  --bases-table-cell-background-active: #2e3440 !important;
  --bases-table-cell-background-disabled: #272c38 !important;
  --bases-table-cell-background-selected: hsla(219, 56%, 58%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(219, 56%, 58%) !important;
  --bases-table-group-background: #272c38 !important;
  --bases-table-header-background: #2e3440 !important;
  --bases-table-header-color: #888 !important;
  --bases-table-summary-background: #2e3440 !important;
  --blockquote-border-color: hsl(219, 56%, 58%) !important;
  --blue: #61afef !important;
  --blur-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent)) !important;
  --brighter-graph-line: hsl(219, 56%, 65%) !important;
  --canvas-background: #2e3440 !important;
  --canvas-card-label-color: rgb(150, 155, 170) !important;
  --caret-color: #dcddde !important;
  --checkbox-border-color: rgb(150, 155, 170) !important;
  --checkbox-border-color-hover: #888 !important;
  --checkbox-color: hsl(219, 56%, 58%) !important;
  --checkbox-color-hover: hsl(216, 57.12%, 66.7%) !important;
  --checkbox-marker-color: #2e3440 !important;
  --checklist-done-color: #888 !important;
  --code-background: #272c38 !important;
  --code-border-color: #434c5e !important;
  --code-comment: rgb(150, 155, 170) !important;
  --code-normal: #dcddde !important;
  --code-punctuation: #888 !important;
  --codeFont: "Fira Code", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(150, 155, 170) !important;
  --collapse-icon-color-collapsed: hsl(216, 57.12%, 66.7%) !important;
  --color-accent: hsl(219, 56%, 58%) !important;
  --color-accent-1: hsl(216, 57.12%, 66.7%) !important;
  --color-accent-2: hsl(214, 58.8%, 74.82%) !important;
  --color-accent-hsl: 219, 56%, 58% !important;
  --comment: #6272a4 !important;
  --cyan: #8be9fd !important;
  --dark: #dcddde !important;
  --darkgray: #dcddde !important;
  --divider-color: #434c5e !important;
  --divider-color-hover: hsl(219, 56%, 58%) !important;
  --dropdown-background-hover: #353b47 !important;
  --embed-block-shadow-hover: 0 0 0 1px #434c5e, inset 0 0 0 1px #434c5e !important;
  --embed-border-start: 2px solid hsl(219, 56%, 58%) !important;
  --file-header-background: #2e3440 !important;
  --file-header-background-focused: #2e3440 !important;
  --flair-background: #20242b !important;
  --flair-color: #dcddde !important;
  --font-monospace: "Fira Code", "Source Code Pro", monospace !important;
  --footnote-divider-color: #434c5e !important;
  --footnote-id-color: #888 !important;
  --footnote-id-color-no-occurrences: rgb(150, 155, 170) !important;
  --graph-line: hsl(219, 56%, 65%) !important;
  --graph-node: #888 !important;
  --graph-node-focused: hsl(216, 57.12%, 66.7%) !important;
  --graph-node-unresolved: rgb(150, 155, 170) !important;
  --graph-text: #dcddde !important;
  --gray: #888 !important;
  --gray-1: #5c6370 !important;
  --gray-2: #abb2bf !important;
  --green: #50fa7b !important;
  --heading-formatting: rgb(150, 155, 170) !important;
  --highlight: rgba(189, 195, 199, 0.1) !important;
  --hr-color: #434c5e !important;
  --icon-color: #888 !important;
  --icon-color-active: hsl(216, 57.12%, 66.7%) !important;
  --icon-color-focused: #dcddde !important;
  --icon-color-hover: #888 !important;
  --input-date-separator: rgb(150, 155, 170) !important;
  --input-placeholder-color: rgb(150, 155, 170) !important;
  --interactive-accent: hsl(219, 56%, 58%) !important;
  --interactive-accent-hover: hsl(216, 57.12%, 66.7%) !important;
  --interactive-accent-hsl: 219, 56%, 58% !important;
  --interactive-hover: #353b47 !important;
  --interactive-normal: #20242b !important;
  --light: #2e3440 !important;
  --lightgray: #3b4252 !important;
  --link-color: hsl(216, 57.12%, 66.7%) !important;
  --link-color-hover: hsl(
    207,
    97%,
    70%
  ) !important;
  --link-external-color: hsl(216, 57.12%, 66.7%) !important;
  --link-external-color-hover: hsl(
    207,
    97%,
    70%
  ) !important;
  --link-unresolved-color: hsl(216, 57.12%, 66.7%) !important;
  --link-unresolved-decoration-color: hsla(219, 56%, 58%, 0.3) !important;
  --list-marker-color: rgb(150, 155, 170) !important;
  --list-marker-color-collapsed: hsl(216, 57.12%, 66.7%) !important;
  --list-marker-color-hover: #888 !important;
  --menu-background: #3b4252 !important;
  --metadata-border-color: #434c5e !important;
  --metadata-divider-color: #434c5e !important;
  --metadata-input-text-color: #dcddde !important;
  --metadata-label-text-color: #888 !important;
  --metadata-label-text-color-hover: #888 !important;
  --modal-background: #2e3440 !important;
  --nav-collapse-icon-color: rgb(150, 155, 170) !important;
  --nav-collapse-icon-color-collapsed: rgb(150, 155, 170) !important;
  --nav-heading-color: #dcddde !important;
  --nav-heading-color-collapsed: rgb(150, 155, 170) !important;
  --nav-heading-color-collapsed-hover: #888 !important;
  --nav-heading-color-hover: #dcddde !important;
  --nav-item-background-selected: hsla(219, 56%, 58%, 0.15) !important;
  --nav-item-color: #dcddde !important;
  --nav-item-color-active: #dcddde !important;
  --nav-item-color-highlighted: hsl(216, 57.12%, 66.7%) !important;
  --nav-item-color-hover: #dcddde !important;
  --nav-item-color-selected: #dcddde !important;
  --nav-tag-color: rgb(150, 155, 170) !important;
  --nav-tag-color-active: #888 !important;
  --nav-tag-color-hover: #888 !important;
  --panel-border-color: #18191e !important;
  --pdf-background: #2e3440 !important;
  --pdf-page-background: #2e3440 !important;
  --pdf-shadow: 0 0 0 1px #434c5e !important;
  --pdf-sidebar-background: #2e3440 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #434c5e !important;
  --pill-border-color: #434c5e !important;
  --pill-color: #888 !important;
  --pill-color-hover: #dcddde !important;
  --pill-color-remove: rgb(150, 155, 170) !important;
  --pill-color-remove-hover: hsl(216, 57.12%, 66.7%) !important;
  --pink: #ff79c6 !important;
  --pink-two: #ff77cc !important;
  --prompt-background: #2e3440 !important;
  --purple: #c678dd !important;
  --purple-code: #bd93f9 !important;
  --raised-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent)) !important;
  --red: #e06c75 !important;
  --ribbon-background: #3b4252 !important;
  --ribbon-background-collapsed: #2e3440 !important;
  --search-clear-button-color: #888 !important;
  --search-icon-color: #888 !important;
  --search-result-background: #2e3440 !important;
  --secondary: hsl(216, 57.12%, 66.7%) !important;
  --setting-group-heading-color: #dcddde !important;
  --setting-items-background: #272c38 !important;
  --setting-items-border-color: #434c5e !important;
  --slider-track-background: #434c5e !important;
  --status-bar-background: #3b4252 !important;
  --status-bar-border-color: #434c5e !important;
  --status-bar-text-color: #888 !important;
  --suggestion-background: #2e3440 !important;
  --tab-background-active: #2e3440 !important;
  --tab-container-background: #3b4252 !important;
  --tab-divider-color: rgba(255, 255, 255, 0.15) !important;
  --tab-outline-color: #434c5e !important;
  --tab-switcher-background: #3b4252 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #3b4252, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(219, 56%, 58%) !important;
  --tab-text-color: rgb(150, 155, 170) !important;
  --tab-text-color-active: #888 !important;
  --tab-text-color-focused: #888 !important;
  --tab-text-color-focused-active: #888 !important;
  --tab-text-color-focused-active-current: #dcddde !important;
  --tab-text-color-focused-highlighted: hsl(216, 57.12%, 66.7%) !important;
  --table-add-button-border-color: #434c5e !important;
  --table-border-color: #5c6370 !important;
  --table-drag-handle-background-active: hsl(219, 56%, 58%) !important;
  --table-drag-handle-color: rgb(150, 155, 170) !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-background: hsl(220, 16%, 16%) !important;
  --table-header-background-hover: #4c566a !important;
  --table-header-border-color: #5c6370 !important;
  --table-header-color: #dcddde !important;
  --table-row-even-background: hsl(220, 16%, 20%) !important;
  --table-selection: hsla(219, 56%, 58%, 0.1) !important;
  --table-selection-border-color: hsl(219, 56%, 58%) !important;
  --tag-background: hsla(219, 56%, 58%, 0.1) !important;
  --tag-background-hover: hsla(219, 56%, 58%, 0.2) !important;
  --tag-border-color: hsla(219, 56%, 58%, 0.15) !important;
  --tag-border-color-hover: hsla(219, 56%, 58%, 0.15) !important;
  --tag-color: hsl(216, 57.12%, 66.7%) !important;
  --tag-color-hover: hsl(216, 57.12%, 66.7%) !important;
  --tertiary: hsl(
    207,
    97%,
    70%
  ) !important;
  --text-accent: hsl(216, 57.12%, 66.7%) !important;
  --text-accent-color: hsl(
    207,
    82%,
    66%
  ) !important;
  --text-accent-h: 207 !important;
  --text-accent-hover: hsl(
    207,
    97%,
    70%
  ) !important;
  --text-accent-hover-color: hsl(
    207,
    97%,
    70%
  ) !important;
  --text-accent-hover-h: 207 !important;
  --text-accent-hover-l: 70% !important;
  --text-accent-hover-s: 97% !important;
  --text-accent-l: 66% !important;
  --text-accent-s: 82% !important;
  --text-error: #e16d76 !important;
  --text-error-hover: #c9626a !important;
  --text-faint: rgb(150, 155, 170) !important;
  --text-highlight-bg: rgba(189, 195, 199, 0.1) !important;
  --text-muted: #888 !important;
  --text-normal: #dcddde !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(0, 122, 255, 0.2) !important;
  --textHighlight: rgba(189, 195, 199, 0.1) !important;
  --titlebar-background: #3b4252 !important;
  --titlebar-background-focused: #434c5e !important;
  --titlebar-border-color: #434c5e !important;
  --titlebar-text-color: #888 !important;
  --titlebar-text-color-focused: #dcddde !important;
  --vault-profile-color: #dcddde !important;
  --vault-profile-color-hover: #dcddde !important;
  --yellow: #e5c07b !important;
  --yellow-code: #f1fa8c !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(59, 66, 82);
  color: rgb(220, 221, 222);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(46, 52, 64);
  color: rgb(220, 221, 222);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(59, 66, 82);
  color: rgb(220, 221, 222);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(67, 76, 94);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(59, 66, 82);
  border-left-color: rgb(67, 76, 94);
  color: rgb(220, 221, 222);
}

html body div#quartz-root {
  background-color: rgb(46, 52, 64);
  color: rgb(220, 221, 222);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body .page article p > em, html em {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body .page article p > i, html i {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body .page article p > strong, html strong {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body .text-highlight {
  background-color: rgba(189, 195, 199, 0.1);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body p {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html body a.external, html footer a {
  color: rgb(122, 160, 219);
  outline: rgb(122, 160, 219) none 0px;
  text-decoration-color: rgb(122, 160, 219);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(122, 160, 219);
  outline: rgb(122, 160, 219) none 0px;
  text-decoration-color: rgb(122, 160, 219);
}

html body a.internal.broken {
  color: rgb(122, 160, 219);
  outline: rgb(122, 160, 219) none 0px;
  text-decoration: rgba(88, 130, 208, 0.3);
  text-decoration-color: rgba(88, 130, 208, 0.3);
}`,
    lists: `html body dd {
  color: rgb(220, 221, 222);
}

html body dt {
  color: rgb(220, 221, 222);
}

html body ol > li {
  color: rgb(220, 221, 222);
}

html body ol.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body ul > li {
  color: rgb(220, 221, 222);
}

html body ul.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(150, 155, 170);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body table {
  color: rgb(220, 221, 222);
}

html body tbody tr:nth-child(even) {
  background-color: rgb(32, 36, 43);
}

html body td {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(220, 221, 222);
}

html body th {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(220, 221, 222);
}

html body tr {
  background-color: rgb(34, 39, 47);
}`,
    code: `html body code {
  border-bottom-color: rgb(200, 211, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(200, 211, 245);
  border-right-color: rgb(200, 211, 245);
  border-top-color: rgb(200, 211, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(200, 211, 245);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(39, 44, 56);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(39, 44, 56);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(220, 221, 222);
}

html body pre > code > [data-line] {
  border-left-color: rgb(139, 233, 253);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(139, 233, 253);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(139, 233, 253);
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(39, 44, 56);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  padding-bottom: 16px;
  padding-top: 16px;
}

html body pre:has(> code) {
  background-color: rgb(39, 44, 56);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body figcaption {
  color: rgb(220, 221, 222);
}

html body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(39, 44, 56);
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html body .transclude {
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 76, 94);
  border-left-width: 5px;
  border-right-color: rgb(67, 76, 94);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  margin-left: 30px;
  margin-right: 30px;
}

html body .transclude-inner {
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 76, 94);
  border-left-width: 5px;
  border-right-color: rgb(67, 76, 94);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  margin-left: 30px;
  margin-right: 30px;
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-bottom: 2px;
  margin-right: 4px;
  width: 17.3281px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(255, 255, 255);
}`,
    search: `html body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(220, 221, 222);
}

html body .search > .search-container > .search-space {
  background-color: rgb(46, 52, 64);
}

html body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 221, 222);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(220, 221, 222);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(220, 221, 222);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(220, 221, 222);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(88, 130, 208, 0.1);
  border-bottom-color: rgba(88, 130, 208, 0.15);
  border-left-color: rgba(88, 130, 208, 0.15);
  border-right-color: rgba(88, 130, 208, 0.15);
  border-top-color: rgba(88, 130, 208, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(122, 160, 219);
}

html body h1 {
  color: rgb(255, 119, 204);
}

html body h2 {
  color: rgb(189, 147, 249);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(220, 221, 222);
}

html body h3 {
  color: rgb(80, 250, 123);
}

html body h4 {
  color: rgb(241, 250, 140);
}

html body h5 {
  color: rgb(139, 233, 253);
}

html body h6 {
  color: rgb(229, 192, 123);
}

html body hr {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html body ::-webkit-scrollbar-track {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(220, 221, 222);
  font-weight: 700;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(220, 221, 222);
  font-weight: 700;
}`,
    toc: `html body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `html body footer {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(24, 25, 30);
  border-bottom-width: 1px;
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-right-width: 1px;
  border-top-color: rgb(24, 25, 30);
  color: rgb(150, 155, 170);
}

html body footer ul li a {
  color: rgb(150, 155, 170);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(220, 221, 222);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(220, 221, 222);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(220, 221, 222);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body li.section-li > .section .meta {
  color: rgb(220, 221, 222);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(220, 221, 222);
}

html body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html body .breadcrumb-element p {
  color: rgb(150, 155, 170);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html body .metadata {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(136, 136, 136);
}

html body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html body .navigation-progress {
  background-color: rgb(59, 66, 82);
}

html body .page-header h2.page-title {
  color: rgb(220, 221, 222);
}

html body abbr {
  color: rgb(220, 221, 222);
}

html body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html body kbd {
  background-color: rgb(39, 44, 56);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body sub {
  color: rgb(220, 221, 222);
}

html body summary {
  color: rgb(220, 221, 222);
}

html body sup {
  color: rgb(220, 221, 222);
}`,
  },
  light: {},
};
