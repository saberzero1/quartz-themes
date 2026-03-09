import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "spectrum",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-1: rgb(245, 112, 76);
  --accent-1-rgb: 245, 112, 76;
  --accent-2: rgb(245, 161, 76);
  --accent-2-rgb: 245, 161, 76;
  --accent-3: rgb(237, 228, 130);
  --accent-3-rgb: 237, 228, 130;
  --accent-4: rgb(170, 222, 98);
  --accent-4-rgb: 170, 222, 98;
  --accent-5: rgb(98, 222, 172);
  --accent-5-rgb: 98, 222, 172;
  --accent-6: rgb(98, 183, 222);
  --accent-6-rgb: 98, 183, 222;
  --attachments: rgb(105, 188, 235);
  --attachments-rgb: 105, 188, 235;
  --background-modifier-error: #cf2d2d;
  --background-modifier-error-hover: #a72020;
  --background-primary: rgb(36, 36, 36);
  --background-secondary: rgb(27, 27, 27);
  --bases-cards-background: rgb(36, 36, 36);
  --bases-table-cell-background-active: rgb(36, 36, 36);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 190, 0);
  --bases-table-header-background: rgb(36, 36, 36);
  --bases-table-summary-background: rgb(36, 36, 36);
  --blockquote-border-color: rgb(255, 190, 0);
  --canvas-background: rgb(36, 36, 36);
  --caret-color: rgb(201, 201, 201);
  --chart-color-1: rgb(245, 112, 76);
  --chart-color-2: rgb(245, 161, 76);
  --chart-color-3: #b7ad3a;
  --chart-color-4: #8ac536;
  --chart-color-5: #3cad7f;
  --chart-color-6: rgb(98, 183, 222);
  --checkbox-color: rgb(255, 190, 0);
  --checkbox-color-hover: rgb(254, 106, 38);
  --checkbox-marker-color: rgb(36, 36, 36);
  --code-normal: rgb(201, 201, 201);
  --collapse-icon-color-collapsed: rgb(255, 190, 0);
  --default-font: "JetBrains Mono", monospace;
  --divider-color-hover: rgb(255, 190, 0);
  --embed-border-start: 2px solid rgb(255, 190, 0);
  --external-link: rgb(130, 210, 232);
  --external-link-hidden: rgba(131, 197, 235, 0.3);
  --external-link-hidden-rgb: 131, 197, 235;
  --external-link-rgb: 130, 210, 232;
  --file-header-background: rgb(36, 36, 36);
  --file-header-background-focused: rgb(36, 36, 36);
  --file-header-font: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: rgb(201, 201, 201);
  --font-interface: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "JetBrains Mono", monospace;
  --font-size-2xl: 1.5em;
  --font-size-3xl: 1.875em;
  --font-size-base: 1em;
  --font-size-lg: 1.125em;
  --font-size-sm: 0.875em;
  --font-size-xl: 1.25em;
  --font-size-xs: 0.78em;
  --graph-node-focused: rgb(255, 190, 0);
  --graph-text: rgb(201, 201, 201);
  --header-height: 42px;
  --icon-color-active: rgb(255, 190, 0);
  --icon-color-focused: rgb(201, 201, 201);
  --interactive-accent: rgb(255, 190, 0);
  --interactive-accent-hover: rgb(254, 106, 38);
  --link-color: rgb(255, 190, 0);
  --link-color-hover: rgb(254, 106, 38);
  --link-external-color: rgb(255, 190, 0);
  --link-external-color-hover: rgb(254, 106, 38);
  --link-unresolved-color: rgb(255, 190, 0);
  --list-marker: 1.5rem;
  --list-marker-color-collapsed: rgb(255, 190, 0);
  --list-marker-num: 1.5;
  --list-padding: 1.5em;
  --list-padding-num: 2.5;
  --main-background: rgb(36, 36, 36);
  --main-background-rgb: 36, 36, 36;
  --main-node: rgb(255, 190, 0);
  --main-node-hover: rgb(254, 106, 38);
  --main-node-hover-rgb: 254, 106, 38;
  --main-node-rgb: 255, 190, 0;
  --max-width-text: 750px;
  --menu-background: rgb(27, 27, 27);
  --metadata-input-font: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(201, 201, 201);
  --metadata-label-font: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: rgb(36, 36, 36);
  --monochrome-color: rgb(255, 85, 0);
  --nav-heading-color: rgb(201, 201, 201);
  --nav-heading-color-hover: rgb(201, 201, 201);
  --nav-item-color-active: rgb(201, 201, 201);
  --nav-item-color-highlighted: rgb(255, 190, 0);
  --nav-item-color-hover: rgb(201, 201, 201);
  --nav-item-color-selected: rgb(201, 201, 201);
  --pdf-background: rgb(36, 36, 36);
  --pdf-page-background: rgb(36, 36, 36);
  --pdf-sidebar-background: rgb(36, 36, 36);
  --pill-color-hover: rgb(201, 201, 201);
  --pill-color-remove-hover: rgb(255, 190, 0);
  --prompt-background: rgb(36, 36, 36);
  --ribbon-background: rgb(27, 27, 27);
  --ribbon-background-collapsed: rgb(36, 36, 36);
  --ribbon-width: 40px;
  --search-result-background: rgb(36, 36, 36);
  --secondary-background: rgb(27, 27, 27);
  --secondary-background-low-opacity: rgba(27, 27, 27, 0.329);
  --secondary-background-rgb: 27, 27, 27;
  --setting-group-heading-color: rgb(201, 201, 201);
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
  --spectrum-hue: 20;
  --spectrum-side-docks: 0 0 40px;
  --status-bar-background: rgb(27, 27, 27);
  --suggestion-background: rgb(36, 36, 36);
  --tab-background-active: rgb(36, 36, 36);
  --tab-container-background: rgb(27, 27, 27);
  --tab-stacked-header-width: 42px;
  --tab-switcher-background: rgb(27, 27, 27);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(27, 27, 27), transparent);
  --tab-text-color-focused-active-current: rgb(201, 201, 201);
  --tab-text-color-focused-highlighted: rgb(255, 190, 0);
  --table-drag-handle-background-active: rgb(255, 190, 0);
  --table-drag-handle-color-active: black;
  --table-header-color: rgb(201, 201, 201);
  --table-selection-border-color: rgb(255, 190, 0);
  --tag-color: rgb(255, 190, 0);
  --tag-color-hover: rgb(255, 190, 0);
  --tags: rgb(241, 158, 238);
  --tags-rgb: 241, 158, 238;
  --text-accent: rgb(255, 190, 0);
  --text-accent-hover: rgb(254, 106, 38);
  --text-highlight-bg: #e9b35f;
  --text-normal: rgb(201, 201, 201);
  --text-on-accent: black;
  --titlebar-background: rgb(27, 27, 27);
  --titlebar-text-color-focused: rgb(201, 201, 201);
  --traffic-lights-offset-x: 42px;
  --traffic-lights-offset-y: 42px;
  --vault-profile-color: rgb(201, 201, 201);
  --vault-profile-color-hover: rgb(201, 201, 201);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 27, 27);
  color: rgb(201, 201, 201);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(36, 36, 36);
  color: rgb(201, 201, 201);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 27, 27);
  color: rgb(201, 201, 201);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 27, 27);
  color: rgb(201, 201, 201);
}

body div#quartz-root {
  background-color: rgb(36, 36, 36);
  color: rgb(201, 201, 201);
}`,
    typography: `body .page article p > b, b {
  color: rgb(245, 112, 76);
  font-family: "JetBrains Mono";
  font-weight: 900;
  outline: rgb(245, 112, 76) none 0px;
  text-decoration: rgb(245, 112, 76);
  text-decoration-color: rgb(245, 112, 76);
}

body .page article p > em, em {
  color: rgb(237, 228, 130);
  font-family: "JetBrains Mono";
  outline: rgb(237, 228, 130) none 0px;
  text-decoration: rgb(237, 228, 130);
  text-decoration-color: rgb(237, 228, 130);
}

body .page article p > i, i {
  color: rgb(237, 228, 130);
  font-family: "JetBrains Mono";
  outline: rgb(237, 228, 130) none 0px;
  text-decoration: rgb(237, 228, 130);
  text-decoration-color: rgb(237, 228, 130);
}

body .page article p > strong, strong {
  color: rgb(245, 112, 76);
  font-family: "JetBrains Mono";
  font-weight: 900;
  outline: rgb(245, 112, 76) none 0px;
  text-decoration: rgb(245, 112, 76);
  text-decoration-color: rgb(245, 112, 76);
}

body .text-highlight {
  background-color: rgb(233, 179, 95);
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
  outline: rgb(201, 201, 201) none 0px;
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body del {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
  outline: rgb(201, 201, 201) none 0px;
  text-decoration: line-through rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body p {
  font-family: "JetBrains Mono";
}`,
    links: `body a.external, footer a {
  color: rgb(130, 210, 232);
  font-family: "JetBrains Mono";
  outline: rgb(130, 210, 232) none 0px;
  text-decoration: underline rgb(130, 210, 232);
  text-decoration-color: rgb(130, 210, 232);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 190, 0);
  font-family: "JetBrains Mono";
  outline: rgb(255, 190, 0) none 0px;
  text-decoration: underline rgb(255, 190, 0);
  text-decoration-color: rgb(255, 190, 0);
}

body a.internal.broken {
  color: rgb(255, 190, 0);
  font-family: "JetBrains Mono";
  outline: rgb(255, 190, 0) none 0px;
}`,
    lists: `body dd {
  color: rgb(201, 201, 201);
}

body dt {
  color: rgb(201, 201, 201);
}

body ol > li {
  color: rgb(201, 201, 201);
}

body ol.overflow {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body ul > li {
  color: rgb(201, 201, 201);
}

body ul.overflow {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(255, 190, 0);
  text-decoration: rgb(255, 190, 0);
}

body blockquote {
  font-family: "JetBrains Mono";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body table {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
  width: 750px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.204);
}

body td {
  color: rgb(201, 201, 201);
}

body th {
  color: rgb(201, 201, 201);
}`,
    code: `body code {
  border-bottom-color: rgb(193, 181, 148);
  border-left-color: rgb(193, 181, 148);
  border-right-color: rgb(193, 181, 148);
  border-top-color: rgb(193, 181, 148);
  color: rgb(193, 181, 148);
  font-family: "JetBrains Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}`,
    images: `body audio {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body figcaption {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}

body figure {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body img {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body video {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

body .transclude {
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

body .transclude-inner {
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
    checkboxes: `body .katex-display > .katex {
  font-family: "JetBrains Mono";
}

body .katex-display > .katex > .katex-html {
  font-family: "JetBrains Mono";
}

body .page article li:has(>input[type=checkbox]:checked) {
  text-decoration: rgb(179, 179, 179);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='*'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='-'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='/'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='>'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='?'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='I'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='S'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='b'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='c'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='d'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='f'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='i'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='k'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='l'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='p'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='u'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body li.task-list-item[data-task='w'] {
  color: rgb(201, 201, 201);
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}`,
    search: `body .search > .search-button {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}

body .search > .search-container > .search-space {
  background-color: rgb(36, 36, 36);
}

body .search > .search-container > .search-space > * {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
  outline: rgb(201, 201, 201) none 0px;
  text-decoration: rgb(201, 201, 201);
  text-decoration-color: rgb(201, 201, 201);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(201, 201, 201);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(201, 201, 201);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(201, 201, 201);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(201, 201, 201);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "JetBrains Mono";
}

body a.internal.tag-link::before {
  color: rgb(255, 190, 0);
}

body h1 {
  color: rgb(245, 112, 76);
  font-family: "JetBrains Mono";
}

body h2 {
  color: rgb(245, 161, 76);
  font-family: "JetBrains Mono";
}

body h2.page-title, h2.page-title a {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}

body h3 {
  color: rgb(237, 228, 130);
  font-family: "JetBrains Mono";
}

body h4 {
  color: rgb(170, 222, 98);
  font-family: "JetBrains Mono";
}

body h5 {
  color: rgb(98, 222, 172);
  font-family: "JetBrains Mono";
}

body h6 {
  color: rgb(98, 183, 222);
  font-family: "JetBrains Mono";
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-corner {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-track {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "JetBrains Mono";
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "JetBrains Mono";
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "JetBrains Mono";
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}`,
    footer: `body footer {
  background-color: rgb(27, 27, 27);
  font-family: "JetBrains Mono";
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "JetBrains Mono";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body li.section-li > .section .meta {
  font-family: "JetBrains Mono";
}

body ul.section-ul {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "JetBrains Mono";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

body .metadata {
  font-family: "JetBrains Mono";
}

body .metadata-properties {
  font-family: "JetBrains Mono";
}

body .navigation-progress {
  background-color: rgb(27, 27, 27);
}

body .page-header h2.page-title {
  color: rgb(201, 201, 201);
  font-family: "JetBrains Mono";
}

body abbr {
  color: rgb(201, 201, 201);
  text-decoration: underline dotted rgb(201, 201, 201);
}

body details {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body input[type=text] {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body sub {
  color: rgb(201, 201, 201);
}

body summary {
  color: rgb(201, 201, 201);
}

body sup {
  color: rgb(201, 201, 201);
}`,
  },
  light: {
    base: `:root:root {
  --accent-1: rgb(245, 112, 76);
  --accent-1-rgb: 245, 112, 76;
  --accent-2: rgb(245, 161, 76);
  --accent-2-rgb: 245, 161, 76;
  --accent-3: #b7ad3a;
  --accent-3-rgb: 237, 228, 130;
  --accent-4: #8ac536;
  --accent-4-rgb: 170, 222, 98;
  --accent-5: #3cad7f;
  --accent-5-rgb: 98, 222, 172;
  --accent-6: rgb(98, 183, 222);
  --accent-6-rgb: 98, 183, 222;
  --attachments: rgb(105, 188, 235);
  --attachments-rgb: 105, 188, 235;
  --background-modifier-error: #cf2d2d;
  --background-modifier-error-hover: #a72020;
  --background-primary: #f5f5f5;
  --background-secondary: #e2e2e2;
  --bases-cards-background: #f5f5f5;
  --bases-table-cell-background-active: #f5f5f5;
  --bases-table-cell-shadow-focus: 0 0 0 2px #dea500;
  --bases-table-header-background: #f5f5f5;
  --bases-table-summary-background: #f5f5f5;
  --blockquote-border-color: #dea500;
  --blur-background: color-mix(in srgb, #f5f5f5 65%, transparent) linear-gradient(#f5f5f5, color-mix(in srgb, #f5f5f5 65%, transparent));
  --canvas-background: #f5f5f5;
  --chart-color-1: rgb(245, 112, 76);
  --chart-color-2: rgb(245, 161, 76);
  --chart-color-3: #b7ad3a;
  --chart-color-4: #8ac536;
  --chart-color-5: #3cad7f;
  --chart-color-6: rgb(98, 183, 222);
  --checkbox-color: #dea500;
  --checkbox-color-hover: rgb(254, 106, 38);
  --checkbox-marker-color: #f5f5f5;
  --collapse-icon-color-collapsed: #dea500;
  --default-font: "JetBrains Mono", monospace;
  --divider-color-hover: #dea500;
  --embed-border-start: 2px solid #dea500;
  --external-link: #307a8e;
  --external-link-hidden: #307a8e99;
  --external-link-hidden-rgb: 131, 197, 235;
  --external-link-rgb: 130, 210, 232;
  --file-header-background: #f5f5f5;
  --file-header-background-focused: #f5f5f5;
  --file-header-font: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "JetBrains Mono", monospace;
  --font-size-2xl: 1.5em;
  --font-size-3xl: 1.875em;
  --font-size-base: 1em;
  --font-size-lg: 1.125em;
  --font-size-sm: 0.875em;
  --font-size-xl: 1.25em;
  --font-size-xs: 0.78em;
  --graph-node-focused: #dea500;
  --header-height: 42px;
  --icon-color-active: #dea500;
  --interactive-accent: #dea500;
  --interactive-accent-hover: rgb(254, 106, 38);
  --link-color: #dea500;
  --link-color-hover: rgb(254, 106, 38);
  --link-external-color: #dea500;
  --link-external-color-hover: rgb(254, 106, 38);
  --link-unresolved-color: #dea500;
  --list-marker: 1.5rem;
  --list-marker-color-collapsed: #dea500;
  --list-marker-num: 1.5;
  --list-padding: 1.5em;
  --list-padding-num: 2.5;
  --main-background: #f5f5f5;
  --main-background-rgb: 36, 36, 36;
  --main-node: #dea500;
  --main-node-hover: rgb(254, 106, 38);
  --main-node-hover-rgb: 254, 106, 38;
  --main-node-rgb: 255, 190, 0;
  --max-width-text: 750px;
  --menu-background: #e2e2e2;
  --metadata-input-font: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #f5f5f5;
  --monochrome-color: rgb(255, 85, 0);
  --nav-item-color-highlighted: #dea500;
  --pdf-background: #f5f5f5;
  --pdf-page-background: #f5f5f5;
  --pdf-sidebar-background: #f5f5f5;
  --pill-color-remove-hover: #dea500;
  --prompt-background: #f5f5f5;
  --raised-background: color-mix(in srgb, #f5f5f5 65%, transparent) linear-gradient(#f5f5f5, color-mix(in srgb, #f5f5f5 65%, transparent));
  --ribbon-background: #e2e2e2;
  --ribbon-background-collapsed: #f5f5f5;
  --ribbon-width: 40px;
  --search-result-background: #f5f5f5;
  --secondary-background: #e2e2e2;
  --secondary-background-low-opacity: #e2e2e254;
  --secondary-background-rgb: 27, 27, 27;
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
  --spectrum-hue: 20;
  --spectrum-side-docks: 0 0 40px;
  --status-bar-background: #e2e2e2;
  --suggestion-background: #f5f5f5;
  --tab-background-active: #f5f5f5;
  --tab-container-background: #e2e2e2;
  --tab-stacked-header-width: 42px;
  --tab-switcher-background: #e2e2e2;
  --tab-switcher-menubar-background: linear-gradient(to top, #e2e2e2, transparent);
  --tab-text-color-focused-highlighted: #dea500;
  --table-drag-handle-background-active: #dea500;
  --table-selection-border-color: #dea500;
  --tag-color: #dea500;
  --tag-color-hover: #dea500;
  --tags: rgb(241, 158, 238);
  --tags-rgb: 241, 158, 238;
  --text-accent: #dea500;
  --text-accent-hover: rgb(254, 106, 38);
  --text-highlight-bg: #e9b35f;
  --titlebar-background: #e2e2e2;
  --traffic-lights-offset-x: 42px;
  --traffic-lights-offset-y: 42px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(226, 226, 226);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 245, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(226, 226, 226);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(226, 226, 226);
}

body div#quartz-root {
  background-color: rgb(245, 245, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(245, 112, 76);
  font-family: "JetBrains Mono";
  font-weight: 900;
  outline: rgb(245, 112, 76) none 0px;
  text-decoration: rgb(245, 112, 76);
  text-decoration-color: rgb(245, 112, 76);
}

body .page article p > em, em {
  color: rgb(183, 173, 58);
  font-family: "JetBrains Mono";
  outline: rgb(183, 173, 58) none 0px;
  text-decoration: rgb(183, 173, 58);
  text-decoration-color: rgb(183, 173, 58);
}

body .page article p > i, i {
  color: rgb(183, 173, 58);
  font-family: "JetBrains Mono";
  outline: rgb(183, 173, 58) none 0px;
  text-decoration: rgb(183, 173, 58);
  text-decoration-color: rgb(183, 173, 58);
}

body .page article p > strong, strong {
  color: rgb(245, 112, 76);
  font-family: "JetBrains Mono";
  font-weight: 900;
  outline: rgb(245, 112, 76) none 0px;
  text-decoration: rgb(245, 112, 76);
  text-decoration-color: rgb(245, 112, 76);
}

body .text-highlight {
  background-color: rgb(233, 179, 95);
  font-family: "JetBrains Mono";
}

body del {
  font-family: "JetBrains Mono";
}

body p {
  font-family: "JetBrains Mono";
}`,
    links: `body a.external, footer a {
  color: rgb(48, 122, 142);
  font-family: "JetBrains Mono";
  outline: rgb(48, 122, 142) none 0px;
  text-decoration: underline rgb(48, 122, 142);
  text-decoration-color: rgb(48, 122, 142);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(222, 165, 0);
  font-family: "JetBrains Mono";
  outline: rgb(222, 165, 0) none 0px;
  text-decoration: underline rgb(222, 165, 0);
  text-decoration-color: rgb(222, 165, 0);
}

body a.internal.broken {
  color: rgb(222, 165, 0);
  font-family: "JetBrains Mono";
  outline: rgb(222, 165, 0) none 0px;
}`,
    lists: `body ol.overflow {
  background-color: rgb(245, 245, 245);
}

body ul.overflow {
  background-color: rgb(245, 245, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(222, 165, 0);
  text-decoration: rgb(222, 165, 0);
}

body blockquote {
  font-family: "JetBrains Mono";
}`,
    tables: `body table {
  font-family: "JetBrains Mono";
  width: 750px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.204);
}`,
    code: `body code {
  border-bottom-color: rgb(193, 181, 148);
  border-left-color: rgb(193, 181, 148);
  border-right-color: rgb(193, 181, 148);
  border-top-color: rgb(193, 181, 148);
  color: rgb(193, 181, 148);
  font-family: "JetBrains Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  font-family: "JetBrains Mono";
}`,
    images: `body figcaption {
  font-family: "JetBrains Mono";
}`,
    embeds: `body .file-embed {
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

body .transclude {
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

body .transclude-inner {
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
    checkboxes: `body .katex-display > .katex {
  font-family: "JetBrains Mono";
}

body .katex-display > .katex > .katex-html {
  font-family: "JetBrains Mono";
}

body .page article li:has(>input[type=checkbox]:checked) {
  text-decoration: rgb(92, 92, 92);
}

body input[type=checkbox] {
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 1.66667px;
  border-bottom-right-radius: 1.66667px;
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 1.66667px;
  border-top-right-radius: 1.66667px;
  margin-bottom: 1.66667px;
  margin-right: 3.33333px;
  width: 20px;
}`,
    search: `body .search > .search-button {
  font-family: "JetBrains Mono";
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > * {
  font-family: "JetBrains Mono";
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(226, 226, 226);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "JetBrains Mono";
}

body a.internal.tag-link::before {
  color: rgb(222, 165, 0);
}

body h1 {
  color: rgb(245, 112, 76);
  font-family: "JetBrains Mono";
}

body h2 {
  color: rgb(245, 161, 76);
  font-family: "JetBrains Mono";
}

body h2.page-title, h2.page-title a {
  font-family: "JetBrains Mono";
}

body h3 {
  color: rgb(183, 173, 58);
  font-family: "JetBrains Mono";
}

body h4 {
  color: rgb(138, 197, 54);
  font-family: "JetBrains Mono";
}

body h5 {
  color: rgb(60, 173, 127);
  font-family: "JetBrains Mono";
}

body h6 {
  color: rgb(98, 183, 222);
  font-family: "JetBrains Mono";
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "JetBrains Mono";
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "JetBrains Mono";
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "JetBrains Mono";
}`,
    footer: `body footer {
  background-color: rgb(226, 226, 226);
  font-family: "JetBrains Mono";
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "JetBrains Mono";
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "JetBrains Mono";
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "JetBrains Mono";
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "JetBrains Mono";
}`,
    misc: `body .metadata {
  font-family: "JetBrains Mono";
}

body .metadata-properties {
  font-family: "JetBrains Mono";
}

body .navigation-progress {
  background-color: rgb(226, 226, 226);
}

body .page-header h2.page-title {
  font-family: "JetBrains Mono";
}

body input[type=text] {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
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
  font-family: "JetBrains Mono", monospace;
}`,
  },
};
