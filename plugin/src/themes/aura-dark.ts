import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "aura-dark", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #61ffca !important;
  --background-primary: #15141b !important;
  --background-secondary: #110f18 !important;
  --background-secondary-alt: #61ffca !important;
  --bases-cards-background: #15141b !important;
  --bases-cards-shadow: 0 0 0 1px #61ffca !important;
  --bases-embed-border-color: #61ffca !important;
  --bases-table-border-color: #61ffca !important;
  --bases-table-cell-background-active: #15141b !important;
  --bases-table-header-background: #15141b !important;
  --bases-table-summary-background: #15141b !important;
  --blur-background: color-mix(in srgb, #61ffca 65%, transparent) linear-gradient(#61ffca, color-mix(in srgb, #61ffca 65%, transparent)) !important;
  --canvas-background: #15141b !important;
  --canvas-dot-pattern: #61ffca !important;
  --checkbox-marker-color: #15141b !important;
  --code-background: #110f18 !important;
  --code-border-color: #61ffca !important;
  --color-base-30: #61ffca !important;
  --divider-color: #61ffca !important;
  --dropdown-background: #61ffca !important;
  --embed-block-shadow-hover: 0 0 0 1px #61ffca, inset 0 0 0 1px #61ffca !important;
  --file-header-background: #15141b !important;
  --file-header-background-focused: #15141b !important;
  --flair-background: #61ffca !important;
  --footnote-divider-color: #61ffca !important;
  --hr-color: #61ffca !important;
  --indentation-guide-color: #edecee !important;
  --interactive-normal: #61ffca !important;
  --light: #15141b !important;
  --lightgray: #110f18 !important;
  --menu-background: #110f18 !important;
  --metadata-border-color: #61ffca !important;
  --metadata-divider-color: #61ffca !important;
  --modal-background: #15141b !important;
  --nav-indentation-guide-color: #edecee !important;
  --pdf-background: #15141b !important;
  --pdf-page-background: #15141b !important;
  --pdf-shadow: 0 0 0 1px #61ffca !important;
  --pdf-sidebar-background: #15141b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #61ffca !important;
  --pill-border-color: #61ffca !important;
  --prompt-background: #15141b !important;
  --raised-background: color-mix(in srgb, #61ffca 65%, transparent) linear-gradient(#61ffca, color-mix(in srgb, #61ffca 65%, transparent)) !important;
  --ribbon-background: #15141b !important;
  --ribbon-background-collapsed: #15141b !important;
  --search-result-background: #15141b !important;
  --setting-items-border-color: #61ffca !important;
  --slider-track-background: #61ffca !important;
  --status-bar-background: #110f18 !important;
  --status-bar-border-color: #61ffca !important;
  --suggestion-background: #15141b !important;
  --tab-background-active: #15141b !important;
  --tab-container-background: #110f18 !important;
  --tab-outline-color: #61ffca !important;
  --tab-switcher-background: #110f18 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #110f18, transparent) !important;
  --table-add-button-border-color: #61ffca !important;
  --table-border-color: #61ffca !important;
  --table-header-border-color: #61ffca !important;
  --titlebar-background: #110f18 !important;
  --titlebar-background-focused: #110f18 !important;
  --titlebar-border-color: #61ffca !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 15, 24);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(21, 20, 27);
}

html body .bases-table thead th {
  border-color: rgb(97, 255, 202);
}

html body .canvas-sidebar {
  background-color: rgb(17, 15, 24);
}

html body .note-properties {
  border-color: rgb(97, 255, 202);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 15, 24);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(97, 255, 202);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 15, 24);
  border-left-color: rgb(97, 255, 202);
}

html body div#quartz-root {
  background-color: rgb(21, 20, 27);
}`,
    tables: `html body td {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body th {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}`,
    code: `html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body pre:has(> code) {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
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
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body .search > .search-container > .search-space {
  background-color: rgb(21, 20, 27);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 15, 24);
}

html body hr {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

html body ::-webkit-scrollbar-track {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}`,
    explorer: `html body .explorer .folder-outer > ul {
  border-left-color: rgb(237, 236, 238);
}`,
    footer: `html body footer {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}`,
    misc: `html body .metadata {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body .navigation-progress {
  background-color: rgb(17, 15, 24);
}

html body kbd {
  background-color: rgb(17, 15, 24);
}`,
  },
  light: {},
};
