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
  --background-primary: #1c1c1c;
  --background-primary-alt: #1c1c1c;
  --background-secondary: #1c1c1c;
  --background-secondary-alt: #1c1c1c;
  --bases-cards-background: #1c1c1c;
  --bases-cards-cover-background: #1c1c1c;
  --bases-table-cell-background-active: #1c1c1c;
  --bases-table-cell-background-disabled: #1c1c1c;
  --bases-table-group-background: #1c1c1c;
  --bases-table-header-background: #1c1c1c;
  --bases-table-summary-background: #1c1c1c;
  --blockquote-background-color: color-mix(
		in oklab,
		#909090 3%,
		transparent
	);
  --blockquote-font-style: italic;
  --bold-color: #e34234;
  --canvas-background: #1c1c1c;
  --caret-color: #909090;
  --checkbox-color: #00ac5a;
  --checkbox-marker-color: #000000;
  --checkbox-radius: 100px;
  --checklist-done-color: color-mix(
		in oklab,
		#909090 60%,
		transparent
	);
  --code-background: #1c1c1c;
  --code-normal: #d8d2c9;
  --color-black: #000000;
  --color-black-board: #1c1c1c;
  --color-crescent-moon: #d8d2c9;
  --color-havelock-blue: #5590d9;
  --color-moon-gray: #909090;
  --color-moon-gray-03: color-mix(
		in oklab,
		#909090 3%,
		transparent
	);
  --color-moon-gray-06: color-mix(
		in oklab,
		#909090 6%,
		transparent
	);
  --color-moon-gray-08: color-mix(
		in oklab,
		#909090 8%,
		transparent
	);
  --color-moon-gray-16: color-mix(
		in oklab,
		#909090 16%,
		transparent
	);
  --color-moon-gray-60: color-mix(
		in oklab,
		#909090 60%,
		transparent
	);
  --color-moon-white: #f4f6f0;
  --color-muslim-green: #00ac5a;
  --color-vermillion-red: #e34234;
  --color-vermillion-red-30: color-mix(
		in oklab,
		#e34234 30%,
		transparent
	);
  --color-vermillion-red-70: color-mix(
		in oklab,
		#e34234 70%,
		transparent
	);
  --divider-color-hover: color-mix(
		in oklab,
		#e34234 30%,
		transparent
	);
  --file-header-background: #1c1c1c;
  --file-header-background-focused: #1c1c1c;
  --file-line-width: 65ch;
  --flair-color: #909090;
  --footnote-line-height: 1.6;
  --graph-text: #909090;
  --h1-color: #f4f6f0;
  --h2-color: #f4f6f0;
  --h3-color: #f4f6f0;
  --h4-color: #f4f6f0;
  --h5-color: #f4f6f0;
  --h5-line-height: 1.6;
  --h6-color: #f4f6f0;
  --h6-line-height: 1.6;
  --icon-color-focused: #909090;
  --inline-title-color: #f4f6f0;
  --line-height-normal: 1.6;
  --link-color: #5590d9;
  --link-external-color: #5590d9;
  --link-unresolved-color: #5590d9;
  --menu-background: #1c1c1c;
  --metadata-input-text-color: #909090;
  --modal-background: #1c1c1c;
  --nav-heading-color: #909090;
  --nav-heading-color-hover: #909090;
  --nav-item-background-active: color-mix(
		in oklab,
		#909090 6%,
		transparent
	);
  --nav-item-color-active: #d8d2c9;
  --nav-item-color-hover: #909090;
  --nav-item-color-selected: #909090;
  --pdf-background: #1c1c1c;
  --pdf-page-background: #1c1c1c;
  --pdf-sidebar-background: #1c1c1c;
  --pill-color-hover: #909090;
  --prompt-background: #1c1c1c;
  --ribbon-background: #1c1c1c;
  --ribbon-background-collapsed: #1c1c1c;
  --search-result-background: #1c1c1c;
  --setting-group-heading-color: #909090;
  --setting-items-background: #1c1c1c;
  --status-bar-background: #1c1c1c;
  --suggestion-background: #1c1c1c;
  --tab-background-active: transparent;
  --tab-container-background: #1c1c1c;
  --tab-switcher-background: #1c1c1c;
  --tab-switcher-menubar-background: linear-gradient(to top, #1c1c1c, transparent);
  --tab-text-color-focused-active-current: #d8d2c9;
  --table-header-color: #909090;
  --tag-background: color-mix(
		in oklab,
		#909090 8%,
		transparent
	);
  --tag-color: #d8d2c9;
  --tag-radius: 4px;
  --text-normal: #909090;
  --titlebar-background: #1c1c1c;
  --titlebar-background-focused: #1c1c1c;
  --titlebar-text-color-focused: #909090;
  --vault-profile-color: #909090;
  --vault-profile-color-hover: #909090;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 28, 28);
  color: rgb(144, 144, 144);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
  color: rgb(144, 144, 144);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 28, 28);
  color: rgb(144, 144, 144);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 28, 28);
  color: rgb(144, 144, 144);
}

body div#quartz-root {
  background-color: rgb(28, 28, 28);
  color: rgb(144, 144, 144);
}`,
    typography: `body .page article p > b, b {
  color: rgb(227, 66, 52);
  font-weight: 400;
  outline: rgb(227, 66, 52) none 0px;
  text-decoration: rgb(227, 66, 52);
  text-decoration-color: rgb(227, 66, 52);
}

body .page article p > em, em {
  color: rgb(144, 144, 144);
  outline: rgb(144, 144, 144) none 0px;
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body .page article p > i, i {
  color: rgb(144, 144, 144);
  outline: rgb(144, 144, 144) none 0px;
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body .page article p > strong, strong {
  color: rgb(227, 66, 52);
  font-weight: 400;
  outline: rgb(227, 66, 52) none 0px;
  text-decoration: rgb(227, 66, 52);
  text-decoration-color: rgb(227, 66, 52);
}

body .text-highlight {
  background-color: oklab(0.612855 0.174666 0.0973952 / 0.3);
  color: rgb(244, 246, 240);
  outline: rgb(244, 246, 240) none 0px;
  text-decoration: rgb(244, 246, 240);
  text-decoration-color: rgb(244, 246, 240);
}

body del {
  color: rgb(144, 144, 144);
  outline: rgb(144, 144, 144) none 0px;
  text-decoration: line-through rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}`,
    links: `body a.external, footer a {
  color: rgb(85, 144, 217);
  outline: rgb(85, 144, 217) none 0px;
  text-decoration: underline rgb(85, 144, 217);
  text-decoration-color: rgb(85, 144, 217);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(85, 144, 217);
  outline: rgb(85, 144, 217) none 0px;
  text-decoration: underline rgb(85, 144, 217);
  text-decoration-color: rgb(85, 144, 217);
}

body a.internal.broken {
  color: rgb(85, 144, 217);
  outline: rgb(85, 144, 217) none 0px;
}`,
    lists: `body dd {
  color: rgb(144, 144, 144);
}

body dt {
  color: rgb(144, 144, 144);
}

body ol > li {
  color: rgb(144, 144, 144);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body ul > li {
  color: rgb(144, 144, 144);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    blockquotes: `body blockquote {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.03);
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body table {
  color: rgb(144, 144, 144);
}

body td {
  color: rgb(144, 144, 144);
}

body th {
  color: rgb(144, 144, 144);
}`,
    code: `body code {
  border-bottom-color: rgb(216, 210, 201);
  border-left-color: rgb(216, 210, 201);
  border-right-color: rgb(216, 210, 201);
  border-top-color: rgb(216, 210, 201);
  color: rgb(216, 210, 201);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.06);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.06);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(144, 144, 144);
}

body pre > code, pre:has(> code) {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.06);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.06);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body figcaption {
  color: rgb(144, 144, 144);
}

body figure {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body img {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body video {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    embeds: `body .file-embed {
  background-color: rgb(28, 28, 28);
}

body .footnotes {
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

body .transclude {
  border-bottom-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body .transclude-inner {
  border-bottom-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: oklab(0.653293 0.0000298917 0.0000130534 / 0.6);
  text-decoration: line-through oklab(0.653293 0.0000298917 0.0000130534 / 0.6);
  text-decoration-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.6);
}

body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='*'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='-'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='/'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='>'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='?'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='I'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='S'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='b'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='c'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='d'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='f'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='i'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='k'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='l'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='p'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='u'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='w'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  color: rgb(144, 144, 144);
}

body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
}

body .search > .search-container > .search-space > * {
  color: rgb(144, 144, 144);
  outline: rgb(144, 144, 144) none 0px;
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(144, 144, 144);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(144, 144, 144);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(144, 144, 144);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 28, 28);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(144, 144, 144);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.08);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(216, 210, 201);
}

body h1 {
  color: rgb(244, 246, 240);
}

body h2 {
  color: rgb(244, 246, 240);
}

body h2.page-title, h2.page-title a {
  color: rgb(144, 144, 144);
}

body h3 {
  color: rgb(244, 246, 240);
}

body h4 {
  color: rgb(244, 246, 240);
}

body h5 {
  color: rgb(244, 246, 240);
}

body h6 {
  color: rgb(244, 246, 240);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: oklab(0.653293 0.0000298917 0.0000130534 / 0.06);
  border-bottom-color: rgb(216, 210, 201);
  border-left-color: rgb(216, 210, 201);
  border-right-color: rgb(216, 210, 201);
  border-top-color: rgb(216, 210, 201);
  color: rgb(216, 210, 201);
}`,
    footer: `body footer {
  background-color: rgb(28, 28, 28);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(144, 144, 144);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body ul.section-ul {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: oklab(0.612855 0.174666 0.0973952 / 0.7);
  border-left-color: oklab(0.612855 0.174666 0.0973952 / 0.7);
  border-right-color: oklab(0.612855 0.174666 0.0973952 / 0.7);
  border-top-color: oklab(0.612855 0.174666 0.0973952 / 0.7);
  color: oklab(0.612855 0.174666 0.0973952 / 0.7);
}

body .darkmode svg {
  color: oklab(0.612855 0.174666 0.0973952 / 0.7);
  stroke: oklab(0.612855 0.174666 0.0973952 / 0.7);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

body .metadata {
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

body .navigation-progress {
  background-color: rgb(28, 28, 28);
}

body .page-header h2.page-title {
  color: rgb(144, 144, 144);
}

body abbr {
  color: rgb(144, 144, 144);
  text-decoration: underline dotted rgb(144, 144, 144);
}

body details {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body kbd {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(216, 210, 201);
  border-left-color: rgb(216, 210, 201);
  border-right-color: rgb(216, 210, 201);
  border-top-color: rgb(216, 210, 201);
  color: rgb(216, 210, 201);
}

body progress {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body sub {
  color: rgb(144, 144, 144);
}

body summary {
  color: rgb(144, 144, 144);
}

body sup {
  color: rgb(144, 144, 144);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247);
  --blockquote-border-color: rgb(153, 115, 247);
  --bold-weight: 600;
  --callout-title-weight: 600;
  --checkbox-color: rgb(153, 115, 247);
  --checkbox-color-hover: rgb(166, 139, 249);
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --divider-color-hover: rgb(153, 115, 247);
  --embed-border-start: 2px solid rgb(153, 115, 247);
  --graph-node-focused: rgb(138, 92, 245);
  --heading-spacing: 2.5rem;
  --icon-color-active: rgb(138, 92, 245);
  --interactive-accent: rgb(153, 115, 247);
  --interactive-accent-hover: rgb(166, 139, 249);
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(166, 139, 249);
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(166, 139, 249);
  --link-unresolved-color: rgb(138, 92, 245);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --metadata-input-height: 28px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --pill-color-remove-hover: rgb(138, 92, 245);
  --sidebar-markdown-font-size: 14.4px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-drag-handle-background-active: rgb(153, 115, 247);
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(153, 115, 247);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: rgb(138, 92, 245);
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-selection: rgba(138, 92, 245, 0.2);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: none solid rgb(92, 92, 92);
}`,
  },
};
