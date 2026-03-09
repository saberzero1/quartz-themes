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
  --accent-h: 219;
  --accent-l: 53%;
  --accent-s: 99%;
  --background-modifier-active-hover: #525252;
  --background-modifier-border: #6F6F6F;
  --background-modifier-border-hover: transparent;
  --background-primary: #161616;
  --background-secondary-alt: #000000;
  --bases-cards-background: #161616;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #6F6F6F;
  --bases-cards-shadow-hover: 0 0 0 1px transparent;
  --bases-embed-border-color: #6F6F6F;
  --bases-embed-border-radius: 0px;
  --bases-table-border-color: #6F6F6F;
  --bases-table-cell-background-active: #161616;
  --bases-table-cell-background-selected: rgba(16, 100, 254, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(16, 100, 254);
  --bases-table-container-border-radius: 0px;
  --bases-table-header-background: #161616;
  --bases-table-summary-background: #161616;
  --blockquote-border-color: rgb(16, 100, 254);
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-background: #161616;
  --canvas-controls-radius: 0px;
  --caret-color: #F4F4F4;
  --checkbox-color: rgb(16, 100, 254);
  --checkbox-color-hover: hsl(216, 100.98%, 60.95%);
  --checkbox-marker-color: #161616;
  --checkbox-radius: 0px;
  --clickable-icon-radius: 0px;
  --code-border-color: #6F6F6F;
  --code-normal: #F4F4F4;
  --code-radius: 0px;
  --collapse-icon-color-collapsed: hsl(216, 100.98%, 60.95%);
  --color-accent: rgb(16, 100, 254);
  --color-accent-1: hsl(216, 100.98%, 60.95%);
  --color-accent-2: hsl(214, 103.95%, 68.37%);
  --color-accent-hsl: 219, 99%, 53%;
  --divider-color: transparent;
  --divider-color-hover: rgb(16, 100, 254);
  --embed-block-shadow-hover: 0 0 0 1px #6F6F6F, inset 0 0 0 1px #6F6F6F;
  --embed-border-start: 2px solid rgb(16, 100, 254);
  --file-header-background: #161616;
  --file-header-background-focused: #161616;
  --file-header-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --file-header-font-size: 14px;
  --flair-color: #F4F4F4;
  --font-default: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --font-interface: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --font-mermaid: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --font-monospace: "IBM Plex Mono", Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  --font-text: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --font-ui-small: 14px;
  --footnote-divider-color: #6F6F6F;
  --footnote-radius: 0px;
  --graph-node-focused: hsl(216, 100.98%, 60.95%);
  --graph-text: #F4F4F4;
  --h1-weight: 400;
  --h2-weight: 400;
  --hr-color: #6F6F6F;
  --icon-color: #F4F4F4;
  --icon-color-active: hsl(216, 100.98%, 60.95%);
  --icon-color-focused: #FFFFFF;
  --icon-color-hover: #F4F4F4;
  --inactive-tab-background: #262626;
  --inline-title-weight: 400;
  --input-disabled-border-color: transparent;
  --input-height: 40px;
  --input-hover-border-color: black;
  --input-radius: 0px;
  --input-unfocused-border-color: transparent;
  --interactive-accent: rgb(16, 100, 254);
  --interactive-accent-hover: hsl(216, 100.98%, 60.95%);
  --interactive-accent-hsl: 219, 99%, 53%;
  --link-color: hsl(216, 100.98%, 60.95%);
  --link-color-hover: hsl(214, 103.95%, 68.37%);
  --link-external-color: hsl(216, 100.98%, 60.95%);
  --link-external-color-hover: hsl(214, 103.95%, 68.37%);
  --link-unresolved-color: hsl(216, 100.98%, 60.95%);
  --link-unresolved-decoration-color: rgba(16, 100, 254, 0.3);
  --list-bullet-size: 0.4em;
  --list-indent: 1.75em;
  --list-marker-color: #F4F4F4;
  --list-marker-color-collapsed: hsl(216, 100.98%, 60.95%);
  --list-spacing: 0.05em;
  --menu-border-color: transparent;
  --menu-radius: 0px;
  --metadata-border-color: #6F6F6F;
  --metadata-divider-color: #6F6F6F;
  --metadata-input-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --metadata-input-text-color: #F4F4F4;
  --metadata-label-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: #161616;
  --modal-radius: 0px;
  --nav-heading-color: #F4F4F4;
  --nav-heading-color-hover: #F4F4F4;
  --nav-item-background-selected: rgba(16, 100, 254, 0.15);
  --nav-item-color-active: #F4F4F4;
  --nav-item-color-highlighted: hsl(216, 100.98%, 60.95%);
  --nav-item-color-hover: #F4F4F4;
  --nav-item-color-selected: #F4F4F4;
  --nav-item-radius: 0px;
  --nav-item-size: 14px;
  --nav-tag-radius: 0px;
  --pdf-background: #161616;
  --pdf-page-background: #161616;
  --pdf-shadow: 0 0 0 1px #6F6F6F;
  --pdf-sidebar-background: #161616;
  --pdf-thumbnail-shadow: 0 0 0 1px #6F6F6F;
  --pill-border-color: #6F6F6F;
  --pill-border-color-hover: transparent;
  --pill-color-hover: #F4F4F4;
  --pill-color-remove-hover: hsl(216, 100.98%, 60.95%);
  --prompt-background: #161616;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #161616;
  --scrollbar-radius: 0px;
  --search-result-background: #161616;
  --setting-group-heading-color: #F4F4F4;
  --setting-items-border-color: #6F6F6F;
  --setting-items-radius: 0px;
  --slider-thumb-border-color: transparent;
  --slider-thumb-radius: 0px;
  --slider-track-background: #6F6F6F;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0px 0 0 0;
  --suggestion-background: #161616;
  --tab-background-active: #161616;
  --tab-divider-color: transparent;
  --tab-font-size: 14px;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 14px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(16, 100, 254);
  --tab-text-color: #8D8D8D;
  --tab-text-color-focused: #8D8D8D;
  --tab-text-color-focused-active-current: #F4F4F4;
  --tab-text-color-focused-highlighted: hsl(216, 100.98%, 60.95%);
  --table-add-button-border-color: #6F6F6F;
  --table-border-color: #6F6F6F;
  --table-borders: #8d8d8d;
  --table-drag-handle-background-active: rgb(16, 100, 254);
  --table-header-border-color: #6F6F6F;
  --table-header-color: #F4F4F4;
  --table-headers: #333333;
  --table-selection: rgba(16, 100, 254, 0.1);
  --table-selection-border-color: rgb(16, 100, 254);
  --tag-background: rgba(16, 100, 254, 0.1);
  --tag-background-hover: rgba(16, 100, 254, 0.2);
  --tag-border-color: rgba(16, 100, 254, 0.15);
  --tag-border-color-hover: rgba(16, 100, 254, 0.15);
  --tag-color: hsl(216, 100.98%, 60.95%);
  --tag-color-hover: hsl(216, 100.98%, 60.95%);
  --text-accent: hsl(216, 100.98%, 60.95%);
  --text-accent-hover: hsl(214, 103.95%, 68.37%);
  --text-error: #d8343c;
  --text-highlight-bg: #001d6c;
  --text-normal: #F4F4F4;
  --text-selection: rgba(16, 100, 254, 0.33);
  --titlebar-background: #000000;
  --titlebar-background-focused: #000000;
  --titlebar-border-color: #6F6F6F;
  --titlebar-text-color-focused: #F4F4F4;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #F4F4F4;
  --vault-profile-color-hover: #F4F4F4;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(244, 244, 244);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 244);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(244, 244, 244);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  color: rgb(244, 244, 244);
}

body div#quartz-root {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 244);
}`,
    typography: `body .page article p > b, b {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body .page article p > em, em {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body .page article p > i, i {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body .page article p > strong, strong {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body .text-highlight {
  background-color: rgb(0, 29, 108);
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body del {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: line-through rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body p {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(56, 136, 255);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(56, 136, 255) none 0px;
  text-decoration: underline rgb(56, 136, 255);
  text-decoration-color: rgb(56, 136, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(56, 136, 255);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(56, 136, 255) none 0px;
  text-decoration: underline rgb(56, 136, 255);
  text-decoration-color: rgb(56, 136, 255);
}

body a.internal.broken {
  color: rgb(56, 136, 255);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(56, 136, 255) none 0px;
  text-decoration: underline rgba(16, 100, 254, 0.3);
  text-decoration-color: rgba(16, 100, 254, 0.3);
}`,
    lists: `body dd {
  color: rgb(244, 244, 244);
}

body dt {
  color: rgb(244, 244, 244);
}

body ol > li {
  color: rgb(244, 244, 244);
}

body ol.overflow {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

body ul > li {
  color: rgb(244, 244, 244);
}

body ul.overflow {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    tables: `body .table-container {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

body table {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  width: 187.484px;
}

body td {
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

body th {
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

body thead {
  background-color: rgb(51, 51, 51);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

body figcaption {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body figure {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

body img {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

body video {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(244, 244, 244);
  color: rgb(244, 244, 244);
}

body .transclude {
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

body .transclude-inner {
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
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='*'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='-'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='/'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='>'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='?'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='I'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='S'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='b'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='c'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='d'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='f'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='i'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='k'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='l'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='p'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='u'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body li.task-list-item[data-task='w'] {
  color: rgb(244, 244, 244);
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(244, 244, 244) none 0px;
  text-decoration: rgb(244, 244, 244);
  text-decoration-color: rgb(244, 244, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(244, 244, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(244, 244, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(244, 244, 244);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(244, 244, 244);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(16, 100, 254, 0.1);
  border-bottom-color: rgba(16, 100, 254, 0.15);
  border-left-color: rgba(16, 100, 254, 0.15);
  border-right-color: rgba(16, 100, 254, 0.15);
  border-top-color: rgba(16, 100, 254, 0.15);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(56, 136, 255);
}

body h1 {
  color: rgb(56, 136, 255);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h2 {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(56, 136, 255);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h3 {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h4 {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h5 {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h6 {
  color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(244, 244, 244);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  color: rgb(244, 244, 244);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

body li.section-li > .section .meta {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(141, 141, 141);
  stroke: rgb(141, 141, 141);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .breadcrumb-element p {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
  color: rgb(244, 244, 244);
}

body .metadata {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body .metadata-properties {
  background-color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body .page-header h2.page-title {
  color: rgb(244, 244, 244);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body abbr {
  color: rgb(244, 244, 244);
  text-decoration: underline dotted rgb(244, 244, 244);
}

body details {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

body input[type=text] {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-width: 1px;
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(244, 244, 244);
  border-left-color: rgb(244, 244, 244);
  border-right-color: rgb(244, 244, 244);
  border-top-color: rgb(244, 244, 244);
}

body sub {
  color: rgb(244, 244, 244);
}

body summary {
  color: rgb(244, 244, 244);
}

body sup {
  color: rgb(244, 244, 244);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 219;
  --accent-l: 53%;
  --accent-s: 99%;
  --background-modifier-active-hover: #E8E8E8;
  --background-modifier-border: #8D8D8D;
  --background-modifier-border-hover: transparent;
  --background-primary: #FFFFFF;
  --background-secondary: #F4F4F4;
  --background-secondary-alt: #000000;
  --bases-cards-background: #FFFFFF;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #8D8D8D;
  --bases-cards-shadow-hover: 0 0 0 1px transparent;
  --bases-embed-border-color: #8D8D8D;
  --bases-embed-border-radius: 0px;
  --bases-table-border-color: #8D8D8D;
  --bases-table-cell-background-active: #FFFFFF;
  --bases-table-cell-background-selected: rgba(16, 100, 254, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(36, 116, 255);
  --bases-table-container-border-radius: 0px;
  --bases-table-header-background: #FFFFFF;
  --bases-table-summary-background: #FFFFFF;
  --blockquote-border-color: rgb(36, 116, 255);
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-background: #FFFFFF;
  --canvas-controls-radius: 0px;
  --caret-color: #262626;
  --checkbox-color: rgb(36, 116, 255);
  --checkbox-color-hover: hsl(216, 100.98%, 60.95%);
  --checkbox-marker-color: #FFFFFF;
  --checkbox-radius: 0px;
  --clickable-icon-radius: 0px;
  --code-border-color: #8D8D8D;
  --code-normal: #262626;
  --code-radius: 0px;
  --collapse-icon-color-collapsed: #0f62fe;
  --color-accent: rgb(16, 100, 254);
  --color-accent-1: rgb(36, 116, 255);
  --color-accent-2: hsl(216, 100.98%, 60.95%);
  --color-accent-hsl: 219, 99%, 53%;
  --divider-color: transparent;
  --divider-color-hover: rgb(36, 116, 255);
  --embed-block-shadow-hover: 0 0 0 1px #8D8D8D, inset 0 0 0 1px #8D8D8D;
  --embed-border-start: 2px solid rgb(36, 116, 255);
  --file-header-background: #FFFFFF;
  --file-header-background-focused: #FFFFFF;
  --file-header-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --file-header-font-size: 14px;
  --flair-color: #262626;
  --font-default: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --font-interface: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --font-mermaid: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --font-monospace: "IBM Plex Mono", Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  --font-text: '??', '??', "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --font-ui-small: 14px;
  --footnote-divider-color: #8D8D8D;
  --footnote-radius: 0px;
  --graph-node-focused: #0f62fe;
  --graph-text: #262626;
  --h1-weight: 400;
  --h2-weight: 400;
  --hr-color: #8D8D8D;
  --icon-color: #262626;
  --icon-color-active: #0f62fe;
  --icon-color-focused: #000000;
  --icon-color-hover: #262626;
  --inactive-tab-background: #262626;
  --inline-title-weight: 400;
  --input-disabled-border-color: transparent;
  --input-height: 40px;
  --input-hover-border-color: black;
  --input-radius: 0px;
  --input-unfocused-border-color: transparent;
  --interactive-accent: rgb(36, 116, 255);
  --interactive-accent-hover: hsl(216, 100.98%, 60.95%);
  --interactive-accent-hsl: 219, 99%, 53%;
  --link-color: #0f62fe;
  --link-color-hover: hsl(216, 100.98%, 60.95%);
  --link-external-color: #0f62fe;
  --link-external-color-hover: hsl(216, 100.98%, 60.95%);
  --link-unresolved-color: #0f62fe;
  --link-unresolved-decoration-color: rgba(16, 100, 254, 0.3);
  --list-bullet-size: 0.4em;
  --list-indent: 1.75em;
  --list-marker-color: #262626;
  --list-marker-color-collapsed: #0f62fe;
  --list-spacing: 0.05em;
  --menu-background: #F4F4F4;
  --menu-border-color: transparent;
  --menu-radius: 0px;
  --metadata-border-color: #8D8D8D;
  --metadata-divider-color: #8D8D8D;
  --metadata-input-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --metadata-input-text-color: #262626;
  --metadata-label-font: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: #FFFFFF;
  --modal-radius: 0px;
  --nav-heading-color: #262626;
  --nav-heading-color-hover: #262626;
  --nav-item-background-selected: rgba(16, 100, 254, 0.15);
  --nav-item-color-active: #262626;
  --nav-item-color-highlighted: #0f62fe;
  --nav-item-color-hover: #262626;
  --nav-item-color-selected: #262626;
  --nav-item-radius: 0px;
  --nav-item-size: 14px;
  --nav-tag-radius: 0px;
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --pill-border-color: #8D8D8D;
  --pill-border-color-hover: transparent;
  --pill-color-hover: #262626;
  --pill-color-remove-hover: #0f62fe;
  --prompt-background: #FFFFFF;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #FFFFFF;
  --scrollbar-radius: 0px;
  --search-result-background: #FFFFFF;
  --setting-group-heading-color: #262626;
  --setting-items-border-color: #8D8D8D;
  --setting-items-radius: 0px;
  --slider-thumb-border-color: transparent;
  --slider-thumb-radius: 0px;
  --slider-track-background: #8D8D8D;
  --status-bar-background: #F4F4F4;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0px 0 0 0;
  --suggestion-background: #FFFFFF;
  --tab-background-active: #FFFFFF;
  --tab-container-background: #F4F4F4;
  --tab-divider-color: transparent;
  --tab-font-size: 14px;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: #F4F4F4;
  --tab-switcher-menubar-background: linear-gradient(to top, #F4F4F4, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(16, 100, 254);
  --tab-text-color: #8D8D8D;
  --tab-text-color-focused: #8D8D8D;
  --tab-text-color-focused-active-current: #262626;
  --tab-text-color-focused-highlighted: #0f62fe;
  --table-add-button-border-color: #8D8D8D;
  --table-border-color: #8D8D8D;
  --table-borders: #C6C6C6;
  --table-drag-handle-background-active: rgb(36, 116, 255);
  --table-header-border-color: #8D8D8D;
  --table-header-color: #262626;
  --table-headers: #e8e8e8;
  --table-selection: rgba(16, 100, 254, 0.1);
  --table-selection-border-color: rgb(36, 116, 255);
  --tag-background: rgba(16, 100, 254, 0.1);
  --tag-background-hover: rgba(16, 100, 254, 0.2);
  --tag-border-color: rgba(16, 100, 254, 0.15);
  --tag-border-color-hover: rgba(16, 100, 254, 0.15);
  --tag-color: #0f62fe;
  --tag-color-hover: #0f62fe;
  --text-accent: #0f62fe;
  --text-accent-hover: hsl(216, 100.98%, 60.95%);
  --text-error: #da1e28;
  --text-highlight-bg: #d0e2ff;
  --text-normal: #262626;
  --text-selection: rgba(16, 100, 254, 0.2);
  --titlebar-background: #000000;
  --titlebar-background-focused: #000000;
  --titlebar-border-color: #8D8D8D;
  --titlebar-text-color-focused: #262626;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #262626;
  --vault-profile-color-hover: #262626;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 244, 244);
  color: rgb(38, 38, 38);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 244, 244);
  color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 244, 244);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  color: rgb(38, 38, 38);
}

body div#quartz-root {
  color: rgb(38, 38, 38);
}`,
    typography: `body .page article p > b, b {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > em, em {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > i, i {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > strong, strong {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .text-highlight {
  background-color: rgb(208, 226, 255);
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body del {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: line-through rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body p {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(15, 98, 254);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(15, 98, 254) none 0px;
  text-decoration: underline rgb(15, 98, 254);
  text-decoration-color: rgb(15, 98, 254);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(15, 98, 254);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(15, 98, 254) none 0px;
  text-decoration: underline rgb(15, 98, 254);
  text-decoration-color: rgb(15, 98, 254);
}

body a.internal.broken {
  color: rgb(15, 98, 254);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(15, 98, 254) none 0px;
  text-decoration: underline rgba(16, 100, 254, 0.3);
  text-decoration-color: rgba(16, 100, 254, 0.3);
}`,
    lists: `body dd {
  color: rgb(38, 38, 38);
}

body dt {
  color: rgb(38, 38, 38);
}

body ol > li {
  color: rgb(38, 38, 38);
}

body ol.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body ul > li {
  color: rgb(38, 38, 38);
}

body ul.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    tables: `body .table-container {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body table {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  width: 187.484px;
}

body td {
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

body th {
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

body thead {
  background-color: rgb(232, 232, 232);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body figcaption {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body figure {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .transclude {
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

body .transclude-inner {
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
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(141, 141, 141);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(38, 38, 38);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(16, 100, 254, 0.1);
  border-bottom-color: rgba(16, 100, 254, 0.15);
  border-left-color: rgba(16, 100, 254, 0.15);
  border-right-color: rgba(16, 100, 254, 0.15);
  border-top-color: rgba(16, 100, 254, 0.15);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(15, 98, 254);
}

body h1 {
  color: rgb(15, 98, 254);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h2 {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(15, 98, 254);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h3 {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h4 {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h5 {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body h6 {
  color: rgb(38, 38, 38);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 500;
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body li.section-li > .section .meta {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(141, 141, 141);
  stroke: rgb(141, 141, 141);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .breadcrumb-element p {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .metadata {
  background-color: rgb(232, 232, 232);
  border-bottom-color: rgb(141, 141, 141);
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body .metadata-properties {
  background-color: rgb(244, 244, 244);
  font-family: "??", "??", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body .navigation-progress {
  background-color: rgb(244, 244, 244);
}

body .page-header h2.page-title {
  color: rgb(38, 38, 38);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}

body abbr {
  color: rgb(38, 38, 38);
  text-decoration: underline dotted rgb(38, 38, 38);
}

body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body input[type=text] {
  border-bottom-color: rgb(141, 141, 141);
  border-bottom-width: 1px;
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body sub {
  color: rgb(38, 38, 38);
}

body summary {
  color: rgb(38, 38, 38);
}

body sup {
  color: rgb(38, 38, 38);
}`,
  },
};
