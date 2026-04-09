import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "abate",
    modes: ["light"],
    variations: [],
    fonts: ["noto-sans"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsla(258,
		88%,
		66%, 0.1) !important;
  --background-modifier-error: #b81e19 !important;
  --background-modifier-error-hover: #b81e19 !important;
  --background-modifier-error-rgb: 184, 30, 25 !important;
  --background-modifier-hover: rgba(40, 40, 40, 0.08) !important;
  --background-modifier-success: #05903d !important;
  --background-modifier-success-rgb: 5, 144, 61 !important;
  --background-primary: #fdf6e3 !important;
  --background-primary-alt: #fdf6e3 !important;
  --background-secondary: #fdf6e3 !important;
  --bases-cards-background: #fdf6e3 !important;
  --bases-cards-cover-background: #fdf6e3 !important;
  --bases-table-cell-background-active: #fdf6e3 !important;
  --bases-table-cell-background-disabled: #fdf6e3 !important;
  --bases-table-cell-background-selected: hsla(258,
		88%,
		66%, 0.1) !important;
  --bases-table-group-background: #fdf6e3 !important;
  --bases-table-header-background: #fdf6e3 !important;
  --bases-table-header-background-hover: rgba(40, 40, 40, 0.08) !important;
  --bases-table-summary-background: #fdf6e3 !important;
  --bases-table-summary-background-hover: rgba(40, 40, 40, 0.08) !important;
  --bg-light: #fdf6e3 !important;
  --blur-background: color-mix(in srgb, #fdf6e3 65%, transparent) linear-gradient(#fdf6e3, color-mix(in srgb, #fdf6e3 65%, transparent)) !important;
  --callout-border-opacity: 0.5;
  --callout-border-width: 1px;
  --callout-bug: 184, 30, 25;
  --callout-error: 184, 30, 25;
  --callout-example: 102, 69, 204;
  --callout-fail: 184, 30, 25;
  --callout-question: 237, 96, 2;
  --callout-success: 5, 144, 61;
  --callout-warning: 237, 96, 2;
  --canvas-background: #fdf6e3 !important;
  --canvas-color-1: 184, 30, 25 !important;
  --canvas-color-2: 237, 96, 2 !important;
  --canvas-color-3: 250, 189, 47 !important;
  --canvas-color-4: 5, 144, 61 !important;
  --canvas-color-6: 102, 69, 204 !important;
  --checkbox-marker-color: #fdf6e3 !important;
  --code-background: #fdf6e3 !important;
  --code-bracket-background: rgba(40, 40, 40, 0.08) !important;
  --code-function: #fabd2f !important;
  --code-important: #ed6002 !important;
  --code-operator: #b81e19 !important;
  --code-string: #05903d !important;
  --code-tag: #b81e19 !important;
  --code-value: #6645cc !important;
  --color-accent-hsl: 258,
		88%,
		66% !important;
  --color-green: #05903d !important;
  --color-green-rgb: 5, 144, 61 !important;
  --color-orange: #ed6002 !important;
  --color-orange-rgb: 237, 96, 2 !important;
  --color-purple: #6645cc !important;
  --color-purple-rgb: 102, 69, 204 !important;
  --color-red: #b81e19 !important;
  --color-red-rgb: 184, 30, 25 !important;
  --color-yellow: #fabd2f !important;
  --color-yellow-rgb: 250, 189, 47 !important;
  --file-header-background: #fdf6e3 !important;
  --file-header-background-focused: #fdf6e3 !important;
  --footnote-input-background-active: rgba(40, 40, 40, 0.08) !important;
  --graph-node-attachment: #fabd2f !important;
  --graph-node-tag: #05903d !important;
  --h1-color: #0f4761 !important;
  --h1-line-height: 1.5em !important;
  --h1-size: 2em !important;
  --h2-color: #12597a !important;
  --h2-line-height: 1.5em !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-color: #166c94 !important;
  --h3-line-height: 1.5em !important;
  --h3-size: 1.35em !important;
  --h3-weight: 400 !important;
  --h4-color: #1a7ead !important;
  --h4-line-height: 1.5em !important;
  --h4-size: 1.2em !important;
  --h4-weight: 400 !important;
  --h5-color: #1e91c7 !important;
  --h5-line-height: 1.5em !important;
  --h5-size: 1.2em !important;
  --h5-weight: 300 !important;
  --h6-color: #22a4e0 !important;
  --h6-line-height: 1.5em !important;
  --h6-size: 1.1em !important;
  --h6-weight: 300 !important;
  --heading-color: #0f4761
		
		--font-text-theme: Open Sans serif !important;
  --highlight: rgba(40, 40, 40, 0.08) !important;
  --indentation-guide-color: rgba(40, 40, 40, 0.12) !important;
  --indentation-guide-color-active: rgba(40, 40, 40, 0.3) !important;
  --indentation-guide-width: 2px !important;
  --inline-title-color: #000000 !important;
  --inline-title-line-height: 1.5em !important;
  --inline-title-size: 2.5em !important;
  --inline-title-weight: 900 !important;
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
  --interactive-accent-hsl: 258,
		88%,
		66% !important;
  --light: #fdf6e3 !important;
  --lightgray: #fdf6e3 !important;
  --link-unresolved-decoration-color: hsla(258,
		88%,
		66%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-indent-editing: 1em !important;
  --list-spacing: 0.2em !important;
  --menu-background: #fdf6e3 !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-input-background-active: rgba(40, 40, 40, 0.08) !important;
  --metadata-label-background-active: rgba(40, 40, 40, 0.08) !important;
  --metadata-property-background-active: rgba(40, 40, 40, 0.08) !important;
  --modal-background: #fdf6e3 !important;
  --mono-rgb-100: 40, 40, 40 !important;
  --nav-indentation-guide-color: rgba(40, 40, 40, 0.12) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgba(40, 40, 40, 0.15) !important;
  --nav-item-background-hover: rgba(40, 40, 40, 0.08) !important;
  --nav-item-background-selected: hsla(258,
		88%,
		66%, 0.15) !important;
  --pdf-background: #fdf6e3 !important;
  --pdf-page-background: #fdf6e3 !important;
  --pdf-sidebar-background: #fdf6e3 !important;
  --prompt-background: #fdf6e3 !important;
  --raised-background: color-mix(in srgb, #fdf6e3 65%, transparent) linear-gradient(#fdf6e3, color-mix(in srgb, #fdf6e3 65%, transparent)) !important;
  --ribbon-background: #fdf6e3 !important;
  --ribbon-background-collapsed: #fdf6e3 !important;
  --scrollbar-active-thumb-bg: rgba(40, 40, 40, 0.2) !important;
  --scrollbar-bg: rgba(40, 40, 40, 0.05) !important;
  --scrollbar-thumb-bg: rgba(40, 40, 40, 0.1) !important;
  --search-result-background: #fdf6e3 !important;
  --setting-items-background: #fdf6e3 !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
		0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --status-bar-background: #fdf6e3 !important;
  --suggestion-background: #fdf6e3 !important;
  --swatch-shadow: inset 0 0 0 1px rgba(40, 40, 40, 0.15) !important;
  --sync-avatar-color-1: #b81e19 !important;
  --sync-avatar-color-2: #ed6002 !important;
  --sync-avatar-color-3: #fabd2f !important;
  --sync-avatar-color-4: #05903d !important;
  --sync-avatar-color-7: #6645cc !important;
  --tab-background-active: #fdf6e3 !important;
  --tab-container-background: #fdf6e3 !important;
  --tab-switcher-background: #fdf6e3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdf6e3, transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(40, 40, 40, 0.05) !important;
  --table-selection: hsla(258,
		88%,
		66%, 0.1) !important;
  --tag-background: hsla(258,
		88%,
		66%, 0.1) !important;
  --tag-background-hover: hsla(258,
		88%,
		66%, 0.2) !important;
  --tag-border-color: hsla(258,
		88%,
		66%, 0.15) !important;
  --tag-border-color-hover: hsla(258,
		88%,
		66%, 0.15) !important;
  --text-error: #b81e19 !important;
  --text-selection: hsla(258,
		88%,
		66%, 0.2) !important;
  --text-success: #05903d !important;
  --text-warning: #ed6002 !important;
  --textHighlight: rgba(40, 40, 40, 0.08) !important;
  --titlebar-background: #fdf6e3 !important;
  --titlebar-background-focused: #fff5de !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 246, 227);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(253, 246, 227);
}

html body .canvas-sidebar {
  background-color: rgb(253, 246, 227);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 246, 227);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 246, 227);
}

html body div#quartz-root {
  background-color: rgb(253, 246, 227);
}`,
    code: `html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(253, 246, 227);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(253, 246, 227);
}

html body pre > code > [data-line] {
  border-left-color: rgb(250, 189, 47);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(250, 189, 47);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(250, 189, 47);
  border-left-color: rgb(250, 189, 47);
  border-right-color: rgb(250, 189, 47);
  border-top-color: rgb(250, 189, 47);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(253, 246, 227);
}

html body pre:has(> code) {
  background-color: rgb(253, 246, 227);
}`,
    images: `html body img {
  border-bottom-color: rgb(15, 71, 97);
  border-left-color: rgb(15, 71, 97);
  border-right-color: rgb(15, 71, 97);
  border-top-color: rgb(15, 71, 97);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(253, 246, 227);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-color: rgba(0, 191, 188, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 184, 30, 25;
  background-color: rgba(184, 30, 25, 0.1);
  border-bottom-color: rgba(184, 30, 25, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(184, 30, 25, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(184, 30, 25, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(184, 30, 25, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 184, 30, 25;
  background-color: rgba(184, 30, 25, 0.1);
  border-bottom-color: rgba(184, 30, 25, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(184, 30, 25, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(184, 30, 25, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(184, 30, 25, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="example"] {
  --callout-color: 102, 69, 204;
  background-color: rgba(102, 69, 204, 0.1);
  border-bottom-color: rgba(102, 69, 204, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 69, 204, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 69, 204, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 69, 204, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 184, 30, 25;
  background-color: rgba(184, 30, 25, 0.1);
  border-bottom-color: rgba(184, 30, 25, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(184, 30, 25, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(184, 30, 25, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(184, 30, 25, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="question"] {
  --callout-color: 237, 96, 2;
  background-color: rgba(237, 96, 2, 0.1);
  border-bottom-color: rgba(237, 96, 2, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(237, 96, 2, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(237, 96, 2, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(237, 96, 2, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgba(158, 158, 158, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="success"] {
  --callout-color: 5, 144, 61;
  background-color: rgba(5, 144, 61, 0.1);
  border-bottom-color: rgba(5, 144, 61, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(5, 144, 61, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(5, 144, 61, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(5, 144, 61, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-color: rgba(0, 191, 188, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.5);
  border-top-width: 1px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 237, 96, 2;
  background-color: rgba(237, 96, 2, 0.1);
  border-bottom-color: rgba(237, 96, 2, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(237, 96, 2, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(237, 96, 2, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(237, 96, 2, 0.5);
  border-top-width: 1px;
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
  background-color: rgb(253, 246, 227);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(40, 40, 40, 0.08);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 246, 227);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(40, 40, 40, 0.08);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(40, 40, 40, 0.08);
}

html body h1 {
  color: rgb(15, 71, 97);
}

html body h2 {
  color: rgb(18, 89, 122);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(0, 0, 0);
}

html body h3 {
  color: rgb(22, 108, 148);
}

html body h4 {
  color: rgb(26, 126, 173);
}

html body h5 {
  color: rgb(30, 145, 199);
}

html body h6 {
  color: rgb(34, 164, 224);
}`,
    scrollbars: `html body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.5);
  border-top-width: 1px;
}

html body ::-webkit-scrollbar {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html body ::-webkit-scrollbar-track {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}`,
    explorer: `html body .explorer .folder-outer > ul {
  border-left-color: rgba(40, 40, 40, 0.12);
  border-left-width: 2px;
}`,
    footer: `html body footer {
  background-color: rgb(253, 246, 227);
}`,
    misc: `html body .navigation-progress {
  background-color: rgb(253, 246, 227);
}

html body kbd {
  background-color: rgb(253, 246, 227);
}`,
  },
};
