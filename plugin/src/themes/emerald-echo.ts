import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "emerald-echo",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #000000 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #529d5273 !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-summary-background: #000000 !important;
  --blockquote-background-color: #1121019c !important;
  --blockquote-border-color: #529d5273 !important;
  --bold-color: #41b4b4 !important;
  --canvas-background: #000000 !important;
  --checkbox-color: #529d5273 !important;
  --checkbox-color-hover: #37ff148c !important;
  --checkbox-marker-color: #000000 !important;
  --code-background: #3f542946 !important;
  --code-keyword: #c678dd !important;
  --code-normal: #a8c090 !important;
  --code-property: #9D527C !important;
  --collapse-icon-color-collapsed: #63be63 !important;
  --divider-color-hover: #529d5273 !important;
  --embed-border-start: 2px solid #529d5273 !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --graph-node-focused: #63be63 !important;
  --h1-color: #2cce10 !important;
  --h2-color: #BE7070 !important;
  --h3-color: #3D7676 !important;
  --h4-color: #a9ba9d !important;
  --h5-color: #9dc183 !important;
  --h6-color: #486e02 !important;
  --highlight: #67c26769 !important;
  --icon-color: #529d52 !important;
  --icon-color-active: #63be63 !important;
  --icon-color-focused: #39ff14 !important;
  --icon-color-hover: #39ff14 !important;
  --indentation-guide-color: #39ff14 !important;
  --indentation-guide-color-active: #39ff14 !important;
  --inline-title-color: #2cce10 !important;
  --interactive-accent: #529d5273 !important;
  --interactive-accent-hover: #37ff148c !important;
  --italic-color: #d8e43a !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: #63be63 !important;
  --link-color-hover: #39ff14 !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: #529D52 !important;
  --link-unresolved-color: #63be63 !important;
  --list-marker-color-collapsed: #63be63 !important;
  --menu-background: #000000 !important;
  --modal-background: #000000 !important;
  --nav-collapse-icon-color: #529d52 !important;
  --nav-file-tag: #f4ec9e !important;
  --nav-indentation-guide-color: #529d52 !important;
  --nav-item-color-active: #39ff14 !important;
  --nav-item-color-highlighted: #63be63 !important;
  --nav-item-color-hover: #39ff14 !important;
  --nav-item-size: 15px !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-sidebar-background: #000000 !important;
  --pill-color-remove-hover: #63be63 !important;
  --prompt-background: #000000 !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-active-thumb-bg: #39ff14 !important;
  --scrollbar-thumb-bg: #529D52 !important;
  --search-result-background: #000000 !important;
  --secondary: #63be63 !important;
  --setting-items-background: #000000 !important;
  --status-bar-background: #000000 !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #000000 !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color-focused-highlighted: #63be63 !important;
  --table-drag-handle-background-active: #529d5273 !important;
  --table-header-background: #2a2a2a4c !important;
  --table-selection-border-color: #529d5273 !important;
  --tag-color: #63be63 !important;
  --tag-color-hover: #63be63 !important;
  --tertiary: #37ff148c !important;
  --text-accent: #63be63 !important;
  --text-highlight-bg: #67c26769 !important;
  --text-selection: #55a05550 !important;
  --textHighlight: #67c26769 !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(99, 190, 99);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(65, 180, 180);
  outline: rgb(65, 180, 180) none 0px;
  text-decoration-color: rgb(65, 180, 180);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(216, 228, 58);
  outline: rgb(216, 228, 58) none 0px;
  text-decoration-color: rgb(216, 228, 58);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(216, 228, 58);
  outline: rgb(216, 228, 58) none 0px;
  text-decoration-color: rgb(216, 228, 58);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(65, 180, 180);
  outline: rgb(65, 180, 180) none 0px;
  text-decoration-color: rgb(65, 180, 180);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(103, 194, 103, 0.41);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(82, 157, 82, 0.45);
  border-color: rgba(82, 157, 82, 0.45);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(82, 157, 82);
  outline: rgb(82, 157, 82) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(82, 157, 82);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(99, 190, 99);
  outline: rgb(99, 190, 99) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(99, 190, 99);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(99, 190, 99);
  outline: rgb(99, 190, 99) none 0px;
  text-decoration: underline 1px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 1px;
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgba(17, 33, 1, 0.61);
}`,
    tables: `html[saved-theme="dark"] body tr {
  background-color: rgba(42, 42, 42, 0.298);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(63, 84, 41, 0.275);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(63, 84, 41, 0.275);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(63, 84, 41, 0.275);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(63, 84, 41, 0.275);
}`,
    images: `html[saved-theme="dark"] body img {
  border-bottom-color: rgb(44, 206, 16);
  border-left-color: rgb(44, 206, 16);
  border-right-color: rgb(44, 206, 16);
  border-top-color: rgb(44, 206, 16);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgba(82, 157, 82, 0.45);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(99, 190, 99);
}

html[saved-theme="dark"] body h1 {
  color: rgb(44, 206, 16);
}

html[saved-theme="dark"] body h2 {
  color: rgb(190, 112, 112);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(44, 206, 16);
}

html[saved-theme="dark"] body h3 {
  color: rgb(61, 118, 118);
}

html[saved-theme="dark"] body h4 {
  color: rgb(169, 186, 157);
}

html[saved-theme="dark"] body h5 {
  color: rgb(157, 193, 131);
}

html[saved-theme="dark"] body h6 {
  color: rgb(72, 110, 2);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(82, 157, 82);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(82, 157, 82);
  border-left-color: rgb(82, 157, 82);
  border-right-color: rgb(82, 157, 82);
  border-top-color: rgb(82, 157, 82);
  color: rgb(82, 157, 82);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(82, 157, 82);
  border-left-color: rgb(82, 157, 82);
  border-right-color: rgb(82, 157, 82);
  border-top-color: rgb(82, 157, 82);
  color: rgb(82, 157, 82);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(82, 157, 82);
  stroke: rgb(82, 157, 82);
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(63, 84, 41, 0.275);
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(99, 190, 99);
}`,
  },
  light: {
    base: `:root:root {
  --bases-table-cell-shadow-focus: 0 0 0 2px #529D52 !important;
  --blockquote-background-color: #71974b42 !important;
  --blockquote-border-color: #529D52 !important;
  --bold-color: #41b4b4 !important;
  --checkbox-color: #529D52 !important;
  --checkbox-color-hover: #2e7e2e !important;
  --code-background: #070e00 !important;
  --code-keyword: #c678dd !important;
  --code-normal: #a8c090 !important;
  --code-property: #9D527C !important;
  --collapse-icon-color-collapsed: #529D52 !important;
  --divider-color-hover: #529D52 !important;
  --embed-border-start: 2px solid #529D52 !important;
  --graph-node-focused: #529D52 !important;
  --h1-color: #128a12 !important;
  --h2-color: #BE7070 !important;
  --h3-color: #3D7676 !important;
  --h4-color: #a9ba9d !important;
  --h5-color: #9dc183 !important;
  --h6-color: #486e02 !important;
  --highlight: #529d52b1 !important;
  --icon-color: #274b27 !important;
  --icon-color-active: #529D52 !important;
  --icon-color-focused: #128a12 !important;
  --icon-color-hover: #128a12 !important;
  --indentation-guide-color: #529D52 !important;
  --indentation-guide-color-active: #529D52 !important;
  --inline-title-color: #529D52 !important;
  --interactive-accent: #529D52 !important;
  --interactive-accent-hover: #2e7e2e !important;
  --italic-color: #7c8508 !important;
  --link-color: #529D52 !important;
  --link-color-hover: #274b27 !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: #529D52 !important;
  --link-unresolved-color: #529D52 !important;
  --list-marker-color-collapsed: #529D52 !important;
  --nav-collapse-icon-color: #529d52 !important;
  --nav-file-tag: #f4ec9e !important;
  --nav-indentation-guide-color: #529d52 !important;
  --nav-item-color-active: #128a12 !important;
  --nav-item-color-highlighted: #529D52 !important;
  --nav-item-color-hover: #128a12 !important;
  --nav-item-size: 15px !important;
  --pill-color-remove-hover: #529D52 !important;
  --scrollbar-active-thumb-bg: #529D52 !important;
  --scrollbar-thumb-bg: #529D52 !important;
  --secondary: #529D52 !important;
  --tab-text-color-focused-highlighted: #529D52 !important;
  --table-drag-handle-background-active: #529D52 !important;
  --table-header-background: #2a2a2a4c !important;
  --table-selection-border-color: #529D52 !important;
  --tag-color: #529D52 !important;
  --tag-color-hover: #529D52 !important;
  --tertiary: #2e7e2e !important;
  --text-accent: #529D52 !important;
  --text-highlight-bg: #529d52b1 !important;
  --text-selection: #55a05550 !important;
  --textHighlight: #529d52b1 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(82, 157, 82);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(65, 180, 180);
  outline: rgb(65, 180, 180) none 0px;
  text-decoration-color: rgb(65, 180, 180);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(124, 133, 8);
  outline: rgb(124, 133, 8) none 0px;
  text-decoration-color: rgb(124, 133, 8);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(124, 133, 8);
  outline: rgb(124, 133, 8) none 0px;
  text-decoration-color: rgb(124, 133, 8);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(65, 180, 180);
  outline: rgb(65, 180, 180) none 0px;
  text-decoration-color: rgb(65, 180, 180);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(82, 157, 82, 0.694);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(82, 157, 82);
  border-color: rgb(82, 157, 82);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(82, 157, 82);
  outline: rgb(82, 157, 82) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(82, 157, 82);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(82, 157, 82);
  outline: rgb(82, 157, 82) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(82, 157, 82);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(82, 157, 82);
  outline: rgb(82, 157, 82) none 0px;
  text-decoration: underline 1px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 1px;
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgba(113, 151, 75, 0.26);
}`,
    tables: `html[saved-theme="light"] body tr {
  background-color: rgba(42, 42, 42, 0.298);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(7, 14, 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(7, 14, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(7, 14, 0);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(7, 14, 0);
}`,
    images: `html[saved-theme="light"] body img {
  border-bottom-color: rgb(18, 138, 18);
  border-left-color: rgb(18, 138, 18);
  border-right-color: rgb(18, 138, 18);
  border-top-color: rgb(18, 138, 18);
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  border-left-color: rgb(82, 157, 82);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(82, 157, 82);
}

html[saved-theme="light"] body h1 {
  color: rgb(18, 138, 18);
}

html[saved-theme="light"] body h2 {
  color: rgb(190, 112, 112);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(82, 157, 82);
}

html[saved-theme="light"] body h3 {
  color: rgb(61, 118, 118);
}

html[saved-theme="light"] body h4 {
  color: rgb(169, 186, 157);
}

html[saved-theme="light"] body h5 {
  color: rgb(157, 193, 131);
}

html[saved-theme="light"] body h6 {
  color: rgb(72, 110, 2);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(82, 157, 82);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(39, 75, 39);
  border-left-color: rgb(39, 75, 39);
  border-right-color: rgb(39, 75, 39);
  border-top-color: rgb(39, 75, 39);
  color: rgb(39, 75, 39);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(39, 75, 39);
  border-left-color: rgb(39, 75, 39);
  border-right-color: rgb(39, 75, 39);
  border-top-color: rgb(39, 75, 39);
  color: rgb(39, 75, 39);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(39, 75, 39);
  stroke: rgb(39, 75, 39);
}`,
    misc: `html[saved-theme="light"] body kbd {
  background-color: rgb(7, 14, 0);
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(82, 157, 82);
}`,
  },
};
