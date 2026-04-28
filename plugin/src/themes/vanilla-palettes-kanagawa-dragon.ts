import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.kanagawa-dragon",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(220, 18%, 65%);
  --accent-color-dark: #949fb5;
  --accent-color-hover: #a292a3;
  --accent-color-light: #b6927b;
  --accent-h: 220;
  --accent-l: 65%;
  --accent-s: 18%;
  --background-modifier-active-hover: red;
  --background-modifier-border: #393836;
  --background-modifier-border-focus: #625e5a;
  --background-modifier-border-hover: #625e5a;
  --background-modifier-error: #c4746e;
  --background-modifier-error-hover: #c4746e;
  --background-modifier-form-field: #282727;
  --background-modifier-form-field-hover: #282727;
  --background-modifier-hover: #223249;
  --background-modifier-success: #8a9a7b;
  --background-primary: #181616;
  --background-secondary: #282727;
  --bases-cards-background: #181616;
  --bases-cards-shadow: 0 0 0 1px #393836;
  --bases-cards-shadow-hover: 0 0 0 1px #625e5a;
  --bases-embed-border-color: #393836;
  --bases-group-heading-property-color: #c5c9c5;
  --bases-table-border-color: #393836;
  --bases-table-cell-background-active: #181616;
  --bases-table-cell-background-selected: #223249;
  --bases-table-cell-shadow-active: 0 0 0 2px #625e5a;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(220, 18%, 65%);
  --bases-table-header-background: #181616;
  --bases-table-header-background-hover: #223249;
  --bases-table-header-color: #c5c9c5;
  --bases-table-summary-background: #181616;
  --bases-table-summary-background-hover: #223249;
  --blockquote-border-color: #949fb5;
  --blur-background: color-mix(in srgb, #282727 65%, transparent) linear-gradient(#282727, color-mix(in srgb, #282727 65%, transparent));
  --bold-color: #b6927b;
  --border-color: #393836;
  --border-color-primary: #393836;
  --border-color-secondary: #625e5a;
  --canvas-background: #181616;
  --canvas-card-label-color: #625e5a;
  --canvas-color: 148, 159, 181;
  --caret-color: #c5c9c5;
  --checkbox-border-color: #625e5a;
  --checkbox-border-color-hover: #a292a3;
  --checkbox-color: #949fb5;
  --checkbox-color-hover: #a292a3;
  --checkbox-marker-color: #181616;
  --checklist-done-color: #625e5a;
  --code-background: #282727;
  --code-boolean: #b6927b;
  --code-border-color: #393836;
  --code-bracket-background: #223249;
  --code-builtin: #949fb5;
  --code-comment: #737c73;
  --code-definition: #b6927b;
  --code-function: #c4b28a;
  --code-important: #c4b28a;
  --code-keyword: #949fb5;
  --code-normal: #c5c9c5;
  --code-operator: #c4746e;
  --code-parentheses: #9e9b93;
  --code-property: #c5c9c5;
  --code-punctuation: #c5c9c5;
  --code-string: #8a9a7b;
  --code-tag: #c4746e;
  --code-value: #a292a3;
  --code-variable: #c4b28a;
  --collapse-icon-color: #625e5a;
  --collapse-icon-color-collapsed: hsl(220, 18%, 65%);
  --color-accent: hsl(220, 18%, 65%);
  --color-accent-1: hsl(217, 18.36%, 74.75%);
  --color-accent-2: hsl(215, 18.9%, 83.85%);
  --color-accent-hsl: 220, 18%, 65%;
  --color-blue: #949fb5;
  --color-cyan: #949fb5;
  --color-green: #8a9a7b;
  --color-orange: #b6927b;
  --color-pink: #a292a3;
  --color-purple: #8992a7;
  --color-red: #c4746e;
  --color-yellow: #c4b28a;
  --dark: var(--text-normal, #c5c9c5);
  --darkgray: var(--text-normal, #c5c9c5);
  --divider-color: #393836;
  --divider-color-hover: hsl(220, 18%, 65%);
  --dragonAqua: #8ea4a2;
  --dragonAsh: #737c73;
  --dragonBlack0: #0d0c0c;
  --dragonBlack1: #12120f;
  --dragonBlack2: #1d1c19;
  --dragonBlack3: #181616;
  --dragonBlack4: #282727;
  --dragonBlack5: #393836;
  --dragonBlack6: #625e5a;
  --dragonBlue2: #8ba4b0;
  --dragonGray: #a6a69c;
  --dragonGray2: #9e9b93;
  --dragonGray3: #7a8382;
  --dragonGreen: #87a987;
  --dragonGreen2: #8a9a7b;
  --dragonOrange: #b6927b;
  --dragonOrange2: #b98d7b;
  --dragonPink: #a292a3;
  --dragonRed: #c4746e;
  --dragonTeal: #949fb5;
  --dragonViolet: #8992a7;
  --dragonWhite: #c5c9c5;
  --dragonYellow: #c4b28a;
  --dropdown-background: #282727;
  --dropdown-background-hover: #393836;
  --embed-block-shadow-hover: 0 0 0 1px #393836, inset 0 0 0 1px #393836;
  --embed-border-start: 2px solid hsl(220, 18%, 65%);
  --file-header-background: #181616;
  --file-header-background-focused: #181616;
  --flair-background: #282727;
  --flair-color: #c5c9c5;
  --footnote-divider-color: #393836;
  --footnote-id-color: #c5c9c5;
  --footnote-id-color-no-occurrences: #625e5a;
  --footnote-input-background-active: #223249;
  --graph-line: #625e5a;
  --graph-node: hsl(220, 18%, 65%);
  --graph-node-attachment: #949fb5;
  --graph-node-focused: #a292a3;
  --graph-node-tag: #b6927b;
  --graph-node-unresolved: #393836;
  --graph-text: #c5c9c5;
  --gray: var(--text-muted, #c5c9c5);
  --h1-color: #8992a7;
  --h2-color: #949fb5;
  --h3-color: #8a9a7b;
  --h4-color: #c4b28a;
  --h5-color: #b6927b;
  --h6-color: #c4746e;
  --heading-formatting: #625e5a;
  --highlight: var(--text-highlight-bg, hsl(220, 18%, 65%));
  --hr-color: #393836;
  --icon-color: #c5c9c5;
  --icon-color-active: hsl(220, 18%, 65%);
  --icon-color-focused: #c5c9c5;
  --icon-color-hover: #c5c9c5;
  --indentation-guide-color: #393836;
  --indentation-guide-color-active: #625e5a;
  --inline-title-color: #c5c9c5;
  --input-date-separator: #625e5a;
  --input-placeholder-color: #625e5a;
  --interactive-accent: hsl(220, 18%, 65%);
  --interactive-accent-hover: hsl(217, 18.36%, 74.75%);
  --interactive-accent-hsl: 220, 18%, 65%;
  --interactive-hover: #393836;
  --interactive-normal: #282727;
  --italic-color: #b6927b;
  --light: var(--background-primary, #181616);
  --lightgray: var(--background-secondary, #282727);
  --link-color: #949fb5;
  --link-color-hover: #a292a3;
  --link-external-color: #949fb5;
  --link-external-color-hover: #a292a3;
  --link-unresolved-decoration-color: hsla(220, 18%, 65%, 0.3);
  --list-marker-color: #949fb5;
  --list-marker-color-collapsed: hsl(220, 18%, 65%);
  --list-marker-color-hover: #c5c9c5;
  --menu-background: #282727;
  --menu-border-color: #625e5a;
  --metadata-border-color: #393836;
  --metadata-divider-color: #393836;
  --metadata-input-background-active: #223249;
  --metadata-input-text-color: #c5c9c5;
  --metadata-label-background-active: #223249;
  --metadata-label-text-color: #c5c9c5;
  --metadata-label-text-color-hover: #c5c9c5;
  --metadata-property-background-active: #223249;
  --metadata-property-box-shadow-focus: 0 0 0 2px #625e5a;
  --metadata-property-box-shadow-hover: 0 0 0 1px #625e5a;
  --modal-background: #282727;
  --modal-border-color: #393836;
  --nav-collapse-icon-color: #625e5a;
  --nav-collapse-icon-color-collapsed: #625e5a;
  --nav-heading-color: #c5c9c5;
  --nav-heading-color-collapsed: #625e5a;
  --nav-heading-color-collapsed-hover: #c5c9c5;
  --nav-heading-color-hover: #c5c9c5;
  --nav-indentation-guide-color: #625e5a;
  --nav-item-background-active: #949fb5;
  --nav-item-background-hover: #223249;
  --nav-item-background-selected: red;
  --nav-item-color: #c5c9c5;
  --nav-item-color-active: white;
  --nav-item-color-highlighted: #b6927b;
  --nav-item-color-hover: white;
  --nav-item-color-selected: red;
  --nav-tag-color: #625e5a;
  --nav-tag-color-active: #c5c9c5;
  --nav-tag-color-hover: #c5c9c5;
  --pdf-background: #181616;
  --pdf-page-background: #181616;
  --pdf-shadow: 0 0 0 1px #393836;
  --pdf-sidebar-background: #181616;
  --pdf-thumbnail-shadow: 0 0 0 1px #393836;
  --pill-border-color: #393836;
  --pill-border-color-hover: #625e5a;
  --pill-color: #c5c9c5;
  --pill-color-hover: #c5c9c5;
  --pill-color-remove: #625e5a;
  --pill-color-remove-hover: hsl(220, 18%, 65%);
  --prompt-background: #181616;
  --prompt-border-color: #393836;
  --raised-background: color-mix(in srgb, #282727 65%, transparent) linear-gradient(#282727, color-mix(in srgb, #282727 65%, transparent));
  --ribbon-background: #282727;
  --ribbon-background-collapsed: #181616;
  --search-clear-button-color: #c5c9c5;
  --search-icon-color: #c5c9c5;
  --search-result-background: #181616;
  --secondary: var(--text-accent, hsl(220, 18%, 65%));
  --selection-background-color: #223249;
  --selection-border-color: #a292a3;
  --setting-group-heading-color: #c5c9c5;
  --setting-items-border-color: #393836;
  --shiki-active-tab-border-color: #c5c9c5;
  --shiki-code-background: #282727;
  --shiki-code-comment: #625e5a;
  --shiki-code-function: #8a9a7b;
  --shiki-code-important: #b6927b;
  --shiki-code-keyword: #a292a3;
  --shiki-code-normal: #c5c9c5;
  --shiki-code-property: #949fb5;
  --shiki-code-punctuation: #c5c9c5;
  --shiki-code-string: #c4b28a;
  --shiki-code-value: #8992a7;
  --shiki-gutter-border-color: #393836;
  --shiki-gutter-text-color: #625e5a;
  --shiki-gutter-text-color-highlight: #c5c9c5;
  --shiki-highlight-neutral: #c5c9c5;
  --shiki-terminal-dots-color: #625e5a;
  --slider-track-background: #282727;
  --status-bar-background: #282727;
  --status-bar-border-color: #393836;
  --status-bar-text-color: #c5c9c5;
  --suggestion-background: #181616;
  --sync-avatar-color-1: #c4746e;
  --sync-avatar-color-2: #b6927b;
  --sync-avatar-color-3: #c4b28a;
  --sync-avatar-color-4: #8a9a7b;
  --sync-avatar-color-5: #949fb5;
  --sync-avatar-color-6: #949fb5;
  --sync-avatar-color-7: #8992a7;
  --sync-avatar-color-8: #a292a3;
  --tab-background-active: #181616;
  --tab-container-background: #282727;
  --tab-divider-color: #223249;
  --tab-outline-color: #393836;
  --tab-switcher-background: #282727;
  --tab-switcher-menubar-background: linear-gradient(to top, #282727, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(220, 18%, 65%);
  --tab-text-color: #393836;
  --tab-text-color-active: #c5c9c5;
  --tab-text-color-focused: #c5c9c5;
  --tab-text-color-focused-active: #c5c9c5;
  --tab-text-color-focused-active-current: white;
  --tab-text-color-focused-highlighted: red;
  --table-add-button-border-color: #393836;
  --table-border-color: #393836;
  --table-drag-handle-background-active: #a292a3;
  --table-drag-handle-color: #223249;
  --table-drag-handle-color-active: #223249;
  --table-header-border-color: #393836;
  --table-header-color: #c5c9c5;
  --table-selection: #223249;
  --table-selection-border-color: #a292a3;
  --tag-background: #393836;
  --tag-background-hover: #625e5a;
  --tag-border-color: hsla(220, 18%, 65%, 0.15);
  --tag-border-color-hover: hsla(220, 18%, 65%, 0.15);
  --tag-color: #949fb5;
  --tag-color-hover: #949fb5;
  --tertiary: var(--text-accent-hover, red);
  --text-accent: hsl(220, 18%, 65%);
  --text-accent-hover: red;
  --text-color: #c5c9c5;
  --text-color-accent: white;
  --text-color-muted-dark: #393836;
  --text-color-muted-light: #625e5a;
  --text-error: #c4746e;
  --text-faint: #625e5a;
  --text-highlight-bg: hsl(220, 18%, 65%);
  --text-muted: #c5c9c5;
  --text-normal: #c5c9c5;
  --text-on-accent-inverted: #181616;
  --text-selection: #223249;
  --text-success: #8a9a7b;
  --text-warning: #c4b28a;
  --textHighlight: var(--text-highlight-bg, hsl(220, 18%, 65%));
  --titlebar-background: #282727;
  --titlebar-background-focused: #393836;
  --titlebar-border-color: #393836;
  --titlebar-text-color: #c5c9c5;
  --titlebar-text-color-focused: #c5c9c5;
  --vault-profile-color: #c5c9c5;
  --vault-profile-color-hover: #c5c9c5;
  --waveBlue1: #223249;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 39, 39);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(24, 22, 22);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 39, 39);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(57, 56, 54);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 39, 39);
  border-left-color: rgb(57, 56, 54);
  color: rgb(197, 201, 197);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(182, 146, 123);
  outline: rgb(182, 146, 123) none 0px;
  text-decoration-color: rgb(182, 146, 123);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(182, 146, 123);
  outline: rgb(182, 146, 123) none 0px;
  text-decoration-color: rgb(182, 146, 123);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(182, 146, 123);
  outline: rgb(182, 146, 123) none 0px;
  text-decoration-color: rgb(182, 146, 123);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(182, 146, 123);
  outline: rgb(182, 146, 123) none 0px;
  text-decoration-color: rgb(182, 146, 123);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(150, 160, 182);
  color: rgb(197, 201, 197);
  outline: rgb(197, 201, 197) none 0px;
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body del {
  color: rgb(197, 201, 197);
  outline: rgb(197, 201, 197) none 0px;
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(98, 94, 90);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(148, 159, 181);
  border-color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body p {
  color: rgb(197, 201, 197);
  outline: rgb(197, 201, 197) none 0px;
  text-decoration-color: rgb(197, 201, 197);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(148, 159, 181);
  outline: rgb(148, 159, 181) none 0px;
  text-decoration-color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(148, 159, 181);
  outline: rgb(148, 159, 181) none 0px;
  text-decoration-color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(197, 201, 197);
  outline: rgb(197, 201, 197) none 0px;
  text-decoration: underline rgba(150, 160, 182, 0.3);
  text-decoration-color: rgba(150, 160, 182, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body dt {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(98, 94, 90);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body table {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(57, 56, 54);
  border-left-color: rgb(57, 56, 54);
  border-right-color: rgb(57, 56, 54);
  border-top-color: rgb(57, 56, 54);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(57, 56, 54);
  border-left-color: rgb(57, 56, 54);
  border-right-color: rgb(57, 56, 54);
  border-top-color: rgb(57, 56, 54);
  color: rgb(197, 201, 197);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(40, 39, 39);
  border-bottom-color: rgb(57, 56, 54);
  border-left-color: rgb(57, 56, 54);
  border-right-color: rgb(57, 56, 54);
  border-top-color: rgb(57, 56, 54);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(40, 39, 39);
  border-bottom-color: rgb(57, 56, 54);
  border-left-color: rgb(57, 56, 54);
  border-right-color: rgb(57, 56, 54);
  border-top-color: rgb(57, 56, 54);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(137, 146, 167);
  border-left-color: rgb(137, 146, 167);
  border-right-color: rgb(137, 146, 167);
  border-top-color: rgb(137, 146, 167);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(150, 160, 182);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(98, 94, 90);
  border-left-color: rgb(98, 94, 90);
  border-right-color: rgb(98, 94, 90);
  border-top-color: rgb(98, 94, 90);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(98, 94, 90);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(98, 94, 90);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(24, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(24, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(182, 146, 123);
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
  background-color: rgb(196, 178, 138);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 116, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 116, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 116, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 116, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 178, 138);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 178, 138);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(137, 146, 167);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 116, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 154, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 154, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 154, 123);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(197, 201, 197);
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
  background-color: rgb(40, 39, 39);
  border-bottom-color: rgb(57, 56, 54);
  border-left-color: rgb(57, 56, 54);
  border-right-color: rgb(57, 56, 54);
  border-top-color: rgb(57, 56, 54);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(24, 22, 22);
  border-bottom-color: rgb(57, 56, 54);
  border-left-color: rgb(57, 56, 54);
  border-right-color: rgb(57, 56, 54);
  border-top-color: rgb(57, 56, 54);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(197, 201, 197);
  outline: rgb(197, 201, 197) none 0px;
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(34, 50, 73);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(57, 56, 54);
  border-left-color: rgb(57, 56, 54);
  border-right-color: rgb(57, 56, 54);
  border-top-color: rgb(57, 56, 54);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 39, 39);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(34, 50, 73);
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(34, 50, 73);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(57, 56, 54);
  border-bottom-color: rgba(150, 160, 182, 0.15);
  border-left-color: rgba(150, 160, 182, 0.15);
  border-right-color: rgba(150, 160, 182, 0.15);
  border-top-color: rgba(150, 160, 182, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body h1 {
  color: rgb(137, 146, 167);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body h2 {
  color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body h3 {
  color: rgb(138, 154, 123);
}

html[saved-theme="dark"] body h4 {
  color: rgb(196, 178, 138);
}

html[saved-theme="dark"] body h5 {
  color: rgb(182, 146, 123);
}

html[saved-theme="dark"] body h6 {
  color: rgb(196, 116, 110);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(57, 56, 54);
  border-left-color: rgb(57, 56, 54);
  border-right-color: rgb(57, 56, 54);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(98, 94, 90);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(197, 201, 197);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(197, 201, 197);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(40, 39, 39);
  border-bottom-color: rgb(57, 56, 54);
  border-left-color: rgb(57, 56, 54);
  border-right-color: rgb(57, 56, 54);
  border-top-color: rgb(57, 56, 54);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(197, 201, 197);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(197, 201, 197);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(197, 201, 197);
  stroke: rgb(197, 201, 197);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(98, 94, 90);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(40, 39, 39);
  border-color: rgb(197, 201, 197);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(57, 56, 54);
  color: rgb(197, 201, 197);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(57, 56, 54);
  border-left-color: rgb(57, 56, 54);
  border-right-color: rgb(57, 56, 54);
  border-top-color: rgb(57, 56, 54);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(57, 56, 54);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(57, 56, 54);
  color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(24, 22, 22);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(40, 39, 39);
  border-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(57, 56, 54);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(197, 201, 197);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(40, 39, 39);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body abbr {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(40, 39, 39);
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body sub {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body summary {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body sup {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(57, 56, 54);
  border-bottom-color: rgba(150, 160, 182, 0.15);
  border-left-color: rgba(150, 160, 182, 0.15);
  border-right-color: rgba(150, 160, 182, 0.15);
  border-top-color: rgba(150, 160, 182, 0.15);
  color: rgb(148, 159, 181);
}`,
  },
  light: {
    base: `:root:root {
  --accent: hsl(196, 35%, 47%);
  --accent-color-dark: #4e8ca2;
  --accent-color-hover: #b35b79;
  --accent-color-light: #d7474b;
  --accent-h: 196;
  --accent-l: 47%;
  --accent-s: 35%;
  --background-modifier-active-hover: red;
  --background-modifier-border: #d5cea3;
  --background-modifier-border-focus: #8a8980;
  --background-modifier-border-hover: #8a8980;
  --background-modifier-error: #d7474b;
  --background-modifier-error-hover: #d7474b;
  --background-modifier-form-field: #e7dba0;
  --background-modifier-form-field-hover: #e7dba0;
  --background-modifier-hover: #c9cbd1;
  --background-modifier-success: #6f894e;
  --background-primary: #f2ecbc;
  --background-secondary: #e7dba0;
  --bases-cards-background: #f2ecbc;
  --bases-cards-shadow: 0 0 0 1px #d5cea3;
  --bases-cards-shadow-hover: 0 0 0 1px #8a8980;
  --bases-embed-border-color: #d5cea3;
  --bases-group-heading-property-color: #545464;
  --bases-table-border-color: #d5cea3;
  --bases-table-cell-background-active: #f2ecbc;
  --bases-table-cell-background-selected: #c9cbd1;
  --bases-table-cell-shadow-active: 0 0 0 2px #8a8980;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(196, 35%, 47%);
  --bases-table-header-background: #f2ecbc;
  --bases-table-header-background-hover: #c9cbd1;
  --bases-table-header-color: #545464;
  --bases-table-summary-background: #f2ecbc;
  --bases-table-summary-background-hover: #c9cbd1;
  --blockquote-border-color: #4e8ca2;
  --blur-background: color-mix(in srgb, #f2ecbc 65%, transparent) linear-gradient(#f2ecbc, color-mix(in srgb, #f2ecbc 65%, transparent));
  --bold-color: #d7474b;
  --border-color: #d5cea3;
  --border-color-primary: #d5cea3;
  --border-color-secondary: #8a8980;
  --canvas-background: #f2ecbc;
  --canvas-card-label-color: #716e61;
  --canvas-color: 78, 140, 162;
  --caret-color: #545464;
  --checkbox-border-color: #716e61;
  --checkbox-border-color-hover: #b35b79;
  --checkbox-color: #4e8ca2;
  --checkbox-color-hover: #b35b79;
  --checkbox-marker-color: #f2ecbc;
  --checklist-done-color: #716e61;
  --code-background: #e7dba0;
  --code-boolean: #cc6d00;
  --code-border-color: #d5cea3;
  --code-bracket-background: #c9cbd1;
  --code-builtin: #6693bf;
  --code-comment: #8a8980;
  --code-definition: #cc6d00;
  --code-function: #de9800;
  --code-important: #de9800;
  --code-keyword: #624c83;
  --code-normal: #545464;
  --code-operator: #836f4a;
  --code-parentheses: #4e8ca2;
  --code-property: #545464;
  --code-punctuation: #545464;
  --code-string: #6f894e;
  --code-tag: #d7474b;
  --code-value: #b35b79;
  --code-variable: #cc6d00;
  --collapse-icon-color: #716e61;
  --collapse-icon-color-collapsed: hsl(196, 35%, 47%);
  --color-accent: hsl(196, 35%, 47%);
  --color-accent-1: hsl(195, 35.35%, 50.525%);
  --color-accent-2: hsl(193, 35.7%, 54.05%);
  --color-accent-hsl: 196, 35%, 47%;
  --color-blue: #4e8ca2;
  --color-cyan: #6693bf;
  --color-green: #6f894e;
  --color-orange: #cc6d00;
  --color-pink: #b35b79;
  --color-purple: #624c83;
  --color-red: #d7474b;
  --color-yellow: #de9800;
  --dark: var(--text-normal, #545464);
  --darkgray: var(--text-normal, #545464);
  --divider-color: #d5cea3;
  --divider-color-hover: hsl(196, 35%, 47%);
  --dropdown-background: #e7dba0;
  --dropdown-background-hover: #d5cea3;
  --embed-block-shadow-hover: 0 0 0 1px #d5cea3, inset 0 0 0 1px #d5cea3;
  --embed-border-start: 2px solid hsl(196, 35%, 47%);
  --file-header-background: #f2ecbc;
  --file-header-background-focused: #f2ecbc;
  --flair-background: #e7dba0;
  --flair-color: #545464;
  --footnote-divider-color: #d5cea3;
  --footnote-id-color: #545464;
  --footnote-id-color-no-occurrences: #716e61;
  --footnote-input-background-active: #c9cbd1;
  --graph-line: #8a8980;
  --graph-node: hsl(196, 35%, 47%);
  --graph-node-attachment: #4e8ca2;
  --graph-node-focused: #b35b79;
  --graph-node-tag: #d7474b;
  --graph-node-unresolved: #d5cea3;
  --graph-text: #545464;
  --gray: var(--text-muted, #545464);
  --h1-color: #624c83;
  --h2-color: #4e8ca2;
  --h3-color: #6f894e;
  --h4-color: #de9800;
  --h5-color: #cc6d00;
  --h6-color: #d7474b;
  --heading-formatting: #716e61;
  --highlight: var(--text-highlight-bg, hsl(196, 35%, 47%));
  --hr-color: #8a8980;
  --icon-color: #545464;
  --icon-color-active: hsl(196, 35%, 47%);
  --icon-color-focused: #545464;
  --icon-color-hover: #545464;
  --indentation-guide-color: #8a8980;
  --indentation-guide-color-active: #716e61;
  --inline-title-color: #545464;
  --input-date-separator: #716e61;
  --input-placeholder-color: #716e61;
  --interactive-accent: hsl(196, 35%, 47%);
  --interactive-accent-hover: hsl(193, 35.7%, 54.05%);
  --interactive-accent-hsl: 196, 35%, 47%;
  --interactive-hover: #d5cea3;
  --interactive-normal: #e7dba0;
  --italic-color: #d7474b;
  --light: var(--background-primary, #f2ecbc);
  --lightgray: var(--background-secondary, #e7dba0);
  --link-color: #4e8ca2;
  --link-color-hover: #b35b79;
  --link-external-color: #4e8ca2;
  --link-external-color-hover: #b35b79;
  --link-unresolved-decoration-color: hsla(196, 35%, 47%, 0.3);
  --list-marker-color: #4e8ca2;
  --list-marker-color-collapsed: hsl(196, 35%, 47%);
  --list-marker-color-hover: #545464;
  --lotusAqua: #597b75;
  --lotusAqua2: #5e857a;
  --lotusBlue1: #c7d7e0;
  --lotusBlue2: #b5cbd2;
  --lotusBlue3: #9fb5c9;
  --lotusBlue4: #4d699b;
  --lotusBlue5: #5d57a3;
  --lotusCyan: #d7e3d8;
  --lotusGray: #dcd7ba;
  --lotusGray2: #716e61;
  --lotusGray3: #8a8980;
  --lotusGreen: #6f894e;
  --lotusGreen2: #6e915f;
  --lotusGreen3: #b7d0ae;
  --lotusInk1: #545464;
  --lotusInk2: #43436c;
  --lotusOrange: #cc6d00;
  --lotusOrange2: #e98a00;
  --lotusPink: #b35b79;
  --lotusRed: #c84053;
  --lotusRed2: #d7474b;
  --lotusRed3: #e82424;
  --lotusRed4: #d9a594;
  --lotusTeal1: #4e8ca2;
  --lotusTeal2: #6693bf;
  --lotusTeal3: #5a7785;
  --lotusViolet1: #a09cac;
  --lotusViolet2: #766b90;
  --lotusViolet3: #c9cbd1;
  --lotusViolet4: #624c83;
  --lotusWhite0: #d5cea3;
  --lotusWhite1: #dcd5ac;
  --lotusWhite2: #e5ddb0;
  --lotusWhite3: #f2ecbc;
  --lotusWhite4: #e7dba0;
  --lotusWhite5: #e4d794;
  --lotusYellow: #77713f;
  --lotusYellow2: #836f4a;
  --lotusYellow3: #de9800;
  --lotusYellow4: #f9d791;
  --menu-background: #e7dba0;
  --menu-border-color: #8a8980;
  --metadata-border-color: #d5cea3;
  --metadata-divider-color: #d5cea3;
  --metadata-input-background-active: #c9cbd1;
  --metadata-input-text-color: #545464;
  --metadata-label-background-active: #c9cbd1;
  --metadata-label-text-color: #545464;
  --metadata-label-text-color-hover: #545464;
  --metadata-property-background-active: #c9cbd1;
  --metadata-property-box-shadow-focus: 0 0 0 2px #8a8980;
  --metadata-property-box-shadow-hover: 0 0 0 1px #8a8980;
  --modal-background: #e7dba0;
  --modal-border-color: #d5cea3;
  --nav-collapse-icon-color: #8a8980;
  --nav-collapse-icon-color-collapsed: #8a8980;
  --nav-heading-color: #545464;
  --nav-heading-color-collapsed: #716e61;
  --nav-heading-color-collapsed-hover: #545464;
  --nav-heading-color-hover: #545464;
  --nav-indentation-guide-color: #8a8980;
  --nav-item-background-active: #4e8ca2;
  --nav-item-background-hover: #c9cbd1;
  --nav-item-background-selected: red;
  --nav-item-color: #545464;
  --nav-item-color-active: white;
  --nav-item-color-highlighted: #d7474b;
  --nav-item-color-hover: white;
  --nav-item-color-selected: red;
  --nav-tag-color: #716e61;
  --nav-tag-color-active: #545464;
  --nav-tag-color-hover: #545464;
  --pdf-background: #f2ecbc;
  --pdf-page-background: #f2ecbc;
  --pdf-sidebar-background: #f2ecbc;
  --pill-border-color: #d5cea3;
  --pill-border-color-hover: #8a8980;
  --pill-color: #545464;
  --pill-color-hover: #545464;
  --pill-color-remove: #716e61;
  --pill-color-remove-hover: hsl(196, 35%, 47%);
  --prompt-background: #f2ecbc;
  --prompt-border-color: #d5cea3;
  --raised-background: color-mix(in srgb, #f2ecbc 65%, transparent) linear-gradient(#f2ecbc, color-mix(in srgb, #f2ecbc 65%, transparent));
  --ribbon-background: #e7dba0;
  --ribbon-background-collapsed: #f2ecbc;
  --search-clear-button-color: #545464;
  --search-icon-color: #545464;
  --search-result-background: #f2ecbc;
  --secondary: var(--text-accent, hsl(196, 35%, 47%));
  --selection-background-color: #c9cbd1;
  --selection-border-color: #b35b79;
  --setting-group-heading-color: #545464;
  --setting-items-border-color: #d5cea3;
  --shiki-active-tab-border-color: #545464;
  --shiki-code-background: #e7dba0;
  --shiki-code-comment: #716e61;
  --shiki-code-function: #6f894e;
  --shiki-code-important: #cc6d00;
  --shiki-code-keyword: #b35b79;
  --shiki-code-normal: #545464;
  --shiki-code-property: #6693bf;
  --shiki-code-punctuation: #545464;
  --shiki-code-string: #de9800;
  --shiki-code-value: #624c83;
  --shiki-gutter-border-color: #d5cea3;
  --shiki-gutter-text-color: #716e61;
  --shiki-gutter-text-color-highlight: #545464;
  --shiki-highlight-neutral: #545464;
  --shiki-terminal-dots-color: #716e61;
  --slider-track-background: #e7dba0;
  --status-bar-background: #e7dba0;
  --status-bar-border-color: #d5cea3;
  --status-bar-text-color: #545464;
  --suggestion-background: #f2ecbc;
  --sync-avatar-color-1: #d7474b;
  --sync-avatar-color-2: #cc6d00;
  --sync-avatar-color-3: #de9800;
  --sync-avatar-color-4: #6f894e;
  --sync-avatar-color-5: #6693bf;
  --sync-avatar-color-6: #4e8ca2;
  --sync-avatar-color-7: #624c83;
  --sync-avatar-color-8: #b35b79;
  --tab-background-active: #f2ecbc;
  --tab-container-background: #e7dba0;
  --tab-divider-color: #c9cbd1;
  --tab-outline-color: #d5cea3;
  --tab-switcher-background: #e7dba0;
  --tab-switcher-menubar-background: linear-gradient(to top, #e7dba0, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(196, 35%, 47%);
  --tab-text-color: #d5cea3;
  --tab-text-color-active: #545464;
  --tab-text-color-focused: #545464;
  --tab-text-color-focused-active: #545464;
  --tab-text-color-focused-active-current: #545464;
  --tab-text-color-focused-highlighted: red;
  --table-add-button-border-color: #d5cea3;
  --table-border-color: #d5cea3;
  --table-drag-handle-background-active: #b35b79;
  --table-drag-handle-color: #c9cbd1;
  --table-drag-handle-color-active: #c9cbd1;
  --table-header-border-color: #d5cea3;
  --table-header-color: #545464;
  --table-selection: #c9cbd1;
  --table-selection-border-color: #b35b79;
  --tag-background: #8a8980;
  --tag-background-hover: #716e61;
  --tag-border-color: hsla(196, 35%, 47%, 0.15);
  --tag-border-color-hover: hsla(196, 35%, 47%, 0.15);
  --tag-color: #4e8ca2;
  --tag-color-hover: #4e8ca2;
  --tertiary: var(--text-accent-hover, red);
  --text-accent: hsl(196, 35%, 47%);
  --text-accent-hover: red;
  --text-color: #545464;
  --text-color-accent: white;
  --text-color-muted-dark: #8a8980;
  --text-color-muted-light: #716e61;
  --text-error: #d7474b;
  --text-faint: #716e61;
  --text-highlight-bg: hsl(196, 35%, 47%);
  --text-muted: #545464;
  --text-normal: #545464;
  --text-on-accent-inverted: #f2ecbc;
  --text-selection: #c9cbd1;
  --text-success: #6f894e;
  --text-warning: #de9800;
  --textHighlight: var(--text-highlight-bg, hsl(196, 35%, 47%));
  --titlebar-background: #e7dba0;
  --titlebar-background-focused: #d5cea3;
  --titlebar-border-color: #d5cea3;
  --titlebar-text-color: #545464;
  --titlebar-text-color-focused: #545464;
  --vault-profile-color: #545464;
  --vault-profile-color-hover: #545464;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(231, 219, 160);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(242, 236, 188);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(231, 219, 160);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 206, 163);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(231, 219, 160);
  border-left-color: rgb(213, 206, 163);
  color: rgb(84, 84, 100);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(215, 71, 75);
  outline: rgb(215, 71, 75) none 0px;
  text-decoration-color: rgb(215, 71, 75);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(215, 71, 75);
  outline: rgb(215, 71, 75) none 0px;
  text-decoration-color: rgb(215, 71, 75);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(215, 71, 75);
  outline: rgb(215, 71, 75) none 0px;
  text-decoration-color: rgb(215, 71, 75);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(215, 71, 75);
  outline: rgb(215, 71, 75) none 0px;
  text-decoration-color: rgb(215, 71, 75);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(78, 139, 162);
  color: rgb(84, 84, 100);
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body del {
  color: rgb(84, 84, 100);
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(113, 110, 97);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(78, 140, 162);
  border-color: rgb(78, 140, 162);
}

html[saved-theme="light"] body p {
  color: rgb(84, 84, 100);
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(78, 140, 162);
  outline: rgb(78, 140, 162) none 0px;
  text-decoration-color: rgb(78, 140, 162);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(78, 140, 162);
  outline: rgb(78, 140, 162) none 0px;
  text-decoration-color: rgb(78, 140, 162);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(84, 84, 100);
  outline: rgb(84, 84, 100) none 0px;
  text-decoration: underline rgba(78, 139, 162, 0.3);
  text-decoration-color: rgba(78, 139, 162, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body dt {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ol > li {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ul > li {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(113, 110, 97);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body table {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(213, 206, 163);
  border-left-color: rgb(213, 206, 163);
  border-right-color: rgb(213, 206, 163);
  border-top-color: rgb(213, 206, 163);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(213, 206, 163);
  border-left-color: rgb(213, 206, 163);
  border-right-color: rgb(213, 206, 163);
  border-top-color: rgb(213, 206, 163);
  color: rgb(84, 84, 100);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(231, 219, 160);
  border-bottom-color: rgb(213, 206, 163);
  border-left-color: rgb(213, 206, 163);
  border-right-color: rgb(213, 206, 163);
  border-top-color: rgb(213, 206, 163);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(231, 219, 160);
  border-bottom-color: rgb(213, 206, 163);
  border-left-color: rgb(213, 206, 163);
  border-right-color: rgb(213, 206, 163);
  border-top-color: rgb(213, 206, 163);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body figcaption {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(98, 76, 131);
  border-left-color: rgb(98, 76, 131);
  border-right-color: rgb(98, 76, 131);
  border-top-color: rgb(98, 76, 131);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(78, 139, 162);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(113, 110, 97);
  border-left-color: rgb(113, 110, 97);
  border-right-color: rgb(113, 110, 97);
  border-top-color: rgb(113, 110, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(113, 110, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(113, 110, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 236, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 236, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 109, 0);
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
  background-color: rgb(222, 152, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 147, 191);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(78, 140, 162);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 71, 75);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 71, 75);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 71, 75);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 71, 75);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(78, 140, 162);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(222, 152, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(222, 152, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(98, 76, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 71, 75);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(111, 137, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(111, 137, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(111, 137, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(84, 84, 100);
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
  background-color: rgb(231, 219, 160);
  border-bottom-color: rgb(213, 206, 163);
  border-left-color: rgb(213, 206, 163);
  border-right-color: rgb(213, 206, 163);
  border-top-color: rgb(213, 206, 163);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(242, 236, 188);
  border-bottom-color: rgb(213, 206, 163);
  border-left-color: rgb(213, 206, 163);
  border-right-color: rgb(213, 206, 163);
  border-top-color: rgb(213, 206, 163);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(84, 84, 100);
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(201, 203, 209);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(213, 206, 163);
  border-left-color: rgb(213, 206, 163);
  border-right-color: rgb(213, 206, 163);
  border-top-color: rgb(213, 206, 163);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(231, 219, 160);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(201, 203, 209);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(201, 203, 209);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(138, 137, 128);
  border-bottom-color: rgba(78, 139, 162, 0.15);
  border-left-color: rgba(78, 139, 162, 0.15);
  border-right-color: rgba(78, 139, 162, 0.15);
  border-top-color: rgba(78, 139, 162, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(78, 140, 162);
}

html[saved-theme="light"] body h1 {
  color: rgb(98, 76, 131);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body h2 {
  color: rgb(78, 140, 162);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body h3 {
  color: rgb(111, 137, 78);
}

html[saved-theme="light"] body h4 {
  color: rgb(222, 152, 0);
}

html[saved-theme="light"] body h5 {
  color: rgb(204, 109, 0);
}

html[saved-theme="light"] body h6 {
  color: rgb(215, 71, 75);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(213, 206, 163);
  border-left-color: rgb(213, 206, 163);
  border-right-color: rgb(213, 206, 163);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(138, 137, 128);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(84, 84, 100);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(84, 84, 100);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(231, 219, 160);
  border-bottom-color: rgb(213, 206, 163);
  border-left-color: rgb(213, 206, 163);
  border-right-color: rgb(213, 206, 163);
  border-top-color: rgb(213, 206, 163);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(84, 84, 100);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(84, 84, 100);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(84, 84, 100);
  stroke: rgb(84, 84, 100);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(113, 110, 97);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(242, 236, 188);
  border-color: rgb(84, 84, 100);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(213, 206, 163);
  color: rgb(84, 84, 100);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(213, 206, 163);
  border-left-color: rgb(213, 206, 163);
  border-right-color: rgb(213, 206, 163);
  border-top-color: rgb(213, 206, 163);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(213, 206, 163);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(138, 137, 128);
  color: rgb(78, 140, 162);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(242, 236, 188);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(231, 219, 160);
  border-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(213, 206, 163);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(84, 84, 100);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(231, 219, 160);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body abbr {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(231, 219, 160);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body sub {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body summary {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body sup {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(138, 137, 128);
  border-bottom-color: rgba(78, 139, 162, 0.15);
  border-left-color: rgba(78, 139, 162, 0.15);
  border-right-color: rgba(78, 139, 162, 0.15);
  border-top-color: rgba(78, 139, 162, 0.15);
  color: rgb(78, 140, 162);
}`,
  },
};
