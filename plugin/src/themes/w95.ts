import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "w95", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --accent-1: #FFFFFF !important;
  --accent-1-muted: #ff79c6 !important;
  --accent-2: #00FFFF !important;
  --accent-2-muted: #8be9fd !important;
  --accent-3: #00FF00 !important;
  --accent-3-muted: #50fa7b !important;
  --accent-4: #FFFF00 !important;
  --accent-4-muted: #ffb86c !important;
  --accent-5: #FF0000 !important;
  --accent-5-muted: #ff5555 !important;
  --accent-6: #00007b !important;
  --accent-6-muted: #bd93f9 !important;
  --accent-h: 240 !important;
  --accent-l: 24% !important;
  --accent-s: 100% !important;
  --background-editor-primary: #ffffff !important;
  --background-modifier-active-hover: hsla(240, 100%, 24%, 0.1) !important;
  --background-modifier-border: #707070 !important;
  --background-modifier-border-focus: #bdbebd !important;
  --background-modifier-border-hover: #bdbebd !important;
  --background-primary: #bdbebd !important;
  --background-secondary: #bdbebd !important;
  --bases-cards-background: #bdbebd !important;
  --bases-cards-shadow: 0 0 0 1px #707070 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #bdbebd !important;
  --bases-embed-border-color: #707070 !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-table-border-color: #707070 !important;
  --bases-table-cell-background-active: #bdbebd !important;
  --bases-table-cell-background-selected: hsla(240, 100%, 24%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #bdbebd !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00007b !important;
  --bases-table-header-background: #bdbebd !important;
  --bases-table-summary-background: #bdbebd !important;
  --blockquote-border-color: #00007b !important;
  --blur-background: color-mix(in srgb, #bdbebd 65%, transparent) linear-gradient(#bdbebd, color-mix(in srgb, #bdbebd 65%, transparent)) !important;
  --bold-color: #000000 !important;
  --border-highlight: #FFFFFF !important;
  --border-shadow: #808080 !important;
  --canvas-background: #bdbebd !important;
  --canvas-card-label-color: #4f5057 !important;
  --checkbox-border-color: #4f5057 !important;
  --checkbox-color: #00007b !important;
  --checkbox-color-hover: #bdbebd !important;
  --checkbox-marker-color: #bdbebd !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #FFFFFF !important;
  --code-border-color: #707070 !important;
  --code-comment: #4f5057 !important;
  --collapse-icon-color: #4f5057 !important;
  --collapse-icon-color-collapsed: hsl(240, 100%, 24%) !important;
  --color-accent: hsl(240, 100%, 24%) !important;
  --color-accent-1: hsl(239, 101%, 25.8%) !important;
  --color-accent-2: hsl(237, 102%, 27.6%) !important;
  --color-accent-hsl: 240, 100%, 24% !important;
  --color-base-55: #808080 !important;
  --divider-color: #707070 !important;
  --divider-color-hover: #00007b !important;
  --dropdown-background: #FFFFFF !important;
  --dropdown-background-hover: #FFFFFF !important;
  --embed-block-shadow-hover: 0 0 0 1px #707070, inset 0 0 0 1px #707070 !important;
  --embed-border-start: 2px solid #00007b !important;
  --file-header-background: #bdbebd !important;
  --file-header-background-focused: #bdbebd !important;
  --file-header-font-size: 12px !important;
  --flair-background: #FFFFFF !important;
  --font-ui-medium: 14px !important;
  --font-ui-small: 12px !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: #707070 !important;
  --footnote-id-color-no-occurrences: #4f5057 !important;
  --graph-line: #bdbebd !important;
  --graph-node-focused: hsl(240, 100%, 24%) !important;
  --graph-node-unresolved: #4f5057 !important;
  --gray: #4f5057 !important;
  --h1-color: #34548a !important;
  --h1-size: 1.4rem !important;
  --h2-color: #34548a !important;
  --h2-size: 1.3rem !important;
  --h3-color: #34548a !important;
  --h3-size: 1.2rem !important;
  --h4-color: #34548a !important;
  --h4-size: 1.1rem !important;
  --h5-color: #34548a !important;
  --h5-size: 1rem !important;
  --h6-color: #34548a !important;
  --h6-size: 0.9rem !important;
  --header-color: #34548a !important;
  --header-size: 1.4rem !important;
  --heading-formatting: #4f5057 !important;
  --highlight: #485e3066 !important;
  --hr-color: #707070 !important;
  --icon-color-active: hsl(240, 100%, 24%) !important;
  --indentation-guide-color: rgba(0, 0, 0, 0.4) !important;
  --inline-title-color: #34548a !important;
  --inline-title-size: 1.4rem !important;
  --input-date-separator: #4f5057 !important;
  --input-placeholder-color: #4f5057 !important;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),
  0 2px 3px 0 rgba(0, 0, 0, 0.05),
  0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
  0 1px 2px 0 rgba(0, 0, 0, 0.04),
  0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
  0 2px 3px 0 rgba(0, 0, 0, 0.1),
  0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
  0 1px 2px 0 rgba(0, 0, 0, 0.04),
  0 0 0 0 transparent !important;
  --interactive-accent: #00007b !important;
  --interactive-accent-hover: #bdbebd !important;
  --interactive-accent-hsl: 240, 100%, 24% !important;
  --interactive-hover: #FFFFFF !important;
  --interactive-normal: #FFFFFF !important;
  --italic-color: #343b58 !important;
  --light: #bdbebd !important;
  --lightgray: #bdbebd !important;
  --link-color: hsl(240, 100%, 24%) !important;
  --link-color-hover: hsl(237, 102%, 27.6%) !important;
  --link-external-color: hsl(240, 100%, 24%) !important;
  --link-external-color-hover: hsl(237, 102%, 27.6%) !important;
  --link-unresolved-color: hsl(240, 100%, 24%) !important;
  --link-unresolved-decoration-color: hsla(240, 100%, 24%, 0.3) !important;
  --list-marker-color: #4f5057 !important;
  --list-marker-color-collapsed: hsl(240, 100%, 24%) !important;
  --menu-background: #bdbebd !important;
  --menu-border-color: #bdbebd !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
  0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
  0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-border-color: #707070 !important;
  --metadata-divider-color: #707070 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #bdbebd !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #bdbebd !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 12px !important;
  --modal-background: #bdbebd !important;
  --nav-collapse-icon-color: #4f5057 !important;
  --nav-collapse-icon-color-collapsed: #4f5057 !important;
  --nav-files-background: #ffffff !important;
  --nav-heading-color-collapsed: #4f5057 !important;
  --nav-indentation-guide-color: rgba(0, 0, 0, 0.4) !important;
  --nav-item-background-active: #00007b !important;
  --nav-item-background-selected: hsla(240, 100%, 24%, 0.15) !important;
  --nav-item-color-active: #FFFFFF !important;
  --nav-item-color-highlighted: hsl(240, 100%, 24%) !important;
  --nav-item-size: 12px !important;
  --nav-tag-color: #4f5057 !important;
  --pdf-background: #bdbebd !important;
  --pdf-page-background: #bdbebd !important;
  --pdf-sidebar-background: #bdbebd !important;
  --pill-border-color: #707070 !important;
  --pill-border-color-hover: #bdbebd !important;
  --pill-color-remove: #4f5057 !important;
  --pill-color-remove-hover: hsl(240, 100%, 24%) !important;
  --prompt-background: #bdbebd !important;
  --raised-background: color-mix(in srgb, #bdbebd 65%, transparent) linear-gradient(#bdbebd, color-mix(in srgb, #bdbebd 65%, transparent)) !important;
  --ribbon-background: #bdbebd !important;
  --ribbon-background-collapsed: #bdbebd !important;
  --scrollbar-thumb: #f6f6f6 !important;
  --scrollbar-track: #e3e3e3 !important;
  --search-result-background: #bdbebd !important;
  --secondary: hsl(240, 100%, 24%) !important;
  --setting-group-heading-size: 14px !important;
  --setting-items-border-color: #707070 !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
  0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
  0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
  0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
  0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --slider-thumb-border-color: #bdbebd !important;
  --slider-track-background: #707070 !important;
  --status-bar-background: #bdbebd !important;
  --status-bar-border-color: #707070 !important;
  --status-bar-font-size: 11px !important;
  --suggestion-background: #bdbebd !important;
  --tab-background-active: #bdbebd !important;
  --tab-container-background: #bdbebd !important;
  --tab-curve: 1px !important;
  --tab-divider-color: #bdbebd !important;
  --tab-font-size: 12px !important;
  --tab-outline-color: #707070 !important;
  --tab-radius-active: 1px !important;
  --tab-stacked-font-size: 12px !important;
  --tab-switcher-background: #bdbebd !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #bdbebd, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(240, 100%, 24%) !important;
  --tab-text-color: #4f5057 !important;
  --tab-text-color-focused-highlighted: hsl(240, 100%, 24%) !important;
  --table-add-button-border-color: #707070 !important;
  --table-border-color: #707070 !important;
  --table-drag-handle-background-active: #00007b !important;
  --table-drag-handle-color: #4f5057 !important;
  --table-header-border-color: #707070 !important;
  --table-selection: hsla(240, 100%, 24%, 0.1) !important;
  --table-selection-border-color: #00007b !important;
  --tag-background: hsla(240, 100%, 24%, 0.1) !important;
  --tag-background-hover: hsla(240, 100%, 24%, 0.2) !important;
  --tag-border-color: hsla(240, 100%, 24%, 0.15) !important;
  --tag-border-color-hover: hsla(240, 100%, 24%, 0.15) !important;
  --tag-color: hsl(240, 100%, 24%) !important;
  --tag-color-hover: hsl(240, 100%, 24%) !important;
  --tertiary: hsl(237, 102%, 27.6%) !important;
  --text-accent: hsl(240, 100%, 24%) !important;
  --text-accent-hover: hsl(237, 102%, 27.6%) !important;
  --text-faint: #4f5057 !important;
  --text-highlight-bg: #485e3066 !important;
  --text-selection: hsla(240, 100%, 24%, 0.2) !important;
  --textHighlight: #485e3066 !important;
  --titlebar-background: #bdbebd !important;
  --titlebar-background-focused: #bdbebd !important;
  --titlebar-border-color: #707070 !important;
  --vault-profile-font-size: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(189, 190, 189);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(189, 190, 189);
}

html body .bases-table thead th {
  border-color: rgb(112, 112, 112);
}

html body .canvas-sidebar {
  background-color: rgb(189, 190, 189);
}

html body .note-properties {
  border-color: rgb(112, 112, 112);
}

html body .note-properties-tags {
  background-color: rgba(0, 0, 122, 0.1);
  color: rgb(0, 0, 122);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(189, 190, 189);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(112, 112, 112);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(189, 190, 189);
  border-left-color: rgb(112, 112, 112);
}

html body div#quartz-root {
  background-color: rgb(189, 190, 189);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > em, html em {
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration-color: rgb(52, 59, 88);
}

html body .page article p > i, html i {
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration-color: rgb(52, 59, 88);
}

html body .page article p > strong, html strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .text-highlight {
  background-color: rgba(72, 94, 48, 0.4);
}

html body h1.article-title {
  font-size: 12px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(79, 80, 87);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 0, 123);
  border-color: rgb(0, 0, 123);
}`,
    links: `html body a.external, html footer a {
  color: rgb(0, 0, 122);
  outline: rgb(0, 0, 122) none 0px;
  text-decoration-color: rgb(0, 0, 122);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 0, 122);
  outline: rgb(0, 0, 122) none 0px;
  text-decoration-color: rgb(0, 0, 122);
}

html body a.internal.broken {
  color: rgb(0, 0, 122);
  outline: rgb(0, 0, 122) none 0px;
  text-decoration: underline rgba(0, 0, 122, 0.3);
  text-decoration-color: rgba(0, 0, 122, 0.3);
}`,
    lists: `html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: ridge;
  border-top-width: 4px;
}

html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(79, 80, 87);
}`,
    tables: `html body td {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body th {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}`,
    code: `html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}`,
    images: `html body img {
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
}`,
    embeds: `html body .transclude {
  border-left-color: rgb(0, 0, 123);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(79, 80, 87);
  border-left-color: rgb(79, 80, 87);
  border-right-color: rgb(79, 80, 87);
  border-top-color: rgb(79, 80, 87);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body .search > .search-container > .search-space {
  background-color: rgb(189, 190, 189);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(189, 190, 189);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 122, 0.1);
  border-bottom-color: rgba(0, 0, 122, 0.15);
  border-left-color: rgba(0, 0, 122, 0.15);
  border-right-color: rgba(0, 0, 122, 0.15);
  border-top-color: rgba(0, 0, 122, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(0, 0, 122);
}

html body h1 {
  color: rgb(52, 84, 138);
}

html body h2 {
  color: rgb(52, 84, 138);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(52, 84, 138);
}

html body h3 {
  color: rgb(52, 84, 138);
}

html body h4 {
  color: rgb(52, 84, 138);
}

html body h5 {
  color: rgb(52, 84, 138);
}

html body h6 {
  color: rgb(52, 84, 138);
}

html body hr {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
}`,
    scrollbars: `html body .callout {
  --callout-color: 8, 109, 221;
}

html body ::-webkit-scrollbar {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}

html body ::-webkit-scrollbar-track {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}`,
    explorer: `html body .explorer {
  background-color: rgb(255, 255, 255);
}

html body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0.4);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(128, 128, 128);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    footer: `html body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-left-width: 0px;
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-width: 0px;
}`,
    listPage: `html body ul.section-ul {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: ridge;
  border-left-width: 4px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(128, 128, 128);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(79, 80, 87);
}`,
    misc: `html body .metadata {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html body kbd {
  background-color: rgb(255, 255, 255);
}

html body ul.tags > li {
  background-color: rgba(0, 0, 122, 0.1);
  border-bottom-color: rgba(0, 0, 122, 0.15);
  border-left-color: rgba(0, 0, 122, 0.15);
  border-right-color: rgba(0, 0, 122, 0.15);
  border-top-color: rgba(0, 0, 122, 0.15);
  color: rgb(0, 0, 122);
}`,
  },
};
