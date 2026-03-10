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
  --background-modifier-border: #53555a !important;
  --background-primary: #171a23 !important;
  --background-secondary: #171a23 !important;
  --base: #171a23 !important;
  --bases-cards-background: #171a23 !important;
  --bases-cards-shadow: 0 0 0 1px #53555a !important;
  --bases-embed-border-color: #53555a !important;
  --bases-group-heading-property-color: #bab3aa !important;
  --bases-table-border-color: #53555a !important;
  --bases-table-cell-background-active: #171a23 !important;
  --bases-table-header-background: #171a23 !important;
  --bases-table-header-color: #bab3aa !important;
  --bases-table-summary-background: #171a23 !important;
  --black: #24252a !important;
  --bodyFont: '??', "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold: #bdb2a9 !important;
  --bold-color: #bdb2a9 !important;
  --canvas-background: #171a23 !important;
  --caret-color: #d7d8d7 !important;
  --checkbox-border-color-hover: #bab3aa !important;
  --checkbox-marker-color: #171a23 !important;
  --checklist-done-color: #bab3aa !important;
  --code-background: #242a36 !important;
  --code-bg: #242a36 !important;
  --code-border-color: #53555a !important;
  --code-normal: #908caa !important;
  --code-punctuation: #bab3aa !important;
  --codeFont: '??', "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: #f03d2f !important;
  --dark: #d7d8d7 !important;
  --darkgray: #d7d8d7 !important;
  --divider-color: #53555a !important;
  --embed-block-shadow-hover: 0 0 0 1px #53555a, inset 0 0 0 1px #53555a !important;
  --family: "Geist", sans-serif !important;
  --file-header-background: #171a23 !important;
  --file-header-background-focused: #171a23 !important;
  --flair-color: #d7d8d7 !important;
  --flashing-background: rgba(235, 111, 146, 0.3) !important;
  --foam: #9ccfd8 !important;
  --font-mermaid: '??', "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', "Geist", sans-serif, 'Arial' !important;
  --font-text: '??', "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Geist", sans-serif !important;
  --footnote-divider-color: #53555a !important;
  --footnote-id-color: #bab3aa !important;
  --gold: #f6c177 !important;
  --graph-node: #f03d2f !important;
  --graph-node-focused: #8d1a11 !important;
  --graph-node-unresolved: #f03d2f !important;
  --graph-text: #ebbcba !important;
  --gray: #242a36 !important;
  --h1-color: #f03d2f !important;
  --h2-color: #f03d2f !important;
  --h3-color: #f03d2f !important;
  --h4-color: #f03d2f !important;
  --h5-color: #f03d2f !important;
  --h6-color: #f03d2f !important;
  --headerFont: '??', "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight-high: #524f67 !important;
  --highlight-low: #21202e !important;
  --highlight-med: #403d52 !important;
  --hr-color: #53555a !important;
  --icon-color: #bab3aa !important;
  --icon-color-active: #f03d2f !important;
  --icon-color-focused: #d7d8d7 !important;
  --icon-color-hover: #bab3aa !important;
  --inline-title-color: #f03d2f !important;
  --iris: #c4a7e7 !important;
  --italic-color: #bdb2a9 !important;
  --light: #171a23 !important;
  --light-base: #d4954c !important;
  --light-foam: #56949f !important;
  --light-gold: #ea9d34 !important;
  --light-highlight-high: #cecacd !important;
  --light-highlight-low: #f4ede8 !important;
  --light-highlight-med: #dfdad9 !important;
  --light-iris: #907aa9 !important;
  --light-love: #b4637a !important;
  --light-muted: #9893a5 !important;
  --light-overlay: #f2e9e1 !important;
  --light-pine: #286983 !important;
  --light-rose: #d7827e !important;
  --light-subtle: #797593 !important;
  --light-surface: #fffaf3 !important;
  --light-text: #575279 !important;
  --lightgray: #171a23 !important;
  --link-color: #f03d2f !important;
  --link-color-hover: #8d1a11 !important;
  --link-external-color: #f03d2f !important;
  --link-external-color-hover: #8d1a11 !important;
  --link-unresolved-color: #f03d2f !important;
  --link-url-hover: #8d1a11 !important;
  --list-marker-color-collapsed: #f03d2f !important;
  --list-marker-color-hover: #bab3aa !important;
  --love: #b921b1c7 !important;
  --menu-background: #171a23 !important;
  --metadata-border-color: #53555a !important;
  --metadata-divider-color: #53555a !important;
  --metadata-input-text-color: #d7d8d7 !important;
  --metadata-label-text-color: #bab3aa !important;
  --metadata-label-text-color-hover: #bab3aa !important;
  --modal-background: #15182b !important;
  --modal-border-color: #24252a !important;
  --muted: #bab3aa !important;
  --nav-heading-color: #d7d8d7 !important;
  --nav-heading-color-collapsed-hover: #bab3aa !important;
  --nav-heading-color-hover: #d7d8d7 !important;
  --nav-item-color: #bab3aa !important;
  --nav-item-color-active: #d7d8d7 !important;
  --nav-item-color-highlighted: #f03d2f !important;
  --nav-item-color-hover: #d7d8d7 !important;
  --nav-item-color-selected: #d7d8d7 !important;
  --nav-tag-color-active: #bab3aa !important;
  --nav-tag-color-hover: #bab3aa !important;
  --overlay: #53555a !important;
  --pdf-background: #171a23 !important;
  --pdf-page-background: #171a23 !important;
  --pdf-shadow: 0 0 0 1px #53555a !important;
  --pdf-sidebar-background: #171a23 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #53555a !important;
  --pill-border-color: #53555a !important;
  --pill-color: #bab3aa !important;
  --pill-color-hover: #d7d8d7 !important;
  --pill-color-remove-hover: #f03d2f !important;
  --pine: #31748f !important;
  --prompt-background: #171a23 !important;
  --puple: #15182b !important;
  --red: #f03d2f !important;
  --red2: #8d1a11 !important;
  --ribbon-background: #171a23 !important;
  --ribbon-background-collapsed: #171a23 !important;
  --rose: #ebbcba !important;
  --scrollbar-active-thumb-bg: #f03d2f !important;
  --scrollbar-thumb-bg: #8d1a11 !important;
  --search-clear-button-color: #bab3aa !important;
  --search-icon-color: #bab3aa !important;
  --search-result-background: #171a23 !important;
  --secondary: #f03d2f !important;
  --setting-group-heading-color: #d7d8d7 !important;
  --setting-items-border-color: #53555a !important;
  --sidebar-active: #f03d2f !important;
  --site-name-color: #f03d2f !important;
  --slider-track-background: #53555a !important;
  --status-bar-background: #242a36 !important;
  --status-bar-border-color: #53555a !important;
  --status-bar-text-color: #bab3aa !important;
  --subtle: #908caa !important;
  --suggestion-background: #171a23 !important;
  --surface: #171a23 !important;
  --tab-background-active: #171a23 !important;
  --tab-container-background: #171a23 !important;
  --tab-outline-color: #53555a !important;
  --tab-switcher-background: #171a23 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #171a23, transparent) !important;
  --tab-text-color: #b921b1c7 !important;
  --tab-text-color-active: #bab3aa !important;
  --tab-text-color-focused: #bab3aa !important;
  --tab-text-color-focused-active: #bab3aa !important;
  --tab-text-color-focused-active-current: #d7d8d7 !important;
  --tab-text-color-focused-highlighted: #f03d2f !important;
  --table-add-button-border-color: #53555a !important;
  --table-border-color: #53555a !important;
  --table-header-border-color: #53555a !important;
  --table-header-color: #d7d8d7 !important;
  --table-row: #242a36 !important;
  --tag-background: #53555a !important;
  --tag-color: #f03d2f !important;
  --tag-color-hover: #8d1a11 !important;
  --tertiary: #8d1a11 !important;
  --text: #d7d8d7 !important;
  --text-accent: #f03d2f !important;
  --text-accent-hover: #8d1a11 !important;
  --text-muted: #bab3aa !important;
  --text-normal: #d7d8d7 !important;
  --text-selection: rgba(49, 116, 143, 0.6) !important;
  --titleFont: '??', "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #242a36 !important;
  --titlebar-border-color: #53555a !important;
  --titlebar-text-color: #bab3aa !important;
  --titlebar-text-color-focused: #d7d8d7 !important;
  --vault-profile-color: #d7d8d7 !important;
  --vault-profile-color-hover: #d7d8d7 !important;
  --white: #fff !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
