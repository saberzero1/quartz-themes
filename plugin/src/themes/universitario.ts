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
  --A01: rgb(54, 73, 64) !important;
  --A02: rgb(54, 73, 67) !important;
  --A03: rgb(54, 73, 70) !important;
  --A04: rgb(54, 73, 73) !important;
  --A05: rgb(54, 70, 73) !important;
  --A06: rgb(54, 67, 73) !important;
  --A07: rgb(54, 69, 73) !important;
  --A08: rgb(54, 70, 73) !important;
  --A09: rgb(54, 73, 73) !important;
  --A10: rgb(54, 73, 70) !important;
  --A11: rgb(54, 73, 67) !important;
  --accent-h: 150 !important;
  --accent-l: 65% !important;
  --accent-s: 80% !important;
  --background-highlight: rgb(38, 55, 89) !important;
  --background-modifier-active-hover: rgba(94, 237, 166, 0.15) !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-primary: rgb(22, 29, 24) !important;
  --background-primary-alt: rgb(34, 42, 38) !important;
  --background-primary-alt-1: rgb(34, 42, 38) !important;
  --background-search: rgb(57, 96, 70) !important;
  --background-secondary: rgb(73, 80, 78) !important;
  --background-table: hsl(120, -5%, 30%) !important;
  --background-tertiary: rgb(46, 56, 48) !important;
  --bases-cards-background: rgb(22, 29, 24) !important;
  --bases-cards-cover-background: rgb(34, 42, 38) !important;
  --bases-group-heading-property-color: white !important;
  --bases-table-cell-background-active: rgb(22, 29, 24) !important;
  --bases-table-cell-background-disabled: rgb(34, 42, 38) !important;
  --bases-table-cell-background-selected: rgba(94, 237, 166, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(94, 237, 166) !important;
  --bases-table-group-background: rgb(34, 42, 38) !important;
  --bases-table-header-background: rgb(22, 29, 24) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: white !important;
  --bases-table-summary-background: rgb(22, 29, 24) !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-border-color: rgb(94, 237, 166) !important;
  --bold-color: rgb(140, 217, 204) !important;
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
  --canvas-background: rgb(22, 29, 24) !important;
  --canvas-card-label-color: rgb(172, 179, 210) !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: transparent !important;
  --cards-border-width: 1px !important;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --cbs: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.03),
        0px 4px 8px rgba(0, 0, 0, 0.05), 0px 0px 12px rgba(0, 0, 0, 0.03),
        0px 2px 16px rgba(0, 0, 0, 0.03), 0px 4px 20px rgba(0, 0, 0, 0.02) !important;
  --checkbox-border-color: rgb(172, 179, 210) !important;
  --checkbox-border-color-hover: white !important;
  --checkbox-color: rgb(94, 237, 166) !important;
  --checkbox-color-hover: rgb(139, 244, 186) !important;
  --checkbox-marker-color: rgb(22, 29, 24) !important;
  --checklist-done-color: white !important;
  --code-background: rgb(34, 42, 38) !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: rgb(172, 179, 210) !important;
  --code-normal: white !important;
  --code-punctuation: white !important;
  --collapse-icon-color: rgb(172, 179, 210) !important;
  --collapse-icon-color-collapsed: rgb(139, 244, 186) !important;
  --color-accent: rgb(94, 237, 166) !important;
  --color-accent-1: rgb(139, 244, 186) !important;
  --color-accent-2: rgb(180, 248, 208) !important;
  --color-accent-hsl: 150, 80%, 65% !important;
  --dark: white !important;
  --darkgray: white !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(94, 237, 166) !important;
  --embed-block-shadow-hover: 0 0 0 1px #363636,
        inset 0 0 0 1px #363636 !important;
  --embed-border-left: 2px solid rgb(94, 237, 166) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(94, 237, 166) !important;
  --file-header-background: rgb(22, 29, 24) !important;
  --file-header-background-focused: rgb(22, 29, 24) !important;
  --file-margins: 32px !important;
  --footnote-id-color: white !important;
  --footnote-id-color-no-occurrences: rgb(172, 179, 210) !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --graph-line: rgb(139, 244, 186) !important;
  --graph-node: rgb(139, 244, 186) !important;
  --graph-node-focused: rgb(139, 244, 186) !important;
  --graph-node-unresolved: rgb(172, 179, 210) !important;
  --gray: white !important;
  --h1-size: 2.5rem !important;
  --h2-size: 2.0rem !important;
  --h2-weight: 600 !important;
  --h3-size: 1.7rem !important;
  --h3-weight: 600 !important;
  --h4-size: 1.5rem !important;
  --h4-weight: 600 !important;
  --h5-color: #e1aaff !important;
  --h5-size: 1.3rem !important;
  --h5-weight: 600 !important;
  --h6-color: #ffafc8 !important;
  --h6-size: 1.2rem !important;
  --heading-formatting: rgb(172, 179, 210) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(255, 255, 255, 0.075) !important;
  --icon-color: rgb(209, 250, 230) !important;
  --icon-color-active: rgb(139, 244, 186) !important;
  --icon-color-hover: white !important;
  --indentation-guide-color: rgb(73, 80, 78) !important;
  --indentation-guide-color-active: rgb(255, 255, 255) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-size: 2.5rem !important;
  --input-date-separator: rgb(172, 179, 210) !important;
  --input-placeholder-color: rgb(172, 179, 210) !important;
  --interactive-accent: rgb(94, 237, 166) !important;
  --interactive-accent-hover: rgb(139, 244, 186) !important;
  --interactive-accent-hsl: 150, 80%, 65% !important;
  --italic-color: rgb(159, 191, 223) !important;
  --light: rgb(22, 29, 24) !important;
  --lightgray: rgb(73, 80, 78) !important;
  --link-color: rgb(172, 246, 209) !important;
  --link-color-hover: rgb(195, 248, 222) !important;
  --link-external-color: rgb(139, 244, 186) !important;
  --link-external-color-hover: rgb(180, 248, 208) !important;
  --link-unresolved-color: rgb(139, 244, 186) !important;
  --link-unresolved-decoration-color: rgba(94, 237, 166, 0.3) !important;
  --list-bullet-size: 0.3rem !important;
  --list-indent: 3em !important;
  --list-marker-color: rgb(255, 255, 255) !important;
  --list-marker-color-collapsed: rgb(139, 244, 186) !important;
  --list-marker-color-hover: rgb(139, 244, 186) !important;
  --list-spacing: 0.2em !important;
  --mcc-img-snw-display: none !important;
  --menu-background: rgb(73, 80, 78) !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-height: 28px !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-text-color: white !important;
  --metadata-label-text-color-hover: white !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --modal-background: rgb(22, 29, 24) !important;
  --nav-collapse-icon-color: rgb(172, 179, 210) !important;
  --nav-collapse-icon-color-collapsed: rgb(172, 179, 210) !important;
  --nav-heading-color-collapsed: rgb(172, 179, 210) !important;
  --nav-heading-color-collapsed-hover: white !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: rgba(94, 237, 166, 0.15) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: white !important;
  --nav-item-color-highlighted: rgb(180, 248, 208) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(172, 179, 210) !important;
  --nav-tag-color-active: white !important;
  --nav-tag-color-hover: white !important;
  --pdf-background: rgb(22, 29, 24) !important;
  --pdf-page-background: rgb(22, 29, 24) !important;
  --pdf-sidebar-background: rgb(22, 29, 24) !important;
  --pill-color: white !important;
  --pill-color-remove: rgb(172, 179, 210) !important;
  --pill-color-remove-hover: rgb(139, 244, 186) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: rgb(22, 29, 24) !important;
  --red: rgba(94, 237, 166, 0.9) !important;
  --ribbon-background: rgb(73, 80, 78) !important;
  --ribbon-background-collapsed: rgb(73, 80, 78) !important;
  --scrollbar-active-thumb-bg: rgba(94, 237, 166, 0.2) !important;
  --scrollbar-bg: rgba(94, 237, 166, 0.2) !important;
  --scrollbar-thumb-bg: rgba(94, 237, 166, 0.2) !important;
  --search-clear-button-color: white !important;
  --search-icon-color: white !important;
  --search-result-background: rgb(22, 29, 24) !important;
  --secondary: rgb(139, 244, 186) !important;
  --setting-items-background: rgb(34, 42, 38) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-radius: 50% !important;
  --status-bar-background: rgb(46, 56, 48) !important;
  --status-bar-border-color: rgb(139, 244, 186) !important;
  --status-bar-border-width: 0px !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: white !important;
  --suggestion-background: rgb(22, 29, 24) !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --tab-background-active: transparent !important;
  --tab-container-background: rgb(22, 29, 24) !important;
  --tab-outline-color: transparent !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: rgb(73, 80, 78) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(73, 80, 78), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(94, 237, 166) !important;
  --tab-text-color: rgb(172, 179, 210) !important;
  --tab-text-color-active: white !important;
  --tab-text-color-focused: white !important;
  --tab-text-color-focused-active: white !important;
  --tab-text-color-focused-highlighted: rgb(139, 244, 186) !important;
  --table-drag-handle-background-active: rgb(94, 237, 166) !important;
  --table-drag-handle-color: rgb(172, 179, 210) !important;
  --table-drag-padding: 16px !important;
  --table-drag-space: 16px !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(94, 237, 166, 0.1) !important;
  --table-selection-border-color: rgb(94, 237, 166) !important;
  --tag-background: rgba(94, 237, 166, 0.1) !important;
  --tag-background-hover: rgba(94, 237, 166, 0.2) !important;
  --tag-border-color: rgba(94, 237, 166, 0.15) !important;
  --tag-border-color-hover: rgba(94, 237, 166, 0.15) !important;
  --tag-color: rgb(139, 244, 186) !important;
  --tag-color-hover: rgb(139, 244, 186) !important;
  --tertiary: rgb(180, 248, 208) !important;
  --text-accent: rgb(139, 244, 186) !important;
  --text-accent-hover: rgb(180, 248, 208) !important;
  --text-faint: rgb(172, 179, 210) !important;
  --text-important: rgb(232, 252, 246) !important;
  --text-muted: white !important;
  --text-selection: rgba(94, 237, 166, 0.33) !important;
  --text-title: rgb(194, 240, 217) !important;
  --textHighlight: rgba(255, 255, 255, 0.075) !important;
  --titlebar-background: rgb(22, 29, 24) !important;
  --titlebar-background-focused: rgb(22, 29, 24) !important;
  --titlebar-text-color: white !important;
  --vault-name-color: #dadada !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
  --A01: rgb(209, 213, 230) !important;
  --A02: rgb(209, 209, 230) !important;
  --A03: rgb(211, 209, 230) !important;
  --A04: rgb(215, 209, 230) !important;
  --A05: rgb(219, 209, 230) !important;
  --A06: rgb(222, 209, 230) !important;
  --A07: rgb(220, 209, 230) !important;
  --A08: rgb(219, 209, 230) !important;
  --A09: rgb(215, 209, 230) !important;
  --A10: rgb(211, 209, 230) !important;
  --A11: rgb(209, 209, 230) !important;
  --accent-h: 228 !important;
  --accent-l: 70% !important;
  --accent-s: 70% !important;
  --background-highlight: rgb(232, 230, 234) !important;
  --background-modifier-active-hover: rgba(125, 146, 232, 0.15) !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.075) !important;
  --background-primary: rgb(244, 237, 247) !important;
  --background-primary-alt: rgb(224, 222, 237) !important;
  --background-primary-alt-1: rgb(244, 237, 247) !important;
  --background-search: rgb(205, 206, 228) !important;
  --background-secondary: rgb(172, 180, 210) !important;
  --background-table: rgb(217, 218, 242) !important;
  --background-tertiary: rgb(184, 219, 224) !important;
  --bases-cards-background: rgb(244, 237, 247) !important;
  --bases-cards-cover-background: rgb(224, 222, 237) !important;
  --bases-group-heading-property-color: black !important;
  --bases-table-cell-background-active: rgb(244, 237, 247) !important;
  --bases-table-cell-background-disabled: rgb(224, 222, 237) !important;
  --bases-table-cell-background-selected: rgba(125, 146, 232, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(146, 166, 237) !important;
  --bases-table-group-background: rgb(224, 222, 237) !important;
  --bases-table-header-background: rgb(244, 237, 247) !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bases-table-header-color: black !important;
  --bases-table-summary-background: rgb(244, 237, 247) !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075) !important;
  --blockquote-border-color: rgb(146, 166, 237) !important;
  --blur-background: color-mix(in srgb, rgb(244, 237, 247) 65%, transparent) linear-gradient(rgb(244, 237, 247), color-mix(in srgb, rgb(244, 237, 247) 65%, transparent)) !important;
  --bold-color: rgb(54, 46, 107) !important;
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
  --canvas-background: rgb(244, 237, 247) !important;
  --canvas-card-label-color: rgb(92, 61, 88) !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: transparent !important;
  --cards-border-width: 1px !important;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --cbs: 0px 2px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.01),
        0px 4px 8px rgba(0, 0, 0, 0.01), 0px 0px 12px rgba(0, 0, 0, 0.01),
        0px 2px 16px rgba(0, 0, 0, 0.01), 0px 4px 20px rgba(0, 0, 0, 0.01) !important;
  --checkbox-border-color: rgb(92, 61, 88) !important;
  --checkbox-border-color-hover: black !important;
  --checkbox-color: rgb(146, 166, 237) !important;
  --checkbox-color-hover: rgb(172, 189, 241) !important;
  --checkbox-marker-color: rgb(244, 237, 247) !important;
  --checklist-done-color: black !important;
  --code-background: rgb(224, 222, 237) !important;
  --code-bracket-background: rgba(0, 0, 0, 0.075) !important;
  --code-comment: rgb(92, 61, 88) !important;
  --code-normal: black !important;
  --code-punctuation: black !important;
  --collapse-icon-color: rgb(92, 61, 88) !important;
  --collapse-icon-color-collapsed: rgb(125, 146, 232) !important;
  --color-accent: rgb(125, 146, 232) !important;
  --color-accent-1: rgb(146, 166, 237) !important;
  --color-accent-2: rgb(172, 189, 241) !important;
  --color-accent-hsl: 228, 70%, 70% !important;
  --dark: black !important;
  --darkgray: black !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(146, 166, 237) !important;
  --embed-block-shadow-hover: 0 0 0 1px #e0e0e0,
        inset 0 0 0 1px #e0e0e0 !important;
  --embed-border-left: 2px solid rgb(146, 166, 237) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(146, 166, 237) !important;
  --file-header-background: rgb(244, 237, 247) !important;
  --file-header-background-focused: rgb(244, 237, 247) !important;
  --file-margins: 32px !important;
  --footnote-id-color: black !important;
  --footnote-id-color-no-occurrences: rgb(92, 61, 88) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --graph-line: rgb(125, 146, 232) !important;
  --graph-node: rgb(125, 146, 232) !important;
  --graph-node-focused: rgb(125, 146, 232) !important;
  --graph-node-unresolved: rgb(92, 61, 88) !important;
  --gray: black !important;
  --h1-size: 2.5rem !important;
  --h2-size: 2.0rem !important;
  --h2-weight: 600 !important;
  --h3-size: 1.7rem !important;
  --h3-weight: 600 !important;
  --h4-size: 1.5rem !important;
  --h4-weight: 600 !important;
  --h5-size: 1.3rem !important;
  --h5-weight: 600 !important;
  --h6-size: 1.2rem !important;
  --heading-formatting: rgb(92, 61, 88) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(0, 0, 0, 0.075) !important;
  --icon-color: rgb(15, 30, 87) !important;
  --icon-color-active: rgb(15, 30, 87) !important;
  --icon-color-hover: black !important;
  --indentation-guide-color: rgb(172, 180, 210) !important;
  --indentation-guide-color-active: rgb(125, 146, 232) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-size: 2.5rem !important;
  --input-date-separator: rgb(92, 61, 88) !important;
  --input-placeholder-color: rgb(92, 61, 88) !important;
  --interactive-accent: rgb(146, 166, 237) !important;
  --interactive-accent-hover: rgb(172, 189, 241) !important;
  --interactive-accent-hsl: 228, 70%, 70% !important;
  --italic-color: rgb(63, 54, 125) !important;
  --light: rgb(244, 237, 247) !important;
  --lightgray: rgb(172, 180, 210) !important;
  --link-color: rgb(46, 58, 107) !important;
  --link-color-hover: rgb(31, 39, 71) !important;
  --link-external-color: rgb(125, 146, 232) !important;
  --link-external-color-hover: rgb(172, 189, 241) !important;
  --link-unresolved-color: rgb(125, 146, 232) !important;
  --link-unresolved-decoration-color: rgba(125, 146, 232, 0.3) !important;
  --list-bullet-size: 0.3rem !important;
  --list-indent: 3em !important;
  --list-marker-color: rgb(46, 58, 107) !important;
  --list-marker-color-collapsed: rgb(125, 146, 232) !important;
  --list-marker-color-hover: rgb(125, 146, 232) !important;
  --list-spacing: 0.2em !important;
  --mcc-img-snw-display: none !important;
  --menu-background: rgb(172, 180, 210) !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-input-height: 28px !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-label-text-color: black !important;
  --metadata-label-text-color-hover: black !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075) !important;
  --modal-background: rgb(244, 237, 247) !important;
  --nav-collapse-icon-color: rgb(92, 61, 88) !important;
  --nav-collapse-icon-color-collapsed: rgb(92, 61, 88) !important;
  --nav-heading-color-collapsed: rgb(92, 61, 88) !important;
  --nav-heading-color-collapsed-hover: black !important;
  --nav-indentation-guide-color: transparent
    --nav-collapse-icon-color: rgb(92, 61, 88) !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-selected: rgba(125, 146, 232, 0.15) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: black !important;
  --nav-item-color-highlighted: rgb(172, 189, 241) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(92, 61, 88) !important;
  --nav-tag-color-active: black !important;
  --nav-tag-color-hover: black !important;
  --pdf-background: rgb(244, 237, 247) !important;
  --pdf-page-background: rgb(244, 237, 247) !important;
  --pdf-sidebar-background: rgb(244, 237, 247) !important;
  --pill-color: black !important;
  --pill-color-remove: rgb(92, 61, 88) !important;
  --pill-color-remove-hover: rgb(125, 146, 232) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: rgb(244, 237, 247) !important;
  --raised-background: color-mix(in srgb, rgb(244, 237, 247) 65%, transparent) linear-gradient(rgb(244, 237, 247), color-mix(in srgb, rgb(244, 237, 247) 65%, transparent)) !important;
  --red: rgba(125, 146, 232, 0.9) !important;
  --ribbon-background: rgb(244, 237, 247) !important;
  --ribbon-background-collapsed: rgb(172, 180, 210) !important;
  --scrollbar-active-thumb-bg: rgba(125, 146, 232, 0.2) !important;
  --scrollbar-bg: rgba(125, 146, 232, 0.2) !important;
  --scrollbar-thumb-bg: rgb(156, 180, 201) !important;
  --search-clear-button-color: black !important;
  --search-icon-color: black !important;
  --search-result-background: #fafafa !important;
  --secondary: rgb(125, 146, 232) !important;
  --setting-items-background: rgb(224, 222, 237) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-radius: 50% !important;
  --status-bar-background: rgb(172, 180, 210) !important;
  --status-bar-border-color: rgb(125, 146, 232) !important;
  --status-bar-border-width: 0px !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: black !important;
  --suggestion-background: rgb(244, 237, 247) !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --tab-background-active: transparent !important;
  --tab-container-background: rgb(244, 237, 247) !important;
  --tab-outline-color: transparent !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: rgb(172, 180, 210) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(172, 180, 210), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(125, 146, 232) !important;
  --tab-text-color: rgb(92, 61, 88) !important;
  --tab-text-color-active: black !important;
  --tab-text-color-focused: black !important;
  --tab-text-color-focused-active: black !important;
  --tab-text-color-focused-highlighted: rgb(125, 146, 232) !important;
  --table-drag-handle-background-active: rgb(146, 166, 237) !important;
  --table-drag-handle-color: rgb(92, 61, 88) !important;
  --table-drag-padding: 16px !important;
  --table-drag-space: 16px !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(125, 146, 232, 0.1) !important;
  --table-selection-border-color: rgb(146, 166, 237) !important;
  --tag-background: rgba(125, 146, 232, 0.1) !important;
  --tag-background-hover: rgba(125, 146, 232, 0.2) !important;
  --tag-border-color: rgba(125, 146, 232, 0.15) !important;
  --tag-border-color-hover: rgba(125, 146, 232, 0.15) !important;
  --tag-color: rgb(125, 146, 232) !important;
  --tag-color-hover: rgb(125, 146, 232) !important;
  --tertiary: rgb(172, 189, 241) !important;
  --text-accent: rgb(125, 146, 232) !important;
  --text-accent-hover: rgb(172, 189, 241) !important;
  --text-faint: rgb(92, 61, 88) !important;
  --text-important: rgb(58, 31, 122) !important;
  --text-muted: black !important;
  --text-selection: rgba(125, 146, 232, 0.2) !important;
  --text-title: rgb(62, 64, 116) !important;
  --textHighlight: rgba(0, 0, 0, 0.075) !important;
  --titlebar-background: rgb(244, 237, 247) !important;
  --titlebar-background-focused: rgb(244, 237, 247) !important;
  --titlebar-text-color: black !important;
  --vault-name-color: #222222 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
