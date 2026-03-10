import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal-edge",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: 1.2px solid #6e72796d !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.366) !important;
  --background-modifier-error: rgb(163, 82, 82) !important;
  --background-modifier-error-hover: #b35454 !important;
  --background-modifier-error-rgb: 230, 135, 135 !important;
  --background-modifier-success: #55af7f !important;
  --background-primary: #20242b !important;
  --background-primary-alt: #20242b !important;
  --background-secondary: #252933 !important;
  --bases-cards-background: #20242b !important;
  --bases-cards-cover-background: #20242b !important;
  --bases-cards-shadow: 0 0 0 1px 1.2px solid #6e72796d !important;
  --bases-embed-border-color: 1.2px solid #6e72796d !important;
  --bases-group-heading-property-color: #8e8e90 !important;
  --bases-table-border-color: #6e72796d !important;
  --bases-table-cell-background-active: #20242b !important;
  --bases-table-cell-background-disabled: #20242b !important;
  --bases-table-group-background: #20242b !important;
  --bases-table-header-background: #20242b !important;
  --bases-table-header-color: #8e8e90 !important;
  --bases-table-summary-background: #20242b !important;
  --blur-background: color-mix(in srgb, #dae1ef 65%, transparent) linear-gradient(#dae1ef, color-mix(in srgb, #dae1ef 65%, transparent)) !important;
  --border-color: 1.2px solid !important;
  --border-radius: 11px !important;
  --border-size: 1.2px !important;
  --border-style: solid !important;
  --box-style-sidebar-toggle-button-height: 58px !important;
  --canvas-background: #20242b !important;
  --canvas-card-label-color: #999999 !important;
  --canvas-dot-pattern: #4f5a77 !important;
  --caret-color: #919191 !important;
  --checkbox-border-color: #999999 !important;
  --checkbox-border-color-hover: #8e8e90 !important;
  --checkbox-color: #c37a5b !important;
  --checkbox-color-hover: #d18c6e !important;
  --checkbox-marker-color: #fff !important;
  --checklist-done-color: #8e8e90 !important;
  --code-background: #2f3039 !important;
  --code-border-color: 1.2px solid #6e72796d !important;
  --code-comment: #999999 !important;
  --code-function: #dcbb59 !important;
  --code-keyword: #de895b !important;
  --code-normal: #a8aeb0 !important;
  --code-operator: #b89cdd !important;
  --code-property: #d29a8c !important;
  --code-punctuation: #8e8e90 !important;
  --code-string: #05a36e !important;
  --code-value: #e3b750 !important;
  --collapse-icon-color: #999999 !important;
  --collapse-icon-color-collapsed: #ba7e47 !important;
  --custom-border: 1.2px solid !important;
  --custom-border-size: calc(1.2px*1px) !important;
  --dark: #919191 !important;
  --darkgray: #919191 !important;
  --divider-color: 1.2px solid #6e72796d !important;
  --dropdown-background: #dae1ef !important;
  --dropdown-background-hover: #dbdbdc !important;
  --embed-block-shadow-hover: 0 0 0 1px 1.2px solid #6e72796d, inset 0 0 0 1px 1.2px solid #6e72796d !important;
  --file-header-background: #20242b !important;
  --file-header-background-focused: #20242b !important;
  --flair-background: #dae1ef !important;
  --flair-color: #919191 !important;
  --font-style: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  --footnote-divider-color: 1.2px solid #6e72796d !important;
  --footnote-id-color: #8e8e90 !important;
  --footnote-id-color-no-occurrences: #999999 !important;
  --graph-node: #8e8e90 !important;
  --graph-node-focused: #ba7e47 !important;
  --graph-node-unresolved: #999999 !important;
  --graph-text: #919191 !important;
  --gray: #8e8e90 !important;
  --h1-font-style: :inherit !important;
  --heading-formatting: #999999 !important;
  --highlight: rgba(216, 185, 85, 0.201) !important;
  --hr-color: #6e72796d !important;
  --icon-color: #59607b !important;
  --icon-color-active: #ba7e47 !important;
  --icon-color-focused: #919191 !important;
  --icon-color-hover: #8e8e90 !important;
  --icon-size: 17px !important;
  --icon-stroke: 2px !important;
  --icon-xs: 15px !important;
  --indentation-guide-color: #59607b44 !important;
  --input-date-separator: #999999 !important;
  --input-placeholder-color: #999999 !important;
  --interactive-accent-hover: rgb(128, 83, 234) !important;
  --interactive-accent-rgb: 21, 146, 255 !important;
  --interactive-hover: #dbdbdc !important;
  --interactive-normal: #dae1ef !important;
  --light: #20242b !important;
  --lightgray: #252933 !important;
  --link-color: #ba7e47 !important;
  --link-color-hover: #d18c6e !important;
  --link-external-color: #ba7e47 !important;
  --link-external-color-hover: #d18c6e !important;
  --link-unresolved-color: #ba7e47 !important;
  --list-marker-color: #999999 !important;
  --list-marker-color-collapsed: #ba7e47 !important;
  --list-marker-color-hover: #8e8e90 !important;
  --menu-background: #252933 !important;
  --metadata-border-color: 1.2px solid #6e72796d !important;
  --metadata-divider-color: 1.2px solid #6e72796d !important;
  --metadata-input-text-color: #919191 !important;
  --metadata-label-text-color: #8e8e90 !important;
  --metadata-label-text-color-hover: #8e8e90 !important;
  --modal-animation: modalAnimation 0.1s ease-in !important;
  --modal-background: #20242b !important;
  --nav-collapse-icon-color: #999999 !important;
  --nav-collapse-icon-color-collapsed: #999999 !important;
  --nav-heading-color: #919191 !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-collapsed-hover: #8e8e90 !important;
  --nav-heading-color-hover: #919191 !important;
  --nav-indentation-guide-color: #59607b44 !important;
  --nav-item-color: #8e8e90 !important;
  --nav-item-color-active: #919191 !important;
  --nav-item-color-highlighted: #ba7e47 !important;
  --nav-item-color-hover: #919191 !important;
  --nav-item-color-selected: #919191 !important;
  --nav-tag-color: #999999 !important;
  --nav-tag-color-active: #8e8e90 !important;
  --nav-tag-color-hover: #8e8e90 !important;
  --panel-border-color: #dbdbdc !important;
  --pdf-background: #20242b !important;
  --pdf-page-background: #20242b !important;
  --pdf-shadow: 0 0 0 1px 1.2px solid #6e72796d !important;
  --pdf-sidebar-background: #20242b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px 1.2px solid #6e72796d !important;
  --pill-border-color: 1.2px solid #6e72796d !important;
  --pill-color: #8e8e90 !important;
  --pill-color-hover: #919191 !important;
  --pill-color-remove: #999999 !important;
  --pill-color-remove-hover: #ba7e47 !important;
  --prompt-background: #20242b !important;
  --raised-background: color-mix(in srgb, #dae1ef 65%, transparent) linear-gradient(#dae1ef, color-mix(in srgb, #dae1ef 65%, transparent)) !important;
  --ribbon-background: #252933 !important;
  --ribbon-background-collapsed: #20242b !important;
  --ribbon-box-style-margin: 11% !important;
  --ribbon-padding: 10px !important;
  --ribbon-width: 60px !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2) !important;
  --scrollbar-bg: #d9d3f7 !important;
  --scrollbar-thumb-bg: #a9bdc64e !important;
  --search-clear-button-color: #8e8e90 !important;
  --search-icon-color: #8e8e90 !important;
  --search-result-background: #20242b !important;
  --secondary: #ba7e47 !important;
  --setting-group-heading-color: #919191 !important;
  --setting-items-background: #20242b !important;
  --setting-items-border-color: 1.2px solid #6e72796d !important;
  --slider-track-background: 1.2px solid #6e72796d !important;
  --status-bar-background: #252933 !important;
  --status-bar-border-color: 1.2px solid #6e72796d !important;
  --status-bar-text-color: #8e8e90 !important;
  --suggestion-background: #20242b !important;
  --tab-background-active: #fbfbfa !important;
  --tab-container-background: #252933 !important;
  --tab-curve: 0px !important;
  --tab-outline-color: #7c7c7c37 !important;
  --tab-switcher-background: #252933 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #252933, transparent) !important;
  --tab-text-color: #999999 !important;
  --tab-text-color-active: #8e8e90 !important;
  --tab-text-color-focused: #8e8e90 !important;
  --tab-text-color-focused-active: #8e8e90 !important;
  --tab-text-color-focused-active-current: #919191 !important;
  --tab-text-color-focused-highlighted: #ba7e47 !important;
  --table-add-button-border-color: 1.2px solid #6e72796d !important;
  --table-add-button-border-width: 0.6px !important;
  --table-border-color: #6e72796d !important;
  --table-border-width: 0.6px !important;
  --table-column-first-border-width: 0.6px !important;
  --table-column-last-border-width: 0.6px !important;
  --table-drag-handle-color: #999999 !important;
  --table-drag-handle-color-active: #f2f2f2 !important;
  --table-header-border-color: #6e72796d !important;
  --table-header-border-width: 0.6px !important;
  --table-header-color: #919191 !important;
  --table-row-last-border-width: 0.6px !important;
  --tag-color: #ba7e47 !important;
  --tag-color-hover: #ba7e47 !important;
  --tertiary: #d18c6e !important;
  --text-accent: #ba7e47 !important;
  --text-accent-hover: #d18c6e !important;
  --text-error: #e75545 !important;
  --text-error-hover: #f86959 !important;
  --text-faint: #999999 !important;
  --text-highlight-bg: rgba(216, 185, 85, 0.201) !important;
  --text-muted: #8e8e90 !important;
  --text-normal: #919191 !important;
  --text-on-accent: #f2f2f2 !important;
  --text-selection: rgba(0, 122, 255, 0.15) !important;
  --textHighlight: rgba(216, 185, 85, 0.201) !important;
  --titlebar-background: #252933 !important;
  --titlebar-background-focused: #20242b !important;
  --titlebar-border-color: 1.2px solid #6e72796d !important;
  --titlebar-text-color: #8e8e90 !important;
  --titlebar-text-color-focused: #919191 !important;
  --vault-profile-color: #919191 !important;
  --vault-profile-color-hover: #919191 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 36, 43);
  border-left-color: rgb(128, 128, 128);
  color: rgb(145, 145, 145);
}

body div#quartz-root {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}`,
    typography: `body .page article p > b, b {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body .page article p > em, em {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body .page article p > i, i {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body .page article p > strong, strong {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body .text-highlight {
  background-color: rgba(216, 185, 85, 0.2);
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body del {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: line-through rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body p {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(142, 142, 144) none 0px;
  text-decoration: rgb(142, 142, 144);
  text-decoration-color: rgb(142, 142, 144);
}`,
    links: `body a.external, footer a {
  color: rgb(186, 126, 71);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(186, 126, 71) none 0px;
  text-decoration: underline rgb(186, 126, 71);
  text-decoration-color: rgb(186, 126, 71);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 126, 71);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(186, 126, 71) none 0px;
  text-decoration: underline rgb(186, 126, 71);
  text-decoration-color: rgb(186, 126, 71);
}

body a.internal.broken {
  color: rgb(186, 126, 71);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(186, 126, 71) none 0px;
}`,
    lists: `body dd {
  color: rgb(145, 145, 145);
}

body dt {
  color: rgb(145, 145, 145);
}

body ol > li {
  color: rgb(145, 145, 145);
}

body ol.overflow {
  background-color: rgb(37, 41, 51);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body ul > li {
  color: rgb(145, 145, 145);
}

body ul.overflow {
  background-color: rgb(37, 41, 51);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body blockquote {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    tables: `body .spacer {
  background-color: rgb(37, 41, 51);
}

body .table-container {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body table {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body td {
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
  color: rgb(145, 145, 145);
}

body th {
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
  color: rgb(145, 145, 145);
}`,
    code: `body code {
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

body pre > code > [data-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 187, 89);
  border-left-color: rgb(220, 187, 89);
  border-right-color: rgb(220, 187, 89);
  border-top-color: rgb(220, 187, 89);
}

body pre > code, pre:has(> code) {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body pre:has(> code) {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    images: `body audio {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body figcaption {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body figure {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body img {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body video {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    embeds: `body .file-embed {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
}

body .footnotes {
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

body .transclude {
  border-bottom-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body .transclude-inner {
  border-bottom-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(142, 142, 144);
  text-decoration: line-through rgb(142, 142, 144);
  text-decoration-color: rgb(142, 142, 144);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body li.task-list-item[data-task='!'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='*'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='-'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='/'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='>'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='?'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='I'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='S'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='b'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='c'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='d'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='f'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='i'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='k'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='l'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='p'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='u'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='w'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}`,
    search: `body .search > .search-button {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
}

body .search > .search-container > .search-space > * {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(145, 145, 145);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(145, 145, 145);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(145, 145, 145);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(110, 114, 121, 0.427);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(110, 114, 121, 0.427);
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(145, 145, 145);
}

body a.internal.tag-link::before {
  color: rgb(186, 126, 71);
}

body h1 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h2 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h3 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h4 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h5 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h6 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
}

body ::-webkit-scrollbar-corner {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
}

body ::-webkit-scrollbar-track {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(142, 142, 144);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(142, 142, 144);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(142, 142, 144);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(89, 96, 123);
  border-left-color: rgb(89, 96, 123);
  border-right-color: rgb(89, 96, 123);
  border-top-color: rgb(89, 96, 123);
  color: rgb(89, 96, 123);
}`,
    footer: `body footer {
  background-color: rgb(37, 41, 51);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-bottom-width: 1px;
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-right-width: 1px;
  border-top-color: rgba(110, 114, 121, 0.427);
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body footer ul li a {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body li.section-li > .section .meta {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}

body ul.section-ul {
  background-color: rgb(37, 41, 51);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(89, 96, 123);
  border-left-color: rgb(89, 96, 123);
  border-right-color: rgb(89, 96, 123);
  border-top-color: rgb(89, 96, 123);
  color: rgb(89, 96, 123);
}

body .darkmode svg {
  color: rgb(89, 96, 123);
  stroke: rgb(89, 96, 123);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

body .metadata {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .navigation-progress {
  background-color: rgb(37, 41, 51);
}

body .page-header h2.page-title {
  color: rgb(145, 145, 145);
}

body abbr {
  color: rgb(145, 145, 145);
  text-decoration: underline dotted rgb(145, 145, 145);
}

body details {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body input[type=text] {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-bottom-width: 1px;
  border-left-color: rgba(110, 114, 121, 0.427);
  border-left-width: 1px;
  border-right-color: rgba(110, 114, 121, 0.427);
  border-right-width: 1px;
  border-top-color: rgba(110, 114, 121, 0.427);
  border-top-width: 1px;
  color: rgb(142, 142, 144);
}

body kbd {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

body progress {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body sub {
  color: rgb(145, 145, 145);
}

body summary {
  color: rgb(145, 145, 145);
}

body sup {
  color: rgb(145, 145, 145);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: 1.2px solid #796e6e47 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.507) !important;
  --background-modifier-error: #e68787 !important;
  --background-modifier-error-hover: #FF9494 !important;
  --background-modifier-error-rgb: 230, 135, 135 !important;
  --background-modifier-success: #A4E7C3 !important;
  --background-primary: #e4ddd3 !important;
  --background-primary-alt: #EAE4DD !important;
  --background-secondary: #EAE4DD !important;
  --bases-cards-background: #e4ddd3 !important;
  --bases-cards-cover-background: #EAE4DD !important;
  --bases-cards-shadow: 0 0 0 1px 1.2px solid #796e6e47 !important;
  --bases-embed-border-color: 1.2px solid #796e6e47 !important;
  --bases-group-heading-property-color: #8a7e69 !important;
  --bases-table-border-color: #796e6e47 !important;
  --bases-table-cell-background-active: #e4ddd3 !important;
  --bases-table-cell-background-disabled: #EAE4DD !important;
  --bases-table-group-background: #EAE4DD !important;
  --bases-table-header-background: #e4ddd3 !important;
  --bases-table-header-color: #8a7e69 !important;
  --bases-table-summary-background: #e4ddd3 !important;
  --blur-background: color-mix(in srgb, #e4ddd3 65%, transparent) linear-gradient(#e4ddd3, color-mix(in srgb, #e4ddd3 65%, transparent)) !important;
  --border-radius: 11px !important;
  --border-size: 1.2px !important;
  --border-style: solid !important;
  --box-style-sidebar-toggle-button-height: 58px !important;
  --canvas-background: #e4ddd3 !important;
  --canvas-card-label-color: #957c57d4 !important;
  --canvas-dot-pattern: #796e6e47 !important;
  --caret-color: #333 !important;
  --checkbox-border-color: #957c57d4 !important;
  --checkbox-border-color-hover: #8a7e69 !important;
  --checkbox-color: #c37a5b !important;
  --checkbox-color-hover: #d18c6e !important;
  --checkbox-marker-color: #fff !important;
  --checklist-done-color: #8a7e69 !important;
  --code-background: #e2dcd5 !important;
  --code-border-color: 1.2px solid #796e6e47 !important;
  --code-comment: #957c57d4 !important;
  --code-function: #dcbb59 !important;
  --code-keyword: #de895b !important;
  --code-normal: #a8aeb0 !important;
  --code-operator: #b89cdd !important;
  --code-property: #d29a8c !important;
  --code-punctuation: #8a7e69 !important;
  --code-string: #05a36e !important;
  --code-value: #e3b750 !important;
  --collapse-icon-color: #957c57d4 !important;
  --collapse-icon-color-collapsed: #985c35 !important;
  --custom-border: 1.2px solid !important;
  --custom-border-size: calc(1.2px*1px) !important;
  --dark: #333 !important;
  --darkgray: #333 !important;
  --divider-color: 1.2px solid #796e6e47 !important;
  --dropdown-background: #f1ece5 !important;
  --dropdown-background-hover: #dbdbdc !important;
  --embed-block-shadow-hover: 0 0 0 1px 1.2px solid #796e6e47, inset 0 0 0 1px 1.2px solid #796e6e47 !important;
  --file-header-background: #e4ddd3 !important;
  --file-header-background-focused: #e4ddd3 !important;
  --flair-background: #f1ece5 !important;
  --flair-color: #333 !important;
  --font-style: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  --footnote-divider-color: 1.2px solid #796e6e47 !important;
  --footnote-id-color: #8a7e69 !important;
  --footnote-id-color-no-occurrences: #957c57d4 !important;
  --graph-node: #8a7e69 !important;
  --graph-node-focused: #985c35 !important;
  --graph-node-unresolved: #957c57d4 !important;
  --graph-text: #333 !important;
  --gray: #8a7e69 !important;
  --h1-font-style: :inherit !important;
  --heading-formatting: #957c57d4 !important;
  --highlight: rgba(230, 192, 70, 0.4) !important;
  --hr-color: #796e6e47 !important;
  --icon-color: #705757 !important;
  --icon-color-active: #985c35 !important;
  --icon-color-focused: #333 !important;
  --icon-color-hover: #8a7e69 !important;
  --icon-size: 17px !important;
  --icon-stroke: 2px !important;
  --icon-xs: 15px !important;
  --indentation-guide-color: #957c5723 !important;
  --input-date-separator: #957c57d4 !important;
  --input-placeholder-color: #957c57d4 !important;
  --interactive-accent-hover: rgb(128, 83, 234) !important;
  --interactive-accent-rgb: 21, 146, 255 !important;
  --interactive-hover: #dbdbdc !important;
  --interactive-normal: #f1ece5 !important;
  --light: #e4ddd3 !important;
  --lightgray: #EAE4DD !important;
  --link-color: #985c35 !important;
  --link-color-hover: #bf7c50 !important;
  --link-external-color: #985c35 !important;
  --link-external-color-hover: #bf7c50 !important;
  --link-unresolved-color: #985c35 !important;
  --list-marker-color: #957c57d4 !important;
  --list-marker-color-collapsed: #985c35 !important;
  --list-marker-color-hover: #8a7e69 !important;
  --menu-background: #EAE4DD !important;
  --metadata-border-color: 1.2px solid #796e6e47 !important;
  --metadata-divider-color: 1.2px solid #796e6e47 !important;
  --metadata-input-text-color: #333 !important;
  --metadata-label-text-color: #8a7e69 !important;
  --metadata-label-text-color-hover: #8a7e69 !important;
  --modal-animation: modalAnimation 0.1s ease-in !important;
  --modal-background: #e4ddd3 !important;
  --nav-collapse-icon-color: #957c57d4 !important;
  --nav-collapse-icon-color-collapsed: #957c57d4 !important;
  --nav-heading-color: #333 !important;
  --nav-heading-color-collapsed: #957c57d4 !important;
  --nav-heading-color-collapsed-hover: #8a7e69 !important;
  --nav-heading-color-hover: #333 !important;
  --nav-indentation-guide-color: #957c5723 !important;
  --nav-item-color: #8a7e69 !important;
  --nav-item-color-active: #333 !important;
  --nav-item-color-highlighted: #985c35 !important;
  --nav-item-color-hover: #333 !important;
  --nav-item-color-selected: #333 !important;
  --nav-tag-color: #957c57d4 !important;
  --nav-tag-color-active: #8a7e69 !important;
  --nav-tag-color-hover: #8a7e69 !important;
  --panel-border-color: #dbdbdc !important;
  --pdf-background: #e4ddd3 !important;
  --pdf-page-background: #e4ddd3 !important;
  --pdf-sidebar-background: #e4ddd3 !important;
  --pill-border-color: 1.2px solid #796e6e47 !important;
  --pill-color: #8a7e69 !important;
  --pill-color-hover: #333 !important;
  --pill-color-remove: #957c57d4 !important;
  --pill-color-remove-hover: #985c35 !important;
  --prompt-background: #e4ddd3 !important;
  --raised-background: color-mix(in srgb, #e4ddd3 65%, transparent) linear-gradient(#e4ddd3, color-mix(in srgb, #e4ddd3 65%, transparent)) !important;
  --ribbon-background: #EAE4DD !important;
  --ribbon-background-collapsed: #e4ddd3 !important;
  --ribbon-box-style-margin: 11% !important;
  --ribbon-padding: 10px !important;
  --ribbon-width: 60px !important;
  --scrollbar-bg: #F7EED3 !important;
  --scrollbar-thumb-bg: #c6bfa94e !important;
  --search-clear-button-color: #8a7e69 !important;
  --search-icon-color: #8a7e69 !important;
  --search-result-background: #e4ddd3 !important;
  --secondary: #985c35 !important;
  --setting-group-heading-color: #333 !important;
  --setting-items-background: #EAE4DD !important;
  --setting-items-border-color: 1.2px solid #796e6e47 !important;
  --slider-track-background: 1.2px solid #796e6e47 !important;
  --status-bar-background: #EAE4DD !important;
  --status-bar-border-color: 1.2px solid #796e6e47 !important;
  --status-bar-text-color: #8a7e69 !important;
  --suggestion-background: #e4ddd3 !important;
  --tab-background-active: #fbfbfa !important;
  --tab-container-background: #EAE4DD !important;
  --tab-curve: 0px !important;
  --tab-outline-color: #7c7c7c37 !important;
  --tab-switcher-background: #EAE4DD !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #EAE4DD, transparent) !important;
  --tab-text-color: #957c57d4 !important;
  --tab-text-color-active: #8a7e69 !important;
  --tab-text-color-focused: #8a7e69 !important;
  --tab-text-color-focused-active: #8a7e69 !important;
  --tab-text-color-focused-active-current: #333 !important;
  --tab-text-color-focused-highlighted: #985c35 !important;
  --table-add-button-border-color: 1.2px solid #796e6e47 !important;
  --table-add-button-border-width: 0.6px !important;
  --table-border-color: #796e6e47 !important;
  --table-border-width: 0.6px !important;
  --table-column-first-border-width: 0.6px !important;
  --table-column-last-border-width: 0.6px !important;
  --table-drag-handle-color: #957c57d4 !important;
  --table-drag-handle-color-active: #f2f2f2 !important;
  --table-header-border-color: #796e6e47 !important;
  --table-header-border-width: 0.6px !important;
  --table-header-color: #333 !important;
  --table-row-last-border-width: 0.6px !important;
  --tag-color: #985c35 !important;
  --tag-color-hover: #985c35 !important;
  --tertiary: #bf7c50 !important;
  --text-accent: #985c35 !important;
  --text-accent-hover: #bf7c50 !important;
  --text-error: #ba6d64 !important;
  --text-error-hover: #533232 !important;
  --text-faint: #957c57d4 !important;
  --text-highlight-bg: rgba(230, 192, 70, 0.4) !important;
  --text-muted: #8a7e69 !important;
  --text-normal: #333 !important;
  --text-on-accent: #f2f2f2 !important;
  --text-selection: rgba(0, 122, 255, 0.15) !important;
  --textHighlight: rgba(230, 192, 70, 0.4) !important;
  --titlebar-background: #EAE4DD !important;
  --titlebar-background-focused: #e4ddd3 !important;
  --titlebar-border-color: 1.2px solid #796e6e47 !important;
  --titlebar-text-color: #8a7e69 !important;
  --titlebar-text-color-focused: #333 !important;
  --vault-profile-color: #333 !important;
  --vault-profile-color-hover: #333 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(228, 221, 211);
  border-left-color: rgb(128, 128, 128);
  color: rgb(51, 51, 51);
}

body div#quartz-root {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}`,
    typography: `body .page article p > b, b {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > em, em {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > i, i {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > strong, strong {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .text-highlight {
  background-color: rgba(230, 192, 70, 0.4);
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body del {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: line-through rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body p {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(138, 126, 105) none 0px;
  text-decoration: rgb(138, 126, 105);
  text-decoration-color: rgb(138, 126, 105);
}`,
    links: `body a.external, footer a {
  color: rgb(152, 92, 53);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(152, 92, 53) none 0px;
  text-decoration: underline rgb(152, 92, 53);
  text-decoration-color: rgb(152, 92, 53);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(152, 92, 53);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(152, 92, 53) none 0px;
  text-decoration: underline rgb(152, 92, 53);
  text-decoration-color: rgb(152, 92, 53);
}

body a.internal.broken {
  color: rgb(152, 92, 53);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(152, 92, 53) none 0px;
}`,
    lists: `body dd {
  color: rgb(51, 51, 51);
}

body dt {
  color: rgb(51, 51, 51);
}

body ol > li {
  color: rgb(51, 51, 51);
}

body ol.overflow {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body ul > li {
  color: rgb(51, 51, 51);
}

body ul.overflow {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(149, 124, 87, 0.83);
  text-decoration: rgba(149, 124, 87, 0.83);
}

body blockquote {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    tables: `body .spacer {
  background-color: rgb(234, 228, 221);
}

body .table-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body table {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body td {
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
  color: rgb(51, 51, 51);
}

body th {
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
  color: rgb(51, 51, 51);
}`,
    code: `body code {
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body pre > code > [data-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 187, 89);
  border-left-color: rgb(220, 187, 89);
  border-right-color: rgb(220, 187, 89);
  border-top-color: rgb(220, 187, 89);
}

body pre > code, pre:has(> code) {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body pre:has(> code) {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    images: `body audio {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body figcaption {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body figure {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body img {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body video {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    embeds: `body .file-embed {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
}

body .footnotes {
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .transclude {
  border-bottom-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .transclude-inner {
  border-bottom-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(138, 126, 105);
  text-decoration: line-through rgb(138, 126, 105);
  text-decoration-color: rgb(138, 126, 105);
}

body input[type=checkbox] {
  border-bottom-color: rgba(149, 124, 87, 0.83);
  border-left-color: rgba(149, 124, 87, 0.83);
  border-right-color: rgba(149, 124, 87, 0.83);
  border-top-color: rgba(149, 124, 87, 0.83);
}

body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='-'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    search: `body .search > .search-button {
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
}

body .search > .search-container > .search-space > * {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(121, 110, 110, 0.28);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(121, 110, 110, 0.28);
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(51, 51, 51);
}

body a.internal.tag-link::before {
  color: rgb(152, 92, 53);
}

body h1 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h2 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h3 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h4 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h5 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h6 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
}

body ::-webkit-scrollbar-corner {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
}

body ::-webkit-scrollbar-track {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(138, 126, 105);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(138, 126, 105);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(138, 126, 105);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 87, 87);
  border-left-color: rgb(112, 87, 87);
  border-right-color: rgb(112, 87, 87);
  border-top-color: rgb(112, 87, 87);
  color: rgb(112, 87, 87);
}`,
    footer: `body footer {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-bottom-width: 1px;
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-right-width: 1px;
  border-top-color: rgba(121, 110, 110, 0.28);
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body footer ul li a {
  color: rgb(138, 126, 105);
  text-decoration: rgb(138, 126, 105);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(138, 126, 105);
  text-decoration: rgb(138, 126, 105);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body li.section-li > .section .meta {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(138, 126, 105);
  text-decoration: rgb(138, 126, 105);
}

body ul.section-ul {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(112, 87, 87);
  border-left-color: rgb(112, 87, 87);
  border-right-color: rgb(112, 87, 87);
  border-top-color: rgb(112, 87, 87);
  color: rgb(112, 87, 87);
}

body .darkmode svg {
  color: rgb(112, 87, 87);
  stroke: rgb(112, 87, 87);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
  color: rgb(138, 126, 105);
}

body .breadcrumb-element p {
  color: rgba(149, 124, 87, 0.83);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .metadata {
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .navigation-progress {
  background-color: rgb(234, 228, 221);
}

body .page-header h2.page-title {
  color: rgb(51, 51, 51);
}

body abbr {
  color: rgb(51, 51, 51);
  text-decoration: underline dotted rgb(51, 51, 51);
}

body details {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body input[type=text] {
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-bottom-width: 1px;
  border-left-color: rgba(121, 110, 110, 0.28);
  border-left-width: 1px;
  border-right-color: rgba(121, 110, 110, 0.28);
  border-right-width: 1px;
  border-top-color: rgba(121, 110, 110, 0.28);
  border-top-width: 1px;
  color: rgb(138, 126, 105);
}

body kbd {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

body progress {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body sub {
  color: rgb(51, 51, 51);
}

body summary {
  color: rgb(51, 51, 51);
}

body sup {
  color: rgb(51, 51, 51);
}`,
  },
};
