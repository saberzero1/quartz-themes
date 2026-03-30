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
  font-weight: 500;
}

html body del {
  color: rgb(32, 43, 51);
  font-weight: 500;
  outline: rgb(32, 43, 51) none 0px;
  text-decoration-color: rgb(32, 43, 51);
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
}

html body .transclude-inner {
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
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(92, 112, 128);
  font-weight: 700;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 112, 128);
  font-weight: 700;
}`,
    toc: `html body li.depth-0 {
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
}`,
  },
};
