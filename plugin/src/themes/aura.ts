import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "aura",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-mono", "ia-writer-duo", "ia-writer-quattro-s", "monaco"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: rgb(50, 50, 50) !important;
  --background-modifier-border-hover: rgb(50, 50, 50) !important;
  --background-modifier-form-field: rgb(18, 18, 18) !important;
  --background-modifier-form-field-hover: rgb(18, 18, 18) !important;
  --background-modifier-hover: rgba(18, 18, 18, 0.7) !important;
  --background-primary: rgb(25, 25, 25) !important;
  --background-primary-alt: rgb(27, 27, 27) !important;
  --background-secondary: rgb(20, 20, 20) !important;
  --background-secondary-alt: rgb(22, 22, 22) !important;
  --bases-cards-background: rgb(25, 25, 25) !important;
  --bases-cards-cover-background: rgb(27, 27, 27) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(50, 50, 50) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(50, 50, 50) !important;
  --bases-embed-border-color: rgb(50, 50, 50) !important;
  --bases-group-heading-property-color: rgba(240, 240, 240, 0.7) !important;
  --bases-table-border-color: rgb(50, 50, 50) !important;
  --bases-table-cell-background-active: rgb(25, 25, 25) !important;
  --bases-table-cell-background-disabled: rgb(27, 27, 27) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(112, 122, 250) !important;
  --bases-table-group-background: rgb(27, 27, 27) !important;
  --bases-table-header-background: rgb(25, 25, 25) !important;
  --bases-table-header-background-hover: rgba(18, 18, 18, 0.7) !important;
  --bases-table-header-color: rgba(240, 240, 240, 0.7) !important;
  --bases-table-summary-background: rgb(25, 25, 25) !important;
  --bases-table-summary-background-hover: rgba(18, 18, 18, 0.7) !important;
  --blockquote-border-color: rgb(112, 122, 250) !important;
  --blur-background: color-mix(in srgb, rgb(18, 18, 18) 65%, transparent) linear-gradient(rgb(18, 18, 18), color-mix(in srgb, rgb(18, 18, 18) 65%, transparent)) !important;
  --bodyFont: "iA Writer Quattro S" !important;
  --bold-color: rgb(208, 66, 85) !important;
  --bold-colors: rgb(208, 66, 85) !important;
  --canvas-background: rgb(25, 25, 25) !important;
  --canvas-card-label-color: rgba(240, 240, 240, 0.7) !important;
  --card-background-color: rgb(18, 18, 18) !important;
  --caret-color: rgb(240, 240, 240) !important;
  --checkbox-border-color: rgba(240, 240, 240, 0.7) !important;
  --checkbox-border-color-hover: rgba(240, 240, 240, 0.7) !important;
  --checkbox-color: rgb(112, 122, 250) !important;
  --checkbox-color-hover: rgba(112, 122, 250, 0.7) !important;
  --checkbox-marker-color: rgb(10, 10, 10) !important;
  --checklist-done-color: rgba(240, 240, 240, 0.7) !important;
  --code-background: rgb(27, 27, 27) !important;
  --code-border-color: rgb(50, 50, 50) !important;
  --code-bracket-background: rgba(18, 18, 18, 0.7) !important;
  --code-comment: rgba(240, 240, 240, 0.7) !important;
  --code-normal: rgb(240, 240, 240) !important;
  --code-punctuation: rgba(240, 240, 240, 0.7) !important;
  --codeFont: "iA Writer Mono S" !important;
  --collapse-icon-color: rgba(240, 240, 240, 0.7) !important;
  --collapse-icon-color-collapsed: rgb(112, 122, 250) !important;
  --color-accent: rgb(112, 122, 250) !important;
  --cpt-accent: 112, 122, 250 !important;
  --cpt-aura: 112, 122, 250 !important;
  --cpt-black: 10, 10, 10 !important;
  --cpt-blue: 112, 122, 250 !important;
  --cpt-border: 50, 50, 50 !important;
  --cpt-core: 25, 25, 25 !important;
  --cpt-core-alt: 27, 27, 27 !important;
  --cpt-crust: 18, 18, 18 !important;
  --cpt-crust-alt: 19, 19, 19 !important;
  --cpt-cyan: 50, 181, 185 !important;
  --cpt-green: 168, 195, 115 !important;
  --cpt-mantle: 20, 20, 20 !important;
  --cpt-mantle-alt: 22, 22, 22 !important;
  --cpt-marker-shadow: rgb(112, 122, 250) !important;
  --cpt-orange: 213, 118, 52 !important;
  --cpt-pink: 235, 0, 235 !important;
  --cpt-purple: 147, 134, 200 !important;
  --cpt-red: 208, 66, 85 !important;
  --cpt-text: 240, 240, 240 !important;
  --cpt-white: 240, 240, 240 !important;
  --cpt-yellow: 229, 181, 103 !important;
  --dark: rgb(240, 240, 240) !important;
  --darkgray: rgb(240, 240, 240) !important;
  --divider-color: rgb(50, 50, 50) !important;
  --divider-color-hover: rgb(112, 122, 250) !important;
  --dropdown-background: rgb(18, 18, 18) !important;
  --dropdown-background-hover: rgb(18, 18, 18, 0.5) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(50, 50, 50), inset 0 0 0 1px rgb(50, 50, 50) !important;
  --embed-border-start: 2px solid rgb(112, 122, 250) !important;
  --file-header-background: rgb(25, 25, 25) !important;
  --file-header-background-focused: rgb(25, 25, 25) !important;
  --file-header-font: "iA Writer Quattro S" !important;
  --flair-background: rgb(18, 18, 18) !important;
  --flair-color: rgb(240, 240, 240) !important;
  --font-default: "iA Writer Quattro S" !important;
  --font-default-custom: "iA Writer Quattro S" !important;
  --font-interface: "iA Writer Quattro S" !important;
  --font-mermaid: "iA Writer Quattro S" !important;
  --font-monospace: "iA Writer Mono S" !important;
  --font-monospace-custom: "iA Writer Mono S" !important;
  --font-secondary: "iA Writer Duo S" !important;
  --font-secondary-custom: "iA Writer Duo S" !important;
  --font-text: "iA Writer Quattro S" !important;
  --footnote-divider-color: rgb(50, 50, 50) !important;
  --footnote-id-color: rgba(240, 240, 240, 0.7) !important;
  --footnote-id-color-no-occurrences: rgba(240, 240, 240, 0.7) !important;
  --footnote-input-background-active: rgba(18, 18, 18, 0.7) !important;
  --graph-node: rgba(240, 240, 240, 0.7) !important;
  --graph-node-focused: rgb(112, 122, 250) !important;
  --graph-node-unresolved: rgba(240, 240, 240, 0.7) !important;
  --graph-text: rgb(240, 240, 240) !important;
  --gray: rgba(240, 240, 240, 0.7) !important;
  --h1-color: rgb(208, 66, 85) !important;
  --h1-font: Rubik !important;
  --h1-size: 2em !important;
  --h2-color: rgb(213, 118, 52) !important;
  --h2-font: Rubik !important;
  --h2-size: 1.75em !important;
  --h3-color: rgb(229, 181, 103) !important;
  --h3-font: Rubik !important;
  --h3-size: 1.5em !important;
  --h4-color: rgb(168, 195, 115) !important;
  --h4-font: Rubik !important;
  --h4-size: 1.25em !important;
  --h5-color: rgb(112, 122, 250) !important;
  --h5-font: Rubik !important;
  --h5-size: 1em !important;
  --h6-color: rgb(147, 134, 200) !important;
  --h6-font: Rubik !important;
  --headerFont: "iA Writer Quattro S" !important;
  --heading-formatting: rgba(240, 240, 240, 0.7) !important;
  --highlight: rgba(18, 18, 18, 0.7) !important;
  --hr-color: rgb(112, 122, 250) !important;
  --icon-color: rgba(240, 240, 240, 0.7) !important;
  --icon-color-active: rgb(112, 122, 250) !important;
  --icon-color-focused: rgb(240, 240, 240) !important;
  --icon-color-hover: rgba(240, 240, 240, 0.7) !important;
  --inline-title-color: rgb(208, 66, 85) !important;
  --inline-title-font: Rubik !important;
  --inline-title-size: 2em !important;
  --input-date-separator: rgba(240, 240, 240, 0.7) !important;
  --input-placeholder-color: rgba(240, 240, 240, 0.7) !important;
  --interactive-accent: rgb(112, 122, 250) !important;
  --interactive-accent-hover: rgba(112, 122, 250, 0.7) !important;
  --interactive-hover: rgb(18, 18, 18, 0.5) !important;
  --interactive-normal: rgb(18, 18, 18) !important;
  --italic-color: rgb(112, 122, 250) !important;
  --italic-colors: rgb(112, 122, 250) !important;
  --light: rgb(25, 25, 25) !important;
  --lightgray: rgb(20, 20, 20) !important;
  --link-color: rgb(112, 122, 250) !important;
  --link-color-hover: rgba(112, 122, 250, 0.7) !important;
  --link-external-color: rgb(112, 122, 250) !important;
  --link-external-color-hover: rgba(112, 122, 250, 0.7) !important;
  --link-unresolved-color: rgb(112, 122, 250) !important;
  --list-marker-color: rgba(240, 240, 240, 0.7) !important;
  --list-marker-color-collapsed: rgb(112, 122, 250) !important;
  --list-marker-color-hover: rgba(240, 240, 240, 0.7) !important;
  --menu-background: rgb(20, 20, 20) !important;
  --menu-border-color: rgb(50, 50, 50) !important;
  --metadata-border-color: rgb(50, 50, 50) !important;
  --metadata-divider-color: rgb(50, 50, 50) !important;
  --metadata-input-background-active: rgba(18, 18, 18, 0.7) !important;
  --metadata-input-font: "iA Writer Quattro S" !important;
  --metadata-input-text-color: rgb(240, 240, 240) !important;
  --metadata-label-background-active: rgba(18, 18, 18, 0.7) !important;
  --metadata-label-font: "iA Writer Quattro S" !important;
  --metadata-label-text-color: rgba(240, 240, 240, 0.7) !important;
  --metadata-label-text-color-hover: rgba(240, 240, 240, 0.7) !important;
  --metadata-property-background-active: rgba(18, 18, 18, 0.7) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(50, 50, 50) !important;
  --modal-background: rgb(25, 25, 25) !important;
  --modal-border-color: rgb(50, 50, 50) !important;
  --nav-collapse-icon-color: rgba(240, 240, 240, 0.7) !important;
  --nav-collapse-icon-color-collapsed: rgba(240, 240, 240, 0.7) !important;
  --nav-heading-color: rgb(240, 240, 240) !important;
  --nav-heading-color-collapsed: rgba(240, 240, 240, 0.7) !important;
  --nav-heading-color-collapsed-hover: rgba(240, 240, 240, 0.7) !important;
  --nav-heading-color-hover: rgb(240, 240, 240) !important;
  --nav-item-background-active: rgba(18, 18, 18, 0.7) !important;
  --nav-item-background-hover: rgba(18, 18, 18, 0.7) !important;
  --nav-item-color: rgba(240, 240, 240, 0.7) !important;
  --nav-item-color-active: rgb(240, 240, 240) !important;
  --nav-item-color-highlighted: rgb(112, 122, 250) !important;
  --nav-item-color-hover: rgb(240, 240, 240) !important;
  --nav-item-color-selected: rgb(240, 240, 240) !important;
  --nav-tag-color: rgba(240, 240, 240, 0.7) !important;
  --nav-tag-color-active: rgba(240, 240, 240, 0.7) !important;
  --nav-tag-color-hover: rgba(240, 240, 240, 0.7) !important;
  --pdf-background: rgb(25, 25, 25) !important;
  --pdf-page-background: rgb(25, 25, 25) !important;
  --pdf-shadow: 0 0 0 1px rgb(50, 50, 50) !important;
  --pdf-sidebar-background: rgb(25, 25, 25) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(50, 50, 50) !important;
  --pill-border-color: rgb(50, 50, 50) !important;
  --pill-border-color-hover: rgb(50, 50, 50) !important;
  --pill-color: rgba(240, 240, 240, 0.7) !important;
  --pill-color-hover: rgb(240, 240, 240) !important;
  --pill-color-remove: rgba(240, 240, 240, 0.7) !important;
  --pill-color-remove-hover: rgb(112, 122, 250) !important;
  --prompt-background: rgb(25, 25, 25) !important;
  --raised-background: color-mix(in srgb, rgb(18, 18, 18) 65%, transparent) linear-gradient(rgb(18, 18, 18), color-mix(in srgb, rgb(18, 18, 18) 65%, transparent)) !important;
  --ribbon-background: rgb(20, 20, 20) !important;
  --ribbon-background-collapsed: rgb(25, 25, 25) !important;
  --scrollbar-active-thumb-bg: rgba(18, 18, 18, 0.7) !important;
  --scrollbar-thumb-bg: rgba(18, 18, 18, 0.5) !important;
  --search-clear-button-color: rgba(240, 240, 240, 0.7) !important;
  --search-icon-color: rgba(240, 240, 240, 0.7) !important;
  --search-result-background: rgb(25, 25, 25) !important;
  --secondary: rgb(112, 122, 250) !important;
  --setting-group-heading-color: rgb(240, 240, 240) !important;
  --setting-items-background: rgb(27, 27, 27) !important;
  --setting-items-border-color: rgb(50, 50, 50) !important;
  --slider-thumb-border-color: rgb(50, 50, 50) !important;
  --slider-track-background: rgb(50, 50, 50) !important;
  --status-bar-background: rgb(20, 20, 20) !important;
  --status-bar-border-color: rgb(50, 50, 50) !important;
  --status-bar-text-color: rgba(240, 240, 240, 0.7) !important;
  --suggestion-background: rgb(25, 25, 25) !important;
  --tab-background-active: rgb(25, 25, 25) !important;
  --tab-container-background: rgb(20, 20, 20) !important;
  --tab-divider-color: rgb(50, 50, 50) !important;
  --tab-outline-color: rgb(50, 50, 50) !important;
  --tab-switcher-background: rgb(20, 20, 20) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(20, 20, 20), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(112, 122, 250) !important;
  --tab-text-color: rgba(240, 240, 240, 0.7) !important;
  --tab-text-color-active: rgba(240, 240, 240, 0.7) !important;
  --tab-text-color-focused: rgba(240, 240, 240, 0.7) !important;
  --tab-text-color-focused-active: rgba(240, 240, 240, 0.7) !important;
  --tab-text-color-focused-active-current: rgb(240, 240, 240) !important;
  --tab-text-color-focused-highlighted: rgb(112, 122, 250) !important;
  --table-add-button-border-color: rgb(50, 50, 50) !important;
  --table-border-color: rgb(50, 50, 50) !important;
  --table-drag-handle-background-active: rgb(112, 122, 250) !important;
  --table-drag-handle-color: rgba(240, 240, 240, 0.7) !important;
  --table-drag-handle-color-active: black !important;
  --table-header-border-color: rgb(50, 50, 50) !important;
  --table-header-color: rgb(240, 240, 240) !important;
  --table-selection-border-color: rgb(112, 122, 250) !important;
  --tag-color: rgb(112, 122, 250) !important;
  --tag-color-hover: rgb(112, 122, 250) !important;
  --tertiary: rgba(112, 122, 250, 0.7) !important;
  --text-accent: rgb(112, 122, 250) !important;
  --text-accent-hover: rgba(112, 122, 250, 0.7) !important;
  --text-faint: rgba(240, 240, 240, 0.7) !important;
  --text-muted: rgba(240, 240, 240, 0.7) !important;
  --text-normal: rgb(240, 240, 240) !important;
  --text-on-accent: black !important;
  --text-selection: rgba(112, 122, 250, 0.1) !important;
  --textHighlight: rgba(18, 18, 18, 0.7) !important;
  --titleFont: "iA Writer Quattro S" !important;
  --titlebar-background: rgb(20, 20, 20) !important;
  --titlebar-background-focused: rgb(18, 18, 18) !important;
  --titlebar-border-color: rgb(50, 50, 50) !important;
  --titlebar-text-color: rgba(240, 240, 240, 0.7) !important;
  --titlebar-text-color-focused: rgb(240, 240, 240) !important;
  --vault-profile-color: rgb(240, 240, 240) !important;
  --vault-profile-color-hover: rgb(240, 240, 240) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(25, 25, 25);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(50, 50, 50);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(20, 20, 20);
  border-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(112, 122, 250);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  border-left-color: rgb(50, 50, 50);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(25, 25, 25);
  color: rgb(240, 240, 240);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(208, 66, 85);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(208, 66, 85) none 0px;
  text-decoration-color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration-color: rgb(112, 122, 250);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration-color: rgb(112, 122, 250);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(208, 66, 85);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(208, 66, 85) none 0px;
  text-decoration-color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 240, 240) none 0px;
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body del {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 240, 240) none 0px;
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(112, 122, 250);
  border-color: rgb(112, 122, 250);
}

html[saved-theme="dark"] body p {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  outline: rgba(240, 240, 240, 0.7) none 0px;
  text-decoration-color: rgba(240, 240, 240, 0.7);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration-color: rgb(112, 122, 250);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration-color: rgb(112, 122, 250);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body dt {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", "iA Writer Quattro S";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body table {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
  width: 662px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgb(240, 240, 240);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
  font-family: "iA Writer Mono S";
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(208, 66, 85);
  border-left-color: rgb(208, 66, 85);
  border-right-color: rgb(208, 66, 85);
  border-top-color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(112, 122, 250);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 10, 10);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 112, 122, 250;
  background-color: rgba(112, 122, 250, 0.1);
  border-bottom-color: rgba(112, 122, 250, 0.25);
  border-left-color: rgba(112, 122, 250, 0.25);
  border-right-color: rgba(112, 122, 250, 0.25);
  border-top-color: rgba(112, 122, 250, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .callout[data-callout="seealso"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgb(240, 240, 240);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 240, 240) none 0px;
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(18, 18, 18, 0.7);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(20, 20, 20, 0.5);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(18, 18, 18, 0.7);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(18, 18, 18, 0.7);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(112, 122, 250);
}

html[saved-theme="dark"] body h1 {
  color: rgb(208, 66, 85);
  font-family: Rubik;
}

html[saved-theme="dark"] body h2 {
  color: rgb(213, 118, 52);
  font-family: Rubik;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(208, 66, 85);
  font-family: Rubik;
}

html[saved-theme="dark"] body h3 {
  color: rgb(229, 181, 103);
  font-family: Rubik;
}

html[saved-theme="dark"] body h4 {
  color: rgb(168, 195, 115);
  font-family: Rubik;
}

html[saved-theme="dark"] body h5 {
  color: rgb(112, 122, 250);
  font-family: Rubik;
}

html[saved-theme="dark"] body h6 {
  color: rgb(147, 134, 200);
  font-family: Rubik;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(240, 240, 240);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
  color: rgba(240, 240, 240, 0.7);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(240, 240, 240, 0.7);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
  color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgba(240, 240, 240, 0.7);
  stroke: rgba(240, 240, 240, 0.7);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
  color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body abbr {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
  font-family: "iA Writer Mono S";
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body sub {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body summary {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body sup {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(112, 122, 250);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: rgb(233, 223, 209) !important;
  --background-modifier-border-hover: rgb(233, 223, 209) !important;
  --background-modifier-form-field: rgb(241, 230, 214) !important;
  --background-modifier-form-field-hover: rgb(241, 230, 214) !important;
  --background-modifier-hover: rgba(241, 230, 214, 0.7) !important;
  --background-primary: rgb(247, 243, 238) !important;
  --background-primary-alt: rgb(250, 238, 225) !important;
  --background-secondary: rgb(238, 231, 221) !important;
  --background-secondary-alt: rgb(22, 22, 22) !important;
  --bases-cards-background: rgb(247, 243, 238) !important;
  --bases-cards-cover-background: rgb(250, 238, 225) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(233, 223, 209) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(233, 223, 209) !important;
  --bases-embed-border-color: rgb(233, 223, 209) !important;
  --bases-group-heading-property-color: rgba(74, 52, 28, 0.9) !important;
  --bases-table-border-color: rgb(233, 223, 209) !important;
  --bases-table-cell-background-active: rgb(247, 243, 238) !important;
  --bases-table-cell-background-disabled: rgb(250, 238, 225) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(233, 179, 92) !important;
  --bases-table-group-background: rgb(250, 238, 225) !important;
  --bases-table-header-background: rgb(247, 243, 238) !important;
  --bases-table-header-background-hover: rgba(241, 230, 214, 0.7) !important;
  --bases-table-header-color: rgba(74, 52, 28, 0.9) !important;
  --bases-table-summary-background: rgb(247, 243, 238) !important;
  --bases-table-summary-background-hover: rgba(241, 230, 214, 0.7) !important;
  --blockquote-border-color: rgb(233, 179, 92) !important;
  --blur-background: color-mix(in srgb, rgb(247, 243, 238) 65%, transparent) linear-gradient(rgb(247, 243, 238), color-mix(in srgb, rgb(247, 243, 238) 65%, transparent)) !important;
  --bodyFont: "iA Writer Quattro S" !important;
  --bold-color: rgb(240, 100, 119) !important;
  --bold-colors: rgb(240, 100, 119) !important;
  --canvas-background: rgb(247, 243, 238) !important;
  --canvas-card-label-color: rgba(74, 52, 28, 0.9) !important;
  --card-background-color: rgb(241, 230, 214) !important;
  --caret-color: rgb(74, 52, 28) !important;
  --checkbox-border-color: rgba(74, 52, 28, 0.9) !important;
  --checkbox-border-color-hover: rgba(74, 52, 28, 0.9) !important;
  --checkbox-color: rgb(233, 179, 92) !important;
  --checkbox-color-hover: rgba(233, 179, 92, 0.7) !important;
  --checkbox-marker-color: rgb(74, 52, 28) !important;
  --checklist-done-color: rgba(74, 52, 28, 0.9) !important;
  --code-background: rgb(250, 238, 225) !important;
  --code-border-color: rgb(233, 223, 209) !important;
  --code-bracket-background: rgba(241, 230, 214, 0.7) !important;
  --code-comment: rgba(74, 52, 28, 0.9) !important;
  --code-normal: rgb(74, 52, 28) !important;
  --code-punctuation: rgba(74, 52, 28, 0.9) !important;
  --codeFont: "iA Writer Mono S" !important;
  --collapse-icon-color: rgba(74, 52, 28, 0.9) !important;
  --collapse-icon-color-collapsed: rgb(233, 179, 92) !important;
  --color-accent: rgb(233, 179, 92) !important;
  --cpt-accent: 233, 179, 92 !important;
  --cpt-aura: 233, 179, 92 !important;
  --cpt-black: 74, 52, 28 !important;
  --cpt-blue: 124, 155, 255 !important;
  --cpt-border: 233, 223, 209 !important;
  --cpt-core: 247, 243, 238 !important;
  --cpt-core-alt: 250, 238, 225 !important;
  --cpt-crust: 241, 230, 214 !important;
  --cpt-crust-alt: 247, 203, 160 !important;
  --cpt-cyan: 89, 202, 206 !important;
  --cpt-green: 154, 230, 92 !important;
  --cpt-mantle: 238, 231, 221 !important;
  --cpt-mantle-alt: 22, 22, 22 !important;
  --cpt-marker-shadow: rgb(233, 179, 92) !important;
  --cpt-orange: 245, 146, 75 !important;
  --cpt-pink: 235, 0, 235 !important;
  --cpt-purple: 144, 120, 241 !important;
  --cpt-red: 240, 100, 119 !important;
  --cpt-text: 74, 52, 28 !important;
  --cpt-white: 240, 240, 240 !important;
  --cpt-yellow: 233, 179, 92 !important;
  --dark: rgb(74, 52, 28) !important;
  --darkgray: rgb(74, 52, 28) !important;
  --divider-color: rgb(233, 223, 209) !important;
  --divider-color-hover: rgb(233, 179, 92) !important;
  --dropdown-background: rgb(238, 231, 221) !important;
  --dropdown-background-hover: rgb(247, 243, 238, 0.7) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(233, 223, 209), inset 0 0 0 1px rgb(233, 223, 209) !important;
  --embed-border-start: 2px solid rgb(233, 179, 92) !important;
  --file-header-background: rgb(247, 243, 238) !important;
  --file-header-background-focused: rgb(247, 243, 238) !important;
  --file-header-font: "iA Writer Quattro S" !important;
  --flair-background: rgb(238, 231, 221) !important;
  --flair-color: rgb(74, 52, 28) !important;
  --font-default: "iA Writer Quattro S" !important;
  --font-default-custom: "iA Writer Quattro S" !important;
  --font-interface: "iA Writer Quattro S" !important;
  --font-mermaid: "iA Writer Quattro S" !important;
  --font-monospace: "iA Writer Mono S" !important;
  --font-monospace-custom: "iA Writer Mono S" !important;
  --font-secondary: "iA Writer Duo S" !important;
  --font-secondary-custom: "iA Writer Duo S" !important;
  --font-text: "iA Writer Quattro S" !important;
  --footnote-divider-color: rgb(233, 223, 209) !important;
  --footnote-id-color: rgba(74, 52, 28, 0.9) !important;
  --footnote-id-color-no-occurrences: rgba(74, 52, 28, 0.9) !important;
  --footnote-input-background-active: rgba(241, 230, 214, 0.7) !important;
  --graph-node: rgba(74, 52, 28, 0.9) !important;
  --graph-node-focused: rgb(233, 179, 92) !important;
  --graph-node-unresolved: rgba(74, 52, 28, 0.9) !important;
  --graph-text: rgb(74, 52, 28) !important;
  --gray: rgba(74, 52, 28, 0.9) !important;
  --h1-color: rgb(240, 100, 119) !important;
  --h1-font: Rubik !important;
  --h1-size: 2em !important;
  --h2-color: rgb(245, 146, 75) !important;
  --h2-font: Rubik !important;
  --h2-size: 1.75em !important;
  --h3-color: rgb(233, 179, 92) !important;
  --h3-font: Rubik !important;
  --h3-size: 1.5em !important;
  --h4-color: rgb(154, 230, 92) !important;
  --h4-font: Rubik !important;
  --h4-size: 1.25em !important;
  --h5-color: rgb(124, 155, 255) !important;
  --h5-font: Rubik !important;
  --h5-size: 1em !important;
  --h6-color: rgb(144, 120, 241) !important;
  --h6-font: Rubik !important;
  --headerFont: "iA Writer Quattro S" !important;
  --heading-formatting: rgba(74, 52, 28, 0.9) !important;
  --highlight: rgba(241, 230, 214, 0.7) !important;
  --hr-color: rgb(233, 179, 92) !important;
  --icon-color: rgba(74, 52, 28, 0.9) !important;
  --icon-color-active: rgb(233, 179, 92) !important;
  --icon-color-focused: rgb(74, 52, 28) !important;
  --icon-color-hover: rgba(74, 52, 28, 0.9) !important;
  --inline-title-color: rgb(240, 100, 119) !important;
  --inline-title-font: Rubik !important;
  --inline-title-size: 2em !important;
  --input-date-separator: rgba(74, 52, 28, 0.9) !important;
  --input-placeholder-color: rgba(74, 52, 28, 0.9) !important;
  --interactive-accent: rgb(233, 179, 92) !important;
  --interactive-accent-hover: rgba(233, 179, 92, 0.7) !important;
  --interactive-hover: rgb(247, 243, 238, 0.7) !important;
  --interactive-normal: rgb(238, 231, 221) !important;
  --italic-color: rgb(124, 155, 255) !important;
  --italic-colors: rgb(124, 155, 255) !important;
  --light: rgb(247, 243, 238) !important;
  --lightgray: rgb(238, 231, 221) !important;
  --link-color: rgb(233, 179, 92) !important;
  --link-color-hover: rgba(233, 179, 92, 0.7) !important;
  --link-external-color: rgb(233, 179, 92) !important;
  --link-external-color-hover: rgba(233, 179, 92, 0.7) !important;
  --link-unresolved-color: rgb(233, 179, 92) !important;
  --list-marker-color: rgba(74, 52, 28, 0.9) !important;
  --list-marker-color-collapsed: rgb(233, 179, 92) !important;
  --list-marker-color-hover: rgba(74, 52, 28, 0.9) !important;
  --menu-background: rgb(238, 231, 221) !important;
  --menu-border-color: rgb(233, 223, 209) !important;
  --metadata-border-color: rgb(233, 223, 209) !important;
  --metadata-divider-color: rgb(233, 223, 209) !important;
  --metadata-input-background-active: rgba(241, 230, 214, 0.7) !important;
  --metadata-input-font: "iA Writer Quattro S" !important;
  --metadata-input-text-color: rgb(74, 52, 28) !important;
  --metadata-label-background-active: rgba(241, 230, 214, 0.7) !important;
  --metadata-label-font: "iA Writer Quattro S" !important;
  --metadata-label-text-color: rgba(74, 52, 28, 0.9) !important;
  --metadata-label-text-color-hover: rgba(74, 52, 28, 0.9) !important;
  --metadata-property-background-active: rgba(241, 230, 214, 0.7) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(233, 223, 209) !important;
  --modal-background: rgb(247, 243, 238) !important;
  --modal-border-color: rgb(233, 223, 209) !important;
  --nav-collapse-icon-color: rgba(74, 52, 28, 0.9) !important;
  --nav-collapse-icon-color-collapsed: rgba(74, 52, 28, 0.9) !important;
  --nav-heading-color: rgb(74, 52, 28) !important;
  --nav-heading-color-collapsed: rgba(74, 52, 28, 0.9) !important;
  --nav-heading-color-collapsed-hover: rgba(74, 52, 28, 0.9) !important;
  --nav-heading-color-hover: rgb(74, 52, 28) !important;
  --nav-item-background-active: rgba(241, 230, 214, 0.7) !important;
  --nav-item-background-hover: rgba(241, 230, 214, 0.7) !important;
  --nav-item-color: rgba(74, 52, 28, 0.9) !important;
  --nav-item-color-active: rgb(74, 52, 28) !important;
  --nav-item-color-highlighted: rgb(233, 179, 92) !important;
  --nav-item-color-hover: rgb(74, 52, 28) !important;
  --nav-item-color-selected: rgb(74, 52, 28) !important;
  --nav-tag-color: rgba(74, 52, 28, 0.9) !important;
  --nav-tag-color-active: rgba(74, 52, 28, 0.9) !important;
  --nav-tag-color-hover: rgba(74, 52, 28, 0.9) !important;
  --pdf-background: rgb(247, 243, 238) !important;
  --pdf-page-background: rgb(247, 243, 238) !important;
  --pdf-sidebar-background: rgb(247, 243, 238) !important;
  --pill-border-color: rgb(233, 223, 209) !important;
  --pill-border-color-hover: rgb(233, 223, 209) !important;
  --pill-color: rgba(74, 52, 28, 0.9) !important;
  --pill-color-hover: rgb(74, 52, 28) !important;
  --pill-color-remove: rgba(74, 52, 28, 0.9) !important;
  --pill-color-remove-hover: rgb(233, 179, 92) !important;
  --prompt-background: rgb(247, 243, 238) !important;
  --raised-background: color-mix(in srgb, rgb(247, 243, 238) 65%, transparent) linear-gradient(rgb(247, 243, 238), color-mix(in srgb, rgb(247, 243, 238) 65%, transparent)) !important;
  --ribbon-background: rgb(238, 231, 221) !important;
  --ribbon-background-collapsed: rgb(247, 243, 238) !important;
  --scrollbar-active-thumb-bg: rgba(241, 230, 214, 0.7) !important;
  --scrollbar-thumb-bg: rgba(241, 230, 214, 0.5) !important;
  --search-clear-button-color: rgba(74, 52, 28, 0.9) !important;
  --search-icon-color: rgba(74, 52, 28, 0.9) !important;
  --search-result-background: rgb(247, 243, 238) !important;
  --secondary: rgb(233, 179, 92) !important;
  --setting-group-heading-color: rgb(74, 52, 28) !important;
  --setting-items-background: rgb(250, 238, 225) !important;
  --setting-items-border-color: rgb(233, 223, 209) !important;
  --slider-thumb-border-color: rgb(233, 223, 209) !important;
  --slider-track-background: rgb(233, 223, 209) !important;
  --status-bar-background: rgb(238, 231, 221) !important;
  --status-bar-border-color: rgb(233, 223, 209) !important;
  --status-bar-text-color: rgba(74, 52, 28, 0.9) !important;
  --suggestion-background: rgb(247, 243, 238) !important;
  --tab-background-active: rgb(247, 243, 238) !important;
  --tab-container-background: rgb(238, 231, 221) !important;
  --tab-divider-color: rgb(233, 223, 209) !important;
  --tab-outline-color: rgb(233, 223, 209) !important;
  --tab-switcher-background: rgb(238, 231, 221) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(238, 231, 221), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(233, 179, 92) !important;
  --tab-text-color: rgba(74, 52, 28, 0.9) !important;
  --tab-text-color-active: rgba(74, 52, 28, 0.9) !important;
  --tab-text-color-focused: rgba(74, 52, 28, 0.9) !important;
  --tab-text-color-focused-active: rgba(74, 52, 28, 0.9) !important;
  --tab-text-color-focused-active-current: rgb(74, 52, 28) !important;
  --tab-text-color-focused-highlighted: rgb(233, 179, 92) !important;
  --table-add-button-border-color: rgb(233, 223, 209) !important;
  --table-border-color: rgb(233, 223, 209) !important;
  --table-drag-handle-background-active: rgb(233, 179, 92) !important;
  --table-drag-handle-color: rgba(74, 52, 28, 0.9) !important;
  --table-drag-handle-color-active: black !important;
  --table-header-border-color: rgb(233, 223, 209) !important;
  --table-header-color: rgb(74, 52, 28) !important;
  --table-selection-border-color: rgb(233, 179, 92) !important;
  --tag-color: rgb(233, 179, 92) !important;
  --tag-color-hover: rgb(233, 179, 92) !important;
  --tertiary: rgba(233, 179, 92, 0.7) !important;
  --text-accent: rgb(233, 179, 92) !important;
  --text-accent-hover: rgba(233, 179, 92, 0.7) !important;
  --text-faint: rgba(74, 52, 28, 0.9) !important;
  --text-muted: rgba(74, 52, 28, 0.9) !important;
  --text-normal: rgb(74, 52, 28) !important;
  --text-on-accent: black !important;
  --text-selection: rgba(233, 179, 92, 0.1) !important;
  --textHighlight: rgba(241, 230, 214, 0.7) !important;
  --titleFont: "iA Writer Quattro S" !important;
  --titlebar-background: rgb(238, 231, 221) !important;
  --titlebar-background-focused: rgb(241, 230, 214) !important;
  --titlebar-border-color: rgb(233, 223, 209) !important;
  --titlebar-text-color: rgba(74, 52, 28, 0.9) !important;
  --titlebar-text-color-focused: rgb(74, 52, 28) !important;
  --vault-profile-color: rgb(74, 52, 28) !important;
  --vault-profile-color-hover: rgb(74, 52, 28) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 231, 221);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(247, 243, 238);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(233, 223, 209);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(247, 243, 238);
  border-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(233, 223, 209);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(233, 179, 92);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 231, 221);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(233, 223, 209);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 231, 221);
  border-left-color: rgb(233, 223, 209);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(247, 243, 238);
  color: rgb(74, 52, 28);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(240, 100, 119);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 100, 119) none 0px;
  text-decoration-color: rgb(240, 100, 119);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(124, 155, 255);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(124, 155, 255) none 0px;
  text-decoration-color: rgb(124, 155, 255);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(124, 155, 255);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(124, 155, 255) none 0px;
  text-decoration-color: rgb(124, 155, 255);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(240, 100, 119);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 100, 119) none 0px;
  text-decoration-color: rgb(240, 100, 119);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(74, 52, 28) none 0px;
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body del {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(74, 52, 28) none 0px;
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(233, 179, 92);
  border-color: rgb(233, 179, 92);
}

html[saved-theme="light"] body p {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  outline: rgba(74, 52, 28, 0.9) none 0px;
  text-decoration-color: rgba(74, 52, 28, 0.9);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(233, 179, 92);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(233, 179, 92) none 0px;
  text-decoration-color: rgb(233, 179, 92);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(233, 179, 92);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(233, 179, 92) none 0px;
  text-decoration-color: rgb(233, 179, 92);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(233, 179, 92);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(233, 179, 92) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body dt {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ol > li {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ul > li {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "??", "iA Writer Quattro S";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body table {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
  width: 662px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgb(74, 52, 28);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
  font-family: "iA Writer Mono S";
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body figcaption {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(240, 100, 119);
  border-left-color: rgb(240, 100, 119);
  border-right-color: rgb(240, 100, 119);
  border-top-color: rgb(240, 100, 119);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(233, 179, 92);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 52, 28);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 124, 155, 255;
  background-color: rgba(124, 155, 255, 0.1);
  border-bottom-color: rgba(124, 155, 255, 0.25);
  border-left-color: rgba(124, 155, 255, 0.25);
  border-right-color: rgba(124, 155, 255, 0.25);
  border-top-color: rgba(124, 155, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .callout[data-callout="seealso"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgb(241, 230, 214);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgb(74, 52, 28);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(238, 231, 221);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(74, 52, 28) none 0px;
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(241, 230, 214, 0.7);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(241, 230, 214);
  border-bottom-color: rgba(238, 231, 221, 0.5);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(241, 230, 214, 0.7);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(241, 230, 214, 0.7);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(233, 179, 92);
}

html[saved-theme="light"] body h1 {
  color: rgb(240, 100, 119);
  font-family: Rubik;
}

html[saved-theme="light"] body h2 {
  color: rgb(245, 146, 75);
  font-family: Rubik;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(240, 100, 119);
  font-family: Rubik;
}

html[saved-theme="light"] body h3 {
  color: rgb(233, 179, 92);
  font-family: Rubik;
}

html[saved-theme="light"] body h4 {
  color: rgb(154, 230, 92);
  font-family: Rubik;
}

html[saved-theme="light"] body h5 {
  color: rgb(124, 155, 255);
  font-family: Rubik;
}

html[saved-theme="light"] body h6 {
  color: rgb(144, 120, 241);
  font-family: Rubik;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(74, 52, 28);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
  color: rgba(74, 52, 28, 0.9);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(74, 52, 28, 0.9);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
  color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgba(74, 52, 28, 0.9);
  stroke: rgba(74, 52, 28, 0.9);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
  color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(238, 231, 221);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body abbr {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body kbd {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
  font-family: "iA Writer Mono S";
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body sub {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body summary {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body sup {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(233, 179, 92);
}`,
  },
};
