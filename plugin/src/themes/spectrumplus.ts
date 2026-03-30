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
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
  outline: rgb(201, 201, 201) none 0px;
  text-decoration-color: rgb(201, 201, 201);
}

html body del {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
  outline: rgb(201, 201, 201) none 0px;
  text-decoration-color: rgb(201, 201, 201);
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
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(36, 36, 36);
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
    scrollbars: `html body ::-webkit-scrollbar {
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
}`,
  },
  light: {},
};
