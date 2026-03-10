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
  --bodyFont: '??', '??', "iA Writer Quattro S" !important;
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
  --file-header-font: '??', '??', '??', "iA Writer Quattro S" !important;
  --flair-background: rgb(18, 18, 18) !important;
  --flair-color: rgb(240, 240, 240) !important;
  --font-default: "iA Writer Quattro S" !important;
  --font-default-custom: "iA Writer Quattro S" !important;
  --font-interface: '??', '??', '??', "iA Writer Quattro S" !important;
  --font-mermaid: '??', '??', "iA Writer Quattro S" !important;
  --font-monospace: "iA Writer Mono S" !important;
  --font-monospace-custom: "iA Writer Mono S" !important;
  --font-secondary: "iA Writer Duo S" !important;
  --font-secondary-custom: "iA Writer Duo S" !important;
  --font-text: '??', '??', "iA Writer Quattro S" !important;
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
  --headerFont: '??', '??', "iA Writer Quattro S" !important;
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
  --metadata-input-font: '??', '??', '??', "iA Writer Quattro S" !important;
  --metadata-input-text-color: rgb(240, 240, 240) !important;
  --metadata-label-background-active: rgba(18, 18, 18, 0.7) !important;
  --metadata-label-font: '??', '??', '??', "iA Writer Quattro S" !important;
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
  --titleFont: '??', '??', "iA Writer Quattro S" !important;
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
  text-decoration: rgb(208, 66, 85);
  text-decoration-color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration: rgb(112, 122, 250);
  text-decoration-color: rgb(112, 122, 250);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration: rgb(112, 122, 250);
  text-decoration-color: rgb(112, 122, 250);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(208, 66, 85);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(208, 66, 85) none 0px;
  text-decoration: rgb(208, 66, 85);
  text-decoration-color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 240, 240) none 0px;
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body del {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 240, 240) none 0px;
  text-decoration: line-through rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body p {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  outline: rgba(240, 240, 240, 0.7) none 0px;
  text-decoration: rgba(240, 240, 240, 0.7);
  text-decoration-color: rgba(240, 240, 240, 0.7);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration: underline rgb(112, 122, 250);
  text-decoration-color: rgb(112, 122, 250);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration: underline rgb(112, 122, 250);
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
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(240, 240, 240, 0.7);
  text-decoration: rgba(240, 240, 240, 0.7);
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
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
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
  border-left-color: rgb(112, 122, 250);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(240, 240, 240, 0.7);
  text-decoration: line-through rgba(240, 240, 240, 0.7);
  text-decoration-color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 112, 122, 250;
  background-color: rgba(112, 122, 250, 0.1);
  border-bottom-color: rgba(112, 122, 250, 0.25);
  border-left-color: rgba(112, 122, 250, 0.25);
  border-right-color: rgba(112, 122, 250, 0.25);
  border-top-color: rgba(112, 122, 250, 0.25);
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
  text-decoration: rgb(240, 240, 240);
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
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
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
  text-decoration: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  text-decoration: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  text-decoration: rgba(240, 240, 240, 0.7);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
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
  text-decoration: rgba(240, 240, 240, 0.7);
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
  text-decoration: rgba(240, 240, 240, 0.7);
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
  text-decoration: rgba(240, 240, 240, 0.7);
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
  text-decoration: underline dotted rgb(240, 240, 240);
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
  --bodyFont: '??', '??', "iA Writer Quattro S" !important;
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
  --file-header-font: '??', '??', '??', "iA Writer Quattro S" !important;
  --flair-background: rgb(238, 231, 221) !important;
  --flair-color: rgb(74, 52, 28) !important;
  --font-default: "iA Writer Quattro S" !important;
  --font-default-custom: "iA Writer Quattro S" !important;
  --font-interface: '??', '??', '??', "iA Writer Quattro S" !important;
  --font-mermaid: '??', '??', "iA Writer Quattro S" !important;
  --font-monospace: "iA Writer Mono S" !important;
  --font-monospace-custom: "iA Writer Mono S" !important;
  --font-secondary: "iA Writer Duo S" !important;
  --font-secondary-custom: "iA Writer Duo S" !important;
  --font-text: '??', '??', "iA Writer Quattro S" !important;
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
  --headerFont: '??', '??', "iA Writer Quattro S" !important;
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
  --metadata-input-font: '??', '??', '??', "iA Writer Quattro S" !important;
  --metadata-input-text-color: rgb(74, 52, 28) !important;
  --metadata-label-background-active: rgba(241, 230, 214, 0.7) !important;
  --metadata-label-font: '??', '??', '??', "iA Writer Quattro S" !important;
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
  --titleFont: '??', '??', "iA Writer Quattro S" !important;
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
  text-decoration: rgb(240, 100, 119);
  text-decoration-color: rgb(240, 100, 119);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(124, 155, 255);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(124, 155, 255) none 0px;
  text-decoration: rgb(124, 155, 255);
  text-decoration-color: rgb(124, 155, 255);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(124, 155, 255);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(124, 155, 255) none 0px;
  text-decoration: rgb(124, 155, 255);
  text-decoration-color: rgb(124, 155, 255);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(240, 100, 119);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 100, 119) none 0px;
  text-decoration: rgb(240, 100, 119);
  text-decoration-color: rgb(240, 100, 119);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(74, 52, 28) none 0px;
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body del {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(74, 52, 28) none 0px;
  text-decoration: line-through rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body p {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  outline: rgba(74, 52, 28, 0.9) none 0px;
  text-decoration: rgba(74, 52, 28, 0.9);
  text-decoration-color: rgba(74, 52, 28, 0.9);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(233, 179, 92);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(233, 179, 92) none 0px;
  text-decoration: underline rgb(233, 179, 92);
  text-decoration-color: rgb(233, 179, 92);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(233, 179, 92);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(233, 179, 92) none 0px;
  text-decoration: underline rgb(233, 179, 92);
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
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ul > li {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(74, 52, 28, 0.9);
  text-decoration: rgba(74, 52, 28, 0.9);
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
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
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
  border-left-color: rgb(233, 179, 92);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "iA Writer Quattro S";
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(74, 52, 28, 0.9);
  text-decoration: line-through rgba(74, 52, 28, 0.9);
  text-decoration-color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 124, 155, 255;
  background-color: rgba(124, 155, 255, 0.1);
  border-bottom-color: rgba(124, 155, 255, 0.25);
  border-left-color: rgba(124, 155, 255, 0.25);
  border-right-color: rgba(124, 155, 255, 0.25);
  border-top-color: rgba(124, 155, 255, 0.25);
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
  text-decoration: rgb(74, 52, 28);
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
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
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
  text-decoration: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  text-decoration: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  text-decoration: rgba(74, 52, 28, 0.9);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(247, 203, 160);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
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
  text-decoration: rgba(74, 52, 28, 0.9);
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
  text-decoration: rgba(74, 52, 28, 0.9);
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
  text-decoration: rgba(74, 52, 28, 0.9);
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
  text-decoration: underline dotted rgb(74, 52, 28);
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
}`,
  },
};
