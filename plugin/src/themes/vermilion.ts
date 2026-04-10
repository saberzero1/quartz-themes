import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vermilion",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #1c1c1c !important;
  --background-primary-alt: #1c1c1c !important;
  --background-secondary: #1c1c1c !important;
  --background-secondary-alt: #1c1c1c !important;
  --bases-cards-background: #1c1c1c !important;
  --bases-cards-cover-background: #1c1c1c !important;
  --bases-table-cell-background-active: #1c1c1c !important;
  --bases-table-cell-background-disabled: #1c1c1c !important;
  --bases-table-group-background: #1c1c1c !important;
  --bases-table-header-background: #1c1c1c !important;
  --bases-table-summary-background: #1c1c1c !important;
  --blockquote-background-color: color-mix(
		in oklab,
		#909090 3%,
		transparent
	) !important;
  --blockquote-font-style: italic !important;
  --bold-color: #e34234 !important;
  --canvas-background: #1c1c1c !important;
  --caret-color: #909090 !important;
  --checkbox-color: #00ac5a !important;
  --checkbox-marker-color: #000000 !important;
  --checkbox-radius: 100px !important;
  --checklist-done-color: color-mix(
		in oklab,
		#909090 60%,
		transparent
	) !important;
  --code-background: #1c1c1c !important;
  --code-normal: #d8d2c9 !important;
  --color-black: #000000 !important;
  --color-black-board: #1c1c1c !important;
  --color-crescent-moon: #d8d2c9 !important;
  --color-havelock-blue: #5590d9 !important;
  --color-moon-gray: #909090 !important;
  --color-moon-gray-03: color-mix(
		in oklab,
		#909090 3%,
		transparent
	) !important;
  --color-moon-gray-06: color-mix(
		in oklab,
		#909090 6%,
		transparent
	) !important;
  --color-moon-gray-08: color-mix(
		in oklab,
		#909090 8%,
		transparent
	) !important;
  --color-moon-gray-16: color-mix(
		in oklab,
		#909090 16%,
		transparent
	) !important;
  --color-moon-gray-60: color-mix(
		in oklab,
		#909090 60%,
		transparent
	) !important;
  --color-moon-white: #f4f6f0 !important;
  --color-muslim-green: #00ac5a !important;
  --color-vermillion-red: #e34234 !important;
  --color-vermillion-red-30: color-mix(
		in oklab,
		#e34234 30%,
		transparent
	) !important;
  --color-vermillion-red-70: color-mix(
		in oklab,
		#e34234 70%,
		transparent
	) !important;
  --dark: #909090 !important;
  --darkgray: #909090 !important;
  --divider-color-hover: color-mix(
		in oklab,
		#e34234 30%,
		transparent
	) !important;
  --file-header-background: #1c1c1c !important;
  --file-header-background-focused: #1c1c1c !important;
  --file-line-width: 65ch !important;
  --flair-color: #909090 !important;
  --footnote-line-height: 1.6 !important;
  --graph-text: #909090 !important;
  --gray: #909090 !important;
  --h1-color: #f4f6f0 !important;
  --h2-color: #f4f6f0 !important;
  --h3-color: #f4f6f0 !important;
  --h4-color: #f4f6f0 !important;
  --h5-color: #f4f6f0 !important;
  --h5-line-height: 1.6 !important;
  --h6-color: #f4f6f0 !important;
  --h6-line-height: 1.6 !important;
  --icon-color-focused: #909090 !important;
  --inline-title-color: #f4f6f0 !important;
  --light: #1c1c1c !important;
  --lightgray: #1c1c1c !important;
  --line-height-normal: 1.6 !important;
  --link-color: #5590d9 !important;
  --link-external-color: #5590d9 !important;
  --link-unresolved-color: #5590d9 !important;
  --menu-background: #1c1c1c !important;
  --metadata-input-text-color: #909090 !important;
  --modal-background: #1c1c1c !important;
  --nav-heading-color: #909090 !important;
  --nav-heading-color-hover: #909090 !important;
  --nav-item-background-active: color-mix(
		in oklab,
		#909090 6%,
		transparent
	) !important;
  --nav-item-color-active: #d8d2c9 !important;
  --nav-item-color-hover: #909090 !important;
  --nav-item-color-selected: #909090 !important;
  --pdf-background: #1c1c1c !important;
  --pdf-page-background: #1c1c1c !important;
  --pdf-sidebar-background: #1c1c1c !important;
  --pill-color-hover: #909090 !important;
  --prompt-background: #1c1c1c !important;
  --ribbon-background: #1c1c1c !important;
  --ribbon-background-collapsed: #1c1c1c !important;
  --search-result-background: #1c1c1c !important;
  --setting-group-heading-color: #909090 !important;
  --setting-items-background: #1c1c1c !important;
  --status-bar-background: #1c1c1c !important;
  --suggestion-background: #1c1c1c !important;
  --tab-background-active: transparent !important;
  --tab-container-background: #1c1c1c !important;
  --tab-switcher-background: #1c1c1c !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1c1c1c, transparent) !important;
  --tab-text-color-focused-active-current: #d8d2c9 !important;
  --table-header-color: #909090 !important;
  --tag-background: color-mix(
		in oklab,
		#909090 8%,
		transparent
	) !important;
  --tag-color: #d8d2c9 !important;
  --tag-radius: 4px !important;
  --text-normal: #909090 !important;
  --titlebar-background: #1c1c1c !important;
  --titlebar-background-focused: #1c1c1c !important;
  --titlebar-text-color-focused: #909090 !important;
  --vault-profile-color: #909090 !important;
  --vault-profile-color-hover: #909090 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 28, 28);
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(28, 28, 28);
  border-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .note-properties {
  background-color: oklab(0.653347 0.0000296831 0.0000130534 / 0.03);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: oklab(0.653347 0.0000296831 0.0000130534 / 0.08);
  border-radius: 4px;
  color: rgb(216, 210, 201);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 28, 28);
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 28, 28);
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(28, 28, 28);
  color: rgb(144, 144, 144);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(227, 66, 52);
  font-weight: 400;
  outline: rgb(227, 66, 52) none 0px;
  text-decoration-color: rgb(227, 66, 52);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(144, 144, 144);
  outline: rgb(144, 144, 144) none 0px;
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(144, 144, 144);
  outline: rgb(144, 144, 144) none 0px;
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(227, 66, 52);
  font-weight: 400;
  outline: rgb(227, 66, 52) none 0px;
  text-decoration-color: rgb(227, 66, 52);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: oklab(0.612904 0.174681 0.0974053 / 0.3);
  color: rgb(244, 246, 240);
  outline: rgb(244, 246, 240) none 0px;
  text-decoration-color: rgb(244, 246, 240);
}

html[saved-theme="dark"] body del {
  color: rgb(144, 144, 144);
  outline: rgb(144, 144, 144) none 0px;
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 100px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 172, 90);
  border-color: rgb(0, 172, 90);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(85, 144, 217);
  outline: rgb(85, 144, 217) none 0px;
  text-decoration-color: rgb(85, 144, 217);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(85, 144, 217);
  outline: rgb(85, 144, 217) none 0px;
  text-decoration-color: rgb(85, 144, 217);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(85, 144, 217);
  outline: rgb(85, 144, 217) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body dt {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: oklab(0.653347 0.0000296831 0.0000130534 / 0.03);
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body table {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body td {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body th {
  color: rgb(144, 144, 144);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(216, 210, 201);
  border-left-color: rgb(216, 210, 201);
  border-right-color: rgb(216, 210, 201);
  border-top-color: rgb(216, 210, 201);
  color: rgb(216, 210, 201);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklab(0.653347 0.0000296831 0.0000130534 / 0.06);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklab(0.653347 0.0000296831 0.0000130534 / 0.06);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: oklab(0.653347 0.0000296831 0.0000130534 / 0.06);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: oklab(0.653347 0.0000296831 0.0000130534 / 0.06);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(244, 246, 240);
  border-left-color: rgb(244, 246, 240);
  border-right-color: rgb(244, 246, 240);
  border-top-color: rgb(244, 246, 240);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(144, 144, 144);
  outline: rgb(144, 144, 144) none 0px;
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 28, 28);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklab(0.653347 0.0000296831 0.0000130534 / 0.08);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(216, 210, 201);
}

html[saved-theme="dark"] body h1 {
  color: rgb(244, 246, 240);
}

html[saved-theme="dark"] body h2 {
  color: rgb(244, 246, 240);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body h3 {
  color: rgb(244, 246, 240);
}

html[saved-theme="dark"] body h4 {
  color: rgb(244, 246, 240);
}

html[saved-theme="dark"] body h5 {
  color: rgb(244, 246, 240);
}

html[saved-theme="dark"] body h6 {
  color: rgb(244, 246, 240);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(144, 144, 144);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(28, 28, 28);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklab(0.612904 0.174681 0.0974053 / 0.7);
  border-left-color: oklab(0.612904 0.174681 0.0974053 / 0.7);
  border-right-color: oklab(0.612904 0.174681 0.0974053 / 0.7);
  border-top-color: oklab(0.612904 0.174681 0.0974053 / 0.7);
  color: oklab(0.612904 0.174681 0.0974053 / 0.7);
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklab(0.612904 0.174681 0.0974053 / 0.7);
  stroke: oklab(0.612904 0.174681 0.0974053 / 0.7);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .metadata {
  background-color: oklab(0.653347 0.0000296831 0.0000130534 / 0.03);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-top: 32px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body abbr {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(216, 210, 201);
  border-left-color: rgb(216, 210, 201);
  border-right-color: rgb(216, 210, 201);
  border-top-color: rgb(216, 210, 201);
  color: rgb(216, 210, 201);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body sub {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body summary {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body sup {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: oklab(0.653347 0.0000296831 0.0000130534 / 0.08);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(216, 210, 201);
}`,
  },
  light: {
    base: `:root:root {
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
  },
};
