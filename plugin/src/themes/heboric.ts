import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "heboric",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: rgb(200, 100, 100);
  --background-modifier-border: rgb(82, 87, 96);
  --background-modifier-border-focus: rgb(131, 137, 149);
  --background-modifier-border-hover: rgb(94, 99, 110);
  --background-modifier-form-field: rgb(63, 67, 74);
  --background-modifier-form-field-hover: rgb(63, 67, 74);
  --background-primary: rgb(40, 42, 47);
  --background-primary-alt: rgb(45, 47, 52);
  --background-secondary: rgb(33, 35, 39);
  --background-secondary-alt: rgb(82, 87, 96);
  --bases-cards-background: rgb(40, 42, 47);
  --bases-cards-cover-background: rgb(45, 47, 52);
  --bases-cards-shadow: 0 0 0 1px rgb(82, 87, 96);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(94, 99, 110);
  --bases-embed-border-color: rgb(82, 87, 96);
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: rgb(186, 189, 196);
  --bases-table-border-color: rgb(82, 87, 96);
  --bases-table-cell-background-active: rgb(40, 42, 47);
  --bases-table-cell-background-disabled: rgb(45, 47, 52);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(131, 137, 149);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(200, 100, 100);
  --bases-table-container-border-radius: 3px;
  --bases-table-group-background: rgb(45, 47, 52);
  --bases-table-header-background: rgb(40, 42, 47);
  --bases-table-header-color: rgb(186, 189, 196);
  --bases-table-summary-background: rgb(40, 42, 47);
  --blockquote-background-color: rgb(40, 42, 47);
  --blockquote-border-color: rgb(200, 100, 100);
  --blockquote-border-thickness: 0.2rem;
  --blur-background: color-mix(in srgb, rgb(82, 87, 96) 65%, transparent) linear-gradient(rgb(82, 87, 96), color-mix(in srgb, rgb(82, 87, 96) 65%, transparent));
  --button-radius: 3px;
  --callout-border-width: 1px;
  --callout-padding: 1rem;
  --callout-radius: 3px;
  --canvas-background: rgb(40, 42, 47);
  --canvas-card-label-color: rgb(106, 111, 124);
  --canvas-controls-radius: 3px;
  --canvas-dot-pattern: rgb(82, 87, 96);
  --caret-color: rgb(186, 189, 196);
  --checkbox-border-color: rgb(106, 111, 124);
  --checkbox-border-color-hover: rgb(186, 189, 196);
  --checkbox-color: rgb(200, 100, 100);
  --checkbox-color-hover: rgb(200, 100, 100);
  --checkbox-marker-color: rgb(40, 42, 47);
  --checkbox-radius: 3px;
  --checklist-done-color: rgb(186, 189, 196);
  --clickable-icon-radius: 3px;
  --code-background: rgb(45, 47, 52);
  --code-border-color: rgb(82, 87, 96);
  --code-comment: rgb(82, 87, 96);
  --code-function: rgb(204, 102, 102);
  --code-important: rgb(204, 102, 102);
  --code-keyword: rgb(211, 151, 95);
  --code-normal: rgb(214, 216, 220);
  --code-operator: rgb(159, 163, 173);
  --code-property: rgb(118, 186, 213);
  --code-punctuation: rgb(131, 137, 149);
  --code-radius: 3px;
  --code-size: 0.8rem;
  --code-string: rgb(156, 202, 119);
  --code-tag: rgb(210, 121, 121);
  --code-value: rgb(204, 151, 102);
  --collapse-icon-color: rgb(106, 111, 124);
  --collapse-icon-color-collapsed: rgb(200, 100, 100);
  --color-accent: rgb(200, 100, 100);
  --color-accent-1: rgb(200, 100, 100);
  --color-accent-2: rgb(220, 120, 120);
  --color-base-00: rgb(33, 35, 39);
  --color-base-05: rgb(40, 42, 47);
  --color-base-10: rgb(45, 47, 52);
  --color-base-100: rgb(241, 242, 243);
  --color-base-20: rgb(54, 57, 63);
  --color-base-25: rgb(63, 67, 74);
  --color-base-30: rgb(82, 87, 96);
  --color-base-35: rgb(94, 99, 110);
  --color-base-40: rgb(131, 137, 149);
  --color-base-50: rgb(106, 111, 124);
  --color-base-60: rgb(159, 163, 173);
  --color-base-70: rgb(186, 189, 196);
  --color-base-80: rgb(214, 216, 220);
  --divider-color: rgb(54, 57, 63);
  --divider-color-hover: rgb(200, 100, 100);
  --dropdown-background: rgb(82, 87, 96);
  --dropdown-background-hover: rgb(94, 99, 110);
  --embed-block-shadow-hover: 0 0 0 1px rgb(82, 87, 96), inset 0 0 0 1px rgb(82, 87, 96);
  --embed-border-start: 2px solid rgb(200, 100, 100);
  --file-header-background: rgb(40, 42, 47);
  --file-header-background-focused: rgb(40, 42, 47);
  --file-header-font: '??', '??', "SF Pro", ui-sans-serif, sans-serif;
  --flair-background: rgb(82, 87, 96);
  --flair-color: rgb(186, 189, 196);
  --font-interface: '??', '??', "SF Pro", ui-sans-serif, sans-serif;
  --font-mermaid: '??', '??', "New York", "Georgia", ui-serif, serif;
  --font-monospace: '??', '??', "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace;
  --font-text: '??', '??', "New York", "Georgia", ui-serif, serif;
  --footnote-divider-color: rgb(82, 87, 96);
  --footnote-id-color: rgb(186, 189, 196);
  --footnote-id-color-no-occurrences: rgb(106, 111, 124);
  --footnote-radius: 3px;
  --graph-line: rgb(94, 99, 110);
  --graph-node: rgb(186, 189, 196);
  --graph-node-focused: rgb(200, 100, 100);
  --graph-node-tag: rgb(200, 100, 100);
  --graph-node-unresolved: rgb(220, 120, 120);
  --graph-text: rgb(186, 189, 196);
  --h1-color: rgb(241, 242, 243);
  --h1-font: "SF Pro", ui-sans-serif, sans-serif;
  --h1-size: 2rem;
  --h2-color: rgb(241, 242, 243);
  --h2-font: "SF Pro", ui-sans-serif, sans-serif;
  --h2-size: 1.65rem;
  --h3-color: rgb(214, 216, 220);
  --h3-font: "SF Pro", ui-sans-serif, sans-serif;
  --h3-size: 1.5rem;
  --h4-color: rgb(214, 216, 220);
  --h4-font: "SF Pro", ui-sans-serif, sans-serif;
  --h4-size: 1.25rem;
  --h5-color: rgb(214, 216, 220);
  --h5-font: "SF Pro", ui-sans-serif, sans-serif;
  --h5-size: 1.125rem;
  --h6-color: rgb(214, 216, 220);
  --h6-font: "SF Pro", ui-sans-serif, sans-serif;
  --h6-size: 1rem;
  --heading-formatting: rgb(106, 111, 124);
  --hr-color: rgb(63, 67, 74);
  --hr-thickness: 0.125rem;
  --icon-color: rgb(186, 189, 196);
  --icon-color-active: rgb(241, 242, 243);
  --icon-color-focused: rgb(186, 189, 196);
  --icon-color-hover: rgb(186, 189, 196);
  --inline-title-color: rgb(241, 242, 243);
  --inline-title-font: "SF Pro", ui-sans-serif, sans-serif;
  --inline-title-size: 2.5rem;
  --input-date-separator: rgb(106, 111, 124);
  --input-placeholder-color: rgb(106, 111, 124);
  --input-radius: 3px;
  --interactive-accent: rgb(200, 100, 100);
  --interactive-accent-hover: rgb(200, 100, 100);
  --interactive-hover: rgb(94, 99, 110);
  --interactive-normal: rgb(82, 87, 96);
  --link-color: rgb(200, 100, 100);
  --link-color-hover: rgb(220, 120, 120);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(200, 100, 100);
  --link-external-color-hover: rgb(220, 120, 120);
  --link-unresolved-color: rgb(220, 120, 120);
  --list-marker-color: rgb(106, 111, 124);
  --list-marker-color-collapsed: rgb(200, 100, 100);
  --list-marker-color-hover: rgb(186, 189, 196);
  --menu-background: rgb(33, 35, 39);
  --menu-border-color: rgb(94, 99, 110);
  --metadata-border-color: rgb(82, 87, 96);
  --metadata-divider-color: rgb(82, 87, 96);
  --metadata-input-font: '??', '??', "SF Pro", ui-sans-serif, sans-serif;
  --metadata-input-text-color: rgb(186, 189, 196);
  --metadata-label-font: '??', '??', "SF Pro", ui-sans-serif, sans-serif;
  --metadata-label-text-color: rgb(186, 189, 196);
  --metadata-label-text-color-hover: rgb(186, 189, 196);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(131, 137, 149);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(94, 99, 110);
  --modal-background: rgb(40, 42, 47);
  --modal-border-color: rgb(131, 137, 149);
  --modal-radius: 3px;
  --mono: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace;
  --nav-collapse-icon-color: rgb(106, 111, 124);
  --nav-collapse-icon-color-collapsed: rgb(106, 111, 124);
  --nav-heading-color: rgb(186, 189, 196);
  --nav-heading-color-collapsed: rgb(106, 111, 124);
  --nav-heading-color-collapsed-hover: rgb(186, 189, 196);
  --nav-heading-color-hover: rgb(186, 189, 196);
  --nav-item-background-active: rgb(200, 100, 100);
  --nav-item-background-hover: rgb(200, 100, 100);
  --nav-item-color: rgb(186, 189, 196);
  --nav-item-color-active: rgb(214, 216, 220);
  --nav-item-color-highlighted: rgb(200, 100, 100);
  --nav-item-color-hover: rgb(214, 216, 220);
  --nav-item-color-selected: rgb(186, 189, 196);
  --nav-item-radius: 3px;
  --nav-tag-color: rgb(106, 111, 124);
  --nav-tag-color-active: rgb(186, 189, 196);
  --nav-tag-color-hover: rgb(186, 189, 196);
  --nav-tag-radius: 3px;
  --pdf-background: rgb(40, 42, 47);
  --pdf-page-background: rgb(40, 42, 47);
  --pdf-shadow: 0 0 0 1px rgb(82, 87, 96);
  --pdf-sidebar-background: rgb(40, 42, 47);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(82, 87, 96);
  --pill-border-color: rgb(82, 87, 96);
  --pill-border-color-hover: rgb(94, 99, 110);
  --pill-color: rgb(186, 189, 196);
  --pill-color-hover: rgb(186, 189, 196);
  --pill-color-remove: rgb(106, 111, 124);
  --pill-color-remove-hover: rgb(200, 100, 100);
  --pill-radius: 3px;
  --prompt-background: rgb(40, 42, 47);
  --prompt-border-color: rgb(200, 100, 100);
  --prompt-border-width: 0.15rem;
  --radius-s: 3px;
  --raised-background: color-mix(in srgb, rgb(82, 87, 96) 65%, transparent) linear-gradient(rgb(82, 87, 96), color-mix(in srgb, rgb(82, 87, 96) 65%, transparent));
  --ribbon-background: rgb(33, 35, 39);
  --ribbon-background-collapsed: rgb(40, 42, 47);
  --sans-serif: "SF Pro", ui-sans-serif, sans-serif;
  --search-clear-button-color: rgb(186, 189, 196);
  --search-icon-color: rgb(186, 189, 196);
  --search-result-background: rgb(40, 42, 47);
  --serif: "New York", "Georgia", ui-serif, serif;
  --setting-group-heading-color: rgb(186, 189, 196);
  --setting-items-background: rgb(45, 47, 52);
  --setting-items-border-color: rgb(82, 87, 96);
  --slider-thumb-border-color: rgb(94, 99, 110);
  --slider-track-background: rgb(82, 87, 96);
  --status-bar-background: rgb(33, 35, 39);
  --status-bar-border-color: rgb(54, 57, 63);
  --status-bar-text-color: rgb(186, 189, 196);
  --suggestion-background: rgb(40, 42, 47);
  --swatch-radius: 3px;
  --tab-background-active: rgb(40, 42, 47);
  --tab-container-background: rgb(33, 35, 39);
  --tab-divider-color: rgb(94, 99, 110);
  --tab-outline-color: rgb(54, 57, 63);
  --tab-radius: 3px;
  --tab-switcher-background: rgb(33, 35, 39);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(33, 35, 39), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(200, 100, 100);
  --tab-text-color: rgb(106, 111, 124);
  --tab-text-color-active: rgb(241, 242, 243);
  --tab-text-color-focused: rgb(186, 189, 196);
  --tab-text-color-focused-active: rgb(241, 242, 243);
  --tab-text-color-focused-active-current: rgb(241, 242, 243);
  --tab-text-color-focused-highlighted: rgb(200, 100, 100);
  --table-add-button-border-color: rgb(82, 87, 96);
  --table-border-color: rgb(82, 87, 96);
  --table-drag-handle-background-active: rgb(200, 100, 100);
  --table-drag-handle-color: rgb(106, 111, 124);
  --table-header-background: rgb(54, 57, 63);
  --table-header-border-color: rgb(82, 87, 96);
  --table-header-color: rgb(186, 189, 196);
  --table-header-font: "SF Pro", ui-sans-serif, sans-serif;
  --table-selection-border-color: rgb(200, 100, 100);
  --tag-background: rgb(200, 100, 100);
  --tag-background-hover: rgb(220, 120, 120);
  --tag-color: rgb(241, 242, 243);
  --tag-color-hover: rgb(241, 242, 243);
  --tag-radius: 3px;
  --text-accent: rgb(200, 100, 100);
  --text-accent-hover: rgb(220, 120, 120);
  --text-faint: rgb(106, 111, 124);
  --text-muted: rgb(186, 189, 196);
  --text-normal: rgb(186, 189, 196);
  --text-selection: rgb(179, 77, 77);
  --titlebar-background: rgb(33, 35, 39);
  --titlebar-background-focused: rgb(33, 35, 39);
  --titlebar-border-color: rgb(82, 87, 96);
  --titlebar-text-color: rgb(186, 189, 196);
  --titlebar-text-color-focused: rgb(186, 189, 196);
  --vault-profile-color: rgb(186, 189, 196);
  --vault-profile-color-hover: rgb(186, 189, 196);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 35, 39);
  color: rgb(186, 189, 196);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 42, 47);
  color: rgb(186, 189, 196);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 35, 39);
  color: rgb(186, 189, 196);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 57, 63);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 35, 39);
  border-left-color: rgb(54, 57, 63);
  color: rgb(186, 189, 196);
}

body div#quartz-root {
  background-color: rgb(40, 42, 47);
  color: rgb(186, 189, 196);
}`,
    typography: `body .page article p > b, b {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body .page article p > em, em {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body .page article p > i, i {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body .page article p > strong, strong {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body .text-highlight {
  color: rgb(241, 242, 243);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(241, 242, 243) none 0px;
  text-decoration: rgb(241, 242, 243);
  text-decoration-color: rgb(241, 242, 243);
}

body del {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: line-through rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body p {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}`,
    links: `body a.external, footer a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration: underline rgb(200, 100, 100);
  text-decoration-color: rgb(200, 100, 100);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration: rgb(200, 100, 100);
  text-decoration-color: rgb(200, 100, 100);
}

body a.internal.broken {
  color: rgb(220, 120, 120);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(220, 120, 120) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(186, 189, 196);
}

body dt {
  color: rgb(186, 189, 196);
}

body ol > li {
  color: rgb(186, 189, 196);
}

body ol.overflow {
  background-color: rgb(40, 42, 47);
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body ul > li {
  color: rgb(186, 189, 196);
}

body ul.overflow {
  background-color: rgb(40, 42, 47);
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(106, 111, 124);
  text-decoration: rgb(106, 111, 124);
}

body blockquote {
  background-color: rgb(40, 42, 47);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body table {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  width: 204.625px;
}

body td {
  border-bottom-color: rgb(82, 87, 96);
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  color: rgb(186, 189, 196);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

body th {
  border-bottom-color: rgb(82, 87, 96);
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  color: rgb(186, 189, 196);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

body tr {
  background-color: rgb(54, 57, 63);
}`,
    code: `body code {
  border-bottom-color: rgb(214, 216, 220);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(214, 216, 220);
  border-right-color: rgb(214, 216, 220);
  border-top-color: rgb(214, 216, 220);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(214, 216, 220);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

body pre > code > [data-line] {
  border-left-color: rgb(204, 102, 102);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(204, 102, 102);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(204, 102, 102);
  border-left-color: rgb(204, 102, 102);
  border-right-color: rgb(204, 102, 102);
  border-top-color: rgb(204, 102, 102);
}

body pre > code, pre:has(> code) {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body figcaption {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

body figure {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body img {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body video {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    embeds: `body .file-embed {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body .footnotes {
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
}

body .transclude {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(200, 100, 100);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body .transclude-inner {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(200, 100, 100);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(186, 189, 196);
  text-decoration: line-through rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body input[type=checkbox] {
  border-bottom-color: rgb(106, 111, 124);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(106, 111, 124);
  border-right-color: rgb(106, 111, 124);
  border-top-color: rgb(106, 111, 124);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='*'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='-'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='/'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='>'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='?'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='I'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='S'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='b'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='c'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='d'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='f'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='i'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='k'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='l'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='p'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='u'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body li.task-list-item[data-task='w'] {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(63, 67, 74);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 42, 47);
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(186, 189, 196);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(186, 189, 196);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(186, 189, 196);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 35, 39);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(200, 100, 100);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(241, 242, 243);
}

body h1 {
  color: rgb(241, 242, 243);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h2 {
  color: rgb(241, 242, 243);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(241, 242, 243);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h3 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h4 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h5 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h6 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body hr {
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
}

body ::-webkit-scrollbar-corner {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
}

body ::-webkit-scrollbar-track {
  background: rgb(40, 42, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 47);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  text-decoration: rgb(186, 189, 196);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  text-decoration: rgb(186, 189, 196);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  text-decoration: rgb(186, 189, 196);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(200, 100, 100);
  border-bottom-color: rgb(214, 216, 220);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(214, 216, 220);
  border-right-color: rgb(214, 216, 220);
  border-top-color: rgb(214, 216, 220);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(214, 216, 220);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}`,
    footer: `body footer {
  background-color: rgb(33, 35, 39);
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
  border-top-color: rgb(54, 57, 63);
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body footer ul li a {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body li.section-li > .section .meta {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 189, 196);
  text-decoration: rgb(186, 189, 196);
}

body ul.section-ul {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

body .darkmode svg {
  color: rgb(186, 189, 196);
  stroke: rgb(186, 189, 196);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

body .breadcrumb-element p {
  color: rgb(106, 111, 124);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(214, 216, 220);
  border-left-color: rgb(214, 216, 220);
  border-right-color: rgb(214, 216, 220);
  border-top-color: rgb(214, 216, 220);
  color: rgb(214, 216, 220);
}

body .metadata {
  border-bottom-color: rgb(82, 87, 96);
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  color: rgb(186, 189, 196);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body .navigation-progress {
  background-color: rgb(33, 35, 39);
}

body .page-header h2.page-title {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body abbr {
  color: rgb(186, 189, 196);
  text-decoration: underline dotted rgb(186, 189, 196);
}

body details {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body input[type=text] {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body kbd {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(214, 216, 220);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(214, 216, 220);
  border-right-color: rgb(214, 216, 220);
  border-top-color: rgb(214, 216, 220);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(214, 216, 220);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

body progress {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

body sub {
  color: rgb(186, 189, 196);
}

body summary {
  color: rgb(186, 189, 196);
}

body sup {
  color: rgb(186, 189, 196);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgb(250, 240, 240);
  --background-primary: #fefefe;
  --background-secondary: rgb(253, 249, 247);
  --background-secondary-alt: #fefefe;
  --bases-cards-background: #fefefe;
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: #555555;
  --bases-table-cell-background-active: #fefefe;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(200, 100, 100);
  --bases-table-container-border-radius: 3px;
  --bases-table-header-background: #fefefe;
  --bases-table-header-color: #555555;
  --bases-table-summary-background: #fefefe;
  --blockquote-background-color: #fefefe;
  --blockquote-border-color: rgb(200, 100, 100);
  --blockquote-border-thickness: 0.2rem;
  --blur-background: color-mix(in srgb, #fefefe 65%, transparent) linear-gradient(#fefefe, color-mix(in srgb, #fefefe 65%, transparent));
  --button-radius: 3px;
  --callout-border-width: 1px;
  --callout-padding: 1rem;
  --callout-radius: 3px;
  --canvas-background: #fefefe;
  --canvas-controls-radius: 3px;
  --caret-color: #555555;
  --checkbox-border-color-hover: #555555;
  --checkbox-color: rgb(200, 100, 100);
  --checkbox-color-hover: rgb(220, 120, 120);
  --checkbox-marker-color: #fefefe;
  --checkbox-radius: 3px;
  --checklist-done-color: #555555;
  --clickable-icon-radius: 3px;
  --code-background: #f6f6f6;
  --code-comment: #bdbdbd;
  --code-function: rgb(198, 83, 83);
  --code-important: rgb(198, 83, 83);
  --code-keyword: rgb(206, 138, 75);
  --code-normal: #444444;
  --code-operator: #727272;
  --code-property: rgb(79, 167, 201);
  --code-punctuation: #bdbdbd;
  --code-radius: 3px;
  --code-size: 0.8rem;
  --code-string: rgb(163, 193, 139);
  --code-tag: rgb(204, 102, 102);
  --code-value: rgb(198, 138, 83);
  --collapse-icon-color-collapsed: rgb(200, 100, 100);
  --color-accent: rgb(200, 100, 100);
  --color-accent-1: rgb(200, 100, 100);
  --color-accent-2: rgb(220, 120, 120);
  --color-base-05: #fefefe;
  --color-base-100: #000000;
  --color-base-60: #727272;
  --color-base-70: #555555;
  --color-base-80: #444444;
  --divider-color-hover: rgb(200, 100, 100);
  --embed-border-start: 2px solid rgb(200, 100, 100);
  --file-header-background: #fefefe;
  --file-header-background-focused: #fefefe;
  --file-header-font: '??', '??', "SF Pro", ui-sans-serif, sans-serif;
  --flair-color: #555555;
  --font-interface: '??', '??', "SF Pro", ui-sans-serif, sans-serif;
  --font-mermaid: '??', '??', "New York", "Georgia", ui-serif, serif;
  --font-monospace: '??', '??', "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace;
  --font-text: '??', '??', "New York", "Georgia", ui-serif, serif;
  --footnote-id-color: #555555;
  --footnote-radius: 3px;
  --graph-node: #555555;
  --graph-node-focused: rgb(200, 100, 100);
  --graph-node-tag: rgb(200, 100, 100);
  --graph-node-unresolved: rgb(220, 120, 120);
  --graph-text: #555555;
  --h1-color: #000000;
  --h1-font: "SF Pro", ui-sans-serif, sans-serif;
  --h1-size: 2rem;
  --h2-color: #000000;
  --h2-font: "SF Pro", ui-sans-serif, sans-serif;
  --h2-size: 1.65rem;
  --h3-color: #444444;
  --h3-font: "SF Pro", ui-sans-serif, sans-serif;
  --h3-size: 1.5rem;
  --h4-color: #444444;
  --h4-font: "SF Pro", ui-sans-serif, sans-serif;
  --h4-size: 1.25rem;
  --h5-color: #444444;
  --h5-font: "SF Pro", ui-sans-serif, sans-serif;
  --h5-size: 1.125rem;
  --h6-color: #444444;
  --h6-font: "SF Pro", ui-sans-serif, sans-serif;
  --h6-size: 1rem;
  --hr-color: #e3e3e3;
  --hr-thickness: 0.125rem;
  --icon-color: #555555;
  --icon-color-active: rgb(200, 100, 100);
  --icon-color-focused: #555555;
  --icon-color-hover: #555555;
  --inline-title-color: #000000;
  --inline-title-font: "SF Pro", ui-sans-serif, sans-serif;
  --inline-title-size: 2.5rem;
  --input-radius: 3px;
  --interactive-accent: rgb(200, 100, 100);
  --interactive-accent-hover: rgb(220, 120, 120);
  --link-color: rgb(200, 100, 100);
  --link-color-hover: rgb(220, 120, 120);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(200, 100, 100);
  --link-external-color-hover: rgb(220, 120, 120);
  --link-unresolved-color: rgb(220, 120, 120);
  --list-marker-color-collapsed: rgb(200, 100, 100);
  --list-marker-color-hover: #555555;
  --menu-background: rgb(253, 249, 247);
  --metadata-input-font: '??', '??', "SF Pro", ui-sans-serif, sans-serif;
  --metadata-input-text-color: #555555;
  --metadata-label-font: '??', '??', "SF Pro", ui-sans-serif, sans-serif;
  --metadata-label-text-color: #555555;
  --metadata-label-text-color-hover: #555555;
  --modal-background: #fefefe;
  --modal-radius: 3px;
  --mono: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace;
  --nav-heading-color: #555555;
  --nav-heading-color-collapsed-hover: #555555;
  --nav-heading-color-hover: #555555;
  --nav-item-background-active: rgb(200, 100, 100);
  --nav-item-background-hover: rgb(200, 100, 100);
  --nav-item-color: #555555;
  --nav-item-color-active: #f6f6f6;
  --nav-item-color-highlighted: rgb(200, 100, 100);
  --nav-item-color-hover: #f6f6f6;
  --nav-item-color-selected: #555555;
  --nav-item-radius: 3px;
  --nav-tag-color-active: #555555;
  --nav-tag-color-hover: #555555;
  --nav-tag-radius: 3px;
  --pdf-background: #fefefe;
  --pdf-page-background: #fefefe;
  --pdf-sidebar-background: #fefefe;
  --pill-color: #555555;
  --pill-color-hover: #555555;
  --pill-color-remove-hover: rgb(200, 100, 100);
  --pill-radius: 3px;
  --prompt-background: #fefefe;
  --prompt-border-color: rgb(200, 100, 100);
  --prompt-border-width: 0.15rem;
  --radius-s: 3px;
  --raised-background: color-mix(in srgb, #fefefe 65%, transparent) linear-gradient(#fefefe, color-mix(in srgb, #fefefe 65%, transparent));
  --ribbon-background: rgb(253, 249, 247);
  --ribbon-background-collapsed: #fefefe;
  --sans-serif: "SF Pro", ui-sans-serif, sans-serif;
  --search-clear-button-color: #555555;
  --search-icon-color: #555555;
  --search-result-background: #fefefe;
  --serif: "New York", "Georgia", ui-serif, serif;
  --setting-group-heading-color: #555555;
  --status-bar-background: rgb(253, 249, 247);
  --status-bar-text-color: #555555;
  --suggestion-background: #fefefe;
  --swatch-radius: 3px;
  --tab-background-active: #fefefe;
  --tab-container-background: rgb(253, 249, 247);
  --tab-radius: 3px;
  --tab-switcher-background: rgb(253, 249, 247);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(253, 249, 247), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(200, 100, 100);
  --tab-text-color-active: #000000;
  --tab-text-color-focused: #555555;
  --tab-text-color-focused-active: #000000;
  --tab-text-color-focused-active-current: #000000;
  --tab-text-color-focused-highlighted: rgb(200, 100, 100);
  --table-drag-handle-background-active: rgb(200, 100, 100);
  --table-header-background: #f6f6f6;
  --table-header-color: #555555;
  --table-header-font: "SF Pro", ui-sans-serif, sans-serif;
  --table-selection-border-color: rgb(200, 100, 100);
  --tag-background: rgb(200, 100, 100);
  --tag-background-hover: rgb(220, 120, 120);
  --tag-color: #fafafa;
  --tag-color-hover: #ffffff;
  --tag-radius: 3px;
  --text-accent: rgb(200, 100, 100);
  --text-accent-hover: rgb(220, 120, 120);
  --text-muted: #555555;
  --text-normal: #555555;
  --text-selection: rgb(200, 100, 100);
  --titlebar-background-focused: #f6f6f6;
  --titlebar-text-color: #555555;
  --titlebar-text-color-focused: #555555;
  --vault-profile-color: #555555;
  --vault-profile-color-hover: #555555;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(254, 254, 254);
  color: rgb(85, 85, 85);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
}

body div#quartz-root {
  background-color: rgb(254, 254, 254);
  color: rgb(85, 85, 85);
}`,
    typography: `body .page article p > b, b {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body .page article p > em, em {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body .page article p > i, i {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body .page article p > strong, strong {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body .text-highlight {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body del {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: line-through rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body p {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}`,
    links: `body a.external, footer a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration: underline rgb(200, 100, 100);
  text-decoration-color: rgb(200, 100, 100);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration: rgb(200, 100, 100);
  text-decoration-color: rgb(200, 100, 100);
}

body a.internal.broken {
  color: rgb(220, 120, 120);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(220, 120, 120) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(85, 85, 85);
}

body dt {
  color: rgb(85, 85, 85);
}

body ol > li {
  color: rgb(85, 85, 85);
}

body ol.overflow {
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body ul > li {
  color: rgb(85, 85, 85);
}

body ul.overflow {
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(254, 254, 254);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body table {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  width: 204.625px;
}

body td {
  color: rgb(85, 85, 85);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

body th {
  color: rgb(85, 85, 85);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

body tr {
  background-color: rgb(246, 246, 246);
}`,
    code: `body code {
  border-bottom-color: rgb(68, 68, 68);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(68, 68, 68);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

body pre > code > [data-line] {
  border-left-color: rgb(198, 83, 83);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(198, 83, 83);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(198, 83, 83);
  border-left-color: rgb(198, 83, 83);
  border-right-color: rgb(198, 83, 83);
  border-top-color: rgb(198, 83, 83);
}

body pre > code, pre:has(> code) {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body figcaption {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

body figure {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body img {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body video {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body .footnotes {
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

body .transclude {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(200, 100, 100);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body .transclude-inner {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(200, 100, 100);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(85, 85, 85);
  text-decoration: line-through rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body input[type=checkbox] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='*'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='-'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='/'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='>'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='?'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='I'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='S'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='b'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='c'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='d'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='f'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='i'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='k'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='l'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='p'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='u'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='w'] {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(85, 85, 85);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(85, 85, 85);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(85, 85, 85);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 249, 247);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(200, 100, 100);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(250, 250, 250);
}

body h1 {
  color: rgb(0, 0, 0);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h2 {
  color: rgb(0, 0, 0);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h3 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h4 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h5 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body h6 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

body ::-webkit-scrollbar-corner {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

body ::-webkit-scrollbar-track {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  text-decoration: rgb(85, 85, 85);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  text-decoration: rgb(85, 85, 85);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  text-decoration: rgb(85, 85, 85);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(200, 100, 100);
  border-bottom-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(246, 246, 246);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}`,
    footer: `body footer {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body footer ul li a {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body li.section-li > .section .meta {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
}

body ul.section-ul {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

body .darkmode svg {
  color: rgb(85, 85, 85);
  stroke: rgb(85, 85, 85);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

body .breadcrumb-element p {
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

body .metadata {
  color: rgb(85, 85, 85);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

body .navigation-progress {
  background-color: rgb(253, 249, 247);
}

body .page-header h2.page-title {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body abbr {
  color: rgb(85, 85, 85);
  text-decoration: underline dotted rgb(85, 85, 85);
}

body details {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body input[type=text] {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

body kbd {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(68, 68, 68);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(68, 68, 68);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

body progress {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body sub {
  color: rgb(85, 85, 85);
}

body summary {
  color: rgb(85, 85, 85);
}

body sup {
  color: rgb(85, 85, 85);
}`,
  },
};
