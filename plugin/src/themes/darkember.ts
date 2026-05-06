import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "darkember",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "DarkEmber-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-1: #f07128;
  --accent-2: #eb9239;
  --accent-3: #f1b125;
  --accent-4: #a0e73c;
  --accent-5: #62deac;
  --accent-6: #62b7de;
  --attachments: rgb(105, 188, 235);
  --background-modifier-error: var(--color-red, #cf2d2d);
  --background-modifier-error-hover: var(--color-red, #a72020);
  --background-primary: var(--main-background, rgb(36, 36, 36));
  --background-secondary: var(--secondary-background, rgb(27, 27, 27));
  --base-font-face: system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial,
    "Hiragino Kaku Gothic ProN", "Hiragino Sans", "メイリオ", Meiryo, sans-serif;
  --bases-cards-background: var(--background-primary, rgb(36, 36, 36));
  --bases-table-cell-background-active: var(--background-primary, rgb(36, 36, 36));
  --bases-table-header-background: var(--background-primary, rgb(36, 36, 36));
  --bases-table-summary-background: var(--background-primary, rgb(36, 36, 36));
  --blockquote-border-color: var(--interactive-accent, #ffbe00);
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, rgb(36, 36, 36));
  --caret-color: var(--text-normal, rgb(201, 201, 201));
  --checkbox-color: var(--interactive-accent, #ffbe00);
  --checkbox-color-hover: var(--interactive-accent-hover, #fe6a26);
  --checkbox-marker-color: var(--background-primary, rgb(36, 36, 36));
  --code-block-bg: #303030;
  --code-block-fg: #928b78;
  --code-font-face: Consolas, "Courier New", Courier, monospace;
  --code-normal: var(--text-normal, rgb(201, 201, 201));
  --collapse-icon-color-collapsed: var(--text-accent, #ffbe00);
  --dark: var(--text-normal, var(--color-base-100, rgb(201, 201, 201)));
  --darkgray: var(--text-normal, var(--color-base-100, rgb(201, 201, 201)));
  --divider-color-hover: var(--interactive-accent, #ffbe00);
  --external-link: #82d2e8;
  --external-link-hidden: rgba(131, 197, 235, 0.3);
  --file-header-background: var(--background-primary, rgb(36, 36, 36));
  --file-header-background-focused: var(--background-primary, rgb(36, 36, 36));
  --file-line-width: var(--max-width-text, 950px);
  --flair-color: var(--text-normal, rgb(201, 201, 201));
  --font-size-2xl: 1.5em;
  --font-size-3xl: 1.875em;
  --font-size-base: 1em;
  --font-size-h1: 1.3em;
  --font-size-h2: 1.2em;
  --font-size-h3: 1.1em;
  --font-size-h4: 1em;
  --font-size-h5: 1em;
  --font-size-h6: 1em;
  --font-size-lg: 1.125em;
  --font-size-sm: 0.875em;
  --font-size-xl: 1.25em;
  --font-size-xs: 0.78em;
  --graph-node-focused: var(--text-accent, #ffbe00);
  --graph-text: var(--text-normal, rgb(201, 201, 201));
  --gray: var(--text-normal, var(--color-base-100, rgb(201, 201, 201)));
  --gutter-width: 50px;
  --h1-gradient: #d72, #810, #e52, #c12;
  --h2-gradient: #f82, #922, #222;
  --h2-icon-color: #da6212;
  --h3-h6-icon-color: #ff6a6a;
  --icon-color-active: var(--text-accent, #ffbe00);
  --icon-color-focused: var(--text-normal, rgb(201, 201, 201));
  --interactive-accent: var(--main-node, #ffbe00);
  --interactive-accent-hover: var(--main-node-hover, #fe6a26);
  --light: var(--background-primary, var(--main-background, rgb(36, 36, 36)));
  --lightgray: var(--background-secondary, var(--secondary-background, rgb(27, 27, 27)));
  --link-color: var(--text-accent, #ffbe00);
  --link-color-hover: var(--text-accent-hover, #fe6a26);
  --link-external-color: var(--text-accent, #ffbe00);
  --link-external-color-hover: var(--text-accent-hover, #fe6a26);
  --link-unresolved-color: var(--text-accent, #ffbe00);
  --list-marker: 1.5rem;
  --list-marker-color-collapsed: var(--text-accent, #ffbe00);
  --list-marker-num: 1.5;
  --list-padding: 1.5em;
  --list-padding-num: 2.5;
  --main-background: rgb(36, 36, 36);
  --main-node: #ffbe00;
  --main-node-hover: #fe6a26;
  --max-width-text: 950px;
  --menu-background: var(--background-secondary, rgb(27, 27, 27));
  --metadata-input-text-color: var(--text-normal, rgb(201, 201, 201));
  --modal-background: var(--background-primary, rgb(36, 36, 36));
  --monochrome-color: hsl(13, 100%, 50%);
  --nav-heading-color: var(--text-normal, rgb(201, 201, 201));
  --nav-heading-color-hover: var(--text-normal, rgb(201, 201, 201));
  --nav-item-color-active: var(--text-normal, rgb(201, 201, 201));
  --nav-item-color-highlighted: var(--text-accent, #ffbe00);
  --nav-item-color-hover: var(--text-normal, rgb(201, 201, 201));
  --nav-item-color-selected: var(--text-normal, rgb(201, 201, 201));
  --pdf-background: var(--background-primary, rgb(36, 36, 36));
  --pdf-page-background: var(--background-primary, rgb(36, 36, 36));
  --pdf-sidebar-background: var(--background-primary, rgb(36, 36, 36));
  --pill-color-hover: var(--text-normal, rgb(201, 201, 201));
  --pill-color-remove-hover: var(--text-accent, #ffbe00);
  --prev-margin: 150px;
  --prompt-background: var(--background-primary, rgb(36, 36, 36));
  --ribbon-background: var(--background-secondary, rgb(27, 27, 27));
  --ribbon-background-collapsed: var(--background-primary, rgb(36, 36, 36));
  --search-result-background: var(--background-primary, rgb(36, 36, 36));
  --secondary: var(--text-accent, var(--main-node, #ffbe00));
  --secondary-background: rgb(27, 27, 27);
  --secondary-background-low-opacity: rgba(27, 27, 27, 0.329);
  --setting-group-heading-color: var(--text-normal, rgb(201, 201, 201));
  --size-0-5: 0.125em;
  --size-1: 0.25em;
  --size-1-5: 0.375em;
  --size-12: 3em;
  --size-128: 32em;
  --size-16: 4em;
  --size-2: 0.5em;
  --size-2-5: 0.625em;
  --size-24: 6em;
  --size-3: 0.75em;
  --size-3-5: 0.875em;
  --size-32: 8em;
  --size-4: 1em;
  --size-48: 12em;
  --size-5: 1.25em;
  --size-6: 1.5em;
  --size-64: 16em;
  --size-7: 1.75em;
  --size-8: 2em;
  --size-96: 24em;
  --status-bar-background: var(--background-secondary, rgb(27, 27, 27));
  --suggestion-background: var(--background-primary, rgb(36, 36, 36));
  --tab-background-active: var(--background-primary, rgb(36, 36, 36));
  --tab-container-background: var(--background-secondary, rgb(27, 27, 27));
  --tab-switcher-background: var(--background-secondary, rgb(27, 27, 27));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(201, 201, 201));
  --tab-text-color-focused-highlighted: var(--text-accent, #ffbe00);
  --table-drag-handle-background-active: var(--table-selection-border-color, #ffbe00);
  --table-drag-handle-color-active: var(--text-on-accent, black);
  --table-header-color: var(--text-normal, rgb(201, 201, 201));
  --table-selection-border-color: var(--interactive-accent, #ffbe00);
  --tag-color: var(--text-accent, #ffbe00);
  --tag-color-hover: var(--text-accent, #ffbe00);
  --tags: #f1ee26;
  --tertiary: var(--text-accent-hover, var(--main-node-hover, #fe6a26));
  --text-accent: var(--main-node, #ffbe00);
  --text-accent-hover: var(--main-node-hover, #fe6a26);
  --text-normal: var(--color-base-100, rgb(201, 201, 201));
  --text-on-accent: black;
  --titlebar-background: var(--background-secondary, rgb(27, 27, 27));
  --titlebar-text-color-focused: var(--text-normal, rgb(201, 201, 201));
  --vault-profile-color: var(--text-normal, rgb(201, 201, 201));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(201, 201, 201));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgb(27, 27, 27));
  background-color: var(--tab-container-background, rgb(27, 27, 27));
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(36, 36, 36));
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(27, 27, 27));
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgb(27, 27, 27));
  background-color: var(--tab-container-background, rgb(27, 27, 27));
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body html {
  --base-font-face: system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial,
    "Hiragino Kaku Gothic ProN", "Hiragino Sans", "メイリオ", Meiryo, sans-serif;
  --code-font-face: Consolas, "Courier New", Courier, monospace;
  --font-size-2xl: 1.5em;
  --font-size-3xl: 1.875em;
  --font-size-base: 1em;
  --font-size-h1: 1.3em;
  --font-size-h2: 1.2em;
  --font-size-h3: 1.1em;
  --font-size-h4: 1em;
  --font-size-h5: 1em;
  --font-size-h6: 1em;
  --font-size-lg: 1.125em;
  --font-size-sm: 0.875em;
  --font-size-xl: 1.25em;
  --font-size-xs: 0.78em;
  --gutter-width: 50px;
  --list-marker: 1.5rem;
  --list-marker-num: 1.5;
  --list-padding: var(--size-6, 1.5em);
  --list-padding-num: 2.5;
  --max-width-text: 950px;
  --monochrome-color: hsl(13, 100%, 50%);
  --prev-margin: 150px;
  --size-0-5: 0.125em;
  --size-1: 0.25em;
  --size-1-5: 0.375em;
  --size-12: 3em;
  --size-128: 32em;
  --size-16: 4em;
  --size-2: 0.5em;
  --size-2-5: 0.625em;
  --size-24: 6em;
  --size-3: 0.75em;
  --size-3-5: 0.875em;
  --size-32: 8em;
  --size-4: 1em;
  --size-48: 12em;
  --size-5: 1.25em;
  --size-6: 1.5em;
  --size-64: 16em;
  --size-7: 1.75em;
  --size-8: 2em;
  --size-96: 24em;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--accent-3, rgb(241, 177, 37));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(241, 177, 37) none 0px;
  text-decoration-color: rgb(241, 177, 37);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--accent-3, rgb(241, 177, 37));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(241, 177, 37) none 0px;
  text-decoration-color: rgb(241, 177, 37);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--accent-3, rgb(241, 177, 37));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(241, 177, 37) none 0px;
  text-decoration-color: rgb(241, 177, 37);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--accent-3, rgb(241, 177, 37));
  font-family: var(--text-normal, var(--base-font-face));
  font-weight: 900;
  outline: rgb(241, 177, 37) none 0px;
  text-decoration-color: rgb(241, 177, 37);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--accent-3, rgb(241, 177, 37));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(241, 177, 37) none 0px;
  text-decoration-color: rgb(241, 177, 37);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(233, 179, 95));
  color: var(--background-primary, rgb(36, 36, 36));
  font-family: var(--text-normal, var(--base-font-face));
  font-weight: 600;
  outline: rgb(36, 36, 36) none 0px;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body del {
  color: rgb(201, 201, 201);
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(201, 201, 201) none 0px;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(255, 190, 0));
  border-color: rgb(255, 190, 0);
}

html[saved-theme="dark"] body p {
  font-family: var(--text-normal, var(--base-font-face));
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--external-link, rgb(130, 210, 232));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(130, 210, 232) none 0px;
  text-decoration-color: rgb(130, 210, 232);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(255, 190, 0));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(255, 190, 0) none 0px;
  text-decoration-color: rgb(255, 190, 0);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(255, 190, 0));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(255, 190, 0) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
  color: rgb(201, 201, 201);
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
  color: rgb(201, 201, 201);
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body ol > li {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--main-node, rgb(255, 190, 0));
}

html[saved-theme="dark"] body blockquote {
  color: var(--blockquote-color, rgb(201, 201, 201));
  font-family: var(--text-normal, var(--base-font-face));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  color: rgb(201, 201, 201);
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: var(--background-secondary, rgb(27, 27, 27));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.1);
  border-right-width: 0px;
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(201, 201, 201));
}

html[saved-theme="dark"] body th {
  color: var(--table-header-color, rgb(201, 201, 201));
}

html[saved-theme="dark"] body tr {
  background-color: color-mix(
    in srgb,
    var(--interactive-accent) 20%,
    var(--secondary-background)
  );
}`,
    code: `html[saved-theme="dark"] body code {
  color: var(--code-normal, rgb(201, 201, 201));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-block-bg, rgb(48, 48, 48));
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(201, 201, 201);
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(240, 113, 40);
  border-bottom-width: 0px;
  border-left-color: rgb(240, 113, 40);
  border-left-width: 0px;
  border-right-color: rgb(240, 113, 40);
  border-right-width: 0px;
  border-top-color: rgb(240, 113, 40);
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 8.75px;
  border-bottom-right-radius: 8.75px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 8.75px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 8.75px;
  border-top-right-radius: 8.75px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 1px;
  border-radius: 10px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(201, 201, 201);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex > .katex-html {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body .katex-display > .katex {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(201, 201, 201);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(36, 36, 36);
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
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(201, 201, 201);
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
  color: var(--text-normal, rgb(201, 201, 201));
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(36, 36, 36));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(201, 201, 201);
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(201, 201, 201) none 0px;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 27, 27);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #ffbe00);
  --pill-color-hover: var(--tag-color-hover, #ffbe00);
  --pill-color-remove: var(--tag-color, #ffbe00);
  --pill-color-remove-hover: var(--tag-color-hover, #ffbe00);
  color: var(--pill-color, rgb(255, 190, 0));
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(255, 190, 0);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(240, 113, 40);
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-color: rgb(240, 113, 40);
  border-left-width: 0px;
  border-right-color: rgb(240, 113, 40);
  border-right-width: 0px;
  border-top-color: rgb(240, 113, 40);
  border-top-width: 0px;
  color: var(--accent-1, rgb(240, 113, 40));
  font-size: var(--font-size-h1, 20.8px);
  font-weight: var(--font-weight, 1000);
  letter-spacing: var(--h1-letter-spacing, -0.312px);
  line-height: var(--h1-line-height, 24.96px);
  margin-bottom: 20.8px;
  margin-left: -8px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(201, 201, 201));
}

html[saved-theme="dark"] body h2 {
  border-bottom-color: rgb(235, 146, 57);
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgb(235, 146, 57);
  border-left-width: 0px;
  border-right-color: rgb(235, 146, 57);
  border-right-width: 0px;
  border-top-color: rgb(235, 146, 57);
  border-top-width: 0px;
  color: var(--accent-2, rgb(235, 146, 57));
  font-size: var(--font-size-h2, 19.2px);
  font-weight: var(--font-weight, 1000);
  letter-spacing: var(--h2-letter-spacing, -0.2112px);
  line-height: var(--h2-line-height, 23.04px);
  margin-bottom: 9.6px;
  margin-left: -8px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(201, 201, 201));
}

html[saved-theme="dark"] body h2::before {
  --font-weight: var(--h2-weight, 680);
  background: rgb(218, 98, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 98, 18);
  border-bottom-color: rgb(235, 146, 57);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 146, 57);
  border-left-width: 0px;
  border-right-color: rgb(235, 146, 57);
  border-right-width: 0px;
  border-top-color: rgb(235, 146, 57);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--accent-2, rgb(235, 146, 57));
  content: "";
  display: inline-block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 9px;
  margin-top: var(--heading-spacing, 0px);
  width: 15.3594px;
}

html[saved-theme="dark"] body h3 {
  border-bottom-color: rgb(241, 177, 37);
  border-bottom-width: 0px;
  border-left-color: rgb(241, 177, 37);
  border-left-width: 0px;
  border-right-color: rgb(241, 177, 37);
  border-right-width: 0px;
  border-top-color: rgb(241, 177, 37);
  border-top-width: 0px;
  color: var(--accent-3, rgb(241, 177, 37));
  font-size: var(--font-size-h3, 17.6px);
  font-weight: var(--font-weight, 1000);
  letter-spacing: var(--h3-letter-spacing, -0.1408px);
  line-height: var(--h3-line-height, 22.88px);
  margin-bottom: 8.8px;
  margin-left: -8px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 17.6px);
}

html[saved-theme="dark"] body h3::before {
  --font-weight: var(--h3-weight, 660);
  background: rgb(255, 106, 106) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 106, 106);
  border-bottom-color: rgb(241, 177, 37);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(241, 177, 37);
  border-left-width: 0px;
  border-right-color: rgb(241, 177, 37);
  border-right-width: 0px;
  border-top-color: rgb(241, 177, 37);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--accent-3, rgb(241, 177, 37));
  content: "";
  display: inline-block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: -4px;
  margin-top: var(--heading-spacing, 0px);
  width: 17.5938px;
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: rgb(160, 231, 60);
  border-bottom-width: 0px;
  border-left-color: rgb(160, 231, 60);
  border-left-width: 0px;
  border-right-color: rgb(160, 231, 60);
  border-right-width: 0px;
  border-top-color: rgb(160, 231, 60);
  border-top-width: 0px;
  color: var(--accent-4, rgb(160, 231, 60));
  font-size: var(--font-size-h4, 16px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h4-letter-spacing, -0.08px);
  line-height: var(--h4-line-height, 22.4px);
  margin-bottom: 8px;
  margin-left: -8px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h4::before {
  --font-weight: var(--h4-weight, 640);
  background: rgb(255, 106, 106) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 106, 106);
  border-bottom-color: rgb(160, 231, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(160, 231, 60);
  border-left-width: 0px;
  border-right-color: rgb(160, 231, 60);
  border-right-width: 0px;
  border-top-color: rgb(160, 231, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--accent-4, rgb(160, 231, 60));
  content: "";
  display: inline-block;
  margin-bottom: 0px;
  margin-left: 6px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  width: 11.1875px;
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: rgb(98, 222, 172);
  border-bottom-width: 0px;
  border-left-color: rgb(98, 222, 172);
  border-left-width: 0px;
  border-right-color: rgb(98, 222, 172);
  border-right-width: 0px;
  border-top-color: rgb(98, 222, 172);
  border-top-width: 0px;
  color: var(--accent-5, rgb(98, 222, 172));
  font-size: var(--font-size-h5, 16px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h5-letter-spacing, -0.032px);
  line-height: var(--h5-line-height, 32px);
  margin-bottom: 6.4px;
  margin-left: -8px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 8px);
}

html[saved-theme="dark"] body h5::before {
  --font-weight: var(--h5-weight, 620);
  background: rgb(255, 106, 106) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 106, 106);
  border-bottom-color: rgb(98, 222, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(98, 222, 172);
  border-left-width: 0px;
  border-right-color: rgb(98, 222, 172);
  border-right-width: 0px;
  border-top-color: rgb(98, 222, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--accent-5, rgb(98, 222, 172));
  content: "";
  display: inline-block;
  margin-bottom: 0px;
  margin-left: 12px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  width: 8px;
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(98, 183, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(98, 183, 222);
  border-left-width: 0px;
  border-right-color: rgb(98, 183, 222);
  border-right-width: 0px;
  border-top-color: rgb(98, 183, 222);
  border-top-width: 0px;
  color: var(--accent-6, rgb(98, 183, 222));
  font-size: var(--font-size-h6, 16px);
  font-weight: var(--font-weight, 500);
  margin-bottom: 4.8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 6.4px;
}

html[saved-theme="dark"] body h6::before {
  --font-weight: var(--h6-weight, 600);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 106, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 106, 106);
  border-left-width: 0px;
  border-right-color: rgb(255, 106, 106);
  border-right-width: 0px;
  border-top-color: rgb(255, 106, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--accent-6, rgb(255, 106, 106));
  content: "-";
  display: inline;
  margin-bottom: 0px;
  margin-left: 12px;
  margin-right: 6px;
  margin-top: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(201, 201, 201);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(27, 27, 27));
  font-family: var(--text-normal, var(--base-font-face));
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(201, 201, 201);
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: var(--text-normal, var(--base-font-face));
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: var(--text-normal, var(--base-font-face));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(201, 201, 201));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(27, 27, 27));
  border-color: rgb(201, 201, 201);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  color: var(--table-header-color, rgb(201, 201, 201));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-color: var(--tag-color, #ffbe00);
  --pill-color-hover: var(--tag-color-hover, #ffbe00);
  --pill-color-remove: var(--tag-color, #ffbe00);
  --pill-color-remove-hover: var(--tag-color-hover, #ffbe00);
  color: var(--pill-color, rgb(255, 190, 0));
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(36, 36, 36));
  color: var(--text-normal, rgb(201, 201, 201));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(27, 27, 27));
  border-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(27, 27, 27));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(201, 201, 201);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(27, 27, 27));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
  color: var(--text-normal, rgb(201, 201, 201));
  font-family: var(--text-normal, var(--base-font-face));
  font-size: var(--font-size-h4, 13px);
  line-height: 27.2px;
}

html[saved-theme="dark"] body abbr {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(0, 0, 0) 0px 1px 1px 0px;
  color: var(--code-normal, rgb(201, 201, 201));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-width: 0px;
  border-left-color: rgb(201, 201, 201);
  border-left-width: 0px;
  border-right-color: rgb(201, 201, 201);
  border-right-width: 0px;
  border-top-color: rgb(201, 201, 201);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body summary {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body sup {
  color: rgb(201, 201, 201);
  font-size: 11.2px;
}

html[saved-theme="dark"] body ul.tags > li {
  color: var(--tag-color, rgb(255, 190, 0));
}`,
  },
  light: {
    base: `:root:root {
  --accent-1: #f05006;
  --accent-2: #cf1f08;
  --accent-3: #d64545;
  --accent-4: #08500d;
  --accent-5: #2012a0;
  --accent-6: #1944aa;
  --background-modifier-error: var(--color-red, #cf2d2d);
  --background-modifier-error-hover: var(--color-red, #a72020);
  --background-primary: var(--main-background, #eaeaea);
  --background-secondary: var(--secondary-background, #d9d9d9);
  --base-font-face: system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial,
    "Hiragino Kaku Gothic ProN", "Hiragino Sans", "メイリオ", Meiryo, sans-serif;
  --bases-cards-background: var(--background-primary, #eaeaea);
  --bases-table-cell-background-active: var(--background-primary, #eaeaea);
  --bases-table-header-background: var(--background-primary, #eaeaea);
  --bases-table-summary-background: var(--background-primary, #eaeaea);
  --blockquote-border-color: var(--interactive-accent, #e06d0f);
  --callout-bug: var(--callout-bug, 233, 49, 71);
  --callout-default: var(--callout-default, 8, 109, 221);
  --callout-error: var(--callout-error, 233, 49, 71);
  --callout-example: var(--callout-example, 120, 82, 238);
  --callout-fail: var(--callout-fail, 233, 49, 71);
  --callout-info: var(--callout-info, 8, 109, 221);
  --callout-question: var(--callout-question, 236, 117, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 8, 185, 78);
  --callout-summary: var(--callout-summary, 0, 191, 188);
  --callout-tip: var(--callout-tip, 0, 191, 188);
  --callout-todo: var(--callout-todo, 8, 109, 221);
  --callout-warning: var(--callout-warning, 236, 117, 0);
  --canvas-background: var(--background-primary, #eaeaea);
  --caret-color: var(--text-normal, rgb(36, 36, 36));
  --checkbox-color: var(--interactive-accent, #e06d0f);
  --checkbox-marker-color: var(--background-primary, #eaeaea);
  --code-block-bg: #e4e3e0;
  --code-block-fg: #161616;
  --code-font-face: Consolas, "Courier New", Courier, monospace;
  --code-normal: var(--text-normal, rgb(36, 36, 36));
  --collapse-icon-color-collapsed: var(--text-accent, #e06d0f);
  --dark: var(--text-normal, var(--color-base-100, rgb(36, 36, 36)));
  --darkgray: var(--text-normal, var(--color-base-100, rgb(36, 36, 36)));
  --divider-color-hover: var(--interactive-accent, #e06d0f);
  --external-link: #307a8e;
  --external-link-hidden: #307a8e99;
  --file-header-background: var(--background-primary, #eaeaea);
  --file-header-background-focused: var(--background-primary, #eaeaea);
  --file-line-width: var(--max-width-text, 950px);
  --flair-color: var(--text-normal, rgb(36, 36, 36));
  --font-size-2xl: 1.5em;
  --font-size-3xl: 1.875em;
  --font-size-base: 1em;
  --font-size-h1: 1.3em;
  --font-size-h2: 1.2em;
  --font-size-h3: 1.1em;
  --font-size-h4: 1em;
  --font-size-h5: 1em;
  --font-size-h6: 1em;
  --font-size-lg: 1.125em;
  --font-size-sm: 0.875em;
  --font-size-xl: 1.25em;
  --font-size-xs: 0.78em;
  --graph-node-focused: var(--text-accent, #e06d0f);
  --graph-text: var(--text-normal, rgb(36, 36, 36));
  --gray: var(--text-normal, var(--color-base-100, rgb(36, 36, 36)));
  --gutter-width: 50px;
  --h1-gradient: #e06d0f, #f05006, #cf1f08, #d64545;
  --h2-gradient: #f05006, #e06d0f, #eee;
  --h2-icon-color: #e06d0f;
  --h3-h6-icon-color: #f05006;
  --icon-color-active: var(--text-accent, #e06d0f);
  --icon-color-focused: var(--text-normal, rgb(36, 36, 36));
  --interactive-accent: var(--main-node, #e06d0f);
  --light: var(--background-primary, var(--main-background, #eaeaea));
  --lightgray: var(--background-secondary, var(--secondary-background, #d9d9d9));
  --link-color: var(--text-accent, #e06d0f);
  --link-external-color: var(--text-accent, #e06d0f);
  --link-unresolved-color: var(--text-accent, #e06d0f);
  --list-marker: 1.5rem;
  --list-marker-color-collapsed: var(--text-accent, #e06d0f);
  --list-marker-num: 1.5;
  --list-padding: 1.5em;
  --list-padding-num: 2.5;
  --main-background: #eaeaea;
  --main-node: #e06d0f;
  --max-width-text: 950px;
  --menu-background: var(--background-secondary, #d9d9d9);
  --metadata-input-text-color: var(--text-normal, rgb(36, 36, 36));
  --modal-background: var(--background-primary, #eaeaea);
  --monochrome-color: hsl(13, 100%, 50%);
  --nav-heading-color: var(--text-normal, rgb(36, 36, 36));
  --nav-heading-color-hover: var(--text-normal, rgb(36, 36, 36));
  --nav-item-color-active: var(--text-normal, rgb(36, 36, 36));
  --nav-item-color-highlighted: var(--text-accent, #e06d0f);
  --nav-item-color-hover: var(--text-normal, rgb(36, 36, 36));
  --nav-item-color-selected: var(--text-normal, rgb(36, 36, 36));
  --pdf-background: var(--background-primary, #eaeaea);
  --pdf-page-background: var(--background-primary, #eaeaea);
  --pdf-sidebar-background: var(--background-primary, #eaeaea);
  --pill-color-hover: var(--text-normal, rgb(36, 36, 36));
  --pill-color-remove-hover: var(--text-accent, #e06d0f);
  --prev-margin: 150px;
  --prompt-background: var(--background-primary, #eaeaea);
  --raised-background: var(--blur-background, color-mix(in srgb, #eaeaea 65%, transparent) linear-gradient(#eaeaea, color-mix(in srgb, #eaeaea 65%, transparent)));
  --ribbon-background: var(--background-secondary, #d9d9d9);
  --ribbon-background-collapsed: var(--background-primary, #eaeaea);
  --search-result-background: var(--background-primary, #eaeaea);
  --secondary: var(--text-accent, var(--main-node, #e06d0f));
  --secondary-background: #d9d9d9;
  --secondary-background-low-opacity: #e2e2e254;
  --setting-group-heading-color: var(--text-normal, rgb(36, 36, 36));
  --size-0-5: 0.125em;
  --size-1: 0.25em;
  --size-1-5: 0.375em;
  --size-12: 3em;
  --size-128: 32em;
  --size-16: 4em;
  --size-2: 0.5em;
  --size-2-5: 0.625em;
  --size-24: 6em;
  --size-3: 0.75em;
  --size-3-5: 0.875em;
  --size-32: 8em;
  --size-4: 1em;
  --size-48: 12em;
  --size-5: 1.25em;
  --size-6: 1.5em;
  --size-64: 16em;
  --size-7: 1.75em;
  --size-8: 2em;
  --size-96: 24em;
  --status-bar-background: var(--background-secondary, #d9d9d9);
  --suggestion-background: var(--background-primary, #eaeaea);
  --tab-background-active: var(--background-primary, #eaeaea);
  --tab-container-background: var(--background-secondary, #d9d9d9);
  --tab-switcher-background: var(--background-secondary, #d9d9d9);
  --tab-text-color-focused-active-current: var(--text-normal, rgb(36, 36, 36));
  --tab-text-color-focused-highlighted: var(--text-accent, #e06d0f);
  --table-drag-handle-background-active: var(--table-selection-border-color, #e06d0f);
  --table-header-color: var(--text-normal, rgb(36, 36, 36));
  --table-selection-border-color: var(--interactive-accent, #e06d0f);
  --tag-color: var(--text-accent, #e06d0f);
  --tag-color-hover: var(--text-accent, #e06d0f);
  --tertiary: var(--text-accent, var(--main-node, #e06d0f));
  --text-accent: var(--main-node, #e06d0f);
  --text-normal: var(--color-base-100, rgb(36, 36, 36));
  --titlebar-background: var(--background-secondary, #d9d9d9);
  --titlebar-text-color-focused: var(--text-normal, rgb(36, 36, 36));
  --vault-profile-color: var(--text-normal, rgb(36, 36, 36));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(36, 36, 36));
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #d9d9d9);
  background-color: var(--tab-container-background, rgb(217, 217, 217));
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(234, 234, 234));
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(217, 217, 217));
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #d9d9d9);
  background-color: var(--tab-container-background, rgb(217, 217, 217));
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body html {
  --base-font-face: system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial,
    "Hiragino Kaku Gothic ProN", "Hiragino Sans", "メイリオ", Meiryo, sans-serif;
  --code-font-face: Consolas, "Courier New", Courier, monospace;
  --font-size-2xl: 1.5em;
  --font-size-3xl: 1.875em;
  --font-size-base: 1em;
  --font-size-h1: 1.3em;
  --font-size-h2: 1.2em;
  --font-size-h3: 1.1em;
  --font-size-h4: 1em;
  --font-size-h5: 1em;
  --font-size-h6: 1em;
  --font-size-lg: 1.125em;
  --font-size-sm: 0.875em;
  --font-size-xl: 1.25em;
  --font-size-xs: 0.78em;
  --gutter-width: 50px;
  --list-marker: 1.5rem;
  --list-marker-num: 1.5;
  --list-padding: var(--size-6, 1.5em);
  --list-padding-num: 2.5;
  --max-width-text: 950px;
  --monochrome-color: hsl(13, 100%, 50%);
  --prev-margin: 150px;
  --size-0-5: 0.125em;
  --size-1: 0.25em;
  --size-1-5: 0.375em;
  --size-12: 3em;
  --size-128: 32em;
  --size-16: 4em;
  --size-2: 0.5em;
  --size-2-5: 0.625em;
  --size-24: 6em;
  --size-3: 0.75em;
  --size-3-5: 0.875em;
  --size-32: 8em;
  --size-4: 1em;
  --size-48: 12em;
  --size-5: 1.25em;
  --size-6: 1.5em;
  --size-64: 16em;
  --size-7: 1.75em;
  --size-8: 2em;
  --size-96: 24em;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--accent-3, rgb(214, 69, 69));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(214, 69, 69) none 0px;
  text-decoration-color: rgb(214, 69, 69);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--accent-3, rgb(214, 69, 69));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(214, 69, 69) none 0px;
  text-decoration-color: rgb(214, 69, 69);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--accent-3, rgb(214, 69, 69));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(214, 69, 69) none 0px;
  text-decoration-color: rgb(214, 69, 69);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--accent-3, rgb(214, 69, 69));
  font-family: var(--text-normal, var(--base-font-face));
  font-weight: 900;
  outline: rgb(214, 69, 69) none 0px;
  text-decoration-color: rgb(214, 69, 69);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--accent-3, rgb(214, 69, 69));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(214, 69, 69) none 0px;
  text-decoration-color: rgb(214, 69, 69);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(233, 179, 95));
  color: var(--background-primary, rgb(234, 234, 234));
  font-family: var(--text-normal, var(--base-font-face));
  font-weight: 600;
  outline: rgb(234, 234, 234) none 0px;
  text-decoration-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body del {
  color: rgb(36, 36, 36);
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(36, 36, 36) none 0px;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(224, 109, 15));
  border-color: rgb(224, 109, 15);
}

html[saved-theme="light"] body p {
  font-family: var(--text-normal, var(--base-font-face));
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--external-link, rgb(48, 122, 142));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(48, 122, 142) none 0px;
  text-decoration-color: rgb(48, 122, 142);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(224, 109, 15));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(224, 109, 15) none 0px;
  text-decoration-color: rgb(224, 109, 15);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(224, 109, 15));
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(224, 109, 15) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
  color: rgb(36, 36, 36);
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
  color: rgb(36, 36, 36);
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body ol > li {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ul > li {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--main-node, rgb(224, 109, 15));
}

html[saved-theme="light"] body blockquote {
  color: var(--blockquote-color, rgb(36, 36, 36));
  font-family: var(--text-normal, var(--base-font-face));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  color: rgb(36, 36, 36);
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: var(--background-secondary, rgb(217, 217, 217));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0.1);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(36, 36, 36));
}

html[saved-theme="light"] body th {
  color: var(--table-header-color, rgb(36, 36, 36));
}

html[saved-theme="light"] body tr {
  background-color: color-mix(
    in srgb,
    var(--interactive-accent) 20%,
    var(--secondary-background)
  );
}`,
    code: `html[saved-theme="light"] body code {
  color: var(--code-normal, rgb(36, 36, 36));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-block-bg, rgb(228, 227, 224));
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(36, 36, 36);
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(240, 80, 6);
  border-bottom-width: 0px;
  border-left-color: rgb(240, 80, 6);
  border-left-width: 0px;
  border-right-color: rgb(240, 80, 6);
  border-right-width: 0px;
  border-top-color: rgb(240, 80, 6);
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 8.75px;
  border-bottom-right-radius: 8.75px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 8.75px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 8.75px;
  border-top-right-radius: 8.75px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 1px;
  border-radius: 10px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(36, 36, 36);
}`,
    checkboxes: `html[saved-theme="light"] body .katex > .katex-html {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body .katex-display > .katex {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(36, 36, 36);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 234, 234);
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(36, 36, 36);
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
  color: var(--text-normal, rgb(36, 36, 36));
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(234, 234, 234));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(36, 36, 36);
  font-family: var(--text-normal, var(--base-font-face));
  outline: rgb(36, 36, 36) none 0px;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #e06d0f);
  --pill-color-hover: var(--tag-color-hover, #e06d0f);
  --pill-color-remove: var(--tag-color, #e06d0f);
  --pill-color-remove-hover: var(--tag-color-hover, #e06d0f);
  color: var(--pill-color, rgb(224, 109, 15));
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(224, 109, 15);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(240, 80, 6);
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-color: rgb(240, 80, 6);
  border-left-width: 0px;
  border-right-color: rgb(240, 80, 6);
  border-right-width: 0px;
  border-top-color: rgb(240, 80, 6);
  border-top-width: 0px;
  color: var(--accent-1, rgb(240, 80, 6));
  font-size: var(--font-size-h1, 20.8px);
  font-weight: var(--font-weight, 1000);
  letter-spacing: var(--h1-letter-spacing, -0.312px);
  line-height: var(--h1-line-height, 24.96px);
  margin-bottom: 20.8px;
  margin-left: -8px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(36, 36, 36));
}

html[saved-theme="light"] body h2 {
  border-bottom-color: rgb(207, 31, 8);
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgb(207, 31, 8);
  border-left-width: 0px;
  border-right-color: rgb(207, 31, 8);
  border-right-width: 0px;
  border-top-color: rgb(207, 31, 8);
  border-top-width: 0px;
  color: var(--accent-2, rgb(207, 31, 8));
  font-size: var(--font-size-h2, 19.2px);
  font-weight: var(--font-weight, 1000);
  letter-spacing: var(--h2-letter-spacing, -0.2112px);
  line-height: var(--h2-line-height, 23.04px);
  margin-bottom: 9.6px;
  margin-left: -8px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(36, 36, 36));
}

html[saved-theme="light"] body h2::before {
  --font-weight: var(--h2-weight, 680);
  background: rgb(224, 109, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 109, 15);
  border-bottom-color: rgb(207, 31, 8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(207, 31, 8);
  border-left-width: 0px;
  border-right-color: rgb(207, 31, 8);
  border-right-width: 0px;
  border-top-color: rgb(207, 31, 8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--accent-2, rgb(207, 31, 8));
  content: "";
  display: inline-block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 9px;
  margin-top: var(--heading-spacing, 0px);
  width: 15.3594px;
}

html[saved-theme="light"] body h3 {
  border-bottom-color: rgb(214, 69, 69);
  border-bottom-width: 0px;
  border-left-color: rgb(214, 69, 69);
  border-left-width: 0px;
  border-right-color: rgb(214, 69, 69);
  border-right-width: 0px;
  border-top-color: rgb(214, 69, 69);
  border-top-width: 0px;
  color: var(--accent-3, rgb(214, 69, 69));
  font-size: var(--font-size-h3, 17.6px);
  font-weight: var(--font-weight, 1000);
  letter-spacing: var(--h3-letter-spacing, -0.1408px);
  line-height: var(--h3-line-height, 22.88px);
  margin-bottom: 8.8px;
  margin-left: -8px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 17.6px);
}

html[saved-theme="light"] body h3::before {
  --font-weight: var(--h3-weight, 660);
  background: rgb(240, 80, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 80, 6);
  border-bottom-color: rgb(214, 69, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(214, 69, 69);
  border-left-width: 0px;
  border-right-color: rgb(214, 69, 69);
  border-right-width: 0px;
  border-top-color: rgb(214, 69, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--accent-3, rgb(214, 69, 69));
  content: "";
  display: inline-block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: -4px;
  margin-top: var(--heading-spacing, 0px);
  width: 17.5938px;
}

html[saved-theme="light"] body h4 {
  border-bottom-color: rgb(8, 80, 13);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 80, 13);
  border-left-width: 0px;
  border-right-color: rgb(8, 80, 13);
  border-right-width: 0px;
  border-top-color: rgb(8, 80, 13);
  border-top-width: 0px;
  color: var(--accent-4, rgb(8, 80, 13));
  font-size: var(--font-size-h4, 16px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h4-letter-spacing, -0.08px);
  line-height: var(--h4-line-height, 22.4px);
  margin-bottom: 8px;
  margin-left: -8px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h4::before {
  --font-weight: var(--h4-weight, 640);
  background: rgb(240, 80, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 80, 6);
  border-bottom-color: rgb(8, 80, 13);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(8, 80, 13);
  border-left-width: 0px;
  border-right-color: rgb(8, 80, 13);
  border-right-width: 0px;
  border-top-color: rgb(8, 80, 13);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--accent-4, rgb(8, 80, 13));
  content: "";
  display: inline-block;
  margin-bottom: 0px;
  margin-left: 6px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  width: 11.1875px;
}

html[saved-theme="light"] body h5 {
  border-bottom-color: rgb(32, 18, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(32, 18, 160);
  border-left-width: 0px;
  border-right-color: rgb(32, 18, 160);
  border-right-width: 0px;
  border-top-color: rgb(32, 18, 160);
  border-top-width: 0px;
  color: var(--accent-5, rgb(32, 18, 160));
  font-size: var(--font-size-h5, 16px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h5-letter-spacing, -0.032px);
  line-height: var(--h5-line-height, 32px);
  margin-bottom: 6.4px;
  margin-left: -8px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 8px);
}

html[saved-theme="light"] body h5::before {
  --font-weight: var(--h5-weight, 620);
  background: rgb(240, 80, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 80, 6);
  border-bottom-color: rgb(32, 18, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(32, 18, 160);
  border-left-width: 0px;
  border-right-color: rgb(32, 18, 160);
  border-right-width: 0px;
  border-top-color: rgb(32, 18, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--accent-5, rgb(32, 18, 160));
  content: "";
  display: inline-block;
  margin-bottom: 0px;
  margin-left: 12px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  width: 8px;
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(25, 68, 170);
  border-bottom-width: 0px;
  border-left-color: rgb(25, 68, 170);
  border-left-width: 0px;
  border-right-color: rgb(25, 68, 170);
  border-right-width: 0px;
  border-top-color: rgb(25, 68, 170);
  border-top-width: 0px;
  color: var(--accent-6, rgb(25, 68, 170));
  font-size: var(--font-size-h6, 16px);
  font-weight: var(--font-weight, 500);
  margin-bottom: 4.8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 6.4px;
}

html[saved-theme="light"] body h6::before {
  --font-weight: var(--h6-weight, 600);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(240, 80, 6);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(240, 80, 6);
  border-left-width: 0px;
  border-right-color: rgb(240, 80, 6);
  border-right-width: 0px;
  border-top-color: rgb(240, 80, 6);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--accent-6, rgb(240, 80, 6));
  content: "-";
  display: inline;
  margin-bottom: 0px;
  margin-left: 12px;
  margin-right: 6px;
  margin-top: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(36, 36, 36);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(217, 217, 217));
  font-family: var(--text-normal, var(--base-font-face));
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(36, 36, 36);
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: var(--text-normal, var(--base-font-face));
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  font-family: var(--text-normal, var(--base-font-face));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(36, 36, 36));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(234, 234, 234));
  border-color: rgb(36, 36, 36);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  color: var(--table-header-color, rgb(36, 36, 36));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body .metadata-properties {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-color: var(--tag-color, #e06d0f);
  --pill-color-hover: var(--tag-color-hover, #e06d0f);
  --pill-color-remove: var(--tag-color, #e06d0f);
  --pill-color-remove-hover: var(--tag-color-hover, #e06d0f);
  color: var(--pill-color, rgb(224, 109, 15));
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(234, 234, 234));
  color: var(--text-normal, rgb(36, 36, 36));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(217, 217, 217));
  border-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(217, 217, 217));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(36, 36, 36);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(217, 217, 217));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
  color: var(--text-normal, rgb(36, 36, 36));
  font-family: var(--text-normal, var(--base-font-face));
  font-size: var(--font-size-h4, 13px);
  line-height: 27.2px;
}

html[saved-theme="light"] body abbr {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}

html[saved-theme="light"] body input[type=text] {
  font-family: var(--text-normal, var(--base-font-face));
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(202, 202, 202);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(202, 202, 202);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(202, 202, 202);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(202, 202, 202);
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(202, 202, 202) 0px 1px 1px 0px;
  color: var(--code-normal, rgb(36, 36, 36));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(36, 36, 36);
  border-left-width: 0px;
  border-right-color: rgb(36, 36, 36);
  border-right-width: 0px;
  border-top-color: rgb(36, 36, 36);
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body summary {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body sup {
  color: rgb(36, 36, 36);
  font-size: 11.2px;
}

html[saved-theme="light"] body ul.tags > li {
  color: var(--tag-color, rgb(224, 109, 15));
}`,
  },
  classSettings: {
    "dkem-is-decoration": {
      general: `.dkem-is-decoration {
/* Common styles for headers */
.HyperMD-header-1,
  .markdown-preview-view h1,
  .HyperMD-header-2,
  .markdown-preview-view h2,
  .HyperMD-header-3,
  .markdown-preview-view h3,
  .HyperMD-header-4,
  .markdown-preview-view h4,
  .HyperMD-header-5,
  .markdown-preview-view h5 {
    margin-left: -8px !important;
  };
/* Styles for h1 */
.HyperMD-header-1,
  .markdown-preview-view h1 {
    border-bottom: 5px solid;
    border-image: linear-gradient(to right, var(--h1-gradient)) 1/0 0 5px;
    margin-left: -20px;
  };
/* Common styles for all headers */
.HyperMD-header-2::before,
  .HyperMD-header-3::before,
  .HyperMD-header-4::before,
  .HyperMD-header-5::before,
  .markdown-preview-view h2::before,
  .markdown-preview-view h3::before,
  .markdown-preview-view h4::before,
  .markdown-preview-view h5::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
  };
/* Styles for h2 */
.HyperMD-header-2,
  .markdown-preview-view h2 {
    border-bottom: 3px solid;
    border-image: linear-gradient(to right, var(--h2-gradient)) 1/0px 0 3px;
    margin-left: -15px;

    &::before {
      width: 0.8em;
      height: 0.8em;
      margin-right: 9px;
      position: relative;
      bottom: 2px;
      background-color: var(--h2-icon-color);
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z'/%3E%3C/svg%3E");
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z'/%3E%3C/svg%3E");
    }
  };
/* Styles for h3 */
.HyperMD-header-3,
  .markdown-preview-view h3 {
    &::before {
      width: 1em;
      height: 1em;
      margin-right: -4px;
      background-color: var(--h3-h6-icon-color);
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath d='M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z'/%3E%3C/svg%3E");
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath d='M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z'/%3E%3C/svg%3E");
    }
  };
/* Styles for h4 */
.HyperMD-header-4,
  .markdown-preview-view h4 {
    &::before {
      width: 0.7em;
      height: 0.7em;
      margin-left: 6px;
      margin-right: 6px;
      background-color: var(--h3-h6-icon-color);
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E");
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E");
    }
  };
/* Styles for h5 */
.HyperMD-header-5,
  .markdown-preview-view h5 {
    &::before {
      width: 0.5em;
      height: 0.5em;
      margin-left: 12px;
      margin-right: 6px;
      background-color: var(--h3-h6-icon-color);
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z'/%3E%3C/svg%3E");
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z'/%3E%3C/svg%3E");
    }
  };
/* Styles for h6 */
.HyperMD-header-6,
  .markdown-preview-view h6 {
    &::before {
      content: "-";
      font-weight: 900;
      margin-left: 12px;
      margin-right: 6px;
      font-size: 1em;
      color: var(--h3-h6-icon-color);
    }
  };
}`,
    },
    "theme-dark-orange": {
      dark: `.theme-dark-orange {
--main-node: #ffbe00;
--main-node-hover: #fe6a26;
--tags: #f1ee26;
--external-link: #82d2e8;
--external-link-hidden: rgba(131, 197, 235, 0.3);
--main-background: rgb(36, 36, 36);
--secondary-background: rgb(27, 27, 27);
--secondary-background-low-opacity: rgba(27, 27, 27, 0.329);
--attachments: rgb(105, 188, 235);
--accent-1: #f07128;
--accent-2: #eb9239;
--accent-3: #f1b125;
--accent-4: #a0e73c;
--accent-5: #62deac;
--accent-6: #62b7de;
--text-normal: rgb(201, 201, 201);
--text-accent: var(--main-node);
--text-accent-hover: var(--main-node-hover);
--background-primary: var(--main-background);
--background-secondary: var(--secondary-background);
--interactive-accent: var(--main-node);
--interactive-accent-hover: var(--main-node-hover);
--text-on-accent: black;
--background-modifier-error: #cf2d2d;
--background-modifier-error-hover: #a72020;
--text-highlight-bg: #e9b35f;
--h1-gradient: #d72, #810, #e52, #c12;
--h2-gradient: #f82, #922, #222;
--h2-icon-color: #da6212;
--h3-h6-icon-color: #ff6a6a;
}`,
    },
    "theme-dark-blue": {
      dark: `.theme-dark-blue {
--main-node: #4a90e2;
--main-node-hover: #2c78d4;
--tags: #61dafb;
--external-link: #82d2e8;
--external-link-hidden: rgba(131, 197, 235, 0.3);
--main-background: rgb(36, 36, 36);
--secondary-background: rgb(27, 27, 27);
--secondary-background-low-opacity: rgba(27, 27, 27, 0.329);
--attachments: rgb(105, 188, 235);
--accent-1: #3498db;
--accent-2: #2980b9;
--accent-3: #1abc9c;
--accent-4: #080e0c;
--accent-5: #2ecc71;
--accent-6: #27ae60;
--text-normal: rgb(201, 201, 201);
--text-accent: var(--main-node);
--text-accent-hover: var(--main-node-hover);
--background-primary: var(--main-background);
--background-secondary: var(--secondary-background);
--interactive-accent: var(--main-node);
--interactive-accent-hover: var(--main-node-hover);
--text-on-accent: white;
--background-modifier-error: #e74c3c;
--background-modifier-error-hover: #c0392b;
--text-highlight-bg: #3498db;
--h1-gradient: #4a90e2, #0a2c57, #3498db, #2980b9;
--h2-gradient: #61dafb, #3498db, #222;
--h2-icon-color: #4a90e2;
--h3-h6-icon-color: #61dafb;
}`,
    },
    "theme-dark-green": {
      dark: `.theme-dark-green {
--main-node: #2ecc71;
--main-node-hover: #27ae60;
--tags: #a0e73c;
--external-link: #82d2e8;
--external-link-hidden: rgba(131, 197, 235, 0.3);
--main-background: rgb(36, 36, 36);
--secondary-background: rgb(27, 27, 27);
--secondary-background-low-opacity: rgba(27, 27, 27, 0.329);
--attachments: rgb(105, 188, 235);
--accent-1: #1abc9c;
--accent-2: #16a085;
--accent-3: #3498db;
--accent-4: #2980b9;
--accent-5: #f1c40f;
--accent-6: #f39c12;
--text-normal: rgb(201, 201, 201);
--text-accent: var(--main-node);
--text-accent-hover: var(--main-node-hover);
--background-primary: var(--main-background);
--background-secondary: var(--secondary-background);
--interactive-accent: var(--main-node);
--interactive-accent-hover: var(--main-node-hover);
--text-on-accent: black;
--background-modifier-error: #e74c3c;
--background-modifier-error-hover: #c0392b;
--text-highlight-bg: #2ecc71;
--h1-gradient: #2ecc71, #083119, #1abc9c, #16a085;
--h2-gradient: #a0e73c, #2ecc71, #222;
--h2-icon-color: #2ecc71;
--h3-h6-icon-color: #a0e73c;
}`,
    },
    "theme-dark-purple": {
      dark: `.theme-dark-purple {
--main-node: #9b59b6;
--main-node-hover: #8e44ad;
--tags: #d2a8ff;
--external-link: #82d2e8;
--external-link-hidden: rgba(131, 197, 235, 0.3);
--main-background: rgb(36, 36, 36);
--secondary-background: rgb(27, 27, 27);
--secondary-background-low-opacity: rgba(27, 27, 27, 0.329);
--attachments: rgb(105, 188, 235);
--accent-1: #8e44ad;
--accent-2: #9b59b6;
--accent-3: #3498db;
--accent-4: #2980b9;
--accent-5: #1abc9c;
--accent-6: #16a085;
--text-normal: rgb(201, 201, 201);
--text-accent: var(--main-node);
--text-accent-hover: var(--main-node-hover);
--background-primary: var(--main-background);
--background-secondary: var(--secondary-background);
--interactive-accent: var(--main-node);
--interactive-accent-hover: var(--main-node-hover);
--text-on-accent: white;
--background-modifier-error: #e74c3c;
--background-modifier-error-hover: #c0392b;
--text-highlight-bg: #9b59b6;
--h1-gradient: #9b59b6, #8e44ad, #d2a8ff, #8e44ad;
--h2-gradient: #d2a8ff, #9b59b6, #222;
--h2-icon-color: #9b59b6;
--h3-h6-icon-color: #d2a8ff;
}`,
    },
    "theme-light-orange": {
      light: `.theme-light-orange {
--main-background: #eaeaea;
--secondary-background: #d9d9d9;
--secondary-background-low-opacity: #e2e2e254;
--main-node: #e06d0f;
--accent-1: #f05006;
--accent-2: #cf1f08;
--accent-3: #d64545;
--accent-4: #08500d;
--accent-5: #2012a0;
--accent-6: #1944aa;
--external-link: #307a8e;
--external-link-hidden: #307a8e99;
--text-normal: rgb(36, 36, 36);
--text-accent: var(--main-node);
--text-accent-hover: var(--main-node-hover);
--background-primary: var(--main-background);
--background-secondary: var(--secondary-background);
--interactive-accent: var(--main-node);
--interactive-accent-hover: var(--main-node-hover);
--background-modifier-error: #cf2d2d;
--background-modifier-error-hover: #a72020;
--text-highlight-bg: #e9b35f;
--h1-gradient: #e06d0f, #f05006, #cf1f08, #d64545;
--h2-gradient: #f05006, #e06d0f, #eee;
--h2-icon-color: #e06d0f;
--h3-h6-icon-color: #f05006;
}`,
    },
    "theme-light-blue": {
      light: `.theme-light-blue {
--main-background: #f0f4f8;
--secondary-background: #e1e8f0;
--secondary-background-low-opacity: #e1e8f054;
--main-node: #2c78d4;
--accent-1: #3498db;
--accent-2: #2980b9;
--accent-3: #1abc9c;
--accent-4: #16a085;
--accent-5: #2ecc71;
--accent-6: #27ae60;
--external-link: #2980b9;
--external-link-hidden: #2980b999;
--text-normal: rgb(36, 36, 36);
--text-accent: var(--main-node);
--text-accent-hover: var(--main-node-hover);
--background-primary: var(--main-background);
--background-secondary: var(--secondary-background);
--interactive-accent: var(--main-node);
--interactive-accent-hover: var(--main-node-hover);
--background-modifier-error: #e74c3c;
--background-modifier-error-hover: #c0392b;
--text-highlight-bg: #3498db;
--h1-gradient: #2c78d4, #3498db, #2980b9, #1abc9c;
--h2-gradient: #3498db, #2c78d4, #eee;
--h2-icon-color: #2c78d4;
--h3-h6-icon-color: #3498db;
}`,
    },
    "theme-light-green": {
      light: `.theme-light-green {
--main-background: #f0f8f0;
--secondary-background: #e1f0e1;
--secondary-background-low-opacity: #e1f0e154;
--main-node: #27ae60;
--accent-1: #2ecc71;
--accent-2: #16a085;
--accent-3: #3498db;
--accent-4: #2980b9;
--accent-5: #f1c40f;
--accent-6: #f39c12;
--external-link: #16a085;
--external-link-hidden: #16a08599;
--text-normal: rgb(36, 36, 36);
--text-accent: var(--main-node);
--text-accent-hover: var(--main-node-hover);
--background-primary: var(--main-background);
--background-secondary: var(--secondary-background);
--interactive-accent: var(--main-node);
--interactive-accent-hover: var(--main-node-hover);
--background-modifier-error: #e74c3c;
--background-modifier-error-hover: #c0392b;
--text-highlight-bg: #2ecc71;
--h1-gradient: #27ae60, #2ecc71, #16a085, #3498db;
--h2-gradient: #2ecc71, #27ae60, #eee;
--h2-icon-color: #27ae60;
--h3-h6-icon-color: #2ecc71;
}`,
    },
    "theme-light-purple": {
      light: `.theme-light-purple {
--main-background: #f8f0f8;
--secondary-background: #f0e1f0;
--secondary-background-low-opacity: #f0e1f054;
--main-node: #8e44ad;
--accent-1: #9b59b6;
--accent-2: #8e44ad;
--accent-3: #3498db;
--accent-4: #2980b9;
--accent-5: #1abc9c;
--accent-6: #16a085;
--external-link: #8e44ad;
--external-link-hidden: #8e44ad99;
--text-normal: rgb(36, 36, 36);
--text-accent: var(--main-node);
--text-accent-hover: var(--main-node-hover);
--background-primary: var(--main-background);
--background-secondary: var(--secondary-background);
--interactive-accent: var(--main-node);
--interactive-accent-hover: var(--main-node-hover);
--background-modifier-error: #e74c3c;
--background-modifier-error-hover: #c0392b;
--text-highlight-bg: #9b59b6;
--h1-gradient: #8e44ad, #9b59b6, #8e44ad, #3498db;
--h2-gradient: #9b59b6, #8e44ad, #eee;
--h2-icon-color: #8e44ad;
--h3-h6-icon-color: #9b59b6;
}`,
    },
  },
};
