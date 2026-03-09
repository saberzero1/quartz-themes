import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "lagom",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["formular"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-rgb: rgba(108, 108, 108, 0.42);
  --active-line-background: rgba(108, 108, 108, 0.42);
  --active-line-font-size: 18.5px;
  --active-line-indicator: '—';
  --background-image-editor: None;
  --background-image-editor-size: 200px;
  --bases-embed-border-radius: 11.2px;
  --bases-table-container-border-radius: 11.2px;
  --callout-font-size-title: 16px;
  --callout-radius: 11.2px;
  --callouts-align-text: justify;
  --canvas-controls-radius: 11.2px;
  --checkbox-radius: 11.2px;
  --clickable-icon-radius: 11.5px;
  --code-radius: 11.2px;
  --code-size: 15px;
  --code-size-edit-mode: 15px;
  --default-font-size: 17.5px;
  --dropdown-background-hover: rgba(138, 92, 245, 0.1);
  --embed-border-left: none;
  --embed-max-height: 400px;
  --explorer-bar-position: absolute;
  --filename-line-thickness: 1.8px;
  --filename-separator-style: dotted;
  --files-bookmarks-search-bar: flex;
  --focus-active-line-opacity: 0.8;
  --focus-non-active-line-opacity: 0.65;
  --folder-1-open: "╔";
  --folder-2-open: "╔";
  --folder-3-open: "╔";
  --folder-border-color: rgba(108, 108, 108, 0.42);
  --folder-icon-size: 1.5em;
  --folder-padding: 2.3px;
  --footnote-divider-color: none;
  --footnote-radius: 11.2px;
  --h1-size: 20px;
  --h2-size: 18px;
  --h3-size: 16px;
  --h4-size: 14px;
  --h5-size: 12px;
  --h6-size: 10px;
  --headers-align: left;
  --headers-space-simetry: 1.5em;
  --heading-spacing: 60px;
  --hide-add-button: None;
  --hide-empty-properties: none;
  --hide-icon-link-embed-notes: none;
  --hide-navbar: block;
  --hide-separator-yaml: None;
  --icon-file: '·';
  --icon-file-indicator: "·";
  --icon-file-size: 15px;
  --icon-settings: none;
  --icon-ui-opacity: 0.85px;
  --img-align: 0px;
  --inline-code-font-size: calc(17.5px - 1.5 px);
  --inline-title-align: justify;
  --inline-title-bold: 400px;
  --inline-title-size: 18.2px;
  --input-shadow: #363636 0 0 0 1px;
  --input-shadow-hover: rgba(138, 92, 245, 0.6) 0 0 0px 1px;
  --interactive-hover: rgba(138, 92, 245, 0.1);
  --internal-link-border-style: dotted;
  --letter-spacing-note: 0.03px;
  --line-height-note: 24.5px;
  --list-indent: 17px;
  --mac-terminal-shadow: rgba(9, 30, 66, 0.1) 0px 4px 8px 5px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  --macos-button-size: 16px;
  --metadata-display-editing: none;
  --metadata-divider-color: none;
  --metadata-input-font-size: 17.5px;
  --metadata-label-font-size: 16.5px;
  --metadata-property-radius: 11.2px;
  --multiline-files-explorer: justify;
  --nav-item-radius: 11.2px;
  --nav-item-size: 16px;
  --nav-tag-radius: 11.2px;
  --navbar_blur_level: 8px;
  --normal-folder-1-open: "╔";
  --normal-folder-2-open: "╔";
  --normal-folder-3-open: "╔";
  --num-of-notes: none;
  --opacity-grayscale-images: 0.9;
  --p-spacing: 24px;
  --padding-default-note-style: 35px;
  --padding-note-content: 25px;
  --pill-radius: 11.5px;
  --properties-editor-font-size: 16px;
  --quote-font-size: 15.7px;
  --quote-hide-down-line: 0px;
  --quote-hide-top-line: 0px;
  --quote-icon: “;
  --quote-padding: 10px 15px 10px 15px;
  --quotes-align: justify;
  --radius-s: 11.2px;
  --scrollbars: none;
  --separator-icon: 'o0o';
  --separator-icon-color: rgba(108, 108, 108, 0.42);
  --setting-items-background: none;
  --show-dotted-line: 1.5px;
  --show-explorer-buttons: block;
  --show-vault-name: none;
  --tab-radius: 11.2px;
  --table-add-button-border-width: 1px solid;
  --table-border-width: 1px solid;
  --table-column-first-border-width: 1px solid;
  --table-column-last-border-width: 1px solid;
  --table-header-border-width: 1px solid;
  --table-header-weight: normal;
  --table-row-last-border-width: 1px solid;
  --tabs-height: 300px;
  --text-note-align: justify;
  --theme-dark-opacity: 0.75;
  --theme-light-opacity: 0.85;
  --touch-radius-m: 11.5px;
  --touch-radius-s: 11.5px;
  --touch-radius-xl: 11.5px;
  --touch-radius-xs: 11.5px;
  --touch-radius-xxs: 11.5px;
  --wrap-code-blocks: normal;
  --quartz-icon-color: currentColor;
}`,
    links: `body a.external, footer a {
  text-decoration: rgb(166, 138, 249);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(166, 138, 249);
}

body a.internal.broken {
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}`,
    blockquotes: `body blockquote {
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body table {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  margin-top: 24px;
  width: 621px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(38, 38, 38);
}

body td {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
  text-align: center;
}

body th {
  border-top-left-radius: 11.2px;
  font-weight: 400;
  text-align: center;
}

body thead {
  border-bottom-color: rgb(54, 54, 54);
}

body tr {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(54, 54, 54);
}`,
    code: `body code {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body pre > code, pre:has(> code) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 55px;
}

body pre:has(> code) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 55px;
}`,
    images: `body figcaption {
  font-size: 17.5px;
  text-align: justify;
}

body figure {
  margin-bottom: 17.5px;
  margin-top: 17.5px;
  text-align: justify;
}

body img {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2.5px 0px;
  filter: grayscale(1);
}`,
    embeds: `body .transclude {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 7px;
  padding-right: 7px;
  padding-top: 15px;
}

body .transclude-inner {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 7px;
  padding-right: 7px;
  padding-top: 15px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  margin-right: 10px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body hr {
  margin-bottom: 30px;
  margin-top: 30px;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 11.5px;
  border-bottom-right-radius: 11.5px;
  border-top-left-radius: 11.5px;
  border-top-right-radius: 11.5px;
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(108, 108, 108, 0.42);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(108, 108, 108, 0.42);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(108, 108, 108, 0.42);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(108, 108, 108, 0.42);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(108, 108, 108, 0.42);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(108, 108, 108, 0.42);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(108, 108, 108, 0.42);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(108, 108, 108, 0.42);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 11.5px;
  border-bottom-right-radius: 11.5px;
  border-top-left-radius: 11.5px;
  border-top-right-radius: 11.5px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}`,
    misc: `body .metadata {
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  border-top-style: dotted;
  border-top-width: 2px;
  margin-top: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
}

body input[type=text] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body kbd {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12px;
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

body sup {
  font-size: 14.5833px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-rgb: rgba(108, 108, 108, 0.42);
  --active-line-background: rgba(108, 108, 108, 0.42);
  --active-line-font-size: 18.5px;
  --active-line-indicator: '—';
  --background-image-editor: None;
  --background-image-editor-size: 200px;
  --bases-embed-border-radius: 11.2px;
  --bases-table-container-border-radius: 11.2px;
  --callout-font-size-title: 16px;
  --callout-radius: 11.2px;
  --callouts-align-text: justify;
  --canvas-controls-radius: 11.2px;
  --checkbox-radius: 11.2px;
  --clickable-icon-radius: 11.5px;
  --code-radius: 11.2px;
  --code-size: 15px;
  --code-size-edit-mode: 15px;
  --default-font-size: 17.5px;
  --dropdown-background-hover: rgba(138, 92, 245, 0.1);
  --embed-border-left: none;
  --embed-max-height: 400px;
  --explorer-bar-position: absolute;
  --filename-line-thickness: 1.8px;
  --filename-separator-style: dotted;
  --files-bookmarks-search-bar: flex;
  --focus-active-line-opacity: 0.8;
  --focus-non-active-line-opacity: 0.65;
  --folder-1-open: "╔";
  --folder-2-open: "╔";
  --folder-3-open: "╔";
  --folder-border-color: rgba(108, 108, 108, 0.42);
  --folder-icon-size: 1.5em;
  --folder-padding: 2.3px;
  --footnote-divider-color: none;
  --footnote-radius: 11.2px;
  --h1-size: 20px;
  --h2-size: 18px;
  --h3-size: 16px;
  --h4-size: 14px;
  --h5-size: 12px;
  --h6-size: 10px;
  --headers-align: left;
  --headers-space-simetry: 1.5em;
  --heading-spacing: 60px;
  --hide-add-button: None;
  --hide-empty-properties: none;
  --hide-icon-link-embed-notes: none;
  --hide-navbar: block;
  --hide-separator-yaml: None;
  --icon-file: '·';
  --icon-file-indicator: "·";
  --icon-file-size: 15px;
  --icon-settings: none;
  --icon-ui-opacity: 0.85px;
  --img-align: 0px;
  --inline-code-font-size: calc(17.5px - 1.5 px);
  --inline-title-align: justify;
  --inline-title-bold: 400px;
  --inline-title-size: 18.2px;
  --input-shadow: #e0e0e0 0 0 0 1px;
  --input-shadow-hover: rgba(138, 92, 245, 0.6) 0 0 0px 1px;
  --interactive-hover: rgba(138, 92, 245, 0.1);
  --internal-link-border-style: dotted;
  --letter-spacing-note: 0.03px;
  --line-height-note: 24.5px;
  --list-indent: 17px;
  --mac-terminal-shadow: rgba(9, 30, 66, 0.1) 0px 4px 8px 5px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  --macos-button-size: 16px;
  --metadata-display-editing: none;
  --metadata-divider-color: none;
  --metadata-input-font-size: 17.5px;
  --metadata-label-font-size: 16.5px;
  --metadata-property-radius: 11.2px;
  --multiline-files-explorer: justify;
  --nav-item-radius: 11.2px;
  --nav-item-size: 16px;
  --nav-tag-radius: 11.2px;
  --navbar_blur_level: 8px;
  --normal-folder-1-open: "╔";
  --normal-folder-2-open: "╔";
  --normal-folder-3-open: "╔";
  --num-of-notes: none;
  --opacity-grayscale-images: 0.9;
  --p-spacing: 24px;
  --padding-default-note-style: 35px;
  --padding-note-content: 25px;
  --pill-radius: 11.5px;
  --properties-editor-font-size: 16px;
  --quote-font-size: 15.7px;
  --quote-hide-down-line: 0px;
  --quote-hide-top-line: 0px;
  --quote-icon: “;
  --quote-padding: 10px 15px 10px 15px;
  --quotes-align: justify;
  --radius-s: 11.2px;
  --scrollbars: none;
  --separator-icon: 'o0o';
  --separator-icon-color: rgba(108, 108, 108, 0.42);
  --setting-items-background: none;
  --show-dotted-line: 1.5px;
  --show-explorer-buttons: block;
  --show-vault-name: none;
  --tab-radius: 11.2px;
  --table-add-button-border-width: 1px solid;
  --table-border-width: 1px solid;
  --table-column-first-border-width: 1px solid;
  --table-column-last-border-width: 1px solid;
  --table-header-border-width: 1px solid;
  --table-header-weight: normal;
  --table-row-last-border-width: 1px solid;
  --tabs-height: 300px;
  --text-note-align: justify;
  --theme-dark-opacity: 0.75;
  --theme-light-opacity: 0.85;
  --touch-radius-m: 11.5px;
  --touch-radius-s: 11.5px;
  --touch-radius-xl: 11.5px;
  --touch-radius-xs: 11.5px;
  --touch-radius-xxs: 11.5px;
  --wrap-code-blocks: normal;
  --quartz-icon-color: currentColor;
}`,
    links: `body a.external, footer a {
  text-decoration: rgb(138, 92, 245);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(138, 92, 245);
}

body a.internal.broken {
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}`,
    blockquotes: `body blockquote {
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body table {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  margin-top: 24px;
  width: 621px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(246, 246, 246);
}

body td {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
  text-align: center;
}

body th {
  border-top-left-radius: 11.2px;
  font-weight: 400;
  text-align: center;
}

body thead {
  border-bottom-color: rgb(224, 224, 224);
}

body tr {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(224, 224, 224);
}`,
    code: `body code {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body pre > code, pre:has(> code) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 55px;
}

body pre:has(> code) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 55px;
}`,
    images: `body figcaption {
  font-size: 17.5px;
  text-align: justify;
}

body figure {
  margin-bottom: 17.5px;
  margin-top: 17.5px;
  text-align: justify;
}

body img {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2.5px 0px;
  filter: saturate(1.05);
}`,
    embeds: `body .transclude {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 7px;
  padding-right: 7px;
  padding-top: 15px;
}

body .transclude-inner {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 7px;
  padding-right: 7px;
  padding-top: 15px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  margin-right: 10px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body hr {
  margin-bottom: 30px;
  margin-top: 30px;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 11.5px;
  border-bottom-right-radius: 11.5px;
  border-top-left-radius: 11.5px;
  border-top-right-radius: 11.5px;
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(108, 108, 108, 0.42);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(108, 108, 108, 0.42);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(108, 108, 108, 0.42);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(108, 108, 108, 0.42);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(108, 108, 108, 0.42);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(108, 108, 108, 0.42);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(108, 108, 108, 0.42);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(108, 108, 108, 0.42);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 11.5px;
  border-bottom-right-radius: 11.5px;
  border-top-left-radius: 11.5px;
  border-top-right-radius: 11.5px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}`,
    misc: `body .metadata {
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  border-top-style: dotted;
  border-top-width: 2px;
  margin-top: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
}

body input[type=text] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

body kbd {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12px;
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

body sup {
  font-size: 14.5833px;
}`,
  },
};
