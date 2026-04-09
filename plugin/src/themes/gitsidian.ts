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
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgb(255, 255, 255);
  color: rgb(36, 41, 46);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(255, 255, 0);
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="dark"] body del {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
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
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(36, 41, 46);
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(241, 248, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 1px;
  color: rgb(3, 102, 214);
}`,
  },
  light: {
    base: `:root:root {
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: rgb(255, 255, 255);
  color: rgb(36, 41, 46);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(255, 255, 0);
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
}

html[saved-theme="light"] body del {
  color: rgb(36, 41, 46);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(36, 41, 46) none 0px;
  text-decoration-color: rgb(36, 41, 46);
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
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(36, 41, 46);
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(241, 248, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 1px;
  color: rgb(3, 102, 214);
}`,
  },
};
