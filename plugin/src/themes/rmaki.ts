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
  --accent: rgb(135, 232, 206) !important;
  --black: rgb(28, 28, 33) !important;
  --black-dark-1: rgb(17, 17, 19) !important;
  --black-light-1: rgb(40, 40, 46) !important;
  --black-light-2: rgb(52, 52, 60) !important;
  --black-light-3: rgb(64, 64, 74) !important;
  --border: 0.5px solid rgb(95, 88, 157) !important;
  --current-line-bg: rgb(28, 28, 33) !important;
  --editor-background: rgb(17, 17, 19) !important;
  --editor-icons: rgb(134, 152, 172) !important;
  --editor-title: rgb(218, 231, 246) !important;
  --explorer-active: rgb(28, 28, 33) !important;
  --explorer-active-bg: rgb(135, 232, 206) !important;
  --explorer-hover: rgb(40, 40, 46) !important;
  --font: "Fira Code", monospace !important;
  --formatting: rgb(135, 232, 206) !important;
  --h-black: 240 !important;
  --h-purple: 246 !important;
  --h-white: 212 !important;
  --heading: 1.1rem !important;
  --heading-color: rgb(95, 88, 157) !important;
  --icon-accent: rgb(135, 232, 206) !important;
  --icon-hover: rgb(135, 232, 206) !important;
  --icon-normal: rgb(95, 88, 157) !important;
  --l-black: 12% !important;
  --l-purple: 48% !important;
  --l-white: 91% !important;
  --line-number: rgb(65, 61, 108) !important;
  --list: rgb(95, 88, 157) !important;
  --par: 0.9rem !important;
  --popup-dark: rgb(17, 17, 19) !important;
  --purple: rgb(95, 88, 157) !important;
  --purple-dark-1: rgb(85, 79, 140) !important;
  --purple-dark-2: rgb(75, 70, 124) !important;
  --purple-dark-3: rgb(65, 61, 108) !important;
  --purple-dark-4: rgb(55, 51, 91) !important;
  --purple-dark-5: rgb(46, 42, 75) !important;
  --purple-dark-6: rgb(36, 33, 59) !important;
  --purple-light-1: rgb(108, 102, 169) !important;
  --purple-light-2: rgb(124, 118, 178) !important;
  --purple-light-3: rgb(140, 134, 187) !important;
  --s-black: 7% !important;
  --s-purple: 28% !important;
  --s-white: 61% !important;
  --search-bar: rgb(40, 40, 46) !important;
  --search-hover: rgb(95, 88, 157) !important;
  --sidebar-background: rgb(28, 28, 33) !important;
  --small: 0.7rem !important;
  --tab-background: rgb(17, 17, 19) !important;
  --text: rgb(218, 231, 246) !important;
  --text-mute: rgb(134, 152, 172) !important;
  --white: rgb(218, 231, 246) !important;
  --white-dark-1: rgb(198, 218, 241) !important;
  --white-dark-2: rgb(177, 205, 236) !important;
  --white-dark-3: rgb(134, 152, 172) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 28, 33);
}`,
    typography: `html body .page article p > b, html b {
  font-family: "Fira Code", monospace;
}

html body .page article p > em, html em {
  font-family: "Fira Code", monospace;
}

html body .page article p > i, html i {
  font-family: "Fira Code", monospace;
}

html body .page article p > strong, html strong {
  font-family: "Fira Code", monospace;
}

html body .text-highlight {
  background-color: rgb(135, 232, 206);
  color: rgb(17, 17, 19);
  font-family: "Fira Code", monospace;
  outline: rgb(17, 17, 19) none 0px;
  text-decoration: rgb(17, 17, 19);
  text-decoration-color: rgb(17, 17, 19);
}

html body del {
  font-family: "Fira Code", monospace;
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
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(218, 231, 246);
  text-decoration: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
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
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "Fira Code", monospace;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "Fira Code", monospace;
}

html body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "Fira Code", monospace;
}`,
    footer: `html body footer {
  background-color: rgb(17, 17, 19);
  border-top-color: rgb(95, 88, 157);
  font-family: "Fira Code", monospace;
}

html body footer ul li a {
  color: rgb(134, 152, 172);
  text-decoration: rgb(134, 152, 172);
}`,
    recentNotes: `html body .recent-notes > h3 {
  font-family: "Fira Code", monospace;
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(134, 152, 172);
  text-decoration: rgb(134, 152, 172);
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
  text-decoration: rgb(134, 152, 172);
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
  text-decoration: underline dotted rgb(218, 231, 246);
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
}`,
  },
  light: {},
};
