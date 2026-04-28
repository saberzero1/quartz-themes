import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal-edge",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
    styleSettingsId: "minimal-edge-settings",
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
  --dark: var(--text-normal, #919191);
  --darkgray: var(--text-normal, #919191);
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
  --gray: var(--text-muted, #8e8e90);
  --h1-font-style: :inherit;
  --heading-formatting: #999999;
  --highlight: var(--text-highlight-bg, rgba(216, 185, 85, 0.201));
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
  --interactive-accent-hover: hsl(258, 78%, 62%);
  --interactive-accent-rgb: 21, 146, 255;
  --interactive-hover: #dbdbdc;
  --interactive-normal: #dae1ef;
  --light: var(--background-primary, #20242b);
  --lightgray: var(--background-secondary, #252933);
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
  --secondary: var(--text-accent, #ba7e47);
  --setting-group-heading-color: #919191;
  --setting-items-background: #20242b;
  --setting-items-border-color: 1.2px solid #6e72796d;
  --shiki-active-tab-border-color: #8e8e90;
  --shiki-code-background: #2f3039;
  --shiki-code-comment: #999999;
  --shiki-code-normal: #8e8e90;
  --shiki-code-punctuation: #8e8e90;
  --shiki-gutter-border-color: 1.2px solid #6e72796d;
  --shiki-gutter-text-color: #999999;
  --shiki-gutter-text-color-highlight: #8e8e90;
  --shiki-highlight-neutral: #8e8e90;
  --shiki-terminal-dots-color: #999999;
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
  --tertiary: var(--text-accent-hover, #d18c6e);
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
  --textHighlight: var(--text-highlight-bg, rgba(216, 185, 85, 0.201));
  --titlebar-background: #252933;
  --titlebar-background-focused: #20242b;
  --titlebar-border-color: 1.2px solid #6e72796d;
  --titlebar-text-color: #8e8e90;
  --titlebar-text-color-focused: #919191;
  --vault-profile-color: #919191;
  --vault-profile-color-hover: #919191;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 36, 43);
  border-left-color: rgb(128, 128, 128);
  color: rgb(145, 145, 145);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(216, 185, 85, 0.2);
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body del {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(195, 122, 91);
  border-color: rgb(195, 122, 91);
}

html[saved-theme="dark"] body p {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(142, 142, 144) none 0px;
  text-decoration-color: rgb(142, 142, 144);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(186, 126, 71);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(186, 126, 71) none 0px;
  text-decoration-color: rgb(186, 126, 71);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 126, 71);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(186, 126, 71) none 0px;
  text-decoration-color: rgb(186, 126, 71);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(186, 126, 71);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(186, 126, 71) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body dt {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body blockquote {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(37, 41, 51);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body table {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
  color: rgb(145, 145, 145);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(142, 142, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(142, 142, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(145, 145, 145);
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(145, 145, 145) none 0px;
  text-decoration-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(110, 114, 121, 0.427);
  border-left-color: rgba(110, 114, 121, 0.427);
  border-right-color: rgba(110, 114, 121, 0.427);
  border-top-color: rgba(110, 114, 121, 0.427);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(186, 126, 71);
}

html[saved-theme="dark"] body h1 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body h2 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container {
  background-color: rgb(37, 41, 51);
}

html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(89, 96, 123, 0.267);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(145, 145, 145);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(89, 96, 123);
  border-left-color: rgb(89, 96, 123);
  border-right-color: rgb(89, 96, 123);
  border-top-color: rgb(89, 96, 123);
  color: rgb(89, 96, 123);
}`,
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: rgb(142, 142, 144);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(145, 145, 145);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(142, 142, 144);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(142, 142, 144);
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: rgb(37, 41, 51);
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(89, 96, 123);
  border-left-color: rgb(89, 96, 123);
  border-right-color: rgb(89, 96, 123);
  border-top-color: rgb(89, 96, 123);
  color: rgb(89, 96, 123);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(89, 96, 123);
  stroke: rgb(89, 96, 123);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(145, 145, 145);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(110, 114, 121, 0.427);
  color: rgb(145, 145, 145);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(142, 142, 144);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(142, 142, 144);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(142, 142, 144);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(186, 126, 71);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(142, 142, 144);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(32, 36, 43);
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(32, 36, 43);
  border-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(145, 145, 145);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(37, 41, 51);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body abbr {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body input[type=text] {
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

html[saved-theme="dark"] body kbd {
  background-color: rgb(47, 48, 57);
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(145, 145, 145);
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body sub {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body summary {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body sup {
  color: rgb(145, 145, 145);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(186, 126, 71);
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
  --dark: var(--text-normal, #333);
  --darkgray: var(--text-normal, #333);
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
  --gray: var(--text-muted, #8a7e69);
  --h1-font-style: :inherit;
  --heading-formatting: #957c57d4;
  --highlight: var(--text-highlight-bg, rgba(230, 192, 70, 0.4));
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
  --interactive-accent-hover: hsl(258, 78%, 62%);
  --interactive-accent-rgb: 21, 146, 255;
  --interactive-hover: #dbdbdc;
  --interactive-normal: #f1ece5;
  --light: var(--background-primary, #e4ddd3);
  --lightgray: var(--background-secondary, #EAE4DD);
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
  --secondary: var(--text-accent, #985c35);
  --setting-group-heading-color: #333;
  --setting-items-background: #EAE4DD;
  --setting-items-border-color: 1.2px solid #796e6e47;
  --shiki-active-tab-border-color: #8a7e69;
  --shiki-code-background: #e2dcd5;
  --shiki-code-comment: #957c57d4;
  --shiki-code-normal: #8a7e69;
  --shiki-code-punctuation: #8a7e69;
  --shiki-gutter-border-color: 1.2px solid #796e6e47;
  --shiki-gutter-text-color: #957c57d4;
  --shiki-gutter-text-color-highlight: #8a7e69;
  --shiki-highlight-neutral: #8a7e69;
  --shiki-terminal-dots-color: #957c57d4;
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
  --tertiary: var(--text-accent-hover, #bf7c50);
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
  --textHighlight: var(--text-highlight-bg, rgba(230, 192, 70, 0.4));
  --titlebar-background: #EAE4DD;
  --titlebar-background-focused: #e4ddd3;
  --titlebar-border-color: 1.2px solid #796e6e47;
  --titlebar-text-color: #8a7e69;
  --titlebar-text-color-focused: #333;
  --vault-profile-color: #333;
  --vault-profile-color-hover: #333;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(228, 221, 211);
  border-left-color: rgb(128, 128, 128);
  color: rgb(51, 51, 51);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(230, 192, 70, 0.4);
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body del {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(149, 124, 87, 0.83);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(195, 122, 91);
  border-color: rgb(195, 122, 91);
}

html[saved-theme="light"] body p {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(138, 126, 105) none 0px;
  text-decoration-color: rgb(138, 126, 105);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(152, 92, 53);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(152, 92, 53) none 0px;
  text-decoration-color: rgb(152, 92, 53);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(152, 92, 53);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(152, 92, 53) none 0px;
  text-decoration-color: rgb(152, 92, 53);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(152, 92, 53);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(152, 92, 53) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body dt {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ol > li {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul > li {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(149, 124, 87, 0.83);
}

html[saved-theme="light"] body blockquote {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(234, 228, 221);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body table {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
  color: rgb(51, 51, 51);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body figcaption {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(149, 124, 87, 0.83);
  border-left-color: rgba(149, 124, 87, 0.83);
  border-right-color: rgba(149, 124, 87, 0.83);
  border-top-color: rgba(149, 124, 87, 0.83);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(138, 126, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(138, 126, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(51, 51, 51);
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

html[saved-theme="light"] body .callout[data-callout="note"] {
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(228, 221, 211);
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(121, 110, 110, 0.28);
  border-left-color: rgba(121, 110, 110, 0.28);
  border-right-color: rgba(121, 110, 110, 0.28);
  border-top-color: rgba(121, 110, 110, 0.28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(152, 92, 53);
}

html[saved-theme="light"] body h1 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body h2 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container {
  background-color: rgb(234, 228, 221);
}

html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(149, 124, 87, 0.137);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(51, 51, 51);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 87, 87);
  border-left-color: rgb(112, 87, 87);
  border-right-color: rgb(112, 87, 87);
  border-top-color: rgb(112, 87, 87);
  color: rgb(112, 87, 87);
}`,
    footer: `html[saved-theme="light"] body footer {
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

html[saved-theme="light"] body footer ul li a {
  color: rgb(138, 126, 105);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(51, 51, 51);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(138, 126, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(138, 126, 105);
}

html[saved-theme="light"] body ul.section-ul {
  background-color: rgb(234, 228, 221);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(112, 87, 87);
  border-left-color: rgb(112, 87, 87);
  border-right-color: rgb(112, 87, 87);
  border-top-color: rgb(112, 87, 87);
  color: rgb(112, 87, 87);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(112, 87, 87);
  stroke: rgb(112, 87, 87);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
  color: rgb(138, 126, 105);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(149, 124, 87, 0.83);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(51, 51, 51);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(121, 110, 110, 0.28);
  color: rgb(51, 51, 51);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(138, 126, 105);
  border-left-color: rgb(138, 126, 105);
  border-right-color: rgb(138, 126, 105);
  border-top-color: rgb(138, 126, 105);
  color: rgb(138, 126, 105);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(138, 126, 105);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(138, 126, 105);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(138, 126, 105);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(152, 92, 53);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(138, 126, 105);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(228, 221, 211);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(228, 221, 211);
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(51, 51, 51);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(234, 228, 221);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body abbr {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body input[type=text] {
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

html[saved-theme="light"] body kbd {
  background-color: rgb(226, 220, 213);
  border-bottom-color: rgb(168, 174, 176);
  border-left-color: rgb(168, 174, 176);
  border-right-color: rgb(168, 174, 176);
  border-top-color: rgb(168, 174, 176);
  color: rgb(168, 174, 176);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body sub {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body summary {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body sup {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(152, 92, 53);
}`,
  },
  classSettings: {
    "default-theme": `body.default-theme {
--background-primary: #20242b;
--background-secondary: #252933;
--text-normal: #919191;
--border-color: var(--border-size) var(--border-style);
--hr-color: #6e72796d;
--table-border-color: #6e72796d;
--canvas-dot-pattern: #4f5a77;
}
body.default-theme {
--background-primary: #e4ddd3;
--background-secondary: #EAE4DD;
--interactive-normal: #f1ece5;
--text-normal: #333;
--background-modifier-border: var(--border-size) var(--border-style) #796e6e47;
--hr-color: #796e6e47;
--table-border-color: #796e6e47;
--canvas-dot-pattern: #796e6e47;
}`,
    "warm-theme": `body.warm-theme {
--background-primary: #2a2420;
--background-secondary: #322c27;
--text-normal: #b3a59a;
--icon-color: #705757;
--text-accent: #c57021;
--interactive-normal: #2a2420;
--background-modifier-border: var(--border-size) var(--border-style) #554a40;
--code-background: #251e19;
--code-keyword: #de895b;
--code-normal: #a8aeb0;
--code-operator: #b89cdd;
--code-value: #e3b750;
--code-function: #dcbb59;
--code-property: #d29a8c;
--code-string: #05a36e;
--hr-color: #554a40;
--table-border-color: #554a40;
--canvas-dot-pattern: #705757;
}
body.warm-theme {
--background-primary: #eeddc9;
--background-secondary: #faf0e8;
--text-normal: #705757;
--icon-color: #705757;
--text-muted: #6d5c5c;
--text-faint: #2d2121;
--text-accent: #a0662fdf;
--background-modifier-border: var(--border-size) var(--border-style) #99755f91;
--code-background: #4e3d32;
--code-keyword: #de895b;
--code-normal: #a8aeb0;
--code-operator: #b89cdd;
--code-value: #e3b750;
--code-function: #dcbb59;
--code-property: #d29a8c;
--code-string: #05a36e;
--canvas-dot-pattern: #70575777;
}`,
    "eclipse-theme": `body.eclipse-theme {
--background-primary: #1a1c1d;
--background-secondary: #262729;
--text-normal: #a6a8aa;
--text-faint: #ffffff;
--text-accent: #1cb6ca;
--icon-color: #a6a6a6;
--background-modifier-border: var(--border-size) var(--border-style) #424242;
--code-background: #1c1d24;
--code-keyword: #de895b;
--code-normal: #a8aeb0;
--code-operator: #b89cdd;
--code-value: #e3b750;
--code-function: #dcbb59;
--code-property: #d29a8c;
--code-string: #05a36e;
--hr-color: #424242;
--table-border-color: #424242;
--canvas-dot-pattern: #4f5a77;
}
body.eclipse-theme {
--background-primary: #f6f6f6;
--background-secondary: #ffffff;
--text-normal: #494949;
--text-faint: #939393;
--text-accent: #1cb6ca;
--icon-color: #797c6d;
--background-modifier-border: var(--border-size) var(--border-style) #9b9b9b84;
--code-background: #2f3039;
--code-keyword: #de895b;
--code-normal: #a8aeb0;
--code-operator: #b89cdd;
--code-value: #e3b750;
--code-function: #dcbb59;
--code-property: #d29a8c;
--code-string: #05a36e;
--nav-item-background-active: --background-modifier-border: var(--border-size) var(--border-style) #9b9b9b84;
--hr-color: #b9979747;
--table-border-color: #9b9b9b84;
--canvas-dot-pattern: #4949498b;
}`,
    "vintage-theme": `body.vintage-theme {
--background-primary: #291f18;
--background-secondary: #41352a;
--text-normal: #c2b8ac;
--text-accent: #a0662fdf;
--icon-color: #a0662f9c;
--icon-color-focused: #965e29e1;
--tab-text-color-focused-active-current: #965e29e1;
--interactive-normal: #291f18;
--background-modifier-border: var(--border-size) var(--border-style) #b9979747;
--code-background: #27231a;
--code-keyword: #FFAD60;
--code-normal: #FD8B51;
--code-operator: #F2E5BF;
--code-value: #e3b750;
--code-function: #dcbb59;
--code-property: #d29a8c;
--code-string: #79b1c7;
--hr-color: #b9979747;
--table-border-color: #b9979747;
--canvas-dot-pattern: #965e29e1;
}

body.vintage-theme .workspace-ribbon .sidebar-toggle-button .clickable-icon {
color: #F2E5BF;
}

body.vintage-theme .clickable-icon:nth-child(4n + 1) {
color: #FFAD60;
}

body.vintage-theme .clickable-icon:nth-child(4n + 2) {
color: #FD8B51;
}

body.vintage-theme .clickable-icon:nth-child(4n + 3) {
color: #FFAD60;
}

body.vintage-theme .clickable-icon:nth-child(4n + 4) {
color: #79b1c7;
}

body.vintage-theme .canvas-control-item:nth-child(4n + 1) {
color: #F2E5BF;
}

body.vintage-theme .canvas-control-item:nth-child(4n + 2) {
color: #FFAD60;
}

body.vintage-theme .canvas-control-item:nth-child(4n + 3) {
color: #FD8B51;
}

body.vintage-theme .canvas-control-item:nth-child(4n + 4) {
color: #79b1c7;
}

body.vintage-theme .canvas-card-menu .canvas-card-menu-button:nth-child(1) {
color: #F2E5BF;
}

body.vintage-theme .canvas-card-menu .canvas-card-menu-button:nth-child(2) {
color: #FD8B51;
}

body.vintage-theme .canvas-card-menu .canvas-card-menu-button:nth-child(3) {
color: #FFAD60;
}

body.vintage-theme .nav-file-tag {
background-color: #5f514463;
color: #7e7e7e86;
}
body.vintage-theme {
--background-primary: #ece5df;
--background-secondary: #f7f0e9;
--text-normal: #333;
--icon-color: #d98639d3;
--icon-color-focused: #7a4a1db7;
--tab-text-color-focused-active-current: #7a4a1db7;
--background-modifier-border: var(--border-size) var(--border-style) #2c242447;
--code-background: #544d3e;
--code-keyword: #FFAD60;
--code-normal: #FD8B51;
--code-operator: #F2E5BF;
--code-value: #e3b750;
--code-function: #dcbb59;
--code-property: #d29a8c;
--code-string: #79b1c7;
--hr-color: #2c242447;
--table-border-color: #2c242447;
--canvas-dot-pattern: #796e6e47;
}

body.vintage-theme .workspace-ribbon .sidebar-toggle-button .clickable-icon {
color: #534e3d;
}

body.vintage-theme .clickable-icon:nth-child(4n + 1) {
color: #ec9b4e;
}

body.vintage-theme .clickable-icon:nth-child(4n + 2) {
color: #fc7a39;
}

body.vintage-theme .clickable-icon:nth-child(4n + 3) {
color: #ffa047;
}

body.vintage-theme .clickable-icon:nth-child(4n + 4) {
color: #529dbb;
}

body.vintage-theme .canvas-control-item:nth-child(4n + 1) {
color: #534e3d;
}

body.vintage-theme .canvas-control-item:nth-child(4n + 2) {
color: #fc7a39;
}

body.vintage-theme .canvas-control-item:nth-child(4n + 3) {
color: #ffa047;
}

body.vintage-theme .canvas-control-item:nth-child(4n + 4) {
color: #529dbb;
}

body.vintage-theme .nav-file-tag {
background-color: #ffa04763;
color: #7e7e7e86;
}

body.vintage-theme input[type=checkbox] {
border: var(--background-modifier-border);
}

body.vintage-theme input[type=checkbox]:checked {
background-color: #529dbb;
}`,
    "warm-amber-theme": `body.warm-amber-theme {
--background-primary: #1d2021;
--background-secondary: #282828;
--text-normal: #e1d1c4;
--icon-color-focused:#c44848;
--icon-color-active:#c44848;
--icon-color: #bc9777;
--text-accent: #c37539;
--interactive-normal: #2a2420;
--background-modifier-border: var(--border-size) var(--border-style) #554040;
--code-background: #1c1818;
--code-keyword: #de895b;
--code-normal: #a8aeb0;
--code-operator: #b89cdd;
--code-value: #e3b750;
--code-function: #dcbb59;
--code-property: #d29a8c;
--code-string: #05a36e;
--hr-color: #554a40;
--table-border-color: #796195;
--canvas-dot-pattern: #705757;
--table-border-color:#dac4e164;
--text-selection: rgba(189, 153, 98, 0.15);
--tab-text-color-focused-active:#86486d;
--checkbox-color: #c3755b;
--checkbox-color-hover: #d19e6e;
}
body.warm-amber-theme {
--background-primary: #faf4ed;
--background-secondary: #fffaf3;
--text-normal: #817993;
--icon-color-focused:#c44848;
--icon-color-active:#c45d48;
--icon-color: #be8561;
--text-accent: #c37539;
--interactive-normal: #2a2420;
--background-modifier-border: var(--border-size) var(--border-style) #d8c7a6;
--code-background: #f6efe8;
--code-keyword: #de895b;
--code-normal: #978b83;
--code-operator: #9261d1;
--code-value: #ddae3f;
--code-function: #dcbb59;
--code-property: #d88672;
--code-string: #4f8a77;
--hr-color: #554a40;
--table-border-color: #796195;
--canvas-dot-pattern: #705757;
--table-border-color:#dac4e164;
--text-selection: rgba(189, 147, 98, 0.15);
--tab-text-color-focused-active:#86486d;
--checkbox-color: #c3755b;
--checkbox-color-hover: #d19e6e;
}`,
    "rose-theme": `body.rose-theme {
--background-primary: #181825;
--background-secondary: #1e1e2e;
--text-normal: #dac4e1;
--icon-color-focused:#eb6f92;
--icon-color: #b28eb1;
--text-accent: #eb6f92;
--interactive-normal: #2a2420;
--background-modifier-border: var(--border-size) var(--border-style) #504055;
--code-background: #18131f;
--code-keyword: #de895b;
--code-normal: #a8aeb0;
--code-operator: #b89cdd;
--code-value: #e3b750;
--code-function: #dcbb59;
--code-property: #d29a8c;
--code-string: #05a36e;
--hr-color: #554a40;
--table-border-color: #796195;
--text-selection: rgba(174, 98, 189, 0.15);
--canvas-dot-pattern: #705757;
--table-border-color:#dac4e164;
--tab-text-color-focused-active:#86486d;
--checkbox-color: #a25bc3;
--checkbox-color-hover: #ab6ed1;
}
body.rose-theme {
--background-primary: #e6e9ef;
--background-secondary: #ffffff;
--text-normal: #71657c;
--icon-color: #b28eb1;
--icon-color-focused:#e363b0;
--icon-color-active:#c448bc;
--text-accent: #c521ad;
--interactive-normal: #2a2420;
--background-modifier-border: var(--border-size) var(--border-style) #d9c3df;
--code-background: #251e19;
--code-keyword: #de895b;
--code-normal: #a8aeb0;
--code-operator: #b89cdd;
--code-value: #e3b750;
--code-function: #dcbb59;
--code-property: #d29a8c;
--code-string: #05a36e;
--scrollbar-bg: #d9d3f7;
--scrollbar-thumb-bg: #cfa9da4e;
--hr-color: #524055a7;
--table-border-color: #554a40;
--canvas-dot-pattern: #705757;
--checkbox-color: #a25bc3;
--checkbox-color-hover: #ab6ed1;
}`,
    "titlebar-minimal-style": `body.mod-windows .titlebar-button {
border-radius: 50%;
border: var(--background-modifier-border);
padding: 7px;
height: 5px;
width: 5px;
cursor: pointer;
transition: all 0.3s ease;
}

body.mod-windows .titlebar-button:hover {
padding: 8px;
}

body.is-hidden-frameless:not(.is-fullscreen) .titlebar-button-container.mod-right {
background-color: var(--background-primary);
gap: 10px;
margin: 12px;
padding: 10px;
transition: all 0.3s ease;
}

body.titlebar-minimal-style .titlebar .mod-close, body.titlebar-minimal-style .titlebar .mod-maximize, body.titlebar-minimal-style .titlebar .mod-minimize {
background-color: var(--background-secondary);
}

body.titlebar-minimal-style .titlebar .mod-close:hover {
background-color: #cc2323bd;
}

body.titlebar-minimal-style .titlebar .mod-maximize:hover {
background-color: #23cc2cbd;
}

body.titlebar-minimal-style .titlebar .mod-minimize:hover {
background-color: #bbcc23bd;
}`,
    "titlebar-retro-style": `body.mod-windows .titlebar-button {
border-radius: 50%;
border: var(--background-modifier-border);
padding: 7px;
height: 5px;
width: 5px;
cursor: pointer;
transition: all 0.3s ease;
}

body.mod-windows .titlebar-button:hover {
padding: 8px;
}

body.is-hidden-frameless:not(.is-fullscreen) .titlebar-button-container.mod-right {
background-color: var(--background-primary);
gap: 10px;
margin: 12px;
padding: 10px;
transition: all 0.3s ease;
}

body.titlebar-retro-style .titlebar .mod-close:hover {
background-color: #d45730;
}

body.titlebar-retro-style .titlebar .mod-maximize:hover {
background-color: #3bd8a4;
}

body.titlebar-retro-style .titlebar .mod-minimize:hover {
background-color: #dbae31;
}
body.titlebar-retro-style .titlebar .mod-close {
background-color: #a33705;
}

body.titlebar-retro-style .titlebar .mod-maximize {
background-color: #05a36e;
}

body.titlebar-retro-style .titlebar .mod-minimize {
background-color: #a37905;
}
body.titlebar-retro-style .titlebar .mod-close {
background-color: #db5314;
}

body.titlebar-retro-style .titlebar .mod-maximize {
background-color: #0dc285;
}

body.titlebar-retro-style .titlebar .mod-minimize {
background-color: #d6a110;
}`,
    "titlebar-vintage-style": `body.mod-windows .titlebar-button {
border-radius: 50%;
border: var(--background-modifier-border);
padding: 7px;
height: 5px;
width: 5px;
cursor: pointer;
transition: all 0.3s ease;
}

body.mod-windows .titlebar-button:hover {
padding: 8px;
}

body.is-hidden-frameless:not(.is-fullscreen) .titlebar-button-container.mod-right {
background-color: var(--background-primary);
gap: 10px;
margin: 12px;
padding: 10px;
transition: all 0.3s ease;
}

body.titlebar-vintage-style .titlebar .mod-close:hover {
background-color: #ffc997;
}

body.titlebar-vintage-style .titlebar .mod-maximize:hover {
background-color: #fff6d4;
}

body.titlebar-vintage-style .titlebar .mod-minimize:hover {
background-color: #c6ffe4;
}
body.titlebar-vintage-style .titlebar .mod-close {
background-color: #db9452;
}

body.titlebar-vintage-style .titlebar .mod-maximize {
background-color: #e9d78f;
}

body.titlebar-vintage-style .titlebar .mod-minimize {
background-color: #72b998;
}
body.titlebar-vintage-style .titlebar .mod-close {
background-color: #FFAD60;
}

body.titlebar-vintage-style .titlebar .mod-maximize {
background-color: #FFEEAD;
}

body.titlebar-vintage-style .titlebar .mod-minimize {
background-color: #96CEB4;
}`,
    "hide-folder-icons": `body.hide-folder-icons .nav-folder .nav-folder-title .nav-folder-title-content::before, body.hide-folder-icons .nav-folder.is-collapsed .nav-folder-title .nav-folder-title-content::before {
display: none;
}`,
    "hide-file-icons": `body.hide-file-icons .nav-file .nav-file-title .nav-file-title-content::before {
display: none;
}`,
    "heading-style-none": `body.heading-style-none .markdown-preview-view h1, body.heading-style-none .markdown-preview-view h2, body.heading-style-none .markdown-preview-view h3, body.heading-style-none .markdown-preview-view h4, body.heading-style-none .markdown-preview-view h5, body.heading-style-none .markdown-preview-view h6, body.heading-style-none .cm-header {
color: inherit;
font-family: inherit;
}`,
    "heading-style-basic": `body.heading-style-basic .markdown-preview-view h1, body.heading-style-basic .markdown-preview-view h2, body.heading-style-basic .markdown-preview-view h3, body.heading-style-basic .markdown-preview-view h4, body.heading-style-basic .markdown-preview-view h5, body.heading-style-basic .markdown-preview-view h6, body.heading-style-basic .cm-header-1, body.heading-style-basic .cm-header-2, body.heading-style-basic .cm-header-3, body.heading-style-basic .cm-header-4, body.heading-style-basic .cm-header-5, body.heading-style-basic .cm-header-6 {
color: var(--heading-color) !important;
font-family: var(--custom-heading-font) !important;
}`,
    "heading-style-advanced": `body.heading-style-advanced .markdown-preview-view h1, body.heading-style-advanced .cm-header-1 {
color: var(--h1-color) !important;
font-family: var(--custom-h1-font) !important;
}

body.heading-style-advanced .markdown-preview-view h2, body.heading-style-advanced .cm-header-2 {
color: var(--h2-color) !important;
font-family: var(--custom-h2-font) !important;
}

body.heading-style-advanced .markdown-preview-view h3, body.heading-style-advanced .cm-header-3 {
color: var(--h3-color) !important;
font-family: var(--custom-h3-font) !important;
}

body.heading-style-advanced .markdown-preview-view h4, body.heading-style-advanced .cm-header-4 {
color: var(--h4-color) !important;
font-family: var(--custom-h4-font) !important;
}

body.heading-style-advanced .markdown-preview-view h5, body.heading-style-advanced .cm-header-5 {
color: var(--h5-color) !important;
font-family: var(--custom-h5-font) !important;
}

body.heading-style-advanced .markdown-preview-view h6, body.heading-style-advanced .cm-header-6 {
color: var(--h6-color) !important;
font-family: var(--custom-h6-font) !important;
}`,
    "disable-border": `body.disable-border * {
border: none !important;
}`,
    "enable-modal-blur": `body.enable-modal-blur .modal-bg {
backdrop-filter: blur(var(--modal-blur-amount)) !important;
}

body.enable-modal-blur .modal-bg {
backdrop-filter: blur(var(--modal-blur-amount));
}`,
    "enable-modal-animation": `body.enable-modal-animation .modal {
animation: var(--modal-animation);
}

body.enable-modal-animation .prompt {
animation: var(--modal-animation);
}`,
    "ribbon-default-style": `body.ribbon-default-style .workspace-ribbon {
max-height: 550px;
background-color: var(--background-secondary);
border-top-right-radius: var(--border-radius);
border-bottom-right-radius: var(--border-radius);
margin-bottom: 35px;
}

body.ribbon-default-style .workspace-ribbon.mod-left.is-collapsed, body.ribbon-default-style .workspace-ribbon.mod-left {
background-color: var(--background-secondary);
margin-top: 11%;
border-right: var(--background-modifier-border);
border-bottom: var(--background-modifier-border);
border-top: var(--background-modifier-border);
}

body.ribbon-default-style .workspace-ribbon .sidebar-toggle-button {
margin-top: 6%;
height: 50px;
background: var(--background-secondary);
border-right: var(--background-modifier-border);
border-bottom: var(--background-modifier-border);
border-top: var(--background-modifier-border);
border-top-right-radius: var(--border-radius);
border-bottom-right-radius: var(--border-radius);
margin-bottom: 50px;
}`,
    "ribbon-box-style": `body.ribbon-box-style .workspace-ribbon {
background-color: transparent;
max-height: none;
margin-bottom: 0;
border-radius: 0;
height: 430px;
}

body.ribbon-box-style .workspace-ribbon.mod-left.is-collapsed, body.ribbon-box-style .workspace-ribbon.mod-left {
background-color: transparent;
margin-top: 11%;
border: none;
}

body.ribbon-box-style .workspace-ribbon .clickable-icon {
background-color: var(--background-secondary);
border-radius: var(--border-radius);
border: var(--background-modifier-border);
padding: 10px;
}

body.ribbon-box-style .workspace-ribbon .sidebar-toggle-button {
height: 58px;
margin-top: 7%;
background: transparent;
border: none;
margin-bottom: 0;
}

body.ribbon-box-style .side-dock-settings, body.ribbon-box-style .side-dock-actions {
margin-top: 25px;
gap: 15px;
}`,
    "ribbon-edge-style": `body.ribbon-edge-style .workspace-ribbon {
position: relative;
margin: 10px;
max-height: 600px;
background-color: var(--background-secondary);
border: var(--background-modifier-border);
border-radius: var(--border-radius);
}

body.ribbon-edge-style .workspace-ribbon.mod-left.is-collapsed, body.ribbon-edge-style .workspace-ribbon.mod-left {
background-color: var(--background-secondary);
margin-top: 8%;
border: var(--background-modifier-border);
}

body.ribbon-edge-style .workspace-ribbon .sidebar-toggle-button {
height: 50px;
background: var(--background-secondary);
border-bottom: var(--background-modifier-border);
margin-bottom: 50px;
margin-top: 0;
border-top: none;
border-right: none;
border-radius: 0;
}

body.ribbon-edge-style .side-dock-settings, body.ribbon-edge-style .side-dock-actions {
margin-top: 95px;
gap: 15px;
}`,
  },
};
