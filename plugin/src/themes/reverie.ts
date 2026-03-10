import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "reverie",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #95c1bb;
  --background-primary: #1A2023;
  --background-primary-alt: #1A2023;
  --background-secondary: #222B2F;
  --background-secondary-alt: #073334;
  --bases-cards-background: #1A2023;
  --bases-cards-cover-background: #1A2023;
  --bases-cards-shadow: 0 0 0 1px #95c1bb;
  --bases-embed-border-color: #95c1bb;
  --bases-table-border-color: #95c1bb;
  --bases-table-cell-background-active: #1A2023;
  --bases-table-cell-background-disabled: #1A2023;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0b797d;
  --bases-table-group-background: #1A2023;
  --bases-table-header-background: #1A2023;
  --bases-table-summary-background: #1A2023;
  --blockquote-border-color: #0b797d;
  --canvas-background: #1A2023;
  --canvas-card-label-color: #bdae93;
  --caret-color: #faf2d6;
  --checkbox-border-color: #bdae93;
  --checkbox-color: #0b797d;
  --checkbox-marker-color: #1A2023;
  --code-background: #1A2023;
  --code-block: #83a598;
  --code-border-color: #95c1bb;
  --code-comment: #bdae93;
  --code-normal: #faf2d6;
  --collapse-icon-color: #bdae93;
  --collapse-icon-color-collapsed: #2ccab7;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #95c1bb;
  --divider-color-hover: #0b797d;
  --embed-block-shadow-hover: 0 0 0 1px #95c1bb, inset 0 0 0 1px #95c1bb;
  --embed-border-start: 2px solid #0b797d;
  --file-header-background: #1A2023;
  --file-header-background-focused: #1A2023;
  --flair-color: #faf2d6;
  --footnote-divider-color: #95c1bb;
  --footnote-id-color-no-occurrences: #bdae93;
  --graph-node-focused: #2ccab7;
  --graph-node-unresolved: #bdae93;
  --graph-text: #faf2d6;
  --gray: var(--text-faint);
  --heading-formatting: #bdae93;
  --highlight: var(--text-highlight-bg);
  --hr-color: #95c1bb;
  --icon-color-active: #2ccab7;
  --icon-color-focused: #faf2d6;
  --inline-code: #83a598;
  --input-date-separator: #bdae93;
  --input-placeholder-color: #bdae93;
  --interactive-accent: #0b797d;
  --interactive-accent-rgb: #2ccab7;
  --interactive-before: #7c6f64;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #2ccab7;
  --link-external-color: #2ccab7;
  --link-unresolved-color: #2ccab7;
  --list-marker-color: #bdae93;
  --list-marker-color-collapsed: #2ccab7;
  --menu-background: #222B2F;
  --metadata-border-color: #95c1bb;
  --metadata-divider-color: #95c1bb;
  --metadata-input-text-color: #faf2d6;
  --modal-background: #1A2023;
  --nav-collapse-icon-color: #bdae93;
  --nav-collapse-icon-color-collapsed: #bdae93;
  --nav-heading-color: #faf2d6;
  --nav-heading-color-collapsed: #bdae93;
  --nav-heading-color-hover: #faf2d6;
  --nav-item-color-active: #faf2d6;
  --nav-item-color-highlighted: #2ccab7;
  --nav-item-color-hover: #faf2d6;
  --nav-item-color-selected: #faf2d6;
  --nav-tag-color: #bdae93;
  --pdf-background: #1A2023;
  --pdf-page-background: #1A2023;
  --pdf-shadow: 0 0 0 1px #95c1bb;
  --pdf-sidebar-background: #1A2023;
  --pdf-thumbnail-shadow: 0 0 0 1px #95c1bb;
  --pill-border-color: #95c1bb;
  --pill-color-hover: #faf2d6;
  --pill-color-remove: #bdae93;
  --pill-color-remove-hover: #2ccab7;
  --pre-code: #073334;
  --prompt-background: #1A2023;
  --ribbon-background: #222B2F;
  --ribbon-background-collapsed: #1A2023;
  --search-result-background: #1A2023;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #faf2d6;
  --setting-items-background: #1A2023;
  --setting-items-border-color: #95c1bb;
  --slider-track-background: #95c1bb;
  --status-bar-background: #222B2F;
  --status-bar-border-color: #95c1bb;
  --suggestion-background: #1A2023;
  --tab-background-active: #1A2023;
  --tab-container-background: #222B2F;
  --tab-outline-color: #95c1bb;
  --tab-switcher-background: #222B2F;
  --tab-switcher-menubar-background: linear-gradient(to top, #222B2F, transparent);
  --tab-text-color: #bdae93;
  --tab-text-color-focused-active-current: #faf2d6;
  --tab-text-color-focused-highlighted: #2ccab7;
  --table-add-button-border-color: #95c1bb;
  --table-border-color: #95c1bb;
  --table-drag-handle-background-active: #0b797d;
  --table-drag-handle-color: #bdae93;
  --table-drag-handle-color-active: #fff;
  --table-header-border-color: #95c1bb;
  --table-header-color: #faf2d6;
  --table-selection-border-color: #0b797d;
  --tag-color: #2ccab7;
  --tag-color-hover: #2ccab7;
  --tertiary: var(--text-accent);
  --text-a: #2ccab7;
  --text-a-hover: #83a598;
  --text-accent: #2ccab7;
  --text-faint: #bdae93;
  --text-highlight-bg: #22a578;
  --text-link: #83a598;
  --text-normal: #faf2d6;
  --text-on-accent: #fff;
  --text-selection: #16304D;
  --text-title-h1: #c1dde1;
  --text-title-h2: #8ab8bd;
  --text-title-h3: #56a7b0;
  --text-title-h4: #309093;
  --text-title-h5: #0b797d;
  --text-title-h6: #0b797d;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #222B2F;
  --titlebar-background-focused: #073334;
  --titlebar-border-color: #95c1bb;
  --titlebar-text-color-focused: #faf2d6;
  --vault-profile-color: #faf2d6;
  --vault-profile-color-hover: #faf2d6;
  --vim-cursor: #2ccab7;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 43, 47);
  color: rgb(250, 242, 214);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 32, 35);
  color: rgb(250, 242, 214);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 43, 47);
  color: rgb(250, 242, 214);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(149, 193, 187);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 43, 47);
  border-left-color: rgb(149, 193, 187);
  color: rgb(250, 242, 214);
}

body div#quartz-root {
  background-color: rgb(26, 32, 35);
  color: rgb(250, 242, 214);
}`,
    typography: `body .page article p > b, b {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .page article p > em, em {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .page article p > i, i {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .page article p > strong, strong {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 162, 0);
  outline: rgb(229, 162, 0) none 0px;
  text-decoration: rgb(229, 162, 0);
  text-decoration-color: rgb(229, 162, 0);
}

body del {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: line-through rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}`,
    links: `body a.external, footer a {
  color: rgb(44, 202, 183);
  outline: rgb(44, 202, 183) none 0px;
  text-decoration: rgb(44, 202, 183);
  text-decoration-color: rgb(44, 202, 183);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(44, 202, 183);
  outline: rgb(44, 202, 183) none 0px;
  text-decoration: rgb(44, 202, 183);
  text-decoration-color: rgb(44, 202, 183);
}

body a.internal.broken {
  color: rgb(44, 202, 183);
  outline: rgb(44, 202, 183) none 0px;
  text-decoration: rgb(44, 202, 183);
  text-decoration-color: rgb(44, 202, 183);
}`,
    lists: `body dd {
  color: rgb(250, 242, 214);
}

body dt {
  color: rgb(250, 242, 214);
}

body ol > li {
  color: rgb(250, 242, 214);
}

body ol.overflow {
  background-color: rgb(26, 32, 35);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body ul > li {
  color: rgb(250, 242, 214);
}

body ul.overflow {
  background-color: rgb(26, 32, 35);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(44, 202, 183);
  text-decoration: rgb(44, 202, 183);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body table {
  color: rgb(250, 242, 214);
}

body td {
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
  color: rgb(250, 242, 214);
}

body th {
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
  color: rgb(250, 242, 214);
}

body thead {
  border-bottom-color: rgb(149, 193, 187);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgb(149, 193, 187);
}`,
    code: `body code {
  background-color: rgb(7, 51, 52);
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
  color: rgb(131, 165, 152);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(7, 51, 52);
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(7, 51, 52);
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
  color: rgb(250, 242, 214);
}

body pre > code, pre:has(> code) {
  background-color: rgb(7, 51, 52);
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
}

body pre:has(> code) {
  background-color: rgb(7, 51, 52);
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
}`,
    images: `body audio {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body figcaption {
  color: rgb(250, 242, 214);
}

body figure {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body img {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body video {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    embeds: `body .file-embed {
  background-color: rgb(26, 32, 35);
}

body .footnotes {
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body .transclude {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(11, 121, 125);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(11, 121, 125);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(124, 111, 100);
  border-left-color: rgb(124, 111, 100);
  border-right-color: rgb(124, 111, 100);
  border-top-color: rgb(124, 111, 100);
}

body li.task-list-item[data-task='!'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='*'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='-'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='/'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='>'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='?'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='I'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='S'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='b'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='c'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='d'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='f'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='i'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='k'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='l'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='p'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='u'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='w'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
  color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > * {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(34, 43, 47);
  color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 43, 47);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(34, 43, 47);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(34, 43, 47);
  color: rgb(250, 242, 214);
}

body a.internal.tag-link::before {
  color: rgb(44, 202, 183);
}

body h1 {
  color: rgb(193, 221, 225);
}

body h2 {
  color: rgb(138, 184, 189);
}

body h2.page-title, h2.page-title a {
  color: rgb(250, 242, 214);
}

body h3 {
  color: rgb(86, 167, 176);
}

body h4 {
  color: rgb(48, 144, 147);
}

body h5 {
  color: rgb(11, 121, 125);
}

body h6 {
  color: rgb(11, 121, 125);
}

body hr {
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(250, 242, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(250, 242, 214);
}`,
    footer: `body footer {
  background-color: rgb(34, 43, 47);
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(250, 242, 214);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body ul.section-ul {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(189, 174, 147);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body .metadata {
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
}

body .navigation-progress {
  background-color: rgb(34, 43, 47);
}

body .page-header h2.page-title {
  color: rgb(250, 242, 214);
}

body abbr {
  color: rgb(250, 242, 214);
  text-decoration: underline dotted rgb(250, 242, 214);
}

body details {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body kbd {
  background-color: rgb(26, 32, 35);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body progress {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body sub {
  color: rgb(250, 242, 214);
}

body summary {
  color: rgb(250, 242, 214);
}

body sup {
  color: rgb(250, 242, 214);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #1bb0b6;
  --background-primary: #e7e7e7;
  --background-primary-alt: #e7e7e7;
  --background-secondary: #e3e3e3;
  --background-secondary-alt: #bebebe;
  --bases-cards-background: #e7e7e7;
  --bases-cards-cover-background: #e7e7e7;
  --bases-cards-shadow: 0 0 0 1px #1bb0b6;
  --bases-embed-border-color: #1bb0b6;
  --bases-table-border-color: #1bb0b6;
  --bases-table-cell-background-active: #e7e7e7;
  --bases-table-cell-background-disabled: #e7e7e7;
  --bases-table-cell-shadow-focus: 0 0 0 2px #22a578;
  --bases-table-group-background: #e7e7e7;
  --bases-table-header-background: #e7e7e7;
  --bases-table-summary-background: #e7e7e7;
  --blockquote-border-color: #22a578;
  --blur-background: color-mix(in srgb, #e7e7e7 65%, transparent) linear-gradient(#e7e7e7, color-mix(in srgb, #e7e7e7 65%, transparent));
  --canvas-background: #e7e7e7;
  --canvas-card-label-color: #665c54;
  --caret-color: #1A2023;
  --checkbox-border-color: #665c54;
  --checkbox-color: #22a578;
  --checkbox-marker-color: #e7e7e7;
  --code-background: #e7e7e7;
  --code-border-color: #1bb0b6;
  --code-comment: #665c54;
  --code-normal: #1A2023;
  --collapse-icon-color: #665c54;
  --collapse-icon-color-collapsed: #22a578;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #1bb0b6;
  --divider-color-hover: #22a578;
  --embed-block-shadow-hover: 0 0 0 1px #1bb0b6, inset 0 0 0 1px #1bb0b6;
  --embed-border-start: 2px solid #22a578;
  --file-header-background: #e7e7e7;
  --file-header-background-focused: #e7e7e7;
  --flair-color: #1A2023;
  --footnote-divider-color: #1bb0b6;
  --footnote-id-color-no-occurrences: #665c54;
  --graph-node-focused: #22a578;
  --graph-node-unresolved: #665c54;
  --graph-text: #1A2023;
  --gray: var(--text-faint);
  --heading-formatting: #665c54;
  --hr-color: #1bb0b6;
  --icon-color-active: #22a578;
  --icon-color-focused: #1A2023;
  --inline-code: #458588;
  --input-date-separator: #665c54;
  --input-placeholder-color: #665c54;
  --interactive-accent: #22a578;
  --interactive-accent-rgb: #22a578;
  --interactive-before: #a89984;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #22a578;
  --link-external-color: #22a578;
  --link-unresolved-color: #22a578;
  --list-marker-color: #665c54;
  --list-marker-color-collapsed: #22a578;
  --menu-background: #e3e3e3;
  --metadata-border-color: #1bb0b6;
  --metadata-divider-color: #1bb0b6;
  --metadata-input-text-color: #1A2023;
  --modal-background: #e7e7e7;
  --nav-collapse-icon-color: #665c54;
  --nav-collapse-icon-color-collapsed: #665c54;
  --nav-heading-color: #1A2023;
  --nav-heading-color-collapsed: #665c54;
  --nav-heading-color-hover: #1A2023;
  --nav-item-color-active: #1A2023;
  --nav-item-color-highlighted: #22a578;
  --nav-item-color-hover: #1A2023;
  --nav-item-color-selected: #1A2023;
  --nav-tag-color: #665c54;
  --pdf-background: #e7e7e7;
  --pdf-page-background: #e7e7e7;
  --pdf-sidebar-background: #e7e7e7;
  --pill-border-color: #1bb0b6;
  --pill-color-hover: #1A2023;
  --pill-color-remove: #665c54;
  --pill-color-remove-hover: #22a578;
  --pre-code: #bebebe;
  --prompt-background: #e7e7e7;
  --raised-background: color-mix(in srgb, #e7e7e7 65%, transparent) linear-gradient(#e7e7e7, color-mix(in srgb, #e7e7e7 65%, transparent));
  --ribbon-background: #e3e3e3;
  --ribbon-background-collapsed: #e7e7e7;
  --search-result-background: #e7e7e7;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #1A2023;
  --setting-items-background: #e7e7e7;
  --setting-items-border-color: #1bb0b6;
  --slider-track-background: #1bb0b6;
  --status-bar-background: #e3e3e3;
  --status-bar-border-color: #1bb0b6;
  --suggestion-background: #e7e7e7;
  --tab-background-active: #e7e7e7;
  --tab-container-background: #e3e3e3;
  --tab-outline-color: #1bb0b6;
  --tab-switcher-background: #e3e3e3;
  --tab-switcher-menubar-background: linear-gradient(to top, #e3e3e3, transparent);
  --tab-text-color: #665c54;
  --tab-text-color-focused-active-current: #1A2023;
  --tab-text-color-focused-highlighted: #22a578;
  --table-add-button-border-color: #1bb0b6;
  --table-border-color: #1bb0b6;
  --table-drag-handle-background-active: #22a578;
  --table-drag-handle-color: #665c54;
  --table-header-border-color: #1bb0b6;
  --table-header-color: #1A2023;
  --table-selection-border-color: #22a578;
  --tag-color: #22a578;
  --tag-color-hover: #22a578;
  --tertiary: var(--text-accent);
  --text-a: #22a578;
  --text-a-hover: #458588;
  --text-accent: #22a578;
  --text-faint: #665c54;
  --text-link: #458588;
  --text-normal: #1A2023;
  --text-title-h1: #1bb0b6;
  --text-title-h2: #3fa7ab;
  --text-title-h3: #458588;
  --text-title-h4: #4b6667;
  --text-title-h5: #3b4646;
  --titlebar-background: #e3e3e3;
  --titlebar-background-focused: #bebebe;
  --titlebar-border-color: #1bb0b6;
  --titlebar-text-color-focused: #1A2023;
  --vault-profile-color: #1A2023;
  --vault-profile-color-hover: #1A2023;
  --vim-cursor: #22a578;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(227, 227, 227);
  color: rgb(26, 32, 35);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(231, 231, 231);
  color: rgb(26, 32, 35);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(227, 227, 227);
  color: rgb(26, 32, 35);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(27, 176, 182);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(227, 227, 227);
  border-left-color: rgb(27, 176, 182);
  color: rgb(26, 32, 35);
}

body div#quartz-root {
  background-color: rgb(231, 231, 231);
  color: rgb(26, 32, 35);
}`,
    typography: `body .page article p > b, b {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .page article p > em, em {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .page article p > i, i {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .page article p > strong, strong {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 162, 0);
  outline: rgb(229, 162, 0) none 0px;
  text-decoration: rgb(229, 162, 0);
  text-decoration-color: rgb(229, 162, 0);
}

body del {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: line-through rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}`,
    links: `body a.external, footer a {
  color: rgb(34, 165, 120);
  outline: rgb(34, 165, 120) none 0px;
  text-decoration: rgb(34, 165, 120);
  text-decoration-color: rgb(34, 165, 120);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(34, 165, 120);
  outline: rgb(34, 165, 120) none 0px;
  text-decoration: rgb(34, 165, 120);
  text-decoration-color: rgb(34, 165, 120);
}

body a.internal.broken {
  color: rgb(34, 165, 120);
  outline: rgb(34, 165, 120) none 0px;
  text-decoration: rgb(34, 165, 120);
  text-decoration-color: rgb(34, 165, 120);
}`,
    lists: `body dd {
  color: rgb(26, 32, 35);
}

body dt {
  color: rgb(26, 32, 35);
}

body ol > li {
  color: rgb(26, 32, 35);
}

body ol.overflow {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body ul > li {
  color: rgb(26, 32, 35);
}

body ul.overflow {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(34, 165, 120);
  text-decoration: rgb(34, 165, 120);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body table {
  color: rgb(26, 32, 35);
}

body td {
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
  color: rgb(26, 32, 35);
}

body th {
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
  color: rgb(26, 32, 35);
}

body thead {
  border-bottom-color: rgb(27, 176, 182);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgb(27, 176, 182);
}`,
    code: `body code {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
  color: rgb(26, 32, 35);
}

body pre > code, pre:has(> code) {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
}

body pre:has(> code) {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body figcaption {
  color: rgb(26, 32, 35);
}

body figure {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body img {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body video {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    embeds: `body .file-embed {
  background-color: rgb(231, 231, 231);
}

body .footnotes {
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .transclude {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(34, 165, 120);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(34, 165, 120);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(124, 111, 100);
  border-left-color: rgb(124, 111, 100);
  border-right-color: rgb(124, 111, 100);
  border-top-color: rgb(124, 111, 100);
}

body li.task-list-item[data-task='!'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='*'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='-'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='/'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='>'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='?'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='I'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='S'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='b'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='c'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='d'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='f'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='i'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='k'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='l'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='p'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='u'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='w'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space {
  background-color: rgb(231, 231, 231);
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(227, 227, 227);
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(227, 227, 227);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(227, 227, 227);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(227, 227, 227);
  color: rgb(26, 32, 35);
}

body a.internal.tag-link::before {
  color: rgb(34, 165, 120);
}

body h1 {
  color: rgb(27, 176, 182);
}

body h2 {
  color: rgb(63, 167, 171);
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 32, 35);
}

body h3 {
  color: rgb(69, 133, 136);
}

body h4 {
  color: rgb(75, 102, 103);
}

body h5 {
  color: rgb(59, 70, 70);
}

body h6 {
  color: rgb(59, 70, 70);
}

body hr {
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

body ::-webkit-scrollbar-corner {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

body ::-webkit-scrollbar-track {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(26, 32, 35);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 32, 35);
}`,
    footer: `body footer {
  background-color: rgb(227, 227, 227);
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 32, 35);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body ul.section-ul {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(102, 92, 84);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .metadata {
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
}

body .navigation-progress {
  background-color: rgb(227, 227, 227);
}

body .page-header h2.page-title {
  color: rgb(26, 32, 35);
}

body abbr {
  color: rgb(26, 32, 35);
  text-decoration: underline dotted rgb(26, 32, 35);
}

body details {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body kbd {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body progress {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body sub {
  color: rgb(26, 32, 35);
}

body summary {
  color: rgb(26, 32, 35);
}

body sup {
  color: rgb(26, 32, 35);
}`,
  },
};
