import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "rmaki",
    modes: ["dark"],
    variations: [],
    fonts: ["fira-code"],
  },
  dark: {
    base: `:root:root {
  --accent: hsl(164, 68%, 72%) !important;
  --black: hsl(240, 7%, 12%) !important;
  --black-dark-1: hsl(240, 7%, 7%) !important;
  --black-light-1: hsl(240, 7%, 17%) !important;
  --black-light-2: hsl(240, 7%, 22%) !important;
  --black-light-3: hsl(240, 7%, 27%) !important;
  --border: 0.5px solid hsl(246, 28%, 48%) !important;
  --current-line-bg: hsl(240, 7%, 12%) !important;
  --editor-background: hsl(240, 7%, 7%) !important;
  --editor-icons: hsl(211, 19%, 60%) !important;
  --editor-title: hsl(212, 61%, 91%) !important;
  --explorer-active: hsl(240, 7%, 12%) !important;
  --explorer-active-bg: hsl(164, 68%, 72%) !important;
  --explorer-hover: hsl(240, 7%, 17%) !important;
  --font: "Fira Code", monospace !important;
  --formatting: hsl(164, 68%, 72%) !important;
  --h-black: 240 !important;
  --h-purple: 246 !important;
  --h-white: 212 !important;
  --heading: 1.1rem !important;
  --heading-color: hsl(246, 28%, 48%) !important;
  --icon-accent: hsl(164, 68%, 72%) !important;
  --icon-hover: hsl(164, 68%, 72%) !important;
  --icon-normal: hsl(246, 28%, 48%) !important;
  --l-black: 12% !important;
  --l-purple: 48% !important;
  --l-white: 91% !important;
  --line-number: hsl(246, 28%, 33%) !important;
  --list: hsl(246, 28%, 48%) !important;
  --par: 0.9rem !important;
  --popup-dark: hsl(240, 7%, 7%) !important;
  --purple: hsl(246, 28%, 48%) !important;
  --purple-dark-1: hsl(246, 28%, 43%) !important;
  --purple-dark-2: hsl(246, 28%, 38%) !important;
  --purple-dark-3: hsl(246, 28%, 33%) !important;
  --purple-dark-4: hsl(246, 28%, 28%) !important;
  --purple-dark-5: hsl(246, 28%, 23%) !important;
  --purple-dark-6: hsl(246, 28%, 18%) !important;
  --purple-light-1: hsl(246, 28%, 53%) !important;
  --purple-light-2: hsl(246, 28%, 58%) !important;
  --purple-light-3: hsl(246, 28%, 63%) !important;
  --s-black: 7% !important;
  --s-purple: 28% !important;
  --s-white: 61% !important;
  --search-bar: hsl(240, 7%, 17%) !important;
  --search-hover: hsl(246, 28%, 48%) !important;
  --sidebar-background: hsl(240, 7%, 12%) !important;
  --small: 0.7rem !important;
  --tab-background: hsl(240, 7%, 7%) !important;
  --text: hsl(212, 61%, 91%) !important;
  --text-mute: hsl(211, 19%, 60%) !important;
  --white: hsl(212, 61%, 91%) !important;
  --white-dark-1: hsl(212, 61%, 86%) !important;
  --white-dark-2: hsl(212, 61%, 81%) !important;
  --white-dark-3: hsl(211, 19%, 60%) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body .bases-table thead th {
  color: rgb(135, 232, 206);
}

html body .note-properties-tags {
  border-radius: 25.2px;
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 28, 33);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(218, 231, 246);
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration-color: rgb(218, 231, 246);
}

html body .page article p > em, html em {
  color: rgb(218, 231, 246);
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration-color: rgb(218, 231, 246);
}

html body .page article p > i, html i {
  color: rgb(218, 231, 246);
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration-color: rgb(218, 231, 246);
}

html body .page article p > strong, html strong {
  color: rgb(218, 231, 246);
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration-color: rgb(218, 231, 246);
}

html body .text-highlight {
  background-color: rgb(135, 232, 206);
  color: rgb(17, 17, 19);
  font-family: "Fira Code", monospace;
  outline: rgb(17, 17, 19) none 0px;
  text-decoration-color: rgb(17, 17, 19);
}

html body del {
  color: rgb(218, 231, 246);
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration-color: rgb(218, 231, 246);
}

html body h1.article-title {
  color: rgb(218, 231, 246);
}

html body p {
  font-family: "Fira Code", monospace;
}`,
    links: `html body a.external, html footer a {
  color: rgb(218, 231, 246);
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration: underline rgb(135, 232, 206);
  text-decoration-color: rgb(135, 232, 206);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  font-family: "Fira Code", monospace;
  text-decoration: underline rgb(135, 232, 206);
  text-decoration-color: rgb(135, 232, 206);
}

html body a.internal.broken {
  font-family: "Fira Code", monospace;
  text-decoration: underline rgb(135, 232, 206);
  text-decoration-color: rgb(135, 232, 206);
}`,
    lists: `html body dl {
  margin-bottom: 14.4px;
  margin-top: 14.4px;
}

html body ol > li {
  color: rgb(218, 231, 246);
}

html body ul > li {
  color: rgb(218, 231, 246);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(218, 231, 246);
  text-decoration: underline rgb(135, 232, 206);
}

html body blockquote {
  font-family: "Fira Code", monospace;
}`,
    tables: `html body table {
  font-family: "Fira Code", monospace;
  width: 222.094px;
}

html body th {
  color: rgb(135, 232, 206);
}`,
    images: `html body figcaption {
  font-family: "Fira Code", monospace;
  font-size: 14.4px;
}

html body figure {
  margin-bottom: 14.4px;
  margin-top: 14.4px;
}

html body video {
  border-bottom-color: rgb(218, 231, 246);
  border-left-color: rgb(218, 231, 246);
  border-right-color: rgb(218, 231, 246);
  border-top-color: rgb(218, 231, 246);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "Fira Code", monospace;
}

html body .katex-display > .katex > .katex-html {
  font-family: "Fira Code", monospace;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
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
  background-color: rgb(17, 17, 19);
  color: rgb(218, 231, 246);
  font-family: "Fira Code", monospace;
}

html body .search > .search-container > .search-space > * {
  font-family: "Fira Code", monospace;
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 25.2px;
  border-bottom-right-radius: 25.2px;
  border-top-left-radius: 25.2px;
  border-top-right-radius: 25.2px;
}

html body h1 {
  color: rgb(135, 232, 206);
  font-family: "Fira Code", monospace;
}

html body h2 {
  color: rgb(95, 88, 157);
  font-family: "Fira Code", monospace;
}

html body h2.page-title, html h2.page-title a {
  font-family: "Fira Code", monospace;
}

html body h3 {
  color: rgb(140, 134, 187);
  font-family: "Fira Code", monospace;
}

html body h4 {
  color: rgb(95, 88, 157);
  font-family: "Fira Code", monospace;
}

html body h5 {
  color: rgb(135, 232, 206);
  font-family: "Fira Code", monospace;
}

html body h6 {
  color: rgb(95, 88, 157);
  font-family: "Fira Code", monospace;
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "Fira Code", monospace;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "Fira Code", monospace;
}`,
    footer: `html body footer {
  background-color: rgb(17, 17, 19);
  border-top-color: rgb(95, 88, 157);
  font-family: "Fira Code", monospace;
}

html body footer ul li a {
  color: rgb(134, 152, 172);
}`,
    recentNotes: `html body .recent-notes > h3 {
  font-family: "Fira Code", monospace;
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(134, 152, 172);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(134, 152, 172);
  font-family: "Fira Code", monospace;
}`,
    listPage: `html body li.section-li > .section .meta {
  color: rgb(134, 152, 172);
  font-family: "Fira Code", monospace;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(134, 152, 172);
}`,
    misc: `html body .metadata {
  font-family: "Fira Code", monospace;
}

html body .metadata-properties {
  font-family: "Fira Code", monospace;
}

html body .navigation-progress {
  background-color: rgb(17, 17, 19);
}

html body .page-header h2.page-title {
  color: rgb(218, 231, 246);
}

html body abbr {
  color: rgb(218, 231, 246);
}

html body kbd {
  font-size: 12.6px;
  padding-bottom: 1.26px;
  padding-left: 3.15px;
  padding-right: 3.15px;
  padding-top: 1.26px;
}

html body progress {
  border-bottom-color: rgb(218, 231, 246);
  border-left-color: rgb(218, 231, 246);
  border-right-color: rgb(218, 231, 246);
  border-top-color: rgb(218, 231, 246);
}

html body sub {
  color: rgb(218, 231, 246);
  font-size: 12px;
}

html body sup {
  color: rgb(218, 231, 246);
  font-size: 12px;
}

html body ul.tags > li {
  border-bottom-left-radius: 22.05px;
  border-bottom-right-radius: 22.05px;
  border-top-left-radius: 22.05px;
  border-top-right-radius: 22.05px;
  color: rgb(218, 231, 246);
}`,
  },
  light: {},
};
