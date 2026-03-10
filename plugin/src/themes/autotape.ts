import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "autotape",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: rgb(138, 92, 245) !important;
  --background-modifier-border-focus: rgb(138, 92, 245) !important;
  --background-modifier-border-hover: rgb(138, 92, 245) !important;
  --background-primary: #111111 !important;
  --background-primary-alt: #262626 !important;
  --background-secondary: #111111 !important;
  --bases-cards-background: #111111 !important;
  --bases-cards-cover-background: #262626 !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px rgb(138, 92, 245) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(138, 92, 245) !important;
  --bases-embed-border-color: rgb(138, 92, 245) !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: rgb(138, 92, 245) !important;
  --bases-table-cell-background-active: #111111 !important;
  --bases-table-cell-background-disabled: #262626 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-group-background: #262626 !important;
  --bases-table-header-background: #111111 !important;
  --bases-table-summary-background: #111111 !important;
  --bold-color: white !important;
  --callout-radius: 0;
  --canvas-background: #111111 !important;
  --canvas-card-label-color: #565f8988 !important;
  --canvas-controls-radius: 0 !important;
  --checkbox-border-color: #565f8988 !important;
  --checkbox-marker-color: #111111 !important;
  --checkbox-radius: 0 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #262626 !important;
  --code-border-color: rgb(138, 92, 245) !important;
  --code-comment: #565f8988 !important;
  --code-radius: 0 !important;
  --collapse-icon-color: #565f8988 !important;
  --color-base-00: #111111 !important;
  --divider-color: rgb(138, 92, 245) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(138, 92, 245), inset 0 0 0 1px rgb(138, 92, 245) !important;
  --file-header-background: #111111 !important;
  --file-header-background-focused: #111111 !important;
  --file-header-font-size: 14px !important;
  --font-ui-large: 22px !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: rgb(138, 92, 245) !important;
  --footnote-id-color-no-occurrences: #565f8988 !important;
  --footnote-radius: 0 !important;
  --graph-line: #555555 !important;
  --graph-node-unresolved: #565f8988 !important;
  --gray: #565f8988 !important;
  --h1-color: rgb(138, 92, 245) !important;
  --h1-size: 1.25em !important;
  --h2-color: rgb(138, 92, 245) !important;
  --h2-size: 1.25em !important;
  --h3-color: rgb(138, 92, 245) !important;
  --h3-size: 1.25em !important;
  --h4-color: rgb(138, 92, 245) !important;
  --h4-size: 1.25em !important;
  --h5-color: rgb(138, 92, 245) !important;
  --h5-size: 1.25em !important;
  --h6-color: rgb(138, 92, 245) !important;
  --h6-size: 1.25em !important;
  --header-color: rgb(138, 92, 245) !important;
  --header-size: 1.25em !important;
  --heading-formatting: #565f8988 !important;
  --highlight: #9ece6a66 !important;
  --hr-color: rgb(138, 92, 245) !important;
  --inline-title-color: rgb(138, 92, 245) !important;
  --inline-title-size: 1.25em !important;
  --input-date-separator: #565f8988 !important;
  --input-placeholder-color: #565f8988 !important;
  --italic-color: white !important;
  --light: #111111 !important;
  --lightgray: #111111 !important;
  --list-marker-color: #565f8988 !important;
  --menu-background: #111111 !important;
  --menu-border-color: rgb(138, 92, 245) !important;
  --menu-radius: 0 !important;
  --metadata-border-color: rgb(138, 92, 245) !important;
  --metadata-divider-color: rgb(138, 92, 245) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(138, 92, 245) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #111111 !important;
  --modal-radius: 0 !important;
  --nav-collapse-icon-color: #565f8988 !important;
  --nav-collapse-icon-color-collapsed: #565f8988 !important;
  --nav-heading-color-collapsed: #565f8988 !important;
  --nav-item-padding: 3px !important;
  --nav-item-parent-padding: 3px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: #565f8988 !important;
  --nav-tag-radius: 0 !important;
  --pdf-background: #111111 !important;
  --pdf-page-background: #111111 !important;
  --pdf-shadow: 0 0 0 1px rgb(138, 92, 245) !important;
  --pdf-sidebar-background: #111111 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(138, 92, 245) !important;
  --pill-border-color: rgb(138, 92, 245) !important;
  --pill-border-color-hover: rgb(138, 92, 245) !important;
  --pill-color-remove: #565f8988 !important;
  --prompt-background: #111111 !important;
  --radius-l: 0 !important;
  --radius-m: 0 !important;
  --radius-s: 0 !important;
  --ribbon-background: #111111 !important;
  --ribbon-background-collapsed: #111111 !important;
  --scrollbar-radius: 0 !important;
  --search-result-background: #111111 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #262626 !important;
  --setting-items-border-color: rgb(138, 92, 245) !important;
  --setting-items-radius: 0 !important;
  --slider-thumb-border-color: rgb(138, 92, 245) !important;
  --slider-track-background: rgb(138, 92, 245) !important;
  --status-bar-background: #111111 !important;
  --status-bar-border-color: rgb(138, 92, 245) !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --suggestion-background: #111111 !important;
  --tab-background-active: #111111 !important;
  --tab-container-background: #111111 !important;
  --tab-divider-color: rgb(138, 92, 245) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: rgb(138, 92, 245) !important;
  --tab-radius: 0 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: #111111 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent) !important;
  --tab-text-color: #565f8988 !important;
  --table-add-button-border-color: rgb(138, 92, 245) !important;
  --table-border-color: rgb(138, 92, 245) !important;
  --table-drag-handle-color: #565f8988 !important;
  --table-header-border-color: rgb(138, 92, 245) !important;
  --text-faint: #565f8988 !important;
  --text-highlight-bg: #9ece6a66 !important;
  --textHighlight: #9ece6a66 !important;
  --titlebar-background: #111111 !important;
  --titlebar-background-focused: #111111 !important;
  --titlebar-border-color: rgb(138, 92, 245) !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 17, 17);
  border-left-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(17, 17, 17);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(158, 206, 106, 0.4);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(86, 95, 137, 0.533);
  text-decoration: rgba(86, 95, 137, 0.533);
}`,
    tables: `html[saved-theme="dark"] body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(86, 95, 137, 0.533);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(86, 95, 137, 0.533);
  border-right-color: rgba(86, 95, 137, 0.533);
  border-top-color: rgba(86, 95, 137, 0.533);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body h1 {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body h2 {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(138, 92, 245);
  text-shadow: rgb(138, 92, 245) 0px 0px 20px;
}

html[saved-theme="dark"] body h3 {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body h4 {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body h5 {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body h6 {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(166, 138, 249);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(166, 138, 249);
  border-right-color: rgb(166, 138, 249);
  border-top-color: rgb(166, 138, 249);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(166, 138, 249);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(166, 138, 249);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(166, 138, 249);
  border-right-color: rgb(166, 138, 249);
  border-top-color: rgb(166, 138, 249);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(86, 95, 137, 0.533);
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  text-shadow: rgb(138, 92, 245) 0px 0px 8px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: rgb(153, 115, 247) !important;
  --background-modifier-border-focus: rgb(153, 115, 247) !important;
  --background-modifier-border-hover: rgb(153, 115, 247) !important;
  --background-modifier-form-field: #d5d5d5 !important;
  --background-modifier-form-field-hover: #d5d5d5 !important;
  --background-primary: #d5d5d5 !important;
  --background-primary-alt: #f6f6f6 !important;
  --background-secondary: #d5d5d5 !important;
  --bases-cards-background: #d5d5d5 !important;
  --bases-cards-cover-background: #f6f6f6 !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px rgb(153, 115, 247) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(153, 115, 247) !important;
  --bases-embed-border-color: rgb(153, 115, 247) !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: rgb(153, 115, 247) !important;
  --bases-table-cell-background-active: #d5d5d5 !important;
  --bases-table-cell-background-disabled: #f6f6f6 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(153, 115, 247) !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-group-background: #f6f6f6 !important;
  --bases-table-header-background: #d5d5d5 !important;
  --bases-table-summary-background: #d5d5d5 !important;
  --blur-background: color-mix(in srgb, #d5d5d5 65%, transparent) linear-gradient(#d5d5d5, color-mix(in srgb, #d5d5d5 65%, transparent)) !important;
  --bold-color: black !important;
  --callout-radius: 0;
  --canvas-background: #d5d5d5 !important;
  --canvas-card-label-color: #9699a388 !important;
  --canvas-controls-radius: 0 !important;
  --checkbox-border-color: #9699a388 !important;
  --checkbox-marker-color: #d5d5d5 !important;
  --checkbox-radius: 0 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #f6f6f6 !important;
  --code-border-color: rgb(153, 115, 247) !important;
  --code-comment: #9699a388 !important;
  --code-radius: 0 !important;
  --collapse-icon-color: #9699a388 !important;
  --color-base-00: #d5d5d5 !important;
  --divider-color: rgb(153, 115, 247) !important;
  --dropdown-background: #d5d5d5 !important;
  --dropdown-background-hover: #d5d5d5 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(153, 115, 247), inset 0 0 0 1px rgb(153, 115, 247) !important;
  --file-header-background: #d5d5d5 !important;
  --file-header-background-focused: #d5d5d5 !important;
  --file-header-font-size: 14px !important;
  --flair-background: #d5d5d5 !important;
  --font-ui-large: 22px !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: rgb(153, 115, 247) !important;
  --footnote-id-color-no-occurrences: #9699a388 !important;
  --footnote-radius: 0 !important;
  --graph-line: #bdbdbd !important;
  --graph-node-unresolved: #9699a388 !important;
  --gray: #9699a388 !important;
  --h1-color: rgb(153, 115, 247) !important;
  --h1-size: 1.25em !important;
  --h2-color: rgb(153, 115, 247) !important;
  --h2-size: 1.25em !important;
  --h3-color: rgb(153, 115, 247) !important;
  --h3-size: 1.25em !important;
  --h4-color: rgb(153, 115, 247) !important;
  --h4-size: 1.25em !important;
  --h5-color: rgb(153, 115, 247) !important;
  --h5-size: 1.25em !important;
  --h6-color: rgb(153, 115, 247) !important;
  --h6-size: 1.25em !important;
  --header-size: 1.25em !important;
  --heading-formatting: #9699a388 !important;
  --highlight: #485e3066 !important;
  --hr-color: rgb(153, 115, 247) !important;
  --inline-title-color: rgb(153, 115, 247) !important;
  --inline-title-size: 1.25em !important;
  --input-date-separator: #9699a388 !important;
  --input-placeholder-color: #9699a388 !important;
  --interactive-hover: #d5d5d5 !important;
  --interactive-normal: #d5d5d5 !important;
  --italic-color: black !important;
  --light: #d5d5d5 !important;
  --lightgray: #d5d5d5 !important;
  --list-marker-color: #9699a388 !important;
  --menu-background: #d5d5d5 !important;
  --menu-border-color: rgb(153, 115, 247) !important;
  --menu-radius: 0 !important;
  --metadata-border-color: rgb(153, 115, 247) !important;
  --metadata-divider-color: rgb(153, 115, 247) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(153, 115, 247) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(153, 115, 247) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #d5d5d5 !important;
  --modal-radius: 0 !important;
  --nav-collapse-icon-color: #9699a388 !important;
  --nav-collapse-icon-color-collapsed: #9699a388 !important;
  --nav-heading-color-collapsed: #9699a388 !important;
  --nav-item-padding: 3px !important;
  --nav-item-parent-padding: 3px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: #9699a388 !important;
  --nav-tag-radius: 0 !important;
  --pdf-background: #d5d5d5 !important;
  --pdf-page-background: #d5d5d5 !important;
  --pdf-sidebar-background: #d5d5d5 !important;
  --pill-border-color: rgb(153, 115, 247) !important;
  --pill-border-color-hover: rgb(153, 115, 247) !important;
  --pill-color-remove: #9699a388 !important;
  --prompt-background: #d5d5d5 !important;
  --radius-l: 0 !important;
  --radius-m: 0 !important;
  --radius-s: 0 !important;
  --raised-background: color-mix(in srgb, #d5d5d5 65%, transparent) linear-gradient(#d5d5d5, color-mix(in srgb, #d5d5d5 65%, transparent)) !important;
  --ribbon-background: #d5d5d5 !important;
  --ribbon-background-collapsed: #d5d5d5 !important;
  --scrollbar-radius: 0 !important;
  --search-result-background: #d5d5d5 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #f6f6f6 !important;
  --setting-items-border-color: rgb(153, 115, 247) !important;
  --setting-items-radius: 0 !important;
  --slider-thumb-border-color: rgb(153, 115, 247) !important;
  --slider-track-background: rgb(153, 115, 247) !important;
  --status-bar-background: #d5d5d5 !important;
  --status-bar-border-color: rgb(153, 115, 247) !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --suggestion-background: #d5d5d5 !important;
  --tab-background-active: #d5d5d5 !important;
  --tab-container-background: #d5d5d5 !important;
  --tab-divider-color: rgb(153, 115, 247) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: rgb(153, 115, 247) !important;
  --tab-radius: 0 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: #d5d5d5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #d5d5d5, transparent) !important;
  --tab-text-color: #9699a388 !important;
  --table-add-button-border-color: rgb(153, 115, 247) !important;
  --table-border-color: rgb(153, 115, 247) !important;
  --table-drag-handle-color: #9699a388 !important;
  --table-header-border-color: rgb(153, 115, 247) !important;
  --text-faint: #9699a388 !important;
  --text-highlight-bg: #485e3066 !important;
  --textHighlight: #485e3066 !important;
  --titlebar-background: #d5d5d5 !important;
  --titlebar-background-focused: #d5d5d5 !important;
  --titlebar-border-color: rgb(153, 115, 247) !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(213, 213, 213);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(213, 213, 213);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(213, 213, 213);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(152, 115, 247);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(213, 213, 213);
  border-left-color: rgb(152, 115, 247);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(213, 213, 213);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(72, 94, 48, 0.4);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(150, 153, 163, 0.533);
  text-decoration: rgba(150, 153, 163, 0.533);
}`,
    tables: `html[saved-theme="light"] body td {
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(152, 115, 247);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(152, 115, 247);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(152, 115, 247);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(152, 115, 247);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(150, 153, 163, 0.533);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(150, 153, 163, 0.533);
  border-right-color: rgba(150, 153, 163, 0.533);
  border-top-color: rgba(150, 153, 163, 0.533);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(213, 213, 213);
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(213, 213, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(213, 213, 213);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body h1 {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body h2 {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(152, 115, 247);
  text-shadow: rgb(152, 115, 247) 0px 0px 20px;
}

html[saved-theme="light"] body h3 {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body h4 {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body h5 {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body h6 {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(138, 92, 245);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(213, 213, 213);
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
  border-top-left-radius: 0px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(150, 153, 163, 0.533);
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(213, 213, 213);
}

html[saved-theme="light"] body .page-header h2.page-title {
  text-shadow: rgb(152, 115, 247) 0px 0px 8px;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
  },
};
