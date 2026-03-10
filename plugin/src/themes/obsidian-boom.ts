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
}`,
    typography: `body .page article p > b, b {
  color: rgb(32, 43, 51);
  outline: rgb(32, 43, 51) none 0px;
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body .page article p > em, em {
  color: rgb(32, 43, 51);
  font-weight: 500;
  outline: rgb(32, 43, 51) none 0px;
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body .page article p > i, i {
  color: rgb(32, 43, 51);
  font-weight: 500;
  outline: rgb(32, 43, 51) none 0px;
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body .page article p > strong, strong {
  color: rgb(32, 43, 51);
  outline: rgb(32, 43, 51) none 0px;
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body .text-highlight {
  font-weight: 500;
}

body del {
  color: rgb(32, 43, 51);
  font-weight: 500;
  outline: rgb(32, 43, 51) none 0px;
  text-decoration: line-through rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body p {
  font-weight: 500;
}`,
    links: `body a.external, footer a {
  color: rgb(16, 107, 163);
  outline: rgb(16, 107, 163) none 0px;
  text-decoration: underline rgb(16, 107, 163);
  text-decoration-color: rgb(16, 107, 163);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(16, 107, 163);
  outline: rgb(16, 107, 163) none 0px;
  text-decoration: rgb(16, 107, 163);
  text-decoration-color: rgb(16, 107, 163);
}

body a.internal.broken {
  color: rgb(16, 107, 163);
  outline: rgb(16, 107, 163) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(32, 43, 51);
}

body dt {
  color: rgb(32, 43, 51);
  font-weight: 500;
}

body ol > li {
  color: rgb(32, 43, 51);
}

body ul > li {
  color: rgb(32, 43, 51);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(16, 107, 163);
  text-decoration: rgb(16, 107, 163);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

body table {
  color: rgb(32, 43, 51);
  margin-top: 14px;
}

body td {
  color: rgb(32, 43, 51);
  font-weight: 500;
}`,
    code: `body code {
  font-family: Hack;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(32, 43, 51);
  font-family: Hack;
}`,
    images: `body audio {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

body figcaption {
  color: rgb(32, 43, 51);
}

body figure {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

body img {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

body video {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(32, 43, 51);
  color: rgb(32, 43, 51);
}

body .transclude {
  border-bottom-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

body .transclude-inner {
  border-bottom-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}`,
    checkboxes: `body li.task-list-item[data-task='!'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='*'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='-'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='/'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='>'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='?'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='I'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='S'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='b'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='c'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='d'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='f'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='i'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='k'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='l'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='p'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='u'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body li.task-list-item[data-task='w'] {
  color: rgb(32, 43, 51);
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}`,
    search: `body .search > .search-container > .search-space > * {
  color: rgb(32, 43, 51);
  font-weight: 500;
  outline: rgb(32, 43, 51) none 0px;
  text-decoration: rgb(32, 43, 51);
  text-decoration-color: rgb(32, 43, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(32, 43, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(32, 43, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(32, 43, 51);
  font-weight: 500;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
  color: rgb(32, 43, 51);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(32, 43, 51);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-weight: 500;
}

body h1 {
  color: rgb(32, 43, 51);
}

body h2 {
  color: rgb(32, 43, 51);
}

body h2.page-title, h2.page-title a {
  color: rgb(32, 43, 51);
}

body h3 {
  color: rgb(32, 43, 51);
}

body h4 {
  color: rgb(32, 43, 51);
}

body h5 {
  color: rgb(32, 43, 51);
}

body h6 {
  color: rgb(32, 43, 51);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(92, 112, 128);
  font-weight: 700;
  text-decoration: rgb(92, 112, 128);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 112, 128);
  font-weight: 700;
  text-decoration: rgb(92, 112, 128);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(92, 112, 128);
  font-weight: 500;
  text-decoration: rgb(92, 112, 128);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-weight: 500;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(92, 112, 128);
  text-decoration: rgb(92, 112, 128);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(92, 112, 128);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(92, 112, 128);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(92, 112, 128);
  text-decoration: rgb(92, 112, 128);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
  color: rgb(32, 43, 51);
}

body .metadata {
  margin-bottom: 28px;
}

body abbr {
  color: rgb(32, 43, 51);
  text-decoration: underline dotted rgb(32, 43, 51);
}

body details {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

body progress {
  border-bottom-color: rgb(32, 43, 51);
  border-left-color: rgb(32, 43, 51);
  border-right-color: rgb(32, 43, 51);
  border-top-color: rgb(32, 43, 51);
}

body sub {
  color: rgb(32, 43, 51);
}

body summary {
  color: rgb(32, 43, 51);
  font-weight: 500;
}

body sup {
  color: rgb(32, 43, 51);
}`,
  },
};
