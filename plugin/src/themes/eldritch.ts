import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "eldritch", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 135 !important;
  --accent-l: 65% !important;
  --accent-s: 94% !important;
  --background-modifier-active-hover: hsla(135, 94%, 65%, 0.1) !important;
  --background-primary: #212337 !important;
  --background-primary-alt: #323449 !important;
  --background-secondary: rgb(29, 33, 40) !important;
  --background-secondary-alt: rgb(44, 46, 57) !important;
  --bases-cards-background: #212337 !important;
  --bases-cards-cover-background: #323449 !important;
  --bases-group-heading-property-color: #bababa !important;
  --bases-table-cell-background-active: #212337 !important;
  --bases-table-cell-background-disabled: #323449 !important;
  --bases-table-cell-background-selected: hsla(135, 94%, 65%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #37f499 !important;
  --bases-table-group-background: #323449 !important;
  --bases-table-header-background: #212337 !important;
  --bases-table-header-color: #bababa !important;
  --bases-table-summary-background: #212337 !important;
  --blockquote-border: #7081d0 !important;
  --blockquote-border-color: #37f499 !important;
  --canvas-background: #212337 !important;
  --canvas-color-1: 255, 85, 85 !important;
  --canvas-color-2: 255, 184, 108 !important;
  --canvas-color-3: 241, 250, 140 !important;
  --canvas-color-4: 82, 250, 124 !important;
  --canvas-color-5: 139, 233, 253 !important;
  --canvas-color-6: 189, 147, 244 !important;
  --caret-color: #ebfafa !important;
  --checkbox-border-color-hover: #bababa !important;
  --checkbox-color: #37f499 !important;
  --checkbox-color-hover: hsl(
		135,
		94%,
		61.2%
	) !important;
  --checkbox-marker-color: #212337 !important;
  --checklist-done-color: #bababa !important;
  --code-background: #282a36 !important;
  --code-normal: #ebfafa !important;
  --code-punctuation: #bababa !important;
  --collapse-icon-color-collapsed: hsl(
		135,
		94%,
		61.2%
	) !important;
  --color-accent: hsl(135, 94%, 65%) !important;
  --color-accent-1: hsl(
		135,
		94%,
		61.2%
	) !important;
  --color-accent-2: hsl(
		135,
		94%,
		68.8%
	) !important;
  --color-accent-hsl: 135, 94%, 65% !important;
  --color-base-70: #bababa !important;
  --color-scheme: dark !important;
  --dark: #ebfafa !important;
  --darkgray: #ebfafa !important;
  --divider-color-hover: #37f499 !important;
  --eldritch-Comment: #7081d0 !important;
  --eldritch-definition: #37f499 !important;
  --eldritch-foreground: #ebfafa !important;
  --eldritch-function: #a48cf2 !important;
  --eldritch-keyword: #ff79c6 !important;
  --eldritch-number: #04d1f9 !important;
  --eldritch-string: #f1fc79 !important;
  --eldritch-variable: #ebfafa !important;
  --embed-border-start: 2px solid #37f499 !important;
  --file-header-background: #212337 !important;
  --file-header-background-focused: #212337 !important;
  --flair-color: #ebfafa !important;
  --footnote-id-color: #bababa !important;
  --graph-node: #bababa !important;
  --graph-node-focused: hsl(
		135,
		94%,
		61.2%
	) !important;
  --graph-text: #ebfafa !important;
  --gray: #bababa !important;
  --highlight: hsla(135, 94%, 65%, 0.1) !important;
  --icon-color: #bababa !important;
  --icon-color-active: hsl(
		135,
		94%,
		61.2%
	) !important;
  --icon-color-focused: #ebfafa !important;
  --icon-color-hover: #bababa !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
		0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),
		0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
		0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2),
		0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent !important;
  --interactive-accent: #37f499 !important;
  --interactive-accent-hover: hsl(
		135,
		94%,
		61.2%
	) !important;
  --interactive-accent-hsl: 135, 94%, 65% !important;
  --interactive-accent-rgb: #f1fc79 !important;
  --light: #212337 !important;
  --lightgray: rgb(29, 33, 40) !important;
  --link-color: hsl(
		135,
		94%,
		61.2%
	) !important;
  --link-color-hover: hsl(
		135,
		94%,
		68.8%
	) !important;
  --link-external-color: hsl(
		135,
		94%,
		61.2%
	) !important;
  --link-external-color-hover: hsl(
		135,
		94%,
		68.8%
	) !important;
  --link-unresolved-color: hsl(
		135,
		94%,
		61.2%
	) !important;
  --link-unresolved-decoration-color: hsla(135, 94%, 65%, 0.3) !important;
  --list-marker-color-collapsed: hsl(
		135,
		94%,
		61.2%
	) !important;
  --list-marker-color-hover: #bababa !important;
  --markup-code: #f7c67f !important;
  --menu-background: rgb(29, 33, 40) !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-input-text-color: #ebfafa !important;
  --metadata-label-text-color: #bababa !important;
  --metadata-label-text-color-hover: #bababa !important;
  --modal-background: #212337 !important;
  --nav-heading-color: #ebfafa !important;
  --nav-heading-color-collapsed-hover: #bababa !important;
  --nav-heading-color-hover: #ebfafa !important;
  --nav-item-background-selected: hsla(135, 94%, 65%, 0.15) !important;
  --nav-item-color: #bababa !important;
  --nav-item-color-active: #ebfafa !important;
  --nav-item-color-highlighted: hsl(
		135,
		94%,
		61.2%
	) !important;
  --nav-item-color-hover: #ebfafa !important;
  --nav-item-color-selected: #ebfafa !important;
  --nav-tag-color-active: #bababa !important;
  --nav-tag-color-hover: #bababa !important;
  --pdf-background: #212337 !important;
  --pdf-page-background: #212337 !important;
  --pdf-sidebar-background: #212337 !important;
  --pill-color: #bababa !important;
  --pill-color-hover: #ebfafa !important;
  --pill-color-remove-hover: hsl(
		135,
		94%,
		61.2%
	) !important;
  --prompt-background: #212337 !important;
  --ribbon-background: rgb(29, 33, 40) !important;
  --ribbon-background-collapsed: #212337 !important;
  --search-clear-button-color: #bababa !important;
  --search-icon-color: #bababa !important;
  --search-result-background: #212337 !important;
  --secondary: hsl(
		135,
		94%,
		61.2%
	) !important;
  --setting-group-heading-color: #ebfafa !important;
  --setting-items-background: #323449 !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --status-bar-background: rgb(29, 33, 40) !important;
  --status-bar-text-color: #bababa !important;
  --suggestion-background: #212337 !important;
  --tab-background-active: #212337 !important;
  --tab-container-background: rgb(29, 33, 40) !important;
  --tab-switcher-background: rgb(29, 33, 40) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(29, 33, 40), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(135, 94%, 65%) !important;
  --tab-text-color-active: #bababa !important;
  --tab-text-color-focused: #bababa !important;
  --tab-text-color-focused-active: #bababa !important;
  --tab-text-color-focused-active-current: #ebfafa !important;
  --tab-text-color-focused-highlighted: hsl(
		135,
		94%,
		61.2%
	) !important;
  --table-drag-handle-background-active: #37f499 !important;
  --table-drag-handle-color-active: #323449 !important;
  --table-header-color: #ebfafa !important;
  --table-selection: hsla(135, 94%, 65%, 0.1) !important;
  --table-selection-border-color: #37f499 !important;
  --tag-background: hsla(135, 94%, 65%, 0.1) !important;
  --tag-background-hover: hsla(135, 94%, 65%, 0.2) !important;
  --tag-border-color: hsla(135, 94%, 65%, 0.15) !important;
  --tag-border-color-hover: hsla(135, 94%, 65%, 0.15) !important;
  --tag-color: hsl(
		135,
		94%,
		61.2%
	) !important;
  --tag-color-hover: hsl(
		135,
		94%,
		61.2%
	) !important;
  --tertiary: hsl(
		135,
		94%,
		68.8%
	) !important;
  --text-a: #f265b5 !important;
  --text-a-hover: #f265b5 !important;
  --text-accent: hsl(
		135,
		94%,
		61.2%
	) !important;
  --text-accent-hover: hsl(
		135,
		94%,
		68.8%
	) !important;
  --text-link: hsl(
		135,
		94%,
		61.2%
	) !important;
  --text-mark: #f1fc79 !important;
  --text-muted: #bababa !important;
  --text-normal: #ebfafa !important;
  --text-on-accent: #323449 !important;
  --text-selection: hsla(135, 94%, 65%, 0.25) !important;
  --text-tag: #37f499 !important;
  --text-title-h1: #37f499 !important;
  --text-title-h2: #04d1f9 !important;
  --text-title-h3: #a48cf2 !important;
  --text-title-h4: #f16c75 !important;
  --text-title-h5: #f1fc79 !important;
  --text-title-h6: #f265b5 !important;
  --textHighlight: hsla(135, 94%, 65%, 0.1) !important;
  --titlebar-background: rgb(29, 33, 40) !important;
  --titlebar-background-focused: rgb(44, 46, 57) !important;
  --titlebar-text-color: #bababa !important;
  --titlebar-text-color-focused: #ebfafa !important;
  --vault-profile-color: #ebfafa !important;
  --vault-profile-color-hover: #ebfafa !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 33, 40);
  color: rgb(235, 250, 250);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(33, 35, 55);
  color: rgb(235, 250, 250);
}

html body .bases-table thead th {
  border-color: rgb(50, 52, 73);
  color: rgb(235, 250, 250);
}

html body .canvas-node {
  border-color: rgb(235, 250, 250);
}

html body .canvas-node-content {
  color: rgb(235, 250, 250);
}

html body .canvas-node-file {
  color: rgb(235, 250, 250);
}

html body .canvas-node-group {
  border-color: rgb(235, 250, 250);
}

html body .canvas-sidebar {
  background-color: rgb(29, 33, 40);
  border-color: rgb(235, 250, 250);
}

html body .note-properties-key {
  color: rgb(186, 186, 186);
}

html body .note-properties-row {
  border-color: rgb(186, 186, 186);
}

html body .note-properties-tags {
  background-color: rgba(82, 250, 124, 0.1);
  color: rgb(63, 249, 110);
}

html body .note-properties-value {
  color: rgb(186, 186, 186);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 33, 40);
  color: rgb(235, 250, 250);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 33, 40);
  color: rgb(235, 250, 250);
}

html body div#quartz-root {
  background-color: rgb(33, 35, 55);
  color: rgb(235, 250, 250);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(247, 198, 127);
  outline: rgb(247, 198, 127) none 0px;
  text-decoration-color: rgb(247, 198, 127);
}

html body .page article p > em, html em {
  color: rgb(55, 244, 153);
  outline: rgb(55, 244, 153) none 0px;
  text-decoration-color: rgb(55, 244, 153);
}

html body .page article p > i, html i {
  color: rgb(55, 244, 153);
  outline: rgb(55, 244, 153) none 0px;
  text-decoration-color: rgb(55, 244, 153);
}

html body .page article p > strong, html strong {
  color: rgb(247, 198, 127);
  outline: rgb(247, 198, 127) none 0px;
  text-decoration-color: rgb(247, 198, 127);
}

html body .text-highlight {
  background-color: rgb(50, 52, 73);
  color: rgb(63, 249, 110);
  outline: rgb(63, 249, 110) none 0px;
  text-decoration-color: rgb(63, 249, 110);
}

html body del {
  color: rgb(235, 250, 250);
  outline: rgb(235, 250, 250) none 0px;
  text-decoration-color: rgb(235, 250, 250);
}

html body h1.article-title {
  color: rgb(235, 250, 250);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(55, 244, 153);
  border-color: rgb(55, 244, 153);
}

html body p {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}`,
    links: `html body a.external, html footer a {
  color: rgb(63, 249, 110);
  outline: rgb(63, 249, 110) none 0px;
  text-decoration-color: rgb(63, 249, 110);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(63, 249, 110);
  outline: rgb(63, 249, 110) none 0px;
  text-decoration-color: rgb(63, 249, 110);
}

html body a.internal.broken {
  color: rgb(63, 249, 110);
  outline: rgb(63, 249, 110) none 0px;
  text-decoration: underline rgba(82, 250, 124, 0.3);
  text-decoration-color: rgba(82, 250, 124, 0.3);
}`,
    lists: `html body dd {
  color: rgb(235, 250, 250);
}

html body dt {
  color: rgb(235, 250, 250);
}

html body ol > li {
  color: rgb(235, 250, 250);
}

html body ol.overflow {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

html body ul > li {
  color: rgb(235, 250, 250);
}

html body ul.overflow {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

html body table {
  color: rgb(235, 250, 250);
}

html body td {
  border-bottom-color: rgb(50, 52, 73);
  border-left-color: rgb(50, 52, 73);
  border-right-color: rgb(50, 52, 73);
  border-top-color: rgb(50, 52, 73);
  color: rgb(235, 250, 250);
}

html body th {
  border-bottom-color: rgb(50, 52, 73);
  border-left-color: rgb(50, 52, 73);
  border-right-color: rgb(50, 52, 73);
  border-top-color: rgb(50, 52, 73);
  color: rgb(235, 250, 250);
}

html body thead {
  border-bottom-color: rgb(50, 52, 73);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

html body tr {
  border-bottom-color: rgb(50, 52, 73);
}`,
    code: `html body code {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 42, 54);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 42, 54);
  color: rgb(235, 250, 250);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(40, 42, 54);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgb(40, 42, 54);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

html body figcaption {
  color: rgb(235, 250, 250);
}

html body figure {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

html body img {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

html body video {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(50, 52, 73);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html body .footnotes {
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
}

html body .transclude {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(55, 244, 153);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  padding-left: 8px;
  padding-right: 4px;
}

html body .transclude-inner {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  margin-left: 8px;
  margin-right: 4px;
  padding-left: 8px;
  padding-right: 4px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  margin-right: 0px;
  width: 16.6562px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
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
  color: rgb(235, 250, 250);
}

html body .search > .search-container > .search-space {
  background-color: rgb(33, 35, 55);
}

html body .search > .search-container > .search-space > * {
  color: rgb(235, 250, 250);
  outline: rgb(235, 250, 250) none 0px;
  text-decoration-color: rgb(235, 250, 250);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 250, 250);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(235, 250, 250);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(112, 129, 208);
  color: rgb(235, 250, 250);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 33, 40);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(112, 129, 208);
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(112, 129, 208);
  color: rgb(235, 250, 250);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(82, 250, 124, 0.1);
  border-bottom-color: rgba(82, 250, 124, 0.15);
  border-left-color: rgba(82, 250, 124, 0.15);
  border-right-color: rgba(82, 250, 124, 0.15);
  border-top-color: rgba(82, 250, 124, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(63, 249, 110);
}

html body h1 {
  color: rgb(55, 244, 153);
}

html body h2 {
  color: rgb(4, 209, 249);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(235, 250, 250);
}

html body h3 {
  color: rgb(164, 140, 242);
}

html body h4 {
  color: rgb(241, 108, 117);
}

html body h5 {
  color: rgb(241, 252, 121);
}

html body h6 {
  color: rgb(242, 101, 181);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
}

html body ::-webkit-scrollbar-track {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 186, 186);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 186, 186);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(235, 250, 250);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    footer: `html body footer {
  background-color: rgb(44, 46, 57);
  color: rgb(186, 186, 186);
}

html body footer ul li a {
  color: rgb(186, 186, 186);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(235, 250, 250);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 186, 186);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

html body li.section-li > .section .meta {
  color: rgb(186, 186, 186);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
}

html body ul.section-ul {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body .darkmode svg {
  color: rgb(186, 186, 186);
  stroke: rgb(186, 186, 186);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
}

html body .metadata {
  color: rgb(186, 186, 186);
}

html body .metadata-properties {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body .navigation-progress {
  background-color: rgb(44, 46, 57);
}

html body .page-header h2.page-title {
  color: rgb(235, 250, 250);
}

html body abbr {
  color: rgb(235, 250, 250);
}

html body details {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

html body input[type=text] {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body kbd {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
}

html body progress {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

html body sub {
  color: rgb(235, 250, 250);
}

html body summary {
  color: rgb(235, 250, 250);
}

html body sup {
  color: rgb(235, 250, 250);
}

html body ul.tags > li {
  background-color: rgba(82, 250, 124, 0.1);
  border-bottom-color: rgba(82, 250, 124, 0.15);
  border-left-color: rgba(82, 250, 124, 0.15);
  border-right-color: rgba(82, 250, 124, 0.15);
  border-top-color: rgba(82, 250, 124, 0.15);
  color: rgb(55, 244, 153);
}`,
  },
  light: {},
};
