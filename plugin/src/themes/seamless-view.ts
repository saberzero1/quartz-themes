import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "seamless-view", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 85;
  --accent-l: 40%;
  --accent-s: 45%;
  --background-modifier-active-hover: rgba(110, 148, 56, 0.1);
  --background-primary: #2a2a2a;
  --background-primary-alt: #363636;
  --background-secondary: #1e1e1e;
  --bases-cards-background: #2a2a2a;
  --bases-cards-cover-background: #363636;
  --bases-table-border-color: #666666;
  --bases-table-cell-background-active: #2a2a2a;
  --bases-table-cell-background-disabled: #363636;
  --bases-table-cell-background-selected: rgba(110, 148, 56, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(110, 148, 56);
  --bases-table-group-background: #363636;
  --bases-table-header-background: #2a2a2a;
  --bases-table-summary-background: #2a2a2a;
  --blockquote-border-color: rgb(110, 148, 56);
  --bold-color: rgb(228, 129, 137);
  --callout-default: 116, 185, 241;
  --callout-important: 228, 212, 129;
  --callout-info: 116, 185, 241;
  --callout-padding: 8.2px 12px 8px calc(1em + 2px);
  --callout-question: 152, 195, 121;
  --callout-summary: 86, 182, 194;
  --callout-tip: 86, 182, 194;
  --callout-todo: 233, 151, 63;
  --canvas-background: #2a2a2a;
  --canvas-color-3: 228, 212, 129;
  --canvas-color-5: 86, 182, 194;
  --canvas-color-6: 110, 148, 56;
  --canvas-space-x: 20px;
  --canvas-space-y: 16px;
  --checkbox-color: rgb(110, 148, 56);
  --checkbox-color-hover: rgb(132, 171, 63);
  --checkbox-end-margin: 8px;
  --checkbox-end-margin-editing: -3.5px;
  --checkbox-indent: 7px;
  --checkbox-indent-editing: 5px;
  --checkbox-marker-color: #2a2a2a;
  --checkbox-vertical-align: -2px;
  --code-background: #363636;
  --code-function: rgb(116, 185, 241);
  --code-keyword: rgb(198, 120, 221);
  --code-operator: rgb(86, 182, 194);
  --code-property: rgb(228, 129, 137);
  --code-punctuation: rgb(209, 154, 102);
  --code-string: rgb(152, 195, 121);
  --code-tag: rgb(228, 129, 137);
  --code-value: rgb(209, 154, 102);
  --collapse-icon-color-collapsed: rgb(132, 171, 63);
  --color-accent: rgb(110, 148, 56);
  --color-accent-1: rgb(132, 171, 63);
  --color-accent-2: rgb(152, 190, 75);
  --color-accent-hsl: 85, 45%, 40%;
  --color-accent-rgb: 110, 148, 56;
  --color-blue: rgb(116, 185, 241);
  --color-blue-rgb: 116, 185, 241;
  --color-code-alt: rgb(160, 160, 160);
  --color-code-alt-rgb: 160, 160, 160;
  --color-cyan: rgb(86, 182, 194);
  --color-cyan-alt: rgb(0, 122, 102);
  --color-cyan-alt-rgb: 0, 122, 102;
  --color-cyan-rgb: 86, 182, 194;
  --color-green-alt: rgb(152, 195, 121);
  --color-green-alt-rgb: 152, 195, 121;
  --color-orange-alt: rgb(209, 154, 102);
  --color-orange-alt-rgb: 209, 154, 102;
  --color-pink: rgb(198, 120, 221);
  --color-pink-rgb: 198, 120, 221;
  --color-red-alt: rgb(228, 129, 137);
  --color-red-alt-rgb: 228, 129, 137;
  --color-red-alt2: rgb(138, 15, 15);
  --color-red-alt2-rgb: 138, 15, 15;
  --color-yellow: rgb(228, 212, 129);
  --color-yellow-rgb: 228, 212, 129;
  --divider-color-hover: rgb(110, 148, 56);
  --embed-border-start: none;
  --embed-padding: 0;
  --file-header-background: #2a2a2a;
  --file-header-background-focused: #2a2a2a;
  --file-margins: 0 32px 32px;
  --graph-node-attachment: rgb(228, 212, 129);
  --graph-node-focused: rgb(132, 171, 63);
  --h1-color: rgb(228, 129, 137);
  --h1-line-height: normal;
  --h1-size: 1.71875em;
  --h2-color: rgb(228, 212, 129);
  --h2-line-height: normal;
  --h2-size: 1.5625em;
  --h3-color: rgb(116, 185, 241);
  --h3-line-height: normal;
  --h3-size: 1.375em;
  --h4-color: rgb(209, 154, 102);
  --h4-size: 1.25em;
  --h5-color: rgb(152, 195, 121);
  --h6-color: #a882ff;
  --header-height: 37px;
  --heading-spacing: 0;
  --highlight-color: 138, 15, 15;
  --hr-color: #555555;
  --icon-color-active: rgb(132, 171, 63);
  --indentation-guide-editing-indent: 0.5em;
  --indentation-guide-reading-indent: calc(-0.5em - 1px);
  --inline-title-color: #b3b3b3;
  --inline-title-line-height: normal;
  --inline-title-margin-bottom: 4px;
  --inline-title-size: 1.5625em;
  --inline-title-weight: 680;
  --interactive-accent: rgb(110, 148, 56);
  --interactive-accent-hover: rgb(132, 171, 63);
  --interactive-accent-hsl: 85, 45%, 40%;
  --italic-color: rgb(228, 212, 129);
  --lc-bg-bottom-reading: 1px;
  --lc-bg-left: 18px;
  --lc-bg-left-reading: 19px;
  --lc-bg-opacity-dark: 0.1;
  --lc-bg-right-reading: 1px;
  --lc-bg-top-reading: 1px;
  --link-color: rgb(132, 171, 63);
  --link-color-hover: rgb(152, 190, 75);
  --link-external-color: rgb(132, 171, 63);
  --link-external-color-hover: rgb(152, 190, 75);
  --link-unresolved-color: rgb(132, 171, 63);
  --link-unresolved-decoration-color: rgba(110, 148, 56, 0.3);
  --list-indent: calc(1em + 2px);
  --list-indent-editing: 0;
  --list-marker-color-collapsed: rgb(132, 171, 63);
  --list-spacing: 0;
  --menu-background: #1e1e1e;
  --metadata-background: #363636;
  --metadata-icon: "📄";
  --metadata-padding: 0;
  --modal-background: #2a2a2a;
  --nav-item-background-selected: rgba(110, 148, 56, 0.15);
  --nav-item-color-highlighted: rgb(132, 171, 63);
  --p-spacing: 0;
  --pdf-background: #2a2a2a;
  --pdf-page-background: #2a2a2a;
  --pdf-sidebar-background: #2a2a2a;
  --pill-color-remove-hover: rgb(132, 171, 63);
  --prompt-background: #2a2a2a;
  --ribbon-background: #1e1e1e;
  --ribbon-width: 41px;
  --search-result-background: #2a2a2a;
  --setting-items-background: #363636;
  --status-bar-background: #1e1e1e;
  --strike-color: #b3b3b3;
  --suggestion-background: #2a2a2a;
  --sync-avatar-color-3: rgb(228, 212, 129);
  --sync-avatar-color-5: rgb(86, 182, 194);
  --sync-avatar-color-6: rgb(116, 185, 241);
  --sync-avatar-color-8: rgb(198, 120, 221);
  --tab-background-active: #2a2a2a;
  --tab-container-background: #1e1e1e;
  --tab-stacked-header-width: 37px;
  --tab-switcher-background: #1e1e1e;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e1e1e, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(110, 148, 56);
  --tab-text-color-focused-highlighted: rgb(132, 171, 63);
  --table-border-color: #666666;
  --table-drag-handle-background-active: rgb(110, 148, 56);
  --table-header-border-color: #666666;
  --table-selection: rgba(110, 148, 56, 0.1);
  --table-selection-border-color: rgb(110, 148, 56);
  --tag-background: rgba(110, 148, 56, 0.1);
  --tag-background-hover: rgba(110, 148, 56, 0.2);
  --tag-border-color: rgba(110, 148, 56, 0.15);
  --tag-border-color-hover: rgba(110, 148, 56, 0.15);
  --tag-color: rgb(132, 171, 63);
  --tag-color-hover: rgb(132, 171, 63);
  --tag-padding-y: 0.15em;
  --text-accent: rgb(132, 171, 63);
  --text-accent-hover: rgb(152, 190, 75);
  --text-highlight-bg: rgba(138, 15, 15, 0.4);
  --text-highlight-bg-rgb: 138, 15, 15;
  --text-selection: rgba(110, 148, 56, 0.33);
  --titlebar-background: #363636;
  --titlebar-background-focused: #1e1e1e;
  --traffic-lights-offset-x: 37px;
  --traffic-lights-offset-y: 37px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 30, 30);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(42, 42, 42);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 30, 30);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 30, 30);
}

body div#quartz-root {
  background-color: rgb(42, 42, 42);
}`,
    typography: `body .page article p > em, em {
  color: rgb(228, 212, 129);
  outline: rgb(228, 212, 129) none 0px;
  text-decoration: rgb(228, 212, 129);
  text-decoration-color: rgb(228, 212, 129);
}

body .page article p > i, i {
  color: rgb(228, 212, 129);
  outline: rgb(228, 212, 129) none 0px;
  text-decoration: rgb(228, 212, 129);
  text-decoration-color: rgb(228, 212, 129);
}

body .text-highlight {
  background-color: rgba(138, 15, 15, 0.4);
}

body del {
  color: rgb(179, 179, 179);
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: line-through rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}`,
    links: `body a.external, footer a {
  color: rgb(132, 171, 63);
  outline: rgb(132, 171, 63) none 0px;
  text-decoration: underline rgb(132, 171, 63);
  text-decoration-color: rgb(132, 171, 63);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(132, 171, 63);
  outline: rgb(132, 171, 63) none 0px;
  text-decoration: underline rgb(132, 171, 63);
  text-decoration-color: rgb(132, 171, 63);
}

body a.internal.broken {
  color: rgb(132, 171, 63);
  outline: rgb(132, 171, 63) none 0px;
  text-decoration: underline rgba(110, 148, 56, 0.3);
  text-decoration-color: rgba(110, 148, 56, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(42, 42, 42);
}

body ul.overflow {
  background-color: rgb(42, 42, 42);
}`,
    tables: `body td {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

body th {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(54, 54, 54);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(54, 54, 54);
}

body pre > code > [data-line] {
  border-left-color: rgb(116, 185, 241);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(116, 185, 241);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(116, 185, 241);
  border-left-color: rgb(116, 185, 241);
  border-right-color: rgb(116, 185, 241);
  border-top-color: rgb(116, 185, 241);
}

body pre > code, pre:has(> code) {
  background-color: rgb(54, 54, 54);
  overflow-x: hidden;
  padding-bottom: 21px;
  padding-left: 18px;
  padding-right: 12px;
  padding-top: 21px;
}

body pre:has(> code) {
  background-color: rgb(54, 54, 54);
  overflow-x: hidden;
  padding-bottom: 21px;
  padding-left: 18px;
  padding-right: 12px;
  padding-top: 21px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(54, 54, 54);
}

body .transclude {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}

body .transclude-inner {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}`,
    checkboxes: `body .katex-display > .katex {
  display: inline-block;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(116, 185, 241);
  border-left-color: rgb(116, 185, 241);
  border-right-color: rgb(116, 185, 241);
  border-top-color: rgb(116, 185, 241);
}

body .callout[data-callout="abstract"] {
  --callout-color: 86, 182, 194;
  background-color: rgba(86, 182, 194, 0.1);
  border-bottom-color: rgba(86, 182, 194, 0.25);
  border-left-color: rgba(86, 182, 194, 0.25);
  border-right-color: rgba(86, 182, 194, 0.25);
  border-top-color: rgba(86, 182, 194, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 116, 185, 241;
  background-color: rgba(116, 185, 241, 0.1);
  border-bottom-color: rgba(116, 185, 241, 0.25);
  border-left-color: rgba(116, 185, 241, 0.25);
  border-right-color: rgba(116, 185, 241, 0.25);
  border-top-color: rgba(116, 185, 241, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 116, 185, 241;
  background-color: rgba(116, 185, 241, 0.1);
  border-bottom-color: rgba(116, 185, 241, 0.25);
  border-left-color: rgba(116, 185, 241, 0.25);
  border-right-color: rgba(116, 185, 241, 0.25);
  border-top-color: rgba(116, 185, 241, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 152, 195, 121;
  background-color: rgba(152, 195, 121, 0.1);
  border-bottom-color: rgba(152, 195, 121, 0.25);
  border-left-color: rgba(152, 195, 121, 0.25);
  border-right-color: rgba(152, 195, 121, 0.25);
  border-top-color: rgba(152, 195, 121, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 86, 182, 194;
  background-color: rgba(86, 182, 194, 0.1);
  border-bottom-color: rgba(86, 182, 194, 0.25);
  border-left-color: rgba(86, 182, 194, 0.25);
  border-right-color: rgba(86, 182, 194, 0.25);
  border-top-color: rgba(86, 182, 194, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-left-color: rgba(233, 151, 63, 0.25);
  border-right-color: rgba(233, 151, 63, 0.25);
  border-top-color: rgba(233, 151, 63, 0.25);
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(42, 42, 42);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 30, 30);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(110, 148, 56, 0.1);
  border-bottom-color: rgba(110, 148, 56, 0.15);
  border-left-color: rgba(110, 148, 56, 0.15);
  border-right-color: rgba(110, 148, 56, 0.15);
  border-top-color: rgba(110, 148, 56, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(132, 171, 63);
}

body h1 {
  color: rgb(228, 129, 137);
}

body h2 {
  color: rgb(228, 212, 129);
}

body h2.page-title, h2.page-title a {
  color: rgb(179, 179, 179);
}

body h3 {
  color: rgb(116, 185, 241);
}

body h4 {
  color: rgb(209, 154, 102);
}

body h5 {
  color: rgb(152, 195, 121);
}

body h6 {
  color: rgb(168, 130, 255);
}`,
    scrollbars: `body .callout {
  --callout-color: 116, 185, 241;
  border-bottom-color: rgba(116, 185, 241, 0.25);
  border-left-color: rgba(116, 185, 241, 0.25);
  border-right-color: rgba(116, 185, 241, 0.25);
  border-top-color: rgba(116, 185, 241, 0.25);
  padding-bottom: 8px;
  padding-left: 18px;
  padding-top: 8.2px;
}

body ::-webkit-scrollbar {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}

body ::-webkit-scrollbar-corner {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}

body ::-webkit-scrollbar-track {
  background: rgb(42, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 42, 42);
}`,
    footer: `body footer {
  background-color: rgb(30, 30, 30);
}`,
    misc: `body .metadata {
  background-color: rgb(54, 54, 54);
  padding-bottom: 0px;
  padding-top: 0px;
}

body .navigation-progress {
  background-color: rgb(30, 30, 30);
}

body kbd {
  background-color: rgb(54, 54, 54);
}`,
  },
  light: {},
};
