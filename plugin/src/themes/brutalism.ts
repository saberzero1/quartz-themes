import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "brutalism",
    modes: ["dark"],
    variations: [],
    fonts: ["archivo"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #999999;
  --background-modifier-border-hover: #555555;
  --background-primary: #1a1b26;
  --background-primary-alt: #1a1b26;
  --background-secondary: #1a1b26;
  --bases-cards-background: #1a1b26;
  --bases-cards-cover-background: #1a1b26;
  --bases-cards-shadow: 0 0 0 1px #999999;
  --bases-cards-shadow-hover: 0 0 0 1px #555555;
  --bases-embed-border-color: #999999;
  --bases-group-heading-property-size: 13px;
  --bases-table-border-color: #999999;
  --bases-table-cell-background-active: #1a1b26;
  --bases-table-cell-background-disabled: #1a1b26;
  --bases-table-group-background: #1a1b26;
  --bases-table-header-background: #1a1b26;
  --bases-table-summary-background: #1a1b26;
  --bold-color: #bb9af7;
  --canvas-background: #1a1b26;
  --canvas-card-label-color: #565f8988;
  --checkbox-border-color: #565f8988;
  --checkbox-marker-color: #1a1b26;
  --code-background: #1a1b26;
  --code-border-color: #999999;
  --code-comment: #565f8988;
  --collapse-icon-color: #565f8988;
  --color-base-00: #1a1b26;
  --divider-color: #999999;
  --embed-block-shadow-hover: 0 0 0 1px #999999, inset 0 0 0 1px #999999;
  --file-header-background: #1a1b26;
  --file-header-background-focused: #1a1b26;
  --file-header-font-size: 14px;
  --font-ui-large: 22px;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: #999999;
  --footnote-id-color-no-occurrences: #565f8988;
  --graph-line: #555555;
  --graph-node-unresolved: #565f8988;
  --h1-color: #7aa2f7;
  --h1-size: 1.25em;
  --h2-color: #7aa2f7;
  --h2-size: 1.25em;
  --h3-color: #7aa2f7;
  --h3-size: 1.25em;
  --h4-color: #7aa2f7;
  --h4-size: 1.25em;
  --h5-color: #7aa2f7;
  --h5-size: 1.25em;
  --h6-color: #7aa2f7;
  --h6-size: 1.25em;
  --header-color: #7aa2f7;
  --header-size: 1.25em;
  --heading-formatting: #565f8988;
  --hr-color: #999999;
  --inline-title-color: #7aa2f7;
  --inline-title-size: 1.25em;
  --input-date-separator: #565f8988;
  --input-placeholder-color: #565f8988;
  --italic-color: #9aa5ce;
  --list-marker-color: #565f8988;
  --menu-background: #1a1b26;
  --menu-border-color: #555555;
  --metadata-border-color: #999999;
  --metadata-divider-color: #999999;
  --metadata-property-box-shadow-hover: 0 0 0 1px #555555;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: #1a1b26;
  --nav-collapse-icon-color: #565f8988;
  --nav-collapse-icon-color-collapsed: #565f8988;
  --nav-heading-color-collapsed: #565f8988;
  --nav-item-size: 14px;
  --nav-tag-color: #565f8988;
  --pdf-background: #1a1b26;
  --pdf-page-background: #1a1b26;
  --pdf-shadow: 0 0 0 1px #999999;
  --pdf-sidebar-background: #1a1b26;
  --pdf-thumbnail-shadow: 0 0 0 1px #999999;
  --pill-border-color: #999999;
  --pill-border-color-hover: #555555;
  --pill-color-remove: #565f8988;
  --prompt-background: #1a1b26;
  --ribbon-background: #1a1b26;
  --ribbon-background-collapsed: #1a1b26;
  --search-result-background: #1a1b26;
  --setting-group-heading-size: 16px;
  --setting-items-background: #1a1b26;
  --setting-items-border-color: #999999;
  --slider-thumb-border-color: #555555;
  --slider-track-background: #999999;
  --status-bar-background: #1a1b26;
  --status-bar-border-color: #999999;
  --status-bar-font-size: 13px;
  --suggestion-background: #1a1b26;
  --tab-background-active: #1a1b26;
  --tab-container-background: #1a1b26;
  --tab-divider-color: #555555;
  --tab-font-size: 14px;
  --tab-outline-color: #999999;
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: #1a1b26;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1b26, transparent);
  --tab-text-color: #565f8988;
  --table-add-button-border-color: #999999;
  --table-border-color: #999999;
  --table-drag-handle-color: #565f8988;
  --table-header-border-color: #999999;
  --text-faint: #565f8988;
  --text-highlight-bg: #9ece6a66;
  --titlebar-background: #1a1b26;
  --titlebar-background-focused: #1a1b26;
  --titlebar-border-color: #999999;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 27, 38);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 27, 38);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 27, 38);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(153, 153, 153);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 27, 38);
  border-left-color: rgb(153, 153, 153);
}

body div#quartz-root {
  background-color: rgb(26, 27, 38);
}`,
    typography: `body .page article p > b, b {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

body .page article p > em, em {
  color: rgb(154, 165, 206);
  outline: rgb(154, 165, 206) none 0px;
  text-decoration: rgb(154, 165, 206);
  text-decoration-color: rgb(154, 165, 206);
}

body .page article p > i, i {
  color: rgb(154, 165, 206);
  outline: rgb(154, 165, 206) none 0px;
  text-decoration: rgb(154, 165, 206);
  text-decoration-color: rgb(154, 165, 206);
}

body .page article p > strong, strong {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

body .text-highlight {
  background-color: rgba(158, 206, 106, 0.4);
}`,
    lists: `body ol.overflow {
  background-color: rgb(26, 27, 38);
}

body ul.overflow {
  background-color: rgb(26, 27, 38);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(86, 95, 137, 0.533);
  text-decoration: rgba(86, 95, 137, 0.533);
}`,
    tables: `body td {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body th {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body pre:has(> code) {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}`,
    embeds: `body .file-embed {
  background-color: rgb(26, 27, 38);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgba(86, 95, 137, 0.533);
  border-left-color: rgba(86, 95, 137, 0.533);
  border-right-color: rgba(86, 95, 137, 0.533);
  border-top-color: rgba(86, 95, 137, 0.533);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 38);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 27, 38);
}

body h1 {
  color: rgb(122, 162, 247);
}

body h2 {
  color: rgb(122, 162, 247);
}

body h2.page-title, h2.page-title a {
  color: rgb(122, 162, 247);
}

body h3 {
  color: rgb(122, 162, 247);
}

body h4 {
  color: rgb(122, 162, 247);
}

body h5 {
  color: rgb(122, 162, 247);
}

body h6 {
  color: rgb(122, 162, 247);
}

body hr {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}`,
    footer: `body footer {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgba(86, 95, 137, 0.533);
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body .navigation-progress {
  background-color: rgb(26, 27, 38);
}

body kbd {
  background-color: rgb(26, 27, 38);
}`,
  },
  light: {},
};
