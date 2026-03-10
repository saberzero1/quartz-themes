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
  --background-modifier-border: #999999 !important;
  --background-modifier-border-hover: #555555 !important;
  --background-primary: #1a1b26 !important;
  --background-primary-alt: #1a1b26 !important;
  --background-secondary: #1a1b26 !important;
  --bases-cards-background: #1a1b26 !important;
  --bases-cards-cover-background: #1a1b26 !important;
  --bases-cards-shadow: 0 0 0 1px #999999 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #555555 !important;
  --bases-embed-border-color: #999999 !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: #999999 !important;
  --bases-table-cell-background-active: #1a1b26 !important;
  --bases-table-cell-background-disabled: #1a1b26 !important;
  --bases-table-group-background: #1a1b26 !important;
  --bases-table-header-background: #1a1b26 !important;
  --bases-table-summary-background: #1a1b26 !important;
  --bold-color: #bb9af7 !important;
  --canvas-background: #1a1b26 !important;
  --canvas-card-label-color: #565f8988 !important;
  --checkbox-border-color: #565f8988 !important;
  --checkbox-marker-color: #1a1b26 !important;
  --code-background: #1a1b26 !important;
  --code-border-color: #999999 !important;
  --code-comment: #565f8988 !important;
  --collapse-icon-color: #565f8988 !important;
  --color-base-00: #1a1b26 !important;
  --divider-color: #999999 !important;
  --embed-block-shadow-hover: 0 0 0 1px #999999, inset 0 0 0 1px #999999 !important;
  --file-header-background: #1a1b26 !important;
  --file-header-background-focused: #1a1b26 !important;
  --file-header-font-size: 14px !important;
  --font-ui-large: 22px !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: #999999 !important;
  --footnote-id-color-no-occurrences: #565f8988 !important;
  --graph-line: #555555 !important;
  --graph-node-unresolved: #565f8988 !important;
  --gray: #565f8988 !important;
  --h1-color: #7aa2f7 !important;
  --h1-size: 1.25em !important;
  --h2-color: #7aa2f7 !important;
  --h2-size: 1.25em !important;
  --h3-color: #7aa2f7 !important;
  --h3-size: 1.25em !important;
  --h4-color: #7aa2f7 !important;
  --h4-size: 1.25em !important;
  --h5-color: #7aa2f7 !important;
  --h5-size: 1.25em !important;
  --h6-color: #7aa2f7 !important;
  --h6-size: 1.25em !important;
  --header-color: #7aa2f7 !important;
  --header-size: 1.25em !important;
  --heading-formatting: #565f8988 !important;
  --highlight: #9ece6a66 !important;
  --hr-color: #999999 !important;
  --inline-title-color: #7aa2f7 !important;
  --inline-title-size: 1.25em !important;
  --input-date-separator: #565f8988 !important;
  --input-placeholder-color: #565f8988 !important;
  --italic-color: #9aa5ce !important;
  --light: #1a1b26 !important;
  --lightgray: #1a1b26 !important;
  --list-marker-color: #565f8988 !important;
  --menu-background: #1a1b26 !important;
  --menu-border-color: #555555 !important;
  --metadata-border-color: #999999 !important;
  --metadata-divider-color: #999999 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #555555 !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #1a1b26 !important;
  --nav-collapse-icon-color: #565f8988 !important;
  --nav-collapse-icon-color-collapsed: #565f8988 !important;
  --nav-heading-color-collapsed: #565f8988 !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: #565f8988 !important;
  --pdf-background: #1a1b26 !important;
  --pdf-page-background: #1a1b26 !important;
  --pdf-shadow: 0 0 0 1px #999999 !important;
  --pdf-sidebar-background: #1a1b26 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #999999 !important;
  --pill-border-color: #999999 !important;
  --pill-border-color-hover: #555555 !important;
  --pill-color-remove: #565f8988 !important;
  --prompt-background: #1a1b26 !important;
  --ribbon-background: #1a1b26 !important;
  --ribbon-background-collapsed: #1a1b26 !important;
  --search-result-background: #1a1b26 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #1a1b26 !important;
  --setting-items-border-color: #999999 !important;
  --slider-thumb-border-color: #555555 !important;
  --slider-track-background: #999999 !important;
  --status-bar-background: #1a1b26 !important;
  --status-bar-border-color: #999999 !important;
  --status-bar-font-size: 13px !important;
  --suggestion-background: #1a1b26 !important;
  --tab-background-active: #1a1b26 !important;
  --tab-container-background: #1a1b26 !important;
  --tab-divider-color: #555555 !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: #999999 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: #1a1b26 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1b26, transparent) !important;
  --tab-text-color: #565f8988 !important;
  --table-add-button-border-color: #999999 !important;
  --table-border-color: #999999 !important;
  --table-drag-handle-color: #565f8988 !important;
  --table-header-border-color: #999999 !important;
  --text-faint: #565f8988 !important;
  --text-highlight-bg: #9ece6a66 !important;
  --textHighlight: #9ece6a66 !important;
  --titlebar-background: #1a1b26 !important;
  --titlebar-background-focused: #1a1b26 !important;
  --titlebar-border-color: #999999 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 27, 38);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(26, 27, 38);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 27, 38);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(153, 153, 153);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 27, 38);
  border-left-color: rgb(153, 153, 153);
}

html body div#quartz-root {
  background-color: rgb(26, 27, 38);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

html body .page article p > em, html em {
  color: rgb(154, 165, 206);
  outline: rgb(154, 165, 206) none 0px;
  text-decoration: rgb(154, 165, 206);
  text-decoration-color: rgb(154, 165, 206);
}

html body .page article p > i, html i {
  color: rgb(154, 165, 206);
  outline: rgb(154, 165, 206) none 0px;
  text-decoration: rgb(154, 165, 206);
  text-decoration-color: rgb(154, 165, 206);
}

html body .page article p > strong, html strong {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

html body .text-highlight {
  background-color: rgba(158, 206, 106, 0.4);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgba(86, 95, 137, 0.533);
  text-decoration: rgba(86, 95, 137, 0.533);
}`,
    tables: `html body td {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body th {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}`,
    code: `html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body pre:has(> code) {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(26, 27, 38);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgba(86, 95, 137, 0.533);
  border-left-color: rgba(86, 95, 137, 0.533);
  border-right-color: rgba(86, 95, 137, 0.533);
  border-top-color: rgba(86, 95, 137, 0.533);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 38);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 27, 38);
}

html body h1 {
  color: rgb(122, 162, 247);
}

html body h2 {
  color: rgb(122, 162, 247);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(122, 162, 247);
}

html body h3 {
  color: rgb(122, 162, 247);
}

html body h4 {
  color: rgb(122, 162, 247);
}

html body h5 {
  color: rgb(122, 162, 247);
}

html body h6 {
  color: rgb(122, 162, 247);
}

html body hr {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html body ::-webkit-scrollbar-track {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}`,
    footer: `html body footer {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgba(86, 95, 137, 0.533);
}`,
    misc: `html body .metadata {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body .navigation-progress {
  background-color: rgb(26, 27, 38);
}

html body kbd {
  background-color: rgb(26, 27, 38);
}`,
  },
  light: {},
};
