import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "carbon",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-mono", "ibm-plex-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 219 !important;
  --accent-l: 53% !important;
  --accent-s: 99% !important;
  --background-modifier-active-hover: #525252 !important;
  --background-modifier-border: #6F6F6F !important;
  --background-modifier-border-hover: transparent !important;
  --background-primary: #161616 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #161616 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #6F6F6F !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-embed-border-color: #6F6F6F !important;
  --bases-embed-border-radius: 0px !important;
  --bases-table-border-color: #6F6F6F !important;
  --bases-table-cell-background-active: #161616 !important;
  --bases-table-cell-background-selected: rgba(16, 100, 254, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(16, 100, 254) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-header-background: #161616 !important;
  --bases-table-summary-background: #161616 !important;
  --blockquote-border-color: rgb(16, 100, 254) !important;
  --bodyFont: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --button-radius: 0px !important;
  --callout-radius: 0px;
  --canvas-background: #161616 !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: #F4F4F4 !important;
  --checkbox-color: rgb(16, 100, 254) !important;
  --checkbox-color-hover: hsl(216, 100.98%, 60.95%) !important;
  --checkbox-marker-color: #161616 !important;
  --checkbox-radius: 0px !important;
  --clickable-icon-radius: 0px !important;
  --code-border-color: #6F6F6F !important;
  --code-normal: #F4F4F4 !important;
  --code-radius: 0px !important;
  --codeFont: "IBM Plex Mono", Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace !important;
  --collapse-icon-color-collapsed: hsl(216, 100.98%, 60.95%) !important;
  --color-accent: rgb(16, 100, 254) !important;
  --color-accent-1: hsl(216, 100.98%, 60.95%) !important;
  --color-accent-2: hsl(214, 103.95%, 68.37%) !important;
  --color-accent-hsl: 219, 99%, 53% !important;
  --dark: #F4F4F4 !important;
  --darkgray: #F4F4F4 !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(16, 100, 254) !important;
  --embed-block-shadow-hover: 0 0 0 1px #6F6F6F, inset 0 0 0 1px #6F6F6F !important;
  --embed-border-start: 2px solid rgb(16, 100, 254) !important;
  --file-header-background: #161616 !important;
  --file-header-background-focused: #161616 !important;
  --file-header-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --file-header-font-size: 14px !important;
  --flair-color: #F4F4F4 !important;
  --font-default: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --font-interface: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --font-mermaid: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --font-monospace: "IBM Plex Mono", Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace !important;
  --font-text: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --font-ui-small: 14px !important;
  --footnote-divider-color: #6F6F6F !important;
  --footnote-radius: 0px !important;
  --graph-node-focused: hsl(216, 100.98%, 60.95%) !important;
  --graph-text: #F4F4F4 !important;
  --gray: #F4F4F4 !important;
  --h1-weight: 400 !important;
  --h2-weight: 400 !important;
  --headerFont: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --highlight: #001d6c !important;
  --hr-color: #6F6F6F !important;
  --icon-color: #F4F4F4 !important;
  --icon-color-active: hsl(216, 100.98%, 60.95%) !important;
  --icon-color-focused: #FFFFFF !important;
  --icon-color-hover: #F4F4F4 !important;
  --inactive-tab-background: #262626 !important;
  --inline-title-weight: 400 !important;
  --input-disabled-border-color: transparent !important;
  --input-height: 40px !important;
  --input-hover-border-color: black !important;
  --input-radius: 0px !important;
  --input-unfocused-border-color: transparent !important;
  --interactive-accent: rgb(16, 100, 254) !important;
  --interactive-accent-hover: hsl(216, 100.98%, 60.95%) !important;
  --interactive-accent-hsl: 219, 99%, 53% !important;
  --light: #161616 !important;
  --lightgray: #000000 !important;
  --link-color: hsl(216, 100.98%, 60.95%) !important;
  --link-color-hover: hsl(214, 103.95%, 68.37%) !important;
  --link-external-color: hsl(216, 100.98%, 60.95%) !important;
  --link-external-color-hover: hsl(214, 103.95%, 68.37%) !important;
  --link-unresolved-color: hsl(216, 100.98%, 60.95%) !important;
  --link-unresolved-decoration-color: rgba(16, 100, 254, 0.3) !important;
  --list-bullet-size: 0.4em !important;
  --list-indent: 1.75em !important;
  --list-marker-color: #F4F4F4 !important;
  --list-marker-color-collapsed: hsl(216, 100.98%, 60.95%) !important;
  --list-spacing: 0.05em !important;
  --menu-border-color: transparent !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #6F6F6F !important;
  --metadata-divider-color: #6F6F6F !important;
  --metadata-input-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --metadata-input-text-color: #F4F4F4 !important;
  --metadata-label-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #161616 !important;
  --modal-radius: 0px !important;
  --nav-heading-color: #F4F4F4 !important;
  --nav-heading-color-hover: #F4F4F4 !important;
  --nav-item-background-selected: rgba(16, 100, 254, 0.15) !important;
  --nav-item-color-active: #F4F4F4 !important;
  --nav-item-color-highlighted: hsl(216, 100.98%, 60.95%) !important;
  --nav-item-color-hover: #F4F4F4 !important;
  --nav-item-color-selected: #F4F4F4 !important;
  --nav-item-radius: 0px !important;
  --nav-item-size: 14px !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #161616 !important;
  --pdf-page-background: #161616 !important;
  --pdf-shadow: 0 0 0 1px #6F6F6F !important;
  --pdf-sidebar-background: #161616 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #6F6F6F !important;
  --pill-border-color: #6F6F6F !important;
  --pill-border-color-hover: transparent !important;
  --pill-color-hover: #F4F4F4 !important;
  --pill-color-remove-hover: hsl(216, 100.98%, 60.95%) !important;
  --prompt-background: #161616 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #161616 !important;
  --scrollbar-radius: 0px !important;
  --search-result-background: #161616 !important;
  --secondary: hsl(216, 100.98%, 60.95%) !important;
  --setting-group-heading-color: #F4F4F4 !important;
  --setting-items-border-color: #6F6F6F !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-border-color: transparent !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #6F6F6F !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --suggestion-background: #161616 !important;
  --tab-background-active: #161616 !important;
  --tab-divider-color: transparent !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(16, 100, 254) !important;
  --tab-text-color: #8D8D8D !important;
  --tab-text-color-focused: #8D8D8D !important;
  --tab-text-color-focused-active-current: #F4F4F4 !important;
  --tab-text-color-focused-highlighted: hsl(216, 100.98%, 60.95%) !important;
  --table-add-button-border-color: #6F6F6F !important;
  --table-border-color: #6F6F6F !important;
  --table-borders: #8d8d8d !important;
  --table-drag-handle-background-active: rgb(16, 100, 254) !important;
  --table-header-border-color: #6F6F6F !important;
  --table-header-color: #F4F4F4 !important;
  --table-headers: #333333 !important;
  --table-selection: rgba(16, 100, 254, 0.1) !important;
  --table-selection-border-color: rgb(16, 100, 254) !important;
  --tag-background: rgba(16, 100, 254, 0.1) !important;
  --tag-background-hover: rgba(16, 100, 254, 0.2) !important;
  --tag-border-color: rgba(16, 100, 254, 0.15) !important;
  --tag-border-color-hover: rgba(16, 100, 254, 0.15) !important;
  --tag-color: hsl(216, 100.98%, 60.95%) !important;
  --tag-color-hover: hsl(216, 100.98%, 60.95%) !important;
  --tertiary: hsl(214, 103.95%, 68.37%) !important;
  --text-accent: hsl(216, 100.98%, 60.95%) !important;
  --text-accent-hover: hsl(214, 103.95%, 68.37%) !important;
  --text-error: #d8343c !important;
  --text-highlight-bg: #001d6c !important;
  --text-normal: #F4F4F4 !important;
  --text-selection: rgba(16, 100, 254, 0.33) !important;
  --textHighlight: #001d6c !important;
  --titleFont: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-border-color: #6F6F6F !important;
  --titlebar-text-color-focused: #F4F4F4 !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #F4F4F4 !important;
  --vault-profile-color-hover: #F4F4F4 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 244);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(0, 29, 108);
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body del {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: line-through rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body p {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(56, 136, 255);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(56, 136, 255) none 0px;
  text-decoration: underline rgb(56, 136, 255);
  text-decoration-color: rgb(56, 136, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(56, 136, 255);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(56, 136, 255) none 0px;
  text-decoration: underline rgb(56, 136, 255);
  text-decoration-color: rgb(56, 136, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(56, 136, 255);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(56, 136, 255) none 0px;
  text-decoration: underline rgba(16, 100, 254, 0.3);
  text-decoration-color: rgba(16, 100, 254, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body dt {
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body table {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  width: 187.484px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(244, 244, 244);
  border-left-width: 0px;
  border-right-color: rgb(244, 244, 244);
  border-right-width: 0px;
  border-top-color: rgb(244, 244, 244);
  border-top-width: 0px;
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(244, 244, 244);
  border-left-width: 0px;
  border-right-color: rgb(244, 244, 244);
  border-right-width: 0px;
  border-top-color: rgb(244, 244, 244);
  border-top-width: 0px;
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body thead {
  background-color: rgb(51, 51, 51);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(244, 244, 244);
  font-family: "IBM Plex Mono", Menlo, Consolas, Monaco, "Liberation Mono", "Lucida Console", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-bottom: 12px;
  margin-top: 12px;
  padding-bottom: 6px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(244, 244, 244);
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-left-width: 0px;
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  margin-bottom: 12px;
  margin-top: 12px;
  padding-bottom: 6px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-left-width: 0px;
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  margin-bottom: 12px;
  margin-top: 12px;
  padding-bottom: 6px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(244, 244, 244);
  border-left-width: 0px;
  border-right-color: rgb(244, 244, 244);
  border-right-width: 0px;
  border-top-color: rgb(244, 244, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(244, 244, 244);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(16, 100, 254, 0.1);
  border-bottom-color: rgba(16, 100, 254, 0.15);
  border-left-color: rgba(16, 100, 254, 0.15);
  border-right-color: rgba(16, 100, 254, 0.15);
  border-top-color: rgba(16, 100, 254, 0.15);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(56, 136, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(56, 136, 255);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(56, 136, 255);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(244, 244, 244);
}`,
    footer: `html[saved-theme="dark"] body footer {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(244, 244, 244);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(141, 141, 141);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(141, 141, 141);
  stroke: rgb(141, 141, 141);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  background-color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(244, 244, 244);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(244, 244, 244);
  text-decoration: underline dotted rgb(244, 244, 244);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-width: 1px;
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(244, 244, 244);
  font-family: "IBM Plex Mono", Menlo, Consolas, Monaco, "Liberation Mono", "Lucida Console", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body sub {
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body summary {
  color: rgb(244, 244, 244);
}

html[saved-theme="dark"] body sup {
  color: rgb(244, 244, 244);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 219 !important;
  --accent-l: 53% !important;
  --accent-s: 99% !important;
  --background-modifier-active-hover: #E8E8E8 !important;
  --background-modifier-border: #8D8D8D !important;
  --background-modifier-border-hover: transparent !important;
  --background-primary: #FFFFFF !important;
  --background-secondary: #F4F4F4 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #FFFFFF !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #8D8D8D !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-embed-border-color: #8D8D8D !important;
  --bases-embed-border-radius: 0px !important;
  --bases-table-border-color: #8D8D8D !important;
  --bases-table-cell-background-active: #FFFFFF !important;
  --bases-table-cell-background-selected: rgba(16, 100, 254, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(36, 116, 255) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-header-background: #FFFFFF !important;
  --bases-table-summary-background: #FFFFFF !important;
  --blockquote-border-color: rgb(36, 116, 255) !important;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --bodyFont: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --button-radius: 0px !important;
  --callout-radius: 0px;
  --canvas-background: #FFFFFF !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: #262626 !important;
  --checkbox-color: rgb(36, 116, 255) !important;
  --checkbox-color-hover: hsl(216, 100.98%, 60.95%) !important;
  --checkbox-marker-color: #FFFFFF !important;
  --checkbox-radius: 0px !important;
  --clickable-icon-radius: 0px !important;
  --code-border-color: #8D8D8D !important;
  --code-normal: #262626 !important;
  --code-radius: 0px !important;
  --codeFont: "IBM Plex Mono", Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace !important;
  --collapse-icon-color-collapsed: #0f62fe !important;
  --color-accent: rgb(16, 100, 254) !important;
  --color-accent-1: rgb(36, 116, 255) !important;
  --color-accent-2: hsl(216, 100.98%, 60.95%) !important;
  --color-accent-hsl: 219, 99%, 53% !important;
  --dark: #262626 !important;
  --darkgray: #262626 !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(36, 116, 255) !important;
  --embed-block-shadow-hover: 0 0 0 1px #8D8D8D, inset 0 0 0 1px #8D8D8D !important;
  --embed-border-start: 2px solid rgb(36, 116, 255) !important;
  --file-header-background: #FFFFFF !important;
  --file-header-background-focused: #FFFFFF !important;
  --file-header-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --file-header-font-size: 14px !important;
  --flair-color: #262626 !important;
  --font-default: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --font-interface: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --font-mermaid: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --font-monospace: "IBM Plex Mono", Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace !important;
  --font-text: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --font-ui-small: 14px !important;
  --footnote-divider-color: #8D8D8D !important;
  --footnote-radius: 0px !important;
  --graph-node-focused: #0f62fe !important;
  --graph-text: #262626 !important;
  --gray: #262626 !important;
  --h1-weight: 400 !important;
  --h2-weight: 400 !important;
  --headerFont: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --highlight: #d0e2ff !important;
  --hr-color: #8D8D8D !important;
  --icon-color: #262626 !important;
  --icon-color-active: #0f62fe !important;
  --icon-color-focused: #000000 !important;
  --icon-color-hover: #262626 !important;
  --inactive-tab-background: #262626 !important;
  --inline-title-weight: 400 !important;
  --input-disabled-border-color: transparent !important;
  --input-height: 40px !important;
  --input-hover-border-color: black !important;
  --input-radius: 0px !important;
  --input-unfocused-border-color: transparent !important;
  --interactive-accent: rgb(36, 116, 255) !important;
  --interactive-accent-hover: hsl(216, 100.98%, 60.95%) !important;
  --interactive-accent-hsl: 219, 99%, 53% !important;
  --light: #FFFFFF !important;
  --lightgray: #F4F4F4 !important;
  --link-color: #0f62fe !important;
  --link-color-hover: hsl(216, 100.98%, 60.95%) !important;
  --link-external-color: #0f62fe !important;
  --link-external-color-hover: hsl(216, 100.98%, 60.95%) !important;
  --link-unresolved-color: #0f62fe !important;
  --link-unresolved-decoration-color: rgba(16, 100, 254, 0.3) !important;
  --list-bullet-size: 0.4em !important;
  --list-indent: 1.75em !important;
  --list-marker-color: #262626 !important;
  --list-marker-color-collapsed: #0f62fe !important;
  --list-spacing: 0.05em !important;
  --menu-background: #F4F4F4 !important;
  --menu-border-color: transparent !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #8D8D8D !important;
  --metadata-divider-color: #8D8D8D !important;
  --metadata-input-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --metadata-input-text-color: #262626 !important;
  --metadata-label-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #FFFFFF !important;
  --modal-radius: 0px !important;
  --nav-heading-color: #262626 !important;
  --nav-heading-color-hover: #262626 !important;
  --nav-item-background-selected: rgba(16, 100, 254, 0.15) !important;
  --nav-item-color-active: #262626 !important;
  --nav-item-color-highlighted: #0f62fe !important;
  --nav-item-color-hover: #262626 !important;
  --nav-item-color-selected: #262626 !important;
  --nav-item-radius: 0px !important;
  --nav-item-size: 14px !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #FFFFFF !important;
  --pdf-page-background: #FFFFFF !important;
  --pdf-sidebar-background: #FFFFFF !important;
  --pill-border-color: #8D8D8D !important;
  --pill-border-color-hover: transparent !important;
  --pill-color-hover: #262626 !important;
  --pill-color-remove-hover: #0f62fe !important;
  --prompt-background: #FFFFFF !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #FFFFFF !important;
  --scrollbar-radius: 0px !important;
  --search-result-background: #FFFFFF !important;
  --secondary: #0f62fe !important;
  --setting-group-heading-color: #262626 !important;
  --setting-items-border-color: #8D8D8D !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-border-color: transparent !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #8D8D8D !important;
  --status-bar-background: #F4F4F4 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --suggestion-background: #FFFFFF !important;
  --tab-background-active: #FFFFFF !important;
  --tab-container-background: #F4F4F4 !important;
  --tab-divider-color: transparent !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: #F4F4F4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F4F4F4, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(16, 100, 254) !important;
  --tab-text-color: #8D8D8D !important;
  --tab-text-color-focused: #8D8D8D !important;
  --tab-text-color-focused-active-current: #262626 !important;
  --tab-text-color-focused-highlighted: #0f62fe !important;
  --table-add-button-border-color: #8D8D8D !important;
  --table-border-color: #8D8D8D !important;
  --table-borders: #C6C6C6 !important;
  --table-drag-handle-background-active: rgb(36, 116, 255) !important;
  --table-header-border-color: #8D8D8D !important;
  --table-header-color: #262626 !important;
  --table-headers: #e8e8e8 !important;
  --table-selection: rgba(16, 100, 254, 0.1) !important;
  --table-selection-border-color: rgb(36, 116, 255) !important;
  --tag-background: rgba(16, 100, 254, 0.1) !important;
  --tag-background-hover: rgba(16, 100, 254, 0.2) !important;
  --tag-border-color: rgba(16, 100, 254, 0.15) !important;
  --tag-border-color-hover: rgba(16, 100, 254, 0.15) !important;
  --tag-color: #0f62fe !important;
  --tag-color-hover: #0f62fe !important;
  --tertiary: hsl(216, 100.98%, 60.95%) !important;
  --text-accent: #0f62fe !important;
  --text-accent-hover: hsl(216, 100.98%, 60.95%) !important;
  --text-error: #da1e28 !important;
  --text-highlight-bg: #d0e2ff !important;
  --text-normal: #262626 !important;
  --text-selection: rgba(16, 100, 254, 0.2) !important;
  --textHighlight: #d0e2ff !important;
  --titleFont: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-border-color: #8D8D8D !important;
  --titlebar-text-color-focused: #262626 !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #262626 !important;
  --vault-profile-color-hover: #262626 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 244, 244);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 244, 244);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 244, 244);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(38, 38, 38);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(208, 226, 255);
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body del {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: line-through rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body p {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(15, 98, 254);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(15, 98, 254) none 0px;
  text-decoration: underline rgb(15, 98, 254);
  text-decoration-color: rgb(15, 98, 254);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(15, 98, 254);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(15, 98, 254) none 0px;
  text-decoration: underline rgb(15, 98, 254);
  text-decoration-color: rgb(15, 98, 254);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(15, 98, 254);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(15, 98, 254) none 0px;
  text-decoration: underline rgba(16, 100, 254, 0.3);
  text-decoration-color: rgba(16, 100, 254, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body dt {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body table {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  width: 187.484px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-width: 0px;
  border-left-color: rgb(38, 38, 38);
  border-left-width: 0px;
  border-right-color: rgb(38, 38, 38);
  border-right-width: 0px;
  border-top-color: rgb(38, 38, 38);
  border-top-width: 0px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-width: 0px;
  border-left-color: rgb(38, 38, 38);
  border-left-width: 0px;
  border-right-color: rgb(38, 38, 38);
  border-right-width: 0px;
  border-top-color: rgb(38, 38, 38);
  border-top-width: 0px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body thead {
  background-color: rgb(232, 232, 232);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(38, 38, 38);
  font-family: "IBM Plex Mono", Menlo, Consolas, Monaco, "Liberation Mono", "Lucida Console", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figcaption {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(244, 244, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-bottom: 12px;
  margin-top: 12px;
  padding-bottom: 6px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-left-width: 0px;
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  margin-bottom: 12px;
  margin-top: 12px;
  padding-bottom: 6px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-left-width: 0px;
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  margin-bottom: 12px;
  margin-top: 12px;
  padding-bottom: 6px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 38, 38);
  border-left-width: 0px;
  border-right-color: rgb(38, 38, 38);
  border-right-width: 0px;
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(38, 38, 38);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(141, 141, 141);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(16, 100, 254, 0.1);
  border-bottom-color: rgba(16, 100, 254, 0.15);
  border-left-color: rgba(16, 100, 254, 0.15);
  border-right-color: rgba(16, 100, 254, 0.15);
  border-top-color: rgba(16, 100, 254, 0.15);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(15, 98, 254);
}

html[saved-theme="light"] body h1 {
  color: rgb(15, 98, 254);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(15, 98, 254);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(38, 38, 38);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(141, 141, 141);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(141, 141, 141);
  stroke: rgb(141, 141, 141);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .metadata {
  background-color: rgb(232, 232, 232);
  border-bottom-color: rgb(141, 141, 141);
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  background-color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(244, 244, 244);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(38, 38, 38);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(38, 38, 38);
  text-decoration: underline dotted rgb(38, 38, 38);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-width: 1px;
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(38, 38, 38);
  font-family: "IBM Plex Mono", Menlo, Consolas, Monaco, "Liberation Mono", "Lucida Console", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sub {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body summary {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sup {
  color: rgb(38, 38, 38);
}`,
  },
};
