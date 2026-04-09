import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "obsidian-boom", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --brackets-color: #a7b6c2 !important;
  --code-font-family: 'Hack' !important;
  --link-color: #106ba3 !important;
  --side-dock-active: #202b33 !important;
  --side-dock-bg: #182026 !important;
  --side-dock-bg-hover: #202b33 !important;
  --text-color: #202b33 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body .canvas-node-file {
  color: rgb(32, 43, 51);
}

html body .note-properties-key {
  font-weight: 500;
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(32, 43, 51);
  outline: rgb(32, 43, 51) none 0px;
  text-decoration-color: rgb(32, 43, 51);
}

html body .page article p > em, html em {
  color: rgb(32, 43, 51);
  font-weight: 500;
  outline: rgb(32, 43, 51) none 0px;
  text-decoration-color: rgb(32, 43, 51);
}

html body .page article p > i, html i {
  color: rgb(32, 43, 51);
  font-weight: 500;
  outline: rgb(32, 43, 51) none 0px;
  text-decoration-color: rgb(32, 43, 51);
}

html body .page article p > strong, html strong {
  color: rgb(32, 43, 51);
  outline: rgb(32, 43, 51) none 0px;
  text-decoration-color: rgb(32, 43, 51);
}

html body .text-highlight {
  background-color: rgba(0, 231, 255, 0.29);
  font-weight: 500;
}

html body del {
  color: rgb(32, 43, 51);
  font-weight: 500;
  outline: rgb(32, 43, 51) none 0px;
  text-decoration-color: rgb(32, 43, 51);
}

html body h1.article-title {
  font-size: 28px;
  font-weight: 500;
}

html body p {
  font-weight: 500;
}`,
    links: `html body a.external, html footer a {
  color: rgb(16, 107, 163);
  outline: rgb(16, 107, 163) none 0px;
  text-decoration-color: rgb(16, 107, 163);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(16, 107, 163);
  outline: rgb(16, 107, 163) none 0px;
  text-decoration-color: rgb(16, 107, 163);
}

html body a.internal.broken {
  color: rgb(16, 107, 163);
  outline: rgb(16, 107, 163) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body dd {
  color: rgb(32, 43, 51);
}

html body dt {
  color: rgb(32, 43, 51);
  font-weight: 500;
}

html body ol > li {
  color: rgb(32, 43, 51);
}

html body ul > li {
  color: rgb(32, 43, 51);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(16, 107, 163);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

html body table {
  color: rgb(32, 43, 51);
  margin-top: 14px;
}

html body td {
  color: rgb(32, 43, 51);
  font-weight: 500;
}`,
    code: `html body code {
  font-family: Hack;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(32, 43, 51);
  font-family: Hack;
}`,
    images: `html body audio {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

html body figcaption {
  color: rgb(32, 43, 51);
}

html body figure {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

html body img {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

html body video {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}`,
    embeds: `html body .footnotes {
  border-top-color: rgb(32, 43, 51);
  color: rgb(32, 43, 51);
}

html body .transclude {
  border-bottom-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}`,
    checkboxes: `html body li.task-list-item[data-task='!'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
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
    search: `html body .search > .search-container > .search-space > * {
  color: rgb(32, 43, 51);
  font-weight: 500;
  outline: rgb(32, 43, 51) none 0px;
  text-decoration-color: rgb(32, 43, 51);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(32, 43, 51);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(32, 43, 51);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(32, 43, 51);
  font-weight: 500;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
  color: rgb(32, 43, 51);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(32, 43, 51);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-weight: 500;
}

html body h1 {
  color: rgb(32, 43, 51);
}

html body h2 {
  color: rgb(32, 43, 51);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(32, 43, 51);
}

html body h3 {
  color: rgb(32, 43, 51);
}

html body h4 {
  color: rgb(32, 43, 51);
}

html body h5 {
  color: rgb(32, 43, 51);
}

html body h6 {
  color: rgb(32, 43, 51);
}`,
    scrollbars: `html body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(92, 112, 128);
  font-weight: 700;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 112, 128);
  font-weight: 700;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(32, 43, 51);
}

html body li.depth-0 {
  font-weight: 700;
}`,
    recentNotes: `html body .recent-notes > h3 {
  font-weight: 500;
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(92, 112, 128);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(92, 112, 128);
}`,
    listPage: `html body li.section-li > .section .meta {
  color: rgb(92, 112, 128);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(92, 112, 128);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
  color: rgb(32, 43, 51);
}

html body .metadata {
  margin-bottom: 28px;
}

html body abbr {
  color: rgb(32, 43, 51);
}

html body details {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

html body progress {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

html body sub {
  color: rgb(32, 43, 51);
}

html body summary {
  color: rgb(32, 43, 51);
  font-weight: 500;
}

html body sup {
  color: rgb(32, 43, 51);
}

html body ul.tags > li {
  color: rgb(16, 107, 163);
}`,
  },
};
