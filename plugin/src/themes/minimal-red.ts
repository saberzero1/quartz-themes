import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal-red",
    modes: ["dark"],
    variations: [],
    fonts: ["geist"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #53555a;
  --background-primary: #171a23;
  --background-secondary: #171a23;
  --base: #171a23;
  --bases-cards-background: #171a23;
  --bases-cards-shadow: 0 0 0 1px #53555a;
  --bases-embed-border-color: #53555a;
  --bases-group-heading-property-color: #bab3aa;
  --bases-table-border-color: #53555a;
  --bases-table-cell-background-active: #171a23;
  --bases-table-header-background: #171a23;
  --bases-table-header-color: #bab3aa;
  --bases-table-summary-background: #171a23;
  --black: #24252a;
  --bodyFont: var(--font-text);
  --bold: #bdb2a9;
  --bold-color: #bdb2a9;
  --canvas-background: #171a23;
  --caret-color: #d7d8d7;
  --checkbox-border-color-hover: #bab3aa;
  --checkbox-marker-color: #171a23;
  --checklist-done-color: #bab3aa;
  --code-background: #242a36;
  --code-bg: #242a36;
  --code-border-color: #53555a;
  --code-normal: #908caa;
  --code-punctuation: #bab3aa;
  --codeFont: var(--font-text);
  --collapse-icon-color-collapsed: #f03d2f;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #53555a;
  --embed-block-shadow-hover: 0 0 0 1px #53555a, inset 0 0 0 1px #53555a;
  --family: "Geist", sans-serif;
  --file-header-background: #171a23;
  --file-header-background-focused: #171a23;
  --flair-color: #d7d8d7;
  --flashing-background: rgba(235, 111, 146, 0.3);
  --foam: #9ccfd8;
  --font-mermaid: '??', "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Geist", sans-serif, 'Arial';
  --font-text: '??', "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Geist", sans-serif;
  --footnote-divider-color: #53555a;
  --footnote-id-color: #bab3aa;
  --gold: #f6c177;
  --graph-node: #f03d2f;
  --graph-node-focused: #8d1a11;
  --graph-node-unresolved: #f03d2f;
  --graph-text: #ebbcba;
  --gray: #242a36;
  --h1-color: #f03d2f;
  --h2-color: #f03d2f;
  --h3-color: #f03d2f;
  --h4-color: #f03d2f;
  --h5-color: #f03d2f;
  --h6-color: #f03d2f;
  --headerFont: var(--font-text);
  --highlight-high: #524f67;
  --highlight-low: #21202e;
  --highlight-med: #403d52;
  --hr-color: #53555a;
  --icon-color: #bab3aa;
  --icon-color-active: #f03d2f;
  --icon-color-focused: #d7d8d7;
  --icon-color-hover: #bab3aa;
  --inline-title-color: #f03d2f;
  --iris: #c4a7e7;
  --italic-color: #bdb2a9;
  --light: var(--background-primary);
  --light-base: #d4954c;
  --light-foam: #56949f;
  --light-gold: #ea9d34;
  --light-highlight-high: #cecacd;
  --light-highlight-low: #f4ede8;
  --light-highlight-med: #dfdad9;
  --light-iris: #907aa9;
  --light-love: #b4637a;
  --light-muted: #9893a5;
  --light-overlay: #f2e9e1;
  --light-pine: #286983;
  --light-rose: #d7827e;
  --light-subtle: #797593;
  --light-surface: #fffaf3;
  --light-text: #575279;
  --lightgray: var(--background-secondary);
  --link-color: #f03d2f;
  --link-color-hover: #8d1a11;
  --link-external-color: #f03d2f;
  --link-external-color-hover: #8d1a11;
  --link-unresolved-color: #f03d2f;
  --link-url-hover: #8d1a11;
  --list-marker-color-collapsed: #f03d2f;
  --list-marker-color-hover: #bab3aa;
  --love: #b921b1c7;
  --menu-background: #171a23;
  --metadata-border-color: #53555a;
  --metadata-divider-color: #53555a;
  --metadata-input-text-color: #d7d8d7;
  --metadata-label-text-color: #bab3aa;
  --metadata-label-text-color-hover: #bab3aa;
  --modal-background: #15182b;
  --modal-border-color: #24252a;
  --muted: #bab3aa;
  --nav-heading-color: #d7d8d7;
  --nav-heading-color-collapsed-hover: #bab3aa;
  --nav-heading-color-hover: #d7d8d7;
  --nav-item-color: #bab3aa;
  --nav-item-color-active: #d7d8d7;
  --nav-item-color-highlighted: #f03d2f;
  --nav-item-color-hover: #d7d8d7;
  --nav-item-color-selected: #d7d8d7;
  --nav-tag-color-active: #bab3aa;
  --nav-tag-color-hover: #bab3aa;
  --overlay: #53555a;
  --pdf-background: #171a23;
  --pdf-page-background: #171a23;
  --pdf-shadow: 0 0 0 1px #53555a;
  --pdf-sidebar-background: #171a23;
  --pdf-thumbnail-shadow: 0 0 0 1px #53555a;
  --pill-border-color: #53555a;
  --pill-color: #bab3aa;
  --pill-color-hover: #d7d8d7;
  --pill-color-remove-hover: #f03d2f;
  --pine: #31748f;
  --prompt-background: #171a23;
  --puple: #15182b;
  --red: #f03d2f;
  --red2: #8d1a11;
  --ribbon-background: #171a23;
  --ribbon-background-collapsed: #171a23;
  --rose: #ebbcba;
  --scrollbar-active-thumb-bg: #f03d2f;
  --scrollbar-thumb-bg: #8d1a11;
  --search-clear-button-color: #bab3aa;
  --search-icon-color: #bab3aa;
  --search-result-background: #171a23;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #d7d8d7;
  --setting-items-border-color: #53555a;
  --sidebar-active: #f03d2f;
  --site-name-color: #f03d2f;
  --slider-track-background: #53555a;
  --status-bar-background: #242a36;
  --status-bar-border-color: #53555a;
  --status-bar-text-color: #bab3aa;
  --subtle: #908caa;
  --suggestion-background: #171a23;
  --surface: #171a23;
  --tab-background-active: #171a23;
  --tab-container-background: #171a23;
  --tab-outline-color: #53555a;
  --tab-switcher-background: #171a23;
  --tab-switcher-menubar-background: linear-gradient(to top, #171a23, transparent);
  --tab-text-color: #b921b1c7;
  --tab-text-color-active: #bab3aa;
  --tab-text-color-focused: #bab3aa;
  --tab-text-color-focused-active: #bab3aa;
  --tab-text-color-focused-active-current: #d7d8d7;
  --tab-text-color-focused-highlighted: #f03d2f;
  --table-add-button-border-color: #53555a;
  --table-border-color: #53555a;
  --table-header-border-color: #53555a;
  --table-header-color: #d7d8d7;
  --table-row: #242a36;
  --tag-background: #53555a;
  --tag-color: #f03d2f;
  --tag-color-hover: #8d1a11;
  --tertiary: var(--text-accent-hover);
  --text: #d7d8d7;
  --text-accent: #f03d2f;
  --text-accent-hover: #8d1a11;
  --text-muted: #bab3aa;
  --text-normal: #d7d8d7;
  --text-selection: rgba(49, 116, 143, 0.6);
  --titleFont: var(--font-text);
  --titlebar-background: #242a36;
  --titlebar-border-color: #53555a;
  --titlebar-text-color: #bab3aa;
  --titlebar-text-color-focused: #d7d8d7;
  --vault-profile-color: #d7d8d7;
  --vault-profile-color-hover: #d7d8d7;
  --white: #fff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 26, 35);
  color: rgb(215, 216, 215);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(23, 26, 35);
  color: rgb(215, 216, 215);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 26, 35);
  color: rgb(215, 216, 215);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(83, 85, 90);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 26, 35);
  border-left-color: rgb(83, 85, 90);
  color: rgb(215, 216, 215);
}

body div#quartz-root {
  background-color: rgb(23, 26, 35);
  color: rgb(215, 216, 215);
}`,
    typography: `body .page article p > b, b {
  color: rgb(189, 178, 169);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 178, 169) none 0px;
  text-decoration: rgb(189, 178, 169);
  text-decoration-color: rgb(189, 178, 169);
}

body .page article p > em, em {
  color: rgb(189, 178, 169);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 178, 169) none 0px;
  text-decoration: rgb(189, 178, 169);
  text-decoration-color: rgb(189, 178, 169);
}

body .page article p > i, i {
  color: rgb(189, 178, 169);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 178, 169) none 0px;
  text-decoration: rgb(189, 178, 169);
  text-decoration-color: rgb(189, 178, 169);
}

body .page article p > strong, strong {
  color: rgb(189, 178, 169);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 178, 169) none 0px;
  text-decoration: rgb(189, 178, 169);
  text-decoration-color: rgb(189, 178, 169);
}

body .text-highlight {
  color: rgb(215, 216, 215);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(215, 216, 215) none 0px;
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body del {
  color: rgb(215, 216, 215);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(215, 216, 215) none 0px;
  text-decoration: line-through rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body p {
  color: rgb(186, 179, 170);
  outline: rgb(186, 179, 170) none 0px;
  text-decoration: rgb(186, 179, 170);
  text-decoration-color: rgb(186, 179, 170);
}`,
    links: `body a.external, footer a {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 61, 47) none 0px;
  text-decoration: underline rgb(240, 61, 47);
  text-decoration-color: rgb(240, 61, 47);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 61, 47) none 0px;
  text-decoration: underline rgb(240, 61, 47);
  text-decoration-color: rgb(240, 61, 47);
}

body a.internal.broken {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 61, 47) none 0px;
}`,
    lists: `body dd {
  color: rgb(215, 216, 215);
}

body dt {
  color: rgb(215, 216, 215);
}

body ol > li {
  color: rgb(215, 216, 215);
}

body ol.overflow {
  background-color: rgb(23, 26, 35);
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body ul > li {
  color: rgb(215, 216, 215);
}

body ul.overflow {
  background-color: rgb(23, 26, 35);
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body table {
  border-bottom-color: rgb(36, 42, 54);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(36, 42, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(36, 42, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(36, 42, 54);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(215, 216, 215);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(215, 216, 215);
}

body th {
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(215, 216, 215);
}

body thead {
  border-bottom-color: rgb(36, 42, 54);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(36, 42, 54);
  border-right-color: rgb(36, 42, 54);
  border-top-color: rgb(36, 42, 54);
}

body tr {
  border-bottom-color: rgb(36, 42, 54);
  border-left-color: rgb(36, 42, 54);
  border-right-color: rgb(36, 42, 54);
  border-top-color: rgb(36, 42, 54);
}`,
    code: `body code {
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  color: rgb(144, 140, 170);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(144, 140, 170);
}

body pre > code, pre:has(> code) {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
}

body pre:has(> code) {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
}`,
    images: `body audio {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body figcaption {
  color: rgb(215, 216, 215);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body img {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body video {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
}

body .footnotes {
  border-top-color: rgb(215, 216, 215);
  color: rgb(215, 216, 215);
}

body .transclude {
  border-bottom-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body .transclude-inner {
  border-bottom-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(186, 179, 170);
  text-decoration: line-through rgb(186, 179, 170);
  text-decoration-color: rgb(186, 179, 170);
}

body li.task-list-item[data-task='!'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='*'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='-'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='/'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='>'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='?'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='I'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='S'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='b'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='c'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='d'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='f'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='i'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='k'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='l'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='p'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='u'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body li.task-list-item[data-task='w'] {
  color: rgb(215, 216, 215);
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(215, 216, 215);
}

body .search > .search-container > .search-space {
  background-color: rgb(23, 26, 35);
}

body .search > .search-container > .search-space > * {
  color: rgb(215, 216, 215);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(215, 216, 215) none 0px;
  text-decoration: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(215, 216, 215);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(215, 216, 215);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(215, 216, 215);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(23, 26, 35);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
  color: rgb(215, 216, 215);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(215, 216, 215);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(83, 85, 90);
}

body a.internal.tag-link::before {
  color: rgb(240, 61, 47);
}

body h1 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

body ::-webkit-scrollbar-corner {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

body ::-webkit-scrollbar-track {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 179, 170);
  text-decoration: rgb(186, 179, 170);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 179, 170);
  text-decoration: rgb(186, 179, 170);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(186, 179, 170);
  text-decoration: rgb(186, 179, 170);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
  color: rgb(215, 216, 215);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
  color: rgb(186, 179, 170);
}`,
    footer: `body footer {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(186, 179, 170);
}

body footer ul li a {
  color: rgb(186, 179, 170);
  text-decoration: rgb(186, 179, 170);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(215, 216, 215);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
  color: rgb(215, 216, 215);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 179, 170);
  text-decoration: rgb(186, 179, 170);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 179, 170);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body li.section-li > .section .meta {
  color: rgb(186, 179, 170);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 179, 170);
  text-decoration: rgb(186, 179, 170);
}

body ul.section-ul {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
  color: rgb(186, 179, 170);
}

body .darkmode svg {
  color: rgb(186, 179, 170);
  stroke: rgb(186, 179, 170);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
  color: rgb(186, 179, 170);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
  color: rgb(215, 216, 215);
}

body .metadata {
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(186, 179, 170);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
  color: rgb(186, 179, 170);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(36, 42, 54);
}

body .page-header h2.page-title {
  color: rgb(215, 216, 215);
}

body abbr {
  color: rgb(215, 216, 215);
  text-decoration: underline dotted rgb(215, 216, 215);
}

body details {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body input[type=text] {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
  color: rgb(186, 179, 170);
}

body kbd {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  color: rgb(144, 140, 170);
}

body progress {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

body sub {
  color: rgb(215, 216, 215);
}

body summary {
  color: rgb(215, 216, 215);
}

body sup {
  color: rgb(215, 216, 215);
}`,
  },
  light: {},
};
