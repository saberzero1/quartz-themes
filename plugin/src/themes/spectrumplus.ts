import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "spectrumplus",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --accent-1: rgb(245, 112, 76) !important;
  --accent-1-rgb: 245, 112, 76 !important;
  --accent-2: rgb(245, 161, 76) !important;
  --accent-2-rgb: 245, 161, 76 !important;
  --accent-3: rgb(237, 228, 130) !important;
  --accent-3-rgb: 237, 228, 130 !important;
  --accent-4: rgb(170, 222, 98) !important;
  --accent-4-rgb: 170, 222, 98 !important;
  --accent-5: rgb(98, 222, 172) !important;
  --accent-5-rgb: 98, 222, 172 !important;
  --accent-6: rgb(98, 183, 222) !important;
  --accent-6-rgb: 98, 183, 222 !important;
  --attachments: rgb(105, 188, 235) !important;
  --attachments-rgb: 105, 188, 235 !important;
  --background-modifier-error: #cf2d2d !important;
  --background-modifier-error-hover: #a72020 !important;
  --background-primary: rgb(36, 36, 36) !important;
  --background-secondary: rgb(27, 27, 27) !important;
  --bases-cards-background: rgb(36, 36, 36) !important;
  --bases-table-cell-background-active: rgb(36, 36, 36) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 190, 0) !important;
  --bases-table-header-background: rgb(36, 36, 36) !important;
  --bases-table-summary-background: rgb(36, 36, 36) !important;
  --blockquote-border-color: rgb(255, 190, 0) !important;
  --bodyFont: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(36, 36, 36) !important;
  --caret-color: rgb(201, 201, 201) !important;
  --chart-color-1: rgb(245, 112, 76) !important;
  --chart-color-2: rgb(245, 161, 76) !important;
  --chart-color-3: #b7ad3a !important;
  --chart-color-4: #8ac536 !important;
  --chart-color-5: #3cad7f !important;
  --chart-color-6: rgb(98, 183, 222) !important;
  --checkbox-color: rgb(255, 190, 0) !important;
  --checkbox-color-hover: rgb(254, 106, 38) !important;
  --checkbox-marker-color: rgb(36, 36, 36) !important;
  --code-normal: rgb(201, 201, 201) !important;
  --codeFont: "JetBrains Mono", monospace !important;
  --collapse-icon-color-collapsed: rgb(255, 190, 0) !important;
  --dark: rgb(201, 201, 201) !important;
  --darkgray: rgb(201, 201, 201) !important;
  --default-font: "JetBrains Mono", monospace !important;
  --divider-color-hover: rgb(255, 190, 0) !important;
  --embed-border-start: 2px solid rgb(255, 190, 0) !important;
  --external-link: rgb(130, 210, 232) !important;
  --external-link-hidden: rgba(131, 197, 235, 0.3) !important;
  --external-link-hidden-rgb: 131, 197, 235 !important;
  --external-link-rgb: 130, 210, 232 !important;
  --file-header-background: rgb(36, 36, 36) !important;
  --file-header-background-focused: rgb(36, 36, 36) !important;
  --file-header-font: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: rgb(201, 201, 201) !important;
  --font-interface: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "JetBrains Mono", monospace !important;
  --font-size-2xl: 1.5em !important;
  --font-size-3xl: 1.875em !important;
  --font-size-base: 1em !important;
  --font-size-lg: 1.125em !important;
  --font-size-sm: .875em !important;
  --font-size-xl: 1.25em !important;
  --font-size-xs: .78em !important;
  --graph-node-focused: rgb(255, 190, 0) !important;
  --graph-text: rgb(201, 201, 201) !important;
  --gray: rgb(201, 201, 201) !important;
  --header-height: 42px !important;
  --headerFont: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: #e9b35f !important;
  --icon-color-active: rgb(255, 190, 0) !important;
  --icon-color-focused: rgb(201, 201, 201) !important;
  --interactive-accent: rgb(255, 190, 0) !important;
  --interactive-accent-hover: rgb(254, 106, 38) !important;
  --light: rgb(36, 36, 36) !important;
  --lightgray: rgb(27, 27, 27) !important;
  --link-color: rgb(255, 190, 0) !important;
  --link-color-hover: rgb(254, 106, 38) !important;
  --link-external-color: rgb(255, 190, 0) !important;
  --link-external-color-hover: rgb(254, 106, 38) !important;
  --link-unresolved-color: rgb(255, 190, 0) !important;
  --list-marker: 1.5rem !important;
  --list-marker-color-collapsed: rgb(255, 190, 0) !important;
  --list-marker-num: 1.5 !important;
  --list-padding: 1.5em !important;
  --list-padding-num: 2.5 !important;
  --main-background: rgb(36, 36, 36) !important;
  --main-background-rgb: 36, 36, 36 !important;
  --main-node: rgb(255, 190, 0) !important;
  --main-node-hover: rgb(254, 106, 38) !important;
  --main-node-hover-rgb: 254, 106, 38 !important;
  --main-node-rgb: 255, 190, 0 !important;
  --max-width-text: 750px !important;
  --menu-background: rgb(27, 27, 27) !important;
  --metadata-input-font: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(201, 201, 201) !important;
  --metadata-label-font: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: rgb(36, 36, 36) !important;
  --monochrome-color: hsl(20, 100%, 50%) !important;
  --nav-heading-color: rgb(201, 201, 201) !important;
  --nav-heading-color-hover: rgb(201, 201, 201) !important;
  --nav-item-color-active: rgb(201, 201, 201) !important;
  --nav-item-color-highlighted: rgb(255, 190, 0) !important;
  --nav-item-color-hover: rgb(201, 201, 201) !important;
  --nav-item-color-selected: rgb(201, 201, 201) !important;
  --pdf-background: rgb(36, 36, 36) !important;
  --pdf-page-background: rgb(36, 36, 36) !important;
  --pdf-sidebar-background: rgb(36, 36, 36) !important;
  --pill-color-hover: rgb(201, 201, 201) !important;
  --pill-color-remove-hover: rgb(255, 190, 0) !important;
  --prompt-background: rgb(36, 36, 36) !important;
  --ribbon-background: rgb(27, 27, 27) !important;
  --ribbon-background-collapsed: rgb(36, 36, 36) !important;
  --ribbon-width: 40px !important;
  --search-result-background: rgb(36, 36, 36) !important;
  --secondary: rgb(255, 190, 0) !important;
  --secondary-background: rgb(27, 27, 27) !important;
  --secondary-background-low-opacity: rgba(27, 27, 27, 0.329) !important;
  --secondary-background-rgb: 27, 27, 27 !important;
  --setting-group-heading-color: rgb(201, 201, 201) !important;
  --size-0-5: .125em !important;
  --size-1: .25em !important;
  --size-1-5: .375em !important;
  --size-12: 3em !important;
  --size-128: 32em !important;
  --size-16: 4em !important;
  --size-2: .5em !important;
  --size-2-5: .625em !important;
  --size-24: 6em !important;
  --size-3: .75em !important;
  --size-3-5: .875em !important;
  --size-32: 8em !important;
  --size-4: 1em !important;
  --size-48: 12em !important;
  --size-5: 1.25em !important;
  --size-6: 1.5em !important;
  --size-64: 16em !important;
  --size-7: 1.75em !important;
  --size-8: 2em !important;
  --size-96: 24em !important;
  --spectrum-hue: 20 !important;
  --spectrum-side-docks: 0 0 40px !important;
  --status-bar-background: rgb(27, 27, 27) !important;
  --suggestion-background: rgb(36, 36, 36) !important;
  --tab-background-active: rgb(36, 36, 36) !important;
  --tab-container-background: rgb(27, 27, 27) !important;
  --tab-stacked-header-width: 42px !important;
  --tab-switcher-background: rgb(27, 27, 27) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(27, 27, 27), transparent) !important;
  --tab-text-color-focused-active-current: rgb(201, 201, 201) !important;
  --tab-text-color-focused-highlighted: rgb(255, 190, 0) !important;
  --table-drag-handle-background-active: rgb(255, 190, 0) !important;
  --table-drag-handle-color-active: black !important;
  --table-header-color: rgb(201, 201, 201) !important;
  --table-selection-border-color: rgb(255, 190, 0) !important;
  --tag-color: rgb(255, 190, 0) !important;
  --tag-color-hover: rgb(255, 190, 0) !important;
  --tags: rgb(241, 158, 238) !important;
  --tags-rgb: 241, 158, 238 !important;
  --tertiary: rgb(254, 106, 38) !important;
  --text-accent: rgb(255, 190, 0) !important;
  --text-accent-hover: rgb(254, 106, 38) !important;
  --text-highlight-bg: #e9b35f !important;
  --text-normal: rgb(201, 201, 201) !important;
  --text-on-accent: black !important;
  --textHighlight: #e9b35f !important;
  --titleFont: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(27, 27, 27) !important;
  --titlebar-text-color-focused: rgb(201, 201, 201) !important;
  --traffic-lights-offset-x: 42px !important;
  --traffic-lights-offset-y: 42px !important;
  --vault-profile-color: rgb(201, 201, 201) !important;
  --vault-profile-color-hover: rgb(201, 201, 201) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 27, 27);
  color: rgb(201, 201, 201);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(36, 36, 36);
  color: rgb(201, 201, 201);
}

html body .bases-table thead th {
  color: rgb(201, 201, 201);
}

html body .canvas-node {
  border-color: rgb(201, 201, 201);
}

html body .canvas-node-content {
  color: rgb(201, 201, 201);
}

html body .canvas-node-file {
  color: rgb(201, 201, 201);
}

html body .canvas-node-group {
  border-color: rgb(201, 201, 201);
}

html body .canvas-sidebar {
  background-color: rgb(27, 27, 27);
  border-color: rgb(201, 201, 201);
}

html body .note-properties-tags {
  color: rgb(255, 190, 0);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 27, 27);
  color: rgb(201, 201, 201);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 27, 27);
  color: rgb(201, 201, 201);
}

html body div#quartz-root {
  background-color: rgb(36, 36, 36);
  color: rgb(201, 201, 201);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(245, 112, 76);
  font-family: "JetBrains Mono";
  font-weight: 900;
  outline: rgb(245, 112, 76) none 0px;
  text-decoration-color: rgb(245, 112, 76);
}

html body .page article p > em, html em {
  color: rgb(237, 228, 130);
  font-family: "JetBrains Mono";
  outline: rgb(237, 228, 130) none 0px;
  text-decoration-color: rgb(237, 228, 130);
}

html body .page article p > i, html i {
  color: rgb(237, 228, 130);
  font-family: "JetBrains Mono";
  outline: rgb(237, 228, 130) none 0px;
  text-decoration-color: rgb(237, 228, 130);
}

html body .page article p > strong, html strong {
  color: rgb(245, 112, 76);
  font-family: "JetBrains Mono";
  font-weight: 900;
  outline: rgb(245, 112, 76) none 0px;
  text-decoration-color: rgb(245, 112, 76);
}

html body .text-highlight {
  background-color: rgb(233, 179, 95);
  color: rgb(36, 36, 36);
  font-family: "JetBrains Mono";
  font-weight: 600;
  outline: rgb(36, 36, 36) none 0px;
  text-decoration-color: rgb(36, 36, 36);
}

html body del {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
  outline: rgb(201, 201, 201) none 0px;
  text-decoration-color: rgb(201, 201, 201);
}

html body h1.article-title {
  color: rgb(201, 201, 201);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 190, 0);
  border-color: rgb(255, 255, 255);
}

html body p {
  font-family: "JetBrains Mono";
}`,
    links: `html body a.external, html footer a {
  color: rgb(130, 210, 232);
  font-family: "JetBrains Mono";
  outline: rgb(130, 210, 232) none 0px;
  text-decoration-color: rgb(130, 210, 232);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 190, 0);
  font-family: "JetBrains Mono";
  outline: rgb(255, 190, 0) none 0px;
  text-decoration-color: rgb(255, 190, 0);
}

html body a.internal.broken {
  color: rgb(255, 190, 0);
  font-family: "JetBrains Mono";
  outline: rgb(255, 190, 0) none 0px;
}`,
    lists: `html body dd {
  color: rgb(201, 201, 201);
}

html body dt {
  color: rgb(201, 201, 201);
}

html body ol > li {
  color: rgb(201, 201, 201);
}

html body ol.overflow {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body ul > li {
  color: rgb(201, 201, 201);
}

html body ul.overflow {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(255, 190, 0);
}

html body blockquote {
  font-family: "JetBrains Mono";
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body table {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
  width: 150.219px;
}

html body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.204);
}

html body td {
  color: rgb(201, 201, 201);
}

html body th {
  color: rgb(201, 201, 201);
}`,
    code: `html body code {
  border-bottom-color: rgb(193, 181, 148);
  border-left-color: rgb(193, 181, 148);
  border-right-color: rgb(193, 181, 148);
  border-top-color: rgb(193, 181, 148);
  color: rgb(193, 181, 148);
  font-family: "JetBrains Mono", monospace;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}`,
    images: `html body audio {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body figcaption {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}

html body figure {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body img {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body video {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 8.75px;
  border-bottom-right-radius: 8.75px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 8.75px;
  border-top-right-radius: 8.75px;
  border-top-style: solid;
  border-top-width: 1px;
}

html body .footnotes {
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

html body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 1px;
}

html body .transclude-inner {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-style: solid;
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-right-style: solid;
  border-top-color: rgb(201, 201, 201);
  border-top-style: solid;
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "JetBrains Mono";
}

html body .katex-display > .katex > .katex-html {
  font-family: "JetBrains Mono";
}

html body input[type=checkbox] {
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 1.66667px;
  border-bottom-right-radius: 1.66667px;
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 1.66667px;
  border-top-right-radius: 1.66667px;
  margin-bottom: 1.66667px;
  margin-right: 3.33333px;
  width: 20px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
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
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}

html body .search > .search-container > .search-space {
  background-color: rgb(36, 36, 36);
}

html body .search > .search-container > .search-space > * {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
  outline: rgb(201, 201, 201) none 0px;
  text-decoration-color: rgb(201, 201, 201);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(201, 201, 201);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(201, 201, 201);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(201, 201, 201);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(201, 201, 201);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "JetBrains Mono";
}

html body a.internal.tag-link::before {
  color: rgb(255, 190, 0);
}

html body h1 {
  color: rgb(245, 112, 76);
  font-family: "JetBrains Mono";
}

html body h2 {
  color: rgb(245, 161, 76);
  font-family: "JetBrains Mono";
}

html body h2.page-title, html h2.page-title a {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}

html body h3 {
  color: rgb(237, 228, 130);
  font-family: "JetBrains Mono";
}

html body h4 {
  color: rgb(170, 222, 98);
  font-family: "JetBrains Mono";
}

html body h5 {
  color: rgb(98, 222, 172);
  font-family: "JetBrains Mono";
}

html body h6 {
  color: rgb(98, 183, 222);
  font-family: "JetBrains Mono";
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html body ::-webkit-scrollbar-track {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "JetBrains Mono";
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "JetBrains Mono";
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(201, 201, 201);
}`,
    footer: `html body footer {
  background-color: rgb(27, 27, 27);
  font-family: "JetBrains Mono";
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "JetBrains Mono";
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body li.section-li > .section .meta {
  font-family: "JetBrains Mono";
}

html body ul.section-ul {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  font-family: "JetBrains Mono";
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

html body .metadata {
  font-family: "JetBrains Mono";
}

html body .metadata-properties {
  font-family: "JetBrains Mono";
}

html body .navigation-progress {
  background-color: rgb(27, 27, 27);
}

html body .page-header h2.page-title {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}

html body abbr {
  color: rgb(201, 201, 201);
}

html body details {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body input[type=text] {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
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
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono", monospace;
}

html body progress {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body sub {
  color: rgb(201, 201, 201);
}

html body summary {
  color: rgb(201, 201, 201);
}

html body sup {
  color: rgb(201, 201, 201);
  font-size: 11.2px;
}

html body ul.tags > li {
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
  light: {},
};
