import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "gitsidian",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(3, 102, 214);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(3, 102, 214) none 0px;
  text-decoration-color: rgb(3, 102, 214);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  text-decoration-color: rgb(166, 138, 249);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(36, 41, 46);
  margin-bottom: 16px;
  margin-left: 0px;
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body dl {
  margin-top: 0px;
}

html[saved-theme="dark"] body dt {
  color: rgb(36, 41, 46);
  font-weight: 600;
  margin-top: 16px;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(36, 41, 46);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(3, 102, 214);
}

html[saved-theme="dark"] body blockquote {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}`,
    tables: `html[saved-theme="dark"] body table {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  margin-top: 0px;
  width: 662px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(246, 248, 250);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(223, 226, 229);
  border-left-color: rgb(223, 226, 229);
  border-right-color: rgb(223, 226, 229);
  border-top-color: rgb(223, 226, 229);
  color: rgb(36, 41, 46);
  padding-bottom: 6px;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 6px;
}

html[saved-theme="dark"] body th {
  padding-bottom: 6px;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 6px;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(255, 255, 255);
  border-top-color: rgb(198, 203, 209);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(36, 41, 46);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(36, 41, 46);
  border-right-color: rgb(36, 41, 46);
  border-top-color: rgb(36, 41, 46);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(36, 41, 46);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 248, 250);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 248, 250);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(36, 41, 46);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(246, 248, 250);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(246, 248, 250);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(36, 41, 46);
  color: rgb(36, 41, 46);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  margin-bottom: 4px;
  margin-right: 6.88px;
  margin-top: 1.28px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}`,
    search: `html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(36, 41, 46);
  border-left-color: rgb(36, 41, 46);
  border-right-color: rgb(36, 41, 46);
  border-top-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(36, 41, 46);
  border-left-color: rgb(36, 41, 46);
  border-right-color: rgb(36, 41, 46);
  border-top-color: rgb(36, 41, 46);
  color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body h1 {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="dark"] body h2 {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="dark"] body h3 {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="dark"] body h4 {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="dark"] body h5 {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="dark"] body h6 {
  color: rgb(106, 115, 125);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="dark"] body abbr {
  color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(36, 41, 46);
  border-left-color: rgb(36, 41, 46);
  border-right-color: rgb(36, 41, 46);
  border-top-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(250, 251, 252);
  border-bottom-color: rgb(209, 213, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(209, 213, 218);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(209, 213, 218);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(209, 213, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(209, 213, 218) 0px -1px 0px 0px inset;
  color: rgb(68, 77, 86);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 11px;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 3px;
}

html[saved-theme="dark"] body sub {
  color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body summary {
  color: rgb(36, 41, 46);
  cursor: pointer;
}

html[saved-theme="dark"] body sup {
  color: rgb(36, 41, 46);
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
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(3, 102, 214);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(3, 102, 214) none 0px;
  text-decoration-color: rgb(3, 102, 214);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="light"] body a.internal.broken {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  text-decoration-color: rgb(138, 92, 245);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(36, 41, 46);
  margin-bottom: 16px;
  margin-left: 0px;
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body dl {
  margin-top: 0px;
}

html[saved-theme="light"] body dt {
  color: rgb(36, 41, 46);
  font-weight: 600;
  margin-top: 16px;
}

html[saved-theme="light"] body ol > li {
  color: rgb(36, 41, 46);
}

html[saved-theme="light"] body ul > li {
  color: rgb(36, 41, 46);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(3, 102, 214);
}

html[saved-theme="light"] body blockquote {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}`,
    tables: `html[saved-theme="light"] body table {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  margin-top: 0px;
  width: 662px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(246, 248, 250);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(223, 226, 229);
  border-left-color: rgb(223, 226, 229);
  border-right-color: rgb(223, 226, 229);
  border-top-color: rgb(223, 226, 229);
  color: rgb(36, 41, 46);
  padding-bottom: 6px;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 6px;
}

html[saved-theme="light"] body th {
  padding-bottom: 6px;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 6px;
}

html[saved-theme="light"] body tr {
  background-color: rgb(255, 255, 255);
  border-top-color: rgb(198, 203, 209);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(36, 41, 46);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(36, 41, 46);
  border-right-color: rgb(36, 41, 46);
  border-top-color: rgb(36, 41, 46);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(36, 41, 46);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 248, 250);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 248, 250);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(36, 41, 46);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(246, 248, 250);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(246, 248, 250);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(36, 41, 46);
  color: rgb(36, 41, 46);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  margin-bottom: 4px;
  margin-right: 6.88px;
  margin-top: 1.28px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(36, 41, 46);
  text-decoration-color: rgb(36, 41, 46);
}`,
    search: `html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(36, 41, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(36, 41, 46);
  border-left-color: rgb(36, 41, 46);
  border-right-color: rgb(36, 41, 46);
  border-top-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(36, 41, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(36, 41, 46);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(36, 41, 46);
  border-left-color: rgb(36, 41, 46);
  border-right-color: rgb(36, 41, 46);
  border-top-color: rgb(36, 41, 46);
  color: rgb(36, 41, 46);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(36, 41, 46);
}

html[saved-theme="light"] body h1 {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="light"] body h2 {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="light"] body h3 {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="light"] body h4 {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="light"] body h5 {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="light"] body h6 {
  color: rgb(106, 115, 125);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}`,
    misc: `html[saved-theme="light"] body .metadata {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="light"] body .metadata-properties {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html[saved-theme="light"] body abbr {
  color: rgb(36, 41, 46);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(36, 41, 46);
  border-left-color: rgb(36, 41, 46);
  border-right-color: rgb(36, 41, 46);
  border-top-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(250, 251, 252);
  border-bottom-color: rgb(209, 213, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(209, 213, 218);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(209, 213, 218);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(209, 213, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(209, 213, 218) 0px -1px 0px 0px inset;
  color: rgb(68, 77, 86);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 11px;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 3px;
}

html[saved-theme="light"] body sub {
  color: rgb(36, 41, 46);
}

html[saved-theme="light"] body summary {
  color: rgb(36, 41, 46);
  cursor: pointer;
}

html[saved-theme="light"] body sup {
  color: rgb(36, 41, 46);
}`,
  },
};
