import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal-edge",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: 1.2px solid #6e72796d;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.1);
  --background-modifier-cover: rgba(0, 0, 0, 0.366);
  --background-modifier-error: rgb(163, 82, 82);
  --background-modifier-error-hover: #b35454;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-success: #55af7f;
  --background-primary: #20242b;
  --background-primary-alt: #20242b;
  --background-secondary: #252933;
  --bases-cards-background: #20242b;
  --bases-cards-cover-background: #20242b;
  --bases-cards-shadow: 0 0 0 1px 1.2px solid #6e72796d;
  --bases-embed-border-color: 1.2px solid #6e72796d;
  --bases-group-heading-property-color: #8e8e90;
  --bases-table-border-color: #6e72796d;
  --bases-table-cell-background-active: #20242b;
  --bases-table-cell-background-disabled: #20242b;
  --bases-table-group-background: #20242b;
  --bases-table-header-background: #20242b;
  --bases-table-header-color: #8e8e90;
  --bases-table-summary-background: #20242b;
  --blur-background: color-mix(in srgb, #dae1ef 65%, transparent) linear-gradient(#dae1ef, color-mix(in srgb, #dae1ef 65%, transparent));
  --border-color: 1.2px solid;
  --border-radius: 11px;
  --border-size: 1.2px;
  --border-style: solid;
  --box-style-sidebar-toggle-button-height: 58px;
  --canvas-background: #20242b;
  --canvas-card-label-color: #999999;
  --canvas-dot-pattern: #4f5a77;
  --caret-color: #919191;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #8e8e90;
  --checkbox-color: #c37a5b;
  --checkbox-color-hover: #d18c6e;
  --checkbox-marker-color: #fff;
  --checklist-done-color: #8e8e90;
  --code-background: #2f3039;
  --code-border-color: 1.2px solid #6e72796d;
  --code-comment: #999999;
  --code-function: #dcbb59;
  --code-keyword: #de895b;
  --code-normal: #a8aeb0;
  --code-operator: #b89cdd;
  --code-property: #d29a8c;
  --code-punctuation: #8e8e90;
  --code-string: #05a36e;
  --code-value: #e3b750;
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #ba7e47;
  --custom-border: 1.2px solid;
  --custom-border-size: calc(1.2px*1px);
  --divider-color: 1.2px solid #6e72796d;
  --dropdown-background: #dae1ef;
  --dropdown-background-hover: #dbdbdc;
  --embed-block-shadow-hover: 0 0 0 1px 1.2px solid #6e72796d, inset 0 0 0 1px 1.2px solid #6e72796d;
  --file-header-background: #20242b;
  --file-header-background-focused: #20242b;
  --flair-background: #dae1ef;
  --flair-color: #919191;
  --font-style: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --footnote-divider-color: 1.2px solid #6e72796d;
  --footnote-id-color: #8e8e90;
  --footnote-id-color-no-occurrences: #999999;
  --graph-node: #8e8e90;
  --graph-node-focused: #ba7e47;
  --graph-node-unresolved: #999999;
  --graph-text: #919191;
  --h1-font-style: :inherit;
  --heading-formatting: #999999;
  --hr-color: #6e72796d;
  --icon-color: #59607b;
  --icon-color-active: #ba7e47;
  --icon-color-focused: #919191;
  --icon-color-hover: #8e8e90;
  --icon-size: 17px;
  --icon-stroke: 2px;
  --icon-xs: 15px;
  --indentation-guide-color: #59607b44;
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent-hover: rgb(128, 83, 234);
  --interactive-accent-rgb: 21, 146, 255;
  --interactive-hover: #dbdbdc;
  --interactive-normal: #dae1ef;
  --link-color: #ba7e47;
  --link-color-hover: #d18c6e;
  --link-external-color: #ba7e47;
  --link-external-color-hover: #d18c6e;
  --link-unresolved-color: #ba7e47;
  --list-marker-color: #999999;
  --list-marker-color-collapsed: #ba7e47;
  --list-marker-color-hover: #8e8e90;
  --menu-background: #252933;
  --metadata-border-color: 1.2px solid #6e72796d;
  --metadata-divider-color: 1.2px solid #6e72796d;
  --metadata-input-text-color: #919191;
  --metadata-label-text-color: #8e8e90;
  --metadata-label-text-color-hover: #8e8e90;
  --modal-animation: modalAnimation 0.1s ease-in;
  --modal-background: #20242b;
  --nav-collapse-icon-color: #999999;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: #919191;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-collapsed-hover: #8e8e90;
  --nav-heading-color-hover: #919191;
  --nav-indentation-guide-color: #59607b44;
  --nav-item-color: #8e8e90;
  --nav-item-color-active: #919191;
  --nav-item-color-highlighted: #ba7e47;
  --nav-item-color-hover: #919191;
  --nav-item-color-selected: #919191;
  --nav-tag-color: #999999;
  --nav-tag-color-active: #8e8e90;
  --nav-tag-color-hover: #8e8e90;
  --panel-border-color: #dbdbdc;
  --pdf-background: #20242b;
  --pdf-page-background: #20242b;
  --pdf-shadow: 0 0 0 1px 1.2px solid #6e72796d;
  --pdf-sidebar-background: #20242b;
  --pdf-thumbnail-shadow: 0 0 0 1px 1.2px solid #6e72796d;
  --pill-border-color: 1.2px solid #6e72796d;
  --pill-color: #8e8e90;
  --pill-color-hover: #919191;
  --pill-color-remove: #999999;
  --pill-color-remove-hover: #ba7e47;
  --prompt-background: #20242b;
  --raised-background: color-mix(in srgb, #dae1ef 65%, transparent) linear-gradient(#dae1ef, color-mix(in srgb, #dae1ef 65%, transparent));
  --ribbon-background: #252933;
  --ribbon-background-collapsed: #20242b;
  --ribbon-box-style-margin: 11%;
  --ribbon-padding: 10px;
  --ribbon-width: 60px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: #d9d3f7;
  --scrollbar-thumb-bg: #a9bdc64e;
  --search-clear-button-color: #8e8e90;
  --search-icon-color: #8e8e90;
  --search-result-background: #20242b;
  --setting-group-heading-color: #919191;
  --setting-items-background: #20242b;
  --setting-items-border-color: 1.2px solid #6e72796d;
  --slider-track-background: 1.2px solid #6e72796d;
  --status-bar-background: #252933;
  --status-bar-border-color: 1.2px solid #6e72796d;
  --status-bar-text-color: #8e8e90;
  --suggestion-background: #20242b;
  --tab-background-active: #fbfbfa;
  --tab-container-background: #252933;
  --tab-curve: 0px;
  --tab-outline-color: #7c7c7c37;
  --tab-switcher-background: #252933;
  --tab-switcher-menubar-background: linear-gradient(to top, #252933, transparent);
  --tab-text-color: #999999;
  --tab-text-color-active: #8e8e90;
  --tab-text-color-focused: #8e8e90;
  --tab-text-color-focused-active: #8e8e90;
  --tab-text-color-focused-active-current: #919191;
  --tab-text-color-focused-highlighted: #ba7e47;
  --table-add-button-border-color: 1.2px solid #6e72796d;
  --table-add-button-border-width: 0.6px;
  --table-border-color: #6e72796d;
  --table-border-width: 0.6px;
  --table-column-first-border-width: 0.6px;
  --table-column-last-border-width: 0.6px;
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: #f2f2f2;
  --table-header-border-color: #6e72796d;
  --table-header-border-width: 0.6px;
  --table-header-color: #919191;
  --table-row-last-border-width: 0.6px;
  --tag-color: #ba7e47;
  --tag-color-hover: #ba7e47;
  --text-accent: #ba7e47;
  --text-accent-hover: #d18c6e;
  --text-error: #e75545;
  --text-error-hover: #f86959;
  --text-faint: #999999;
  --text-highlight-bg: rgba(216, 185, 85, 0.201);
  --text-muted: #8e8e90;
  --text-normal: #919191;
  --text-on-accent: #f2f2f2;
  --text-selection: rgba(0, 122, 255, 0.15);
  --titlebar-background: #252933;
  --titlebar-background-focused: #20242b;
  --titlebar-border-color: 1.2px solid #6e72796d;
  --titlebar-text-color: #8e8e90;
  --titlebar-text-color-focused: #919191;
  --vault-profile-color: #919191;
  --vault-profile-color-hover: #919191;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 36, 43);
  border-left-color: rgb(128, 128, 128);
  color: rgb(145, 145, 145);
}

body div#quartz-root {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}`,
    typography: `body .page article p > b, b {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body .page article p > em, em {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body .page article p > i, i {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body .page article p > strong, strong {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body .text-highlight {
  background-color: rgba(216, 185, 85, 0.2);
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body del {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: line-through rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body p {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(142, 142, 144) none 0px;
  text-decoration: rgb(142, 142, 144);
  text-decoration-color: rgb(142, 142, 144);
}`,
    links: `body a.external, footer a {
  color: rgb(186, 126, 71);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(186, 126, 71) none 0px;
  text-decoration: underline rgb(186, 126, 71);
  text-decoration-color: rgb(186, 126, 71);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 126, 71);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(186, 126, 71) none 0px;
  text-decoration: underline rgb(186, 126, 71);
  text-decoration-color: rgb(186, 126, 71);
}

body a.internal.broken {
  color: rgb(186, 126, 71);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(186, 126, 71) none 0px;
}`,
    lists: `body dd {
  color: rgb(145, 145, 145);
}

body dt {
  color: rgb(145, 145, 145);
}

body ol > li {
  color: rgb(145, 145, 145);
}

body ol.overflow {
  background-color: rgb(37, 41, 51);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body ul > li {
  color: rgb(145, 145, 145);
}

body ul.overflow {
  background-color: rgb(37, 41, 51);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body blockquote {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    tables: `body .spacer {
  background-color: rgb(37, 41, 51);
}

body .table-container {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body table {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body td {
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
  color: rgb(145, 145, 145);
}

body th {
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
  color: rgb(145, 145, 145);
}`,
    code: `body code {
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

body pre > code > [data-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 187, 89);
  border-left-color: rgb(220, 187, 89);
  border-right-color: rgb(220, 187, 89);
  border-top-color: rgb(220, 187, 89);
}

body pre > code, pre:has(> code) {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body pre:has(> code) {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    images: `body audio {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body figcaption {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body figure {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body img {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body video {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    embeds: `body .file-embed {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
}

body .footnotes {
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

body .transclude {
  border-bottom-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body .transclude-inner {
  border-bottom-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(142, 142, 144);
  text-decoration: line-through rgb(142, 142, 144);
  text-decoration-color: rgb(142, 142, 144);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body li.task-list-item[data-task='!'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='*'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='-'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='/'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='>'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='?'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='I'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='S'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='b'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='c'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='d'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='f'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='i'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='k'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='l'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='p'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='u'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body li.task-list-item[data-task='w'] {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}`,
    search: `body .search > .search-button {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
}

body .search > .search-container > .search-space > * {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(145, 145, 145);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(145, 145, 145);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(145, 145, 145);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(110, 114, 121, 0.427);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(110, 114, 121, 0.427);
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(145, 145, 145);
}

body a.internal.tag-link::before {
  color: rgb(186, 126, 71);
}

body h1 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h2 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h3 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h4 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h5 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h6 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
}

body ::-webkit-scrollbar-corner {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
}

body ::-webkit-scrollbar-track {
  background: rgb(32, 36, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 43);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(142, 142, 144);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(142, 142, 144);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(142, 142, 144);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(89, 96, 123);
  border-left-color: rgb(89, 96, 123);
  border-right-color: rgb(89, 96, 123);
  border-top-color: rgb(89, 96, 123);
  color: rgb(89, 96, 123);
}`,
    footer: `body footer {
  background-color: rgb(37, 41, 51);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-bottom-width: 1px;
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-right-width: 1px;
  border-top-color: rgba(110, 114, 121, 0.427);
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body footer ul li a {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body li.section-li > .section .meta {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}

body ul.section-ul {
  background-color: rgb(37, 41, 51);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(89, 96, 123);
  border-left-color: rgb(89, 96, 123);
  border-right-color: rgb(89, 96, 123);
  border-top-color: rgb(89, 96, 123);
  color: rgb(89, 96, 123);
}

body .darkmode svg {
  color: rgb(89, 96, 123);
  stroke: rgb(89, 96, 123);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

body .metadata {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .navigation-progress {
  background-color: rgb(37, 41, 51);
}

body .page-header h2.page-title {
  color: rgb(145, 145, 145);
}

body abbr {
  color: rgb(145, 145, 145);
  text-decoration: underline dotted rgb(145, 145, 145);
}

body details {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body input[type=text] {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-bottom-width: 1px;
  border-left-color: rgba(110, 114, 121, 0.427);
  border-left-width: 1px;
  border-right-color: rgba(110, 114, 121, 0.427);
  border-right-width: 1px;
  border-top-color: rgba(110, 114, 121, 0.427);
  border-top-width: 1px;
  color: rgb(142, 142, 144);
}

body kbd {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

body progress {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

body sub {
  color: rgb(145, 145, 145);
}

body summary {
  color: rgb(145, 145, 145);
}

body sup {
  color: rgb(145, 145, 145);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: 1.2px solid #796e6e47;
  --background-modifier-cover: rgba(0, 0, 0, 0.507);
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #FF9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-success: #A4E7C3;
  --background-primary: #e4ddd3;
  --background-primary-alt: #EAE4DD;
  --background-secondary: #EAE4DD;
  --bases-cards-background: #e4ddd3;
  --bases-cards-cover-background: #EAE4DD;
  --bases-cards-shadow: 0 0 0 1px 1.2px solid #796e6e47;
  --bases-embed-border-color: 1.2px solid #796e6e47;
  --bases-group-heading-property-color: #8a7e69;
  --bases-table-border-color: #796e6e47;
  --bases-table-cell-background-active: #e4ddd3;
  --bases-table-cell-background-disabled: #EAE4DD;
  --bases-table-group-background: #EAE4DD;
  --bases-table-header-background: #e4ddd3;
  --bases-table-header-color: #8a7e69;
  --bases-table-summary-background: #e4ddd3;
  --blur-background: color-mix(in srgb, #e4ddd3 65%, transparent) linear-gradient(#e4ddd3, color-mix(in srgb, #e4ddd3 65%, transparent));
  --border-radius: 11px;
  --border-size: 1.2px;
  --border-style: solid;
  --box-style-sidebar-toggle-button-height: 58px;
  --canvas-background: #e4ddd3;
  --canvas-card-label-color: #957c57d4;
  --canvas-dot-pattern: #796e6e47;
  --caret-color: #333;
  --checkbox-border-color: #957c57d4;
  --checkbox-border-color-hover: #8a7e69;
  --checkbox-color: #c37a5b;
  --checkbox-color-hover: #d18c6e;
  --checkbox-marker-color: #fff;
  --checklist-done-color: #8a7e69;
  --code-background: #e2dcd5;
  --code-border-color: 1.2px solid #796e6e47;
  --code-comment: #957c57d4;
  --code-function: #dcbb59;
  --code-keyword: #de895b;
  --code-normal: #a8aeb0;
  --code-operator: #b89cdd;
  --code-property: #d29a8c;
  --code-punctuation: #8a7e69;
  --code-string: #05a36e;
  --code-value: #e3b750;
  --collapse-icon-color: #957c57d4;
  --collapse-icon-color-collapsed: #985c35;
  --custom-border: 1.2px solid;
  --custom-border-size: calc(1.2px*1px);
  --divider-color: 1.2px solid #796e6e47;
  --dropdown-background: #f1ece5;
  --dropdown-background-hover: #dbdbdc;
  --embed-block-shadow-hover: 0 0 0 1px 1.2px solid #796e6e47, inset 0 0 0 1px 1.2px solid #796e6e47;
  --file-header-background: #e4ddd3;
  --file-header-background-focused: #e4ddd3;
  --flair-background: #f1ece5;
  --flair-color: #333;
  --font-style: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --footnote-divider-color: 1.2px solid #796e6e47;
  --footnote-id-color: #8a7e69;
  --footnote-id-color-no-occurrences: #957c57d4;
  --graph-node: #8a7e69;
  --graph-node-focused: #985c35;
  --graph-node-unresolved: #957c57d4;
  --graph-text: #333;
  --h1-font-style: :inherit;
  --heading-formatting: #957c57d4;
  --hr-color: #796e6e47;
  --icon-color: #705757;
  --icon-color-active: #985c35;
  --icon-color-focused: #333;
  --icon-color-hover: #8a7e69;
  --icon-size: 17px;
  --icon-stroke: 2px;
  --icon-xs: 15px;
  --indentation-guide-color: #957c5723;
  --input-date-separator: #957c57d4;
  --input-placeholder-color: #957c57d4;
  --interactive-accent-hover: rgb(128, 83, 234);
  --interactive-accent-rgb: 21, 146, 255;
  --interactive-hover: #dbdbdc;
  --interactive-normal: #f1ece5;
  --link-color: #985c35;
  --link-color-hover: #bf7c50;
  --link-external-color: #985c35;
  --link-external-color-hover: #bf7c50;
  --link-unresolved-color: #985c35;
  --list-marker-color: #957c57d4;
  --list-marker-color-collapsed: #985c35;
  --list-marker-color-hover: #8a7e69;
  --menu-background: #EAE4DD;
  --metadata-border-color: 1.2px solid #796e6e47;
  --metadata-divider-color: 1.2px solid #796e6e47;
  --metadata-input-text-color: #333;
  --metadata-label-text-color: #8a7e69;
  --metadata-label-text-color-hover: #8a7e69;
  --modal-animation: modalAnimation 0.1s ease-in;
  --modal-background: #e4ddd3;
  --nav-collapse-icon-color: #957c57d4;
  --nav-collapse-icon-color-collapsed: #957c57d4;
  --nav-heading-color: #333;
  --nav-heading-color-collapsed: #957c57d4;
  --nav-heading-color-collapsed-hover: #8a7e69;
  --nav-heading-color-hover: #333;
  --nav-indentation-guide-color: #957c5723;
  --nav-item-color: #8a7e69;
  --nav-item-color-active: #333;
  --nav-item-color-highlighted: #985c35;
  --nav-item-color-hover: #333;
  --nav-item-color-selected: #333;
  --nav-tag-color: #957c57d4;
  --nav-tag-color-active: #8a7e69;
  --nav-tag-color-hover: #8a7e69;
  --panel-border-color: #dbdbdc;
  --pdf-background: #e4ddd3;
  --pdf-page-background: #e4ddd3;
  --pdf-sidebar-background: #e4ddd3;
  --pill-border-color: 1.2px solid #796e6e47;
  --pill-color: #8a7e69;
  --pill-color-hover: #333;
  --pill-color-remove: #957c57d4;
  --pill-color-remove-hover: #985c35;
  --prompt-background: #e4ddd3;
  --raised-background: color-mix(in srgb, #e4ddd3 65%, transparent) linear-gradient(#e4ddd3, color-mix(in srgb, #e4ddd3 65%, transparent));
  --ribbon-background: #EAE4DD;
  --ribbon-background-collapsed: #e4ddd3;
  --ribbon-box-style-margin: 11%;
  --ribbon-padding: 10px;
  --ribbon-width: 60px;
  --scrollbar-bg: #F7EED3;
  --scrollbar-thumb-bg: #c6bfa94e;
  --search-clear-button-color: #8a7e69;
  --search-icon-color: #8a7e69;
  --search-result-background: #e4ddd3;
  --setting-group-heading-color: #333;
  --setting-items-background: #EAE4DD;
  --setting-items-border-color: 1.2px solid #796e6e47;
  --slider-track-background: 1.2px solid #796e6e47;
  --status-bar-background: #EAE4DD;
  --status-bar-border-color: 1.2px solid #796e6e47;
  --status-bar-text-color: #8a7e69;
  --suggestion-background: #e4ddd3;
  --tab-background-active: #fbfbfa;
  --tab-container-background: #EAE4DD;
  --tab-curve: 0px;
  --tab-outline-color: #7c7c7c37;
  --tab-switcher-background: #EAE4DD;
  --tab-switcher-menubar-background: linear-gradient(to top, #EAE4DD, transparent);
  --tab-text-color: #957c57d4;
  --tab-text-color-active: #8a7e69;
  --tab-text-color-focused: #8a7e69;
  --tab-text-color-focused-active: #8a7e69;
  --tab-text-color-focused-active-current: #333;
  --tab-text-color-focused-highlighted: #985c35;
  --table-add-button-border-color: 1.2px solid #796e6e47;
  --table-add-button-border-width: 0.6px;
  --table-border-color: #796e6e47;
  --table-border-width: 0.6px;
  --table-column-first-border-width: 0.6px;
  --table-column-last-border-width: 0.6px;
  --table-drag-handle-color: #957c57d4;
  --table-drag-handle-color-active: #f2f2f2;
  --table-header-border-color: #796e6e47;
  --table-header-border-width: 0.6px;
  --table-header-color: #333;
  --table-row-last-border-width: 0.6px;
  --tag-color: #985c35;
  --tag-color-hover: #985c35;
  --text-accent: #985c35;
  --text-accent-hover: #bf7c50;
  --text-error: #ba6d64;
  --text-error-hover: #533232;
  --text-faint: #957c57d4;
  --text-highlight-bg: rgba(230, 192, 70, 0.4);
  --text-muted: #8a7e69;
  --text-normal: #333;
  --text-on-accent: #f2f2f2;
  --text-selection: rgba(0, 122, 255, 0.15);
  --titlebar-background: #EAE4DD;
  --titlebar-background-focused: #e4ddd3;
  --titlebar-border-color: 1.2px solid #796e6e47;
  --titlebar-text-color: #8a7e69;
  --titlebar-text-color-focused: #333;
  --vault-profile-color: #333;
  --vault-profile-color-hover: #333;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(228, 221, 211);
  border-left-color: rgb(128, 128, 128);
  color: rgb(51, 51, 51);
}

body div#quartz-root {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}`,
    typography: `body .page article p > b, b {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > em, em {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > i, i {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > strong, strong {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .text-highlight {
  background-color: rgba(230, 192, 70, 0.4);
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body del {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: line-through rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body p {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(138, 126, 105) none 0px;
  text-decoration: rgb(138, 126, 105);
  text-decoration-color: rgb(138, 126, 105);
}`,
    links: `body a.external, footer a {
  color: rgb(152, 92, 53);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(152, 92, 53) none 0px;
  text-decoration: underline rgb(152, 92, 53);
  text-decoration-color: rgb(152, 92, 53);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(152, 92, 53);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(152, 92, 53) none 0px;
  text-decoration: underline rgb(152, 92, 53);
  text-decoration-color: rgb(152, 92, 53);
}

body a.internal.broken {
  color: rgb(152, 92, 53);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(152, 92, 53) none 0px;
}`,
    lists: `body dd {
  color: rgb(51, 51, 51);
}

body dt {
  color: rgb(51, 51, 51);
}

body ol > li {
  color: rgb(51, 51, 51);
}

body ol.overflow {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body ul > li {
  color: rgb(51, 51, 51);
}

body ul.overflow {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(149, 124, 87, 0.83);
  text-decoration: rgba(149, 124, 87, 0.83);
}

body blockquote {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    tables: `body .spacer {
  background-color: rgb(234, 228, 221);
}

body .table-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body table {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body td {
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
  color: rgb(51, 51, 51);
}

body th {
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
  color: rgb(51, 51, 51);
}`,
    code: `body code {
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body pre > code > [data-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 187, 89);
  border-left-color: rgb(220, 187, 89);
  border-right-color: rgb(220, 187, 89);
  border-top-color: rgb(220, 187, 89);
}

body pre > code, pre:has(> code) {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body pre:has(> code) {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    images: `body audio {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body figcaption {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body figure {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body img {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body video {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    embeds: `body .file-embed {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
}

body .footnotes {
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .transclude {
  border-bottom-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .transclude-inner {
  border-bottom-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(138, 126, 105);
  text-decoration: line-through rgb(138, 126, 105);
  text-decoration-color: rgb(138, 126, 105);
}

body input[type=checkbox] {
  border-bottom-color: rgba(149, 124, 87, 0.83);
  border-left-color: rgba(149, 124, 87, 0.83);
  border-right-color: rgba(149, 124, 87, 0.83);
  border-top-color: rgba(149, 124, 87, 0.83);
}

body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='-'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    search: `body .search > .search-button {
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
}

body .search > .search-container > .search-space > * {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(121, 110, 110, 0.28);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(121, 110, 110, 0.28);
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(51, 51, 51);
}

body a.internal.tag-link::before {
  color: rgb(152, 92, 53);
}

body h1 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h2 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h3 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h4 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h5 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h6 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
}

body ::-webkit-scrollbar-corner {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
}

body ::-webkit-scrollbar-track {
  background: rgb(228, 221, 211) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 221, 211);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(138, 126, 105);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(138, 126, 105);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(138, 126, 105);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 87, 87);
  border-left-color: rgb(112, 87, 87);
  border-right-color: rgb(112, 87, 87);
  border-top-color: rgb(112, 87, 87);
  color: rgb(112, 87, 87);
}`,
    footer: `body footer {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-bottom-width: 1px;
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-right-width: 1px;
  border-top-color: rgba(121, 110, 110, 0.28);
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body footer ul li a {
  color: rgb(138, 126, 105);
  text-decoration: rgb(138, 126, 105);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(138, 126, 105);
  text-decoration: rgb(138, 126, 105);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body li.section-li > .section .meta {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(138, 126, 105);
  text-decoration: rgb(138, 126, 105);
}

body ul.section-ul {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(112, 87, 87);
  border-left-color: rgb(112, 87, 87);
  border-right-color: rgb(112, 87, 87);
  border-top-color: rgb(112, 87, 87);
  color: rgb(112, 87, 87);
}

body .darkmode svg {
  color: rgb(112, 87, 87);
  stroke: rgb(112, 87, 87);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
  color: rgb(138, 126, 105);
}

body .breadcrumb-element p {
  color: rgba(149, 124, 87, 0.83);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .metadata {
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .navigation-progress {
  background-color: rgb(234, 228, 221);
}

body .page-header h2.page-title {
  color: rgb(51, 51, 51);
}

body abbr {
  color: rgb(51, 51, 51);
  text-decoration: underline dotted rgb(51, 51, 51);
}

body details {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body input[type=text] {
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-bottom-width: 1px;
  border-left-color: rgba(121, 110, 110, 0.28);
  border-left-width: 1px;
  border-right-color: rgba(121, 110, 110, 0.28);
  border-right-width: 1px;
  border-top-color: rgba(121, 110, 110, 0.28);
  border-top-width: 1px;
  color: rgb(138, 126, 105);
}

body kbd {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

body progress {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body sub {
  color: rgb(51, 51, 51);
}

body summary {
  color: rgb(51, 51, 51);
}

body sup {
  color: rgb(51, 51, 51);
}`,
  },
};
