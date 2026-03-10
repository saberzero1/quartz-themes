import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "theme-that-shall-not-be-named",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #392D15;
  --background-modifier-box-shadow: #252525;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: #000000;
  --background-modifier-form-field-highlighted: #090C0D;
  --background-modifier-form-field-hover: #000000;
  --background-modifier-success: #197300;
  --background-primary: #090C0D;
  --background-primary-alt: #252525;
  --background-secondary: #0C090D;
  --background-secondary-alt: #000000;
  --bases-cards-background: #090C0D;
  --bases-cards-cover-background: #252525;
  --bases-cards-shadow: 0 0 0 1px #392D15;
  --bases-embed-border-color: #392D15;
  --bases-table-border-color: #392D15;
  --bases-table-cell-background-active: #090C0D;
  --bases-table-cell-background-disabled: #252525;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00372A;
  --bases-table-group-background: #252525;
  --bases-table-header-background: #090C0D;
  --bases-table-summary-background: #090C0D;
  --black: #000000;
  --blockquote-border-color: #00372A;
  --blur-background: color-mix(in srgb, #575042 65%, transparent) linear-gradient(#575042, color-mix(in srgb, #575042 65%, transparent));
  --brass-base: #575042;
  --brass-bright: #B7AD97;
  --brass-compliment: #4B505D;
  --brass-dark: #3F3624;
  --brass-deep: #392D15;
  --brass-light: #8B806C;
  --canvas-background: #090C0D;
  --canvas-card-label-color: #666;
  --caret-color: #BBBBBB;
  --checkbox-border-color: #666;
  --checkbox-color: #00372A;
  --checkbox-color-hover: #090C0D;
  --checkbox-marker-color: #090C0D;
  --code-background: #252525;
  --code-border-color: #392D15;
  --code-comment: #666;
  --code-normal: #BBBBBB;
  --collapse-icon-color: #666;
  --collapse-icon-color-collapsed: #8B806C;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #392D15;
  --divider-color-hover: #00372A;
  --dropdown-background: #575042;
  --dropdown-background-hover: #3F3624;
  --embed-block-shadow-hover: 0 0 0 1px #392D15, inset 0 0 0 1px #392D15;
  --embed-border-start: 2px solid #00372A;
  --file-header-background: #090C0D;
  --file-header-background-focused: #090C0D;
  --flair-background: #575042;
  --flair-color: #BBBBBB;
  --footnote-divider-color: #392D15;
  --footnote-id-color-no-occurrences: #666;
  --graph-node-focused: #8B806C;
  --graph-node-unresolved: #666;
  --graph-text: #BBBBBB;
  --gray: var(--text-faint);
  --green-base: #00503B;
  --green-bright: #227E67;
  --green-compliment: #7B2E00;
  --green-dark: #00372A;
  --green-deep: #090C0D;
  --green-light: #0F6751;
  --heading-formatting: #666;
  --highlight: var(--text-highlight-bg);
  --hr-color: #392D15;
  --icon-color-active: #8B806C;
  --icon-color-focused: #BBBBBB;
  --input-date-separator: #666;
  --input-placeholder-color: #666;
  --interactive-accent: #00372A;
  --interactive-accent-hover: #090C0D;
  --interactive-accent-rgb: 97, 97, 97;
  --interactive-hover: #3F3624;
  --interactive-normal: #575042;
  --interactive-success: #197300;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #8B806C;
  --link-color-hover: #575042;
  --link-external-color: #8B806C;
  --link-external-color-hover: #575042;
  --link-unresolved-color: #8B806C;
  --list-marker-color: #666;
  --list-marker-color-collapsed: #8B806C;
  --menu-background: #0C090D;
  --metadata-border-color: #392D15;
  --metadata-divider-color: #392D15;
  --metadata-input-text-color: #BBBBBB;
  --modal-background: #090C0D;
  --nav-collapse-icon-color: #666;
  --nav-collapse-icon-color-collapsed: #666;
  --nav-heading-color: #BBBBBB;
  --nav-heading-color-collapsed: #666;
  --nav-heading-color-hover: #BBBBBB;
  --nav-item-color-active: #BBBBBB;
  --nav-item-color-highlighted: #8B806C;
  --nav-item-color-hover: #BBBBBB;
  --nav-item-color-selected: #BBBBBB;
  --nav-tag-color: #666;
  --pdf-background: #090C0D;
  --pdf-page-background: #090C0D;
  --pdf-shadow: 0 0 0 1px #392D15;
  --pdf-sidebar-background: #090C0D;
  --pdf-thumbnail-shadow: 0 0 0 1px #392D15;
  --pill-border-color: #392D15;
  --pill-color-hover: #BBBBBB;
  --pill-color-remove: #666;
  --pill-color-remove-hover: #8B806C;
  --prompt-background: #090C0D;
  --purple-base: #3B0050;
  --purple-bright: #66008B;
  --purple-compliment: #707700;
  --purple-dark: #22002E;
  --purple-deep: #0C090D;
  --purple-light: #51006D;
  --raised-background: color-mix(in srgb, #575042 65%, transparent) linear-gradient(#575042, color-mix(in srgb, #575042 65%, transparent));
  --ribbon-background: #0C090D;
  --ribbon-background-collapsed: #090C0D;
  --scrollbar-active-thumb-bg: rgba(238, 237, 237, 0.2);
  --scrollbar-bg: rgba(238, 237, 237, 0.05);
  --scrollbar-thumb-bg: rgba(238, 237, 237, 0.1);
  --search-result-background: #090C0D;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #BBBBBB;
  --setting-items-background: #252525;
  --setting-items-border-color: #392D15;
  --silver-base: #909090;
  --silver-bright: #EEEDED;
  --silver-compliment: #737373;
  --silver-dark: #616161;
  --silver-deep: #252525;
  --silver-light: #BBBBBB;
  --slider-track-background: #392D15;
  --status-bar-background: #0C090D;
  --status-bar-border-color: #392D15;
  --suggestion-background: #090C0D;
  --tab-background-active: #090C0D;
  --tab-container-background: #0C090D;
  --tab-outline-color: #392D15;
  --tab-switcher-background: #0C090D;
  --tab-switcher-menubar-background: linear-gradient(to top, #0C090D, transparent);
  --tab-text-color: #666;
  --tab-text-color-focused-active-current: #BBBBBB;
  --tab-text-color-focused-highlighted: #8B806C;
  --table-add-button-border-color: #392D15;
  --table-border-color: #392D15;
  --table-drag-handle-background-active: #00372A;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #BBBBBB;
  --table-header-border-color: #392D15;
  --table-header-color: #BBBBBB;
  --table-selection-border-color: #00372A;
  --tag-color: #8B806C;
  --tag-color-hover: #8B806C;
  --tertiary: var(--text-accent-hover);
  --text-accent: #8B806C;
  --text-accent-hover: #575042;
  --text-error: #ff3333;
  --text-error-hover: #990000;
  --text-faint: #666;
  --text-highlight-bg: rgba(139, 128, 108, 0.4);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted-rgb: 153, 153, 153;
  --text-normal: #BBBBBB;
  --text-on-accent: #BBBBBB;
  --text-selection: rgba(63, 54, 36, 0.99);
  --text-title-h1: #392D15;
  --text-title-h2: #3F3624;
  --text-title-h3: #575042;
  --text-title-h4: #8B806C;
  --text-title-h5: #B7AD97;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #0C090D;
  --titlebar-background-focused: #000000;
  --titlebar-border-color: #392D15;
  --titlebar-text-color-focused: #BBBBBB;
  --vault-profile-color: #BBBBBB;
  --vault-profile-color-hover: #BBBBBB;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(12, 9, 13);
  color: rgb(187, 187, 187);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(9, 12, 13);
  color: rgb(187, 187, 187);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(12, 9, 13);
  color: rgb(187, 187, 187);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(57, 45, 21);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(12, 9, 13);
  border-left-color: rgb(57, 45, 21);
  color: rgb(187, 187, 187);
}

body div#quartz-root {
  background-color: rgb(9, 12, 13);
  color: rgb(187, 187, 187);
}`,
    typography: `body .page article p > b, b {
  color: rgb(102, 0, 139);
  outline: rgb(102, 0, 139) none 0px;
  text-decoration: rgb(102, 0, 139);
  text-decoration-color: rgb(102, 0, 139);
}

body .page article p > em, em {
  color: rgb(34, 126, 103);
  outline: rgb(34, 126, 103) none 0px;
  text-decoration: rgb(34, 126, 103);
  text-decoration-color: rgb(34, 126, 103);
}

body .page article p > i, i {
  color: rgb(34, 126, 103);
  outline: rgb(34, 126, 103) none 0px;
  text-decoration: rgb(34, 126, 103);
  text-decoration-color: rgb(34, 126, 103);
}

body .page article p > strong, strong {
  color: rgb(102, 0, 139);
  outline: rgb(102, 0, 139) none 0px;
  text-decoration: rgb(102, 0, 139);
  text-decoration-color: rgb(102, 0, 139);
}

body .text-highlight {
  background-color: rgba(139, 128, 108, 0.4);
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body del {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: line-through rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    links: `body a.external, footer a {
  color: rgb(139, 128, 108);
  outline: rgb(139, 128, 108) none 0px;
  text-decoration: underline rgb(139, 128, 108);
  text-decoration-color: rgb(139, 128, 108);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(139, 128, 108);
  outline: rgb(139, 128, 108) none 0px;
  text-decoration: underline rgb(139, 128, 108);
  text-decoration-color: rgb(139, 128, 108);
}

body a.internal.broken {
  color: rgb(139, 128, 108);
  outline: rgb(139, 128, 108) none 0px;
}`,
    lists: `body dd {
  color: rgb(187, 187, 187);
}

body dt {
  color: rgb(187, 187, 187);
}

body ol > li {
  color: rgb(187, 187, 187);
}

body ol.overflow {
  background-color: rgb(9, 12, 13);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body ul > li {
  color: rgb(187, 187, 187);
}

body ul.overflow {
  background-color: rgb(9, 12, 13);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    blockquotes: `body blockquote {
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body table {
  color: rgb(187, 187, 187);
}

body td {
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
  color: rgb(187, 187, 187);
}

body th {
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
  color: rgb(187, 187, 187);
}`,
    code: `body code {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
  color: rgb(187, 187, 187);
}

body pre > code, pre:has(> code) {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
}

body pre:has(> code) {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
}`,
    images: `body audio {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body figcaption {
  color: rgb(187, 187, 187);
}

body figure {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body img {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body video {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    embeds: `body .file-embed {
  background-color: rgb(37, 37, 37);
}

body .footnotes {
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .transclude {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(0, 55, 42);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body .transclude-inner {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(0, 55, 42);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-bottom: 1px;
  margin-right: 4px;
  margin-top: 12px;
  width: 17.3281px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='*'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='-'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='/'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='>'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='?'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='I'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='S'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='b'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='c'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='d'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='f'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='i'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='k'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='l'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='p'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='u'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='w'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    search: `body .search > .search-button {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
  color: rgb(187, 187, 187);
}

body .search > .search-container > .search-space {
  background-color: rgb(9, 12, 13);
}

body .search > .search-container > .search-space > * {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(187, 187, 187);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(187, 187, 187);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(63, 54, 36);
  color: rgb(187, 187, 187);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(12, 9, 13);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(63, 54, 36);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(63, 54, 36);
  color: rgb(187, 187, 187);
}

body a.internal.tag-link::before {
  color: rgb(139, 128, 108);
}

body h1 {
  color: rgb(57, 45, 21);
}

body h2 {
  color: rgb(63, 54, 36);
}

body h2.page-title, h2.page-title a {
  color: rgb(187, 187, 187);
}

body h3 {
  color: rgb(87, 80, 66);
}

body h4 {
  color: rgb(139, 128, 108);
}

body h5 {
  color: rgb(183, 173, 151);
}

body h6 {
  color: rgb(187, 187, 187);
}

body hr {
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
}

body ::-webkit-scrollbar-corner {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
}

body ::-webkit-scrollbar-track {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    footer: `body footer {
  background-color: rgb(12, 9, 13);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(187, 187, 187);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body ul.section-ul {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .metadata {
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
}

body .navigation-progress {
  background-color: rgb(12, 9, 13);
}

body .page-header h2.page-title {
  color: rgb(187, 187, 187);
}

body abbr {
  color: rgb(187, 187, 187);
  text-decoration: underline dotted rgb(187, 187, 187);
}

body details {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body kbd {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body progress {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body sub {
  color: rgb(187, 187, 187);
}

body summary {
  color: rgb(187, 187, 187);
}

body sup {
  color: rgb(187, 187, 187);
}`,
  },
  light: {},
};
