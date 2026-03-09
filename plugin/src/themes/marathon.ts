import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "marathon",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color-alt: rgb(252, 250, 255);
  --accent-color-alt2: hsl(258, 88%, 112.2%, 1);
  --accent-color-bg: white;
  --accent-color-bg2: white;
  --accent-color-bg2c: white;
  --accent-color-bg_d: #2e2e2e;
  --accent-color-bg_dc: #252525;
  --accent-color-bright: rgba(138, 92, 245, 0.1);
  --accent-color-bright2: rgb(138, 92, 245);
  --accent-color-hsl: rgba(138, 92, 245, 0);
  --accent-color-inverse: hsl(258, 88%, -1700%);
  --accent-color-inverse2: rgb(255, 255, 255);
  --accent-color-light01: rgba(138, 92, 245, 0.01);
  --accent-color-light02: rgba(138, 92, 245, 0.02);
  --accent-color-light03: rgba(138, 92, 245, 0.03);
  --accent-color-light04: rgba(138, 92, 245, 0.04);
  --accent-color-light05: rgba(138, 92, 245, 0.05);
  --accent-color-light06: rgba(138, 92, 245, 0.06);
  --accent-color-light07: rgba(138, 92, 245, 0.07);
  --accent-color-light08: rgba(138, 92, 245, 0.08);
  --accent-color-light09: rgba(138, 92, 245, 0.09);
  --accent-color-light1: rgba(138, 92, 245, 0.1);
  --accent-color-light10: rgb(138, 92, 245);
  --accent-color-light2: rgba(138, 92, 245, 0.2);
  --accent-color-light3: rgba(138, 92, 245, 0.3);
  --accent-color-light4: rgba(138, 92, 245, 0.4);
  --accent-color-light5: rgba(138, 92, 245, 0.5);
  --accent-color-light6: rgba(138, 92, 245, 0.6);
  --accent-color-light7: rgba(138, 92, 245, 0.7);
  --accent-color-light8: rgba(138, 92, 245, 0.8);
  --accent-color-light9: rgba(138, 92, 245, 0.9);
  --background-primary: #2e2e2e;
  --background-secondary: #2e2e2e;
  --background-secondary-alt: #2e2e2e;
  --bases-cards-background: #2e2e2e;
  --bases-cards-radius: 5px;
  --bases-embed-border-radius: 5px;
  --bases-table-cell-background-active: #2e2e2e;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(138, 92, 245, 0);
  --bases-table-container-border-radius: 5px;
  --bases-table-header-background: #2e2e2e;
  --bases-table-summary-background: #2e2e2e;
  --blockquote-border-color: rgba(138, 92, 245, 0);
  --callout-radius: 5px;
  --canvas-background: #2e2e2e;
  --canvas-controls-radius: 5px;
  --checkbox-color: rgba(138, 92, 245, 0);
  --checkbox-marker-color: #2e2e2e;
  --checkbox-radius: 5px;
  --clickable-icon-radius: 5px;
  --code-radius: 5px;
  --collapse-icon-color-collapsed: rgba(138, 92, 245, 0);
  --color-accent: rgba(138, 92, 245, 0);
  --divider-color-hover: rgba(138, 92, 245, 0);
  --embed-border-start: 2px solid rgba(138, 92, 245, 0);
  --file-header-background: #2e2e2e;
  --file-header-background-focused: #2e2e2e;
  --file-line-width: 1000px;
  --footnote-radius: 5px;
  --graph-node-focused: rgba(138, 92, 245, 0);
  --icon-color-active: rgba(138, 92, 245, 0);
  --interactive-accent: rgba(138, 92, 245, 0);
  --link-color: rgba(138, 92, 245, 0);
  --link-external-color: rgba(138, 92, 245, 0);
  --link-unresolved-color: rgba(138, 92, 245, 0);
  --list-marker-color-collapsed: rgba(138, 92, 245, 0);
  --menu-background: #2e2e2e;
  --menu-radius: 5px;
  --modal-background: #2e2e2e;
  --modal-radius: 5px;
  --nav-item-color-highlighted: rgba(138, 92, 245, 0);
  --nav-item-radius: 5px;
  --nav-tag-radius: 5px;
  --pdf-background: #2e2e2e;
  --pdf-page-background: #2e2e2e;
  --pdf-sidebar-background: #2e2e2e;
  --pill-color-remove-hover: rgba(138, 92, 245, 0);
  --popover-height: 100%;
  --popover-width: 100%;
  --prompt-background: #2e2e2e;
  --radius-l: 5px;
  --radius-m: 5px;
  --radius-s: 5px;
  --ribbon-background: #2e2e2e;
  --ribbon-background-collapsed: #2e2e2e;
  --scrollbar-radius: 5px;
  --search-result-background: #2e2e2e;
  --setting-items-radius: 5px;
  --slider-thumb-radius: 5px;
  --status-bar-background: #2e2e2e;
  --status-bar-radius: 5px 0 0 0;
  --suggestion-background: #2e2e2e;
  --tab-background-active: #2e2e2e;
  --tab-container-background: #2e2e2e;
  --tab-max-width: 50%;
  --tab-radius: 5px;
  --tab-radius-active: 5px;
  --tab-switcher-background: #2e2e2e;
  --tab-switcher-menubar-background: linear-gradient(to top, #2e2e2e, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgba(138, 92, 245, 0);
  --tab-text-color-focused-highlighted: rgba(138, 92, 245, 0);
  --table-drag-handle-background-active: rgba(138, 92, 245, 0);
  --table-selection-border-color: rgba(138, 92, 245, 0);
  --tag-color: rgba(138, 92, 245, 0);
  --tag-color-hover: rgba(138, 92, 245, 0);
  --text-accent: rgba(138, 92, 245, 0);
  --titlebar-background: #2e2e2e;
  --titlebar-background-focused: #2e2e2e;
  --toggle-radius: 5px;
  --toggle-thumb-radius: 5px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(46, 46, 46);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(46, 46, 46);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(46, 46, 46);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(46, 46, 46);
  border-left-color: rgb(138, 92, 245);
  border-left-style: solid;
}

body div#quartz-root {
  background-color: rgb(46, 46, 46);
}`,
    typography: `body .page article p > em, em {
  font-weight: 300;
}

body .page article p > i, i {
  font-weight: 300;
}

body .text-highlight {
  background-color: rgb(138, 92, 245);
  color: rgb(0, 0, 0);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  font-weight: 300;
}

body p {
  font-weight: 300;
}`,
    links: `body a.external, footer a {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body a.internal.broken {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
}`,
    lists: `body dt {
  font-weight: 300;
}

body ol.overflow {
  background-color: rgb(46, 46, 46);
}

body ul.overflow {
  background-color: rgb(46, 46, 46);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(138, 92, 245, 0.05);
}`,
    tables: `body table {
  margin-top: 15px;
  width: 202.938px;
}

body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  font-weight: 300;
}

body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  font-weight: 300;
}`,
    code: `body code {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body pre > code, pre:has(> code) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body pre:has(> code) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `body img {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="example"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="info"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="note"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="question"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="success"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-left-width: 2px;
  border-right-color: rgba(138, 92, 245, 0.5);
  border-right-width: 2px;
  border-top-color: rgba(138, 92, 245, 0.5);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space {
  background-color: rgb(46, 46, 46);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > * {
  font-weight: 300;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  font-weight: 300;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(46, 46, 46);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-weight: 300;
}

body a.internal.tag-link::before {
  color: rgb(138, 92, 245);
}

body h1 {
  color: rgb(138, 92, 245);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h2 {
  color: rgb(138, 92, 245);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h2.page-title, h2.page-title a {
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h3 {
  color: rgb(138, 92, 245);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h4 {
  color: rgba(138, 92, 245, 0.8);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h5 {
  color: rgba(138, 92, 245, 0.7);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h6 {
  color: rgba(138, 92, 245, 0.6);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body hr {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: rgb(138, 92, 245);
  border-left-style: solid;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-top-style: solid;
  margin-bottom: 15px;
  margin-left: -5px;
  margin-right: -5px;
  margin-top: 15px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 1.6px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 1.6px;
}

body ::-webkit-scrollbar {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-corner {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-track {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-weight: 300;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-weight: 300;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-weight: 300;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(0, 0, 0);
}`,
    toc: `body li.depth-0 {
  font-weight: 300;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    footer: `body footer {
  background-color: rgb(46, 46, 46);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-weight: 300;
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    misc: `body .navigation-progress {
  background-color: rgb(46, 46, 46);
}

body kbd {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body summary {
  font-weight: 300;
}`,
  },
  light: {
    base: `:root:root {
  --accent-color-alt: rgb(252, 250, 255);
  --accent-color-alt2: hsl(258, 88%, 112.2%, 1);
  --accent-color-bg: white;
  --accent-color-bg2: white;
  --accent-color-bg2c: white;
  --accent-color-bg_d: #2e2e2e;
  --accent-color-bg_dc: #252525;
  --accent-color-bright: rgba(138, 92, 245, 0.1);
  --accent-color-bright2: rgb(138, 92, 245);
  --accent-color-hsl: rgba(138, 92, 245, 0);
  --accent-color-inverse: hsl(258, 88%, -1700%);
  --accent-color-inverse2: rgb(255, 255, 255);
  --accent-color-light01: rgba(138, 92, 245, 0.01);
  --accent-color-light02: rgba(138, 92, 245, 0.02);
  --accent-color-light03: rgba(138, 92, 245, 0.03);
  --accent-color-light04: rgba(138, 92, 245, 0.04);
  --accent-color-light05: rgba(138, 92, 245, 0.05);
  --accent-color-light06: rgba(138, 92, 245, 0.06);
  --accent-color-light07: rgba(138, 92, 245, 0.07);
  --accent-color-light08: rgba(138, 92, 245, 0.08);
  --accent-color-light09: rgba(138, 92, 245, 0.09);
  --accent-color-light1: rgba(138, 92, 245, 0.1);
  --accent-color-light10: rgb(138, 92, 245);
  --accent-color-light2: rgba(138, 92, 245, 0.2);
  --accent-color-light3: rgba(138, 92, 245, 0.3);
  --accent-color-light4: rgba(138, 92, 245, 0.4);
  --accent-color-light5: rgba(138, 92, 245, 0.5);
  --accent-color-light6: rgba(138, 92, 245, 0.6);
  --accent-color-light7: rgba(138, 92, 245, 0.7);
  --accent-color-light8: rgba(138, 92, 245, 0.8);
  --accent-color-light9: rgba(138, 92, 245, 0.9);
  --background-primary: white;
  --background-secondary: white;
  --background-secondary-alt: white;
  --bases-cards-background: white;
  --bases-cards-radius: 5px;
  --bases-embed-border-radius: 5px;
  --bases-table-cell-background-active: white;
  --bases-table-container-border-radius: 5px;
  --bases-table-header-background: white;
  --bases-table-summary-background: white;
  --blur-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent));
  --callout-radius: 5px;
  --canvas-background: white;
  --canvas-controls-radius: 5px;
  --checkbox-marker-color: white;
  --checkbox-radius: 5px;
  --clickable-icon-radius: 5px;
  --code-radius: 5px;
  --collapse-icon-color-collapsed: rgba(138, 92, 245, 0);
  --color-accent: rgba(138, 92, 245, 0);
  --file-header-background: white;
  --file-header-background-focused: white;
  --file-line-width: 1000px;
  --footnote-radius: 5px;
  --graph-node-focused: rgba(138, 92, 245, 0);
  --icon-color-active: rgba(138, 92, 245, 0);
  --link-color: rgba(138, 92, 245, 0);
  --link-external-color: rgba(138, 92, 245, 0);
  --link-unresolved-color: rgba(138, 92, 245, 0);
  --list-marker-color-collapsed: rgba(138, 92, 245, 0);
  --menu-background: white;
  --menu-radius: 5px;
  --modal-background: white;
  --modal-radius: 5px;
  --nav-item-color-highlighted: rgba(138, 92, 245, 0);
  --nav-item-radius: 5px;
  --nav-tag-radius: 5px;
  --pdf-background: white;
  --pdf-page-background: white;
  --pdf-sidebar-background: white;
  --pill-color-remove-hover: rgba(138, 92, 245, 0);
  --popover-height: 100%;
  --popover-width: 100%;
  --prompt-background: white;
  --radius-l: 5px;
  --radius-m: 5px;
  --radius-s: 5px;
  --raised-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent));
  --ribbon-background: white;
  --ribbon-background-collapsed: white;
  --scrollbar-radius: 5px;
  --search-result-background: white;
  --setting-items-radius: 5px;
  --slider-thumb-radius: 5px;
  --status-bar-background: white;
  --status-bar-radius: 5px 0 0 0;
  --suggestion-background: white;
  --tab-background-active: white;
  --tab-container-background: white;
  --tab-max-width: 50%;
  --tab-radius: 5px;
  --tab-radius-active: 5px;
  --tab-switcher-background: white;
  --tab-switcher-menubar-background: linear-gradient(to top, white, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgba(138, 92, 245, 0);
  --tab-text-color-focused-highlighted: rgba(138, 92, 245, 0);
  --tag-color: rgba(138, 92, 245, 0);
  --tag-color-hover: rgba(138, 92, 245, 0);
  --text-accent: rgba(138, 92, 245, 0);
  --titlebar-background: white;
  --titlebar-background-focused: white;
  --toggle-radius: 5px;
  --toggle-thumb-radius: 5px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(138, 92, 245);
  border-left-style: solid;
}`,
    typography: `body .page article p > em, em {
  font-weight: 300;
}

body .page article p > i, i {
  font-weight: 300;
}

body .text-highlight {
  background-color: rgb(138, 92, 245);
  color: rgb(0, 0, 0);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  font-weight: 300;
}

body p {
  font-weight: 300;
}`,
    lists: `body dt {
  font-weight: 300;
}`,
    blockquotes: `body blockquote {
  background-color: rgba(138, 92, 245, 0.05);
}`,
    tables: `body .spacer {
  background-color: rgb(255, 255, 255);
}

body table {
  margin-top: 15px;
  width: 202.938px;
}

body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  font-weight: 300;
}

body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  font-weight: 300;
}`,
    code: `body code {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body pre > code, pre:has(> code) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body pre:has(> code) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `body img {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="example"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="info"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="note"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="question"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="success"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-left-width: 2px;
  border-right-color: rgba(138, 92, 245, 0.5);
  border-right-width: 2px;
  border-top-color: rgba(138, 92, 245, 0.5);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > * {
  font-weight: 300;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  font-weight: 300;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-weight: 300;
}

body h1 {
  color: rgb(138, 92, 245);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h2 {
  color: rgb(138, 92, 245);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h2.page-title, h2.page-title a {
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h3 {
  color: rgb(138, 92, 245);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h4 {
  color: rgba(138, 92, 245, 0.8);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h5 {
  color: rgba(138, 92, 245, 0.7);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body h6 {
  color: rgba(138, 92, 245, 0.6);
  font-family: menda, "Cascadia Code", inter, verdana;
}

body hr {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: rgb(138, 92, 245);
  border-left-style: solid;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-top-style: solid;
  margin-bottom: 15px;
  margin-left: -5px;
  margin-right: -5px;
  margin-top: 15px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 1.6px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 1.6px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-weight: 300;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-weight: 300;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-weight: 300;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(0, 0, 0);
}`,
    toc: `body li.depth-0 {
  font-weight: 300;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-weight: 300;
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    misc: `body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body kbd {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body summary {
  font-weight: 300;
}`,
  },
};
