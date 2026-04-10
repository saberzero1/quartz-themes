import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "al-dente",
    modes: ["light"],
    variations: [],
    fonts: ["nunito-sans", "courier-prime", "bitter"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --background-nav: #f6f6f4 !important;
  --background-nav-alt: #f6f6f4 !important;
  --background-primary: #f6f6f4 !important;
  --background-primary-alt: #f6f6f4 !important;
  --background-secondary: #f6f6f4 !important;
  --background-secondary-alt: #f6f6f4 !important;
  --bases-cards-background: #f6f6f4 !important;
  --bases-cards-cover-background: #f6f6f4 !important;
  --bases-table-cell-background-active: #f6f6f4 !important;
  --bases-table-cell-background-disabled: #f6f6f4 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #08b94e !important;
  --bases-table-group-background: #f6f6f4 !important;
  --bases-table-header-background: #f6f6f4 !important;
  --bases-table-summary-background: #f6f6f4 !important;
  --blockquote-border-color: #08b94e !important;
  --blur-background: color-mix(in srgb, #f6f6f4 65%, transparent) linear-gradient(#f6f6f4, color-mix(in srgb, #f6f6f4 65%, transparent)) !important;
  --canvas-background: #f6f6f4 !important;
  --canvas-card-label-color: #b6b5af !important;
  --caret-color: #3f3e3c !important;
  --checkbox-border-color: #b6b5af !important;
  --checkbox-color: #08b94e !important;
  --checkbox-color-hover: #08b94e !important;
  --checkbox-marker-color: #f6f6f4 !important;
  --code-background: #f6f6f4 !important;
  --code-block-background: #fff !important;
  --code-block-border: #b6b5af !important;
  --code-comment: #b6b5af !important;
  --code-normal: #3f3e3c !important;
  --collapse-icon-color: #b6b5af !important;
  --collapse-icon-color-collapsed: #08b94e !important;
  --color-accent: #08b94e !important;
  --color-accent-faded: #c4cd8e !important;
  --color-back: #f6f6f4 !important;
  --color-blue-accent: #086ddd !important;
  --color-blue-accent-faded: #8bd1dc !important;
  --color-blue-light: #17a2b8 !important;
  --color-blue-lightest: #8bd1dc !important;
  --color-dark: #3f3e3c !important;
  --color-front: #3f3e3c !important;
  --color-gray: #696966 !important;
  --color-gray-light: #b6b5af !important;
  --color-gray-lightest: #87837070 !important;
  --color-gray-lightest-fade: #8783703b !important;
  --color-green-light: #c4cd8e !important;
  --color-green-lightest: #d4dbad !important;
  --color-light: #f6f6f4 !important;
  --color-off: #b6b5af !important;
  --color-orange-light: #fc6e51 !important;
  --color-purple-light: #b19fb6 !important;
  --color-purple-lightest: #e1d6e2 !important;
  --color-red-light: #e74c3c !important;
  --color-red-lightest: #f3a69e !important;
  --color-yellow-light: #ffce54 !important;
  --color-yellow-lightest: #f9dda2c0 !important;
  --dark: #3f3e3c !important;
  --darkgray: #3f3e3c !important;
  --divider-color-hover: #08b94e !important;
  --embed-border-start: 2px solid #08b94e !important;
  --file-header-background: #f6f6f4 !important;
  --file-header-background-focused: #f6f6f4 !important;
  --flair-color: #3f3e3c !important;
  --font-family-editor: 'nunito sans', gotham, metropolis, prologue, manrope, inter, poppins,
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif !important;
  --font-title: "moranga", "matchbook regular", bitter, prompt,
    'nunito sans', gotham, metropolis, prologue, manrope, inter, poppins,
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif !important;
  --footnote-id-color-no-occurrences: #b6b5af !important;
  --graph-node-focused: #08b94e !important;
  --graph-node-unresolved: #b6b5af !important;
  --graph-text: #3f3e3c !important;
  --gray: #b6b5af !important;
  --heading-formatting: #b6b5af !important;
  --highlight: #d4dbad !important;
  --icon-color-active: #08b94e !important;
  --icon-color-focused: #3f3e3c !important;
  --input-date-separator: #b6b5af !important;
  --input-placeholder-color: #b6b5af !important;
  --interactive-accent: #08b94e !important;
  --interactive-accent-hover: #08b94e !important;
  --interactive-accent-rgb: #08b94e !important;
  --light: #f6f6f4 !important;
  --lightgray: #f6f6f4 !important;
  --link-color: #08b94e !important;
  --link-color-hover: #086ddd !important;
  --link-external-color: #08b94e !important;
  --link-external-color-hover: #086ddd !important;
  --link-unresolved-color: #08b94e !important;
  --list-color: #08b94e !important;
  --list-marker-color: #b6b5af !important;
  --list-marker-color-collapsed: #08b94e !important;
  --menu-background: #f6f6f4 !important;
  --metadata-input-text-color: #3f3e3c !important;
  --modal-background: #f6f6f4 !important;
  --nav-collapse-icon-color: #b6b5af !important;
  --nav-collapse-icon-color-collapsed: #b6b5af !important;
  --nav-heading-color: #3f3e3c !important;
  --nav-heading-color-collapsed: #b6b5af !important;
  --nav-heading-color-hover: #3f3e3c !important;
  --nav-item-color-active: #3f3e3c !important;
  --nav-item-color-highlighted: #08b94e !important;
  --nav-item-color-hover: #3f3e3c !important;
  --nav-item-color-selected: #3f3e3c !important;
  --nav-tag-color: #b6b5af !important;
  --pdf-background: #f6f6f4 !important;
  --pdf-page-background: #f6f6f4 !important;
  --pdf-sidebar-background: #f6f6f4 !important;
  --pill-color-hover: #3f3e3c !important;
  --pill-color-remove: #b6b5af !important;
  --pill-color-remove-hover: #08b94e !important;
  --prompt-background: #f6f6f4 !important;
  --raised-background: color-mix(in srgb, #f6f6f4 65%, transparent) linear-gradient(#f6f6f4, color-mix(in srgb, #f6f6f4 65%, transparent)) !important;
  --ribbon-background: #f6f6f4 !important;
  --ribbon-background-collapsed: #f6f6f4 !important;
  --search-result-background: #f6f6f4 !important;
  --secondary: #08b94e !important;
  --setting-group-heading-color: #3f3e3c !important;
  --setting-items-background: #f6f6f4 !important;
  --shadow: 1px 1px 2px #88888888 !important;
  --status-bar-background: #f6f6f4 !important;
  --suggestion-background: #f6f6f4 !important;
  --tab-background-active: #f6f6f4 !important;
  --tab-container-background: #f6f6f4 !important;
  --tab-switcher-background: #f6f6f4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f4, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #08b94e !important;
  --tab-text-color: #b6b5af !important;
  --tab-text-color-focused-active-current: #3f3e3c !important;
  --tab-text-color-focused-highlighted: #08b94e !important;
  --table-drag-handle-background-active: #08b94e !important;
  --table-drag-handle-color: #b6b5af !important;
  --table-header-color: #3f3e3c !important;
  --table-selection-border-color: #08b94e !important;
  --tag-color: #08b94e !important;
  --tag-color-hover: #08b94e !important;
  --tertiary: #086ddd !important;
  --text-accent: #08b94e !important;
  --text-accent-hover: #086ddd !important;
  --text-faint: #b6b5af !important;
  --text-highlight-bg: #d4dbad !important;
  --text-nav: #3f3e3c !important;
  --text-nav-selected: #3f3e3c !important;
  --text-normal: #3f3e3c !important;
  --text-selection: #e1d6e2 !important;
  --textHighlight: #d4dbad !important;
  --titlebar-background: #f6f6f4 !important;
  --titlebar-background-focused: #f6f6f4 !important;
  --titlebar-text-color-focused: #3f3e3c !important;
  --vault-profile-color: #3f3e3c !important;
  --vault-profile-color-hover: #3f3e3c !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}

html body .bases-table thead th {
  background-color: rgb(182, 181, 175);
  color: rgb(63, 62, 60);
}

html body .canvas-node {
  border-color: rgb(63, 62, 60);
}

html body .canvas-node-content {
  color: rgb(63, 62, 60);
}

html body .canvas-node-file {
  color: rgb(63, 62, 60);
}

html body .canvas-node-group {
  border-color: rgb(63, 62, 60);
}

html body .canvas-sidebar {
  background-color: rgb(246, 246, 244);
  border-color: rgb(63, 62, 60);
}

html body .note-properties-tags {
  color: rgb(8, 185, 78);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}

html body div#quartz-root {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(63, 62, 60) none 0px;
  text-decoration-color: rgb(63, 62, 60);
}

html body .page article p > em, html em {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(63, 62, 60) none 0px;
  text-decoration-color: rgb(63, 62, 60);
}

html body .page article p > i, html i {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(63, 62, 60) none 0px;
  text-decoration-color: rgb(63, 62, 60);
}

html body .page article p > strong, html strong {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(63, 62, 60) none 0px;
  text-decoration-color: rgb(63, 62, 60);
}

html body .text-highlight {
  background-color: rgb(242, 230, 209);
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(63, 62, 60) none 0px;
  text-decoration-color: rgb(63, 62, 60);
}

html body del {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(63, 62, 60) none 0px;
  text-decoration-color: rgb(63, 62, 60);
}

html body h1.article-title {
  color: rgb(63, 62, 60);
  font-size: 16px;
  font-weight: 600;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(182, 181, 175);
  border-radius: 50%;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(8, 109, 221);
  border-color: rgb(8, 109, 221);
}

html body p {
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    links: `html body a.external, html footer a {
  color: rgb(8, 185, 78);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration-color: rgb(8, 185, 78);
  transition: background 0.3s, color 0.3s;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(8, 185, 78);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration-color: rgb(8, 185, 78);
}

html body a.internal.broken {
  color: rgb(8, 185, 78);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(8, 185, 78) none 0px;
}`,
    lists: `html body dd {
  color: rgb(63, 62, 60);
}

html body dt {
  color: rgb(63, 62, 60);
}

html body ol > li {
  color: rgb(63, 62, 60);
}

html body ol.overflow {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

html body ul > li {
  color: rgb(63, 62, 60);
}

html body ul.overflow {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(8, 185, 78);
}

html body blockquote {
  background-color: rgba(135, 131, 112, 0.23);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

html body table {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-left: 66.2031px;
  margin-right: 66.2031px;
  margin-top: 32px;
  width: 529.594px;
}

html body tbody tr:nth-child(even) {
  background-color: rgb(182, 181, 175);
}

html body td {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
  color: rgb(63, 62, 60);
  padding-bottom: 12.8px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 12.8px;
}

html body th {
  background-color: rgb(182, 181, 175);
  color: rgb(63, 62, 60);
  padding-bottom: 12.8px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 12.8px;
  text-align: left;
}`,
    code: `html body code {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(233, 49, 71);
  border-left-color: rgb(233, 49, 71);
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  color: rgb(233, 49, 71);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 246, 244);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(246, 246, 244);
  padding-bottom: 16px;
  padding-top: 16px;
}

html body pre:has(> code) {
  background-color: rgb(246, 246, 244);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

html body figcaption {
  color: rgb(63, 62, 60);
}

html body figure {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

html body img {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

html body video {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(246, 246, 244);
}

html body .footnotes {
  border-top-color: rgb(63, 62, 60);
  color: rgb(63, 62, 60);
}

html body .transclude {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

html body .transclude-inner {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(182, 181, 175);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(182, 181, 175);
  border-right-color: rgb(182, 181, 175);
  border-top-color: rgb(182, 181, 175);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  width: 15px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
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
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(246, 246, 244);
}

html body .search > .search-container > .search-space > * {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(63, 62, 60) none 0px;
  text-decoration-color: rgb(63, 62, 60);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(63, 62, 60);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(63, 62, 60);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(196, 205, 142);
  color: rgb(63, 62, 60);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-top-color: rgb(224, 224, 224);
  border-top-style: solid;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(196, 205, 142);
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
  color: rgb(63, 62, 60);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(196, 205, 142);
  color: rgb(63, 62, 60);
}

html body a.internal.tag-link::before {
  color: rgb(8, 185, 78);
}

html body h1 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body h2 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body h3 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body h4 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body h5 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body h6 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body hr {
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html body .callout {
  --callout-color: 8, 109, 221;
}

html body ::-webkit-scrollbar {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
}

html body ::-webkit-scrollbar-corner {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
}

html body ::-webkit-scrollbar-thumb {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

html body ::-webkit-scrollbar-thumb:active {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
}

html body ::-webkit-scrollbar-track {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(63, 62, 60);
}`,
    footer: `html body footer {
  background-color: rgb(246, 246, 244);
  border-top-color: rgb(182, 181, 175);
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body footer ul li a {
  color: rgb(63, 62, 60);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
  color: rgb(63, 62, 60);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 62, 60);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

html body li.section-li > .section .meta {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 62, 60);
}

html body ul.section-ul {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(182, 181, 175);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
  color: rgb(63, 62, 60);
}

html body .metadata {
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body .metadata-properties {
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(246, 246, 244);
}

html body .page-header h2.page-title {
  color: rgb(63, 62, 60);
}

html body abbr {
  color: rgb(63, 62, 60);
}

html body details {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

html body input[type=text] {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body kbd {
  background-color: rgb(246, 246, 244);
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
  color: rgb(63, 62, 60);
}

html body progress {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

html body sub {
  color: rgb(63, 62, 60);
}

html body summary {
  color: rgb(63, 62, 60);
}

html body sup {
  color: rgb(63, 62, 60);
}

html body ul.tags > li {
  background-color: rgb(139, 209, 220);
  border-bottom-left-radius: 6.4px;
  border-bottom-right-radius: 6.4px;
  border-top-left-radius: 6.4px;
  border-top-right-radius: 6.4px;
  color: rgb(63, 62, 60);
}`,
  },
};
