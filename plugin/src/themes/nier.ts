import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "nier", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 219 !important;
  --accent-l: 55% !important;
  --accent-s: 56% !important;
  --aqua: #56b6c2 !important;
  --background-accent: #000 !important;
  --background-modifier-active-hover: hsla(219, 56%, 55%, 0.1) !important;
  --background-modifier-border: #424958 !important;
  --background-modifier-border-focus: #aea395 !important;
  --background-modifier-border-hover: #aea395 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-hover: hsla(219, 21%, 55%, 0.06) !important;
  --background-modifier-message: #ddd8c7 !important;
  --background-modifier-success: #539126 !important;
  --background-primary: #ddd8c7 !important;
  --background-primary-alt: rgba(172, 167, 147, 255) !important;
  --background-secondary: #afaa96 !important;
  --background-secondary-alt: #4a473e !important;
  --bases-cards-background: #ddd8c7 !important;
  --bases-cards-cover-background: rgba(172, 167, 147, 255) !important;
  --bases-cards-shadow: 0 0 0 1px #424958 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #aea395 !important;
  --bases-embed-border-color: #424958 !important;
  --bases-group-heading-property-color: #696868 !important;
  --bases-table-border-color: #424958 !important;
  --bases-table-cell-background-active: #ddd8c7 !important;
  --bases-table-cell-background-disabled: rgba(172, 167, 147, 255) !important;
  --bases-table-cell-background-selected: hsla(219, 56%, 55%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #aea395 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #6e695b !important;
  --bases-table-group-background: rgba(172, 167, 147, 255) !important;
  --bases-table-header-background: #ddd8c7 !important;
  --bases-table-header-background-hover: hsla(219, 21%, 55%, 0.06) !important;
  --bases-table-header-color: #696868 !important;
  --bases-table-summary-background: #ddd8c7 !important;
  --bases-table-summary-background-hover: hsla(219, 21%, 55%, 0.06) !important;
  --blockquote-border-color: #6e695b !important;
  --blue: #4a473e !important;
  --blur-background: color-mix(in srgb, #a7957d 65%, transparent) linear-gradient(#a7957d, color-mix(in srgb, #a7957d 65%, transparent)) !important;
  --callout-blend-mode: normal;
  --canvas-background: #ddd8c7 !important;
  --canvas-card-label-color: rgb(81, 86, 99) !important;
  --caret-color: #49463d !important;
  --checkbox-border-color: rgb(81, 86, 99) !important;
  --checkbox-border-color-hover: #696868 !important;
  --checkbox-color: #4a473e !important;
  --checkbox-color-hover: rgb(93, 66, 173) !important;
  --checkbox-marker-color: #ddd8c7 !important;
  --checklist-done-color: #696868 !important;
  --code-background: rgba(255, 255, 255, 0.352) !important;
  --code-border-color: #424958 !important;
  --code-bracket-background: hsla(219, 21%, 55%, 0.06) !important;
  --code-comment: rgb(81, 86, 99) !important;
  --code-keyword: rgb(188, 106, 124) !important;
  --code-normal: #49463d !important;
  --code-property: rgb(51, 77, 190) !important;
  --code-punctuation: #696868 !important;
  --code-value: rgb(161, 83, 170) !important;
  --collapse-icon-color: rgb(81, 86, 99) !important;
  --collapse-icon-color-collapsed: #4a473e !important;
  --color-accent: hsl(219, 56%, 55%) !important;
  --color-accent-1: hsl(216, 57.12%, 63.25%) !important;
  --color-accent-2: hsl(214, 58.8%, 70.95%) !important;
  --color-accent-hsl: 219, 56%, 55% !important;
  --dark: #49463d !important;
  --darkgray: #49463d !important;
  --divider-color: black !important;
  --divider-color-hover: #404754 !important;
  --drag-ghost-background: #4a473e !important;
  --dropdown-background: #a7957d !important;
  --dropdown-background-hover: #aea395 !important;
  --embed-block-shadow-hover: 0 0 0 1px #424958, inset 0 0 0 1px #424958 !important;
  --embed-border-start: 2px solid #6e695b !important;
  --embed-padding: 0 0 0 16px !important;
  --file-header-background: #ddd8c7 !important;
  --file-header-background-focused: #ddd8c7 !important;
  --file-line-width: 1000px !important;
  --flair-background: #a7957d !important;
  --flair-color: #49463d !important;
  --footnote-divider-color: #424958 !important;
  --footnote-id-color: #696868 !important;
  --footnote-id-color-no-occurrences: rgb(81, 86, 99) !important;
  --footnote-input-background-active: hsla(219, 21%, 55%, 0.06) !important;
  --graph-node: #696868 !important;
  --graph-node-focused: #4a473e !important;
  --graph-node-unresolved: rgb(81, 86, 99) !important;
  --graph-text: #49463d !important;
  --gray: #696868 !important;
  --gray-1: #5C6370 !important;
  --gray-2: #abb2bf !important;
  --green: #98c379 !important;
  --heading-formatting: rgb(81, 86, 99) !important;
  --highlight: #f0ece0 !important;
  --hr-color: #424958 !important;
  --icon-color: black !important;
  --icon-color-active: #4a473e !important;
  --icon-color-focused: #ddd8c7 !important;
  --icon-color-hover: #696868 !important;
  --indentation-guide-color: #6e695b !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(81, 86, 99) !important;
  --input-placeholder-color: rgb(81, 86, 99) !important;
  --interactive-accent: #6e695b !important;
  --interactive-accent-hover: hsl(219, 61%, 45%) !important;
  --interactive-accent-hsl: 219, 56%, 55% !important;
  --interactive-hover: #aea395 !important;
  --interactive-normal: #a7957d !important;
  --light: #ddd8c7 !important;
  --lightgray: #afaa96 !important;
  --link-color: rgb(148, 3, 3) !important;
  --link-color-hover: rgb(93, 66, 173) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(46, 0, 184) !important;
  --link-external-color-hover: red !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(57, 0, 0) !important;
  --link-unresolved-decoration-color: hsla(219, 56%, 55%, 0.3) !important;
  --link-weight: 500 !important;
  --list-marker-color: rgb(81, 86, 99) !important;
  --list-marker-color-collapsed: #4a473e !important;
  --list-marker-color-hover: #696868 !important;
  --menu-background: #afaa96 !important;
  --menu-border-color: #aea395 !important;
  --metadata-border-color: #424958 !important;
  --metadata-divider-color: #424958 !important;
  --metadata-input-background-active: hsla(219, 21%, 55%, 0.06) !important;
  --metadata-input-text-color: #49463d !important;
  --metadata-label-background-active: hsla(219, 21%, 55%, 0.06) !important;
  --metadata-label-text-color: #696868 !important;
  --metadata-label-text-color-hover: #696868 !important;
  --metadata-property-background-active: hsla(219, 21%, 55%, 0.06) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #aea395 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #aea395 !important;
  --modal-background: #ddd8c7 !important;
  --modal-border-color: #18191e !important;
  --nav-collapse-icon-color: rgb(81, 86, 99) !important;
  --nav-collapse-icon-color-collapsed: rgb(81, 86, 99) !important;
  --nav-heading-color: #49463d !important;
  --nav-heading-color-collapsed: rgb(81, 86, 99) !important;
  --nav-heading-color-collapsed-hover: #696868 !important;
  --nav-heading-color-hover: #49463d !important;
  --nav-indentation-guide-color: #6e695b !important;
  --nav-item-background-active: #6e695b !important;
  --nav-item-background-hover: hsla(219, 21%, 55%, 0.06) !important;
  --nav-item-background-selected: hsla(219, 56%, 55%, 0.15) !important;
  --nav-item-color: #696868 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #4a473e !important;
  --nav-item-color-hover: #49463d !important;
  --nav-item-color-selected: #49463d !important;
  --nav-tag-color: rgb(81, 86, 99) !important;
  --nav-tag-color-active: #696868 !important;
  --nav-tag-color-hover: #696868 !important;
  --orange: #d19a66 !important;
  --panel-border-color: #18191e !important;
  --pdf-background: #ddd8c7 !important;
  --pdf-page-background: #ddd8c7 !important;
  --pdf-shadow: 0 0 0 1px #424958 !important;
  --pdf-sidebar-background: #ddd8c7 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #424958 !important;
  --pill-border-color: #424958 !important;
  --pill-border-color-hover: #aea395 !important;
  --pill-color: #696868 !important;
  --pill-color-hover: #49463d !important;
  --pill-color-remove: rgb(81, 86, 99) !important;
  --pill-color-remove-hover: #4a473e !important;
  --prompt-background: #ddd8c7 !important;
  --prompt-border-color: #18191e !important;
  --purple: #c678dd !important;
  --raised-background: color-mix(in srgb, #a7957d 65%, transparent) linear-gradient(#a7957d, color-mix(in srgb, #a7957d 65%, transparent)) !important;
  --red: #e06c75 !important;
  --ribbon-background: #ddd8c7 !important;
  --ribbon-background-collapsed: #ddd8c7 !important;
  --scrollbar-active-thumb-bg: rgba(75, 70, 64, 0.9) !important;
  --scrollbar-thumb-bg: rgba(75, 70, 64, 0.7) !important;
  --search-clear-button-color: #696868 !important;
  --search-icon-color: #696868 !important;
  --search-result-background: #ddd8c7 !important;
  --secondary: #4a473e !important;
  --setting-group-heading-color: #49463d !important;
  --setting-items-background: #f0ece0 !important;
  --setting-items-border-color: #424958 !important;
  --slider-thumb-border-color: #aea395 !important;
  --slider-track-background: #424958 !important;
  --status-bar-background: #afaa96 !important;
  --status-bar-border-color: black !important;
  --status-bar-text-color: #696868 !important;
  --suggestion-background: #ddd8c7 !important;
  --tab-background-active: #ddd8c7 !important;
  --tab-container-background: #afaa96 !important;
  --tab-divider-color: #aea395 !important;
  --tab-outline-color: black !important;
  --tab-switcher-background: #afaa96 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #afaa96, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(219, 56%, 55%) !important;
  --tab-text-color: rgb(81, 86, 99) !important;
  --tab-text-color-active: #696868 !important;
  --tab-text-color-focused: #ddd8c7 !important;
  --tab-text-color-focused-active: #696868 !important;
  --tab-text-color-focused-active-current: #ddd8c7 !important;
  --tab-text-color-focused-highlighted: #4a473e !important;
  --table-add-button-border-color: #424958 !important;
  --table-border-color: #424958 !important;
  --table-drag-handle-background-active: #6e695b !important;
  --table-drag-handle-color: rgb(81, 86, 99) !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #424958 !important;
  --table-header-color: #49463d !important;
  --table-selection: hsla(219, 56%, 55%, 0.1) !important;
  --table-selection-border-color: #6e695b !important;
  --tag-background: rgba(172, 167, 147, 255) !important;
  --tag-background-hover: rgba(172, 167, 147, 255) !important;
  --tag-border-color: hsla(219, 56%, 55%, 0.15) !important;
  --tag-border-color-hover: hsla(219, 56%, 55%, 0.15) !important;
  --tag-padding-x: 4px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 4px !important;
  --tertiary: rgb(93, 66, 173) !important;
  --text-accent: #4a473e !important;
  --text-accent-hover: rgb(93, 66, 173) !important;
  --text-error: #b11f2c !important;
  --text-error-hover: #c9626a !important;
  --text-faint: rgb(81, 86, 99) !important;
  --text-highlight-bg: #f0ece0 !important;
  --text-muted: #696868 !important;
  --text-normal: #49463d !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(0, 122, 255, 0.2) !important;
  --textHighlight: #f0ece0 !important;
  --titlebar-background: #afaa96 !important;
  --titlebar-background-focused: #4a473e !important;
  --titlebar-border-color: #424958 !important;
  --titlebar-text-color: #696868 !important;
  --titlebar-text-color-focused: #49463d !important;
  --vault-profile-color: #49463d !important;
  --vault-profile-color-hover: #49463d !important;
  --yellow: #e5c07b !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(175, 170, 150);
  color: rgb(73, 70, 61);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(221, 216, 199);
  color: rgb(73, 70, 61);
}

html body .bases-table thead th {
  border-color: rgb(66, 73, 88);
  color: rgb(73, 70, 61);
}

html body .canvas-node {
  border-color: rgb(73, 70, 61);
}

html body .canvas-node-content {
  color: rgb(73, 70, 61);
}

html body .canvas-node-file {
  color: rgb(73, 70, 61);
}

html body .canvas-node-group {
  border-color: rgb(73, 70, 61);
}

html body .canvas-sidebar {
  background-color: rgb(175, 170, 150);
  border-color: rgb(73, 70, 61);
}

html body .note-properties {
  border-color: rgb(66, 73, 88);
}

html body .note-properties-key {
  color: rgb(105, 104, 104);
}

html body .note-properties-row {
  border-color: rgb(105, 104, 104);
}

html body .note-properties-tags {
  background-color: rgb(172, 167, 147);
  border-radius: 4px;
  color: rgb(73, 70, 61);
}

html body .note-properties-value {
  color: rgb(105, 104, 104);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(175, 170, 150);
  color: rgb(73, 70, 61);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(175, 170, 150);
  border-left-color: rgb(0, 0, 0);
  color: rgb(73, 70, 61);
}

html body div#quartz-root {
  background-color: rgb(221, 216, 199);
  color: rgb(73, 70, 61);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration-color: rgb(73, 70, 61);
}

html body .page article p > em, html em {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration-color: rgb(73, 70, 61);
}

html body .page article p > i, html i {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration-color: rgb(73, 70, 61);
}

html body .page article p > strong, html strong {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration-color: rgb(73, 70, 61);
}

html body .text-highlight {
  background-color: rgb(240, 236, 224);
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration-color: rgb(73, 70, 61);
}

html body del {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration-color: rgb(73, 70, 61);
}

html body h1.article-title {
  color: rgb(73, 70, 61);
  text-decoration: underline rgb(105, 104, 104);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(81, 86, 99);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(74, 71, 62);
  border-color: rgb(74, 71, 62);
}

html body p {
  color: rgb(105, 104, 104);
  outline: rgb(105, 104, 104) none 0px;
  text-decoration-color: rgb(105, 104, 104);
}`,
    links: `html body a.external, html footer a {
  color: rgb(46, 0, 184);
  font-weight: 500;
  outline: rgb(46, 0, 184) none 0px;
  text-decoration-color: rgb(46, 0, 184);
  transition: opacity 0.15s ease-in-out;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(148, 3, 3);
  font-weight: 500;
  outline: rgb(148, 3, 3) none 0px;
  text-decoration-color: rgb(148, 3, 3);
}

html body a.internal.broken {
  color: rgb(57, 0, 0);
  font-weight: 500;
  outline: rgb(57, 0, 0) none 0px;
  text-decoration: rgba(76, 121, 205, 0.3);
  text-decoration-color: rgba(76, 121, 205, 0.3);
}`,
    lists: `html body dd {
  color: rgb(73, 70, 61);
}

html body dt {
  color: rgb(73, 70, 61);
}

html body ol > li {
  color: rgb(73, 70, 61);
}

html body ol.overflow {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body ul > li {
  color: rgb(73, 70, 61);
}

html body ul.overflow {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(81, 86, 99);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body table {
  color: rgb(73, 70, 61);
}

html body td {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(73, 70, 61);
}

html body th {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(73, 70, 61);
}`,
    code: `html body code {
  border-bottom-color: rgb(221, 216, 199);
  border-left-color: rgb(221, 216, 199);
  border-right-color: rgb(221, 216, 199);
  border-top-color: rgb(221, 216, 199);
  color: rgb(221, 216, 199);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(221, 216, 199);
}

html body pre > code > [data-line] {
  border-left-color: rgb(229, 192, 123);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 192, 123);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 192, 123);
  border-left-color: rgb(229, 192, 123);
  border-right-color: rgb(229, 192, 123);
  border-top-color: rgb(229, 192, 123);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  padding-bottom: 16px;
  padding-top: 16px;
}

html body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body figcaption {
  color: rgb(73, 70, 61);
}

html body figure {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body img {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body video {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(172, 167, 147);
  border-bottom-color: rgb(105, 104, 104);
  border-left-color: rgb(105, 104, 104);
  border-right-color: rgb(105, 104, 104);
  border-top-color: rgb(105, 104, 104);
}

html body .footnotes {
  border-top-color: rgb(73, 70, 61);
  color: rgb(73, 70, 61);
}

html body .transclude {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(110, 105, 91);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body .transclude-inner {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}`,
    checkboxes: `html body .katex-display > .katex {
  text-align: left;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(81, 86, 99);
  border-left-color: rgb(81, 86, 99);
  border-right-color: rgb(81, 86, 99);
  border-top-color: rgb(81, 86, 99);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(90, 88, 85, 0.5);
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(95, 65, 80, 0.5);
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(158, 141, 123, 0.3);
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(218, 189, 155, 0.5);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(38, 114, 54, 0.5);
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(82, 155, 160, 0.5);
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(82, 89, 146, 0.5);
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(190, 55, 55, 0.5);
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
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(73, 70, 61);
}

html body .search > .search-container > .search-space {
  background-color: rgb(221, 216, 199);
  border-bottom-color: rgb(24, 25, 30);
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-top-color: rgb(24, 25, 30);
}

html body .search > .search-container > .search-space > * {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration-color: rgb(73, 70, 61);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(73, 70, 61);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(73, 70, 61);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(116, 133, 164, 0.06);
  color: rgb(73, 70, 61);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(24, 25, 30);
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-top-color: rgb(24, 25, 30);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(175, 170, 150);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(116, 133, 164, 0.06);
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
  color: rgb(73, 70, 61);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(116, 133, 164, 0.06);
  color: rgb(73, 70, 61);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(172, 167, 147);
  border-bottom-color: rgba(76, 121, 205, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(76, 121, 205, 0.15);
  border-right-color: rgba(76, 121, 205, 0.15);
  border-top-color: rgba(76, 121, 205, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body a.internal.tag-link::before {
  color: rgb(73, 70, 61);
}

html body h1 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 4.8px 4.8px 0px;
}

html body h2 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 4px 4px 0px;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 4.8px 4.8px 0px;
}

html body h3 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 3.2px 3.2px 0px;
}

html body h4 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 2.4px 2.4px 0px;
}

html body h5 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 2.24px 2.24px 0px;
}

html body h6 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 1.76px 1.76px 0px;
}

html body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
}

html body ::-webkit-scrollbar-track {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(67, 64, 55);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(67, 64, 55);
}

html body .explorer .folder-outer > ul {
  border-left-color: rgb(110, 105, 91);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(73, 70, 61);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    footer: `html body footer {
  background-color: rgb(175, 170, 150);
  border-bottom-color: rgb(24, 25, 30);
  border-bottom-width: 1px;
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-right-width: 1px;
  border-top-color: rgb(24, 25, 30);
  color: rgb(105, 104, 104);
}

html body footer ul li a {
  color: rgb(105, 104, 104);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(73, 70, 61);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
  color: rgb(73, 70, 61);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(67, 64, 55);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(67, 64, 55);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body li.section-li > .section .meta {
  color: rgb(67, 64, 55);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(67, 64, 55);
}

html body ul.section-ul {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .darkmode svg {
  color: rgb(0, 0, 0);
  stroke: rgb(0, 0, 0);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(105, 104, 104);
  border-left-color: rgb(105, 104, 104);
  border-right-color: rgb(105, 104, 104);
  border-top-color: rgb(105, 104, 104);
  color: rgb(105, 104, 104);
}

html body .breadcrumb-element p {
  color: rgb(81, 86, 99);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
  color: rgb(73, 70, 61);
}

html body .metadata {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(105, 104, 104);
}

html body .metadata-properties {
  border-bottom-color: rgb(105, 104, 104);
  border-left-color: rgb(105, 104, 104);
  border-right-color: rgb(105, 104, 104);
  border-top-color: rgb(105, 104, 104);
  color: rgb(105, 104, 104);
}

html body .navigation-progress {
  background-color: rgb(175, 170, 150);
}

html body .page-header h2.page-title {
  color: rgb(73, 70, 61);
}

html body abbr {
  color: rgb(73, 70, 61);
}

html body details {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body input[type=text] {
  border-bottom-color: rgb(105, 104, 104);
  border-left-color: rgb(105, 104, 104);
  border-right-color: rgb(105, 104, 104);
  border-top-color: rgb(105, 104, 104);
  color: rgb(105, 104, 104);
}

html body kbd {
  background-color: rgba(255, 255, 255, 0.353);
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
  color: rgb(73, 70, 61);
}

html body progress {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

html body sub {
  color: rgb(73, 70, 61);
}

html body summary {
  color: rgb(73, 70, 61);
}

html body sup {
  color: rgb(73, 70, 61);
}

html body ul.tags > li {
  background-color: rgb(172, 167, 147);
  border-bottom-color: rgba(76, 121, 205, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(76, 121, 205, 0.15);
  border-right-color: rgba(76, 121, 205, 0.15);
  border-top-color: rgba(76, 121, 205, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(73, 70, 61);
}`,
  },
  light: {},
};
