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
  --A01: hsl(150, 15%, 25%) !important;
  --A02: hsl(160, 15%, 25%) !important;
  --A03: hsl(170, 15%, 25%) !important;
  --A04: hsl(180, 15%, 25%) !important;
  --A05: hsl(190, 15%, 25%) !important;
  --A06: hsl(200, 15%, 25%) !important;
  --A07: hsl(195, 15%, 25%) !important;
  --A08: hsl(190, 15%, 25%) !important;
  --A09: hsl(180, 15%, 25%) !important;
  --A10: hsl(170, 15%, 25%) !important;
  --A11: hsl(160, 15%, 25%) !important;
  --accent-h: 150 !important;
  --accent-l: 65% !important;
  --accent-s: 80% !important;
  --background-highlight: hsl(220, 40%, 25%) !important;
  --background-modifier-active-hover: hsla(150, 80%, 65%, 0.15) !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-primary: hsl(140, 15%, 10%) !important;
  --background-primary-alt: hsl(150, 10%, 15%) !important;
  --background-primary-alt-1: hsl(150, 10%, 15%) !important;
  --background-search: hsl(140, 25%, 30%) !important;
  --background-secondary: hsl(160, 5%, 30%) !important;
  --background-table: hsl(120, -5%, 30%) !important;
  --background-tertiary: hsl(130, 10%, 20%) !important;
  --bases-cards-background: hsl(140, 15%, 10%) !important;
  --bases-cards-cover-background: hsl(150, 10%, 15%) !important;
  --bases-group-heading-property-color: white !important;
  --bases-table-cell-background-active: hsl(140, 15%, 10%) !important;
  --bases-table-cell-background-disabled: hsl(150, 10%, 15%) !important;
  --bases-table-cell-background-selected: hsla(150, 80%, 65%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(150, 80%, 65%) !important;
  --bases-table-group-background: hsl(150, 10%, 15%) !important;
  --bases-table-header-background: hsl(140, 15%, 10%) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: white !important;
  --bases-table-summary-background: hsl(140, 15%, 10%) !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-border-color: hsl(150, 80%, 65%) !important;
  --bold-color: hsl(170, 50%, 70%) !important;
  --bold-weight: 600 !important;
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
  --canvas-background: hsl(140, 15%, 10%) !important;
  --canvas-card-label-color: hsl(230, 30%, 75%) !important;
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
  --checkbox-border-color: hsl(230, 30%, 75%) !important;
  --checkbox-border-color-hover: white !important;
  --checkbox-color: hsl(150, 80%, 65%) !important;
  --checkbox-color-hover: hsl(147, 81.6%, 74.75%) !important;
  --checkbox-marker-color: hsl(140, 15%, 10%) !important;
  --checklist-done-color: white !important;
  --code-background: hsl(150, 10%, 15%) !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: hsl(230, 30%, 75%) !important;
  --code-normal: white !important;
  --code-punctuation: white !important;
  --collapse-icon-color: hsl(230, 30%, 75%) !important;
  --collapse-icon-color-collapsed: hsl(147, 81.6%, 74.75%) !important;
  --color-accent: hsl(150, 80%, 65%) !important;
  --color-accent-1: hsl(147, 81.6%, 74.75%) !important;
  --color-accent-2: hsl(145, 84%, 83.85%) !important;
  --color-accent-hsl: 150, 80%, 65% !important;
  --dark: white !important;
  --darkgray: white !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(150, 80%, 65%) !important;
  --embed-block-shadow-hover: 0 0 0 1px #363636,
        inset 0 0 0 1px #363636 !important;
  --embed-border-left: 2px solid hsl(150, 80%, 65%) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(150, 80%, 65%) !important;
  --file-header-background: hsl(140, 15%, 10%) !important;
  --file-header-background-focused: hsl(140, 15%, 10%) !important;
  --file-margins: 32px !important;
  --footnote-id-color: white !important;
  --footnote-id-color-no-occurrences: hsl(230, 30%, 75%) !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --graph-line: hsl(147, 81.6%, 74.75%) !important;
  --graph-node: hsl(147, 81.6%, 74.75%) !important;
  --graph-node-focused: hsl(147, 81.6%, 74.75%) !important;
  --graph-node-unresolved: hsl(230, 30%, 75%) !important;
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
  --heading-formatting: hsl(230, 30%, 75%) !important;
  --highlight: rgba(255, 255, 255, 0.075) !important;
  --icon-color: hsl(150, 80%, 90%) !important;
  --icon-color-active: hsl(147, 81.6%, 74.75%) !important;
  --icon-color-hover: white !important;
  --indentation-guide-color: hsl(160, 5%, 30%) !important;
  --indentation-guide-color-active: rgb(255, 255, 255) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-size: 2.5rem !important;
  --input-date-separator: hsl(230, 30%, 75%) !important;
  --input-placeholder-color: hsl(230, 30%, 75%) !important;
  --interactive-accent: hsl(150, 80%, 65%) !important;
  --interactive-accent-hover: hsl(147, 81.6%, 74.75%) !important;
  --interactive-accent-hsl: 150, 80%, 65% !important;
  --italic-color: hsl(210, 50%, 75%) !important;
  --light: hsl(140, 15%, 10%) !important;
  --lightgray: hsl(160, 5%, 30%) !important;
  --link-color: hsl(150, 80%, 82%) !important;
  --link-color-hover: hsl(150, 80%, 87%) !important;
  --link-external-color: hsl(147, 81.6%, 74.75%) !important;
  --link-external-color-hover: hsl(145, 84%, 83.85%) !important;
  --link-unresolved-color: hsl(147, 81.6%, 74.75%) !important;
  --link-unresolved-decoration-color: hsla(150, 80%, 65%, 0.3) !important;
  --list-bullet-size: 0.3rem !important;
  --list-indent: 3em !important;
  --list-marker-color: hsl(150, 80%, 100%) !important;
  --list-marker-color-collapsed: hsl(147, 81.6%, 74.75%) !important;
  --list-marker-color-hover: hsl(147, 81.6%, 74.75%) !important;
  --list-spacing: 0.2em !important;
  --mcc-img-snw-display: none !important;
  --menu-background: hsl(160, 5%, 30%) !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-text-color: white !important;
  --metadata-label-text-color-hover: white !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --modal-background: hsl(140, 15%, 10%) !important;
  --nav-collapse-icon-color: hsl(230, 30%, 75%) !important;
  --nav-collapse-icon-color-collapsed: hsl(230, 30%, 75%) !important;
  --nav-heading-color-collapsed: hsl(230, 30%, 75%) !important;
  --nav-heading-color-collapsed-hover: white !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: hsla(150, 80%, 65%, 0.15) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: white !important;
  --nav-item-color-highlighted: hsl(145, 84%, 83.85%) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsl(230, 30%, 75%) !important;
  --nav-tag-color-active: white !important;
  --nav-tag-color-hover: white !important;
  --pdf-background: hsl(140, 15%, 10%) !important;
  --pdf-page-background: hsl(140, 15%, 10%) !important;
  --pdf-sidebar-background: hsl(140, 15%, 10%) !important;
  --pill-color: white !important;
  --pill-color-remove: hsl(230, 30%, 75%) !important;
  --pill-color-remove-hover: hsl(147, 81.6%, 74.75%) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: hsl(140, 15%, 10%) !important;
  --red: hsla(150, 80%, 65%, 0.9) !important;
  --ribbon-background: hsl(160, 5%, 30%) !important;
  --ribbon-background-collapsed: hsl(160, 5%, 30%) !important;
  --scrollbar-active-thumb-bg: hsla(150, 80%, 65%, 0.2) !important;
  --scrollbar-bg: hsla(150, 80%, 65%, 0.2) !important;
  --scrollbar-thumb-bg: hsla(150, 80%, 65%, 0.2) !important;
  --search-clear-button-color: white !important;
  --search-icon-color: white !important;
  --search-result-background: hsl(140, 15%, 10%) !important;
  --secondary: hsl(147, 81.6%, 74.75%) !important;
  --setting-items-background: hsl(150, 10%, 15%) !important;
  --slider-thumb-radius: 50% !important;
  --status-bar-background: hsl(130, 10%, 20%) !important;
  --status-bar-border-color: hsl(147, 81.6%, 74.75%) !important;
  --status-bar-border-width: 0px !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: white !important;
  --suggestion-background: hsl(140, 15%, 10%) !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --tab-background-active: transparent !important;
  --tab-container-background: hsl(140, 15%, 10%) !important;
  --tab-outline-color: transparent !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: hsl(160, 5%, 30%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(160, 5%, 30%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(150, 80%, 65%) !important;
  --tab-text-color: hsl(230, 30%, 75%) !important;
  --tab-text-color-active: white !important;
  --tab-text-color-focused: white !important;
  --tab-text-color-focused-active: white !important;
  --tab-text-color-focused-highlighted: hsl(147, 81.6%, 74.75%) !important;
  --table-drag-handle-background-active: hsl(150, 80%, 65%) !important;
  --table-drag-handle-color: hsl(230, 30%, 75%) !important;
  --table-drag-padding: 16px !important;
  --table-drag-space: 16px !important;
  --table-selection: hsla(150, 80%, 65%, 0.1) !important;
  --table-selection-border-color: hsl(150, 80%, 65%) !important;
  --tag-background: hsla(150, 80%, 65%, 0.1) !important;
  --tag-background-hover: hsla(150, 80%, 65%, 0.2) !important;
  --tag-border-color: hsla(150, 80%, 65%, 0.15) !important;
  --tag-border-color-hover: hsla(150, 80%, 65%, 0.15) !important;
  --tag-color: hsl(147, 81.6%, 74.75%) !important;
  --tag-color-hover: hsl(147, 81.6%, 74.75%) !important;
  --tertiary: hsl(145, 84%, 83.85%) !important;
  --text-accent: hsl(147, 81.6%, 74.75%) !important;
  --text-accent-hover: hsl(145, 84%, 83.85%) !important;
  --text-faint: hsl(230, 30%, 75%) !important;
  --text-important: hsl(160, 80%, 95%) !important;
  --text-muted: white !important;
  --text-selection: hsla(150, 80%, 65%, 0.33) !important;
  --text-title: hsl(150, 60%, 85%) !important;
  --textHighlight: rgba(255, 255, 255, 0.075) !important;
  --titlebar-background: hsl(140, 15%, 10%) !important;
  --titlebar-background-focused: hsl(140, 15%, 10%) !important;
  --titlebar-text-color: white !important;
  --vault-name-color: #dadada !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 29, 24);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(22, 29, 24);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(54, 54, 54);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(46, 56, 48);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(73, 80, 78);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(94, 237, 166, 0.1);
  color: rgb(138, 243, 185);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 29, 24);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 29, 24);
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(22, 29, 24);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(140, 217, 204);
  outline: rgb(140, 217, 204) none 0px;
  text-decoration-color: rgb(140, 217, 204);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(159, 191, 223);
  outline: rgb(159, 191, 223) none 0px;
  text-decoration-color: rgb(159, 191, 223);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(159, 191, 223);
  outline: rgb(159, 191, 223) none 0px;
  text-decoration-color: rgb(159, 191, 223);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(140, 217, 204);
  outline: rgb(140, 217, 204) none 0px;
  text-decoration-color: rgb(140, 217, 204);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(38, 55, 89);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(172, 179, 210);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(94, 237, 166);
  border-color: rgb(94, 237, 166);
}

html[saved-theme="dark"] body p {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(138, 243, 185);
  outline: rgb(138, 243, 185) none 0px;
  text-decoration-color: rgb(138, 243, 185);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(172, 246, 209);
  outline: rgb(172, 246, 209) none 0px;
  text-decoration-color: rgb(172, 246, 209);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(138, 243, 185);
  outline: rgb(138, 243, 185) none 0px;
  text-decoration-color: rgb(138, 243, 185);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(172, 179, 210);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(46, 56, 48);
  font-style: italic;
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
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
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
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(34, 42, 38);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(34, 42, 38);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(34, 42, 38);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(34, 42, 38);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
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
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(100, 255, 255);
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgba(100, 255, 255, 0.1);
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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

html[saved-theme="dark"] body .callout[data-callout="bug"] {
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
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

html[saved-theme="dark"] body .callout[data-callout="question"] {
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
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

html[saved-theme="dark"] body .callout[data-callout="warning"] {
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
  background-color: rgb(22, 29, 24);
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
  background-color: rgb(73, 80, 78);
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
  background-color: rgb(73, 80, 78);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(73, 80, 78);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(94, 237, 166, 0.1);
  border-bottom-color: rgba(94, 237, 166, 0.15);
  border-left-color: rgba(94, 237, 166, 0.15);
  border-right-color: rgba(94, 237, 166, 0.15);
  border-top-color: rgba(94, 237, 166, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(138, 243, 185);
}

html[saved-theme="dark"] body h1 {
  text-shadow: rgba(0, 0, 0, 0.7) 0px 0px 5px;
}

html[saved-theme="dark"] body h5 {
  color: rgb(225, 170, 255);
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 175, 200);
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
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(22, 29, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 24);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(232, 252, 246);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(232, 252, 246);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(209, 250, 230);
  border-left-color: rgb(209, 250, 230);
  border-right-color: rgb(209, 250, 230);
  border-top-color: rgb(209, 250, 230);
  color: rgb(209, 250, 230);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(46, 56, 48);
  border-bottom-color: rgb(138, 243, 185);
  border-left-color: rgb(138, 243, 185);
  border-left-width: 0px;
  border-right-color: rgb(138, 243, 185);
  border-top-color: rgb(138, 243, 185);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(255, 255, 255);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  background-color: rgb(54, 73, 64);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(232, 252, 246);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(232, 252, 246);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  background-color: rgb(54, 73, 64);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(232, 252, 246);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(232, 252, 246);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(209, 250, 230);
  border-left-color: rgb(209, 250, 230);
  border-right-color: rgb(209, 250, 230);
  border-top-color: rgb(209, 250, 230);
  color: rgb(209, 250, 230);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(209, 250, 230);
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
  color: rgb(172, 179, 210);
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(46, 56, 48);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(232, 252, 246);
  border-left-color: rgb(232, 252, 246);
  border-right-color: rgb(232, 252, 246);
  border-top-color: rgb(232, 252, 246);
  color: rgb(232, 252, 246);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(34, 42, 38);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(46, 56, 48);
  border-bottom-color: rgba(94, 237, 166, 0.15);
  border-left-color: rgba(94, 237, 166, 0.15);
  border-right-color: rgba(94, 237, 166, 0.15);
  border-top-color: rgba(94, 237, 166, 0.15);
  color: rgb(186, 186, 186);
}`,
  },
  light: {
    base: `:root:root {
  --A01: hsl(228, 30%, 86%) !important;
  --A02: hsl(238, 30%, 86%) !important;
  --A03: hsl(248, 30%, 86%) !important;
  --A04: hsl(258, 30%, 86%) !important;
  --A05: hsl(268, 30%, 86%) !important;
  --A06: hsl(278, 30%, 86%) !important;
  --A07: hsl(273, 30%, 86%) !important;
  --A08: hsl(268, 30%, 86%) !important;
  --A09: hsl(258, 30%, 86%) !important;
  --A10: hsl(248, 30%, 86%) !important;
  --A11: hsl(238, 30%, 86%) !important;
  --accent-h: 228 !important;
  --accent-l: 70% !important;
  --accent-s: 70% !important;
  --background-highlight: hsl(268, 10%, 91%) !important;
  --background-modifier-active-hover: hsla(228, 70%, 70%, 0.15) !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.075) !important;
  --background-primary: hsl(278, 40%, 95%) !important;
  --background-primary-alt: hsl(248, 30%, 90%) !important;
  --background-primary-alt-1: hsl(278, 40%, 95%) !important;
  --background-search: hsl(238, 30%, 85%) !important;
  --background-secondary: hsl(228, 30%, 75%) !important;
  --background-table: hsl(238, 50%, 90%) !important;
  --background-tertiary: hsl(188, 40%, 80%) !important;
  --bases-cards-background: hsl(278, 40%, 95%) !important;
  --bases-cards-cover-background: hsl(248, 30%, 90%) !important;
  --bases-group-heading-property-color: black !important;
  --bases-table-cell-background-active: hsl(278, 40%, 95%) !important;
  --bases-table-cell-background-disabled: hsl(248, 30%, 90%) !important;
  --bases-table-cell-background-selected: hsla(228, 70%, 70%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(227, 70.7%, 75.25%) !important;
  --bases-table-group-background: hsl(248, 30%, 90%) !important;
  --bases-table-header-background: hsl(278, 40%, 95%) !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bases-table-header-color: black !important;
  --bases-table-summary-background: hsl(278, 40%, 95%) !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075) !important;
  --blockquote-border-color: hsl(227, 70.7%, 75.25%) !important;
  --blur-background: color-mix(in srgb, hsl(278, 40%, 95%) 65%, transparent) linear-gradient(hsl(278, 40%, 95%), color-mix(in srgb, hsl(278, 40%, 95%) 65%, transparent)) !important;
  --bold-color: hsl(248, 40%, 30%) !important;
  --bold-weight: 600 !important;
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
  --canvas-background: hsl(278, 40%, 95%) !important;
  --canvas-card-label-color: hsl(308, 20%, 30%) !important;
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
  --checkbox-border-color: hsl(308, 20%, 30%) !important;
  --checkbox-border-color-hover: black !important;
  --checkbox-color: hsl(227, 70.7%, 75.25%) !important;
  --checkbox-color-hover: hsl(225, 71.4%, 80.5%) !important;
  --checkbox-marker-color: hsl(278, 40%, 95%) !important;
  --checklist-done-color: black !important;
  --code-background: hsl(248, 30%, 90%) !important;
  --code-bracket-background: rgba(0, 0, 0, 0.075) !important;
  --code-comment: hsl(308, 20%, 30%) !important;
  --code-normal: black !important;
  --code-punctuation: black !important;
  --collapse-icon-color: hsl(308, 20%, 30%) !important;
  --collapse-icon-color-collapsed: hsl(228, 70%, 70%) !important;
  --color-accent: hsl(228, 70%, 70%) !important;
  --color-accent-1: hsl(227, 70.7%, 75.25%) !important;
  --color-accent-2: hsl(225, 71.4%, 80.5%) !important;
  --color-accent-hsl: 228, 70%, 70% !important;
  --dark: black !important;
  --darkgray: black !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(227, 70.7%, 75.25%) !important;
  --embed-block-shadow-hover: 0 0 0 1px #e0e0e0,
        inset 0 0 0 1px #e0e0e0 !important;
  --embed-border-left: 2px solid hsl(227, 70.7%, 75.25%) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(227, 70.7%, 75.25%) !important;
  --file-header-background: hsl(278, 40%, 95%) !important;
  --file-header-background-focused: hsl(278, 40%, 95%) !important;
  --file-margins: 32px !important;
  --footnote-id-color: black !important;
  --footnote-id-color-no-occurrences: hsl(308, 20%, 30%) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --graph-line: hsl(228, 70%, 70%) !important;
  --graph-node: hsl(228, 70%, 70%) !important;
  --graph-node-focused: hsl(228, 70%, 70%) !important;
  --graph-node-unresolved: hsl(308, 20%, 30%) !important;
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
  --heading-formatting: hsl(308, 20%, 30%) !important;
  --highlight: rgba(0, 0, 0, 0.075) !important;
  --icon-color: hsl(228, 70%, 20%) !important;
  --icon-color-active: hsl(228, 70%, 20%) !important;
  --icon-color-hover: black !important;
  --indentation-guide-color: hsl(228, 30%, 75%) !important;
  --indentation-guide-color-active: hsl(228, 70%, 70%) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-size: 2.5rem !important;
  --input-date-separator: hsl(308, 20%, 30%) !important;
  --input-placeholder-color: hsl(308, 20%, 30%) !important;
  --interactive-accent: hsl(227, 70.7%, 75.25%) !important;
  --interactive-accent-hover: hsl(225, 71.4%, 80.5%) !important;
  --interactive-accent-hsl: 228, 70%, 70% !important;
  --italic-color: hsl(248, 40%, 35%) !important;
  --light: hsl(278, 40%, 95%) !important;
  --lightgray: hsl(228, 30%, 75%) !important;
  --link-color: hsl(228, 40%, 30%) !important;
  --link-color-hover: hsl(228, 40%, 20%) !important;
  --link-external-color: hsl(228, 70%, 70%) !important;
  --link-external-color-hover: hsl(225, 71.4%, 80.5%) !important;
  --link-unresolved-color: hsl(228, 70%, 70%) !important;
  --link-unresolved-decoration-color: hsla(228, 70%, 70%, 0.3) !important;
  --list-bullet-size: 0.3rem !important;
  --list-indent: 3em !important;
  --list-marker-color: hsl(228, 40%, 30%) !important;
  --list-marker-color-collapsed: hsl(228, 70%, 70%) !important;
  --list-marker-color-hover: hsl(228, 70%, 70%) !important;
  --list-spacing: 0.2em !important;
  --mcc-img-snw-display: none !important;
  --menu-background: hsl(228, 30%, 75%) !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-label-text-color: black !important;
  --metadata-label-text-color-hover: black !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075) !important;
  --modal-background: hsl(278, 40%, 95%) !important;
  --nav-collapse-icon-color: hsl(308, 20%, 30%) !important;
  --nav-collapse-icon-color-collapsed: hsl(308, 20%, 30%) !important;
  --nav-heading-color-collapsed: hsl(308, 20%, 30%) !important;
  --nav-heading-color-collapsed-hover: black !important;
  --nav-indentation-guide-color: transparent
    --nav-collapse-icon-color: hsl(308, 20%, 30%) !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-selected: hsla(228, 70%, 70%, 0.15) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: black !important;
  --nav-item-color-highlighted: hsl(225, 71.4%, 80.5%) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsl(308, 20%, 30%) !important;
  --nav-tag-color-active: black !important;
  --nav-tag-color-hover: black !important;
  --pdf-background: hsl(278, 40%, 95%) !important;
  --pdf-page-background: hsl(278, 40%, 95%) !important;
  --pdf-sidebar-background: hsl(278, 40%, 95%) !important;
  --pill-color: black !important;
  --pill-color-remove: hsl(308, 20%, 30%) !important;
  --pill-color-remove-hover: hsl(228, 70%, 70%) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: hsl(278, 40%, 95%) !important;
  --raised-background: color-mix(in srgb, hsl(278, 40%, 95%) 65%, transparent) linear-gradient(hsl(278, 40%, 95%), color-mix(in srgb, hsl(278, 40%, 95%) 65%, transparent)) !important;
  --red: hsla(228, 70%, 70%, 0.9) !important;
  --ribbon-background: hsl(278, 40%, 95%) !important;
  --ribbon-background-collapsed: hsl(228, 30%, 75%) !important;
  --scrollbar-active-thumb-bg: hsla(228, 70%, 70%, 0.2) !important;
  --scrollbar-bg: hsla(228, 70%, 70%, 0.2) !important;
  --scrollbar-thumb-bg: hsl(208, 30%, 70%) !important;
  --search-clear-button-color: black !important;
  --search-icon-color: black !important;
  --search-result-background: #fafafa !important;
  --secondary: hsl(228, 70%, 70%) !important;
  --setting-items-background: hsl(248, 30%, 90%) !important;
  --slider-thumb-radius: 50% !important;
  --status-bar-background: hsl(228, 30%, 75%) !important;
  --status-bar-border-color: hsl(228, 70%, 70%) !important;
  --status-bar-border-width: 0px !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: black !important;
  --suggestion-background: hsl(278, 40%, 95%) !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --tab-background-active: transparent !important;
  --tab-container-background: hsl(278, 40%, 95%) !important;
  --tab-outline-color: transparent !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: hsl(228, 30%, 75%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(228, 30%, 75%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(228, 70%, 70%) !important;
  --tab-text-color: hsl(308, 20%, 30%) !important;
  --tab-text-color-active: black !important;
  --tab-text-color-focused: black !important;
  --tab-text-color-focused-active: black !important;
  --tab-text-color-focused-highlighted: hsl(228, 70%, 70%) !important;
  --table-drag-handle-background-active: hsl(227, 70.7%, 75.25%) !important;
  --table-drag-handle-color: hsl(308, 20%, 30%) !important;
  --table-drag-padding: 16px !important;
  --table-drag-space: 16px !important;
  --table-selection: hsla(228, 70%, 70%, 0.1) !important;
  --table-selection-border-color: hsl(227, 70.7%, 75.25%) !important;
  --tag-background: hsla(228, 70%, 70%, 0.1) !important;
  --tag-background-hover: hsla(228, 70%, 70%, 0.2) !important;
  --tag-border-color: hsla(228, 70%, 70%, 0.15) !important;
  --tag-border-color-hover: hsla(228, 70%, 70%, 0.15) !important;
  --tag-color: hsl(228, 70%, 70%) !important;
  --tag-color-hover: hsl(228, 70%, 70%) !important;
  --tertiary: hsl(225, 71.4%, 80.5%) !important;
  --text-accent: hsl(228, 70%, 70%) !important;
  --text-accent-hover: hsl(225, 71.4%, 80.5%) !important;
  --text-faint: hsl(308, 20%, 30%) !important;
  --text-important: hsl(258, 60%, 30%) !important;
  --text-muted: black !important;
  --text-selection: hsla(228, 70%, 70%, 0.2) !important;
  --text-title: hsl(238, 30%, 35%) !important;
  --textHighlight: rgba(0, 0, 0, 0.075) !important;
  --titlebar-background: hsl(278, 40%, 95%) !important;
  --titlebar-background-focused: hsl(278, 40%, 95%) !important;
  --titlebar-text-color: black !important;
  --vault-name-color: #222222 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 237, 247);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(244, 237, 247);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(224, 224, 224);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(184, 219, 224);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(244, 237, 247);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(125, 146, 232, 0.1);
  color: rgb(125, 146, 232);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 237, 247);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 237, 247);
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(244, 237, 247);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(54, 46, 107);
  outline: rgb(54, 46, 107) none 0px;
  text-decoration-color: rgb(54, 46, 107);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(63, 54, 125);
  outline: rgb(63, 54, 125) none 0px;
  text-decoration-color: rgb(63, 54, 125);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(63, 54, 125);
  outline: rgb(63, 54, 125) none 0px;
  text-decoration-color: rgb(63, 54, 125);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(54, 46, 107);
  outline: rgb(54, 46, 107) none 0px;
  text-decoration-color: rgb(54, 46, 107);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(232, 230, 234);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(92, 61, 88);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(147, 167, 237);
  border-color: rgb(147, 167, 237);
}

html[saved-theme="light"] body p {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(125, 146, 232);
  outline: rgb(125, 146, 232) none 0px;
  text-decoration-color: rgb(125, 146, 232);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(46, 58, 107);
  outline: rgb(46, 58, 107) none 0px;
  text-decoration-color: rgb(46, 58, 107);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(125, 146, 232);
  outline: rgb(125, 146, 232) none 0px;
  text-decoration-color: rgb(125, 146, 232);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(92, 61, 88);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(184, 219, 224);
  font-style: italic;
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
  background-color: rgb(217, 218, 242);
  text-align: center;
}

html[saved-theme="light"] body th {
  background-color: rgb(184, 219, 224);
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
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
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(224, 222, 237);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(224, 222, 237);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(224, 222, 237);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(224, 222, 237);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
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

html[saved-theme="light"] body .transclude {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(92, 61, 88);
  border-left-color: rgb(92, 61, 88);
  border-right-color: rgb(92, 61, 88);
  border-top-color: rgb(92, 61, 88);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: rgba(0, 0, 0, 0.15);
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
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

html[saved-theme="light"] body .callout[data-callout="example"] {
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
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

html[saved-theme="light"] body .callout[data-callout="info"] {
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

html[saved-theme="light"] body .callout[data-callout="note"] {
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

html[saved-theme="light"] body .callout[data-callout="question"] {
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
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

html[saved-theme="light"] body .callout[data-callout="success"] {
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
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
  background-color: rgb(244, 237, 247);
  border-bottom-color: rgb(125, 146, 232);
  border-left-color: rgb(125, 146, 232);
  border-right-color: rgb(125, 146, 232);
  border-top-color: rgb(125, 146, 232);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(244, 237, 247);
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
  background-color: rgb(172, 180, 210);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(172, 180, 210);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(172, 180, 210);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(172, 180, 210);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(125, 146, 232, 0.1);
  border-bottom-color: rgba(125, 146, 232, 0.15);
  border-left-color: rgba(125, 146, 232, 0.15);
  border-right-color: rgba(125, 146, 232, 0.15);
  border-top-color: rgba(125, 146, 232, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(125, 146, 232);
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
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(244, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 237, 247);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(58, 31, 122);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(58, 31, 122);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(15, 30, 87);
  border-left-color: rgb(15, 30, 87);
  border-right-color: rgb(15, 30, 87);
  border-top-color: rgb(15, 30, 87);
  color: rgb(15, 30, 87);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(172, 180, 210);
  border-bottom-color: rgb(125, 146, 232);
  border-left-color: rgb(125, 146, 232);
  border-left-width: 0px;
  border-right-color: rgb(125, 146, 232);
  border-top-color: rgb(125, 146, 232);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  background-color: rgb(209, 213, 230);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(58, 31, 122);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(58, 31, 122);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  background-color: rgb(209, 213, 230);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(58, 31, 122);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(58, 31, 122);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(15, 30, 87);
  border-left-color: rgb(15, 30, 87);
  border-right-color: rgb(15, 30, 87);
  border-top-color: rgb(15, 30, 87);
  color: rgb(15, 30, 87);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(15, 30, 87);
  stroke: rgb(15, 30, 87);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(62, 64, 116);
  border-left-color: rgb(62, 64, 116);
  border-right-color: rgb(62, 64, 116);
  border-top-color: rgb(62, 64, 116);
  color: rgb(62, 64, 116);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(92, 61, 88);
}`,
    misc: `html[saved-theme="light"] body .metadata {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(172, 180, 210);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(58, 31, 122);
  border-left-color: rgb(58, 31, 122);
  border-right-color: rgb(58, 31, 122);
  border-top-color: rgb(58, 31, 122);
  color: rgb(58, 31, 122);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(224, 222, 237);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(184, 219, 224);
  border-bottom-color: rgba(125, 146, 232, 0.15);
  border-left-color: rgba(125, 146, 232, 0.15);
  border-right-color: rgba(125, 146, 232, 0.15);
  border-top-color: rgba(125, 146, 232, 0.15);
  color: rgb(71, 71, 71);
}`,
  },
};
