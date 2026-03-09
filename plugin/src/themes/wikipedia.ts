import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wikipedia",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["archivo", "linux-libertine"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 215;
  --accent-l: 50%;
  --accent-s: 79%;
  --background-modifier-active-hover: rgba(27, 111, 228, 0.1);
  --background-modifier-border: #dae1ea31;
  --background-modifier-border-focus: rgb(50, 52, 60);
  --background-modifier-border-hover: #313539;
  --background-modifier-error: rgb(232, 41, 41);
  --background-modifier-error-hover: rgb(232, 41, 41);
  --background-modifier-error-rgb: 232, 51,51;
  --background-modifier-form-field: #2f3135;
  --background-modifier-form-field-hover: #2f3135;
  --background-modifier-success: rgb(82, 163, 0);
  --background-modifier-success-rgb: 97, 194, 0;
  --background-primary: #1e1f21;
  --background-primary-alt: #242629;
  --background-secondary: #27282b;
  --background-secondary-alt: #242629;
  --bases-cards-background: #1e1f21;
  --bases-cards-cover-background: #242629;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #dae1ea31;
  --bases-cards-shadow-hover: 0 0 0 1px #313539;
  --bases-embed-border-color: #dae1ea31;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #d0d4d9;
  --bases-table-border-color: #dae1ea31;
  --bases-table-cell-background-active: #1e1f21;
  --bases-table-cell-background-disabled: #242629;
  --bases-table-cell-background-selected: rgba(27, 111, 228, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(50, 52, 60);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(27, 111, 228);
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #242629;
  --bases-table-header-background: #1e1f21;
  --bases-table-header-color: #d0d4d9;
  --bases-table-summary-background: #1e1f21;
  --blockquote-border-color: rgb(27, 111, 228);
  --blur-background: color-mix(in srgb, #35383d 65%, transparent) linear-gradient(#35383d, color-mix(in srgb, #35383d 65%, transparent));
  --button-radius: 0px;
  --callout-bug: 232, 51,51;
  --callout-default: 0, 105, 224;
  --callout-error: 232, 51,51;
  --callout-example: 81, 0, 194;
  --callout-fail: 232, 51,51;
  --callout-important: 0, 194, 97;
  --callout-info: 0, 105, 224;
  --callout-question: 230, 111, 0;
  --callout-quote: 110, 110, 110;
  --callout-radius: 0px;
  --callout-success: 97, 194, 0;
  --callout-summary: 0, 194, 97;
  --callout-tip: 0, 194, 97;
  --callout-todo: 0, 105, 224;
  --callout-warning: 230, 111, 0;
  --canvas-background: #1e1f21;
  --canvas-card-label-color: rgb(142, 148, 157);
  --canvas-color-1: 232, 51,51;
  --canvas-color-2: 230, 111, 0;
  --canvas-color-3: 204, 204, 0;
  --canvas-color-4: 97, 194, 0;
  --canvas-color-5: 0, 194, 97;
  --canvas-color-6: 81, 0, 194;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #35383d;
  --caret-color: #d8dce3;
  --checkbox-border-color: rgb(142, 148, 157);
  --checkbox-border-color-hover: #d0d4d9;
  --checkbox-color: rgb(27, 111, 228);
  --checkbox-color-hover: rgb(45, 122, 230);
  --checkbox-marker-color: #1e1f21;
  --checkbox-radius: 0px;
  --checklist-done-color: #d0d4d9;
  --clickable-icon-radius: 0px;
  --code-background: #242629;
  --code-border-color: #dae1ea31;
  --code-comment: rgb(142, 148, 157);
  --code-function: rgb(163, 163, 0);
  --code-important: rgb(230, 111, 0);
  --code-keyword: rgb(194, 0, 81);
  --code-normal: #d8dce3;
  --code-operator: rgb(232, 41, 41);
  --code-property: rgb(0, 163, 81);
  --code-punctuation: #d0d4d9;
  --code-radius: 0px;
  --code-string: rgb(82, 163, 0);
  --code-tag: rgb(232, 41, 41);
  --code-value: rgb(140, 63, 247);
  --collapse-icon-color: rgb(142, 148, 157);
  --collapse-icon-color-collapsed: rgb(45, 122, 230);
  --color-accent: rgb(27, 111, 228);
  --color-accent-1: rgb(45, 122, 230);
  --color-accent-2: rgb(25, 108, 210);
  --color-accent-3: rgba(27, 144, 228, 0.2);
  --color-accent-hsl: 215, 79%, 50%;
  --color-base-00: #1e1f21;
  --color-base-10: #242629;
  --color-base-100: #d8dce3;
  --color-base-20: #27282b;
  --color-base-25: #2f3135;
  --color-base-30: #35383d;
  --color-base-35: #313539;
  --color-base-40: rgb(50, 52, 60);
  --color-base-50: rgb(142, 148, 157);
  --color-base-60: rgb(179, 181, 193);
  --color-base-70: #d0d4d9;
  --color-blue: rgb(0, 105, 224);
  --color-blue-rgb: 0, 105, 224;
  --color-cyan: rgb(0, 163, 81);
  --color-cyan-rgb: 0, 194, 97;
  --color-green: rgb(82, 163, 0);
  --color-green-rgb: 97, 194, 0;
  --color-orange: rgb(230, 111, 0);
  --color-orange-rgb: 230, 111, 0;
  --color-pink: rgb(194, 0, 81);
  --color-pink-rgb: 194, 0, 81;
  --color-purple: rgb(140, 63, 247);
  --color-purple-rgb: 81, 0, 194;
  --color-red: rgb(232, 41, 41);
  --color-red-rgb: 232, 51,51;
  --color-yellow: rgb(163, 163, 0);
  --color-yellow-rgb: 204, 204, 0;
  --divider-color: #dae1ea31;
  --divider-color-hover: rgb(27, 111, 228);
  --dropdown-background: #35383d;
  --dropdown-background-hover: #313539;
  --embed-block-shadow-hover: 0 0 0 1px #dae1ea31, inset 0 0 0 1px #dae1ea31;
  --embed-border-left: none;
  --embed-border-start: 2px solid rgb(27, 111, 228);
  --embed-padding: 0px;
  --file-header-background: #1e1f21;
  --file-header-background-focused: #1e1f21;
  --file-header-font: '??', '??', '??', Arial, 'Archivo', sans-serif;
  --file-line-width: 100%;
  --flair-background: #35383d;
  --flair-color: #d8dce3;
  --font-default: Arial, 'Archivo', sans-serif;
  --font-interface: '??', '??', '??', Arial, 'Archivo', sans-serif;
  --font-mermaid: '??', '??', Arial, 'Archivo', sans-serif;
  --font-text: '??', '??', Arial, 'Archivo', sans-serif;
  --footnote-divider-color: #dae1ea31;
  --footnote-id-color: #d0d4d9;
  --footnote-id-color-no-occurrences: rgb(142, 148, 157);
  --footnote-radius: 0px;
  --graph-line: #313539;
  --graph-node: #d0d4d9;
  --graph-node-attachment: rgb(163, 163, 0);
  --graph-node-focused: rgb(45, 122, 230);
  --graph-node-tag: rgb(82, 163, 0);
  --graph-node-unresolved: rgb(142, 148, 157);
  --graph-text: #d8dce3;
  --h1-font: 'Linux Libertine','Georgia','Times',serif;
  --h1-size: 1.7em;
  --h1-weight: 500;
  --h2-size: 1.25em;
  --h2-weight: bold;
  --h3-size: 1.17em;
  --h3-weight: bold;
  --h4-size: 1.12em;
  --h4-weight: bold;
  --h5-size: 1em;
  --h5-weight: bold;
  --h6-background: rgba(117, 147, 189, 0.15);
  --h6-size: 0.99em;
  --h6-weight: bold;
  --heading-formatting: rgb(142, 148, 157);
  --hr-color: #dae1ea31;
  --icon-color: #d0d4d9;
  --icon-color-active: rgb(45, 122, 230);
  --icon-color-focused: #d8dce3;
  --icon-color-hover: #d0d4d9;
  --icon-l: 16.5px;
  --icon-size: 16px;
  --image-width: 25%;
  --img-max-width: 55%;
  --indentation-guide-width: 0px;
  --infobox-margin: 1em 0px 1em 1em;
  --infobox-margin-left: 1em 1em 1em 0px;
  --infobox-position: right;
  --infobox-width: 25%;
  --inline-title-font: 'Linux Libertine','Georgia','Times',serif;
  --inline-title-size: 1.7em;
  --inline-title-weight: 500;
  --input-date-separator: rgb(142, 148, 157);
  --input-placeholder-color: rgb(142, 148, 157);
  --input-radius: 0px;
  --interactive-accent: rgb(27, 111, 228);
  --interactive-accent-hover: rgb(45, 122, 230);
  --interactive-accent-hsl: 215, 79%, 50%;
  --interactive-hover: #313539;
  --interactive-normal: #35383d;
  --link-color: rgb(95, 142, 236);
  --link-color-hover: rgb(25, 108, 210);
  --link-decoration: none;
  --link-external-color: rgb(118, 128, 239);
  --link-external-color-hover: rgb(40, 88, 230);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(95, 166, 236);
  --link-unresolved-decoration-color: rgba(27, 111, 228, 0.3);
  --link-unresolved-opacity: 0.85;
  --list-bullet-size: 0.35em;
  --list-marker-color: #d8dce3;
  --list-marker-color-collapsed: rgb(45, 122, 230);
  --list-marker-color-hover: #d0d4d9;
  --menu-background: #27282b;
  --menu-border-color: #313539;
  --menu-radius: 0px;
  --metadata-border-color: #dae1ea31;
  --metadata-divider-color: #dae1ea31;
  --metadata-input-font: '??', '??', '??', Arial, 'Archivo', sans-serif;
  --metadata-input-text-color: #d8dce3;
  --metadata-label-font: '??', '??', '??', Arial, 'Archivo', sans-serif;
  --metadata-label-text-color: #d0d4d9;
  --metadata-label-text-color-hover: #d0d4d9;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(50, 52, 60);
  --metadata-property-box-shadow-hover: 0 0 0 1px #313539;
  --modal-background: #1e1f21;
  --modal-border-color: rgb(50, 52, 60);
  --modal-radius: 0px;
  --nav-collapse-icon-color: #d0d4d9;
  --nav-collapse-icon-color-collapsed: #d0d4d9;
  --nav-heading-color: #d8dce3;
  --nav-heading-color-collapsed: rgb(142, 148, 157);
  --nav-heading-color-collapsed-hover: #d0d4d9;
  --nav-heading-color-hover: #d8dce3;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-selected: rgba(27, 111, 228, 0.15);
  --nav-item-children-padding-left: 0px;
  --nav-item-color: #d0d4d9;
  --nav-item-color-active: #d8dce3;
  --nav-item-color-highlighted: rgb(45, 122, 230);
  --nav-item-color-hover: #d8dce3;
  --nav-item-color-selected: #d8dce3;
  --nav-item-radius: 0px;
  --nav-tag-color: rgb(142, 148, 157);
  --nav-tag-color-active: #d0d4d9;
  --nav-tag-color-hover: #d0d4d9;
  --nav-tag-radius: 0px;
  --pdf-background: #1e1f21;
  --pdf-page-background: #1e1f21;
  --pdf-shadow: 0 0 0 1px #dae1ea31;
  --pdf-sidebar-background: #1e1f21;
  --pdf-thumbnail-shadow: 0 0 0 1px #dae1ea31;
  --pill-border-color: #dae1ea31;
  --pill-border-color-hover: #313539;
  --pill-color: #d0d4d9;
  --pill-color-hover: #d8dce3;
  --pill-color-remove: rgb(142, 148, 157);
  --pill-color-remove-hover: rgb(45, 122, 230);
  --prompt-background: #1e1f21;
  --prompt-border-color: rgb(50, 52, 60);
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --radius-xl: 0px;
  --raised-background: color-mix(in srgb, #35383d 65%, transparent) linear-gradient(#35383d, color-mix(in srgb, #35383d 65%, transparent));
  --ribbon-background: #1e1f21;
  --ribbon-background-collapsed: #1e1f21;
  --ribbon-width: 35px;
  --scrollbar-radius: 0px;
  --scrollbar-thumb-bg: transparent;
  --search-clear-button-color: #d0d4d9;
  --search-icon-color: #d0d4d9;
  --search-result-background: #1e1f21;
  --setting-group-heading-color: #d8dce3;
  --setting-items-background: #242629;
  --setting-items-border-color: #dae1ea31;
  --setting-items-radius: 0px;
  --slider-thumb-border-color: #313539;
  --slider-track-background: #dae1ea31;
  --status-bar-background: #27282b;
  --status-bar-border-color: #dae1ea31;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #d0d4d9;
  --suggestion-background: #1e1f21;
  --sync-avatar-color-1: rgb(232, 41, 41);
  --sync-avatar-color-2: rgb(230, 111, 0);
  --sync-avatar-color-3: rgb(163, 163, 0);
  --sync-avatar-color-4: rgb(82, 163, 0);
  --sync-avatar-color-5: rgb(0, 163, 81);
  --sync-avatar-color-6: rgb(0, 105, 224);
  --sync-avatar-color-7: rgb(140, 63, 247);
  --sync-avatar-color-8: rgb(194, 0, 81);
  --tab-background-active: #1e1f21;
  --tab-container-background: #27282b;
  --tab-curve: 0px;
  --tab-divider-color: rgb(27, 144, 228);
  --tab-gradient: linear-gradient(to top,rgb(25, 108, 210) 0px,  rgba(27, 144, 228, 0.2) 0px, #1e1f21 100%);
  --tab-outline-color: rgb(27, 144, 228);
  --tab-radius: 0px;
  --tab-radius-active: 0px 0px 0 0;
  --tab-switcher-background: #27282b;
  --tab-switcher-menubar-background: linear-gradient(to top, #27282b, transparent);
  --tab-switcher-preview-radius: 0px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(27, 111, 228);
  --tab-text-color: rgb(142, 148, 157);
  --tab-text-color-active: #d0d4d9;
  --tab-text-color-focused: #d0d4d9;
  --tab-text-color-focused-active: #d0d4d9;
  --tab-text-color-focused-active-current: #d8dce3;
  --tab-text-color-focused-highlighted: rgb(45, 122, 230);
  --table-add-button-border-color: #dae1ea31;
  --table-add-button-border-width: 0.06em;
  --table-border-color: #dae1ea31;
  --table-border-width: 0.06em;
  --table-column-first-border-width: 0.06em;
  --table-column-last-border-width: 0.06em;
  --table-drag-handle-background-active: rgb(27, 111, 228);
  --table-drag-handle-color: rgb(142, 148, 157);
  --table-header-background: rgba(255, 255, 255, 0.067);
  --table-header-background-hover: rgba(255, 255, 255, 0.067);
  --table-header-border-color: #dae1ea31;
  --table-header-border-width: 0.06em;
  --table-header-color: #d8dce3;
  --table-header-size: 0.9em;
  --table-row-last-border-width: 0.06em;
  --table-selection: rgba(27, 111, 228, 0.1);
  --table-selection-border-color: rgb(27, 111, 228);
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: rgba(27, 111, 228, 0.15);
  --tag-border-color-hover: rgba(27, 111, 228, 0.15);
  --tag-color: rgb(95, 142, 236);
  --tag-color-hover: rgb(25, 108, 210);
  --tag-decoration-hover: underline;
  --tag-padding-x: 0px;
  --tag-padding-y: 0px;
  --tag-radius: 0px;
  --text-accent: rgb(45, 122, 230);
  --text-accent-hover: rgb(25, 108, 210);
  --text-error: rgb(232, 41, 41);
  --text-faint: rgb(142, 148, 157);
  --text-muted: #d0d4d9;
  --text-normal: #d8dce3;
  --text-selection: rgba(27, 111, 228, 0.33);
  --text-success: rgb(82, 163, 0);
  --text-warning: rgb(230, 111, 0);
  --titlebar-background: #27282b;
  --titlebar-background-focused: #242629;
  --titlebar-border-color: #dae1ea31;
  --titlebar-text-color: #d0d4d9;
  --titlebar-text-color-focused: #d8dce3;
  --vault-name-font-size: 1.4em;
  --vault-name-font-weight: 500;
  --vault-profile-color: #d8dce3;
  --vault-profile-color-hover: #d8dce3;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(39, 40, 43);
  color: rgb(216, 220, 227);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(30, 31, 33);
  color: rgb(216, 220, 227);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(39, 40, 43);
  color: rgb(216, 220, 227);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(218, 225, 234, 0.192);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(39, 40, 43);
  border-left-color: rgba(218, 225, 234, 0.192);
  color: rgb(216, 220, 227);
}

body div#quartz-root {
  background-color: rgb(30, 31, 33);
  color: rgb(216, 220, 227);
}`,
    typography: `body .page article p > b, b {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body .page article p > em, em {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body .page article p > i, i {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body .page article p > strong, strong {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body .text-highlight {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body del {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration: line-through rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body p {
  color: rgb(208, 212, 217);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(208, 212, 217) none 0px;
  text-decoration: rgb(208, 212, 217);
  text-decoration-color: rgb(208, 212, 217);
}`,
    links: `body a.external, footer a {
  color: rgb(118, 128, 239);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(118, 128, 239) none 0px;
  text-decoration: rgb(118, 128, 239);
  text-decoration-color: rgb(118, 128, 239);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(95, 142, 236);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(95, 142, 236) none 0px;
  text-decoration: rgb(95, 142, 236);
  text-decoration-color: rgb(95, 142, 236);
}

body a.internal.broken {
  color: rgb(95, 166, 236);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(95, 166, 236) none 0px;
  text-decoration: rgba(27, 111, 228, 0.3);
  text-decoration-color: rgba(27, 111, 228, 0.3);
}`,
    lists: `body dd {
  color: rgb(216, 220, 227);
}

body dt {
  color: rgb(216, 220, 227);
}

body ol > li {
  color: rgb(216, 220, 227);
}

body ol.overflow {
  background-color: rgb(30, 31, 33);
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

body ul > li {
  color: rgb(216, 220, 227);
}

body ul.overflow {
  background-color: rgb(30, 31, 33);
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(142, 148, 157);
  text-decoration: rgb(142, 148, 157);
}

body blockquote {
  font-family: "??", "??", Arial, Archivo, sans-serif;
  font-style: italic;
}`,
    tables: `body .spacer {
  background-color: rgb(30, 31, 33);
}

body .table-container {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

body table {
  background-color: rgb(36, 38, 41);
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  width: 204.531px;
}

body td {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  color: rgb(216, 220, 227);
}

body th {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  color: rgb(216, 220, 227);
  padding-bottom: 11.52px;
  padding-left: 14.4px;
  padding-right: 14.4px;
  padding-top: 11.52px;
  text-align: center;
}

body tr {
  background-color: rgba(255, 255, 255, 0.067);
}`,
    code: `body code {
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(216, 220, 227);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
}

body pre > code > [data-line] {
  border-left-color: rgb(163, 163, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(163, 163, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(163, 163, 0);
  border-left-color: rgb(163, 163, 0);
  border-right-color: rgb(163, 163, 0);
  border-top-color: rgb(163, 163, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

body figcaption {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body figure {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

body img {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

body video {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    embeds: `body .file-embed {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(216, 220, 227);
  color: rgb(216, 220, 227);
}

body .transclude {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(27, 111, 228);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

body .transclude-inner {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(27, 111, 228);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(208, 212, 217);
  text-decoration: line-through rgb(208, 212, 217);
  text-decoration-color: rgb(208, 212, 217);
}

body input[type=checkbox] {
  border-bottom-color: rgb(142, 148, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(142, 148, 157);
  border-right-color: rgb(142, 148, 157);
  border-top-color: rgb(142, 148, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='*'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='-'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='/'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='>'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='?'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='I'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='S'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='b'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='c'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='d'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='f'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='i'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='k'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='l'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='p'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='u'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body li.task-list-item[data-task='w'] {
  color: rgb(216, 220, 227);
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 194, 97;
  background-color: rgba(0, 194, 97, 0.1);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 81, 0, 194;
  background-color: rgba(81, 0, 194, 0.1);
  border-bottom-color: rgba(81, 0, 194, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(81, 0, 194, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(81, 0, 194, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(81, 0, 194, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 0, 105, 224;
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-left-width: 1px;
  border-right-color: rgba(218, 225, 234, 0.192);
  border-right-width: 1px;
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 0, 105, 224;
  background-color: rgba(0, 105, 224, 0.1);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 230, 111, 0;
  background-color: rgba(230, 111, 0, 0.1);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(110, 110, 110, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(110, 110, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(110, 110, 110, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 97, 194, 0;
  background-color: rgba(97, 194, 0, 0.1);
  border-bottom-color: rgba(97, 194, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 194, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(97, 194, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(97, 194, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 0, 194, 97;
  background-color: rgba(0, 194, 97, 0.1);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 0, 105, 224;
  background-color: rgba(0, 105, 224, 0.1);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 230, 111, 0;
  background-color: rgba(230, 111, 0, 0.1);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(47, 49, 53);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(30, 31, 33);
  border-bottom-color: rgb(50, 52, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 52, 60);
  border-right-color: rgb(50, 52, 60);
  border-top-color: rgb(50, 52, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 220, 227);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(216, 220, 227);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(216, 220, 227);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(50, 52, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 52, 60);
  border-right-color: rgb(50, 52, 60);
  border-top-color: rgb(50, 52, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(39, 40, 43);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(27, 111, 228, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(27, 111, 228, 0.15);
  border-right-color: rgba(27, 111, 228, 0.15);
  border-top-color: rgba(27, 111, 228, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(95, 142, 236);
}

body h1 {
  color: rgb(216, 220, 227);
  font-family: "Linux Libertine", Georgia, Times, serif;
}

body h2 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(216, 220, 227);
  font-family: "Linux Libertine", Georgia, Times, serif;
}

body h3 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body h4 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body h5 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body h6 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body hr {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-right-width: 0px;
  border-top-color: rgba(218, 225, 234, 0.192);
}`,
    scrollbars: `body .callout {
  --callout-color: 0, 105, 224;
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 3.2px;
}

body ::-webkit-scrollbar {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(208, 212, 217);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  text-decoration: rgb(208, 212, 217);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(208, 212, 217);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  text-decoration: rgb(208, 212, 217);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(208, 212, 217);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  text-decoration: rgb(208, 212, 217);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(208, 212, 217);
}`,
    footer: `body footer {
  background-color: rgb(39, 40, 43);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  color: rgb(208, 212, 217);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body footer ul li a {
  color: rgb(208, 212, 217);
  text-decoration: rgb(208, 212, 217);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  color: rgb(216, 220, 227);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(208, 212, 217);
  text-decoration: rgb(208, 212, 217);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 142, 236);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

body li.section-li > .section .meta {
  color: rgb(95, 142, 236);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(208, 212, 217);
  text-decoration: rgb(208, 212, 217);
}

body ul.section-ul {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(208, 212, 217);
}

body .darkmode svg {
  color: rgb(208, 212, 217);
  stroke: rgb(208, 212, 217);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(208, 212, 217);
}

body .breadcrumb-element p {
  color: rgb(142, 148, 157);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  color: rgb(216, 220, 227);
}

body .metadata {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  color: rgb(208, 212, 217);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(208, 212, 217);
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  color: rgb(208, 212, 217);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .navigation-progress {
  background-color: rgb(39, 40, 43);
}

body .page-header h2.page-title {
  color: rgb(216, 220, 227);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body abbr {
  color: rgb(216, 220, 227);
  text-decoration: underline dotted rgb(216, 220, 227);
}

body details {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

body input[type=text] {
  border-bottom-color: rgb(208, 212, 217);
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  color: rgb(208, 212, 217);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body kbd {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
}

body progress {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

body sub {
  color: rgb(216, 220, 227);
}

body summary {
  color: rgb(216, 220, 227);
}

body sup {
  color: rgb(216, 220, 227);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 215;
  --accent-l: 50%;
  --accent-s: 79%;
  --background-modifier-active-hover: rgba(27, 111, 228, 0.1);
  --background-modifier-border: #a2a9b1;
  --background-modifier-error: rgb(232, 41, 41);
  --background-modifier-error-hover: rgb(232, 41, 41);
  --background-modifier-error-rgb: 232, 51,51;
  --background-modifier-success: rgb(82, 163, 0);
  --background-modifier-success-rgb: 97, 194, 0;
  --background-secondary-alt: #f8f9fa;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #a2a9b1;
  --bases-embed-border-color: #a2a9b1;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #5a5a5a;
  --bases-table-border-color: #a2a9b1;
  --bases-table-cell-background-selected: rgba(27, 111, 228, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(26, 106, 219);
  --bases-table-container-border-radius: 0px;
  --bases-table-header-color: #5a5a5a;
  --blockquote-border-color: rgb(26, 106, 219);
  --button-radius: 0px;
  --callout-bug: 232, 51,51;
  --callout-default: 0, 105, 224;
  --callout-error: 232, 51,51;
  --callout-example: 81, 0, 194;
  --callout-fail: 232, 51,51;
  --callout-important: 0, 194, 97;
  --callout-info: 0, 105, 224;
  --callout-question: 230, 111, 0;
  --callout-quote: 110, 110, 110;
  --callout-radius: 0px;
  --callout-success: 97, 194, 0;
  --callout-summary: 0, 194, 97;
  --callout-tip: 0, 194, 97;
  --callout-todo: 0, 105, 224;
  --callout-warning: 230, 111, 0;
  --canvas-card-label-color: #989898;
  --canvas-color-1: 232, 51,51;
  --canvas-color-2: 230, 111, 0;
  --canvas-color-3: 204, 204, 0;
  --canvas-color-4: 97, 194, 0;
  --canvas-color-5: 0, 194, 97;
  --canvas-color-6: 81, 0, 194;
  --canvas-controls-radius: 0px;
  --checkbox-border-color: #989898;
  --checkbox-border-color-hover: #5a5a5a;
  --checkbox-color: rgb(26, 106, 219);
  --checkbox-color-hover: rgb(72, 145, 234);
  --checkbox-radius: 0px;
  --checklist-done-color: #5a5a5a;
  --clickable-icon-radius: 0px;
  --code-background: #f8f9fa;
  --code-border-color: #a2a9b1;
  --code-comment: #989898;
  --code-function: rgb(163, 163, 0);
  --code-important: rgb(230, 111, 0);
  --code-keyword: rgb(194, 0, 81);
  --code-operator: rgb(232, 41, 41);
  --code-property: rgb(0, 163, 81);
  --code-punctuation: #5a5a5a;
  --code-radius: 0px;
  --code-string: rgb(82, 163, 0);
  --code-tag: rgb(232, 41, 41);
  --code-value: rgb(140, 63, 247);
  --collapse-icon-color: #989898;
  --collapse-icon-color-collapsed: rgb(27, 111, 228);
  --color-accent: rgb(27, 111, 228);
  --color-accent-1: rgb(26, 106, 219);
  --color-accent-2: rgb(72, 145, 234);
  --color-accent-3: rgb(27, 144, 228);
  --color-accent-hsl: 215, 79%, 50%;
  --color-base-05: #f8f9fa;
  --color-base-50: #989898;
  --color-base-70: #5a5a5a;
  --color-blue: rgb(0, 105, 224);
  --color-blue-rgb: 0, 105, 224;
  --color-cyan: rgb(0, 163, 81);
  --color-cyan-rgb: 0, 194, 97;
  --color-green: rgb(82, 163, 0);
  --color-green-rgb: 97, 194, 0;
  --color-orange: rgb(230, 111, 0);
  --color-orange-rgb: 230, 111, 0;
  --color-pink: rgb(194, 0, 81);
  --color-pink-rgb: 194, 0, 81;
  --color-purple: rgb(140, 63, 247);
  --color-purple-rgb: 81, 0, 194;
  --color-red: rgb(232, 41, 41);
  --color-red-rgb: 232, 51,51;
  --color-yellow: rgb(163, 163, 0);
  --color-yellow-rgb: 204, 204, 0;
  --divider-color: #a2a9b1;
  --divider-color-hover: rgb(26, 106, 219);
  --embed-block-shadow-hover: 0 0 0 1px #a2a9b1, inset 0 0 0 1px #a2a9b1;
  --embed-border-left: none;
  --embed-border-start: 2px solid rgb(26, 106, 219);
  --embed-padding: 0px;
  --file-header-font: '??', '??', '??', Arial, 'Archivo', sans-serif;
  --file-line-width: 100%;
  --font-default: Arial, 'Archivo', sans-serif;
  --font-interface: '??', '??', '??', Arial, 'Archivo', sans-serif;
  --font-mermaid: '??', '??', Arial, 'Archivo', sans-serif;
  --font-text: '??', '??', Arial, 'Archivo', sans-serif;
  --footnote-divider-color: #a2a9b1;
  --footnote-id-color: #5a5a5a;
  --footnote-id-color-no-occurrences: #989898;
  --footnote-radius: 0px;
  --graph-node: #5a5a5a;
  --graph-node-attachment: rgb(163, 163, 0);
  --graph-node-focused: rgb(27, 111, 228);
  --graph-node-tag: rgb(82, 163, 0);
  --graph-node-unresolved: #989898;
  --h1-font: 'Linux Libertine','Georgia','Times',serif;
  --h1-size: 1.7em;
  --h1-weight: 500;
  --h2-size: 1.25em;
  --h2-weight: bold;
  --h3-size: 1.17em;
  --h3-weight: bold;
  --h4-size: 1.12em;
  --h4-weight: bold;
  --h5-size: 1em;
  --h5-weight: bold;
  --h6-background: rgb(235, 235, 210);
  --h6-size: 0.99em;
  --h6-weight: bold;
  --heading-formatting: #989898;
  --hr-color: #a2a9b1;
  --icon-color: #5a5a5a;
  --icon-color-active: rgb(27, 111, 228);
  --icon-color-hover: #5a5a5a;
  --icon-l: 16.5px;
  --icon-size: 16px;
  --image-width: 25%;
  --img-max-width: 55%;
  --indentation-guide-width: 0px;
  --infobox-margin: 1em 0px 1em 1em;
  --infobox-margin-left: 1em 1em 1em 0px;
  --infobox-position: right;
  --infobox-width: 25%;
  --inline-title-font: 'Linux Libertine','Georgia','Times',serif;
  --inline-title-size: 1.7em;
  --inline-title-weight: 500;
  --input-date-separator: #989898;
  --input-placeholder-color: #989898;
  --input-radius: 0px;
  --interactive-accent: rgb(26, 106, 219);
  --interactive-accent-hover: rgb(72, 145, 234);
  --interactive-accent-hsl: 215, 79%, 50%;
  --link-color: rgb(24, 85, 205);
  --link-color-hover: rgb(72, 145, 234);
  --link-decoration: none;
  --link-external-color: rgb(24, 39, 205);
  --link-external-color-hover: rgb(40, 88, 230);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(26, 106, 219);
  --link-unresolved-decoration-color: rgba(27, 111, 228, 0.3);
  --link-unresolved-opacity: 0.85;
  --list-bullet-size: 0.35em;
  --list-marker-color: #222222;
  --list-marker-color-collapsed: rgb(27, 111, 228);
  --list-marker-color-hover: #5a5a5a;
  --menu-radius: 0px;
  --metadata-border-color: #a2a9b1;
  --metadata-divider-color: #a2a9b1;
  --metadata-input-font: '??', '??', '??', Arial, 'Archivo', sans-serif;
  --metadata-label-font: '??', '??', '??', Arial, 'Archivo', sans-serif;
  --metadata-label-text-color: #5a5a5a;
  --metadata-label-text-color-hover: #5a5a5a;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #5a5a5a;
  --nav-collapse-icon-color-collapsed: #5a5a5a;
  --nav-heading-color-collapsed: #989898;
  --nav-heading-color-collapsed-hover: #5a5a5a;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-selected: rgba(27, 111, 228, 0.15);
  --nav-item-children-padding-left: 0px;
  --nav-item-color: #5a5a5a;
  --nav-item-color-highlighted: rgb(27, 111, 228);
  --nav-item-radius: 0px;
  --nav-tag-color: #989898;
  --nav-tag-color-active: #5a5a5a;
  --nav-tag-color-hover: #5a5a5a;
  --nav-tag-radius: 0px;
  --pill-border-color: #a2a9b1;
  --pill-color: #5a5a5a;
  --pill-color-remove: #989898;
  --pill-color-remove-hover: rgb(27, 111, 228);
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --radius-xl: 0px;
  --ribbon-background: #ffffff;
  --ribbon-width: 35px;
  --scrollbar-radius: 0px;
  --scrollbar-thumb-bg: transparent;
  --search-clear-button-color: #5a5a5a;
  --search-icon-color: #5a5a5a;
  --setting-items-border-color: #a2a9b1;
  --setting-items-radius: 0px;
  --slider-track-background: #a2a9b1;
  --status-bar-border-color: #a2a9b1;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #5a5a5a;
  --sync-avatar-color-1: rgb(232, 41, 41);
  --sync-avatar-color-2: rgb(230, 111, 0);
  --sync-avatar-color-3: rgb(163, 163, 0);
  --sync-avatar-color-4: rgb(82, 163, 0);
  --sync-avatar-color-5: rgb(0, 163, 81);
  --sync-avatar-color-6: rgb(0, 105, 224);
  --sync-avatar-color-7: rgb(140, 63, 247);
  --sync-avatar-color-8: rgb(194, 0, 81);
  --tab-curve: 0px;
  --tab-divider-color: rgb(27, 144, 228);
  --tab-gradient: linear-gradient(to top,rgb(72, 145, 234) 0px,  rgb(27, 144, 228) 0px, #ffffff 100%);
  --tab-outline-color: rgb(27, 144, 228);
  --tab-radius: 0px;
  --tab-radius-active: 0px 0px 0 0;
  --tab-switcher-preview-radius: 0px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(27, 111, 228);
  --tab-text-color: #989898;
  --tab-text-color-active: #5a5a5a;
  --tab-text-color-focused: #5a5a5a;
  --tab-text-color-focused-active: #5a5a5a;
  --tab-text-color-focused-highlighted: rgb(27, 111, 228);
  --table-add-button-border-color: #a2a9b1;
  --table-add-button-border-width: 0.06em;
  --table-border-color: #a2a9b1;
  --table-border-width: 0.06em;
  --table-column-first-border-width: 0.06em;
  --table-column-last-border-width: 0.06em;
  --table-drag-handle-background-active: rgb(26, 106, 219);
  --table-drag-handle-color: #989898;
  --table-header-background: rgba(0, 0, 0, 0.067);
  --table-header-background-hover: rgba(0, 0, 0, 0.067);
  --table-header-border-color: #a2a9b1;
  --table-header-border-width: 0.06em;
  --table-header-size: 0.9em;
  --table-row-last-border-width: 0.06em;
  --table-selection: rgba(27, 111, 228, 0.1);
  --table-selection-border-color: rgb(26, 106, 219);
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: rgba(27, 111, 228, 0.15);
  --tag-border-color-hover: rgba(27, 111, 228, 0.15);
  --tag-color: rgb(24, 85, 205);
  --tag-color-hover: rgb(72, 145, 234);
  --tag-decoration-hover: underline;
  --tag-padding-x: 0px;
  --tag-padding-y: 0px;
  --tag-radius: 0px;
  --text-accent: rgb(27, 111, 228);
  --text-accent-hover: rgb(72, 145, 234);
  --text-error: rgb(232, 41, 41);
  --text-faint: #989898;
  --text-muted: #5a5a5a;
  --text-selection: rgba(27, 111, 228, 0.2);
  --text-success: rgb(82, 163, 0);
  --text-warning: rgb(230, 111, 0);
  --titlebar-background-focused: #f8f9fa;
  --titlebar-border-color: #a2a9b1;
  --titlebar-text-color: #5a5a5a;
  --vault-name-font-size: 1.4em;
  --vault-name-font-weight: 500;
  --quartz-icon-color: currentColor;
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(162, 169, 177);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(162, 169, 177);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .page article p > em, em {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .page article p > i, i {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .text-highlight {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body del {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body p {
  color: rgb(90, 90, 90);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}`,
    links: `body a.external, footer a {
  color: rgb(24, 39, 205);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(24, 39, 205) none 0px;
  text-decoration: rgb(24, 39, 205);
  text-decoration-color: rgb(24, 39, 205);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(24, 85, 205);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(24, 85, 205) none 0px;
  text-decoration: rgb(24, 85, 205);
  text-decoration-color: rgb(24, 85, 205);
}

body a.internal.broken {
  color: rgb(25, 105, 217);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(25, 105, 217) none 0px;
  text-decoration: rgba(27, 111, 228, 0.3);
  text-decoration-color: rgba(27, 111, 228, 0.3);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(152, 152, 152);
  text-decoration: rgb(152, 152, 152);
}

body blockquote {
  font-family: "??", "??", Arial, Archivo, sans-serif;
  font-style: italic;
}`,
    tables: `body .spacer {
  background-color: rgb(255, 255, 255);
}

body table {
  background-color: rgb(248, 249, 250);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  width: 204.531px;
}

body td {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
}

body th {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  padding-bottom: 11.52px;
  padding-left: 14.4px;
  padding-right: 14.4px;
  padding-top: 11.52px;
  text-align: center;
}

body tr {
  background-color: rgba(0, 0, 0, 0.067);
}`,
    code: `body code {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre > code > [data-line] {
  border-left-color: rgb(163, 163, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(163, 163, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(163, 163, 0);
  border-left-color: rgb(163, 163, 0);
  border-right-color: rgb(163, 163, 0);
  border-top-color: rgb(163, 163, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body figcaption {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .transclude {
  border-left-color: rgb(25, 105, 217);
}

body .transclude-inner {
  border-left-color: rgb(25, 105, 217);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(90, 90, 90);
  text-decoration: line-through rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body input[type=checkbox] {
  border-bottom-color: rgb(152, 152, 152);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(152, 152, 152);
  border-right-color: rgb(152, 152, 152);
  border-top-color: rgb(152, 152, 152);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 194, 97;
  background-color: rgba(0, 194, 97, 0.1);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 81, 0, 194;
  background-color: rgba(81, 0, 194, 0.1);
  border-bottom-color: rgba(81, 0, 194, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(81, 0, 194, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(81, 0, 194, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(81, 0, 194, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 0, 105, 224;
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(162, 169, 177);
  border-left-width: 1px;
  border-right-color: rgb(162, 169, 177);
  border-right-width: 1px;
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 0, 105, 224;
  background-color: rgba(0, 105, 224, 0.1);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 230, 111, 0;
  background-color: rgba(230, 111, 0, 0.1);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(110, 110, 110, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(110, 110, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(110, 110, 110, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 97, 194, 0;
  background-color: rgba(97, 194, 0, 0.1);
  border-bottom-color: rgba(97, 194, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 194, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(97, 194, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(97, 194, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 0, 194, 97;
  background-color: rgba(0, 194, 97, 0.1);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 0, 105, 224;
  background-color: rgba(0, 105, 224, 0.1);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 230, 111, 0;
  background-color: rgba(230, 111, 0, 0.1);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(27, 111, 228, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(27, 111, 228, 0.15);
  border-right-color: rgba(27, 111, 228, 0.15);
  border-top-color: rgba(27, 111, 228, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(24, 85, 205);
}

body h1 {
  font-family: "Linux Libertine", Georgia, Times, serif;
}

body h2 {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "Linux Libertine", Georgia, Times, serif;
}

body h3 {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body h4 {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body h5 {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body h6 {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body hr {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-right-width: 0px;
  border-top-color: rgb(162, 169, 177);
}`,
    scrollbars: `body .callout {
  --callout-color: 0, 105, 224;
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 3.2px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(90, 90, 90);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  text-decoration: rgb(90, 90, 90);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(90, 90, 90);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  text-decoration: rgb(90, 90, 90);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(90, 90, 90);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  text-decoration: rgb(90, 90, 90);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(90, 90, 90);
}`,
    footer: `body footer {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  color: rgb(90, 90, 90);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body footer ul li a {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(24, 85, 205);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(24, 85, 205);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(90, 90, 90);
}

body .darkmode svg {
  color: rgb(90, 90, 90);
  stroke: rgb(90, 90, 90);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(90, 90, 90);
}

body .breadcrumb-element p {
  color: rgb(152, 152, 152);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  color: rgb(90, 90, 90);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

body .page-header h2.page-title {
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body input[type=text] {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

body kbd {
  background-color: rgb(248, 249, 250);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
  },
};
