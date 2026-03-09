import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "salem", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 45;
  --accent-l: 60%;
  --accent-s: 41%;
  --active-bg: #2527229e;
  --background-modifier-active-hover: rgba(195, 174, 111, 0.1);
  --background-primary: #110f0f;
  --background-secondary: #111111;
  --bases-cards-background: #110f0f;
  --bases-group-heading-property-color: rgb(198 193 135);
  --bases-table-cell-background-active: #110f0f;
  --bases-table-cell-background-selected: rgba(195, 174, 111, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(195, 174, 111);
  --bases-table-header-background: #110f0f;
  --bases-table-header-color: rgb(198 193 135);
  --bases-table-summary-background: #110f0f;
  --blockquote-background-color: #1d1d1da4;
  --blockquote-background-hover: #232323ef;
  --blockquote-border-color: rgb(195, 174, 111);
  --blockquote-border-thickness: 3px;
  --button-radius: 8px;
  --callout-radius: 20px;
  --callout-tip: 241, 226, 25;
  --canvas-background: #110f0f;
  --canvas-color: 241, 226, 25;
  --canvas-color-2: 165, 156, 103;
  --canvas-color-3: transparent;
  --checkbox-border-color-hover: rgb(198 193 135);
  --checkbox-color: rgb(195, 174, 111);
  --checkbox-color-hover: rgb(209, 189, 143);
  --checkbox-marker-color: #110f0f;
  --checkbox-radius: 16px;
  --checklist-done-color: rgb(198 193 135 / 45%);
  --checklist-done-decoration: none;
  --cm-active: #2e2e1d39;
  --code-background: black;
  --code-punctuation: rgb(198 193 135);
  --code-radius: 12px;
  --collapse-icon-color-collapsed: rgb(209, 189, 143);
  --color-accent: rgb(195, 174, 111);
  --color-accent-1: rgb(209, 189, 143);
  --color-accent-2: rgb(222, 205, 171);
  --color-accent-hsl: 45, 41%, 60%;
  --color-crimson: rgb(172, 99, 99);
  --color-crimson-rgb: 172, 99, 99;
  --color-goldFusion-rgb: 165, 156, 103;
  --color-starred: rgb(241, 226, 25);
  --color-starred-rgb: 241, 226, 25;
  --divider-color: #262626;
  --divider-color-hover: rgb(195, 174, 111);
  --embed-border-start: 2px solid rgb(195, 174, 111);
  --file-header-background: #110f0f;
  --file-header-background-focused: #110f0f;
  --footnote-id-color: rgb(198 193 135);
  --footnote-input-background-active: #111111;
  --graph-node: rgb(198 193 135);
  --graph-node-focused: rgb(209, 189, 143);
  --h1-size: 2em;
  --h2-size: 1.7em;
  --h3-size: 1.4em;
  --h4-size: 1.2em;
  --h5-size: 1.1em;
  --hr-color: rgb(198 193 135 / 10%);
  --icon-color: rgb(198 193 135);
  --icon-color-active: rgb(209, 189, 143);
  --icon-color-hover: rgb(198 193 135);
  --inline-title-color: #fb464c;
  --inline-title-size: 2.3em;
  --input-radius: 8px;
  --interactive-accent: rgb(195, 174, 111);
  --interactive-accent-hover: rgb(209, 189, 143);
  --interactive-accent-hsl: 45, 41%, 60%;
  --italic-color: rgb(172, 99, 99);
  --line-height-tight: 1.8;
  --link-color: rgb(209, 189, 143);
  --link-color-hover: rgb(222, 205, 171);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(209, 189, 143);
  --link-external-color-hover: rgb(222, 205, 171);
  --link-unresolved-color: rgb(209, 189, 143);
  --link-unresolved-decoration-color: rgba(195, 174, 111, 0.3);
  --list-bullet-border: 1px solid rgb(222, 205, 171);
  --list-marker-color: rgb(195, 174, 111);
  --list-marker-color-collapsed: rgb(209, 189, 143);
  --list-marker-color-hover: rgb(198 193 135);
  --menu-background: #111111;
  --metadata-input-background-active: #111111;
  --metadata-label-text-color: rgb(198 193 135);
  --metadata-label-text-color-hover: rgb(198 193 135);
  --metadata-property-background-hover: rgba(255, 255, 255, 0.03);
  --modal-background: #110f0f;
  --muted-accent: rgb(198 193 135);
  --muted-accent-rgb: 198 193 135;
  --nav-heading-color-collapsed-hover: rgb(198 193 135);
  --nav-item-background-selected: rgba(195, 174, 111, 0.15);
  --nav-item-color: rgb(198 193 135);
  --nav-item-color-highlighted: rgb(209, 189, 143);
  --nav-tag-color-active: rgb(198 193 135);
  --nav-tag-color-hover: rgb(198 193 135);
  --pdf-background: #110f0f;
  --pdf-page-background: #110f0f;
  --pdf-sidebar-background: #110f0f;
  --pill-color: rgb(198 193 135);
  --pill-color-remove-hover: rgb(209, 189, 143);
  --primary-90: rgba(17, 15, 15, 0.9);
  --prompt-background: #110f0f;
  --ribbon-background: #111111;
  --ribbon-background-collapsed: #110f0f;
  --search-clear-button-color: rgb(198 193 135);
  --search-icon-color: rgb(198 193 135);
  --search-result-background: #110f0f;
  --status-bar-background: #111111;
  --status-bar-border-color: #262626;
  --status-bar-text-color: rgb(198 193 135);
  --suggestion-background: #110f0f;
  --tab-background-active: #2527229e;
  --tab-container-background: #111111;
  --tab-outline-color: transparent;
  --tab-radius-active: 12px;
  --tab-switcher-background: #111111;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(195, 174, 111);
  --tab-text-color-active: rgb(198 193 135);
  --tab-text-color-focused: #666666;
  --tab-text-color-focused-active: rgb(198 193 135);
  --tab-text-color-focused-active-current: rgb(209, 189, 143);
  --tab-text-color-focused-highlighted: rgb(209, 189, 143);
  --tab-width: 180px;
  --table-drag-handle-background-active: rgb(195, 174, 111);
  --table-drag-handle-color-active: rgb(59, 53, 34);
  --table-header-color: rgb(198 193 135);
  --table-line-height: 1.8;
  --table-selection: rgba(195, 174, 111, 0.1);
  --table-selection-border-color: rgb(195, 174, 111);
  --tag-background: rgba(195, 174, 111, 0.1);
  --tag-background-hover: rgba(195, 174, 111, 0.2);
  --tag-border-color: rgba(195, 174, 111, 0.15);
  --tag-border-color-hover: rgba(195, 174, 111, 0.15);
  --tag-color: rgb(209, 189, 143);
  --tag-color-hover: rgb(209, 189, 143);
  --text-accent: rgb(209, 189, 143);
  --text-accent-hover: rgb(222, 205, 171);
  --text-muted: rgb(198 193 135);
  --text-on-accent: rgb(59, 53, 34);
  --text-on-accent-inverted: white;
  --text-selection: rgba(195, 174, 111, 0.33);
  --text-stroke-color: rgb(0, 0, 0);
  --titlebar-background: #111111;
  --titlebar-background-focused: #111111;
  --titlebar-text-color: rgb(198 193 135);
  --vault-name-font-size: 20px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 17, 17);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 15, 15);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 17, 17);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 17, 17);
  border-left-color: rgb(38, 38, 38);
}

body div#quartz-root {
  background-color: rgb(17, 15, 15);
}`,
    typography: `body .page article p > em, em {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration: rgb(172, 99, 99);
  text-decoration-color: rgb(172, 99, 99);
}

body .page article p > i, i {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration: rgb(172, 99, 99);
  text-decoration-color: rgb(172, 99, 99);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(68, 207, 110);
  font-weight: 500;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body p {
  color: rgb(198, 193, 135);
  outline: rgb(198, 193, 135) none 0px;
  text-decoration: rgb(198, 193, 135);
  text-decoration-color: rgb(198, 193, 135);
}`,
    links: `body a.external, footer a {
  color: rgb(209, 189, 143);
  outline: rgb(209, 189, 143) none 0px;
  text-decoration: underline rgb(209, 189, 143);
  text-decoration-color: rgb(209, 189, 143);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(209, 189, 143);
  outline: rgb(209, 189, 143) none 0px;
  text-decoration: rgb(209, 189, 143);
  text-decoration-color: rgb(209, 189, 143);
}

body a.internal.broken {
  color: rgb(209, 189, 143);
  outline: rgb(209, 189, 143) none 0px;
  text-decoration: rgba(195, 174, 111, 0.3);
  text-decoration-color: rgba(195, 174, 111, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(17, 15, 15);
}

body ul.overflow {
  background-color: rgb(17, 15, 15);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(29, 29, 29, 0.643);
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body th {
  color: rgb(198, 193, 135);
}`,
    code: `body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre > code, pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
}

body .transclude {
  border-left-color: rgb(195, 174, 111);
}

body .transclude-inner {
  border-left-color: rgb(195, 174, 111);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(198, 193, 135, 0.45);
  text-decoration: rgba(198, 193, 135, 0.45);
  text-decoration-color: rgba(198, 193, 135, 0.45);
}

body input[type=checkbox] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    callouts: `body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="tip"] {
  --callout-color: 241, 226, 25;
  background-color: rgba(241, 226, 25, 0.1);
  border-bottom-color: rgba(241, 226, 25, 0.25);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(241, 226, 25, 0.25);
  border-right-color: rgba(241, 226, 25, 0.25);
  border-top-color: rgba(241, 226, 25, 0.25);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 15, 15);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(195, 174, 111, 0.1);
  border-bottom-color: rgba(195, 174, 111, 0.15);
  border-left-color: rgba(195, 174, 111, 0.15);
  border-right-color: rgba(195, 174, 111, 0.15);
  border-top-color: rgba(195, 174, 111, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(209, 189, 143);
}

body h2.page-title, h2.page-title a {
  color: rgb(251, 70, 76);
}

body hr {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body ::-webkit-scrollbar {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

body ::-webkit-scrollbar-corner {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

body ::-webkit-scrollbar-track {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(198, 193, 135);
  text-decoration: rgb(198, 193, 135);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(198, 193, 135);
  text-decoration: rgb(198, 193, 135);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(198, 193, 135);
  text-decoration: rgb(198, 193, 135);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}`,
    footer: `body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(198, 193, 135);
}

body footer ul li a {
  color: rgb(198, 193, 135);
  text-decoration: rgb(198, 193, 135);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(198, 193, 135);
  text-decoration: rgb(198, 193, 135);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(198, 193, 135);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(198, 193, 135);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(198, 193, 135);
  text-decoration: rgb(198, 193, 135);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}

body .darkmode svg {
  color: rgb(198, 193, 135);
  stroke: rgb(198, 193, 135);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}`,
    misc: `body .metadata {
  color: rgb(198, 193, 135);
  margin-bottom: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}

body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

body input[type=text] {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}

body kbd {
  background-color: rgb(0, 0, 0);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 45;
  --accent-l: 60%;
  --accent-s: 41%;
  --active-bg: #edffd19e;
  --background-modifier-active-hover: rgba(195, 174, 111, 0.1);
  --background-primary: #fefff6;
  --background-secondary: #fefff6;
  --bases-cards-background: #fefff6;
  --bases-group-heading-property-color: rgb(110 102 3);
  --bases-table-cell-background-active: #fefff6;
  --bases-table-cell-background-selected: rgba(195, 174, 111, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(202, 183, 129);
  --bases-table-header-background: #fefff6;
  --bases-table-header-color: rgb(110 102 3);
  --bases-table-summary-background: #fefff6;
  --blockquote-background-color: #dae6c5a4;
  --blockquote-background-hover: rgba(246, 246, 199, 0.937);
  --blockquote-border-color: rgb(202, 183, 129);
  --blockquote-border-thickness: 3px;
  --blur-background: color-mix(in srgb, #fefff6 65%, transparent) linear-gradient(#fefff6, color-mix(in srgb, #fefff6 65%, transparent));
  --button-radius: 8px;
  --callout-radius: 20px;
  --callout-tip: 241, 226, 25;
  --canvas-background: #fefff6;
  --canvas-color: 241, 226, 25;
  --canvas-color-2: 165, 156, 103;
  --canvas-color-3: transparent;
  --checkbox-border-color-hover: rgb(110 102 3);
  --checkbox-color: rgb(202, 183, 129);
  --checkbox-color-hover: rgb(209, 189, 143);
  --checkbox-marker-color: #fefff6;
  --checkbox-radius: 16px;
  --checklist-done-color: rgb(110 102 3 / 45%);
  --checklist-done-decoration: none;
  --cm-active: #f0f09839;
  --code-background: black;
  --code-punctuation: rgb(110 102 3);
  --code-radius: 12px;
  --collapse-icon-color-collapsed: rgb(195, 174, 111);
  --color-accent: rgb(195, 174, 111);
  --color-accent-1: rgb(202, 183, 129);
  --color-accent-2: rgb(209, 189, 143);
  --color-accent-hsl: 45, 41%, 60%;
  --color-crimson: rgb(172, 99, 99);
  --color-crimson-rgb: 172, 99, 99;
  --color-goldFusion-rgb: 165, 156, 103;
  --color-starred: rgb(241, 226, 25);
  --color-starred-rgb: 241, 226, 25;
  --divider-color: #f6f6f6;
  --divider-color-hover: rgb(202, 183, 129);
  --embed-border-start: 2px solid rgb(202, 183, 129);
  --file-header-background: #fefff6;
  --file-header-background-focused: #fefff6;
  --footnote-id-color: rgb(110 102 3);
  --footnote-input-background-active: #fefff6;
  --graph-node: rgb(110 102 3);
  --graph-node-focused: rgb(195, 174, 111);
  --h1-size: 2em;
  --h2-size: 1.7em;
  --h3-size: 1.4em;
  --h4-size: 1.2em;
  --h5-size: 1.1em;
  --hr-color: rgb(110 102 3 / 10%);
  --icon-color: rgb(110 102 3);
  --icon-color-active: rgb(195, 174, 111);
  --icon-color-hover: rgb(110 102 3);
  --inline-title-color: #e93147;
  --inline-title-size: 2.3em;
  --input-radius: 8px;
  --interactive-accent: rgb(202, 183, 129);
  --interactive-accent-hover: rgb(209, 189, 143);
  --interactive-accent-hsl: 45, 41%, 60%;
  --italic-color: rgb(172, 99, 99);
  --line-height-tight: 1.8;
  --link-color: rgb(195, 174, 111);
  --link-color-hover: rgb(209, 189, 143);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(195, 174, 111);
  --link-external-color-hover: rgb(209, 189, 143);
  --link-unresolved-color: rgb(195, 174, 111);
  --link-unresolved-decoration-color: rgba(195, 174, 111, 0.3);
  --list-bullet-border: 1px solid rgb(209, 189, 143);
  --list-marker-color: rgb(195, 174, 111);
  --list-marker-color-collapsed: rgb(195, 174, 111);
  --list-marker-color-hover: rgb(110 102 3);
  --menu-background: #fefff6;
  --metadata-input-background-active: #fefff6;
  --metadata-label-text-color: rgb(110 102 3);
  --metadata-label-text-color-hover: rgb(110 102 3);
  --metadata-property-background-hover: rgba(0, 0, 0, 0.03);
  --modal-background: #fefff6;
  --muted-accent: rgb(110 102 3);
  --muted-accent-rgb: 110 102 3;
  --nav-heading-color-collapsed-hover: rgb(110 102 3);
  --nav-item-background-selected: rgba(195, 174, 111, 0.15);
  --nav-item-color: rgb(110 102 3);
  --nav-item-color-highlighted: rgb(195, 174, 111);
  --nav-tag-color-active: rgb(110 102 3);
  --nav-tag-color-hover: rgb(110 102 3);
  --pdf-background: #fefff6;
  --pdf-page-background: #fefff6;
  --pdf-sidebar-background: #fefff6;
  --pill-color: rgb(110 102 3);
  --pill-color-remove-hover: rgb(195, 174, 111);
  --primary-90: rgb(254 255 246 / 0.9);
  --prompt-background: #fefff6;
  --raised-background: color-mix(in srgb, #fefff6 65%, transparent) linear-gradient(#fefff6, color-mix(in srgb, #fefff6 65%, transparent));
  --ribbon-background: #fefff6;
  --ribbon-background-collapsed: #fefff6;
  --search-clear-button-color: rgb(110 102 3);
  --search-icon-color: rgb(110 102 3);
  --search-result-background: #fefff6;
  --status-bar-background: #fefff6;
  --status-bar-border-color: #f6f6f6;
  --status-bar-text-color: rgb(110 102 3);
  --suggestion-background: #fefff6;
  --tab-background-active: #edffd19e;
  --tab-container-background: #fefff6;
  --tab-outline-color: transparent;
  --tab-radius-active: 12px;
  --tab-switcher-background: #fefff6;
  --tab-switcher-menubar-background: linear-gradient(to top, #fefff6, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(195, 174, 111);
  --tab-text-color-active: rgb(110 102 3);
  --tab-text-color-focused: #ababab;
  --tab-text-color-focused-active: rgb(110 102 3);
  --tab-text-color-focused-active-current: rgb(195, 174, 111);
  --tab-text-color-focused-highlighted: rgb(195, 174, 111);
  --tab-width: 180px;
  --table-drag-handle-background-active: rgb(202, 183, 129);
  --table-drag-handle-color-active: rgb(59, 53, 34);
  --table-header-color: rgb(110 102 3);
  --table-line-height: 1.8;
  --table-selection: rgba(195, 174, 111, 0.1);
  --table-selection-border-color: rgb(202, 183, 129);
  --tag-background: rgba(195, 174, 111, 0.1);
  --tag-background-hover: rgba(195, 174, 111, 0.2);
  --tag-border-color: rgba(195, 174, 111, 0.15);
  --tag-border-color-hover: rgba(195, 174, 111, 0.15);
  --tag-color: rgb(195, 174, 111);
  --tag-color-hover: rgb(195, 174, 111);
  --text-accent: rgb(195, 174, 111);
  --text-accent-hover: rgb(209, 189, 143);
  --text-muted: rgb(110 102 3);
  --text-on-accent: rgb(59, 53, 34);
  --text-on-accent-inverted: white;
  --text-selection: rgba(195, 174, 111, 0.2);
  --text-stroke-color: #222222;
  --titlebar-background: #fefff6;
  --titlebar-background-focused: #fefff6;
  --titlebar-text-color: rgb(110 102 3);
  --vault-name-font-size: 20px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(254, 255, 246);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(254, 255, 246);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(254, 255, 246);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(246, 246, 246);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(254, 255, 246);
  border-left-color: rgb(246, 246, 246);
}

body div#quartz-root {
  background-color: rgb(254, 255, 246);
}`,
    typography: `body .page article p > em, em {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration: rgb(172, 99, 99);
  text-decoration-color: rgb(172, 99, 99);
}

body .page article p > i, i {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration: rgb(172, 99, 99);
  text-decoration-color: rgb(172, 99, 99);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(8, 185, 78);
  font-weight: 500;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration: rgb(8, 185, 78);
  text-decoration-color: rgb(8, 185, 78);
}

body p {
  color: rgb(110, 102, 3);
  outline: rgb(110, 102, 3) none 0px;
  text-decoration: rgb(110, 102, 3);
  text-decoration-color: rgb(110, 102, 3);
}`,
    links: `body a.external, footer a {
  color: rgb(195, 174, 111);
  outline: rgb(195, 174, 111) none 0px;
  text-decoration: underline rgb(195, 174, 111);
  text-decoration-color: rgb(195, 174, 111);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(195, 174, 111);
  outline: rgb(195, 174, 111) none 0px;
  text-decoration: rgb(195, 174, 111);
  text-decoration-color: rgb(195, 174, 111);
}

body a.internal.broken {
  color: rgb(195, 174, 111);
  outline: rgb(195, 174, 111) none 0px;
  text-decoration: rgba(195, 174, 111, 0.3);
  text-decoration-color: rgba(195, 174, 111, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(254, 255, 246);
}

body ul.overflow {
  background-color: rgb(254, 255, 246);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(218, 230, 197, 0.643);
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body th {
  color: rgb(110, 102, 3);
}`,
    code: `body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre > code, pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
}

body .transclude {
  border-left-color: rgb(202, 182, 127);
}

body .transclude-inner {
  border-left-color: rgb(202, 182, 127);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(110, 102, 3, 0.45);
  text-decoration: rgba(110, 102, 3, 0.45);
  text-decoration-color: rgba(110, 102, 3, 0.45);
}

body input[type=checkbox] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    callouts: `body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="tip"] {
  --callout-color: 241, 226, 25;
  background-color: rgba(241, 226, 25, 0.1);
  border-bottom-color: rgba(241, 226, 25, 0.25);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(241, 226, 25, 0.25);
  border-right-color: rgba(241, 226, 25, 0.25);
  border-top-color: rgba(241, 226, 25, 0.25);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space {
  background-color: rgb(254, 255, 246);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(254, 255, 246);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(195, 174, 111, 0.1);
  border-bottom-color: rgba(195, 174, 111, 0.15);
  border-left-color: rgba(195, 174, 111, 0.15);
  border-right-color: rgba(195, 174, 111, 0.15);
  border-top-color: rgba(195, 174, 111, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(195, 174, 111);
}

body h2.page-title, h2.page-title a {
  color: rgb(233, 49, 71);
}

body hr {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body ::-webkit-scrollbar {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

body ::-webkit-scrollbar-corner {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

body ::-webkit-scrollbar-track {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 102, 3);
  text-decoration: rgb(110, 102, 3);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 102, 3);
  text-decoration: rgb(110, 102, 3);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(110, 102, 3);
  text-decoration: rgb(110, 102, 3);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}`,
    footer: `body footer {
  background-color: rgb(254, 255, 246);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(110, 102, 3);
}

body footer ul li a {
  color: rgb(110, 102, 3);
  text-decoration: rgb(110, 102, 3);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 102, 3);
  text-decoration: rgb(110, 102, 3);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 102, 3);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(110, 102, 3);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 102, 3);
  text-decoration: rgb(110, 102, 3);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}

body .darkmode svg {
  color: rgb(110, 102, 3);
  stroke: rgb(110, 102, 3);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}`,
    misc: `body .metadata {
  color: rgb(110, 102, 3);
  margin-bottom: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}

body .navigation-progress {
  background-color: rgb(254, 255, 246);
}

body input[type=text] {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}

body kbd {
  background-color: rgb(0, 0, 0);
}`,
  },
};
