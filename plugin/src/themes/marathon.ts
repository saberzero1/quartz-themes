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
  --accent-color-alt: rgb(252, 250, 255) !important;
  --accent-color-alt2: hsl(258, 88%, 112.2%, 1) !important;
  --accent-color-bg: white !important;
  --accent-color-bg2: white !important;
  --accent-color-bg2c: white !important;
  --accent-color-bg_d: #2e2e2e !important;
  --accent-color-bg_dc: #252525 !important;
  --accent-color-bright: rgba(138, 92, 245, 0.1) !important;
  --accent-color-bright2: rgb(138, 92, 245) !important;
  --accent-color-hsl: rgba(138, 92, 245, 0) !important;
  --accent-color-inverse: hsl(258, 88%, -1700%) !important;
  --accent-color-inverse2: rgb(255, 255, 255) !important;
  --accent-color-light01: rgba(138, 92, 245, 0.01) !important;
  --accent-color-light02: rgba(138, 92, 245, 0.02) !important;
  --accent-color-light03: rgba(138, 92, 245, 0.03) !important;
  --accent-color-light04: rgba(138, 92, 245, 0.04) !important;
  --accent-color-light05: rgba(138, 92, 245, 0.05) !important;
  --accent-color-light06: rgba(138, 92, 245, 0.06) !important;
  --accent-color-light07: rgba(138, 92, 245, 0.07) !important;
  --accent-color-light08: rgba(138, 92, 245, 0.08) !important;
  --accent-color-light09: rgba(138, 92, 245, 0.09) !important;
  --accent-color-light1: rgba(138, 92, 245, 0.1) !important;
  --accent-color-light10: rgb(138, 92, 245) !important;
  --accent-color-light2: rgba(138, 92, 245, 0.2) !important;
  --accent-color-light3: rgba(138, 92, 245, 0.3) !important;
  --accent-color-light4: rgba(138, 92, 245, 0.4) !important;
  --accent-color-light5: rgba(138, 92, 245, 0.5) !important;
  --accent-color-light6: rgba(138, 92, 245, 0.6) !important;
  --accent-color-light7: rgba(138, 92, 245, 0.7) !important;
  --accent-color-light8: rgba(138, 92, 245, 0.8) !important;
  --accent-color-light9: rgba(138, 92, 245, 0.9) !important;
  --background-primary: #2e2e2e !important;
  --background-secondary: #2e2e2e !important;
  --background-secondary-alt: #2e2e2e !important;
  --bases-cards-background: #2e2e2e !important;
  --bases-cards-radius: 5px !important;
  --bases-embed-border-radius: 5px !important;
  --bases-table-cell-background-active: #2e2e2e !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(138, 92, 245, 0) !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-header-background: #2e2e2e !important;
  --bases-table-summary-background: #2e2e2e !important;
  --blockquote-border-color: rgba(138, 92, 245, 0) !important;
  --callout-radius: 5px;
  --canvas-background: #2e2e2e !important;
  --canvas-controls-radius: 5px !important;
  --checkbox-color: rgba(138, 92, 245, 0) !important;
  --checkbox-marker-color: #2e2e2e !important;
  --checkbox-radius: 5px !important;
  --clickable-icon-radius: 5px !important;
  --code-radius: 5px !important;
  --collapse-icon-color-collapsed: rgba(138, 92, 245, 0) !important;
  --color-accent: rgba(138, 92, 245, 0) !important;
  --divider-color-hover: rgba(138, 92, 245, 0) !important;
  --embed-border-start: 2px solid rgba(138, 92, 245, 0) !important;
  --file-header-background: #2e2e2e !important;
  --file-header-background-focused: #2e2e2e !important;
  --file-line-width: 1000px !important;
  --footnote-radius: 5px !important;
  --graph-node-focused: rgba(138, 92, 245, 0) !important;
  --icon-color-active: rgba(138, 92, 245, 0) !important;
  --interactive-accent: rgba(138, 92, 245, 0) !important;
  --light: #2e2e2e !important;
  --lightgray: #2e2e2e !important;
  --link-color: rgba(138, 92, 245, 0) !important;
  --link-external-color: rgba(138, 92, 245, 0) !important;
  --link-unresolved-color: rgba(138, 92, 245, 0) !important;
  --list-marker-color-collapsed: rgba(138, 92, 245, 0) !important;
  --menu-background: #2e2e2e !important;
  --menu-radius: 5px !important;
  --modal-background: #2e2e2e !important;
  --modal-radius: 5px !important;
  --nav-item-color-highlighted: rgba(138, 92, 245, 0) !important;
  --nav-item-radius: 5px !important;
  --nav-tag-radius: 5px !important;
  --pdf-background: #2e2e2e !important;
  --pdf-page-background: #2e2e2e !important;
  --pdf-sidebar-background: #2e2e2e !important;
  --pill-color-remove-hover: rgba(138, 92, 245, 0) !important;
  --popover-height: 100% !important;
  --popover-width: 100% !important;
  --prompt-background: #2e2e2e !important;
  --radius-l: 5px !important;
  --radius-m: 5px !important;
  --radius-s: 5px !important;
  --ribbon-background: #2e2e2e !important;
  --ribbon-background-collapsed: #2e2e2e !important;
  --scrollbar-radius: 5px !important;
  --search-result-background: #2e2e2e !important;
  --secondary: rgba(138, 92, 245, 0) !important;
  --setting-items-radius: 5px !important;
  --slider-thumb-radius: 5px !important;
  --status-bar-background: #2e2e2e !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --suggestion-background: #2e2e2e !important;
  --tab-background-active: #2e2e2e !important;
  --tab-container-background: #2e2e2e !important;
  --tab-max-width: 50% !important;
  --tab-radius: 5px !important;
  --tab-radius-active: 5px !important;
  --tab-switcher-background: #2e2e2e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2e2e2e, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgba(138, 92, 245, 0) !important;
  --tab-text-color-focused-highlighted: rgba(138, 92, 245, 0) !important;
  --table-drag-handle-background-active: rgba(138, 92, 245, 0) !important;
  --table-selection-border-color: rgba(138, 92, 245, 0) !important;
  --tag-color: rgba(138, 92, 245, 0) !important;
  --tag-color-hover: rgba(138, 92, 245, 0) !important;
  --tertiary: rgba(138, 92, 245, 0) !important;
  --text-accent: rgba(138, 92, 245, 0) !important;
  --titlebar-background: #2e2e2e !important;
  --titlebar-background-focused: #2e2e2e !important;
  --toggle-radius: 5px !important;
  --toggle-thumb-radius: 5px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
  --accent-color-alt: rgb(252, 250, 255) !important;
  --accent-color-alt2: hsl(258, 88%, 112.2%, 1) !important;
  --accent-color-bg: white !important;
  --accent-color-bg2: white !important;
  --accent-color-bg2c: white !important;
  --accent-color-bg_d: #2e2e2e !important;
  --accent-color-bg_dc: #252525 !important;
  --accent-color-bright: rgba(138, 92, 245, 0.1) !important;
  --accent-color-bright2: rgb(138, 92, 245) !important;
  --accent-color-hsl: rgba(138, 92, 245, 0) !important;
  --accent-color-inverse: hsl(258, 88%, -1700%) !important;
  --accent-color-inverse2: rgb(255, 255, 255) !important;
  --accent-color-light01: rgba(138, 92, 245, 0.01) !important;
  --accent-color-light02: rgba(138, 92, 245, 0.02) !important;
  --accent-color-light03: rgba(138, 92, 245, 0.03) !important;
  --accent-color-light04: rgba(138, 92, 245, 0.04) !important;
  --accent-color-light05: rgba(138, 92, 245, 0.05) !important;
  --accent-color-light06: rgba(138, 92, 245, 0.06) !important;
  --accent-color-light07: rgba(138, 92, 245, 0.07) !important;
  --accent-color-light08: rgba(138, 92, 245, 0.08) !important;
  --accent-color-light09: rgba(138, 92, 245, 0.09) !important;
  --accent-color-light1: rgba(138, 92, 245, 0.1) !important;
  --accent-color-light10: rgb(138, 92, 245) !important;
  --accent-color-light2: rgba(138, 92, 245, 0.2) !important;
  --accent-color-light3: rgba(138, 92, 245, 0.3) !important;
  --accent-color-light4: rgba(138, 92, 245, 0.4) !important;
  --accent-color-light5: rgba(138, 92, 245, 0.5) !important;
  --accent-color-light6: rgba(138, 92, 245, 0.6) !important;
  --accent-color-light7: rgba(138, 92, 245, 0.7) !important;
  --accent-color-light8: rgba(138, 92, 245, 0.8) !important;
  --accent-color-light9: rgba(138, 92, 245, 0.9) !important;
  --background-primary: white !important;
  --background-secondary: white !important;
  --background-secondary-alt: white !important;
  --bases-cards-background: white !important;
  --bases-cards-radius: 5px !important;
  --bases-embed-border-radius: 5px !important;
  --bases-table-cell-background-active: white !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-header-background: white !important;
  --bases-table-summary-background: white !important;
  --blur-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)) !important;
  --callout-radius: 5px;
  --canvas-background: white !important;
  --canvas-controls-radius: 5px !important;
  --checkbox-marker-color: white !important;
  --checkbox-radius: 5px !important;
  --clickable-icon-radius: 5px !important;
  --code-radius: 5px !important;
  --collapse-icon-color-collapsed: rgba(138, 92, 245, 0) !important;
  --color-accent: rgba(138, 92, 245, 0) !important;
  --file-header-background: white !important;
  --file-header-background-focused: white !important;
  --file-line-width: 1000px !important;
  --footnote-radius: 5px !important;
  --graph-node-focused: rgba(138, 92, 245, 0) !important;
  --icon-color-active: rgba(138, 92, 245, 0) !important;
  --light: white !important;
  --lightgray: white !important;
  --link-color: rgba(138, 92, 245, 0) !important;
  --link-external-color: rgba(138, 92, 245, 0) !important;
  --link-unresolved-color: rgba(138, 92, 245, 0) !important;
  --list-marker-color-collapsed: rgba(138, 92, 245, 0) !important;
  --menu-background: white !important;
  --menu-radius: 5px !important;
  --modal-background: white !important;
  --modal-radius: 5px !important;
  --nav-item-color-highlighted: rgba(138, 92, 245, 0) !important;
  --nav-item-radius: 5px !important;
  --nav-tag-radius: 5px !important;
  --pdf-background: white !important;
  --pdf-page-background: white !important;
  --pdf-sidebar-background: white !important;
  --pill-color-remove-hover: rgba(138, 92, 245, 0) !important;
  --popover-height: 100% !important;
  --popover-width: 100% !important;
  --prompt-background: white !important;
  --radius-l: 5px !important;
  --radius-m: 5px !important;
  --radius-s: 5px !important;
  --raised-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)) !important;
  --ribbon-background: white !important;
  --ribbon-background-collapsed: white !important;
  --scrollbar-radius: 5px !important;
  --search-result-background: white !important;
  --secondary: rgba(138, 92, 245, 0) !important;
  --setting-items-radius: 5px !important;
  --slider-thumb-radius: 5px !important;
  --status-bar-background: white !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --suggestion-background: white !important;
  --tab-background-active: white !important;
  --tab-container-background: white !important;
  --tab-max-width: 50% !important;
  --tab-radius: 5px !important;
  --tab-radius-active: 5px !important;
  --tab-switcher-background: white !important;
  --tab-switcher-menubar-background: linear-gradient(to top, white, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgba(138, 92, 245, 0) !important;
  --tab-text-color-focused-highlighted: rgba(138, 92, 245, 0) !important;
  --tag-color: rgba(138, 92, 245, 0) !important;
  --tag-color-hover: rgba(138, 92, 245, 0) !important;
  --tertiary: rgba(138, 92, 245, 0) !important;
  --text-accent: rgba(138, 92, 245, 0) !important;
  --titlebar-background: white !important;
  --titlebar-background-focused: white !important;
  --toggle-radius: 5px !important;
  --toggle-thumb-radius: 5px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
