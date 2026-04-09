import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "mistymauve",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["arvo", "permanent-marker"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: #d8d9cf !important;
  --accent-l: 55% !important;
  --accent-s: 91% !important;
  --arvo-bold: "Arvo", serif !important;
  --background-modifier-active-hover: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --bases-table-border-color: #ffffff !important;
  --bases-table-cell-background-selected: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(#d8d9cf, 91%, 55%) !important;
  --blockquote-border-color: hsl(#d8d9cf, 91%, 55%) !important;
  --callout-border-opacity: 0.7;
  --callout-radius: 20px;
  --checkbox-color: hsl(#d8d9cf, 91%, 55%) !important;
  --checkbox-color-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --collapse-icon-color-collapsed: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --color-accent: hsl(#d8d9cf, 91%, 55%) !important;
  --color-accent-1: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --color-accent-2: hsl(calc(#d8d9cf - 5), calc(91% * 1.05), calc(55% * 1.29)) !important;
  --color-accent-hsl: #d8d9cf, 91%, 55% !important;
  --color-bright-gray: #ededed !important;
  --color-light-carmine-pink: #e26868 !important;
  --color-timberwolf: #d8d9cf !important;
  --color-tulip: #ff8787 !important;
  --divider-color-hover: hsl(#d8d9cf, 91%, 55%) !important;
  --embed-border-start: 2px solid hsl(#d8d9cf, 91%, 55%) !important;
  --graph-node: #e26868 !important;
  --graph-node-attachment: rgb(75, 75, 75) !important;
  --graph-node-focused: #ff8787 !important;
  --graph-node-unresolved: #d8d9cf !important;
  --graph-text: #e26868 !important;
  --h1-color: #ededed !important;
  --h1-font: "Arvo", serif !important;
  --h1-size: 2em !important;
  --h1-weight: 400 !important;
  --h2-color: #ededed !important;
  --h2-font: "Arvo", serif !important;
  --h2-size: 1.7em !important;
  --h2-weight: 400 !important;
  --h3-color: #ededed !important;
  --h3-font: "Arvo", serif !important;
  --h3-size: 1.5em !important;
  --h3-weight: 400 !important;
  --h4-color: #ededed !important;
  --h4-font: "Arvo", serif !important;
  --h4-size: 1.3em !important;
  --h4-weight: 400 !important;
  --h5-color: #ededed !important;
  --h5-font: "Arvo", serif !important;
  --h5-size: 1.1em !important;
  --h5-weight: 400 !important;
  --h6-color: #ededed !important;
  --h6-font: "Arvo", serif !important;
  --h6-size: 0.8em !important;
  --h6-weight: 400 !important;
  --highlight: #e26868 !important;
  --icon-color-active: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --inline-title-color: #e26868 !important;
  --inline-title-font: "Permanent Marker", cursive !important;
  --inline-title-size: 2.4em !important;
  --inline-title-weight: 400 !important;
  --interactive-accent: hsl(#d8d9cf, 91%, 55%) !important;
  --interactive-accent-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --interactive-accent-hsl: #d8d9cf, 91%, 55% !important;
  --link-color: #ff8787 !important;
  --link-color-hover: #e26868 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #ff8787 !important;
  --link-external-color-hover: #e26868 !important;
  --link-unresolved-color: color.mix(
    #d8d9cf,
    #e26868
  ) !important;
  --link-unresolved-decoration-color: color.mix(
    #d8d9cf,
    #e26868
  ) !important;
  --link-unresolved-opacity: 0.6 !important;
  --list-marker-color-collapsed: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --nav-indentation-guide-width: 0em !important;
  --nav-item-background-active: #d8d9cf !important;
  --nav-item-background-selected: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --nav-item-color-active: #e26868 !important;
  --nav-item-color-highlighted: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --nav-item-color-hover: #ff8787 !important;
  --nav-item-padding: 0.25em !important;
  --nav-item-parent-padding: 0.25em !important;
  --permanent-marker: "Permanent Marker", cursive !important;
  --pill-color-remove-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --scrollbar-active-thumb-bg: #e26868 !important;
  --scrollbar-bg: #d8d9cf !important;
  --scrollbar-thumb-bg: #ff8787 !important;
  --search-icon-color: #ff8787 !important;
  --secondary: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --tab-outline-color: #e26868 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(#d8d9cf, 91%, 55%) !important;
  --tab-text-color-focused-active-current: #e26868 !important;
  --tab-text-color-focused-highlighted: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --table-border-color: #ffffff !important;
  --table-drag-handle-background-active: hsl(#d8d9cf, 91%, 55%) !important;
  --table-drag-handle-color-active: #ff8787 !important;
  --table-header-border-color: #ffffff !important;
  --table-header-color: #e26868 !important;
  --table-selection: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --table-selection-border-color: hsl(#d8d9cf, 91%, 55%) !important;
  --tag-background: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --tag-background-hover: hsla(#d8d9cf, 91%, 55%, 0.2) !important;
  --tag-border-color: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --tag-border-color-hover: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --tag-color: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --tag-color-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --tertiary: hsl(calc(#d8d9cf - 5), calc(91% * 1.05), calc(55% * 1.29)) !important;
  --text-accent: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --text-accent-hover: hsl(calc(#d8d9cf - 5), calc(91% * 1.05), calc(55% * 1.29)) !important;
  --text-highlight-bg: #e26868 !important;
  --text-on-accent: #ff8787 !important;
  --text-on-accent-inverted: #ff8787 !important;
  --text-selection: #e26868 !important;
  --textHighlight: #e26868 !important;
  --vault-name-color: #e26868 !important;
  --vault-name-color-hover: #ff8787 !important;
  --vault-name-font-size: 1em !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(255, 255, 255);
  color: rgb(226, 104, 104);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(226, 104, 104);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration-color: rgb(255, 135, 135);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration-color: rgb(255, 135, 135);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration-color: rgb(218, 218, 218);
}`,
    tables: `html[saved-theme="dark"] body td {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(226, 104, 104);
}`,
    images: `html[saved-theme="dark"] body img {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}`,
    embeds: `html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgba(83, 223, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-right-color: rgba(83, 223, 221, 0.7);
  border-top-color: rgba(83, 223, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgba(251, 70, 76, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-right-color: rgba(251, 70, 76, 0.7);
  border-top-color: rgba(251, 70, 76, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgba(251, 70, 76, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-right-color: rgba(251, 70, 76, 0.7);
  border-top-color: rgba(251, 70, 76, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-color: rgba(168, 130, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(168, 130, 255, 0.7);
  border-right-color: rgba(168, 130, 255, 0.7);
  border-top-color: rgba(168, 130, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgba(251, 70, 76, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-right-color: rgba(251, 70, 76, 0.7);
  border-top-color: rgba(251, 70, 76, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-color: rgba(233, 151, 63, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-right-color: rgba(233, 151, 63, 0.7);
  border-top-color: rgba(233, 151, 63, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgba(158, 158, 158, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-right-color: rgba(158, 158, 158, 0.7);
  border-top-color: rgba(158, 158, 158, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-color: rgba(68, 207, 110, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(68, 207, 110, 0.7);
  border-right-color: rgba(68, 207, 110, 0.7);
  border-top-color: rgba(68, 207, 110, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgba(83, 223, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-right-color: rgba(83, 223, 221, 0.7);
  border-top-color: rgba(83, 223, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-color: rgba(233, 151, 63, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-right-color: rgba(233, 151, 63, 0.7);
  border-top-color: rgba(233, 151, 63, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
    search: `html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body h1 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(226, 104, 104);
  font-family: "Permanent Marker", cursive;
}

html[saved-theme="dark"] body h3 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-width: 0px;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 135, 135);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(255, 135, 135);
  border-right-color: rgb(255, 135, 135);
  border-top-color: rgb(255, 135, 135);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  color: rgb(255, 135, 135);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(255, 135, 135);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(255, 135, 135);
  border-right-color: rgb(255, 135, 135);
  border-top-color: rgb(255, 135, 135);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  color: rgb(255, 135, 135);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(255, 135, 135);
  stroke: rgb(255, 135, 135);
}`,
    misc: `html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: #d8d9cf !important;
  --accent-l: 55% !important;
  --accent-s: 91% !important;
  --arvo-bold: "Arvo", serif !important;
  --background-modifier-active-hover: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --background-primary: #d8d9cf !important;
  --background-secondary: #ededed !important;
  --bases-cards-background: #d8d9cf !important;
  --bases-table-border-color: #000000 !important;
  --bases-table-cell-background-active: #d8d9cf !important;
  --bases-table-cell-background-selected: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --bases-table-header-background: #d8d9cf !important;
  --bases-table-summary-background: #d8d9cf !important;
  --blockquote-border-color: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --blur-background: color-mix(in srgb, #d8d9cf 65%, transparent) linear-gradient(#d8d9cf, color-mix(in srgb, #d8d9cf 65%, transparent)) !important;
  --callout-border-opacity: 0.7;
  --callout-radius: 20px;
  --canvas-background: #d8d9cf !important;
  --checkbox-color: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --checkbox-color-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --checkbox-marker-color: #d8d9cf !important;
  --collapse-icon-color-collapsed: hsl(#d8d9cf, 91%, 55%) !important;
  --color-accent: hsl(#d8d9cf, 91%, 55%) !important;
  --color-accent-1: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --color-accent-2: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --color-accent-hsl: #d8d9cf, 91%, 55% !important;
  --color-bright-gray: #ededed !important;
  --color-light-carmine-pink: #e26868 !important;
  --color-timberwolf: #d8d9cf !important;
  --color-tulip: #ff8787 !important;
  --divider-color-hover: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --embed-border-start: 2px solid hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --file-header-background: #d8d9cf !important;
  --file-header-background-focused: #d8d9cf !important;
  --graph-node: #e26868 !important;
  --graph-node-attachment: #ededed !important;
  --graph-node-focused: #ff8787 !important;
  --graph-node-unresolved: gray !important;
  --graph-text: #e26868 !important;
  --h1-color: #ff8787 !important;
  --h1-font: "Arvo", serif !important;
  --h1-size: 2em !important;
  --h1-weight: 400 !important;
  --h2-color: #ff8787 !important;
  --h2-font: "Arvo", serif !important;
  --h2-size: 1.7em !important;
  --h2-weight: 400 !important;
  --h3-color: #ff8787 !important;
  --h3-font: "Arvo", serif !important;
  --h3-size: 1.5em !important;
  --h3-weight: 400 !important;
  --h4-color: #ff8787 !important;
  --h4-font: "Arvo", serif !important;
  --h4-size: 1.3em !important;
  --h4-weight: 400 !important;
  --h5-color: #ff8787 !important;
  --h5-font: "Arvo", serif !important;
  --h5-size: 1.1em !important;
  --h5-weight: 400 !important;
  --h6-color: #ff8787 !important;
  --h6-font: "Arvo", serif !important;
  --h6-size: 0.8em !important;
  --h6-weight: 400 !important;
  --highlight: #ff8787 !important;
  --icon-color-active: hsl(#d8d9cf, 91%, 55%) !important;
  --inline-title-color: #e26868 !important;
  --inline-title-font: "Permanent Marker", cursive !important;
  --inline-title-size: 2.4em !important;
  --inline-title-weight: 400 !important;
  --interactive-accent: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --interactive-accent-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --interactive-accent-hsl: #d8d9cf, 91%, 55% !important;
  --light: #d8d9cf !important;
  --lightgray: #ededed !important;
  --link-color: #ff8787 !important;
  --link-color-hover: #e26868 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #ff8787 !important;
  --link-external-color-hover: #e26868 !important;
  --link-unresolved-color: color.mix(
    #d8d9cf,
    #e26868
  ) !important;
  --link-unresolved-decoration-color: color.mix(
    #d8d9cf,
    #e26868
  ) !important;
  --link-unresolved-opacity: 0.6 !important;
  --list-marker-color-collapsed: hsl(#d8d9cf, 91%, 55%) !important;
  --menu-background: #ededed !important;
  --modal-background: #d8d9cf !important;
  --nav-indentation-guide-width: 0em !important;
  --nav-item-background-active: #d8d9cf !important;
  --nav-item-background-selected: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --nav-item-color-active: #e26868 !important;
  --nav-item-color-highlighted: hsl(#d8d9cf, 91%, 55%) !important;
  --nav-item-color-hover: #ff8787 !important;
  --nav-item-padding: 0.25em !important;
  --nav-item-parent-padding: 0.25em !important;
  --pdf-background: #d8d9cf !important;
  --pdf-page-background: #d8d9cf !important;
  --pdf-sidebar-background: #d8d9cf !important;
  --permanent-marker: "Permanent Marker", cursive !important;
  --pill-color-remove-hover: hsl(#d8d9cf, 91%, 55%) !important;
  --prompt-background: #d8d9cf !important;
  --raised-background: color-mix(in srgb, #d8d9cf 65%, transparent) linear-gradient(#d8d9cf, color-mix(in srgb, #d8d9cf 65%, transparent)) !important;
  --ribbon-background: #ededed !important;
  --ribbon-background-collapsed: #d8d9cf !important;
  --scrollbar-active-thumb-bg: #e26868 !important;
  --scrollbar-bg: #d8d9cf !important;
  --scrollbar-thumb-bg: #ff8787 !important;
  --search-icon-color: #ff8787 !important;
  --search-result-background: #d8d9cf !important;
  --secondary: hsl(#d8d9cf, 91%, 55%) !important;
  --status-bar-background: #ededed !important;
  --suggestion-background: #d8d9cf !important;
  --tab-background-active: #d8d9cf !important;
  --tab-container-background: #ededed !important;
  --tab-outline-color: #e26868 !important;
  --tab-switcher-background: #ededed !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ededed, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(#d8d9cf, 91%, 55%) !important;
  --tab-text-color-focused-active-current: #e26868 !important;
  --tab-text-color-focused-highlighted: hsl(#d8d9cf, 91%, 55%) !important;
  --table-border-color: #000000 !important;
  --table-drag-handle-background-active: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --table-drag-handle-color-active: #ff8787 !important;
  --table-header-border-color: #000000 !important;
  --table-header-color: #e26868 !important;
  --table-selection: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --table-selection-border-color: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --tag-background: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --tag-background-hover: hsla(#d8d9cf, 91%, 55%, 0.2) !important;
  --tag-border-color: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --tag-border-color-hover: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --tag-color: hsl(#d8d9cf, 91%, 55%) !important;
  --tag-color-hover: hsl(#d8d9cf, 91%, 55%) !important;
  --tertiary: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --text-accent: hsl(#d8d9cf, 91%, 55%) !important;
  --text-accent-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --text-highlight-bg: #ff8787 !important;
  --text-on-accent: #ff8787 !important;
  --text-on-accent-inverted: #ff8787 !important;
  --text-selection: #ff8787 !important;
  --textHighlight: #ff8787 !important;
  --titlebar-background: #ededed !important;
  --vault-name-color: #e26868 !important;
  --vault-name-color-hover: #ff8787 !important;
  --vault-name-font-size: 1em !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(0, 0, 0);
  color: rgb(226, 104, 104);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(216, 217, 207);
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgb(255, 135, 135);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration-color: rgb(255, 135, 135);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration-color: rgb(255, 135, 135);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(34, 34, 34);
  outline: rgb(34, 34, 34) none 0px;
  text-decoration-color: rgb(34, 34, 34);
}`,
    tables: `html[saved-theme="light"] body td {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(226, 104, 104);
}`,
    images: `html[saved-theme="light"] body img {
  border-bottom-color: rgb(255, 135, 135);
  border-left-color: rgb(255, 135, 135);
  border-right-color: rgb(255, 135, 135);
  border-top-color: rgb(255, 135, 135);
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-color: rgba(0, 191, 188, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-right-color: rgba(0, 191, 188, 0.7);
  border-top-color: rgba(0, 191, 188, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-color: rgba(233, 49, 71, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-right-color: rgba(233, 49, 71, 0.7);
  border-top-color: rgba(233, 49, 71, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-color: rgba(233, 49, 71, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-right-color: rgba(233, 49, 71, 0.7);
  border-top-color: rgba(233, 49, 71, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-color: rgba(120, 82, 238, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(120, 82, 238, 0.7);
  border-right-color: rgba(120, 82, 238, 0.7);
  border-top-color: rgba(120, 82, 238, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-color: rgba(233, 49, 71, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-right-color: rgba(233, 49, 71, 0.7);
  border-top-color: rgba(233, 49, 71, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-color: rgba(236, 117, 0, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-right-color: rgba(236, 117, 0, 0.7);
  border-top-color: rgba(236, 117, 0, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgba(158, 158, 158, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-right-color: rgba(158, 158, 158, 0.7);
  border-top-color: rgba(158, 158, 158, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-color: rgba(8, 185, 78, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 185, 78, 0.7);
  border-right-color: rgba(8, 185, 78, 0.7);
  border-top-color: rgba(8, 185, 78, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-color: rgba(0, 191, 188, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-right-color: rgba(0, 191, 188, 0.7);
  border-top-color: rgba(0, 191, 188, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-color: rgba(236, 117, 0, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-right-color: rgba(236, 117, 0, 0.7);
  border-top-color: rgba(236, 117, 0, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
    search: `html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body h1 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(226, 104, 104);
  font-family: "Permanent Marker", cursive;
}

html[saved-theme="light"] body h3 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}`,
    explorer: `html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-width: 0px;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 135, 135);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(255, 135, 135);
  border-right-color: rgb(255, 135, 135);
  border-top-color: rgb(255, 135, 135);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  color: rgb(255, 135, 135);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(237, 237, 237);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(255, 135, 135);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(255, 135, 135);
  border-right-color: rgb(255, 135, 135);
  border-top-color: rgb(255, 135, 135);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  color: rgb(255, 135, 135);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(255, 135, 135);
  stroke: rgb(255, 135, 135);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}`,
  },
};
