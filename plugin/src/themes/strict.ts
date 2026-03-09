import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "strict", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #404040;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #404040;
  --bases-embed-border-color: #404040;
  --bases-embed-border-radius: 0;
  --bases-table-border-color: #404040;
  --bases-table-container-border-radius: 0;
  --button-radius: 0;
  --callout-radius: 0;
  --canvas-controls-radius: 0;
  --checkbox-radius: 0;
  --clickable-icon-radius: 0;
  --code-background: #000000;
  --code-border-color: #404040;
  --code-comment: #6a9955;
  --code-function: #dcdcaa;
  --code-keyword: #c586c0;
  --code-normal: #d4d4d4;
  --code-operator: #569cd6;
  --code-property: #c586c0;
  --code-punctuation: #efde62;
  --code-radius: 0;
  --code-size: 16px;
  --code-string: #ce9178;
  --code-tag: #d4d4d4;
  --code-value: #b5cea8;
  --divider-color: #404040;
  --embed-block-shadow-hover: 0 0 0 1px #404040, inset 0 0 0 1px #404040;
  --file-margins: 0;
  --footnote-divider-color: #404040;
  --footnote-radius: 0;
  --h1-line-height: 1.5;
  --h1-size: 1em;
  --h1-weight: 600;
  --h2-line-height: 1.5;
  --h2-size: 1em;
  --h2-weight: 600;
  --h3-line-height: 1.5;
  --h3-size: 1em;
  --h3-weight: 600;
  --h4-line-height: 1.5;
  --h4-size: 1em;
  --h4-weight: 600;
  --h5-size: 1em;
  --h5-weight: 600;
  --header-height: 32px;
  --heading-spacing: 16px;
  --hr-color: #404040;
  --inline-title-line-height: 1.5;
  --inline-title-size: 1em;
  --inline-title-weight: 600;
  --input-radius: 0;
  --menu-radius: 0;
  --metadata-border-color: #404040;
  --metadata-divider-color: #404040;
  --metadata-property-radius: 0;
  --modal-radius: 0;
  --nav-item-radius: 0;
  --nav-tag-radius: 0;
  --pdf-shadow: 0 0 0 1px #404040;
  --pdf-thumbnail-shadow: 0 0 0 1px #404040;
  --pill-border-color: #404040;
  --radius-l: 0;
  --radius-m: 0;
  --radius-s: 0;
  --ribbon-padding: 0;
  --scrollbar-active-thumb-bg: #606060;
  --scrollbar-bg: #101010;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #404040;
  --sctric-scroller-width: 12px;
  --setting-items-border-color: #404040;
  --setting-items-radius: 0;
  --slider-track-background: #404040;
  --status-bar-border-color: #404040;
  --status-bar-radius: 0;
  --strict-color-0: #000000;
  --strict-color-1: #101010;
  --strict-color-2: #202020;
  --strict-color-3: #303030;
  --strict-color-4: #404040;
  --strict-color-5: #505050;
  --strict-color-6: #606060;
  --strict-color-7: #707070;
  --strict-color-8: #808080;
  --strict-color-9: #909090;
  --strict-color-separator: #404040;
  --strict-separator: 1px solid #404040;
  --tab-background-active: #101010;
  --tab-curve: 0;
  --tab-outline-color: #404040;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-header-width: 32px;
  --tab-text-color: #dadada;
  --tab-text-color-focused: #dadada;
  --tab-width: 128px;
  --table-add-button-border-color: #404040;
  --table-border-color: #404040;
  --table-header-border-color: #404040;
  --tag-background: none;
  --tag-padding-x: 0;
  --tag-padding-y: 0;
  --tag-size: #dadada;
  --titlebar-background-focused: #262626;
  --titlebar-border-color: #404040;
  --traffic-lights-offset-x: 32px;
  --traffic-lights-offset-y: 32px;
  --quartz-icon-color: currentColor;
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(64, 64, 64);
}`,
    typography: `body .text-highlight {
  background-color: rgb(0, 102, 0);
}`,
    tables: `body table {
  margin-top: 0px;
}

body td {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body th {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    code: `body code {
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(212, 212, 212);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre > code > [data-line] {
  border-left-color: rgb(220, 220, 170);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 220, 170);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 220, 170);
  border-left-color: rgb(220, 220, 170);
  border-right-color: rgb(220, 220, 170);
  border-top-color: rgb(220, 220, 170);
}

body pre > code, pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body figcaption {
  text-align: justify;
}

body figure {
  text-align: justify;
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
}

body h1 {
  color: rgb(0, 187, 0);
}

body h2 {
  color: rgb(0, 187, 0);
}

body h3 {
  color: rgb(0, 187, 0);
}

body h4 {
  color: rgb(0, 187, 0);
}

body h5 {
  color: rgb(0, 187, 0);
}

body h6 {
  color: rgb(0, 187, 0);
}

body hr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  cursor: pointer;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  cursor: pointer;
}

body .explorer .explorer-content ul.explorer-ul li a {
  cursor: pointer;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  cursor: pointer;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  cursor: pointer;
}`,
    footer: `body footer {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  cursor: pointer;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 1px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-width: 1px;
  margin-bottom: 24px;
  padding-bottom: 0px;
  padding-top: 0px;
}

body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(212, 212, 212);
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}`,
  },
  light: {},
};
