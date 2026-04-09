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

html body .bases-table thead th {
  border-color: rgb(153, 153, 153);
}

html body .canvas-sidebar {
  background-color: rgb(26, 27, 38);
}

html body .note-properties {
  border-color: rgb(153, 153, 153);
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
  text-decoration-color: rgb(187, 154, 247);
}

html body .page article p > em, html em {
  color: rgb(154, 165, 206);
  outline: rgb(154, 165, 206) none 0px;
  text-decoration-color: rgb(154, 165, 206);
}

html body .page article p > i, html i {
  color: rgb(154, 165, 206);
  outline: rgb(154, 165, 206) none 0px;
  text-decoration-color: rgb(154, 165, 206);
}

html body .page article p > strong, html strong {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration-color: rgb(187, 154, 247);
}

html body .text-highlight {
  background-color: rgba(158, 206, 106, 0.4);
}

html body h1.article-title {
  font-size: 14px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgba(86, 95, 137, 0.533);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgba(86, 95, 137, 0.533);
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
    images: `html body img {
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
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
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
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
