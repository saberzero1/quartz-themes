import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "omega", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --azure: rgb(0, 127, 255);
  --background-modifier-border: rgb(255, 239, 0);
  --background-modifier-border-focus: rgb(255, 239, 0);
  --background-primary: rgb(17, 17, 17);
  --background-secondary: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%);
  --bases-cards-background: rgb(17, 17, 17);
  --bases-cards-border-width: 2px;
  --bases-cards-shadow: 0 0 0 1px rgb(255, 239, 0);
  --bases-embed-border-color: rgb(255, 239, 0);
  --bases-group-heading-property-color: rgb(245, 245, 245);
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: rgb(255, 239, 0);
  --bases-table-cell-background-active: rgb(17, 17, 17);
  --bases-table-cell-background-selected: rgb(128, 0, 255);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(255, 239, 0);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-width: 2px;
  --bases-table-header-background: rgb(17, 17, 17);
  --bases-table-header-color: rgb(245, 245, 245);
  --bases-table-row-background-hover: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%);
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: rgb(17, 17, 17);
  --bold-color: rgb(100, 149, 237);
  --border-width: 2px;
  --button-radius: 4px;
  --callout-border-opacity: 1;
  --callout-border-width: 2px;
  --callout-padding: 16px 24px 0 24px;
  --callout-question: 124, 252, 0;
  --canary: rgb(255, 239, 0);
  --canvas-background: rgb(17, 17, 17);
  --canvas-card-label-color: rgb(245, 245, 245);
  --caret-color: rgb(245, 245, 245);
  --charcoal: rgb(54, 69, 79);
  --checkbox-border-color: rgb(237, 41, 57);
  --checkbox-border-color-hover: rgb(11, 218, 81);
  --checkbox-color: rgb(11, 218, 81);
  --checkbox-color-hover: rgb(255, 239, 0);
  --checkbox-marker-color: rgb(17, 17, 17);
  --checkbox-radius: 50%;
  --checklist-done-color: rgb(245, 245, 245);
  --cinnabar: rgb(228, 77, 46);
  --code-background: color-mix(in srgb, rgb(0, 53, 107) 30%, transparent);
  --code-border-color: rgb(245, 245, 245);
  --code-border-width: 2px;
  --code-comment: rgb(219, 215, 210);
  --code-function: rgb(0, 127, 255);
  --code-important: rgb(228, 77, 46);
  --code-keyword: rgb(237, 41, 57);
  --code-normal: rgb(245, 245, 245);
  --code-operator: rgb(255, 239, 0);
  --code-punctuation: rgb(237, 41, 57);
  --code-string: rgb(11, 218, 81);
  --code-value: rgb(128, 0, 255);
  --collapse-icon-color: rgb(245, 245, 245);
  --coral-pink: rgb(248, 131, 121);
  --cornflower-blue: rgb(100, 149, 237);
  --divider-color: rgb(255, 239, 0);
  --divider-width: 2px;
  --embed-block-shadow-hover: 0 0 0 1px rgb(54, 69, 79);
  --embed-border-bottom: 2px solid rgb(128, 0, 255);
  --embed-border-end: 2px solid rgb(128, 0, 255);
  --embed-border-start: 2px solid rgb(128, 0, 255);
  --embed-border-top: 2px solid rgb(128, 0, 255);
  --embed-padding: 8px 24px;
  --file-header-background: rgb(17, 17, 17);
  --file-header-background-focused: rgb(17, 17, 17);
  --file-header-border: none;
  --file-header-font-size: 1.3em;
  --file-header-font-weight: bold;
  --file-line-width: 5000px;
  --flair-color: rgb(245, 245, 245);
  --footnote-divider-color: rgb(255, 239, 0);
  --footnote-divider-width: 2px;
  --footnote-id-color: rgb(245, 245, 245);
  --footnote-id-color-no-occurrences: rgb(245, 245, 245);
  --graph-node: rgb(245, 245, 245);
  --graph-node-unresolved: rgb(245, 245, 245);
  --graph-text: rgb(245, 245, 245);
  --h1-color: rgb(255, 239, 0);
  --h2-color: rgb(255, 121, 0);
  --h3-color: rgb(128, 0, 255);
  --h4-color: rgb(244, 196, 48);
  --h5-color: rgb(248, 131, 121);
  --h6-color: rgb(219, 215, 210);
  --heading-formatting: rgb(245, 245, 245);
  --hr-color: rgb(219, 215, 210);
  --hr-thickness: 1px;
  --icon-color: rgb(245, 245, 245);
  --icon-color-focused: rgb(245, 245, 245);
  --icon-color-hover: rgb(244, 196, 48);
  --icon-opacity: 1;
  --imperial-red: rgb(237, 41, 57);
  --indentation-guide-color: rgb(128, 0, 255);
  --indentation-guide-color-active: rgb(128, 0, 255);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: rgb(255, 239, 0);
  --input-border-width: 2px;
  --input-date-separator: rgb(245, 245, 245);
  --input-placeholder-color: rgb(245, 245, 245);
  --input-radius: 4px;
  --italic-color: rgb(248, 131, 121);
  --link-color: rgb(128, 0, 255);
  --link-color-hover: rgb(255, 239, 0);
  --link-external-color: rgb(255, 111, 255);
  --link-external-color-hover: rgb(255, 239, 0);
  --link-unresolved-color: rgb(228, 77, 46);
  --link-unresolved-decoration-color: rgb(255, 121, 0);
  --list-marker-color: rgb(255, 239, 0);
  --list-marker-color-collapsed: rgb(244, 196, 48);
  --list-marker-color-hover: rgb(255, 239, 0);
  --malachite: rgb(11, 218, 81);
  --menu-background: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%);
  --menu-border-width: 2px;
  --metadata-background: rgb(0, 33, 71);
  --metadata-border-color: rgb(255, 239, 0);
  --metadata-border-radius: 4px;
  --metadata-border-width: 2px;
  --metadata-divider-color: rgb(255, 239, 0);
  --metadata-input-text-color: rgb(245, 245, 245);
  --metadata-label-text-color: rgb(245, 245, 245);
  --metadata-label-text-color-hover: rgb(17, 17, 17);
  --metadata-padding: 8px 24px;
  --metadata-property-background: rgb(0, 53, 107);
  --metadata-property-background-active: rgb(0, 53, 107);
  --metadata-property-background-hover: rgb(0, 53, 107);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(255, 239, 0);
  --metadata-property-box-shadow-hover: 0 0 0 2px #3f3f3f;
  --metadata-property-radius: 4px;
  --metadata-property-radius-focus: 4px;
  --metadata-property-radius-hover: 4px;
  --modal-background: rgb(17, 17, 17);
  --modal-border-color: rgb(255, 239, 0);
  --modal-border-width: 2px;
  --modal-radius: 4px;
  --nav-collapse-icon-color: rgb(245, 245, 245);
  --nav-collapse-icon-color-collapsed: rgb(245, 245, 245);
  --nav-heading-color: rgb(245, 245, 245);
  --nav-heading-color-collapsed: rgb(245, 245, 245);
  --nav-heading-color-collapsed-hover: rgb(245, 245, 245);
  --nav-heading-color-hover: rgb(245, 245, 245);
  --nav-indentation-guide-color: rgb(128, 0, 255);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: transparent;
  --nav-item-background-hover: transparent;
  --nav-item-background-selected: transparent;
  --nav-item-children-padding-start: 0px;
  --nav-item-color: rgb(245, 245, 245);
  --nav-item-color-active: rgb(17, 17, 17);
  --nav-item-color-hover: rgb(17, 17, 17);
  --nav-item-color-selected: rgb(17, 17, 17);
  --nav-item-weight-active: bold;
  --nav-item-weight-hover: bold;
  --nav-tag-color: rgb(245, 245, 245);
  --nav-tag-color-active: rgb(245, 245, 245);
  --nav-tag-color-hover: rgb(245, 245, 245);
  --night: rgb(17, 17, 17);
  --oxford-blue: rgb(0, 33, 71);
  --pdf-background: rgb(17, 17, 17);
  --pdf-page-background: rgb(17, 17, 17);
  --pdf-shadow: 0 0 0 1px rgb(255, 239, 0);
  --pdf-sidebar-background: rgb(17, 17, 17);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(255, 239, 0);
  --pill-border-color: rgb(255, 239, 0);
  --pill-border-width: 2px;
  --pill-color: rgb(245, 245, 245);
  --pill-color-hover: rgb(245, 245, 245);
  --pill-color-remove: rgb(245, 245, 245);
  --prompt-background: rgb(17, 17, 17);
  --prompt-border-color: rgb(255, 239, 0);
  --prompt-border-width: 2px;
  --ribbon-background: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%);
  --ribbon-background-collapsed: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%);
  --royal-purple: rgb(120, 81, 169);
  --safety-orange: rgb(255, 121, 0);
  --saffron: rgb(244, 196, 48);
  --scrollbar-active-thumb-bg: rgb(255, 239, 0);
  --scrollbar-thumb-bg: rgb(244, 196, 48);
  --search-clear-button-color: rgb(245, 245, 245);
  --search-icon-color: rgb(245, 245, 245);
  --search-result-background: rgb(17, 17, 17);
  --setting-group-heading-color: rgb(245, 245, 245);
  --setting-items-border-color: rgb(255, 239, 0);
  --shocking-pink: rgb(255, 111, 255);
  --slider-thumb-border-width: 0;
  --slider-track-background: rgb(255, 121, 0);
  --status-bar-background: rgb(120, 81, 169);
  --status-bar-border-color: rgb(244, 196, 48);
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-radius: 4px 0 0 0;
  --status-bar-text-color: rgb(17, 17, 17);
  --suggestion-background: rgb(17, 17, 17);
  --tab-background-active: transparent;
  --tab-container-background: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%);
  --tab-curve: 0;
  --tab-divider-color: transparent;
  --tab-font-weight: bold;
  --tab-outline-color: rgb(255, 239, 0);
  --tab-radius-active: 4px;
  --tab-switcher-background: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%);
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%), transparent);
  --tab-text-color: rgb(17, 17, 17);
  --tab-text-color-active: rgb(17, 17, 17);
  --tab-text-color-focused: rgb(17, 17, 17);
  --tab-text-color-focused-active: rgb(17, 17, 17);
  --tab-text-color-focused-active-current: rgb(17, 17, 17);
  --tab-text-color-focused-highlighted: rgb(17, 17, 17);
  --table-add-button-border-color: rgb(255, 239, 0);
  --table-add-button-border-width: 2px;
  --table-background: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%);
  --table-border-color: rgb(255, 239, 0);
  --table-border-width: 2px;
  --table-column-alt-background: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%);
  --table-column-first-border-width: 2px;
  --table-column-last-border-width: 2px;
  --table-drag-handle-background: rgb(255, 239, 0);
  --table-drag-handle-background-active: rgb(128, 0, 255);
  --table-drag-handle-color: rgb(245, 245, 245);
  --table-header-background: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%);
  --table-header-background-hover: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%);
  --table-header-border-color: rgb(255, 239, 0);
  --table-header-border-width: 2px;
  --table-header-color: rgb(245, 245, 245);
  --table-row-alt-background: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%);
  --table-row-alt-background-hover: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%);
  --table-row-background-hover: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%);
  --table-row-last-border-width: 2px;
  --table-selection: rgb(128, 0, 255);
  --table-selection-border-color: rgb(255, 239, 0);
  --tag-background: color-mix(in srgb, rgb(0, 127, 255) 40%, transparent);
  --tag-color: rgb(255, 239, 0);
  --tag-padding-x: 0.3em;
  --tag-padding-y: 0.1em;
  --tag-radius: 4px;
  --text-faint: rgb(245, 245, 245);
  --text-highlight-bg: rgba(255, 239, 0, 0.4);
  --text-highlight-bg-rgb: 255, 239, 0;
  --text-muted: rgb(245, 245, 245);
  --text-normal: rgb(245, 245, 245);
  --timber-wood: rgb(219, 215, 210);
  --titlebar-background: rgb(0, 53, 107);
  --titlebar-background-focused: rgb(0, 53, 107);
  --titlebar-border-color: rgb(255, 239, 0);
  --titlebar-text-color: rgb(245, 245, 245);
  --titlebar-text-color-focused: rgb(245, 245, 245);
  --toggle-radius: 4px;
  --toggle-thumb-color: rgb(255, 239, 0);
  --toggle-thumb-radius: 4px;
  --vault-profile-color: rgb(245, 245, 245);
  --vault-profile-color-hover: rgb(245, 245, 245);
  --violet: rgb(128, 0, 255);
  --white-smoke: rgb(245, 245, 245);
  --yale-blue: rgb(0, 53, 107);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: color(srgb 0 0.098452 0.198762);
  color: rgb(245, 245, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
  color: rgb(245, 245, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: color(srgb 0 0.098452 0.198762);
  color: rgb(245, 245, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 239, 0);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: color(srgb 0 0.098452 0.198762);
  border-left-color: rgb(255, 239, 0);
  color: rgb(245, 245, 245);
}

body div#quartz-root {
  background-color: rgb(17, 17, 17);
  color: rgb(245, 245, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(100, 149, 237);
  outline: rgb(100, 149, 237) none 0px;
  text-decoration: rgb(100, 149, 237);
  text-decoration-color: rgb(100, 149, 237);
}

body .page article p > em, em {
  color: rgb(248, 131, 121);
  outline: rgb(248, 131, 121) none 0px;
  text-decoration: rgb(248, 131, 121);
  text-decoration-color: rgb(248, 131, 121);
}

body .page article p > i, i {
  color: rgb(248, 131, 121);
  outline: rgb(248, 131, 121) none 0px;
  text-decoration: rgb(248, 131, 121);
  text-decoration-color: rgb(248, 131, 121);
}

body .page article p > strong, strong {
  color: rgb(100, 149, 237);
  outline: rgb(100, 149, 237) none 0px;
  text-decoration: rgb(100, 149, 237);
  text-decoration-color: rgb(100, 149, 237);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
  font-weight: 700;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body del {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: line-through rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body p {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 111, 255);
  outline: rgb(255, 111, 255) none 0px;
  text-decoration: underline rgb(255, 239, 0);
  text-decoration-color: rgb(255, 239, 0);
  transition: color 0.25s ease-out, text-decoration-color 0.25s ease-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(128, 0, 255);
  outline: rgb(128, 0, 255) none 0px;
  text-decoration: underline rgb(255, 239, 0);
  text-decoration-color: rgb(255, 239, 0);
  transition: color 0.15s ease-out, text-decoration-color 0.15s ease-out;
}

body a.internal.broken {
  color: rgb(228, 77, 46);
  outline: rgb(228, 77, 46) none 0px;
  text-decoration: underline rgb(255, 121, 0);
  text-decoration-color: rgb(255, 121, 0);
  transition: color 0.15s ease-out, text-decoration-color 0.15s ease-out;
}`,
    lists: `body dd {
  color: rgb(245, 245, 245);
}

body dt {
  color: rgb(245, 245, 245);
}

body ol > li {
  color: rgb(245, 245, 245);
}

body ol.overflow {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body ul > li {
  color: rgb(245, 245, 245);
}

body ul.overflow {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body table {
  border-bottom-color: rgb(255, 239, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(255, 239, 0);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(255, 239, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(255, 239, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(245, 245, 245);
  width: 205.938px;
}

body tbody tr:nth-child(even) {
  background-color: color(srgb 0 0.115033 0.247495 / 0.9);
}

body tbody tr:nth-child(odd) {
  background-color: color(srgb 0 0.115033 0.247495 / 0.9);
}

body td {
  border-bottom-color: rgb(255, 239, 0);
  border-left-color: rgb(245, 245, 245);
  border-left-width: 0px;
  border-right-color: rgb(255, 239, 0);
  border-top-color: rgb(255, 239, 0);
  color: rgb(245, 245, 245);
}

body th {
  border-bottom-color: rgb(255, 239, 0);
  border-left-color: rgb(245, 245, 245);
  border-left-width: 0px;
  border-right-color: rgb(255, 239, 0);
  border-top-color: rgb(245, 245, 245);
  border-top-width: 0px;
  color: rgb(245, 245, 245);
  font-weight: 400;
}

body thead {
  border-bottom-color: rgb(255, 239, 0);
  border-left-color: rgb(255, 239, 0);
  border-right-color: rgb(255, 239, 0);
  border-top-color: rgb(255, 239, 0);
}

body tr {
  background-color: color(srgb 0 0.115033 0.247495 / 0.9);
  border-bottom-color: rgb(255, 239, 0);
  border-left-color: rgb(255, 239, 0);
  border-right-color: rgb(255, 239, 0);
  border-top-color: rgb(255, 239, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0 0.207843 0.419608 / 0.3);
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-width: 2px;
  border-left-color: rgb(245, 245, 245);
  border-left-width: 2px;
  border-right-color: rgb(245, 245, 245);
  border-right-width: 2px;
  border-top-color: rgb(245, 245, 245);
  border-top-width: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0 0.207843 0.419608 / 0.3);
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-width: 2px;
  border-left-color: rgb(245, 245, 245);
  border-left-width: 2px;
  border-right-color: rgb(245, 245, 245);
  border-right-width: 2px;
  border-top-color: rgb(245, 245, 245);
  border-top-width: 2px;
  color: rgb(245, 245, 245);
}

body pre > code > [data-line] {
  border-left-color: rgb(0, 127, 255);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 127, 255);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 127, 255);
  border-left-color: rgb(0, 127, 255);
  border-right-color: rgb(0, 127, 255);
  border-top-color: rgb(0, 127, 255);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0 0.207843 0.419608 / 0.3);
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-width: 2px;
  border-left-color: rgb(245, 245, 245);
  border-left-width: 2px;
  border-right-color: rgb(245, 245, 245);
  border-right-width: 2px;
  border-top-color: rgb(245, 245, 245);
  border-top-width: 2px;
}

body pre:has(> code) {
  background-color: color(srgb 0 0.207843 0.419608 / 0.3);
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-width: 2px;
  border-left-color: rgb(245, 245, 245);
  border-left-width: 2px;
  border-right-color: rgb(245, 245, 245);
  border-right-width: 2px;
  border-top-color: rgb(245, 245, 245);
  border-top-width: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body figcaption {
  color: rgb(245, 245, 245);
}

body figure {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body img {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body video {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body .footnotes {
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .transclude {
  border-bottom-color: rgb(128, 0, 255);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(128, 0, 255);
  border-right-color: rgb(128, 0, 255);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(128, 0, 255);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgb(128, 0, 255);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(128, 0, 255);
  border-right-color: rgb(128, 0, 255);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(128, 0, 255);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(245, 245, 245);
  text-decoration: line-through rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body input[type=checkbox] {
  border-bottom-color: rgb(237, 41, 57);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(237, 41, 57);
  border-right-color: rgb(237, 41, 57);
  border-top-color: rgb(237, 41, 57);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='*'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='-'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='/'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='>'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='?'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='I'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='S'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='b'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='c'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='d'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='f'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='i'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='k'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='l'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='p'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='u'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='w'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-color: rgb(0, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 255, 255);
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgb(220, 20, 60);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 20, 60);
  border-left-width: 2px;
  border-right-color: rgb(220, 20, 60);
  border-right-width: 2px;
  border-top-color: rgb(220, 20, 60);
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgb(220, 20, 60);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 20, 60);
  border-left-width: 2px;
  border-right-color: rgb(220, 20, 60);
  border-right-width: 2px;
  border-top-color: rgb(220, 20, 60);
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgb(147, 112, 219);
  border-bottom-width: 2px;
  border-left-color: rgb(147, 112, 219);
  border-left-width: 2px;
  border-right-color: rgb(147, 112, 219);
  border-right-width: 2px;
  border-top-color: rgb(147, 112, 219);
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgb(237, 41, 57);
  border-bottom-width: 2px;
  border-left-color: rgb(237, 41, 57);
  border-left-width: 2px;
  border-right-color: rgb(237, 41, 57);
  border-right-width: 2px;
  border-top-color: rgb(237, 41, 57);
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgb(65, 105, 225);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 105, 225);
  border-left-width: 2px;
  border-right-color: rgb(65, 105, 225);
  border-right-width: 2px;
  border-top-color: rgb(65, 105, 225);
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgb(0, 127, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 127, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 127, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 127, 255);
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  --callout-color: 124, 252, 0;
  background-color: rgba(124, 252, 0, 0.1);
  border-bottom-color: rgb(124, 252, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(124, 252, 0);
  border-left-width: 2px;
  border-right-color: rgb(124, 252, 0);
  border-right-width: 2px;
  border-top-color: rgb(124, 252, 0);
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-width: 2px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 2px;
  border-right-color: rgb(158, 158, 158);
  border-right-width: 2px;
  border-top-color: rgb(158, 158, 158);
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  border-bottom-color: rgb(11, 218, 81);
  border-bottom-width: 2px;
  border-left-color: rgb(11, 218, 81);
  border-left-width: 2px;
  border-right-color: rgb(11, 218, 81);
  border-right-width: 2px;
  border-top-color: rgb(11, 218, 81);
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgb(0, 191, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 191, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 191, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 191, 255);
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgb(65, 105, 225);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 105, 225);
  border-left-width: 2px;
  border-right-color: rgb(65, 105, 225);
  border-right-width: 2px;
  border-top-color: rgb(65, 105, 225);
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgb(255, 121, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 121, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 121, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 121, 0);
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(255, 239, 0);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(255, 239, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 239, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 239, 0);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(255, 239, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 239, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 239, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 239, 0);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(255, 239, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 239, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 239, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 239, 0);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0 0.098452 0.198762);
  border-bottom-width: 2px;
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0 0.498039 1 / 0.4);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(255, 239, 0);
}

body h1 {
  color: rgb(255, 239, 0);
}

body h2 {
  color: rgb(255, 121, 0);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 239, 0);
}

body h3 {
  color: rgb(128, 0, 255);
}

body h4 {
  color: rgb(244, 196, 48);
}

body h5 {
  color: rgb(248, 131, 121);
}

body h6 {
  color: rgb(219, 215, 210);
}

body hr {
  border-bottom-color: rgb(255, 239, 0);
  border-left-color: rgb(255, 239, 0);
  border-right-color: rgb(255, 239, 0);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(0, 127, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 127, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 127, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 127, 255);
  border-top-width: 2px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(17, 17, 17);
  font-weight: 700;
  text-decoration: rgb(17, 17, 17);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(17, 17, 17);
  font-weight: 700;
  text-decoration: rgb(17, 17, 17);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-right-radius: 0px;
  color: rgb(17, 17, 17);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(244, 196, 48);
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}`,
    footer: `body footer {
  background-color: rgb(120, 81, 169);
  border-bottom-color: rgb(244, 196, 48);
  border-left-color: rgb(244, 196, 48);
  border-left-width: 2px;
  border-right-color: rgb(244, 196, 48);
  border-top-color: rgb(244, 196, 48);
  border-top-left-radius: 4px;
  border-top-width: 2px;
  color: rgb(17, 17, 17);
}

body footer ul li a {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(245, 245, 245);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(245, 245, 245);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body li.section-li > .section .meta {
  color: rgb(245, 245, 245);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
}

body ul.section-ul {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    darkmode: `body .darkmode {
  background-color: rgb(244, 196, 48);
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

body .darkmode svg {
  color: rgb(17, 17, 17);
  stroke: rgb(17, 17, 17);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .breadcrumb-element p {
  color: rgb(245, 245, 245);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .metadata {
  background-color: rgb(0, 33, 71);
  border-bottom-color: rgb(255, 239, 0);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(255, 239, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 239, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 239, 0);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  color: rgb(245, 245, 245);
  padding-left: 24px;
  padding-right: 24px;
}

body .metadata-properties {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .navigation-progress {
  background-color: rgb(120, 81, 169);
}

body .page-header h2.page-title {
  color: rgb(245, 245, 245);
}

body abbr {
  color: rgb(245, 245, 245);
  text-decoration: underline dotted rgb(245, 245, 245);
}

body details {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body input[type=text] {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body kbd {
  background-color: color(srgb 0 0.207843 0.419608 / 0.3);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body progress {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body sub {
  color: rgb(245, 245, 245);
}

body summary {
  color: rgb(245, 245, 245);
}

body sup {
  color: rgb(245, 245, 245);
}`,
  },
  light: {},
};
