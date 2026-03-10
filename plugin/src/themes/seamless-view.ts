import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "seamless-view", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 85 !important;
  --accent-l: 40% !important;
  --accent-s: 45% !important;
  --background-modifier-active-hover: rgba(110, 148, 56, 0.1) !important;
  --background-primary: #2a2a2a !important;
  --background-primary-alt: #363636 !important;
  --background-secondary: #1e1e1e !important;
  --bases-cards-background: #2a2a2a !important;
  --bases-cards-cover-background: #363636 !important;
  --bases-table-border-color: #666666 !important;
  --bases-table-cell-background-active: #2a2a2a !important;
  --bases-table-cell-background-disabled: #363636 !important;
  --bases-table-cell-background-selected: rgba(110, 148, 56, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(110, 148, 56) !important;
  --bases-table-group-background: #363636 !important;
  --bases-table-header-background: #2a2a2a !important;
  --bases-table-summary-background: #2a2a2a !important;
  --blockquote-border-color: rgb(110, 148, 56) !important;
  --bold-color: rgb(228, 129, 137) !important;
  --callout-default: 116, 185, 241;
  --callout-important: 228, 212, 129;
  --callout-info: 116, 185, 241;
  --callout-padding: 8.2px 12px 8px calc(1em + 2px);
  --callout-question: 152, 195, 121;
  --callout-summary: 86, 182, 194;
  --callout-tip: 86, 182, 194;
  --callout-todo: 233, 151, 63;
  --canvas-background: #2a2a2a !important;
  --canvas-color-3: 228, 212, 129 !important;
  --canvas-color-5: 86, 182, 194 !important;
  --canvas-color-6: 110, 148, 56 !important;
  --canvas-space-x: 20px !important;
  --canvas-space-y: 16px !important;
  --checkbox-color: rgb(110, 148, 56) !important;
  --checkbox-color-hover: rgb(132, 171, 63) !important;
  --checkbox-end-margin: 8px !important;
  --checkbox-end-margin-editing: -3.5px !important;
  --checkbox-indent: 7px !important;
  --checkbox-indent-editing: 5px !important;
  --checkbox-marker-color: #2a2a2a !important;
  --checkbox-vertical-align: -2px !important;
  --code-background: #363636 !important;
  --code-function: rgb(116, 185, 241) !important;
  --code-keyword: rgb(198, 120, 221) !important;
  --code-operator: rgb(86, 182, 194) !important;
  --code-property: rgb(228, 129, 137) !important;
  --code-punctuation: rgb(209, 154, 102) !important;
  --code-string: rgb(152, 195, 121) !important;
  --code-tag: rgb(228, 129, 137) !important;
  --code-value: rgb(209, 154, 102) !important;
  --collapse-icon-color-collapsed: rgb(132, 171, 63) !important;
  --color-accent: rgb(110, 148, 56) !important;
  --color-accent-1: rgb(132, 171, 63) !important;
  --color-accent-2: rgb(152, 190, 75) !important;
  --color-accent-hsl: 85, 45%, 40% !important;
  --color-accent-rgb: 110, 148, 56 !important;
  --color-blue: rgb(116, 185, 241) !important;
  --color-blue-rgb: 116, 185, 241 !important;
  --color-code-alt: rgb(160, 160, 160) !important;
  --color-code-alt-rgb: 160, 160, 160 !important;
  --color-cyan: rgb(86, 182, 194) !important;
  --color-cyan-alt: rgb(0, 122, 102) !important;
  --color-cyan-alt-rgb: 0, 122, 102 !important;
  --color-cyan-rgb: 86, 182, 194 !important;
  --color-green-alt: rgb(152, 195, 121) !important;
  --color-green-alt-rgb: 152, 195, 121 !important;
  --color-orange-alt: rgb(209, 154, 102) !important;
  --color-orange-alt-rgb: 209, 154, 102 !important;
  --color-pink: rgb(198, 120, 221) !important;
  --color-pink-rgb: 198, 120, 221 !important;
  --color-red-alt: rgb(228, 129, 137) !important;
  --color-red-alt-rgb: 228, 129, 137 !important;
  --color-red-alt2: rgb(138, 15, 15) !important;
  --color-red-alt2-rgb: 138, 15, 15 !important;
  --color-yellow: rgb(228, 212, 129) !important;
  --color-yellow-rgb: 228, 212, 129 !important;
  --divider-color-hover: rgb(110, 148, 56) !important;
  --embed-border-start: none !important;
  --embed-padding: 0 !important;
  --file-header-background: #2a2a2a !important;
  --file-header-background-focused: #2a2a2a !important;
  --file-margins: 0 32px 32px !important;
  --graph-node-attachment: rgb(228, 212, 129) !important;
  --graph-node-focused: rgb(132, 171, 63) !important;
  --h1-color: rgb(228, 129, 137) !important;
  --h1-line-height: normal !important;
  --h1-size: 1.71875em !important;
  --h2-color: rgb(228, 212, 129) !important;
  --h2-line-height: normal !important;
  --h2-size: 1.5625em !important;
  --h3-color: rgb(116, 185, 241) !important;
  --h3-line-height: normal !important;
  --h3-size: 1.375em !important;
  --h4-color: rgb(209, 154, 102) !important;
  --h4-size: 1.25em !important;
  --h5-color: rgb(152, 195, 121) !important;
  --h6-color: #a882ff !important;
  --header-height: 37px !important;
  --heading-spacing: 0 !important;
  --highlight: rgba(138, 15, 15, 0.4) !important;
  --highlight-color: 138, 15, 15 !important;
  --hr-color: #555555 !important;
  --icon-color-active: rgb(132, 171, 63) !important;
  --indentation-guide-editing-indent: 0.5em !important;
  --indentation-guide-reading-indent: calc(-0.5em - 1px) !important;
  --inline-title-color: #b3b3b3 !important;
  --inline-title-line-height: normal !important;
  --inline-title-margin-bottom: 4px !important;
  --inline-title-size: 1.5625em !important;
  --inline-title-weight: 680 !important;
  --interactive-accent: rgb(110, 148, 56) !important;
  --interactive-accent-hover: rgb(132, 171, 63) !important;
  --interactive-accent-hsl: 85, 45%, 40% !important;
  --italic-color: rgb(228, 212, 129) !important;
  --lc-bg-bottom-reading: 1px !important;
  --lc-bg-left: 18px !important;
  --lc-bg-left-reading: 19px !important;
  --lc-bg-opacity-dark: 0.1 !important;
  --lc-bg-right-reading: 1px !important;
  --lc-bg-top-reading: 1px !important;
  --light: #2a2a2a !important;
  --lightgray: #1e1e1e !important;
  --link-color: rgb(132, 171, 63) !important;
  --link-color-hover: rgb(152, 190, 75) !important;
  --link-external-color: rgb(132, 171, 63) !important;
  --link-external-color-hover: rgb(152, 190, 75) !important;
  --link-unresolved-color: rgb(132, 171, 63) !important;
  --link-unresolved-decoration-color: rgba(110, 148, 56, 0.3) !important;
  --list-indent: calc(1em + 2px) !important;
  --list-indent-editing: 0 !important;
  --list-marker-color-collapsed: rgb(132, 171, 63) !important;
  --list-spacing: 0 !important;
  --menu-background: #1e1e1e !important;
  --metadata-background: #363636 !important;
  --metadata-icon: "📄" !important;
  --metadata-padding: 0 !important;
  --modal-background: #2a2a2a !important;
  --nav-item-background-selected: rgba(110, 148, 56, 0.15) !important;
  --nav-item-color-highlighted: rgb(132, 171, 63) !important;
  --p-spacing: 0 !important;
  --pdf-background: #2a2a2a !important;
  --pdf-page-background: #2a2a2a !important;
  --pdf-sidebar-background: #2a2a2a !important;
  --pill-color-remove-hover: rgb(132, 171, 63) !important;
  --prompt-background: #2a2a2a !important;
  --ribbon-background: #1e1e1e !important;
  --ribbon-width: 41px !important;
  --search-result-background: #2a2a2a !important;
  --secondary: rgb(132, 171, 63) !important;
  --setting-items-background: #363636 !important;
  --status-bar-background: #1e1e1e !important;
  --strike-color: #b3b3b3 !important;
  --suggestion-background: #2a2a2a !important;
  --sync-avatar-color-3: rgb(228, 212, 129) !important;
  --sync-avatar-color-5: rgb(86, 182, 194) !important;
  --sync-avatar-color-6: rgb(116, 185, 241) !important;
  --sync-avatar-color-8: rgb(198, 120, 221) !important;
  --tab-background-active: #2a2a2a !important;
  --tab-container-background: #1e1e1e !important;
  --tab-stacked-header-width: 37px !important;
  --tab-switcher-background: #1e1e1e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e1e1e, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(110, 148, 56) !important;
  --tab-text-color-focused-highlighted: rgb(132, 171, 63) !important;
  --table-border-color: #666666 !important;
  --table-drag-handle-background-active: rgb(110, 148, 56) !important;
  --table-header-border-color: #666666 !important;
  --table-selection: rgba(110, 148, 56, 0.1) !important;
  --table-selection-border-color: rgb(110, 148, 56) !important;
  --tag-background: rgba(110, 148, 56, 0.1) !important;
  --tag-background-hover: rgba(110, 148, 56, 0.2) !important;
  --tag-border-color: rgba(110, 148, 56, 0.15) !important;
  --tag-border-color-hover: rgba(110, 148, 56, 0.15) !important;
  --tag-color: rgb(132, 171, 63) !important;
  --tag-color-hover: rgb(132, 171, 63) !important;
  --tag-padding-y: 0.15em !important;
  --tertiary: rgb(152, 190, 75) !important;
  --text-accent: rgb(132, 171, 63) !important;
  --text-accent-hover: rgb(152, 190, 75) !important;
  --text-highlight-bg: rgba(138, 15, 15, 0.4) !important;
  --text-highlight-bg-rgb: 138, 15, 15 !important;
  --text-selection: rgba(110, 148, 56, 0.33) !important;
  --textHighlight: rgba(138, 15, 15, 0.4) !important;
  --titlebar-background: #363636 !important;
  --titlebar-background-focused: #1e1e1e !important;
  --traffic-lights-offset-x: 37px !important;
  --traffic-lights-offset-y: 37px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
