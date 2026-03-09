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
  --background-modifier-border: rgb(138, 92, 245);
  --background-modifier-border-focus: rgb(138, 92, 245);
  --background-modifier-border-hover: rgb(138, 92, 245);
  --background-primary: #111111;
  --background-primary-alt: #262626;
  --background-secondary: #111111;
  --bases-cards-background: #111111;
  --bases-cards-cover-background: #262626;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px rgb(138, 92, 245);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(138, 92, 245);
  --bases-embed-border-color: rgb(138, 92, 245);
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-size: 13px;
  --bases-table-border-color: rgb(138, 92, 245);
  --bases-table-cell-background-active: #111111;
  --bases-table-cell-background-disabled: #262626;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-container-border-radius: 0;
  --bases-table-group-background: #262626;
  --bases-table-header-background: #111111;
  --bases-table-summary-background: #111111;
  --bold-color: white;
  --callout-radius: 0;
  --canvas-background: #111111;
  --canvas-card-label-color: #565f8988;
  --canvas-controls-radius: 0;
  --checkbox-border-color: #565f8988;
  --checkbox-marker-color: #111111;
  --checkbox-radius: 0;
  --clickable-icon-radius: 0;
  --code-background: #262626;
  --code-border-color: rgb(138, 92, 245);
  --code-comment: #565f8988;
  --code-radius: 0;
  --collapse-icon-color: #565f8988;
  --color-base-00: #111111;
  --divider-color: rgb(138, 92, 245);
  --embed-block-shadow-hover: 0 0 0 1px rgb(138, 92, 245), inset 0 0 0 1px rgb(138, 92, 245);
  --file-header-background: #111111;
  --file-header-background-focused: #111111;
  --file-header-font-size: 14px;
  --font-ui-large: 22px;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: rgb(138, 92, 245);
  --footnote-id-color-no-occurrences: #565f8988;
  --footnote-radius: 0;
  --graph-line: #555555;
  --graph-node-unresolved: #565f8988;
  --h1-color: rgb(138, 92, 245);
  --h1-size: 1.25em;
  --h2-color: rgb(138, 92, 245);
  --h2-size: 1.25em;
  --h3-color: rgb(138, 92, 245);
  --h3-size: 1.25em;
  --h4-color: rgb(138, 92, 245);
  --h4-size: 1.25em;
  --h5-color: rgb(138, 92, 245);
  --h5-size: 1.25em;
  --h6-color: rgb(138, 92, 245);
  --h6-size: 1.25em;
  --header-color: rgb(138, 92, 245);
  --header-size: 1.25em;
  --heading-formatting: #565f8988;
  --hr-color: rgb(138, 92, 245);
  --inline-title-color: rgb(138, 92, 245);
  --inline-title-size: 1.25em;
  --input-date-separator: #565f8988;
  --input-placeholder-color: #565f8988;
  --italic-color: white;
  --list-marker-color: #565f8988;
  --menu-background: #111111;
  --menu-border-color: rgb(138, 92, 245);
  --menu-radius: 0;
  --metadata-border-color: rgb(138, 92, 245);
  --metadata-divider-color: rgb(138, 92, 245);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(138, 92, 245);
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: #111111;
  --modal-radius: 0;
  --nav-collapse-icon-color: #565f8988;
  --nav-collapse-icon-color-collapsed: #565f8988;
  --nav-heading-color-collapsed: #565f8988;
  --nav-item-padding: 3px;
  --nav-item-parent-padding: 3px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-tag-color: #565f8988;
  --nav-tag-radius: 0;
  --pdf-background: #111111;
  --pdf-page-background: #111111;
  --pdf-shadow: 0 0 0 1px rgb(138, 92, 245);
  --pdf-sidebar-background: #111111;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(138, 92, 245);
  --pill-border-color: rgb(138, 92, 245);
  --pill-border-color-hover: rgb(138, 92, 245);
  --pill-color-remove: #565f8988;
  --prompt-background: #111111;
  --radius-l: 0;
  --radius-m: 0;
  --radius-s: 0;
  --ribbon-background: #111111;
  --ribbon-background-collapsed: #111111;
  --scrollbar-radius: 0;
  --search-result-background: #111111;
  --setting-group-heading-size: 16px;
  --setting-items-background: #262626;
  --setting-items-border-color: rgb(138, 92, 245);
  --setting-items-radius: 0;
  --slider-thumb-border-color: rgb(138, 92, 245);
  --slider-track-background: rgb(138, 92, 245);
  --status-bar-background: #111111;
  --status-bar-border-color: rgb(138, 92, 245);
  --status-bar-font-size: 13px;
  --status-bar-radius: 0 0 0 0;
  --suggestion-background: #111111;
  --tab-background-active: #111111;
  --tab-container-background: #111111;
  --tab-divider-color: rgb(138, 92, 245);
  --tab-font-size: 14px;
  --tab-outline-color: rgb(138, 92, 245);
  --tab-radius: 0;
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: #111111;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent);
  --tab-text-color: #565f8988;
  --table-add-button-border-color: rgb(138, 92, 245);
  --table-border-color: rgb(138, 92, 245);
  --table-drag-handle-color: #565f8988;
  --table-header-border-color: rgb(138, 92, 245);
  --text-faint: #565f8988;
  --text-highlight-bg: #9ece6a66;
  --titlebar-background: #111111;
  --titlebar-background-focused: #111111;
  --titlebar-border-color: rgb(138, 92, 245);
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 17, 17);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 17, 17);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(138, 92, 245);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 17, 17);
  border-left-color: rgb(138, 92, 245);
}

body div#quartz-root {
  background-color: rgb(17, 17, 17);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgba(158, 206, 106, 0.4);
}`,
    lists: `body ol.overflow {
  background-color: rgb(17, 17, 17);
}

body ul.overflow {
  background-color: rgb(17, 17, 17);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(86, 95, 137, 0.533);
  text-decoration: rgba(86, 95, 137, 0.533);
}`,
    tables: `body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}`,
    code: `body code {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    embeds: `body .file-embed {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgba(86, 95, 137, 0.533);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(86, 95, 137, 0.533);
  border-right-color: rgba(86, 95, 137, 0.533);
  border-top-color: rgba(86, 95, 137, 0.533);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body h1 {
  color: rgb(138, 92, 245);
}

body h2 {
  color: rgb(138, 92, 245);
}

body h2.page-title, h2.page-title a {
  color: rgb(138, 92, 245);
  text-shadow: rgb(138, 92, 245) 0px 0px 20px;
}

body h3 {
  color: rgb(138, 92, 245);
}

body h4 {
  color: rgb(138, 92, 245);
}

body h5 {
  color: rgb(138, 92, 245);
}

body h6 {
  color: rgb(138, 92, 245);
}

body hr {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgba(86, 95, 137, 0.533);
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

body .page-header h2.page-title {
  text-shadow: rgb(138, 92, 245) 0px 0px 8px;
}

body kbd {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: rgb(153, 115, 247);
  --background-modifier-border-focus: rgb(153, 115, 247);
  --background-modifier-border-hover: rgb(153, 115, 247);
  --background-modifier-form-field: #d5d5d5;
  --background-modifier-form-field-hover: #d5d5d5;
  --background-primary: #d5d5d5;
  --background-primary-alt: #f6f6f6;
  --background-secondary: #d5d5d5;
  --bases-cards-background: #d5d5d5;
  --bases-cards-cover-background: #f6f6f6;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px rgb(153, 115, 247);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(153, 115, 247);
  --bases-embed-border-color: rgb(153, 115, 247);
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-size: 13px;
  --bases-table-border-color: rgb(153, 115, 247);
  --bases-table-cell-background-active: #d5d5d5;
  --bases-table-cell-background-disabled: #f6f6f6;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(153, 115, 247);
  --bases-table-container-border-radius: 0;
  --bases-table-group-background: #f6f6f6;
  --bases-table-header-background: #d5d5d5;
  --bases-table-summary-background: #d5d5d5;
  --blur-background: color-mix(in srgb, #d5d5d5 65%, transparent) linear-gradient(#d5d5d5, color-mix(in srgb, #d5d5d5 65%, transparent));
  --bold-color: black;
  --callout-radius: 0;
  --canvas-background: #d5d5d5;
  --canvas-card-label-color: #9699a388;
  --canvas-controls-radius: 0;
  --checkbox-border-color: #9699a388;
  --checkbox-marker-color: #d5d5d5;
  --checkbox-radius: 0;
  --clickable-icon-radius: 0;
  --code-background: #f6f6f6;
  --code-border-color: rgb(153, 115, 247);
  --code-comment: #9699a388;
  --code-radius: 0;
  --collapse-icon-color: #9699a388;
  --color-base-00: #d5d5d5;
  --divider-color: rgb(153, 115, 247);
  --dropdown-background: #d5d5d5;
  --dropdown-background-hover: #d5d5d5;
  --embed-block-shadow-hover: 0 0 0 1px rgb(153, 115, 247), inset 0 0 0 1px rgb(153, 115, 247);
  --file-header-background: #d5d5d5;
  --file-header-background-focused: #d5d5d5;
  --file-header-font-size: 14px;
  --flair-background: #d5d5d5;
  --font-ui-large: 22px;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: rgb(153, 115, 247);
  --footnote-id-color-no-occurrences: #9699a388;
  --footnote-radius: 0;
  --graph-line: #bdbdbd;
  --graph-node-unresolved: #9699a388;
  --h1-color: rgb(153, 115, 247);
  --h1-size: 1.25em;
  --h2-color: rgb(153, 115, 247);
  --h2-size: 1.25em;
  --h3-color: rgb(153, 115, 247);
  --h3-size: 1.25em;
  --h4-color: rgb(153, 115, 247);
  --h4-size: 1.25em;
  --h5-color: rgb(153, 115, 247);
  --h5-size: 1.25em;
  --h6-color: rgb(153, 115, 247);
  --h6-size: 1.25em;
  --header-size: 1.25em;
  --heading-formatting: #9699a388;
  --hr-color: rgb(153, 115, 247);
  --inline-title-color: rgb(153, 115, 247);
  --inline-title-size: 1.25em;
  --input-date-separator: #9699a388;
  --input-placeholder-color: #9699a388;
  --interactive-hover: #d5d5d5;
  --interactive-normal: #d5d5d5;
  --italic-color: black;
  --list-marker-color: #9699a388;
  --menu-background: #d5d5d5;
  --menu-border-color: rgb(153, 115, 247);
  --menu-radius: 0;
  --metadata-border-color: rgb(153, 115, 247);
  --metadata-divider-color: rgb(153, 115, 247);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(153, 115, 247);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(153, 115, 247);
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: #d5d5d5;
  --modal-radius: 0;
  --nav-collapse-icon-color: #9699a388;
  --nav-collapse-icon-color-collapsed: #9699a388;
  --nav-heading-color-collapsed: #9699a388;
  --nav-item-padding: 3px;
  --nav-item-parent-padding: 3px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-tag-color: #9699a388;
  --nav-tag-radius: 0;
  --pdf-background: #d5d5d5;
  --pdf-page-background: #d5d5d5;
  --pdf-sidebar-background: #d5d5d5;
  --pill-border-color: rgb(153, 115, 247);
  --pill-border-color-hover: rgb(153, 115, 247);
  --pill-color-remove: #9699a388;
  --prompt-background: #d5d5d5;
  --radius-l: 0;
  --radius-m: 0;
  --radius-s: 0;
  --raised-background: color-mix(in srgb, #d5d5d5 65%, transparent) linear-gradient(#d5d5d5, color-mix(in srgb, #d5d5d5 65%, transparent));
  --ribbon-background: #d5d5d5;
  --ribbon-background-collapsed: #d5d5d5;
  --scrollbar-radius: 0;
  --search-result-background: #d5d5d5;
  --setting-group-heading-size: 16px;
  --setting-items-background: #f6f6f6;
  --setting-items-border-color: rgb(153, 115, 247);
  --setting-items-radius: 0;
  --slider-thumb-border-color: rgb(153, 115, 247);
  --slider-track-background: rgb(153, 115, 247);
  --status-bar-background: #d5d5d5;
  --status-bar-border-color: rgb(153, 115, 247);
  --status-bar-font-size: 13px;
  --status-bar-radius: 0 0 0 0;
  --suggestion-background: #d5d5d5;
  --tab-background-active: #d5d5d5;
  --tab-container-background: #d5d5d5;
  --tab-divider-color: rgb(153, 115, 247);
  --tab-font-size: 14px;
  --tab-outline-color: rgb(153, 115, 247);
  --tab-radius: 0;
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: #d5d5d5;
  --tab-switcher-menubar-background: linear-gradient(to top, #d5d5d5, transparent);
  --tab-text-color: #9699a388;
  --table-add-button-border-color: rgb(153, 115, 247);
  --table-border-color: rgb(153, 115, 247);
  --table-drag-handle-color: #9699a388;
  --table-header-border-color: rgb(153, 115, 247);
  --text-faint: #9699a388;
  --text-highlight-bg: #485e3066;
  --titlebar-background: #d5d5d5;
  --titlebar-background-focused: #d5d5d5;
  --titlebar-border-color: rgb(153, 115, 247);
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(213, 213, 213);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(213, 213, 213);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(213, 213, 213);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(152, 115, 247);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(213, 213, 213);
  border-left-color: rgb(152, 115, 247);
}

body div#quartz-root {
  background-color: rgb(213, 213, 213);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgba(72, 94, 48, 0.4);
}`,
    lists: `body ol.overflow {
  background-color: rgb(213, 213, 213);
}

body ul.overflow {
  background-color: rgb(213, 213, 213);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(150, 153, 163, 0.533);
  text-decoration: rgba(150, 153, 163, 0.533);
}`,
    tables: `body td {
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
}

body th {
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
}`,
    code: `body code {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    embeds: `body .file-embed {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgba(150, 153, 163, 0.533);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(150, 153, 163, 0.533);
  border-right-color: rgba(150, 153, 163, 0.533);
  border-top-color: rgba(150, 153, 163, 0.533);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(213, 213, 213);
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
}

body .search > .search-container > .search-space {
  background-color: rgb(213, 213, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(213, 213, 213);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body h1 {
  color: rgb(152, 115, 247);
}

body h2 {
  color: rgb(152, 115, 247);
}

body h2.page-title, h2.page-title a {
  color: rgb(152, 115, 247);
  text-shadow: rgb(152, 115, 247) 0px 0px 20px;
}

body h3 {
  color: rgb(152, 115, 247);
}

body h4 {
  color: rgb(152, 115, 247);
}

body h5 {
  color: rgb(152, 115, 247);
}

body h6 {
  color: rgb(152, 115, 247);
}

body hr {
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}

body ::-webkit-scrollbar-corner {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}

body ::-webkit-scrollbar-track {
  background: rgb(213, 213, 213) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 213, 213);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `body footer {
  background-color: rgb(213, 213, 213);
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
  border-top-left-radius: 0px;
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgba(150, 153, 163, 0.533);
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(152, 115, 247);
  border-left-color: rgb(152, 115, 247);
  border-right-color: rgb(152, 115, 247);
  border-top-color: rgb(152, 115, 247);
}

body .navigation-progress {
  background-color: rgb(213, 213, 213);
}

body .page-header h2.page-title {
  text-shadow: rgb(152, 115, 247) 0px 0px 8px;
}

body kbd {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
  },
};
