import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "salem", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 45 !important;
  --accent-l: 60% !important;
  --accent-s: 41% !important;
  --active-bg: #2527229e !important;
  --background-modifier-active-hover: hsla(45, 41%, 60%, 0.1) !important;
  --background-primary: #110f0f !important;
  --background-secondary: #111111 !important;
  --bases-cards-background: #110f0f !important;
  --bases-group-heading-property-color: rgb(198 193 135) !important;
  --bases-table-cell-background-active: #110f0f !important;
  --bases-table-cell-background-selected: hsla(45, 41%, 60%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(45, 41%, 60%) !important;
  --bases-table-header-background: #110f0f !important;
  --bases-table-header-color: rgb(198 193 135) !important;
  --bases-table-summary-background: #110f0f !important;
  --blockquote-background-color: #1d1d1da4 !important;
  --blockquote-background-hover: #232323ef !important;
  --blockquote-border-color: hsl(45, 41%, 60%) !important;
  --blockquote-border-thickness: 3px !important;
  --button-radius: 8px !important;
  --callout-radius: 20px;
  --callout-tip: 241, 226, 25;
  --canvas-background: #110f0f !important;
  --canvas-color: 241, 226, 25 !important;
  --canvas-color-2: 165, 156, 103 !important;
  --canvas-color-3: transparent !important;
  --checkbox-border-color-hover: rgb(198 193 135) !important;
  --checkbox-color: hsl(45, 41%, 60%) !important;
  --checkbox-color-hover: hsl(42, 41.82%, 69%) !important;
  --checkbox-marker-color: #110f0f !important;
  --checkbox-radius: 16px !important;
  --checklist-done-color: rgb(198 193 135 / 45%) !important;
  --checklist-done-decoration: none !important;
  --cm-active: #2e2e1d39 !important;
  --code-background: black !important;
  --code-punctuation: rgb(198 193 135) !important;
  --code-radius: 12px !important;
  --collapse-icon-color-collapsed: hsl(42, 41.82%, 69%) !important;
  --color-accent: hsl(45, 41%, 60%) !important;
  --color-accent-1: hsl(42, 41.82%, 69%) !important;
  --color-accent-2: hsl(40, 43.05%, 77.4%) !important;
  --color-accent-hsl: 45, 41%, 60% !important;
  --color-crimson: rgb(172, 99, 99) !important;
  --color-crimson-rgb: 172, 99, 99 !important;
  --color-goldFusion-rgb: 165, 156, 103 !important;
  --color-starred: rgb(241, 226, 25) !important;
  --color-starred-rgb: 241, 226, 25 !important;
  --dark: rgb(198 193 135) !important;
  --darkgray: rgb(198 193 135) !important;
  --divider-color: #262626 !important;
  --divider-color-hover: hsl(45, 41%, 60%) !important;
  --embed-border-start: 2px solid hsl(45, 41%, 60%) !important;
  --file-header-background: #110f0f !important;
  --file-header-background-focused: #110f0f !important;
  --footnote-id-color: rgb(198 193 135) !important;
  --footnote-input-background-active: #111111 !important;
  --graph-node: rgb(198 193 135) !important;
  --graph-node-focused: hsl(42, 41.82%, 69%) !important;
  --gray: rgb(198 193 135) !important;
  --h1-size: 2em !important;
  --h2-size: 1.7em !important;
  --h3-size: 1.4em !important;
  --h4-size: 1.2em !important;
  --h5-size: 1.1em !important;
  --highlight: hsla(45, 41%, 60%, 0.1) !important;
  --hr-color: rgb(198 193 135 / 10%) !important;
  --icon-color: rgb(198 193 135) !important;
  --icon-color-active: hsl(42, 41.82%, 69%) !important;
  --icon-color-hover: rgb(198 193 135) !important;
  --inline-title-color: #fb464c !important;
  --inline-title-size: 2.3em !important;
  --input-radius: 8px !important;
  --interactive-accent: hsl(45, 41%, 60%) !important;
  --interactive-accent-hover: hsl(42, 41.82%, 69%) !important;
  --interactive-accent-hsl: 45, 41%, 60% !important;
  --italic-color: rgb(172, 99, 99) !important;
  --light: #110f0f !important;
  --lightgray: #111111 !important;
  --line-height-tight: 1.8 !important;
  --link-color: hsl(42, 41.82%, 69%) !important;
  --link-color-hover: hsl(40, 43.05%, 77.4%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(42, 41.82%, 69%) !important;
  --link-external-color-hover: hsl(40, 43.05%, 77.4%) !important;
  --link-unresolved-color: hsl(42, 41.82%, 69%) !important;
  --link-unresolved-decoration-color: hsla(45, 41%, 60%, 0.3) !important;
  --list-bullet-border: 1px solid hsl(40, 43.05%, 77.4%) !important;
  --list-marker-color: hsl(45, 41%, 60%) !important;
  --list-marker-color-collapsed: hsl(42, 41.82%, 69%) !important;
  --list-marker-color-hover: rgb(198 193 135) !important;
  --menu-background: #111111 !important;
  --metadata-input-background-active: #111111 !important;
  --metadata-label-text-color: rgb(198 193 135) !important;
  --metadata-label-text-color-hover: rgb(198 193 135) !important;
  --metadata-property-background-hover: rgba(255, 255, 255, 0.03) !important;
  --modal-background: #110f0f !important;
  --muted-accent: rgb(198 193 135) !important;
  --muted-accent-rgb: 198 193 135 !important;
  --nav-heading-color-collapsed-hover: rgb(198 193 135) !important;
  --nav-item-background-selected: hsla(45, 41%, 60%, 0.15) !important;
  --nav-item-color: rgb(198 193 135) !important;
  --nav-item-color-highlighted: hsl(42, 41.82%, 69%) !important;
  --nav-tag-color-active: rgb(198 193 135) !important;
  --nav-tag-color-hover: rgb(198 193 135) !important;
  --pdf-background: #110f0f !important;
  --pdf-page-background: #110f0f !important;
  --pdf-sidebar-background: #110f0f !important;
  --pill-color: rgb(198 193 135) !important;
  --pill-color-remove-hover: hsl(42, 41.82%, 69%) !important;
  --primary-90: rgba(17, 15, 15, 0.9) !important;
  --prompt-background: #110f0f !important;
  --ribbon-background: #111111 !important;
  --ribbon-background-collapsed: #110f0f !important;
  --search-clear-button-color: rgb(198 193 135) !important;
  --search-icon-color: rgb(198 193 135) !important;
  --search-result-background: #110f0f !important;
  --secondary: hsl(42, 41.82%, 69%) !important;
  --status-bar-background: #111111 !important;
  --status-bar-border-color: #262626 !important;
  --status-bar-text-color: rgb(198 193 135) !important;
  --suggestion-background: #110f0f !important;
  --tab-background-active: #2527229e !important;
  --tab-container-background: #111111 !important;
  --tab-outline-color: transparent !important;
  --tab-radius-active: 12px !important;
  --tab-switcher-background: #111111 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(45, 41%, 60%) !important;
  --tab-text-color-active: rgb(198 193 135) !important;
  --tab-text-color-focused: #666666 !important;
  --tab-text-color-focused-active: rgb(198 193 135) !important;
  --tab-text-color-focused-active-current: hsl(42, 41.82%, 69%) !important;
  --tab-text-color-focused-highlighted: hsl(42, 41.82%, 69%) !important;
  --tab-width: 180px !important;
  --table-drag-handle-background-active: hsl(45, 41%, 60%) !important;
  --table-drag-handle-color-active: rgb(59, 53, 34) !important;
  --table-header-color: rgb(198 193 135) !important;
  --table-line-height: 1.8 !important;
  --table-selection: hsla(45, 41%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(45, 41%, 60%) !important;
  --tag-background: hsla(45, 41%, 60%, 0.1) !important;
  --tag-background-hover: hsla(45, 41%, 60%, 0.2) !important;
  --tag-border-color: hsla(45, 41%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(45, 41%, 60%, 0.15) !important;
  --tag-color: hsl(42, 41.82%, 69%) !important;
  --tag-color-hover: hsl(42, 41.82%, 69%) !important;
  --tertiary: hsl(40, 43.05%, 77.4%) !important;
  --text-accent: hsl(42, 41.82%, 69%) !important;
  --text-accent-hover: hsl(40, 43.05%, 77.4%) !important;
  --text-muted: rgb(198 193 135) !important;
  --text-on-accent: rgb(59, 53, 34) !important;
  --text-on-accent-inverted: white !important;
  --text-selection: hsla(45, 41%, 60%, 0.33) !important;
  --text-stroke-color: hsl(45deg 100% 84%) !important;
  --textHighlight: hsla(45, 41%, 60%, 0.1) !important;
  --titlebar-background: #111111 !important;
  --titlebar-background-focused: #111111 !important;
  --titlebar-text-color: rgb(198 193 135) !important;
  --vault-name-font-size: 20px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(195, 174, 111, 0.1);
  color: rgb(209, 189, 143);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 17, 17);
  border-left-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(17, 15, 15);
}`,
    typography: `html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration-color: rgb(172, 99, 99);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration-color: rgb(172, 99, 99);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(68, 207, 110);
  font-weight: 500;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 16px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(195, 174, 111);
  border-color: rgb(195, 174, 111);
}

html[saved-theme="dark"] body p {
  color: rgb(198, 193, 135);
  outline: rgb(198, 193, 135) none 0px;
  text-decoration-color: rgb(198, 193, 135);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(209, 189, 143);
  outline: rgb(209, 189, 143) none 0px;
  text-decoration-color: rgb(209, 189, 143);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(209, 189, 143);
  outline: rgb(209, 189, 143) none 0px;
  text-decoration-color: rgb(209, 189, 143);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(209, 189, 143);
  outline: rgb(209, 189, 143) none 0px;
  text-decoration: rgba(195, 174, 111, 0.3);
  text-decoration-color: rgba(195, 174, 111, 0.3);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgba(29, 29, 29, 0.643);
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="dark"] body th {
  color: rgb(198, 193, 135);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(195, 174, 111);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(83, 223, 221);
  border-left-color: rgb(83, 223, 221);
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  color: rgb(83, 223, 221);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgba(17, 15, 15, 0.9);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 241, 226, 25;
  background-color: rgba(241, 226, 25, 0.1);
  border-bottom-color: rgba(241, 226, 25, 0.25);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(241, 226, 25, 0.25);
  border-right-color: rgba(241, 226, 25, 0.25);
  border-top-color: rgba(241, 226, 25, 0.25);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="attention-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="author"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="caution-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cent"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="center"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="check-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cite-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="comment"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="done-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="error-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="fail-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="faq-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="grid_transparent"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="gridlist"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="help-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="hint-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="important-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="missing-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="moon"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v2'/%3E%3Cpath d='M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715'/%3E%3Cpath d='M16 12a4 4 0 0 0-4-4'/%3E%3Cpath d='m19 5-1.256 1.256'/%3E%3Cpath d='M20 12h2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(195, 174, 111, 0.1);
  border-bottom-color: rgba(195, 174, 111, 0.15);
  border-left-color: rgba(195, 174, 111, 0.15);
  border-right-color: rgba(195, 174, 111, 0.15);
  border-top-color: rgba(195, 174, 111, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(209, 189, 143);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(198, 193, 135);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(198, 193, 135);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(198, 193, 135);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(198, 193, 135);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(198, 193, 135);
  stroke: rgb(198, 193, 135);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  color: rgb(198, 193, 135);
  margin-bottom: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(195, 174, 111, 0.1);
  border-bottom-color: rgba(195, 174, 111, 0.15);
  border-left-color: rgba(195, 174, 111, 0.15);
  border-right-color: rgba(195, 174, 111, 0.15);
  border-top-color: rgba(195, 174, 111, 0.15);
  color: rgb(209, 189, 143);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 45 !important;
  --accent-l: 60% !important;
  --accent-s: 41% !important;
  --active-bg: #edffd19e !important;
  --background-modifier-active-hover: hsla(45, 41%, 60%, 0.1) !important;
  --background-primary: #fefff6 !important;
  --background-secondary: #fefff6 !important;
  --bases-cards-background: #fefff6 !important;
  --bases-group-heading-property-color: rgb(110 102 3) !important;
  --bases-table-cell-background-active: #fefff6 !important;
  --bases-table-cell-background-selected: hsla(45, 41%, 60%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(44, 41.41%, 64.5%) !important;
  --bases-table-header-background: #fefff6 !important;
  --bases-table-header-color: rgb(110 102 3) !important;
  --bases-table-summary-background: #fefff6 !important;
  --blockquote-background-color: #dae6c5a4 !important;
  --blockquote-background-hover: rgba(246, 246, 199, 0.937) !important;
  --blockquote-border-color: hsl(44, 41.41%, 64.5%) !important;
  --blockquote-border-thickness: 3px !important;
  --blur-background: color-mix(in srgb, #fefff6 65%, transparent) linear-gradient(#fefff6, color-mix(in srgb, #fefff6 65%, transparent)) !important;
  --button-radius: 8px !important;
  --callout-radius: 20px;
  --callout-tip: 241, 226, 25;
  --canvas-background: #fefff6 !important;
  --canvas-color: 241, 226, 25 !important;
  --canvas-color-2: 165, 156, 103 !important;
  --canvas-color-3: transparent !important;
  --checkbox-border-color-hover: rgb(110 102 3) !important;
  --checkbox-color: hsl(44, 41.41%, 64.5%) !important;
  --checkbox-color-hover: hsl(42, 41.82%, 69%) !important;
  --checkbox-marker-color: #fefff6 !important;
  --checkbox-radius: 16px !important;
  --checklist-done-color: rgb(110 102 3 / 45%) !important;
  --checklist-done-decoration: none !important;
  --cm-active: #f0f09839 !important;
  --code-background: black !important;
  --code-punctuation: rgb(110 102 3) !important;
  --code-radius: 12px !important;
  --collapse-icon-color-collapsed: hsl(45, 41%, 60%) !important;
  --color-accent: hsl(45, 41%, 60%) !important;
  --color-accent-1: hsl(44, 41.41%, 64.5%) !important;
  --color-accent-2: hsl(42, 41.82%, 69%) !important;
  --color-accent-hsl: 45, 41%, 60% !important;
  --color-crimson: rgb(172, 99, 99) !important;
  --color-crimson-rgb: 172, 99, 99 !important;
  --color-goldFusion-rgb: 165, 156, 103 !important;
  --color-starred: rgb(241, 226, 25) !important;
  --color-starred-rgb: 241, 226, 25 !important;
  --dark: rgb(110 102 3) !important;
  --darkgray: rgb(110 102 3) !important;
  --divider-color: #f6f6f6 !important;
  --divider-color-hover: hsl(44, 41.41%, 64.5%) !important;
  --embed-border-start: 2px solid hsl(44, 41.41%, 64.5%) !important;
  --file-header-background: #fefff6 !important;
  --file-header-background-focused: #fefff6 !important;
  --footnote-id-color: rgb(110 102 3) !important;
  --footnote-input-background-active: #fefff6 !important;
  --graph-node: rgb(110 102 3) !important;
  --graph-node-focused: hsl(45, 41%, 60%) !important;
  --gray: rgb(110 102 3) !important;
  --h1-size: 2em !important;
  --h2-size: 1.7em !important;
  --h3-size: 1.4em !important;
  --h4-size: 1.2em !important;
  --h5-size: 1.1em !important;
  --highlight: hsla(45, 41%, 60%, 0.1) !important;
  --hr-color: rgb(110 102 3 / 10%) !important;
  --icon-color: rgb(110 102 3) !important;
  --icon-color-active: hsl(45, 41%, 60%) !important;
  --icon-color-hover: rgb(110 102 3) !important;
  --inline-title-color: #e93147 !important;
  --inline-title-size: 2.3em !important;
  --input-radius: 8px !important;
  --interactive-accent: hsl(44, 41.41%, 64.5%) !important;
  --interactive-accent-hover: hsl(42, 41.82%, 69%) !important;
  --interactive-accent-hsl: 45, 41%, 60% !important;
  --italic-color: rgb(172, 99, 99) !important;
  --light: #fefff6 !important;
  --lightgray: #fefff6 !important;
  --line-height-tight: 1.8 !important;
  --link-color: hsl(45, 41%, 60%) !important;
  --link-color-hover: hsl(42, 41.82%, 69%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(45, 41%, 60%) !important;
  --link-external-color-hover: hsl(42, 41.82%, 69%) !important;
  --link-unresolved-color: hsl(45, 41%, 60%) !important;
  --link-unresolved-decoration-color: hsla(45, 41%, 60%, 0.3) !important;
  --list-bullet-border: 1px solid hsl(42, 41.82%, 69%) !important;
  --list-marker-color: hsl(45, 41%, 60%) !important;
  --list-marker-color-collapsed: hsl(45, 41%, 60%) !important;
  --list-marker-color-hover: rgb(110 102 3) !important;
  --menu-background: #fefff6 !important;
  --metadata-input-background-active: #fefff6 !important;
  --metadata-label-text-color: rgb(110 102 3) !important;
  --metadata-label-text-color-hover: rgb(110 102 3) !important;
  --metadata-property-background-hover: rgba(0, 0, 0, 0.03) !important;
  --modal-background: #fefff6 !important;
  --muted-accent: rgb(110 102 3) !important;
  --muted-accent-rgb: 110 102 3 !important;
  --nav-heading-color-collapsed-hover: rgb(110 102 3) !important;
  --nav-item-background-selected: hsla(45, 41%, 60%, 0.15) !important;
  --nav-item-color: rgb(110 102 3) !important;
  --nav-item-color-highlighted: hsl(45, 41%, 60%) !important;
  --nav-tag-color-active: rgb(110 102 3) !important;
  --nav-tag-color-hover: rgb(110 102 3) !important;
  --pdf-background: #fefff6 !important;
  --pdf-page-background: #fefff6 !important;
  --pdf-sidebar-background: #fefff6 !important;
  --pill-color: rgb(110 102 3) !important;
  --pill-color-remove-hover: hsl(45, 41%, 60%) !important;
  --primary-90: rgb(254 255 246 / 0.9) !important;
  --prompt-background: #fefff6 !important;
  --raised-background: color-mix(in srgb, #fefff6 65%, transparent) linear-gradient(#fefff6, color-mix(in srgb, #fefff6 65%, transparent)) !important;
  --ribbon-background: #fefff6 !important;
  --ribbon-background-collapsed: #fefff6 !important;
  --search-clear-button-color: rgb(110 102 3) !important;
  --search-icon-color: rgb(110 102 3) !important;
  --search-result-background: #fefff6 !important;
  --secondary: hsl(45, 41%, 60%) !important;
  --status-bar-background: #fefff6 !important;
  --status-bar-border-color: #f6f6f6 !important;
  --status-bar-text-color: rgb(110 102 3) !important;
  --suggestion-background: #fefff6 !important;
  --tab-background-active: #edffd19e !important;
  --tab-container-background: #fefff6 !important;
  --tab-outline-color: transparent !important;
  --tab-radius-active: 12px !important;
  --tab-switcher-background: #fefff6 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fefff6, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(45, 41%, 60%) !important;
  --tab-text-color-active: rgb(110 102 3) !important;
  --tab-text-color-focused: #ababab !important;
  --tab-text-color-focused-active: rgb(110 102 3) !important;
  --tab-text-color-focused-active-current: hsl(45, 41%, 60%) !important;
  --tab-text-color-focused-highlighted: hsl(45, 41%, 60%) !important;
  --tab-width: 180px !important;
  --table-drag-handle-background-active: hsl(44, 41.41%, 64.5%) !important;
  --table-drag-handle-color-active: rgb(59, 53, 34) !important;
  --table-header-color: rgb(110 102 3) !important;
  --table-line-height: 1.8 !important;
  --table-selection: hsla(45, 41%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(44, 41.41%, 64.5%) !important;
  --tag-background: hsla(45, 41%, 60%, 0.1) !important;
  --tag-background-hover: hsla(45, 41%, 60%, 0.2) !important;
  --tag-border-color: hsla(45, 41%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(45, 41%, 60%, 0.15) !important;
  --tag-color: hsl(45, 41%, 60%) !important;
  --tag-color-hover: hsl(45, 41%, 60%) !important;
  --tertiary: hsl(42, 41.82%, 69%) !important;
  --text-accent: hsl(45, 41%, 60%) !important;
  --text-accent-hover: hsl(42, 41.82%, 69%) !important;
  --text-muted: rgb(110 102 3) !important;
  --text-on-accent: rgb(59, 53, 34) !important;
  --text-on-accent-inverted: white !important;
  --text-selection: hsla(45, 41%, 60%, 0.2) !important;
  --text-stroke-color: #222222 !important;
  --textHighlight: hsla(45, 41%, 60%, 0.1) !important;
  --titlebar-background: #fefff6 !important;
  --titlebar-background-focused: #fefff6 !important;
  --titlebar-text-color: rgb(110 102 3) !important;
  --vault-name-font-size: 20px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(195, 174, 111, 0.1);
  color: rgb(195, 174, 111);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(254, 255, 246);
  border-left-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(254, 255, 246);
}`,
    typography: `html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration-color: rgb(172, 99, 99);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration-color: rgb(172, 99, 99);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(8, 185, 78);
  font-weight: 500;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-radius: 16px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(202, 182, 127);
  border-color: rgb(202, 182, 127);
}

html[saved-theme="light"] body p {
  color: rgb(110, 102, 3);
  outline: rgb(110, 102, 3) none 0px;
  text-decoration-color: rgb(110, 102, 3);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(195, 174, 111);
  outline: rgb(195, 174, 111) none 0px;
  text-decoration-color: rgb(195, 174, 111);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(195, 174, 111);
  outline: rgb(195, 174, 111) none 0px;
  text-decoration-color: rgb(195, 174, 111);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(195, 174, 111);
  outline: rgb(195, 174, 111) none 0px;
  text-decoration: rgba(195, 174, 111, 0.3);
  text-decoration-color: rgba(195, 174, 111, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgba(218, 230, 197, 0.643);
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="light"] body th {
  color: rgb(110, 102, 3);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgb(202, 182, 127);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 191, 188);
  border-left-color: rgb(0, 191, 188);
  border-right-color: rgb(0, 191, 188);
  border-top-color: rgb(0, 191, 188);
  color: rgb(0, 191, 188);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: rgba(254, 255, 246, 0.9);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 241, 226, 25;
  background-color: rgba(241, 226, 25, 0.1);
  border-bottom-color: rgba(241, 226, 25, 0.25);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(241, 226, 25, 0.25);
  border-right-color: rgba(241, 226, 25, 0.25);
  border-top-color: rgba(241, 226, 25, 0.25);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="attention-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="author"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="caution-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cent"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="center"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="check-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cite-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="comment"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="done-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="error-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="fail-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="faq-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="grid_transparent"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="gridlist"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="help-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="hint-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="important-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="missing-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="moon"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v2'/%3E%3Cpath d='M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715'/%3E%3Cpath d='M16 12a4 4 0 0 0-4-4'/%3E%3Cpath d='m19 5-1.256 1.256'/%3E%3Cpath d='M20 12h2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success-header"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(195, 174, 111, 0.1);
  border-bottom-color: rgba(195, 174, 111, 0.15);
  border-left-color: rgba(195, 174, 111, 0.15);
  border-right-color: rgba(195, 174, 111, 0.15);
  border-top-color: rgba(195, 174, 111, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(195, 174, 111);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(233, 49, 71);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 102, 3);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(254, 255, 246);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(110, 102, 3);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 102, 3);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 102, 3);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(110, 102, 3);
  stroke: rgb(110, 102, 3);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}`,
    misc: `html[saved-theme="light"] body .metadata {
  color: rgb(110, 102, 3);
  margin-bottom: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(195, 174, 111, 0.1);
  border-bottom-color: rgba(195, 174, 111, 0.15);
  border-left-color: rgba(195, 174, 111, 0.15);
  border-right-color: rgba(195, 174, 111, 0.15);
  border-top-color: rgba(195, 174, 111, 0.15);
  color: rgb(195, 174, 111);
}`,
  },
};
