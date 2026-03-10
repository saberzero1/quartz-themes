import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal-dracula",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #191A21 !important;
  --background-modifier-border-focus: #282A36 !important;
  --background-modifier-border-hover: #282A36 !important;
  --background-modifier-form-field: #191A21 !important;
  --background-modifier-form-field-hover: #191A21 !important;
  --background-primary: #191A21 !important;
  --background-primary-alt: #191A21 !important;
  --background-secondary: #191A21 !important;
  --background-secondary-alt: #191A21 !important;
  --bases-cards-background: #191A21 !important;
  --bases-cards-cover-background: #191A21 !important;
  --bases-cards-shadow: 0 0 0 1px #191A21 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #282A36 !important;
  --bases-embed-border-color: #191A21 !important;
  --bases-group-heading-property-color: #BABCC9 !important;
  --bases-table-border-color: #191A21 !important;
  --bases-table-cell-background-active: #191A21 !important;
  --bases-table-cell-background-disabled: #191A21 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #282A36 !important;
  --bases-table-group-background: #191A21 !important;
  --bases-table-header-background: #191A21 !important;
  --bases-table-header-color: #BABCC9 !important;
  --bases-table-summary-background: #191A21 !important;
  --blur-background: color-mix(in srgb, #191A21 65%, transparent) linear-gradient(#191A21, color-mix(in srgb, #191A21 65%, transparent)) !important;
  --bold-color: #BD93F9 !important;
  --callout-bug: 255, 85, 85;
  --callout-default: 98, 114, 164;
  --callout-error: 255, 85, 85;
  --callout-example: 255, 121, 198;
  --callout-fail: 255, 85, 85;
  --callout-important: 189, 147, 249;
  --callout-info: 98, 114, 164;
  --callout-question: 255, 184, 108;
  --callout-quote: 189, 147, 249;
  --callout-success: 55, 235, 98;
  --callout-summary: 114, 208, 228;
  --callout-tip: 114, 208, 228;
  --callout-todo: white;
  --callout-warning: 255, 184, 108;
  --canvas-background: #191A21 !important;
  --canvas-card-label-color: #707487 !important;
  --canvas-dot-pattern: #191A21 !important;
  --caret-color: #F8F8F2 !important;
  --checkbox-border-color: #707487 !important;
  --checkbox-border-color-hover: #BABCC9 !important;
  --checkbox-marker-color: #191A21 !important;
  --checklist-done-color: #BABCC9 !important;
  --checklist-done-decoration: none !important;
  --code-background: #191A21 !important;
  --code-border-color: #191A21 !important;
  --code-comment: #6270A4 !important;
  --code-function: #50FA7B !important;
  --code-important: #FF5555 !important;
  --code-keyword: #FF79C6 !important;
  --code-normal: #BABCC9 !important;
  --code-operator: #FF5555 !important;
  --code-property: #FFB86C !important;
  --code-punctuation: #BABCC9 !important;
  --code-string: #F1FA8C !important;
  --code-tag: #FF5555 !important;
  --code-value: #BD93F9 !important;
  --collapse-icon-color: #707487 !important;
  --color-base-00: #191A21 !important;
  --color-base-10: #191A21 !important;
  --color-base-100: #F8F8F2 !important;
  --color-base-20: #191A21 !important;
  --color-base-25: #191A21 !important;
  --color-base-30: #191A21 !important;
  --color-base-35: #282A36 !important;
  --color-base-40: #282A36 !important;
  --color-base-50: #707487 !important;
  --color-base-60: red !important;
  --color-base-70: #BABCC9 !important;
  --dark: #F8F8F2 !important;
  --darkgray: #F8F8F2 !important;
  --divider-color: #191A21 !important;
  --dropdown-background: #191A21 !important;
  --dropdown-background-hover: #282A36 !important;
  --drx-border-radius: 10px !important;
  --drx-border-width: 2px !important;
  --drx-color-accent: #BD93F9 !important;
  --drx-color-base: #191A21 !important;
  --drx-color-blue-1: #6DCCFF !important;
  --drx-color-blue-2: #54B3FF !important;
  --drx-color-blue-3: #3B9AE6 !important;
  --drx-color-callout-blue: 84, 179, 255 !important;
  --drx-color-callout-comment: 98, 114, 164 !important;
  --drx-color-callout-cyan: 114, 208, 228 !important;
  --drx-color-callout-green: 55, 235, 98 !important;
  --drx-color-callout-orange: 255, 184, 108 !important;
  --drx-color-callout-pink: 255, 121, 198 !important;
  --drx-color-callout-purple: 189, 147, 249 !important;
  --drx-color-callout-red: 255, 85, 85 !important;
  --drx-color-callout-yellow: 241, 250, 140 !important;
  --drx-color-comment: #6270A4 !important;
  --drx-color-cyan-1: #A4FFFF !important;
  --drx-color-cyan-2: #8BE9FD !important;
  --drx-color-cyan-3: #72D0E4 !important;
  --drx-color-deactivate: #707487 !important;
  --drx-color-green-1: #69FF94 !important;
  --drx-color-green-2: #50FA7B !important;
  --drx-color-green-3: #37EB62 !important;
  --drx-color-highlight: #343746 !important;
  --drx-color-important: #D6ACFF !important;
  --drx-color-orange-1: #FFD185 !important;
  --drx-color-orange-2: #FFB86C !important;
  --drx-color-orange-3: #E69F53 !important;
  --drx-color-overlay: #282A36 !important;
  --drx-color-pink-1: #FF92DF !important;
  --drx-color-pink-2: #FF79C6 !important;
  --drx-color-pink-3: #E660AD !important;
  --drx-color-purple-1: #D6ACFF !important;
  --drx-color-purple-2: #BD93F9 !important;
  --drx-color-purple-3: #A47AE0 !important;
  --drx-color-red-1: #FF6E6E !important;
  --drx-color-red-2: #FF5555 !important;
  --drx-color-red-3: #E63C3C !important;
  --drx-color-subtext: #BABCC9 !important;
  --drx-color-surface: #21222C !important;
  --drx-color-text: #F8F8F2 !important;
  --drx-color-yellow-1: #FFFFA5 !important;
  --drx-color-yellow-2: #F1FA8C !important;
  --drx-color-yellow-3: #D8E173 !important;
  --drx-shadow-radius: 8px !important;
  --embed-block-shadow-hover: 0 0 0 1px #191A21, inset 0 0 0 1px #191A21 !important;
  --file-header-background: #191A21 !important;
  --file-header-background-focused: #191A21 !important;
  --flair-background: #191A21 !important;
  --flair-color: #F8F8F2 !important;
  --footnote-divider-color: #191A21 !important;
  --footnote-id-color: #BABCC9 !important;
  --footnote-id-color-no-occurrences: #707487 !important;
  --graph-line: #282A36 !important;
  --graph-node: #BABCC9 !important;
  --graph-node-unresolved: #707487 !important;
  --graph-text: #F8F8F2 !important;
  --gray: #BABCC9 !important;
  --h1-line-height: 1.00em !important;
  --h1-size: 1.50em !important;
  --h1-weight: 600 !important;
  --h2-line-height: 1.00em !important;
  --h2-size: 1.35em !important;
  --h2-weight: 600 !important;
  --h3-line-height: 1.00em !important;
  --h3-size: 1.20em !important;
  --h3-weight: 600 !important;
  --h4-line-height: 1.00em !important;
  --h4-size: 1.15em !important;
  --h4-weight: 500 !important;
  --h5-line-height: 1.00em !important;
  --h5-size: 1.10em !important;
  --h5-weight: 500 !important;
  --h6-line-height: 1.00em !important;
  --h6-size: 1.05em !important;
  --h6-weight: 500 !important;
  --heading-formatting: #707487 !important;
  --hr-color: #707487 !important;
  --icon-color: #BABCC9 !important;
  --icon-color-focused: #F8F8F2 !important;
  --icon-color-hover: #BABCC9 !important;
  --inline-title-line-height: 1.00em !important;
  --inline-title-size: 1.50em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #707487 !important;
  --input-placeholder-color: #707487 !important;
  --interactive-hover: #282A36 !important;
  --interactive-normal: #191A21 !important;
  --light: #191A21 !important;
  --lightgray: #191A21 !important;
  --link-color: #BD93F9 !important;
  --link-color-hover: #D6ACFF !important;
  --link-external-color: #BD93F9 !important;
  --link-external-color-hover: #D6ACFF !important;
  --link-unresolved-color: #50FA7B !important;
  --link-unresolved-decoration-color: #FF5555 !important;
  --link-unresolved-opacity: 0.5 !important;
  --list-marker-color: #707487 !important;
  --list-marker-color-hover: #BABCC9 !important;
  --menu-background: #191A21 !important;
  --menu-border-color: #282A36 !important;
  --metadata-border-color: #191A21 !important;
  --metadata-divider-color: #191A21 !important;
  --metadata-input-text-color: #F8F8F2 !important;
  --metadata-label-text-color: #BABCC9 !important;
  --metadata-label-text-color-hover: #BABCC9 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #282A36 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #282A36 !important;
  --modal-background: #191A21 !important;
  --modal-border-color: #282A36 !important;
  --nav-collapse-icon-color: #707487 !important;
  --nav-collapse-icon-color-collapsed: #707487 !important;
  --nav-heading-color: #F8F8F2 !important;
  --nav-heading-color-collapsed: #707487 !important;
  --nav-heading-color-collapsed-hover: #BABCC9 !important;
  --nav-heading-color-hover: #F8F8F2 !important;
  --nav-item-active: #343746 !important;
  --nav-item-color: #BABCC9 !important;
  --nav-item-color-active: #F8F8F2 !important;
  --nav-item-color-hover: #F8F8F2 !important;
  --nav-item-color-selected: #F8F8F2 !important;
  --nav-tag-color: #707487 !important;
  --nav-tag-color-active: #BABCC9 !important;
  --nav-tag-color-hover: #BABCC9 !important;
  --pdf-background: #191A21 !important;
  --pdf-page-background: #191A21 !important;
  --pdf-shadow: 0 0 0 1px #191A21 !important;
  --pdf-sidebar-background: #191A21 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #191A21 !important;
  --pill-border-color: #191A21 !important;
  --pill-border-color-hover: #282A36 !important;
  --pill-color: #BABCC9 !important;
  --pill-color-hover: #F8F8F2 !important;
  --pill-color-remove: #707487 !important;
  --prompt-background: #191A21 !important;
  --prompt-border-color: #282A36 !important;
  --raised-background: color-mix(in srgb, #191A21 65%, transparent) linear-gradient(#191A21, color-mix(in srgb, #191A21 65%, transparent)) !important;
  --ribbon-background: #21222C !important;
  --ribbon-background-collapsed: #191A21 !important;
  --search-clear-button-color: #BABCC9 !important;
  --search-icon-color: #BABCC9 !important;
  --search-result-background: #191A21 !important;
  --setting-group-heading-color: #F8F8F2 !important;
  --setting-items-background: #191A21 !important;
  --setting-items-border-color: #191A21 !important;
  --slider-thumb-border-color: #282A36 !important;
  --slider-track-background: #191A21 !important;
  --status-bar-background: #21222C !important;
  --status-bar-border-color: #191A21 !important;
  --status-bar-text-color: #BABCC9 !important;
  --suggestion-background: #191A21 !important;
  --tab-background-active: #191A21 !important;
  --tab-container-background: #191A21 !important;
  --tab-divider-color: #282A36 !important;
  --tab-outline-color: #191A21 !important;
  --tab-switcher-background: #191A21 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #191A21, transparent) !important;
  --tab-text-color: #707487 !important;
  --tab-text-color-active: #BABCC9 !important;
  --tab-text-color-focused: #BABCC9 !important;
  --tab-text-color-focused-active: #BABCC9 !important;
  --tab-text-color-focused-active-current: #F8F8F2 !important;
  --table-add-button-border-color: #191A21 !important;
  --table-border-color: #191A21 !important;
  --table-drag-handle-color: #707487 !important;
  --table-header-background: #282A36 !important;
  --table-header-border-color: #191A21 !important;
  --table-header-color: #F8F8F2 !important;
  --table-width: 88cqw !important;
  --tag-color: #BD93F9 !important;
  --text-faint: #707487 !important;
  --text-muted: #BABCC9 !important;
  --text-normal: #F8F8F2 !important;
  --text-selection: #282A36 !important;
  --titlebar-background: #191A21 !important;
  --titlebar-background-focused: #191A21 !important;
  --titlebar-border-color: #191A21 !important;
  --titlebar-text-color: #BABCC9 !important;
  --titlebar-text-color-focused: #F8F8F2 !important;
  --vault-profile-color: #F8F8F2 !important;
  --vault-profile-color-hover: #F8F8F2 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(25, 26, 33);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

body .page article p > em, em {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .page article p > i, i {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .page article p > strong, strong {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

body .text-highlight {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: line-through rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body p {
  color: rgb(186, 188, 201);
  outline: rgb(186, 188, 201) none 0px;
  text-decoration: rgb(186, 188, 201);
  text-decoration-color: rgb(186, 188, 201);
}`,
    links: `body a.external, footer a {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: underline rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: underline rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

body a.internal.broken {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: underline rgb(255, 85, 85);
  text-decoration-color: rgb(255, 85, 85);
}`,
    lists: `body dd {
  color: rgb(248, 248, 242);
}

body dt {
  color: rgb(248, 248, 242);
}

body ol > li {
  color: rgb(248, 248, 242);
}

body ol.overflow {
  background-color: rgb(33, 34, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(248, 248, 242);
}

body ul.overflow {
  background-color: rgb(33, 34, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(189, 147, 249);
  text-decoration: rgb(189, 147, 249);
}`,
    tables: `body .spacer {
  background-color: rgb(33, 34, 44);
}

body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body table {
  color: rgb(248, 248, 242);
  width: 662px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(25, 26, 33);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(25, 26, 33);
}

body td {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body th {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body tr {
  background-color: rgb(40, 42, 54);
}`,
    code: `body code {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body pre > code > [data-line] {
  border-left-color: rgb(80, 250, 123);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(80, 250, 123);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(80, 250, 123);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(80, 250, 123);
  border-top-color: rgb(80, 250, 123);
}

body pre > code, pre:has(> code) {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
}

body pre:has(> code) {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
}`,
    images: `body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body figcaption {
  color: rgb(248, 248, 242);
}

body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `body .file-embed {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
}

body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
  text-decoration-color: rgb(186, 188, 201);
}

body input[type=checkbox] {
  border-bottom-color: rgb(112, 116, 135);
  border-left-color: rgb(112, 116, 135);
  border-right-color: rgb(112, 116, 135);
  border-top-color: rgb(112, 116, 135);
}

body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
}

body .callout[data-callout="abstract"] {
  --callout-color: 114, 208, 228;
  background-color: rgba(114, 208, 228, 0.1);
  border-bottom-color: rgba(114, 208, 228, 0.25);
  border-left-color: rgba(114, 208, 228, 0.25);
  border-right-color: rgba(114, 208, 228, 0.25);
  border-top-color: rgba(114, 208, 228, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(255, 85, 85, 0.1);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(255, 85, 85, 0.1);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 255, 121, 198;
  background-color: rgba(255, 121, 198, 0.1);
  border-bottom-color: rgba(255, 121, 198, 0.25);
  border-left-color: rgba(255, 121, 198, 0.25);
  border-right-color: rgba(255, 121, 198, 0.25);
  border-top-color: rgba(255, 121, 198, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(255, 85, 85, 0.1);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 98, 114, 164;
  background-color: rgba(98, 114, 164, 0.1);
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 98, 114, 164;
  background-color: rgba(98, 114, 164, 0.1);
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 255, 184, 108;
  background-color: rgba(255, 184, 108, 0.1);
  border-bottom-color: rgba(255, 184, 108, 0.25);
  border-left-color: rgba(255, 184, 108, 0.25);
  border-right-color: rgba(255, 184, 108, 0.25);
  border-top-color: rgba(255, 184, 108, 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: 189, 147, 249;
  background-color: rgba(189, 147, 249, 0.1);
  border-bottom-color: rgba(189, 147, 249, 0.25);
  border-left-color: rgba(189, 147, 249, 0.25);
  border-right-color: rgba(189, 147, 249, 0.25);
  border-top-color: rgba(189, 147, 249, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 55, 235, 98;
  background-color: rgba(55, 235, 98, 0.1);
  border-bottom-color: rgba(55, 235, 98, 0.25);
  border-left-color: rgba(55, 235, 98, 0.25);
  border-right-color: rgba(55, 235, 98, 0.25);
  border-top-color: rgba(55, 235, 98, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 114, 208, 228;
  background-color: rgba(114, 208, 228, 0.1);
  border-bottom-color: rgba(114, 208, 228, 0.25);
  border-left-color: rgba(114, 208, 228, 0.25);
  border-right-color: rgba(114, 208, 228, 0.25);
  border-top-color: rgba(114, 208, 228, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: white;
  background-color: rgb(255, 85, 85);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 184, 108;
  background-color: rgba(255, 184, 108, 0.1);
  border-bottom-color: rgba(255, 184, 108, 0.25);
  border-left-color: rgba(255, 184, 108, 0.25);
  border-right-color: rgba(255, 184, 108, 0.25);
  border-top-color: rgba(255, 184, 108, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(40, 42, 54);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(40, 42, 54);
  border-right-color: rgb(40, 42, 54);
  border-top-color: rgb(40, 42, 54);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(40, 42, 54);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(40, 42, 54);
  border-right-color: rgb(40, 42, 54);
  border-top-color: rgb(40, 42, 54);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

body a.internal.tag-link::before {
  color: rgb(189, 147, 249);
}

body h1 {
  color: rgb(248, 248, 242);
}

body h2 {
  color: rgb(248, 248, 242);
}

body h2.page-title, h2.page-title a {
  color: rgb(248, 248, 242);
}

body h3 {
  color: rgb(248, 248, 242);
}

body h4 {
  color: rgb(248, 248, 242);
}

body h5 {
  color: rgb(248, 248, 242);
}

body h6 {
  color: rgb(248, 248, 242);
}

body hr {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
}`,
    scrollbars: `body .callout {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}`,
    footer: `body footer {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-left-width: 3px;
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  border-top-left-radius: 10px;
  border-top-width: 3px;
  color: rgb(186, 188, 201);
}

body footer ul li a {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 188, 201);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body li.section-li > .section .meta {
  color: rgb(186, 188, 201);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body .darkmode svg {
  color: rgb(186, 188, 201);
  stroke: rgb(186, 188, 201);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body .breadcrumb-element p {
  color: rgb(112, 116, 135);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .metadata {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(186, 188, 201);
}

body .metadata-properties {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body .navigation-progress {
  background-color: rgb(25, 26, 33);
}

body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

body abbr {
  color: rgb(248, 248, 242);
  text-decoration: underline dotted rgb(248, 248, 242);
}

body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body input[type=text] {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body kbd {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body sub {
  color: rgb(248, 248, 242);
}

body summary {
  color: rgb(248, 248, 242);
}

body sup {
  color: rgb(248, 248, 242);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #EDE9DA !important;
  --background-modifier-border-focus: #DEDBCC !important;
  --background-modifier-border-hover: #DEDBCC !important;
  --background-modifier-form-field: #EDE9DA !important;
  --background-modifier-form-field-hover: #EDE9DA !important;
  --background-primary: #EDE9DA !important;
  --background-primary-alt: #EDE9DA !important;
  --background-secondary: #EDE9DA !important;
  --bases-cards-background: #EDE9DA !important;
  --bases-cards-cover-background: #EDE9DA !important;
  --bases-cards-shadow: 0 0 0 1px #EDE9DA !important;
  --bases-cards-shadow-hover: 0 0 0 1px #DEDBCC !important;
  --bases-embed-border-color: #EDE9DA !important;
  --bases-group-heading-property-color: #6C664B !important;
  --bases-table-border-color: #EDE9DA !important;
  --bases-table-cell-background-active: #EDE9DA !important;
  --bases-table-cell-background-disabled: #EDE9DA !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #DEDBCC !important;
  --bases-table-group-background: #EDE9DA !important;
  --bases-table-header-background: #EDE9DA !important;
  --bases-table-header-color: #6C664B !important;
  --bases-table-summary-background: #EDE9DA !important;
  --blur-background: color-mix(in srgb, #EDE9DA 65%, transparent) linear-gradient(#EDE9DA, color-mix(in srgb, #EDE9DA 65%, transparent)) !important;
  --bold-color: #CB3A2A !important;
  --callout-bug: 255, 85, 85;
  --callout-default: 98, 114, 164;
  --callout-error: 255, 85, 85;
  --callout-example: 255, 121, 198;
  --callout-fail: 255, 85, 85;
  --callout-important: 189, 147, 249;
  --callout-info: 98, 114, 164;
  --callout-question: 255, 184, 108;
  --callout-quote: 189, 147, 249;
  --callout-success: 55, 235, 98;
  --callout-summary: 114, 208, 228;
  --callout-tip: 114, 208, 228;
  --callout-todo: white;
  --callout-warning: 255, 184, 108;
  --canvas-background: #EDE9DA !important;
  --canvas-card-label-color: #BCBAB3 !important;
  --canvas-dot-pattern: #EDE9DA !important;
  --caret-color: #1F1F1F !important;
  --checkbox-border-color: #BCBAB3 !important;
  --checkbox-border-color-hover: #6C664B !important;
  --checkbox-marker-color: #EDE9DA !important;
  --checklist-done-color: #6C664B !important;
  --checklist-done-decoration: none !important;
  --code-background: #EDE9DA !important;
  --code-border-color: #EDE9DA !important;
  --code-comment: #6C664B !important;
  --code-function: #14710A !important;
  --code-important: #A3144D !important;
  --code-keyword: #B16286 !important;
  --code-normal: #6C664B !important;
  --code-operator: #A3144D !important;
  --code-property: #D65D0E !important;
  --code-punctuation: #6C664B !important;
  --code-string: #846E15 !important;
  --code-tag: #A3144D !important;
  --code-value: #644AC9 !important;
  --collapse-icon-color: #BCBAB3 !important;
  --color-base-00: #EDE9DA !important;
  --color-base-10: #EDE9DA !important;
  --color-base-100: #1F1F1F !important;
  --color-base-20: #EDE9DA !important;
  --color-base-25: #EDE9DA !important;
  --color-base-30: #EDE9DA !important;
  --color-base-35: #DEDBCC !important;
  --color-base-40: #DEDBCC !important;
  --color-base-50: #BCBAB3 !important;
  --color-base-60: red !important;
  --color-base-70: #6C664B !important;
  --dark: #1F1F1F !important;
  --darkgray: #1F1F1F !important;
  --divider-color: #EDE9DA !important;
  --dropdown-background: #EDE9DA !important;
  --dropdown-background-hover: #EDE9DA !important;
  --drx-border-radius: 10px !important;
  --drx-border-width: 2px !important;
  --drx-color-accent: #CB3A2A !important;
  --drx-color-base: #EDE9DA !important;
  --drx-color-blue-1: #047FB4 !important;
  --drx-color-blue-2: #036A96 !important;
  --drx-color-blue-3: #000000 !important;
  --drx-color-callout-blue: 84, 179, 255 !important;
  --drx-color-callout-comment: 98, 114, 164 !important;
  --drx-color-callout-cyan: 114, 208, 228 !important;
  --drx-color-callout-green: 55, 235, 98 !important;
  --drx-color-callout-orange: 255, 184, 108 !important;
  --drx-color-callout-pink: 255, 121, 198 !important;
  --drx-color-callout-purple: 189, 147, 249 !important;
  --drx-color-callout-red: 255, 85, 85 !important;
  --drx-color-callout-yellow: 241, 250, 140 !important;
  --drx-color-comment: #6C664B !important;
  --drx-color-cyan-1: #000000 !important;
  --drx-color-cyan-2: #036A96 !important;
  --drx-color-cyan-3: #000000 !important;
  --drx-color-deactivate: #BCBAB3 !important;
  --drx-color-green-1: #198D0C !important;
  --drx-color-green-2: #14710A !important;
  --drx-color-green-3: #000000 !important;
  --drx-color-highlight: #CECCC0 !important;
  --drx-color-important: #E1776B !important;
  --drx-color-orange-1: #000000 !important;
  --drx-color-orange-2: #D65D0E !important;
  --drx-color-orange-3: #AF3A03 !important;
  --drx-color-overlay: #DEDBCC !important;
  --drx-color-pink-1: #000000 !important;
  --drx-color-pink-2: #B16286 !important;
  --drx-color-pink-3: #8F3F71 !important;
  --drx-color-purple-1: #7862D0 !important;
  --drx-color-purple-2: #644AC9 !important;
  --drx-color-purple-3: #000000 !important;
  --drx-color-red-1: #BF185A !important;
  --drx-color-red-2: #A3144D !important;
  --drx-color-red-3: #000000 !important;
  --drx-color-subtext: #6C664B !important;
  --drx-color-surface: #FFFBEB !important;
  --drx-color-text: #1F1F1F !important;
  --drx-color-yellow-1: #9E841A !important;
  --drx-color-yellow-2: #846E15 !important;
  --drx-color-yellow-3: #000000 !important;
  --drx-shadow-radius: 8px !important;
  --embed-block-shadow-hover: 0 0 0 1px #EDE9DA, inset 0 0 0 1px #EDE9DA !important;
  --file-header-background: #EDE9DA !important;
  --file-header-background-focused: #EDE9DA !important;
  --flair-background: #EDE9DA !important;
  --flair-color: #1F1F1F !important;
  --footnote-divider-color: #EDE9DA !important;
  --footnote-id-color: #6C664B !important;
  --footnote-id-color-no-occurrences: #BCBAB3 !important;
  --graph-line: #DEDBCC !important;
  --graph-node: #6C664B !important;
  --graph-node-unresolved: #BCBAB3 !important;
  --graph-text: #1F1F1F !important;
  --gray: #6C664B !important;
  --h1-line-height: 1.00em !important;
  --h1-size: 1.50em !important;
  --h1-weight: 600 !important;
  --h2-line-height: 1.00em !important;
  --h2-size: 1.35em !important;
  --h2-weight: 600 !important;
  --h3-line-height: 1.00em !important;
  --h3-size: 1.20em !important;
  --h3-weight: 600 !important;
  --h4-line-height: 1.00em !important;
  --h4-size: 1.15em !important;
  --h4-weight: 500 !important;
  --h5-line-height: 1.00em !important;
  --h5-size: 1.10em !important;
  --h5-weight: 500 !important;
  --h6-line-height: 1.00em !important;
  --h6-size: 1.05em !important;
  --h6-weight: 500 !important;
  --heading-formatting: #BCBAB3 !important;
  --hr-color: #BCBAB3 !important;
  --icon-color: #6C664B !important;
  --icon-color-focused: #1F1F1F !important;
  --icon-color-hover: #6C664B !important;
  --inline-title-line-height: 1.00em !important;
  --inline-title-size: 1.50em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #BCBAB3 !important;
  --input-placeholder-color: #BCBAB3 !important;
  --interactive-hover: #EDE9DA !important;
  --interactive-normal: #EDE9DA !important;
  --light: #EDE9DA !important;
  --lightgray: #EDE9DA !important;
  --link-color: #CB3A2A !important;
  --link-color-hover: #E1776B !important;
  --link-external-color: #CB3A2A !important;
  --link-external-color-hover: #E1776B !important;
  --link-unresolved-color: #14710A !important;
  --link-unresolved-decoration-color: #A3144D !important;
  --link-unresolved-opacity: 0.5 !important;
  --list-marker-color: #BCBAB3 !important;
  --list-marker-color-hover: #6C664B !important;
  --menu-background: #EDE9DA !important;
  --menu-border-color: #DEDBCC !important;
  --metadata-border-color: #EDE9DA !important;
  --metadata-divider-color: #EDE9DA !important;
  --metadata-input-text-color: #1F1F1F !important;
  --metadata-label-text-color: #6C664B !important;
  --metadata-label-text-color-hover: #6C664B !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #DEDBCC !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #DEDBCC !important;
  --modal-background: #EDE9DA !important;
  --modal-border-color: #DEDBCC !important;
  --nav-collapse-icon-color: #BCBAB3 !important;
  --nav-collapse-icon-color-collapsed: #BCBAB3 !important;
  --nav-heading-color: #1F1F1F !important;
  --nav-heading-color-collapsed: #BCBAB3 !important;
  --nav-heading-color-collapsed-hover: #6C664B !important;
  --nav-heading-color-hover: #1F1F1F !important;
  --nav-item-active: #CECCC0 !important;
  --nav-item-color: #6C664B !important;
  --nav-item-color-active: #1F1F1F !important;
  --nav-item-color-hover: #1F1F1F !important;
  --nav-item-color-selected: #1F1F1F !important;
  --nav-tag-color: #BCBAB3 !important;
  --nav-tag-color-active: #6C664B !important;
  --nav-tag-color-hover: #6C664B !important;
  --pdf-background: #EDE9DA !important;
  --pdf-page-background: #EDE9DA !important;
  --pdf-sidebar-background: #EDE9DA !important;
  --pill-border-color: #EDE9DA !important;
  --pill-border-color-hover: #DEDBCC !important;
  --pill-color: #6C664B !important;
  --pill-color-hover: #1F1F1F !important;
  --pill-color-remove: #BCBAB3 !important;
  --prompt-background: #EDE9DA !important;
  --prompt-border-color: #DEDBCC !important;
  --raised-background: color-mix(in srgb, #EDE9DA 65%, transparent) linear-gradient(#EDE9DA, color-mix(in srgb, #EDE9DA 65%, transparent)) !important;
  --ribbon-background: #FFFBEB !important;
  --ribbon-background-collapsed: #EDE9DA !important;
  --search-clear-button-color: #6C664B !important;
  --search-icon-color: #6C664B !important;
  --search-result-background: #EDE9DA !important;
  --setting-group-heading-color: #1F1F1F !important;
  --setting-items-background: #EDE9DA !important;
  --setting-items-border-color: #EDE9DA !important;
  --slider-thumb-border-color: #DEDBCC !important;
  --slider-track-background: #EDE9DA !important;
  --status-bar-background: #FFFBEB !important;
  --status-bar-border-color: #EDE9DA !important;
  --status-bar-text-color: #6C664B !important;
  --suggestion-background: #EDE9DA !important;
  --tab-background-active: #EDE9DA !important;
  --tab-container-background: #EDE9DA !important;
  --tab-divider-color: #DEDBCC !important;
  --tab-outline-color: #EDE9DA !important;
  --tab-switcher-background: #EDE9DA !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #EDE9DA, transparent) !important;
  --tab-text-color: #BCBAB3 !important;
  --tab-text-color-active: #6C664B !important;
  --tab-text-color-focused: #6C664B !important;
  --tab-text-color-focused-active: #6C664B !important;
  --tab-text-color-focused-active-current: #1F1F1F !important;
  --table-add-button-border-color: #EDE9DA !important;
  --table-border-color: #EDE9DA !important;
  --table-drag-handle-color: #BCBAB3 !important;
  --table-header-background: #DEDBCC !important;
  --table-header-border-color: #EDE9DA !important;
  --table-header-color: #1F1F1F !important;
  --table-width: 88cqw !important;
  --tag-color: #CB3A2A !important;
  --text-faint: #BCBAB3 !important;
  --text-muted: #6C664B !important;
  --text-normal: #1F1F1F !important;
  --text-selection: #DEDBCC !important;
  --titlebar-background: #EDE9DA !important;
  --titlebar-border-color: #EDE9DA !important;
  --titlebar-text-color: #6C664B !important;
  --titlebar-text-color-focused: #1F1F1F !important;
  --vault-profile-color: #1F1F1F !important;
  --vault-profile-color-hover: #1F1F1F !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(237, 233, 218);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body div#quartz-root {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}`,
    typography: `body .page article p > b, b {
  color: rgb(203, 58, 42);
  outline: rgb(203, 58, 42) none 0px;
  text-decoration: rgb(203, 58, 42);
  text-decoration-color: rgb(203, 58, 42);
}

body .page article p > em, em {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body .page article p > i, i {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body .page article p > strong, strong {
  color: rgb(203, 58, 42);
  outline: rgb(203, 58, 42) none 0px;
  text-decoration: rgb(203, 58, 42);
  text-decoration-color: rgb(203, 58, 42);
}

body .text-highlight {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body del {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: line-through rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body p {
  color: rgb(108, 102, 75);
  outline: rgb(108, 102, 75) none 0px;
  text-decoration: rgb(108, 102, 75);
  text-decoration-color: rgb(108, 102, 75);
}`,
    links: `body a.external, footer a {
  color: rgb(203, 58, 42);
  outline: rgb(203, 58, 42) none 0px;
  text-decoration: underline rgb(203, 58, 42);
  text-decoration-color: rgb(203, 58, 42);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(203, 58, 42);
  outline: rgb(203, 58, 42) none 0px;
  text-decoration: underline rgb(203, 58, 42);
  text-decoration-color: rgb(203, 58, 42);
}

body a.internal.broken {
  color: rgb(203, 58, 42);
  outline: rgb(203, 58, 42) none 0px;
  text-decoration: underline rgb(163, 20, 77);
  text-decoration-color: rgb(163, 20, 77);
}`,
    lists: `body dd {
  color: rgb(31, 31, 31);
}

body dt {
  color: rgb(31, 31, 31);
}

body ol > li {
  color: rgb(31, 31, 31);
}

body ol.overflow {
  background-color: rgb(255, 251, 235);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body ul > li {
  color: rgb(31, 31, 31);
}

body ul.overflow {
  background-color: rgb(255, 251, 235);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(203, 58, 42);
  text-decoration: rgb(203, 58, 42);
}`,
    tables: `body .spacer {
  background-color: rgb(255, 251, 235);
}

body .table-container {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body table {
  color: rgb(31, 31, 31);
  width: 662px;
}

body td {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body th {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body tr {
  background-color: rgb(255, 251, 235);
}`,
    code: `body code {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body pre > code > [data-line] {
  border-left-color: rgb(20, 113, 10);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(20, 113, 10);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(20, 113, 10);
  border-left-color: rgb(20, 113, 10);
  border-right-color: rgb(20, 113, 10);
  border-top-color: rgb(20, 113, 10);
}

body pre > code, pre:has(> code) {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
}

body pre:has(> code) {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
}`,
    images: `body audio {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body figcaption {
  color: rgb(31, 31, 31);
}

body figure {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body img {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body video {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    embeds: `body .file-embed {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
}

body .footnotes {
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .transclude {
  border-bottom-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body .transclude-inner {
  border-bottom-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
  text-decoration-color: rgb(108, 102, 75);
}

body input[type=checkbox] {
  border-bottom-color: rgb(188, 186, 179);
  border-left-color: rgb(188, 186, 179);
  border-right-color: rgb(188, 186, 179);
  border-top-color: rgb(188, 186, 179);
}

body li.task-list-item[data-task='!'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='*'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='-'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='/'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='>'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='?'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='I'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='S'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='b'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='c'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='d'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='f'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='i'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='k'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='l'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='p'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='u'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='w'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .callout > .callout-content {
  background-color: rgb(237, 233, 218);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 114, 208, 228;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgba(114, 208, 228, 0.25);
  border-left-color: rgba(114, 208, 228, 0.25);
  border-right-color: rgba(114, 208, 228, 0.25);
  border-top-color: rgba(114, 208, 228, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(255, 85, 85, 0.247);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 255, 121, 198;
  background-color: rgba(163, 20, 77, 0.31);
  border-bottom-color: rgba(255, 121, 198, 0.25);
  border-left-color: rgba(255, 121, 198, 0.25);
  border-right-color: rgba(255, 121, 198, 0.25);
  border-top-color: rgba(255, 121, 198, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 98, 114, 164;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 98, 114, 164;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 255, 184, 108;
  background-color: rgba(255, 184, 108, 0.247);
  border-bottom-color: rgba(255, 184, 108, 0.25);
  border-left-color: rgba(255, 184, 108, 0.25);
  border-right-color: rgba(255, 184, 108, 0.25);
  border-top-color: rgba(255, 184, 108, 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: 189, 147, 249;
  background-color: rgba(100, 74, 201, 0.31);
  border-bottom-color: rgba(189, 147, 249, 0.25);
  border-left-color: rgba(189, 147, 249, 0.25);
  border-right-color: rgba(189, 147, 249, 0.25);
  border-top-color: rgba(189, 147, 249, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 55, 235, 98;
  background-color: rgba(80, 250, 123, 0.247);
  border-bottom-color: rgba(55, 235, 98, 0.25);
  border-left-color: rgba(55, 235, 98, 0.25);
  border-right-color: rgba(55, 235, 98, 0.25);
  border-top-color: rgba(55, 235, 98, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 114, 208, 228;
  background-color: rgba(3, 106, 150, 0.31);
  border-bottom-color: rgba(114, 208, 228, 0.25);
  border-left-color: rgba(114, 208, 228, 0.25);
  border-right-color: rgba(114, 208, 228, 0.25);
  border-top-color: rgba(114, 208, 228, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: white;
  background-color: rgb(163, 20, 77);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 184, 108;
  background-color: rgba(214, 93, 14, 0.31);
  border-bottom-color: rgba(255, 184, 108, 0.25);
  border-left-color: rgba(255, 184, 108, 0.25);
  border-right-color: rgba(255, 184, 108, 0.25);
  border-top-color: rgba(255, 184, 108, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(222, 219, 204);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(222, 219, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(222, 219, 204);
  border-right-color: rgb(222, 219, 204);
  border-top-color: rgb(222, 219, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(222, 219, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(222, 219, 204);
  border-right-color: rgb(222, 219, 204);
  border-top-color: rgb(222, 219, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(222, 219, 204);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(31, 31, 31);
}

body a.internal.tag-link::before {
  color: rgb(203, 58, 42);
}

body h1 {
  color: rgb(31, 31, 31);
}

body h2 {
  color: rgb(31, 31, 31);
}

body h2.page-title, h2.page-title a {
  color: rgb(31, 31, 31);
}

body h3 {
  color: rgb(31, 31, 31);
}

body h4 {
  color: rgb(31, 31, 31);
}

body h5 {
  color: rgb(31, 31, 31);
}

body h6 {
  color: rgb(31, 31, 31);
}

body hr {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
}`,
    scrollbars: `body .callout {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
}

body ::-webkit-scrollbar-corner {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
}

body ::-webkit-scrollbar-track {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}`,
    footer: `body footer {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-left-width: 3px;
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  border-top-left-radius: 10px;
  border-top-width: 3px;
  color: rgb(108, 102, 75);
}

body footer ul li a {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(31, 31, 31);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(108, 102, 75);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body li.section-li > .section .meta {
  color: rgb(108, 102, 75);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}

body ul.section-ul {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body .darkmode svg {
  color: rgb(108, 102, 75);
  stroke: rgb(108, 102, 75);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body .breadcrumb-element p {
  color: rgb(188, 186, 179);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .metadata {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(108, 102, 75);
}

body .metadata-properties {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body .navigation-progress {
  background-color: rgb(237, 233, 218);
}

body .page-header h2.page-title {
  color: rgb(31, 31, 31);
}

body abbr {
  color: rgb(31, 31, 31);
  text-decoration: underline dotted rgb(31, 31, 31);
}

body details {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body input[type=text] {
  background-color: rgb(222, 219, 204);
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body kbd {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body progress {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body sub {
  color: rgb(31, 31, 31);
}

body summary {
  color: rgb(31, 31, 31);
}

body sup {
  color: rgb(31, 31, 31);
}`,
  },
};
