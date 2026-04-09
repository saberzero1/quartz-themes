import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "oldsidian-purple",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-modifier-error: #5C0000 !important;
  --background-modifier-error-hover: #990000 !important;
  --background-primary: #262626ff !important;
  --background-primary-alt: #161616 !important;
  --bases-cards-background: #161616 !important;
  --bases-cards-cover-background: #161616 !important;
  --bases-table-cell-background-active: #262626ff !important;
  --bases-table-cell-background-disabled: #161616 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #6C41D8 !important;
  --bases-table-group-background: #161616 !important;
  --bases-table-header-background: #262626ff !important;
  --bases-table-summary-background: #262626ff !important;
  --blockquote-border-color: #6C41D8 !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 1;
  --callout-content-padding: 8px 8px 8px 12px;
  --callout-padding: 0;
  --callout-radius: 5px;
  --callout-title-padding: 8px 8px 8px 12px;
  --canvas-background: #262626ff !important;
  --checkbox-color: #6C41D8 !important;
  --checkbox-marker-color: #262626ff !important;
  --code-background: #161616 !important;
  --code-normal: #FB463B !important;
  --collapse-icon-color-collapsed: #814CFF !important;
  --divider-color-hover: #6C41D8 !important;
  --embed-border-start: 2px solid #6C41D8 !important;
  --file-header-background: #262626ff !important;
  --file-header-background-focused: #262626ff !important;
  --graph-node-focused: #814CFF !important;
  --highlight: #6C41D8 !important;
  --icon-color-active: #814CFF !important;
  --interactive-accent: #6C41D8 !important;
  --light: #262626ff !important;
  --link-color: #814CFF !important;
  --link-external-color: #814CFF !important;
  --link-unresolved-color: #814CFF !important;
  --link-unresolved-decoration-style: #814CFF !important;
  --list-marker-color-collapsed: #814CFF !important;
  --modal-background: #262626ff !important;
  --nav-item-background-active: #6C41D8 !important;
  --nav-item-color-highlighted: #814CFF !important;
  --pdf-background: #262626ff !important;
  --pdf-page-background: #262626ff !important;
  --pdf-sidebar-background: #262626ff !important;
  --pill-color-remove-hover: #814CFF !important;
  --prompt-background: #262626ff !important;
  --ribbon-background-collapsed: #262626ff !important;
  --search-result-background: #262626ff !important;
  --secondary: #814CFF !important;
  --setting-items-background: #161616 !important;
  --suggestion-background: #262626ff !important;
  --tab-background-active: #262626ff !important;
  --tab-min-width: 100px !important;
  --tab-text-color-focused-highlighted: #814CFF !important;
  --table-drag-handle-background-active: #6C41D8 !important;
  --table-selection-border-color: #6C41D8 !important;
  --tag-color: #814CFF !important;
  --tag-color-hover: #814CFF !important;
  --tertiary: #814CFF !important;
  --text-accent: #814CFF !important;
  --text-highlight-bg: #6C41D8 !important;
  --textHighlight: #6C41D8 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(38, 38, 38);
}

html body .note-properties-tags {
  color: rgb(129, 76, 255);
}

html body div#quartz-root {
  background-color: rgb(38, 38, 38);
}`,
    typography: `html body .text-highlight {
  background-color: rgb(108, 65, 216);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(108, 65, 216);
  border-color: rgb(108, 65, 216);
}`,
    links: `html body a.external, html footer a {
  color: rgb(129, 76, 255);
  outline: rgb(129, 76, 255) none 0px;
  text-decoration-color: rgb(129, 76, 255);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(129, 76, 255);
  outline: rgb(129, 76, 255) none 0px;
  text-decoration-color: rgb(129, 76, 255);
}

html body a.internal.broken {
  color: rgb(129, 76, 255);
  outline: rgb(129, 76, 255) none 0px;
  text-decoration: underline rgb(129, 76, 255);
  text-decoration-color: rgb(129, 76, 255);
}`,
    tables: `html body .spacer {
  background-color: rgb(22, 22, 22);
}`,
    code: `html body code {
  border-bottom-color: rgb(251, 70, 59);
  border-left-color: rgb(251, 70, 59);
  border-right-color: rgb(251, 70, 59);
  border-top-color: rgb(251, 70, 59);
  color: rgb(251, 70, 59);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 22, 22);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 22, 22);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(22, 22, 22);
}

html body pre:has(> code) {
  background-color: rgb(22, 22, 22);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(22, 22, 22);
}

html body .transclude {
  border-left-color: rgb(108, 65, 216);
}`,
    callouts: `html body .callout .callout-title {
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(220, 221, 222);
}

html body .callout > .callout-content {
  background-color: rgb(22, 22, 22);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 4px;
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 4px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 4px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-color: rgb(168, 130, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(168, 130, 255);
  border-left-width: 4px;
  border-right-color: rgb(168, 130, 255);
  border-top-color: rgb(168, 130, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 4px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 4px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 4px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 4px;
  border-right-color: rgb(233, 151, 63);
  border-top-color: rgb(233, 151, 63);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 4px;
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-color: rgb(68, 207, 110);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(68, 207, 110);
  border-left-width: 4px;
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 4px;
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 4px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 4px;
  border-right-color: rgb(233, 151, 63);
  border-top-color: rgb(233, 151, 63);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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
    search: `html body .search > .search-container > .search-space {
  background-color: rgb(38, 38, 38);
}

html body a.internal.tag-link::before {
  color: rgb(129, 76, 255);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 4px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body ::-webkit-scrollbar {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html body ::-webkit-scrollbar-track {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}`,
    misc: `html body kbd {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(251, 70, 59);
  border-left-color: rgb(251, 70, 59);
  border-right-color: rgb(251, 70, 59);
  border-top-color: rgb(251, 70, 59);
  color: rgb(251, 70, 59);
}

html body ul.tags > li {
  color: rgb(129, 76, 255);
}`,
  },
  light: {},
};
