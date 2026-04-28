import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "radiance",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color: hsl(
        353,
        65%,
        54%
    );
  --accent-color-hover: hsl(
        353,
        65%,
        48% 
    );
  --accent-color-rgb: 208, 66, 85;
  --accent-h: 353;
  --accent-l: 54%;
  --accent-s: 65%;
  --background-modifier-active: #303030;
  --background-modifier-active-hover: hsla(353, 65%, 54%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-hover: #2a2a2a;
  --background-secondary: #252525;
  --bases-cards-radius: 5px;
  --bases-cards-shadow: 0 0 0 1px #383838;
  --bases-embed-border-color: #383838;
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: #a0a0a0;
  --bases-table-border-color: #383838;
  --bases-table-cell-background-selected: hsla(353, 65%, 54%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
        353,
        65%,
        54%
    );
  --bases-table-container-border-radius: 3px;
  --bases-table-header-background-hover: #2a2a2a;
  --bases-table-header-color: #a0a0a0;
  --bases-table-summary-background-hover: #2a2a2a;
  --blockquote-border-color: hsl(
        353,
        65%,
        54%
    );
  --callout-radius: 3px;
  --canvas-controls-radius: 3px;
  --caret-color: #e0e0e0;
  --checkbox-border-color-hover: #a0a0a0;
  --checkbox-color: hsl(
        353,
        65%,
        54%
    );
  --checkbox-color-hover: hsl(
        353,
        65%,
        48% 
    );
  --checkbox-radius: 3px;
  --checklist-done-color: #a0a0a0;
  --clickable-icon-radius: 3px;
  --code-border-color: #383838;
  --code-bracket-background: #2a2a2a;
  --code-normal: #e0e0e0;
  --code-punctuation: #a0a0a0;
  --code-radius: 3px;
  --collapse-icon-color-collapsed: hsl(
        353,
        65%,
        54%
    );
  --color-accent: hsl(
        353,
        65%,
        54%
    );
  --color-accent-1: hsl(350, 66.3%, 62.1%);
  --color-accent-2: hsl(348, 68.25%, 69.66%);
  --color-accent-hover: hsl(
        353,
        65%,
        48% 
    );
  --color-accent-hsl: 353, 65%, 54%;
  --color-accent-rgb: 208, 66, 85;
  --dark: var(--text-normal, #e0e0e0);
  --darkgray: var(--text-normal, #e0e0e0);
  --divider-color: #383838;
  --divider-color-hover: hsl(
        353,
        65%,
        54%
    );
  --embed-block-shadow-hover: 0 0 0 1px #383838, inset 0 0 0 1px #383838;
  --embed-border-start: 2px solid hsl(
        353,
        65%,
        54%
    );
  --flair-color: #e0e0e0;
  --font-family-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  --font-family-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
  --footnote-divider-color: #383838;
  --footnote-id-color: #a0a0a0;
  --footnote-input-background-active: #2a2a2a;
  --footnote-radius: 3px;
  --graph-node: #a0a0a0;
  --graph-node-focused: hsl(
        353,
        65%,
        54%
    );
  --graph-text: #e0e0e0;
  --gray: var(--text-muted, #a0a0a0);
  --highlight: var(--background-modifier-hover, #2a2a2a);
  --hr-color: #383838;
  --icon-color: #a0a0a0;
  --icon-color-active: hsl(
        353,
        65%,
        54%
    );
  --icon-color-focused: #e0e0e0;
  --icon-color-hover: #a0a0a0;
  --input-background: #2d2d2d;
  --input-border-color: #383838;
  --input-focus-border-color: hsl(
        353,
        65%,
        54%
    );
  --input-text-color: #e0e0e0;
  --interactive-accent: hsl(
        353,
        65%,
        54%
    );
  --interactive-accent-hover: hsl(
        353,
        65%,
        48% 
    );
  --interactive-accent-hsl: 353, 65%, 54%;
  --interactive-accent-rgb: 208, 66, 85;
  --lightgray: var(--background-secondary, #252525);
  --link-color: hsl(
        353,
        65%,
        54%
    );
  --link-color-hover: hsl(
        353,
        65%,
        48% 
    );
  --link-external-color: hsl(
        353,
        65%,
        54%
    );
  --link-external-color-hover: hsl(
        353,
        65%,
        48% 
    );
  --link-unresolved-color: hsl(
        353,
        65%,
        54%
    );
  --link-unresolved-decoration-color: hsla(353, 65%, 54%, 0.3);
  --list-marker-color-collapsed: hsl(
        353,
        65%,
        54%
    );
  --list-marker-color-hover: #a0a0a0;
  --menu-background: #252525;
  --menu-radius: 5px;
  --metadata-border-color: #383838;
  --metadata-divider-color: #383838;
  --metadata-input-background-active: #2a2a2a;
  --metadata-input-text-color: #e0e0e0;
  --metadata-label-background-active: #2a2a2a;
  --metadata-label-text-color: #a0a0a0;
  --metadata-label-text-color-hover: #a0a0a0;
  --metadata-property-background-active: #2a2a2a;
  --modal-radius: 8px;
  --nav-heading-color: #e0e0e0;
  --nav-heading-color-collapsed-hover: #a0a0a0;
  --nav-heading-color-hover: #e0e0e0;
  --nav-item-background-active: #2a2a2a;
  --nav-item-background-hover: #2a2a2a;
  --nav-item-background-selected: hsla(353, 65%, 54%, 0.15);
  --nav-item-color: #a0a0a0;
  --nav-item-color-active: #e0e0e0;
  --nav-item-color-highlighted: hsl(
        353,
        65%,
        54%
    );
  --nav-item-color-hover: #e0e0e0;
  --nav-item-color-selected: #e0e0e0;
  --nav-item-radius: 3px;
  --nav-tag-color-active: #a0a0a0;
  --nav-tag-color-hover: #a0a0a0;
  --nav-tag-radius: 3px;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --pill-border-color: #383838;
  --pill-color: #a0a0a0;
  --pill-color-hover: #e0e0e0;
  --pill-color-remove-hover: hsl(
        353,
        65%,
        54%
    );
  --radius-l: 8px;
  --radius-m: 5px;
  --radius-s: 3px;
  --ribbon-background: #252525;
  --scrollbar-radius: 8px;
  --search-clear-button-color: #a0a0a0;
  --search-icon-color: #a0a0a0;
  --secondary: var(--text-accent, hsl(
        353,
        65%,
        54%
    ));
  --setting-group-heading-color: #e0e0e0;
  --setting-items-border-color: #383838;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #a0a0a0;
  --shiki-code-block-border-radius: 3px;
  --shiki-code-normal: #a0a0a0;
  --shiki-code-punctuation: #a0a0a0;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-text-color-highlight: #a0a0a0;
  --shiki-highlight-neutral: #a0a0a0;
  --sidebar-background: #1e1e1e;
  --sidebar-border-color: #383838;
  --slider-track-background: #383838;
  --spacing-l: 16px;
  --spacing-m: 12px;
  --spacing-s: 8px;
  --spacing-xl: 24px;
  --spacing-xs: 4px;
  --status-bar-background: #252525;
  --status-bar-border-color: #383838;
  --status-bar-radius: 5px 0 0 0;
  --status-bar-text-color: #a0a0a0;
  --tab-container-background: #252525;
  --tab-outline-color: #383838;
  --tab-radius: 3px;
  --tab-switcher-background: #252525;
  --tab-switcher-menubar-background: linear-gradient(to top, #252525, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(
        353,
        65%,
        54%
    );
  --tab-text-color-active: #a0a0a0;
  --tab-text-color-focused: #a0a0a0;
  --tab-text-color-focused-active: #a0a0a0;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: hsl(
        353,
        65%,
        54%
    );
  --table-add-button-border-color: #383838;
  --table-border-color: #383838;
  --table-drag-handle-background-active: hsl(
        353,
        65%,
        54%
    );
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: #383838;
  --table-header-color: #e0e0e0;
  --table-selection: hsla(353, 65%, 54%, 0.1);
  --table-selection-border-color: hsl(
        353,
        65%,
        54%
    );
  --tag-background: hsla(353, 65%, 54%, 0.1);
  --tag-background-hover: hsla(353, 65%, 54%, 0.2);
  --tag-border-color: hsla(353, 65%, 54%, 0.15);
  --tag-border-color-hover: hsla(353, 65%, 54%, 0.15);
  --tag-color: hsl(
        353,
        65%,
        54%
    );
  --tag-color-hover: hsl(
        353,
        65%,
        54%
    );
  --tertiary: var(--text-accent-hover, hsl(
        353,
        65%,
        48% 
    ));
  --text-accent: hsl(
        353,
        65%,
        54%
    );
  --text-accent-hover: hsl(
        353,
        65%,
        48% 
    );
  --text-accent-rgb: 208, 66, 85;
  --text-muted: #a0a0a0;
  --text-normal: #e0e0e0;
  --text-on-accent: #ffffff;
  --text-selection: rgba(
        208,
        66,
        85,
        0.3
    );
  --textHighlight: var(--background-modifier-hover, #2a2a2a);
  --titlebar-background: #1e1e1e;
  --titlebar-background-focused: #252525;
  --titlebar-border-color: #383838;
  --titlebar-text-color: #a0a0a0;
  --titlebar-text-color-focused: #e0e0e0;
  --vault-profile-color: #e0e0e0;
  --vault-profile-color-hover: #e0e0e0;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 30, 30);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(37, 37, 37);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(56, 56, 56);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 30, 30);
  border-left-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body html {
  --accent-color: hsl(
            353,
            65%,
            60%
        );
  --accent-color-hover: hsl(
            353,
            65%,
            48% 
        );
  --accent-color-rgb: 208, 66, 85;
  --accent-h: 353;
  --accent-l: 60%;
  --accent-s: 65%;
  --background-modifier-active: #303030;
  --background-modifier-border: #383838;
  --background-modifier-hover: #2a2a2a;
  --background-primary: #1e1e1e;
  --background-secondary: #252525;
  --color-accent: hsl(
            353,
            65%,
            60%
        );
  --color-accent-hover: hsl(
            353,
            65%,
            48% 
        );
  --color-accent-rgb: 208, 66, 85;
  --font-family-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  --font-family-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
  --input-background: #2d2d2d;
  --input-border-color: #383838;
  --input-focus-border-color: hsl(
            353,
            65%,
            60%
        );
  --input-text-color: #e0e0e0;
  --interactive-accent: hsl(
            353,
            65%,
            60%
        );
  --interactive-accent-hover: hsl(
            353,
            65%,
            48% 
        );
  --interactive-accent-rgb: 208, 66, 85;
  --radius-l: 8px;
  --radius-m: 5px;
  --radius-s: 3px;
  --sidebar-background: #1e1e1e;
  --sidebar-border-color: #383838;
  --spacing-l: 16px;
  --spacing-m: 12px;
  --spacing-s: 8px;
  --spacing-xl: 24px;
  --spacing-xs: 4px;
  --text-accent: hsl(
            353,
            65%,
            60%
        );
  --text-accent-hover: hsl(
            353,
            65%,
            48% 
        );
  --text-accent-rgb: 208, 66, 85;
  --text-muted: #a0a0a0;
  --text-normal: #e0e0e0;
  --text-on-accent: #ffffff;
  --text-selection: rgba(
            208,
            66,
            85,
            0.3
        );
  --titlebar-background: #1e1e1e;
  --titlebar-background-focused: #252525;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(45, 45, 45);
  border-color: rgb(56, 56, 56);
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(214, 61, 79);
  border-color: rgb(214, 61, 79);
}

html[saved-theme="dark"] body p {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration-color: rgb(160, 160, 160);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(214, 61, 79);
  outline: rgb(214, 61, 79) none 0px;
  text-decoration-color: rgb(214, 61, 79);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 61, 79);
  outline: rgb(214, 61, 79) none 0px;
  text-decoration-color: rgb(214, 61, 79);
  transition: color 0.2s;
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(214, 61, 79);
  outline: rgb(214, 61, 79) none 0px;
  text-decoration: rgba(214, 61, 79, 0.3);
  text-decoration-color: rgba(214, 61, 79, 0.3);
  transition: color 0.2s;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(214, 61, 79);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 4px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(160, 160, 160);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
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
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(224, 224, 224);
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
  background-color: rgb(45, 45, 45);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 32px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(214, 61, 79);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(45, 45, 45);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(56, 56, 56);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(56, 56, 56);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(214, 61, 79);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(214, 61, 79);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(208, 66, 85, 0.15);
  border-bottom-color: rgba(208, 66, 85, 0.4);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 66, 85, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(208, 66, 85, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(208, 66, 85, 0.4);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  font-weight: 500;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(214, 61, 79);
}

html[saved-theme="dark"] body h1 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h2 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h3 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h4 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h5 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h6 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 224, 224);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 56, 56);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(56, 56, 56);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 224, 224);
  cursor: pointer;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 5px;
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(160, 160, 160);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(224, 224, 224);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 56, 56);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(56, 56, 56);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 224, 224);
  cursor: pointer;
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(224, 224, 224);
  stroke: rgb(224, 224, 224);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(160, 160, 160);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(37, 37, 37);
  border-color: rgb(224, 224, 224);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(56, 56, 56);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(208, 66, 85, 0.15);
  border-radius: 5px;
  color: rgb(214, 61, 79);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body div#quartz-root {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(37, 37, 37);
  border-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(37, 37, 37);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(224, 224, 224);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(45, 45, 45);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 56, 56);
  border-left-width: 1px;
  border-right-color: rgb(56, 56, 56);
  border-right-width: 1px;
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(224, 224, 224);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(208, 66, 85, 0.15);
  border-bottom-color: rgba(208, 66, 85, 0.4);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 66, 85, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(208, 66, 85, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(208, 66, 85, 0.4);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(214, 61, 79);
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: hsl(
        353,
        65%,
        60%
    );
  --accent-color-hover: hsl(
        353,
        65%,
        48% 
    );
  --accent-color-rgb: 208, 66, 85;
  --accent-h: 353;
  --accent-l: 60%;
  --accent-s: 65%;
  --background-modifier-active: #e8eaed;
  --background-modifier-active-hover: hsla(353, 65%, 60%, 0.1);
  --background-modifier-border: #dadce0;
  --background-modifier-hover: #f1f3f4;
  --background-secondary: #f8f9fa;
  --bases-cards-radius: 5px;
  --bases-cards-shadow: 0 0 0 1px #dadce0;
  --bases-embed-border-color: #dadce0;
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: #5f6368;
  --bases-table-border-color: #dadce0;
  --bases-table-cell-background-selected: hsla(353, 65%, 60%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
        353,
        65%,
        60%
    );
  --bases-table-container-border-radius: 3px;
  --bases-table-header-background-hover: #f1f3f4;
  --bases-table-header-color: #5f6368;
  --bases-table-summary-background-hover: #f1f3f4;
  --blockquote-border-color: hsl(
        353,
        65%,
        60%
    );
  --callout-radius: 3px;
  --canvas-controls-radius: 3px;
  --caret-color: #202124;
  --checkbox-border-color-hover: #5f6368;
  --checkbox-color: hsl(
        353,
        65%,
        60%
    );
  --checkbox-color-hover: hsl(
        353,
        65%,
        48% 
    );
  --checkbox-radius: 3px;
  --checklist-done-color: #5f6368;
  --clickable-icon-radius: 3px;
  --code-border-color: #dadce0;
  --code-bracket-background: #f1f3f4;
  --code-normal: #202124;
  --code-punctuation: #5f6368;
  --code-radius: 3px;
  --collapse-icon-color-collapsed: hsl(
        353,
        65%,
        60%
    );
  --color-accent: hsl(
        353,
        65%,
        60%
    );
  --color-accent-1: hsl(352, 65.65%, 64.5%);
  --color-accent-2: hsl(350, 66.3%, 69%);
  --color-accent-hover: hsl(
        353,
        65%,
        48% 
    );
  --color-accent-hsl: 353, 65%, 60%;
  --color-accent-rgb: 208, 66, 85;
  --dark: var(--text-normal, #202124);
  --darkgray: var(--text-normal, #202124);
  --divider-color: #dadce0;
  --divider-color-hover: hsl(
        353,
        65%,
        60%
    );
  --embed-block-shadow-hover: 0 0 0 1px #dadce0, inset 0 0 0 1px #dadce0;
  --embed-border-start: 2px solid hsl(
        353,
        65%,
        60%
    );
  --flair-color: #202124;
  --font-family-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  --font-family-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
  --footnote-divider-color: #dadce0;
  --footnote-id-color: #5f6368;
  --footnote-input-background-active: #f1f3f4;
  --footnote-radius: 3px;
  --graph-node: #5f6368;
  --graph-node-focused: hsl(
        353,
        65%,
        60%
    );
  --graph-text: #202124;
  --gray: var(--text-muted, #5f6368);
  --highlight: var(--background-modifier-hover, #f1f3f4);
  --hr-color: #dadce0;
  --icon-color: #5f6368;
  --icon-color-active: hsl(
        353,
        65%,
        60%
    );
  --icon-color-focused: #202124;
  --icon-color-hover: #5f6368;
  --input-background: #ffffff;
  --input-border-color: #dadce0;
  --input-focus-border-color: hsl(
        353,
        65%,
        60%
    );
  --input-text-color: #202124;
  --interactive-accent: hsl(
        353,
        65%,
        60%
    );
  --interactive-accent-hover: hsl(
        353,
        65%,
        48% 
    );
  --interactive-accent-hsl: 353, 65%, 60%;
  --interactive-accent-rgb: 208, 66, 85;
  --lightgray: var(--background-secondary, #f8f9fa);
  --link-color: hsl(
        353,
        65%,
        60%
    );
  --link-color-hover: hsl(
        353,
        65%,
        48% 
    );
  --link-external-color: hsl(
        353,
        65%,
        60%
    );
  --link-external-color-hover: hsl(
        353,
        65%,
        48% 
    );
  --link-unresolved-color: hsl(
        353,
        65%,
        60%
    );
  --link-unresolved-decoration-color: hsla(353, 65%, 60%, 0.3);
  --list-marker-color-collapsed: hsl(
        353,
        65%,
        60%
    );
  --list-marker-color-hover: #5f6368;
  --menu-background: #f8f9fa;
  --menu-radius: 5px;
  --metadata-border-color: #dadce0;
  --metadata-divider-color: #dadce0;
  --metadata-input-background-active: #f1f3f4;
  --metadata-input-text-color: #202124;
  --metadata-label-background-active: #f1f3f4;
  --metadata-label-text-color: #5f6368;
  --metadata-label-text-color-hover: #5f6368;
  --metadata-property-background-active: #f1f3f4;
  --modal-radius: 8px;
  --nav-heading-color: #202124;
  --nav-heading-color-collapsed-hover: #5f6368;
  --nav-heading-color-hover: #202124;
  --nav-item-background-active: #f1f3f4;
  --nav-item-background-hover: #f1f3f4;
  --nav-item-background-selected: hsla(353, 65%, 60%, 0.15);
  --nav-item-color: #5f6368;
  --nav-item-color-active: #202124;
  --nav-item-color-highlighted: hsl(
        353,
        65%,
        60%
    );
  --nav-item-color-hover: #202124;
  --nav-item-color-selected: #202124;
  --nav-item-radius: 3px;
  --nav-tag-color-active: #5f6368;
  --nav-tag-color-hover: #5f6368;
  --nav-tag-radius: 3px;
  --pill-border-color: #dadce0;
  --pill-color: #5f6368;
  --pill-color-hover: #202124;
  --pill-color-remove-hover: hsl(
        353,
        65%,
        60%
    );
  --radius-l: 8px;
  --radius-m: 5px;
  --radius-s: 3px;
  --ribbon-background: #f8f9fa;
  --scrollbar-radius: 8px;
  --search-clear-button-color: #5f6368;
  --search-icon-color: #5f6368;
  --secondary: var(--text-accent, hsl(
        353,
        65%,
        60%
    ));
  --setting-group-heading-color: #202124;
  --setting-items-border-color: #dadce0;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #5f6368;
  --shiki-code-block-border-radius: 3px;
  --shiki-code-normal: #5f6368;
  --shiki-code-punctuation: #5f6368;
  --shiki-gutter-border-color: #dadce0;
  --shiki-gutter-text-color-highlight: #5f6368;
  --shiki-highlight-neutral: #5f6368;
  --sidebar-background: #ffffff;
  --sidebar-border-color: #dadce0;
  --slider-track-background: #dadce0;
  --spacing-l: 16px;
  --spacing-m: 12px;
  --spacing-s: 8px;
  --spacing-xl: 24px;
  --spacing-xs: 4px;
  --status-bar-background: #f8f9fa;
  --status-bar-border-color: #dadce0;
  --status-bar-radius: 5px 0 0 0;
  --status-bar-text-color: #5f6368;
  --tab-container-background: #f8f9fa;
  --tab-outline-color: #dadce0;
  --tab-radius: 3px;
  --tab-switcher-background: #f8f9fa;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8f9fa, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(
        353,
        65%,
        60%
    );
  --tab-text-color-active: #5f6368;
  --tab-text-color-focused: #5f6368;
  --tab-text-color-focused-active: #5f6368;
  --tab-text-color-focused-active-current: #202124;
  --tab-text-color-focused-highlighted: hsl(
        353,
        65%,
        60%
    );
  --table-add-button-border-color: #dadce0;
  --table-border-color: #dadce0;
  --table-drag-handle-background-active: hsl(
        353,
        65%,
        60%
    );
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: #dadce0;
  --table-header-color: #202124;
  --table-selection: hsla(353, 65%, 60%, 0.1);
  --table-selection-border-color: hsl(
        353,
        65%,
        60%
    );
  --tag-background: hsla(353, 65%, 60%, 0.1);
  --tag-background-hover: hsla(353, 65%, 60%, 0.2);
  --tag-border-color: hsla(353, 65%, 60%, 0.15);
  --tag-border-color-hover: hsla(353, 65%, 60%, 0.15);
  --tag-color: hsl(
        353,
        65%,
        60%
    );
  --tag-color-hover: hsl(
        353,
        65%,
        60%
    );
  --tertiary: var(--text-accent-hover, hsl(
        353,
        65%,
        48% 
    ));
  --text-accent: hsl(
        353,
        65%,
        60%
    );
  --text-accent-hover: hsl(
        353,
        65%,
        48% 
    );
  --text-accent-rgb: 208, 66, 85;
  --text-muted: #5f6368;
  --text-normal: #202124;
  --text-on-accent: #ffffff;
  --text-selection: rgba(
        208,
        66,
        85,
        0.2
    );
  --textHighlight: var(--background-modifier-hover, #f1f3f4);
  --titlebar-background: #ffffff;
  --titlebar-background-focused: #f8f9fa;
  --titlebar-border-color: #dadce0;
  --titlebar-text-color: #5f6368;
  --titlebar-text-color-focused: #202124;
  --vault-profile-color: #202124;
  --vault-profile-color-hover: #202124;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 249, 250);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(218, 220, 224);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body html {
  --accent-color: hsl(
            353,
            65%,
            60%
        );
  --accent-color-hover: hsl(
            353,
            65%,
            48% 
        );
  --accent-color-rgb: 208, 66, 85;
  --accent-h: 353;
  --accent-l: 60%;
  --accent-s: 65%;
  --background-modifier-active: #303030;
  --background-modifier-border: #383838;
  --background-modifier-hover: #2a2a2a;
  --background-primary: #1e1e1e;
  --background-secondary: #252525;
  --color-accent: hsl(
            353,
            65%,
            60%
        );
  --color-accent-hover: hsl(
            353,
            65%,
            48% 
        );
  --color-accent-rgb: 208, 66, 85;
  --font-family-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  --font-family-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
  --input-background: #2d2d2d;
  --input-border-color: #383838;
  --input-focus-border-color: hsl(
            353,
            65%,
            60%
        );
  --input-text-color: #e0e0e0;
  --interactive-accent: hsl(
            353,
            65%,
            60%
        );
  --interactive-accent-hover: hsl(
            353,
            65%,
            48% 
        );
  --interactive-accent-rgb: 208, 66, 85;
  --radius-l: 8px;
  --radius-m: 5px;
  --radius-s: 3px;
  --sidebar-background: #1e1e1e;
  --sidebar-border-color: #383838;
  --spacing-l: 16px;
  --spacing-m: 12px;
  --spacing-s: 8px;
  --spacing-xl: 24px;
  --spacing-xs: 4px;
  --text-accent: hsl(
            353,
            65%,
            60%
        );
  --text-accent-hover: hsl(
            353,
            65%,
            48% 
        );
  --text-accent-rgb: 208, 66, 85;
  --text-muted: #a0a0a0;
  --text-normal: #e0e0e0;
  --text-on-accent: #ffffff;
  --text-selection: rgba(
            208,
            66,
            85,
            0.3
        );
  --titlebar-background: #1e1e1e;
  --titlebar-background-focused: #252525;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body del {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(255, 255, 255);
  border-color: rgb(218, 220, 224);
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(219, 87, 102);
  border-color: rgb(219, 87, 102);
}

html[saved-theme="light"] body p {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  outline: rgb(95, 99, 104) none 0px;
  text-decoration-color: rgb(95, 99, 104);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(219, 87, 102);
  outline: rgb(219, 87, 102) none 0px;
  text-decoration-color: rgb(219, 87, 102);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(219, 87, 102);
  outline: rgb(219, 87, 102) none 0px;
  text-decoration-color: rgb(219, 87, 102);
  transition: color 0.2s;
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(219, 87, 102);
  outline: rgb(219, 87, 102) none 0px;
  text-decoration: rgba(219, 87, 102, 0.3);
  text-decoration-color: rgba(219, 87, 102, 0.3);
  transition: color 0.2s;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body dt {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ol > li {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ul > li {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body table {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body figcaption {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(32, 33, 36);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(95, 99, 104);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(219, 87, 102);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 4px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(95, 99, 104);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
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
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(32, 33, 36);
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
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 32px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(219, 87, 102);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(218, 220, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(218, 220, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(219, 87, 102);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(219, 87, 102);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(208, 66, 85, 0.15);
  border-bottom-color: rgba(208, 66, 85, 0.4);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 66, 85, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(208, 66, 85, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(208, 66, 85, 0.4);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  font-weight: 500;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(219, 87, 102);
}

html[saved-theme="light"] body h1 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h2 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h3 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h4 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h5 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h6 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(32, 33, 36);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(218, 220, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(218, 220, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(32, 33, 36);
  cursor: pointer;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 5px;
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(95, 99, 104);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(32, 33, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(218, 220, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(218, 220, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(32, 33, 36);
  cursor: pointer;
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(32, 33, 36);
  stroke: rgb(32, 33, 36);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(95, 99, 104);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(95, 99, 104);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(32, 33, 36);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(218, 220, 224);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(208, 66, 85, 0.15);
  border-radius: 5px;
  color: rgb(219, 87, 102);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(248, 249, 250);
  border-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(248, 249, 250);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(32, 33, 36);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body abbr {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(218, 220, 224);
  border-left-width: 1px;
  border-right-color: rgb(218, 220, 224);
  border-right-width: 1px;
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(32, 33, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(32, 33, 36);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body sub {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body summary {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body sup {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(208, 66, 85, 0.15);
  border-bottom-color: rgba(208, 66, 85, 0.4);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 66, 85, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(208, 66, 85, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(208, 66, 85, 0.4);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(219, 87, 102);
}`,
  },
};
