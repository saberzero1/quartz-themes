import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "pine-forest-berry",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["inconsolata"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --active-header-border: #759e93 !important;
  --active-header-buttons: #f2f2f2 !important;
  --background-accent: #f8f8f2 !important;
  --background-code: #292c33 !important;
  --background-header-one: #2e3440 !important;
  --background-header-two: #4a6860 !important;
  --background-modal: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-border: #759e93 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-nav: #2e3440 !important;
  --background-nav-alt: #2a2c32 !important;
  --background-primary: #2e3440 !important;
  --background-primary-alt: #2a2c32 !important;
  --background-secondary: #3b4252 !important;
  --background-secondary-alt: #292c33 !important;
  --bases-cards-background: #2e3440 !important;
  --bases-cards-cover-background: #2a2c32 !important;
  --bases-cards-shadow: 0 0 0 1px #759e93 !important;
  --bases-embed-border-color: #759e93 !important;
  --bases-group-heading-property-color: #f8f8f2 !important;
  --bases-table-border-color: #759e93 !important;
  --bases-table-cell-background-active: #2e3440 !important;
  --bases-table-cell-background-disabled: #2a2c32 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #548a7b !important;
  --bases-table-group-background: #2a2c32 !important;
  --bases-table-header-background: #2e3440 !important;
  --bases-table-header-color: #f8f8f2 !important;
  --bases-table-summary-background: #2e3440 !important;
  --berry-red-faded: #ab687e !important;
  --berry-red-light: #ad3266 !important;
  --berry-red-strong: #c72e6e !important;
  --blockquote-border: #ffb86c !important;
  --blockquote-border-color: #548a7b !important;
  --blue-gray: #546285 !important;
  --blue-gray-dark: #3b4252 !important;
  --blue-gray-darkest: #15181e !important;
  --blue-gray-light: #7a859f !important;
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent)) !important;
  --border-color: #2b2727 !important;
  --calendar-days: #cccccc !important;
  --calendar-days-hover: #f2f2f2 !important;
  --canvas-background: #2e3440 !important;
  --canvas-card-label-color: #759e93 !important;
  --caret-color: #f8f8f2 !important;
  --checkbox-border-color: #759e93 !important;
  --checkbox-border-color-hover: #f8f8f2 !important;
  --checkbox-color: #548a7b !important;
  --checkbox-color-hover: #d47d7d !important;
  --checkbox-left: 0px !important;
  --checkbox-margin: 0px 6px 0px -2em !important;
  --checkbox-marker-color: #2e3440 !important;
  --checkbox-radius: 50% !important;
  --checkbox-top: 2px !important;
  --checklist-done-color: #f8f8f2 !important;
  --checklist-done-decoration: none !important;
  --code-background: #2a2c32 !important;
  --code-block: #759e93 !important;
  --code-border-color: #759e93 !important;
  --code-comment: #759e93 !important;
  --code-normal: #f8f8f2 !important;
  --code-punctuation: #f8f8f2 !important;
  --collapse-icon-color: #759e93 !important;
  --collapse-icon-color-collapsed: #f2bd77 !important;
  --dark: #f8f8f2 !important;
  --darkgray: #f8f8f2 !important;
  --divider-color: #759e93 !important;
  --divider-color-hover: #548a7b !important;
  --dropdown-background: #ffffff !important;
  --dropdown-background-hover: #d47d7d !important;
  --embed-block-shadow-hover: 0 0 0 1px #759e93, inset 0 0 0 1px #759e93 !important;
  --embed-border-start: 2px solid #548a7b !important;
  --file-header-background: #2e3440 !important;
  --file-header-background-focused: #2e3440 !important;
  --flair-background: #ffffff !important;
  --flair-color: #f8f8f2 !important;
  --font-family-editor: Inconsolata, Monaco, Consolas, 'Courier New', Courier !important;
  --font-family-preview: Avenir, Avenir Next, sans-serif !important;
  --footnote-divider-color: #759e93 !important;
  --footnote-id-color: #f8f8f2 !important;
  --footnote-id-color-no-occurrences: #759e93 !important;
  --forest-green-dark: #4a6860 !important;
  --forest-green-faded: #c3d5d0 !important;
  --forest-green-half: rgb(117, 158, 147, 0.4) !important;
  --forest-green-light: #759e93 !important;
  --graph-background: #2a2c32 !important;
  --graph-dots: #f2f2f2 !important;
  --graph-links: rgba(157, 212, 207, 0.75) !important;
  --graph-node: #f8f8f2 !important;
  --graph-node-focused: #f2bd77 !important;
  --graph-node-unresolved: #759e93 !important;
  --graph-text: #f8f8f2 !important;
  --gray: #f8f8f2 !important;
  --heading-formatting: #759e93 !important;
  --highlight: #d5548a60 !important;
  --horizontal-line: #759e93 !important;
  --horizontal-line-element: #9fd4d6 !important;
  --hr-color: #759e93 !important;
  --icon-color: #f8f8f2 !important;
  --icon-color-active: #f2bd77 !important;
  --icon-color-focused: #f8f8f2 !important;
  --icon-color-hover: #f8f8f2 !important;
  --inline-code: #759e93 !important;
  --input-date-separator: #759e93 !important;
  --input-placeholder-color: #759e93 !important;
  --interactive-accent: #548a7b !important;
  --interactive-accent-hover: #d47d7d !important;
  --interactive-accent-rgb: 123, 108, 217 !important;
  --interactive-hover: #d47d7d !important;
  --interactive-normal: #ffffff !important;
  --light: #2e3440 !important;
  --lightgray: #3b4252 !important;
  --link-color: #f2bd77 !important;
  --link-color-hover: #c72e6e !important;
  --link-external-color: #f2bd77 !important;
  --link-external-color-hover: #c72e6e !important;
  --link-unresolved-color: #f2bd77 !important;
  --list-marker-color: #759e93 !important;
  --list-marker-color-collapsed: #f2bd77 !important;
  --list-marker-color-hover: #f8f8f2 !important;
  --menu-background: #3b4252 !important;
  --menu-item-hover: #2e3440 !important;
  --metadata-border-color: #759e93 !important;
  --metadata-divider-color: #759e93 !important;
  --metadata-input-text-color: #f8f8f2 !important;
  --metadata-label-text-color: #f8f8f2 !important;
  --metadata-label-text-color-hover: #f8f8f2 !important;
  --mint-green: #9dd4cf !important;
  --modal-background: #2e3440 !important;
  --nav-collapse-icon-color: #759e93 !important;
  --nav-collapse-icon-color-collapsed: #759e93 !important;
  --nav-heading-color: #f8f8f2 !important;
  --nav-heading-color-collapsed: #759e93 !important;
  --nav-heading-color-collapsed-hover: #f8f8f2 !important;
  --nav-heading-color-hover: #f8f8f2 !important;
  --nav-item-color: #f8f8f2 !important;
  --nav-item-color-active: #f8f8f2 !important;
  --nav-item-color-highlighted: #f2bd77 !important;
  --nav-item-color-hover: #f8f8f2 !important;
  --nav-item-color-selected: #f8f8f2 !important;
  --nav-tag-color: #759e93 !important;
  --nav-tag-color-active: #f8f8f2 !important;
  --nav-tag-color-hover: #f8f8f2 !important;
  --off-white: #f2f2f2 !important;
  --off-white-alt: #e6e6e6 !important;
  --off-white-dark: #cccccc !important;
  --off-white-darker: #8c8c8c !important;
  --off-white-faded: rgb(242, 242, 242, 0.8) !important;
  --orange-yellow: #f2bd77 !important;
  --orange-yellow-dark: #eea444 !important;
  --pdf-background: #2e3440 !important;
  --pdf-page-background: #2e3440 !important;
  --pdf-shadow: 0 0 0 1px #759e93 !important;
  --pdf-sidebar-background: #2e3440 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #759e93 !important;
  --pill-border-color: #759e93 !important;
  --pill-color: #f8f8f2 !important;
  --pill-color-hover: #f8f8f2 !important;
  --pill-color-remove: #759e93 !important;
  --pill-color-remove-hover: #f2bd77 !important;
  --pre-code: #2e3440 !important;
  --prompt-background: #2e3440 !important;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent)) !important;
  --ribbon-background: #3b4252 !important;
  --ribbon-background-collapsed: #2e3440 !important;
  --search-clear-button-color: #f8f8f2 !important;
  --search-icon-color: #f8f8f2 !important;
  --search-result-background: #2e3440 !important;
  --secondary: #f2bd77 !important;
  --selected-item: #759e93 !important;
  --setting-group-heading-color: #f8f8f2 !important;
  --setting-items-background: #2a2c32 !important;
  --setting-items-border-color: #759e93 !important;
  --slider-track-background: #759e93 !important;
  --status-bar-background: #3b4252 !important;
  --status-bar-border-color: #759e93 !important;
  --status-bar-text-color: #f8f8f2 !important;
  --suggestion-background: #2e3440 !important;
  --tab-background-active: #2e3440 !important;
  --tab-container-background: #3b4252 !important;
  --tab-outline-color: #759e93 !important;
  --tab-switcher-background: #3b4252 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #3b4252, transparent) !important;
  --tab-text-color: #759e93 !important;
  --tab-text-color-active: #f8f8f2 !important;
  --tab-text-color-focused: #f8f8f2 !important;
  --tab-text-color-focused-active: #f8f8f2 !important;
  --tab-text-color-focused-active-current: #f8f8f2 !important;
  --tab-text-color-focused-highlighted: #f2bd77 !important;
  --table-add-button-border-color: #759e93 !important;
  --table-border-color: #759e93 !important;
  --table-drag-handle-background-active: #548a7b !important;
  --table-drag-handle-color: #759e93 !important;
  --table-drag-handle-color-active: #eddee3 !important;
  --table-header-border-color: #759e93 !important;
  --table-header-color: #f8f8f2 !important;
  --table-selection-border-color: #548a7b !important;
  --tag-color: #f2bd77 !important;
  --tag-color-hover: #f2bd77 !important;
  --tertiary: #c72e6e !important;
  --text-accent: #f2bd77 !important;
  --text-accent-hover: #c72e6e !important;
  --text-error: #ab687e !important;
  --text-error-hover: #ff79c6 !important;
  --text-faint: #759e93 !important;
  --text-highlight: #ad3266 !important;
  --text-highlight-bg: #d5548a60 !important;
  --text-muted: #f8f8f2 !important;
  --text-muted-real: #f8f8f2 !important;
  --text-nav: #c3d5d0 !important;
  --text-normal: #f8f8f2 !important;
  --text-on-accent: #eddee3 !important;
  --text-selection: rgba(157, 212, 207, 0.75) !important;
  --text-status-bar: #cccccc !important;
  --text-title-h1: #c72e6e !important;
  --text-title-h2: #ffffff !important;
  --text-title-h3: #95bab0 !important;
  --text-title-h4: #759e93 !important;
  --text-title-h5: #548a7b !important;
  --text-title-h6: #377362 !important;
  --textHighlight: #d5548a60 !important;
  --titlebar-background: #3b4252 !important;
  --titlebar-background-focused: #292c33 !important;
  --titlebar-border-color: #759e93 !important;
  --titlebar-text-color: #f8f8f2 !important;
  --titlebar-text-color-focused: #f8f8f2 !important;
  --vault-profile-color: #f8f8f2 !important;
  --vault-profile-color-hover: #f8f8f2 !important;
  --vim-cursor: #ff5555 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(59, 66, 82);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(46, 52, 64);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(42, 44, 50);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(59, 66, 82);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(46, 52, 64);
  color: rgb(248, 248, 242);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(199, 46, 110);
  outline: rgb(199, 46, 110) none 0px;
  text-decoration: rgb(199, 46, 110);
  text-decoration-color: rgb(199, 46, 110);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(117, 158, 147);
  outline: rgb(117, 158, 147) none 0px;
  text-decoration: rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(117, 158, 147);
  outline: rgb(117, 158, 147) none 0px;
  text-decoration: rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(199, 46, 110);
  outline: rgb(199, 46, 110) none 0px;
  text-decoration: rgb(199, 46, 110);
  text-decoration-color: rgb(199, 46, 110);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(213, 84, 138, 0.376);
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: line-through rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body p {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(242, 189, 119);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(242, 189, 119) none 0px;
  text-decoration: rgb(242, 189, 119);
  text-decoration-color: rgb(242, 189, 119);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(242, 189, 119);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(242, 189, 119) none 0px;
  text-decoration: rgb(242, 189, 119);
  text-decoration-color: rgb(242, 189, 119);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(242, 189, 119);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(242, 189, 119) none 0px;
  text-decoration: rgb(242, 189, 119);
  text-decoration-color: rgb(242, 189, 119);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body dt {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(117, 158, 147);
  text-decoration: rgb(117, 158, 147);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(46, 52, 64);
  font-family: Avenir, "Avenir Next", sans-serif;
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body table {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  width: 195.062px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(248, 248, 242);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(117, 158, 147);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(84, 138, 123);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(84, 138, 123);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(117, 158, 147);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(117, 158, 147);
  text-decoration: line-through 1px rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(41, 44, 51);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(41, 44, 51);
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(84, 138, 123);
  border-right-color: rgb(84, 138, 123);
  border-top-color: rgb(84, 138, 123);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(41, 44, 51);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(41, 44, 51);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(242, 189, 119);
}

html[saved-theme="dark"] body h1 {
  color: rgb(199, 46, 110);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 255, 255);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(149, 186, 176);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(84, 138, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(55, 115, 98);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(195, 213, 208);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(195, 213, 208);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(195, 213, 208);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(195, 213, 208);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(195, 213, 208);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(195, 213, 208);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(248, 248, 242);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(41, 44, 51);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(204, 204, 204);
  border-top-width: 0px;
  color: rgb(204, 204, 204);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(195, 213, 208);
  text-decoration: rgb(195, 213, 208);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(195, 213, 208);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(195, 213, 208);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(195, 213, 208);
  text-decoration: rgb(195, 213, 208);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(248, 248, 242);
  stroke: rgb(248, 248, 242);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(117, 158, 147);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(41, 44, 51);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body abbr {
  color: rgb(248, 248, 242);
  text-decoration: underline dotted rgb(248, 248, 242);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body sub {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body summary {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body sup {
  color: rgb(248, 248, 242);
}`,
  },
  light: {
    base: `:root:root {
  --active-header-border: #f2bd77 !important;
  --active-header-buttons: #4a6860 !important;
  --background-accent: #4a6860 !important;
  --background-code: #e6e6e6 !important;
  --background-dark: #3b4252 !important;
  --background-header-one: #f2f2f2 !important;
  --background-header-two: #c3d5d0 !important;
  --background-modal: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-border: #759e93 !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-nav: #f2f2f2 !important;
  --background-nav-alt: #e6e6e6 !important;
  --background-primary: #f2f2f2 !important;
  --background-primary-alt: #e6e6e6 !important;
  --background-primary-faded: rgb(242, 242, 242, 0.8) !important;
  --background-secondary: #f2f2f2 !important;
  --background-secondary-alt: #c3d5d0 !important;
  --background-secondary-real: #cccccc !important;
  --bases-cards-background: #f2f2f2 !important;
  --bases-cards-cover-background: #e6e6e6 !important;
  --bases-cards-shadow: 0 0 0 1px #759e93 !important;
  --bases-embed-border-color: #759e93 !important;
  --bases-group-heading-property-color: #8c8c8c !important;
  --bases-table-border-color: #759e93 !important;
  --bases-table-cell-background-active: #f2f2f2 !important;
  --bases-table-cell-background-disabled: #e6e6e6 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #759e93 !important;
  --bases-table-group-background: #e6e6e6 !important;
  --bases-table-header-background: #f2f2f2 !important;
  --bases-table-header-color: #8c8c8c !important;
  --bases-table-summary-background: #f2f2f2 !important;
  --berry-red-faded: #ab687e !important;
  --berry-red-light: #ad3266 !important;
  --berry-red-strong: #c72e6e !important;
  --blockquote-border: #4a6860 !important;
  --blockquote-border-color: #759e93 !important;
  --blue-gray: #546285 !important;
  --blue-gray-dark: #3b4252 !important;
  --blue-gray-darkest: #15181e !important;
  --blue-gray-light: #7a859f !important;
  --blur-background: color-mix(in srgb, #f2f2f2 65%, transparent) linear-gradient(#f2f2f2, color-mix(in srgb, #f2f2f2 65%, transparent)) !important;
  --border-color: #4a6860 !important;
  --calendar-days: #4a6860 !important;
  --calendar-days-hover: #15181e !important;
  --canvas-background: #f2f2f2 !important;
  --canvas-card-label-color: #759e93 !important;
  --caret-color: #15181e !important;
  --checkbox-border-color: #759e93 !important;
  --checkbox-border-color-hover: #8c8c8c !important;
  --checkbox-color: #759e93 !important;
  --checkbox-color-hover: #eea444 !important;
  --checkbox-left: 0px !important;
  --checkbox-margin: 0px 6px 0px -2em !important;
  --checkbox-marker-color: #3b4252 !important;
  --checkbox-radius: 50% !important;
  --checkbox-top: 2px !important;
  --checklist-done-color: #15181e !important;
  --checklist-done-decoration: none !important;
  --code-background: #e6e6e6 !important;
  --code-block: #c72e6e !important;
  --code-border-color: #759e93 !important;
  --code-comment: #759e93 !important;
  --code-normal: #15181e !important;
  --code-punctuation: #8c8c8c !important;
  --collapse-icon-color: #759e93 !important;
  --collapse-icon-color-collapsed: #eea444 !important;
  --dark: #15181e !important;
  --darkgray: #15181e !important;
  --divider-color: #759e93 !important;
  --divider-color-hover: #759e93 !important;
  --dropdown-background: #759e93 !important;
  --dropdown-background-hover: #eea444 !important;
  --embed-block-shadow-hover: 0 0 0 1px #759e93, inset 0 0 0 1px #759e93 !important;
  --embed-border-start: 2px solid #759e93 !important;
  --file-header-background: #f2f2f2 !important;
  --file-header-background-focused: #f2f2f2 !important;
  --flair-background: #759e93 !important;
  --flair-color: #15181e !important;
  --font-family-editor: Inconsolata, Monaco, Consolas, 'Courier New', Courier !important;
  --font-family-preview: Avenir, Avenir Next, sans-serif !important;
  --footnote-divider-color: #759e93 !important;
  --footnote-id-color: #8c8c8c !important;
  --footnote-id-color-no-occurrences: #759e93 !important;
  --forest-green-dark: #4a6860 !important;
  --forest-green-faded: #c3d5d0 !important;
  --forest-green-half: rgb(117, 158, 147, 0.4) !important;
  --forest-green-light: #759e93 !important;
  --graph-background: #f2f2f2 !important;
  --graph-dots: #4a6860 !important;
  --graph-links: rgba(117, 158, 147, 0.7) !important;
  --graph-node: #8c8c8c !important;
  --graph-node-focused: #eea444 !important;
  --graph-node-unresolved: #759e93 !important;
  --graph-text: #15181e !important;
  --gray: #8c8c8c !important;
  --heading-formatting: #759e93 !important;
  --highlight: #f2bd7746 !important;
  --horizontal-line: #c3d5d0 !important;
  --horizontal-line-element: #4a6860 !important;
  --hr-color: #759e93 !important;
  --icon-color: #8c8c8c !important;
  --icon-color-active: #eea444 !important;
  --icon-color-focused: #15181e !important;
  --icon-color-hover: #8c8c8c !important;
  --inline-code: #c72e6e !important;
  --input-date-separator: #759e93 !important;
  --input-placeholder-color: #759e93 !important;
  --interactive-accent: #759e93 !important;
  --interactive-accent-hover: #eea444 !important;
  --interactive-accent-rgb: rgba(117, 158, 147) !important;
  --interactive-hover: #eea444 !important;
  --interactive-normal: #759e93 !important;
  --light: #f2f2f2 !important;
  --lightgray: #f2f2f2 !important;
  --link-color: #eea444 !important;
  --link-color-hover: #c72e6e !important;
  --link-external-color: #eea444 !important;
  --link-external-color-hover: #c72e6e !important;
  --link-unresolved-color: #eea444 !important;
  --list-marker-color: #759e93 !important;
  --list-marker-color-collapsed: #eea444 !important;
  --list-marker-color-hover: #8c8c8c !important;
  --menu-background: #f2f2f2 !important;
  --menu-item-hover: #f2f2f2 !important;
  --metadata-border-color: #759e93 !important;
  --metadata-divider-color: #759e93 !important;
  --metadata-input-text-color: #15181e !important;
  --metadata-label-text-color: #8c8c8c !important;
  --metadata-label-text-color-hover: #8c8c8c !important;
  --mint-green: #9dd4cf !important;
  --modal-background: #f2f2f2 !important;
  --nav-collapse-icon-color: #759e93 !important;
  --nav-collapse-icon-color-collapsed: #759e93 !important;
  --nav-heading-color: #15181e !important;
  --nav-heading-color-collapsed: #759e93 !important;
  --nav-heading-color-collapsed-hover: #8c8c8c !important;
  --nav-heading-color-hover: #15181e !important;
  --nav-item-color: #8c8c8c !important;
  --nav-item-color-active: #15181e !important;
  --nav-item-color-highlighted: #eea444 !important;
  --nav-item-color-hover: #15181e !important;
  --nav-item-color-selected: #15181e !important;
  --nav-tag-color: #759e93 !important;
  --nav-tag-color-active: #8c8c8c !important;
  --nav-tag-color-hover: #8c8c8c !important;
  --off-white: #f2f2f2 !important;
  --off-white-alt: #e6e6e6 !important;
  --off-white-dark: #cccccc !important;
  --off-white-darker: #8c8c8c !important;
  --off-white-faded: rgb(242, 242, 242, 0.8) !important;
  --orange-yellow: #f2bd77 !important;
  --orange-yellow-dark: #eea444 !important;
  --pdf-background: #f2f2f2 !important;
  --pdf-page-background: #f2f2f2 !important;
  --pdf-sidebar-background: #f2f2f2 !important;
  --pill-border-color: #759e93 !important;
  --pill-color: #8c8c8c !important;
  --pill-color-hover: #15181e !important;
  --pill-color-remove: #759e93 !important;
  --pill-color-remove-hover: #eea444 !important;
  --pre-code: #c3d5d0 !important;
  --prompt-background: #f2f2f2 !important;
  --raised-background: color-mix(in srgb, #f2f2f2 65%, transparent) linear-gradient(#f2f2f2, color-mix(in srgb, #f2f2f2 65%, transparent)) !important;
  --ribbon-background: #f2f2f2 !important;
  --ribbon-background-collapsed: #f2f2f2 !important;
  --scrollbar-active-thumb-bg: rgba(194, 208, 204, 0.2) !important;
  --scrollbar-bg: rgba(194, 208, 204, 0.05) !important;
  --scrollbar-thumb-bg: rgba(126, 147, 157, 0.1) !important;
  --search-clear-button-color: #8c8c8c !important;
  --search-icon-color: #8c8c8c !important;
  --search-result-background: #f2f2f2 !important;
  --secondary: #eea444 !important;
  --selected-item: #759e93 !important;
  --setting-group-heading-color: #15181e !important;
  --setting-items-background: #e6e6e6 !important;
  --setting-items-border-color: #759e93 !important;
  --slider-track-background: #759e93 !important;
  --status-bar-background: #f2f2f2 !important;
  --status-bar-border-color: #759e93 !important;
  --status-bar-text-color: #8c8c8c !important;
  --suggestion-background: #f2f2f2 !important;
  --tab-background-active: #f2f2f2 !important;
  --tab-container-background: #f2f2f2 !important;
  --tab-outline-color: #759e93 !important;
  --tab-switcher-background: #f2f2f2 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f2f2, transparent) !important;
  --tab-text-color: #759e93 !important;
  --tab-text-color-active: #8c8c8c !important;
  --tab-text-color-focused: #8c8c8c !important;
  --tab-text-color-focused-active: #8c8c8c !important;
  --tab-text-color-focused-active-current: #15181e !important;
  --tab-text-color-focused-highlighted: #eea444 !important;
  --table-add-button-border-color: #759e93 !important;
  --table-border-color: #759e93 !important;
  --table-drag-handle-background-active: #759e93 !important;
  --table-drag-handle-color: #759e93 !important;
  --table-drag-handle-color-active: #f2f2f2 !important;
  --table-header-border-color: #759e93 !important;
  --table-header-color: #15181e !important;
  --table-selection-border-color: #759e93 !important;
  --tag-color: #eea444 !important;
  --tag-color-hover: #eea444 !important;
  --tertiary: #c72e6e !important;
  --text-accent: #eea444 !important;
  --text-accent-hover: #c72e6e !important;
  --text-error: #ab687e !important;
  --text-error-hover: #ab687e !important;
  --text-faint: #759e93 !important;
  --text-highlight: #ad3266 !important;
  --text-highlight-bg: #f2bd7746 !important;
  --text-muted: #8c8c8c !important;
  --text-muted-real: #cccccc !important;
  --text-nav: #759e93 !important;
  --text-normal: #15181e !important;
  --text-normal-alt: #3b4252 !important;
  --text-on-accent: #f2f2f2 !important;
  --text-selection: rgba(157, 212, 207, 0.5) !important;
  --text-status-bar: #4a6860 !important;
  --text-title-h1: #c72e6e !important;
  --text-title-h2: #548a7b !important;
  --text-title-h3: #95bab0 !important;
  --text-title-h4: #759e93 !important;
  --text-title-h5: #548a7b !important;
  --text-title-h6: #377362 !important;
  --textHighlight: #f2bd7746 !important;
  --titlebar-background: #f2f2f2 !important;
  --titlebar-background-focused: #c3d5d0 !important;
  --titlebar-border-color: #759e93 !important;
  --titlebar-text-color: #8c8c8c !important;
  --titlebar-text-color-focused: #15181e !important;
  --vault-profile-color: #15181e !important;
  --vault-profile-color-hover: #15181e !important;
  --vim-cursor: #4a6860 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 242, 242);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(242, 242, 242);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 230, 230);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 242, 242);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(242, 242, 242);
  color: rgb(21, 24, 30);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(199, 46, 110);
  outline: rgb(199, 46, 110) none 0px;
  text-decoration: rgb(199, 46, 110);
  text-decoration-color: rgb(199, 46, 110);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(117, 158, 147);
  outline: rgb(117, 158, 147) none 0px;
  text-decoration: rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(117, 158, 147);
  outline: rgb(117, 158, 147) none 0px;
  text-decoration: rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(199, 46, 110);
  outline: rgb(199, 46, 110) none 0px;
  text-decoration: rgb(199, 46, 110);
  text-decoration-color: rgb(199, 46, 110);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(242, 189, 119, 0.275);
  color: rgb(21, 24, 30);
  outline: rgb(21, 24, 30) none 0px;
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body del {
  color: rgb(21, 24, 30);
  outline: rgb(21, 24, 30) none 0px;
  text-decoration: line-through rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body p {
  color: rgb(140, 140, 140);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(140, 140, 140) none 0px;
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(238, 164, 68);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(238, 164, 68) none 0px;
  text-decoration: rgb(238, 164, 68);
  text-decoration-color: rgb(238, 164, 68);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(238, 164, 68);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(238, 164, 68) none 0px;
  text-decoration: rgb(238, 164, 68);
  text-decoration-color: rgb(238, 164, 68);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(238, 164, 68);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(238, 164, 68) none 0px;
  text-decoration: rgb(238, 164, 68);
  text-decoration-color: rgb(238, 164, 68);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body dt {
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body ol > li {
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body ul > li {
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(117, 158, 147);
  text-decoration: rgb(117, 158, 147);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(242, 242, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  font-style: italic;
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body table {
  color: rgb(21, 24, 30);
  font-family: Avenir, "Avenir Next", sans-serif;
  width: 195.062px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(21, 24, 30);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(199, 46, 110);
  border-left-color: rgb(199, 46, 110);
  border-right-color: rgb(199, 46, 110);
  border-top-color: rgb(199, 46, 110);
  color: rgb(199, 46, 110);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body figcaption {
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(21, 24, 30);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(117, 158, 147);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(117, 158, 147);
  text-decoration: line-through 1px rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(21, 24, 30);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(21, 24, 30);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(21, 24, 30) none 0px;
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(195, 213, 208);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(195, 213, 208);
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(195, 213, 208);
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(195, 213, 208);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(238, 164, 68);
}

html[saved-theme="light"] body h1 {
  color: rgb(199, 46, 110);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(84, 138, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(21, 24, 30);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(149, 186, 176);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(84, 138, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(55, 115, 98);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(117, 158, 147);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(117, 158, 147);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(117, 158, 147);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(21, 24, 30);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(21, 24, 30);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(195, 213, 208);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(74, 104, 96);
  border-top-width: 0px;
  color: rgb(74, 104, 96);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(74, 104, 96);
  text-decoration: rgb(74, 104, 96);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(21, 24, 30);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 158, 147);
  text-decoration: rgb(117, 158, 147);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 158, 147);
  text-decoration: rgb(117, 158, 147);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(140, 140, 140);
  stroke: rgb(140, 140, 140);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(117, 158, 147);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(140, 140, 140);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(195, 213, 208);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body abbr {
  color: rgb(21, 24, 30);
  text-decoration: underline dotted rgb(21, 24, 30);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

html[saved-theme="light"] body sub {
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body summary {
  color: rgb(21, 24, 30);
}

html[saved-theme="light"] body sup {
  color: rgb(21, 24, 30);
}`,
  },
};
