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
  --accent-rgb: rgba(108, 108, 108, 0.42) !important;
  --active-line-background: rgba(108, 108, 108, 0.42) !important;
  --active-line-font-size: 18.5px !important;
  --active-line-indicator: '—' !important;
  --background-image-editor: None !important;
  --background-image-editor-size: 200px !important;
  --bases-embed-border-radius: 11.2px !important;
  --bases-table-container-border-radius: 11.2px !important;
  --callout-font-size-title: 16px;
  --callout-radius: 11.2px;
  --callouts-align-text: justify !important;
  --canvas-controls-radius: 11.2px !important;
  --checkbox-radius: 11.2px !important;
  --clickable-icon-radius: 11.5px !important;
  --code-radius: 11.2px !important;
  --code-size: 15px !important;
  --code-size-edit-mode: 15px !important;
  --default-font-size: 17.5px !important;
  --dropdown-background-hover: hsla(258, 88%, 66%, 0.1) !important;
  --embed-border-left: none !important;
  --embed-max-height: 400px !important;
  --explorer-bar-position: absolute !important;
  --filename-line-thickness: 1.8px !important;
  --filename-separator-style: dotted !important;
  --files-bookmarks-search-bar: flex !important;
  --focus-active-line-opacity: 0.8 !important;
  --focus-non-active-line-opacity: 0.65 !important;
  --folder-1-open: "╔" !important;
  --folder-2-open: "╔" !important;
  --folder-3-open: "╔" !important;
  --folder-border-color: rgba(108, 108, 108, 0.42) !important;
  --folder-icon-size: 1.5em !important;
  --folder-padding: 2.3px !important;
  --footnote-divider-color: none !important;
  --footnote-radius: 11.2px !important;
  --h1-size: 20px !important;
  --h2-size: 18px !important;
  --h3-size: 16px !important;
  --h4-size: 14px !important;
  --h5-size: 12px !important;
  --h6-size: 10px !important;
  --headers-align: left !important;
  --headers-space-simetry: 1.5em !important;
  --heading-spacing: 60px !important;
  --hide-add-button: None !important;
  --hide-empty-properties: none !important;
  --hide-icon-link-embed-notes: none !important;
  --hide-navbar: block !important;
  --hide-separator-yaml: None !important;
  --icon-file: '·' !important;
  --icon-file-indicator: "·" !important;
  --icon-file-size: 15px !important;
  --icon-settings: none !important;
  --icon-ui-opacity: 0.85px !important;
  --img-align: 0px !important;
  --inline-code-font-size: calc(17.5px - 1.5 px) !important;
  --inline-title-align: justify !important;
  --inline-title-bold: 400px !important;
  --inline-title-size: 18.2px !important;
  --input-shadow: #363636 0 0 0 1px !important;
  --input-shadow-hover: hsla(258, 88%, 66%, 0.6) 0 0 0px 1px !important;
  --interactive-hover: hsla(258, 88%, 66%, 0.1) !important;
  --internal-link-border-style: dotted !important;
  --letter-spacing-note: 0.03px !important;
  --line-height-note: 24.5px !important;
  --list-indent: 17px !important;
  --mac-terminal-shadow: rgba(9, 30, 66, 0.1) 0px 4px 8px 5px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px !important;
  --macos-button-size: 16px !important;
  --metadata-display-editing: none !important;
  --metadata-divider-color: none !important;
  --metadata-input-font-size: 17.5px !important;
  --metadata-label-font-size: 16.5px !important;
  --metadata-property-radius: 11.2px !important;
  --multiline-files-explorer: justify !important;
  --nav-item-radius: 11.2px !important;
  --nav-item-size: 16px !important;
  --nav-tag-radius: 11.2px !important;
  --navbar_blur_level: 8px !important;
  --normal-folder-1-open: "╔" !important;
  --normal-folder-2-open: "╔" !important;
  --normal-folder-3-open: "╔" !important;
  --num-of-notes: none !important;
  --opacity-grayscale-images: 0.9 !important;
  --p-spacing: 24px !important;
  --padding-default-note-style: 35px !important;
  --padding-note-content: 25px !important;
  --pill-radius: 11.5px !important;
  --properties-editor-font-size: 16px !important;
  --quote-font-size: 15.7px !important;
  --quote-hide-down-line: 0px !important;
  --quote-hide-top-line: 0px !important;
  --quote-icon: “ !important;
  --quote-padding: 10px 15px 10px 15px !important;
  --quotes-align: justify !important;
  --radius-s: 11.2px !important;
  --scrollbars: none !important;
  --separator-icon: 'o0o' !important;
  --separator-icon-color: rgba(108, 108, 108, 0.42) !important;
  --setting-items-background: none !important;
  --show-dotted-line: 1.5px !important;
  --show-explorer-buttons: block !important;
  --show-vault-name: none !important;
  --tab-radius: 11.2px !important;
  --table-add-button-border-width: 1px solid !important;
  --table-border-width: 1px solid !important;
  --table-column-first-border-width: 1px solid !important;
  --table-column-last-border-width: 1px solid !important;
  --table-header-border-width: 1px solid !important;
  --table-header-weight: normal !important;
  --table-row-last-border-width: 1px solid !important;
  --tabs-height: 300px !important;
  --text-note-align: justify !important;
  --theme-dark-opacity: 0.75 !important;
  --theme-light-opacity: 0.85 !important;
  --touch-radius-m: 11.5px !important;
  --touch-radius-s: 11.5px !important;
  --touch-radius-xl: 11.5px !important;
  --touch-radius-xs: 11.5px !important;
  --touch-radius-xxs: 11.5px !important;
  --wrap-code-blocks: normal !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(128, 128, 128) rgb(128, 128, 128) rgb(54, 54, 54);
}

html[saved-theme="dark"] body .bases-table thead th {
  font-weight: 400;
}

html[saved-theme="dark"] body .canvas-sidebar {
  box-shadow: rgb(54, 54, 54) 0px 0px 0px 1px;
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  cursor: text;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  cursor: text;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  cursor: text;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  cursor: text;
}

html[saved-theme="dark"] body .text-highlight {
  cursor: text;
}

html[saved-theme="dark"] body del {
  cursor: text;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 11.2px;
}`,
    links: `html[saved-theme="dark"] body a.internal.broken {
  text-decoration-color: rgb(166, 138, 249);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="dark"] body table {
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

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
  text-align: center;
}

html[saved-theme="dark"] body th {
  border-top-left-radius: 11.2px;
  font-weight: 400;
  text-align: center;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(54, 54, 54);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(54, 54, 54);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body figcaption {
  font-size: 17.5px;
  text-align: justify;
}

html[saved-theme="dark"] body figure {
  margin-bottom: 17.5px;
  margin-top: 17.5px;
  text-align: justify;
}

html[saved-theme="dark"] body img {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2.5px 0px;
  filter: grayscale(1);
}`,
    embeds: `html[saved-theme="dark"] body .transclude {
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

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-right-style: solid;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-style: solid;
  padding-bottom: 7px;
  padding-right: 7px;
  padding-top: 15px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  margin-right: 10px;
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
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

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="one"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="three"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="two"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body hr {
  margin-bottom: 30px;
  margin-top: 30px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
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
    explorer: `html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 11.5px;
  border-bottom-right-radius: 11.5px;
  border-top-left-radius: 11.5px;
  border-top-right-radius: 11.5px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
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
    listPage: `html[saved-theme="dark"] body li.section-li {
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
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 11.5px;
  border-bottom-right-radius: 11.5px;
  border-top-left-radius: 11.5px;
  border-top-right-radius: 11.5px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  border-top-style: dotted;
  border-top-width: 2px;
  margin-top: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body sup {
  font-size: 14.5833px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(251, 70, 76);
}`,
  },
  light: {
    base: `:root:root {
  --accent-rgb: rgba(108, 108, 108, 0.42) !important;
  --active-line-background: rgba(108, 108, 108, 0.42) !important;
  --active-line-font-size: 18.5px !important;
  --active-line-indicator: '—' !important;
  --background-image-editor: None !important;
  --background-image-editor-size: 200px !important;
  --bases-embed-border-radius: 11.2px !important;
  --bases-table-container-border-radius: 11.2px !important;
  --callout-font-size-title: 16px;
  --callout-radius: 11.2px;
  --callouts-align-text: justify !important;
  --canvas-controls-radius: 11.2px !important;
  --checkbox-radius: 11.2px !important;
  --clickable-icon-radius: 11.5px !important;
  --code-radius: 11.2px !important;
  --code-size: 15px !important;
  --code-size-edit-mode: 15px !important;
  --default-font-size: 17.5px !important;
  --dropdown-background-hover: hsla(258, 88%, 66%, 0.1) !important;
  --embed-border-left: none !important;
  --embed-max-height: 400px !important;
  --explorer-bar-position: absolute !important;
  --filename-line-thickness: 1.8px !important;
  --filename-separator-style: dotted !important;
  --files-bookmarks-search-bar: flex !important;
  --focus-active-line-opacity: 0.8 !important;
  --focus-non-active-line-opacity: 0.65 !important;
  --folder-1-open: "╔" !important;
  --folder-2-open: "╔" !important;
  --folder-3-open: "╔" !important;
  --folder-border-color: rgba(108, 108, 108, 0.42) !important;
  --folder-icon-size: 1.5em !important;
  --folder-padding: 2.3px !important;
  --footnote-divider-color: none !important;
  --footnote-radius: 11.2px !important;
  --h1-size: 20px !important;
  --h2-size: 18px !important;
  --h3-size: 16px !important;
  --h4-size: 14px !important;
  --h5-size: 12px !important;
  --h6-size: 10px !important;
  --headers-align: left !important;
  --headers-space-simetry: 1.5em !important;
  --heading-spacing: 60px !important;
  --hide-add-button: None !important;
  --hide-empty-properties: none !important;
  --hide-icon-link-embed-notes: none !important;
  --hide-navbar: block !important;
  --hide-separator-yaml: None !important;
  --icon-file: '·' !important;
  --icon-file-indicator: "·" !important;
  --icon-file-size: 15px !important;
  --icon-settings: none !important;
  --icon-ui-opacity: 0.85px !important;
  --img-align: 0px !important;
  --inline-code-font-size: calc(17.5px - 1.5 px) !important;
  --inline-title-align: justify !important;
  --inline-title-bold: 400px !important;
  --inline-title-size: 18.2px !important;
  --input-shadow: #e0e0e0 0 0 0 1px !important;
  --input-shadow-hover: hsla(258, 88%, 66%, 0.6) 0 0 0px 1px !important;
  --interactive-hover: hsla(258, 88%, 66%, 0.1) !important;
  --internal-link-border-style: dotted !important;
  --letter-spacing-note: 0.03px !important;
  --line-height-note: 24.5px !important;
  --list-indent: 17px !important;
  --mac-terminal-shadow: rgba(9, 30, 66, 0.1) 0px 4px 8px 5px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px !important;
  --macos-button-size: 16px !important;
  --metadata-display-editing: none !important;
  --metadata-divider-color: none !important;
  --metadata-input-font-size: 17.5px !important;
  --metadata-label-font-size: 16.5px !important;
  --metadata-property-radius: 11.2px !important;
  --multiline-files-explorer: justify !important;
  --nav-item-radius: 11.2px !important;
  --nav-item-size: 16px !important;
  --nav-tag-radius: 11.2px !important;
  --navbar_blur_level: 8px !important;
  --normal-folder-1-open: "╔" !important;
  --normal-folder-2-open: "╔" !important;
  --normal-folder-3-open: "╔" !important;
  --num-of-notes: none !important;
  --opacity-grayscale-images: 0.9 !important;
  --p-spacing: 24px !important;
  --padding-default-note-style: 35px !important;
  --padding-note-content: 25px !important;
  --pill-radius: 11.5px !important;
  --properties-editor-font-size: 16px !important;
  --quote-font-size: 15.7px !important;
  --quote-hide-down-line: 0px !important;
  --quote-hide-top-line: 0px !important;
  --quote-icon: “ !important;
  --quote-padding: 10px 15px 10px 15px !important;
  --quotes-align: justify !important;
  --radius-s: 11.2px !important;
  --scrollbars: none !important;
  --separator-icon: 'o0o' !important;
  --separator-icon-color: rgba(108, 108, 108, 0.42) !important;
  --setting-items-background: none !important;
  --show-dotted-line: 1.5px !important;
  --show-explorer-buttons: block !important;
  --show-vault-name: none !important;
  --tab-radius: 11.2px !important;
  --table-add-button-border-width: 1px solid !important;
  --table-border-width: 1px solid !important;
  --table-column-first-border-width: 1px solid !important;
  --table-column-last-border-width: 1px solid !important;
  --table-header-border-width: 1px solid !important;
  --table-header-weight: normal !important;
  --table-row-last-border-width: 1px solid !important;
  --tabs-height: 300px !important;
  --text-note-align: justify !important;
  --theme-dark-opacity: 0.75 !important;
  --theme-light-opacity: 0.85 !important;
  --touch-radius-m: 11.5px !important;
  --touch-radius-s: 11.5px !important;
  --touch-radius-xl: 11.5px !important;
  --touch-radius-xs: 11.5px !important;
  --touch-radius-xxs: 11.5px !important;
  --wrap-code-blocks: normal !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(128, 128, 128) rgb(128, 128, 128) rgb(224, 224, 224);
}

html[saved-theme="light"] body .bases-table thead th {
  font-weight: 400;
}

html[saved-theme="light"] body .canvas-sidebar {
  box-shadow: rgb(224, 224, 224) 0px 0px 0px 1px;
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  cursor: text;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  cursor: text;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  cursor: text;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  cursor: text;
}

html[saved-theme="light"] body .text-highlight {
  cursor: text;
}

html[saved-theme="light"] body del {
  cursor: text;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-radius: 11.2px;
}`,
    links: `html[saved-theme="light"] body a.internal.broken {
  text-decoration-color: rgb(138, 92, 245);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="light"] body table {
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

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
  text-align: center;
}

html[saved-theme="light"] body th {
  border-top-left-radius: 11.2px;
  font-weight: 400;
  text-align: center;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(224, 224, 224);
}

html[saved-theme="light"] body tr {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(224, 224, 224);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-width: 1px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
    images: `html[saved-theme="light"] body figcaption {
  font-size: 17.5px;
  text-align: justify;
}

html[saved-theme="light"] body figure {
  margin-bottom: 17.5px;
  margin-top: 17.5px;
  text-align: justify;
}

html[saved-theme="light"] body img {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2.5px 0px;
  filter: saturate(1.05);
}`,
    embeds: `html[saved-theme="light"] body .transclude {
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

html[saved-theme="light"] body .transclude-inner {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-bottom-style: solid;
  border-right-style: solid;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  border-top-style: solid;
  padding-bottom: 7px;
  padding-right: 7px;
  padding-top: 15px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  margin-right: 10px;
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="one"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="three"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="two"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body hr {
  margin-bottom: 30px;
  margin-top: 30px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
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
    explorer: `html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 11.5px;
  border-bottom-right-radius: 11.5px;
  border-top-left-radius: 11.5px;
  border-top-right-radius: 11.5px;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
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
    listPage: `html[saved-theme="light"] body li.section-li {
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
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 11.5px;
  border-bottom-right-radius: 11.5px;
  border-top-left-radius: 11.5px;
  border-top-right-radius: 11.5px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  border-top-style: dotted;
  border-top-width: 2px;
  margin-top: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body sup {
  font-size: 14.5833px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 49, 71);
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(233, 49, 71);
}`,
  },
};
