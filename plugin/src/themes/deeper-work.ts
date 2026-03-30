import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "deeper-work",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --active-line-bg: rgba(153, 153, 153, 0.1) !important;
  --aqua: #56b6c2 !important;
  --background-modifier-border: #21262d !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-error: #b62324 !important;
  --background-modifier-error-hover: #b62324 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: #161b22 !important;
  --background-modifier-form-field-highlighted: #161b22 !important;
  --background-modifier-form-field-hover: #161b22 !important;
  --background-modifier-success: #2ea043 !important;
  --background-primary: #0d1117 !important;
  --background-primary-alt: #161b22 !important;
  --background-secondary: #161b22 !important;
  --background-secondary-alt: #21262d !important;
  --bases-cards-background: #0d1117 !important;
  --bases-cards-cover-background: #161b22 !important;
  --bases-cards-shadow: 0 0 0 1px #21262d !important;
  --bases-embed-border-color: #21262d !important;
  --bases-group-heading-property-color: #6e7681 !important;
  --bases-table-border-color: #21262d !important;
  --bases-table-cell-background-active: #0d1117 !important;
  --bases-table-cell-background-disabled: #161b22 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #2ea043 !important;
  --bases-table-group-background: #161b22 !important;
  --bases-table-header-background: #0d1117 !important;
  --bases-table-header-color: #6e7681 !important;
  --bases-table-summary-background: #0d1117 !important;
  --blockquote-border-color: #2ea043 !important;
  --blue: #61afef !important;
  --blur-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent)) !important;
  --callout-blend-mode: screen;
  --canvas-background: #0d1117 !important;
  --canvas-card-label-color: #6e7681 !important;
  --caret-color: #c9d1d9 !important;
  --checkbox-border-color: #6e7681 !important;
  --checkbox-border-color-hover: #6e7681 !important;
  --checkbox-color: #2ea043 !important;
  --checkbox-color-hover: #3fb950 !important;
  --checkbox-marker-color: #0d1117 !important;
  --checklist-done-color: #6e7681 !important;
  --code-background: #161b22 !important;
  --code-border-color: #21262d !important;
  --code-comment: #6e7681 !important;
  --code-normal: #c9d1d9 !important;
  --code-punctuation: #6e7681 !important;
  --code-size: 1em !important;
  --collapse-icon-color: #6e7681 !important;
  --collapse-icon-color-collapsed: #388bfd !important;
  --color-black: #010409 !important;
  --color-blue-0: #cae8ff !important;
  --color-blue-1: #a5d6ff !important;
  --color-blue-2: #79c0ff !important;
  --color-blue-3: #58a6ff !important;
  --color-blue-4: #388bfd !important;
  --color-blue-5: #1f6feb !important;
  --color-blue-6: #1158c7 !important;
  --color-blue-7: #0d419d !important;
  --color-blue-8: #0c2d6b !important;
  --color-blue-9: #051d4d !important;
  --color-border: rgba(255, 255, 255, 0.2) !important;
  --color-gray-0: #e1e7ee !important;
  --color-gray-1: #c9d1d9 !important;
  --color-gray-2: #b1bac4 !important;
  --color-gray-3: #8b949e !important;
  --color-gray-4: #6e7681 !important;
  --color-gray-5: #484f58 !important;
  --color-gray-6: #30363d !important;
  --color-gray-7: #21262d !important;
  --color-gray-8: #161b22 !important;
  --color-gray-9: #0d1117 !important;
  --color-green-0: #aff5b4 !important;
  --color-green-1: #7ee787 !important;
  --color-green-2: #56d364 !important;
  --color-green-3: #3fb950 !important;
  --color-green-4: #2ea043 !important;
  --color-green-5: #238636 !important;
  --color-green-6: #196c2e !important;
  --color-green-7: #0f5323 !important;
  --color-green-8: #033a16 !important;
  --color-green-9: #04260f !important;
  --color-orange-0: #ffdfb6 !important;
  --color-orange-1: #ffc680 !important;
  --color-orange-2: #ffa657 !important;
  --color-orange-3: #f0883e !important;
  --color-orange-4: #db6d28 !important;
  --color-orange-5: #bd561d !important;
  --color-orange-6: #9b4215 !important;
  --color-orange-7: #762d0a !important;
  --color-orange-8: #5a1e02 !important;
  --color-orange-9: #3d1300 !important;
  --color-pink-0: #ffdaec !important;
  --color-pink-1: #ffbedd !important;
  --color-pink-2: #ff9bce !important;
  --color-pink-3: #f778ba !important;
  --color-pink-4: #FC6DAB !important;
  --color-pink-5: #bf4b8a !important;
  --color-pink-6: #9e3670 !important;
  --color-pink-7: #7d2457 !important;
  --color-pink-8: #5e103e !important;
  --color-pink-9: #42062a !important;
  --color-purple-0: #eddeff !important;
  --color-purple-1: #e2c5ff !important;
  --color-purple-2: #d2a8ff !important;
  --color-purple-3: #bc8cff !important;
  --color-purple-4: #a371f7 !important;
  --color-purple-5: #8957e5 !important;
  --color-purple-6: #6e40c9 !important;
  --color-purple-7: #553098 !important;
  --color-purple-8: #3c1e70 !important;
  --color-purple-9: #271052 !important;
  --color-red-0: #ffdcd7 !important;
  --color-red-1: #ffc1ba !important;
  --color-red-2: #ffa198 !important;
  --color-red-3: #ff7b72 !important;
  --color-red-4: #f85149 !important;
  --color-red-5: #da3633 !important;
  --color-red-6: #b62324 !important;
  --color-red-7: #8e1519 !important;
  --color-red-8: #67060c !important;
  --color-red-9: #490202 !important;
  --color-topic-tag-bg: rgba(56, 139, 253, 0.1) !important;
  --color-transparent: rgba(255, 255, 255, 0) !important;
  --color-white: #f7f9fc !important;
  --color-yellow-0: #f8e3a1 !important;
  --color-yellow-1: #f2cc60 !important;
  --color-yellow-2: #e3b341 !important;
  --color-yellow-3: #d29922 !important;
  --color-yellow-4: #bb8009 !important;
  --color-yellow-5: #9e6a03 !important;
  --color-yellow-6: #845306 !important;
  --color-yellow-7: #693e00 !important;
  --color-yellow-8: #4b2900 !important;
  --color-yellow-9: #341a00 !important;
  --cursor-bg: #3fb950 !important;
  --dark: #c9d1d9 !important;
  --darkgray: #c9d1d9 !important;
  --divider-color: #21262d !important;
  --divider-color-hover: #2ea043 !important;
  --dropdown-background: #30363d !important;
  --dropdown-background-hover: #484f58 !important;
  --embed-block-shadow-hover: 0 0 0 1px #21262d, inset 0 0 0 1px #21262d !important;
  --embed-border-start: 2px solid #2ea043 !important;
  --file-header-background: #0d1117 !important;
  --file-header-background-focused: #0d1117 !important;
  --flair-background: #30363d !important;
  --flair-color: #c9d1d9 !important;
  --footnote-divider-color: #21262d !important;
  --footnote-id-color: #6e7681 !important;
  --footnote-id-color-no-occurrences: #6e7681 !important;
  --graph-node: #6e7681 !important;
  --graph-node-focused: #388bfd !important;
  --graph-node-unresolved: #6e7681 !important;
  --graph-text: #c9d1d9 !important;
  --gray: #6e7681 !important;
  --gray-1: #5c6370 !important;
  --gray-2: #abb2bf !important;
  --green: #98c379 !important;
  --h1-size: 1.55rem !important;
  --h2-size: 1.4rem !important;
  --h3-size: 1.3rem !important;
  --h4-size: 1.2rem !important;
  --h5-size: 1.1rem !important;
  --h6-size: 1.1rem !important;
  --heading-formatting: #6e7681 !important;
  --heading-spacing: 1.5rem !important;
  --highlight: rgba(0, 63, 179, 0.75) !important;
  --highlight-mix-blend-mode: screen !important;
  --hr-color: #21262d !important;
  --icon-color: #6e7681 !important;
  --icon-color-active: #388bfd !important;
  --icon-color-focused: #c9d1d9 !important;
  --icon-color-hover: #6e7681 !important;
  --inline-title-size: 1.55rem !important;
  --input-date-separator: #6e7681 !important;
  --input-placeholder-color: #6e7681 !important;
  --interactive-accent: #2ea043 !important;
  --interactive-accent-hover: #3fb950 !important;
  --interactive-accent-rgb: 46, 160, 67 !important;
  --interactive-hover: #484f58 !important;
  --interactive-normal: #30363d !important;
  --interactive-success: #238636 !important;
  --light: #0d1117 !important;
  --lightgray: #161b22 !important;
  --link-color: #388bfd !important;
  --link-color-hover: #58a6ff !important;
  --link-external-color: #388bfd !important;
  --link-external-color-hover: #58a6ff !important;
  --link-unresolved-color: #388bfd !important;
  --list-marker-color: #6e7681 !important;
  --list-marker-color-collapsed: #388bfd !important;
  --list-marker-color-hover: #6e7681 !important;
  --menu-background: #161b22 !important;
  --metadata-border-color: #21262d !important;
  --metadata-divider-color: #21262d !important;
  --metadata-input-text-color: #c9d1d9 !important;
  --metadata-label-text-color: #6e7681 !important;
  --metadata-label-text-color-hover: #6e7681 !important;
  --modal-background: #0d1117 !important;
  --nav-collapse-icon-color: #6e7681 !important;
  --nav-collapse-icon-color-collapsed: #6e7681 !important;
  --nav-heading-color: #c9d1d9 !important;
  --nav-heading-color-collapsed: #6e7681 !important;
  --nav-heading-color-collapsed-hover: #6e7681 !important;
  --nav-heading-color-hover: #c9d1d9 !important;
  --nav-item-color: #6e7681 !important;
  --nav-item-color-active: #c9d1d9 !important;
  --nav-item-color-highlighted: #388bfd !important;
  --nav-item-color-hover: #c9d1d9 !important;
  --nav-item-color-selected: #c9d1d9 !important;
  --nav-tag-color: #6e7681 !important;
  --nav-tag-color-active: #6e7681 !important;
  --nav-tag-color-hover: #6e7681 !important;
  --orange: #d19a66 !important;
  --panel-border-color: #18191e !important;
  --pdf-background: #0d1117 !important;
  --pdf-page-background: #0d1117 !important;
  --pdf-shadow: 0 0 0 1px #21262d !important;
  --pdf-sidebar-background: #0d1117 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #21262d !important;
  --pill-border-color: #21262d !important;
  --pill-color: #6e7681 !important;
  --pill-color-hover: #c9d1d9 !important;
  --pill-color-remove: #6e7681 !important;
  --pill-color-remove-hover: #388bfd !important;
  --prompt-background: #0d1117 !important;
  --purple: #c678dd !important;
  --raised-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent)) !important;
  --red: #e06c75 !important;
  --ribbon-background: #161b22 !important;
  --ribbon-background-collapsed: #0d1117 !important;
  --scrollbar-active-thumb-bg: #388bfd !important;
  --scrollbar-bg: #0d1117 !important;
  --scrollbar-thumb-bg: #30363d !important;
  --search-clear-button-color: #6e7681 !important;
  --search-icon-color: #6e7681 !important;
  --search-result-background: #0d1117 !important;
  --secondary: #388bfd !important;
  --setting-group-heading-color: #c9d1d9 !important;
  --setting-items-background: #161b22 !important;
  --setting-items-border-color: #21262d !important;
  --slider-track-background: #21262d !important;
  --status-bar-background: #161b22 !important;
  --status-bar-border-color: #21262d !important;
  --status-bar-text-color: #6e7681 !important;
  --suggestion-background: #0d1117 !important;
  --tab-background-active: #0d1117 !important;
  --tab-container-background: #161b22 !important;
  --tab-outline-color: #21262d !important;
  --tab-switcher-background: #161b22 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #161b22, transparent) !important;
  --tab-text-color: #6e7681 !important;
  --tab-text-color-active: #6e7681 !important;
  --tab-text-color-focused: #6e7681 !important;
  --tab-text-color-focused-active: #6e7681 !important;
  --tab-text-color-focused-active-current: #c9d1d9 !important;
  --tab-text-color-focused-highlighted: #388bfd !important;
  --table-add-button-border-color: #21262d !important;
  --table-border-color: #21262d !important;
  --table-drag-handle-background-active: #2ea043 !important;
  --table-drag-handle-color: #6e7681 !important;
  --table-drag-handle-color-active: #f7f9fc !important;
  --table-header-border-color: #21262d !important;
  --table-header-color: #c9d1d9 !important;
  --table-selection-blend-mode: screen !important;
  --table-selection-border-color: #2ea043 !important;
  --tag-color: #388bfd !important;
  --tag-color-hover: #388bfd !important;
  --tertiary: #58a6ff !important;
  --text-accent: #388bfd !important;
  --text-accent-hover: #58a6ff !important;
  --text-accent-light: #58a6ff !important;
  --text-bright: #e1e7ee !important;
  --text-code: #c9d1d9 !important;
  --text-error: #f85149 !important;
  --text-error-hover: #da3633 !important;
  --text-faint: #6e7681 !important;
  --text-highlight-bg: rgba(0, 63, 179, 0.75) !important;
  --text-highlight-bg-active: rgba(0, 123, 255, 0.15) !important;
  --text-muted: #6e7681 !important;
  --text-muted-rgb: 153, 153, 153 !important;
  --text-normal: #c9d1d9 !important;
  --text-on-accent: #f7f9fc !important;
  --text-selection: rgba(23, 48, 77, 0.99) !important;
  --textHighlight: rgba(0, 63, 179, 0.75) !important;
  --titlebar-background: #161b22 !important;
  --titlebar-background-focused: #21262d !important;
  --titlebar-border-color: #21262d !important;
  --titlebar-text-color: #6e7681 !important;
  --titlebar-text-color-focused: #c9d1d9 !important;
  --vault-profile-color: #c9d1d9 !important;
  --vault-profile-color-hover: #c9d1d9 !important;
  --yellow: #e5c07b !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 27, 34);
  color: rgb(201, 209, 217);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(13, 17, 23);
  color: rgb(201, 209, 217);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 27, 34);
  color: rgb(201, 209, 217);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(33, 38, 45);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 27, 34);
  border-left-color: rgb(33, 38, 45);
  color: rgb(201, 209, 217);
}

html body div#quartz-root {
  background-color: rgb(13, 17, 23);
  color: rgb(201, 209, 217);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(63, 185, 80);
  font-weight: 700;
  outline: rgb(63, 185, 80) none 0px;
  text-decoration-color: rgb(63, 185, 80);
}

html body .page article p > em, html em {
  color: rgb(63, 185, 80);
  outline: rgb(63, 185, 80) none 0px;
  text-decoration-color: rgb(63, 185, 80);
}

html body .page article p > i, html i {
  color: rgb(63, 185, 80);
  outline: rgb(63, 185, 80) none 0px;
  text-decoration-color: rgb(63, 185, 80);
}

html body .page article p > strong, html strong {
  color: rgb(63, 185, 80);
  font-weight: 700;
  outline: rgb(63, 185, 80) none 0px;
  text-decoration-color: rgb(63, 185, 80);
}

html body .text-highlight {
  background-color: rgba(0, 63, 179, 0.75);
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html body del {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html body p {
  color: rgb(110, 118, 129);
  outline: rgb(110, 118, 129) none 0px;
  text-decoration-color: rgb(110, 118, 129);
}`,
    links: `html body a.external, html footer a {
  color: rgb(56, 139, 253);
  outline: rgb(56, 139, 253) none 0px;
  text-decoration-color: rgb(56, 139, 253);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(56, 139, 253);
  outline: rgb(56, 139, 253) none 0px;
  text-decoration-color: rgb(56, 139, 253);
}

html body a.internal.broken {
  color: rgb(56, 139, 253);
  outline: rgb(56, 139, 253) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body dd {
  color: rgb(201, 209, 217);
}

html body dt {
  color: rgb(201, 209, 217);
}

html body ol > li {
  color: rgb(201, 209, 217);
}

html body ol.overflow {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html body ul > li {
  color: rgb(201, 209, 217);
}

html body ul.overflow {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(110, 118, 129);
}

html body blockquote {
  background-color: rgba(48, 54, 61, 0.35);
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html body table {
  color: rgb(201, 209, 217);
  width: 244.172px;
}

html body td {
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  color: rgb(201, 209, 217);
}

html body th {
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  color: rgb(201, 209, 217);
}`,
    code: `html body code {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
  font-family: "JetBrains Mono";
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  color: rgb(201, 209, 217);
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
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  padding-bottom: 16px;
  padding-top: 16px;
}

html body pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html body figcaption {
  color: rgb(201, 209, 217);
}

html body figure {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html body img {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html body video {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
}

html body .footnotes {
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

html body .transclude {
  border-bottom-color: rgb(33, 38, 45);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(33, 38, 45);
  border-left-width: 5px;
  border-right-color: rgb(33, 38, 45);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(33, 38, 45);
  border-top-style: solid;
  border-top-width: 1px;
}

html body .transclude-inner {
  border-bottom-color: rgb(33, 38, 45);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(33, 38, 45);
  border-left-width: 5px;
  border-right-color: rgb(33, 38, 45);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(33, 38, 45);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(110, 118, 129);
  text-decoration-color: rgb(110, 118, 129);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(13, 17, 23);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  padding-bottom: 9.6px;
}`,
    search: `html body .search > .search-button {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  color: rgb(201, 209, 217);
}

html body .search > .search-container > .search-space {
  background-color: rgb(13, 17, 23);
}

html body .search > .search-container > .search-space > * {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(201, 209, 217);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(201, 209, 217);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(201, 209, 217);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 27, 34);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(201, 209, 217);
}

html body a.internal.tag-link::before {
  color: rgb(56, 139, 253);
}

html body h1 {
  color: rgb(201, 209, 217);
}

html body h2 {
  color: rgb(201, 209, 217);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(201, 209, 217);
}

html body h3 {
  color: rgb(201, 209, 217);
}

html body h4 {
  color: rgb(201, 209, 217);
}

html body h5 {
  color: rgb(201, 209, 217);
}

html body h6 {
  color: rgb(201, 209, 217);
}

html body hr {
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
}`,
    scrollbars: `html body .callout {
  padding-right: 24px;
}

html body ::-webkit-scrollbar {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html body ::-webkit-scrollbar-track {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 118, 129);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 118, 129);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
  color: rgb(110, 118, 129);
}`,
    footer: `html body footer {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(13, 17, 23);
  border-bottom-width: 1px;
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-right-width: 1px;
  border-top-color: rgb(13, 17, 23);
  color: rgb(110, 118, 129);
}

html body footer ul li a {
  color: rgb(110, 118, 129);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(201, 209, 217);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 118, 129);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 118, 129);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html body li.section-li > .section .meta {
  color: rgb(110, 118, 129);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 118, 129);
}

html body ul.section-ul {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
  color: rgb(110, 118, 129);
}

html body .darkmode svg {
  color: rgb(110, 118, 129);
  stroke: rgb(110, 118, 129);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
  color: rgb(110, 118, 129);
}

html body .breadcrumb-element p {
  color: rgb(110, 118, 129);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

html body .metadata {
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  color: rgb(110, 118, 129);
}

html body .metadata-properties {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
  color: rgb(110, 118, 129);
}

html body .navigation-progress {
  background-color: rgb(22, 27, 34);
}

html body .page-header h2.page-title {
  color: rgb(201, 209, 217);
}

html body abbr {
  color: rgb(201, 209, 217);
}

html body details {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html body input[type=text] {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
  color: rgb(110, 118, 129);
}

html body kbd {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html body progress {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html body sub {
  color: rgb(201, 209, 217);
}

html body summary {
  color: rgb(201, 209, 217);
}

html body sup {
  color: rgb(201, 209, 217);
}`,
  },
  light: {},
};
