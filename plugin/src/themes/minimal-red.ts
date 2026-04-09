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
  --bodyFont: "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --codeFont: "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --font-mermaid: "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Geist", sans-serif, Arial' !important;
  --font-text: "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --headerFont: "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --titleFont: "Geist", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 26, 35);
  color: rgb(215, 216, 215);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(23, 26, 35);
  color: rgb(215, 216, 215);
}

html body .bases-table {
  border-color: rgb(36, 42, 54);
}

html body .bases-table thead th {
  border-color: rgb(83, 85, 90);
  color: rgb(215, 216, 215);
}

html body .canvas-node {
  border-color: rgb(215, 216, 215);
}

html body .canvas-node-content {
  color: rgb(215, 216, 215);
}

html body .canvas-node-file {
  color: rgb(215, 216, 215);
}

html body .canvas-node-group {
  border-color: rgb(215, 216, 215);
}

html body .canvas-sidebar {
  background-color: rgb(23, 26, 35);
  border-color: rgb(215, 216, 215);
}

html body .note-properties {
  border-color: rgb(83, 85, 90);
}

html body .note-properties-key {
  color: rgb(186, 179, 170);
}

html body .note-properties-row {
  border-color: rgb(186, 179, 170);
}

html body .note-properties-tags {
  background-color: rgb(83, 85, 90);
  color: rgb(240, 61, 47);
}

html body .note-properties-value {
  color: rgb(186, 179, 170);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 26, 35);
  color: rgb(215, 216, 215);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(83, 85, 90);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 26, 35);
  border-left-color: rgb(83, 85, 90);
  color: rgb(215, 216, 215);
}

html body div#quartz-root {
  background-color: rgb(23, 26, 35);
  color: rgb(215, 216, 215);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(189, 178, 169);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 178, 169) none 0px;
  text-decoration-color: rgb(189, 178, 169);
}

html body .page article p > em, html em {
  color: rgb(189, 178, 169);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 178, 169) none 0px;
  text-decoration-color: rgb(189, 178, 169);
}

html body .page article p > i, html i {
  color: rgb(189, 178, 169);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 178, 169) none 0px;
  text-decoration-color: rgb(189, 178, 169);
}

html body .page article p > strong, html strong {
  color: rgb(189, 178, 169);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 178, 169) none 0px;
  text-decoration-color: rgb(189, 178, 169);
}

html body .text-highlight {
  color: rgb(215, 216, 215);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(215, 216, 215) none 0px;
  text-decoration-color: rgb(215, 216, 215);
}

html body del {
  color: rgb(215, 216, 215);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(215, 216, 215) none 0px;
  text-decoration-color: rgb(215, 216, 215);
}

html body h1.article-title {
  color: rgb(215, 216, 215);
}

html body p {
  color: rgb(186, 179, 170);
  outline: rgb(186, 179, 170) none 0px;
  text-decoration-color: rgb(186, 179, 170);
}`,
    links: `html body a.external, html footer a {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 61, 47) none 0px;
  text-decoration-color: rgb(240, 61, 47);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 61, 47) none 0px;
  text-decoration-color: rgb(240, 61, 47);
}

html body a.internal.broken {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 61, 47) none 0px;
}`,
    lists: `html body dd {
  color: rgb(215, 216, 215);
}

html body dt {
  color: rgb(215, 216, 215);
}

html body ol > li {
  color: rgb(215, 216, 215);
}

html body ol.overflow {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

html body ul > li {
  color: rgb(215, 216, 215);
}

html body ul.overflow {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}`,
    blockquotes: `html body blockquote {
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

html body table {
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

html body td {
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(215, 216, 215);
}

html body th {
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(215, 216, 215);
}

html body thead {
  border-bottom-color: rgb(36, 42, 54);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(36, 42, 54);
  border-right-color: rgb(36, 42, 54);
  border-top-color: rgb(36, 42, 54);
}

html body tr {
  border-bottom-color: rgb(36, 42, 54);
  border-left-color: rgb(36, 42, 54);
  border-right-color: rgb(36, 42, 54);
  border-top-color: rgb(36, 42, 54);
}`,
    code: `html body code {
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  color: rgb(144, 140, 170);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(144, 140, 170);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
}

html body pre:has(> code) {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
}`,
    images: `html body audio {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

html body figcaption {
  color: rgb(215, 216, 215);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

html body img {
  border-bottom-color: rgb(240, 61, 47);
  border-left-color: rgb(240, 61, 47);
  border-right-color: rgb(240, 61, 47);
  border-top-color: rgb(240, 61, 47);
}

html body video {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
}

html body .footnotes {
  border-top-color: rgb(215, 216, 215);
  color: rgb(215, 216, 215);
}

html body .transclude {
  border-bottom-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

html body .transclude-inner {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(215, 216, 215);
  text-decoration-color: rgb(215, 216, 215);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(215, 216, 215);
}

html body .search > .search-container > .search-space {
  background-color: rgb(23, 26, 35);
}

html body .search > .search-container > .search-space > * {
  color: rgb(215, 216, 215);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(215, 216, 215) none 0px;
  text-decoration-color: rgb(215, 216, 215);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(215, 216, 215);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(215, 216, 215);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(215, 216, 215);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(23, 26, 35);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
  color: rgb(215, 216, 215);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(215, 216, 215);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(83, 85, 90);
}

html body a.internal.tag-link::before {
  color: rgb(240, 61, 47);
}

html body h1 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(240, 61, 47);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

html body ::-webkit-scrollbar-track {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 179, 170);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 179, 170);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(215, 216, 215);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
  color: rgb(186, 179, 170);
}`,
    footer: `html body footer {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(186, 179, 170);
}

html body footer ul li a {
  color: rgb(186, 179, 170);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(215, 216, 215);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
  color: rgb(215, 216, 215);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 179, 170);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 179, 170);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

html body li.section-li > .section .meta {
  color: rgb(186, 179, 170);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 179, 170);
}

html body ul.section-ul {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
  color: rgb(186, 179, 170);
}

html body .darkmode svg {
  color: rgb(186, 179, 170);
  stroke: rgb(186, 179, 170);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
  color: rgb(186, 179, 170);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
  color: rgb(215, 216, 215);
}

html body .metadata {
  border-bottom-color: rgb(83, 85, 90);
  border-left-color: rgb(83, 85, 90);
  border-right-color: rgb(83, 85, 90);
  border-top-color: rgb(83, 85, 90);
  color: rgb(186, 179, 170);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
  color: rgb(186, 179, 170);
  font-family: "??", Geist, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(36, 42, 54);
}

html body .page-header h2.page-title {
  color: rgb(215, 216, 215);
}

html body abbr {
  color: rgb(215, 216, 215);
}

html body details {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

html body input[type=text] {
  border-bottom-color: rgb(186, 179, 170);
  border-left-color: rgb(186, 179, 170);
  border-right-color: rgb(186, 179, 170);
  border-top-color: rgb(186, 179, 170);
  color: rgb(186, 179, 170);
}

html body kbd {
  background-color: rgb(36, 42, 54);
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  color: rgb(144, 140, 170);
}

html body progress {
  border-bottom-color: rgb(215, 216, 215);
  border-left-color: rgb(215, 216, 215);
  border-right-color: rgb(215, 216, 215);
  border-top-color: rgb(215, 216, 215);
}

html body sub {
  color: rgb(215, 216, 215);
}

html body summary {
  color: rgb(215, 216, 215);
}

html body sup {
  color: rgb(215, 216, 215);
}

html body ul.tags > li {
  background-color: rgb(83, 85, 90);
  color: rgb(240, 61, 47);
}`,
  },
  light: {},
};
