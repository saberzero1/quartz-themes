import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "monochroyou",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: transparent !important;
  --background-primary: hsl(258, 20%, 7%) !important;
  --background-secondary: hsl(258, 30%, 12%) !important;
  --bases-cards-background: hsl(258, 20%, 7%) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-embed-border-radius: 100px !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: hsl(258, 20%, 7%) !important;
  --bases-table-container-border-radius: 100px !important;
  --bases-table-header-background: hsl(258, 20%, 7%) !important;
  --bases-table-summary-background: hsl(258, 20%, 7%) !important;
  --button-radius: 100px !important;
  --callout-radius: 100px;
  --canvas-background: hsl(258, 20%, 7%) !important;
  --canvas-controls-radius: 100px !important;
  --checkbox-marker-color: hsl(258, 20%, 7%) !important;
  --checkbox-radius: 100px !important;
  --clickable-icon-radius: 100px !important;
  --code-background: hsl(258, 100%, 10%) !important;
  --code-border-color: transparent !important;
  --code-normal: hsl(258, 100%, 80%) !important;
  --code-radius: 100px !important;
  --colorBackgroundPrimary: hsl(258, 20%, 7%) !important;
  --colorBackgroundSecondary: hsl(258, 30%, 12%) !important;
  --colorOnPrimary: hsl(258, 30%, 12%) !important;
  --colorPrimary: hsl(258, 100%, 80%) !important;
  --colorPrimaryContainer: hsl(258, 100%, 10%) !important;
  --colorPrimaryContainerVariant: hsl(258, 100%, 20%) !important;
  --colorPrimaryContainerVariantHover: hsl(258, 100%, 10%) !important;
  --divider-color: transparent !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --file-header-background: hsl(258, 20%, 7%) !important;
  --file-header-background-focused: hsl(258, 20%, 7%) !important;
  --footnote-divider-color: transparent !important;
  --footnote-radius: 100px !important;
  --highlight: hsl(258, 100%, 20%) !important;
  --hr-color: transparent !important;
  --light: hsl(258, 20%, 7%) !important;
  --lightgray: hsl(258, 30%, 12%) !important;
  --link-external-color: hsl(258, 100%, 80%) !important;
  --link-external-color-hover: hsl(258, 100%, 80%) !important;
  --menu-background: hsl(258, 30%, 12%) !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --modal-background: hsl(258, 20%, 7%) !important;
  --nav-item-background-active: hsl(258, 100%, 20%) !important;
  --nav-item-background-hover: hsl(258, 100%, 10%) !important;
  --nav-item-color: white !important;
  --nav-item-radius: 100px !important;
  --nav-tag-radius: 100px !important;
  --pdf-background: hsl(258, 20%, 7%) !important;
  --pdf-page-background: hsl(258, 20%, 7%) !important;
  --pdf-shadow: 0 0 0 1px transparent !important;
  --pdf-sidebar-background: hsl(258, 20%, 7%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px transparent !important;
  --pill-border-color: transparent !important;
  --prompt-background: hsl(258, 20%, 7%) !important;
  --radius-s: 100px !important;
  --ribbon-background: hsl(258, 30%, 12%) !important;
  --ribbon-background-collapsed: hsl(258, 20%, 7%) !important;
  --search-result-background: hsl(258, 20%, 7%) !important;
  --setting-items-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --status-bar-background: hsl(258, 30%, 12%) !important;
  --status-bar-border-color: transparent !important;
  --suggestion-background: hsl(258, 20%, 7%) !important;
  --tab-background-active: hsl(258, 100%, 20%) !important;
  --tab-container-background: hsl(258, 30%, 12%) !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 100px !important;
  --tab-switcher-background: hsl(258, 30%, 12%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 30%, 12%), transparent) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: transparent !important;
  --table-drag-handle-color-active: hsl(258, 30%, 12%) !important;
  --table-header-border-color: transparent !important;
  --tag-background: hsl(258, 100%, 20%) !important;
  --tag-background-hover: hsl(258, 100%, 20%) !important;
  --tag-color: hsl(258, 100%, 80%) !important;
  --text-highlight-bg: hsl(258, 100%, 20%) !important;
  --text-on-accent: hsl(258, 30%, 12%) !important;
  --text-on-accent-inverted: hsl(258, 30%, 12%) !important;
  --textHighlight: hsl(258, 100%, 20%) !important;
  --titlebar-background: hsl(258, 30%, 12%) !important;
  --titlebar-background-focused: hsl(258, 30%, 12%) !important;
  --titlebar-border-color: transparent !important;
  --toggle-thumb-color: hsl(258, 30%, 12%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(31, 0, 102);
  color: rgb(184, 153, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 21, 40);
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(16, 14, 21);
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(31, 0, 102);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 100px;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(184, 153, 255);
  outline: rgb(184, 153, 255) none 0px;
  text-decoration-color: rgb(184, 153, 255);
}`,
    tables: `html[saved-theme="dark"] body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(184, 153, 255);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(184, 153, 255);
  border-right-color: rgb(184, 153, 255);
  border-top-color: rgb(184, 153, 255);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(184, 153, 255);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
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
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(31, 0, 102);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(184, 153, 255);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(27, 21, 40);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgb(184, 153, 255);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(184, 153, 255);
  border-right-color: rgb(184, 153, 255);
  border-top-color: rgb(184, 153, 255);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(184, 153, 255);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(31, 0, 102);
  color: rgb(184, 153, 255);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: transparent !important;
  --background-primary: hsl(258, 100%, 97%) !important;
  --background-secondary: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --bases-cards-background: hsl(258, 100%, 97%) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-embed-border-radius: 100px !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: hsl(258, 100%, 97%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 100%, 31%) !important;
  --bases-table-container-border-radius: 100px !important;
  --bases-table-header-background: hsl(258, 100%, 97%) !important;
  --bases-table-summary-background: hsl(258, 100%, 97%) !important;
  --blockquote-border-color: hsl(258, 100%, 31%) !important;
  --blur-background: color-mix(in srgb, hsl(258, 100%, 97%) 65%, transparent) linear-gradient(hsl(258, 100%, 97%), color-mix(in srgb, hsl(258, 100%, 97%) 65%, transparent)) !important;
  --button-radius: 100px !important;
  --callout-radius: 100px;
  --canvas-background: hsl(258, 100%, 97%) !important;
  --canvas-controls-radius: 100px !important;
  --checkbox-color: hsl(258, 100%, 31%) !important;
  --checkbox-color-hover: hsl(258, 100%, 31%) !important;
  --checkbox-marker-color: hsl(258, 100%, 97%) !important;
  --checkbox-radius: 100px !important;
  --clickable-icon-radius: 100px !important;
  --code-background: hsl(258, 100%, 93%) !important;
  --code-border-color: transparent !important;
  --code-normal: hsl(258, 100%, 31%) !important;
  --code-radius: 100px !important;
  --colorBackgroundPrimary: hsl(258, 100%, 97%) !important;
  --colorBackgroundSecondary: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --colorOnPrimary: white !important;
  --colorPrimary: hsl(258, 100%, 31%) !important;
  --colorPrimaryContainer: hsl(258, 100%, 93%) !important;
  --colorPrimaryContainerVariant: hsl(258, 100%, 85%) !important;
  --colorPrimaryContainerVariantHover: hsl(258, 100%, 91%) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(258, 100%, 31%) !important;
  --dropdown-background: hsl(258, 100%, 90%) !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --embed-border-start: 2px solid hsl(258, 100%, 31%) !important;
  --file-header-background: hsl(258, 100%, 97%) !important;
  --file-header-background-focused: hsl(258, 100%, 97%) !important;
  --flair-background: hsl(258, 100%, 90%) !important;
  --footnote-divider-color: transparent !important;
  --footnote-radius: 100px !important;
  --highlight: hsl(258, 100%, 85%) !important;
  --hr-color: transparent !important;
  --interactive-accent: hsl(258, 100%, 31%) !important;
  --interactive-accent-hover: hsl(258, 100%, 31%) !important;
  --interactive-normal: hsl(258, 100%, 90%) !important;
  --light: hsl(258, 100%, 97%) !important;
  --lightgray: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --link-external-color: hsl(258, 100%, 31%) !important;
  --link-external-color-hover: hsl(258, 100%, 31%) !important;
  --menu-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --modal-background: hsl(258, 100%, 97%) !important;
  --nav-item-background-active: hsl(258, 100%, 85%) !important;
  --nav-item-background-hover: hsl(258, 100%, 91%) !important;
  --nav-item-color: black !important;
  --nav-item-radius: 100px !important;
  --nav-tag-radius: 100px !important;
  --pdf-background: hsl(258, 100%, 97%) !important;
  --pdf-page-background: hsl(258, 100%, 97%) !important;
  --pdf-sidebar-background: hsl(258, 100%, 97%) !important;
  --pill-border-color: transparent !important;
  --prompt-background: hsl(258, 100%, 97%) !important;
  --radius-s: 100px !important;
  --raised-background: color-mix(in srgb, hsl(258, 100%, 97%) 65%, transparent) linear-gradient(hsl(258, 100%, 97%), color-mix(in srgb, hsl(258, 100%, 97%) 65%, transparent)) !important;
  --ribbon-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --ribbon-background-collapsed: hsl(258, 100%, 97%) !important;
  --search-result-background: hsl(258, 100%, 97%) !important;
  --secondary: hsl(258, 100%, 31%) !important;
  --setting-items-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --status-bar-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --status-bar-border-color: transparent !important;
  --suggestion-background: hsl(258, 100%, 97%) !important;
  --tab-background-active: hsl(258, 100%, 85%) !important;
  --tab-container-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 100px !important;
  --tab-switcher-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(
		258,
		88%,
		66%,
		2%
	), transparent) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: transparent !important;
  --table-drag-handle-background-active: hsl(258, 100%, 31%) !important;
  --table-header-border-color: transparent !important;
  --table-selection-border-color: hsl(258, 100%, 31%) !important;
  --tag-background: hsl(258, 100%, 85%) !important;
  --tag-background-hover: hsl(258, 100%, 85%) !important;
  --tag-color: hsl(258, 100%, 31%) !important;
  --tertiary: hsl(258, 100%, 31%) !important;
  --text-highlight-bg: hsl(258, 100%, 85%) !important;
  --text-on-accent-inverted: white !important;
  --textHighlight: hsl(258, 100%, 85%) !important;
  --titlebar-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --titlebar-background-focused: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --titlebar-border-color: transparent !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(201, 179, 255);
  color: rgb(47, 0, 158);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(138, 92, 245, 0.02);
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(244, 240, 255);
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgb(201, 179, 255);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-radius: 100px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(47, 0, 158);
  border-color: rgb(47, 0, 158);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(47, 0, 158);
  outline: rgb(47, 0, 158) none 0px;
  text-decoration-color: rgb(47, 0, 158);
}`,
    tables: `html[saved-theme="light"] body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(47, 0, 158);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(47, 0, 158);
  border-right-color: rgb(47, 0, 158);
  border-top-color: rgb(47, 0, 158);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(47, 0, 158);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  border-left-color: rgb(47, 0, 158);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
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
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(201, 179, 255);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(47, 0, 158);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgb(47, 0, 158);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(47, 0, 158);
  border-right-color: rgb(47, 0, 158);
  border-top-color: rgb(47, 0, 158);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(47, 0, 158);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(201, 179, 255);
  color: rgb(47, 0, 158);
}`,
  },
};
