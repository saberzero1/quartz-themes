import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "colored-candy",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-l-closer: min(66%, 40%);
  --accent-l-readable: max(66%, 50%);
  --accent-minus-120: 138;
  --accent-minus-60: 198;
  --accent-plus-120: 378;
  --accent-plus-60: 318;
  --accent-s-pastel: min(88%, 50%);
  --background-modifier-border: rgb(34, 29, 48);
  --background-modifier-border-hover: rgba(41, 34, 57, 0);
  --background-modifier-form-field: rgb(41, 34, 57);
  --background-modifier-form-field-hover: rgb(41, 34, 57);
  --background-modifier-hover: rgba(90, 71, 133, 0.5);
  --background-primary: rgb(55, 41, 86);
  --background-primary-alt: rgb(59, 45, 93);
  --background-secondary: rgb(66, 50, 103);
  --background-secondary-alt: rgb(70, 53, 110);
  --bases-cards-background: rgb(55, 41, 86);
  --bases-cards-cover-background: rgb(59, 45, 93);
  --bases-cards-radius: 20px;
  --bases-cards-shadow: 0 0 0 1px rgb(34, 29, 48);
  --bases-cards-shadow-hover: 0 0 0 1px rgba(41, 34, 57, 0);
  --bases-embed-border-color: rgb(34, 29, 48);
  --bases-embed-border-radius: 20px;
  --bases-group-heading-property-color: rgb(169, 161, 186);
  --bases-table-border-color: rgb(169, 161, 186);
  --bases-table-cell-background-active: rgb(55, 41, 86);
  --bases-table-cell-background-disabled: rgb(59, 45, 93);
  --bases-table-cell-background-selected: hsla(198, 88%, min(66%, 40%), 0.2);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(318, min(88%, 50%), min(66%, 40%));
  --bases-table-container-border-radius: 20px;
  --bases-table-group-background: rgb(59, 45, 93);
  --bases-table-header-background: rgb(55, 41, 86);
  --bases-table-header-background-hover: rgba(90, 71, 133, 0.5);
  --bases-table-header-color: rgb(169, 161, 186);
  --bases-table-summary-background: rgb(55, 41, 86);
  --bases-table-summary-background-hover: rgba(90, 71, 133, 0.5);
  --bg-l-modifier: 0%;
  --bg-l-modifier-inverted: 0%;
  --bg-s-modifier: 0%;
  --blockquote-border-color: hsl(318, min(88%, 50%), min(66%, 40%));
  --blur-background: color-mix(in srgb, rgb(41, 34, 57) 65%, transparent) linear-gradient(rgb(41, 34, 57), color-mix(in srgb, rgb(41, 34, 57) 65%, transparent));
  --button-radius: 20px;
  --callout-radius: 20px;
  --canvas-background: rgb(55, 41, 86);
  --canvas-card-label-color: rgb(120, 105, 155);
  --canvas-controls-radius: 20px;
  --caret-color: rgb(217, 217, 217);
  --checkbox-border-color: rgb(120, 105, 155);
  --checkbox-border-color-hover: rgb(169, 161, 186);
  --checkbox-color: hsl(318, min(88%, 50%), min(66%, 40%));
  --checkbox-color-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(min(66%, 40%)*1.15));
  --checkbox-marker-color: rgb(55, 41, 86);
  --checkbox-radius: 20px;
  --checkbox-size: 20px;
  --checklist-done-color: rgb(169, 161, 186);
  --clickable-icon-radius: 20px;
  --code-background: rgb(59, 45, 93);
  --code-border-color: rgb(34, 29, 48);
  --code-bracket-background: rgba(90, 71, 133, 0.5);
  --code-comment: rgb(120, 105, 155);
  --code-normal: rgb(217, 217, 217);
  --code-punctuation: rgb(169, 161, 186);
  --code-radius: 20px;
  --collapse-icon-color: rgb(120, 105, 155);
  --collapse-icon-color-collapsed: hsl(198, 88%, max(66%, 50%));
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(34, 29, 48);
  --divider-color-hover: hsl(198, 88%, max(66%, 50%));
  --dropdown-background: rgb(41, 34, 57);
  --dropdown-background-hover: rgb(34, 29, 48);
  --embed-block-shadow-hover: 0 0 0 1px rgb(34, 29, 48), inset 0 0 0 1px rgb(34, 29, 48);
  --embed-border-start: 2px solid hsl(318, min(88%, 50%), min(66%, 40%));
  --file-header-background: rgb(55, 41, 86);
  --file-header-background-focused: rgb(55, 41, 86);
  --flair-background: rgb(41, 34, 57);
  --flair-color: rgb(217, 217, 217);
  --footnote-divider-color: rgb(34, 29, 48);
  --footnote-id-color: rgb(169, 161, 186);
  --footnote-id-color-no-occurrences: rgb(120, 105, 155);
  --footnote-input-background-active: rgba(90, 71, 133, 0.5);
  --footnote-line-height: 1.75em;
  --footnote-radius: 20px;
  --graph-node: rgb(169, 161, 186);
  --graph-node-focused: hsl(198, 88%, max(66%, 50%));
  --graph-node-unresolved: rgb(120, 105, 155);
  --graph-text: rgb(217, 217, 217);
  --gray: var(--text-muted);
  --h5-line-height: 1.75em;
  --h6-line-height: 1.75em;
  --heading-formatting: rgb(120, 105, 155);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(34, 29, 48);
  --icon-color: rgb(169, 161, 186);
  --icon-color-active: hsl(198, 88%, max(66%, 50%));
  --icon-color-focused: rgb(217, 217, 217);
  --icon-color-hover: rgb(169, 161, 186);
  --input-date-separator: rgb(120, 105, 155);
  --input-placeholder-color: rgb(120, 105, 155);
  --input-radius: 20px;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: hsl(318, min(88%, 50%), min(66%, 40%));
  --interactive-accent-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(min(66%, 40%)*1.15));
  --interactive-hover: rgb(34, 29, 48);
  --interactive-normal: rgb(41, 34, 57);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.75em;
  --line-height-tight: 1.5em;
  --link-color: hsl(198, 88%, max(66%, 50%));
  --link-color-hover: hsl(193, 92.4%, calc(max(66%, 50%)*1.29));
  --link-external-color: hsl(198, 88%, max(66%, 50%));
  --link-external-color-hover: hsl(193, 92.4%, calc(max(66%, 50%)*1.29));
  --link-unresolved-color: hsl(198, 88%, max(66%, 50%));
  --list-marker-color: rgb(120, 105, 155);
  --list-marker-color-collapsed: hsl(198, 88%, max(66%, 50%));
  --list-marker-color-hover: rgb(169, 161, 186);
  --menu-background: rgb(66, 50, 103);
  --menu-border-color: rgba(41, 34, 57, 0);
  --menu-radius: 20px;
  --metadata-border-color: rgb(34, 29, 48);
  --metadata-divider-color: rgb(34, 29, 48);
  --metadata-input-background-active: rgba(90, 71, 133, 0.5);
  --metadata-input-text-color: rgb(217, 217, 217);
  --metadata-label-background-active: rgba(90, 71, 133, 0.5);
  --metadata-label-text-color: rgb(169, 161, 186);
  --metadata-label-text-color-hover: rgb(169, 161, 186);
  --metadata-property-background-active: rgba(90, 71, 133, 0.5);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(41, 34, 57, 0);
  --modal-background: rgb(55, 41, 86);
  --modal-border-color: rgb(34, 29, 48);
  --modal-radius: 20px;
  --nav-collapse-icon-color: rgb(120, 105, 155);
  --nav-collapse-icon-color-collapsed: rgb(120, 105, 155);
  --nav-heading-color: rgb(217, 217, 217);
  --nav-heading-color-collapsed: rgb(120, 105, 155);
  --nav-heading-color-collapsed-hover: rgb(169, 161, 186);
  --nav-heading-color-hover: rgb(217, 217, 217);
  --nav-item-background-active: rgba(90, 71, 133, 0.5);
  --nav-item-background-hover: rgba(90, 71, 133, 0.5);
  --nav-item-background-selected: hsla(198, 88%, min(66%, 40%), 0.17);
  --nav-item-border-color: rgb(34, 29, 48);
  --nav-item-color: rgb(169, 161, 186);
  --nav-item-color-active: rgb(217, 217, 217);
  --nav-item-color-highlighted: hsl(198, 88%, max(66%, 50%));
  --nav-item-color-hover: rgb(217, 217, 217);
  --nav-item-color-selected: rgb(217, 217, 217);
  --nav-item-radius: 20px;
  --nav-tag-color: rgb(120, 105, 155);
  --nav-tag-color-active: rgb(169, 161, 186);
  --nav-tag-color-hover: rgb(169, 161, 186);
  --nav-tag-radius: 20px;
  --pdf-background: rgb(55, 41, 86);
  --pdf-page-background: rgb(55, 41, 86);
  --pdf-shadow: none;
  --pdf-sidebar-background: rgb(55, 41, 86);
  --pdf-thumbnail-shadow: none;
  --pill-border-color: rgb(34, 29, 48);
  --pill-border-color-hover: rgba(41, 34, 57, 0);
  --pill-color: rgb(169, 161, 186);
  --pill-color-hover: rgb(217, 217, 217);
  --pill-color-remove: rgb(120, 105, 155);
  --pill-color-remove-hover: hsl(198, 88%, max(66%, 50%));
  --prompt-background: rgb(55, 41, 86);
  --radius-l: 20px;
  --radius-m: 20px;
  --radius-s: 20px;
  --radius-xl: 20px;
  --raised-background: color-mix(in srgb, rgb(41, 34, 57) 65%, transparent) linear-gradient(rgb(41, 34, 57), color-mix(in srgb, rgb(41, 34, 57) 65%, transparent));
  --ribbon-background: rgb(66, 50, 103);
  --ribbon-background-collapsed: rgb(55, 41, 86);
  --scrollbar-radius: 20px;
  --search-clear-button-color: rgb(169, 161, 186);
  --search-icon-color: rgb(169, 161, 186);
  --search-result-background: rgb(55, 41, 86);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(217, 217, 217);
  --setting-items-background: rgb(59, 45, 93);
  --setting-items-border-color: rgb(34, 29, 48);
  --setting-items-radius: 20px;
  --sidebar-left-border-color: rgb(34, 29, 48);
  --size-1-1: 1px;
  --size-1-2: 2px;
  --size-1-3: 3px;
  --size-16-16: 256px;
  --size-16-8: 128px;
  --slider-thumb-border-color: rgba(41, 34, 57, 0);
  --slider-thumb-radius: 20px;
  --slider-track-background: rgb(34, 29, 48);
  --status-bar-background: rgb(66, 50, 103);
  --status-bar-border-color: rgb(34, 29, 48);
  --status-bar-radius: 20px 0 0 0;
  --status-bar-text-color: rgb(169, 161, 186);
  --suggestion-background: rgb(55, 41, 86);
  --swatch-shadow: none;
  --tab-background-active: rgb(55, 41, 86);
  --tab-container-background: rgb(66, 50, 103);
  --tab-divider-color: rgba(41, 34, 57, 0);
  --tab-outline-color: rgb(34, 29, 48);
  --tab-radius: 20px;
  --tab-radius-active: 20px;
  --tab-stacked-shadow: none;
  --tab-switcher-background: rgb(66, 50, 103);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(66, 50, 103), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-text-color: rgb(120, 105, 155);
  --tab-text-color-active: rgb(169, 161, 186);
  --tab-text-color-focused: rgb(169, 161, 186);
  --tab-text-color-focused-active: rgb(169, 161, 186);
  --tab-text-color-focused-active-current: rgb(217, 217, 217);
  --tab-text-color-focused-highlighted: hsl(198, 88%, max(66%, 50%));
  --table-add-button-border-color: rgb(169, 161, 186);
  --table-border-color: rgb(169, 161, 186);
  --table-drag-handle-background-active: hsl(198, 88%, max(66%, 50%));
  --table-drag-handle-color: rgb(120, 105, 155);
  --table-header-border-color: rgb(169, 161, 186);
  --table-header-color: rgb(217, 217, 217);
  --table-line-height: 1.5em;
  --table-selection: hsla(198, 88%, min(66%, 40%), 0.2);
  --table-selection-border-color: hsl(198, 88%, max(66%, 50%));
  --tag-background: hsla(198, 88%, min(66%, 40%), 0.25);
  --tag-background-hover: hsla(198, 88%, min(66%, 40%), 0.35);
  --tag-color: hsl(198, 88%, max(66%, 50%));
  --tag-color-hover: hsl(198, 88%, max(66%, 50%));
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(198, 88%, max(66%, 50%));
  --text-accent-hover: hsl(193, 92.4%, calc(max(66%, 50%)*1.29));
  --text-faint: rgb(120, 105, 155);
  --text-highlight-bg: hsla(318, min(88%, 50%), min(66%, 40%), 0.6);
  --text-muted: rgb(169, 161, 186);
  --text-normal: rgb(217, 217, 217);
  --text-selection: hsla(198, 88%, min(66%, 40%), 0.25);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(66, 50, 103);
  --titlebar-background-focused: rgb(70, 53, 110);
  --titlebar-border-color: rgb(34, 29, 48);
  --titlebar-text-color: rgb(169, 161, 186);
  --titlebar-text-color-focused: rgb(217, 217, 217);
  --toggle-radius: 20px;
  --toggle-thumb-radius: 20px;
  --vault-profile-color: rgb(217, 217, 217);
  --vault-profile-color-hover: rgb(217, 217, 217);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(66, 50, 103);
  color: rgb(217, 217, 217);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(55, 41, 86);
  color: rgb(217, 217, 217);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(66, 50, 103);
  color: rgb(217, 217, 217);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(34, 29, 48);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(66, 50, 103);
  border-left-color: rgb(34, 29, 48);
  color: rgb(217, 217, 217);
}

body div#quartz-root {
  background-color: rgb(55, 41, 86);
  color: rgb(217, 217, 217);
}`,
    typography: `body .page article p > b, b {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body .page article p > em, em {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body .page article p > i, i {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body .page article p > strong, strong {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body .text-highlight {
  background-color: rgba(153, 51, 122, 0.6);
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body del {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: line-through rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body p {
  color: rgb(169, 161, 186);
  outline: rgb(169, 161, 186) none 0px;
  text-decoration: rgb(169, 161, 186);
  text-decoration-color: rgb(169, 161, 186);
}`,
    links: `body a.external, footer a {
  color: rgb(92, 199, 245);
  outline: rgb(92, 199, 245) none 0px;
  text-decoration: underline rgb(92, 199, 245);
  text-decoration-color: rgb(92, 199, 245);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(92, 199, 245);
  outline: rgb(92, 199, 245) none 0px;
  text-decoration: underline rgb(92, 199, 245);
  text-decoration-color: rgb(92, 199, 245);
}

body a.internal.broken {
  color: rgb(92, 199, 245);
  outline: rgb(92, 199, 245) none 0px;
}`,
    lists: `body dd {
  color: rgb(217, 217, 217);
}

body dt {
  color: rgb(217, 217, 217);
}

body ol > li {
  color: rgb(217, 217, 217);
}

body ol.overflow {
  background-color: rgb(55, 41, 86);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body ul > li {
  color: rgb(217, 217, 217);
}

body ul.overflow {
  background-color: rgb(55, 41, 86);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(120, 105, 155);
  text-decoration: rgb(120, 105, 155);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body table {
  color: rgb(217, 217, 217);
}

body td {
  border-bottom-color: rgb(169, 161, 186);
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  color: rgb(217, 217, 217);
}

body th {
  border-bottom-color: rgb(169, 161, 186);
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  color: rgb(217, 217, 217);
}`,
    code: `body code {
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(34, 29, 48);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(34, 29, 48);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

body pre > code, pre:has(> code) {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(34, 29, 48);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body pre:has(> code) {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(34, 29, 48);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    images: `body audio {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body figcaption {
  color: rgb(217, 217, 217);
}

body figure {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body img {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body video {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    embeds: `body .file-embed {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(169, 161, 186);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .footnotes {
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .transclude {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(153, 51, 122);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body .transclude-inner {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(153, 51, 122);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(169, 161, 186);
  text-decoration: line-through rgb(169, 161, 186);
  text-decoration-color: rgb(169, 161, 186);
}

body input[type=checkbox] {
  border-bottom-color: rgb(120, 105, 155);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(120, 105, 155);
  border-right-color: rgb(120, 105, 155);
  border-top-color: rgb(120, 105, 155);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-left: -30px;
  width: 20px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='*'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='-'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='/'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='>'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='?'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='I'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='S'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='b'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='c'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='d'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='f'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='i'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='k'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='l'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='p'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='u'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='w'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(41, 34, 57);
  border-bottom-color: rgb(34, 29, 48);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

body .search > .search-container > .search-space {
  background-color: rgb(55, 41, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > * {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 217, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(217, 217, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(90, 71, 133, 0.5);
  color: rgb(217, 217, 217);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(66, 50, 103);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(90, 71, 133, 0.5);
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(90, 71, 133, 0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(12, 138, 192, 0.25);
}

body a.internal.tag-link::before {
  color: rgb(92, 199, 245);
}

body h1 {
  color: rgb(217, 217, 217);
}

body h2 {
  color: rgb(217, 217, 217);
}

body h2.page-title, h2.page-title a {
  color: rgb(217, 217, 217);
}

body h3 {
  color: rgb(217, 217, 217);
}

body h4 {
  color: rgb(217, 217, 217);
}

body h5 {
  color: rgb(217, 217, 217);
}

body h6 {
  color: rgb(217, 217, 217);
}

body hr {
  border-bottom-color: rgb(34, 29, 48);
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body ::-webkit-scrollbar {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
}

body ::-webkit-scrollbar-corner {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
}

body ::-webkit-scrollbar-track {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(90, 71, 133, 0.5);
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 161, 186);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(169, 161, 186);
}`,
    footer: `body footer {
  background-color: rgb(66, 50, 103);
  border-bottom-color: rgb(34, 29, 48);
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  color: rgb(169, 161, 186);
}

body footer ul li a {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(217, 217, 217);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(169, 161, 186);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body li.section-li > .section .meta {
  color: rgb(169, 161, 186);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}

body ul.section-ul {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(169, 161, 186);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(169, 161, 186);
}

body .darkmode svg {
  color: rgb(169, 161, 186);
  stroke: rgb(169, 161, 186);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(169, 161, 186);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(169, 161, 186);
}

body .breadcrumb-element p {
  color: rgb(120, 105, 155);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .metadata {
  border-bottom-color: rgb(34, 29, 48);
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  color: rgb(169, 161, 186);
}

body .metadata-properties {
  border-bottom-color: rgb(169, 161, 186);
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  color: rgb(169, 161, 186);
}

body .navigation-progress {
  background-color: rgb(66, 50, 103);
}

body .page-header h2.page-title {
  color: rgb(217, 217, 217);
}

body abbr {
  color: rgb(217, 217, 217);
  text-decoration: underline dotted rgb(217, 217, 217);
}

body details {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body input[type=text] {
  border-bottom-color: rgb(169, 161, 186);
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  color: rgb(169, 161, 186);
}

body kbd {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

body progress {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body sub {
  color: rgb(217, 217, 217);
}

body summary {
  color: rgb(217, 217, 217);
}

body sup {
  color: rgb(217, 217, 217);
}`,
  },
  light: {
    base: `:root:root {
  --accent-l-closer: max(66%, 60%);
  --accent-l-readable: min(66%, 35%);
  --accent-minus-120: 138;
  --accent-minus-60: 198;
  --accent-plus-120: 378;
  --accent-plus-60: 318;
  --accent-s-pastel: min(88%, 50%);
  --background-modifier-border: rgb(227, 223, 236);
  --background-modifier-border-hover: rgba(213, 207, 226, 0);
  --background-modifier-form-field: rgb(217, 209, 235);
  --background-modifier-form-field-hover: rgb(217, 209, 235);
  --background-modifier-hover: rgba(110, 83, 172, 0.5);
  --background-primary: rgb(182, 169, 214);
  --background-primary-alt: rgb(168, 152, 205);
  --background-secondary: rgb(153, 135, 197);
  --background-secondary-alt: rgb(139, 117, 189);
  --bases-cards-background: rgb(182, 169, 214);
  --bases-cards-cover-background: rgb(168, 152, 205);
  --bases-cards-radius: 20px;
  --bases-cards-shadow: 0 0 0 1px rgb(227, 223, 236);
  --bases-cards-shadow-hover: 0 0 0 1px rgba(213, 207, 226, 0);
  --bases-embed-border-color: rgb(227, 223, 236);
  --bases-embed-border-radius: 20px;
  --bases-group-heading-property-color: rgb(79, 72, 97);
  --bases-table-border-color: rgb(79, 72, 97);
  --bases-table-cell-background-active: rgb(182, 169, 214);
  --bases-table-cell-background-disabled: rgb(168, 152, 205);
  --bases-table-cell-background-selected: hsla(198, 88%, max(66%, 60%), 0.2);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(318, min(88%, 50%), max(66%, 60%));
  --bases-table-container-border-radius: 20px;
  --bases-table-group-background: rgb(168, 152, 205);
  --bases-table-header-background: rgb(182, 169, 214);
  --bases-table-header-background-hover: rgba(110, 83, 172, 0.5);
  --bases-table-header-color: rgb(79, 72, 97);
  --bases-table-summary-background: rgb(182, 169, 214);
  --bases-table-summary-background-hover: rgba(110, 83, 172, 0.5);
  --bg-l-modifier: 0%;
  --bg-l-modifier-inverted: 0%;
  --bg-s-modifier: 0%;
  --blockquote-border-color: hsl(318, min(88%, 50%), max(66%, 60%));
  --blur-background: color-mix(in srgb, rgb(182, 169, 214) 65%, transparent) linear-gradient(rgb(182, 169, 214), color-mix(in srgb, rgb(182, 169, 214) 65%, transparent));
  --button-radius: 20px;
  --callout-radius: 20px;
  --canvas-background: rgb(182, 169, 214);
  --canvas-card-label-color: rgb(110, 96, 144);
  --canvas-controls-radius: 20px;
  --caret-color: rgb(33, 33, 33);
  --checkbox-border-color: rgb(110, 96, 144);
  --checkbox-border-color-hover: rgb(79, 72, 97);
  --checkbox-color: hsl(318, min(88%, 50%), max(66%, 60%));
  --checkbox-color-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(max(66%, 60%)*1.15));
  --checkbox-marker-color: rgb(182, 169, 214);
  --checkbox-radius: 20px;
  --checkbox-size: 20px;
  --checklist-done-color: rgb(79, 72, 97);
  --clickable-icon-radius: 20px;
  --code-background: rgb(168, 152, 205);
  --code-border-color: rgb(227, 223, 236);
  --code-bracket-background: rgba(110, 83, 172, 0.5);
  --code-comment: rgb(110, 96, 144);
  --code-normal: rgb(33, 33, 33);
  --code-punctuation: rgb(79, 72, 97);
  --code-radius: 20px;
  --collapse-icon-color: rgb(110, 96, 144);
  --collapse-icon-color-collapsed: hsl(198, 88%, min(66%, 35%));
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(227, 223, 236);
  --divider-color-hover: hsl(198, 88%, min(66%, 35%));
  --dropdown-background: rgb(217, 209, 235);
  --dropdown-background-hover: rgb(225, 219, 240);
  --embed-block-shadow-hover: 0 0 0 1px rgb(227, 223, 236), inset 0 0 0 1px rgb(227, 223, 236);
  --embed-border-start: 2px solid hsl(318, min(88%, 50%), max(66%, 60%));
  --file-header-background: rgb(182, 169, 214);
  --file-header-background-focused: rgb(182, 169, 214);
  --flair-background: rgb(217, 209, 235);
  --flair-color: rgb(33, 33, 33);
  --footnote-divider-color: rgb(227, 223, 236);
  --footnote-id-color: rgb(79, 72, 97);
  --footnote-id-color-no-occurrences: rgb(110, 96, 144);
  --footnote-input-background-active: rgba(110, 83, 172, 0.5);
  --footnote-line-height: 1.75em;
  --footnote-radius: 20px;
  --graph-node: rgb(79, 72, 97);
  --graph-node-focused: hsl(198, 88%, min(66%, 35%));
  --graph-node-unresolved: rgb(110, 96, 144);
  --graph-text: rgb(33, 33, 33);
  --gray: var(--text-muted);
  --h5-line-height: 1.75em;
  --h6-line-height: 1.75em;
  --heading-formatting: rgb(110, 96, 144);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(227, 223, 236);
  --icon-color: rgb(79, 72, 97);
  --icon-color-active: hsl(198, 88%, min(66%, 35%));
  --icon-color-focused: rgb(33, 33, 33);
  --icon-color-hover: rgb(79, 72, 97);
  --input-date-separator: rgb(110, 96, 144);
  --input-placeholder-color: rgb(110, 96, 144);
  --input-radius: 20px;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: hsl(318, min(88%, 50%), max(66%, 60%));
  --interactive-accent-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(max(66%, 60%)*1.15));
  --interactive-hover: rgb(225, 219, 240);
  --interactive-normal: rgb(217, 209, 235);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.75em;
  --line-height-tight: 1.5em;
  --link-color: hsl(198, 88%, min(66%, 35%));
  --link-color-hover: hsl(195, 89.76%, calc(min(66%, 35%)*1.15));
  --link-external-color: hsl(198, 88%, min(66%, 35%));
  --link-external-color-hover: hsl(195, 89.76%, calc(min(66%, 35%)*1.15));
  --link-unresolved-color: hsl(198, 88%, min(66%, 35%));
  --list-marker-color: rgb(110, 96, 144);
  --list-marker-color-collapsed: hsl(198, 88%, min(66%, 35%));
  --list-marker-color-hover: rgb(79, 72, 97);
  --menu-background: rgb(153, 135, 197);
  --menu-border-color: rgba(213, 207, 226, 0);
  --menu-radius: 20px;
  --metadata-border-color: rgb(227, 223, 236);
  --metadata-divider-color: rgb(227, 223, 236);
  --metadata-input-background-active: rgba(110, 83, 172, 0.5);
  --metadata-input-text-color: rgb(33, 33, 33);
  --metadata-label-background-active: rgba(110, 83, 172, 0.5);
  --metadata-label-text-color: rgb(79, 72, 97);
  --metadata-label-text-color-hover: rgb(79, 72, 97);
  --metadata-property-background-active: rgba(110, 83, 172, 0.5);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(213, 207, 226, 0);
  --modal-background: rgb(182, 169, 214);
  --modal-border-color: rgb(227, 223, 236);
  --modal-radius: 20px;
  --nav-collapse-icon-color: rgb(110, 96, 144);
  --nav-collapse-icon-color-collapsed: rgb(110, 96, 144);
  --nav-heading-color: rgb(33, 33, 33);
  --nav-heading-color-collapsed: rgb(110, 96, 144);
  --nav-heading-color-collapsed-hover: rgb(79, 72, 97);
  --nav-heading-color-hover: rgb(33, 33, 33);
  --nav-item-background-active: rgba(110, 83, 172, 0.5);
  --nav-item-background-hover: rgba(110, 83, 172, 0.5);
  --nav-item-background-selected: hsla(198, 88%, max(66%, 60%), 0.17);
  --nav-item-border-color: rgb(227, 223, 236);
  --nav-item-color: rgb(79, 72, 97);
  --nav-item-color-active: rgb(33, 33, 33);
  --nav-item-color-highlighted: hsl(198, 88%, min(66%, 35%));
  --nav-item-color-hover: rgb(33, 33, 33);
  --nav-item-color-selected: rgb(33, 33, 33);
  --nav-item-radius: 20px;
  --nav-tag-color: rgb(110, 96, 144);
  --nav-tag-color-active: rgb(79, 72, 97);
  --nav-tag-color-hover: rgb(79, 72, 97);
  --nav-tag-radius: 20px;
  --pdf-background: rgb(182, 169, 214);
  --pdf-page-background: rgb(182, 169, 214);
  --pdf-shadow: none;
  --pdf-sidebar-background: rgb(182, 169, 214);
  --pdf-thumbnail-shadow: none;
  --pill-border-color: rgb(227, 223, 236);
  --pill-border-color-hover: rgba(213, 207, 226, 0);
  --pill-color: rgb(79, 72, 97);
  --pill-color-hover: rgb(33, 33, 33);
  --pill-color-remove: rgb(110, 96, 144);
  --pill-color-remove-hover: hsl(198, 88%, min(66%, 35%));
  --prompt-background: rgb(182, 169, 214);
  --radius-l: 20px;
  --radius-m: 20px;
  --radius-s: 20px;
  --radius-xl: 20px;
  --raised-background: color-mix(in srgb, rgb(182, 169, 214) 65%, transparent) linear-gradient(rgb(182, 169, 214), color-mix(in srgb, rgb(182, 169, 214) 65%, transparent));
  --ribbon-background: rgb(153, 135, 197);
  --ribbon-background-collapsed: rgb(182, 169, 214);
  --scrollbar-radius: 20px;
  --search-clear-button-color: rgb(79, 72, 97);
  --search-icon-color: rgb(79, 72, 97);
  --search-result-background: rgb(182, 169, 214);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(33, 33, 33);
  --setting-items-background: rgb(168, 152, 205);
  --setting-items-border-color: rgb(227, 223, 236);
  --setting-items-radius: 20px;
  --sidebar-left-border-color: rgb(227, 223, 236);
  --size-1-1: 1px;
  --size-1-2: 2px;
  --size-1-3: 3px;
  --size-16-16: 256px;
  --size-16-8: 128px;
  --slider-thumb-border-color: rgba(213, 207, 226, 0);
  --slider-thumb-radius: 20px;
  --slider-track-background: rgb(227, 223, 236);
  --status-bar-background: rgb(153, 135, 197);
  --status-bar-border-color: rgb(227, 223, 236);
  --status-bar-radius: 20px 0 0 0;
  --status-bar-text-color: rgb(79, 72, 97);
  --suggestion-background: rgb(182, 169, 214);
  --swatch-shadow: none;
  --tab-background-active: rgb(182, 169, 214);
  --tab-container-background: rgb(153, 135, 197);
  --tab-divider-color: rgba(213, 207, 226, 0);
  --tab-outline-color: rgb(227, 223, 236);
  --tab-radius: 20px;
  --tab-radius-active: 20px;
  --tab-stacked-shadow: none;
  --tab-switcher-background: rgb(153, 135, 197);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(153, 135, 197), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-text-color: rgb(110, 96, 144);
  --tab-text-color-active: rgb(79, 72, 97);
  --tab-text-color-focused: rgb(79, 72, 97);
  --tab-text-color-focused-active: rgb(79, 72, 97);
  --tab-text-color-focused-active-current: rgb(33, 33, 33);
  --tab-text-color-focused-highlighted: hsl(198, 88%, min(66%, 35%));
  --table-add-button-border-color: rgb(79, 72, 97);
  --table-border-color: rgb(79, 72, 97);
  --table-drag-handle-background-active: hsl(198, 88%, min(66%, 35%));
  --table-drag-handle-color: rgb(110, 96, 144);
  --table-header-border-color: rgb(79, 72, 97);
  --table-header-color: rgb(33, 33, 33);
  --table-line-height: 1.5em;
  --table-selection: hsla(198, 88%, max(66%, 60%), 0.2);
  --table-selection-border-color: hsl(198, 88%, min(66%, 35%));
  --tag-background: hsla(198, 88%, max(66%, 60%), 0.25);
  --tag-background-hover: hsla(198, 88%, max(66%, 60%), 0.35);
  --tag-color: hsl(198, 88%, min(66%, 35%));
  --tag-color-hover: hsl(198, 88%, min(66%, 35%));
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(198, 88%, min(66%, 35%));
  --text-accent-hover: hsl(195, 89.76%, calc(min(66%, 35%)*1.15));
  --text-faint: rgb(110, 96, 144);
  --text-highlight-bg: hsla(318, min(88%, 50%), max(66%, 60%), 0.6);
  --text-muted: rgb(79, 72, 97);
  --text-normal: rgb(33, 33, 33);
  --text-selection: hsla(198, 88%, max(66%, 60%), 0.25);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(153, 135, 197);
  --titlebar-background-focused: rgb(139, 117, 189);
  --titlebar-border-color: rgb(227, 223, 236);
  --titlebar-text-color: rgb(79, 72, 97);
  --titlebar-text-color-focused: rgb(33, 33, 33);
  --toggle-radius: 20px;
  --toggle-thumb-radius: 20px;
  --vault-profile-color: rgb(33, 33, 33);
  --vault-profile-color-hover: rgb(33, 33, 33);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(153, 135, 197);
  color: rgb(33, 33, 33);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(182, 169, 214);
  color: rgb(33, 33, 33);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(153, 135, 197);
  color: rgb(33, 33, 33);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(227, 223, 236);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(153, 135, 197);
  border-left-color: rgb(227, 223, 236);
  color: rgb(33, 33, 33);
}

body div#quartz-root {
  background-color: rgb(182, 169, 214);
  color: rgb(33, 33, 33);
}`,
    typography: `body .page article p > b, b {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body .page article p > em, em {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body .page article p > i, i {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body .page article p > strong, strong {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body .text-highlight {
  background-color: rgba(212, 125, 186, 0.6);
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body del {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: line-through rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body p {
  color: rgb(79, 72, 97);
  outline: rgb(79, 72, 97) none 0px;
  text-decoration: rgb(79, 72, 97);
  text-decoration-color: rgb(79, 72, 97);
}`,
    links: `body a.external, footer a {
  color: rgb(11, 121, 168);
  outline: rgb(11, 121, 168) none 0px;
  text-decoration: underline rgb(11, 121, 168);
  text-decoration-color: rgb(11, 121, 168);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(11, 121, 168);
  outline: rgb(11, 121, 168) none 0px;
  text-decoration: underline rgb(11, 121, 168);
  text-decoration-color: rgb(11, 121, 168);
}

body a.internal.broken {
  color: rgb(11, 121, 168);
  outline: rgb(11, 121, 168) none 0px;
}`,
    lists: `body dd {
  color: rgb(33, 33, 33);
}

body dt {
  color: rgb(33, 33, 33);
}

body ol > li {
  color: rgb(33, 33, 33);
}

body ol.overflow {
  background-color: rgb(182, 169, 214);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body ul > li {
  color: rgb(33, 33, 33);
}

body ul.overflow {
  background-color: rgb(182, 169, 214);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(110, 96, 144);
  text-decoration: rgb(110, 96, 144);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body table {
  color: rgb(33, 33, 33);
}

body td {
  border-bottom-color: rgb(79, 72, 97);
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  color: rgb(33, 33, 33);
}

body th {
  border-bottom-color: rgb(79, 72, 97);
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  color: rgb(33, 33, 33);
}`,
    code: `body code {
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(227, 223, 236);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(227, 223, 236);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

body pre > code, pre:has(> code) {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(227, 223, 236);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body pre:has(> code) {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(227, 223, 236);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    images: `body audio {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body figcaption {
  color: rgb(33, 33, 33);
}

body figure {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body img {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body video {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    embeds: `body .file-embed {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(79, 72, 97);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .footnotes {
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

body .transclude {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(212, 125, 186);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body .transclude-inner {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(212, 125, 186);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(79, 72, 97);
  text-decoration: line-through rgb(79, 72, 97);
  text-decoration-color: rgb(79, 72, 97);
}

body input[type=checkbox] {
  border-bottom-color: rgb(110, 96, 144);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(110, 96, 144);
  border-right-color: rgb(110, 96, 144);
  border-top-color: rgb(110, 96, 144);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-left: -30px;
  width: 20px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='*'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='-'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='/'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='>'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='?'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='I'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='S'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='b'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='c'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='d'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='f'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='i'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='k'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='l'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='p'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='u'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body li.task-list-item[data-task='w'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(217, 209, 235);
  border-bottom-color: rgb(227, 223, 236);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space {
  background-color: rgb(182, 169, 214);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > * {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(110, 83, 172, 0.5);
  color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(153, 135, 197);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(110, 83, 172, 0.5);
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(110, 83, 172, 0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 199, 245, 0.25);
}

body a.internal.tag-link::before {
  color: rgb(11, 121, 168);
}

body h1 {
  color: rgb(33, 33, 33);
}

body h2 {
  color: rgb(33, 33, 33);
}

body h2.page-title, h2.page-title a {
  color: rgb(33, 33, 33);
}

body h3 {
  color: rgb(33, 33, 33);
}

body h4 {
  color: rgb(33, 33, 33);
}

body h5 {
  color: rgb(33, 33, 33);
}

body h6 {
  color: rgb(33, 33, 33);
}

body hr {
  border-bottom-color: rgb(227, 223, 236);
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body ::-webkit-scrollbar {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
}

body ::-webkit-scrollbar-corner {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
}

body ::-webkit-scrollbar-track {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(110, 83, 172, 0.5);
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(79, 72, 97);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(79, 72, 97);
}`,
    footer: `body footer {
  background-color: rgb(153, 135, 197);
  border-bottom-color: rgb(227, 223, 236);
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  color: rgb(79, 72, 97);
}

body footer ul li a {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(33, 33, 33);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(79, 72, 97);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body li.section-li > .section .meta {
  color: rgb(79, 72, 97);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}

body ul.section-ul {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(79, 72, 97);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(79, 72, 97);
}

body .darkmode svg {
  color: rgb(79, 72, 97);
  stroke: rgb(79, 72, 97);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(79, 72, 97);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(79, 72, 97);
}

body .breadcrumb-element p {
  color: rgb(110, 96, 144);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

body .metadata {
  border-bottom-color: rgb(227, 223, 236);
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  color: rgb(79, 72, 97);
}

body .metadata-properties {
  border-bottom-color: rgb(79, 72, 97);
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  color: rgb(79, 72, 97);
}

body .navigation-progress {
  background-color: rgb(153, 135, 197);
}

body .page-header h2.page-title {
  color: rgb(33, 33, 33);
}

body abbr {
  color: rgb(33, 33, 33);
  text-decoration: underline dotted rgb(33, 33, 33);
}

body details {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body input[type=text] {
  border-bottom-color: rgb(79, 72, 97);
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  color: rgb(79, 72, 97);
}

body kbd {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

body progress {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body sub {
  color: rgb(33, 33, 33);
}

body summary {
  color: rgb(33, 33, 33);
}

body sup {
  color: rgb(33, 33, 33);
}`,
  },
};
