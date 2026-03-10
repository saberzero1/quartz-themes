import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "mado-11",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 210;
  --accent-l: 62%;
  --accent-s: 93%;
  --background-fifth: rgba(23, 25, 28, 0.1);
  --background-fourth: rgba(47, 55, 66, 0.9);
  --background-modifier-active-hover: rgba(68, 158, 248, 0.1);
  --background-modifier-border: rgb(26, 32, 40);
  --background-modifier-border-hover: rgb(72, 84, 97);
  --background-modifier-error: hsla(365, 90%, 65%, 1);
  --background-modifier-error-hover: hsla(365, 90%, 65%, 1);
  --background-modifier-hover: rgba(21, 26, 30, 0.5);
  --background-primary: rgb(40, 47, 57);
  --background-primary-alt: rgb(29, 37, 47);
  --background-secondary: rgb(29, 37, 47);
  --background-secondary-alt: rgb(26, 32, 40);
  --bases-cards-background: rgb(40, 47, 57);
  --bases-cards-cover-background: rgb(29, 37, 47);
  --bases-cards-shadow: 0 0 0 1px rgb(26, 32, 40);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(72, 84, 97);
  --bases-embed-border-color: rgb(26, 32, 40);
  --bases-group-heading-property-color: rgb(130, 143, 166);
  --bases-table-border-color: rgb(26, 32, 40);
  --bases-table-cell-background-active: rgb(40, 47, 57);
  --bases-table-cell-background-disabled: rgb(29, 37, 47);
  --bases-table-cell-background-selected: rgba(68, 158, 248, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(210, 106%, 65%);
  --bases-table-group-background: rgb(29, 37, 47);
  --bases-table-header-background: rgb(40, 47, 57);
  --bases-table-header-background-hover: rgba(21, 26, 30, 0.5);
  --bases-table-header-color: rgb(130, 143, 166);
  --bases-table-summary-background: rgb(40, 47, 57);
  --bases-table-summary-background-hover: rgba(21, 26, 30, 0.5);
  --bgcolor-h: 215;
  --bgcolor-l: 19%;
  --bgcolor-s: 17%;
  --blockquote-border-color: hsl(210, 106%, 65%);
  --blockquote-color: rgb(142, 154, 175);
  --blur-background: color-mix(in srgb, rgb(26, 32, 40) 65%, transparent) linear-gradient(rgb(26, 32, 40), color-mix(in srgb, rgb(26, 32, 40) 65%, transparent));
  --bold-weight: 700;
  --border: 1px solid rgb(26, 32, 40);
  --button-padding-icon: 7px;
  --button-padding-long: 11px 15px;
  --button-radius: 4px;
  --callout-content-padding: 0 11px 0 27px;
  --callout-padding: 0px;
  --callout-title-padding: 11px;
  --canvas-background: rgb(40, 47, 57);
  --canvas-card-label-color: rgba(105, 122, 150, 0.7);
  --canvas-dot-pattern: rgb(26, 32, 40);
  --caret-color: rgb(186, 186, 186);
  --checkbox-border-color: rgba(105, 122, 150, 0.7);
  --checkbox-border-color-hover: rgb(130, 143, 166);
  --checkbox-color: hsl(210, 106%, 65%);
  --checkbox-color-hover: rgb(67, 159, 234);
  --checkbox-marker-color: rgb(40, 47, 57);
  --checklist-done-color: rgba(105, 122, 150, 0.7);
  --code-background: rgb(29, 37, 47);
  --code-border-color: rgb(26, 32, 40);
  --code-bracket-background: rgba(21, 26, 30, 0.5);
  --code-comment: rgba(105, 122, 150, 0.7);
  --code-normal: rgb(130, 143, 166);
  --code-operator: hsla(365, 90%, 65%, 1);
  --code-punctuation: rgb(130, 143, 166);
  --code-tag: hsla(365, 90%, 65%, 1);
  --collapse-icon-color: rgba(105, 122, 150, 0.7);
  --collapse-icon-color-collapsed: rgb(67, 159, 234);
  --color-accent: hsl(210, 106%, 65%);
  --color-accent-1: rgb(67, 159, 234);
  --color-accent-2: rgb(71, 163, 255);
  --color-accent-hsl: 210, 93%, 62%;
  --color-base-00: rgb(40, 47, 57);
  --color-base-00-0: rgba(47, 55, 66, 0.9);
  --color-base-00-0-trans: rgba(47, 55, 66, 0.5);
  --color-base-00-trans: rgba(40, 47, 57, 0.5);
  --color-base-00-trans-alt: rgba(28, 32, 39, 0.8);
  --color-base-05: rgba(21, 26, 30, 0.5);
  --color-base-10: rgb(29, 37, 47);
  --color-base-100: rgb(186, 186, 186);
  --color-base-20: rgb(29, 37, 47);
  --color-base-20-0: rgba(23, 25, 28, 0.1);
  --color-base-20-trans: rgba(29, 37, 47, 0.5);
  --color-base-30: rgb(26, 32, 40);
  --color-base-35: rgb(72, 84, 97);
  --color-base-50: rgba(105, 122, 150, 0.7);
  --color-base-70: rgb(130, 143, 166);
  --color-base-hover: rgba(21, 26, 30, 0.5);
  --color-base-shadow: rgba(23, 26, 28, 0.1);
  --color-base-shadow-hover: rgba(0, 0, 0, 0.3);
  --color-highlight: rgb(220, 190, 101);
  --color-italic: rgb(119, 147, 187);
  --color-muted: rgb(142, 154, 175);
  --color-red: hsla(365, 90%, 65%, 1);
  --color-strikethrough: rgba(105, 122, 150, 0.7);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(26, 32, 40);
  --divider-color-hover: hsl(210, 106%, 65%);
  --divider-width: 4px;
  --dropdown-background: rgb(26, 32, 40);
  --dropdown-background-hover: rgb(72, 84, 97);
  --embed-block-shadow-hover: 0 0 0 1px rgb(26, 32, 40), inset 0 0 0 1px rgb(26, 32, 40);
  --embed-border-start: 2px solid hsl(210, 106%, 65%);
  --embed-padding: 13px 23px;
  --file-header-background: rgb(40, 47, 57);
  --file-header-background-focused: rgb(40, 47, 57);
  --flair-background: rgb(26, 32, 40);
  --flair-color: rgb(186, 186, 186);
  --footnote-divider-color: rgb(26, 32, 40);
  --footnote-id-color: rgb(130, 143, 166);
  --footnote-id-color-no-occurrences: rgba(105, 122, 150, 0.7);
  --footnote-input-background-active: rgba(21, 26, 30, 0.5);
  --graph-line: rgb(72, 84, 97);
  --graph-node: rgb(130, 143, 166);
  --graph-node-focused: rgb(67, 159, 234);
  --graph-node-unresolved: rgba(105, 122, 150, 0.7);
  --graph-text: rgb(186, 186, 186);
  --gray: var(--text-muted);
  --header-height: 43px;
  --heading-formatting: rgba(105, 122, 150, 0.7);
  --highlight: var(--text-highlight-bg);
  --hovering-trigger-size: 13px;
  --hr-color: rgb(26, 32, 40);
  --icon-color: rgb(130, 143, 166);
  --icon-color-active: rgb(67, 159, 234);
  --icon-color-focused: rgb(186, 186, 186);
  --icon-color-hover: rgb(130, 143, 166);
  --icon-l: 20px;
  --icon-m: 20px;
  --icon-size: 20px;
  --inline-code-color: hsla(365, 90%, 65%, 1);
  --input-date-separator: rgba(105, 122, 150, 0.7);
  --input-placeholder-color: rgba(105, 122, 150, 0.7);
  --interactive-accent: hsl(210, 106%, 65%);
  --interactive-accent-hover: rgb(67, 159, 234);
  --interactive-accent-hsl: 210, 93%, 62%;
  --interactive-hover: rgb(72, 84, 97);
  --interactive-normal: rgb(26, 32, 40);
  --italic-color: rgb(119, 147, 187);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(67, 159, 234);
  --link-color-hover: rgb(71, 163, 255);
  --link-external-color: rgb(67, 159, 234);
  --link-external-color-hover: rgb(71, 163, 255);
  --link-unresolved-color: rgb(67, 159, 234);
  --link-unresolved-decoration-color: rgba(68, 158, 248, 0.3);
  --list-indent: 37px;
  --list-marker-color: rgba(105, 122, 150, 0.7);
  --list-marker-color-collapsed: rgb(67, 159, 234);
  --list-marker-color-hover: rgb(130, 143, 166);
  --menu-background: rgb(29, 37, 47);
  --menu-border-color: rgb(72, 84, 97);
  --metadata-border-color: rgb(26, 32, 40);
  --metadata-divider-color: rgb(26, 32, 40);
  --metadata-input-background-active: rgba(21, 26, 30, 0.5);
  --metadata-input-text-color: rgb(186, 186, 186);
  --metadata-label-background-active: rgba(21, 26, 30, 0.5);
  --metadata-label-text-color: rgb(130, 143, 166);
  --metadata-label-text-color-hover: rgb(130, 143, 166);
  --metadata-property-background-active: rgba(21, 26, 30, 0.5);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(72, 84, 97);
  --modal-background: rgb(40, 47, 57);
  --nav-collapse-icon-color: rgba(105, 122, 150, 0.7);
  --nav-collapse-icon-color-collapsed: rgba(105, 122, 150, 0.7);
  --nav-heading-color: rgb(186, 186, 186);
  --nav-heading-color-collapsed: rgba(105, 122, 150, 0.7);
  --nav-heading-color-collapsed-hover: rgb(130, 143, 166);
  --nav-heading-color-hover: rgb(186, 186, 186);
  --nav-item-background-active: rgba(21, 26, 30, 0.5);
  --nav-item-background-hover: rgba(21, 26, 30, 0.5);
  --nav-item-background-selected: rgba(68, 158, 248, 0.15);
  --nav-item-color: rgb(130, 143, 166);
  --nav-item-color-active: rgb(186, 186, 186);
  --nav-item-color-highlighted: rgb(67, 159, 234);
  --nav-item-color-hover: rgb(186, 186, 186);
  --nav-item-color-selected: rgb(186, 186, 186);
  --nav-tag-color: rgba(105, 122, 150, 0.7);
  --nav-tag-color-active: rgb(130, 143, 166);
  --nav-tag-color-hover: rgb(130, 143, 166);
  --panel-radius: 8px;
  --panel-shadow: 0 1px 3px rgba(23, 26, 28, 0.1);
  --panel-shadow-hover: 0 3px 5px rgba(0, 0, 0, 0.3);
  --pdf-background: rgb(40, 47, 57);
  --pdf-page-background: rgb(40, 47, 57);
  --pdf-shadow: 0 0 0 1px rgb(26, 32, 40);
  --pdf-sidebar-background: rgb(40, 47, 57);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(26, 32, 40);
  --pill-border-color: rgb(26, 32, 40);
  --pill-border-color-hover: rgb(72, 84, 97);
  --pill-color: rgb(130, 143, 166);
  --pill-color-hover: rgb(186, 186, 186);
  --pill-color-remove: rgba(105, 122, 150, 0.7);
  --pill-color-remove-hover: rgb(67, 159, 234);
  --prompt-background: rgb(40, 47, 57);
  --raised-background: color-mix(in srgb, rgb(26, 32, 40) 65%, transparent) linear-gradient(rgb(26, 32, 40), color-mix(in srgb, rgb(26, 32, 40) 65%, transparent));
  --ribbon-background: rgb(29, 37, 47);
  --ribbon-background-collapsed: rgb(40, 47, 57);
  --search-clear-button-color: rgb(130, 143, 166);
  --search-icon-color: rgb(130, 143, 166);
  --search-result-background: rgb(40, 47, 57);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(186, 186, 186);
  --setting-items-background: rgb(29, 37, 47);
  --setting-items-border-color: rgb(26, 32, 40);
  --sidebar-size-left: 270px;
  --sidebar-size-right: 270px;
  --slider-thumb-border-color: rgb(72, 84, 97);
  --slider-track-background: rgb(26, 32, 40);
  --status-bar-background: rgb(29, 37, 47);
  --status-bar-border-color: rgb(26, 32, 40);
  --status-bar-text-color: rgb(130, 143, 166);
  --suggestion-background: rgb(40, 47, 57);
  --sync-avatar-color-1: hsla(365, 90%, 65%, 1);
  --tab-background-active: rgb(40, 47, 57);
  --tab-container-background: rgb(29, 37, 47);
  --tab-divider-color: rgb(72, 84, 97);
  --tab-outline-color: rgb(26, 32, 40);
  --tab-stacked-header-width: 53px;
  --tab-switcher-background: rgb(29, 37, 47);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(29, 37, 47), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 106%, 65%);
  --tab-text-color: rgba(105, 122, 150, 0.7);
  --tab-text-color-active: rgb(130, 143, 166);
  --tab-text-color-focused: rgb(130, 143, 166);
  --tab-text-color-focused-active: rgb(130, 143, 166);
  --tab-text-color-focused-active-current: rgb(186, 186, 186);
  --tab-text-color-focused-highlighted: rgb(67, 159, 234);
  --table-add-button-border-color: rgb(26, 32, 40);
  --table-border-color: rgb(26, 32, 40);
  --table-drag-handle-background-active: hsl(210, 106%, 65%);
  --table-drag-handle-color: rgba(105, 122, 150, 0.7);
  --table-header-border-color: rgb(26, 32, 40);
  --table-header-color: rgb(186, 186, 186);
  --table-selection: rgba(68, 158, 248, 0.1);
  --table-selection-border-color: hsl(210, 106%, 65%);
  --tag-background: rgba(68, 158, 248, 0.1);
  --tag-background-hover: rgba(68, 158, 248, 0.2);
  --tag-border-color: rgba(68, 158, 248, 0.15);
  --tag-border-color-hover: rgba(68, 158, 248, 0.15);
  --tag-color: rgb(67, 159, 234);
  --tag-color-hover: rgb(67, 159, 234);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(67, 159, 234);
  --text-accent-hover: rgb(71, 163, 255);
  --text-error: hsla(365, 90%, 65%, 1);
  --text-faint: rgba(105, 122, 150, 0.7);
  --text-highlight-bg: rgb(199, 167, 72);
  --text-muted: rgb(130, 143, 166);
  --text-normal: rgb(186, 186, 186);
  --text-selection: rgba(68, 158, 248, 0.33);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(29, 37, 47);
  --titlebar-background-focused: rgb(29, 37, 47);
  --titlebar-border-color: rgb(26, 32, 40);
  --titlebar-text-color: rgb(130, 143, 166);
  --titlebar-text-color-focused: rgb(186, 186, 186);
  --traffic-lights-offset-x: 43px;
  --traffic-lights-offset-y: 43px;
  --vault-name-font-size: 14px;
  --vault-profile-color: rgb(186, 186, 186);
  --vault-profile-color-hover: rgb(186, 186, 186);
  --window-radius: 23px;
  --window-shadow: 0 0 9px rgba(0, 0, 0, 0.3);
  --window-shadow-left: -4px 0 5px rgba(0, 0, 0, 0.3);
  --window-shadow-right: 4px 0 5px rgba(0, 0, 0, 0.3);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 47, 57);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

body div#quartz-root {
  background-color: rgb(29, 37, 47);
  color: rgb(186, 186, 186);
}`,
    typography: `body .page article p > b, b {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body .page article p > em, em {
  color: rgb(119, 147, 187);
  outline: rgb(119, 147, 187) none 0px;
  text-decoration: rgb(119, 147, 187);
  text-decoration-color: rgb(119, 147, 187);
}

body .page article p > i, i {
  color: rgb(119, 147, 187);
  outline: rgb(119, 147, 187) none 0px;
  text-decoration: rgb(119, 147, 187);
  text-decoration-color: rgb(119, 147, 187);
}

body .page article p > strong, strong {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(220, 190, 101);
  outline: rgb(220, 190, 101) none 0px;
  text-decoration: rgb(220, 190, 101);
  text-decoration-color: rgb(220, 190, 101);
}

body del {
  color: rgba(105, 122, 150, 0.7);
  outline: rgba(105, 122, 150, 0.7) none 0px;
  text-decoration: line-through rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body p {
  color: rgb(130, 143, 166);
  outline: rgb(130, 143, 166) none 0px;
  text-decoration: rgb(130, 143, 166);
  text-decoration-color: rgb(130, 143, 166);
}`,
    links: `body a.external, footer a {
  color: rgb(67, 159, 234);
  outline: rgb(67, 159, 234) none 0px;
  text-decoration: rgb(67, 159, 234);
  text-decoration-color: rgb(67, 159, 234);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(67, 159, 234);
  outline: rgb(67, 159, 234) none 0px;
  text-decoration: underline rgb(67, 159, 234);
  text-decoration-color: rgb(67, 159, 234);
}

body a.internal.broken {
  color: rgb(67, 159, 234);
  outline: rgb(67, 159, 234) none 0px;
  text-decoration: underline rgba(68, 158, 248, 0.3);
  text-decoration-color: rgba(68, 158, 248, 0.3);
}`,
    lists: `body dd {
  color: rgb(186, 186, 186);
}

body dt {
  color: rgb(186, 186, 186);
}

body ol > li {
  color: rgb(186, 186, 186);
}

body ol.overflow {
  background-color: rgb(40, 47, 57);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body ul > li {
  color: rgb(186, 186, 186);
}

body ul.overflow {
  background-color: rgb(40, 47, 57);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(105, 122, 150, 0.7);
  text-decoration: rgba(105, 122, 150, 0.7);
}

body blockquote {
  background-color: rgb(29, 37, 47);
  padding-bottom: 17px;
  padding-top: 17px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body table {
  color: rgb(186, 186, 186);
  margin-left: 7px;
  margin-right: 7px;
  width: 245.219px;
}

body td {
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
  padding-left: 13px;
  padding-right: 13px;
}

body th {
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
  padding-left: 13px;
  padding-right: 13px;
}

body thead {
  border-top-color: rgb(77, 166, 255);
  border-top-style: solid;
  border-top-width: 2px;
}

body tr {
  border-top-color: rgb(77, 166, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(142, 154, 175);
  border-left-color: rgb(142, 154, 175);
  border-right-color: rgb(142, 154, 175);
  border-top-color: rgb(142, 154, 175);
  color: rgb(142, 154, 175);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
}

body pre > code, pre:has(> code) {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
}

body pre:has(> code) {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
}`,
    images: `body audio {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body figcaption {
  color: rgb(186, 186, 186);
}

body figure {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body img {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(186, 186, 186);
  border-radius: 8px;
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    embeds: `body .file-embed {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
}

body .footnotes {
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .transclude {
  border-bottom-color: rgb(26, 32, 40);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 32, 40);
  border-left-width: 1px;
  border-right-color: rgb(26, 32, 40);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(26, 32, 40);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 13px;
}

body .transclude-inner {
  border-bottom-color: rgb(26, 32, 40);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 32, 40);
  border-left-width: 1px;
  border-right-color: rgb(26, 32, 40);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(26, 32, 40);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 13px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(105, 122, 150, 0.7);
  text-decoration: line-through rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body input[type=checkbox] {
  border-bottom-color: rgba(105, 122, 150, 0.7);
  border-left-color: rgba(105, 122, 150, 0.7);
  border-right-color: rgba(105, 122, 150, 0.7);
  border-top-color: rgba(105, 122, 150, 0.7);
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
  width: 24px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='*'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='-'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='/'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='>'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='?'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='I'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='S'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='b'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='c'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='d'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='f'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='i'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='k'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='l'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='p'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='u'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

body li.task-list-item[data-task='w'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

body .callout > .callout-content {
  padding-left: 27px;
  padding-right: 11px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.07);
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.07);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.07);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.07);
  border-bottom-color: rgba(168, 130, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(168, 130, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(168, 130, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(168, 130, 255, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.07);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.07);
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.07);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.07);
  border-bottom-color: rgba(68, 207, 110, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(68, 207, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.07);
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.07);
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 47, 57);
}

body .search > .search-container > .search-space > * {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(21, 26, 30, 0.5);
  color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 37, 47);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(21, 26, 30, 0.5);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(21, 26, 30, 0.5);
  color: rgb(186, 186, 186);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(68, 158, 248, 0.1);
  border-bottom-color: rgba(68, 158, 248, 0.15);
  border-left-color: rgba(68, 158, 248, 0.15);
  border-right-color: rgba(68, 158, 248, 0.15);
  border-top-color: rgba(68, 158, 248, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(67, 159, 234);
}

body h1 {
  color: rgb(186, 186, 186);
}

body h2 {
  color: rgb(186, 186, 186);
}

body h2.page-title, h2.page-title a {
  color: rgb(186, 186, 186);
}

body h3 {
  color: rgb(186, 186, 186);
}

body h4 {
  color: rgb(186, 186, 186);
}

body h5 {
  color: rgb(186, 186, 186);
}

body h6 {
  color: rgb(186, 186, 186);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
}

body ::-webkit-scrollbar-corner {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
}

body ::-webkit-scrollbar-track {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(71, 163, 255);
  font-weight: 500;
  text-decoration: rgb(71, 163, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(71, 163, 255);
  font-weight: 500;
  text-decoration: rgb(71, 163, 255);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}`,
    footer: `body footer {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(130, 143, 166);
}

body footer ul li a {
  color: rgb(130, 143, 166);
  text-decoration: rgb(130, 143, 166);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(186, 186, 186);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(130, 143, 166);
  text-decoration: rgb(130, 143, 166);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(130, 143, 166);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body li.section-li > .section .meta {
  color: rgb(130, 143, 166);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(130, 143, 166);
  text-decoration: rgb(130, 143, 166);
}

body ul.section-ul {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

body .darkmode svg {
  color: rgb(130, 143, 166);
  stroke: rgb(130, 143, 166);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

body .breadcrumb-element p {
  color: rgba(105, 122, 150, 0.7);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .metadata {
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(130, 143, 166);
}

body .metadata-properties {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

body .navigation-progress {
  background-color: rgb(29, 37, 47);
}

body .page-header h2.page-title {
  color: rgb(186, 186, 186);
}

body abbr {
  color: rgb(186, 186, 186);
  text-decoration: underline dotted rgb(186, 186, 186);
}

body details {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body input[type=text] {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

body kbd {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

body progress {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body sub {
  color: rgb(186, 186, 186);
  font-size: 13.6px;
}

body summary {
  color: rgb(186, 186, 186);
}

body sup {
  color: rgb(186, 186, 186);
  font-size: 13.6px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 210;
  --accent-l: 62%;
  --accent-s: 93%;
  --background-fifth: rgba(225, 230, 234, 0.1);
  --background-fourth: rgb(252, 253, 253);
  --background-modifier-active-hover: rgba(68, 158, 248, 0.1);
  --background-modifier-border-hover: rgb(176, 186, 196);
  --background-modifier-error: hsla(365, 85%, 55%, 1);
  --background-modifier-error-hover: hsla(365, 85%, 55%, 1);
  --background-modifier-form-field: rgb(244, 248, 251);
  --background-modifier-form-field-hover: rgb(244, 248, 251);
  --background-modifier-hover: rgba(195, 203, 213, 0.3);
  --background-primary: rgb(244, 248, 251);
  --background-primary-alt: rgb(230, 237, 244);
  --background-secondary: rgb(237, 242, 248);
  --background-secondary-alt: rgb(225, 230, 234);
  --bases-cards-background: rgb(244, 248, 251);
  --bases-cards-cover-background: rgb(230, 237, 244);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(176, 186, 196);
  --bases-group-heading-property-color: rgb(81, 94, 118);
  --bases-table-cell-background-active: rgb(244, 248, 251);
  --bases-table-cell-background-disabled: rgb(230, 237, 244);
  --bases-table-cell-background-selected: rgba(68, 158, 248, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(117, 184, 250);
  --bases-table-group-background: rgb(230, 237, 244);
  --bases-table-header-background: rgb(244, 248, 251);
  --bases-table-header-background-hover: rgba(195, 203, 213, 0.3);
  --bases-table-header-color: rgb(81, 94, 118);
  --bases-table-summary-background: rgb(244, 248, 251);
  --bases-table-summary-background-hover: rgba(195, 203, 213, 0.3);
  --bgcolor-h: 204;
  --bgcolor-l: 97%;
  --bgcolor-s: 45%;
  --blockquote-border-color: rgb(117, 184, 250);
  --blockquote-color: rgb(81, 94, 118);
  --blur-background: color-mix(in srgb, rgb(244, 248, 251) 65%, transparent) linear-gradient(rgb(244, 248, 251), color-mix(in srgb, rgb(244, 248, 251) 65%, transparent));
  --bold-weight: 700;
  --border: 1px solid #e0e0e0;
  --button-padding-icon: 7px;
  --button-padding-long: 11px 15px;
  --button-radius: 4px;
  --callout-content-padding: 0 11px 0 27px;
  --callout-padding: 0px;
  --callout-title-padding: 11px;
  --canvas-background: rgb(244, 248, 251);
  --canvas-card-label-color: rgb(176, 184, 196);
  --caret-color: rgb(33, 33, 33);
  --checkbox-border-color: rgb(176, 184, 196);
  --checkbox-border-color-hover: rgb(81, 94, 118);
  --checkbox-color: rgb(117, 184, 250);
  --checkbox-color-hover: rgb(43, 145, 247);
  --checkbox-marker-color: rgb(244, 248, 251);
  --checklist-done-color: rgb(176, 184, 196);
  --code-background: rgb(230, 237, 244);
  --code-bracket-background: rgba(195, 203, 213, 0.3);
  --code-comment: rgb(176, 184, 196);
  --code-normal: rgb(81, 94, 118);
  --code-operator: hsla(365, 85%, 55%, 1);
  --code-punctuation: rgb(81, 94, 118);
  --code-tag: hsla(365, 85%, 55%, 1);
  --collapse-icon-color: rgb(176, 184, 196);
  --collapse-icon-color-collapsed: rgb(68, 158, 248);
  --color-accent: rgb(68, 158, 248);
  --color-accent-1: rgb(117, 184, 250);
  --color-accent-2: rgb(43, 145, 247);
  --color-accent-hsl: 210, 93%, 62%;
  --color-base-00: rgb(244, 248, 251);
  --color-base-00-0: rgb(252, 253, 253);
  --color-base-00-0-trans: rgba(252, 253, 253, 0.5);
  --color-base-00-trans: rgba(244, 248, 251, 0.5);
  --color-base-00-trans-alt: rgba(227, 230, 232, 0.8);
  --color-base-05: rgb(225, 230, 234);
  --color-base-10: rgb(230, 237, 244);
  --color-base-100: rgb(33, 33, 33);
  --color-base-20: rgb(237, 242, 248);
  --color-base-20-0: rgba(225, 230, 234, 0.1);
  --color-base-20-trans: rgba(238, 242, 247, 0.5);
  --color-base-35: rgb(176, 186, 196);
  --color-base-50: rgb(176, 184, 196);
  --color-base-70: rgb(81, 94, 118);
  --color-base-hover: rgba(195, 203, 213, 0.3);
  --color-base-shadow: rgba(195, 203, 213, 0.2);
  --color-base-shadow-hover: rgba(195, 203, 213, 0.3);
  --color-highlight: rgb(33, 33, 33);
  --color-italic: rgb(120, 154, 201);
  --color-muted: rgb(81, 94, 118);
  --color-red: hsla(365, 85%, 55%, 1);
  --color-strikethrough: rgb(176, 184, 196);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: rgb(117, 184, 250);
  --divider-width: 4px;
  --dropdown-background: rgb(244, 248, 251);
  --dropdown-background-hover: rgb(230, 237, 244);
  --embed-border-start: 2px solid rgb(117, 184, 250);
  --embed-padding: 13px 23px;
  --file-header-background: rgb(244, 248, 251);
  --file-header-background-focused: rgb(244, 248, 251);
  --flair-background: rgb(244, 248, 251);
  --flair-color: rgb(33, 33, 33);
  --footnote-id-color: rgb(81, 94, 118);
  --footnote-id-color-no-occurrences: rgb(176, 184, 196);
  --footnote-input-background-active: rgba(195, 203, 213, 0.3);
  --graph-line: rgb(176, 186, 196);
  --graph-node: rgb(81, 94, 118);
  --graph-node-focused: rgb(68, 158, 248);
  --graph-node-unresolved: rgb(176, 184, 196);
  --graph-text: rgb(33, 33, 33);
  --gray: var(--text-muted);
  --header-height: 43px;
  --heading-formatting: rgb(176, 184, 196);
  --highlight: var(--background-modifier-hover);
  --hovering-trigger-size: 13px;
  --icon-color: rgb(81, 94, 118);
  --icon-color-active: rgb(68, 158, 248);
  --icon-color-focused: rgb(33, 33, 33);
  --icon-color-hover: rgb(81, 94, 118);
  --icon-l: 20px;
  --icon-m: 20px;
  --icon-size: 20px;
  --inline-code-color: hsla(365, 85%, 55%, 1);
  --input-date-separator: rgb(176, 184, 196);
  --input-placeholder-color: rgb(176, 184, 196);
  --interactive-accent: rgb(117, 184, 250);
  --interactive-accent-hover: rgb(43, 145, 247);
  --interactive-accent-hsl: 210, 93%, 62%;
  --interactive-hover: rgb(230, 237, 244);
  --interactive-normal: rgb(244, 248, 251);
  --italic-color: rgb(120, 154, 201);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(68, 158, 248);
  --link-color-hover: rgb(43, 145, 247);
  --link-external-color: rgb(68, 158, 248);
  --link-external-color-hover: rgb(43, 145, 247);
  --link-unresolved-color: rgb(68, 158, 248);
  --link-unresolved-decoration-color: rgba(68, 158, 248, 0.3);
  --list-indent: 37px;
  --list-marker-color: rgb(176, 184, 196);
  --list-marker-color-collapsed: rgb(68, 158, 248);
  --list-marker-color-hover: rgb(81, 94, 118);
  --menu-background: rgb(237, 242, 248);
  --menu-border-color: rgb(176, 186, 196);
  --metadata-input-background-active: rgba(195, 203, 213, 0.3);
  --metadata-input-text-color: rgb(33, 33, 33);
  --metadata-label-background-active: rgba(195, 203, 213, 0.3);
  --metadata-label-text-color: rgb(81, 94, 118);
  --metadata-label-text-color-hover: rgb(81, 94, 118);
  --metadata-property-background-active: rgba(195, 203, 213, 0.3);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(176, 186, 196);
  --modal-background: rgb(244, 248, 251);
  --nav-collapse-icon-color: rgb(176, 184, 196);
  --nav-collapse-icon-color-collapsed: rgb(176, 184, 196);
  --nav-heading-color: rgb(33, 33, 33);
  --nav-heading-color-collapsed: rgb(176, 184, 196);
  --nav-heading-color-collapsed-hover: rgb(81, 94, 118);
  --nav-heading-color-hover: rgb(33, 33, 33);
  --nav-item-background-active: rgba(195, 203, 213, 0.3);
  --nav-item-background-hover: rgba(195, 203, 213, 0.3);
  --nav-item-background-selected: rgba(68, 158, 248, 0.15);
  --nav-item-color: rgb(81, 94, 118);
  --nav-item-color-active: rgb(33, 33, 33);
  --nav-item-color-highlighted: rgb(68, 158, 248);
  --nav-item-color-hover: rgb(33, 33, 33);
  --nav-item-color-selected: rgb(33, 33, 33);
  --nav-tag-color: rgb(176, 184, 196);
  --nav-tag-color-active: rgb(81, 94, 118);
  --nav-tag-color-hover: rgb(81, 94, 118);
  --panel-radius: 8px;
  --panel-shadow: 0 1px 3px rgba(195, 203, 213, 0.2);
  --panel-shadow-hover: 0 3px 5px rgba(195, 203, 213, 0.3);
  --pdf-background: rgb(244, 248, 251);
  --pdf-page-background: rgb(244, 248, 251);
  --pdf-sidebar-background: rgb(244, 248, 251);
  --pill-border-color-hover: rgb(176, 186, 196);
  --pill-color: rgb(81, 94, 118);
  --pill-color-hover: rgb(33, 33, 33);
  --pill-color-remove: rgb(176, 184, 196);
  --pill-color-remove-hover: rgb(68, 158, 248);
  --prompt-background: rgb(244, 248, 251);
  --raised-background: color-mix(in srgb, rgb(244, 248, 251) 65%, transparent) linear-gradient(rgb(244, 248, 251), color-mix(in srgb, rgb(244, 248, 251) 65%, transparent));
  --ribbon-background: rgb(237, 242, 248);
  --ribbon-background-collapsed: rgb(244, 248, 251);
  --search-clear-button-color: rgb(81, 94, 118);
  --search-icon-color: rgb(81, 94, 118);
  --search-result-background: rgb(244, 248, 251);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(33, 33, 33);
  --setting-items-background: rgb(230, 237, 244);
  --sidebar-size-left: 270px;
  --sidebar-size-right: 270px;
  --slider-thumb-border-color: rgb(176, 186, 196);
  --status-bar-background: rgb(237, 242, 248);
  --status-bar-text-color: rgb(81, 94, 118);
  --suggestion-background: rgb(244, 248, 251);
  --sync-avatar-color-1: hsla(365, 85%, 55%, 1);
  --tab-background-active: rgb(244, 248, 251);
  --tab-container-background: rgb(237, 242, 248);
  --tab-divider-color: rgb(176, 186, 196);
  --tab-stacked-header-width: 53px;
  --tab-switcher-background: rgb(237, 242, 248);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(237, 242, 248), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(68, 158, 248);
  --tab-text-color: rgb(176, 184, 196);
  --tab-text-color-active: rgb(81, 94, 118);
  --tab-text-color-focused: rgb(81, 94, 118);
  --tab-text-color-focused-active: rgb(81, 94, 118);
  --tab-text-color-focused-active-current: rgb(33, 33, 33);
  --tab-text-color-focused-highlighted: rgb(68, 158, 248);
  --table-drag-handle-background-active: rgb(117, 184, 250);
  --table-drag-handle-color: rgb(176, 184, 196);
  --table-header-color: rgb(33, 33, 33);
  --table-selection: rgba(68, 158, 248, 0.1);
  --table-selection-border-color: rgb(117, 184, 250);
  --tag-background: rgba(68, 158, 248, 0.1);
  --tag-background-hover: rgba(68, 158, 248, 0.2);
  --tag-border-color: rgba(68, 158, 248, 0.15);
  --tag-border-color-hover: rgba(68, 158, 248, 0.15);
  --tag-color: rgb(68, 158, 248);
  --tag-color-hover: rgb(68, 158, 248);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(68, 158, 248);
  --text-accent-hover: rgb(43, 145, 247);
  --text-error: hsla(365, 85%, 55%, 1);
  --text-faint: rgb(176, 184, 196);
  --text-muted: rgb(81, 94, 118);
  --text-normal: rgb(33, 33, 33);
  --text-selection: rgba(68, 158, 248, 0.2);
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: rgb(237, 242, 248);
  --titlebar-background-focused: rgb(237, 242, 248);
  --titlebar-text-color: rgb(81, 94, 118);
  --titlebar-text-color-focused: rgb(33, 33, 33);
  --traffic-lights-offset-x: 43px;
  --traffic-lights-offset-y: 43px;
  --vault-name-font-size: 14px;
  --vault-profile-color: rgb(33, 33, 33);
  --vault-profile-color-hover: rgb(33, 33, 33);
  --window-radius: 23px;
  --window-shadow: 0 0 9px rgba(195, 203, 213, 0.3);
  --window-shadow-left: -4px 0 5px rgba(195, 203, 213, 0.3);
  --window-shadow-right: 4px 0 5px rgba(195, 203, 213, 0.3);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 248, 251);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
}

body div#quartz-root {
  background-color: rgb(237, 242, 248);
  color: rgb(33, 33, 33);
}`,
    typography: `body .page article p > b, b {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body .page article p > em, em {
  color: rgb(120, 154, 201);
  outline: rgb(120, 154, 201) none 0px;
  text-decoration: rgb(120, 154, 201);
  text-decoration-color: rgb(120, 154, 201);
}

body .page article p > i, i {
  color: rgb(120, 154, 201);
  outline: rgb(120, 154, 201) none 0px;
  text-decoration: rgb(120, 154, 201);
  text-decoration-color: rgb(120, 154, 201);
}

body .page article p > strong, strong {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body .text-highlight {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

body del {
  color: rgb(176, 184, 196);
  outline: rgb(176, 184, 196) none 0px;
  text-decoration: line-through rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body p {
  color: rgb(81, 94, 118);
  outline: rgb(81, 94, 118) none 0px;
  text-decoration: rgb(81, 94, 118);
  text-decoration-color: rgb(81, 94, 118);
}`,
    links: `body a.external, footer a {
  color: rgb(68, 158, 248);
  outline: rgb(68, 158, 248) none 0px;
  text-decoration: rgb(68, 158, 248);
  text-decoration-color: rgb(68, 158, 248);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(68, 158, 248);
  outline: rgb(68, 158, 248) none 0px;
  text-decoration: underline rgb(68, 158, 248);
  text-decoration-color: rgb(68, 158, 248);
}

body a.internal.broken {
  color: rgb(68, 158, 248);
  outline: rgb(68, 158, 248) none 0px;
  text-decoration: underline rgba(68, 158, 248, 0.3);
  text-decoration-color: rgba(68, 158, 248, 0.3);
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
  background-color: rgb(244, 248, 251);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body ul > li {
  color: rgb(33, 33, 33);
}

body ul.overflow {
  background-color: rgb(244, 248, 251);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(176, 184, 196);
  text-decoration: rgb(176, 184, 196);
}

body blockquote {
  background-color: rgb(237, 242, 248);
  padding-bottom: 17px;
  padding-top: 17px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body table {
  color: rgb(33, 33, 33);
  margin-left: 7px;
  margin-right: 7px;
  width: 245.219px;
}

body td {
  color: rgb(33, 33, 33);
  padding-left: 13px;
  padding-right: 13px;
}

body th {
  color: rgb(33, 33, 33);
  padding-left: 13px;
  padding-right: 13px;
}

body thead {
  border-top-color: rgb(68, 158, 248);
  border-top-style: solid;
  border-top-width: 2px;
}

body tr {
  border-top-color: rgb(68, 158, 248);
}`,
    code: `body code {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 237, 244);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 237, 244);
  color: rgb(33, 33, 33);
}

body pre > code, pre:has(> code) {
  background-color: rgb(230, 237, 244);
}

body pre:has(> code) {
  background-color: rgb(230, 237, 244);
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(33, 33, 33);
  border-radius: 8px;
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    embeds: `body .file-embed {
  background-color: rgb(230, 237, 244);
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
}

body .footnotes {
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

body .transclude {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 13px;
}

body .transclude-inner {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 13px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(176, 184, 196);
  text-decoration: line-through rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body input[type=checkbox] {
  border-bottom-color: rgb(176, 184, 196);
  border-left-color: rgb(176, 184, 196);
  border-right-color: rgb(176, 184, 196);
  border-top-color: rgb(176, 184, 196);
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
  width: 24px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='*'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='-'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='/'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='>'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='?'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='I'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='S'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='b'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='c'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='d'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='f'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='i'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='k'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='l'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='p'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='u'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

body li.task-list-item[data-task='w'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

body .callout > .callout-content {
  padding-left: 27px;
  padding-right: 11px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.07);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.07);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.07);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.07);
  border-bottom-color: rgba(120, 82, 238, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(120, 82, 238, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(120, 82, 238, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(120, 82, 238, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.07);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.07);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.07);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.07);
  border-bottom-color: rgba(8, 185, 78, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 185, 78, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.07);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.07);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(244, 248, 251);
  color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space {
  background-color: rgb(244, 248, 251);
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
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(195, 203, 213, 0.3);
  color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(237, 242, 248);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(195, 203, 213, 0.3);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(195, 203, 213, 0.3);
  color: rgb(33, 33, 33);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(68, 158, 248, 0.1);
  border-bottom-color: rgba(68, 158, 248, 0.15);
  border-left-color: rgba(68, 158, 248, 0.15);
  border-right-color: rgba(68, 158, 248, 0.15);
  border-top-color: rgba(68, 158, 248, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(68, 158, 248);
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
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
}

body ::-webkit-scrollbar-corner {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
}

body ::-webkit-scrollbar-track {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(43, 145, 247);
  font-weight: 500;
  text-decoration: rgb(43, 145, 247);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(43, 145, 247);
  font-weight: 500;
  text-decoration: rgb(43, 145, 247);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}`,
    footer: `body footer {
  background-color: rgb(237, 242, 248);
  color: rgb(81, 94, 118);
}

body footer ul li a {
  color: rgb(81, 94, 118);
  text-decoration: rgb(81, 94, 118);
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
  color: rgb(81, 94, 118);
  text-decoration: rgb(81, 94, 118);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(81, 94, 118);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body li.section-li > .section .meta {
  color: rgb(81, 94, 118);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(81, 94, 118);
  text-decoration: rgb(81, 94, 118);
}

body ul.section-ul {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

body .darkmode svg {
  color: rgb(81, 94, 118);
  stroke: rgb(81, 94, 118);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

body .breadcrumb-element p {
  color: rgb(176, 184, 196);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

body .metadata {
  color: rgb(81, 94, 118);
}

body .metadata-properties {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

body .navigation-progress {
  background-color: rgb(237, 242, 248);
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
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

body kbd {
  background-color: rgb(230, 237, 244);
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

body progress {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

body sub {
  color: rgb(33, 33, 33);
  font-size: 13.6px;
}

body summary {
  color: rgb(33, 33, 33);
}

body sup {
  color: rgb(33, 33, 33);
  font-size: 13.6px;
}`,
  },
};
