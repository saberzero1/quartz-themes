import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "omega", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --azure: rgb(0, 127, 255) !important;
  --background-modifier-border: rgb(255, 239, 0) !important;
  --background-modifier-border-focus: rgb(255, 239, 0) !important;
  --background-primary: rgb(17, 17, 17) !important;
  --background-secondary: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%) !important;
  --bases-cards-background: rgb(17, 17, 17) !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(255, 239, 0) !important;
  --bases-embed-border-color: rgb(255, 239, 0) !important;
  --bases-group-heading-property-color: rgb(245, 245, 245) !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: rgb(255, 239, 0) !important;
  --bases-table-cell-background-active: rgb(17, 17, 17) !important;
  --bases-table-cell-background-selected: rgb(128, 0, 255) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(255, 239, 0) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-header-background: rgb(17, 17, 17) !important;
  --bases-table-header-color: rgb(245, 245, 245) !important;
  --bases-table-row-background-hover: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%) !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: rgb(17, 17, 17) !important;
  --bold-color: rgb(100, 149, 237) !important;
  --border-width: 2px !important;
  --button-radius: 4px !important;
  --callout-border-opacity: 1;
  --callout-border-width: 2px;
  --callout-padding: 16px 24px 0 24px;
  --callout-question: 124, 252, 0;
  --canary: rgb(255, 239, 0) !important;
  --canvas-background: rgb(17, 17, 17) !important;
  --canvas-card-label-color: rgb(245, 245, 245) !important;
  --caret-color: rgb(245, 245, 245) !important;
  --charcoal: rgb(54, 69, 79) !important;
  --checkbox-border-color: rgb(237, 41, 57) !important;
  --checkbox-border-color-hover: rgb(11, 218, 81) !important;
  --checkbox-color: rgb(11, 218, 81) !important;
  --checkbox-color-hover: rgb(255, 239, 0) !important;
  --checkbox-marker-color: rgb(17, 17, 17) !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: rgb(245, 245, 245) !important;
  --cinnabar: rgb(228, 77, 46) !important;
  --code-background: color-mix(in srgb, rgb(0, 53, 107) 30%, transparent) !important;
  --code-border-color: rgb(245, 245, 245) !important;
  --code-border-width: 2px !important;
  --code-comment: rgb(219, 215, 210) !important;
  --code-function: rgb(0, 127, 255) !important;
  --code-important: rgb(228, 77, 46) !important;
  --code-keyword: rgb(237, 41, 57) !important;
  --code-normal: rgb(245, 245, 245) !important;
  --code-operator: rgb(255, 239, 0) !important;
  --code-punctuation: rgb(237, 41, 57) !important;
  --code-string: rgb(11, 218, 81) !important;
  --code-value: rgb(128, 0, 255) !important;
  --collapse-icon-color: rgb(245, 245, 245) !important;
  --coral-pink: rgb(248, 131, 121) !important;
  --cornflower-blue: rgb(100, 149, 237) !important;
  --dark: rgb(245, 245, 245) !important;
  --darkgray: rgb(245, 245, 245) !important;
  --divider-color: rgb(255, 239, 0) !important;
  --divider-width: 2px !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(54, 69, 79) !important;
  --embed-border-bottom: 2px solid rgb(128, 0, 255) !important;
  --embed-border-end: 2px solid rgb(128, 0, 255) !important;
  --embed-border-start: 2px solid rgb(128, 0, 255) !important;
  --embed-border-top: 2px solid rgb(128, 0, 255) !important;
  --embed-padding: 8px 24px !important;
  --file-header-background: rgb(17, 17, 17) !important;
  --file-header-background-focused: rgb(17, 17, 17) !important;
  --file-header-border: none !important;
  --file-header-font-size: 1.3em !important;
  --file-header-font-weight: bold !important;
  --file-line-width: 5000px !important;
  --flair-color: rgb(245, 245, 245) !important;
  --footnote-divider-color: rgb(255, 239, 0) !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: rgb(245, 245, 245) !important;
  --footnote-id-color-no-occurrences: rgb(245, 245, 245) !important;
  --graph-node: rgb(245, 245, 245) !important;
  --graph-node-unresolved: rgb(245, 245, 245) !important;
  --graph-text: rgb(245, 245, 245) !important;
  --gray: rgb(245, 245, 245) !important;
  --h1-color: rgb(255, 239, 0) !important;
  --h2-color: rgb(255, 121, 0) !important;
  --h3-color: rgb(128, 0, 255) !important;
  --h4-color: rgb(244, 196, 48) !important;
  --h5-color: rgb(248, 131, 121) !important;
  --h6-color: rgb(219, 215, 210) !important;
  --heading-formatting: rgb(245, 245, 245) !important;
  --highlight: rgba(255, 239, 0, 0.4) !important;
  --hr-color: rgb(219, 215, 210) !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(245, 245, 245) !important;
  --icon-color-focused: rgb(245, 245, 245) !important;
  --icon-color-hover: rgb(244, 196, 48) !important;
  --icon-opacity: 1 !important;
  --imperial-red: rgb(237, 41, 57) !important;
  --indentation-guide-color: rgb(128, 0, 255) !important;
  --indentation-guide-color-active: rgb(128, 0, 255) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: rgb(255, 239, 0) !important;
  --input-border-width: 2px !important;
  --input-date-separator: rgb(245, 245, 245) !important;
  --input-placeholder-color: rgb(245, 245, 245) !important;
  --input-radius: 4px !important;
  --italic-color: rgb(248, 131, 121) !important;
  --light: rgb(17, 17, 17) !important;
  --lightgray: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%) !important;
  --link-color: rgb(128, 0, 255) !important;
  --link-color-hover: rgb(255, 239, 0) !important;
  --link-external-color: rgb(255, 111, 255) !important;
  --link-external-color-hover: rgb(255, 239, 0) !important;
  --link-unresolved-color: rgb(228, 77, 46) !important;
  --link-unresolved-decoration-color: rgb(255, 121, 0) !important;
  --list-marker-color: rgb(255, 239, 0) !important;
  --list-marker-color-collapsed: rgb(244, 196, 48) !important;
  --list-marker-color-hover: rgb(255, 239, 0) !important;
  --malachite: rgb(11, 218, 81) !important;
  --menu-background: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%) !important;
  --menu-border-width: 2px !important;
  --metadata-background: rgb(0, 33, 71) !important;
  --metadata-border-color: rgb(255, 239, 0) !important;
  --metadata-border-radius: 4px !important;
  --metadata-border-width: 2px !important;
  --metadata-divider-color: rgb(255, 239, 0) !important;
  --metadata-input-text-color: rgb(245, 245, 245) !important;
  --metadata-label-text-color: rgb(245, 245, 245) !important;
  --metadata-label-text-color-hover: rgb(17, 17, 17) !important;
  --metadata-padding: 8px 24px !important;
  --metadata-property-background: rgb(0, 53, 107) !important;
  --metadata-property-background-active: rgb(0, 53, 107) !important;
  --metadata-property-background-hover: rgb(0, 53, 107) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(255, 239, 0) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px #3f3f3f !important;
  --metadata-property-radius: 4px !important;
  --metadata-property-radius-focus: 4px !important;
  --metadata-property-radius-hover: 4px !important;
  --modal-background: rgb(17, 17, 17) !important;
  --modal-border-color: rgb(255, 239, 0) !important;
  --modal-border-width: 2px !important;
  --modal-radius: 4px !important;
  --nav-collapse-icon-color: rgb(245, 245, 245) !important;
  --nav-collapse-icon-color-collapsed: rgb(245, 245, 245) !important;
  --nav-heading-color: rgb(245, 245, 245) !important;
  --nav-heading-color-collapsed: rgb(245, 245, 245) !important;
  --nav-heading-color-collapsed-hover: rgb(245, 245, 245) !important;
  --nav-heading-color-hover: rgb(245, 245, 245) !important;
  --nav-indentation-guide-color: rgb(128, 0, 255) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-background-selected: transparent !important;
  --nav-item-children-padding-start: 0px !important;
  --nav-item-color: rgb(245, 245, 245) !important;
  --nav-item-color-active: rgb(17, 17, 17) !important;
  --nav-item-color-hover: rgb(17, 17, 17) !important;
  --nav-item-color-selected: rgb(17, 17, 17) !important;
  --nav-item-weight-active: bold !important;
  --nav-item-weight-hover: bold !important;
  --nav-tag-color: rgb(245, 245, 245) !important;
  --nav-tag-color-active: rgb(245, 245, 245) !important;
  --nav-tag-color-hover: rgb(245, 245, 245) !important;
  --night: rgb(17, 17, 17) !important;
  --oxford-blue: rgb(0, 33, 71) !important;
  --pdf-background: rgb(17, 17, 17) !important;
  --pdf-page-background: rgb(17, 17, 17) !important;
  --pdf-shadow: 0 0 0 1px rgb(255, 239, 0) !important;
  --pdf-sidebar-background: rgb(17, 17, 17) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(255, 239, 0) !important;
  --pill-border-color: rgb(255, 239, 0) !important;
  --pill-border-width: 2px !important;
  --pill-color: rgb(245, 245, 245) !important;
  --pill-color-hover: rgb(245, 245, 245) !important;
  --pill-color-remove: rgb(245, 245, 245) !important;
  --prompt-background: rgb(17, 17, 17) !important;
  --prompt-border-color: rgb(255, 239, 0) !important;
  --prompt-border-width: 2px !important;
  --ribbon-background: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%) !important;
  --ribbon-background-collapsed: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%) !important;
  --royal-purple: rgb(120, 81, 169) !important;
  --safety-orange: rgb(255, 121, 0) !important;
  --saffron: rgb(244, 196, 48) !important;
  --scrollbar-active-thumb-bg: rgb(255, 239, 0) !important;
  --scrollbar-thumb-bg: rgb(244, 196, 48) !important;
  --search-clear-button-color: rgb(245, 245, 245) !important;
  --search-icon-color: rgb(245, 245, 245) !important;
  --search-result-background: rgb(17, 17, 17) !important;
  --setting-group-heading-color: rgb(245, 245, 245) !important;
  --setting-items-border-color: rgb(255, 239, 0) !important;
  --shocking-pink: rgb(255, 111, 255) !important;
  --slider-thumb-border-width: 0 !important;
  --slider-track-background: rgb(255, 121, 0) !important;
  --status-bar-background: rgb(120, 81, 169) !important;
  --status-bar-border-color: rgb(244, 196, 48) !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: rgb(17, 17, 17) !important;
  --suggestion-background: rgb(17, 17, 17) !important;
  --tab-background-active: transparent !important;
  --tab-container-background: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%) !important;
  --tab-curve: 0 !important;
  --tab-divider-color: transparent !important;
  --tab-font-weight: bold !important;
  --tab-outline-color: rgb(255, 239, 0) !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, rgb(0, 53, 107) 90%, black 100%), transparent) !important;
  --tab-text-color: rgb(17, 17, 17) !important;
  --tab-text-color-active: rgb(17, 17, 17) !important;
  --tab-text-color-focused: rgb(17, 17, 17) !important;
  --tab-text-color-focused-active: rgb(17, 17, 17) !important;
  --tab-text-color-focused-active-current: rgb(17, 17, 17) !important;
  --tab-text-color-focused-highlighted: rgb(17, 17, 17) !important;
  --table-add-button-border-color: rgb(255, 239, 0) !important;
  --table-add-button-border-width: 2px !important;
  --table-background: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%) !important;
  --table-border-color: rgb(255, 239, 0) !important;
  --table-border-width: 2px !important;
  --table-column-alt-background: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%) !important;
  --table-column-first-border-width: 2px !important;
  --table-column-last-border-width: 2px !important;
  --table-drag-handle-background: rgb(255, 239, 0) !important;
  --table-drag-handle-background-active: rgb(128, 0, 255) !important;
  --table-drag-handle-color: rgb(245, 245, 245) !important;
  --table-header-background: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%) !important;
  --table-header-background-hover: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%) !important;
  --table-header-border-color: rgb(255, 239, 0) !important;
  --table-header-border-width: 2px !important;
  --table-header-color: rgb(245, 245, 245) !important;
  --table-row-alt-background: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%) !important;
  --table-row-alt-background-hover: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%) !important;
  --table-row-background-hover: color-mix(in srgb, rgb(0, 33, 71) 80%, black 10%) !important;
  --table-row-last-border-width: 2px !important;
  --table-selection: rgb(128, 0, 255) !important;
  --table-selection-border-color: rgb(255, 239, 0) !important;
  --tag-background: color-mix(in srgb, rgb(0, 127, 255) 40%, transparent) !important;
  --tag-color: rgb(255, 239, 0) !important;
  --tag-padding-x: 0.3em !important;
  --tag-padding-y: 0.1em !important;
  --tag-radius: 4px !important;
  --text-faint: rgb(245, 245, 245) !important;
  --text-highlight-bg: rgba(255, 239, 0, 0.4) !important;
  --text-highlight-bg-rgb: 255, 239, 0 !important;
  --text-muted: rgb(245, 245, 245) !important;
  --text-normal: rgb(245, 245, 245) !important;
  --textHighlight: rgba(255, 239, 0, 0.4) !important;
  --timber-wood: rgb(219, 215, 210) !important;
  --titlebar-background: rgb(0, 53, 107) !important;
  --titlebar-background-focused: rgb(0, 53, 107) !important;
  --titlebar-border-color: rgb(255, 239, 0) !important;
  --titlebar-text-color: rgb(245, 245, 245) !important;
  --titlebar-text-color-focused: rgb(245, 245, 245) !important;
  --toggle-radius: 4px !important;
  --toggle-thumb-color: rgb(255, 239, 0) !important;
  --toggle-thumb-radius: 4px !important;
  --vault-profile-color: rgb(245, 245, 245) !important;
  --vault-profile-color-hover: rgb(245, 245, 245) !important;
  --violet: rgb(128, 0, 255) !important;
  --white-smoke: rgb(245, 245, 245) !important;
  --yale-blue: rgb(0, 53, 107) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: color(srgb 0 0.098452 0.198762);
  color: rgb(245, 245, 245);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
  color: rgb(245, 245, 245);
}

html body .bases-table {
  border-color: rgb(255, 239, 0);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: color(srgb 0 0.115033 0.247495 / 0.9);
}

html body .bases-table thead th {
  border-color: rgb(245, 245, 245) rgb(255, 239, 0) rgb(255, 239, 0) rgb(245, 245, 245);
  color: rgb(245, 245, 245);
  font-weight: 400;
}

html body .canvas-node {
  border-color: rgb(245, 245, 245);
}

html body .canvas-node-content {
  color: rgb(245, 245, 245);
}

html body .canvas-node-file {
  color: rgb(245, 245, 245);
}

html body .canvas-node-group {
  border-color: rgb(245, 245, 245);
}

html body .canvas-sidebar {
  background-color: color(srgb 0 0.098452 0.198762);
  border-color: rgb(245, 245, 245);
}

html body .note-properties {
  background-color: rgb(0, 33, 71);
  border-color: rgb(255, 239, 0);
  border-radius: 4px;
}

html body .note-properties-key {
  color: rgb(245, 245, 245);
}

html body .note-properties-row {
  border-color: rgb(245, 245, 245);
}

html body .note-properties-tags {
  background-color: color(srgb 0 0.498039 1 / 0.4);
  border-radius: 4px;
  color: rgb(255, 239, 0);
}

html body .note-properties-value {
  color: rgb(245, 245, 245);
}

html body .page > div#quartz-body div.sidebar {
  background-color: color(srgb 0 0.098452 0.198762);
  color: rgb(245, 245, 245);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 239, 0);
  border-right-width: 2px;
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: color(srgb 0 0.098452 0.198762);
  border-left-color: rgb(255, 239, 0);
  color: rgb(245, 245, 245);
}

html body div#quartz-root {
  background-color: rgb(17, 17, 17);
  color: rgb(245, 245, 245);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(100, 149, 237);
  outline: rgb(100, 149, 237) none 0px;
  text-decoration-color: rgb(100, 149, 237);
}

html body .page article p > em, html em {
  color: rgb(248, 131, 121);
  outline: rgb(248, 131, 121) none 0px;
  text-decoration-color: rgb(248, 131, 121);
}

html body .page article p > i, html i {
  color: rgb(248, 131, 121);
  outline: rgb(248, 131, 121) none 0px;
  text-decoration-color: rgb(248, 131, 121);
}

html body .page article p > strong, html strong {
  color: rgb(100, 149, 237);
  outline: rgb(100, 149, 237) none 0px;
  text-decoration-color: rgb(100, 149, 237);
}

html body .text-highlight {
  background-color: rgba(255, 239, 0, 0.4);
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html body del {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html body h1.article-title {
  color: rgb(245, 245, 245);
  font-size: 19.5px;
  font-weight: 700;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(237, 41, 57);
  border-radius: 50%;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(11, 218, 81);
  border-color: rgb(11, 218, 81);
}

html body p {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 111, 255);
  outline: rgb(255, 111, 255) none 0px;
  text-decoration: underline rgb(255, 239, 0);
  text-decoration-color: rgb(255, 239, 0);
  transition: color 0.25s ease-out, text-decoration-color 0.25s ease-out;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(128, 0, 255);
  outline: rgb(128, 0, 255) none 0px;
  text-decoration: underline rgb(255, 239, 0);
  text-decoration-color: rgb(255, 239, 0);
  transition: color 0.15s ease-out, text-decoration-color 0.15s ease-out;
}

html body a.internal.broken {
  color: rgb(228, 77, 46);
  outline: rgb(228, 77, 46) none 0px;
  text-decoration: underline rgb(255, 121, 0);
  text-decoration-color: rgb(255, 121, 0);
  transition: color 0.15s ease-out, text-decoration-color 0.15s ease-out;
}`,
    lists: `html body dd {
  color: rgb(245, 245, 245);
}

html body dt {
  color: rgb(245, 245, 245);
}

html body ol > li {
  color: rgb(245, 245, 245);
}

html body ol.overflow {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html body ul > li {
  color: rgb(245, 245, 245);
}

html body ul.overflow {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(245, 245, 245);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html body table {
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

html body tbody tr:nth-child(even) {
  background-color: color(srgb 0 0.115033 0.247495 / 0.9);
}

html body tbody tr:nth-child(odd) {
  background-color: color(srgb 0 0.115033 0.247495 / 0.9);
}

html body td {
  border-bottom-color: rgb(255, 239, 0);
  border-left-color: rgb(245, 245, 245);
  border-left-width: 0px;
  border-right-color: rgb(255, 239, 0);
  border-top-color: rgb(255, 239, 0);
  color: rgb(245, 245, 245);
}

html body th {
  border-bottom-color: rgb(255, 239, 0);
  border-left-color: rgb(245, 245, 245);
  border-left-width: 0px;
  border-right-color: rgb(255, 239, 0);
  border-top-color: rgb(245, 245, 245);
  border-top-width: 0px;
  color: rgb(245, 245, 245);
  font-weight: 400;
}

html body thead {
  border-bottom-color: rgb(255, 239, 0);
  border-left-color: rgb(255, 239, 0);
  border-right-color: rgb(255, 239, 0);
  border-top-color: rgb(255, 239, 0);
}

html body tr {
  background-color: color(srgb 0 0.115033 0.247495 / 0.9);
  border-bottom-color: rgb(255, 239, 0);
  border-left-color: rgb(255, 239, 0);
  border-right-color: rgb(255, 239, 0);
  border-top-color: rgb(255, 239, 0);
}`,
    code: `html body code {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html body figure[data-rehype-pretty-code-figure] {
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

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html body pre > code > [data-line] {
  border-left-color: rgb(0, 127, 255);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 127, 255);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 127, 255);
  border-left-color: rgb(0, 127, 255);
  border-right-color: rgb(0, 127, 255);
  border-top-color: rgb(0, 127, 255);
}

html body pre > code, html pre:has(> code) {
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

html body pre:has(> code) {
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
    images: `html body audio {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html body figcaption {
  color: rgb(245, 245, 245);
}

html body figure {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html body img {
  border-bottom-color: rgb(255, 239, 0);
  border-left-color: rgb(255, 239, 0);
  border-right-color: rgb(255, 239, 0);
  border-top-color: rgb(255, 239, 0);
}

html body video {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html body .footnotes {
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html body .transclude {
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

html body .transclude-inner {
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-style: solid;
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-right-style: solid;
  border-top-color: rgb(245, 245, 245);
  border-top-style: solid;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(237, 41, 57);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(237, 41, 57);
  border-right-color: rgb(237, 41, 57);
  border-top-color: rgb(237, 41, 57);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgb(0, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 255, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(220, 20, 60);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 20, 60);
  border-left-width: 2px;
  border-right-color: rgb(220, 20, 60);
  border-right-width: 2px;
  border-top-color: rgb(220, 20, 60);
  border-top-width: 2px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(220, 20, 60);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 20, 60);
  border-left-width: 2px;
  border-right-color: rgb(220, 20, 60);
  border-right-width: 2px;
  border-top-color: rgb(220, 20, 60);
  border-top-width: 2px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-color: rgb(147, 112, 219);
  border-bottom-width: 2px;
  border-left-color: rgb(147, 112, 219);
  border-left-width: 2px;
  border-right-color: rgb(147, 112, 219);
  border-right-width: 2px;
  border-top-color: rgb(147, 112, 219);
  border-top-width: 2px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(237, 41, 57);
  border-bottom-width: 2px;
  border-left-color: rgb(237, 41, 57);
  border-left-width: 2px;
  border-right-color: rgb(237, 41, 57);
  border-right-width: 2px;
  border-top-color: rgb(237, 41, 57);
  border-top-width: 2px;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(65, 105, 225);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 105, 225);
  border-left-width: 2px;
  border-right-color: rgb(65, 105, 225);
  border-right-width: 2px;
  border-top-color: rgb(65, 105, 225);
  border-top-width: 2px;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(0, 127, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 127, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 127, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 127, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="question"] {
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

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-width: 2px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 2px;
  border-right-color: rgb(158, 158, 158);
  border-right-width: 2px;
  border-top-color: rgb(158, 158, 158);
  border-top-width: 2px;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-color: rgb(11, 218, 81);
  border-bottom-width: 2px;
  border-left-color: rgb(11, 218, 81);
  border-left-width: 2px;
  border-right-color: rgb(11, 218, 81);
  border-right-width: 2px;
  border-top-color: rgb(11, 218, 81);
  border-top-width: 2px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgb(0, 191, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 191, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 191, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 191, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(65, 105, 225);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 105, 225);
  border-left-width: 2px;
  border-right-color: rgb(65, 105, 225);
  border-right-width: 2px;
  border-top-color: rgb(65, 105, 225);
  border-top-width: 2px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-color: rgb(255, 121, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 121, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 121, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 121, 0);
  border-top-width: 2px;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
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

html body .search > .search-container > .search-space {
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

html body .search > .search-container > .search-space > * {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 245, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(245, 245, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(255, 239, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 239, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 239, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 239, 0);
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0 0.098452 0.198762);
  border-bottom-width: 2px;
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0 0.498039 1 / 0.4);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body a.internal.tag-link::before {
  color: rgb(255, 239, 0);
}

html body h1 {
  color: rgb(255, 239, 0);
}

html body h2 {
  color: rgb(255, 121, 0);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 239, 0);
}

html body h3 {
  color: rgb(128, 0, 255);
}

html body h4 {
  color: rgb(244, 196, 48);
}

html body h5 {
  color: rgb(248, 131, 121);
}

html body h6 {
  color: rgb(219, 215, 210);
}

html body hr {
  border-bottom-color: rgb(255, 239, 0);
  border-left-color: rgb(255, 239, 0);
  border-right-color: rgb(255, 239, 0);
  border-right-width: 2px;
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
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

html body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(17, 17, 17);
  font-weight: 700;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(17, 17, 17);
  font-weight: 700;
}

html body .explorer .folder-outer > ul {
  border-left-color: rgb(128, 0, 255);
  border-left-width: 2px;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(245, 245, 245);
}

html body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(244, 196, 48);
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}`,
    footer: `html body footer {
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

html body footer ul li a {
  color: rgb(17, 17, 17);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(245, 245, 245);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(245, 245, 245);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(245, 245, 245);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html body li.section-li > .section .meta {
  color: rgb(245, 245, 245);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(245, 245, 245);
}

html body ul.section-ul {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    darkmode: `html body .darkmode {
  background-color: rgb(244, 196, 48);
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

html body .darkmode svg {
  color: rgb(17, 17, 17);
  stroke: rgb(17, 17, 17);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html body .breadcrumb-element p {
  color: rgb(245, 245, 245);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html body .metadata {
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

html body .metadata-properties {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html body .navigation-progress {
  background-color: rgb(120, 81, 169);
}

html body .page-header h2.page-title {
  color: rgb(245, 245, 245);
}

html body abbr {
  color: rgb(245, 245, 245);
}

html body details {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html body input[type=text] {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html body kbd {
  background-color: color(srgb 0 0.207843 0.419608 / 0.3);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html body progress {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html body sub {
  color: rgb(245, 245, 245);
}

html body summary {
  color: rgb(245, 245, 245);
}

html body sup {
  color: rgb(245, 245, 245);
}

html body ul.tags > li {
  background-color: color(srgb 0 0.498039 1 / 0.4);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(255, 239, 0);
}`,
  },
  light: {},
};
