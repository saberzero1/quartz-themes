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
}`,
  },
  light: {},
};
