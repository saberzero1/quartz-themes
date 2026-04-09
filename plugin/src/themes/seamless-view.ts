import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "seamless-view", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 85 !important;
  --accent-l: 40% !important;
  --accent-s: 45% !important;
  --background-modifier-active-hover: hsla(85, 45%, 40%, 0.1) !important;
  --background-primary: #2a2a2a !important;
  --background-primary-alt: #363636 !important;
  --background-secondary: #1e1e1e !important;
  --bases-cards-background: #2a2a2a !important;
  --bases-cards-cover-background: #363636 !important;
  --bases-table-border-color: #666666 !important;
  --bases-table-cell-background-active: #2a2a2a !important;
  --bases-table-cell-background-disabled: #363636 !important;
  --bases-table-cell-background-selected: hsla(85, 45%, 40%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(85, 45%, 40%) !important;
  --bases-table-group-background: #363636 !important;
  --bases-table-header-background: #2a2a2a !important;
  --bases-table-summary-background: #2a2a2a !important;
  --blockquote-border-color: hsl(85, 45%, 40%) !important;
  --bold-color: hsl(355, 65%, 70%) !important;
  --callout-default: 116, 185, 241;
  --callout-important: 228, 212, 129;
  --callout-info: 116, 185, 241;
  --callout-padding: 8.2px 12px 8px calc(1em + 2px);
  --callout-question: 152, 195, 121;
  --callout-summary: 86, 182, 194;
  --callout-tip: 86, 182, 194;
  --callout-todo: 233, 151, 63;
  --canvas-background: #2a2a2a !important;
  --canvas-color-3: 228, 212, 129 !important;
  --canvas-color-5: 86, 182, 194 !important;
  --canvas-color-6: 110, 148, 56 !important;
  --canvas-space-x: 20px !important;
  --canvas-space-y: 16px !important;
  --checkbox-color: hsl(85, 45%, 40%) !important;
  --checkbox-color-hover: hsl(82, 45.9%, 46%) !important;
  --checkbox-end-margin: 8px !important;
  --checkbox-end-margin-editing: -3.5px !important;
  --checkbox-indent: 7px !important;
  --checkbox-indent-editing: 5px !important;
  --checkbox-marker-color: #2a2a2a !important;
  --checkbox-vertical-align: -2px !important;
  --code-background: #363636 !important;
  --code-function: hsl(207, 82%, 70%) !important;
  --code-keyword: hsl(286, 60%, 67%) !important;
  --code-operator: hsl(187, 47%, 55%) !important;
  --code-property: hsl(355, 65%, 70%) !important;
  --code-punctuation: hsl(29, 54%, 61%) !important;
  --code-string: hsl(95, 38%, 62%) !important;
  --code-tag: hsl(355, 65%, 70%) !important;
  --code-value: hsl(29, 54%, 61%) !important;
  --collapse-icon-color-collapsed: hsl(82, 45.9%, 46%) !important;
  --color-accent: hsl(85, 45%, 40%) !important;
  --color-accent-1: hsl(82, 45.9%, 46%) !important;
  --color-accent-2: hsl(80, 47.25%, 51.6%) !important;
  --color-accent-hsl: 85, 45%, 40% !important;
  --color-accent-rgb: 110, 148, 56 !important;
  --color-blue: hsl(207, 82%, 70%) !important;
  --color-blue-rgb: 116, 185, 241 !important;
  --color-code-alt: rgb(160, 160, 160) !important;
  --color-code-alt-rgb: 160, 160, 160 !important;
  --color-cyan: hsl(187, 47%, 55%) !important;
  --color-cyan-alt: hsl(170, 100%, 24%) !important;
  --color-cyan-alt-rgb: 0, 122, 102 !important;
  --color-cyan-rgb: 86, 182, 194 !important;
  --color-green-alt: hsl(95, 38%, 62%) !important;
  --color-green-alt-rgb: 152, 195, 121 !important;
  --color-orange-alt: hsl(29, 54%, 61%) !important;
  --color-orange-alt-rgb: 209, 154, 102 !important;
  --color-pink: hsl(286, 60%, 67%) !important;
  --color-pink-rgb: 198, 120, 221 !important;
  --color-red-alt: hsl(355, 65%, 70%) !important;
  --color-red-alt-rgb: 228, 129, 137 !important;
  --color-red-alt2: hsl(0, 80%, 30%) !important;
  --color-red-alt2-rgb: 138, 15, 15 !important;
  --color-yellow: hsl(50, 65%, 70%) !important;
  --color-yellow-rgb: 228, 212, 129 !important;
  --divider-color-hover: hsl(85, 45%, 40%) !important;
  --embed-border-start: none !important;
  --embed-padding: 0 !important;
  --file-header-background: #2a2a2a !important;
  --file-header-background-focused: #2a2a2a !important;
  --file-margins: 0 32px 32px !important;
  --graph-node-attachment: hsl(50, 65%, 70%) !important;
  --graph-node-focused: hsl(82, 45.9%, 46%) !important;
  --h1-color: hsl(355, 65%, 70%) !important;
  --h1-line-height: normal !important;
  --h1-size: 1.71875em !important;
  --h2-color: hsl(50, 65%, 70%) !important;
  --h2-line-height: normal !important;
  --h2-size: 1.5625em !important;
  --h3-color: hsl(207, 82%, 70%) !important;
  --h3-line-height: normal !important;
  --h3-size: 1.375em !important;
  --h4-color: hsl(29, 54%, 61%) !important;
  --h4-size: 1.25em !important;
  --h5-color: hsl(95, 38%, 62%) !important;
  --h6-color: #a882ff !important;
  --header-height: 37px !important;
  --heading-spacing: 0 !important;
  --highlight: rgba(138, 15, 15, 0.4) !important;
  --highlight-color: 138, 15, 15 !important;
  --hr-color: #555555 !important;
  --icon-color-active: hsl(82, 45.9%, 46%) !important;
  --indentation-guide-editing-indent: 0.5em !important;
  --indentation-guide-reading-indent: calc(-0.5em - 1px) !important;
  --inline-title-color: #b3b3b3 !important;
  --inline-title-line-height: normal !important;
  --inline-title-margin-bottom: 4px !important;
  --inline-title-size: 1.5625em !important;
  --inline-title-weight: 680 !important;
  --interactive-accent: hsl(85, 45%, 40%) !important;
  --interactive-accent-hover: hsl(82, 45.9%, 46%) !important;
  --interactive-accent-hsl: 85, 45%, 40% !important;
  --italic-color: hsl(50, 65%, 70%) !important;
  --lc-bg-bottom-reading: 1px !important;
  --lc-bg-left: 18px !important;
  --lc-bg-left-reading: 19px !important;
  --lc-bg-opacity-dark: 0.1 !important;
  --lc-bg-right-reading: 1px !important;
  --lc-bg-top-reading: 1px !important;
  --light: #2a2a2a !important;
  --lightgray: #1e1e1e !important;
  --link-color: hsl(82, 45.9%, 46%) !important;
  --link-color-hover: hsl(80, 47.25%, 51.6%) !important;
  --link-external-color: hsl(82, 45.9%, 46%) !important;
  --link-external-color-hover: hsl(80, 47.25%, 51.6%) !important;
  --link-unresolved-color: hsl(82, 45.9%, 46%) !important;
  --link-unresolved-decoration-color: hsla(85, 45%, 40%, 0.3) !important;
  --list-indent: calc(1em + 2px) !important;
  --list-indent-editing: 0 !important;
  --list-marker-color-collapsed: hsl(82, 45.9%, 46%) !important;
  --list-spacing: 0 !important;
  --menu-background: #1e1e1e !important;
  --metadata-background: #363636 !important;
  --metadata-icon: "📄" !important;
  --metadata-padding: 0 !important;
  --modal-background: #2a2a2a !important;
  --nav-item-background-selected: hsla(85, 45%, 40%, 0.15) !important;
  --nav-item-color-highlighted: hsl(82, 45.9%, 46%) !important;
  --p-spacing: 0 !important;
  --pdf-background: #2a2a2a !important;
  --pdf-page-background: #2a2a2a !important;
  --pdf-sidebar-background: #2a2a2a !important;
  --pill-color-remove-hover: hsl(82, 45.9%, 46%) !important;
  --prompt-background: #2a2a2a !important;
  --ribbon-background: #1e1e1e !important;
  --ribbon-width: 41px !important;
  --search-result-background: #2a2a2a !important;
  --secondary: hsl(82, 45.9%, 46%) !important;
  --setting-items-background: #363636 !important;
  --status-bar-background: #1e1e1e !important;
  --strike-color: #b3b3b3 !important;
  --suggestion-background: #2a2a2a !important;
  --sync-avatar-color-3: hsl(50, 65%, 70%) !important;
  --sync-avatar-color-5: hsl(187, 47%, 55%) !important;
  --sync-avatar-color-6: hsl(207, 82%, 70%) !important;
  --sync-avatar-color-8: hsl(286, 60%, 67%) !important;
  --tab-background-active: #2a2a2a !important;
  --tab-container-background: #1e1e1e !important;
  --tab-stacked-header-width: 37px !important;
  --tab-switcher-background: #1e1e1e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e1e1e, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(85, 45%, 40%) !important;
  --tab-text-color-focused-highlighted: hsl(82, 45.9%, 46%) !important;
  --table-border-color: #666666 !important;
  --table-drag-handle-background-active: hsl(85, 45%, 40%) !important;
  --table-header-border-color: #666666 !important;
  --table-selection: hsla(85, 45%, 40%, 0.1) !important;
  --table-selection-border-color: hsl(85, 45%, 40%) !important;
  --tag-background: hsla(85, 45%, 40%, 0.1) !important;
  --tag-background-hover: hsla(85, 45%, 40%, 0.2) !important;
  --tag-border-color: hsla(85, 45%, 40%, 0.15) !important;
  --tag-border-color-hover: hsla(85, 45%, 40%, 0.15) !important;
  --tag-color: hsl(82, 45.9%, 46%) !important;
  --tag-color-hover: hsl(82, 45.9%, 46%) !important;
  --tag-padding-y: 0.15em !important;
  --tertiary: hsl(80, 47.25%, 51.6%) !important;
  --text-accent: hsl(82, 45.9%, 46%) !important;
  --text-accent-hover: hsl(80, 47.25%, 51.6%) !important;
  --text-highlight-bg: rgba(138, 15, 15, 0.4) !important;
  --text-highlight-bg-rgb: 138, 15, 15 !important;
  --text-selection: hsla(85, 45%, 40%, 0.33) !important;
  --textHighlight: rgba(138, 15, 15, 0.4) !important;
  --titlebar-background: #363636 !important;
  --titlebar-background-focused: #1e1e1e !important;
  --traffic-lights-offset-x: 37px !important;
  --traffic-lights-offset-y: 37px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 30, 30);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(42, 42, 42);
}

html body .bases-table thead th {
  border-color: rgb(102, 102, 102);
}

html body .canvas-sidebar {
  background-color: rgb(54, 54, 54);
}

html body .note-properties {
  background-color: rgb(54, 54, 54);
}

html body .note-properties-tags {
  background-color: rgba(110, 148, 56, 0.1);
  color: rgb(132, 171, 63);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 30, 30);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 30, 30);
}

html body div#quartz-root {
  background-color: rgb(42, 42, 42);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(228, 129, 137);
  outline: rgb(228, 129, 137) none 0px;
  text-decoration-color: rgb(228, 129, 137);
}

html body .page article p > em, html em {
  color: rgb(228, 212, 129);
  outline: rgb(228, 212, 129) none 0px;
  text-decoration-color: rgb(228, 212, 129);
}

html body .page article p > i, html i {
  color: rgb(228, 212, 129);
  outline: rgb(228, 212, 129) none 0px;
  text-decoration-color: rgb(228, 212, 129);
}

html body .page article p > strong, html strong {
  color: rgb(228, 129, 137);
  outline: rgb(228, 129, 137) none 0px;
  text-decoration-color: rgb(228, 129, 137);
}

html body .text-highlight {
  background-color: rgba(138, 15, 15, 0.4);
}

html body del {
  color: rgb(179, 179, 179);
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(110, 148, 56);
  border-color: rgb(110, 148, 56);
}`,
    links: `html body a.external, html footer a {
  color: rgb(132, 171, 63);
  outline: rgb(132, 171, 63) none 0px;
  text-decoration-color: rgb(132, 171, 63);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(132, 171, 63);
  outline: rgb(132, 171, 63) none 0px;
  text-decoration-color: rgb(132, 171, 63);
}

html body a.internal.broken {
  color: rgb(132, 171, 63);
  outline: rgb(132, 171, 63) none 0px;
  text-decoration: underline rgba(110, 148, 56, 0.3);
  text-decoration-color: rgba(110, 148, 56, 0.3);
}`,
    tables: `html body td {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body th {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}`,
    code: `html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(54, 54, 54);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(54, 54, 54);
}

html body pre > code > [data-line] {
  border-left-color: rgb(116, 185, 241);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(116, 185, 241);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(116, 185, 241);
  border-left-color: rgb(116, 185, 241);
  border-right-color: rgb(116, 185, 241);
  border-top-color: rgb(116, 185, 241);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(54, 54, 54);
  overflow-x: hidden;
  padding-bottom: 21px;
  padding-left: 18px;
  padding-right: 12px;
  padding-top: 21px;
}

html body pre:has(> code) {
  background-color: rgb(54, 54, 54);
  overflow-x: hidden;
  padding-bottom: 21px;
  padding-left: 18px;
  padding-right: 12px;
  padding-top: 21px;
}`,
    images: `html body img {
  border-bottom-color: rgb(228, 129, 137);
  border-left-color: rgb(228, 129, 137);
  border-right-color: rgb(228, 129, 137);
  border-top-color: rgb(228, 129, 137);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(54, 54, 54);
}

html body .transclude {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}`,
    checkboxes: `html body .katex-display > .katex {
  display: inline-block;
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(116, 185, 241);
  border-left-color: rgb(116, 185, 241);
  border-right-color: rgb(116, 185, 241);
  border-top-color: rgb(116, 185, 241);
  color: rgb(116, 185, 241);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(116, 185, 241);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 86, 182, 194;
  background-color: rgba(86, 182, 194, 0.1);
  border-bottom-color: rgba(86, 182, 194, 0.25);
  border-left-color: rgba(86, 182, 194, 0.25);
  border-right-color: rgba(86, 182, 194, 0.25);
  border-top-color: rgba(86, 182, 194, 0.25);
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
  --callout-color: 116, 185, 241;
  background-color: rgba(116, 185, 241, 0.1);
  border-bottom-color: rgba(116, 185, 241, 0.25);
  border-left-color: rgba(116, 185, 241, 0.25);
  border-right-color: rgba(116, 185, 241, 0.25);
  border-top-color: rgba(116, 185, 241, 0.25);
}

html body .callout[data-callout="note"] {
  --callout-color: 116, 185, 241;
  background-color: rgba(116, 185, 241, 0.1);
  border-bottom-color: rgba(116, 185, 241, 0.25);
  border-left-color: rgba(116, 185, 241, 0.25);
  border-right-color: rgba(116, 185, 241, 0.25);
  border-top-color: rgba(116, 185, 241, 0.25);
}

html body .callout[data-callout="question"] {
  --callout-color: 152, 195, 121;
  background-color: rgba(152, 195, 121, 0.1);
  border-bottom-color: rgba(152, 195, 121, 0.25);
  border-left-color: rgba(152, 195, 121, 0.25);
  border-right-color: rgba(152, 195, 121, 0.25);
  border-top-color: rgba(152, 195, 121, 0.25);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 86, 182, 194;
  background-color: rgba(86, 182, 194, 0.1);
  border-bottom-color: rgba(86, 182, 194, 0.25);
  border-left-color: rgba(86, 182, 194, 0.25);
  border-right-color: rgba(86, 182, 194, 0.25);
  border-top-color: rgba(86, 182, 194, 0.25);
}

html body .callout[data-callout="todo"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-left-color: rgba(233, 151, 63, 0.25);
  border-right-color: rgba(233, 151, 63, 0.25);
  border-top-color: rgba(233, 151, 63, 0.25);
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
    search: `html body .search > .search-container > .search-space {
  background-color: rgb(42, 42, 42);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 30, 30);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(110, 148, 56, 0.1);
  border-bottom-color: rgba(110, 148, 56, 0.15);
  border-left-color: rgba(110, 148, 56, 0.15);
  border-right-color: rgba(110, 148, 56, 0.15);
  border-top-color: rgba(110, 148, 56, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(132, 171, 63);
}

html body h1 {
  color: rgb(228, 129, 137);
}

html body h2 {
  color: rgb(228, 212, 129);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(179, 179, 179);
}

html body h3 {
  color: rgb(116, 185, 241);
}

html body h4 {
  color: rgb(209, 154, 102);
}

html body h5 {
  color: rgb(152, 195, 121);
}

html body h6 {
  color: rgb(168, 130, 255);
}`,
    scrollbars: `html body .callout {
  --callout-color: 116, 185, 241;
  border-bottom-color: rgba(116, 185, 241, 0.25);
  border-left-color: rgba(116, 185, 241, 0.25);
  border-right-color: rgba(116, 185, 241, 0.25);
  border-top-color: rgba(116, 185, 241, 0.25);
  padding-bottom: 8px;
  padding-left: 18px;
  padding-top: 8.2px;
}

html body ::-webkit-scrollbar {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}

html body ::-webkit-scrollbar-track {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}`,
    footer: `html body footer {
  background-color: rgb(30, 30, 30);
}`,
    misc: `html body .metadata {
  background-color: rgb(54, 54, 54);
  padding-bottom: 0px;
  padding-top: 0px;
}

html body .navigation-progress {
  background-color: rgb(30, 30, 30);
}

html body kbd {
  background-color: rgb(54, 54, 54);
}

html body ul.tags > li {
  background-color: rgba(110, 148, 56, 0.1);
  border-bottom-color: rgba(110, 148, 56, 0.15);
  border-left-color: rgba(110, 148, 56, 0.15);
  border-right-color: rgba(110, 148, 56, 0.15);
  border-top-color: rgba(110, 148, 56, 0.15);
  color: rgb(132, 171, 63);
}`,
  },
  light: {},
};
