import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "transient", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #191926 !important;
  --background-modifier-border-focus: #151520 !important;
  --background-primary: transparent !important;
  --background-secondary: transparent !important;
  --background-secondary-alt: #191926 !important;
  --bases-cards-background: transparent !important;
  --bases-cards-shadow: 0 0 0 1px #191926 !important;
  --bases-embed-border-color: #191926 !important;
  --bases-table-border-color: #191926 !important;
  --bases-table-cell-background-active: transparent !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #151520 !important;
  --bases-table-header-background: transparent !important;
  --bases-table-summary-background: transparent !important;
  --blur-background: color-mix(in srgb, #191926 65%, transparent) linear-gradient(#191926, color-mix(in srgb, #191926 65%, transparent)) !important;
  --canvas-background: transparent !important;
  --canvas-dot-pattern: #191926 !important;
  --checkbox-marker-color: transparent !important;
  --code-background: #22223333 !important;
  --code-border-color: #191926 !important;
  --color-base-00: #0c0c11ee !important;
  --color-base-30: #191926 !important;
  --color-base-40: #151520 !important;
  --divider-color: #191926 !important;
  --dropdown-background: #191926 !important;
  --embed-block-shadow-hover: 0 0 0 1px #191926, inset 0 0 0 1px #191926 !important;
  --file-header-background: transparent !important;
  --file-header-background-focused: transparent !important;
  --flair-background: #191926 !important;
  --footnote-divider-color: #191926 !important;
  --hr-color: #191926 !important;
  --interactive-normal: #191926 !important;
  --light: transparent !important;
  --lightgray: transparent !important;
  --menu-background: transparent !important;
  --metadata-border-color: #191926 !important;
  --metadata-divider-color: #191926 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #151520 !important;
  --modal-background: #0c0c11ee !important;
  --modal-border-color: #151520 !important;
  --pdf-background: transparent !important;
  --pdf-page-background: transparent !important;
  --pdf-shadow: 0 0 0 1px #191926 !important;
  --pdf-sidebar-background: transparent !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #191926 !important;
  --pill-border-color: #191926 !important;
  --prompt-background: transparent !important;
  --prompt-border-color: #151520 !important;
  --raised-background: color-mix(in srgb, #191926 65%, transparent) linear-gradient(#191926, color-mix(in srgb, #191926 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --search-result-background: transparent !important;
  --setting-items-border-color: #191926 !important;
  --slider-track-background: #191926 !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: #191926 !important;
  --suggestion-background: transparent !important;
  --tab-background-active: transparent !important;
  --tab-container-background: transparent !important;
  --tab-outline-color: #191926 !important;
  --tab-switcher-background: transparent !important;
  --tab-switcher-menubar-background: linear-gradient(to top, transparent, transparent) !important;
  --table-add-button-border-color: #191926 !important;
  --table-border-color: #191926 !important;
  --table-header-border-color: #191926 !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: #191926 !important;
  --titlebar-border-color: #191926 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
}

html body .bases-table thead th {
  border-color: rgb(25, 25, 38);
}

html body .canvas-sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html body .note-properties {
  border-color: rgb(25, 25, 38);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(25, 25, 38);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(25, 25, 38);
}

html body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
}`,
    tables: `html body td {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body th {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}`,
    code: `html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body pre:has(> code) {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
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
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body .search > .search-container > .search-space {
  background-color: rgba(12, 12, 17, 0.933);
  border-bottom-color: rgb(21, 21, 32);
  border-left-color: rgb(21, 21, 32);
  border-right-color: rgb(21, 21, 32);
  border-top-color: rgb(21, 21, 32);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(21, 21, 32);
  border-left-color: rgb(21, 21, 32);
  border-right-color: rgb(21, 21, 32);
  border-top-color: rgb(21, 21, 32);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
}

html body hr {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    footer: `html body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}`,
    misc: `html body .metadata {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html body kbd {
  background-color: rgba(34, 34, 51, 0.2);
}`,
  },
  light: {},
};
