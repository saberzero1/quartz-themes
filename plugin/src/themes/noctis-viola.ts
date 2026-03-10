import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "noctis-viola",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: #593a78;
  --background-modifier-border: #1c1226;
  --background-modifier-cover: rgba(41, 38, 64, 0.8);
  --background-modifier-error: #e34e1c;
  --background-modifier-error-hover: #e97749;
  --background-modifier-form-field: #1c1226;
  --background-modifier-form-field-highlighted: #472e60;
  --background-modifier-form-field-hover: #1c1226;
  --background-modifier-hover: #472e60;
  --background-modifier-success: #16b673;
  --background-primary: #30243d;
  --background-primary-alt: #2b2136;
  --background-secondary: #2b2136;
  --background-secondary-alt: #3d2e4d;
  --bases-cards-background: #30243d;
  --bases-cards-cover-background: #2b2136;
  --bases-cards-shadow: 0 0 0 1px #1c1226;
  --bases-embed-border-color: #1c1226;
  --bases-group-heading-property-color: #b3a5c0;
  --bases-table-border-color: #1c1226;
  --bases-table-cell-background-active: #30243d;
  --bases-table-cell-background-disabled: #2b2136;
  --bases-table-cell-shadow-focus: 0 0 0 2px #bf8ef1;
  --bases-table-group-background: #2b2136;
  --bases-table-header-background: #30243d;
  --bases-table-header-background-hover: #472e60;
  --bases-table-header-color: #b3a5c0;
  --bases-table-row-background-hover: rgba(191, 142, 241, 0.2);
  --bases-table-summary-background: #30243d;
  --bases-table-summary-background-hover: #472e60;
  --blockquote-border: #8767a8;
  --blockquote-border-color: #bf8ef1;
  --blockquote-color: #b3a5c0;
  --blur-background: color-mix(in srgb, #1c1226 65%, transparent) linear-gradient(#1c1226, color-mix(in srgb, #1c1226 65%, transparent));
  --canvas-background: #30243d;
  --canvas-card-label-color: #665973;
  --caret-color: #ccbfd9;
  --checkbox-border-color: #bf8ef1;
  --checkbox-border-color-hover: #60dbeb;
  --checkbox-color: #bf8ef1;
  --checkbox-color-hover: #60dbeb;
  --checkbox-marker-color: #30243d;
  --checklist-done-color: #b3a5c0;
  --code-background: #2b2136;
  --code-border-color: #1c1226;
  --code-bracket-background: #472e60;
  --code-comment: #665973;
  --code-function: #60dbeb;
  --code-important: #e66533;
  --code-keyword: #df769b;
  --code-normal: #ccbfd9;
  --code-operator: #ccbfd9;
  --code-property: #e4b781;
  --code-punctuation: #b3a5c0;
  --code-string: #49e9a6;
  --code-tag: #e66533;
  --code-value: #7060eb;
  --collapse-icon-color: #665973;
  --collapse-icon-color-collapsed: #bf8ef1;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #1c1226;
  --divider-color-hover: #bf8ef1;
  --dropdown-background: #1c1226;
  --dropdown-background-hover: #472e60;
  --embed-block-shadow-hover: 0 0 0 1px #1c1226, inset 0 0 0 1px #1c1226;
  --embed-border-start: 2px solid #bf8ef1;
  --file-header-background: #30243d;
  --file-header-background-focused: #30243d;
  --flair-background: #1c1226;
  --flair-color: #ccbfd9;
  --footnote-divider-color: #1c1226;
  --footnote-id-color: #b3a5c0;
  --footnote-id-color-no-occurrences: #665973;
  --footnote-input-background-active: #472e60;
  --graph-node: #bf8ef1;
  --graph-node-attachment: #e4b781;
  --graph-node-focused: #49e9a6;
  --graph-node-tag: #df769b;
  --graph-node-unresolved: #e34e1c;
  --graph-text: #ccbfd9;
  --gray: var(--text-muted);
  --h1-color: #bf8ef1;
  --h2-color: #49e9a6;
  --h3-color: #e4b781;
  --h4-color: #49ace9;
  --h5-color: #df769b;
  --h6-color: #49d6e9;
  --heading-formatting: #665973;
  --highlight: var(--text-highlight-bg);
  --hr-color: #1c1226;
  --icon-color: #b3a5c0;
  --icon-color-active: #bf8ef1;
  --icon-color-focused: #ccbfd9;
  --icon-color-hover: #b3a5c0;
  --inline-title-color: #bf8ef1;
  --input-date-separator: #665973;
  --input-placeholder-color: #665973;
  --interactive-accent: #bf8ef1;
  --interactive-accent-hover: #996bc7;
  --interactive-accent-rgb: 191, 142, 241;
  --interactive-before: #b3a5c0;
  --interactive-hover: #472e60;
  --interactive-normal: #1c1226;
  --interactive-success: #49e9a6;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #bf8ef1;
  --link-color-hover: #60dbeb;
  --link-external-color: #49ace9;
  --link-external-color-hover: #60b6eb;
  --link-unresolved-color: #bf8ef1;
  --list-marker-color: #665973;
  --list-marker-color-collapsed: #bf8ef1;
  --list-marker-color-hover: #b3a5c0;
  --menu-background: #2b2136;
  --metadata-border-color: #1c1226;
  --metadata-divider-color: #1c1226;
  --metadata-input-background-active: #472e60;
  --metadata-input-text-color: #ccbfd9;
  --metadata-label-background-active: #472e60;
  --metadata-label-text-color: #b3a5c0;
  --metadata-label-text-color-hover: #b3a5c0;
  --metadata-property-background-active: #472e60;
  --modal-background: #30243d;
  --nav-collapse-icon-color: #665973;
  --nav-collapse-icon-color-collapsed: #665973;
  --nav-heading-color: #ccbfd9;
  --nav-heading-color-collapsed: #665973;
  --nav-heading-color-collapsed-hover: #b3a5c0;
  --nav-heading-color-hover: #ccbfd9;
  --nav-item-background-active: #593a78;
  --nav-item-background-hover: #472e60;
  --nav-item-color: #b3a5c0;
  --nav-item-color-active: #49e9a6;
  --nav-item-color-highlighted: #bf8ef1;
  --nav-item-color-hover: #bf8ef1;
  --nav-item-color-selected: #ccbfd9;
  --nav-tag-color: #665973;
  --nav-tag-color-active: #b3a5c0;
  --nav-tag-color-hover: #b3a5c0;
  --noctis-accent: #bf8ef1;
  --noctis-accent-hover: #996bc7;
  --noctis-activity-foreground: #8767a8;
  --noctis-activity-inactive: #8767a877;
  --noctis-bg: #30243d;
  --noctis-bg-active: #593a78;
  --noctis-bg-alt: #1c1226;
  --noctis-bg-hover: #472e60;
  --noctis-bg-line: #402d53ee;
  --noctis-bg-secondary: #2b2136;
  --noctis-bg-sidebar: #2b2136;
  --noctis-bg-tertiary: #3d2e4d;
  --noctis-blue: #49ace9;
  --noctis-blue-bright: #60b6eb;
  --noctis-border: #1c1226;
  --noctis-button-bg: #007f99;
  --noctis-button-hover: #0ac;
  --noctis-cursor: #d9b3ff;
  --noctis-cyan: #49d6e9;
  --noctis-cyan-bright: #60dbeb;
  --noctis-error: #e34e1c;
  --noctis-fg: #ccbfd9;
  --noctis-fg-bright: #edebff;
  --noctis-fg-faint: #665973;
  --noctis-fg-muted: #b3a5c0;
  --noctis-green: #49e9a6;
  --noctis-green-bright: #60ebb1;
  --noctis-indent-guide: #422e56;
  --noctis-indent-guide-active: #595289;
  --noctis-info: #49ace9;
  --noctis-input-bg: #291d35;
  --noctis-input-border: #402956;
  --noctis-magenta: #7060eb;
  --noctis-orange: #d67e5c;
  --noctis-panel-border: #8767a8;
  --noctis-purple: #df769b;
  --noctis-purple-bright: #e798b3;
  --noctis-red: #e66533;
  --noctis-red-bright: #e97749;
  --noctis-selection: #8767a855;
  --noctis-success: #16b673;
  --noctis-warning: #e69533;
  --noctis-widget-bg: #3d2e4d;
  --noctis-widget-border: #1c1226;
  --noctis-yellow: #e4b781;
  --noctis-yellow-bright: #e69533;
  --pdf-background: #30243d;
  --pdf-page-background: #30243d;
  --pdf-shadow: 0 0 0 1px #1c1226;
  --pdf-sidebar-background: #30243d;
  --pdf-thumbnail-shadow: 0 0 0 1px #1c1226;
  --pill-border-color: #1c1226;
  --pill-color: #b3a5c0;
  --pill-color-hover: #ccbfd9;
  --pill-color-remove: #665973;
  --pill-color-remove-hover: #bf8ef1;
  --prompt-background: #30243d;
  --raised-background: color-mix(in srgb, #1c1226 65%, transparent) linear-gradient(#1c1226, color-mix(in srgb, #1c1226 65%, transparent));
  --ribbon-background: #30243d;
  --ribbon-background-collapsed: #30243d;
  --scrollbar-active-thumb-bg: #a660eb77;
  --scrollbar-bg: #30243d;
  --scrollbar-thumb-bg: #a660eb33;
  --search-clear-button-color: #b3a5c0;
  --search-icon-color: #b3a5c0;
  --search-result-background: #30243d;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #ccbfd9;
  --setting-items-background: #2b2136;
  --setting-items-border-color: #1c1226;
  --slider-track-background: #1c1226;
  --status-bar-background: #2b2136;
  --status-bar-border-color: #1c1226;
  --status-bar-text-color: #b3a5c0;
  --suggestion-background: #30243d;
  --tab-background-active: #30243d;
  --tab-container-background: #2b2136;
  --tab-outline-color: #1c1226;
  --tab-switcher-background: #2b2136;
  --tab-switcher-menubar-background: linear-gradient(to top, #2b2136, transparent);
  --tab-text-color: #665973;
  --tab-text-color-active: #b3a5c0;
  --tab-text-color-focused: #b3a5c0;
  --tab-text-color-focused-active: #b3a5c0;
  --tab-text-color-focused-active-current: #ccbfd9;
  --tab-text-color-focused-highlighted: #bf8ef1;
  --table-add-button-border-color: #1c1226;
  --table-border-color: #1c1226;
  --table-drag-handle-background-active: #bf8ef1;
  --table-drag-handle-color: #665973;
  --table-drag-handle-color-active: #171523;
  --table-header-background: #2b2136;
  --table-header-border: #1c1226;
  --table-header-border-color: #1c1226;
  --table-header-color: #ccbfd9;
  --table-row-background-hover: rgba(191, 142, 241, 0.2);
  --table-selection-border-color: #bf8ef1;
  --tag-background: rgba(223, 118, 155, 0.15);
  --tag-background-hover: rgba(223, 118, 155, 0.25);
  --tag-color: #df769b;
  --tag-color-hover: #bf8ef1;
  --tertiary: var(--text-accent-hover);
  --text-accent: #bf8ef1;
  --text-accent-hover: #996bc7;
  --text-error: #e34e1c;
  --text-error-hover: #e97749;
  --text-faint: #665973;
  --text-highlight-bg: rgba(153, 142, 241, 0.3);
  --text-highlight-bg-active: rgba(153, 142, 241, 0.5);
  --text-muted: #b3a5c0;
  --text-normal: #ccbfd9;
  --text-on-accent: #171523;
  --text-selection: #8767a855;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #2b2136;
  --titlebar-background-focused: #2b2136;
  --titlebar-border-color: #1c1226;
  --titlebar-text-color: #b3a5c0;
  --titlebar-text-color-focused: #ccbfd9;
  --vault-profile-color: #ccbfd9;
  --vault-profile-color-hover: #ccbfd9;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(43, 33, 54);
  color: rgb(204, 191, 217);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(48, 36, 61);
  color: rgb(204, 191, 217);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(43, 33, 54);
  color: rgb(204, 191, 217);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(28, 18, 38);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(43, 33, 54);
  border-left-color: rgb(28, 18, 38);
  color: rgb(204, 191, 217);
}

body div#quartz-root {
  background-color: rgb(48, 36, 61);
  color: rgb(204, 191, 217);
}`,
    typography: `body .page article p > b, b {
  color: rgb(228, 183, 129);
  font-weight: 700;
  outline: rgb(228, 183, 129) none 0px;
  text-decoration: rgb(228, 183, 129);
  text-decoration-color: rgb(228, 183, 129);
}

body .page article p > em, em {
  color: rgb(214, 126, 92);
  outline: rgb(214, 126, 92) none 0px;
  text-decoration: rgb(214, 126, 92);
  text-decoration-color: rgb(214, 126, 92);
}

body .page article p > i, i {
  color: rgb(214, 126, 92);
  outline: rgb(214, 126, 92) none 0px;
  text-decoration: rgb(214, 126, 92);
  text-decoration-color: rgb(214, 126, 92);
}

body .page article p > strong, strong {
  color: rgb(228, 183, 129);
  font-weight: 700;
  outline: rgb(228, 183, 129) none 0px;
  text-decoration: rgb(228, 183, 129);
  text-decoration-color: rgb(228, 183, 129);
}

body .text-highlight {
  background-color: rgba(153, 142, 241, 0.3);
  color: rgb(204, 191, 217);
  outline: rgb(204, 191, 217) none 0px;
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body del {
  color: rgb(204, 191, 217);
  outline: rgb(204, 191, 217) none 0px;
  text-decoration: line-through rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body p {
  color: rgb(179, 165, 192);
  outline: rgb(179, 165, 192) none 0px;
  text-decoration: rgb(179, 165, 192);
  text-decoration-color: rgb(179, 165, 192);
}`,
    links: `body a.external, footer a {
  color: rgb(73, 172, 233);
  outline: rgb(73, 172, 233) none 0px;
  text-decoration: underline rgb(73, 172, 233);
  text-decoration-color: rgb(73, 172, 233);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(191, 142, 241);
  outline: rgb(191, 142, 241) none 0px;
  text-decoration: underline rgb(191, 142, 241);
  text-decoration-color: rgb(191, 142, 241);
}

body a.internal.broken {
  color: rgb(191, 142, 241);
  outline: rgb(191, 142, 241) none 0px;
}`,
    lists: `body dd {
  color: rgb(204, 191, 217);
}

body dt {
  color: rgb(204, 191, 217);
}

body ol > li {
  color: rgb(204, 191, 217);
}

body ol.overflow {
  background-color: rgb(48, 36, 61);
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

body ul > li {
  color: rgb(204, 191, 217);
}

body ul.overflow {
  background-color: rgb(48, 36, 61);
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(102, 89, 115);
  text-decoration: rgb(102, 89, 115);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

body table {
  color: rgb(204, 191, 217);
}

body td {
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
  color: rgb(204, 191, 217);
}

body th {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
  color: rgb(204, 191, 217);
}

body tr {
  background-color: rgb(43, 33, 54);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
  color: rgb(204, 191, 217);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
  color: rgb(204, 191, 217);
}

body pre > code > [data-line] {
  border-left-color: rgb(96, 219, 235);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(96, 219, 235);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(96, 219, 235);
  border-left-color: rgb(96, 219, 235);
  border-right-color: rgb(96, 219, 235);
  border-top-color: rgb(96, 219, 235);
}

body pre > code, pre:has(> code) {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
}

body pre:has(> code) {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

body figcaption {
  color: rgb(204, 191, 217);
}

body figure {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

body img {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

body video {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}`,
    embeds: `body .file-embed {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(179, 165, 192);
  border-left-color: rgb(179, 165, 192);
  border-right-color: rgb(179, 165, 192);
  border-top-color: rgb(179, 165, 192);
}

body .footnotes {
  border-top-color: rgb(204, 191, 217);
  color: rgb(204, 191, 217);
}

body .transclude {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(191, 142, 241);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(191, 142, 241);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(179, 165, 192);
  text-decoration: line-through rgb(179, 165, 192);
  text-decoration-color: rgb(179, 165, 192);
}

body input[type=checkbox] {
  border-bottom-color: rgb(191, 142, 241);
  border-left-color: rgb(191, 142, 241);
  border-right-color: rgb(191, 142, 241);
  border-top-color: rgb(191, 142, 241);
}

body li.task-list-item[data-task='!'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 191, 217);
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}`,
    search: `body .search > .search-button {
  background-color: rgb(41, 29, 53);
  border-bottom-color: rgb(64, 41, 86);
  border-left-color: rgb(64, 41, 86);
  border-right-color: rgb(64, 41, 86);
  border-top-color: rgb(64, 41, 86);
  color: rgb(204, 191, 217);
}

body .search > .search-container > .search-space {
  background-color: rgb(28, 18, 38);
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 191, 217);
  outline: rgb(204, 191, 217) none 0px;
  text-decoration: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(237, 235, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(237, 235, 255);
  border-left-color: rgb(237, 235, 255);
  border-right-color: rgb(237, 235, 255);
  border-top-color: rgb(237, 235, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(237, 235, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(89, 58, 120);
  color: rgb(237, 235, 255);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(41, 29, 53);
  border-bottom-color: rgb(64, 41, 86);
  border-left-color: rgb(64, 41, 86);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(64, 41, 86);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(64, 41, 86);
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(89, 58, 120);
  border-bottom-color: rgb(237, 235, 255);
  border-left-color: rgb(237, 235, 255);
  border-right-color: rgb(237, 235, 255);
  border-top-color: rgb(237, 235, 255);
  color: rgb(237, 235, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(89, 58, 120);
  color: rgb(237, 235, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(223, 118, 155, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(223, 118, 155);
}

body h1 {
  color: rgb(191, 142, 241);
}

body h2 {
  color: rgb(73, 233, 166);
}

body h2.page-title, h2.page-title a {
  color: rgb(191, 142, 241);
}

body h3 {
  color: rgb(228, 183, 129);
}

body h4 {
  color: rgb(73, 172, 233);
}

body h5 {
  color: rgb(223, 118, 155);
}

body h6 {
  color: rgb(73, 214, 233);
}

body hr {
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
}

body ::-webkit-scrollbar-corner {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
}

body ::-webkit-scrollbar-track {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(179, 165, 192);
  text-decoration: rgb(179, 165, 192);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(179, 165, 192);
  text-decoration: rgb(179, 165, 192);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(179, 165, 192);
  text-decoration: rgb(179, 165, 192);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(89, 58, 120);
  border-bottom-color: rgb(73, 233, 166);
  border-left-color: rgb(73, 233, 166);
  border-right-color: rgb(73, 233, 166);
  border-top-color: rgb(73, 233, 166);
  color: rgb(73, 233, 166);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(179, 165, 192);
  border-left-color: rgb(179, 165, 192);
  border-right-color: rgb(179, 165, 192);
  border-top-color: rgb(179, 165, 192);
  color: rgb(179, 165, 192);
}`,
    footer: `body footer {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
  color: rgb(135, 103, 168);
}

body footer ul li a {
  color: rgb(135, 103, 168);
  text-decoration: rgb(135, 103, 168);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 191, 217);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
  color: rgb(204, 191, 217);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(179, 165, 192);
  text-decoration: rgb(179, 165, 192);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(179, 165, 192);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

body li.section-li > .section .meta {
  color: rgb(179, 165, 192);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(179, 165, 192);
  text-decoration: rgb(179, 165, 192);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(179, 165, 192);
  border-left-color: rgb(179, 165, 192);
  border-right-color: rgb(179, 165, 192);
  border-top-color: rgb(179, 165, 192);
  color: rgb(179, 165, 192);
}

body .darkmode svg {
  color: rgb(179, 165, 192);
  stroke: rgb(179, 165, 192);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(179, 165, 192);
  border-left-color: rgb(179, 165, 192);
  border-right-color: rgb(179, 165, 192);
  border-top-color: rgb(179, 165, 192);
  color: rgb(179, 165, 192);
}

body .breadcrumb-element p {
  color: rgb(102, 89, 115);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
  color: rgb(204, 191, 217);
}

body .metadata {
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
  color: rgb(179, 165, 192);
}

body .metadata-properties {
  border-bottom-color: rgb(179, 165, 192);
  border-left-color: rgb(179, 165, 192);
  border-right-color: rgb(179, 165, 192);
  border-top-color: rgb(179, 165, 192);
  color: rgb(179, 165, 192);
}

body .navigation-progress {
  background-color: rgb(43, 33, 54);
}

body .page-header h2.page-title {
  color: rgb(204, 191, 217);
}

body abbr {
  color: rgb(204, 191, 217);
  text-decoration: underline dotted rgb(204, 191, 217);
}

body details {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

body input[type=text] {
  background-color: rgb(41, 29, 53);
  border-bottom-color: rgb(64, 41, 86);
  border-bottom-width: 1px;
  border-left-color: rgb(64, 41, 86);
  border-left-width: 1px;
  border-right-color: rgb(64, 41, 86);
  border-right-width: 1px;
  border-top-color: rgb(64, 41, 86);
  border-top-width: 1px;
  color: rgb(204, 191, 217);
}

body kbd {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
  color: rgb(204, 191, 217);
}

body progress {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

body sub {
  color: rgb(204, 191, 217);
}

body summary {
  color: rgb(204, 191, 217);
}

body sup {
  color: rgb(204, 191, 217);
}`,
  },
  light: {
    base: `:root:root {
  --quartz-icon-color: currentColor;
}`,
    typography: `body .page article p > b, b {
  font-weight: 700;
}

body .page article p > strong, strong {
  font-weight: 700;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
}

body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
}`,
    footer: `body footer {
  color: rgb(34, 34, 34);
}

body footer ul li a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}`,
    misc: `body input[type=text] {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}`,
  },
};
