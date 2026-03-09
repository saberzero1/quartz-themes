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
  --background-nav: #f6f6f4;
  --background-nav-alt: #f6f6f4;
  --background-primary: #f6f6f4;
  --background-primary-alt: #f6f6f4;
  --background-secondary: #f6f6f4;
  --background-secondary-alt: #f6f6f4;
  --bases-cards-background: #f6f6f4;
  --bases-cards-cover-background: #f6f6f4;
  --bases-table-cell-background-active: #f6f6f4;
  --bases-table-cell-background-disabled: #f6f6f4;
  --bases-table-cell-shadow-focus: 0 0 0 2px #08b94e;
  --bases-table-group-background: #f6f6f4;
  --bases-table-header-background: #f6f6f4;
  --bases-table-summary-background: #f6f6f4;
  --blockquote-border-color: #08b94e;
  --blur-background: color-mix(in srgb, #f6f6f4 65%, transparent) linear-gradient(#f6f6f4, color-mix(in srgb, #f6f6f4 65%, transparent));
  --canvas-background: #f6f6f4;
  --canvas-card-label-color: #b6b5af;
  --caret-color: #3f3e3c;
  --checkbox-border-color: #b6b5af;
  --checkbox-color: #08b94e;
  --checkbox-color-hover: #08b94e;
  --checkbox-marker-color: #f6f6f4;
  --code-background: #f6f6f4;
  --code-block-background: #fff;
  --code-block-border: #b6b5af;
  --code-comment: #b6b5af;
  --code-normal: #3f3e3c;
  --collapse-icon-color: #b6b5af;
  --collapse-icon-color-collapsed: #08b94e;
  --color-accent: #08b94e;
  --color-accent-faded: #c4cd8e;
  --color-back: #f6f6f4;
  --color-blue-accent: #086ddd;
  --color-blue-accent-faded: #8bd1dc;
  --color-blue-light: #17a2b8;
  --color-blue-lightest: #8bd1dc;
  --color-dark: #3f3e3c;
  --color-front: #3f3e3c;
  --color-gray: #696966;
  --color-gray-light: #b6b5af;
  --color-gray-lightest: #87837070;
  --color-gray-lightest-fade: #8783703b;
  --color-green-light: #c4cd8e;
  --color-green-lightest: #d4dbad;
  --color-light: #f6f6f4;
  --color-off: #b6b5af;
  --color-orange-light: #fc6e51;
  --color-purple-light: #b19fb6;
  --color-purple-lightest: #e1d6e2;
  --color-red-light: #e74c3c;
  --color-red-lightest: #f3a69e;
  --color-yellow-light: #ffce54;
  --color-yellow-lightest: #f9dda2c0;
  --divider-color-hover: #08b94e;
  --embed-border-start: 2px solid #08b94e;
  --file-header-background: #f6f6f4;
  --file-header-background-focused: #f6f6f4;
  --flair-color: #3f3e3c;
  --font-family-editor: 'nunito sans', gotham, metropolis, prologue, manrope, inter, poppins,
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif;
  --font-title: "moranga", "matchbook regular", bitter, prompt,
    'nunito sans', gotham, metropolis, prologue, manrope, inter, poppins,
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif;
  --footnote-id-color-no-occurrences: #b6b5af;
  --graph-node-focused: #08b94e;
  --graph-node-unresolved: #b6b5af;
  --graph-text: #3f3e3c;
  --heading-formatting: #b6b5af;
  --icon-color-active: #08b94e;
  --icon-color-focused: #3f3e3c;
  --input-date-separator: #b6b5af;
  --input-placeholder-color: #b6b5af;
  --interactive-accent: #08b94e;
  --interactive-accent-hover: #08b94e;
  --interactive-accent-rgb: #08b94e;
  --link-color: #08b94e;
  --link-color-hover: #086ddd;
  --link-external-color: #08b94e;
  --link-external-color-hover: #086ddd;
  --link-unresolved-color: #08b94e;
  --list-color: #08b94e;
  --list-marker-color: #b6b5af;
  --list-marker-color-collapsed: #08b94e;
  --menu-background: #f6f6f4;
  --metadata-input-text-color: #3f3e3c;
  --modal-background: #f6f6f4;
  --nav-collapse-icon-color: #b6b5af;
  --nav-collapse-icon-color-collapsed: #b6b5af;
  --nav-heading-color: #3f3e3c;
  --nav-heading-color-collapsed: #b6b5af;
  --nav-heading-color-hover: #3f3e3c;
  --nav-item-color-active: #3f3e3c;
  --nav-item-color-highlighted: #08b94e;
  --nav-item-color-hover: #3f3e3c;
  --nav-item-color-selected: #3f3e3c;
  --nav-tag-color: #b6b5af;
  --pdf-background: #f6f6f4;
  --pdf-page-background: #f6f6f4;
  --pdf-sidebar-background: #f6f6f4;
  --pill-color-hover: #3f3e3c;
  --pill-color-remove: #b6b5af;
  --pill-color-remove-hover: #08b94e;
  --prompt-background: #f6f6f4;
  --raised-background: color-mix(in srgb, #f6f6f4 65%, transparent) linear-gradient(#f6f6f4, color-mix(in srgb, #f6f6f4 65%, transparent));
  --ribbon-background: #f6f6f4;
  --ribbon-background-collapsed: #f6f6f4;
  --search-result-background: #f6f6f4;
  --setting-group-heading-color: #3f3e3c;
  --setting-items-background: #f6f6f4;
  --shadow: 1px 1px 2px #88888888;
  --status-bar-background: #f6f6f4;
  --suggestion-background: #f6f6f4;
  --tab-background-active: #f6f6f4;
  --tab-container-background: #f6f6f4;
  --tab-switcher-background: #f6f6f4;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f4, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #08b94e;
  --tab-text-color: #b6b5af;
  --tab-text-color-focused-active-current: #3f3e3c;
  --tab-text-color-focused-highlighted: #08b94e;
  --table-drag-handle-background-active: #08b94e;
  --table-drag-handle-color: #b6b5af;
  --table-header-color: #3f3e3c;
  --table-selection-border-color: #08b94e;
  --tag-color: #08b94e;
  --tag-color-hover: #08b94e;
  --text-accent: #08b94e;
  --text-accent-hover: #086ddd;
  --text-faint: #b6b5af;
  --text-highlight-bg: #d4dbad;
  --text-nav: #3f3e3c;
  --text-nav-selected: #3f3e3c;
  --text-normal: #3f3e3c;
  --text-selection: #e1d6e2;
  --titlebar-background: #f6f6f4;
  --titlebar-background-focused: #f6f6f4;
  --titlebar-text-color-focused: #3f3e3c;
  --vault-profile-color: #3f3e3c;
  --vault-profile-color-hover: #3f3e3c;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}

body div#quartz-root {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}`,
    typography: `body .page article p > b, b {
  color: rgb(63, 62, 60);
  outline: rgb(63, 62, 60) none 0px;
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body .page article p > em, em {
  color: rgb(63, 62, 60);
  outline: rgb(63, 62, 60) none 0px;
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body .page article p > i, i {
  color: rgb(63, 62, 60);
  outline: rgb(63, 62, 60) none 0px;
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body .page article p > strong, strong {
  color: rgb(63, 62, 60);
  outline: rgb(63, 62, 60) none 0px;
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body .text-highlight {
  background-color: rgb(212, 219, 173);
  color: rgb(63, 62, 60);
  outline: rgb(63, 62, 60) none 0px;
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body del {
  color: rgb(63, 62, 60);
  outline: rgb(63, 62, 60) none 0px;
  text-decoration: line-through rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body p {
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(8, 185, 78);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration: underline rgb(8, 185, 78);
  text-decoration-color: rgb(8, 185, 78);
  transition: background 0.3s, color 0.3s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(8, 185, 78);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration: underline rgb(8, 185, 78);
  text-decoration-color: rgb(8, 185, 78);
}

body a.internal.broken {
  color: rgb(8, 185, 78);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(8, 185, 78) none 0px;
}`,
    lists: `body dd {
  color: rgb(63, 62, 60);
}

body dt {
  color: rgb(63, 62, 60);
}

body ol > li {
  color: rgb(63, 62, 60);
}

body ol.overflow {
  background-color: rgb(246, 246, 244);
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

body ul > li {
  color: rgb(63, 62, 60);
}

body ul.overflow {
  background-color: rgb(246, 246, 244);
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(8, 185, 78);
  text-decoration: rgb(8, 185, 78);
}

body blockquote {
  background-color: rgba(135, 131, 112, 0.23);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

body table {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-left: 66.2031px;
  margin-right: 66.2031px;
  margin-top: 32px;
  width: 529.594px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(182, 181, 175);
}

body td {
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

body th {
  background-color: rgb(182, 181, 175);
  color: rgb(63, 62, 60);
  padding-bottom: 12.8px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 12.8px;
  text-align: left;
}`,
    code: `body code {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(233, 49, 71);
  border-left-color: rgb(233, 49, 71);
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  color: rgb(233, 49, 71);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 246, 244);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 246, 244);
  color: rgb(63, 62, 60);
}

body pre > code, pre:has(> code) {
  background-color: rgb(246, 246, 244);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(246, 246, 244);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

body figcaption {
  color: rgb(63, 62, 60);
}

body figure {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

body img {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

body video {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}`,
    embeds: `body .file-embed {
  background-color: rgb(246, 246, 244);
}

body .footnotes {
  border-top-color: rgb(63, 62, 60);
  color: rgb(63, 62, 60);
}

body .transclude {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

body .transclude-inner {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}`,
    checkboxes: `body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='*'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='-'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='/'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='>'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='?'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='I'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='S'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='b'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='c'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='d'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='f'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='i'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='k'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='l'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='p'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='u'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body li.task-list-item[data-task='w'] {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}`,
    search: `body .search > .search-button {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(246, 246, 244);
}

body .search > .search-container > .search-space > * {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(63, 62, 60) none 0px;
  text-decoration: rgb(63, 62, 60);
  text-decoration-color: rgb(63, 62, 60);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(63, 62, 60);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(63, 62, 60);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(196, 205, 142);
  color: rgb(63, 62, 60);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-top-color: rgb(224, 224, 224);
  border-top-style: solid;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(196, 205, 142);
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
  color: rgb(63, 62, 60);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(196, 205, 142);
  color: rgb(63, 62, 60);
}

body a.internal.tag-link::before {
  color: rgb(8, 185, 78);
}

body h1 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h3 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h4 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h5 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h6 {
  color: rgb(63, 62, 60);
  font-family: moranga, "matchbook regular", bitter, prompt, "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body hr {
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
}

body ::-webkit-scrollbar-corner {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
}

body ::-webkit-scrollbar-thumb {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

body ::-webkit-scrollbar-thumb:active {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
}

body ::-webkit-scrollbar-thumb:hover {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
}

body ::-webkit-scrollbar-track {
  background: radial-gradient(circle at 12.17% 41.13%, rgb(247, 246, 240), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, radial-gradient(circle at 88.72% 61.69%, rgb(235, 230, 222), rgba(0, 0, 0, 0) 100%) repeat fixed 0% 0% / cover padding-box border-box, rgb(246, 246, 244) radial-gradient(circle, rgb(225, 224, 218), rgb(233, 232, 230) 100%) repeat fixed 0% 0% / cover padding-box border-box;
  background-color: rgb(246, 246, 244);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(63, 62, 60);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(63, 62, 60);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(63, 62, 60);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(196, 205, 142);
  border-bottom-color: rgb(63, 62, 60);
  border-bottom-left-radius: 4.8px;
  border-bottom-right-radius: 4.8px;
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  color: rgb(63, 62, 60);
}`,
    footer: `body footer {
  background-color: rgb(246, 246, 244);
  border-top-color: rgb(182, 181, 175);
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
  color: rgb(63, 62, 60);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

body li.section-li > .section .meta {
  color: rgb(63, 62, 60);
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 62, 60);
  text-decoration: rgb(63, 62, 60);
}

body ul.section-ul {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(182, 181, 175);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
  color: rgb(63, 62, 60);
}

body .metadata {
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  font-family: "nunito sans", gotham, metropolis, prologue, manrope, inter, poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(246, 246, 244);
}

body .page-header h2.page-title {
  color: rgb(63, 62, 60);
}

body abbr {
  color: rgb(63, 62, 60);
  text-decoration: underline dotted rgb(63, 62, 60);
}

body details {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

body input[type=text] {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body kbd {
  background-color: rgb(246, 246, 244);
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
  color: rgb(63, 62, 60);
}

body progress {
  border-bottom-color: rgb(63, 62, 60);
  border-left-color: rgb(63, 62, 60);
  border-right-color: rgb(63, 62, 60);
  border-top-color: rgb(63, 62, 60);
}

body sub {
  color: rgb(63, 62, 60);
}

body summary {
  color: rgb(63, 62, 60);
}

body sup {
  color: rgb(63, 62, 60);
}`,
  },
};
