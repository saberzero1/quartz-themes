import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "strict", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #404040 !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #404040 !important;
  --bases-embed-border-color: #404040 !important;
  --bases-embed-border-radius: 0 !important;
  --bases-table-border-color: #404040 !important;
  --bases-table-container-border-radius: 0 !important;
  --button-radius: 0 !important;
  --callout-radius: 0;
  --canvas-controls-radius: 0 !important;
  --checkbox-radius: 0 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #000000 !important;
  --code-border-color: #404040 !important;
  --code-comment: #6a9955 !important;
  --code-function: #dcdcaa !important;
  --code-keyword: #c586c0 !important;
  --code-normal: #d4d4d4 !important;
  --code-operator: #569cd6 !important;
  --code-property: #c586c0 !important;
  --code-punctuation: #efde62 !important;
  --code-radius: 0 !important;
  --code-size: 16px !important;
  --code-string: #ce9178 !important;
  --code-tag: #d4d4d4 !important;
  --code-value: #b5cea8 !important;
  --divider-color: #404040 !important;
  --embed-block-shadow-hover: 0 0 0 1px #404040, inset 0 0 0 1px #404040 !important;
  --file-margins: 0 !important;
  --footnote-divider-color: #404040 !important;
  --footnote-radius: 0 !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 1em !important;
  --h1-weight: 600 !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1em !important;
  --h2-weight: 600 !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1em !important;
  --h3-weight: 600 !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1em !important;
  --h4-weight: 600 !important;
  --h5-size: 1em !important;
  --h5-weight: 600 !important;
  --header-height: 32px !important;
  --heading-spacing: 16px !important;
  --hr-color: #404040 !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 1em !important;
  --inline-title-weight: 600 !important;
  --input-radius: 0 !important;
  --menu-radius: 0 !important;
  --metadata-border-color: #404040 !important;
  --metadata-divider-color: #404040 !important;
  --metadata-property-radius: 0 !important;
  --modal-radius: 0 !important;
  --nav-item-radius: 0 !important;
  --nav-tag-radius: 0 !important;
  --pdf-shadow: 0 0 0 1px #404040 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #404040 !important;
  --pill-border-color: #404040 !important;
  --radius-l: 0 !important;
  --radius-m: 0 !important;
  --radius-s: 0 !important;
  --ribbon-padding: 0 !important;
  --scrollbar-active-thumb-bg: #606060 !important;
  --scrollbar-bg: #101010 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #404040 !important;
  --sctric-scroller-width: 12px !important;
  --setting-items-border-color: #404040 !important;
  --setting-items-radius: 0 !important;
  --slider-track-background: #404040 !important;
  --status-bar-border-color: #404040 !important;
  --status-bar-radius: 0 !important;
  --strict-color-0: #000000 !important;
  --strict-color-1: #101010 !important;
  --strict-color-2: #202020 !important;
  --strict-color-3: #303030 !important;
  --strict-color-4: #404040 !important;
  --strict-color-5: #505050 !important;
  --strict-color-6: #606060 !important;
  --strict-color-7: #707070 !important;
  --strict-color-8: #808080 !important;
  --strict-color-9: #909090 !important;
  --strict-color-separator: #404040 !important;
  --strict-separator: 1px solid #404040 !important;
  --tab-background-active: #101010 !important;
  --tab-curve: 0 !important;
  --tab-outline-color: #404040 !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-header-width: 32px !important;
  --tab-text-color: #dadada !important;
  --tab-text-color-focused: #dadada !important;
  --tab-width: 128px !important;
  --table-add-button-border-color: #404040 !important;
  --table-border-color: #404040 !important;
  --table-header-border-color: #404040 !important;
  --tag-background: none !important;
  --tag-padding-x: 0 !important;
  --tag-padding-y: 0 !important;
  --tag-size: #dadada !important;
  --titlebar-background-focused: #262626 !important;
  --titlebar-border-color: #404040 !important;
  --traffic-lights-offset-x: 32px !important;
  --traffic-lights-offset-y: 32px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body .bases-table thead th {
  border-color: rgb(64, 64, 64);
}

html body .note-properties {
  border-color: rgb(64, 64, 64);
}

html body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 64, 64);
}

html body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(64, 64, 64);
}`,
    typography: `html body .text-highlight {
  background-color: rgb(0, 102, 0);
}

html body li.task-list-item input[type="checkbox"] {
  border-radius: 0px;
}`,
    tables: `html body table {
  margin-top: 0px;
}

html body td {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html body th {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
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

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html body pre > code > [data-line] {
  border-left-color: rgb(220, 220, 170);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 220, 170);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 220, 170);
  border-left-color: rgb(220, 220, 170);
  border-right-color: rgb(220, 220, 170);
  border-top-color: rgb(220, 220, 170);
}

html body pre > code, html pre:has(> code) {
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

html body pre:has(> code) {
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
    images: `html body figcaption {
  text-align: justify;
}

html body figure {
  text-align: justify;
}

html body img {
  border-bottom-color: rgb(0, 187, 0);
  border-left-color: rgb(0, 187, 0);
  border-right-color: rgb(0, 187, 0);
  border-top-color: rgb(0, 187, 0);
}`,
    embeds: `html body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html body .search > .search-button {
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

html body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
}

html body h1 {
  color: rgb(0, 187, 0);
}

html body h2 {
  color: rgb(0, 187, 0);
}

html body h3 {
  color: rgb(0, 187, 0);
}

html body h4 {
  color: rgb(0, 187, 0);
}

html body h5 {
  color: rgb(0, 187, 0);
}

html body h6 {
  color: rgb(0, 187, 0);
}

html body hr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
}`,
    scrollbars: `html body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  cursor: pointer;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  cursor: pointer;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  cursor: pointer;
}`,
    footer: `html body footer {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
}`,
    darkmode: `html body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  cursor: pointer;
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `html body .metadata {
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

html body kbd {
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
}

html body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
}`,
  },
  light: {},
};
