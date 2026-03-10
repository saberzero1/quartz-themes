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
  --A01: rgb(54, 73, 64);
  --A02: rgb(54, 73, 67);
  --A03: rgb(54, 73, 70);
  --A04: rgb(54, 73, 73);
  --A05: rgb(54, 70, 73);
  --A06: rgb(54, 67, 73);
  --A07: rgb(54, 69, 73);
  --A08: rgb(54, 70, 73);
  --A09: rgb(54, 73, 73);
  --A10: rgb(54, 73, 70);
  --A11: rgb(54, 73, 67);
  --accent-h: 150;
  --accent-l: 65%;
  --accent-s: 80%;
  --background-highlight: rgb(38, 55, 89);
  --background-modifier-active-hover: rgba(94, 237, 166, 0.15);
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-primary: rgb(22, 29, 24);
  --background-primary-alt: rgb(34, 42, 38);
  --background-primary-alt-1: rgb(34, 42, 38);
  --background-search: rgb(57, 96, 70);
  --background-secondary: rgb(73, 80, 78);
  --background-table: hsl(120, -5%, 30%);
  --background-tertiary: rgb(46, 56, 48);
  --bases-cards-background: rgb(22, 29, 24);
  --bases-cards-cover-background: rgb(34, 42, 38);
  --bases-group-heading-property-color: white;
  --bases-table-cell-background-active: rgb(22, 29, 24);
  --bases-table-cell-background-disabled: rgb(34, 42, 38);
  --bases-table-cell-background-selected: rgba(94, 237, 166, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(94, 237, 166);
  --bases-table-group-background: rgb(34, 42, 38);
  --bases-table-header-background: rgb(22, 29, 24);
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075);
  --bases-table-header-color: white;
  --bases-table-summary-background: rgb(22, 29, 24);
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075);
  --blockquote-border-color: rgb(94, 237, 166);
  --bold-color: rgb(140, 217, 204);
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
  --callout-title-weight: 600;
  --canvas-background: rgb(22, 29, 24);
  --canvas-card-label-color: rgb(172, 179, 210);
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
  --checkbox-border-color: rgb(172, 179, 210);
  --checkbox-border-color-hover: white;
  --checkbox-color: rgb(94, 237, 166);
  --checkbox-color-hover: rgb(139, 244, 186);
  --checkbox-marker-color: rgb(22, 29, 24);
  --checklist-done-color: white;
  --code-background: rgb(34, 42, 38);
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: rgb(172, 179, 210);
  --code-normal: white;
  --code-punctuation: white;
  --collapse-icon-color: rgb(172, 179, 210);
  --collapse-icon-color-collapsed: rgb(139, 244, 186);
  --color-accent: rgb(94, 237, 166);
  --color-accent-1: rgb(139, 244, 186);
  --color-accent-2: rgb(180, 248, 208);
  --color-accent-hsl: 150, 80%, 65%;
  --dark: var(--text-muted);
  --darkgray: var(--text-muted);
  --divider-color: transparent;
  --divider-color-hover: rgb(94, 237, 166);
  --embed-block-shadow-hover: 0 0 0 1px #363636,
        inset 0 0 0 1px #363636;
  --embed-border-left: 2px solid rgb(94, 237, 166);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(94, 237, 166);
  --file-header-background: rgb(22, 29, 24);
  --file-header-background-focused: rgb(22, 29, 24);
  --file-margins: 32px;
  --footnote-id-color: white;
  --footnote-id-color-no-occurrences: rgb(172, 179, 210);
  --footnote-input-background-active: rgba(255, 255, 255, 0.075);
  --graph-line: rgb(139, 244, 186);
  --graph-node: rgb(139, 244, 186);
  --graph-node-focused: rgb(139, 244, 186);
  --graph-node-unresolved: rgb(172, 179, 210);
  --gray: var(--text-muted);
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
  --heading-formatting: rgb(172, 179, 210);
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-hover);
  --icon-color: rgb(209, 250, 230);
  --icon-color-active: rgb(139, 244, 186);
  --icon-color-hover: white;
  --indentation-guide-color: rgb(73, 80, 78);
  --indentation-guide-color-active: rgb(255, 255, 255);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-size: 2.5rem;
  --input-date-separator: rgb(172, 179, 210);
  --input-placeholder-color: rgb(172, 179, 210);
  --interactive-accent: rgb(94, 237, 166);
  --interactive-accent-hover: rgb(139, 244, 186);
  --interactive-accent-hsl: 150, 80%, 65%;
  --italic-color: rgb(159, 191, 223);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(172, 246, 209);
  --link-color-hover: rgb(195, 248, 222);
  --link-external-color: rgb(139, 244, 186);
  --link-external-color-hover: rgb(180, 248, 208);
  --link-unresolved-color: rgb(139, 244, 186);
  --link-unresolved-decoration-color: rgba(94, 237, 166, 0.3);
  --list-bullet-size: 0.3rem;
  --list-indent: 3em;
  --list-marker-color: rgb(255, 255, 255);
  --list-marker-color-collapsed: rgb(139, 244, 186);
  --list-marker-color-hover: rgb(139, 244, 186);
  --list-spacing: 0.2em;
  --mcc-img-snw-display: none;
  --menu-background: rgb(73, 80, 78);
  --metadata-input-background-active: rgba(255, 255, 255, 0.075);
  --metadata-input-height: 28px;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-text-color: white;
  --metadata-label-text-color-hover: white;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075);
  --modal-background: rgb(22, 29, 24);
  --nav-collapse-icon-color: rgb(172, 179, 210);
  --nav-collapse-icon-color-collapsed: rgb(172, 179, 210);
  --nav-heading-color-collapsed: rgb(172, 179, 210);
  --nav-heading-color-collapsed-hover: white;
  --nav-indentation-guide-color: transparent;
  --nav-item-background-active: rgba(255, 255, 255, 0.075);
  --nav-item-background-hover: rgba(255, 255, 255, 0.075);
  --nav-item-background-selected: rgba(94, 237, 166, 0.15);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: white;
  --nav-item-color-highlighted: rgb(180, 248, 208);
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(172, 179, 210);
  --nav-tag-color-active: white;
  --nav-tag-color-hover: white;
  --pdf-background: rgb(22, 29, 24);
  --pdf-page-background: rgb(22, 29, 24);
  --pdf-sidebar-background: rgb(22, 29, 24);
  --pill-color: white;
  --pill-color-remove: rgb(172, 179, 210);
  --pill-color-remove-hover: rgb(139, 244, 186);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: rgb(22, 29, 24);
  --red: rgba(94, 237, 166, 0.9);
  --ribbon-background: rgb(73, 80, 78);
  --ribbon-background-collapsed: rgb(73, 80, 78);
  --scrollbar-active-thumb-bg: rgba(94, 237, 166, 0.2);
  --scrollbar-bg: rgba(94, 237, 166, 0.2);
  --scrollbar-thumb-bg: rgba(94, 237, 166, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: rgb(22, 29, 24);
  --secondary: var(--text-accent);
  --setting-items-background: rgb(34, 42, 38);
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-radius: 50%;
  --status-bar-background: rgb(46, 56, 48);
  --status-bar-border-color: rgb(139, 244, 186);
  --status-bar-border-width: 0px;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: white;
  --suggestion-background: rgb(22, 29, 24);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: transparent;
  --tab-container-background: rgb(22, 29, 24);
  --tab-outline-color: transparent;
  --tab-stacked-text-align: left;
  --tab-switcher-background: rgb(73, 80, 78);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(73, 80, 78), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(94, 237, 166);
  --tab-text-color: rgb(172, 179, 210);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-highlighted: rgb(139, 244, 186);
  --table-drag-handle-background-active: rgb(94, 237, 166);
  --table-drag-handle-color: rgb(172, 179, 210);
  --table-drag-padding: 16px;
  --table-drag-space: 16px;
  --table-header-weight: 600;
  --table-selection: rgba(94, 237, 166, 0.1);
  --table-selection-border-color: rgb(94, 237, 166);
  --tag-background: rgba(94, 237, 166, 0.1);
  --tag-background-hover: rgba(94, 237, 166, 0.2);
  --tag-border-color: rgba(94, 237, 166, 0.15);
  --tag-border-color-hover: rgba(94, 237, 166, 0.15);
  --tag-color: rgb(139, 244, 186);
  --tag-color-hover: rgb(139, 244, 186);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(139, 244, 186);
  --text-accent-hover: rgb(180, 248, 208);
  --text-faint: rgb(172, 179, 210);
  --text-important: rgb(232, 252, 246);
  --text-muted: white;
  --text-selection: rgba(94, 237, 166, 0.33);
  --text-title: rgb(194, 240, 217);
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: rgb(22, 29, 24);
  --titlebar-background-focused: rgb(22, 29, 24);
  --titlebar-text-color: white;
  --vault-name-color: #dadada;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 29, 24);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 29, 24);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 29, 24);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 29, 24);
  border-left-color: rgba(0, 0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(22, 29, 24);
}`,
    typography: `body .page article p > b, b {
  color: rgb(140, 217, 204);
  outline: rgb(140, 217, 204) none 0px;
  text-decoration: rgb(140, 217, 204);
  text-decoration-color: rgb(140, 217, 204);
}

body .page article p > em, em {
  color: rgb(159, 191, 223);
  outline: rgb(159, 191, 223) none 0px;
  text-decoration: rgb(159, 191, 223);
  text-decoration-color: rgb(159, 191, 223);
}

body .page article p > i, i {
  color: rgb(159, 191, 223);
  outline: rgb(159, 191, 223) none 0px;
  text-decoration: rgb(159, 191, 223);
  text-decoration-color: rgb(159, 191, 223);
}

body .page article p > strong, strong {
  color: rgb(140, 217, 204);
  outline: rgb(140, 217, 204) none 0px;
  text-decoration: rgb(140, 217, 204);
  text-decoration-color: rgb(140, 217, 204);
}

body .text-highlight {
  background-color: rgb(38, 55, 89);
}

body p {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    links: `body a.external, footer a {
  color: rgb(138, 243, 185);
  outline: rgb(138, 243, 185) none 0px;
  text-decoration: rgb(138, 243, 185);
  text-decoration-color: rgb(138, 243, 185);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(172, 246, 209);
  outline: rgb(172, 246, 209) none 0px;
  text-decoration: rgb(172, 246, 209);
  text-decoration-color: rgb(172, 246, 209);
}

body a.internal.broken {
  color: rgb(138, 243, 185);
  outline: rgb(138, 243, 185) none 0px;
  text-decoration: rgb(138, 243, 185);
  text-decoration-color: rgb(138, 243, 185);
}`,
    lists: `body ol.overflow {
  background-color: rgb(22, 29, 24);
}

body ul.overflow {
  background-color: rgb(22, 29, 24);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(172, 179, 210);
  text-decoration: rgb(172, 179, 210);
}

body blockquote {
  background-color: rgb(46, 56, 48);
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body table {
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

body td {
  background-color: rgb(77, 77, 77);
  text-align: center;
}

body th {
  background-color: rgb(46, 56, 48);
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

body thead {
  border-bottom-color: rgb(54, 54, 54);
  border-left-color: rgb(54, 54, 54);
  border-right-color: rgb(54, 54, 54);
  border-top-color: rgb(54, 54, 54);
}

body tr {
  border-bottom-color: rgb(54, 54, 54);
  border-left-color: rgb(54, 54, 54);
  border-right-color: rgb(54, 54, 54);
  border-top-color: rgb(54, 54, 54);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(34, 42, 38);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(34, 42, 38);
}

body pre > code, pre:has(> code) {
  background-color: rgb(34, 42, 38);
}

body pre:has(> code) {
  background-color: rgb(34, 42, 38);
}`,
    embeds: `body .file-embed {
  background-color: rgb(34, 42, 38);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

body .transclude {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

body .transclude-inner {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(255, 255, 255);
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body input[type=checkbox] {
  border-bottom-color: rgb(172, 179, 210);
  border-left-color: rgb(172, 179, 210);
  border-right-color: rgb(172, 179, 210);
  border-top-color: rgb(172, 179, 210);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(255, 130, 255);
  border-left-color: rgb(255, 130, 255);
  border-right-color: rgb(255, 130, 255);
  border-top-color: rgb(255, 130, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

body .callout > .callout-content {
  background-color: rgba(255, 130, 255, 0.1);
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 74, 176, 255;
  background-color: rgba(74, 176, 255, 0.1);
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

body .callout[data-callout="bug"] {
  --callout-color: 252, 95, 142;
  background-color: rgba(252, 95, 142, 0.1);
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

body .callout[data-callout="danger"] {
  --callout-color: 255, 74, 74;
  background-color: rgba(255, 74, 74, 0.1);
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

body .callout[data-callout="example"] {
  --callout-color: 184, 148, 255;
  background-color: rgba(184, 148, 255, 0.1);
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

body .callout[data-callout="failure"] {
  --callout-color: 255, 74, 74;
  background-color: rgba(255, 74, 74, 0.1);
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

body .callout[data-callout="info"] {
  --callout-color: 74, 176, 255;
  background-color: rgba(74, 176, 255, 0.1);
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

body .callout[data-callout="note"] {
  --callout-color: 255, 130, 255;
  background-color: rgba(255, 130, 255, 0.1);
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

body .callout[data-callout="question"] {
  --callout-color: 255, 128, 183;
  background-color: rgba(255, 128, 183, 0.1);
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

body .callout[data-callout="quote"] {
  --callout-color: 184, 148, 255;
  background-color: rgba(184, 148, 255, 0.1);
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

body .callout[data-callout="success"] {
  --callout-color: 77, 224, 185;
  background-color: rgba(77, 224, 185, 0.1);
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

body .callout[data-callout="tip"] {
  --callout-color: 244, 138, 74;
  background-color: rgba(244, 138, 74, 0.1);
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

body .callout[data-callout="todo"] {
  --callout-color: 170, 230, 89;
  background-color: rgba(170, 230, 89, 0.1);
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

body .callout[data-callout="warning"] {
  --callout-color: 244, 138, 74;
  background-color: rgba(244, 138, 74, 0.1);
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(22, 29, 24);
  border-bottom-color: rgb(138, 243, 185);
  border-left-color: rgb(138, 243, 185);
  border-right-color: rgb(138, 243, 185);
  border-top-color: rgb(138, 243, 185);
}

body .search > .search-container > .search-space {
  background-color: rgb(22, 29, 24);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(73, 80, 78);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(73, 80, 78);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(73, 80, 78);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(73, 80, 78);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(94, 237, 166, 0.1);
  border-bottom-color: rgba(94, 237, 166, 0.15);
  border-left-color: rgba(94, 237, 166, 0.15);
  border-right-color: rgba(94, 237, 166, 0.15);
  border-top-color: rgba(94, 237, 166, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(138, 243, 185);
}

body h1 {
  text-shadow: rgba(0, 0, 0, 0.7) 0px 0px 5px;
}

body h5 {
  color: rgb(225, 170, 255);
}

body h6 {
  color: rgb(255, 175, 200);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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
}

body ::-webkit-scrollbar {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(232, 252, 246);
  text-decoration: rgb(232, 252, 246);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(232, 252, 246);
  text-decoration: rgb(232, 252, 246);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(232, 252, 246);
  text-decoration: rgb(232, 252, 246);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(232, 252, 246);
  border-left-color: rgb(232, 252, 246);
  border-right-color: rgb(232, 252, 246);
  border-top-color: rgb(232, 252, 246);
  color: rgb(232, 252, 246);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(209, 250, 230);
  border-left-color: rgb(209, 250, 230);
  border-right-color: rgb(209, 250, 230);
  border-top-color: rgb(209, 250, 230);
  color: rgb(209, 250, 230);
}`,
    footer: `body footer {
  background-color: rgb(46, 56, 48);
  border-bottom-color: rgb(138, 243, 185);
  border-left-color: rgb(138, 243, 185);
  border-left-width: 0px;
  border-right-color: rgb(138, 243, 185);
  border-top-color: rgb(138, 243, 185);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
}

body footer ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li {
  background-color: rgb(54, 73, 64);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(232, 252, 246);
  text-decoration: rgb(232, 252, 246);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(232, 252, 246);
}`,
    listPage: `body li.section-li {
  background-color: rgb(54, 73, 64);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body li.section-li > .section .meta {
  color: rgb(232, 252, 246);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(232, 252, 246);
  text-decoration: rgb(232, 252, 246);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(209, 250, 230);
  border-left-color: rgb(209, 250, 230);
  border-right-color: rgb(209, 250, 230);
  border-top-color: rgb(209, 250, 230);
  color: rgb(209, 250, 230);
}

body .darkmode svg {
  color: rgb(209, 250, 230);
  stroke: rgb(209, 250, 230);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(194, 240, 217);
  border-left-color: rgb(194, 240, 217);
  border-right-color: rgb(194, 240, 217);
  border-top-color: rgb(194, 240, 217);
  color: rgb(194, 240, 217);
}

body .breadcrumb-element p {
  color: rgb(172, 179, 210);
}`,
    misc: `body .metadata {
  color: rgb(255, 255, 255);
}

body .metadata-properties {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .navigation-progress {
  background-color: rgb(46, 56, 48);
}

body input[type=text] {
  border-bottom-color: rgb(232, 252, 246);
  border-left-color: rgb(232, 252, 246);
  border-right-color: rgb(232, 252, 246);
  border-top-color: rgb(232, 252, 246);
  color: rgb(232, 252, 246);
}

body kbd {
  background-color: rgb(34, 42, 38);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --A01: rgb(209, 213, 230);
  --A02: rgb(209, 209, 230);
  --A03: rgb(211, 209, 230);
  --A04: rgb(215, 209, 230);
  --A05: rgb(219, 209, 230);
  --A06: rgb(222, 209, 230);
  --A07: rgb(220, 209, 230);
  --A08: rgb(219, 209, 230);
  --A09: rgb(215, 209, 230);
  --A10: rgb(211, 209, 230);
  --A11: rgb(209, 209, 230);
  --accent-h: 228;
  --accent-l: 70%;
  --accent-s: 70%;
  --background-highlight: rgb(232, 230, 234);
  --background-modifier-active-hover: rgba(125, 146, 232, 0.15);
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-primary: rgb(244, 237, 247);
  --background-primary-alt: rgb(224, 222, 237);
  --background-primary-alt-1: rgb(244, 237, 247);
  --background-search: rgb(205, 206, 228);
  --background-secondary: rgb(172, 180, 210);
  --background-table: rgb(217, 218, 242);
  --background-tertiary: rgb(184, 219, 224);
  --bases-cards-background: rgb(244, 237, 247);
  --bases-cards-cover-background: rgb(224, 222, 237);
  --bases-group-heading-property-color: black;
  --bases-table-cell-background-active: rgb(244, 237, 247);
  --bases-table-cell-background-disabled: rgb(224, 222, 237);
  --bases-table-cell-background-selected: rgba(125, 146, 232, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(146, 166, 237);
  --bases-table-group-background: rgb(224, 222, 237);
  --bases-table-header-background: rgb(244, 237, 247);
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075);
  --bases-table-header-color: black;
  --bases-table-summary-background: rgb(244, 237, 247);
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075);
  --blockquote-border-color: rgb(146, 166, 237);
  --blur-background: color-mix(in srgb, rgb(244, 237, 247) 65%, transparent) linear-gradient(rgb(244, 237, 247), color-mix(in srgb, rgb(244, 237, 247) 65%, transparent));
  --bold-color: rgb(54, 46, 107);
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
  --callout-title-weight: 600;
  --canvas-background: rgb(244, 237, 247);
  --canvas-card-label-color: rgb(92, 61, 88);
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
  --checkbox-border-color: rgb(92, 61, 88);
  --checkbox-border-color-hover: black;
  --checkbox-color: rgb(146, 166, 237);
  --checkbox-color-hover: rgb(172, 189, 241);
  --checkbox-marker-color: rgb(244, 237, 247);
  --checklist-done-color: black;
  --code-background: rgb(224, 222, 237);
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: rgb(92, 61, 88);
  --code-normal: black;
  --code-punctuation: black;
  --collapse-icon-color: rgb(92, 61, 88);
  --collapse-icon-color-collapsed: rgb(125, 146, 232);
  --color-accent: rgb(125, 146, 232);
  --color-accent-1: rgb(146, 166, 237);
  --color-accent-2: rgb(172, 189, 241);
  --color-accent-hsl: 228, 70%, 70%;
  --dark: var(--text-muted);
  --darkgray: var(--text-muted);
  --divider-color: transparent;
  --divider-color-hover: rgb(146, 166, 237);
  --embed-block-shadow-hover: 0 0 0 1px #e0e0e0,
        inset 0 0 0 1px #e0e0e0;
  --embed-border-left: 2px solid rgb(146, 166, 237);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(146, 166, 237);
  --file-header-background: rgb(244, 237, 247);
  --file-header-background-focused: rgb(244, 237, 247);
  --file-margins: 32px;
  --footnote-id-color: black;
  --footnote-id-color-no-occurrences: rgb(92, 61, 88);
  --footnote-input-background-active: rgba(0, 0, 0, 0.075);
  --graph-line: rgb(125, 146, 232);
  --graph-node: rgb(125, 146, 232);
  --graph-node-focused: rgb(125, 146, 232);
  --graph-node-unresolved: rgb(92, 61, 88);
  --gray: var(--text-muted);
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
  --heading-formatting: rgb(92, 61, 88);
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-hover);
  --icon-color: rgb(15, 30, 87);
  --icon-color-active: rgb(15, 30, 87);
  --icon-color-hover: black;
  --indentation-guide-color: rgb(172, 180, 210);
  --indentation-guide-color-active: rgb(125, 146, 232);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-size: 2.5rem;
  --input-date-separator: rgb(92, 61, 88);
  --input-placeholder-color: rgb(92, 61, 88);
  --interactive-accent: rgb(146, 166, 237);
  --interactive-accent-hover: rgb(172, 189, 241);
  --interactive-accent-hsl: 228, 70%, 70%;
  --italic-color: rgb(63, 54, 125);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(46, 58, 107);
  --link-color-hover: rgb(31, 39, 71);
  --link-external-color: rgb(125, 146, 232);
  --link-external-color-hover: rgb(172, 189, 241);
  --link-unresolved-color: rgb(125, 146, 232);
  --link-unresolved-decoration-color: rgba(125, 146, 232, 0.3);
  --list-bullet-size: 0.3rem;
  --list-indent: 3em;
  --list-marker-color: rgb(46, 58, 107);
  --list-marker-color-collapsed: rgb(125, 146, 232);
  --list-marker-color-hover: rgb(125, 146, 232);
  --list-spacing: 0.2em;
  --mcc-img-snw-display: none;
  --menu-background: rgb(172, 180, 210);
  --metadata-input-background-active: rgba(0, 0, 0, 0.075);
  --metadata-input-height: 28px;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075);
  --metadata-label-text-color: black;
  --metadata-label-text-color-hover: black;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075);
  --modal-background: rgb(244, 237, 247);
  --nav-collapse-icon-color: rgb(92, 61, 88);
  --nav-collapse-icon-color-collapsed: rgb(92, 61, 88);
  --nav-heading-color-collapsed: rgb(92, 61, 88);
  --nav-heading-color-collapsed-hover: black;
  --nav-indentation-guide-color: transparent
    --nav-collapse-icon-color: rgb(92, 61, 88);
  --nav-item-background-active: rgba(0, 0, 0, 0.075);
  --nav-item-background-hover: rgba(0, 0, 0, 0.075);
  --nav-item-background-selected: rgba(125, 146, 232, 0.15);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: black;
  --nav-item-color-highlighted: rgb(172, 189, 241);
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(92, 61, 88);
  --nav-tag-color-active: black;
  --nav-tag-color-hover: black;
  --pdf-background: rgb(244, 237, 247);
  --pdf-page-background: rgb(244, 237, 247);
  --pdf-sidebar-background: rgb(244, 237, 247);
  --pill-color: black;
  --pill-color-remove: rgb(92, 61, 88);
  --pill-color-remove-hover: rgb(125, 146, 232);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: rgb(244, 237, 247);
  --raised-background: color-mix(in srgb, rgb(244, 237, 247) 65%, transparent) linear-gradient(rgb(244, 237, 247), color-mix(in srgb, rgb(244, 237, 247) 65%, transparent));
  --red: rgba(125, 146, 232, 0.9);
  --ribbon-background: rgb(244, 237, 247);
  --ribbon-background-collapsed: rgb(172, 180, 210);
  --scrollbar-active-thumb-bg: rgba(125, 146, 232, 0.2);
  --scrollbar-bg: rgba(125, 146, 232, 0.2);
  --scrollbar-thumb-bg: rgb(156, 180, 201);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --secondary: var(--text-accent);
  --setting-items-background: rgb(224, 222, 237);
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-radius: 50%;
  --status-bar-background: rgb(172, 180, 210);
  --status-bar-border-color: rgb(125, 146, 232);
  --status-bar-border-width: 0px;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: black;
  --suggestion-background: rgb(244, 237, 247);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: transparent;
  --tab-container-background: rgb(244, 237, 247);
  --tab-outline-color: transparent;
  --tab-stacked-text-align: left;
  --tab-switcher-background: rgb(172, 180, 210);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(172, 180, 210), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(125, 146, 232);
  --tab-text-color: rgb(92, 61, 88);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-highlighted: rgb(125, 146, 232);
  --table-drag-handle-background-active: rgb(146, 166, 237);
  --table-drag-handle-color: rgb(92, 61, 88);
  --table-drag-padding: 16px;
  --table-drag-space: 16px;
  --table-header-weight: 600;
  --table-selection: rgba(125, 146, 232, 0.1);
  --table-selection-border-color: rgb(146, 166, 237);
  --tag-background: rgba(125, 146, 232, 0.1);
  --tag-background-hover: rgba(125, 146, 232, 0.2);
  --tag-border-color: rgba(125, 146, 232, 0.15);
  --tag-border-color-hover: rgba(125, 146, 232, 0.15);
  --tag-color: rgb(125, 146, 232);
  --tag-color-hover: rgb(125, 146, 232);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(125, 146, 232);
  --text-accent-hover: rgb(172, 189, 241);
  --text-faint: rgb(92, 61, 88);
  --text-important: rgb(58, 31, 122);
  --text-muted: black;
  --text-selection: rgba(125, 146, 232, 0.2);
  --text-title: rgb(62, 64, 116);
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: rgb(244, 237, 247);
  --titlebar-background-focused: rgb(244, 237, 247);
  --titlebar-text-color: black;
  --vault-name-color: #222222;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 237, 247);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(244, 237, 247);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 237, 247);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 237, 247);
  border-left-color: rgba(0, 0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(244, 237, 247);
}`,
    typography: `body .page article p > b, b {
  color: rgb(54, 46, 107);
  outline: rgb(54, 46, 107) none 0px;
  text-decoration: rgb(54, 46, 107);
  text-decoration-color: rgb(54, 46, 107);
}

body .page article p > em, em {
  color: rgb(63, 54, 125);
  outline: rgb(63, 54, 125) none 0px;
  text-decoration: rgb(63, 54, 125);
  text-decoration-color: rgb(63, 54, 125);
}

body .page article p > i, i {
  color: rgb(63, 54, 125);
  outline: rgb(63, 54, 125) none 0px;
  text-decoration: rgb(63, 54, 125);
  text-decoration-color: rgb(63, 54, 125);
}

body .page article p > strong, strong {
  color: rgb(54, 46, 107);
  outline: rgb(54, 46, 107) none 0px;
  text-decoration: rgb(54, 46, 107);
  text-decoration-color: rgb(54, 46, 107);
}

body .text-highlight {
  background-color: rgb(232, 230, 234);
}

body p {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `body a.external, footer a {
  color: rgb(125, 146, 232);
  outline: rgb(125, 146, 232) none 0px;
  text-decoration: rgb(125, 146, 232);
  text-decoration-color: rgb(125, 146, 232);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(46, 58, 107);
  outline: rgb(46, 58, 107) none 0px;
  text-decoration: rgb(46, 58, 107);
  text-decoration-color: rgb(46, 58, 107);
}

body a.internal.broken {
  color: rgb(125, 146, 232);
  outline: rgb(125, 146, 232) none 0px;
  text-decoration: rgb(125, 146, 232);
  text-decoration-color: rgb(125, 146, 232);
}`,
    lists: `body ol.overflow {
  background-color: rgb(244, 237, 247);
}

body ul.overflow {
  background-color: rgb(244, 237, 247);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(92, 61, 88);
  text-decoration: rgb(92, 61, 88);
}

body blockquote {
  background-color: rgb(184, 219, 224);
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body table {
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

body td {
  background-color: rgb(217, 218, 242);
  text-align: center;
}

body th {
  background-color: rgb(184, 219, 224);
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

body thead {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body tr {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(224, 222, 237);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(224, 222, 237);
}

body pre > code, pre:has(> code) {
  background-color: rgb(224, 222, 237);
}

body pre:has(> code) {
  background-color: rgb(224, 222, 237);
}`,
    embeds: `body .file-embed {
  background-color: rgb(224, 222, 237);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

body .transclude {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

body .transclude-inner {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body input[type=checkbox] {
  border-bottom-color: rgb(92, 61, 88);
  border-left-color: rgb(92, 61, 88);
  border-right-color: rgb(92, 61, 88);
  border-top-color: rgb(92, 61, 88);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(20, 120, 200);
  border-left-color: rgb(20, 120, 200);
  border-right-color: rgb(20, 120, 200);
  border-top-color: rgb(20, 120, 200);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

body .callout > .callout-content {
  background-color: rgba(20, 120, 200, 0.15);
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 50, 100, 140;
  background-color: rgba(50, 100, 140, 0.15);
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

body .callout[data-callout="bug"] {
  --callout-color: 255, 0, 0;
  background-color: rgba(255, 0, 0, 0.15);
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

body .callout[data-callout="danger"] {
  --callout-color: 255, 74, 74;
  background-color: rgba(255, 74, 74, 0.15);
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

body .callout[data-callout="example"] {
  --callout-color: 72, 122, 33;
  background-color: rgba(72, 122, 33, 0.15);
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

body .callout[data-callout="failure"] {
  --callout-color: 255, 74, 74;
  background-color: rgba(255, 74, 74, 0.15);
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

body .callout[data-callout="info"] {
  --callout-color: 10, 220, 0;
  background-color: rgba(10, 220, 0, 0.15);
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

body .callout[data-callout="note"] {
  --callout-color: 20, 120, 200;
  background-color: rgba(20, 120, 200, 0.15);
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

body .callout[data-callout="question"] {
  --callout-color: 255, 0, 183;
  background-color: rgba(255, 0, 183, 0.15);
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

body .callout[data-callout="quote"] {
  --callout-color: 0, 100, 255;
  background-color: rgba(0, 100, 255, 0.15);
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

body .callout[data-callout="success"] {
  --callout-color: 137, 68, 198;
  background-color: rgba(137, 68, 198, 0.15);
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

body .callout[data-callout="tip"] {
  --callout-color: 210, 100, 100;
  background-color: rgba(210, 100, 100, 0.15);
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

body .callout[data-callout="todo"] {
  --callout-color: 40, 150, 15;
  background-color: rgba(40, 150, 15, 0.15);
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

body .callout[data-callout="warning"] {
  --callout-color: 244, 138, 74;
  background-color: rgba(244, 138, 74, 0.15);
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(244, 237, 247);
  border-bottom-color: rgb(125, 146, 232);
  border-left-color: rgb(125, 146, 232);
  border-right-color: rgb(125, 146, 232);
  border-top-color: rgb(125, 146, 232);
}

body .search > .search-container > .search-space {
  background-color: rgb(244, 237, 247);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(172, 180, 210);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(172, 180, 210);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(172, 180, 210);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(172, 180, 210);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(125, 146, 232, 0.1);
  border-bottom-color: rgba(125, 146, 232, 0.15);
  border-left-color: rgba(125, 146, 232, 0.15);
  border-right-color: rgba(125, 146, 232, 0.15);
  border-top-color: rgba(125, 146, 232, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(125, 146, 232);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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
}

body ::-webkit-scrollbar {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}

body ::-webkit-scrollbar-corner {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}

body ::-webkit-scrollbar-track {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(58, 31, 122);
  text-decoration: rgb(58, 31, 122);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(58, 31, 122);
  text-decoration: rgb(58, 31, 122);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(58, 31, 122);
  text-decoration: rgb(58, 31, 122);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(58, 31, 122);
  border-left-color: rgb(58, 31, 122);
  border-right-color: rgb(58, 31, 122);
  border-top-color: rgb(58, 31, 122);
  color: rgb(58, 31, 122);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(15, 30, 87);
  border-left-color: rgb(15, 30, 87);
  border-right-color: rgb(15, 30, 87);
  border-top-color: rgb(15, 30, 87);
  color: rgb(15, 30, 87);
}`,
    footer: `body footer {
  background-color: rgb(172, 180, 210);
  border-bottom-color: rgb(125, 146, 232);
  border-left-color: rgb(125, 146, 232);
  border-left-width: 0px;
  border-right-color: rgb(125, 146, 232);
  border-top-color: rgb(125, 146, 232);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
}

body footer ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li {
  background-color: rgb(209, 213, 230);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(58, 31, 122);
  text-decoration: rgb(58, 31, 122);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(58, 31, 122);
}`,
    listPage: `body li.section-li {
  background-color: rgb(209, 213, 230);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body li.section-li > .section .meta {
  color: rgb(58, 31, 122);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(58, 31, 122);
  text-decoration: rgb(58, 31, 122);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(15, 30, 87);
  border-left-color: rgb(15, 30, 87);
  border-right-color: rgb(15, 30, 87);
  border-top-color: rgb(15, 30, 87);
  color: rgb(15, 30, 87);
}

body .darkmode svg {
  color: rgb(15, 30, 87);
  stroke: rgb(15, 30, 87);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(62, 64, 116);
  border-left-color: rgb(62, 64, 116);
  border-right-color: rgb(62, 64, 116);
  border-top-color: rgb(62, 64, 116);
  color: rgb(62, 64, 116);
}

body .breadcrumb-element p {
  color: rgb(92, 61, 88);
}`,
    misc: `body .metadata {
  color: rgb(0, 0, 0);
}

body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .navigation-progress {
  background-color: rgb(172, 180, 210);
}

body input[type=text] {
  border-bottom-color: rgb(58, 31, 122);
  border-left-color: rgb(58, 31, 122);
  border-right-color: rgb(58, 31, 122);
  border-top-color: rgb(58, 31, 122);
  color: rgb(58, 31, 122);
}

body kbd {
  background-color: rgb(224, 222, 237);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
  },
};
