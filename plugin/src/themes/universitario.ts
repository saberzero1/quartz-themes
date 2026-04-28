import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "universitario",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --A01: hsl(150, 15%, 25%);
  --A02: hsl(160, 15%, 25%);
  --A03: hsl(170, 15%, 25%);
  --A04: hsl(180, 15%, 25%);
  --A05: hsl(190, 15%, 25%);
  --A06: hsl(200, 15%, 25%);
  --A07: hsl(195, 15%, 25%);
  --A08: hsl(190, 15%, 25%);
  --A09: hsl(180, 15%, 25%);
  --A10: hsl(170, 15%, 25%);
  --A11: hsl(160, 15%, 25%);
  --accent-h: 150;
  --accent-l: 65%;
  --accent-s: 80%;
  --background-highlight: hsl(220, 40%, 25%);
  --background-modifier-active-hover: hsla(150, 80%, 65%, 0.15);
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-primary: hsl(140, 15%, 10%);
  --background-primary-alt: hsl(150, 10%, 15%);
  --background-primary-alt-1: hsl(150, 10%, 15%);
  --background-search: hsl(140, 25%, 30%);
  --background-secondary: hsl(160, 5%, 30%);
  --background-table: hsl(120, -5%, 30%);
  --background-tertiary: hsl(130, 10%, 20%);
  --bases-cards-background: hsl(140, 15%, 10%);
  --bases-cards-cover-background: hsl(150, 10%, 15%);
  --bases-group-heading-property-color: white;
  --bases-table-cell-background-active: hsl(140, 15%, 10%);
  --bases-table-cell-background-disabled: hsl(150, 10%, 15%);
  --bases-table-cell-background-selected: hsla(150, 80%, 65%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(150, 80%, 65%);
  --bases-table-group-background: hsl(150, 10%, 15%);
  --bases-table-header-background: hsl(140, 15%, 10%);
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075);
  --bases-table-header-color: white;
  --bases-table-summary-background: hsl(140, 15%, 10%);
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075);
  --blockquote-border-color: hsl(150, 80%, 65%);
  --bold-color: hsl(170, 50%, 70%);
  --bold-weight: 600;
  --callout-border-opacity: 0;
  --callout-content-padding: 0px 12px;
  --callout-gap: 1em;
  --callout-margin: 0px;
  --callout-min-width: 200px;
  --callout-nowrap-min-width: 250px;
  --callout-padding: 4px 11px 11px 11px;
  --callout-radius: 10px;
  --callout-title-background: transparent;
  --callout-title-size: 1.1em;
  --canvas-background: hsl(140, 15%, 10%);
  --canvas-card-label-color: hsl(230, 30%, 75%);
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --cbs: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.03),
        0px 4px 8px rgba(0, 0, 0, 0.05), 0px 0px 12px rgba(0, 0, 0, 0.03),
        0px 2px 16px rgba(0, 0, 0, 0.03), 0px 4px 20px rgba(0, 0, 0, 0.02);
  --checkbox-border-color: hsl(230, 30%, 75%);
  --checkbox-border-color-hover: white;
  --checkbox-color: hsl(150, 80%, 65%);
  --checkbox-color-hover: hsl(147, 81.6%, 74.75%);
  --checkbox-marker-color: hsl(140, 15%, 10%);
  --checklist-done-color: white;
  --code-background: hsl(150, 10%, 15%);
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(230, 30%, 75%);
  --code-normal: white;
  --code-punctuation: white;
  --collapse-icon-color: hsl(230, 30%, 75%);
  --collapse-icon-color-collapsed: hsl(147, 81.6%, 74.75%);
  --color-accent: hsl(150, 80%, 65%);
  --color-accent-1: hsl(147, 81.6%, 74.75%);
  --color-accent-2: hsl(145, 84%, 83.85%);
  --color-accent-hsl: 150, 80%, 65%;
  --dark: var(--text-muted, white);
  --darkgray: var(--text-muted, white);
  --divider-color: transparent;
  --divider-color-hover: hsl(150, 80%, 65%);
  --embed-block-shadow-hover: 0 0 0 1px #363636,
        inset 0 0 0 1px #363636;
  --embed-border-left: 2px solid hsl(150, 80%, 65%);
  --embed-border-right: none;
  --embed-border-start: 2px solid hsl(150, 80%, 65%);
  --file-header-background: hsl(140, 15%, 10%);
  --file-header-background-focused: hsl(140, 15%, 10%);
  --file-margins: 32px;
  --footnote-id-color: white;
  --footnote-id-color-no-occurrences: hsl(230, 30%, 75%);
  --footnote-input-background-active: rgba(255, 255, 255, 0.075);
  --graph-line: hsl(147, 81.6%, 74.75%);
  --graph-node: hsl(147, 81.6%, 74.75%);
  --graph-node-focused: hsl(147, 81.6%, 74.75%);
  --graph-node-unresolved: hsl(230, 30%, 75%);
  --gray: var(--text-muted, white);
  --h1-size: 2.5rem;
  --h2-size: 2.0rem;
  --h2-weight: 600;
  --h3-size: 1.7rem;
  --h3-weight: 600;
  --h4-size: 1.5rem;
  --h4-weight: 600;
  --h5-color: #e1aaff;
  --h5-size: 1.3rem;
  --h5-weight: 600;
  --h6-color: #ffafc8;
  --h6-size: 1.2rem;
  --heading-formatting: hsl(230, 30%, 75%);
  --highlight: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --icon-color: hsl(150, 80%, 90%);
  --icon-color-active: hsl(147, 81.6%, 74.75%);
  --icon-color-hover: white;
  --indentation-guide-color: hsl(160, 5%, 30%);
  --indentation-guide-color-active: rgb(255, 255, 255);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-size: 2.5rem;
  --input-date-separator: hsl(230, 30%, 75%);
  --input-placeholder-color: hsl(230, 30%, 75%);
  --interactive-accent: hsl(150, 80%, 65%);
  --interactive-accent-hover: hsl(147, 81.6%, 74.75%);
  --interactive-accent-hsl: 150, 80%, 65%;
  --italic-color: hsl(210, 50%, 75%);
  --light: var(--background-primary, hsl(140, 15%, 10%));
  --lightgray: var(--background-secondary, hsl(160, 5%, 30%));
  --link-color: hsl(150, 80%, 82%);
  --link-color-hover: hsl(150, 80%, 87%);
  --link-external-color: hsl(147, 81.6%, 74.75%);
  --link-external-color-hover: hsl(145, 84%, 83.85%);
  --link-unresolved-color: hsl(147, 81.6%, 74.75%);
  --link-unresolved-decoration-color: hsla(150, 80%, 65%, 0.3);
  --list-bullet-size: 0.3rem;
  --list-indent: 3em;
  --list-marker-color: hsl(150, 80%, 100%);
  --list-marker-color-collapsed: hsl(147, 81.6%, 74.75%);
  --list-marker-color-hover: hsl(147, 81.6%, 74.75%);
  --list-spacing: 0.2em;
  --mcc-img-snw-display: none;
  --menu-background: hsl(160, 5%, 30%);
  --metadata-input-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-text-color: white;
  --metadata-label-text-color-hover: white;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075);
  --modal-background: hsl(140, 15%, 10%);
  --nav-collapse-icon-color: hsl(230, 30%, 75%);
  --nav-collapse-icon-color-collapsed: hsl(230, 30%, 75%);
  --nav-heading-color-collapsed: hsl(230, 30%, 75%);
  --nav-heading-color-collapsed-hover: white;
  --nav-indentation-guide-color: transparent;
  --nav-item-background-active: rgba(255, 255, 255, 0.075);
  --nav-item-background-hover: rgba(255, 255, 255, 0.075);
  --nav-item-background-selected: hsla(150, 80%, 65%, 0.15);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: white;
  --nav-item-color-highlighted: hsl(145, 84%, 83.85%);
  --nav-item-white-space: nowrap;
  --nav-tag-color: hsl(230, 30%, 75%);
  --nav-tag-color-active: white;
  --nav-tag-color-hover: white;
  --pdf-background: hsl(140, 15%, 10%);
  --pdf-page-background: hsl(140, 15%, 10%);
  --pdf-sidebar-background: hsl(140, 15%, 10%);
  --pill-color: white;
  --pill-color-remove: hsl(230, 30%, 75%);
  --pill-color-remove-hover: hsl(147, 81.6%, 74.75%);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: hsl(140, 15%, 10%);
  --red: hsla(150, 80%, 65%, 0.9);
  --ribbon-background: hsl(160, 5%, 30%);
  --ribbon-background-collapsed: hsl(160, 5%, 30%);
  --scrollbar-active-thumb-bg: hsla(150, 80%, 65%, 0.2);
  --scrollbar-bg: hsla(150, 80%, 65%, 0.2);
  --scrollbar-thumb-bg: hsla(150, 80%, 65%, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: hsl(140, 15%, 10%);
  --secondary: var(--text-accent, hsl(147, 81.6%, 74.75%));
  --setting-items-background: hsl(150, 10%, 15%);
  --shiki-active-tab-border-color: white;
  --shiki-code-background: hsl(150, 10%, 15%);
  --shiki-code-comment: hsl(230, 30%, 75%);
  --shiki-code-normal: white;
  --shiki-code-punctuation: white;
  --shiki-gutter-text-color: hsl(230, 30%, 75%);
  --shiki-gutter-text-color-highlight: white;
  --shiki-highlight-neutral: white;
  --shiki-terminal-dots-color: hsl(230, 30%, 75%);
  --slider-thumb-radius: 50%;
  --status-bar-background: hsl(130, 10%, 20%);
  --status-bar-border-color: hsl(147, 81.6%, 74.75%);
  --status-bar-border-width: 0px;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: white;
  --suggestion-background: hsl(140, 15%, 10%);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: transparent;
  --tab-container-background: hsl(140, 15%, 10%);
  --tab-outline-color: transparent;
  --tab-stacked-text-align: left;
  --tab-switcher-background: hsl(160, 5%, 30%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(160, 5%, 30%), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(150, 80%, 65%);
  --tab-text-color: hsl(230, 30%, 75%);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-highlighted: hsl(147, 81.6%, 74.75%);
  --table-drag-handle-background-active: hsl(150, 80%, 65%);
  --table-drag-handle-color: hsl(230, 30%, 75%);
  --table-drag-padding: 16px;
  --table-drag-space: 16px;
  --table-selection: hsla(150, 80%, 65%, 0.1);
  --table-selection-border-color: hsl(150, 80%, 65%);
  --tag-background: hsla(150, 80%, 65%, 0.1);
  --tag-background-hover: hsla(150, 80%, 65%, 0.2);
  --tag-border-color: hsla(150, 80%, 65%, 0.15);
  --tag-border-color-hover: hsla(150, 80%, 65%, 0.15);
  --tag-color: hsl(147, 81.6%, 74.75%);
  --tag-color-hover: hsl(147, 81.6%, 74.75%);
  --tertiary: var(--text-accent-hover, hsl(145, 84%, 83.85%));
  --text-accent: hsl(147, 81.6%, 74.75%);
  --text-accent-hover: hsl(145, 84%, 83.85%);
  --text-faint: hsl(230, 30%, 75%);
  --text-important: hsl(160, 80%, 95%);
  --text-muted: white;
  --text-selection: hsla(150, 80%, 65%, 0.33);
  --text-title: hsl(150, 60%, 85%);
  --textHighlight: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --titlebar-background: hsl(140, 15%, 10%);
  --titlebar-background-focused: hsl(140, 15%, 10%);
  --titlebar-text-color: white;
  --vault-name-color: #dadada;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(22, 29, 24));
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(22, 29, 24));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-primary, rgb(22, 29, 24));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(22, 29, 24));
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body html {
  border: 0px none rgb(0, 0, 0);
  border-bottom: 0px none rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  border-left: 0px none rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right: 0px none rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top: 0px none rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  caret-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  column-rule-color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  outline-color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
  text-fill-color: rgb(0, 0, 0);
  text-stroke: 0px rgb(0, 0, 0);
  text-stroke-color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(140, 217, 204));
  outline: rgb(140, 217, 204) none 0px;
  text-decoration-color: rgb(140, 217, 204);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(159, 191, 223));
  outline: rgb(159, 191, 223) none 0px;
  text-decoration-color: rgb(159, 191, 223);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(159, 191, 223));
  outline: rgb(159, 191, 223) none 0px;
  text-decoration-color: rgb(159, 191, 223);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(140, 217, 204));
  outline: rgb(140, 217, 204) none 0px;
  text-decoration-color: rgb(140, 217, 204);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(38, 55, 89));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(172, 179, 210);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(94, 237, 166));
  border-color: rgb(94, 237, 166);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(255, 255, 255));
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(138, 243, 185));
  outline: rgb(138, 243, 185) none 0px;
  text-decoration-color: rgb(138, 243, 185);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(172, 246, 209));
  outline: rgb(172, 246, 209) none 0px;
  text-decoration-color: rgb(172, 246, 209);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(138, 243, 185));
  outline: rgb(138, 243, 185) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(138, 243, 185));
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(172, 179, 210));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(46, 56, 48));
  font-style: var(--blockquote-font-style, italic);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body table {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 1px;
  width: 664px;
}

html[saved-theme="dark"] body td {
  background-color: rgb(77, 77, 77);
  text-align: center;
}

html[saved-theme="dark"] body th {
  background-color: rgb(46, 56, 48);
  border-bottom-width: 0px;
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-width: 0px;
  border-top-width: var(--table-header-border-width, 0px);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(54, 54, 54);
  border-left-color: rgb(54, 54, 54);
  border-right-color: rgb(54, 54, 54);
  border-top-color: rgb(54, 54, 54);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(54, 54, 54);
  border-left-color: rgb(54, 54, 54);
  border-right-color: rgb(54, 54, 54);
  border-top-color: rgb(54, 54, 54);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgb(255, 255, 255));
  font-family: var(--ec-codeFontFml, "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(34, 42, 38));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(34, 42, 38));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(172, 179, 210);
  border-left-color: rgb(172, 179, 210);
  border-right-color: rgb(172, 179, 210);
  border-top-color: rgb(172, 179, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 29, 24);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 29, 24);
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
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 74, 176, 255;
  background: rgba(74, 176, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(74, 176, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(74, 176, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(74, 176, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(74, 176, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="anki"] {
  --callout-color: 100, 255, 255;
  --table-border-color: color-mix(in srgb, rgb(100, 255, 255) 25%, hsl(140, 15%, 10%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(100, 255, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(100, 255, 255, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(100, 255, 255, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(100, 255, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="author"] {
  --callout-color: 255, 240, 100;
  --table-border-color: color-mix(in srgb, rgb(255, 240, 100) 25%, hsl(140, 15%, 10%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(255, 240, 100, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 240, 100, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(255, 240, 100, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(255, 240, 100, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 252, 95, 142;
  background: rgba(252, 95, 142, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(252, 95, 142, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(252, 95, 142, 0);
  border-left-width: 3px;
  border-right-color: rgba(252, 95, 142, 0);
  border-right-width: 3px;
  border-top-color: rgba(252, 95, 142, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="con"] {
  --callout-color: 255, 84, 84;
  --table-border-color: color-mix(in srgb, rgb(255, 84, 84) 25%, hsl(140, 15%, 10%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(255, 84, 84, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 84, 84, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(255, 84, 84, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(255, 84, 84, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 255, 74, 74;
  background: rgba(255, 74, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 74, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 74, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 74, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 74, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="exactas"] {
  --callout-color: 74, 202, 234;
  --table-border-color: color-mix(in srgb, rgb(74, 202, 234) 25%, hsl(140, 15%, 10%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(74, 202, 234, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(74, 202, 234, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(74, 202, 234, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(74, 202, 234, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 184, 148, 255;
  background: rgba(184, 148, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(184, 148, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(184, 148, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(184, 148, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(184, 148, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 255, 74, 74;
  background: rgba(255, 74, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 74, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 74, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 74, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 74, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="humanidades"] {
  --callout-color: 234, 183, 74;
  --table-border-color: color-mix(in srgb, rgb(234, 183, 74) 25%, hsl(140, 15%, 10%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(234, 183, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(234, 183, 74, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(234, 183, 74, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(234, 183, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --callout-color: 238, 255, 139;
  --table-border-color: color-mix(in srgb, rgb(238, 255, 139) 25%, hsl(140, 15%, 10%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(238, 255, 139, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(238, 255, 139, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(238, 255, 139, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(238, 255, 139, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 74, 176, 255;
  background: rgba(74, 176, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(74, 176, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(74, 176, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(74, 176, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(74, 176, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="multi-column"] {
  --callout-color: 2, 122, 255;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(140, 15%, 10%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="naturales"] {
  --callout-color: 99, 180, 102;
  --table-border-color: color-mix(in srgb, rgb(99, 180, 102) 25%, hsl(140, 15%, 10%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(99, 180, 102, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(99, 180, 102, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(99, 180, 102, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(99, 180, 102, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 255, 130, 255;
  background: rgba(255, 130, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 130, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 130, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 130, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 130, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="pro"] {
  --callout-color: 65, 201, 108;
  --table-border-color: color-mix(in srgb, rgb(65, 201, 108) 25%, hsl(140, 15%, 10%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(65, 201, 108, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(65, 201, 108, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(65, 201, 108, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(65, 201, 108, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 255, 128, 183;
  background: rgba(255, 128, 183, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 128, 183, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 128, 183, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 128, 183, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 128, 183, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 184, 148, 255;
  background: rgba(184, 148, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(184, 148, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(184, 148, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(184, 148, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(184, 148, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="related"] {
  --callout-color: 184, 148, 255;
  --table-border-color: color-mix(in srgb, rgb(184, 148, 255) 25%, hsl(140, 15%, 10%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(184, 148, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(184, 148, 255, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(184, 148, 255, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(184, 148, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 77, 224, 185;
  background: rgba(77, 224, 185, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(77, 224, 185, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(77, 224, 185, 0);
  border-left-width: 3px;
  border-right-color: rgba(77, 224, 185, 0);
  border-right-width: 3px;
  border-top-color: rgba(77, 224, 185, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 244, 138, 74;
  background: rgba(244, 138, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(244, 138, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(244, 138, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(244, 138, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(244, 138, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 170, 230, 89;
  background: rgba(170, 230, 89, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(170, 230, 89, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(170, 230, 89, 0);
  border-left-width: 3px;
  border-right-color: rgba(170, 230, 89, 0);
  border-right-width: 3px;
  border-top-color: rgba(170, 230, 89, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 244, 138, 74;
  background: rgba(244, 138, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(244, 138, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(244, 138, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(244, 138, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(244, 138, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(var(--callout-color), rgb(100, 255, 255));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="anki"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="author"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6 4 14'/%3E%3Cpath d='M12 6v14'/%3E%3Cpath d='M8 8v12'/%3E%3Cpath d='M4 4v16'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="con"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="exactas"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='16' height='20' x='4' y='2' rx='2'/%3E%3Cline x1='8' x2='16' y1='6' y2='6'/%3E%3Cline x1='16' x2='16' y1='14' y2='18'/%3E%3Cpath d='M16 10h.01'/%3E%3Cpath d='M12 10h.01'/%3E%3Cpath d='M8 10h.01'/%3E%3Cpath d='M12 14h.01'/%3E%3Cpath d='M8 14h.01'/%3E%3Cpath d='M12 18h.01'/%3E%3Cpath d='M8 18h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="humanidades"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 18v-7'/%3E%3Cpath d='M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z'/%3E%3Cpath d='M14 18v-7'/%3E%3Cpath d='M18 18v-7'/%3E%3Cpath d='M3 22h18'/%3E%3Cpath d='M6 18v-7'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="naturales"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 18h8'/%3E%3Cpath d='M3 22h18'/%3E%3Cpath d='M14 22a7 7 0 1 0 0-14h-1'/%3E%3Cpath d='M9 14h2'/%3E%3Cpath d='M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z'/%3E%3Cpath d='M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="pro"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z'/%3E%3Cpath d='M7 10v12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="related"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m18 14 4 4-4 4'/%3E%3Cpath d='m18 2 4 4-4 4'/%3E%3Cpath d='M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22'/%3E%3Cpath d='M2 6h1.972a4 4 0 0 1 3.6 2.2'/%3E%3Cpath d='M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45'/%3E%3C/svg%3E");
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
  background-color: rgb(22, 29, 24);
  border-bottom-color: rgb(138, 243, 185);
  border-left-color: rgb(138, 243, 185);
  border-right-color: rgb(138, 243, 185);
  border-top-color: rgb(138, 243, 185);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(22, 29, 24));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(73, 80, 78));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(73, 80, 78);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-secondary, rgb(73, 80, 78));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(73, 80, 78));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(94, 237, 166, 0.1));
  border-bottom-color: rgba(94, 237, 166, 0.15);
  border-left-color: rgba(94, 237, 166, 0.15);
  border-right-color: rgba(94, 237, 166, 0.15);
  border-top-color: rgba(94, 237, 166, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(138, 243, 185);
}

html[saved-theme="dark"] body h1 {
  text-shadow: rgba(0, 0, 0, 0.7) 0px 0px 5px;
}

html[saved-theme="dark"] body h1.article-title {
  font-size: var(--inline-title-size, 40px);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(225, 170, 255));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(255, 175, 200));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 255, 130, 255;
  border-bottom-color: rgba(255, 130, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 130, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 130, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 130, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-important, rgb(232, 252, 246));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-important, rgb(232, 252, 246));
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(209, 250, 230);
  border-left-color: rgb(209, 250, 230);
  border-right-color: rgb(209, 250, 230);
  border-top-color: rgb(209, 250, 230);
  color: var(--icon-color, rgb(209, 250, 230));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(46, 56, 48));
  border-bottom-color: rgb(138, 243, 185);
  border-left-color: rgb(138, 243, 185);
  border-left-width: 0px;
  border-right-color: rgb(138, 243, 185);
  border-top-color: rgb(138, 243, 185);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(255, 255, 255);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  background-color: var(--colorful, rgb(54, 73, 64));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-important, rgb(232, 252, 246));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(232, 252, 246);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  background-color: var(--colorful, rgb(54, 73, 64));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(232, 252, 246);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-important, rgb(232, 252, 246));
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(209, 250, 230);
  border-left-color: rgb(209, 250, 230);
  border-right-color: rgb(209, 250, 230);
  border-top-color: rgb(209, 250, 230);
  color: var(--icon-color, rgb(209, 250, 230));
}

html[saved-theme="dark"] body .darkmode svg {
  color: var(--icon-color, rgb(209, 250, 230));
  stroke: rgb(209, 250, 230);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(194, 240, 217);
  border-left-color: rgb(194, 240, 217);
  border-right-color: rgb(194, 240, 217);
  border-top-color: rgb(194, 240, 217);
  color: rgb(194, 240, 217);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(172, 179, 210));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(73, 80, 78));
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgb(54, 54, 54);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(46, 56, 48);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  color: var(--text-muted, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(94, 237, 166, 0.1));
  color: var(--pill-color, rgb(138, 243, 185));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(22, 29, 24));
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-primary, rgb(22, 29, 24));
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(22, 29, 24));
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(46, 56, 48));
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(232, 252, 246);
  border-left-color: rgb(232, 252, 246);
  border-right-color: rgb(232, 252, 246);
  border-top-color: rgb(232, 252, 246);
  color: var(--text-important, rgb(232, 252, 246));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(34, 42, 38));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--code-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgb(46, 56, 48));
  border-bottom-color: rgba(94, 237, 166, 0.15);
  border-left-color: rgba(94, 237, 166, 0.15);
  border-right-color: rgba(94, 237, 166, 0.15);
  border-top-color: rgba(94, 237, 166, 0.15);
  color: var(--tag-color, rgb(186, 186, 186));
}`,
  },
  light: {
    base: `:root:root {
  --A01: hsl(128, 30%, 86%);
  --A02: hsl(138, 30%, 86%);
  --A03: hsl(148, 30%, 86%);
  --A04: hsl(158, 30%, 86%);
  --A05: hsl(168, 30%, 86%);
  --A06: hsl(178, 30%, 86%);
  --A07: hsl(173, 30%, 86%);
  --A08: hsl(168, 30%, 86%);
  --A09: hsl(158, 30%, 86%);
  --A10: hsl(148, 30%, 86%);
  --A11: hsl(138, 30%, 86%);
  --accent-h: 128;
  --accent-l: 70%;
  --accent-s: 70%;
  --background-highlight: hsl(168, 10%, 91%);
  --background-modifier-active-hover: hsla(128, 70%, 70%, 0.15);
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-primary: hsl(128, 60%, 95%);
  --background-primary-alt: hsl(148, 30%, 90%);
  --background-primary-alt-1: hsl(128, 60%, 95%);
  --background-search: hsl(138, 30%, 85%);
  --background-secondary: hsl(128, 30%, 85%);
  --background-table: hsl(138, 50%, 90%);
  --background-tertiary: hsl(108, 40%, 80%);
  --bases-cards-background: hsl(128, 60%, 95%);
  --bases-cards-cover-background: hsl(148, 30%, 90%);
  --bases-group-heading-property-color: black;
  --bases-table-cell-background-active: hsl(128, 60%, 95%);
  --bases-table-cell-background-disabled: hsl(148, 30%, 90%);
  --bases-table-cell-background-selected: hsla(128, 70%, 70%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(127, 70.7%, 75.25%);
  --bases-table-group-background: hsl(148, 30%, 90%);
  --bases-table-header-background: hsl(128, 60%, 95%);
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075);
  --bases-table-header-color: black;
  --bases-table-summary-background: hsl(128, 60%, 95%);
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075);
  --blockquote-border-color: hsl(127, 70.7%, 75.25%);
  --blur-background: color-mix(in srgb, hsl(128, 60%, 95%) 65%, transparent) linear-gradient(hsl(128, 60%, 95%), color-mix(in srgb, hsl(128, 60%, 95%) 65%, transparent));
  --bold-color: hsl(148, 40%, 30%);
  --bold-weight: 600;
  --callout-border-opacity: 0;
  --callout-content-padding: 0px 12px;
  --callout-gap: 1em;
  --callout-margin: 0px;
  --callout-min-width: 200px;
  --callout-nowrap-min-width: 250px;
  --callout-padding: 4px 11px 11px 11px;
  --callout-radius: 10px;
  --callout-title-background: transparent;
  --callout-title-size: 1.1em;
  --canvas-background: hsl(128, 60%, 95%);
  --canvas-card-label-color: hsl(208, 20%, 30%);
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --cbs: 0px 2px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.01),
        0px 4px 8px rgba(0, 0, 0, 0.01), 0px 0px 12px rgba(0, 0, 0, 0.01),
        0px 2px 16px rgba(0, 0, 0, 0.01), 0px 4px 20px rgba(0, 0, 0, 0.01);
  --checkbox-border-color: hsl(208, 20%, 30%);
  --checkbox-border-color-hover: black;
  --checkbox-color: hsl(127, 70.7%, 75.25%);
  --checkbox-color-hover: hsl(125, 71.4%, 80.5%);
  --checkbox-marker-color: hsl(128, 60%, 95%);
  --checklist-done-color: black;
  --code-background: hsl(148, 30%, 90%);
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(208, 20%, 30%);
  --code-normal: black;
  --code-punctuation: black;
  --collapse-icon-color: hsl(208, 20%, 30%);
  --collapse-icon-color-collapsed: hsl(128, 70%, 70%);
  --color-accent: hsl(128, 70%, 70%);
  --color-accent-1: hsl(127, 70.7%, 75.25%);
  --color-accent-2: hsl(125, 71.4%, 80.5%);
  --color-accent-hsl: 128, 70%, 70%;
  --dark: var(--text-muted, black);
  --darkgray: var(--text-muted, black);
  --divider-color: transparent;
  --divider-color-hover: hsl(127, 70.7%, 75.25%);
  --embed-block-shadow-hover: 0 0 0 1px #e0e0e0,
        inset 0 0 0 1px #e0e0e0;
  --embed-border-left: 2px solid hsl(127, 70.7%, 75.25%);
  --embed-border-right: none;
  --embed-border-start: 2px solid hsl(127, 70.7%, 75.25%);
  --file-header-background: hsl(128, 60%, 95%);
  --file-header-background-focused: hsl(128, 60%, 95%);
  --file-margins: 32px;
  --footnote-id-color: black;
  --footnote-id-color-no-occurrences: hsl(208, 20%, 30%);
  --footnote-input-background-active: rgba(0, 0, 0, 0.075);
  --graph-line: hsl(128, 70%, 70%);
  --graph-node: hsl(128, 70%, 70%);
  --graph-node-focused: hsl(128, 70%, 70%);
  --graph-node-unresolved: hsl(208, 20%, 30%);
  --gray: var(--text-muted, black);
  --h1-size: 2.5rem;
  --h2-size: 2.0rem;
  --h2-weight: 600;
  --h3-size: 1.7rem;
  --h3-weight: 600;
  --h4-size: 1.5rem;
  --h4-weight: 600;
  --h5-size: 1.3rem;
  --h5-weight: 600;
  --h6-size: 1.2rem;
  --heading-formatting: hsl(208, 20%, 30%);
  --highlight: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --icon-color: hsl(128, 70%, 20%);
  --icon-color-active: hsl(128, 70%, 20%);
  --icon-color-hover: black;
  --indentation-guide-color: hsl(128, 30%, 85%);
  --indentation-guide-color-active: hsl(128, 70%, 70%);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-size: 2.5rem;
  --input-date-separator: hsl(208, 20%, 30%);
  --input-placeholder-color: hsl(208, 20%, 30%);
  --interactive-accent: hsl(127, 70.7%, 75.25%);
  --interactive-accent-hover: hsl(125, 71.4%, 80.5%);
  --interactive-accent-hsl: 128, 70%, 70%;
  --italic-color: hsl(148, 40%, 35%);
  --light: var(--background-primary, hsl(128, 60%, 95%));
  --lightgray: var(--background-secondary, hsl(128, 30%, 85%));
  --link-color: hsl(128, 40%, 30%);
  --link-color-hover: hsl(128, 40%, 20%);
  --link-external-color: hsl(128, 70%, 70%);
  --link-external-color-hover: hsl(125, 71.4%, 80.5%);
  --link-unresolved-color: hsl(128, 70%, 70%);
  --link-unresolved-decoration-color: hsla(128, 70%, 70%, 0.3);
  --list-bullet-size: 0.3rem;
  --list-indent: 3em;
  --list-marker-color: hsl(128, 40%, 30%);
  --list-marker-color-collapsed: hsl(128, 70%, 70%);
  --list-marker-color-hover: hsl(128, 70%, 70%);
  --list-spacing: 0.2em;
  --mcc-img-snw-display: none;
  --menu-background: hsl(128, 30%, 85%);
  --metadata-input-background-active: rgba(0, 0, 0, 0.075);
  --metadata-label-background-active: rgba(0, 0, 0, 0.075);
  --metadata-label-text-color: black;
  --metadata-label-text-color-hover: black;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075);
  --modal-background: hsl(128, 60%, 95%);
  --nav-collapse-icon-color: hsl(208, 20%, 30%);
  --nav-collapse-icon-color-collapsed: hsl(208, 20%, 30%);
  --nav-heading-color-collapsed: hsl(208, 20%, 30%);
  --nav-heading-color-collapsed-hover: black;
  --nav-indentation-guide-color: transparent
    --nav-collapse-icon-color: hsl(208, 20%, 30%);
  --nav-item-background-active: rgba(0, 0, 0, 0.075);
  --nav-item-background-hover: rgba(0, 0, 0, 0.075);
  --nav-item-background-selected: hsla(128, 70%, 70%, 0.15);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: black;
  --nav-item-color-highlighted: hsl(125, 71.4%, 80.5%);
  --nav-item-white-space: nowrap;
  --nav-tag-color: hsl(208, 20%, 30%);
  --nav-tag-color-active: black;
  --nav-tag-color-hover: black;
  --pdf-background: hsl(128, 60%, 95%);
  --pdf-page-background: hsl(128, 60%, 95%);
  --pdf-sidebar-background: hsl(128, 60%, 95%);
  --pill-color: black;
  --pill-color-remove: hsl(208, 20%, 30%);
  --pill-color-remove-hover: hsl(128, 70%, 70%);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: hsl(128, 60%, 95%);
  --raised-background: color-mix(in srgb, hsl(128, 60%, 95%) 65%, transparent) linear-gradient(hsl(128, 60%, 95%), color-mix(in srgb, hsl(128, 60%, 95%) 65%, transparent));
  --red: hsla(128, 70%, 70%, 0.9);
  --ribbon-background: hsl(128, 60%, 95%);
  --ribbon-background-collapsed: hsl(128, 30%, 85%);
  --scrollbar-active-thumb-bg: hsla(128, 70%, 70%, 0.2);
  --scrollbar-bg: hsla(128, 70%, 70%, 0.2);
  --scrollbar-thumb-bg: hsl(108, 30%, 70%);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --secondary: var(--text-accent, hsl(128, 70%, 70%));
  --setting-items-background: hsl(148, 30%, 90%);
  --shiki-active-tab-border-color: black;
  --shiki-code-background: hsl(148, 30%, 90%);
  --shiki-code-comment: hsl(208, 20%, 30%);
  --shiki-code-normal: black;
  --shiki-code-punctuation: black;
  --shiki-gutter-text-color: hsl(208, 20%, 30%);
  --shiki-gutter-text-color-highlight: black;
  --shiki-highlight-neutral: black;
  --shiki-terminal-dots-color: hsl(208, 20%, 30%);
  --slider-thumb-radius: 50%;
  --status-bar-background: hsl(128, 30%, 85%);
  --status-bar-border-color: hsl(128, 70%, 70%);
  --status-bar-border-width: 0px;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: black;
  --suggestion-background: hsl(128, 60%, 95%);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: transparent;
  --tab-container-background: hsl(128, 60%, 95%);
  --tab-outline-color: transparent;
  --tab-stacked-text-align: left;
  --tab-switcher-background: hsl(128, 30%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(128, 30%, 85%), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(128, 70%, 70%);
  --tab-text-color: hsl(208, 20%, 30%);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-highlighted: hsl(128, 70%, 70%);
  --table-drag-handle-background-active: hsl(127, 70.7%, 75.25%);
  --table-drag-handle-color: hsl(208, 20%, 30%);
  --table-drag-padding: 16px;
  --table-drag-space: 16px;
  --table-selection: hsla(128, 70%, 70%, 0.1);
  --table-selection-border-color: hsl(127, 70.7%, 75.25%);
  --tag-background: hsla(128, 70%, 70%, 0.1);
  --tag-background-hover: hsla(128, 70%, 70%, 0.2);
  --tag-border-color: hsla(128, 70%, 70%, 0.15);
  --tag-border-color-hover: hsla(128, 70%, 70%, 0.15);
  --tag-color: hsl(128, 70%, 70%);
  --tag-color-hover: hsl(128, 70%, 70%);
  --tertiary: var(--text-accent-hover, hsl(125, 71.4%, 80.5%));
  --text-accent: hsl(128, 70%, 70%);
  --text-accent-hover: hsl(125, 71.4%, 80.5%);
  --text-faint: hsl(208, 20%, 30%);
  --text-important: hsl(158, 60%, 30%);
  --text-muted: black;
  --text-selection: hsla(128, 70%, 70%, 0.2);
  --text-title: hsl(138, 30%, 35%);
  --textHighlight: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --titlebar-background: hsl(128, 60%, 95%);
  --titlebar-background-focused: hsl(128, 60%, 95%);
  --titlebar-text-color: black;
  --vault-name-color: #222222;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(235, 250, 237));
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(235, 250, 237));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-primary, rgb(235, 250, 237));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(235, 250, 237));
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body html {
  border: 0px none rgb(0, 0, 0);
  border-bottom: 0px none rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  border-left: 0px none rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right: 0px none rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top: 0px none rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  caret-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  column-rule-color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  outline-color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
  text-fill-color: rgb(0, 0, 0);
  text-stroke: 0px rgb(0, 0, 0);
  text-stroke-color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(46, 107, 74));
  outline: rgb(46, 107, 74) none 0px;
  text-decoration-color: rgb(46, 107, 74);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(54, 125, 87));
  outline: rgb(54, 125, 87) none 0px;
  text-decoration-color: rgb(54, 125, 87);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(54, 125, 87));
  outline: rgb(54, 125, 87) none 0px;
  text-decoration-color: rgb(54, 125, 87);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(46, 107, 74));
  outline: rgb(46, 107, 74) none 0px;
  text-decoration-color: rgb(46, 107, 74);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(230, 234, 233));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(61, 78, 92);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(147, 237, 158));
  border-color: rgb(147, 237, 158);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(125, 232, 139));
  outline: rgb(125, 232, 139) none 0px;
  text-decoration-color: rgb(125, 232, 139);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(46, 107, 54));
  outline: rgb(46, 107, 54) none 0px;
  text-decoration-color: rgb(46, 107, 54);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(125, 232, 139));
  outline: rgb(125, 232, 139) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(125, 232, 139));
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(61, 78, 92));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(192, 224, 184));
  font-style: var(--blockquote-font-style, italic);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body table {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 1px;
  width: 664px;
}

html[saved-theme="light"] body td {
  background-color: rgb(217, 242, 224);
  text-align: center;
}

html[saved-theme="light"] body th {
  background-color: rgb(192, 224, 184);
  border-bottom-width: 0px;
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-width: 0px;
  border-top-width: var(--table-header-border-width, 0px);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgb(0, 0, 0));
  font-family: var(--ec-codeFontFml, "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(222, 237, 229));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(222, 237, 229));
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(61, 78, 92);
  border-left-color: rgb(61, 78, 92);
  border-right-color: rgb(61, 78, 92);
  border-top-color: rgb(61, 78, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 250, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 250, 237);
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
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 50, 100, 140;
  background: rgba(50, 100, 140, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(50, 100, 140, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(50, 100, 140, 0);
  border-left-width: 3px;
  border-right-color: rgba(50, 100, 140, 0);
  border-right-width: 3px;
  border-top-color: rgba(50, 100, 140, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="anki"] {
  --callout-color: 0, 0, 0;
  --table-border-color: color-mix(in srgb, rgb(0, 0, 0) 25%, hsl(128, 60%, 95%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="author"] {
  --callout-color: 102, 10, 50;
  --table-border-color: color-mix(in srgb, rgb(102, 10, 50) 25%, hsl(128, 60%, 95%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(102, 10, 50, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(102, 10, 50, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(102, 10, 50, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(102, 10, 50, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 255, 0, 0;
  background: rgba(255, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 0, 0, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="con"] {
  --callout-color: 0, 84, 84;
  --table-border-color: color-mix(in srgb, rgb(0, 84, 84) 25%, hsl(128, 60%, 95%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(0, 84, 84, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 84, 84, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 84, 84, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 84, 84, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 255, 74, 74;
  background: rgba(255, 74, 74, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 74, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 74, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 74, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 74, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="exactas"] {
  --callout-color: 74, 202, 234;
  --table-border-color: color-mix(in srgb, rgb(74, 202, 234) 25%, hsl(128, 60%, 95%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(74, 202, 234, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(74, 202, 234, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(74, 202, 234, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(74, 202, 234, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 72, 122, 33;
  background: rgba(72, 122, 33, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(72, 122, 33, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(72, 122, 33, 0);
  border-left-width: 3px;
  border-right-color: rgba(72, 122, 33, 0);
  border-right-width: 3px;
  border-top-color: rgba(72, 122, 33, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 255, 74, 74;
  background: rgba(255, 74, 74, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 74, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 74, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 74, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 74, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="humanidades"] {
  --callout-color: 234, 183, 74;
  --table-border-color: color-mix(in srgb, rgb(234, 183, 74) 25%, hsl(128, 60%, 95%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(234, 183, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(234, 183, 74, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(234, 183, 74, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(234, 183, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --callout-color: 50, 150, 50;
  --table-border-color: color-mix(in srgb, rgb(50, 150, 50) 25%, hsl(128, 60%, 95%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(50, 150, 50, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(50, 150, 50, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(50, 150, 50, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(50, 150, 50, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 10, 220, 0;
  background: rgba(10, 220, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(10, 220, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(10, 220, 0, 0);
  border-left-width: 3px;
  border-right-color: rgba(10, 220, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(10, 220, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="multi-column"] {
  --callout-color: 8, 109, 221;
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(128, 60%, 95%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="naturales"] {
  --callout-color: 99, 180, 102;
  --table-border-color: color-mix(in srgb, rgb(99, 180, 102) 25%, hsl(128, 60%, 95%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(99, 180, 102, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(99, 180, 102, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(99, 180, 102, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(99, 180, 102, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 20, 120, 200;
  background: rgba(20, 120, 200, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(20, 120, 200, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(20, 120, 200, 0);
  border-left-width: 3px;
  border-right-color: rgba(20, 120, 200, 0);
  border-right-width: 3px;
  border-top-color: rgba(20, 120, 200, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="pro"] {
  --callout-color: 50, 100, 150;
  --table-border-color: color-mix(in srgb, rgb(50, 100, 150) 25%, hsl(128, 60%, 95%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(50, 100, 150, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(50, 100, 150, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(50, 100, 150, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(50, 100, 150, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 255, 0, 183;
  background: rgba(255, 0, 183, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 0, 183, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 0, 183, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 0, 183, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 0, 183, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 0, 100, 255;
  background: rgba(0, 100, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 100, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 100, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(0, 100, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 100, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="related"] {
  --callout-color: 0, 120, 255;
  --table-border-color: color-mix(in srgb, rgb(0, 120, 255) 25%, hsl(128, 60%, 95%) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(0, 120, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 120, 255, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 120, 255, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 120, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 137, 68, 198;
  background: rgba(137, 68, 198, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 68, 198, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(137, 68, 198, 0);
  border-left-width: 3px;
  border-right-color: rgba(137, 68, 198, 0);
  border-right-width: 3px;
  border-top-color: rgba(137, 68, 198, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 210, 100, 100;
  background: rgba(210, 100, 100, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(210, 100, 100, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(210, 100, 100, 0);
  border-left-width: 3px;
  border-right-color: rgba(210, 100, 100, 0);
  border-right-width: 3px;
  border-top-color: rgba(210, 100, 100, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 40, 150, 15;
  background: rgba(40, 150, 15, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(40, 150, 15, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(40, 150, 15, 0);
  border-left-width: 3px;
  border-right-color: rgba(40, 150, 15, 0);
  border-right-width: 3px;
  border-top-color: rgba(40, 150, 15, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 244, 138, 74;
  background: rgba(244, 138, 74, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(244, 138, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(244, 138, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(244, 138, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(244, 138, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(var(--callout-color), rgb(0, 0, 0));
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="anki"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="author"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6 4 14'/%3E%3Cpath d='M12 6v14'/%3E%3Cpath d='M8 8v12'/%3E%3Cpath d='M4 4v16'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="con"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="exactas"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='16' height='20' x='4' y='2' rx='2'/%3E%3Cline x1='8' x2='16' y1='6' y2='6'/%3E%3Cline x1='16' x2='16' y1='14' y2='18'/%3E%3Cpath d='M16 10h.01'/%3E%3Cpath d='M12 10h.01'/%3E%3Cpath d='M8 10h.01'/%3E%3Cpath d='M12 14h.01'/%3E%3Cpath d='M8 14h.01'/%3E%3Cpath d='M12 18h.01'/%3E%3Cpath d='M8 18h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="humanidades"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 18v-7'/%3E%3Cpath d='M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z'/%3E%3Cpath d='M14 18v-7'/%3E%3Cpath d='M18 18v-7'/%3E%3Cpath d='M3 22h18'/%3E%3Cpath d='M6 18v-7'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="naturales"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 18h8'/%3E%3Cpath d='M3 22h18'/%3E%3Cpath d='M14 22a7 7 0 1 0 0-14h-1'/%3E%3Cpath d='M9 14h2'/%3E%3Cpath d='M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z'/%3E%3Cpath d='M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="pro"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z'/%3E%3Cpath d='M7 10v12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="related"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m18 14 4 4-4 4'/%3E%3Cpath d='m18 2 4 4-4 4'/%3E%3Cpath d='M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22'/%3E%3Cpath d='M2 6h1.972a4 4 0 0 1 3.6 2.2'/%3E%3Cpath d='M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45'/%3E%3C/svg%3E");
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
  background-color: rgb(235, 250, 237);
  border-bottom-color: rgb(125, 232, 139);
  border-left-color: rgb(125, 232, 139);
  border-right-color: rgb(125, 232, 139);
  border-top-color: rgb(125, 232, 139);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(235, 250, 237));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(205, 228, 208));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(205, 228, 208);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-secondary, rgb(205, 228, 208));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(205, 228, 208));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(125, 232, 139, 0.1));
  border-bottom-color: rgba(125, 232, 139, 0.15);
  border-left-color: rgba(125, 232, 139, 0.15);
  border-right-color: rgba(125, 232, 139, 0.15);
  border-top-color: rgba(125, 232, 139, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(125, 232, 139);
}

html[saved-theme="light"] body h1.article-title {
  font-size: var(--inline-title-size, 40px);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 20, 120, 200;
  border-bottom-color: rgba(20, 120, 200, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(20, 120, 200, 0);
  border-left-width: 3px;
  border-right-color: rgba(20, 120, 200, 0);
  border-right-width: 3px;
  border-top-color: rgba(20, 120, 200, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-important, rgb(31, 122, 89));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-important, rgb(31, 122, 89));
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(15, 87, 25);
  border-left-color: rgb(15, 87, 25);
  border-right-color: rgb(15, 87, 25);
  border-top-color: rgb(15, 87, 25);
  color: var(--icon-color, rgb(15, 87, 25));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(205, 228, 208));
  border-bottom-color: rgb(125, 232, 139);
  border-left-color: rgb(125, 232, 139);
  border-left-width: 0px;
  border-right-color: rgb(125, 232, 139);
  border-top-color: rgb(125, 232, 139);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  background-color: var(--colorful, rgb(209, 230, 211));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-important, rgb(31, 122, 89));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(31, 122, 89);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  background-color: var(--colorful, rgb(209, 230, 211));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(31, 122, 89);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-important, rgb(31, 122, 89));
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(15, 87, 25);
  border-left-color: rgb(15, 87, 25);
  border-right-color: rgb(15, 87, 25);
  border-top-color: rgb(15, 87, 25);
  color: var(--icon-color, rgb(15, 87, 25));
}

html[saved-theme="light"] body .darkmode svg {
  color: var(--icon-color, rgb(15, 87, 25));
  stroke: rgb(15, 87, 25);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(62, 116, 79);
  border-left-color: rgb(62, 116, 79);
  border-right-color: rgb(62, 116, 79);
  border-top-color: rgb(62, 116, 79);
  color: rgb(62, 116, 79);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(61, 78, 92));
}`,
    canvas: `html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(235, 250, 237));
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgb(224, 224, 224);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(192, 224, 184);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  color: var(--text-muted, rgb(0, 0, 0));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(125, 232, 139, 0.1));
  color: var(--pill-color, rgb(125, 232, 139));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(235, 250, 237));
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-primary, rgb(235, 250, 237));
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(235, 250, 237));
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(205, 228, 208));
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(31, 122, 89);
  border-left-color: rgb(31, 122, 89);
  border-right-color: rgb(31, 122, 89);
  border-top-color: rgb(31, 122, 89);
  color: var(--text-important, rgb(31, 122, 89));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(222, 237, 229));
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--code-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgb(192, 224, 184));
  border-bottom-color: rgba(125, 232, 139, 0.15);
  border-left-color: rgba(125, 232, 139, 0.15);
  border-right-color: rgba(125, 232, 139, 0.15);
  border-top-color: rgba(125, 232, 139, 0.15);
  color: var(--tag-color, rgb(71, 71, 71));
}`,
  },
};
