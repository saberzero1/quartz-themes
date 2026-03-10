import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "orange", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 30;
  --accent-l: 50%;
  --accent-s: 61%;
  --background-modifier-active-hover: rgba(205, 128, 50, 0.1);
  --background-primary: #0F0F0F;
  --background-primary-alt: #141414;
  --background-secondary: #141414;
  --background-secondary-alt: #0F0F0F;
  --bases-cards-background: #0F0F0F;
  --bases-cards-cover-background: #141414;
  --bases-table-cell-background-active: #0F0F0F;
  --bases-table-cell-background-disabled: #141414;
  --bases-table-cell-background-selected: rgba(205, 128, 50, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(205, 128, 50);
  --bases-table-group-background: #141414;
  --bases-table-header-background: #0F0F0F;
  --bases-table-row-background-hover: #141414;
  --bases-table-summary-background: #0F0F0F;
  --blockquote-border-color: rgb(205, 128, 50);
  --canvas-background: #0F0F0F;
  --caret-color: #CD7F32;
  --checkbox-color: rgb(205, 128, 50);
  --checkbox-color-hover: rgb(214, 141, 81);
  --checkbox-marker-color: #0F0F0F;
  --code-background: #0A0A0A;
  --code-normal: #50C878;
  --collapse-icon-color-collapsed: rgb(214, 141, 81);
  --color-accent: rgb(205, 128, 50);
  --color-accent-1: rgb(214, 141, 81);
  --color-accent-2: rgb(223, 156, 109);
  --color-accent-hsl: 30, 61%, 50%;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: rgb(205, 128, 50);
  --embed-border-start: 2px solid rgb(205, 128, 50);
  --file-header-background: #0F0F0F;
  --file-header-background-focused: #0F0F0F;
  --flair-color: #cccccc;
  --graph-node-focused: rgb(214, 141, 81);
  --graph-text: #cccccc;
  --gray: var(--text-normal);
  --h1-color: #CD7F32;
  --h1-size: 35px;
  --h2-color: #CD7F32;
  --h2-size: 30px;
  --h3-color: #CD7F32;
  --h3-size: 24px;
  --h4-color: #CD7F32;
  --h4-size: 20px;
  --h5-color: #CD7F32;
  --h5-size: 18px;
  --h6-color: #CD7F32;
  --h6-size: 16px;
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: rgb(214, 141, 81);
  --icon-color-focused: #cccccc;
  --inline-title-color: #CD7F32;
  --inline-title-size: 35px;
  --interactive-accent: rgb(205, 128, 50);
  --interactive-accent-hover: rgb(214, 141, 81);
  --interactive-accent-hsl: 30, 61%, 50%;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #0067A5;
  --link-color-hover: rgb(223, 156, 109);
  --link-external-color: #0067A5;
  --link-external-color-hover: rgb(223, 156, 109);
  --link-unresolved-color: #0067A5;
  --link-unresolved-decoration-color: rgba(205, 128, 50, 0.3);
  --list-marker-color: #CD7F32;
  --list-marker-color-collapsed: #CD7F32;
  --menu-background: #141414;
  --metadata-input-text-color: #cccccc;
  --modal-background: #0F0F0F;
  --nav-collapse-icon-color: #CD7F32;
  --nav-heading-color: #CD7F32;
  --nav-heading-color-hover: #cccccc;
  --nav-item-background-active: #333333;
  --nav-item-background-selected: rgba(205, 128, 50, 0.15);
  --nav-item-color: #CD7F32;
  --nav-item-color-active: #CD7F32;
  --nav-item-color-highlighted: rgb(214, 141, 81);
  --nav-item-color-hover: #cccccc;
  --nav-item-color-selected: #cccccc;
  --nav-item-size: 14px;
  --pdf-background: #0F0F0F;
  --pdf-page-background: #0F0F0F;
  --pdf-sidebar-background: #0F0F0F;
  --pill-color-hover: #cccccc;
  --pill-color-remove-hover: rgb(214, 141, 81);
  --prompt-background: #0F0F0F;
  --ribbon-background: #141414;
  --ribbon-background-collapsed: #0F0F0F;
  --search-result-background: #0F0F0F;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #cccccc;
  --setting-items-background: #141414;
  --status-bar-background: #141414;
  --suggestion-background: #0F0F0F;
  --tab-background-active: #0F0F0F;
  --tab-container-background: #141414;
  --tab-switcher-background: #141414;
  --tab-switcher-menubar-background: linear-gradient(to top, #141414, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(205, 128, 50);
  --tab-text-color-focused-active-current: #cccccc;
  --tab-text-color-focused-highlighted: rgb(214, 141, 81);
  --table-add-button-color: rgb(205, 128, 50);
  --table-background: #141414;
  --table-column-alt-background: #141414;
  --table-drag-handle-background-active: rgb(205, 128, 50);
  --table-drag-handle-color: rgb(205, 128, 50);
  --table-drag-handle-color-active: #CD7F32;
  --table-header-background: #141414;
  --table-header-color: rgb(205, 128, 50);
  --table-header-size: 24px;
  --table-header-weight: bold;
  --table-row-alt-background: #141414;
  --table-row-alt-background-hover: #141414;
  --table-row-background-hover: #141414;
  --table-selection: rgba(205, 128, 50, 0.1);
  --table-selection-border-color: rgb(205, 128, 50);
  --table-text-size: 18px;
  --tag-background: rgba(205, 128, 50, 0.1);
  --tag-background-hover: rgba(205, 128, 50, 0.2);
  --tag-border-color: rgba(205, 128, 50, 0.15);
  --tag-border-color-hover: rgba(205, 128, 50, 0.15);
  --tag-color: rgb(214, 141, 81);
  --tag-color-hover: rgb(214, 141, 81);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(214, 141, 81);
  --text-accent-hover: rgb(223, 156, 109);
  --text-normal: #cccccc;
  --text-selection: rgba(205, 128, 50, 0.33);
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: #141414;
  --titlebar-background-focused: #0F0F0F;
  --titlebar-text-color-focused: #cccccc;
  --vault-profile-color: #cccccc;
  --vault-profile-color-hover: #cccccc;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(15, 15, 15);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

body div#quartz-root {
  background-color: rgb(15, 15, 15);
  color: rgb(204, 204, 204);
}`,
    typography: `body .page article p > b, b {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > em, em {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > i, i {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > strong, strong {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .text-highlight {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body del {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 103, 165);
  outline: rgb(0, 103, 165) none 0px;
  text-decoration: underline rgb(0, 103, 165);
  text-decoration-color: rgb(0, 103, 165);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 103, 165);
  outline: rgb(0, 103, 165) none 0px;
  text-decoration: underline rgb(0, 103, 165);
  text-decoration-color: rgb(0, 103, 165);
}

body a.internal.broken {
  color: rgb(0, 103, 165);
  outline: rgb(0, 103, 165) none 0px;
  text-decoration: underline rgba(205, 128, 50, 0.3);
  text-decoration-color: rgba(205, 128, 50, 0.3);
}`,
    lists: `body dd {
  color: rgb(204, 204, 204);
}

body dt {
  color: rgb(204, 204, 204);
}

body ol > li {
  color: rgb(204, 204, 204);
}

body ol.overflow {
  background-color: rgb(15, 15, 15);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ul > li {
  color: rgb(204, 204, 204);
}

body ul.overflow {
  background-color: rgb(15, 15, 15);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body table {
  color: rgb(204, 204, 204);
  width: 320.312px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(20, 20, 20);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(20, 20, 20);
}

body td {
  color: rgb(204, 204, 204);
}

body th {
  color: rgb(205, 128, 50);
  font-weight: 700;
}

body tr {
  background-color: rgb(20, 20, 20);
}`,
    code: `body code {
  border-bottom-color: rgb(80, 200, 120);
  border-left-color: rgb(80, 200, 120);
  border-right-color: rgb(80, 200, 120);
  border-top-color: rgb(80, 200, 120);
  color: rgb(80, 200, 120);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(10, 10, 10);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(10, 10, 10);
  color: rgb(204, 204, 204);
}

body pre > code, pre:has(> code) {
  background-color: rgb(10, 10, 10);
}

body pre:has(> code) {
  background-color: rgb(10, 10, 10);
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body figcaption {
  color: rgb(204, 204, 204);
}

body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `body .file-embed {
  background-color: rgb(20, 20, 20);
}

body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(205, 128, 50);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(205, 128, 50);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    search: `body .search > .search-button {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space {
  background-color: rgb(15, 15, 15);
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(205, 128, 50, 0.1);
  border-bottom-color: rgba(205, 128, 50, 0.15);
  border-left-color: rgba(205, 128, 50, 0.15);
  border-right-color: rgba(205, 128, 50, 0.15);
  border-top-color: rgba(205, 128, 50, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(214, 140, 79);
}

body h1 {
  color: rgb(205, 127, 50);
}

body h2 {
  color: rgb(205, 127, 50);
}

body h2.page-title, h2.page-title a {
  color: rgb(205, 127, 50);
}

body h3 {
  color: rgb(205, 127, 50);
}

body h4 {
  color: rgb(205, 127, 50);
}

body h5 {
  color: rgb(205, 127, 50);
}

body h6 {
  color: rgb(205, 127, 50);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-corner {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-track {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(205, 127, 50);
  font-weight: 300;
  text-decoration: rgb(205, 127, 50);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(205, 127, 50);
  border-left-color: rgb(205, 127, 50);
  border-right-color: rgb(205, 127, 50);
  border-top-color: rgb(205, 127, 50);
  color: rgb(205, 127, 50);
}`,
    footer: `body footer {
  background-color: rgb(20, 20, 20);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(205, 127, 50);
  text-decoration: rgb(205, 127, 50);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(205, 127, 50);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body li.section-li > .section .meta {
  color: rgb(205, 127, 50);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(205, 127, 50);
  text-decoration: rgb(205, 127, 50);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

body abbr {
  color: rgb(204, 204, 204);
  text-decoration: underline dotted rgb(204, 204, 204);
}

body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body kbd {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(80, 200, 120);
  border-left-color: rgb(80, 200, 120);
  border-right-color: rgb(80, 200, 120);
  border-top-color: rgb(80, 200, 120);
  color: rgb(80, 200, 120);
}

body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body sub {
  color: rgb(204, 204, 204);
}

body summary {
  color: rgb(204, 204, 204);
}

body sup {
  color: rgb(204, 204, 204);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247);
  --blockquote-border-color: rgb(153, 115, 247);
  --bold-weight: 600;
  --callout-title-weight: 600;
  --checkbox-color: rgb(153, 115, 247);
  --checkbox-color-hover: rgb(166, 139, 249);
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --divider-color-hover: rgb(153, 115, 247);
  --embed-border-start: 2px solid rgb(153, 115, 247);
  --graph-node-focused: rgb(138, 92, 245);
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: rgb(138, 92, 245);
  --interactive-accent: rgb(153, 115, 247);
  --interactive-accent-hover: rgb(166, 139, 249);
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(166, 139, 249);
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(166, 139, 249);
  --link-unresolved-color: rgb(138, 92, 245);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --metadata-input-height: 28px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --pill-color-remove-hover: rgb(138, 92, 245);
  --secondary: var(--text-accent);
  --sidebar-markdown-font-size: 14.4px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-drag-handle-background-active: rgb(153, 115, 247);
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(153, 115, 247);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: rgb(138, 92, 245);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-selection: rgba(138, 92, 245, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: none solid rgb(92, 92, 92);
}`,
  },
};
