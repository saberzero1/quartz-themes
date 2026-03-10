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
  text-decoration: rgb(227, 66, 52);
  text-decoration-color: rgb(227, 66, 52);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(144, 144, 144);
  outline: rgb(144, 144, 144) none 0px;
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(144, 144, 144);
  outline: rgb(144, 144, 144) none 0px;
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(227, 66, 52);
  font-weight: 400;
  outline: rgb(227, 66, 52) none 0px;
  text-decoration: rgb(227, 66, 52);
  text-decoration-color: rgb(227, 66, 52);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: oklab(0.612855 0.174666 0.0973952 / 0.3);
  color: rgb(244, 246, 240);
  outline: rgb(244, 246, 240) none 0px;
  text-decoration: rgb(244, 246, 240);
  text-decoration-color: rgb(244, 246, 240);
}

html[saved-theme="dark"] body del {
  color: rgb(144, 144, 144);
  outline: rgb(144, 144, 144) none 0px;
  text-decoration: line-through rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(85, 144, 217);
  outline: rgb(85, 144, 217) none 0px;
  text-decoration: underline rgb(85, 144, 217);
  text-decoration-color: rgb(85, 144, 217);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(85, 144, 217);
  outline: rgb(85, 144, 217) none 0px;
  text-decoration: underline rgb(85, 144, 217);
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.03);
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
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.06);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.06);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.06);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.06);
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
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
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
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: oklab(0.653293 0.0000298917 0.0000130534 / 0.6);
  text-decoration: line-through oklab(0.653293 0.0000298917 0.0000130534 / 0.6);
  text-decoration-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.6);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  text-decoration: rgb(144, 144, 144);
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
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.08);
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
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.06);
  border-bottom-color: rgb(216, 210, 201);
  border-left-color: rgb(216, 210, 201);
  border-right-color: rgb(216, 210, 201);
  border-top-color: rgb(216, 210, 201);
  color: rgb(216, 210, 201);
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
  border-bottom-color: oklab(0.612855 0.174666 0.0973952 / 0.7);
  border-left-color: oklab(0.612855 0.174666 0.0973952 / 0.7);
  border-right-color: oklab(0.612855 0.174666 0.0973952 / 0.7);
  border-top-color: oklab(0.612855 0.174666 0.0973952 / 0.7);
  color: oklab(0.612855 0.174666 0.0973952 / 0.7);
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklab(0.612855 0.174666 0.0973952 / 0.7);
  stroke: oklab(0.612855 0.174666 0.0973952 / 0.7);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

html[saved-theme="dark"] body .metadata {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.03);
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
  text-decoration: underline dotted rgb(144, 144, 144);
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
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247) !important;
  --blockquote-border-color: rgb(153, 115, 247) !important;
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
  --checkbox-color: rgb(153, 115, 247) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(153, 115, 247) !important;
  --color-accent-2: rgb(166, 139, 249) !important;
  --divider-color-hover: rgb(153, 115, 247) !important;
  --embed-border-start: 2px solid rgb(153, 115, 247) !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(138, 92, 245, 0.1) !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --interactive-accent: rgb(153, 115, 247) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-color-hover: rgb(166, 139, 249) !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-external-color-hover: rgb(166, 139, 249) !important;
  --link-unresolved-color: rgb(138, 92, 245) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(138, 92, 245) !important;
  --metadata-input-height: 28px !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(138, 92, 245) !important;
  --pill-color-remove-hover: rgb(138, 92, 245) !important;
  --secondary: rgb(138, 92, 245) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245) !important;
  --table-drag-handle-background-active: rgb(153, 115, 247) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(153, 115, 247) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(138, 92, 245) !important;
  --tag-color-hover: rgb(138, 92, 245) !important;
  --tertiary: rgb(166, 139, 249) !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-accent-hover: rgb(166, 139, 249) !important;
  --text-selection: rgba(138, 92, 245, 0.2) !important;
  --textHighlight: rgba(138, 92, 245, 0.1) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: none solid rgb(92, 92, 92);
}`,
  },
};
